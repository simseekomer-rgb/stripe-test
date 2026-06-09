"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
      return;
    }

    window.location.href = "/dashboard";
  };

  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="w-full max-w-md">

        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900">
            Willkommen zurück
          </h1>

          <p className="mt-3 text-gray-500">
            Melde dich bei deinem WorkLog Konto an.
          </p>
        </div>

        <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">

          <label className="block text-sm font-medium text-gray-700 mb-2">
            E-Mail
          </label>

          <input
            type="email"
            placeholder="max@beispiel.de"
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-black focus:outline-none focus:ring-2 focus:ring-indigo-600"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className="block text-sm font-medium text-gray-700 mt-6 mb-2">
            Passwort
          </label>

          <input
            type="password"
            placeholder="********"
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-black focus:outline-none focus:ring-2 focus:ring-indigo-600"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={signIn}
            className="w-full mt-6 bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700 transition"
          >
            Anmelden
          </button>

          <p className="mt-6 text-center text-sm text-gray-500">
            Noch kein Konto?
            <a
              href="/register"
              className="ml-1 text-indigo-600 hover:text-indigo-700"
            >
              Registrieren
            </a>
          </p>

        </div>
      </div>
    </main>
  );
}