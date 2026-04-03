import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET(req: NextRequest) {
  try {
    const q = req.nextUrl.searchParams.get("q")?.trim();
    if (!q || q.length < 2) {
      return NextResponse.json({ products: [], collections: [] });
    }

    const products = await db.product.findMany({
      where: {
        isActive: true,
        OR: [
          { name: { contains: q, mode: "insensitive" as const } },
          { collection: { contains: q, mode: "insensitive" as const } },
        ],
      },
      select: {
        id: true,
        slug: true,
        name: true,
        collection: true,
      },
      orderBy: { reviewCount: "desc" as const },
      take: 8,
    });

    const collections = Array.from(new Set(products.map((p) => p.collection))).slice(0, 5);

    return NextResponse.json({ products, collections });
  } catch (error) {
    console.error("GET /api/search/suggestions error", error);
    return NextResponse.json({ error: "Failed to fetch suggestions" }, { status: 500 });
  }
}
