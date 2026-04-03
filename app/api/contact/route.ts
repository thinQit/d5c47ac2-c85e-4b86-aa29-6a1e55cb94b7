import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { auth } from "@/lib/auth";
import { contactSchema } from "@/lib/validators";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid payload", issues: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const session = await auth();

    const message = await db.contactMessage.create({
      data: {
        userId: session?.user?.id,
        name: parsed.data.name,
        email: parsed.data.email,
        topic: parsed.data.topic,
        orderNumber: parsed.data.orderNumber,
        message: parsed.data.message,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Thanks—your message is in. We’ll get back to you within 1 business day.",
        id: message.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST /api/contact error", error);
    return NextResponse.json({ error: "Failed to submit contact form" }, { status: 500 });
  }
}
