import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { createCheckoutSessionSchema } from "@/lib/validators";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2024-06-20",
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = createCheckoutSessionSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid payload", issues: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const session = await auth();
    const { items, successUrl, cancelUrl, shippingOption } = parsed.data;

    const variants = await db.productVariant.findMany({
      where: { id: { in: items.map((i) => i.variantId).filter(Boolean) as string[] } },
      include: { product: true },
    });

    const products = await db.product.findMany({
      where: { id: { in: items.map((i) => i.productId) }, isActive: true },
    });

    const productMap = new Map(products.map((p) => [p.id, p]));
    const variantMap = new Map(variants.map((v) => [v.id, v]));

    const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] = [];
    let subtotal = 0;

    for (const item of items) {
      const product = productMap.get(item.productId);
      if (!product) {
        return NextResponse.json({ error: "Product not found in cart" }, { status: 400 });
      }

      if (item.variantId) {
        const variant = variantMap.get(item.variantId);
        if (!variant || variant.productId !== product.id || variant.inventory < item.quantity) {
          return NextResponse.json({ error: "Variant is invalid or out of stock" }, { status: 400 });
        }
      }

      subtotal += product.price * item.quantity;

      line_items.push({
        quantity: item.quantity,
        price_data: {
          currency: product.currency.toLowerCase(),
          product_data: {
            name: product.name,
            metadata: {
              productId: product.id,
              variantId: item.variantId ?? "",
            },
          },
          unit_amount: product.price,
        },
      });
    }

    const shipping = shippingOption === "express" ? 1495 : subtotal >= 7500 ? 0 : 695;

    const checkout = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items,
      success_url: successUrl,
      cancel_url: cancelUrl,
      customer_email: session?.user?.email ?? undefined,
      metadata: {
        userId: session?.user?.id ?? "",
        shippingOption,
      },
      shipping_options: [
        {
          shipping_rate_data: {
            type: "fixed_amount",
            fixed_amount: { amount: shipping, currency: "usd" },
            display_name: shippingOption === "express" ? "Express (1–2 business days)" : "Standard (3–5 business days)",
          },
        },
      ],
      automatic_tax: { enabled: true },
      allow_promotion_codes: true,
    });

    await db.order.create({
      data: {
        userId: session?.user?.id,
        email: session?.user?.email ?? "guest@checkout.local",
        status: "PENDING",
        subtotal,
        shipping,
        tax: 0,
        total: subtotal + shipping,
        currency: "USD",
        stripeCheckoutSessionId: checkout.id,
        items: {
          create: items.map((item) => {
            const product = productMap.get(item.productId)!;
            const variant = item.variantId ? variantMap.get(item.variantId) : null;
            return {
              productId: product.id,
              variantId: item.variantId,
              name: product.name,
              size: variant?.size,
              color: variant?.color,
              unitPrice: product.price,
              quantity: item.quantity,
              lineTotal: product.price * item.quantity,
            };
          }),
        },
      },
    });

    return NextResponse.json({ url: checkout.url });
  } catch (error) {
    console.error("POST /api/checkout/create-session error", error);
    return NextResponse.json({ error: "Failed to create checkout session" }, { status: 500 });
  }
}
