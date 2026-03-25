import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clio Manage Alternative for Ontario Lawyers | Atticus",
  description:
    "Comparing Clio Manage (the premium tier of Clio) with Atticus — the cloud-native Ontario practice management platform with built-in LSO trust accounting, AI document analysis, and flat Canadian pricing.",
  openGraph: {
    title: "Clio Manage Alternative for Ontario Lawyers",
    description:
      "Clio Manage charges $149+ CAD/user/month. Atticus delivers comparable practice management with LSO trust accounting and AI document analysis for $149 CAD/month for your entire firm.",
    type: "website",
    url: "https://getatticus.ca/clio-manage-alternative",
  },
  alternates: { canonical: "https://getatticus.ca/clio-manage-alternative" },
};

export default function ClioManageAlternativePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Clio Manage Alternative for Ontario Lawyers",
    description:
      "Comparing Clio Manage with Atticus for Ontario law firms — trust accounting, billing, matter management, and AI document analysis.",
    url: "https://getatticus.ca/clio-manage-alternative",
    provider: {
      "@type": "Organization",
      name: "Atticus",
      url: "https://getatticus.ca",
    },
  };

  const reasons = [
    {
      title: "Flat Firm Pricing vs Per-Seat",
      body: "Clio Manage charges $149+ CAD/user/month. For a 5-lawyer firm, that's $745+/month. Atticus is $149 CAD/month for your entire firm — no matter how many users you add.",
    },
    {
      title: "AI Document Analysis Included",
      body: "Atticus includes AI-powered document analysis that surfaces key clauses, deadlines, and obligations from uploaded documents. Clio&apos;s AI features are add-ons or require integration with third-party tools at additional cost.",
    },
    {
      title: "LSO By-Law 9 Trust Accounting",
      body: "Both platforms offer trust accounting, but Atticus enforces the specific three-way reconciliation and ledger requirements of Ontario&apos;s LSO By-Law 9 with automated compliance checks purpose-built for Ontario lawyers.",
    },
    {
      title: "No Upsell Tiers",
      body: "Clio has multiple pricing tiers (EasyStart, Essentials, Advanced, Complete) with key features gated behind higher tiers. Atticus has one plan with everything included — no feature gating, no upsells.",
    },
    {
      title: "Built for Ontario, Not the Global Market",
      body: "Clio serves law firms globally and must balance features for many jurisdictions. Atticus is purpose-built for Ontario — every feature is designed around LSO compliance, Ontario court forms, and the Limitations Act 2002.",
    },
  ];

  const comparisons = [
    { feature: "Pricing model", clio: "$149+ CAD/user/month", atticus: "$149 CAD/month (entire firm)" },
    { feature: "Trust accounting", clio: "Yes (general trust accounting)", atticus: "LSO By-Law 9 compliant, 3-way reconciliation" },
    { feature: "AI document analysis", clio: "Add-on or third-party integration", atticus: "Built-in — clauses, deadlines, summaries" },
    { feature: "Feature tiers", clio: "4 tiers (EasyStart to Complete)", atticus: "One plan, everything included" },
    { feature: "Matter management", clio: "Yes", atticus: "Yes (Ontario-focused)" },
    { feature: "Client portal", clio: "Yes (higher tiers)", atticus: "Yes (included)" },
    { feature: "Canadian data residency", clio: "Canadian infrastructure", atticus: "Canadian infrastructure" },
    { feature: "Ontario limitation tracking", clio: "General calendar/tasks", atticus: "Ontario Limitations Act 2002 native" },
    { feature: "5-lawyer firm monthly cost", clio: "$745+/month", atticus: "$49/month" },
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
          <span className="mb-4 inline-block rounded-full bg-green-100 px-4 py-1 text-sm font-medium text-green-700">
            Clio Manage Alternative
          </span>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Clio Manage Alternative for Ontario Lawyers
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-600">
            Clio Manage costs $149+ CAD/user/month — $745+/month for a 5-lawyer Ontario firm.
            Atticus delivers comparable practice management with LSO trust accounting, AI document
            analysis, and flat Canadian pricing at $49/month per lawyer per month.
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
            Clio Manage vs Atticus — Side by Side
          </h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold text-gray-700">Feature</th>
                  <th className="px-6 py-4 text-left font-semibold text-gray-700">Clio Manage</th>
                  <th className="px-6 py-4 text-left font-semibold text-blue-700">Atticus</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {comparisons.map((row) => (
                  <tr key={row.feature} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">{row.feature}</td>
                    <td className="px-6 py-4 text-gray-600">{row.clio}</td>
                    <td className="px-6 py-4 font-medium text-blue-700">{row.atticus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* What is Clio Manage */}
        <section className="mb-16">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">What Is Clio Manage?</h2>
          <p className="mb-4 text-gray-600">
            Clio Manage is the practice management product from Clio (Themis Solutions Inc.), a
            Vancouver-based legal technology company. It is one of the most widely used cloud-based
            legal practice management platforms in Canada and globally. Clio Manage provides matter
            management, time tracking, billing, trust accounting, document management, and integrations
            with hundreds of third-party tools.
          </p>
          <p className="mb-4 text-gray-600">
            Clio offers four pricing tiers for Manage: EasyStart (~$49 CAD/user/month), Essentials
            (~$79 CAD/user/month), Advanced (~$119 CAD/user/month), and Complete (~$149 CAD/user/month).
            Many Ontario law firm features — including trust accounting, advanced automation, and
            client portal — require the higher-priced tiers. For a 5-lawyer Ontario firm on the
            Complete tier, that&apos;s approximately $745/month just for the practice management platform.
          </p>
          <p className="text-gray-600">
            Clio is a strong platform, but it serves a global market and must balance Ontario-specific
            requirements against the needs of US, UK, and Australian customers. Atticus was built
            specifically for Ontario law firms — every feature is designed around LSO By-Law 9,
            Ontario limitation periods, and the Ontario court system.
          </p>
        </section>

        {/* Why Atticus */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">
            Why Ontario Lawyers Choose Atticus Over Clio Manage
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
          <h2 className="mb-3 text-3xl font-bold">The Ontario-First Alternative to Clio</h2>
          <p className="mb-8 text-blue-100">
            LSO trust accounting, AI document analysis, and flat-fee pricing — purpose-built for
            Ontario law firms. Save $700+/month compared to Clio Manage for a 5-lawyer firm.
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
