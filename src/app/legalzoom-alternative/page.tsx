import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "LegalZoom Alternative for Ontario Lawyers | Atticus vs LegalZoom",
  description:
    "Looking for a LegalZoom alternative for Ontario lawyers? Compare Atticus vs LegalZoom. Atticus provides full practice management, Canadian legal AI, LSO-compliant trust accounting, and HST billing — built specifically for Ontario law firms, not online document self-service.",
  openGraph: {
    title: "LegalZoom Alternative for Ontario Lawyers | Atticus vs LegalZoom",
    description:
      "Why Ontario law firms choose Atticus over LegalZoom. Atticus is professional practice management software for lawyers — not an online self-service legal document platform for consumers.",
    url: "https://getatticus.ca/legalzoom-alternative",
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
  "description": "Atticus is built for Ontario lawyers and law firms — full practice management, LSO-compliant trust accounting, HST billing, Canadian legal AI, matter management, and conflict checking. LegalZoom is a consumer-facing online legal document platform, not professional law firm software.",
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
  legalzoom: string;
};

const featureComparison: Feature[] = [
  {
    feature: "Practice management",
    atticus: "Full integrated practice management for all Ontario practice areas",
    legalzoom: "Consumer online document platform and registered agent services; no law firm practice management",
  },
  {
    feature: "Ontario trust accounting",
    atticus: "Built-in, LSO By-Law 9 compliant; mixed trust, monthly reconciliation",
    legalzoom: "No trust accounting — consumer-facing platform, not professional accounting software",
  },
  {
    feature: "HST billing",
    atticus: "Native HST with CRA-compliant invoices built in",
    legalzoom: "No professional billing or invoicing for law firms",
  },
  {
    feature: "Time tracking",
    atticus: "Integrated time and billing; AI-assisted time capture",
    legalzoom: "No time tracking",
  },
  {
    feature: "AI legal work",
    atticus: "Canadian legal AI: document analysis, entity extraction, limitation period flagging, practice assistant, semantic search across your files",
    legalzoom: "Template-based document generation for consumers; limited AI features targeted at self-represented litigants, not law firms",
  },
  {
    feature: "Matter management",
    atticus: "Full matter lifecycle from intake to close for all practice areas",
    legalzoom: "No matter management — single-transaction consumer document service",
  },
  {
    feature: "Document management",
    atticus: "AI document analysis, summarization, and entity extraction; semantic search across all files",
    legalzoom: "Template document filling for standard consumer legal forms; no document repository for law firms",
  },
  {
    feature: "Canadian legal context",
    atticus: "Built for Ontario law: Limitations Act 2002, LSO By-Law 9 trust accounting, Ontario court procedures",
    legalzoom: "US-headquartered consumer platform with limited Canadian presence; not built for Ontario professional practice",
  },
  {
    feature: "Limitation period alerts",
    atticus: "Ontario Limitations Act 2002 built in; AI extracts dates from documents",
    legalzoom: "No limitation period tracking",
  },
  {
    feature: "Conflict checking",
    atticus: "Automated AI-assisted conflict search",
    legalzoom: "No conflict checking",
  },
  {
    feature: "LSO compliance",
    atticus: "Built for Ontario LSO requirements; Canadian data residency; LSO AI guidance considered",
    legalzoom: "US consumer legal platform; Ontario LSO compliance and professional rules not addressed",
  },
  {
    feature: "Pricing (CAD)",
    atticus: "$149/lawyer/month (all-in, including AI)",
    legalzoom: "Per-document consumer pricing; not professional law firm software",
  },
  {
    feature: "Target user",
    atticus: "Ontario lawyers and law firms — solo, small, and mid-size practices",
    legalzoom: "Self-represented consumers and small businesses purchasing legal documents directly",
  },
  {
    feature: "Scope",
    atticus: "Full practice — intake, matters, billing, trust accounting, AI for all documents",
    legalzoom: "Consumer legal document templates, business formation, registered agent, online will creation",
  },
];

const reasons = [
  {
    title: "Built for Lawyers, Not Consumers",
    description:
      "LegalZoom is a consumer-facing platform that sells legal documents directly to the public. Atticus is professional law firm software built for Ontario lawyers — trust accounting, matter management, client intake, billing, and AI for your practice.",
  },
  {
    title: "LSO-Compliant Trust Accounting Built In",
    description:
      "LegalZoom has no trust accounting module for law firms. Ontario lawyers need LSO By-Law 9 compliant trust accounting with mixed trust accounts, monthly reconciliation, and trust ledger reporting. Atticus includes all of this out of the box.",
  },
  {
    title: "Canadian Legal AI Built for Ontario",
    description:
      "LegalZoom is a US-headquartered consumer platform. Atticus is built specifically for Ontario legal practice — Ontario Limitations Act, LSO By-Law 9 trust accounting rules, Canadian case law context, and LSO AI guidance for using AI in professional practice.",
  },
  {
    title: "HST Billing and Professional Invoicing",
    description:
      "LegalZoom has no professional billing for law firms. Atticus includes native HST billing, CRA-compliant invoices, and time tracking integrated with billing — everything Ontario lawyers need to invoice clients professionally.",
  },
  {
    title: "Full Matter Lifecycle Management",
    description:
      "LegalZoom handles single transactions for consumers. Atticus manages full matter lifecycles — from conflict check and client intake through active matter management, document analysis, billing, and file close — for every Ontario practice area.",
  },
  {
    title: "One All-In Platform at $149 CAD",
    description:
      "LegalZoom is not law firm software. Atticus is $149 CAD per lawyer per month for complete Ontario practice management including AI — the only platform built end-to-end for LSO-compliant Ontario law practice.",
  },
];

export default function LegalZoomAlternativePage() {
  return (
    <>
      <Script id="legalzoom-alternative-schema" type="application/ld+json">
        {schemaJson}
      </Script>

      <div className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-amber-400 text-slate-900 text-sm font-semibold px-4 py-1 rounded-full mb-6">
              LegalZoom Alternative
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              The LegalZoom Alternative for Ontario Lawyers
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              LegalZoom is a consumer platform for online legal documents and business formation.
              Atticus is professional practice management software built for Ontario lawyers —
              trust accounting, matter management, billing, and Canadian AI.
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
              Why Ontario Law Firms Choose Atticus Over LegalZoom
            </h2>
            <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
              LegalZoom serves consumers buying legal documents. Atticus serves Ontario lawyers
              managing practices — from conflict checking and client intake through matter management,
              trust accounting, Canadian AI, and professional billing.
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
              Atticus vs LegalZoom: Feature Comparison
            </h2>
            <p className="text-center text-slate-600 mb-12">
              See how Atticus compares to LegalZoom for Ontario law firms —
              professional practice management software built for lawyers
              vs a consumer online legal document platform.
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
              <table className="w-full bg-white">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left px-6 py-4 font-semibold">Feature</th>
                    <th className="text-center px-6 py-4 font-semibold text-amber-400">Atticus</th>
                    <th className="text-center px-6 py-4 font-semibold">LegalZoom</th>
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
                      <td className="px-6 py-4 text-center text-slate-500 text-sm">{row.legalzoom}</td>
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
              Professional Practice Management Built for Ontario Lawyers
            </h2>
            <p className="text-slate-600 mb-8">
              Atticus is built end-to-end for Ontario legal practice — LSO-compliant trust accounting,
              HST billing, Canadian AI, matter management, and conflict checking.
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
                { href: "/pclaw-alternative", label: "PCLaw Alternative" },
                { href: "/cosmolex-alternative", label: "CosmoLex Alternative" },
                { href: "/leap-alternative", label: "LEAP Alternative" },
                { href: "/ontario-paralegal-software", label: "Ontario Paralegal Software" },
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
