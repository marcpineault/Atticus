import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "LawDepot Alternative for Ontario Lawyers | Atticus",
  description:
    "Comparing LawDepot vs Atticus for Ontario law firms. LawDepot generates generic legal forms — Atticus is a full practice management platform with AI document intelligence, LSO trust accounting, and Ontario-specific compliance built in.",
  alternates: { canonical: "https://getatticus.ca/lawdepot-alternative" },
  openGraph: {
    title: "LawDepot Alternative for Ontario Lawyers | Atticus",
    description:
      "LawDepot is a DIY document generator. Atticus is a complete practice management platform built for Ontario lawyers — trust accounting, AI analysis, and client management in one.",
    url: "https://getatticus.ca/lawdepot-alternative",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "LawDepot Alternative for Ontario Lawyers",
  description: "Comparison of LawDepot and Atticus for Ontario law firms.",
  url: "https://getatticus.ca/lawdepot-alternative",
};

const features = [
  {
    category: "Practice Management",
    atticus: "Full matter management — clients, files, deadlines, documents in one platform",
    lawdepot: "Document generation only — no matter or client management",
  },
  {
    category: "Trust Accounting",
    atticus: "LSO By-Law 9 compliant mixed trust accounting, monthly reconciliation, client ledgers",
    lawdepot: "No accounting features — not designed for law firm finance",
  },
  {
    category: "AI Document Analysis",
    atticus: "Extracts key facts, dates, and obligations from uploaded client documents",
    lawdepot: "Template-based generation only — no AI analysis of existing documents",
  },
  {
    category: "Ontario-Specific Forms",
    atticus: "Ontario court forms, LSO-compliant retainer templates, trust request letters",
    lawdepot: "Generic templates — not reviewed for Ontario legal compliance or LSO rules",
  },
  {
    category: "Time Tracking & Billing",
    atticus: "Built-in time tracking, HST invoicing, Stripe payment collection",
    lawdepot: "No time tracking or billing features",
  },
  {
    category: "Client Portal",
    atticus: "Secure client intake, document sharing, and communication portal",
    lawdepot: "No client portal — documents emailed or downloaded by client",
  },
  {
    category: "Data Residency",
    atticus: "Canadian data storage — PIPEDA compliant",
    lawdepot: "US-based platform — data residency risk for Ontario lawyers",
  },
  {
    category: "Target User",
    atticus: "Ontario lawyers and law firms — built for professional legal practice",
    lawdepot: "Consumers and small businesses generating their own documents without a lawyer",
  },
];

export default function LawDepotAlternativePage() {
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
              <span className="text-blue-300 text-sm font-medium">LawDepot vs Atticus</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              The LawDepot Alternative for<br />
              <span className="text-blue-400">Ontario Law Firms</span>
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
              LawDepot generates consumer-grade document templates. Atticus is a complete practice
              management platform — AI document intelligence, LSO trust accounting, matter management,
              and client billing built for Ontario lawyers.
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
            <h2 className="text-2xl font-bold text-slate-900 mb-4">LawDepot vs Atticus: Different Tools for Different Jobs</h2>
            <p className="text-slate-600 mb-6">
              LawDepot is a consumer document generator — useful for individuals who need a basic
              will or rental agreement without hiring a lawyer. It is not designed for law firm
              operations. Atticus is built specifically for Ontario law firms: it manages client
              files, handles trust accounting under LSO rules, tracks time, generates HST-compliant
              invoices, and uses AI to extract key information from the documents your clients bring you.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                {
                  title: "No Practice Management",
                  desc: "LawDepot has no matter management, deadline tracking, or client file organization. Ontario lawyers need a platform that manages their entire practice — not just generates documents.",
                },
                {
                  title: "No LSO Compliance",
                  desc: "LawDepot is not designed for law firm trust accounting. LSO By-Law 9 requires specific ledger formats, monthly reconciliations, and mixed trust management that LawDepot cannot provide.",
                },
                {
                  title: "Consumer-Grade Templates",
                  desc: "LawDepot templates are designed for self-represented individuals. Ontario lawyers need professional documents reviewed for LSO compliance, court rules, and jurisdiction-specific requirements.",
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
            <h2 className="text-3xl font-bold text-slate-900 mb-3 text-center">LawDepot vs Atticus: Feature Comparison</h2>
            <p className="text-slate-500 text-center mb-10">For Ontario law firms and solo lawyers</p>
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="px-6 py-4 text-left text-sm font-semibold">Feature</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Atticus</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">LawDepot</th>
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
                        <span className="text-red-400 mr-2">✗</span>{row.lawdepot}
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
            <h2 className="text-3xl font-bold mb-4">A Real Practice Management Platform for Ontario Lawyers</h2>
            <p className="text-blue-100 mb-8">
              Move beyond template generators. Atticus gives Ontario lawyers AI document intelligence,
              LSO-compliant trust accounting, matter management, and time billing in one platform —
              starting at $149 CAD/month.
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
