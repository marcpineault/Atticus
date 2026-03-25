import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MyCase Alternative for Ontario Lawyers | Atticus",
  description:
    "Looking for a MyCase alternative in Ontario? Atticus offers LSO By-Law 9 trust accounting, AI document intelligence, and Ontario-focused practice management at $149 CAD/month.",
  openGraph: {
    title: "MyCase Alternative for Ontario Lawyers | Atticus",
    description:
      "Compare MyCase vs Atticus. Ontario-built practice management with LSO trust accounting, Canadian data residency, and AI-powered document analysis.",
    type: "website",
    url: "https://getatticus.ca/mycase-alternative",
  },
  alternates: { canonical: "https://getatticus.ca/mycase-alternative" },
};

export default function MyCaseAlternativePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Atticus",
    description:
      "Ontario law practice management with LSO trust accounting, AI document analysis, and cloud-native architecture.",
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
              MyCase Alternative
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              The Ontario Alternative to MyCase
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              MyCase is built for US law firms. Atticus is built for Ontario — LSO By-Law 9 trust
              accounting, Canadian data residency, and AI document intelligence designed for
              the Ontario legal market.
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
              MyCase vs Atticus — Feature Comparison
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-sm border border-slate-200">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left py-4 px-6 font-semibold text-slate-700">Feature</th>
                    <th className="text-center py-4 px-6 font-semibold text-slate-500">MyCase</th>
                    <th className="text-center py-4 px-6 font-semibold text-amber-600">Atticus</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    ["Ontario LSO By-Law 9 Trust Accounting", "✗", "✓"],
                    ["Canadian Data Residency", "✗", "✓"],
                    ["Ontario Market Focus", "✗ (US)", "✓"],
                    ["AI Document Analysis", "Limited", "✓"],
                    ["Client Portal", "✓", "✓"],
                    ["Time Tracking & HST Billing", "USD only", "CAD/HST ✓"],
                    ["Matter Management", "✓", "✓"],
                    ["Ontario Limitation Period Tracking", "✗", "✓"],
                    ["Online Payments", "✓ (US only)", "Coming soon"],
                    ["Pricing (CAD)", "~$80–$130/mo", "$49/mo"],
                  ].map(([feature, mycase, atticus]) => (
                    <tr key={feature} className="hover:bg-slate-50 transition-colors">
                      <td className="py-4 px-6 text-slate-700 font-medium">{feature}</td>
                      <td className="py-4 px-6 text-center text-slate-500">{mycase}</td>
                      <td className="py-4 px-6 text-center font-semibold text-amber-600">{atticus}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* What is MyCase */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">What Is MyCase?</h2>
            <p className="text-lg text-slate-600 mb-4">
              MyCase is a US cloud-based legal practice management platform that offers case management,
              time tracking, billing, document storage, a client portal, and online payment processing
              (LawPay integration). It is popular among US small and solo law firms for its clean
              interface and client communication features.
            </p>
            <p className="text-lg text-slate-600 mb-4">
              MyCase serves the American legal market exclusively. Its trust accounting module is
              designed for US state bar IOLTA requirements — not the LSO&apos;s By-Law 9 framework for
              Ontario solicitors. Billing is in USD, online payments process through US payment
              processors, and data is stored on US infrastructure.
            </p>
            <p className="text-lg text-slate-600">
              Ontario firms evaluating MyCase typically discover that the US-centric design creates
              significant compliance gaps — no HST billing configuration, no LSO trust accounting
              rules, and no Canadian data residency. These are not optional features for Ontario
              law firms; they are regulatory requirements.
            </p>
          </div>
        </section>

        {/* Why Atticus */}
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              Why Ontario Lawyers Choose Atticus Over MyCase
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  LSO By-Law 9 Trust Accounting — Not IOLTA
                </h3>
                <p className="text-slate-600">
                  MyCase&apos;s trust accounting is built around US IOLTA (Interest on Lawyers&apos; Trust Accounts)
                  rules — each state has different bar requirements. LSO By-Law 9 is a comprehensive
                  Ontario-specific framework covering client trust ledgers, monthly reconciliations,
                  pooled trust interest through LAWPRO, transfer authorizations, and the annual trust
                  report. Atticus implements By-Law 9 natively — no configuration required.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  CAD Billing with HST
                </h3>
                <p className="text-slate-600">
                  Atticus generates client invoices in Canadian dollars with HST calculated and
                  itemized at the correct Ontario rate (currently 13% HST). MyCase bills in USD
                  and does not have HST tax treatment built in. Ontario law firms billing in USD
                  create unnecessary confusion for clients and complications for GST/HST remittance.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Canadian Data Residency for Client Confidentiality
                </h3>
                <p className="text-slate-600">
                  Atticus stores all client data — matters, documents, communications — in Canada.
                  This is essential for Ontario lawyers&apos; obligations under the LSO Rules of
                  Professional Conduct (confidentiality) and PIPEDA. MyCase data is stored on US
                  AWS infrastructure, which may be subject to US government access requests under
                  the CLOUD Act.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  AI Document Intelligence for Ontario Law
                </h3>
                <p className="text-slate-600">
                  Atticus&apos;s AI is trained to understand Ontario legal documents — real estate
                  transactions, employment contracts, corporate resolutions, family law agreements,
                  and civil pleadings — extracting key facts, dates, and obligations automatically.
                  MyCase&apos;s document features are storage and template-based, without AI analytical
                  capability.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Ontario Limitation Period Tracking
                </h3>
                <p className="text-slate-600">
                  Atticus automatically surfaces Ontario Limitations Act 2002 deadlines — the
                  2-year basic period, the 15-year ultimate limit, and specialty limitation periods
                  for specific claims. MyCase&apos;s calendar and deadlines features are general-purpose
                  and do not understand Ontario statutory limitation rules.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Simple Pricing in CAD</h2>
            <p className="text-lg text-slate-600 mb-6">
              MyCase pricing ranges from approximately $49–$89 USD per user per month depending on
              plan tier — after currency conversion, that&apos;s $68–$124 CAD per user per month. For
              a three-lawyer firm, the annual MyCase cost can reach $4,464 CAD or more.
            </p>
            <p className="text-lg text-slate-600">
              Atticus is $149 CAD/month for the whole firm — not per user. All features included,
              no add-on modules. For most Ontario solo and small firms, the annual saving switching
              from MyCase to Atticus is $1,000–$3,000+.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 bg-slate-900 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Switch from MyCase?
            </h2>
            <p className="text-slate-300 text-lg mb-8">
              Atticus gives Ontario lawyers everything MyCase offers — and adds LSO trust accounting,
              Canadian data residency, HST billing, and AI document intelligence built for Canada.
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
