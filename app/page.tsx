export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-5 border-b border-gray-100">
        <span className="text-xl font-semibold text-indigo-600">
          WorkLog
        </span>

        <div className="flex items-center gap-4">
          <a
            href="/login"
            className="text-sm text-gray-500 hover:text-gray-800"
          >
            Login
          </a>

          <a
            href="/register"
            className="text-sm bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
          >
            Sign up free
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="flex flex-col items-center text-center px-6 py-28">
        <h1 className="text-5xl font-bold text-gray-900 max-w-2xl leading-tight">
          Track time.
          <span className="text-indigo-600">
            {" "}Stay productive.
          </span>
        </h1>

        <p className="mt-6 text-lg text-gray-500 max-w-xl">
          WorkLog hilft Teams dabei, Arbeitszeiten auf Projekte und Aufgaben
          zu erfassen – einfach, schnell und übersichtlich.
        </p>

        <div className="mt-10 flex gap-4">
          <a
            href="/register"
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-indigo-700"
          >
            Kostenlos starten
          </a>

          <a
            href="/pricing"
            className="border border-gray-200 text-gray-700 px-6 py-3 rounded-lg text-sm font-medium hover:bg-gray-50"
          >
            Preise ansehen
          </a>
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-50 px-6 py-20">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Alles was dein Team braucht
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="bg-white rounded-2xl p-8 border border-gray-100">
              <div className="text-3xl mb-4">⏱️</div>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Zeiterfassung
              </h3>

              <p className="text-gray-500 text-sm">
                Starte einen Timer oder trage Zeiten manuell ein.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-100">
              <div className="text-3xl mb-4">📊</div>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Dashboard & Reports
              </h3>

              <p className="text-gray-500 text-sm">
                Behalte Projekte und Arbeitszeiten im Blick.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-100">
              <div className="text-3xl mb-4">👥</div>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Teamverwaltung
              </h3>

              <p className="text-gray-500 text-sm">
                Verwalte Nutzer, Rollen und Projekte zentral.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto bg-indigo-600 rounded-3xl p-12 text-center">

          <h2 className="text-4xl font-bold text-white">
            Bereit loszulegen?
          </h2>

          <p className="text-indigo-100 mt-4">
            Starte jetzt mit WorkLog und verwalte dein Team effizient.
          </p>

          <a
            href="/pricing"
            className="inline-block mt-8 bg-white text-indigo-600 px-8 py-3 rounded-lg font-medium"
          >
            Jetzt abonnieren
          </a>

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 px-8 py-10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

          <span className="text-lg font-semibold text-indigo-600">
            WorkLog
          </span>

          <p className="text-sm text-gray-400">
            © 2026 WorkLog. Alle Rechte vorbehalten.
          </p>

        </div>
      </footer>

    </main>
  );
}