import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Centerbase Alternative for Ontario Lawyers | Atticus",
  description:
    "Comparing Centerbase (US enterprise law firm software) with Atticus — the cloud-native Ontario practice management platform built for LSO compliance, trust accounting, and AI-powered document analysis.",
  openGraph: {
    title: "Centerbase Alternative for Ontario Lawyers",
    description:
      "Centerbase is a US law firm platform with US trust accounting and USD pricing. Atticus is purpose-built for Ontario law firms.",
    type: "website",
    url: "https://getatticus.ca/centerbase-alternative",
  },
  alternates: { canonical: "https://getatticus.ca/centerbase-alternative" },
};

export default function CenterbaseAlternativePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Centerbase Alternative for Ontario Lawyers",
    description:
      "Comparing Centerbase with Atticus for Ontario law firms — trust accounting, billing, matter management, and AI document analysis.",
    url: "https://getatticus.ca/centerbase-alternative",
    provider: {
      "@type": "Organization",
      name: "Atticus",
      url: "https://getatticus.ca",
    },
  };

  const reasons = [
    {
      title: "Built for Ontario, Not the US Market",
      body: "Centerbase was designed for US law firms — IOLTA trust accounting, US tax formats, and USD pricing. Atticus is purpose-built for Ontario: LSO By-Law 9 trust accounting, HST invoicing, and Canadian data residency.",
    },
    {
      title: "LSO By-Law 9 Trust Accounting",
      body: "Atticus enforces three-way bank reconciliation, mixed-fund prevention, and the specific ledger requirements the Law Society of Ontario mandates. Centerbase offers trust accounting for US rules only.",
    },
    {
      title: "AI Document Analysis",
      body: "Atticus uses AI to surface key clauses, deadlines, and obligations from uploaded contracts and court documents. Centerbase requires manual document review with no AI-assisted analysis.",
    },
    {
      title: "Flat-Fee Canadian Pricing",
      body: "Atticus is $149 CAD/month for your entire firm — no per-seat fees. Centerbase charges per-user monthly fees in USD, typically $100-200 USD/user/month, making it expensive for Ontario small and mid-size firms.",
    },
    {
      title: "Canadian Data Residency",
      body: "Atticus stores your client data on Canadian servers — an increasingly important consideration for Ontario law firms under LSBC and Law Society of Ontario guidelines on cloud storage of client information.",
    },
  ];

  const comparisons = [
    { feature: "Primary market", cb: "US law firms", atticus: "Ontario law firms" },
    { feature: "Trust accounting", cb: "US IOLTA rules", atticus: "LSO By-Law 9 compliant" },
    { feature: "Billing currency", cb: "USD, US tax formats", atticus: "CAD, HST-compliant invoices" },
    { feature: "AI document analysis", cb: "Limited / add-on", atticus: "Built-in — clauses, deadlines, summaries" },
    { feature: "Matter management", cb: "Yes", atticus: "Yes (Ontario-focused)" },
    { feature: "Client portal", cb: "Yes", atticus: "Yes" },
    { feature: "Canadian data residency", cb: "US servers", atticus: "Canadian infrastructure" },
    { feature: "Pricing", cb: "$100-200 USD/user/month", atticus: "$149 CAD/month (entire firm)" },
    { feature: "Ontario limitation period tracking", cb: "US rules only", atticus: "Ontario Limitations Act 2002" },
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
          <span className="mb-4 inline-block rounded-full bg-indigo-100 px-4 py-1 text-sm font-medium text-indigo-700">
            Centerbase Alternative
          </span>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Centerbase Alternative for Ontario Lawyers
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-600">
            Centerbase is a US enterprise law firm platform with US trust accounting and USD
            pricing. Ontario lawyers need LSO By-Law 9 compliance, CAD billing, and Canadian data
            residency. Atticus delivers all of that — plus AI document analysis — at a fraction of
            the cost.
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
            Centerbase vs Atticus — Side by Side
          </h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold text-gray-700">Feature</th>
                  <th className="px-6 py-4 text-left font-semibold text-gray-700">Centerbase</th>
                  <th className="px-6 py-4 text-left font-semibold text-blue-700">Atticus</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {comparisons.map((row) => (
                  <tr key={row.feature} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">{row.feature}</td>
                    <td className="px-6 py-4 text-gray-600">{row.cb}</td>
                    <td className="px-6 py-4 font-medium text-blue-700">{row.atticus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* What is Centerbase */}
        <section className="mb-16">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">What Is Centerbase?</h2>
          <p className="mb-4 text-gray-600">
            Centerbase is a cloud-based legal practice management platform targeting mid-size
            US law firms. It provides matter management, time tracking, billing, trust accounting
            (for US IOLTA compliance), document management, and a client portal. Centerbase
            positions itself as an enterprise-grade alternative to platforms like Clio and
            MyCase for growing US law firms.
          </p>
          <p className="mb-4 text-gray-600">
            The platform is built for the US legal market — its trust accounting follows
            US state bar IOLTA rules, not the Law Society of Ontario&apos;s By-Law 9 requirements.
            Ontario firms using Centerbase would need to either maintain separate trust accounting
            processes or risk LSO non-compliance.
          </p>
          <p className="text-gray-600">
            Pricing is per-user in USD, which for small Ontario firms can translate to
            $1,500-3,000+ CAD/month compared to Atticus&apos;s flat $149 CAD/month for the entire
            firm. Centerbase also stores data on US infrastructure, which raises Canadian data
            residency considerations for Ontario lawyers handling sensitive client information.
          </p>
        </section>

        {/* Why Atticus */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">
            Why Ontario Lawyers Choose Atticus Over Centerbase
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
          <h2 className="mb-3 text-3xl font-bold">The Ontario-First Alternative to Centerbase</h2>
          <p className="mb-8 text-blue-100">
            Cloud-native practice management built for Ontario law firms — LSO trust accounting,
            AI document analysis, and flat-fee Canadian pricing.
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
