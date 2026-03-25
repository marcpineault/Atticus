import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Everlaw Alternative for Ontario Lawyers | Atticus vs Everlaw Litigation Cloud",
  description:
    "Looking for an Everlaw alternative? Compare Atticus vs Everlaw for Ontario law firms. Atticus combines Canadian legal AI with full practice management, trust accounting, HST billing, and LSO compliance — built for Ontario solo and small litigation firms, not enterprise cloud eDiscovery.",
  openGraph: {
    title: "Everlaw Alternative for Ontario Lawyers | Atticus vs Everlaw Litigation Cloud",
    description:
      "Why Ontario lawyers choose Atticus over Everlaw. Atticus delivers complete practice management and Canadian legal AI in one LSO-compliant platform.",
    url: "https://getatticus.ca/everlaw-alternative",
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
  "description": "Atticus is the Everlaw alternative for Ontario lawyers that combines Canadian legal AI with full practice management, trust accounting, HST billing, and LSO compliance in one platform built for Ontario solo and small law firms.",
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
  everlaw: string;
};

const featureComparison: Feature[] = [
  {
    feature: "Practice management",
    atticus: "Full integrated practice management",
    everlaw: "Litigation cloud platform; no general practice management",
  },
  {
    feature: "Ontario trust accounting",
    atticus: "Built-in, LSO compliant",
    everlaw: "No trust accounting functionality",
  },
  {
    feature: "HST billing",
    atticus: "Native HST with CRA-compliant invoices",
    everlaw: "No billing or invoicing module",
  },
  {
    feature: "Time tracking",
    atticus: "Integrated time and billing",
    everlaw: "No time tracking functionality",
  },
  {
    feature: "AI legal work",
    atticus: "Canadian legal AI: document drafting, summarization, limitation period flagging, LSO compliance",
    everlaw: "AI-assisted document review, predictive ranking, and timeline analysis for eDiscovery",
  },
  {
    feature: "Matter management",
    atticus: "Full matter lifecycle from intake to close",
    everlaw: "Case-scoped eDiscovery workspaces; not full matter management",
  },
  {
    feature: "Document review / eDiscovery",
    atticus: "AI document analysis and summarization for individual files",
    everlaw: "Cloud-native eDiscovery: ingestion, AI-assisted review, predictive ranking, timelines, storybuilder",
  },
  {
    feature: "Limitation period alerts",
    atticus: "Ontario Limitations Act built in",
    everlaw: "Not included",
  },
  {
    feature: "Conflict checking",
    atticus: "Automated conflict search",
    everlaw: "Not included",
  },
  {
    feature: "LSO compliance",
    atticus: "Built for Ontario LSO requirements",
    everlaw: "No Ontario-specific LSO compliance features",
  },
  {
    feature: "Target market",
    atticus: "Ontario solo and small law firms",
    everlaw: "Large law firms, corporate legal departments, government agencies, and eDiscovery service providers",
  },
  {
    feature: "Pricing (CAD)",
    atticus: "$149/lawyer/month (all-in, including AI)",
    everlaw: "Enterprise seat-based pricing in USD; data upload and hosting fees additional",
  },
  {
    feature: "Data residency",
    atticus: "Canadian servers by default",
    everlaw: "US-based AWS infrastructure; Canadian data residency not default",
  },
  {
    feature: "Deployment",
    atticus: "Self-serve; ready in hours",
    everlaw: "Enterprise onboarding; training and certification recommended",
  },
];

const reasons = [
  {
    title: "Everlaw is an Enterprise eDiscovery Cloud — Not a Practice Management Platform",
    description:
      "Everlaw is designed for large-scale litigation discovery: ingesting, processing, reviewing, and producing large document sets in litigation or regulatory matters. It has no practice management, billing, trust accounting, matter lifecycle management, or client intake functionality. Ontario solo and small litigation firms need a complete daily practice platform — not a cloud eDiscovery workspace sized for major firm document reviews.",
  },
  {
    title: "Ontario Trust Accounting Without Enterprise Licensing",
    description:
      "Everlaw has no trust accounting functionality. Ontario lawyers have mandatory LSO trust accounting obligations. Atticus includes fully LSO-compliant trust ledgers, mixed trust accounts, and reporting as core features at $149 CAD per month — no enterprise contract required.",
  },
  {
    title: "Most Ontario Litigators Do Not Handle Enterprise Document Volumes",
    description:
      "Everlaw is optimized for large commercial litigation, securities enforcement, class actions, and government investigations with hundreds of thousands to millions of documents. The vast majority of Ontario solo and small firm litigation involves case files where Atticus AI can analyze, summarize, and organize documents effectively without cloud eDiscovery infrastructure.",
  },
  {
    title: "No Data Upload Fees or Enterprise Seat Contracts",
    description:
      "Everlaw charges per-seat licensing in USD with additional data upload and hosting fees. Atticus is a flat monthly fee per lawyer in CAD — no per-document charges, no data storage surcharges, no hidden processing fees.",
  },
  {
    title: "Canadian Data Residency as the Default",
    description:
      "Everlaw runs on AWS infrastructure hosted in the United States. Canadian data residency is not a default configuration. Atticus stores all client data on Canadian servers by default — aligned with Law Society of Ontario guidance on cloud storage of client data.",
  },
  {
    title: "Affordable All-In CAD Pricing",
    description:
      "Everlaw carries enterprise pricing in USD designed for large-firm and service-provider use. The per-seat licensing and data charges are prohibitive for Ontario solo and small firms. Atticus is $149 CAD per lawyer per month — complete practice management and AI included.",
  },
];

export default function EverLawAlternativePage() {
  return (
    <>
      <Script id="everlaw-alternative-schema" type="application/ld+json">
        {schemaJson}
      </Script>

      <div className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-amber-400 text-slate-900 text-sm font-semibold px-4 py-1 rounded-full mb-6">
              Everlaw Alternative
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              The Everlaw Alternative for Ontario Lawyers
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Everlaw is a cloud eDiscovery platform for enterprise litigation
              teams — not a daily practice management platform for Ontario solo
              and small litigation firms. Atticus gives Ontario lawyers complete
              practice management, trust accounting, billing, and Canadian AI in
              one platform.
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
              Why Ontario Lawyers Choose Atticus Over Everlaw
            </h2>
            <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
              Everlaw solves enterprise eDiscovery at scale. Ontario solo and
              small firm litigators need a complete daily practice platform — not
              cloud eDiscovery infrastructure built for major firm document
              reviews.
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
              Atticus vs Everlaw: Feature Comparison
            </h2>
            <p className="text-center text-slate-600 mb-12">
              See what Ontario lawyers get with Atticus vs Everlaw — a complete
              Canadian practice platform versus an enterprise cloud eDiscovery
              workspace.
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
              <table className="w-full bg-white">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left px-6 py-4 font-semibold">
                      Feature
                    </th>
                    <th className="text-center px-6 py-4 font-semibold text-amber-400">
                      Atticus
                    </th>
                    <th className="text-center px-6 py-4 font-semibold">
                      Everlaw
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {featureComparison.map((row, i) => (
                    <tr
                      key={i}
                      className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}
                    >
                      <td className="px-6 py-4 text-slate-700 font-medium">
                        {row.feature}
                      </td>
                      <td className="px-6 py-4 text-center text-slate-700">
                        <span className="inline-flex items-center gap-1">
                          <span className="text-green-600 font-bold">✓</span>
                          <span className="text-sm">{row.atticus}</span>
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center text-slate-500 text-sm">
                        {row.everlaw}
                      </td>
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
              platform. Try Atticus free for 14 days.
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
            <h3 className="text-lg font-semibold text-slate-900 mb-6">
              Compare More Alternatives
            </h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { href: "/relativity-alternative", label: "Relativity Alternative" },
                { href: "/kira-alternative", label: "Kira Systems Alternative" },
                { href: "/luminance-alternative", label: "Luminance Alternative" },
                { href: "/lexbe-alternative", label: "Lexbe Alternative" },
                { href: "/clio-alternative", label: "Clio Alternative" },
                { href: "/filevine-alternative", label: "Filevine Alternative" },
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
