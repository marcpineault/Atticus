import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Onit Alternative for Ontario Lawyers | Atticus vs Onit Legal Operations",
  description:
    "Looking for an Onit alternative? Compare Atticus vs Onit for Ontario law firms. Atticus combines full practice management, Canadian legal AI for document analysis, LSO-compliant trust accounting, and HST billing — built for Ontario solo and small law firms.",
  openGraph: {
    title: "Onit Alternative for Ontario Lawyers | Atticus vs Onit Legal Operations",
    description:
      "Why Ontario lawyers choose Atticus over Onit. Atticus delivers complete practice management, LSO-compliant trust accounting, and Canadian legal AI — without enterprise pricing.",
    url: "https://getatticus.ca/onit-alternative",
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
  "description": "Atticus is the Onit alternative for Ontario solo and small law firms that combines Canadian legal AI with LSO-compliant trust accounting, HST billing, and full practice management — without the enterprise contract management complexity.",
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
  onit: string;
};

const featureComparison: Feature[] = [
  {
    feature: "Practice management",
    atticus: "Full integrated practice management for Ontario solo and small law firms",
    onit: "Enterprise legal operations and contract lifecycle management platform; designed for in-house legal departments and large law firms",
  },
  {
    feature: "Ontario trust accounting",
    atticus: "Built-in, LSO By-Law 9 compliant; mixed trust, monthly reconciliation",
    onit: "No trust accounting for private client practices",
  },
  {
    feature: "HST billing",
    atticus: "Native HST with CRA-compliant invoices built in",
    onit: "Enterprise matter billing for in-house; not designed for HST invoicing for private client work",
  },
  {
    feature: "Time tracking",
    atticus: "Integrated time and billing; AI-assisted time capture",
    onit: "E-billing and matter management for corporate legal departments; not designed for private client time capture",
  },
  {
    feature: "AI legal work",
    atticus: "Canadian legal AI: document analysis, entity extraction, limitation period flagging, practice assistant, semantic search across your files",
    onit: "Contract lifecycle management with AI for enterprise contracts; workflow automation for legal operations",
  },
  {
    feature: "Matter management",
    atticus: "Full matter lifecycle for private client work from intake to close",
    onit: "Matter management for corporate in-house departments and enterprise law firm matters",
  },
  {
    feature: "Document management",
    atticus: "AI document analysis, summarization, and entity extraction; semantic search across all files",
    onit: "Contract repository and enterprise document management; strong for corporate transactional documents",
  },
  {
    feature: "Canadian legal context",
    atticus: "Built for Ontario law: Limitations Act 2002, LSO By-Law 9 trust accounting, Ontario court procedures",
    onit: "US-based enterprise platform; limited out-of-box Ontario legal context",
  },
  {
    feature: "Limitation period alerts",
    atticus: "Ontario Limitations Act 2002 built in; AI extracts dates from documents",
    onit: "Contract deadline and milestone tracking; not designed for Ontario court limitation periods",
  },
  {
    feature: "Target market",
    atticus: "Ontario solo and small law firms — designed for 1-10 lawyer practices",
    onit: "Enterprise in-house legal departments and large law firms — designed for 50+ person teams",
  },
  {
    feature: "LSO compliance",
    atticus: "Built for Ontario LSO requirements; Canadian data residency; LSO AI guidance considered",
    onit: "US-based enterprise platform; Ontario LSO compliance requires additional configuration",
  },
  {
    feature: "Pricing (CAD)",
    atticus: "$149/lawyer/month (all-in, including AI)",
    onit: "Custom enterprise pricing; substantially higher cost for smaller practices",
  },
  {
    feature: "Data residency",
    atticus: "Canadian servers by default",
    onit: "US-based infrastructure",
  },
  {
    feature: "Implementation",
    atticus: "Self-serve onboarding; usable same day",
    onit: "Enterprise implementation project; typically months to deploy",
  },
];

const reasons = [
  {
    title: "Built for Solo and Small Ontario Firms — Not Enterprise In-House",
    description:
      "Onit is an enterprise legal operations platform designed for large in-house legal departments and major law firms. Atticus is purpose-built for Ontario solo and small law firms — 1 to 10 lawyers — with a simple onboarding process and an all-in price of $149 CAD per lawyer per month.",
  },
  {
    title: "LSO-Compliant Trust Accounting Built In",
    description:
      "Onit is built for enterprise contract management, not private client trust accounting. Ontario lawyers need LSO By-Law 9 compliant trust accounting as a core requirement. Atticus includes mixed trust accounts, monthly reconciliation, and trust ledger reporting built into the base product.",
  },
  {
    title: "Canadian Legal AI Built for Ontario",
    description:
      "Onit is a US-based enterprise platform. Atticus is built specifically for Canadian and Ontario legal context — Ontario Limitations Act, LSO By-Law 9 trust accounting rules, Canadian case law references, and LSO AI guidance on using AI in practice.",
  },
  {
    title: "HST Billing Built In",
    description:
      "Onit&apos;s billing module is designed for enterprise e-billing between law firms and corporate clients, not for generating CRA-compliant HST invoices for private client work. Atticus includes native HST billing with the proper invoice formats Ontario sole practitioners and small firms need.",
  },
  {
    title: "Canadian Data Residency by Default",
    description:
      "Onit is a US-based platform. Atticus stores all Ontario client files and trust records on Canadian servers by default — aligned with Law Society of Ontario guidance on cloud storage of client confidential information.",
  },
  {
    title: "Simple Pricing Without Enterprise Implementation",
    description:
      "Onit requires a custom enterprise contract and a lengthy implementation project. Atticus is $149 CAD per lawyer per month with same-day self-serve onboarding — no sales process, no implementation consultant, no multi-year enterprise commitment.",
  },
];

export default function OnitAlternativePage() {
  return (
    <>
      <Script id="onit-alternative-schema" type="application/ld+json">
        {schemaJson}
      </Script>

      <div className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-amber-400 text-slate-900 text-sm font-semibold px-4 py-1 rounded-full mb-6">
              Onit Alternative
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              The Onit Alternative for Ontario Lawyers
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Onit is an enterprise legal operations platform for large in-house departments.
              Atticus is built for Ontario solo and small law firms — matters, billing,
              trust accounting, and Canadian AI for your client files — at $149 CAD per lawyer per month.
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
              Why Ontario Lawyers Choose Atticus Instead of Onit
            </h2>
            <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
              Onit is enterprise legal operations software. Atticus is the Ontario practice management platform built for solo and small law firms.
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
              Atticus vs Onit: Feature Comparison
            </h2>
            <p className="text-center text-slate-600 mb-12">
              See how Atticus compares to Onit for Ontario solo and small
              law firms — complete Ontario practice management with Canadian AI
              vs enterprise legal operations platform.
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
              <table className="w-full bg-white">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left px-6 py-4 font-semibold">Feature</th>
                    <th className="text-center px-6 py-4 font-semibold text-amber-400">Atticus</th>
                    <th className="text-center px-6 py-4 font-semibold">Onit</th>
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
                      <td className="px-6 py-4 text-center text-slate-500 text-sm">{row.onit}</td>
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
              Complete Ontario Practice Management at $149 CAD
            </h2>
            <p className="text-slate-600 mb-8">
              No enterprise implementation. No custom pricing. Atticus is $149 CAD per lawyer per month — LSO-compliant trust accounting, HST billing, AI document analysis, limitation period tracking, and conflict checking, built for Ontario solo and small law firms.
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
                { href: "/ironclad-alternative", label: "Ironclad Alternative" },
                { href: "/docusign-clm-alternative", label: "DocuSign CLM Alternative" },
                { href: "/pclaw-alternative", label: "PCLaw Alternative" },
                { href: "/ai-for-lawyers", label: "AI for Ontario Lawyers" },
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
