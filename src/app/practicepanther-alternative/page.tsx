import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PracticePanther Alternative for Ontario Lawyers | Atticus",
  description:
    "Looking for a PracticePanther alternative in Ontario? Atticus offers LSO By-Law 9 trust accounting, AI document intelligence, and Ontario-focused practice management at $149 CAD/month.",
  openGraph: {
    title: "PracticePanther Alternative for Ontario Lawyers | Atticus",
    description:
      "Compare PracticePanther vs Atticus. Ontario-built practice management with LSO trust accounting, Canadian data residency, HST billing, and AI document analysis.",
    type: "website",
    url: "https://getatticus.ca/practicepanther-alternative",
  },
  alternates: { canonical: "https://getatticus.ca/practicepanther-alternative" },
};

export default function PracticePantherAlternativePage() {
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
              PracticePanther Alternative
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              The Ontario Alternative to PracticePanther
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              PracticePanther is a US law practice management platform. Atticus is built for Ontario —
              LSO By-Law 9 trust accounting, AI document intelligence, HST billing, and practice management
              designed for Canadian law firms.
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
              PracticePanther vs Atticus — Feature Comparison
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-sm border border-slate-200">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left py-4 px-6 font-semibold text-slate-700">Feature</th>
                    <th className="text-center py-4 px-6 font-semibold text-slate-500">PracticePanther</th>
                    <th className="text-center py-4 px-6 font-semibold text-amber-600">Atticus</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    ["Ontario LSO By-Law 9 Trust Accounting", "✗", "✓"],
                    ["Canadian Data Residency", "✗", "✓"],
                    ["Ontario Market Focus", "✗ (US)", "✓"],
                    ["AI Document Analysis", "✗", "✓"],
                    ["Time Tracking & HST Billing", "USD only", "CAD/HST ✓"],
                    ["Matter Management", "✓", "✓"],
                    ["Document Automation", "✓", "✓"],
                    ["Ontario Limitation Period Tracking", "✗", "✓"],
                    ["Client Portal", "✓", "✓"],
                    ["Pricing (CAD)", "~$70–$120/mo", "$49/mo"],
                  ].map(([feature, panther, atticus]) => (
                    <tr key={feature} className="hover:bg-slate-50 transition-colors">
                      <td className="py-4 px-6 text-slate-700 font-medium">{feature}</td>
                      <td className="py-4 px-6 text-center text-slate-500">{panther}</td>
                      <td className="py-4 px-6 text-center font-semibold text-amber-600">{atticus}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* What is PracticePanther */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">What Is PracticePanther?</h2>
            <p className="text-lg text-slate-600 mb-4">
              PracticePanther is a US cloud-based legal practice management platform offering matter
              management, time tracking, billing, document automation, a client portal, and integrations
              with popular tools like QuickBooks and Zapier. It is owned by Assembly Software.
            </p>
            <p className="text-lg text-slate-600 mb-4">
              PracticePanther is popular among US solo and small law firms for its ease of use and
              broad feature set. However, its design is entirely US-centric — billing is in USD,
              trust accounting follows US state bar IOLTA rules rather than LSO By-Law 9, and
              data is stored on US infrastructure.
            </p>
            <p className="text-lg text-slate-600">
              Ontario law firms evaluating PracticePanther find that the compliance gaps are
              significant. The LSO&apos;s By-Law 9 trust accounting requirements are substantially
              more detailed and specific than US IOLTA rules — and non-compliance can lead to
              LSO discipline and LAWPRO coverage issues.
            </p>
          </div>
        </section>

        {/* Why Atticus */}
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              Why Ontario Lawyers Choose Atticus Over PracticePanther
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  LSO By-Law 9 Trust Accounting
                </h3>
                <p className="text-slate-600">
                  Atticus implements the complete LSO By-Law 9 framework: client trust ledgers with
                  individual client balances, general trust account, trust-to-general transfers on
                  billing, monthly bank reconciliation workflow, LAWPRO interest on pooled trust,
                  and the annual trust report format. PracticePanther&apos;s trust accounting is designed
                  for US IOLTA — fundamentally different from the Ontario framework.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  AI Document Intelligence
                </h3>
                <p className="text-slate-600">
                  Atticus uses AI to analyze Ontario legal documents, extracting key facts, parties,
                  dates, and deadlines from affidavits, agreements, corporate documents, and court
                  filings. PracticePanther offers document templates and storage, but no AI document
                  analysis. This means every lawyer on Atticus gets a tool that actually reads and
                  understands their files.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Canadian Data Residency and Privacy
                </h3>
                <p className="text-slate-600">
                  Atticus stores all data in Canada. PracticePanther data is stored on US-based
                  infrastructure, creating potential PIPEDA compliance and confidentiality concerns
                  when lawyers upload sensitive client documents. Under the LSO Rules of Professional
                  Conduct, Ontario lawyers must take reasonable steps to ensure the security and
                  confidentiality of client information.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  HST-Compliant Billing in CAD
                </h3>
                <p className="text-slate-600">
                  Atticus generates client invoices in Canadian dollars with 13% HST calculated
                  and displayed in compliance with CRA requirements. PracticePanther bills in USD
                  and requires manual HST configuration. Ontario lawyers billing US-configured
                  software risk creating HST remittance errors.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  $149 CAD/Month Per Lawyer
                </h3>
                <p className="text-slate-600">
                  Atticus is $149 CAD/month per lawyer per month — all features included, no per-user
                  pricing. PracticePanther charges per user: approximately $49–$89 USD per user per
                  month (Solo, Essential, Business tiers), which after currency conversion equals
                  $68–$124 CAD per user per month. A three-lawyer firm on PracticePanther pays
                  $2,448–$4,464 CAD per year versus $588 on Atticus.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 bg-slate-900 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Switch from PracticePanther?
            </h2>
            <p className="text-slate-300 text-lg mb-8">
              Atticus is the Ontario-first alternative — LSO-compliant trust accounting, AI document
              intelligence, Canadian data residency, and $149 CAD/month pricing.
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
