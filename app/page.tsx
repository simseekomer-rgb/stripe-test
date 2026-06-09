export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <h1 className="text-6xl font-bold mb-6">
        Stundendashboard SaaS
      </h1>

      <p className="text-xl mb-8">
        Zeiterfassung mit Login, Abonnement und Stripe
      </p>

      <div className="flex gap-4">
        <a
          href="/register"
          className="bg-green-600 px-6 py-3 rounded"
        >
          Registrieren
        </a>

        <a
          href="/login"
          className="bg-blue-600 px-6 py-3 rounded"
        >
          Login
        </a>

        <a
          href="/pricing"
          className="bg-purple-600 px-6 py-3 rounded"
        >
          Abo kaufen
        </a>
      </div>
    </main>
  );
}