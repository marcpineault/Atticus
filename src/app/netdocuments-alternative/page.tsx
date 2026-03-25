import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "NetDocuments Alternative for Ontario Lawyers | Atticus vs NetDocuments",
  description:
    "Looking for a NetDocuments alternative? Compare Atticus vs NetDocuments for Ontario law firms. Full practice management, AI document analysis, trust accounting, and HST billing — built for Canadian law.",
  openGraph: {
    title: "NetDocuments Alternative for Ontario Lawyers | Atticus vs NetDocuments",
    description:
      "Why Ontario lawyers choose Atticus over NetDocuments. Atticus combines document management with full practice management, trust accounting, and LSO compliance in one Canadian platform.",
    url: "https://getatticus.ca/netdocuments-alternative",
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
  "description": "Atticus is the NetDocuments alternative that provides AI-powered document management plus full practice management, Ontario trust accounting, HST billing, and LSO compliance for Ontario law firms.",
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
  netdocs: string;
};

const featureComparison: Feature[] = [
  {
    feature: "Document management",
    atticus: "AI-powered document analysis and storage",
    netdocs: "Enterprise cloud document management",
  },
  {
    feature: "Ontario trust accounting",
    atticus: "Built-in, LSO compliant",
    netdocs: "Not included (document platform only)",
  },
  {
    feature: "HST billing",
    atticus: "Native HST with CRA-compliant invoices",
    netdocs: "No billing functionality",
  },
  {
    feature: "Time tracking",
    atticus: "Integrated time and billing",
    netdocs: "Not included",
  },
  {
    feature: "AI document drafting",
    atticus: "Canadian legal AI for drafting",
    netdocs: "ndMail/ndThread (email/document focused)",
  },
  {
    feature: "Matter management",
    atticus: "Full matter lifecycle",
    netdocs: "Workspace-based matter folders",
  },
  {
    feature: "Limitation period alerts",
    atticus: "Ontario Limitations Act built in",
    netdocs: "Not included",
  },
  {
    feature: "Conflict checking",
    atticus: "Automated conflict search",
    netdocs: "Not included",
  },
  {
    feature: "Client intake",
    atticus: "Automated client intake portal",
    netdocs: "Not included",
  },
  {
    feature: "LSO compliance",
    atticus: "Built for LSO requirements",
    netdocs: "No LSO compliance features",
  },
  {
    feature: "Data residency",
    atticus: "Canadian servers",
    netdocs: "US data centres (AWS); Canada region optional at cost",
  },
  {
    feature: "Pricing (CAD)",
    atticus: "$149/lawyer/month (all-in)",
    netdocs: "USD pricing; additional tools required for full PM",
  },
  {
    feature: "Implementation",
    atticus: "Self-serve; ready in hours",
    netdocs: "Enterprise implementation; weeks to months",
  },
  {
    feature: "Platform scope",
    atticus: "Full practice management",
    netdocs: "Document management only",
  },
];

const reasons = [
  {
    title: "Full Practice Management, Not Just Document Storage",
    description:
      "NetDocuments is a leading enterprise document management platform. But Ontario lawyers also need trust accounting, billing, time tracking, limitation period alerts, and conflict checking. Atticus provides all of this. NetDocuments requires separate tools for everything beyond document storage.",
  },
  {
    title: "Ontario Trust Accounting Out of the Box",
    description:
      "NetDocuments has no trust accounting capabilities. Ontario lawyers need LSO-compliant trust ledgers, mixed trust accounts, and Annual Report data. Atticus includes all of this natively at no additional cost.",
  },
  {
    title: "AI Built for Canadian Legal Drafting",
    description:
      "NetDocuments&apos; AI features (ndThread, ndMail) focus on document organization and email management. Atticus AI is built for drafting Ontario-specific legal documents, summarizing files in Canadian legal context, and flagging LSO compliance issues.",
  },
  {
    title: "Self-Serve Deployment vs Enterprise Implementation",
    description:
      "NetDocuments implementations for law firms typically take weeks and require consultants. Atticus is designed for Ontario solo and small firms to deploy themselves in hours — no professional services required.",
  },
  {
    title: "Canadian Data Residency Standard",
    description:
      "NetDocuments runs on AWS with an optional Canada region that may carry additional cost. Atticus stores all client data on Canadian servers by default — supporting PIPEDA compliance and Law Society data guidance.",
  },
  {
    title: "Predictable CAD Pricing",
    description:
      "NetDocuments prices in USD and requires additional subscriptions for billing, time tracking, and matter management. Atticus is $149 CAD per lawyer per month — all features, no currency surprises.",
  },
];

export default function NetDocumentsAlternativePage() {
  return (
    <>
      <Script id="netdocuments-alternative-schema" type="application/ld+json">
        {schemaJson}
      </Script>

      <div className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-amber-400 text-slate-900 text-sm font-semibold px-4 py-1 rounded-full mb-6">
              NetDocuments Alternative
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              The NetDocuments Alternative Built for Ontario Lawyers
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              NetDocuments manages your documents — but Ontario lawyers also
              need trust accounting, billing, limitation period tracking, and
              LSO compliance. Atticus provides everything in one Canadian
              platform.
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
              Why Ontario Lawyers Choose Atticus Over NetDocuments
            </h2>
            <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
              NetDocuments is excellent for enterprise document management.
              Ontario solo and small firms need a complete practice management
              solution with Canadian compliance built in — not just a document
              repository.
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
              Atticus vs NetDocuments: Feature Comparison
            </h2>
            <p className="text-center text-slate-600 mb-12">
              See what Ontario lawyers get with Atticus vs what NetDocuments
              includes as a document management platform.
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
                      NetDocuments
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
                        {row.netdocs}
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
              Ready to Switch from NetDocuments?
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
                { href: "/clio-alternative", label: "Clio Alternative" },
                { href: "/leap-alternative", label: "LEAP Alternative" },
                { href: "/pclaw-alternative", label: "PCLaw Alternative" },
                { href: "/lexbe-alternative", label: "Lexbe Alternative" },
                { href: "/jarvis-legal-alternative", label: "Jarvis Legal Alternative" },
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
