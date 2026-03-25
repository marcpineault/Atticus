import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Smokeball Alternative for Ontario Law Firms — Atticus vs Smokeball",
  description:
    "Comparing Smokeball with Atticus for Ontario law firms. Smokeball is a US and Australian legal practice management platform. Atticus is purpose-built for Ontario with LSO By-Law 9 trust accounting, AI document analysis, and flat CAD pricing.",
  openGraph: {
    title: "Smokeball Alternative for Ontario Law Firms — Atticus vs Smokeball",
    description:
      "Smokeball is a US/AU legal PM platform. Atticus is built from inception for Ontario law firms — LSO By-Law 9, Ontario AI, flat CAD pricing.",
    type: "website",
    url: "https://getatticus.ca/smokeball-us-alternative",
  },
  alternates: { canonical: "https://getatticus.ca/smokeball-us-alternative" },
};

export default function SmokeballUsAlternativePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Smokeball Alternative for Ontario Law Firms — Atticus vs Smokeball",
    description:
      "Compare Smokeball with Atticus for Ontario law firms. Atticus is purpose-built for Ontario with LSO By-Law 9 trust accounting, AI document analysis, and flat CAD pricing.",
    url: "https://getatticus.ca/smokeball-us-alternative",
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
            Smokeball Alternative for Ontario Law Firms
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
            Smokeball is a US and Australian legal practice management platform with automated
            time capture. Atticus was built from day one for Ontario — LSO By-Law 9 trust
            accounting, Ontario AI, flat CAD pricing.
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
            Atticus vs Smokeball
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left p-4 font-semibold text-slate-700 border border-slate-200">Feature</th>
                  <th className="text-center p-4 font-semibold text-emerald-700 border border-slate-200 bg-emerald-50">Atticus</th>
                  <th className="text-center p-4 font-semibold text-slate-700 border border-slate-200">Smokeball</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Origin & Design", "Built from inception for Ontario, Canada", "US/AU platform adapting for Canadian market"],
                  ["LSO By-Law 9 Trust Accounting", "✅ Native — three-way reconciliation, mixed-fund prevention", "⚠️ US/AU trust accounting adapted — verify Ontario compliance"],
                  ["AI Document Analysis", "✅ Built-in — limitation dates, Ontario statutes, LSO flags", "⚠️ AI features US/AU-focused — not Ontario-specific content"],
                  ["Automated Time Capture", "✅ Built-in time tracking", "✅ Automated time capture — Smokeball key feature"],
                  ["Ontario Limitations Act 2002", "✅ Native tracking — 2-year basic / 15-year ultimate", "❌ Not natively built for Ontario limitation periods"],
                  ["Pricing", "✅ $149 CAD/month per lawyer", "❌ Per-user USD pricing — $149-199+ USD/user/month"],
                  ["Currency & Tax", "✅ CAD with HST throughout", "❌ USD pricing; HST configuration required"],
                  ["Data Residency", "✅ Canadian — PIPEDA compliant", "⚠️ US data centres primarily; Canadian residency verify"],
                  ["Ontario Court Forms", "✅ Ontario practice workflows pre-built", "❌ US/AU forms; Ontario adaptation required"],
                ].map(([feature, atticus, smokeball], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="p-4 font-medium text-slate-700 border border-slate-200">{feature}</td>
                    <td className="p-4 text-center text-slate-700 border border-slate-200 bg-emerald-50/30">{atticus}</td>
                    <td className="p-4 text-center text-slate-600 border border-slate-200">{smokeball}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-slate-900">Smokeball for Ontario Law Firms</h2>
          <div className="space-y-4 text-slate-700">
            <p>
              Smokeball is a cloud-based legal practice management platform developed originally
              in Australia and now primarily marketed in the United States, with a separate
              Smokeball Canada offering expanding into the Canadian market. Smokeball is well
              known for its automated time capture feature, which passively records time spent
              in documents and applications without requiring manual timekeeping.
            </p>
            <p>
              Ontario firms evaluating Smokeball should carefully consider: (a) whether the
              Canadian version&apos;s trust accounting meets LSO By-Law 9 requirements — mixed-fund
              prevention, three-way monthly reconciliation, and audit compliance — rather than
              the US IOLTA or AU Law Society rules the platform was originally built for;
              (b) where client data is stored and whether Canadian data residency is confirmed;
              and (c) the total per-user cost, which can reach $149-199+ USD per user per month
              for full-featured plans.
            </p>
            <p>
              Smokeball&apos;s document library includes US and AU precedents. Ontario-specific
              real estate precedents, family law documents, and corporate templates require
              configuration or custom creation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">
            5 Reasons Ontario Firms Choose Atticus Over Smokeball
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Ontario-Native Trust Accounting",
                body: "Atticus trust accounting is built for LSO By-Law 9 from inception — three-way reconciliation, mixed-fund prevention, audit-ready ledgers. Smokeball&apos;s trust accounting was designed for US and AU bar rules.",
              },
              {
                title: "Ontario AI Document Analysis",
                body: "Atticus AI identifies Ontario limitation dates, Ontario statute references, and LSO compliance flags. Smokeball&apos;s AI is built for US and AU legal content.",
              },
              {
                title: "Flat CAD Pricing",
                body: "Smokeball charges $149-199+ USD per user per month. A 5-lawyer Ontario firm pays $900-1,200+ CAD per month. Atticus is $149 CAD/month for your entire firm.",
              },
              {
                title: "Canadian Data Residency",
                body: "Atticus keeps all client data in Canada under PIPEDA. Smokeball primarily uses US data centres — verify Canadian data residency before committing.",
              },
              {
                title: "Ontario Precedents Pre-Built",
                body: "Atticus comes pre-configured for Ontario real estate, family, corporate, estate, and litigation practice. No US/AU precedent library to replace.",
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
          <h2 className="text-3xl font-bold mb-4">The Ontario-Built Smokeball Alternative</h2>
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
