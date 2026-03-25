import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Litera Alternative for Ontario Lawyers | Atticus vs Litera Document Drafting",
  description:
    "Looking for a Litera alternative? Compare Atticus vs Litera for Ontario law firms. Atticus combines Canadian legal AI with full practice management, trust accounting, HST billing, and LSO compliance — built for Ontario solo and small firms, not large-firm document drafting and proofreading tools.",
  openGraph: {
    title: "Litera Alternative for Ontario Lawyers | Atticus vs Litera Document Drafting",
    description:
      "Why Ontario lawyers choose Atticus over Litera. Atticus delivers complete practice management and Canadian legal AI in one LSO-compliant platform.",
    url: "https://getatticus.ca/litera-alternative",
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
  "description": "Atticus is the Litera alternative for Ontario lawyers that combines Canadian legal AI with full practice management, trust accounting, HST billing, and LSO compliance in one platform built for Ontario solo and small law firms.",
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
  litera: string;
};

const featureComparison: Feature[] = [
  {
    feature: "Practice management",
    atticus: "Full integrated practice management",
    litera: "Document drafting, proofreading, and comparison tools; no general practice management",
  },
  {
    feature: "Ontario trust accounting",
    atticus: "Built-in, LSO compliant",
    litera: "No trust accounting functionality",
  },
  {
    feature: "HST billing",
    atticus: "Native HST with CRA-compliant invoices",
    litera: "No billing or invoicing module",
  },
  {
    feature: "Time tracking",
    atticus: "Integrated time and billing",
    litera: "No time tracking functionality",
  },
  {
    feature: "AI legal work",
    atticus: "Canadian legal AI: document drafting, summarization, limitation period flagging, LSO compliance",
    litera: "AI document comparison, proofreading, clause checking, and document assembly for large-firm transactional work",
  },
  {
    feature: "Matter management",
    atticus: "Full matter lifecycle from intake to close",
    litera: "No matter management; document-level tools only",
  },
  {
    feature: "Document tools",
    atticus: "AI document analysis, summarization, and entity extraction for Ontario legal files",
    litera: "Document comparison, cleanup, metadata removal, numbering, proofreading, and firm style enforcement",
  },
  {
    feature: "Limitation period alerts",
    atticus: "Ontario Limitations Act built in",
    litera: "Not included",
  },
  {
    feature: "Conflict checking",
    atticus: "Automated conflict search",
    litera: "Not included",
  },
  {
    feature: "LSO compliance",
    atticus: "Built for Ontario LSO requirements",
    litera: "No Ontario-specific LSO compliance features",
  },
  {
    feature: "Target market",
    atticus: "Ontario solo and small law firms",
    litera: "Large law firm transactional and litigation support teams needing document quality tools",
  },
  {
    feature: "Pricing (CAD)",
    atticus: "$149/lawyer/month (all-in, including AI)",
    litera: "Enterprise per-seat pricing in USD; multiple product modules priced separately",
  },
  {
    feature: "Data residency",
    atticus: "Canadian servers by default",
    litera: "US-based infrastructure",
  },
  {
    feature: "Deployment",
    atticus: "Self-serve; ready in hours",
    litera: "Enterprise deployment; IT integration and firm-wide rollout required",
  },
];

const reasons = [
  {
    title: "Litera is a Large-Firm Document Quality Suite — Not a Practice Management Platform",
    description:
      "Litera offers document comparison, proofreading, metadata removal, and clause checking tools designed for large law firm document workflows. It has no practice management, billing, trust accounting, matter lifecycle management, or client intake functionality. Ontario solo and small law firms need a complete daily practice platform — not enterprise document quality infrastructure.",
  },
  {
    title: "Ontario Trust Accounting Without Document Suite Pricing",
    description:
      "Litera has no trust accounting functionality. Ontario lawyers have mandatory LSO trust accounting obligations. Atticus includes fully LSO-compliant trust ledgers, mixed trust accounts, and reporting at $149 CAD per month — no enterprise document tool licensing required.",
  },
  {
    title: "Canadian Legal AI vs Large-Firm Document Quality Tools",
    description:
      "Litera&apos;s tools are designed for large-firm transactional document quality — proofreading complex deal documents, comparing heavily negotiated contracts, cleaning up metadata. Atticus AI is built for Ontario law firm practice: summarizing client files, identifying Ontario limitation periods, flagging LSO compliance issues, and answering questions about specific matters.",
  },
  {
    title: "Solo and Small Firm Document Needs vs Enterprise Document Suites",
    description:
      "Ontario solo and small firm document work does not require an enterprise document quality suite with metadata removal, style enforcement, and cross-reference checking tools sized for 500-lawyer transactional teams. Atticus AI handles document analysis, summarization, and drafting assistance effectively for small firm files.",
  },
  {
    title: "Canadian Data Residency as the Default",
    description:
      "Litera is US-based infrastructure. Atticus stores all client data on Canadian servers by default — aligned with Law Society of Ontario guidance on cloud storage of client data.",
  },
  {
    title: "Affordable All-In CAD Pricing",
    description:
      "Litera&apos;s per-seat pricing in USD with multiple product modules is designed for large-firm document teams. Ontario solo and small law firms need an affordable all-in practice platform with AI. Atticus is $149 CAD per lawyer per month — complete practice management and Canadian AI included.",
  },
];

export default function LiteraAlternativePage() {
  return (
    <>
      <Script id="litera-alternative-schema" type="application/ld+json">
        {schemaJson}
      </Script>

      <div className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-amber-400 text-slate-900 text-sm font-semibold px-4 py-1 rounded-full mb-6">
              Litera Alternative
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              The Litera Alternative for Ontario Lawyers
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Litera is an enterprise document quality suite for large-firm
              transactional lawyers — not a daily practice management platform
              for Ontario solo and small law firms. Atticus gives Ontario lawyers
              complete practice management, trust accounting, billing, and
              Canadian AI in one platform.
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
              Why Ontario Lawyers Choose Atticus Over Litera
            </h2>
            <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
              Litera solves large-firm document quality at scale. Ontario solo and
              small law firms need a complete daily practice platform with Canadian
              compliance — not enterprise document suite infrastructure.
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

        {/* Comparison Table */}
        <section className="py-20 px-6 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-900 mb-4">
              Atticus vs Litera: Feature Comparison
            </h2>
            <p className="text-center text-slate-600 mb-12">
              See what Ontario lawyers get with Atticus vs Litera — a complete
              Canadian practice platform versus an enterprise document quality suite.
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
              <table className="w-full bg-white">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left px-6 py-4 font-semibold">Feature</th>
                    <th className="text-center px-6 py-4 font-semibold text-amber-400">Atticus</th>
                    <th className="text-center px-6 py-4 font-semibold">Litera</th>
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
                      <td className="px-6 py-4 text-center text-slate-500 text-sm">{row.litera}</td>
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
              Ready for a Practice Platform Built for Ontario Law Firms?
            </h2>
            <p className="text-slate-600 mb-8">
              Ontario law firms need trust accounting, billing, matter management,
              limitation period tracking, and AI document analysis — all in one
              affordable Canadian platform. Try Atticus free for 14 days.
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
                { href: "/draftwise-alternative", label: "DraftWise Alternative" },
                { href: "/kira-alternative", label: "Kira Systems Alternative" },
                { href: "/ironclad-alternative", label: "Ironclad Alternative" },
                { href: "/clio-alternative", label: "Clio Alternative" },
                { href: "/pclaw-alternative", label: "PCLaw Alternative" },
                { href: "/harvey-ai-alternative", label: "Harvey AI Alternative" },
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
