import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clio Grow Canada Alternative — Atticus vs Clio Grow for Ontario Law Firms",
  description:
    "Comparing Clio Grow with Atticus for Ontario law firms. Clio Grow is a legal CRM and intake product that requires a separate Clio Manage subscription. Atticus is an all-in-one Ontario practice management platform with built-in client intake.",
  openGraph: {
    title: "Clio Grow Canada Alternative — Atticus vs Clio Grow for Ontario Law Firms",
    description:
      "Clio Grow is a standalone legal CRM/intake add-on requiring separate Clio Manage subscription. Atticus is all-in-one Ontario practice management.",
    type: "website",
    url: "https://getatticus.ca/clio-grow-canada-alternative",
  },
  alternates: { canonical: "https://getatticus.ca/clio-grow-canada-alternative" },
};

export default function ClioGrowCanadaAlternativePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Clio Grow Canada Alternative — Atticus for Ontario Law Firms",
    description:
      "Compare Clio Grow with Atticus for Ontario law firms. Atticus includes client intake as part of complete Ontario practice management — no add-on subscription required.",
    url: "https://getatticus.ca/clio-grow-canada-alternative",
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
            Clio Grow Canada Alternative
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
            Clio Grow is a legal CRM and client intake product sold separately from Clio Manage.
            Atticus is an all-in-one Ontario practice management platform — intake, trust accounting,
            AI analysis, and billing in one flat-fee product.
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
            Atticus vs Clio Grow
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left p-4 font-semibold text-slate-700 border border-slate-200">Feature</th>
                  <th className="text-center p-4 font-semibold text-emerald-700 border border-slate-200 bg-emerald-50">Atticus</th>
                  <th className="text-center p-4 font-semibold text-slate-700 border border-slate-200">Clio Grow</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Product Scope", "Complete Ontario practice management platform", "Legal CRM and intake — requires separate Clio Manage subscription"],
                  ["Pricing", "✅ $149 CAD/month — everything included", "❌ $49 CAD/user/month Grow PLUS $79-149 CAD/user/month Manage = $128-198+/user/month combined"],
                  ["LSO By-Law 9 Trust Accounting", "✅ Native — three-way reconciliation, mixed-fund prevention", "❌ Clio Grow has no trust accounting — requires Manage"],
                  ["AI Document Analysis", "✅ Built-in — limitation dates, Ontario statutes, LSO flags", "❌ No AI document analysis"],
                  ["Client Intake", "✅ Built-in intake workflows", "✅ Intake and CRM — Clio Grow strength"],
                  ["Matter Management", "✅ Full matter management built-in", "❌ No matter management — requires Clio Manage"],
                  ["Billing", "✅ Built-in CAD billing with HST", "❌ No billing — requires Clio Manage"],
                  ["Data Residency", "✅ Canadian — PIPEDA compliant", "⚠️ Global Clio platform — US data centres"],
                  ["Ontario Limitations Act 2002", "✅ Native tracking", "❌ Not built into Clio Grow"],
                ].map(([feature, atticus, grow], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="p-4 font-medium text-slate-700 border border-slate-200">{feature}</td>
                    <td className="p-4 text-center text-slate-700 border border-slate-200 bg-emerald-50/30">{atticus}</td>
                    <td className="p-4 text-center text-slate-600 border border-slate-200">{grow}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-slate-900">What Is Clio Grow?</h2>
          <div className="space-y-4 text-slate-700">
            <p>
              Clio Grow is a legal CRM (Client Relationship Management) and client intake product
              sold by Clio (Themis Solutions Inc.) as a separate product from Clio Manage. Clio
              Grow provides lead management, automated intake workflows, intake forms, electronic
              signatures, and a client portal for new client intake.
            </p>
            <p>
              Clio Grow is designed as an add-on to Clio Manage, not a standalone practice
              management solution. To use both intake (Clio Grow) and billing/matter management
              (Clio Manage), Ontario firms pay two separate per-user subscriptions: Clio Grow
              (typically $49 CAD/user/month) plus Clio Manage (EasyStart $49, Essentials $79,
              Advanced $119, Complete $149 CAD/user/month). A 5-lawyer firm on Clio Grow plus
              Clio Manage Complete pays $1,990+ CAD/month for both products.
            </p>
            <p>
              By comparison, Atticus includes client intake, trust accounting, billing, matter
              management, and AI document analysis in a single product at $149 CAD/month
              per lawyer per month — regardless of headcount.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">
            5 Reasons Ontario Firms Choose Atticus Over Clio Grow
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Everything in One Product",
                body: "Clio Grow requires a separate Clio Manage subscription for billing, trust accounting, and matter management. Atticus includes intake, trust accounting, billing, AI analysis, and matter management in one platform.",
              },
              {
                title: "Dramatically Lower Cost",
                body: "Clio Grow + Clio Manage Complete = $198+/user/month for 5 lawyers = $1,990+/month. Atticus = $149 CAD/month for your entire firm. The savings fund two new associates.",
              },
              {
                title: "Ontario-Native Trust Accounting",
                body: "Clio Grow has no trust accounting — you still need Clio Manage (and must pay for Essentials or above to access trust features). Atticus includes LSO By-Law 9 trust accounting as a core feature.",
              },
              {
                title: "AI Document Analysis",
                body: "Atticus AI identifies Ontario limitation dates, statute references, and LSO compliance flags. Clio Grow is a CRM tool — it has no AI document analysis.",
              },
              {
                title: "Canadian Data Residency",
                body: "Atticus keeps all client data in Canada under PIPEDA. Clio uses US data centres — a concern for Ontario firms with strict data sovereignty requirements.",
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
          <h2 className="text-3xl font-bold mb-4">Everything Included. One Price.</h2>
          <p className="text-emerald-100 mb-8 text-lg">
            Intake, trust accounting, billing, AI analysis, matter management. $149 CAD/month.
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
