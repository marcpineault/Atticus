import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Captorra Alternative for Ontario Lawyers — Atticus vs Captorra / LeadDocket",
  description:
    "Compare Captorra (LeadDocket) with Atticus for Ontario personal injury and litigation firms. Captorra handles lead intake tracking; Atticus combines intake management with LSO-compliant trust accounting, AI document intelligence, and full Ontario practice management.",
  openGraph: {
    title: "Captorra Alternative for Ontario Lawyers — Atticus vs Captorra / LeadDocket",
    description:
      "Captorra is a standalone legal intake and lead tracking tool. Atticus is a full Ontario practice management platform with integrated intake, AI document intelligence, and LSO trust accounting.",
    type: "website",
    url: "https://getatticus.ca/captorra-alternative",
  },
  alternates: { canonical: "https://getatticus.ca/captorra-alternative" },
};

export default function CaptorraAlternativePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Captorra Alternative for Ontario Lawyers",
            description:
              "Compare Captorra / LeadDocket with Atticus for Ontario law firms. Full feature comparison of legal intake and lead tracking software vs integrated Ontario practice management.",
            url: "https://getatticus.ca/captorra-alternative",
          }),
        }}
      />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="mb-6">
            <span className="inline-block bg-orange-100 text-orange-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
              Captorra Alternative
            </span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
            Captorra Alternative for Ontario Lawyers
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Captorra (now LeadDocket) is a legal intake and lead management platform popular with high-volume
            personal injury firms. It tracks leads, automates intake calls, and measures referral sources —
            but it does not handle trust accounting, billing, matter management, or Ontario compliance.
            Atticus is built for Ontario law firms: full practice management, LSO-compliant trust accounting,
            integrated client intake, and AI document intelligence in one Canadian platform.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 rounded-2xl p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Captorra / LeadDocket</h2>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>Lead intake tracking and pipeline management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>Referral source reporting and ROI tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>Intake call scripts and automated follow-up</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>Integration with US PI practice management tools</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">✗</span>
                  <span>No trust accounting or LSO compliance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">✗</span>
                  <span>No matter management after intake converts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">✗</span>
                  <span>No Canadian data residency</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">✗</span>
                  <span>Requires separate billing and practice management software</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">✗</span>
                  <span>US-centric — not built for Ontario law or PIPEDA</span>
                </li>
              </ul>
            </div>
            <div className="bg-orange-50 rounded-2xl p-6 border-2 border-orange-200">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Atticus</h2>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>Integrated client intake — new inquiries flow directly into matters</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>Conflict checking at intake stage</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>AI document analysis — extract key facts from intake forms and medical records</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>LSO By-Law 9 trust accounting built-in</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>Matter management through the entire file lifecycle</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>Ontario limitation period tracking — 2-year anniversary alerts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>Canadian data residency — PIPEDA compliant</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>HST billing and disbursement tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>$149 CAD/month — all-in, no separate intake subscription</span>
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
                  <th className="px-4 py-3 text-center font-semibold text-gray-700">Captorra</th>
                  <th className="px-4 py-3 text-center font-semibold text-orange-700">Atticus</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Client intake and lead capture", "✓ core feature", "✓ integrated with matter creation"],
                  ["Conflict checking at intake", "✗", "✓"],
                  ["Intake → matter automatic conversion", "✗ (requires export to PM)", "✓ seamless"],
                  ["Matter management", "✗", "✓"],
                  ["Trust accounting (By-Law 9)", "✗", "✓"],
                  ["Billing and invoicing (HST)", "✗", "✓"],
                  ["Time tracking", "✗", "✓"],
                  ["Ontario limitation period alerts", "✗", "✓"],
                  ["AI document analysis", "✗", "✓"],
                  ["Client portal", "✗", "✓"],
                  ["Canadian data residency", "✗", "✓"],
                  ["Referral source tracking", "✓", "✓ via matter tags"],
                  ["Pricing (CAD)", "~$500+/month + PM subscription", "$49–$149/lawyer/month all-in"],
                ].map(([feature, captorra, atticus], i) => (
                  <tr key={i} className={i % 2 === 0 ? "border-t border-gray-100" : "border-t border-gray-100 bg-gray-50"}>
                    <td className="px-4 py-3 font-medium text-gray-900">{feature}</td>
                    <td className="px-4 py-3 text-center text-gray-600">{captorra}</td>
                    <td className="px-4 py-3 text-center text-orange-700 font-medium">{atticus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Why Ontario PI Firms Switch from Captorra
          </h2>
          <div className="space-y-4 mb-12">
            <div className="p-5 border border-gray-200 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2">Intake is only the beginning</h3>
              <p className="text-gray-600 text-sm">
                Captorra manages the intake pipeline well, but personal injury practice is about what happens
                after the client signs — medical records, expert reports, limitation periods, settlement funds,
                and trust accounting. Ontario PI firms need Captorra <em>plus</em> a practice management platform,
                which means two subscriptions, duplicate data entry, and integration headaches.
              </p>
            </div>
            <div className="p-5 border border-gray-200 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2">Ontario limitation periods require active tracking</h3>
              <p className="text-gray-600 text-sm">
                PI files in Ontario carry hard 2-year limitation periods under the <em>Limitations Act, 2002</em>.
                Captorra does not track these — it drops out after intake. Atticus automatically tracks the
                2-year anniversary from the date of loss and flags upcoming deadlines across your entire caseload.
              </p>
            </div>
            <div className="p-5 border border-gray-200 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2">Trust accounting for settlement funds is mandatory</h3>
              <p className="text-gray-600 text-sm">
                Ontario lawyers handling settlement proceeds must maintain LSO By-Law 9 compliant trust accounts.
                Captorra has no trust accounting features whatsoever. Mismanaging settlement funds is the
                leading cause of LSO disciplinary proceedings. Atticus builds compliant trust accounting into
                every matter.
              </p>
            </div>
            <div className="p-5 border border-gray-200 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2">PIPEDA and client confidentiality</h3>
              <p className="text-gray-600 text-sm">
                PI clients share sensitive health information during intake. Captorra stores data on US servers,
                raising concerns under LSO Rules of Professional Conduct regarding confidentiality and PIPEDA
                compliance. Atticus stores all client data in Canadian data centres.
              </p>
            </div>
          </div>

          <div className="bg-orange-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">
              From First Call to Final Cheque — One Ontario Platform
            </h2>
            <p className="text-orange-100 mb-6 max-w-xl mx-auto">
              Replace Captorra and your practice management software with Atticus — intake, AI document analysis,
              LSO trust accounting, and matter management from first contact to file closure.
            </p>
            <a
              href="/sign-up"
              className="inline-block bg-white text-orange-600 font-bold px-8 py-3 rounded-xl hover:bg-orange-50 transition-colors"
            >
              Start Free Trial
            </a>
            <p className="text-orange-200 text-sm mt-3">No credit card required</p>
          </div>
        </div>
      </main>
    </>
  );
}
