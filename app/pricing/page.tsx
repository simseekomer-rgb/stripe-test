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
      }
    } catch (error) {
      console.error(error);
      alert("Fehler beim Checkout");
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 p-10">
      <div className="max-w-6xl mx-auto">

        <div className="mb-10">
          <h1 className="text-5xl font-bold text-gray-900">
            Preise & Abonnements
          </h1>

          <p className="text-gray-500 mt-2">
            Wähle den passenden Tarif für dein Team.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Free */}
          <div className="bg-white rounded-2xl border p-8 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900">
              Free
            </h3>

            <p className="text-4xl font-bold mt-4">
              0€
              <span className="text-base text-gray-400">
                /Monat
              </span>
            </p>

            <ul className="mt-6 space-y-3 text-gray-500">
              <li>✓ 1 Projekt</li>
              <li>✓ Bis zu 3 Nutzer</li>
              <li>✓ Basis Zeiterfassung</li>
            </ul>

            <button className="mt-8 w-full border border-indigo-600 text-indigo-600 py-3 rounded-lg">
              Kostenlos starten
            </button>
          </div>

          {/* Pro */}
          <div className="bg-white rounded-2xl border-2 border-indigo-600 p-8 shadow-sm relative">

            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-xs px-3 py-1 rounded-full">
              Beliebteste
            </span>

            <h3 className="text-xl font-bold text-gray-900">
              Pro
            </h3>

            <p className="text-4xl font-bold mt-4">
              9€
              <span className="text-base text-gray-400">
                /Monat
              </span>
            </p>

            <ul className="mt-6 space-y-3 text-gray-500">
              <li>✓ Unbegrenzte Projekte</li>
              <li>✓ Bis zu 15 Nutzer</li>
              <li>✓ Dashboard & Reports</li>
              <li>✓ Export als CSV</li>
            </ul>

            <button
              onClick={handleCheckout}
              className="mt-8 w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700"
            >
              Jetzt abonnieren
            </button>
          </div>

          {/* Enterprise */}
          <div className="bg-white rounded-2xl border p-8 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900">
              Enterprise
            </h3>

            <p className="text-4xl font-bold mt-4">
              Individuell
            </p>

            <ul className="mt-6 space-y-3 text-gray-500">
              <li>✓ Unbegrenzte Nutzer</li>
              <li>✓ RBAC & Rollen</li>
              <li>✓ Priority Support</li>
              <li>✓ Custom Integrationen</li>
            </ul>

            <button className="mt-8 w-full border py-3 rounded-lg">
              Kontakt aufnehmen
            </button>
          </div>

        </div>

        <div className="mt-10">
          <a
            href="/dashboard"
            className="text-indigo-600 hover:underline"
          >
            ← Zurück zum Dashboard
          </a>
        </div>

      </div>
    </main>
  );
}