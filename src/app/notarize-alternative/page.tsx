import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Notarize Alternative for Ontario Lawyers | Atticus vs Notarize Remote Notarization",
  description:
    "Looking for a Notarize alternative for Ontario lawyers? Compare Atticus vs Notarize. Atticus provides full practice management, Canadian legal AI, LSO-compliant trust accounting, and HST billing — built for Ontario law firms, not just remote online notarization.",
  openGraph: {
    title: "Notarize Alternative for Ontario Lawyers | Atticus vs Notarize",
    description:
      "Why Ontario law firms choose Atticus over Notarize. Atticus is complete Ontario practice management — trust accounting, billing, matter management, and Canadian AI — not just remote online notarization software.",
    url: "https://getatticus.ca/notarize-alternative",
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
  "description": "Atticus is built for Ontario lawyers — full practice management, LSO-compliant trust accounting, HST billing, Canadian legal AI, matter management, and conflict checking. Notarize is a US-based remote online notarization platform, not comprehensive Ontario law firm practice management software.",
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
  notarize: string;
};

const featureComparison: Feature[] = [
  {
    feature: "Practice management",
    atticus: "Full integrated practice management for all Ontario practice areas",
    notarize: "Remote online notarization (RON) platform; no law firm practice management",
  },
  {
    feature: "Ontario trust accounting",
    atticus: "Built-in, LSO By-Law 9 compliant; mixed trust, monthly reconciliation",
    notarize: "No trust accounting",
  },
  {
    feature: "HST billing",
    atticus: "Native HST with CRA-compliant invoices built in",
    notarize: "No professional billing for law firms",
  },
  {
    feature: "Time tracking",
    atticus: "Integrated time and billing; AI-assisted time capture",
    notarize: "No time tracking",
  },
  {
    feature: "AI legal work",
    atticus: "Canadian legal AI: document analysis, entity extraction, limitation period flagging, practice assistant, semantic search across your files",
    notarize: "Identity verification and video notarization workflow; no AI document analysis",
  },
  {
    feature: "Matter management",
    atticus: "Full matter lifecycle from intake to close for all practice areas",
    notarize: "No matter management — single-service notarization transactions",
  },
  {
    feature: "Document management",
    atticus: "AI document analysis, summarization, and entity extraction; semantic search across all files",
    notarize: "Notarized document storage and audit trail; no AI analysis or full document repository",
  },
  {
    feature: "Canadian / Ontario context",
    atticus: "Built for Ontario law: Limitations Act 2002, LSO By-Law 9 trust accounting, Ontario court procedures",
    notarize: "US-based platform; remote online notarization rules vary by Canadian province and Ontario has specific requirements",
  },
  {
    feature: "Limitation period alerts",
    atticus: "Ontario Limitations Act 2002 built in; AI extracts dates from documents",
    notarize: "No limitation period tracking",
  },
  {
    feature: "Conflict checking",
    atticus: "Automated AI-assisted conflict search",
    notarize: "No conflict checking",
  },
  {
    feature: "LSO compliance",
    atticus: "Built for Ontario LSO requirements; Canadian data residency; LSO AI guidance considered",
    notarize: "US-based platform; Ontario remote notarization rules and LSO guidance apply separately",
  },
  {
    feature: "Pricing (CAD)",
    atticus: "$149/lawyer/month (all-in, including AI)",
    notarize: "Per-notarization or subscription pricing; separate practice management cost additional",
  },
  {
    feature: "Data residency",
    atticus: "Canadian servers by default",
    notarize: "US-based infrastructure",
  },
  {
    feature: "Scope",
    atticus: "Full practice — intake, matters, billing, trust accounting, AI for all documents",
    notarize: "Remote online notarization — digital identity verification, live audio-video notarization sessions, tamper-evident notarized documents",
  },
];

const reasons = [
  {
    title: "Full Practice Management vs Single-Service Notarization",
    description:
      "Notarize handles remote online notarization transactions. Ontario law firms need a complete platform: billing, trust accounting, matter management, client intake, and conflict checking. Atticus manages your entire Ontario practice beyond just notarizing documents.",
  },
  {
    title: "LSO-Compliant Trust Accounting Built In",
    description:
      "Notarize has no trust accounting module. Ontario lawyers still need separate software for LSO By-Law 9 trust accounting. Atticus includes mixed trust accounts, monthly reconciliation, and trust ledger reporting as part of the practice management platform.",
  },
  {
    title: "Canadian Legal AI Built for Ontario",
    description:
      "Notarize is a US-based notarization platform. Atticus is built specifically for Ontario legal practice — Ontario Limitations Act, LSO By-Law 9 trust accounting rules, Canadian case law references, and LSO guidance on remote services and client identity verification.",
  },
  {
    title: "AI Across Your Entire Practice",
    description:
      "Notarize AI focuses on identity verification for the notarization workflow. Atticus AI reads all documents across your practice — agreements, correspondence, corporate records, wills — extracting limitation period triggers, key dates, and parties across every practice area.",
  },
  {
    title: "Canadian Data Residency by Default",
    description:
      "Notarize is a US-based platform. Atticus stores all Ontario client files and trust records on Canadian servers by default — aligned with LSO guidance on cloud storage of client confidential information.",
  },
  {
    title: "One All-In Platform at $149 CAD",
    description:
      "Notarize is a specialized service tool, and Ontario lawyers still need separate practice management, billing, and trust accounting software. Atticus is $149 CAD per lawyer per month for the complete Ontario practice platform including AI.",
  },
];

export default function NotarizeAlternativePage() {
  return (
    <>
      <Script id="notarize-alternative-schema" type="application/ld+json">
        {schemaJson}
      </Script>

      <div className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-amber-400 text-slate-900 text-sm font-semibold px-4 py-1 rounded-full mb-6">
              Notarize Alternative
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              The Notarize Alternative for Ontario Lawyers
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Notarize provides remote online notarization for document signing and identity verification.
              Atticus manages your entire Ontario practice — matters, billing, trust accounting,
              and Canadian AI for all your client files. $149 CAD per lawyer per month.
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
              Why Ontario Lawyers Choose Atticus Over Notarize
            </h2>
            <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
              Notarize handles remote online notarization. Atticus manages your practice — from
              intake and conflict checking through matter management, trust accounting,
              and Canadian AI for your files.
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
              Atticus vs Notarize: Feature Comparison
            </h2>
            <p className="text-center text-slate-600 mb-12">
              See how Atticus compares to Notarize for Ontario solo and small law firms —
              complete Ontario practice management with Canadian AI vs US-based remote
              online notarization services.
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
              <table className="w-full bg-white">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left px-6 py-4 font-semibold">Feature</th>
                    <th className="text-center px-6 py-4 font-semibold text-amber-400">Atticus</th>
                    <th className="text-center px-6 py-4 font-semibold">Notarize</th>
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
                      <td className="px-6 py-4 text-center text-slate-500 text-sm">{row.notarize}</td>
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
                { href: "/docusign-clm-alternative", label: "DocuSign CLM Alternative" },
                { href: "/simplyagree-alternative", label: "SimplyAgree Alternative" },
                { href: "/dyedurham-alternative", label: "Dye & Durham Alternative" },
                { href: "/legalzoom-alternative", label: "LegalZoom Alternative" },
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
