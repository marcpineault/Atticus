import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lawyered Alternative for Ontario Law Firms — Atticus vs Lawyered",
  description:
    "Compare Lawyered with Atticus for Ontario lawyers. Lawyered is a Canadian legal marketplace connecting clients with lawyers; Atticus is a full Ontario practice management platform with LSO-compliant trust accounting, AI document intelligence, and professional practice management.",
  openGraph: {
    title: "Lawyered Alternative for Ontario Law Firms — Atticus vs Lawyered",
    description:
      "Lawyered is a Canadian legal marketplace platform. Atticus is purpose-built Ontario practice management with trust accounting, AI, and compliance — not a referral marketplace.",
    type: "website",
    url: "https://getatticus.ca/lawyered-alternative",
  },
  alternates: { canonical: "https://getatticus.ca/lawyered-alternative" },
};

export default function LawyeredAlternativePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Lawyered Alternative for Ontario Law Firms",
            description:
              "Compare Lawyered with Atticus for Ontario law firms. Legal marketplace vs full Ontario practice management.",
            url: "https://getatticus.ca/lawyered-alternative",
          }),
        }}
      />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="mb-6">
            <span className="inline-block bg-indigo-100 text-indigo-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
              Lawyered Alternative
            </span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
            Lawyered Alternative for Ontario Lawyers
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Lawyered is a Canadian legal marketplace — a platform that connects potential clients with
            lawyers. It helps with client acquisition through a directory and matching service, but it
            is not practice management software. Atticus is purpose-built for Ontario law firm practice
            management: LSO-compliant trust accounting, AI document intelligence, billing, and matter
            management from first contact to file closure.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 rounded-2xl p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Lawyered</h2>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>Legal directory and client matching</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>Canadian lawyer profiles and reviews</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>Practice area and location search</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">✗</span>
                  <span>No practice management features</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">✗</span>
                  <span>No trust accounting or billing</span>
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
                  <span>Does not manage files after client referral</span>
                </li>
              </ul>
            </div>
            <div className="bg-indigo-50 rounded-2xl p-6 border-2 border-indigo-200">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Atticus</h2>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>Integrated client intake — new clients flow directly into matters</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>AI document analysis — extract key facts from client documents</span>
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
                  <span>Matter management through the full file lifecycle</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>Ontario Limitations Act 2002 deadline tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>Client portal with secure document sharing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>Canadian data residency — PIPEDA compliant</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>$149 CAD/month — complete practice management</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="p-6 bg-indigo-50 rounded-2xl border border-indigo-200 mb-12">
            <h2 className="text-xl font-bold text-gray-900 mb-3">These tools solve different problems</h2>
            <p className="text-gray-700 mb-4">
              Lawyered helps potential clients find lawyers. Atticus helps lawyers run their practices after
              the client walks in the door. They are complementary, not competing — but if you are looking
              for practice management software, Lawyered is not the answer.
            </p>
            <p className="text-gray-700">
              Ontario lawyers who want to improve client acquisition can use Lawyered for referrals and Atticus
              to manage the resulting files, bill clients, and maintain trust accounting compliance.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">What Ontario Lawyers Actually Need</h2>
          <div className="overflow-x-auto mb-12">
            <table className="min-w-full border border-gray-200 rounded-xl text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">Practice Need</th>
                  <th className="px-4 py-3 text-center font-semibold text-gray-700">Lawyered</th>
                  <th className="px-4 py-3 text-center font-semibold text-indigo-700">Atticus</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Client referrals and marketing", "✓ core feature", "✓ intake forms and client portal"],
                  ["Practice management (billing, trust, matters)", "✗", "✓"],
                  ["LSO trust accounting compliance", "✗", "✓"],
                  ["AI document analysis", "✗", "✓"],
                  ["Limitation period tracking", "✗", "✓"],
                  ["Conflict checking", "✗", "✓"],
                  ["Time tracking and invoicing", "✗", "✓"],
                  ["Canadian data residency", "✓ (Canadian company)", "✓"],
                  ["Purpose", "Client acquisition", "Practice management"],
                ].map(([feature, lawyered, atticus], i) => (
                  <tr key={i} className={i % 2 === 0 ? "border-t border-gray-100" : "border-t border-gray-100 bg-gray-50"}>
                    <td className="px-4 py-3 font-medium text-gray-900">{feature}</td>
                    <td className="px-4 py-3 text-center text-gray-600">{lawyered}</td>
                    <td className="px-4 py-3 text-center text-indigo-700 font-medium">{atticus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-indigo-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">
              Manage Every File from Intake to Invoice
            </h2>
            <p className="text-indigo-100 mb-6 max-w-xl mx-auto">
              Atticus gives Ontario lawyers the practice management tools to handle every file professionally —
              trust accounting, AI document intelligence, HST billing, and deadline tracking in one Canadian platform.
            </p>
            <a
              href="/sign-up"
              className="inline-block bg-white text-indigo-600 font-bold px-8 py-3 rounded-xl hover:bg-indigo-50 transition-colors"
            >
              Start Free Trial
            </a>
            <p className="text-indigo-200 text-sm mt-3">No credit card required</p>
          </div>
        </div>
      </main>
    </>
  );
}
