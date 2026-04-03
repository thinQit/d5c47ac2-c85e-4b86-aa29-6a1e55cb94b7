import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { auth } from "@/lib/auth";
import { createReviewSchema, reviewListQuerySchema } from "@/lib/validators";

export async function GET(req: NextRequest) {
  try {
    const searchParams = Object.fromEntries(req.nextUrl.searchParams.entries());
    const parsed = reviewListQuerySchema.safeParse(searchParams);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid query parameters", issues: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { productId, sort, page, pageSize } = parsed.data;
    const orderBy = sort === "top" ? { rating: "desc" as const } : { createdAt: "desc" as const };

    const [items, total] = await Promise.all([
      db.review.findMany({
        where: { productId },
        include: {
          user: {
            select: { name: true },
          },
        },
        orderBy,
        skip: (page - 1) * pageSize,
        take: pageSize,
      }),
      db.review.count({ where: { productId } }),
    ]);

    return NextResponse.json({
      items,
      pagination: {
        page,
        pageSize,
        total,
        hasMore: page * pageSize < total,
      },
    });
  } catch (error) {
    console.error("GET /api/reviews error", error);
    return NextResponse.json({ error: "Failed to fetch reviews" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const parsed = createReviewSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid payload", issues: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const hasPurchased = await db.orderItem.findFirst({
      where: {
        productId: parsed.data.productId,
        order: {
          userId: session.user.id,
          status: "PAID" as const,
        },
      },
      select: { id: true },
    });

    if (!hasPurchased) {
      return NextResponse.json(
        { error: "Only customers with completed purchases can leave a review" },
        { status: 403 }
      );
    }

    const review = await db.review.create({
      data: {
        userId: session.user.id,
        productId: parsed.data.productId,
        rating: parsed.data.rating,
        title: parsed.data.title,
        body: parsed.data.body,
        verified: true,
      },
    });

    const aggregate = await db.review.aggregate({
      where: { productId: parsed.data.productId },
      _avg: { rating: true },
      _count: { _all: true },
    });

    await db.product.update({
      where: { id: parsed.data.productId },
      data: {
        ratingAvg: aggregate._avg.rating ?? 0,
        reviewCount: aggregate._count._all,
      },
    });

    return NextResponse.json(review, { status: 201 });
  } catch (error) {
    console.error("POST /api/reviews error", error);
    return NextResponse.json({ error: "Failed to create review" }, { status: 500 });
  }
}
