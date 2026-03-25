import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Practice Evolve Canada Alternative — Atticus vs Practice Evolve for Ontario Law Firms",
  description:
    "Comparing Practice Evolve with Atticus for Ontario law firms. Practice Evolve is an Australian legal practice management platform expanding to Canada. Atticus is purpose-built for Ontario with LSO By-Law 9 trust accounting, AI document analysis, and flat CAD pricing.",
  openGraph: {
    title: "Practice Evolve Canada Alternative — Atticus vs Practice Evolve for Ontario Law Firms",
    description:
      "Practice Evolve is an AU legal PM platform expanding to Canada. Atticus is built from inception for Ontario law firms.",
    type: "website",
    url: "https://getatticus.ca/practice-evolve-canada-alternative",
  },
  alternates: { canonical: "https://getatticus.ca/practice-evolve-canada-alternative" },
};

export default function PracticeEvolveCanadaAlternativePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Practice Evolve Canada Alternative — Atticus for Ontario Law Firms",
    description:
      "Compare Practice Evolve with Atticus for Ontario law firms. Atticus is purpose-built for Ontario with LSO By-Law 9 trust accounting, AI document analysis, and flat CAD pricing.",
    url: "https://getatticus.ca/practice-evolve-canada-alternative",
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
            Practice Evolve Canada Alternative
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
            Practice Evolve is an Australian legal practice management platform now expanding
            into the Canadian market. Atticus was built from day one for Ontario — LSO By-Law 9
            trust accounting, Ontario AI, flat CAD pricing.
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
            Atticus vs Practice Evolve Canada
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left p-4 font-semibold text-slate-700 border border-slate-200">Feature</th>
                  <th className="text-center p-4 font-semibold text-emerald-700 border border-slate-200 bg-emerald-50">Atticus</th>
                  <th className="text-center p-4 font-semibold text-slate-700 border border-slate-200">Practice Evolve Canada</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Origin & Design", "Built from inception for Ontario, Canada", "Australian platform expanding to Canada"],
                  ["LSO By-Law 9 Trust Accounting", "✅ Native — three-way reconciliation, mixed-fund prevention", "⚠️ AU trust accounting rules — adapting for Ontario requirements"],
                  ["AI Document Analysis", "✅ Built-in — limitation dates, Ontario statutes, LSO flags", "❌ No native AI document analysis for Ontario content"],
                  ["Ontario Limitations Act 2002", "✅ Native tracking — 2-year basic / 15-year ultimate", "❌ Not natively built for Ontario limitation periods"],
                  ["Pricing", "✅ $149 CAD/month per lawyer", "❌ Per-user pricing in AUD/USD — higher total cost"],
                  ["Currency & Tax", "✅ CAD with HST throughout", "⚠️ AUD/USD origin; CAD configuration required"],
                  ["Data Residency", "✅ Canadian — PIPEDA compliant", "⚠️ AU data infrastructure; Canadian region status unclear"],
                  ["Practice Area Coverage", "✅ Ontario practice areas pre-configured", "⚠️ AU/UK law practice areas; Ontario adaptation required"],
                  ["Setup & Onboarding", "✅ Works out of the box for Ontario firms", "⚠️ Configuration required for Ontario compliance"],
                ].map(([feature, atticus, pe], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="p-4 font-medium text-slate-700 border border-slate-200">{feature}</td>
                    <td className="p-4 text-center text-slate-700 border border-slate-200 bg-emerald-50/30">{atticus}</td>
                    <td className="p-4 text-center text-slate-600 border border-slate-200">{pe}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-slate-900">What Is Practice Evolve?</h2>
          <div className="space-y-4 text-slate-700">
            <p>
              Practice Evolve is a cloud-based legal practice management platform originally
              developed in Australia for Australian and UK law firms. It offers matter management,
              time recording, billing, trust accounting (designed for Australian Law Society rules),
              and document management.
            </p>
            <p>
              Practice Evolve has been expanding its reach into the Canadian market. However,
              because it was designed for Australian law society trust accounting rules — which
              differ from Ontario&apos;s LSO By-Law 9 requirements — Ontario-specific features such as
              mixed-fund prohibition, three-way monthly reconciliation, and LSO audit compliance
              require customization. Similarly, the platform&apos;s practice area templates and precedent
              libraries reflect Australian and UK law, not Ontario practice.
            </p>
            <p>
              An Ontario firm evaluating Practice Evolve should carefully assess: (a) where client
              data is hosted and whether Canadian data residency is available; (b) whether trust
              accounting meets LSO By-Law 9 requirements specifically; and (c) the total cost
              including implementation and configuration to adapt the platform for Ontario practice.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">
            5 Reasons Ontario Law Firms Choose Atticus
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Ontario-First from Day One",
                body: "Atticus was built exclusively for Ontario law firms and paralegals. No AU/UK adaptation required. LSO By-Law 9, Ontario Limitations Act 2002, and Ontario practice area workflows are core features.",
              },
              {
                title: "Canadian Data Residency",
                body: "All client data is hosted in Canada, satisfying PIPEDA obligations and LSO cloud storage guidance on data sovereignty. No uncertainty about where your client data resides.",
              },
              {
                title: "AI Document Analysis for Ontario",
                body: "Atticus AI is trained on Ontario legal content — identifying limitation dates, Ontario statute references, and LSO compliance flags in uploaded documents. Practice Evolve has no comparable capability.",
              },
              {
                title: "Flat CAD Pricing",
                body: "One plan, $149 CAD/month, covers your entire firm. No per-user AUD/USD pricing, no implementation fees, no configuration charges to get it working for Ontario.",
              },
              {
                title: "Works Out of the Box",
                body: "Atticus is pre-configured for Ontario real estate, family, corporate, estate, and litigation practice. Log in and start managing matters — no AU/UK templates to replace.",
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
          <h2 className="text-3xl font-bold mb-4">The Ontario-Built Practice Evolve Alternative</h2>
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
