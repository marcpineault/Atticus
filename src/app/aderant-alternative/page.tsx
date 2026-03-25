import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aderant Alternative for Ontario Lawyers — Atticus vs Aderant Expert",
  description:
    "Compare Aderant Expert with Atticus for Ontario law firms. Aderant is enterprise practice management for large US and international law firms; Atticus is purpose-built for Ontario solo and small firms with LSO-compliant trust accounting and AI document intelligence.",
  openGraph: {
    title: "Aderant Alternative for Ontario Lawyers — Atticus vs Aderant Expert",
    description:
      "Aderant is enterprise legal management software for large firms. Atticus is purpose-built for Ontario solo and small law firms with trust accounting, AI, and Canadian data residency.",
    type: "website",
    url: "https://getatticus.ca/aderant-alternative",
  },
  alternates: { canonical: "https://getatticus.ca/aderant-alternative" },
};

export default function AderantAlternativePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Aderant Alternative for Ontario Lawyers",
            description:
              "Compare Aderant Expert with Atticus for Ontario law firms. Enterprise legal management vs purpose-built Ontario practice management.",
            url: "https://getatticus.ca/aderant-alternative",
          }),
        }}
      />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="mb-6">
            <span className="inline-block bg-slate-100 text-slate-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
              Aderant Alternative
            </span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
            Aderant Alternative for Ontario Lawyers
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Aderant Expert is enterprise practice management software designed for large US and international
            law firms — AmLaw 100 and 200, global firms with hundreds of lawyers and sophisticated financial
            management needs. It is not built for Ontario solo and small firm practice. Atticus is purpose-built
            for Ontario law firms: LSO-compliant trust accounting, AI document intelligence, and full practice
            management at a fraction of the cost — $149 CAD/month.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 rounded-2xl p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Aderant Expert</h2>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>Enterprise financial management for large firms</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>Complex billing arrangements (task-based, alternative fee)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>Sophisticated business intelligence and reporting</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">✗</span>
                  <span>Not designed for Ontario solo/small firm compliance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">✗</span>
                  <span>No AI document intelligence</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">✗</span>
                  <span>Enterprise pricing — six-figure annual contracts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">✗</span>
                  <span>Months-long implementation and training</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">✗</span>
                  <span>US-centric — requires customization for Ontario rules</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">✗</span>
                  <span>IT department required to maintain</span>
                </li>
              </ul>
            </div>
            <div className="bg-slate-50 rounded-2xl p-6 border-2 border-slate-300">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Atticus</h2>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>LSO By-Law 9 trust accounting built-in — no setup required</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>AI document analysis — extract facts, parties, dates, obligations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>Matter and client management</span>
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
                  <span>Set up in minutes — no IT department needed</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>$149 CAD/month — all-in, no enterprise contract</span>
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
                  <th className="px-4 py-3 text-center font-semibold text-gray-700">Aderant Expert</th>
                  <th className="px-4 py-3 text-center font-semibold text-slate-700">Atticus</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Trust accounting (By-Law 9)", "Requires Ontario customization", "✓ built-in"],
                  ["AI document intelligence", "✗", "✓"],
                  ["Matter management", "✓ enterprise-grade", "✓ right-sized for small firms"],
                  ["Billing and invoicing (HST)", "✓ complex billing", "✓ HST billing"],
                  ["Time tracking", "✓", "✓"],
                  ["Ontario limitation period alerts", "✗", "✓"],
                  ["Client portal", "✓ enterprise", "✓"],
                  ["Canadian data residency", "Unclear", "✓"],
                  ["Implementation time", "Months", "Minutes"],
                  ["IT requirements", "Yes — dedicated IT/admins", "None — cloud-based"],
                  ["Target firm size", "100–1,000+ lawyers", "1–20 lawyers"],
                  ["Pricing (CAD)", "Six-figure annual contracts", "$49–$149/lawyer/month"],
                ].map(([feature, aderant, atticus], i) => (
                  <tr key={i} className={i % 2 === 0 ? "border-t border-gray-100" : "border-t border-gray-100 bg-gray-50"}>
                    <td className="px-4 py-3 font-medium text-gray-900">{feature}</td>
                    <td className="px-4 py-3 text-center text-gray-600">{aderant}</td>
                    <td className="px-4 py-3 text-center text-slate-700 font-medium">{atticus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            The Wrong Tool for Ontario Solo and Small Firms
          </h2>
          <div className="space-y-4 mb-12">
            <div className="p-5 border border-gray-200 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2">Built for a different world</h3>
              <p className="text-gray-600 text-sm">
                Aderant Expert is purpose-built for AmLaw 100 and 200 firms — large practices with dedicated
                IT departments, implementation teams, and finance professionals. Ontario solo and small firm
                lawyers don&apos;t need enterprise financial management for hundreds of lawyers; they need a platform
                that handles trust accounting, billing, and matter management simply and compliantly.
              </p>
            </div>
            <div className="p-5 border border-gray-200 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2">Enterprise cost without enterprise need</h3>
              <p className="text-gray-600 text-sm">
                Aderant requires six-figure annual contracts, months of implementation, and ongoing IT resources.
                For a solo practitioner or two-lawyer firm, this is entirely impractical. Atticus provides
                all the core practice management functionality Ontario lawyers need at $149 CAD/month with
                zero implementation time.
              </p>
            </div>
            <div className="p-5 border border-gray-200 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2">Ontario-specific compliance built in</h3>
              <p className="text-gray-600 text-sm">
                Aderant was not designed for Ontario LSO compliance. Adapting it to meet By-Law 9 trust
                accounting requirements requires custom configuration. Atticus is built specifically for
                Ontario law firms — LSO trust accounting, HST billing, and Limitations Act deadline tracking
                are built in from day one, no customization required.
              </p>
            </div>
          </div>

          <div className="bg-slate-700 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">
              Enterprise Power, Solo Firm Simplicity
            </h2>
            <p className="text-slate-200 mb-6 max-w-xl mx-auto">
              Atticus gives Ontario solo and small firm lawyers the practice management, trust accounting,
              and AI intelligence they need — without the enterprise complexity or cost.
            </p>
            <a
              href="/sign-up"
              className="inline-block bg-white text-slate-700 font-bold px-8 py-3 rounded-xl hover:bg-slate-100 transition-colors"
            >
              Start Free Trial
            </a>
            <p className="text-slate-400 text-sm mt-3">No credit card required</p>
          </div>
        </div>
      </main>
    </>
  );
}
