import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Caseline Alternative for Ontario Lawyers | Atticus",
  description:
    "Comparing Caseline (Ontario court e-filing and digital exhibit platform) with Atticus — the complete Ontario practice management platform with trust accounting, AI document analysis, and flat Canadian pricing.",
  openGraph: {
    title: "Caseline Alternative for Ontario Lawyers",
    description:
      "Caseline is Ontario's court e-filing and digital exhibit platform. Atticus is the complete practice management solution — trust accounting, billing, matter management, and AI document analysis.",
    type: "website",
    url: "https://getatticus.ca/caseline-alternative",
  },
  alternates: { canonical: "https://getatticus.ca/caseline-alternative" },
};

export default function CaselineAlternativePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Caseline Alternative for Ontario Lawyers",
    description:
      "Comparing Caseline with Atticus for Ontario law firms — practice management, trust accounting, billing, and AI document analysis.",
    url: "https://getatticus.ca/caseline-alternative",
    provider: {
      "@type": "Organization",
      name: "Atticus",
      url: "https://getatticus.ca",
    },
  };

  const reasons = [
    {
      title: "Practice Management, Not Just Court Filing",
      body: "Caseline is a court e-filing and digital exhibit platform — not a practice management system. Atticus provides the complete back-office infrastructure: billing, trust accounting, matter management, and AI document analysis.",
    },
    {
      title: "LSO By-Law 9 Trust Accounting",
      body: "Atticus includes LSO By-Law 9 compliant trust accounting with three-way reconciliation, mixed-fund prevention, and proper ledger maintenance. Caseline has no trust accounting functionality.",
    },
    {
      title: "AI Document Analysis",
      body: "Atticus uses AI to surface key clauses, deadlines, and obligations from uploaded contracts and court documents — before they reach the Caseline filing stage. Caseline has no AI analysis capabilities.",
    },
    {
      title: "Billing and Time Tracking",
      body: "Atticus includes time tracking, HST-compliant invoicing, and accounts receivable management. Caseline has no billing functionality — firms using Caseline still need a separate billing system.",
    },
    {
      title: "Flat-Fee Canadian Pricing",
      body: "Atticus is $149 CAD/month for your entire firm — covering billing, trust accounting, matter management, and AI analysis. Caseline charges transaction or subscription fees for court filing services.",
    },
  ];

  const comparisons = [
    { feature: "Product type", caseline: "Court e-filing & digital exhibits", atticus: "Complete practice management platform" },
    { feature: "Trust accounting", caseline: "None", atticus: "LSO By-Law 9 compliant" },
    { feature: "Billing", caseline: "None", atticus: "HST-compliant CAD billing" },
    { feature: "Matter management", caseline: "Case/matter file organization", atticus: "Full Ontario matter management" },
    { feature: "AI document analysis", caseline: "None", atticus: "Built-in — clauses, deadlines, summaries" },
    { feature: "Court integration", caseline: "Yes (core product)", atticus: "Deadline tracking + court form support" },
    { feature: "Canadian platform", caseline: "Yes (Ontario courts)", atticus: "Yes (Ontario-built)" },
    { feature: "Pricing", caseline: "Transaction/subscription fees", atticus: "$149 CAD/month (entire firm)" },
    { feature: "Ontario data residency", caseline: "Ontario court system", atticus: "Canadian cloud infrastructure" },
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
          <span className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-700">
            Caseline Alternative
          </span>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Caseline Alternative for Ontario Lawyers
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-600">
            Caseline handles Ontario court e-filing and digital exhibits. But your firm also
            needs billing, trust accounting, matter management, and AI document analysis.
            Atticus is the complete Ontario practice management platform built for LSO compliance.
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
            Caseline vs Atticus — Side by Side
          </h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold text-gray-700">Feature</th>
                  <th className="px-6 py-4 text-left font-semibold text-gray-700">Caseline</th>
                  <th className="px-6 py-4 text-left font-semibold text-blue-700">Atticus</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {comparisons.map((row) => (
                  <tr key={row.feature} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">{row.feature}</td>
                    <td className="px-6 py-4 text-gray-600">{row.caseline}</td>
                    <td className="px-6 py-4 font-medium text-blue-700">{row.atticus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* What is Caseline */}
        <section className="mb-16">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">What Is Caseline?</h2>
          <p className="mb-4 text-gray-600">
            Caseline is Ontario&apos;s official court e-filing and digital exhibit management platform,
            used by the Ontario Court of Justice and Superior Court of Justice for civil proceedings,
            family law matters, and criminal proceedings. It allows lawyers to upload and organize
            exhibits, share documents with opposing parties, and present evidence in court proceedings
            digitally.
          </p>
          <p className="mb-4 text-gray-600">
            Caseline was adopted by the Ontario court system to reduce paper filing and streamline
            the management of evidence during hearings. During COVID-19, Caseline became central
            to virtual and hybrid hearings. Its use is required for many Ontario proceedings.
          </p>
          <p className="text-gray-600">
            Importantly, Caseline is not a practice management platform. It does not provide
            billing, trust accounting, time tracking, matter management, or document drafting
            tools. Ontario lawyers using Caseline still need a separate practice management
            system for all back-office functions. Atticus provides all of those functions in
            one Ontario-built platform at $149 CAD/month per lawyer per month.
          </p>
        </section>

        {/* Why Atticus */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">
            Why Ontario Lawyers Choose Atticus for Practice Management
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
          <h2 className="mb-3 text-3xl font-bold">Complete Practice Management for Ontario Litigators</h2>
          <p className="mb-8 text-blue-100">
            Use Caseline for court filings. Use Atticus for everything else — trust accounting,
            billing, matter management, and AI document analysis in one Ontario-built platform.
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
