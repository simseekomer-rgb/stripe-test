"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Dashboard() {
  const [email, setEmail] = useState("");

  useEffect(() => {
    const getSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (session?.user?.email) {
        setEmail(session.user.email);
      }
    };

    getSession();
  }, []);

  const logout = async () => {
    await supabase.auth.signOut();
    window.location.href = "/login";
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 p-6">
        <h1 className="text-2xl font-bold text-indigo-600 mb-10">
          WorkLog
        </h1>

        <nav className="flex flex-col gap-3">
          <a
            href="/dashboard"
            className="bg-indigo-600 text-white px-4 py-3 rounded-lg"
          >
            Dashboard
          </a>

          <a
            href="#"
            className="text-gray-600 hover:bg-gray-100 px-4 py-3 rounded-lg"
          >
            Projekte
          </a>

          <a
            href="#"
            className="text-gray-600 hover:bg-gray-100 px-4 py-3 rounded-lg"
          >
            Team
          </a>

          <a
            href="/pricing"
            className="text-gray-600 hover:bg-gray-100 px-4 py-3 rounded-lg"
          >
            Abonnement
          </a>

          <a
            href="/account"
            className="text-gray-600 hover:bg-gray-100 px-4 py-3 rounded-lg"
          >
            Einstellungen
          </a>
        </nav>
      </aside>

      {/* Content */}
      <main className="flex-1 p-10">
        <h1 className="text-5xl font-bold text-gray-900 mb-2">
          Willkommen zurück 👋
        </h1>

        <p className="text-gray-500 mb-10">
          Hier ist deine Übersicht für diese Woche.
        </p>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-2xl border p-6 shadow-sm">
            <p className="text-gray-500 text-sm">Aktives Abo</p>
            <h2 className="text-3xl font-bold mt-2">
              Team Plan
            </h2>
            <p className="text-green-500 mt-2">Aktiv</p>
          </div>

          <div className="bg-white rounded-2xl border p-6 shadow-sm">
            <p className="text-gray-500 text-sm">Projekte</p>
            <h2 className="text-3xl font-bold mt-2">1</h2>
            <p className="text-gray-500 mt-2">Verfügbar</p>
          </div>

          <div className="bg-white rounded-2xl border p-6 shadow-sm">
            <p className="text-gray-500 text-sm">Status</p>
            <h2 className="text-3xl font-bold mt-2 text-green-500">
              Online
            </h2>
            <p className="text-gray-500 mt-2">
              Supabase verbunden
            </p>
          </div>
        </div>

        {/* Abo + User */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-2xl border p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-4">
              Abonnement
            </h2>

            <p className="text-gray-500 mb-6">
              Kaufe oder verwalte dein Stripe-Abonnement.
            </p>

            <div className="flex gap-4">
              <a
                href="/pricing"
                className="bg-indigo-600 text-white px-6 py-3 rounded-lg"
              >
                Abo kaufen
              </a>

              <a
                href="/account"
                className="border px-6 py-3 rounded-lg"
              >
                Abo verwalten
              </a>
            </div>
          </div>

          <div className="bg-white rounded-2xl border p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-4">
              Konto
            </h2>

            <p className="text-gray-500 mb-3">
              Aktuell angemeldet als:
            </p>

            <p className="font-semibold text-indigo-600">
              {email}
            </p>
          </div>
        </div>

        {/* Chart Bereich */}
        <div className="bg-white rounded-2xl border p-8 shadow-sm">
          <h2 className="text-2xl font-bold mb-6">
            Wochenübersicht
          </h2>

          <div className="flex items-end gap-4 h-48">
            <div className="bg-indigo-500 w-full h-14 rounded-t"></div>
            <div className="bg-indigo-500 w-full h-20 rounded-t"></div>
            <div className="bg-indigo-500 w-full h-16 rounded-t"></div>
            <div className="bg-indigo-500 w-full h-28 rounded-t"></div>
            <div className="bg-indigo-500 w-full h-24 rounded-t"></div>
          </div>
        </div>

        <button
          onClick={logout}
          className="mt-8 bg-red-600 text-white px-6 py-3 rounded-lg"
        >
          Logout
        </button>
      </main>
    </div>
  );
}