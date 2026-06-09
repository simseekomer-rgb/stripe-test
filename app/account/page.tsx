"use client";

export default function AccountPage() {
  const openPortal = async () => {
    const response = await fetch("/api/stripe/portal");

    const data = await response.json();

    window.location.href = data.url;
  };

  return (
    <main className="min-h-screen bg-gray-50 p-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-900 mb-2">
          Kontoverwaltung ⚙️
        </h1>

        <p className="text-gray-500 mb-10">
          Verwalte dein Stripe-Abonnement und deine Kontoeinstellungen.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-2xl border p-6 shadow-sm">
            <p className="text-gray-500 text-sm">
              Aktiver Tarif
            </p>

            <h2 className="text-3xl font-bold mt-2">
              Team Plan
            </h2>

            <p className="text-green-500 mt-2">
              Aktiv
            </p>
          </div>

          <div className="bg-white rounded-2xl border p-6 shadow-sm">
            <p className="text-gray-500 text-sm">
              Abrechnung
            </p>

            <h2 className="text-3xl font-bold mt-2">
              9€
            </h2>

            <p className="text-gray-500 mt-2">
              pro Monat
            </p>
          </div>

          <div className="bg-white rounded-2xl border p-6 shadow-sm">
            <p className="text-gray-500 text-sm">
              Status
            </p>

            <h2 className="text-3xl font-bold mt-2 text-green-500">
              Aktiv
            </h2>

            <p className="text-gray-500 mt-2">
              Stripe verbunden
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl border p-8 shadow-sm">
          <h2 className="text-2xl font-bold mb-4">
            Stripe Kundenportal
          </h2>

          <p className="text-gray-500 mb-6">
            Hier kannst du dein Abonnement verwalten,
            Zahlungsdaten ändern oder kündigen.
          </p>

          <button
            onClick={openPortal}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg"
          >
            Abo verwalten
          </button>
        </div>

        <div className="mt-8">
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