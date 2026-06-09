"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = async () => {
    const { error } = await supabase.auth.signUp({
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
    <main className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold">
        Registrieren
      </h1>

      <input
        type="email"
        placeholder="E-Mail"
        className="border p-3 rounded text-black"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Passwort"
        className="border p-3 rounded text-black"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        onClick={signUp}
        className="bg-green-600 text-white px-6 py-3 rounded"
      >
        Registrieren
      </button>
    </main>
  );
}