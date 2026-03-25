import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Luminance Alternative for Ontario Lawyers | Atticus vs Luminance AI",
  description:
    "Looking for a Luminance alternative? Compare Atticus vs Luminance for Ontario law firms. Atticus combines Canadian legal AI with full practice management, trust accounting, HST billing, and LSO compliance — built for Ontario solo and small firms, not enterprise document review.",
  openGraph: {
    title: "Luminance Alternative for Ontario Lawyers | Atticus vs Luminance AI",
    description:
      "Why Ontario lawyers choose Atticus over Luminance AI. Atticus delivers Canadian legal AI plus full practice management in one LSO-compliant platform.",
    url: "https://getatticus.ca/luminance-alternative",
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
  "description": "Atticus is the Luminance alternative for Ontario lawyers that combines Canadian legal AI with full practice management, trust accounting, HST billing, and LSO compliance in one platform built for Ontario solo and small law firms.",
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
  luminance: string;
};

const featureComparison: Feature[] = [
  {
    feature: "Practice management",
    atticus: "Full integrated practice management",
    luminance: "AI document review and contract analysis tool only; no practice management",
  },
  {
    feature: "Ontario trust accounting",
    atticus: "Built-in, LSO compliant",
    luminance: "No trust accounting functionality",
  },
  {
    feature: "HST billing",
    atticus: "Native HST with CRA-compliant invoices",
    luminance: "No billing or invoicing module",
  },
  {
    feature: "Time tracking",
    atticus: "Integrated time and billing",
    luminance: "No time tracking functionality",
  },
  {
    feature: "AI legal work",
    atticus: "Canadian legal AI: document drafting, summarization, limitation period flagging, LSO compliance",
    luminance: "AI document review, due diligence, contract analysis, and anomaly detection — enterprise M&A and finance focus",
  },
  {
    feature: "Matter management",
    atticus: "Full matter lifecycle from intake to close",
    luminance: "Document-centric; no matter or case management",
  },
  {
    feature: "Limitation period alerts",
    atticus: "Ontario Limitations Act built in",
    luminance: "Not included as a practice management feature",
  },
  {
    feature: "Conflict checking",
    atticus: "Automated conflict search",
    luminance: "Not included",
  },
  {
    feature: "Client intake",
    atticus: "Automated client intake portal",
    luminance: "Not included",
  },
  {
    feature: "LSO compliance",
    atticus: "Built for Ontario LSO requirements",
    luminance: "No Ontario-specific LSO compliance features",
  },
  {
    feature: "Target market",
    atticus: "Ontario solo and small law firms",
    luminance: "Large law firms and in-house legal teams conducting high-volume document review; enterprise M&A due diligence",
  },
  {
    feature: "Pricing (CAD)",
    atticus: "$149/lawyer/month (all-in, including AI)",
    luminance: "Enterprise pricing in USD/GBP; not designed for solo or small firm budgets",
  },
  {
    feature: "Data residency",
    atticus: "Canadian servers by default",
    luminance: "UK-based company; data residency configuration required for Canadian clients",
  },
  {
    feature: "Deployment",
    atticus: "Self-serve; ready in hours",
    luminance: "Enterprise implementation; training required; dedicated implementation team",
  },
];

const reasons = [
  {
    title: "Luminance is an Enterprise Document Review Tool — Not a Practice Platform",
    description:
      "Luminance is built for high-volume AI document review and due diligence in M&A and finance transactions at large law firms and corporate legal teams. It has no practice management, billing, trust accounting, matter management, or client intake functionality. Ontario solo and small firms need a complete practice platform — Luminance solves one narrow problem at enterprise cost.",
  },
  {
    title: "Ontario Trust Accounting Included — No Add-Ons Required",
    description:
      "Luminance has no trust accounting functionality. Ontario lawyers have mandatory LSO trust accounting obligations. Atticus includes fully LSO-compliant trust ledgers, mixed trust accounts, and annual reporting as core features in the standard $149 CAD monthly price.",
  },
  {
    title: "AI Trained on Canadian Law — Not Just Contract Patterns",
    description:
      "Luminance&apos;s AI is trained to identify anomalies in contracts relative to market norms — primarily based on large-firm Anglo-American transaction patterns. Atticus AI is purpose-built for Ontario legal practice: Ontario statute compliance, LSO professional conduct rules, limitation period flagging, and drafting assistance in Canadian legal context.",
  },
  {
    title: "One Platform for Daily Practice — Not a Transaction Tool",
    description:
      "Most Ontario solo and small firm lawyers do not conduct high-volume M&A due diligence. They manage files, bill clients, handle trust accounts, and track deadlines daily. Atticus is built for this daily practice reality — Luminance is optimized for a narrow transaction use case that most Ontario lawyers encounter rarely if ever.",
  },
  {
    title: "Canadian Data Residency as the Default",
    description:
      "Luminance is a UK-based company with enterprise data residency configuration required for Canadian clients. Atticus stores all client data on Canadian servers by default — meeting PIPEDA requirements and Law Society data guidance without additional configuration.",
  },
  {
    title: "Affordable All-In CAD Pricing",
    description:
      "Luminance carries enterprise pricing in USD/GBP designed for large law firm and corporate legal department budgets. Ontario solo and small firms cannot practically deploy Luminance at any reasonable per-lawyer cost. Atticus is $149 CAD per lawyer per month — all features included.",
  },
];

export default function LuminanceAlternativePage() {
  return (
    <>
      <Script id="luminance-alternative-schema" type="application/ld+json">
        {schemaJson}
      </Script>

      <div className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-amber-400 text-slate-900 text-sm font-semibold px-4 py-1 rounded-full mb-6">
              Luminance Alternative
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              The Luminance Alternative for Ontario Lawyers
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Luminance is an enterprise document review tool built for BigLaw
              M&A due diligence — not a complete practice platform for Ontario
              solo and small firms. Atticus gives Ontario lawyers Canadian legal
              AI, trust accounting, billing, and LSO compliance in one platform.
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
              Why Ontario Lawyers Choose Atticus Over Luminance
            </h2>
            <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
              Luminance solves a specific enterprise problem — high-volume AI
              document review. Ontario solo and small firms need a complete daily
              practice platform with Canadian AI, trust accounting, and LSO
              compliance built in.
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
              Atticus vs Luminance AI: Feature Comparison
            </h2>
            <p className="text-center text-slate-600 mb-12">
              See what Ontario lawyers get with Atticus vs Luminance — a
              complete Canadian practice platform versus an enterprise document
              review tool.
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
                      Luminance AI
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
                        {row.luminance}
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
              Ready for a Complete Practice Platform — Not Just Document Review?
            </h2>
            <p className="text-slate-600 mb-8">
              Ontario lawyers need trust accounting, billing, conflict checking,
              and Canadian legal AI — all in one platform. Try Atticus free for
              14 days.
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
                { href: "/harvey-ai-alternative", label: "Harvey AI Alternative" },
                { href: "/cocounsel-alternative", label: "CoCounsel Alternative" },
                { href: "/casetext-alternative", label: "Casetext Alternative" },
                { href: "/imanage-alternative", label: "iManage Alternative" },
                { href: "/netdocuments-alternative", label: "NetDocuments Alternative" },
                { href: "/clio-alternative", label: "Clio Alternative" },
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
