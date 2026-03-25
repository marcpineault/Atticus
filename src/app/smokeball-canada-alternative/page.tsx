import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Smokeball Canada Alternative for Ontario Lawyers | Atticus",
  description:
    "Comparing Smokeball Canada (Australian/US practice management entering Canada) with Atticus — the purpose-built Ontario practice management platform with LSO trust accounting and AI document analysis.",
  openGraph: {
    title: "Smokeball Canada Alternative for Ontario Lawyers",
    description:
      "Smokeball recently expanded to Canada but was built for AU/US law firms. Atticus is purpose-built for Ontario — LSO By-Law 9 trust accounting, CAD billing, and Ontario-specific AI document analysis.",
    type: "website",
    url: "https://getatticus.ca/smokeball-canada-alternative",
  },
  alternates: { canonical: "https://getatticus.ca/smokeball-canada-alternative" },
};

export default function SmokeballCanadaAlternativePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Smokeball Canada Alternative for Ontario Lawyers",
    description:
      "Comparing Smokeball Canada with Atticus for Ontario law firms — trust accounting, billing, matter management, and AI document analysis.",
    url: "https://getatticus.ca/smokeball-canada-alternative",
    provider: {
      "@type": "Organization",
      name: "Atticus",
      url: "https://getatticus.ca",
    },
  };

  const reasons = [
    {
      title: "Purpose-Built for Ontario, Not Ported from Australia",
      body: "Smokeball was designed for Australian and US law firms and has been adapting for Canada. Atticus was built from the ground up for Ontario law firms — LSO By-Law 9, Ontario court forms, CAD billing, and the Limitations Act 2002.",
    },
    {
      title: "LSO By-Law 9 Trust Accounting",
      body: "Atticus enforces the specific three-way reconciliation and mixed-fund prevention rules required by the Law Society of Ontario. Smokeball&apos;s trust accounting was originally built for AU and US rules and is being adapted for Canadian requirements.",
    },
    {
      title: "AI Document Analysis",
      body: "Atticus uses AI trained to understand Ontario legal documents — surfacing key clauses, Ontario limitation dates, and obligations specific to Ontario law. Smokeball offers automated time-capture but limited AI document analysis for Ontario-specific content.",
    },
    {
      title: "Canadian Data Residency from Day One",
      body: "Atticus was built with Canadian data residency as a core requirement. Smokeball&apos;s Canadian data infrastructure is newer and still evolving from its US/AU origins.",
    },
    {
      title: "Flat-Fee Pricing for Ontario Firms",
      body: "Atticus is $149 CAD/month for your entire firm. Smokeball charges per-user fees that increase with firm size — the pricing model penalizes growth.",
    },
  ];

  const comparisons = [
    { feature: "Built for Ontario", sb: "Adapted from AU/US platform", atticus: "Purpose-built for Ontario" },
    { feature: "Trust accounting", sb: "Adapting for Canadian rules", atticus: "LSO By-Law 9 compliant from day one" },
    { feature: "Billing currency", sb: "CAD billing (recently added)", atticus: "CAD, HST-compliant invoices" },
    { feature: "AI document analysis", sb: "Automated time capture + basic AI", atticus: "Ontario-specific AI document analysis" },
    { feature: "Matter management", sb: "Yes (AU/US document automation strength)", atticus: "Yes (Ontario court forms and workflows)" },
    { feature: "Canadian data residency", sb: "Newer, evolving", atticus: "Canadian infrastructure from inception" },
    { feature: "Ontario court forms", sb: "Limited (AU/US forms strength)", atticus: "Ontario-focused" },
    { feature: "Pricing", sb: "Per-user USD/CAD", atticus: "$149 CAD/month (entire firm)" },
    { feature: "Market focus", sb: "Global with Canadian expansion", atticus: "Ontario exclusively" },
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
          <span className="mb-4 inline-block rounded-full bg-violet-100 px-4 py-1 text-sm font-medium text-violet-700">
            Smokeball Canada Alternative
          </span>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Smokeball Canada Alternative for Ontario Lawyers
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-600">
            Smokeball expanded to Canada from its Australian and US roots. Ontario lawyers who
            want a platform built specifically for Ontario from day one — LSO By-Law 9 trust
            accounting, Ontario court forms, and AI document analysis — choose Atticus.
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
            Smokeball Canada vs Atticus — Side by Side
          </h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold text-gray-700">Feature</th>
                  <th className="px-6 py-4 text-left font-semibold text-gray-700">Smokeball Canada</th>
                  <th className="px-6 py-4 text-left font-semibold text-blue-700">Atticus</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {comparisons.map((row) => (
                  <tr key={row.feature} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">{row.feature}</td>
                    <td className="px-6 py-4 text-gray-600">{row.sb}</td>
                    <td className="px-6 py-4 font-medium text-blue-700">{row.atticus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* What is Smokeball Canada */}
        <section className="mb-16">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">What Is Smokeball Canada?</h2>
          <p className="mb-4 text-gray-600">
            Smokeball is a legal practice management platform with roots in Australia and the
            United States. It is known for its automated time-capture feature (recording time
            spent in documents automatically), document automation library, and matter management.
            Smokeball has been expanding into Canada as part of a broader international growth
            strategy.
          </p>
          <p className="mb-4 text-gray-600">
            As a platform built for AU/US law firms, Smokeball&apos;s trust accounting, document
            templates, and compliance features were originally designed around Australian and US
            state bar rules. The Canadian expansion requires adaptation of these features for
            LSO By-Law 9 in Ontario, LSBC rules in BC, and other provincial requirements.
          </p>
          <p className="text-gray-600">
            Atticus was built specifically for Ontario law firms — not adapted from another
            market. Every feature, from trust accounting to billing to AI analysis, was designed
            with Ontario regulatory requirements as the starting point. For Ontario lawyers who
            want a platform that treats Ontario compliance as a first-class requirement rather
            than an adaptation, Atticus is the Ontario-first alternative.
          </p>
        </section>

        {/* Why Atticus */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">
            Why Ontario Lawyers Choose Atticus Over Smokeball Canada
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
          <h2 className="mb-3 text-3xl font-bold">The Ontario-First Alternative to Smokeball</h2>
          <p className="mb-8 text-blue-100">
            Built for Ontario from day one — not adapted from another market. LSO trust accounting,
            AI document analysis, and flat Canadian pricing.
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
