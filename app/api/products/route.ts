import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { productQuerySchema } from "@/lib/validators";

export async function GET(req: NextRequest) {
  try {
    const searchParams = Object.fromEntries(req.nextUrl.searchParams.entries());
    const parsed = productQuerySchema.safeParse(searchParams);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid query parameters", issues: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { collection, size, color, priceMin, priceMax, rating, q, inStock, sort, page, pageSize } = parsed.data;

    const where: any = {
      isActive: true,
      ...(collection ? { collection } : {}),
      ...(priceMin !== undefined || priceMax !== undefined
        ? {
            price: {
              ...(priceMin !== undefined ? { gte: priceMin } : {}),
              ...(priceMax !== undefined ? { lte: priceMax } : {}),
            },
          }
        : {}),
      ...(rating !== undefined ? { ratingAvg: { gte: rating } } : {}),
      ...(q
        ? {
            OR: [
              { name: { contains: q, mode: "insensitive" as const } },
              { description: { contains: q, mode: "insensitive" as const } },
            ],
          }
        : {}),
      ...(size || color || inStock
        ? {
            variants: {
              some: {
                ...(size ? { size } : {}),
                ...(color ? { color } : {}),
                ...(inStock ? { inventory: { gt: 0 } } : {}),
              },
            },
          }
        : {}),
    };

    const orderBy =
      sort === "price-asc"
        ? { price: "asc" as const }
        : sort === "top-rated"
        ? { ratingAvg: "desc" as const }
        : sort === "best-sellers"
        ? { reviewCount: "desc" as const }
        : { createdAt: "desc" as const };

    const [items, total] = await Promise.all([
      db.product.findMany({
        where,
        include: {
          images: { orderBy: { position: "asc" as const }, take: 1 },
          variants: true,
        },
        orderBy,
        skip: (page - 1) * pageSize,
        take: pageSize,
      }),
      db.product.count({ where }),
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
    console.error("GET /api/products error", error);
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 });
  }
}
