import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SuiteFiles Alternative for Ontario Lawyers — Atticus vs SuiteFiles",
  description:
    "Compare SuiteFiles with Atticus for Ontario law firms. SuiteFiles is a document management platform for professional services; Atticus combines document management with LSO-compliant trust accounting, AI document intelligence, and full Ontario practice management.",
  openGraph: {
    title: "SuiteFiles Alternative for Ontario Lawyers — Atticus vs SuiteFiles",
    description:
      "SuiteFiles is a cloud document management tool for professional services. Atticus is a full Ontario practice management platform with AI document analysis, trust accounting, and built-in matter management.",
    type: "website",
    url: "https://getatticus.ca/suitefiles-alternative",
  },
  alternates: { canonical: "https://getatticus.ca/suitefiles-alternative" },
};

export default function SuiteFilesAlternativePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "SuiteFiles Alternative for Ontario Lawyers",
            description:
              "Compare SuiteFiles with Atticus for Ontario law firms. Full feature comparison of cloud document management vs integrated Ontario practice management.",
            url: "https://getatticus.ca/suitefiles-alternative",
          }),
        }}
      />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="mb-6">
            <span className="inline-block bg-teal-100 text-teal-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
              SuiteFiles Alternative
            </span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
            SuiteFiles Alternative for Ontario Lawyers
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            SuiteFiles is a cloud document management platform built for professional services firms —
            accountants, law firms, and consultants — that integrates with Microsoft 365 and Xero.
            It handles file storage, client folders, and document workflows, but it does not offer
            trust accounting, billing, or Ontario legal compliance. Atticus is built specifically for
            Ontario law firms: full practice management, LSO-compliant trust accounting, AI document
            intelligence, and client management in one Canadian platform.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 rounded-2xl p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4">SuiteFiles</h2>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>Cloud document storage and client folder structure</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>Microsoft 365 and SharePoint integration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>Document templates and workflow automation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>E-signature integration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">✗</span>
                  <span>No trust accounting or LSO compliance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">✗</span>
                  <span>No legal billing or time tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">✗</span>
                  <span>No AI document intelligence for legal content</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">✗</span>
                  <span>No Ontario limitation period tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">✗</span>
                  <span>NZ/AU-based — data may not be in Canada</span>
                </li>
              </ul>
            </div>
            <div className="bg-teal-50 rounded-2xl p-6 border-2 border-teal-200">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Atticus</h2>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>Document storage organized by matter and client</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>AI document analysis — extract key facts, parties, dates, and obligations</span>
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
                  <span>$149 CAD/month — all-in, no separate DMS subscription</span>
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
                  <th className="px-4 py-3 text-center font-semibold text-gray-700">SuiteFiles</th>
                  <th className="px-4 py-3 text-center font-semibold text-teal-700">Atticus</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Document storage by matter", "✓ client folders", "✓ matter-linked"],
                  ["AI document analysis", "✗", "✓ extract facts, dates, obligations"],
                  ["Matter management", "✗", "✓"],
                  ["Trust accounting (By-Law 9)", "✗", "✓"],
                  ["Billing and invoicing (HST)", "✗", "✓"],
                  ["Time tracking", "✗", "✓"],
                  ["Ontario limitation period alerts", "✗", "✓"],
                  ["Conflict checking", "✗", "✓"],
                  ["Client portal", "✓ limited", "✓ full secure sharing"],
                  ["E-signature", "✓ via integration", "✓"],
                  ["Canadian data residency", "Unclear (NZ company)", "✓"],
                  ["Pricing (CAD)", "~$50–$100/user/month (DMS only)", "$49–$149/lawyer/month all-in"],
                ].map(([feature, suitefiles, atticus], i) => (
                  <tr key={i} className={i % 2 === 0 ? "border-t border-gray-100" : "border-t border-gray-100 bg-gray-50"}>
                    <td className="px-4 py-3 font-medium text-gray-900">{feature}</td>
                    <td className="px-4 py-3 text-center text-gray-600">{suitefiles}</td>
                    <td className="px-4 py-3 text-center text-teal-700 font-medium">{atticus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Why Ontario Law Firms Switch from SuiteFiles
          </h2>
          <div className="space-y-4 mb-12">
            <div className="p-5 border border-gray-200 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2">Document management is not practice management</h3>
              <p className="text-gray-600 text-sm">
                SuiteFiles organizes files well — but Ontario lawyers also need trust accounting, time tracking,
                billing, limitation period management, and conflict checking. Using SuiteFiles means paying
                for a DMS subscription <em>plus</em> a separate practice management platform, duplicating
                data and increasing monthly costs.
              </p>
            </div>
            <div className="p-5 border border-gray-200 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2">AI that understands legal documents</h3>
              <p className="text-gray-600 text-sm">
                SuiteFiles stores legal documents. Atticus reads them. Atticus&apos;s AI extracts key facts,
                parties, obligations, dates, and limitation periods from uploaded contracts, pleadings,
                and correspondence — turning document storage into actionable intelligence.
              </p>
            </div>
            <div className="p-5 border border-gray-200 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2">Canadian data residency for client files</h3>
              <p className="text-gray-600 text-sm">
                SuiteFiles is a New Zealand company. Client files stored in its system may not be subject
                to Canadian privacy law, raising PIPEDA concerns for Ontario lawyers who are required under
                the LSO Rules of Professional Conduct to protect client confidentiality. Atticus stores all
                data in Canadian data centres.
              </p>
            </div>
            <div className="p-5 border border-gray-200 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2">Built for Ontario legal practice</h3>
              <p className="text-gray-600 text-sm">
                SuiteFiles is built for professional services broadly — accountants, consultants, law firms.
                It has no features specific to Ontario legal practice: no LSO trust accounting, no Limitations
                Act 2002 tracking, no HST billing on legal fees. Atticus is built exclusively for Ontario
                law firms and understands the compliance requirements they face.
              </p>
            </div>
          </div>

          <div className="bg-teal-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">
              Documents + Practice Management — One Ontario Platform
            </h2>
            <p className="text-teal-100 mb-6 max-w-xl mx-auto">
              Replace SuiteFiles and your practice management software with Atticus — AI document intelligence,
              LSO trust accounting, billing, and matter management in one Canadian platform.
            </p>
            <a
              href="/sign-up"
              className="inline-block bg-white text-teal-600 font-bold px-8 py-3 rounded-xl hover:bg-teal-50 transition-colors"
            >
              Start Free Trial
            </a>
            <p className="text-teal-200 text-sm mt-3">No credit card required</p>
          </div>
        </div>
      </main>
    </>
  );
}
