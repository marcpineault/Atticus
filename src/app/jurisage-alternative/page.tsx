import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jurisage Alternative for Ontario Lawyers — Atticus vs Jurisage AI Legal Research",
  description:
    "Compare Jurisage with Atticus for Ontario law firms. Jurisage provides AI-powered Canadian legal research; Atticus combines Canadian legal AI with full Ontario practice management, LSO-compliant trust accounting, billing, and matter management.",
  openGraph: {
    title: "Jurisage Alternative for Ontario Lawyers — Atticus vs Jurisage AI Legal Research",
    description:
      "Jurisage is a standalone AI legal research tool for Canadian law. Atticus combines Canadian legal AI with full Ontario practice management, trust accounting, and billing.",
    type: "website",
    url: "https://getatticus.ca/jurisage-alternative",
  },
  alternates: { canonical: "https://getatticus.ca/jurisage-alternative" },
};

export default function JurisageAlternativePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Jurisage Alternative for Ontario Lawyers",
            description:
              "Compare Jurisage AI legal research with Atticus for Ontario law firms. Standalone Canadian legal research vs integrated Ontario practice management.",
            url: "https://getatticus.ca/jurisage-alternative",
          }),
        }}
      />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="mb-6">
            <span className="inline-block bg-violet-100 text-violet-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
              Jurisage Alternative
            </span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
            Jurisage Alternative for Ontario Lawyers
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Jurisage is a Canadian AI legal research platform — it uses AI to search Canadian case law
            and provide research assistance tailored to Canadian jurisdictions. It is a standalone
            research tool with no practice management, billing, or trust accounting features. Atticus
            is a full Ontario practice management platform with integrated Canadian legal AI: document
            analysis, matter intelligence, LSO-compliant trust accounting, and billing in one Canadian
            platform.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 rounded-2xl p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Jurisage</h2>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>AI-powered Canadian legal research</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>Canadian case law search and summarization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>Drafting assistance with legal citations</span>
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
                  <span>No Ontario limitation period tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">✗</span>
                  <span>Requires separate practice management tool</span>
                </li>
              </ul>
            </div>
            <div className="bg-violet-50 rounded-2xl p-6 border-2 border-violet-200">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Atticus</h2>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>Canadian legal AI integrated with practice context — research connected to your matters</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>AI document analysis — extract facts, parties, obligations, and deadlines from client files</span>
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
                  <span>Matter management from intake to close</span>
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
                  <span>$149 CAD/month — research + practice management in one</span>
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
                  <th className="px-4 py-3 text-center font-semibold text-gray-700">Jurisage</th>
                  <th className="px-4 py-3 text-center font-semibold text-violet-700">Atticus</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Canadian legal AI and research", "✓ core feature", "✓ integrated with matter context"],
                  ["AI document analysis (client files)", "✗", "✓"],
                  ["Practice management", "✗", "✓"],
                  ["Trust accounting (By-Law 9)", "✗", "✓"],
                  ["Billing and invoicing (HST)", "✗", "✓"],
                  ["Time tracking", "✗", "✓"],
                  ["Ontario limitation period alerts", "✗", "✓"],
                  ["Matter management", "✗", "✓"],
                  ["Client portal", "✗", "✓"],
                  ["Canadian data residency", "✓ (Canadian company)", "✓"],
                  ["All-in-one platform", "✗ (research only)", "✓"],
                  ["Pricing (CAD)", "Separate subscription (research only)", "$49–$149/lawyer/month all-in"],
                ].map(([feature, jurisage, atticus], i) => (
                  <tr key={i} className={i % 2 === 0 ? "border-t border-gray-100" : "border-t border-gray-100 bg-gray-50"}>
                    <td className="px-4 py-3 font-medium text-gray-900">{feature}</td>
                    <td className="px-4 py-3 text-center text-gray-600">{jurisage}</td>
                    <td className="px-4 py-3 text-center text-violet-700 font-medium">{atticus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Why Ontario Lawyers Choose Atticus
          </h2>
          <div className="space-y-4 mb-12">
            <div className="p-5 border border-gray-200 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2">AI connected to your practice, not just the law</h3>
              <p className="text-gray-600 text-sm">
                Jurisage answers questions about Canadian law. Atticus&apos;s AI works on your actual client
                files — extracting key facts from the documents your clients bring in, identifying obligations,
                and surfacing deadline risks from contracts and pleadings. This is the difference between
                legal research AI and practice management AI.
              </p>
            </div>
            <div className="p-5 border border-gray-200 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2">Eliminate the tool sprawl problem</h3>
              <p className="text-gray-600 text-sm">
                Ontario solo and small firm lawyers who add Jurisage to their toolkit are paying for research
                AI <em>plus</em> practice management software <em>plus</em> billing software <em>plus</em>
                trust accounting. Atticus consolidates the practice management and AI functions into one
                platform at one price — no tool sprawl, no duplicate data entry.
              </p>
            </div>
            <div className="p-5 border border-gray-200 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2">Trust accounting is non-negotiable</h3>
              <p className="text-gray-600 text-sm">
                Legal research AI does not help Ontario lawyers with their most critical compliance obligation:
                LSO By-Law 9 trust accounting. Atticus builds compliant trust accounting into every matter —
                because research AI without trust accounting leaves the most important compliance need unmet.
              </p>
            </div>
          </div>

          <div className="bg-violet-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">
              Canadian Legal AI + Ontario Practice Management
            </h2>
            <p className="text-violet-100 mb-6 max-w-xl mx-auto">
              Atticus gives Ontario lawyers Canadian legal AI integrated with full practice management —
              trust accounting, billing, matter management, and document intelligence in one Canadian platform.
            </p>
            <a
              href="/sign-up"
              className="inline-block bg-white text-violet-600 font-bold px-8 py-3 rounded-xl hover:bg-violet-50 transition-colors"
            >
              Start Free Trial
            </a>
            <p className="text-violet-200 text-sm mt-3">No credit card required</p>
          </div>
        </div>
      </main>
    </>
  );
}
