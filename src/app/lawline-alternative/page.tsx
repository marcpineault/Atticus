import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lawline Alternative for Ontario Lawyers | Atticus",
  description:
    "Comparing Lawline (US online CLE provider) with Atticus — the Ontario practice management platform. While Lawline provides legal education, Atticus manages your practice with LSO trust accounting and AI document analysis.",
  openGraph: {
    title: "Lawline Alternative for Ontario Lawyers",
    description:
      "Lawline provides US CLE credits. Ontario lawyers need a practice management platform — Atticus provides LSO trust accounting, billing, AI analysis, and flat Canadian pricing.",
    type: "website",
    url: "https://getatticus.ca/lawline-alternative",
  },
  alternates: { canonical: "https://getatticus.ca/lawline-alternative" },
};

export default function LawlineAlternativePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Lawline Alternative for Ontario Lawyers",
    description:
      "Comparing Lawline with Atticus for Ontario law firms — practice management, trust accounting, billing, and AI document analysis.",
    url: "https://getatticus.ca/lawline-alternative",
    provider: {
      "@type": "Organization",
      name: "Atticus",
      url: "https://getatticus.ca",
    },
  };

  const reasons = [
    {
      title: "Practice Management, Not Just Education",
      body: "Lawline provides legal education content for CLE credits. Atticus is a practice management platform that helps you run your Ontario law firm — billing, trust accounting, matter management, and AI document analysis.",
    },
    {
      title: "LSO CPD vs LSO By-Law 9",
      body: "Ontario lawyers complete CPD requirements with LSO-approved providers. Atticus helps with the operational side of LSO compliance — By-Law 9 trust accounting that keeps your firm audit-ready.",
    },
    {
      title: "Canadian Legal Education Resources",
      body: "For Ontario-specific legal education, resources like the Law Society of Ontario&apos;s CPD portal, LSUC Practice Matters, and Osgoode Professional Development provide relevant content. Lawline focuses on US CLE credits.",
    },
    {
      title: "Flat-Fee Ontario Practice Management",
      body: "Atticus combines billing, trust accounting, matter management, and AI document analysis in one platform for $149 CAD/month. No per-credit or subscription-layer pricing.",
    },
    {
      title: "AI Document Analysis for Ontario Law",
      body: "Atticus uses AI to analyze Ontario legal documents — surfacing key clauses, limitation dates, and obligations specific to Ontario practice. This is distinct from legal education content.",
    },
  ];

  const comparisons = [
    { feature: "Product type", ll: "US online CLE / legal education", atticus: "Ontario practice management platform" },
    { feature: "Trust accounting", ll: "None", atticus: "LSO By-Law 9 compliant" },
    { feature: "Billing", ll: "None", atticus: "HST-compliant CAD billing" },
    { feature: "Matter management", ll: "None", atticus: "Full Ontario matter management" },
    { feature: "AI document analysis", ll: "None", atticus: "Built-in Ontario-specific AI" },
    { feature: "LSO CPD credits", ll: "US CLE (not LSO CPD)", atticus: "Not an education provider" },
    { feature: "Primary market", ll: "US lawyers", atticus: "Ontario lawyers" },
    { feature: "Pricing", ll: "US subscription per user", atticus: "$149 CAD/month (entire firm)" },
    { feature: "Canadian content", ll: "Minimal", atticus: "Ontario-exclusive" },
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
            Ontario Legal Practice Management
          </span>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Lawline Alternative for Ontario Lawyers
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-600">
            Lawline is a US CLE platform for legal education. Ontario lawyers looking for
            practice management — billing, trust accounting, matter management, and AI document
            analysis — choose Atticus: purpose-built for Ontario at $149 CAD/month.
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
            Lawline vs Atticus — What Each Does
          </h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold text-gray-700">Feature</th>
                  <th className="px-6 py-4 text-left font-semibold text-gray-700">Lawline</th>
                  <th className="px-6 py-4 text-left font-semibold text-blue-700">Atticus</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {comparisons.map((row) => (
                  <tr key={row.feature} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">{row.feature}</td>
                    <td className="px-6 py-4 text-gray-600">{row.ll}</td>
                    <td className="px-6 py-4 font-medium text-blue-700">{row.atticus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* What is Lawline */}
        <section className="mb-16">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">What Is Lawline?</h2>
          <p className="mb-4 text-gray-600">
            Lawline is a US-based online legal education platform providing Continuing Legal
            Education (CLE) courses for US lawyers. It offers on-demand and live webinar content
            covering US practice areas, ethics, and professional responsibility. Lawline
            is primarily designed for US bar members seeking CLE credits required by US state bars.
          </p>
          <p className="mb-4 text-gray-600">
            Ontario lawyers fulfill their Continuing Professional Development (CPD) requirements
            through LSO-approved providers. The Law Society of Ontario has its own CPD portal
            and maintains a directory of approved providers. Lawline&apos;s US CLE courses are
            generally not approved for Ontario CPD credit.
          </p>
          <p className="text-gray-600">
            If you&apos;re looking for Ontario practice management software — not legal education —
            Atticus is purpose-built for Ontario law firms. It combines billing, trust accounting
            under LSO By-Law 9, matter management, and AI document analysis in one platform
            at $149 CAD/month for your entire firm.
          </p>
        </section>

        {/* Why Atticus */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">
            What Ontario Lawyers Need: Practice Management Built for LSO Compliance
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
          <h2 className="mb-3 text-3xl font-bold">Ontario Practice Management for Ontario Lawyers</h2>
          <p className="mb-8 text-blue-100">
            LSO By-Law 9 trust accounting, AI document analysis, billing, and matter management —
            purpose-built for Ontario. $149 CAD/month for your entire firm.
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
