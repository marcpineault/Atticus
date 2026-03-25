import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "iManage Alternative for Ontario Lawyers | Atticus vs iManage",
  description:
    "Looking for an iManage alternative? Compare Atticus vs iManage for Ontario law firms. Full practice management, AI document analysis, trust accounting, HST billing, and LSO compliance — built for Canadian law.",
  openGraph: {
    title: "iManage Alternative for Ontario Lawyers | Atticus vs iManage",
    description:
      "Why Ontario lawyers choose Atticus over iManage. Atticus combines document management with full practice management, trust accounting, and LSO compliance in one Canadian platform.",
    url: "https://getatticus.ca/imanage-alternative",
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
  "description": "Atticus is the iManage alternative that provides AI-powered document management plus full practice management, Ontario trust accounting, HST billing, and LSO compliance for Ontario law firms.",
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
  imanage: string;
};

const featureComparison: Feature[] = [
  {
    feature: "Document management",
    atticus: "AI-powered document analysis and storage",
    imanage: "Enterprise DMS with version control and workspace",
  },
  {
    feature: "Ontario trust accounting",
    atticus: "Built-in, LSO compliant",
    imanage: "Not included (document platform only)",
  },
  {
    feature: "HST billing",
    atticus: "Native HST with CRA-compliant invoices",
    imanage: "No billing functionality",
  },
  {
    feature: "Time tracking",
    atticus: "Integrated time and billing",
    imanage: "Not included",
  },
  {
    feature: "AI document intelligence",
    atticus: "Canadian legal AI for drafting and analysis",
    imanage: "iManage RAVN AI (entity extraction, search); no drafting",
  },
  {
    feature: "Matter management",
    atticus: "Full matter lifecycle",
    imanage: "Matter-centric workspace organization only",
  },
  {
    feature: "Limitation period alerts",
    atticus: "Ontario Limitations Act built in",
    imanage: "Not included",
  },
  {
    feature: "Conflict checking",
    atticus: "Automated conflict search",
    imanage: "Not included",
  },
  {
    feature: "Client intake",
    atticus: "Automated client intake portal",
    imanage: "Not included",
  },
  {
    feature: "LSO compliance",
    atticus: "Built for LSO requirements",
    imanage: "No LSO compliance features",
  },
  {
    feature: "Data residency",
    atticus: "Canadian servers",
    imanage: "US-based cloud; Canada region available via Microsoft Azure",
  },
  {
    feature: "Pricing (CAD)",
    atticus: "$149/lawyer/month (all-in)",
    imanage: "USD enterprise pricing; implementation fees apply",
  },
  {
    feature: "Implementation",
    atticus: "Self-serve; ready in hours",
    imanage: "IT-led enterprise deployment; weeks to months",
  },
  {
    feature: "Platform scope",
    atticus: "Full practice management",
    imanage: "Document management only",
  },
];

const reasons = [
  {
    title: "Complete Practice Management, Not Just Document Storage",
    description:
      "iManage is a leading enterprise document management system used by large law firms worldwide. Ontario solo and small firms need more: trust accounting, billing, limitation period tracking, conflict checking, and client intake. Atticus provides all of this. iManage requires separate tools for everything beyond document storage.",
  },
  {
    title: "Ontario Trust Accounting Built In",
    description:
      "iManage has no trust accounting capabilities. Ontario lawyers need LSO-compliant trust ledgers, mixed trust accounts, and Annual Report data. Atticus includes all of this natively — no additional software, no added cost.",
  },
  {
    title: "AI Built for Canadian Legal Practice",
    description:
      "iManage RAVN AI focuses on document classification, entity extraction, and enterprise search. Atticus AI is built for Ontario-specific legal drafting, file summarization in Canadian legal context, and LSO compliance flagging — built for the work Ontario lawyers actually do.",
  },
  {
    title: "Deploy Today, Not in Three Months",
    description:
      "iManage implementations for law firms require IT infrastructure, configuration, and consulting. Solo and small Ontario firms typically cannot afford the time or cost. Atticus is designed to be deployed by the lawyer in hours — no IT team required.",
  },
  {
    title: "Canadian Data Residency as the Default",
    description:
      "iManage offers cloud hosting on Microsoft Azure with a Canada region option, but this may carry additional cost and requires configuration. Atticus stores all client data on Canadian servers by default — supporting PIPEDA compliance and Law Society data guidance without special configuration.",
  },
  {
    title: "All-Inclusive CAD Pricing",
    description:
      "iManage is priced in USD with enterprise-tier minimums and additional fees for implementation, integrations, and add-on modules. Atticus is $149 CAD per lawyer per month — all features included, predictable billing, no exchange rate surprises.",
  },
];

export default function IManageAlternativePage() {
  return (
    <>
      <Script id="imanage-alternative-schema" type="application/ld+json">
        {schemaJson}
      </Script>

      <div className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-amber-400 text-slate-900 text-sm font-semibold px-4 py-1 rounded-full mb-6">
              iManage Alternative
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              The iManage Alternative Built for Ontario Lawyers
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              iManage manages your documents — but Ontario lawyers also need
              trust accounting, billing, limitation period tracking, and LSO
              compliance. Atticus provides everything in one Canadian platform.
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
              Why Ontario Lawyers Choose Atticus Over iManage
            </h2>
            <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
              iManage is excellent for enterprise document management at large
              firms. Ontario solo and small firms need a complete practice
              management solution with Canadian compliance built in — not just an
              enterprise document repository.
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
              Atticus vs iManage: Feature Comparison
            </h2>
            <p className="text-center text-slate-600 mb-12">
              See what Ontario lawyers get with Atticus vs what iManage
              includes as an enterprise document management platform.
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
                      iManage
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
                        {row.imanage}
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
              Ready to Switch from iManage?
            </h2>
            <p className="text-slate-600 mb-8">
              Ontario lawyers deserve one platform that handles everything —
              documents, billing, trust accounting, and LSO compliance.
              Try Atticus free for 14 days.
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
                { href: "/netdocuments-alternative", label: "NetDocuments Alternative" },
                { href: "/clio-alternative", label: "Clio Alternative" },
                { href: "/leap-alternative", label: "LEAP Alternative" },
                { href: "/pclaw-alternative", label: "PCLaw Alternative" },
                { href: "/lexbe-alternative", label: "Lexbe Alternative" },
                { href: "/cosmolex-alternative", label: "CosmoLex Alternative" },
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
