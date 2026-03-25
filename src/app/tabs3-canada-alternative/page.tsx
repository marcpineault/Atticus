import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tabs3 Canada Alternative — Atticus vs Tabs3 for Ontario Law Firms",
  description:
    "Comparing Tabs3 with Atticus for Ontario law firms. Tabs3 is a US legal billing and practice management software used by some Canadian firms. Atticus is purpose-built for Ontario with LSO By-Law 9 trust accounting, AI document analysis, and flat CAD pricing.",
  openGraph: {
    title: "Tabs3 Canada Alternative — Atticus vs Tabs3 for Ontario Law Firms",
    description:
      "Tabs3 is a US legal billing platform used by some Canadian firms. Atticus is built for Ontario law firms — LSO By-Law 9, Ontario AI, flat CAD pricing.",
    type: "website",
    url: "https://getatticus.ca/tabs3-canada-alternative",
  },
  alternates: { canonical: "https://getatticus.ca/tabs3-canada-alternative" },
};

export default function Tabs3CanadaAlternativePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Tabs3 Canada Alternative — Atticus for Ontario Law Firms",
    description:
      "Compare Tabs3 with Atticus for Ontario law firms. Atticus is purpose-built for Ontario with LSO By-Law 9 trust accounting, AI document analysis, and flat CAD pricing.",
    url: "https://getatticus.ca/tabs3-canada-alternative",
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
            Tabs3 Canada Alternative
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
            Tabs3 is a US legal billing and practice management software suite used by some
            Canadian law firms. Atticus was built for Ontario — LSO By-Law 9 trust accounting,
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
            Atticus vs Tabs3
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left p-4 font-semibold text-slate-700 border border-slate-200">Feature</th>
                  <th className="text-center p-4 font-semibold text-emerald-700 border border-slate-200 bg-emerald-50">Atticus</th>
                  <th className="text-center p-4 font-semibold text-slate-700 border border-slate-200">Tabs3</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Platform Type", "Cloud-native — browser-based anywhere", "Desktop-installed Windows software"],
                  ["LSO By-Law 9 Trust Accounting", "✅ Native — three-way reconciliation, mixed-fund prevention", "⚠️ US trust accounting rules — not LSO By-Law 9 native"],
                  ["AI Document Analysis", "✅ Built-in — limitation dates, Ontario statutes, LSO flags", "❌ No AI document analysis"],
                  ["Ontario Limitations Act 2002", "✅ Native tracking — 2-year basic / 15-year ultimate", "❌ Not built for Ontario limitation periods"],
                  ["Cloud Access", "✅ Browser-based — any device, anywhere", "❌ Windows desktop installation — VPN/remote desktop for remote access"],
                  ["Pricing", "✅ $149 CAD/month per lawyer", "❌ Per-user USD licensing plus annual maintenance"],
                  ["Currency & Tax", "✅ CAD with HST throughout", "⚠️ USD-origin; HST configuration required"],
                  ["Billing Features", "✅ Built-in CAD billing with HST", "✅ Strong billing — Tabs3 traditional strength"],
                  ["Setup & Maintenance", "✅ Cloud — no installation or IT infrastructure", "❌ Windows server installation — IT overhead"],
                ].map(([feature, atticus, tabs3], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="p-4 font-medium text-slate-700 border border-slate-200">{feature}</td>
                    <td className="p-4 text-center text-slate-700 border border-slate-200 bg-emerald-50/30">{atticus}</td>
                    <td className="p-4 text-center text-slate-600 border border-slate-200">{tabs3}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-slate-900">What Is Tabs3?</h2>
          <div className="space-y-4 text-slate-700">
            <p>
              Tabs3 is a legal billing software suite developed by Software Technology LLC in
              Nebraska, USA. It has been in the market since the 1970s and is used by many small
              and mid-size US law firms, as well as some Canadian firms that adopted it before
              modern cloud alternatives became available. The Tabs3 suite includes Tabs3 Billing,
              PracticeMaster (case management), and Tabs3 Financials (general ledger and trust).
            </p>
            <p>
              Tabs3 installs on Windows servers and workstations. Remote access requires a VPN
              or remote desktop connection to the office server — there is no native browser-based
              cloud access. This creates IT overhead, dependency on Windows infrastructure, and
              challenges for remote work.
            </p>
            <p>
              While Tabs3 has a trust accounting module, its trust accounting was designed for
              US IOLTA rules. Ontario&apos;s LSO By-Law 9 requirements — specifically the mixed-fund
              prohibition, three-way monthly reconciliation, and LSO audit compliance — require
              configuration and customization. HST billing requires configuration rather than
              being native to the platform.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">
            5 Reasons Ontario Firms Choose Atticus Over Tabs3
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Cloud-Native vs Desktop",
                body: "Atticus runs in any browser — no installation, no VPN, no Windows server. Tabs3 requires a Windows installation and IT infrastructure. Access Atticus from any device, anywhere.",
              },
              {
                title: "LSO By-Law 9 Native",
                body: "Atticus trust accounting is built for Ontario from inception — three-way reconciliation, mixed-fund prevention, HST billing in CAD. Tabs3 trust accounting is designed for US IOLTA rules.",
              },
              {
                title: "AI Document Analysis",
                body: "Atticus AI identifies Ontario limitation dates, statute references, and LSO compliance flags. Tabs3 has no AI document analysis capability.",
              },
              {
                title: "Flat CAD Pricing",
                body: "Tabs3 requires per-user USD licensing plus annual maintenance fees plus IT infrastructure costs. Atticus is $149 CAD/month — no Windows server, no IT overhead, no maintenance contracts.",
              },
              {
                title: "Modern Practice Management",
                body: "Atticus is built for modern Ontario practice — matter management, AI analysis, deadline tracking, client portal. Tabs3 is legacy billing software that predates cloud computing.",
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
          <h2 className="text-3xl font-bold mb-4">The Cloud Alternative to Tabs3</h2>
          <p className="text-emerald-100 mb-8 text-lg">
            Cloud-native. Ontario-built. Flat CAD pricing. No Windows server required.
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
