import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal Software for Ontario Law Firms | Atticus",
  description:
    "Ontario-specific legal software for law firms — LSO By-Law 9 trust accounting, CAD billing with HST, AI document analysis, and matter management. Built for Ontario lawyers and paralegals.",
  openGraph: {
    title: "Legal Software for Ontario Law Firms",
    description:
      "The only legal software purpose-built for Ontario — LSO By-Law 9 trust accounting, CAD billing, AI document analysis, and Ontario limitation period tracking.",
    type: "website",
    url: "https://getatticus.ca/legal-software-ontario",
  },
  alternates: { canonical: "https://getatticus.ca/legal-software-ontario" },
};

export default function LegalSoftwareOntarioPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Legal Software for Ontario Law Firms",
    description:
      "Ontario-specific legal practice management software — LSO By-Law 9 trust accounting, CAD billing, AI document analysis, and matter management.",
    url: "https://getatticus.ca/legal-software-ontario",
    provider: {
      "@type": "Organization",
      name: "Atticus",
      url: "https://getatticus.ca",
    },
  };

  const features = [
    {
      title: "LSO By-Law 9 Trust Accounting",
      body: "Automated three-way bank reconciliation, mixed-fund prevention, and proper trust ledger maintenance — built to satisfy LSO audits. No manual spreadsheets, no compliance guesswork.",
    },
    {
      title: "CAD Billing with HST",
      body: "Issue invoices in Canadian dollars with HST calculated correctly. Retainer billing, hourly billing, and flat-fee invoices — all formatted for Ontario clients and the Canada Revenue Agency.",
    },
    {
      title: "AI Document Analysis",
      body: "Upload contracts, court documents, and agreements. Atticus&apos;s AI surfaces key clauses, Ontario limitation dates, obligations, and risk flags specific to Ontario law.",
    },
    {
      title: "Matter Management",
      body: "Track every matter from intake to close. Assign tasks, set deadlines, attach documents, and view your entire caseload at a glance — with Ontario court form support.",
    },
    {
      title: "Ontario Limitation Period Tracking",
      body: "The Ontario Limitations Act 2002 sets a 2-year basic limitation period and a 15-year ultimate limitation. Atticus tracks deadlines and surfaces upcoming limits so nothing slips through.",
    },
    {
      title: "Canadian Data Residency",
      body: "Your client data stays in Canada. Atticus runs on Canadian infrastructure — relevant to your PIPEDA obligations and the LSO&apos;s cloud storage guidance.",
    },
  ];

  const comparisons = [
    { name: "Clio", issue: "Global platform — US/AU/UK focus, $79-149 CAD/user/month" },
    { name: "PCLaw", issue: "Legacy Windows desktop — no cloud, no AI, IT overhead" },
    { name: "Tabs3", issue: "Legacy Windows desktop — US trust accounting, no cloud" },
    { name: "Time Matters", issue: "Legacy Windows — US rules, requires VPN for remote" },
    { name: "Cosmolex", issue: "US-focused, USD pricing, no Ontario-specific AI" },
    { name: "MyCase", issue: "US practice management — no LSO trust accounting" },
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
            Ontario Legal Software
          </span>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Legal Software Purpose-Built for Ontario Law Firms
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-600">
            Most legal software was built for the US or global market and adapted — or never
            adapted — for Ontario. Atticus is the only legal practice management platform
            built exclusively for Ontario law firms and paralegals from day one.
          </p>
          <a
            href="/sign-up"
            className="inline-block rounded-lg bg-blue-600 px-8 py-3 text-lg font-semibold text-white shadow hover:bg-blue-700"
          >
            Start Free Trial — $149 CAD/month
          </a>
        </section>

        {/* Features */}
        <section className="mb-16">
          <h2 className="mb-8 text-center text-2xl font-bold text-gray-900">
            What Ontario Law Firms Need from Legal Software
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="mb-2 text-base font-semibold text-gray-900">{f.title}</h3>
                <p className="text-sm text-gray-600">{f.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Other Platforms Fall Short */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">
            Why Most Legal Software Falls Short for Ontario
          </h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold text-gray-700">Platform</th>
                  <th className="px-6 py-4 text-left font-semibold text-gray-700">Ontario Gap</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {comparisons.map((row) => (
                  <tr key={row.name} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">{row.name}</td>
                    <td className="px-6 py-4 text-gray-600">{row.issue}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Ontario Specific */}
        <section className="mb-16">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">Ontario-Specific From the Start</h2>
          <div className="space-y-4 text-gray-600">
            <p>
              Ontario lawyers are governed by the Law Society of Ontario&apos;s By-Law 9, which
              mandates specific trust accounting rules: mixed-fund prevention, three-way bank
              reconciliation, and detailed client ledger maintenance. Failure to comply can
              result in licence suspensions and professional misconduct findings.
            </p>
            <p>
              The Ontario Limitations Act, 2002 sets a 2-year basic limitation period with
              a 15-year ultimate limitation. Missing a limitation period is one of the most
              common errors that leads to LAWPRO claims. Atticus tracks limitation dates
              as a first-class feature.
            </p>
            <p>
              Ontario&apos;s HST (13%) applies to legal services for most matters. Atticus generates
              invoices with HST correctly calculated and tracked for remittance — not the generic
              tax configuration required by US-built platforms.
            </p>
            <p>
              Atticus&apos;s AI is trained on Ontario legal documents and surfaces Ontario-specific
              information: section references to Ontario statutes, limitations dates under Ontario
              law, and obligations relevant to Ontario practice areas.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-2xl bg-blue-600 px-8 py-12 text-center text-white">
          <h2 className="mb-3 text-3xl font-bold">Legal Software Built for Ontario</h2>
          <p className="mb-8 text-blue-100">
            Join Ontario law firms that have switched to Atticus — the only legal practice
            management platform built exclusively for Ontario. $149 CAD/month for your entire firm.
          </p>
          <a
            href="/sign-up"
            className="inline-block rounded-lg bg-white px-8 py-3 text-lg font-semibold text-blue-600 shadow hover:bg-blue-50"
          >
            Start Free Trial
          </a>
        </section>
      </main>
    </>
  );
}
