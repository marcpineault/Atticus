import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sage Timeslips Alternative for Ontario Lawyers — Atticus vs Timeslips",
  description:
    "Compare Sage Timeslips with Atticus for Ontario law firms. Timeslips is standalone time and billing software; Atticus integrates time tracking and HST billing with LSO-compliant trust accounting, AI document intelligence, and full Ontario practice management.",
  openGraph: {
    title: "Sage Timeslips Alternative for Ontario Lawyers — Atticus vs Timeslips",
    description:
      "Sage Timeslips is standalone time and billing software. Atticus integrates time tracking and billing with LSO trust accounting, AI, and full Ontario practice management.",
    type: "website",
    url: "https://getatticus.ca/timeslips-alternative",
  },
  alternates: { canonical: "https://getatticus.ca/timeslips-alternative" },
};

export default function TimeslipsAlternativePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Sage Timeslips Alternative for Ontario Lawyers",
            description:
              "Compare Sage Timeslips with Atticus for Ontario law firms. Standalone time and billing software vs integrated Ontario practice management.",
            url: "https://getatticus.ca/timeslips-alternative",
          }),
        }}
      />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="mb-6">
            <span className="inline-block bg-cyan-100 text-cyan-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
              Timeslips Alternative
            </span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
            Sage Timeslips Alternative for Ontario Lawyers
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Sage Timeslips is a long-established time and billing software used by law firms and other
            professional services businesses. It tracks time entries, generates invoices, and produces
            billing reports — but it is standalone software that does not integrate trust accounting,
            matter management, or Ontario-specific compliance. Atticus provides time tracking and HST
            billing as part of a complete Ontario practice management platform with LSO-compliant trust
            accounting and AI document intelligence.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 rounded-2xl p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Sage Timeslips</h2>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>Time entry and tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>Invoice generation and billing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>Billing reports and write-offs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>Integration with QuickBooks (limited)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">✗</span>
                  <span>Legacy desktop software — not cloud-native</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">✗</span>
                  <span>No trust accounting or LSO compliance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">✗</span>
                  <span>No matter management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">✗</span>
                  <span>No AI document intelligence</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">✗</span>
                  <span>No Canadian data residency</span>
                </li>
              </ul>
            </div>
            <div className="bg-cyan-50 rounded-2xl p-6 border-2 border-cyan-200">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Atticus</h2>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>Time tracking with one-click timers per matter</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>HST billing — Ontario-compliant invoices</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>Billing reports and write-offs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>LSO By-Law 9 trust accounting built-in</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>AI document analysis — extract facts from client files</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>Matter and client management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>Cloud-native — access from any device</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>Canadian data residency — PIPEDA compliant</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>$149 CAD/month — billing + full practice management</span>
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
                  <th className="px-4 py-3 text-center font-semibold text-gray-700">Sage Timeslips</th>
                  <th className="px-4 py-3 text-center font-semibold text-cyan-700">Atticus</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Time tracking and billing", "✓ core feature", "✓ integrated with matters"],
                  ["HST-compliant invoicing (Ontario)", "✗ (US-focused)", "✓"],
                  ["Trust accounting (By-Law 9)", "✗", "✓"],
                  ["Matter management", "✗", "✓"],
                  ["AI document analysis", "✗", "✓"],
                  ["Ontario limitation period alerts", "✗", "✓"],
                  ["Client portal", "✗", "✓"],
                  ["Cloud-native access", "✗ (legacy desktop)", "✓"],
                  ["Canadian data residency", "✗ (US-based)", "✓"],
                  ["All-in-one platform", "✗ (billing only)", "✓"],
                  ["Pricing (CAD)", "~$50+/month (billing only)", "$49–$149/lawyer/month all-in"],
                ].map(([feature, timeslips, atticus], i) => (
                  <tr key={i} className={i % 2 === 0 ? "border-t border-gray-100" : "border-t border-gray-100 bg-gray-50"}>
                    <td className="px-4 py-3 font-medium text-gray-900">{feature}</td>
                    <td className="px-4 py-3 text-center text-gray-600">{timeslips}</td>
                    <td className="px-4 py-3 text-center text-cyan-700 font-medium">{atticus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Why Ontario Lawyers Move On from Timeslips
          </h2>
          <div className="space-y-4 mb-12">
            <div className="p-5 border border-gray-200 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2">Legacy desktop software in a cloud world</h3>
              <p className="text-gray-600 text-sm">
                Sage Timeslips is legacy desktop software that has not kept pace with cloud-native practice
                management. Lawyers who work from multiple devices, work remotely, or want to access their
                time entries from their phone find Timeslips cumbersome. Atticus is fully cloud-native —
                accessible from any browser, any device, anywhere in Canada.
              </p>
            </div>
            <div className="p-5 border border-gray-200 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2">Billing without trust accounting creates compliance risk</h3>
              <p className="text-gray-600 text-sm">
                Timeslips handles billing but not trust accounting. Ontario lawyers who use Timeslips for
                billing and a separate tool (or spreadsheet) for trust accounting create reconciliation
                errors and compliance risk. Atticus integrates billing and trust accounting in one workflow
                — when you bill a client, you can immediately transfer from trust to general account with
                one click and full LSO-compliant recording.
              </p>
            </div>
            <div className="p-5 border border-gray-200 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2">Time entries disconnected from matters</h3>
              <p className="text-gray-600 text-sm">
                In Timeslips, time entries are standalone records. In Atticus, every time entry is
                connected to a matter — which is connected to a client, a file, documents, and deadlines.
                This integration means your billing data, limitation period tracking, and client file
                are all in sync automatically.
              </p>
            </div>
          </div>

          <div className="bg-cyan-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">
              Modern Time Tracking + Ontario Practice Management
            </h2>
            <p className="text-cyan-100 mb-6 max-w-xl mx-auto">
              Replace Sage Timeslips and your practice management software with Atticus — cloud-native
              time tracking, HST billing, LSO trust accounting, and AI document intelligence in one
              Canadian platform.
            </p>
            <a
              href="/sign-up"
              className="inline-block bg-white text-cyan-600 font-bold px-8 py-3 rounded-xl hover:bg-cyan-50 transition-colors"
            >
              Start Free Trial
            </a>
            <p className="text-cyan-200 text-sm mt-3">No credit card required</p>
          </div>
        </div>
      </main>
    </>
  );
}
