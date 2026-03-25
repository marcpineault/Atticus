import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Filevine Alternative for Ontario Law Firms — Atticus vs Filevine",
  description:
    "Comparing Filevine with Atticus for Ontario law firms. Filevine is a US enterprise plaintiff and personal injury practice management platform. Atticus is purpose-built for Ontario with LSO By-Law 9 trust accounting, AI document analysis, and flat CAD pricing.",
  openGraph: {
    title: "Filevine Alternative for Ontario Law Firms — Atticus vs Filevine",
    description:
      "Filevine is a US enterprise plaintiff/PI legal platform. Atticus is built for Ontario law firms — LSO By-Law 9, Ontario AI, flat CAD pricing.",
    type: "website",
    url: "https://getatticus.ca/filevine-us-alternative",
  },
  alternates: { canonical: "https://getatticus.ca/filevine-us-alternative" },
};

export default function FileVineUsAlternativePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Filevine Alternative for Ontario Law Firms — Atticus vs Filevine",
    description:
      "Compare Filevine with Atticus for Ontario law firms. Atticus is purpose-built for Ontario with LSO By-Law 9 trust accounting, AI document analysis, and flat CAD pricing.",
    url: "https://getatticus.ca/filevine-us-alternative",
    publisher: {
      "@type": "Organization",
      name: "Atticus",
      url: "https://getatticus.ca",
    },
  };

  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-emerald-500 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            Ontario Law Firm Software
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Filevine Alternative for Ontario Law Firms
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
            Filevine is a US enterprise plaintiff and personal injury practice management platform.
            Atticus was built for Ontario — LSO By-Law 9 trust accounting, Ontario AI, flat
            CAD pricing.
          </p>
          <a
            href="https://getatticus.ca/sign-up"
            className="inline-block bg-emerald-500 hover:bg-emerald-400 text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
          >
            Try Atticus Free
          </a>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">
            Atticus vs Filevine
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left p-4 font-semibold text-slate-700 border border-slate-200">Feature</th>
                  <th className="text-center p-4 font-semibold text-emerald-700 border border-slate-200 bg-emerald-50">Atticus</th>
                  <th className="text-center p-4 font-semibold text-slate-700 border border-slate-200">Filevine</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Primary Market", "Ontario law firms and paralegals", "US plaintiff/PI enterprise law firms"],
                  ["LSO By-Law 9 Trust Accounting", "✅ Native — three-way reconciliation, mixed-fund prevention", "❌ US IOLTA trust accounting — not LSO By-Law 9"],
                  ["AI Document Analysis", "✅ Built-in — limitation dates, Ontario statutes, LSO flags", "⚠️ AI features US-focused — not Ontario legal content"],
                  ["Ontario Limitations Act 2002", "✅ Native tracking — 2-year basic / 15-year ultimate", "❌ Not built for Ontario limitation periods"],
                  ["Pricing", "✅ $149 CAD/month per lawyer", "❌ $100-200+ USD/user/month plus implementation fees"],
                  ["Implementation", "✅ Works out of the box", "❌ Months-long implementation and customization"],
                  ["Currency & Tax", "✅ CAD with HST throughout", "❌ USD billing; Canadian configuration required"],
                  ["Data Residency", "✅ Canadian — PIPEDA compliant", "❌ US data centres — data sovereignty concern"],
                  ["Practice Area Focus", "✅ All Ontario practice areas", "❌ US plaintiff/PI focus — limited general practice support"],
                ].map(([feature, atticus, filevine], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="p-4 font-medium text-slate-700 border border-slate-200">{feature}</td>
                    <td className="p-4 text-center text-slate-700 border border-slate-200 bg-emerald-50/30">{atticus}</td>
                    <td className="p-4 text-center text-slate-600 border border-slate-200">{filevine}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-slate-900">Filevine for Ontario Law Firms</h2>
          <div className="space-y-4 text-slate-700">
            <p>
              Filevine is a cloud-based legal practice management platform built primarily for
              US plaintiff and personal injury law firms. It offers strong case management,
              document generation, settlement tracking, and client communication features
              designed around the contingency fee plaintiff practice model common in the US.
            </p>
            <p>
              Some larger Ontario litigation firms have explored Filevine. However, Filevine
              presents significant challenges for Ontario practice: its trust accounting is built
              for US IOLTA rules, not LSO By-Law 9; pricing typically ranges from $100-200+ USD
              per user per month plus implementation fees of several months; and its AI features
              are built around US case types, statutes, and limitation periods.
            </p>
            <p>
              The total cost of ownership for a 5-lawyer Ontario firm on Filevine can approach
              $600-$1,200+ CAD per month — before accounting for months-long implementation,
              training, and customization to adapt the platform to Ontario practice. Atticus,
              by contrast, is $149 CAD/month and works out of the box for Ontario.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">
            5 Reasons Ontario Firms Choose Atticus Over Filevine
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "LSO By-Law 9 — Not US IOLTA",
                body: "Filevine trust accounting is built for US IOLTA rules. Atticus is built for LSO By-Law 9 from inception — three-way reconciliation, mixed-fund prevention, and audit-ready ledgers.",
              },
              {
                title: "Works Out of the Box",
                body: "Filevine requires months of implementation and customization. Atticus is pre-configured for Ontario practice areas and works from day one — no enterprise implementation project required.",
              },
              {
                title: "Ontario AI — Not US AI",
                body: "Atticus AI is trained on Ontario legal content — limitation dates, Ontario statutes, LSO compliance. Filevine AI is built for US plaintiff/PI case types.",
              },
              {
                title: "Dramatically Lower Cost",
                body: "Filevine costs $100-200+ USD/user/month plus implementation. Atticus is $149 CAD/month for your entire firm — no per-user scaling, no implementation project, no currency risk.",
              },
              {
                title: "All Practice Areas Supported",
                body: "Filevine is optimized for US plaintiff/PI practice. Atticus supports Ontario real estate, family, corporate, estate, criminal, civil litigation, and regulatory practice.",
              },
            ].map((card, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-3">{card.title}</h3>
                <p className="text-slate-600">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-emerald-600 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">The Ontario-Built Filevine Alternative</h2>
          <p className="text-emerald-100 mb-8 text-lg">
            Purpose-built for Ontario. No implementation project. Flat CAD pricing.
          </p>
          <a
            href="https://getatticus.ca/sign-up"
            className="inline-block bg-white text-emerald-700 font-semibold px-8 py-4 rounded-lg hover:bg-emerald-50 transition-colors text-lg"
          >
            Start Free Trial
          </a>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}
