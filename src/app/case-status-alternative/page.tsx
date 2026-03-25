import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Case Status Alternative for Ontario Lawyers | Atticus",
  description:
    "Comparing Case Status vs Atticus for Ontario law firms. Case Status is a client communication portal. Atticus integrates client communication with full practice management, LSO trust accounting, and AI document intelligence in one Ontario-built platform.",
  alternates: { canonical: "https://getatticus.ca/case-status-alternative" },
  openGraph: {
    title: "Case Status Alternative for Ontario Lawyers | Atticus",
    description:
      "Case Status is a standalone client portal. Atticus gives Ontario lawyers integrated client communication, matter management, trust accounting, and AI — one platform.",
    url: "https://getatticus.ca/case-status-alternative",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Case Status Alternative for Ontario Lawyers",
  description: "Comparison of Case Status and Atticus for Ontario law firms.",
  url: "https://getatticus.ca/case-status-alternative",
};

const features = [
  {
    category: "Client Communication",
    atticus: "Integrated client portal — secure messaging, document sharing, and status updates",
    caseStatus: "Client communication portal only — standalone tool, not integrated with your files",
  },
  {
    category: "Practice Management",
    atticus: "Full matter management — clients, files, deadlines, documents in one platform",
    caseStatus: "No practice management — client-facing portal only",
  },
  {
    category: "Trust Accounting",
    atticus: "LSO By-Law 9 compliant mixed trust accounting, client ledgers, monthly reconciliation",
    caseStatus: "No accounting features — not designed for law firm finance",
  },
  {
    category: "AI Document Analysis",
    atticus: "Extracts key facts, dates, and obligations from uploaded client documents",
    caseStatus: "Document sharing only — no AI analysis of file content",
  },
  {
    category: "Ontario Compliance",
    atticus: "LSO rules, limitation period tracking, PIPEDA compliant Canadian data storage",
    caseStatus: "US-based platform — no Ontario legal compliance features",
  },
  {
    category: "Time Tracking & Billing",
    atticus: "Built-in time tracking, HST invoicing, Stripe payment collection",
    caseStatus: "No time tracking or legal billing features",
  },
  {
    category: "Workflow Integration",
    atticus: "Client intake flows directly into matters, documents, deadlines, and billing",
    caseStatus: "Separate subscription — manual synchronization with practice management system required",
  },
  {
    category: "Pricing",
    atticus: "From $149 CAD/month — full platform including client portal",
    caseStatus: "Additional subscription on top of existing practice management tools",
  },
];

export default function CaseStatusAlternativePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-white">
        <section className="bg-slate-900 text-white py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 rounded-full px-4 py-1.5 mb-6">
              <span className="text-blue-300 text-sm font-medium">Case Status vs Atticus</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              The Case Status Alternative for<br />
              <span className="text-blue-400">Ontario Law Firms</span>
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
              Case Status is a standalone client portal. Atticus integrates client communication
              with matter management, trust accounting, AI document intelligence, and billing
              &mdash; one Ontario-built platform instead of a patchwork of tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/sign-up" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Start Free Trial
              </Link>
              <Link href="/calculator" className="border border-slate-600 hover:border-slate-400 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Calculate Time Savings
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-slate-50 border-b border-slate-200">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">The Problem with Standalone Client Portals</h2>
            <p className="text-slate-600 mb-6">
              Case Status solves client communication — giving clients visibility into their case
              progress without constant phone calls. But it does not replace your practice
              management system, and it adds another subscription, another login, and another
              manual sync to your workflow. Atticus includes integrated client communication
              as part of the full platform, so your client portal and your case files are
              always in sync automatically.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                {
                  title: "No Practice Management",
                  desc: "Case Status shows clients their case status, but cannot manage your cases. You still need a full practice management system — meaning Case Status is an add-on cost, not a replacement.",
                },
                {
                  title: "No LSO Trust Accounting",
                  desc: "Ontario lawyers must maintain LSO-compliant trust accounts. Case Status has no accounting features and cannot replace the trust accounting functionality your practice requires.",
                },
                {
                  title: "US Platform, US Data",
                  desc: "Case Status is a US-based platform. Client information, documents, and case details stored in US data centres creates PIPEDA compliance risk for Ontario law firms.",
                },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-lg p-5 border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-3 text-center">Case Status vs Atticus: Feature Comparison</h2>
            <p className="text-slate-500 text-center mb-10">For Ontario law firms and solo lawyers</p>
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="px-6 py-4 text-left text-sm font-semibold">Feature</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Atticus</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Case Status</th>
                  </tr>
                </thead>
                <tbody>
                  {features.map((row, i) => (
                    <tr key={row.category} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-6 py-4 text-sm font-medium text-slate-900 w-1/4">{row.category}</td>
                      <td className="px-6 py-4 text-sm text-slate-700 w-[37.5%]">
                        <span className="text-green-600 mr-2">✓</span>{row.atticus}
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-500 w-[37.5%]">
                        <span className="text-red-400 mr-2">✗</span>{row.caseStatus}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-blue-600 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">One Platform — Client Portal Included</h2>
            <p className="text-blue-100 mb-8">
              Atticus gives Ontario law firms an integrated client portal as part of the full
              practice management platform. No extra subscription, no manual syncing, no
              disconnected tools &mdash; from $149 CAD/month.
            </p>
            <Link href="/sign-up" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors inline-block">
              Start Your Free Trial
            </Link>
            <p className="text-blue-200 text-sm mt-4">No credit card required &middot; Canadian data storage</p>
          </div>
        </section>
      </main>
    </>
  );
}
