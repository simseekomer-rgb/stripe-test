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
    <main className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="max-w-md w-full rounded-2xl border-2 border-indigo-600 p-8 relative shadow-sm">

        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-xs px-3 py-1 rounded-full">
          Beliebteste
        </span>

        <h2 className="text-2xl font-bold text-gray-900">
          Pro
        </h2>

        <p className="text-4xl font-bold text-gray-900 mt-4">
          9€
          <span className="text-base font-normal text-gray-400">
            /Monat
          </span>
        </p>

        <ul className="mt-6 space-y-3 text-sm text-gray-500">
          <li>✓ Unbegrenzte Projekte</li>
          <li>✓ Bis zu 15 Nutzer</li>
          <li>✓ Dashboard & Reports</li>
          <li>✓ Export als CSV</li>
        </ul>

        <button
          onClick={handleCheckout}
          className="mt-8 w-full bg-indigo-600 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-indigo-700 transition"
        >
          Jetzt abonnieren
        </button>

      </div>
    </main>
  );
}