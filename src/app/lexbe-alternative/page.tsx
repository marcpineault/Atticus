import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Lexbe Alternative for Ontario Lawyers | Atticus vs Lexbe",
  description:
    "Looking for a Lexbe alternative? Compare Atticus vs Lexbe for Ontario law firms. Full practice management, trust accounting, and AI drafting built for Canadian law.",
  openGraph: {
    title: "Lexbe Alternative for Ontario Lawyers | Atticus vs Lexbe",
    description:
      "Why Ontario lawyers choose Atticus over Lexbe. Atticus combines eDiscovery-grade document management with full practice management, trust accounting, and LSO compliance.",
    url: "https://getatticus.ca/lexbe-alternative",
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
  "description": "Atticus is the Lexbe alternative that provides full practice management with AI document analysis, Ontario trust accounting, HST billing, and LSO compliance for Ontario lawyers.",
  "url": "https://getatticus.ca",
  "featureList": [
    "AI-powered document analysis and drafting",
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
  lexbe: string;
};

const featureComparison: Feature[] = [
  {
    feature: "Document management",
    atticus: "AI-powered document analysis",
    lexbe: "eDiscovery document review platform",
  },
  {
    feature: "Ontario trust accounting",
    atticus: "Built-in, LSO compliant",
    lexbe: "Not included (litigation tool only)",
  },
  {
    feature: "HST billing",
    atticus: "Native HST with CRA-compliant invoices",
    lexbe: "No billing functionality",
  },
  {
    feature: "Matter management",
    atticus: "Full matter lifecycle",
    lexbe: "Limited to document/case matters",
  },
  {
    feature: "Time tracking",
    atticus: "Integrated time and billing",
    lexbe: "Not included",
  },
  {
    feature: "AI document drafting",
    atticus: "Canadian legal AI for drafting",
    lexbe: "Document review AI (not drafting)",
  },
  {
    feature: "Limitation period alerts",
    atticus: "Ontario Limitations Act built in",
    lexbe: "Not included",
  },
  {
    feature: "Conflict checking",
    atticus: "Automated conflict search",
    lexbe: "Not included",
  },
  {
    feature: "Client intake",
    atticus: "Automated client intake portal",
    lexbe: "Not included",
  },
  {
    feature: "eDiscovery",
    atticus: "Document analysis with AI",
    lexbe: "Full eDiscovery review workflow",
  },
  {
    feature: "Data residency",
    atticus: "Canadian servers",
    lexbe: "US data centres",
  },
  {
    feature: "Pricing (CAD)",
    atticus: "$149/lawyer/month (all-in)",
    lexbe: "USD pricing; separate billing tool required",
  },
  {
    feature: "LSO compliance",
    atticus: "Built for LSO requirements",
    lexbe: "No LSO compliance features",
  },
  {
    feature: "Platform scope",
    atticus: "Full practice management",
    lexbe: "Document review / eDiscovery only",
  },
];

const reasons = [
  {
    title: "Full Practice Management, Not Just Documents",
    description:
      "Lexbe is an eDiscovery and document review platform. Ontario lawyers also need trust accounting, billing, time tracking, and conflict checking. Atticus provides all of this in one platform — Lexbe requires separate tools for everything beyond document review.",
  },
  {
    title: "Ontario Trust Accounting Built In",
    description:
      "Lexbe has no trust accounting capabilities. Ontario lawyers must comply with Law Society trust accounting requirements — LSO-compliant trust ledgers, mixed trust accounts, and Annual Report data. Atticus includes all of this natively.",
  },
  {
    title: "Canadian Legal AI for Drafting",
    description:
      "Lexbe&apos;s AI is designed for document review and coding in litigation. Atticus AI is designed for drafting Ontario-specific legal documents, summarizing client files in Canadian legal context, and flagging LSO practice management issues.",
  },
  {
    title: "HST Billing Included",
    description:
      "Lexbe has no billing functionality. Ontario lawyers need HST on fees, zero-rating on disbursements, and CRA-compliant invoice formatting. Atticus handles all of this natively at no extra cost.",
  },
  {
    title: "Canadian Data Residency",
    description:
      "Ontario lawyers handling sensitive client data benefit from Canadian data residency under PIPEDA and Law Society guidance. Atticus stores all data on Canadian servers. Lexbe uses US infrastructure.",
  },
  {
    title: "One Price, All Features",
    description:
      "Running an Ontario practice on Lexbe requires Lexbe plus separate billing, trust accounting, and matter management tools — multiplying costs and data silos. Atticus provides everything for $149 CAD per lawyer per month.",
  },
];

export default function LexbeAlternativePage() {
  return (
    <>
      <Script id="lexbe-alternative-schema" type="application/ld+json">
        {schemaJson}
      </Script>

      <div className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-amber-400 text-slate-900 text-sm font-semibold px-4 py-1 rounded-full mb-6">
              Lexbe Alternative
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              The Lexbe Alternative Built for Ontario Lawyers
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Lexbe handles document review. But Ontario lawyers also need trust
              accounting, billing, limitation period tracking, and LSO
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
              Why Ontario Lawyers Choose Atticus Over Lexbe
            </h2>
            <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
              Lexbe is powerful for document review. Ontario lawyers need a
              complete practice management solution with Canadian compliance
              built in.
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
              Atticus vs Lexbe: Feature Comparison
            </h2>
            <p className="text-center text-slate-600 mb-12">
              See what Ontario lawyers get with Atticus vs what Lexbe includes
              as an eDiscovery-focused platform.
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
                      Lexbe
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
                        {row.lexbe}
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
              Ready to Switch from Lexbe?
            </h2>
            <p className="text-slate-600 mb-8">
              Ontario lawyers need more than document review. Get full practice
              management — trust accounting, billing, AI drafting, and LSO
              compliance — in one Canadian platform. Try free for 14 days.
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
                { href: "/cosmolex-alternative", label: "CosmoLex Alternative" },
                { href: "/jarvis-legal-alternative", label: "Jarvis Legal Alternative" },
                { href: "/mycase-alternative", label: "MyCase Alternative" },
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
