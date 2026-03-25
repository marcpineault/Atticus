import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Filevine Alternative for Ontario Lawyers | Atticus",
  description:
    "Looking for a Filevine alternative in Ontario? Atticus offers LSO By-Law 9 trust accounting, AI document intelligence, and Ontario-focused practice management at $149 CAD/month.",
  openGraph: {
    title: "Filevine Alternative for Ontario Lawyers | Atticus",
    description:
      "Compare Filevine vs Atticus. Ontario-built practice management with LSO trust accounting, Canadian data residency, HST billing, and AI document analysis for Canadian law firms.",
    type: "website",
    url: "https://getatticus.ca/filevine-alternative",
  },
  alternates: { canonical: "https://getatticus.ca/filevine-alternative" },
};

export default function FilevineAlternativePage() {
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
              Filevine Alternative
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              The Ontario Alternative to Filevine
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Filevine is a US enterprise legal operations platform. Atticus is built for Ontario —
              LSO By-Law 9 trust accounting, AI document intelligence, and practice management
              right-sized and right-priced for Canadian solo and small firms.
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
              Filevine vs Atticus — Feature Comparison
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-sm border border-slate-200">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left py-4 px-6 font-semibold text-slate-700">Feature</th>
                    <th className="text-center py-4 px-6 font-semibold text-slate-500">Filevine</th>
                    <th className="text-center py-4 px-6 font-semibold text-amber-600">Atticus</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    ["Ontario LSO By-Law 9 Trust Accounting", "✗", "✓"],
                    ["Canadian Data Residency", "✗", "✓"],
                    ["Ontario Market Focus", "✗ (US)", "✓"],
                    ["AI Document Analysis", "✓ (enterprise)", "✓"],
                    ["Small Firm Pricing", "✗ (enterprise)", "✓ ($149 CAD/month)"],
                    ["Time Tracking & HST Billing", "USD only", "CAD/HST ✓"],
                    ["Matter Management", "✓", "✓"],
                    ["Ontario Limitation Period Tracking", "✗", "✓"],
                    ["No Implementation Fee", "✗", "✓"],
                    ["Setup Time", "Weeks/months", "Minutes"],
                  ].map(([feature, fv, atticus]) => (
                    <tr key={feature} className="hover:bg-slate-50 transition-colors">
                      <td className="py-4 px-6 text-slate-700 font-medium">{feature}</td>
                      <td className="py-4 px-6 text-center text-slate-500">{fv}</td>
                      <td className="py-4 px-6 text-center font-semibold text-amber-600">{atticus}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* What is Filevine */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">What Is Filevine?</h2>
            <p className="text-lg text-slate-600 mb-4">
              Filevine is a US enterprise legal operations platform primarily targeting mid-size to
              large US plaintiff litigation firms — personal injury, mass tort, and class action
              practices. It offers case management, document management, AI document review, e-signature,
              and custom workflow automation.
            </p>
            <p className="text-lg text-slate-600 mb-4">
              Filevine is a powerful platform, but it is designed for enterprise US firms. Its pricing
              reflects enterprise positioning: custom contracts, implementation fees, and ongoing
              support costs that typically put the total cost well above $200 USD per user per month
              once fully deployed. It is not designed for Ontario solo or small firms.
            </p>
            <p className="text-lg text-slate-600">
              Like all US platforms, Filevine lacks LSO By-Law 9 trust accounting, Canadian data
              residency, and Ontario-specific legal intelligence. For Ontario solo and small firms,
              Filevine is both over-priced and under-configured for the Canadian market.
            </p>
          </div>
        </section>

        {/* Why Atticus */}
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              Why Ontario Lawyers Choose Atticus Over Filevine
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Right-Sized for Ontario Solo and Small Firms
                </h3>
                <p className="text-slate-600">
                  Atticus is purpose-built for 1–20 lawyer Ontario firms. No implementation project,
                  no enterprise contract, no IT department required. Sign up, connect your data, and
                  start managing matters and trust accounts in minutes. Filevine requires weeks or months
                  of implementation and ongoing configuration support.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  LSO By-Law 9 Trust Accounting — Ontario-Specific
                </h3>
                <p className="text-slate-600">
                  Atticus implements the full LSO trust accounting framework out of the box. Filevine
                  does not include trust accounting — Ontario firms using Filevine must maintain a
                  separate trust accounting system, creating reconciliation overhead and compliance risk.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  AI Built for Ontario Law
                </h3>
                <p className="text-slate-600">
                  Atticus&apos;s AI is trained on Ontario legal documents — understanding OBCA/CBCA corporate
                  resolutions, LSO trust accounting rules, Ontario court forms, and Ontario-specific
                  legislation. Filevine&apos;s AI focuses on US litigation document review. The difference
                  matters when your client&apos;s matter involves Ontario statutes and Ontario courts.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  $149 CAD/Month — Per Lawyer
                </h3>
                <p className="text-slate-600">
                  Atticus is $149 CAD/month, all features included, month-to-month. No implementation
                  fee, no annual lock-in, no per-seat pricing. Filevine requires a custom contract
                  negotiation and typically involves implementation costs of $5,000–$50,000+ for larger
                  firms. For an Ontario solo practitioner or small firm, there is no comparison.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Canadian Data Residency
                </h3>
                <p className="text-slate-600">
                  Atticus stores all data in Canada. Filevine data is stored on US infrastructure.
                  For Ontario law firms handling sensitive client matters, Canadian data residency is
                  an important protection against confidentiality risks under the LSO Rules of
                  Professional Conduct.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 bg-slate-900 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              The Ontario Alternative to Filevine
            </h2>
            <p className="text-slate-300 text-lg mb-8">
              Atticus gives Ontario solo and small firms enterprise-quality features at solo-firm
              pricing — LSO trust accounting, AI document intelligence, and Canadian data residency
              for $149 CAD/month.
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
