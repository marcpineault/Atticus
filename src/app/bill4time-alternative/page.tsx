import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bill4Time Alternative for Ontario Lawyers | Atticus",
  description:
    "Looking for a Bill4Time alternative in Ontario? Atticus offers integrated LSO By-Law 9 trust accounting, AI document analysis, and Ontario-focused practice management at $149 CAD/month.",
  openGraph: {
    title: "Bill4Time Alternative for Ontario Lawyers | Atticus",
    description:
      "Compare Bill4Time vs Atticus. Ontario-built practice management with LSO trust accounting, HST billing, Canadian data residency, and AI document analysis — all in one platform.",
    type: "website",
    url: "https://getatticus.ca/bill4time-alternative",
  },
  alternates: { canonical: "https://getatticus.ca/bill4time-alternative" },
};

export default function Bill4TimeAlternativePage() {
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
              Bill4Time Alternative
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              The Ontario Alternative to Bill4Time
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Bill4Time is a US time tracking and billing platform. Atticus offers a complete
              Ontario practice management solution — integrated trust accounting, AI document
              intelligence, and HST-compliant billing in one platform.
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
              Bill4Time vs Atticus — Feature Comparison
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-sm border border-slate-200">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left py-4 px-6 font-semibold text-slate-700">Feature</th>
                    <th className="text-center py-4 px-6 font-semibold text-slate-500">Bill4Time</th>
                    <th className="text-center py-4 px-6 font-semibold text-amber-600">Atticus</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    ["Ontario LSO By-Law 9 Trust Accounting", "✗", "✓"],
                    ["Canadian Data Residency", "✗", "✓"],
                    ["Integrated Practice Management", "✗ (billing only)", "✓"],
                    ["AI Document Analysis", "✗", "✓"],
                    ["HST-Compliant Billing", "Manual config", "✓ Native"],
                    ["Matter Management", "Limited", "✓"],
                    ["Time Tracking", "✓", "✓"],
                    ["Ontario Limitation Period Tracking", "✗", "✓"],
                    ["Flat Pricing (CAD)", "USD only", "$149 CAD/month"],
                  ].map(([feature, b4t, atticus]) => (
                    <tr key={feature} className="hover:bg-slate-50 transition-colors">
                      <td className="py-4 px-6 text-slate-700 font-medium">{feature}</td>
                      <td className="py-4 px-6 text-center text-slate-500">{b4t}</td>
                      <td className="py-4 px-6 text-center font-semibold text-amber-600">{atticus}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* What is Bill4Time */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">What Is Bill4Time?</h2>
            <p className="text-lg text-slate-600 mb-4">
              Bill4Time is a US cloud-based time tracking and billing platform that serves law firms
              and professional service businesses. It focuses on time entry, invoice generation, expense
              tracking, and basic client and project management. It is owned by Paradigm.
            </p>
            <p className="text-lg text-slate-600 mb-4">
              Bill4Time is a billing tool, not a full practice management platform. It does not include
              trust accounting, matter management beyond basic project tracking, or document management.
              Ontario lawyers using Bill4Time still need a separate trust accounting system — creating
              dual-system overhead and reconciliation challenges.
            </p>
            <p className="text-lg text-slate-600">
              Additionally, Bill4Time bills in USD, does not include Canadian HST tax treatment,
              and stores data on US infrastructure. For Ontario law firms, it is a billing add-on
              to an otherwise incomplete stack.
            </p>
          </div>
        </section>

        {/* Why Atticus */}
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              Why Ontario Lawyers Choose Atticus Over Bill4Time
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  One Platform — Billing + Trust + Matter Management
                </h3>
                <p className="text-slate-600">
                  Atticus is a complete practice management platform — time tracking, billing, trust
                  accounting, matter management, document analysis, and limitation period tracking
                  in one place. Bill4Time covers only billing and basic project management. Ontario
                  lawyers on Bill4Time need to maintain separate trust accounting software, pay for
                  multiple subscriptions, and reconcile across systems.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  LSO By-Law 9 Trust Accounting
                </h3>
                <p className="text-slate-600">
                  Atticus includes full Ontario trust accounting — client trust ledgers, trust
                  reconciliations, LAWPRO interest, and the annual trust report. Bill4Time has
                  no trust accounting capability whatsoever. Ontario lawyers using Bill4Time
                  typically pair it with another bookkeeping system for trust management, creating
                  two-system complexity.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Native HST Billing in CAD
                </h3>
                <p className="text-slate-600">
                  Atticus generates Ontario-compliant invoices with 13% HST applied natively in
                  Canadian dollars. Bill4Time requires manual tax rate configuration and bills in
                  USD by default. For Ontario lawyers, billing in USD creates confusion for clients
                  and potential HST reporting errors.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  AI Document Intelligence
                </h3>
                <p className="text-slate-600">
                  Atticus uses AI to analyze Ontario legal documents, extracting key facts, parties,
                  and dates automatically. Bill4Time is a billing tool with no document capabilities
                  beyond basic storage. The AI layer is what differentiates modern practice management
                  from a simple timekeeping tool.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  $149 CAD/Month — Per Lawyer
                </h3>
                <p className="text-slate-600">
                  Atticus is $149 CAD/month per lawyer per month — all features, all users. Bill4Time
                  charges per user (approximately $27–$44 USD per user per month), does not include
                  trust accounting, and requires a separate practice management system. Total stack
                  cost for a three-lawyer Ontario firm using Bill4Time plus a trust accounting tool
                  typically exceeds $300 CAD per month.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 bg-slate-900 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Replace Bill4Time with a Complete Ontario Platform
            </h2>
            <p className="text-slate-300 text-lg mb-8">
              Atticus replaces Bill4Time and your trust accounting software in one platform — LSO
              By-Law 9 trust accounting, AI document intelligence, HST billing, and $149 CAD/month.
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
