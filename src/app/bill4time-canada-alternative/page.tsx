import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bill4Time Canada Alternative — Atticus vs Bill4Time for Ontario Law Firms",
  description:
    "Comparing Bill4Time with Atticus for Ontario law firms. Bill4Time is a US cloud legal time tracking and billing platform. Atticus is purpose-built for Ontario with LSO By-Law 9 trust accounting, AI document analysis, and flat CAD pricing.",
  openGraph: {
    title: "Bill4Time Canada Alternative — Atticus vs Bill4Time for Ontario Law Firms",
    description:
      "Bill4Time is a US cloud legal time and billing platform. Atticus is built for Ontario law firms — LSO By-Law 9, Ontario AI, flat CAD pricing.",
    type: "website",
    url: "https://getatticus.ca/bill4time-canada-alternative",
  },
  alternates: { canonical: "https://getatticus.ca/bill4time-canada-alternative" },
};

export default function Bill4TimeCanadaAlternativePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Bill4Time Canada Alternative — Atticus for Ontario Law Firms",
    description:
      "Compare Bill4Time with Atticus for Ontario law firms. Atticus is purpose-built for Ontario with LSO By-Law 9 trust accounting, AI document analysis, and flat CAD pricing.",
    url: "https://getatticus.ca/bill4time-canada-alternative",
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
            Bill4Time Canada Alternative
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
            Bill4Time is a US cloud legal time tracking and billing platform. Atticus was built
            for Ontario — LSO By-Law 9 trust accounting, Ontario AI, flat CAD pricing.
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
            Atticus vs Bill4Time
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left p-4 font-semibold text-slate-700 border border-slate-200">Feature</th>
                  <th className="text-center p-4 font-semibold text-emerald-700 border border-slate-200 bg-emerald-50">Atticus</th>
                  <th className="text-center p-4 font-semibold text-slate-700 border border-slate-200">Bill4Time</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Primary Function", "Full Ontario practice management platform", "Time tracking and billing — limited PM features"],
                  ["LSO By-Law 9 Trust Accounting", "✅ Native — three-way reconciliation, mixed-fund prevention", "❌ US billing platform — trust accounting not designed for LSO By-Law 9"],
                  ["AI Document Analysis", "✅ Built-in — limitation dates, Ontario statutes, LSO flags", "❌ No AI document analysis"],
                  ["Matter Management", "✅ Full matter management built-in", "⚠️ Basic matter management — primarily billing-focused"],
                  ["Ontario Limitations Act 2002", "✅ Native tracking", "❌ Not built for Ontario limitation periods"],
                  ["Pricing", "✅ $149 CAD/month per lawyer", "❌ $27-80+ USD/user/month depending on plan"],
                  ["Currency & Tax", "✅ CAD with HST throughout", "❌ USD billing; HST configuration required"],
                  ["Data Residency", "✅ Canadian — PIPEDA compliant", "❌ US data centres"],
                  ["Client Portal", "✅ Included", "⚠️ Limited portal features — primarily for invoicing"],
                ].map(([feature, atticus, b4t], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="p-4 font-medium text-slate-700 border border-slate-200">{feature}</td>
                    <td className="p-4 text-center text-slate-700 border border-slate-200 bg-emerald-50/30">{atticus}</td>
                    <td className="p-4 text-center text-slate-600 border border-slate-200">{b4t}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-slate-900">What Is Bill4Time?</h2>
          <div className="space-y-4 text-slate-700">
            <p>
              Bill4Time is a US cloud-based legal time tracking and billing platform. It allows
              attorneys and firms to track time, create invoices, manage expenses, and accept
              online payments. Bill4Time is used primarily by solo practitioners and small law
              firms that prioritize billing features over comprehensive practice management.
            </p>
            <p>
              Bill4Time is not a full practice management platform in the way that Clio or
              PCLaw are. It lacks robust matter management, client intake workflows, document
              management, and AI analysis. As a billing-focused tool designed for US law firms,
              it does not include LSO By-Law 9 trust accounting compliance features — mixed-fund
              prevention, three-way reconciliation, and LSO audit-ready ledgers require a
              separate solution or workarounds.
            </p>
            <p>
              For Ontario law firms, Bill4Time creates an additional problem: all data is stored
              in US data centres, raising PIPEDA compliance concerns. HST billing in CAD
              requires configuration. The platform does not track Ontario limitation periods
              under the <em>Limitations Act 2002</em>.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">
            5 Reasons Ontario Firms Choose Atticus Over Bill4Time
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Complete Practice Management",
                body: "Bill4Time is primarily a billing tool. Atticus is a complete Ontario practice management platform — matter management, trust accounting, AI document analysis, deadline tracking, and billing in one product.",
              },
              {
                title: "LSO By-Law 9 Compliance",
                body: "Bill4Time is a US billing tool without LSO By-Law 9 trust accounting. Atticus is built for Ontario — three-way reconciliation, mixed-fund prevention, and audit-ready ledgers are core features.",
              },
              {
                title: "Flat CAD Pricing",
                body: "Bill4Time charges $27-80+ USD per user. Atticus is $149 CAD/month for your entire firm — billing, trust accounting, AI, matter management, and deadlines all included.",
              },
              {
                title: "Canadian Data Residency",
                body: "Bill4Time stores data in US data centres. Atticus keeps all client data in Canada, satisfying PIPEDA obligations and LSO cloud storage guidance.",
              },
              {
                title: "AI Document Analysis",
                body: "Atticus AI identifies Ontario limitation dates, statute references, and LSO compliance flags in uploaded documents. Bill4Time has no AI capability.",
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
          <h2 className="text-3xl font-bold mb-4">More Than Billing — Ontario Practice Management</h2>
          <p className="text-emerald-100 mb-8 text-lg">
            LSO By-Law 9 trust accounting, AI analysis, matter management. All in one. $149 CAD/month.
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
