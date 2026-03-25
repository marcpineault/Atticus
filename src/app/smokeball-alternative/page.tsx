import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Smokeball Alternative for Ontario Lawyers | Atticus",
  description:
    "Looking for a Smokeball alternative in Ontario? Atticus offers LSO By-Law 9 trust accounting, AI document analysis, and matter management built for Canadian law firms. Compare features.",
  openGraph: {
    title: "Smokeball Alternative for Ontario Lawyers | Atticus",
    description:
      "Compare Smokeball vs Atticus for Ontario law practice management. Atticus is purpose-built for LSO compliance, Canadian data residency, and AI-powered legal work.",
    type: "website",
    url: "https://getatticus.ca/smokeball-alternative",
  },
  alternates: { canonical: "https://getatticus.ca/smokeball-alternative" },
};

export default function SmokeballAlternativePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Atticus",
    description:
      "Ontario law practice management with LSO trust accounting, AI document analysis, and matter management.",
    applicationCategory: "LegalSoftware",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "49",
      priceCurrency: "CAD",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-amber-500 text-slate-900 text-sm font-semibold px-4 py-1 rounded-full mb-6">
              Smokeball Alternative
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              The Ontario-Focused Alternative to Smokeball
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Smokeball is built for Australia and the US. Atticus is built for Ontario — LSO By-Law 9
              trust accounting, AI document intelligence, and matter management designed for Canadian law firms.
            </p>
            <a
              href="/sign-up"
              className="inline-block bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold py-4 px-10 rounded-lg text-lg transition-colors"
            >
              Start Free Trial
            </a>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">
              Smokeball vs Atticus — Feature Comparison
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-sm border border-slate-200">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left py-4 px-6 font-semibold text-slate-700">Feature</th>
                    <th className="text-center py-4 px-6 font-semibold text-slate-500">Smokeball</th>
                    <th className="text-center py-4 px-6 font-semibold text-amber-600">Atticus</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    ["Ontario LSO By-Law 9 Trust Accounting", "✗", "✓"],
                    ["Canadian Data Residency", "✗", "✓"],
                    ["Ontario Market Focus", "✗ (AU/US)", "✓"],
                    ["AI Document Analysis", "Limited", "✓"],
                    ["Time Tracking & HST Billing", "✓", "✓"],
                    ["Matter Management", "✓", "✓"],
                    ["Ontario Limitation Period Tracking", "✗", "✓"],
                    ["Built-in Conflict Checking", "✓", "✓"],
                    ["Pricing (CAD)", "~$199+/mo", "$49/mo"],
                  ].map(([feature, smokeball, atticus]) => (
                    <tr key={feature} className="hover:bg-slate-50 transition-colors">
                      <td className="py-4 px-6 text-slate-700 font-medium">{feature}</td>
                      <td className="py-4 px-6 text-center text-slate-500">{smokeball}</td>
                      <td className="py-4 px-6 text-center font-semibold text-amber-600">{atticus}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* What is Smokeball */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">What Is Smokeball?</h2>
            <p className="text-lg text-slate-600 mb-4">
              Smokeball is a legal practice management platform founded in Australia, with operations
              expanded to the US and UK. It offers matter management, time tracking, document automation,
              and billing features for small and mid-size law firms.
            </p>
            <p className="text-lg text-slate-600 mb-4">
              While Smokeball has a polished interface and strong document automation capabilities,
              it was not built with Ontario or Canadian legal requirements in mind. Its trust
              accounting module follows Australian and US state bar rules, not the LSO&apos;s By-Law 9
              requirements for Ontario solicitors.
            </p>
            <p className="text-lg text-slate-600">
              Ontario law firms considering Smokeball typically discover that significant customization
              is required to comply with LSO regulations — customization that Atticus has already built
              from the ground up.
            </p>
          </div>
        </section>

        {/* Why Atticus */}
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              Why Ontario Lawyers Choose Atticus Over Smokeball
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  LSO By-Law 9 Trust Accounting — Built In
                </h3>
                <p className="text-slate-600">
                  Atticus implements the full LSO By-Law 9 framework: client trust ledgers, general trust
                  accounts, monthly reconciliations, pooled trust interest (LAWPRO), and the annual trust
                  report. Every transaction is timestamped and audit-ready for LSO spot checks or
                  compliance reviews. Smokeball&apos;s trust accounting is not configured for Ontario rules.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Canadian Data Residency
                </h3>
                <p className="text-slate-600">
                  Client data processed and stored in Atticus resides in Canada. For Ontario law firms
                  handling sensitive family, estate, criminal, or corporate matters, Canadian data
                  residency is critical for confidentiality obligations and PIPEDA compliance. Smokeball&apos;s
                  primary data infrastructure is not Canada-based.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  AI Document Intelligence for Ontario Law
                </h3>
                <p className="text-slate-600">
                  Atticus&apos;s AI analyzes Ontario legal documents — affidavits, commercial leases, APS
                  agreements, corporate resolutions, employment contracts — and extracts key facts,
                  parties, dates, and obligations. The model understands Ontario-specific legislation
                  and court forms. Smokeball&apos;s document automation is template-driven rather than
                  AI-analytical.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Ontario Limitation Period Tracking
                </h3>
                <p className="text-slate-600">
                  Atticus automatically flags the 2-year basic limitation period under the Limitations
                  Act 2002 and surfaces extended periods for specific causes of action — s.4 general
                  claims, s.15 ultimate limitation period (15 years), and specialty claims under the
                  Real Property Limitations Act and Construction Act. Limitation period oversight is
                  a top cause of LSO complaints and malpractice claims.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Transparent Pricing in CAD
                </h3>
                <p className="text-slate-600">
                  Atticus is $149 CAD/month — all features included, no per-user add-ons, no separate
                  modules. Smokeball&apos;s pricing converts from AUD/USD and typically runs $150–$250+ CAD
                  per user per month when fully configured. For small Ontario firms, the price difference
                  is significant.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Smokeball Limitations */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Smokeball&apos;s Limitations for Ontario Firms
            </h2>
            <ul className="space-y-4 text-lg text-slate-600">
              <li className="flex gap-3">
                <span className="text-red-500 font-bold mt-1">✗</span>
                <span>Trust accounting module not configured for LSO By-Law 9 — monthly reconciliation, trust-to-general transfer rules, LAWPRO interest all require manual workarounds</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-500 font-bold mt-1">✗</span>
                <span>No Canadian data residency — client data may be stored on servers in the US or Australia, creating PIPEDA and confidentiality concerns</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-500 font-bold mt-1">✗</span>
                <span>Document templates designed for Australian and US law — Ontario court forms, LSO compliance documents, and OBCA/CBCA templates not natively supported</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-500 font-bold mt-1">✗</span>
                <span>No built-in Ontario Limitations Act 2002 tracking — deadline management requires manual docketing or third-party add-on</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-500 font-bold mt-1">✗</span>
                <span>HST billing configuration not natively set up for Canadian tax rules — firms must manually configure GST/HST rate and reporting</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-500 font-bold mt-1">✗</span>
                <span>Higher cost after currency conversion — $150–$250+ CAD/user/month vs Atticus at $149 CAD/month</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Who Atticus is For */}
        <section className="py-16 px-4 bg-amber-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Who Atticus Is Built For</h2>
            <p className="text-lg text-slate-600 mb-6">
              Atticus is purpose-built for Ontario solo and small law firms (1–20 lawyers) across
              practice areas including real estate, family law, corporate/commercial, estate planning,
              civil litigation, employment, criminal defence, and immigration.
            </p>
            <p className="text-lg text-slate-600 mb-6">
              If you&apos;re a general practitioner in Ontario who needs trust accounting that works out of
              the box, AI that understands Ontario documents, and billing in CAD without currency
              conversion headaches — Atticus is the right fit.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
              {[
                "Real Estate Lawyers",
                "Family Lawyers",
                "Corporate/Commercial",
                "Estate Lawyers",
                "Litigation Counsel",
                "Employment Lawyers",
                "Criminal Defence",
                "Immigration Lawyers",
                "General Practice",
              ].map((practice) => (
                <div
                  key={practice}
                  className="bg-white rounded-lg px-4 py-3 text-center text-sm font-medium text-slate-700 border border-amber-200"
                >
                  {practice}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 bg-slate-900 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Switch from Smokeball?
            </h2>
            <p className="text-slate-300 text-lg mb-8">
              Join Ontario law firms that have moved to Atticus for LSO-compliant trust accounting,
              AI document intelligence, and practice management built for Canada.
            </p>
            <a
              href="/sign-up"
              className="inline-block bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold py-4 px-10 rounded-lg text-lg transition-colors"
            >
              Start Free Trial — $149 CAD/month
            </a>
            <p className="mt-4 text-slate-400 text-sm">No credit card required. Cancel anytime.</p>
          </div>
        </section>
      </main>
    </>
  );
}
