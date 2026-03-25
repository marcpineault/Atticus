import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Time Matters Alternative for Ontario Lawyers | Atticus",
  description:
    "Comparing Time Matters (legacy US desktop legal software) with Atticus — the cloud-native Ontario practice management platform built for LSO compliance, trust accounting, and AI-powered document analysis.",
  openGraph: {
    title: "Time Matters Alternative for Ontario Lawyers",
    description:
      "Time Matters is a legacy Windows desktop product with no LSO trust accounting or Canadian billing. Atticus is built for Ontario law firms from the ground up.",
    type: "website",
    url: "https://getatticus.ca/timematters-alternative",
  },
  alternates: { canonical: "https://getatticus.ca/timematters-alternative" },
};

export default function TimemattersAlternativePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Time Matters Alternative for Ontario Lawyers",
    description:
      "Comparing Time Matters with Atticus for Ontario law firms — trust accounting, billing, matter management, and AI document analysis.",
    url: "https://getatticus.ca/timematters-alternative",
    provider: {
      "@type": "Organization",
      name: "Atticus",
      url: "https://getatticus.ca",
    },
  };

  const reasons = [
    {
      title: "One Platform, Zero Duct-Tape Integrations",
      body: "Time Matters requires separate billing software and a third-party trust accounting tool to stay LSO-compliant. Atticus combines trust accounting, billing, matter management, and AI document analysis into one subscription.",
    },
    {
      title: "LSO By-Law 9 Trust Accounting Built In",
      body: "Atticus enforces three-way reconciliation and mixed-fund prevention rules required by the Law Society of Ontario. Time Matters was built for US legal accounting rules and does not natively meet Ontario obligations.",
    },
    {
      title: "Cloud-Native — No Server, No VPN",
      body: "Time Matters runs on a Windows server your firm must maintain, patch, and back up. Atticus is fully browser-based — work from the office, home, or courthouse with no IT overhead.",
    },
    {
      title: "AI Document Analysis",
      body: "Atticus surfaces key clauses, limitation dates, and obligations from uploaded contracts and court documents. Time Matters offers no AI capabilities — document review remains entirely manual.",
    },
    {
      title: "Flat-Fee Canadian Pricing",
      body: "Atticus is $149 CAD/month for your entire firm. Time Matters charges per-user licensing in USD, plus server costs, annual maintenance fees, and implementation charges — typically $150-300+ CAD/user/month fully loaded.",
    },
  ];

  const comparisons = [
    { feature: "Deployment", tm: "Windows server (on-premises or hosted)", atticus: "Cloud — browser-based, no installation" },
    { feature: "Trust accounting", tm: "Not built for LSO By-Law 9", atticus: "LSO By-Law 9 compliant, 3-way reconciliation" },
    { feature: "Billing currency", tm: "USD, US tax formats", atticus: "CAD, HST-compliant invoices" },
    { feature: "AI document analysis", tm: "None", atticus: "Built-in — clauses, deadlines, summaries" },
    { feature: "Matter management", tm: "Yes (legacy interface)", atticus: "Yes (modern, mobile-friendly)" },
    { feature: "Remote access", tm: "VPN or Citrix required", atticus: "Any browser, any device" },
    { feature: "Canadian data residency", tm: "US servers", atticus: "Canadian infrastructure" },
    { feature: "Pricing", tm: "$150-300+ CAD/user/month (loaded)", atticus: "$149 CAD/month (entire firm)" },
    { feature: "Active development", tm: "Declining — legacy product", atticus: "Actively developed" },
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
          <span className="mb-4 inline-block rounded-full bg-amber-100 px-4 py-1 text-sm font-medium text-amber-700">
            Time Matters Alternative
          </span>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Time Matters Alternative for Ontario Lawyers
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-600">
            Time Matters is a legacy Windows desktop product designed for US law firms. Ontario
            lawyers need LSO By-Law 9 trust accounting, CAD billing, and cloud-native access.
            Atticus delivers all of that — plus AI document analysis — at a fraction of the cost.
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
            Time Matters vs Atticus — Side by Side
          </h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold text-gray-700">Feature</th>
                  <th className="px-6 py-4 text-left font-semibold text-gray-700">Time Matters</th>
                  <th className="px-6 py-4 text-left font-semibold text-blue-700">Atticus</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {comparisons.map((row) => (
                  <tr key={row.feature} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">{row.feature}</td>
                    <td className="px-6 py-4 text-gray-600">{row.tm}</td>
                    <td className="px-6 py-4 font-medium text-blue-700">{row.atticus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* What is Time Matters */}
        <section className="mb-16">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">What Is Time Matters?</h2>
          <p className="mb-4 text-gray-600">
            Time Matters is a legacy practice management system owned by LexisNexis. It was
            originally developed in the 1990s as a Windows desktop product and has continued as
            an on-premises or hosted Windows application. Time Matters provides matter management,
            calendaring, document management, and integrations with third-party billing tools.
          </p>
          <p className="mb-4 text-gray-600">
            The product was built for the US legal market. Its trust accounting features follow
            US IOLTA rules — not Ontario&apos;s Law Society By-Law 9. Ontario firms using Time Matters
            must supplement it with a separate trust accounting solution or risk compliance gaps
            with LSO requirements.
          </p>
          <p className="text-gray-600">
            Time Matters requires a Windows environment — either an on-premises server or a hosted
            Windows desktop. Remote access typically requires VPN or Citrix, adding IT complexity
            and cost. The product has seen declining development investment as LexisNexis has shifted
            focus to cloud-native offerings, leaving many Time Matters users on an aging platform.
          </p>
        </section>

        {/* Why Atticus */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">
            Why Ontario Lawyers Choose Atticus Over Time Matters
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
          <h2 className="mb-3 text-3xl font-bold">Replace Time Matters Today</h2>
          <p className="mb-8 text-blue-100">
            Cloud-native Ontario practice management with trust accounting, AI document analysis,
            and flat-fee pricing. No Windows server required.
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
