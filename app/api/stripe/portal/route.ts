import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

export async function GET() {
  try {
    const customers = await stripe.customers.list({
      limit: 1,
    });

    const customer = customers.data[0];

    if (!customer) {
      return NextResponse.json(
        { error: "Kein Kunde gefunden" },
        { status: 404 }
      );
    }

    const session = await stripe.billingPortal.sessions.create({
      customer: customer.id,
      return_url: "http://localhost:3000",
    });

    return NextResponse.json({
      url: session.url,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Portal Fehler" },
      { status: 500 }
    );
  }
}