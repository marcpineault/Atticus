"use client";

import { useSearchParams } from "next/navigation";
import { useState, Suspense } from "react";

function UnsubscribeContent() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email") ?? "";
  const token = searchParams.get("token") ?? "";
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  async function handleUnsubscribe() {
    try {
      const res = await fetch("/api/unsubscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, token }),
      });
      if (res.ok) setDone(true);
      else setError("Something went wrong. Please try again.");
    } catch {
      setError("Something went wrong. Please try again.");
    }
  }

  if (done) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center max-w-md px-6">
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">Unsubscribed</h1>
          <p className="text-gray-600">
            {email} has been removed from our mailing list. You won&apos;t receive any more emails from us.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center max-w-md px-6">
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">Unsubscribe</h1>
        <p className="text-gray-600 mb-6">
          Click below to unsubscribe <strong>{email}</strong> from all future emails.
        </p>
        {error && <p className="text-red-600 mb-4">{error}</p>}
        <button
          onClick={handleUnsubscribe}
          className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
        >
          Unsubscribe
        </button>
      </div>
    </div>
  );
}

export default function UnsubscribePage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-white">
        <p className="text-gray-600">Loading...</p>
      </div>
    }>
      <UnsubscribeContent />
    </Suspense>
  );
}
