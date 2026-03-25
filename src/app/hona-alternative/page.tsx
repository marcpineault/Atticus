import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hona Alternative for Ontario Lawyers | Atticus",
  description:
    "Comparing Hona (US client communication and status update tool) with Atticus — the complete Ontario practice management platform with built-in LSO trust accounting, AI document analysis, and flat Canadian pricing.",
  openGraph: {
    title: "Hona Alternative for Ontario Lawyers",
    description:
      "Hona is a US client status communication tool. Atticus is a complete Ontario practice management platform with trust accounting, billing, AI analysis, and client communication — at $149 CAD/month.",
    type: "website",
    url: "https://getatticus.ca/hona-alternative",
  },
  alternates: { canonical: "https://getatticus.ca/hona-alternative" },
};

export default function HonaAlternativePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Hona Alternative for Ontario Lawyers",
    description:
      "Comparing Hona with Atticus for Ontario law firms — client communication, trust accounting, billing, matter management, and AI document analysis.",
    url: "https://getatticus.ca/hona-alternative",
    provider: {
      "@type": "Organization",
      name: "Atticus",
      url: "https://getatticus.ca",
    },
  };

  const reasons = [
    {
      title: "One Platform, Not a Point Solution",
      body: "Hona is a client status communication add-on — you still need separate software for billing, trust accounting, and matter management. Atticus replaces all of those tools in one platform.",
    },
    {
      title: "LSO By-Law 9 Trust Accounting",
      body: "Hona has no trust accounting functionality. Atticus includes LSO By-Law 9 compliant trust accounting with three-way reconciliation — the foundation of Ontario law firm compliance.",
    },
    {
      title: "AI Document Analysis",
      body: "Atticus uses AI to surface key clauses, deadlines, and obligations from uploaded contracts and court documents. Hona focuses on client communication and has no document analysis capabilities.",
    },
    {
      title: "Built for Ontario, Not US Firms",
      body: "Hona is built for the US legal market. Atticus is purpose-built for Ontario — LSO compliance, CAD billing with HST, Ontario court deadlines, and Canadian data residency.",
    },
    {
      title: "Flat-Fee All-In Pricing",
      body: "Hona charges per-user fees (USD) on top of your existing practice management software costs. Atticus is $149 CAD/month for your entire firm — no add-ons, no separate tools needed.",
    },
  ];

  const comparisons = [
    { feature: "Product type", hona: "Client communication add-on", atticus: "Complete practice management platform" },
    { feature: "Trust accounting", hona: "None", atticus: "LSO By-Law 9 compliant" },
    { feature: "Billing", hona: "None", atticus: "HST-compliant CAD billing" },
    { feature: "Matter management", hona: "None", atticus: "Full Ontario matter management" },
    { feature: "Client communication", hona: "Yes (core product)", atticus: "Yes (included)" },
    { feature: "AI document analysis", hona: "None", atticus: "Built-in" },
    { feature: "Primary market", hona: "US law firms", atticus: "Ontario law firms" },
    { feature: "Pricing", hona: "USD per user (plus separate PM software)", atticus: "$149 CAD/month (entire firm)" },
    { feature: "Canadian data residency", hona: "US infrastructure", atticus: "Canadian infrastructure" },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Hero */}
        <section className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full bg-teal-100 px-4 py-1 text-sm font-medium text-teal-700">
            Hona Alternative
          </span>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Hona Alternative for Ontario Lawyers
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-600">
            Hona is a client communication add-on for US law firms. Ontario lawyers who want
            a complete practice management solution — trust accounting, billing, matter management,
            and client communication in one platform — choose Atticus.
          </p>
          <a
            href="/sign-up"
            className="inline-block rounded-lg bg-blue-600 px-8 py-3 text-lg font-semibold text-white shadow hover:bg-blue-700"
          >
            Start Free Trial
          </a>
        </section>

        {/* Comparison table */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">
            Hona vs Atticus — Side by Side
          </h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold text-gray-700">Feature</th>
                  <th className="px-6 py-4 text-left font-semibold text-gray-700">Hona</th>
                  <th className="px-6 py-4 text-left font-semibold text-blue-700">Atticus</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {comparisons.map((row) => (
                  <tr key={row.feature} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">{row.feature}</td>
                    <td className="px-6 py-4 text-gray-600">{row.hona}</td>
                    <td className="px-6 py-4 font-medium text-blue-700">{row.atticus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* What is Hona */}
        <section className="mb-16">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">What Is Hona?</h2>
          <p className="mb-4 text-gray-600">
            Hona is a client experience platform designed to keep law firm clients informed
            about the status of their cases through automated status updates, milestone
            notifications, and client-facing portals. It integrates with popular US practice
            management software like Clio, MyCase, and Filevine to pull case data and
            send automated updates to clients.
          </p>
          <p className="mb-4 text-gray-600">
            As a US product, Hona is designed for US law firms and their clients. It does
            not offer trust accounting, billing, matter management, or document analysis —
            it is purely a client communication layer. Ontario law firms would still need
            separate tools for all other practice management functions.
          </p>
          <p className="text-gray-600">
            For Ontario lawyers looking for a complete practice management solution that
            includes client communication alongside billing, trust accounting, and AI document
            analysis, Atticus offers all of these capabilities in one platform at $149 CAD/month
            per lawyer per month.
          </p>
        </section>

        {/* Why Atticus */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">
            Why Ontario Lawyers Choose Atticus Over Hona
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((r) => (
              <div key={r.title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="mb-2 text-base font-semibold text-gray-900">{r.title}</h3>
                <p className="text-sm text-gray-600">{r.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-2xl bg-blue-600 px-8 py-12 text-center text-white">
          <h2 className="mb-3 text-3xl font-bold">The Complete Ontario Alternative to Hona</h2>
          <p className="mb-8 text-blue-100">
            Replace your entire practice management stack with one Ontario-built platform —
            trust accounting, billing, AI document analysis, and client communication included.
          </p>
          <a
            href="/sign-up"
            className="inline-block rounded-lg bg-white px-8 py-3 text-lg font-semibold text-blue-600 shadow hover:bg-blue-50"
          >
            Start Free Trial — $149 CAD/month
          </a>
        </section>
      </main>
    </>
  );
}
