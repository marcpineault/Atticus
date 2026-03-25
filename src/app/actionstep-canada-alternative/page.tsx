import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Actionstep Canada Alternative — Atticus vs Actionstep for Ontario Law Firms",
  description:
    "Comparing Actionstep Canada with Atticus for Ontario law firms. Actionstep is a New Zealand-origin cloud platform adapting to the Canadian market. Atticus is purpose-built for Ontario with LSO By-Law 9 trust accounting, AI document analysis, and flat-fee CAD pricing.",
  openGraph: {
    title: "Actionstep Canada Alternative — Atticus vs Actionstep for Ontario Law Firms",
    description:
      "Actionstep is a NZ/AU/US cloud practice management platform now available in Canada. Atticus is built from inception for Ontario practice requirements.",
    type: "website",
    url: "https://getatticus.ca/actionstep-canada-alternative",
  },
  alternates: { canonical: "https://getatticus.ca/actionstep-canada-alternative" },
};

export default function ActionstepCanadaAlternativePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Actionstep Canada Alternative — Atticus for Ontario Law Firms",
    description:
      "Compare Actionstep Canada with Atticus for Ontario law firms. Atticus is purpose-built for Ontario with LSO By-Law 9 trust accounting, AI document analysis, and flat CAD pricing.",
    url: "https://getatticus.ca/actionstep-canada-alternative",
    publisher: {
      "@type": "Organization",
      name: "Atticus",
      url: "https://getatticus.ca",
    },
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-emerald-500 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            Ontario Law Firm Software
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Actionstep Canada Alternative
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
            Actionstep originated in New Zealand and expanded to AU/US/Canada. Atticus was built
            from day one for Ontario law firms — LSO By-Law 9 trust accounting, Ontario AI, flat CAD pricing.
          </p>
          <a
            href="https://getatticus.ca/sign-up"
            className="inline-block bg-emerald-500 hover:bg-emerald-400 text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
          >
            Try Atticus Free
          </a>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">
            Atticus vs Actionstep Canada
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left p-4 font-semibold text-slate-700 border border-slate-200">Feature</th>
                  <th className="text-center p-4 font-semibold text-emerald-700 border border-slate-200 bg-emerald-50">
                    Atticus
                  </th>
                  <th className="text-center p-4 font-semibold text-slate-700 border border-slate-200">
                    Actionstep Canada
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Origin & Design", "Built from inception for Ontario, Canada", "Originated in New Zealand; expanded to AU/US/Canada"],
                  ["LSO By-Law 9 Trust Accounting", "✅ Native — three-way reconciliation, mixed-fund prevention", "⚠️ Adapted — not originally designed for Ontario requirements"],
                  ["AI Document Analysis", "✅ Built-in — limitation dates, Ontario statutes, LSO flags", "❌ No native AI document analysis"],
                  ["Ontario Limitations Act 2002", "✅ Native tracking — 2-year basic / 15-year ultimate", "❌ Not natively built for Ontario limitation periods"],
                  ["Pricing", "✅ $149 CAD/month per lawyer", "❌ Per-user pricing — costs scale with firm size"],
                  ["Currency & Tax", "✅ CAD with HST throughout", "⚠️ Multi-currency configuration required"],
                  ["Data Residency", "✅ Canadian — PIPEDA compliant", "⚠️ Multi-region; Canadian region available but verify"],
                  ["Workflow Customization", "✅ Ontario practice-area workflows pre-built", "⚠️ Highly customizable but requires configuration effort"],
                  ["Setup & Onboarding", "✅ Works out of the box for Ontario firms", "⚠️ Configuration-heavy — workflows must be built out"],
                ].map(([feature, atticus, actionstep], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="p-4 font-medium text-slate-700 border border-slate-200">{feature}</td>
                    <td className="p-4 text-center text-slate-700 border border-slate-200 bg-emerald-50/30">{atticus}</td>
                    <td className="p-4 text-center text-slate-600 border border-slate-200">{actionstep}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* What Is Actionstep */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-slate-900">What Is Actionstep?</h2>
          <div className="space-y-4 text-slate-700">
            <p>
              Actionstep is a cloud-based legal practice management platform founded in New Zealand
              and now available in Australia, the United States, the United Kingdom, and Canada.
              It is known for its highly configurable workflow engine, allowing firms to customize
              matter workflows, document templates, and automation sequences.
            </p>
            <p>
              In Canada, Actionstep competes with Clio and PCLaw as a cloud practice management
              option. However, because it was designed as a global platform rather than built
              specifically for Ontario, several Ontario-specific requirements require additional
              configuration: LSO By-Law 9 trust accounting rules, HST billing in CAD, Ontario
              Limitations Act 2002 deadline tracking, and Ontario court form workflows.
            </p>
            <p>
              Actionstep charges per user, meaning a 5-lawyer Ontario firm pays substantially more
              than a single-lawyer firm for identical functionality. The platform&apos;s strength —
              deep configurability — is also a practical barrier: Ontario firms often need significant
              setup time before Actionstep is operational for their practice.
            </p>
          </div>
        </div>
      </section>

      {/* 5 Reasons */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">
            5 Reasons Ontario Law Firms Choose Atticus
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Ontario-First from Day One",
                body: "Atticus was built exclusively for Ontario law firms and paralegals. LSO By-Law 9 trust accounting, Ontario Limitations Act 2002 tracking, and Ontario-specific AI are core features — not configuration add-ons.",
              },
              {
                title: "Flat CAD Pricing",
                body: "One plan, $149 CAD/month, covers your entire firm. Unlike Actionstep's per-user model, Atticus pricing doesn't punish you for growing your practice or adding articling students.",
              },
              {
                title: "AI Document Analysis Built-In",
                body: "Upload any document and Atticus AI identifies Ontario limitation dates, statute references, and LSO compliance flags. Actionstep has no comparable native AI document analysis capability.",
              },
              {
                title: "Works Out of the Box",
                body: "Atticus comes pre-configured for Ontario practice areas — real estate, family, corporate, estate, litigation. No workflow builder required before you can start managing matters.",
              },
              {
                title: "Canadian Data Residency",
                body: "All client data stays in Canada, satisfying PIPEDA obligations and LSO cloud storage guidance on data sovereignty and encryption standards.",
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

      {/* CTA */}
      <section className="py-20 px-4 bg-emerald-600 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            The Ontario-Built Actionstep Alternative
          </h2>
          <p className="text-emerald-100 mb-8 text-lg">
            Purpose-built for Ontario firms. Flat CAD pricing. No configuration required.
          </p>
          <a
            href="https://getatticus.ca/sign-up"
            className="inline-block bg-white text-emerald-700 font-semibold px-8 py-4 rounded-lg hover:bg-emerald-50 transition-colors text-lg"
          >
            Start Free Trial
          </a>
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}
