import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Icertis Alternative for Ontario Lawyers | Atticus vs Icertis CLM",
  description:
    "Looking for an Icertis alternative? Compare Atticus vs Icertis for Ontario law firms. Atticus combines full practice management, Canadian legal AI for document analysis, LSO-compliant trust accounting, and HST billing — built for Ontario solo and small law firms.",
  openGraph: {
    title: "Icertis Alternative for Ontario Lawyers | Atticus vs Icertis",
    description:
      "Why Ontario lawyers choose Atticus over Icertis. Atticus delivers complete practice management, LSO-compliant trust accounting, and Canadian legal AI — not just enterprise CLM with AI-powered contract intelligence and ERP integration.",
    url: "https://getatticus.ca/icertis-alternative",
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
  "description": "Atticus is the Icertis alternative for Ontario lawyers that combines Canadian legal AI with LSO-compliant trust accounting, HST billing, full practice management, and AI document analysis — not just enterprise CLM with AI contract intelligence, risk management, and SAP/Microsoft ERP integration.",
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
  icertis: string;
};

const featureComparison: Feature[] = [
  {
    feature: "Practice management",
    atticus: "Full integrated practice management for all Ontario practice areas",
    icertis: "Enterprise CLM with AI contract intelligence, risk management, and SAP/Microsoft ERP integration for global organizations; no general legal practice management",
  },
  {
    feature: "Ontario trust accounting",
    atticus: "Built-in, LSO By-Law 9 compliant; mixed trust, monthly reconciliation",
    icertis: "No trust accounting",
  },
  {
    feature: "HST billing",
    atticus: "Native HST with CRA-compliant invoices built in",
    icertis: "No billing or invoicing",
  },
  {
    feature: "Time tracking",
    atticus: "Integrated time and billing; AI-assisted time capture",
    icertis: "No time tracking",
  },
  {
    feature: "AI legal work",
    atticus: "Canadian legal AI: document analysis, entity extraction, limitation period flagging, practice assistant, semantic search across your files",
    icertis: "AI-powered contract intelligence, clause extraction, risk scoring, regulatory compliance tracking, and contract analytics for enterprise procurement and legal teams",
  },
  {
    feature: "Matter management",
    atticus: "Full matter lifecycle from intake to close for all practice areas",
    icertis: "Contract-centric workflow management; no matter management beyond enterprise contracts",
  },
  {
    feature: "Document management",
    atticus: "AI document analysis, summarization, and entity extraction; semantic search across all files",
    icertis: "Enterprise contract repository with AI-powered clause extraction, obligation tracking, and risk management across global contract portfolios",
  },
  {
    feature: "Canadian legal context",
    atticus: "Built for Ontario law: Limitations Act 2002, LSO By-Law 9 trust accounting, Ontario court procedures",
    icertis: "India-founded enterprise CLM platform for global Fortune 500 companies; not tailored to Canadian or Ontario legal requirements",
  },
  {
    feature: "Limitation period alerts",
    atticus: "Ontario Limitations Act 2002 built in; AI extracts dates from documents",
    icertis: "Contract obligation and renewal deadline tracking; no Ontario limitation period tracking",
  },
  {
    feature: "Conflict checking",
    atticus: "Automated AI-assisted conflict search",
    icertis: "No conflict checking",
  },
  {
    feature: "LSO compliance",
    atticus: "Built for Ontario LSO requirements; Canadian data residency; LSO AI guidance considered",
    icertis: "Global enterprise platform; Ontario LSO compliance requires separate practice management",
  },
  {
    feature: "Pricing (CAD)",
    atticus: "$149/lawyer/month (all-in, including AI)",
    icertis: "Enterprise licensing for large organizations; separate practice management cost additional",
  },
  {
    feature: "Data residency",
    atticus: "Canadian servers by default",
    icertis: "Global cloud infrastructure with regional deployment options",
  },
  {
    feature: "Scope",
    atticus: "Full practice — intake, matters, billing, trust accounting, AI for all documents",
    icertis: "Enterprise CLM — AI contract intelligence, risk management, ERP integration, regulatory compliance, and contract analytics for Fortune 500 companies",
  },
];

const reasons = [
  {
    title: "Full Practice Management Beyond Enterprise CLM",
    description:
      "Icertis provides enterprise CLM with AI contract intelligence and SAP/Microsoft ERP integration for Fortune 500 companies. Ontario law firms need more: billing, trust accounting, matter management, client intake, and conflict checking. Atticus manages your entire Ontario practice.",
  },
  {
    title: "Canadian Legal AI Built for Ontario",
    description:
      "Icertis is an India-founded enterprise CLM platform for global organizations. Atticus is built specifically for Canadian and Ontario legal context — Ontario Limitations Act, LSO By-Law 9 trust accounting rules, Canadian case law references, and LSO AI guidance on using AI in practice.",
  },
  {
    title: "LSO-Compliant Trust Accounting Built In",
    description:
      "Icertis has no trust accounting module. Ontario lawyers still need separate software for LSO By-Law 9 trust accounting. Atticus includes mixed trust accounts, monthly reconciliation, and trust ledger reporting.",
  },
  {
    title: "AI Across Your Entire Practice",
    description:
      "Icertis AI extracts clauses and tracks regulatory compliance across enterprise contract portfolios. Atticus AI reads all documents across your practice — corporate records, agreements, correspondence, wills — extracting limitation period triggers, key dates, and parties regardless of practice area.",
  },
  {
    title: "Canadian Data Residency by Default",
    description:
      "Icertis is a global enterprise platform. Atticus stores all Ontario client files and trust records on Canadian servers by default — aligned with Law Society of Ontario guidance on cloud storage of client confidential information.",
  },
  {
    title: "One All-In Platform at $149 CAD",
    description:
      "Icertis uses enterprise licensing for large organizations, and Ontario lawyers still need separate practice management, billing, and trust accounting. Atticus is $149 CAD per lawyer per month for the complete Ontario practice platform.",
  },
];

export default function IcertisAlternativePage() {
  return (
    <>
      <Script id="icertis-alternative-schema" type="application/ld+json">
        {schemaJson}
      </Script>

      <div className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-amber-400 text-slate-900 text-sm font-semibold px-4 py-1 rounded-full mb-6">
              Icertis Alternative
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              The Icertis Alternative for Ontario Lawyers
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Icertis provides enterprise CLM with AI contract intelligence, risk management,
              and SAP/Microsoft ERP integration for Fortune 500 companies. Atticus manages
              your entire Ontario practice — matters, billing, trust accounting, and Canadian
              AI for all your client files. $149 CAD per lawyer per month.
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
              Why Ontario Lawyers Choose Atticus Over Icertis
            </h2>
            <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
              Icertis handles enterprise AI contract intelligence and ERP integration for global organizations.
              Atticus manages your practice — from intake and conflict checking through matter management,
              trust accounting, and Canadian AI for your files.
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
              Atticus vs Icertis: Feature Comparison
            </h2>
            <p className="text-center text-slate-600 mb-12">
              See how Atticus compares to Icertis for Ontario solo and small
              law firms — complete Ontario practice management with Canadian AI
              vs India-founded enterprise CLM with AI contract intelligence, risk management, and ERP integration.
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
              <table className="w-full bg-white">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left px-6 py-4 font-semibold">Feature</th>
                    <th className="text-center px-6 py-4 font-semibold text-amber-400">Atticus</th>
                    <th className="text-center px-6 py-4 font-semibold">Icertis</th>
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
                      <td className="px-6 py-4 text-center text-slate-500 text-sm">{row.icertis}</td>
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
              Complete Ontario Practice Management Built for Canadian Law
            </h2>
            <p className="text-slate-600 mb-8">
              Add Atticus for practice management — LSO-compliant trust accounting, HST billing,
              AI document analysis, limitation period tracking, and conflict checking.
              $149 CAD per lawyer per month.
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
                { href: "/sirion-alternative", label: "Sirion Alternative" },
                { href: "/evisort-alternative", label: "Evisort Alternative" },
                { href: "/agiloft-alternative", label: "Agiloft Alternative" },
                { href: "/kira-alternative", label: "Kira Alternative" },
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
