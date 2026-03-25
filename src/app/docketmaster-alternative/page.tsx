import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DocketMaster Alternative for Ontario Lawyers | Atticus",
  description:
    "Comparing DocketMaster (Canadian desktop legal billing software) with Atticus — the cloud-native Ontario practice management platform built for LSO compliance, trust accounting, and AI document analysis.",
  openGraph: {
    title: "DocketMaster Alternative for Ontario Lawyers",
    description:
      "DocketMaster is Canadian desktop billing software with no cloud access or AI. Atticus is the modern, cloud-native Ontario alternative with built-in LSO trust accounting.",
    type: "website",
    url: "https://getatticus.ca/docketmaster-alternative",
  },
  alternates: { canonical: "https://getatticus.ca/docketmaster-alternative" },
};

export default function DocketmasterAlternativePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "DocketMaster Alternative for Ontario Lawyers",
    description:
      "Comparing DocketMaster with Atticus for Ontario law firms — trust accounting, billing, matter management, and AI document analysis.",
    url: "https://getatticus.ca/docketmaster-alternative",
    provider: {
      "@type": "Organization",
      name: "Atticus",
      url: "https://getatticus.ca",
    },
  };

  const reasons = [
    {
      title: "Cloud-Native — No Server Required",
      body: "DocketMaster is desktop software requiring a Windows PC or hosted server. Atticus is fully browser-based — access your practice from any device, anywhere, with no IT infrastructure to maintain.",
    },
    {
      title: "AI Document Analysis",
      body: "Atticus uses AI to surface key clauses, deadlines, and obligations from uploaded contracts and court documents. DocketMaster has no AI capabilities — document review is entirely manual.",
    },
    {
      title: "Complete Practice Management in One Platform",
      body: "DocketMaster focuses on billing and time tracking. Atticus combines billing, trust accounting, matter management, and AI document analysis — replacing multiple tools with one subscription.",
    },
    {
      title: "LSO By-Law 9 Trust Accounting",
      body: "Both DocketMaster and Atticus offer Canadian trust accounting, but Atticus enforces the specific three-way reconciliation and ledger requirements of LSO By-Law 9 with automated compliance checks.",
    },
    {
      title: "Flat-Fee Pricing for Ontario Firms",
      body: "DocketMaster charges per-user licensing fees plus annual maintenance. Atticus is $149 CAD/month per lawyer — no per-seat fees, no maintenance charges.",
    },
  ];

  const comparisons = [
    { feature: "Deployment", dm: "Windows desktop or hosted server", atticus: "Cloud — browser-based, no installation" },
    { feature: "Trust accounting", dm: "Canadian trust accounting", atticus: "LSO By-Law 9 compliant, 3-way reconciliation" },
    { feature: "AI document analysis", dm: "None", atticus: "Built-in — clauses, deadlines, summaries" },
    { feature: "Matter management", dm: "Basic", atticus: "Full Ontario-focused matter management" },
    { feature: "Remote access", dm: "Requires hosted server or VPN", atticus: "Any browser, any device" },
    { feature: "Canadian data residency", dm: "Canadian (server-based)", atticus: "Canadian cloud infrastructure" },
    { feature: "Mobile access", dm: "Limited / not native", atticus: "Full mobile browser support" },
    { feature: "Pricing", dm: "Per-user + annual maintenance", atticus: "$149 CAD/month (entire firm)" },
    { feature: "Active development", dm: "Legacy product, slower updates", atticus: "Actively developed" },
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
          <span className="mb-4 inline-block rounded-full bg-slate-100 px-4 py-1 text-sm font-medium text-slate-700">
            DocketMaster Alternative
          </span>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            DocketMaster Alternative for Ontario Lawyers
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-600">
            DocketMaster is Canadian desktop billing software. Ontario lawyers who want cloud
            access, AI document analysis, and complete practice management in one platform choose
            Atticus — built specifically for Ontario law firms.
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
            DocketMaster vs Atticus — Side by Side
          </h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold text-gray-700">Feature</th>
                  <th className="px-6 py-4 text-left font-semibold text-gray-700">DocketMaster</th>
                  <th className="px-6 py-4 text-left font-semibold text-blue-700">Atticus</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {comparisons.map((row) => (
                  <tr key={row.feature} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">{row.feature}</td>
                    <td className="px-6 py-4 text-gray-600">{row.dm}</td>
                    <td className="px-6 py-4 font-medium text-blue-700">{row.atticus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* What is DocketMaster */}
        <section className="mb-16">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">What Is DocketMaster?</h2>
          <p className="mb-4 text-gray-600">
            DocketMaster is Canadian legal billing and practice management software designed for
            Canadian law firms. It offers time and expense tracking, billing, trust accounting
            for Canadian rules, and basic matter management. The software is deployed as a
            Windows desktop application, either installed locally or on a hosted server.
          </p>
          <p className="mb-4 text-gray-600">
            As desktop software, DocketMaster requires access to a Windows PC or a remote
            desktop connection to a hosted server. This limits flexibility for lawyers working
            from multiple locations or on non-Windows devices. Remote access typically requires
            IT setup and ongoing maintenance.
          </p>
          <p className="text-gray-600">
            DocketMaster has served many Canadian law firms well for years, but the shift to
            cloud-native practice management has accelerated. Firms seeking cloud access,
            mobile support, AI capabilities, and integrated matter management increasingly look
            to modern platforms like Atticus that were built for cloud delivery from the ground up.
          </p>
        </section>

        {/* Why Atticus */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">
            Why Ontario Lawyers Choose Atticus Over DocketMaster
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
          <h2 className="mb-3 text-3xl font-bold">Upgrade from DocketMaster to Atticus</h2>
          <p className="mb-8 text-blue-100">
            Cloud-native Ontario practice management with trust accounting, AI document analysis,
            and flat-fee pricing. Access your practice from anywhere.
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
