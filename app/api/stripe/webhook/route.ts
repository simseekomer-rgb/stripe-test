import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: Request) {
  const body = await req.text();

  try {
    const event = JSON.parse(body);

    switch (event.type) {
      case "checkout.session.completed":
        console.log("✅ Neues Abo abgeschlossen");
        break;

      case "customer.subscription.updated":
        console.log("🔄 Abo aktualisiert");
        break;

      case "customer.subscription.deleted":
        console.log("❌ Abo gekündigt");
        break;

      default:
        console.log(`Unhandled event: ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Webhook Fehler" },
      { status: 400 }
    );
  }
}