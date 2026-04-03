import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

type Params = { params: { slug: string } };

export async function GET(_req: NextRequest, { params }: Params) {
  try {
    const product = await db.product.findUnique({
      where: { slug: params.slug },
      include: {
        images: { orderBy: { position: "asc" as const } },
        variants: { orderBy: { size: "asc" as const } },
        reviews: {
          select: { rating: true },
          take: 2000,
        },
      },
    });

    if (!product || !product.isActive) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    const ratingSummary = product.reviews.reduce(
      (acc, r) => {
        acc.total += 1;
        acc.sum += r.rating;
        acc.breakdown[r.rating] = (acc.breakdown[r.rating] ?? 0) + 1;
        return acc;
      },
      { total: 0, sum: 0, breakdown: {} as Record<number, number> }
    );

    return NextResponse.json({
      ...product,
      ratingSummary: {
        average: ratingSummary.total ? ratingSummary.sum / ratingSummary.total : 0,
        total: ratingSummary.total,
        breakdown: ratingSummary.breakdown,
      },
    });
  } catch (error) {
    console.error("GET /api/products/[slug] error", error);
    return NextResponse.json({ error: "Failed to fetch product" }, { status: 500 });
  }
}
