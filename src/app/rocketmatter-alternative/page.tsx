import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rocket Matter Alternative for Ontario Lawyers | Atticus",
  description:
    "Looking for a Rocket Matter alternative in Ontario? Atticus offers LSO By-Law 9 trust accounting, AI document intelligence, HST billing, and Ontario-focused practice management at $149 CAD/month.",
  openGraph: {
    title: "Rocket Matter Alternative for Ontario Lawyers | Atticus",
    description:
      "Compare Rocket Matter vs Atticus. Ontario-built practice management with LSO trust accounting, Canadian data residency, HST billing, and AI document analysis for Canadian law firms.",
    type: "website",
    url: "https://getatticus.ca/rocketmatter-alternative",
  },
  alternates: { canonical: "https://getatticus.ca/rocketmatter-alternative" },
};

export default function RocketMatterAlternativePage() {
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
              Rocket Matter Alternative
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              The Ontario Alternative to Rocket Matter
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Rocket Matter is a US law practice management platform. Atticus is built for Ontario —
              LSO By-Law 9 trust accounting, Canadian data residency, HST billing, and AI document
              intelligence designed for the Ontario legal market.
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
              Rocket Matter vs Atticus — Feature Comparison
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-sm border border-slate-200">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left py-4 px-6 font-semibold text-slate-700">Feature</th>
                    <th className="text-center py-4 px-6 font-semibold text-slate-500">Rocket Matter</th>
                    <th className="text-center py-4 px-6 font-semibold text-amber-600">Atticus</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    ["Ontario LSO By-Law 9 Trust Accounting", "✗", "✓"],
                    ["Canadian Data Residency", "✗", "✓"],
                    ["Ontario Market Focus", "✗ (US)", "✓"],
                    ["AI Document Analysis", "Limited", "✓"],
                    ["Time Tracking & HST Billing", "USD only", "CAD/HST ✓"],
                    ["Matter Management", "✓", "✓"],
                    ["Project Management View", "✓", "✓"],
                    ["Ontario Limitation Period Tracking", "✗", "✓"],
                    ["Flat Pricing (not per-user)", "✗", "✓"],
                    ["Pricing (CAD)", "~$100–$200/mo", "$49/mo"],
                  ].map(([feature, rm, atticus]) => (
                    <tr key={feature} className="hover:bg-slate-50 transition-colors">
                      <td className="py-4 px-6 text-slate-700 font-medium">{feature}</td>
                      <td className="py-4 px-6 text-center text-slate-500">{rm}</td>
                      <td className="py-4 px-6 text-center font-semibold text-amber-600">{atticus}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* What is Rocket Matter */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">What Is Rocket Matter?</h2>
            <p className="text-lg text-slate-600 mb-4">
              Rocket Matter is a US cloud-based legal practice management platform that offers matter
              management, time tracking, billing, document storage, a project management view (Kanban
              and calendar), and reporting. It is owned by ProfitSolv and targets US solo and small
              law firms.
            </p>
            <p className="text-lg text-slate-600 mb-4">
              Rocket Matter&apos;s project management approach to case tracking — using Kanban-style boards
              to visualize matter progress — differentiates it from some competitors. However, the
              platform is designed exclusively for the US market: billing in USD, trust accounting
              for US state bar IOLTA, and data storage on US infrastructure.
            </p>
            <p className="text-lg text-slate-600">
              Ontario firms considering Rocket Matter face the same compliance gap as with other US
              platforms — no LSO By-Law 9 trust accounting, no HST billing, no Canadian data
              residency. These are not optional features; they are regulatory requirements for
              Ontario law firms.
            </p>
          </div>
        </section>

        {/* Why Atticus */}
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              Why Ontario Lawyers Choose Atticus Over Rocket Matter
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  LSO By-Law 9 Trust Accounting — Built In, Not Bolted On
                </h3>
                <p className="text-slate-600">
                  Atticus implements Ontario&apos;s trust accounting rules from the ground up: separate
                  client trust ledgers, trust-to-general transfers, monthly bank reconciliation
                  workflow, LAWPRO interest, and annual trust report. Rocket Matter&apos;s trust accounting
                  follows US state bar rules — fundamentally different from the LSO&apos;s By-Law 9
                  framework and requiring significant manual configuration to approximate compliance.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  AI Document Intelligence
                </h3>
                <p className="text-slate-600">
                  Atticus uses AI to analyze Ontario legal documents — extracting key facts, parties,
                  dates, and obligations from contracts, pleadings, corporate documents, and real estate
                  files. Rocket Matter&apos;s document capabilities are template and storage-based. The AI
                  analytical layer is what separates a modern legal platform from a glorified filing cabinet.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Canadian Data Residency
                </h3>
                <p className="text-slate-600">
                  Atticus stores all data in Canada. Rocket Matter data resides on US servers, potentially
                  subject to US government access requests. For Ontario lawyers handling sensitive client
                  matters — family law, criminal defence, commercial disputes — Canadian data residency
                  is an important protection for client confidentiality obligations under the LSO Rules.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  $149 CAD/Month Per Lawyer
                </h3>
                <p className="text-slate-600">
                  Atticus charges $149 CAD/month per lawyer per month — not per user. Rocket Matter
                  charges per user, with pricing running approximately $65–$89 USD per user per month
                  after currency conversion. A two-lawyer firm on Rocket Matter pays approximately
                  $2,184–$2,964 CAD per year; on Atticus, $588 CAD per year. The savings compound
                  every year.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Practice Areas */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Ontario Practice Areas Atticus Serves</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "Real Estate Law",
                "Family Law",
                "Corporate/Commercial",
                "Estate Planning & Probate",
                "Civil Litigation",
                "Employment Law",
                "Criminal Defence",
                "Immigration",
                "Personal Injury",
                "Construction Law",
                "Landlord & Tenant",
                "General Practice",
              ].map((practice) => (
                <div
                  key={practice}
                  className="bg-amber-50 rounded-lg px-4 py-3 text-center text-sm font-medium text-slate-700 border border-amber-200"
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
              Ready to Switch from Rocket Matter?
            </h2>
            <p className="text-slate-300 text-lg mb-8">
              Atticus is the Ontario alternative — LSO-compliant trust accounting, AI document
              intelligence, Canadian data residency, and flat $149 CAD/month pricing.
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
