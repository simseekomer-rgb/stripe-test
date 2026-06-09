"use client";

export default function PricingPage() {
  const handleCheckout = async () => {
    try {
      const response = await fetch("/api/stripe/checkout");

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("Keine Stripe-URL erhalten");
        console.log(data);
      }
    } catch (error) {
      console.error(error);
      alert("Fehler beim Checkout");
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold">
        Stundendashboard SaaS
      </h1>

      <p className="mt-4 text-xl">
        Team Plan - 9€ pro Monat
      </p>

      <button
        onClick={handleCheckout}
        className="mt-6 rounded-lg bg-black px-6 py-3 text-white"
      >
        Jetzt abonnieren
      </button>
    </main>
  );
}