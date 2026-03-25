import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proclaim Canada Alternative — Atticus vs Proclaim for Ontario Law Firms",
  description:
    "Comparing Proclaim (Eclipse Legal Systems UK) with Atticus for Ontario law firms. Proclaim is a UK legal practice management platform. Atticus is purpose-built for Ontario with LSO By-Law 9 trust accounting, AI document analysis, and flat CAD pricing.",
  openGraph: {
    title: "Proclaim Canada Alternative — Atticus vs Proclaim for Ontario Law Firms",
    description:
      "Proclaim is a UK legal PM platform. Atticus is built from inception for Ontario law firms — LSO By-Law 9, Ontario AI, flat CAD pricing.",
    type: "website",
    url: "https://getatticus.ca/proclaim-canada-alternative",
  },
  alternates: { canonical: "https://getatticus.ca/proclaim-canada-alternative" },
};

export default function ProclaimCanadaAlternativePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Proclaim Canada Alternative — Atticus for Ontario Law Firms",
    description:
      "Compare Proclaim with Atticus for Ontario law firms. Atticus is purpose-built for Ontario with LSO By-Law 9 trust accounting, AI document analysis, and flat CAD pricing.",
    url: "https://getatticus.ca/proclaim-canada-alternative",
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
            Proclaim Canada Alternative
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
            Proclaim by Eclipse Legal Systems is a UK legal practice management platform.
            Atticus was built from day one for Ontario — LSO By-Law 9 trust accounting,
            Ontario AI, flat CAD pricing.
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
            Atticus vs Proclaim
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left p-4 font-semibold text-slate-700 border border-slate-200">Feature</th>
                  <th className="text-center p-4 font-semibold text-emerald-700 border border-slate-200 bg-emerald-50">Atticus</th>
                  <th className="text-center p-4 font-semibold text-slate-700 border border-slate-200">Proclaim (Eclipse UK)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Origin & Design", "Built from inception for Ontario, Canada", "UK platform designed for Solicitors Regulation Authority rules"],
                  ["LSO By-Law 9 Trust Accounting", "✅ Native — three-way reconciliation, mixed-fund prevention", "❌ UK SRA client account rules — not LSO By-Law 9"],
                  ["AI Document Analysis", "✅ Built-in — limitation dates, Ontario statutes, LSO flags", "❌ No native AI document analysis for Ontario content"],
                  ["Ontario Limitations Act 2002", "✅ Native tracking — 2-year basic / 15-year ultimate", "❌ UK Limitation Act 1980 basis; Ontario not native"],
                  ["Pricing", "✅ $149 CAD/month per lawyer", "❌ Per-user GBP/USD licensing — higher total cost"],
                  ["Currency & Tax", "✅ CAD with HST throughout", "❌ GBP/USD origin; HST and CAD configuration required"],
                  ["Data Residency", "✅ Canadian — PIPEDA compliant", "❌ UK/EU data infrastructure — GDPR not PIPEDA"],
                  ["Practice Area Coverage", "✅ Ontario practice areas pre-configured", "❌ UK conveyancing/litigation precedents; Ontario adaptation required"],
                  ["Setup & Onboarding", "✅ Works out of the box for Ontario firms", "❌ Significant configuration required for Ontario practice"],
                ].map(([feature, atticus, proclaim], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="p-4 font-medium text-slate-700 border border-slate-200">{feature}</td>
                    <td className="p-4 text-center text-slate-700 border border-slate-200 bg-emerald-50/30">{atticus}</td>
                    <td className="p-4 text-center text-slate-600 border border-slate-200">{proclaim}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-slate-900">What Is Proclaim?</h2>
          <div className="space-y-4 text-slate-700">
            <p>
              Proclaim is a legal practice management and case management software developed by
              Eclipse Legal Systems in the United Kingdom. It is widely used by UK solicitor firms
              for personal injury, conveyancing, clinical negligence, and commercial matters.
              Proclaim provides workflow automation, document management, billing, and client
              account management compliant with SRA (Solicitors Regulation Authority) rules.
            </p>
            <p>
              Proclaim is not designed for Ontario or Canadian legal requirements. Its client account
              management is built for UK SRA rules, which differ fundamentally from LSO By-Law 9
              trust accounting obligations. Document precedents, workflow templates, and limitation
              period calculators reflect UK law — not Ontario practice.
            </p>
            <p>
              An Ontario firm considering Proclaim would face substantial configuration work
              to adapt the platform for Ontario compliance: LSO By-Law 9 trust accounting,
              Ontario Limitations Act 2002 tracking, HST billing in CAD, and Ontario court
              form and practice area workflows.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">
            5 Reasons Ontario Law Firms Choose Atticus Over Proclaim
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Built for LSO, Not SRA",
                body: "Proclaim&apos;s client account rules reflect UK SRA requirements. Atticus is built for LSO By-Law 9 — three-way reconciliation, mixed-fund prevention, and monthly reconciliation as required by Ontario regulations.",
              },
              {
                title: "Canadian Data Under PIPEDA",
                body: "Proclaim data resides in UK/EU infrastructure subject to GDPR. Atticus keeps all client data in Canada, satisfying PIPEDA obligations and LSO cloud storage guidance on data sovereignty.",
              },
              {
                title: "Ontario AI Document Analysis",
                body: "Atticus AI identifies Ontario limitation dates, Ontario statute references, and LSO compliance flags in uploaded documents. Proclaim has no comparable AI document analysis capability.",
              },
              {
                title: "Flat CAD Pricing",
                body: "Proclaim charges GBP/USD per user. Atticus is $149 CAD/month for your entire firm — no UK licensing overhead, no currency exposure, no configuration fees.",
              },
              {
                title: "Ontario Practice Areas Native",
                body: "Atticus is pre-configured for Ontario real estate, family, corporate, estate, criminal, and civil litigation practice. No UK precedent replacement required.",
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
          <h2 className="text-3xl font-bold mb-4">The Ontario-Built Proclaim Alternative</h2>
          <p className="text-emerald-100 mb-8 text-lg">
            Purpose-built for Ontario. Canadian data. Flat CAD pricing.
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
