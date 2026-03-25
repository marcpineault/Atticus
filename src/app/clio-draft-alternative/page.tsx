import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clio Draft Alternative for Ontario Lawyers | Atticus",
  description:
    "Comparing Clio Draft (Clio's document automation product) with Atticus — the complete Ontario practice management platform with AI document analysis, trust accounting, and flat Canadian pricing.",
  openGraph: {
    title: "Clio Draft Alternative for Ontario Lawyers",
    description:
      "Clio Draft is a document automation add-on at additional cost. Atticus includes AI document analysis as part of one flat-fee Ontario practice management platform.",
    type: "website",
    url: "https://getatticus.ca/clio-draft-alternative",
  },
  alternates: { canonical: "https://getatticus.ca/clio-draft-alternative" },
};

export default function ClioDraftAlternativePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Clio Draft Alternative for Ontario Lawyers",
    description:
      "Comparing Clio Draft with Atticus for Ontario law firms — AI document analysis, trust accounting, billing, and matter management.",
    url: "https://getatticus.ca/clio-draft-alternative",
    provider: {
      "@type": "Organization",
      name: "Atticus",
      url: "https://getatticus.ca",
    },
  };

  const reasons = [
    {
      title: "AI Analysis Included, Not an Add-On",
      body: "Clio Draft is an additional product layered on top of Clio Manage at additional cost. Atticus includes AI document analysis as part of the core platform — no add-ons, no upsells.",
    },
    {
      title: "Ontario-Specific Document Analysis",
      body: "Atticus&apos;s AI is trained to surface Ontario-specific information: limitation dates under the Limitations Act 2002, Ontario statute references, LSO compliance issues, and obligations specific to Ontario practice areas.",
    },
    {
      title: "One Platform for Everything",
      body: "With Atticus, AI document analysis, billing, trust accounting, and matter management are all in one platform. With Clio, you need Clio Manage + Clio Draft + potentially other Clio products at combined per-user pricing.",
    },
    {
      title: "LSO By-Law 9 Trust Accounting",
      body: "Atticus enforces three-way reconciliation and mixed-fund prevention for LSO compliance. Clio Draft has no trust accounting — you still need Clio Manage (on a higher tier) for that functionality.",
    },
    {
      title: "Flat-Fee Pricing for Ontario Firms",
      body: "Atticus is $149 CAD/month for your entire firm with all features included. Clio Draft is a separate subscription on top of your Clio Manage subscription.",
    },
  ];

  const comparisons = [
    { feature: "Product type", cd: "Document automation add-on", atticus: "Complete practice management platform" },
    { feature: "AI document analysis", cd: "Yes (core product)", atticus: "Yes (built-in, Ontario-specific)" },
    { feature: "Trust accounting", cd: "None (requires Clio Manage)", atticus: "LSO By-Law 9 compliant" },
    { feature: "Billing", cd: "None (requires Clio Manage)", atticus: "HST-compliant CAD billing" },
    { feature: "Matter management", cd: "None (requires Clio Manage)", atticus: "Full Ontario matter management" },
    { feature: "Ontario-specific AI", cd: "General document automation", atticus: "Ontario statutes, limitations, LSO compliance" },
    { feature: "Pricing", cd: "Additional to Clio Manage subscription", atticus: "$149 CAD/month (entire firm, all features)" },
    { feature: "Canadian data residency", cd: "Clio infrastructure", atticus: "Canadian infrastructure" },
    { feature: "All-in-one platform", cd: "No (requires Clio Manage + Draft)", atticus: "Yes" },
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
          <span className="mb-4 inline-block rounded-full bg-emerald-100 px-4 py-1 text-sm font-medium text-emerald-700">
            Clio Draft Alternative
          </span>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Clio Draft Alternative for Ontario Lawyers
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-600">
            Clio Draft is a separate add-on product at additional cost. Atticus includes
            AI document analysis — plus billing, trust accounting, and matter management —
            in one Ontario-built platform at $149 CAD/month for your entire firm.
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
            Clio Draft vs Atticus — Side by Side
          </h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold text-gray-700">Feature</th>
                  <th className="px-6 py-4 text-left font-semibold text-gray-700">Clio Draft</th>
                  <th className="px-6 py-4 text-left font-semibold text-blue-700">Atticus</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {comparisons.map((row) => (
                  <tr key={row.feature} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">{row.feature}</td>
                    <td className="px-6 py-4 text-gray-600">{row.cd}</td>
                    <td className="px-6 py-4 font-medium text-blue-700">{row.atticus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* What is Clio Draft */}
        <section className="mb-16">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">What Is Clio Draft?</h2>
          <p className="mb-4 text-gray-600">
            Clio Draft is Clio&apos;s document automation and AI document analysis product, designed
            to help lawyers draft and review documents faster using artificial intelligence.
            It provides document templates, automated document assembly, and AI-assisted review
            of contracts and legal documents.
          </p>
          <p className="mb-4 text-gray-600">
            Clio Draft is a separate product from Clio Manage — it requires an additional
            subscription layered on top of Clio Manage. Ontario firms using Clio for full
            practice management plus Clio Draft for document analysis pay multiple per-user
            subscription fees.
          </p>
          <p className="text-gray-600">
            Atticus integrates AI document analysis as part of the core platform — no add-on
            required. For Ontario law firms that want both practice management and AI document
            analysis in one tool, at one price, Atticus provides that with Ontario-specific
            AI trained to surface Ontario limitation dates, statute references, and LSO
            compliance issues.
          </p>
        </section>

        {/* Why Atticus */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">
            Why Ontario Lawyers Choose Atticus Over Clio Draft
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
          <h2 className="mb-3 text-3xl font-bold">AI + Practice Management in One Platform</h2>
          <p className="mb-8 text-blue-100">
            AI document analysis, LSO trust accounting, CAD billing, and matter management —
            all in Atticus, for $149 CAD/month. No add-ons, no upsell tiers.
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
