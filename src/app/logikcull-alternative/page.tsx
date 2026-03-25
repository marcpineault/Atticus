import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Logikcull Alternative for Ontario Lawyers | Atticus vs Logikcull eDiscovery",
  description:
    "Looking for a Logikcull alternative? Compare Atticus vs Logikcull for Ontario law firms. Atticus combines Canadian legal AI with full practice management, trust accounting, HST billing, and LSO compliance — built for Ontario solo and small litigation firms, not self-serve cloud eDiscovery.",
  openGraph: {
    title: "Logikcull Alternative for Ontario Lawyers | Atticus vs Logikcull eDiscovery",
    description:
      "Why Ontario lawyers choose Atticus over Logikcull. Atticus delivers complete practice management and Canadian legal AI in one LSO-compliant platform.",
    url: "https://getatticus.ca/logikcull-alternative",
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
  "description": "Atticus is the Logikcull alternative for Ontario lawyers that combines Canadian legal AI with full practice management, trust accounting, HST billing, and LSO compliance in one platform built for Ontario solo and small law firms.",
  "url": "https://getatticus.ca",
  "featureList": [
    "AI-powered document analysis and management",
    "Ontario trust accounting (Law Society compliant)",
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
  logikcull: string;
};

const featureComparison: Feature[] = [
  {
    feature: "Practice management",
    atticus: "Full integrated practice management",
    logikcull: "Self-serve eDiscovery platform; no practice management",
  },
  {
    feature: "Ontario trust accounting",
    atticus: "Built-in, LSO compliant",
    logikcull: "No trust accounting functionality",
  },
  {
    feature: "HST billing",
    atticus: "Native HST with CRA-compliant invoices",
    logikcull: "No billing or invoicing module",
  },
  {
    feature: "Time tracking",
    atticus: "Integrated time and billing",
    logikcull: "No time tracking functionality",
  },
  {
    feature: "AI legal work",
    atticus: "Canadian legal AI: document drafting, summarization, limitation period flagging, LSO compliance",
    logikcull: "AI-assisted document processing, auto-tagging, and privilege review for eDiscovery",
  },
  {
    feature: "Matter management",
    atticus: "Full matter lifecycle from intake to close",
    logikcull: "Project-based eDiscovery workspace; not full matter management",
  },
  {
    feature: "Document review / eDiscovery",
    atticus: "AI document analysis and summarization for individual files",
    logikcull: "Self-serve cloud eDiscovery: upload, process, review, produce; auto-redaction and privilege detection",
  },
  {
    feature: "Limitation period alerts",
    atticus: "Ontario Limitations Act built in",
    logikcull: "Not included",
  },
  {
    feature: "Conflict checking",
    atticus: "Automated conflict search",
    logikcull: "Not included",
  },
  {
    feature: "LSO compliance",
    atticus: "Built for Ontario LSO requirements",
    logikcull: "No Ontario-specific LSO compliance features",
  },
  {
    feature: "Target market",
    atticus: "Ontario solo and small law firms",
    logikcull: "US litigation teams, corporate legal departments, and law firms needing self-serve eDiscovery",
  },
  {
    feature: "Pricing (CAD)",
    atticus: "$149/lawyer/month (all-in, including AI)",
    logikcull: "Per-GB pricing in USD; data upload, storage, and processing charges apply",
  },
  {
    feature: "Data residency",
    atticus: "Canadian servers by default",
    logikcull: "US-based infrastructure; no Canadian data residency option by default",
  },
  {
    feature: "Deployment",
    atticus: "Self-serve; ready in hours",
    logikcull: "Self-serve cloud setup; focused on US market and workflows",
  },
];

const reasons = [
  {
    title: "Logikcull is a US eDiscovery Platform — Not a Canadian Practice Management Platform",
    description:
      "Logikcull is designed for US litigation eDiscovery: uploading, processing, and reviewing document collections for US-format productions. It has no practice management, billing, trust accounting, matter lifecycle management, or client intake functionality. Ontario lawyers need a daily practice platform built for Canadian workflows — not a US-market eDiscovery tool.",
  },
  {
    title: "Ontario Trust Accounting Without per-GB Charges",
    description:
      "Logikcull has no trust accounting functionality and charges per gigabyte of data uploaded. Ontario lawyers have mandatory LSO trust accounting obligations. Atticus includes fully LSO-compliant trust ledgers, mixed trust accounts, and reporting at $149 CAD per month — no data upload charges.",
  },
  {
    title: "Ontario Litigation Files Are Not US eDiscovery Projects",
    description:
      "Logikcull is optimized for US-format discovery productions with large document sets, privilege logs, and Bates numbering. Ontario litigation practice — Superior Court, SCAR, HSARB, LAT, Divisional Court — follows different procedures. Atticus AI can analyze and organize Ontario case documents effectively without US-centric eDiscovery infrastructure.",
  },
  {
    title: "No Per-GB Data Charges",
    description:
      "Logikcull bills per gigabyte of data uploaded and processed, in USD. For Ontario solo and small firm litigators, this creates unpredictable costs for each file. Atticus is a flat monthly fee per lawyer in CAD — complete practice management and AI with no data surcharges.",
  },
  {
    title: "Canadian Data Residency as the Default",
    description:
      "Logikcull is US-based infrastructure with no Canadian data residency option by default. Atticus stores all client data on Canadian servers by default — aligned with Law Society of Ontario guidance on cloud storage of client data outside Canada.",
  },
  {
    title: "Affordable All-In CAD Pricing",
    description:
      "Logikcull pricing in USD with per-GB charges is designed for US corporate legal and law firm use. For Ontario solo and small firms, the per-document cost model is prohibitive. Atticus is $149 CAD per lawyer per month — complete practice management and AI included with no data fees.",
  },
];

export default function LogikcullAlternativePage() {
  return (
    <>
      <Script id="logikcull-alternative-schema" type="application/ld+json">
        {schemaJson}
      </Script>

      <div className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-amber-400 text-slate-900 text-sm font-semibold px-4 py-1 rounded-full mb-6">
              Logikcull Alternative
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              The Logikcull Alternative for Ontario Lawyers
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Logikcull is a US self-serve eDiscovery platform for litigation
              document review — not a daily practice management platform for
              Ontario solo and small litigation firms. Atticus gives Ontario
              lawyers complete practice management, trust accounting, billing,
              and Canadian AI in one platform.
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

        {/* Why Switch */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-900 mb-4">
              Why Ontario Lawyers Choose Atticus Over Logikcull
            </h2>
            <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
              Logikcull solves US eDiscovery at scale. Ontario solo and small
              firm litigators need a complete daily practice platform with
              Canadian compliance — not US-format eDiscovery infrastructure.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reasons.map((reason, i) => (
                <div
                  key={i}
                  className="bg-slate-50 rounded-xl p-6 border border-slate-100"
                >
                  <div className="w-10 h-10 bg-amber-400 rounded-lg flex items-center justify-center text-slate-900 font-bold mb-4">
                    {i + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-20 px-6 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-900 mb-4">
              Atticus vs Logikcull: Feature Comparison
            </h2>
            <p className="text-center text-slate-600 mb-12">
              See what Ontario lawyers get with Atticus vs Logikcull — a
              complete Canadian practice platform versus a US self-serve
              eDiscovery tool.
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
              <table className="w-full bg-white">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left px-6 py-4 font-semibold">Feature</th>
                    <th className="text-center px-6 py-4 font-semibold text-amber-400">Atticus</th>
                    <th className="text-center px-6 py-4 font-semibold">Logikcull</th>
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
                      <td className="px-6 py-4 text-center text-slate-500 text-sm">{row.logikcull}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 bg-amber-50 border-t border-amber-100">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Ready for a Practice Platform Built for Ontario Litigators?
            </h2>
            <p className="text-slate-600 mb-8">
              Ontario litigation firms need trust accounting, billing, limitation
              period tracking, and AI document analysis — all in one affordable
              Canadian platform. Try Atticus free for 14 days.
            </p>
            <Link
              href="/sign-up"
              className="inline-block bg-slate-900 text-white font-semibold px-10 py-4 rounded-lg hover:bg-slate-700 transition-colors"
            >
              Start Your Free Trial
            </Link>
          </div>
        </section>

        {/* Related */}
        <section className="py-12 px-6 border-t border-slate-100">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-lg font-semibold text-slate-900 mb-6">Compare More Alternatives</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { href: "/everlaw-alternative", label: "Everlaw Alternative" },
                { href: "/relativity-alternative", label: "Relativity Alternative" },
                { href: "/lexbe-alternative", label: "Lexbe Alternative" },
                { href: "/clio-alternative", label: "Clio Alternative" },
                { href: "/filevine-alternative", label: "Filevine Alternative" },
                { href: "/kira-alternative", label: "Kira Systems Alternative" },
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
