import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tabs3 Alternative for Ontario Lawyers | Atticus",
  description:
    "Looking for a Tabs3 alternative in Ontario? Atticus offers cloud-based LSO By-Law 9 trust accounting, AI document intelligence, and Ontario-focused practice management at $149 CAD/month.",
  openGraph: {
    title: "Tabs3 Alternative for Ontario Lawyers | Atticus",
    description:
      "Compare Tabs3 vs Atticus. Cloud-native Ontario practice management with LSO trust accounting, Canadian data residency, and AI document analysis to replace Tabs3 desktop software.",
    type: "website",
    url: "https://getatticus.ca/tabs3-alternative",
  },
  alternates: { canonical: "https://getatticus.ca/tabs3-alternative" },
};

export default function Tabs3AlternativePage() {
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
              Tabs3 Alternative
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              The Cloud Alternative to Tabs3 for Ontario Lawyers
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Tabs3 is legacy Windows desktop billing and practice management software. Atticus is
              a cloud-native Ontario platform — LSO By-Law 9 trust accounting, AI document intelligence,
              and practice management accessible from anywhere.
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
              Tabs3 vs Atticus — Feature Comparison
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-sm border border-slate-200">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left py-4 px-6 font-semibold text-slate-700">Feature</th>
                    <th className="text-center py-4 px-6 font-semibold text-slate-500">Tabs3</th>
                    <th className="text-center py-4 px-6 font-semibold text-amber-600">Atticus</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    ["Cloud-Native Architecture", "✗ (desktop/hosted)", "✓"],
                    ["Ontario LSO By-Law 9 Trust Accounting", "Partial/manual", "✓"],
                    ["Canadian Data Residency", "Variable", "✓"],
                    ["AI Document Analysis", "✗", "✓"],
                    ["Mobile Access", "Limited", "✓"],
                    ["Time Tracking & Billing", "✓", "✓"],
                    ["Matter Management", "✓ (PracticeMaster)", "✓"],
                    ["Ontario Limitation Period Tracking", "✗", "✓"],
                    ["No IT Setup Required", "✗", "✓"],
                    ["Pricing (CAD)", "$150–$350+/mo", "$49/mo"],
                  ].map(([feature, tabs3, atticus]) => (
                    <tr key={feature} className="hover:bg-slate-50 transition-colors">
                      <td className="py-4 px-6 text-slate-700 font-medium">{feature}</td>
                      <td className="py-4 px-6 text-center text-slate-500">{tabs3}</td>
                      <td className="py-4 px-6 text-center font-semibold text-amber-600">{atticus}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* What is Tabs3 */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">What Is Tabs3?</h2>
            <p className="text-lg text-slate-600 mb-4">
              Tabs3 (and its companion product PracticeMaster) is a Windows desktop legal billing
              and practice management system published by Software Technology LLC. It has been in use
              since the 1980s and is still used by some US and Canadian law firms that built their
              operations around the platform decades ago.
            </p>
            <p className="text-lg text-slate-600 mb-4">
              Tabs3 offers time tracking, billing, and trust accounting in a desktop environment.
              PracticeMaster adds matter management, calendaring, and document management. The products
              have been updated over time but remain fundamentally desktop-architecture software — they
              require Windows installation, local or server-hosted databases, and IT infrastructure.
            </p>
            <p className="text-lg text-slate-600">
              Ontario lawyers still on Tabs3 typically face three common pain points: no cloud access
              (can&apos;t work from home without a VPN or hosted solution), US-configured trust accounting
              that doesn&apos;t match LSO By-Law 9 rules, and a dated interface that requires significant
              training for new staff.
            </p>
          </div>
        </section>

        {/* Why Atticus */}
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              Why Ontario Lawyers Move from Tabs3 to Atticus
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Cloud-Native — No VPN, No Server, No IT
                </h3>
                <p className="text-slate-600">
                  Atticus runs entirely in the browser — accessible from your office computer, home
                  laptop, or iPad without VPN or remote desktop. Tabs3 requires either a local Windows
                  installation or an expensive hosted solution with VPN access. For Ontario firms
                  working in hybrid or remote environments, Atticus eliminates the IT overhead entirely.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  LSO By-Law 9 Trust Accounting — Native
                </h3>
                <p className="text-slate-600">
                  Atticus implements the complete LSO By-Law 9 trust accounting framework from day one:
                  client trust ledgers, general trust account, trust-to-general transfers, monthly
                  reconciliation workflow, LAWPRO pooled trust interest, and the annual trust report.
                  Tabs3&apos;s trust accounting module follows US trust rules — it requires manual configuration
                  to approximate LSO By-Law 9 compliance, and there is no guarantee that the configuration
                  meets LSO standards.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  AI Document Intelligence — Not Just Storage
                </h3>
                <p className="text-slate-600">
                  Atticus uses AI to analyze Ontario legal documents — extracting key facts, parties,
                  dates, and obligations from contracts, corporate documents, real estate files, and
                  court materials. Tabs3/PracticeMaster manages documents as files with folder structures;
                  there is no AI document analysis capability.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Simple Pricing in CAD
                </h3>
                <p className="text-slate-600">
                  Atticus is $149 CAD/month for the whole firm. Tabs3 + PracticeMaster pricing
                  starts at approximately $80–$120 USD per user per month for the combined suite,
                  plus server costs, IT maintenance, and annual support contracts — typically
                  $150–$350+ CAD per user per month fully loaded. For a two-lawyer firm, the annual
                  savings switching to Atticus can exceed $5,000.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 bg-slate-900 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Move On from Tabs3?
            </h2>
            <p className="text-slate-300 text-lg mb-8">
              Atticus is the modern, cloud-native alternative — LSO-compliant trust accounting,
              AI document intelligence, and $149 CAD/month pricing for Ontario law firms.
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
