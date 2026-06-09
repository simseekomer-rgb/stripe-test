import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

export async function GET() {
  const session = await stripe.checkout.sessions.create({
    mode: "subscription",

    line_items: [
      {
        price: "price_1TgCEQFmYmT1GL1tA9vrRTOL",
        quantity: 1,
      },
    ],

    success_url: "http://localhost:3000/success",
    cancel_url: "http://localhost:3000/pricing",
  });

  return NextResponse.json({
    url: session.url,
  });
}