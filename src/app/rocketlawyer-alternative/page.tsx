import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rocket Lawyer Alternative for Ontario Lawyers — Atticus vs Rocket Lawyer",
  description:
    "Compare Rocket Lawyer with Atticus for Ontario law firms. Rocket Lawyer provides consumer document templates; Atticus is a full Ontario practice management platform with LSO-compliant trust accounting, AI document intelligence, and professional legal workflows.",
  openGraph: {
    title: "Rocket Lawyer Alternative for Ontario Lawyers — Atticus vs Rocket Lawyer",
    description:
      "Rocket Lawyer is a consumer document platform. Atticus is purpose-built for Ontario law firm practice management with trust accounting, AI, and Canadian compliance.",
    type: "website",
    url: "https://getatticus.ca/rocketlawyer-alternative",
  },
  alternates: { canonical: "https://getatticus.ca/rocketlawyer-alternative" },
};

export default function RocketLawyerAlternativePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Rocket Lawyer Alternative for Ontario Lawyers",
            description:
              "Compare Rocket Lawyer with Atticus for Ontario law firms. Consumer document templates vs professional Ontario practice management.",
            url: "https://getatticus.ca/rocketlawyer-alternative",
          }),
        }}
      />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="mb-6">
            <span className="inline-block bg-red-100 text-red-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
              Rocket Lawyer Alternative
            </span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
            Rocket Lawyer Alternative for Ontario Lawyers
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Rocket Lawyer is a US consumer legal document platform — it provides template contracts,
            basic legal forms, and on-demand legal advice to individuals and small businesses. It is
            not practice management software for law firms. Atticus is purpose-built for Ontario
            law firms: full practice management, LSO-compliant trust accounting, AI document intelligence,
            and professional client workflows in one Canadian platform.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 rounded-2xl p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Rocket Lawyer</h2>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>Consumer document templates (US-focused)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>On-demand legal advice for individuals</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>E-signature for generated documents</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">✗</span>
                  <span>Not practice management software</span>
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
                  <span>US documents — not adapted for Ontario law</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">✗</span>
                  <span>No matter or client management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">✗</span>
                  <span>No Canadian data residency</span>
                </li>
              </ul>
            </div>
            <div className="bg-red-50 rounded-2xl p-6 border-2 border-red-200">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Atticus</h2>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>Ontario-specific practice management for lawyers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>AI document analysis — extract key terms from contracts and pleadings</span>
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
                  <span>Matter and client management</span>
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
                  <span>$149 CAD/month — built for law firms, not consumers</span>
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
                  <th className="px-4 py-3 text-center font-semibold text-gray-700">Rocket Lawyer</th>
                  <th className="px-4 py-3 text-center font-semibold text-red-700">Atticus</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Target user", "Consumers & small businesses", "Ontario law firms and lawyers"],
                  ["Document templates", "✓ US templates", "✓ Ontario AI document analysis"],
                  ["Practice management", "✗", "✓"],
                  ["Trust accounting (By-Law 9)", "✗", "✓"],
                  ["Billing and invoicing (HST)", "✗", "✓"],
                  ["Time tracking", "✗", "✓"],
                  ["Matter management", "✗", "✓"],
                  ["Ontario limitation period alerts", "✗", "✓"],
                  ["Conflict checking", "✗", "✓"],
                  ["Client portal", "✗", "✓"],
                  ["Canadian data residency", "✗ (US-based)", "✓"],
                  ["Ontario-specific templates/compliance", "✗ (US law)", "✓"],
                  ["Pricing (CAD)", "~$50/month consumer", "$49/lawyer/month professional"],
                ].map(([feature, rocketlawyer, atticus], i) => (
                  <tr key={i} className={i % 2 === 0 ? "border-t border-gray-100" : "border-t border-gray-100 bg-gray-50"}>
                    <td className="px-4 py-3 font-medium text-gray-900">{feature}</td>
                    <td className="px-4 py-3 text-center text-gray-600">{rocketlawyer}</td>
                    <td className="px-4 py-3 text-center text-red-700 font-medium">{atticus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Different Products for Different Purposes
          </h2>
          <div className="space-y-4 mb-12">
            <div className="p-5 border border-gray-200 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2">Rocket Lawyer is for clients, not lawyers</h3>
              <p className="text-gray-600 text-sm">
                Rocket Lawyer targets individuals and small businesses who want to generate basic legal
                documents without hiring a lawyer. It is not designed for lawyers to manage their practices.
                There is no billing, no trust accounting, no matter management — none of the tools a
                licensed Ontario lawyer needs to run a compliant practice.
              </p>
            </div>
            <div className="p-5 border border-gray-200 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2">US documents in an Ontario practice</h3>
              <p className="text-gray-600 text-sm">
                Rocket Lawyer&apos;s document library is primarily built for US law. Agreements generated
                through Rocket Lawyer may reference US statutes, use US-standard provisions, and omit
                Ontario-specific legal requirements. Atticus uses AI trained on Ontario law to analyze and
                extract relevant information from documents drafted under Ontario law.
              </p>
            </div>
            <div className="p-5 border border-gray-200 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2">LSO trust accounting cannot be ignored</h3>
              <p className="text-gray-600 text-sm">
                Ontario lawyers who handle client funds must maintain By-Law 9 compliant trust accounts.
                Rocket Lawyer has no trust accounting functionality. Mismanaging trust funds is the leading
                cause of LSO disciplinary proceedings and licence suspension. Atticus builds compliant
                trust accounting into every matter from the first dollar received.
              </p>
            </div>
          </div>

          <div className="bg-red-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">
              Professional Practice Management for Ontario Lawyers
            </h2>
            <p className="text-red-100 mb-6 max-w-xl mx-auto">
              Atticus is built for Ontario law firms — not consumers. LSO trust accounting, AI document
              intelligence, HST billing, and matter management in one Canadian platform.
            </p>
            <a
              href="/sign-up"
              className="inline-block bg-white text-red-600 font-bold px-8 py-3 rounded-xl hover:bg-red-50 transition-colors"
            >
              Start Free Trial
            </a>
            <p className="text-red-200 text-sm mt-3">No credit card required</p>
          </div>
        </div>
      </main>
    </>
  );
}
