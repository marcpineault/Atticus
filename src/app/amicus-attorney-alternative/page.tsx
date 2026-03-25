import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Amicus Attorney Alternative for Ontario Lawyers | Atticus",
  description:
    "Looking for an Amicus Attorney alternative? Atticus offers modern cloud-based Ontario practice management with LSO trust accounting, AI document analysis, and Canadian data residency.",
  openGraph: {
    title: "Amicus Attorney Alternative for Ontario Lawyers | Atticus",
    description:
      "Compare Amicus Attorney vs Atticus. Modern cloud practice management built for Ontario LSO compliance, HST billing, and AI-powered legal intelligence.",
    type: "website",
    url: "https://getatticus.ca/amicus-attorney-alternative",
  },
  alternates: { canonical: "https://getatticus.ca/amicus-attorney-alternative" },
};

export default function AmicusAttorneyAlternativePage() {
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
              Amicus Attorney Alternative
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              The Modern Cloud Alternative to Amicus Attorney
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Amicus Attorney is legacy desktop software built in the 1990s. Atticus is a modern
              cloud-native platform built for Ontario — LSO By-Law 9 trust accounting, AI document
              intelligence, and practice management accessible from any device.
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
              Amicus Attorney vs Atticus — Feature Comparison
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-sm border border-slate-200">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left py-4 px-6 font-semibold text-slate-700">Feature</th>
                    <th className="text-center py-4 px-6 font-semibold text-slate-500">Amicus Attorney</th>
                    <th className="text-center py-4 px-6 font-semibold text-amber-600">Atticus</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    ["Cloud-Native Architecture", "✗ (desktop/hosted)", "✓"],
                    ["Ontario LSO By-Law 9 Trust Accounting", "Partial", "✓"],
                    ["Canadian Data Residency", "Variable", "✓"],
                    ["AI Document Analysis", "✗", "✓"],
                    ["Mobile Access", "Limited", "✓"],
                    ["Time Tracking & Billing", "✓", "✓"],
                    ["Matter Management", "✓", "✓"],
                    ["Ontario Limitation Period Tracking", "✗", "✓"],
                    ["Modern UI/UX", "✗", "✓"],
                    ["Pricing (CAD)", "$100–$250+/mo", "$49/mo"],
                  ].map(([feature, amicus, atticus]) => (
                    <tr key={feature} className="hover:bg-slate-50 transition-colors">
                      <td className="py-4 px-6 text-slate-700 font-medium">{feature}</td>
                      <td className="py-4 px-6 text-center text-slate-500">{amicus}</td>
                      <td className="py-4 px-6 text-center font-semibold text-amber-600">{atticus}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* What is Amicus Attorney */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">What Is Amicus Attorney?</h2>
            <p className="text-lg text-slate-600 mb-4">
              Amicus Attorney is a Canadian law practice management software product originally developed
              in the 1990s by Gavel &amp; Gown Software. It has passed through multiple owners over the
              decades — including Abacus Data Systems and subsequently Tabs3 Software — and is now
              positioned as a legacy desktop/hosted application.
            </p>
            <p className="text-lg text-slate-600 mb-4">
              Amicus Attorney offers core practice management features including contact management,
              matter tracking, time recording, billing, and document management. Its historical strength
              was the tight integration with Microsoft Office and Outlook for email/calendar management.
            </p>
            <p className="text-lg text-slate-600">
              The platform&apos;s desktop heritage means it lacks the cloud-native benefits that modern
              firms expect: anywhere access, real-time collaboration, automatic updates, and AI-powered
              document intelligence. Ontario firms migrating away from Amicus Attorney are typically
              seeking a modern, cloud-first alternative that handles LSO trust accounting natively.
            </p>
          </div>
        </section>

        {/* Why Atticus */}
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              Why Ontario Lawyers Choose Atticus Over Amicus Attorney
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Cloud-Native — Access from Anywhere
                </h3>
                <p className="text-slate-600">
                  Atticus runs entirely in the browser — no installation, no VPN, no server maintenance.
                  Access your matters, trust accounts, and documents from your office desktop, laptop
                  at home, or tablet in court. Amicus Attorney requires either a local Windows installation
                  or a hosted server environment, creating IT overhead that small Ontario firms can&apos;t
                  afford.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  LSO By-Law 9 Trust Accounting — Native Compliance
                </h3>
                <p className="text-slate-600">
                  Atticus is built around Ontario&apos;s specific trust accounting rules: client trust ledgers,
                  general trust account, monthly reconciliation workflow, LAWPRO interest on pooled trust,
                  and the annual trust report format. Amicus Attorney&apos;s billing module can be configured
                  for trust accounting, but it requires manual setup and ongoing configuration to meet
                  LSO By-Law 9 requirements.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  AI Document Intelligence
                </h3>
                <p className="text-slate-600">
                  Atticus uses AI to analyze Ontario legal documents — affidavits, APS agreements,
                  commercial leases, employment contracts, wills, corporate resolutions — extracting
                  key facts, parties, dates, and deadlines automatically. Amicus Attorney has no AI
                  document analysis capability; it stores and retrieves documents as files.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Modern Interface — No Learning Curve
                </h3>
                <p className="text-slate-600">
                  Atticus is designed for lawyers who want software that works without training.
                  Clean navigation, intuitive matter creation, and a dashboard that shows what needs
                  attention. Amicus Attorney&apos;s interface reflects its desktop legacy — complex menus,
                  dated visual design, and workflows that made sense in 2000 but feel cumbersome today.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Simple, Transparent Pricing in CAD
                </h3>
                <p className="text-slate-600">
                  Atticus is $149 CAD/month, all features included. Amicus Attorney&apos;s pricing
                  varies by edition and user count — typical Ontario firms pay $100–$250+ CAD per
                  user per month when factoring in hosting, support, and add-on modules. For a
                  three-lawyer firm, the annual savings switching to Atticus can exceed $5,000.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Migration */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Migrating from Amicus Attorney to Atticus
            </h2>
            <p className="text-lg text-slate-600 mb-4">
              Moving from Amicus Attorney to Atticus typically involves three steps:
            </p>
            <ol className="space-y-4 text-lg text-slate-600 list-none">
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-amber-500 text-slate-900 rounded-full flex items-center justify-center font-bold text-sm">1</span>
                <div>
                  <strong className="text-slate-900">Export your data</strong> — Amicus Attorney allows
                  export of contacts, matters, and billing history. Client data and trust account records
                  should be exported and verified before migration.
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-amber-500 text-slate-900 rounded-full flex items-center justify-center font-bold text-sm">2</span>
                <div>
                  <strong className="text-slate-900">Import into Atticus</strong> — Our onboarding
                  team supports data import for contacts and open matters. Trust account balances
                  should be reconciled before the cut-over date.
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-amber-500 text-slate-900 rounded-full flex items-center justify-center font-bold text-sm">3</span>
                <div>
                  <strong className="text-slate-900">Go live</strong> — Run parallel systems for
                  the first billing cycle to ensure trust account reconciliation matches, then
                  decommission Amicus Attorney.
                </div>
              </li>
            </ol>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 bg-slate-900 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Move On from Amicus Attorney?
            </h2>
            <p className="text-slate-300 text-lg mb-8">
              Atticus is the modern, cloud-native alternative built for Ontario law firms. LSO-compliant
              trust accounting, AI document intelligence, and transparent $149 CAD/month pricing.
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
