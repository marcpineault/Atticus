import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Litify Alternative for Ontario Lawyers | Atticus",
  description:
    "Comparing Litify (Salesforce-based US enterprise legal platform) with Atticus — the cloud-native Ontario practice management platform built for LSO compliance, trust accounting, and AI-powered document analysis.",
  openGraph: {
    title: "Litify Alternative for Ontario Lawyers",
    description:
      "Litify is a Salesforce-based US enterprise legal platform. Atticus is purpose-built for Ontario law firms — LSO trust accounting, CAD billing, AI document analysis.",
    type: "website",
    url: "https://getatticus.ca/litify-alternative",
  },
  alternates: { canonical: "https://getatticus.ca/litify-alternative" },
};

export default function LitifyAlternativePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Litify Alternative for Ontario Lawyers",
    description:
      "Comparing Litify with Atticus for Ontario law firms — trust accounting, billing, matter management, and AI document analysis.",
    url: "https://getatticus.ca/litify-alternative",
    provider: {
      "@type": "Organization",
      name: "Atticus",
      url: "https://getatticus.ca",
    },
  };

  const reasons = [
    {
      title: "No Salesforce Overhead",
      body: "Litify requires a Salesforce license, Salesforce administration expertise, and extensive customization before it functions as a legal platform. Atticus works out of the box for Ontario law firms — no platform configuration required.",
    },
    {
      title: "LSO By-Law 9 Trust Accounting Built In",
      body: "Litify is built for US personal injury and plaintiff law firms. Its trust accounting follows US IOLTA rules. Atticus enforces Ontario LSO By-Law 9 requirements — three-way reconciliation, mixed-fund prevention, and proper ledger maintenance.",
    },
    {
      title: "AI Document Analysis",
      body: "Atticus includes AI-powered document analysis that surfaces key clauses, deadlines, and obligations from uploaded contracts and court documents. Litify&apos;s AI capabilities are bolted-on through Salesforce and require additional configuration.",
    },
    {
      title: "Radically Simpler Pricing",
      body: "Litify pricing includes Salesforce platform licensing plus Litify application licensing — typically $200-400+ USD/user/month before implementation costs. Atticus is $149 CAD/month per lawyer per month.",
    },
    {
      title: "Built for Canadian Data Residency",
      body: "Atticus stores data on Canadian servers. Litify data sits on Salesforce&apos;s US infrastructure — a consideration Ontario lawyers must assess under LSO cloud storage guidance and PIPEDA obligations.",
    },
  ];

  const comparisons = [
    { feature: "Architecture", litify: "Built on Salesforce (requires SF license)", atticus: "Purpose-built legal platform" },
    { feature: "Primary market", litify: "US plaintiff/PI law firms", atticus: "Ontario law firms" },
    { feature: "Trust accounting", litify: "US IOLTA rules", atticus: "LSO By-Law 9 compliant" },
    { feature: "Billing currency", litify: "USD, US tax formats", atticus: "CAD, HST-compliant invoices" },
    { feature: "AI document analysis", litify: "Via Salesforce/Einstein (configuration needed)", atticus: "Built-in — clauses, deadlines, summaries" },
    { feature: "Setup time", litify: "Months (Salesforce implementation)", atticus: "Hours (out of the box)" },
    { feature: "Canadian data residency", litify: "US Salesforce infrastructure", atticus: "Canadian infrastructure" },
    { feature: "Pricing", litify: "$200-400+ USD/user/month (loaded)", atticus: "$149 CAD/month (entire firm)" },
    { feature: "Target firm size", litify: "Mid to large firms", atticus: "Solo to mid-size Ontario firms" },
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
          <span className="mb-4 inline-block rounded-full bg-orange-100 px-4 py-1 text-sm font-medium text-orange-700">
            Litify Alternative
          </span>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Litify Alternative for Ontario Lawyers
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-600">
            Litify is a Salesforce-based US enterprise platform requiring months of implementation
            and $200-400+ USD/user/month. Ontario lawyers need LSO trust accounting, CAD billing,
            and a platform that works out of the box. Atticus delivers all of that for
            $149 CAD/month.
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
            Litify vs Atticus — Side by Side
          </h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold text-gray-700">Feature</th>
                  <th className="px-6 py-4 text-left font-semibold text-gray-700">Litify</th>
                  <th className="px-6 py-4 text-left font-semibold text-blue-700">Atticus</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {comparisons.map((row) => (
                  <tr key={row.feature} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">{row.feature}</td>
                    <td className="px-6 py-4 text-gray-600">{row.litify}</td>
                    <td className="px-6 py-4 font-medium text-blue-700">{row.atticus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* What is Litify */}
        <section className="mb-16">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">What Is Litify?</h2>
          <p className="mb-4 text-gray-600">
            Litify is a legal operations platform built on top of Salesforce, targeted primarily
            at US plaintiff and personal injury law firms. Because it runs on Salesforce, firms
            must purchase both a Salesforce platform license and the Litify application license
            — and typically require a Salesforce-certified implementation partner to configure
            the system before it can be used effectively.
          </p>
          <p className="mb-4 text-gray-600">
            The platform is designed for the US legal market. Its trust accounting functionality
            follows US state bar IOLTA rules — not the Law Society of Ontario&apos;s By-Law 9
            requirements. Ontario firms would need significant customization and likely additional
            third-party tools to achieve LSO compliance.
          </p>
          <p className="text-gray-600">
            Total cost of ownership for Litify is high: Salesforce licensing, Litify application
            licensing, implementation costs (often $20,000-100,000+), and ongoing Salesforce
            administration. For Ontario solo and small firm lawyers, this overhead is prohibitive.
            Atticus provides comparable (or superior) practice management functionality at
            $149 CAD/month per lawyer per month, with zero implementation cost.
          </p>
        </section>

        {/* Why Atticus */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">
            Why Ontario Lawyers Choose Atticus Over Litify
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
          <h2 className="mb-3 text-3xl font-bold">The Ontario Alternative to Litify</h2>
          <p className="mb-8 text-blue-100">
            No Salesforce. No implementation project. No USD pricing. Just Ontario-built
            practice management with LSO trust accounting, AI document analysis, and flat
            Canadian pricing.
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
