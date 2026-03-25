import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CaseMap Alternative for Ontario Lawyers — Atticus vs LexisNexis CaseMap",
  description:
    "Compare LexisNexis CaseMap with Atticus for Ontario law firms. CaseMap handles fact and issue mapping for litigation; Atticus combines litigation management with LSO-compliant trust accounting, AI document intelligence, and full practice management in one Canadian platform.",
  openGraph: {
    title: "CaseMap Alternative for Ontario Lawyers — Atticus vs LexisNexis CaseMap",
    description:
      "CaseMap is a standalone litigation support tool. Atticus is a full Ontario practice management platform with AI document intelligence, trust accounting, and built-in matter management.",
    type: "website",
    url: "https://getatticus.ca/casemap-alternative",
  },
  alternates: { canonical: "https://getatticus.ca/casemap-alternative" },
};

export default function CaseMapAlternativePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "CaseMap Alternative for Ontario Lawyers",
            description:
              "Compare LexisNexis CaseMap with Atticus for Ontario law firms. Full feature comparison of litigation support tools vs integrated Ontario practice management.",
            url: "https://getatticus.ca/casemap-alternative",
          }),
        }}
      />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="mb-6">
            <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
              CaseMap Alternative
            </span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
            CaseMap Alternative for Ontario Lawyers
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            LexisNexis CaseMap is a litigation fact and issue management tool. It helps litigators organize facts,
            documents, and issues for trial — but it does not handle trust accounting, billing, matter management,
            or Ontario compliance. Atticus is built for Ontario law firms: full practice management, LSO-compliant
            trust accounting, AI document intelligence, and litigation matter tracking in one Canadian platform.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 rounded-2xl p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4">LexisNexis CaseMap</h2>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>Fact chronology and fact management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>Issue and cast of characters linking</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>Document attachment to facts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>Integration with NoteMap and TimeMap</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">✗</span>
                  <span>No trust accounting or billing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">✗</span>
                  <span>No Ontario LSO compliance features</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">✗</span>
                  <span>No Canadian data residency guarantee</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">✗</span>
                  <span>Requires separate practice management software</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">✗</span>
                  <span>Additional cost on top of existing tools</span>
                </li>
              </ul>
            </div>
            <div className="bg-blue-50 rounded-2xl p-6 border-2 border-blue-200">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Atticus</h2>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>Matter management with litigation workflow</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>AI document analysis — extract key facts from pleadings and affidavits</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>LSO By-Law 9 trust accounting built-in</span>
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
                  <span>Client portal and secure document sharing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>No extra subscriptions — everything in one platform</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>$149 CAD/month — fraction of CaseMap + PM stack cost</span>
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
                  <th className="px-4 py-3 text-center font-semibold text-gray-700">CaseMap</th>
                  <th className="px-4 py-3 text-center font-semibold text-blue-700">Atticus</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Fact chronology / issue mapping", "✓", "✓ via AI document analysis"],
                  ["Document review and annotation", "✓ limited", "✓ AI-powered extraction"],
                  ["Matter management", "✗", "✓"],
                  ["Client management (CRM)", "✗", "✓"],
                  ["Trust accounting (By-Law 9)", "✗", "✓"],
                  ["Billing and invoicing (HST)", "✗", "✓"],
                  ["Time tracking", "✗", "✓"],
                  ["Ontario limitation period alerts", "✗", "✓"],
                  ["Client portal / secure sharing", "✗", "✓"],
                  ["Canadian data residency", "✗", "✓"],
                  ["Standalone or integrated", "Standalone (requires extra PM tool)", "All-in-one platform"],
                  ["Pricing (CAD)", "~$600+/year + PM subscription", "$49–$149/lawyer/month all-in"],
                ].map(([feature, casemap, atticus], i) => (
                  <tr key={i} className={i % 2 === 0 ? "border-t border-gray-100" : "border-t border-gray-100 bg-gray-50"}>
                    <td className="px-4 py-3 font-medium text-gray-900">{feature}</td>
                    <td className="px-4 py-3 text-center text-gray-600">{casemap}</td>
                    <td className="px-4 py-3 text-center text-blue-700 font-medium">{atticus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Why Ontario Litigators Switch from CaseMap
          </h2>
          <div className="space-y-4 mb-12">
            <div className="p-5 border border-gray-200 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2">CaseMap is a tool, not a platform</h3>
              <p className="text-gray-600 text-sm">
                CaseMap organizes facts and issues for trial. But Ontario litigators also need trust accounting,
                billing, matter management, limitation period tracking, and client communication — none of which
                CaseMap provides. You end up paying for CaseMap plus a separate practice management system and
                managing data across both.
              </p>
            </div>
            <div className="p-5 border border-gray-200 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2">US product, Ontario practice</h3>
              <p className="text-gray-600 text-sm">
                CaseMap is built by LexisNexis for US litigation practice. It does not account for Ontario court
                rules, LSO compliance requirements, By-Law 9 trust obligations, or the Limitations Act 2002.
                Atticus is built specifically for Ontario law firms.
              </p>
            </div>
            <div className="p-5 border border-gray-200 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2">AI document analysis replaces manual fact entry</h3>
              <p className="text-gray-600 text-sm">
                CaseMap requires lawyers to manually enter facts, link documents, and tag issues. Atticus uses
                AI to extract key facts, dates, parties, and obligations from uploaded pleadings, affidavits,
                and correspondence — turning hours of manual work into seconds.
              </p>
            </div>
            <div className="p-5 border border-gray-200 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2">Data residency for client confidentiality</h3>
              <p className="text-gray-600 text-sm">
                Litigation files contain highly sensitive client information. Atticus stores all data in Canadian
                data centres, fully PIPEDA compliant. CaseMap&apos;s cloud offering routes data through US servers,
                raising privacy concerns for Ontario practitioners under LSO Rules of Professional Conduct.
              </p>
            </div>
          </div>

          <div className="bg-blue-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">
              One Platform for Your Entire Ontario Litigation Practice
            </h2>
            <p className="text-blue-100 mb-6 max-w-xl mx-auto">
              Replace CaseMap and your practice management software with Atticus — AI document intelligence,
              LSO trust accounting, billing, and matter management in one Canadian platform.
            </p>
            <a
              href="/sign-up"
              className="inline-block bg-white text-blue-600 font-bold px-8 py-3 rounded-xl hover:bg-blue-50 transition-colors"
            >
              Start Free Trial
            </a>
            <p className="text-blue-200 text-sm mt-3">No credit card required</p>
          </div>
        </div>
      </main>
    </>
  );
}
