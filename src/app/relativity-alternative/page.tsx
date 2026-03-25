import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Relativity Alternative for Ontario Lawyers | Atticus vs Relativity eDiscovery",
  description:
    "Looking for a Relativity alternative? Compare Atticus vs Relativity for Ontario law firms. Atticus combines Canadian legal AI with full practice management, trust accounting, HST billing, and LSO compliance — built for Ontario solo and small litigation firms, not enterprise eDiscovery.",
  openGraph: {
    title: "Relativity Alternative for Ontario Lawyers | Atticus vs Relativity eDiscovery",
    description:
      "Why Ontario lawyers choose Atticus over Relativity. Atticus delivers complete practice management and Canadian legal AI in one LSO-compliant platform.",
    url: "https://getatticus.ca/relativity-alternative",
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
  "description": "Atticus is the Relativity alternative for Ontario lawyers that combines Canadian legal AI with full practice management, trust accounting, HST billing, and LSO compliance in one platform built for Ontario solo and small law firms.",
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
  relativity: string;
};

const featureComparison: Feature[] = [
  {
    feature: "Practice management",
    atticus: "Full integrated practice management",
    relativity: "eDiscovery platform only; no practice management",
  },
  {
    feature: "Ontario trust accounting",
    atticus: "Built-in, LSO compliant",
    relativity: "No trust accounting functionality",
  },
  {
    feature: "HST billing",
    atticus: "Native HST with CRA-compliant invoices",
    relativity: "No billing or invoicing module",
  },
  {
    feature: "Time tracking",
    atticus: "Integrated time and billing",
    relativity: "No time tracking functionality",
  },
  {
    feature: "AI legal work",
    atticus: "Canadian legal AI: document drafting, summarization, limitation period flagging, LSO compliance",
    relativity: "AI-assisted document review, predictive coding, and analytics for large-scale eDiscovery",
  },
  {
    feature: "Matter management",
    atticus: "Full matter lifecycle from intake to close",
    relativity: "Matter-scoped document review workspaces; not full matter management",
  },
  {
    feature: "Document review / eDiscovery",
    atticus: "AI document analysis and summarization for individual files",
    relativity: "Enterprise-scale eDiscovery: processing, review, analytics, production for millions of documents",
  },
  {
    feature: "Limitation period alerts",
    atticus: "Ontario Limitations Act built in",
    relativity: "Not included",
  },
  {
    feature: "Conflict checking",
    atticus: "Automated conflict search",
    relativity: "Not included",
  },
  {
    feature: "LSO compliance",
    atticus: "Built for Ontario LSO requirements",
    relativity: "No Ontario-specific LSO compliance features",
  },
  {
    feature: "Target market",
    atticus: "Ontario solo and small law firms",
    relativity: "Large law firms, corporate legal departments, and eDiscovery service providers handling massive document volumes",
  },
  {
    feature: "Pricing (CAD)",
    atticus: "$149/lawyer/month (all-in, including AI)",
    relativity: "Enterprise workspace-based pricing in USD; significant per-GB data charges; hosting costs additional",
  },
  {
    feature: "Data residency",
    atticus: "Canadian servers by default",
    relativity: "US-based infrastructure (RelativityOne); Canadian data residency available but not default",
  },
  {
    feature: "Deployment",
    atticus: "Self-serve; ready in hours",
    relativity: "Enterprise implementation; Relativity-certified administrators; specialist training required",
  },
];

const reasons = [
  {
    title: "Relativity is an Enterprise eDiscovery Platform — Not a Practice Platform",
    description:
      "Relativity is purpose-built for large-scale eDiscovery: processing, reviewing, and producing millions of documents in litigation or regulatory investigations. It has no practice management, billing, trust accounting, matter management, or client intake functionality. Ontario solo and small litigation firms need a daily practice platform — not an enterprise eDiscovery workspace that costs more per gigabyte than most cases contain.",
  },
  {
    title: "Ontario Trust Accounting — No Enterprise Contract Required",
    description:
      "Relativity has no trust accounting functionality. Ontario lawyers have mandatory LSO trust accounting obligations. Atticus includes fully LSO-compliant trust ledgers, mixed trust accounts, and reporting as core features in the $149 CAD monthly price.",
  },
  {
    title: "Most Ontario Litigators Never Need Enterprise eDiscovery",
    description:
      "Relativity is optimized for productions of hundreds of thousands to millions of documents — antitrust investigations, securities class actions, mass tort matters, and major commercial litigation. The vast majority of Ontario solo and small firm litigation involves case files where Atticus AI can analyze, summarize, and organize documents effectively without enterprise eDiscovery infrastructure.",
  },
  {
    title: "No Per-GB Data Charges or Specialist Administrators",
    description:
      "Relativity charges per gigabyte of data hosted plus licensing fees, and requires Relativity-certified administrators to manage workspaces. Atticus is a flat monthly fee per lawyer — no per-document charges, no specialist administrators, no hidden processing fees.",
  },
  {
    title: "Canadian Data Residency as the Default",
    description:
      "RelativityOne (cloud version) is US-based infrastructure. Canadian data residency is available but requires specific configuration and may carry additional cost. Atticus stores all client data on Canadian servers by default.",
  },
  {
    title: "Affordable All-In CAD Pricing",
    description:
      "Relativity carries enterprise pricing in USD designed for large firm and eDiscovery service provider use cases. The per-GB hosting charges and licensing fees are prohibitive for Ontario solo and small firms. Atticus is $149 CAD per lawyer per month — complete practice management and AI included.",
  },
];

export default function RelativityAlternativePage() {
  return (
    <>
      <Script id="relativity-alternative-schema" type="application/ld+json">
        {schemaJson}
      </Script>

      <div className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-amber-400 text-slate-900 text-sm font-semibold px-4 py-1 rounded-full mb-6">
              Relativity Alternative
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              The Relativity eDiscovery Alternative for Ontario Lawyers
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Relativity is an enterprise eDiscovery platform for massive
              document productions — not a daily practice management platform
              for Ontario solo and small litigation firms. Atticus gives Ontario
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
              Why Ontario Lawyers Choose Atticus Over Relativity
            </h2>
            <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
              Relativity solves enterprise eDiscovery at massive scale. Ontario
              solo and small firm litigators need a complete daily practice
              platform — not per-GB enterprise infrastructure.
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
              Atticus vs Relativity: Feature Comparison
            </h2>
            <p className="text-center text-slate-600 mb-12">
              See what Ontario lawyers get with Atticus vs Relativity — a
              complete Canadian practice platform versus an enterprise eDiscovery
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
                      Relativity
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
                        {row.relativity}
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
                { href: "/kira-alternative", label: "Kira Systems Alternative" },
                { href: "/luminance-alternative", label: "Luminance Alternative" },
                { href: "/lexbe-alternative", label: "Lexbe Alternative" },
                { href: "/filevine-alternative", label: "Filevine Alternative" },
                { href: "/clio-alternative", label: "Clio Alternative" },
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
