import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cosmolex Canada Alternative — Atticus vs Cosmolex for Ontario Law Firms",
  description:
    "Comparing Cosmolex with Atticus for Ontario law firms. Cosmolex is a US cloud practice management platform with built-in accounting. Atticus is purpose-built for Ontario with LSO By-Law 9 trust accounting, Ontario AI, and flat CAD pricing.",
  openGraph: {
    title: "Cosmolex Canada Alternative — Atticus vs Cosmolex for Ontario Law Firms",
    description:
      "Cosmolex is a US cloud PM with built-in accounting designed for US IOLTA rules. Atticus is built for Ontario LSO By-Law 9 compliance from inception.",
    type: "website",
    url: "https://getatticus.ca/cosmolex-canada-alternative",
  },
  alternates: { canonical: "https://getatticus.ca/cosmolex-canada-alternative" },
};

export default function CosmolexCanadaAlternativePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Cosmolex Canada Alternative — Atticus for Ontario Law Firms",
    description:
      "Compare Cosmolex with Atticus for Ontario law firms. Atticus is purpose-built for LSO By-Law 9 trust accounting, AI document analysis, and flat CAD pricing.",
    url: "https://getatticus.ca/cosmolex-canada-alternative",
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
            Cosmolex Canada Alternative
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
            Cosmolex is a US cloud practice management platform with built-in accounting designed
            for American IOLTA rules. Atticus is built from day one for Ontario — LSO By-Law 9
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
            Atticus vs Cosmolex
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left p-4 font-semibold text-slate-700 border border-slate-200">Feature</th>
                  <th className="text-center p-4 font-semibold text-emerald-700 border border-slate-200 bg-emerald-50">Atticus</th>
                  <th className="text-center p-4 font-semibold text-slate-700 border border-slate-200">Cosmolex</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Origin & Design", "Built from inception for Ontario, Canada", "US platform designed for American law firms"],
                  ["LSO By-Law 9 Trust Accounting", "✅ Native — three-way reconciliation, mixed-fund prevention", "❌ US IOLTA trust accounting — not LSO By-Law 9"],
                  ["AI Document Analysis", "✅ Built-in — limitation dates, Ontario statutes, LSO flags", "❌ No native AI document analysis for Ontario legal content"],
                  ["Built-in Accounting", "✅ Trust accounting + billing built-in", "✅ Built-in accounting — Cosmolex strength"],
                  ["Ontario Limitations Act 2002", "✅ Native tracking — 2-year basic / 15-year ultimate", "❌ Not natively built for Ontario limitation periods"],
                  ["Pricing", "✅ $149 CAD/month per lawyer", "❌ Per-user USD pricing — $89/user/month base"],
                  ["Currency & Tax", "✅ CAD with HST throughout", "❌ USD billing; HST not native"],
                  ["Data Residency", "✅ Canadian — PIPEDA compliant", "❌ US data centres — data sovereignty concern"],
                  ["Ontario Court Workflows", "✅ Pre-configured Ontario practice areas", "❌ US workflows; Ontario configuration required"],
                ].map(([feature, atticus, cosmolex], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="p-4 font-medium text-slate-700 border border-slate-200">{feature}</td>
                    <td className="p-4 text-center text-slate-700 border border-slate-200 bg-emerald-50/30">{atticus}</td>
                    <td className="p-4 text-center text-slate-600 border border-slate-200">{cosmolex}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-slate-900">What Is Cosmolex?</h2>
          <div className="space-y-4 text-slate-700">
            <p>
              Cosmolex is a US cloud-based legal practice management and accounting platform
              designed primarily for American small and mid-size law firms. Its key differentiator
              is fully integrated accounting — replacing the need for separate QuickBooks or separate
              billing software for US firms.
            </p>
            <p>
              Some Canadian law firms use Cosmolex. However, Cosmolex&apos;s accounting and trust
              management was designed for US IOLTA (Interest on Lawyers&apos; Trust Accounts) rules,
              which differ materially from LSO By-Law 9 in Ontario. The mixed-fund prohibition,
              three-way reconciliation requirements, and monthly reconciliation obligations specific
              to Ontario practice require configuration or workarounds in a US-built system.
            </p>
            <p>
              Cosmolex charges approximately $89 USD per user per month. A 5-lawyer Ontario firm
              on Cosmolex pays roughly $560+ CAD per month, compared to $149 CAD/month with
              Atticus — and still lacks Ontario-specific AI document analysis and Ontario
              limitation period tracking.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">
            5 Reasons Ontario Law Firms Choose Atticus Over Cosmolex
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "LSO By-Law 9 — Not US IOLTA",
                body: "Cosmolex trust accounting is built for US IOLTA rules. Atticus is built for LSO By-Law 9 from inception — three-way reconciliation, mixed-fund prevention, and audit-ready ledgers as required by Ontario regulations.",
              },
              {
                title: "Ontario AI Document Analysis",
                body: "Atticus AI identifies Ontario limitation dates, Ontario statute references, and LSO compliance issues in uploaded documents. Cosmolex has no comparable AI document analysis capability.",
              },
              {
                title: "Canadian Data Residency",
                body: "Cosmolex stores data in US data centres. Atticus keeps all client data in Canada, satisfying PIPEDA obligations and LSO cloud storage guidance.",
              },
              {
                title: "Flat CAD Pricing",
                body: "Cosmolex charges ~$89 USD per user. Atticus is $149 CAD/month for your entire firm — no per-user scaling, no currency exposure, no accounting add-ons required.",
              },
              {
                title: "Ontario-Native from Day One",
                body: "Atticus was built exclusively for Ontario law firms and paralegals — Ontario Limitations Act 2002 tracking, Ontario practice area workflows, LSO CPD tracking guidance. No US-to-Ontario adaptation.",
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
          <h2 className="text-3xl font-bold mb-4">The Ontario-Built Cosmolex Alternative</h2>
          <p className="text-emerald-100 mb-8 text-lg">
            Purpose-built for Ontario. LSO By-Law 9 native. Flat CAD pricing.
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
