import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ironclad Alternative for Ontario Lawyers | Atticus vs Ironclad Contract Management",
  description:
    "Looking for an Ironclad alternative? Compare Atticus vs Ironclad for Ontario law firms. Atticus combines Canadian legal AI with full practice management, trust accounting, HST billing, and LSO compliance — built for Ontario solo and small firms, not enterprise digital contracting platforms.",
  openGraph: {
    title: "Ironclad Alternative for Ontario Lawyers | Atticus vs Ironclad Contract Management",
    description:
      "Why Ontario lawyers choose Atticus over Ironclad. Atticus delivers complete practice management and Canadian legal AI in one LSO-compliant platform.",
    url: "https://getatticus.ca/ironclad-alternative",
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
  "description": "Atticus is the Ironclad alternative for Ontario lawyers that combines Canadian legal AI with full practice management, trust accounting, HST billing, and LSO compliance in one platform built for Ontario solo and small law firms.",
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
  ironclad: string;
};

const featureComparison: Feature[] = [
  {
    feature: "Practice management",
    atticus: "Full integrated practice management",
    ironclad: "Digital contracting workflow platform; no general practice management",
  },
  {
    feature: "Ontario trust accounting",
    atticus: "Built-in, LSO compliant",
    ironclad: "No trust accounting functionality",
  },
  {
    feature: "HST billing",
    atticus: "Native HST with CRA-compliant invoices",
    ironclad: "No billing or invoicing module",
  },
  {
    feature: "Time tracking",
    atticus: "Integrated time and billing",
    ironclad: "No time tracking functionality",
  },
  {
    feature: "AI legal work",
    atticus: "Canadian legal AI: document drafting, summarization, limitation period flagging, LSO compliance",
    ironclad: "AI contract creation, clause suggestions, risk identification, and workflow automation",
  },
  {
    feature: "Matter management",
    atticus: "Full matter lifecycle from intake to close",
    ironclad: "Contract workflow and repository management; not legal matter lifecycle management",
  },
  {
    feature: "Document drafting and management",
    atticus: "AI document analysis, summarization, and drafting assistance for Ontario legal files",
    ironclad: "Visual workflow builder for contract creation, approval, e-signature, and storage",
  },
  {
    feature: "Limitation period alerts",
    atticus: "Ontario Limitations Act built in",
    ironclad: "Contract renewal and obligation alerts; not Ontario limitation periods",
  },
  {
    feature: "Conflict checking",
    atticus: "Automated conflict search",
    ironclad: "Not included",
  },
  {
    feature: "LSO compliance",
    atticus: "Built for Ontario LSO requirements",
    ironclad: "No Ontario-specific LSO compliance features",
  },
  {
    feature: "Target market",
    atticus: "Ontario solo and small law firms",
    ironclad: "Corporate legal departments and legal operations teams managing high-volume contracts",
  },
  {
    feature: "Pricing (CAD)",
    atticus: "$149/lawyer/month (all-in, including AI)",
    ironclad: "Enterprise pricing in USD; implementation and integration fees additional",
  },
  {
    feature: "Data residency",
    atticus: "Canadian servers by default",
    ironclad: "US-based infrastructure; Canadian data residency not default",
  },
  {
    feature: "Deployment",
    atticus: "Self-serve; ready in hours",
    ironclad: "Enterprise implementation; workflow design and IT integration required",
  },
];

const reasons = [
  {
    title: "Ironclad is for Corporate Legal Operations — Not Law Firm Practice Management",
    description:
      "Ironclad is designed for corporate legal departments: streamlining contract creation, approval workflows, e-signature, and repository management at scale. It has no practice management, billing, trust accounting, matter lifecycle management, or client intake functionality. Ontario law firms need a complete daily practice platform — not a corporate contracting workflow tool.",
  },
  {
    title: "Ontario Trust Accounting Without Enterprise Workflow Pricing",
    description:
      "Ironclad has no trust accounting functionality. Ontario lawyers have mandatory LSO trust accounting obligations. Atticus includes fully LSO-compliant trust ledgers, mixed trust accounts, and reporting at $149 CAD per month — no enterprise implementation project required.",
  },
  {
    title: "Law Firm Document AI vs Corporate Contract Workflow AI",
    description:
      "Ironclad&apos;s AI is optimized for corporate contract generation, clause libraries, and approval workflow automation. Atticus AI is built for Ontario law firm practice: summarizing client files, identifying Ontario limitation periods, flagging LSO compliance issues, and answering questions about specific matters using Canadian legal context.",
  },
  {
    title: "Canadian Legal AI vs US Corporate Legal Platform",
    description:
      "Ironclad is built for US corporate legal operations and does not include Ontario-specific legal AI: Limitations Act 2002 tracking, LSO Rules of Professional Conduct guidance, Law Society trust accounting rules, or Ontario court procedure awareness.",
  },
  {
    title: "Canadian Data Residency as the Default",
    description:
      "Ironclad is US-based infrastructure with no Canadian data residency by default. Atticus stores all client data on Canadian servers by default — aligned with Law Society of Ontario guidance on cloud storage of client data.",
  },
  {
    title: "Affordable All-In CAD Pricing",
    description:
      "Ironclad carries enterprise pricing in USD with implementation fees designed for corporate legal operations teams. Ontario solo and small law firms need an affordable all-in practice platform. Atticus is $149 CAD per lawyer per month — complete practice management and AI included.",
  },
];

export default function IroncladAlternativePage() {
  return (
    <>
      <Script id="ironclad-alternative-schema" type="application/ld+json">
        {schemaJson}
      </Script>

      <div className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-amber-400 text-slate-900 text-sm font-semibold px-4 py-1 rounded-full mb-6">
              Ironclad Alternative
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              The Ironclad Alternative for Ontario Lawyers
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Ironclad is a corporate digital contracting platform for legal
              operations teams — not a daily practice management platform for
              Ontario solo and small law firms. Atticus gives Ontario lawyers
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
              Why Ontario Lawyers Choose Atticus Over Ironclad
            </h2>
            <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
              Ironclad solves corporate contract operations at scale. Ontario
              solo and small law firms need a complete daily practice platform
              with Canadian compliance — not enterprise digital contracting
              infrastructure.
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
              Atticus vs Ironclad: Feature Comparison
            </h2>
            <p className="text-center text-slate-600 mb-12">
              See what Ontario lawyers get with Atticus vs Ironclad — a
              complete Canadian law firm practice platform versus a corporate
              digital contracting workflow tool.
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
              <table className="w-full bg-white">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left px-6 py-4 font-semibold">Feature</th>
                    <th className="text-center px-6 py-4 font-semibold text-amber-400">Atticus</th>
                    <th className="text-center px-6 py-4 font-semibold">Ironclad</th>
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
                      <td className="px-6 py-4 text-center text-slate-500 text-sm">{row.ironclad}</td>
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
                { href: "/docusign-clm-alternative", label: "DocuSign CLM Alternative" },
                { href: "/kira-alternative", label: "Kira Systems Alternative" },
                { href: "/luminance-alternative", label: "Luminance Alternative" },
                { href: "/clio-alternative", label: "Clio Alternative" },
                { href: "/filevine-alternative", label: "Filevine Alternative" },
                { href: "/pclaw-alternative", label: "PCLaw Alternative" },
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
