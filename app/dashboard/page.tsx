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
    <main className="min-h-screen flex flex-col items-center justify-center gap-6">
      <h1 className="text-5xl font-bold">
        Dashboard
      </h1>

      <p>Willkommen zurück:</p>

      <p className="text-green-500 font-bold">
        {email}
      </p>

      <div className="flex gap-4">
        <a
          href="/pricing"
          className="bg-blue-600 px-6 py-3 rounded text-white"
        >
          Abo kaufen
        </a>

        <a
          href="/account"
          className="bg-green-600 px-6 py-3 rounded text-white"
        >
          Abo verwalten
        </a>
      </div>

      <button
        onClick={logout}
        className="bg-red-600 px-6 py-3 rounded text-white"
      >
        Logout
      </button>
    </main>
  );
}