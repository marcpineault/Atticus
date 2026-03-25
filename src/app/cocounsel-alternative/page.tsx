import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CoCounsel Alternative for Ontario Lawyers | Atticus vs CoCounsel",
  description:
    "Looking for a CoCounsel alternative? Compare Atticus vs Thomson Reuters CoCounsel for Ontario law firms. Atticus combines Canadian legal AI with full practice management, trust accounting, HST billing, and LSO compliance — built for Ontario solo and small firms.",
  openGraph: {
    title: "CoCounsel Alternative for Ontario Lawyers | Atticus vs CoCounsel",
    description:
      "Why Ontario lawyers choose Atticus over CoCounsel. Atticus delivers Canadian legal AI plus full practice management in one LSO-compliant platform — not just a research add-on.",
    url: "https://getatticus.ca/cocounsel-alternative",
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
  "description": "Atticus is the CoCounsel alternative for Ontario lawyers that combines Canadian legal AI with full practice management, trust accounting, HST billing, and LSO compliance in one platform built for Ontario solo and small law firms.",
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
  cocounsel: string;
};

const featureComparison: Feature[] = [
  {
    feature: "Practice management",
    atticus: "Full integrated practice management",
    cocounsel: "AI research and drafting tool only; no practice management",
  },
  {
    feature: "Ontario trust accounting",
    atticus: "Built-in, LSO compliant",
    cocounsel: "No trust accounting functionality",
  },
  {
    feature: "HST billing",
    atticus: "Native HST with CRA-compliant invoices",
    cocounsel: "No billing or invoicing module",
  },
  {
    feature: "Time tracking",
    atticus: "Integrated time and billing",
    cocounsel: "No time tracking",
  },
  {
    feature: "AI legal work",
    atticus: "Canadian legal AI: document drafting, summarization, limitation period flagging, LSO compliance",
    cocounsel: "AI legal research and document review (Westlaw-integrated); strong US legal content",
  },
  {
    feature: "Canadian law coverage",
    atticus: "AI optimized for Ontario and Canadian law, LSO Rules of Professional Conduct",
    cocounsel: "Thomson Reuters Canadian content available but primary strength is US Westlaw corpus",
  },
  {
    feature: "Matter management",
    atticus: "Full matter lifecycle from intake to close",
    cocounsel: "No matter management; standalone AI add-on to Westlaw",
  },
  {
    feature: "Limitation period alerts",
    atticus: "Ontario Limitations Act built in",
    cocounsel: "Not included as a practice management feature",
  },
  {
    feature: "Conflict checking",
    atticus: "Automated conflict search",
    cocounsel: "Not included",
  },
  {
    feature: "LSO compliance",
    atticus: "Built for Ontario LSO requirements",
    cocounsel: "No Ontario-specific LSO compliance features",
  },
  {
    feature: "Target market",
    atticus: "Ontario solo and small law firms",
    cocounsel: "Westlaw subscribers; primarily large and mid-size firms; add-on product",
  },
  {
    feature: "Pricing (CAD)",
    atticus: "$149/lawyer/month (all-in, including AI)",
    cocounsel: "Add-on to Westlaw subscription; USD enterprise pricing on top of existing research subscription",
  },
  {
    feature: "Data residency",
    atticus: "Canadian servers by default",
    cocounsel: "Thomson Reuters infrastructure; US-based; Canadian data residency not standard",
  },
  {
    feature: "Deployment",
    atticus: "Self-serve; ready in hours",
    cocounsel: "Requires existing Westlaw subscription; Thomson Reuters sales engagement",
  },
];

const reasons = [
  {
    title: "CoCounsel is a Westlaw Add-On — Not a Practice Platform",
    description:
      "Thomson Reuters CoCounsel is an AI layer built on top of Westlaw for legal research, document review, and contract analysis. It requires an existing Westlaw subscription and adds USD enterprise pricing on top. Ontario solo and small firms still need a separate platform for billing, trust accounting, conflict checking, and matter management — CoCounsel provides none of these.",
  },
  {
    title: "Canadian AI, Not Westlaw-Centric Research",
    description:
      "CoCounsel&apos;s primary strength is its integration with the Westlaw corpus — which is US-dominated. Ontario lawyers need AI trained on Canadian case law, Ontario statutes (OBCA, Residential Tenancies Act, Limitations Act), and LSO professional conduct rules. Atticus AI is purpose-built for Ontario and Canadian legal practice.",
  },
  {
    title: "Ontario Trust Accounting Included — No Extra Subscription",
    description:
      "CoCounsel has no trust accounting functionality. For Ontario lawyers, LSO-compliant trust accounting is not optional. Atticus includes fully compliant trust ledgers, mixed trust management, and Law Society reporting as core features in the $149 CAD monthly price — not an add-on requiring a separate subscription.",
  },
  {
    title: "One Platform — Not Westlaw Plus CoCounsel Plus Practice Management",
    description:
      "Using CoCounsel means three subscriptions: Westlaw, CoCounsel, and a separate practice management platform. Three different data stores, three different logins, no integration between research, billing, and client files. Atticus delivers practice management, billing, trust accounting, and Canadian AI in one platform at one price.",
  },
  {
    title: "Canadian Data Residency as the Default",
    description:
      "Thomson Reuters infrastructure is US-based. CoCounsel&apos;s data residency follows Westlaw infrastructure — not Canadian by default. Atticus stores all client data on Canadian servers by default — meeting PIPEDA requirements and LSO data guidance without additional configuration.",
  },
  {
    title: "Affordable All-In CAD Pricing",
    description:
      "Adding CoCounsel to an existing Westlaw subscription adds significant USD cost on top of an already expensive research subscription. A solo Ontario practitioner faces enterprise pricing for both. Atticus is $149 CAD per lawyer per month — all features included, no separate research subscription required.",
  },
];

export default function CoCounselAlternativePage() {
  return (
    <>
      <Script id="cocounsel-alternative-schema" type="application/ld+json">
        {schemaJson}
      </Script>

      <div className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-amber-400 text-slate-900 text-sm font-semibold px-4 py-1 rounded-full mb-6">
              CoCounsel Alternative
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              The CoCounsel Alternative for Ontario Lawyers
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Thomson Reuters CoCounsel is a Westlaw add-on for US legal
              research — not a complete practice platform for Ontario. Atticus
              gives Ontario solo and small firms Canadian legal AI plus full
              practice management, trust accounting, and LSO compliance in one
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
              Why Ontario Lawyers Choose Atticus Over CoCounsel
            </h2>
            <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
              CoCounsel adds AI to a Westlaw research subscription — but Ontario
              solo and small firms need a complete practice platform with
              Canadian AI, trust accounting, and LSO compliance built in.
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
              Atticus vs Thomson Reuters CoCounsel: Feature Comparison
            </h2>
            <p className="text-center text-slate-600 mb-12">
              See what Ontario lawyers get with Atticus vs CoCounsel — a
              complete Canadian practice platform versus a Westlaw AI add-on.
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
                      Thomson Reuters CoCounsel
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
                        {row.cocounsel}
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
              Ready for Canadian AI Built Into a Complete Practice Platform?
            </h2>
            <p className="text-slate-600 mb-8">
              Ontario lawyers deserve AI trained on Canadian law, combined with
              trust accounting, billing, and LSO compliance — all in one
              platform without three separate subscriptions. Try Atticus free
              for 14 days.
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
                { href: "/casetext-alternative", label: "Casetext Alternative" },
                { href: "/thomson-reuters-elite-alternative", label: "Thomson Reuters Elite Alternative" },
                { href: "/clio-alternative", label: "Clio Alternative" },
                { href: "/ai-for-lawyers", label: "AI for Ontario Lawyers" },
                { href: "/lso-ai-guidance", label: "LSO AI Guidance" },
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
