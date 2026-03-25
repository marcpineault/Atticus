import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Closepin Alternative for Ontario Lawyers | Atticus vs Closepin Real Estate Closing",
  description:
    "Looking for a Closepin alternative? Compare Atticus vs Closepin for Ontario law firms. Atticus combines full practice management, LSO-compliant trust accounting, Canadian legal AI, and HST billing — built for Ontario solo and small law firms including real estate.",
  openGraph: {
    title: "Closepin Alternative for Ontario Lawyers | Atticus vs Closepin",
    description:
      "Why Ontario real estate lawyers choose Atticus over Closepin. Atticus delivers complete practice management, LSO-compliant trust accounting, and Canadian legal AI — not just US real estate transaction closing management.",
    url: "https://getatticus.ca/closepin-alternative",
    siteName: "Atticus",
    type: "website",
  },
};

const schemaJson = `{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Atticus",
  "applicationCategory": "LegalSoftware",
  "operatingSystem": "Web",
  "offers": {
    "@type": "Offer",
    "price": "149",
    "priceCurrency": "CAD",
    "priceSpecification": {
      "@type": "UnitPriceSpecification",
      "price": "149",
      "priceCurrency": "CAD",
      "unitText": "per lawyer per month"
    }
  },
  "description": "Atticus is the Closepin alternative for Ontario real estate lawyers that combines Canadian legal AI with LSO-compliant trust accounting, HST billing, full practice management, and AI document analysis — not just US real estate transaction closing workflow management.",
  "url": "https://getatticus.ca",
  "featureList": [
    "AI-powered document analysis and management",
    "Ontario trust accounting (Law Society By-Law 9 compliant)",
    "HST billing and CRA-compliant invoicing",
    "Matter and time management",
    "Limitation period tracking",
    "Client intake automation",
    "Conflict checking",
    "LSO compliance built in"
  ]
}`;

type Feature = {
  feature: string;
  atticus: string;
  closepin: string;
};

const featureComparison: Feature[] = [
  {
    feature: "Practice management",
    atticus: "Full integrated practice management for all Ontario practice areas including residential and commercial real estate",
    closepin: "Real estate transaction closing workflow management; no general practice management beyond closings",
  },
  {
    feature: "Ontario trust accounting",
    atticus: "Built-in, LSO By-Law 9 compliant; mixed trust, monthly reconciliation, trust ledger reporting",
    closepin: "No trust accounting — Ontario real estate lawyers need separate software for LSO-compliant trust accounting",
  },
  {
    feature: "HST billing",
    atticus: "Native HST with CRA-compliant invoices built in",
    closepin: "No billing or invoicing",
  },
  {
    feature: "Time tracking",
    atticus: "Integrated time and billing; AI-assisted time capture",
    closepin: "No time tracking",
  },
  {
    feature: "AI legal work",
    atticus: "Canadian legal AI: document analysis, entity extraction, limitation period flagging, practice assistant, semantic search across your files",
    closepin: "Transaction closing task checklists and workflow management; US-focused closing management",
  },
  {
    feature: "Matter management",
    atticus: "Full matter lifecycle from intake to close for all practice areas",
    closepin: "Real estate transaction workflow management; checklist-based closing coordination",
  },
  {
    feature: "Document management",
    atticus: "AI document analysis, summarization, and entity extraction; semantic search across all files",
    closepin: "Transaction document organization and status tracking",
  },
  {
    feature: "Canadian legal context",
    atticus: "Built for Ontario law: title insurance, LTA registration, LSO By-Law 9 trust accounting, Teraview integration workflows",
    closepin: "US-focused real estate closing management; Ontario closing mechanics require custom configuration",
  },
  {
    feature: "Limitation period alerts",
    atticus: "Ontario Limitations Act 2002 built in; AI extracts dates from documents",
    closepin: "Transaction deadline tracking; no Ontario limitation period tracking",
  },
  {
    feature: "Conflict checking",
    atticus: "Automated AI-assisted conflict search",
    closepin: "No conflict checking",
  },
  {
    feature: "LSO compliance",
    atticus: "Built for Ontario LSO requirements; Canadian data residency; LSO AI guidance considered",
    closepin: "US-based platform; Ontario LSO compliance (especially trust accounting) requires separate practice management",
  },
  {
    feature: "Pricing (CAD)",
    atticus: "$149/lawyer/month (all-in, including AI and trust accounting)",
    closepin: "Per-user subscription for closing management; separate trust accounting and practice management cost additional",
  },
  {
    feature: "Data residency",
    atticus: "Canadian servers by default",
    closepin: "US-based infrastructure",
  },
  {
    feature: "Scope",
    atticus: "Full practice — intake, matters, billing, trust accounting, AI for all documents",
    closepin: "Real estate transaction closing workflow — checklist management, task tracking, and closing coordination",
  },
];

const reasons = [
  {
    title: "LSO Trust Accounting Built In for Real Estate Lawyers",
    description:
      "Closepin manages closing checklists and task workflows but has no trust accounting. Ontario real estate lawyers handle significant trust funds — deposits, sale proceeds, and mortgage advances — all subject to LSO By-Law 9. Atticus includes mixed trust accounts, monthly reconciliation, and trust ledger reporting built in.",
  },
  {
    title: "Canadian Real Estate Closing Workflows",
    description:
      "Closepin is a US-focused closing management platform. Ontario real estate closings involve Teraview electronic registration, title insurance, LTA search requirements, adjustments for realty taxes and utilities, and MPAC assessments. Atticus is built for the Ontario real estate practice environment.",
  },
  {
    title: "Full Practice Management Beyond Closing Day",
    description:
      "Closepin manages the closing checklist. After closing, Ontario real estate lawyers need matter management, billing, trust accounting, and client management. Atticus manages the entire real estate matter lifecycle — from client intake through trust accounting and final reporting.",
  },
  {
    title: "Canadian Legal AI for All Your Documents",
    description:
      "Atticus AI reads all the documents in your real estate practice — purchase agreements, title searches, survey certificates, mortgage documents — extracting limitation period triggers, key dates, and parties. Closepin manages closing checklists without AI document intelligence.",
  },
  {
    title: "Canadian Data Residency by Default",
    description:
      "Closepin is a US-based platform. Atticus stores all Ontario client files and trust records on Canadian servers by default — aligned with Law Society of Ontario guidance on cloud storage of client confidential information.",
  },
  {
    title: "One All-In Platform at $149 CAD",
    description:
      "Closepin charges for closing management and Ontario lawyers still need separate trust accounting and practice management. Atticus is $149 CAD per lawyer per month for the complete Ontario real estate practice platform including trust accounting and AI.",
  },
];

export default function ClosepinAlternativePage() {
  return (
    <>
      <Script id="closepin-alternative-schema" type="application/ld+json">
        {schemaJson}
      </Script>

      <div className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-amber-400 text-slate-900 text-sm font-semibold px-4 py-1 rounded-full mb-6">
              Closepin Alternative
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              The Closepin Alternative for Ontario Real Estate Lawyers
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Closepin manages real estate transaction closing checklists and workflows.
              Atticus manages your entire Ontario real estate practice — matters, billing,
              LSO-compliant trust accounting, and Canadian AI for your client files.
              $149 CAD per lawyer per month.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/sign-up"
                className="bg-amber-400 text-slate-900 font-semibold px-8 py-4 rounded-lg hover:bg-amber-300 transition-colors"
              >
                Start Free Trial
              </Link>
              <Link
                href="/pricing"
                className="border border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-slate-900 transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-900 mb-4">
              Why Ontario Real Estate Lawyers Choose Atticus Over Closepin
            </h2>
            <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
              Closepin handles US-focused closing workflow management. Atticus manages your
              Ontario real estate practice — from intake and conflict checking through matter
              management, LSO-compliant trust accounting, and Canadian legal AI.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reasons.map((reason, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                  <div className="w-10 h-10 bg-amber-400 rounded-lg flex items-center justify-center text-slate-900 font-bold mb-4">
                    {i + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{reason.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-900 mb-4">
              Atticus vs Closepin: Feature Comparison
            </h2>
            <p className="text-center text-slate-600 mb-12">
              See how Atticus compares to Closepin for Ontario real estate lawyers —
              complete Ontario practice management with Canadian AI and trust accounting
              vs US real estate closing workflow management.
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
              <table className="w-full bg-white">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left px-6 py-4 font-semibold">Feature</th>
                    <th className="text-center px-6 py-4 font-semibold text-amber-400">Atticus</th>
                    <th className="text-center px-6 py-4 font-semibold">Closepin</th>
                  </tr>
                </thead>
                <tbody>
                  {featureComparison.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-6 py-4 text-slate-700 font-medium">{row.feature}</td>
                      <td className="px-6 py-4 text-center text-slate-700">
                        <span className="inline-flex items-center gap-1">
                          <span className="text-green-600 font-bold">✓</span>
                          <span className="text-sm">{row.atticus}</span>
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center text-slate-500 text-sm">{row.closepin}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-amber-50 border-t border-amber-100">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Complete Ontario Real Estate Practice Management Built for Canadian Law
            </h2>
            <p className="text-slate-600 mb-8">
              Atticus delivers LSO-compliant trust accounting, HST billing, AI document analysis,
              limitation period tracking, and conflict checking — everything Ontario real estate
              lawyers need. $149 CAD per lawyer per month.
            </p>
            <Link
              href="/sign-up"
              className="inline-block bg-slate-900 text-white font-semibold px-10 py-4 rounded-lg hover:bg-slate-700 transition-colors"
            >
              Start Your Free Trial
            </Link>
          </div>
        </section>

        <section className="py-12 px-6 border-t border-slate-100">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-lg font-semibold text-slate-900 mb-6">Compare More Alternatives</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { href: "/clio-alternative", label: "Clio Alternative" },
                { href: "/dyedurham-alternative", label: "Dye & Durham Alternative" },
                { href: "/simplyagree-alternative", label: "SimplyAgree Alternative" },
                { href: "/encompass-alternative", label: "Encompass Alternative" },
                { href: "/ontario-real-estate-lawyer", label: "Ontario Real Estate Lawyer Software" },
                { href: "/trust-accounting-ontario", label: "Ontario Trust Accounting" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-amber-700 hover:text-amber-900 font-medium underline underline-offset-2"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
