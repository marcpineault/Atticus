import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TrustBooks Alternative for Ontario Lawyers — Atticus vs TrustBooks",
  description:
    "Compare TrustBooks with Atticus for Ontario law firms. TrustBooks is standalone trust accounting software; Atticus integrates LSO-compliant trust accounting with full Ontario practice management, AI document intelligence, billing, and matter management.",
  openGraph: {
    title: "TrustBooks Alternative for Ontario Lawyers — Atticus vs TrustBooks",
    description:
      "TrustBooks is standalone trust accounting software. Atticus integrates LSO-compliant trust accounting with full Ontario practice management, AI, billing, and matter management.",
    type: "website",
    url: "https://getatticus.ca/trustbooks-alternative",
  },
  alternates: { canonical: "https://getatticus.ca/trustbooks-alternative" },
};

export default function TrustBooksAlternativePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "TrustBooks Alternative for Ontario Lawyers",
            description:
              "Compare TrustBooks trust accounting software with Atticus for Ontario law firms. Standalone trust accounting vs integrated Ontario practice management.",
            url: "https://getatticus.ca/trustbooks-alternative",
          }),
        }}
      />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="mb-6">
            <span className="inline-block bg-emerald-100 text-emerald-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
              TrustBooks Alternative
            </span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
            TrustBooks Alternative for Ontario Lawyers
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            TrustBooks is standalone legal trust accounting software designed to help law firms track
            client trust funds and generate compliance reports. It solves one problem — trust accounting —
            but does not handle billing, matter management, AI document intelligence, or Ontario-specific
            compliance. Atticus integrates LSO By-Law 9 compliant trust accounting with full Ontario
            practice management in one Canadian platform.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 rounded-2xl p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4">TrustBooks</h2>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>Legal trust account tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>Trust reconciliation reports</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>Client trust ledgers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">✗</span>
                  <span>US-focused — not built for LSO By-Law 9</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">✗</span>
                  <span>No matter management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">✗</span>
                  <span>No time tracking or billing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">✗</span>
                  <span>No AI document intelligence</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">✗</span>
                  <span>No Canadian data residency</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">✗</span>
                  <span>Requires separate practice management software</span>
                </li>
              </ul>
            </div>
            <div className="bg-emerald-50 rounded-2xl p-6 border-2 border-emerald-200">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Atticus</h2>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>LSO By-Law 9 trust accounting — built specifically for Ontario rules</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>Trust reconciliation and client trust ledgers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>AI document analysis — extract key facts from client documents</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>Matter management from intake to close</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>Time tracking and HST billing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>Ontario Limitations Act 2002 deadline tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>Canadian data residency — PIPEDA compliant</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>$149 CAD/month — trust accounting + full practice management</span>
                </li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Full Feature Comparison</h2>
          <div className="overflow-x-auto mb-12">
            <table className="min-w-full border border-gray-200 rounded-xl text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">Feature</th>
                  <th className="px-4 py-3 text-center font-semibold text-gray-700">TrustBooks</th>
                  <th className="px-4 py-3 text-center font-semibold text-emerald-700">Atticus</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Trust account tracking", "✓", "✓"],
                  ["LSO By-Law 9 compliance (Ontario)", "✗ (US-focused)", "✓ built for Ontario"],
                  ["Client trust ledgers", "✓", "✓"],
                  ["Trust reconciliation", "✓", "✓"],
                  ["Matter management", "✗", "✓"],
                  ["Billing and invoicing (HST)", "✗", "✓"],
                  ["Time tracking", "✗", "✓"],
                  ["AI document analysis", "✗", "✓"],
                  ["Ontario limitation period alerts", "✗", "✓"],
                  ["Conflict checking", "✗", "✓"],
                  ["Client portal", "✗", "✓"],
                  ["Canadian data residency", "✗ (US-based)", "✓"],
                  ["Pricing (CAD)", "~$50/month (trust only)", "$49–$149/lawyer/month all-in"],
                ].map(([feature, trustbooks, atticus], i) => (
                  <tr key={i} className={i % 2 === 0 ? "border-t border-gray-100" : "border-t border-gray-100 bg-gray-50"}>
                    <td className="px-4 py-3 font-medium text-gray-900">{feature}</td>
                    <td className="px-4 py-3 text-center text-gray-600">{trustbooks}</td>
                    <td className="px-4 py-3 text-center text-emerald-700 font-medium">{atticus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Why Ontario Lawyers Choose Atticus Over TrustBooks
          </h2>
          <div className="space-y-4 mb-12">
            <div className="p-5 border border-gray-200 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2">Ontario-specific trust accounting rules</h3>
              <p className="text-gray-600 text-sm">
                TrustBooks is built primarily for US law firms. Ontario trust accounting follows LSO
                By-Law 9, which has specific requirements for trust deposits, disbursements, record-keeping,
                reconciliation frequency, and reporting that differ from US state bar rules. Atticus is
                built specifically for Ontario lawyers and LSO By-Law 9 compliance.
              </p>
            </div>
            <div className="p-5 border border-gray-200 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2">Trust accounting without practice management is half a solution</h3>
              <p className="text-gray-600 text-sm">
                Trust accounting tracks client funds — but trust funds are connected to matters, billings,
                and client relationships. Using TrustBooks means maintaining trust records in one system
                and matter management and billing in another, creating reconciliation friction and
                data duplication. Atticus connects trust accounting to matters and billing in one workflow.
              </p>
            </div>
            <div className="p-5 border border-gray-200 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2">Canadian data residency for trust records</h3>
              <p className="text-gray-600 text-sm">
                Trust records contain highly sensitive client financial information. TrustBooks is a US
                company and stores data on US servers. For Ontario lawyers, storing client trust records
                outside Canada raises PIPEDA compliance concerns and conflicts with LSO confidentiality
                obligations. Atticus stores all data in Canadian data centres.
              </p>
            </div>
          </div>

          <div className="bg-emerald-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">
              LSO Trust Accounting + Complete Ontario Practice Management
            </h2>
            <p className="text-emerald-100 mb-6 max-w-xl mx-auto">
              Replace TrustBooks and your separate practice management software with Atticus —
              LSO By-Law 9 trust accounting, AI document intelligence, billing, and matter management
              in one Canadian platform.
            </p>
            <a
              href="/sign-up"
              className="inline-block bg-white text-emerald-600 font-bold px-8 py-3 rounded-xl hover:bg-emerald-50 transition-colors"
            >
              Start Free Trial
            </a>
            <p className="text-emerald-200 text-sm mt-3">No credit card required</p>
          </div>
        </div>
      </main>
    </>
  );
}
