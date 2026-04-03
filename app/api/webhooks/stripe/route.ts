import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { db } from "@/lib/db";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2024-06-20",
});

export async function POST(req: NextRequest) {
  const sig = req.headers.get("stripe-signature");
  if (!sig) {
    return NextResponse.json({ error: "Missing signature" }, { status: 400 });
  }

  try {
    const rawBody = await req.text();
    const event = stripe.webhooks.constructEvent(
      rawBody,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET as string
    );

    if (event.type === "checkout.session.completed") {
      const session = event.data.object as Stripe.Checkout.Session;

      const order = await db.order.findUnique({
        where: { stripeCheckoutSessionId: session.id },
        include: { items: true },
      });

      if (order && order.status !== "PAID") {
        await db.$transaction(async (tx) => {
          await tx.order.update({
            where: { id: order.id },
            data: {
              status: "PAID",
              stripePaymentIntentId:
                typeof session.payment_intent === "string"
                  ? session.payment_intent
                  : null,
              tax: Math.max(0, (session.amount_total ?? 0) - order.subtotal - order.shipping + order.discount),
              total: session.amount_total ?? order.total,
            },
          });

          for (const item of order.items) {
            if (item.variantId) {
              await tx.productVariant.update({
                where: { id: item.variantId },
                data: {
                  inventory: {
                    decrement: item.quantity,
                  },
                },
              });
            }
          }

          if (order.userId) {
            await tx.cart.deleteMany({
              where: { userId: order.userId },
            });
          }
        });
      }
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("POST /api/webhooks/stripe error", error);
    return NextResponse.json({ error: "Webhook handler failed" }, { status: 400 });
  }
}
