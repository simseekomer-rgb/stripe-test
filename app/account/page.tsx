"use client";

export default function AccountPage() {
  const openPortal = async () => {
    const response = await fetch("/api/stripe/portal");

    const data = await response.json();

    window.location.href = data.url;
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-6">
        Kundenkonto
      </h1>

      <button
        onClick={openPortal}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg"
      >
        Abo verwalten
      </button>
    </main>
  );
}