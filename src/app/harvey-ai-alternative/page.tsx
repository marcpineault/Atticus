import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Harvey AI Alternative for Ontario Lawyers | Atticus vs Harvey AI",
  description:
    "Looking for a Harvey AI alternative? Compare Atticus vs Harvey for Ontario law firms. Atticus combines Canadian legal AI with full practice management, trust accounting, HST billing, and LSO compliance — built for Ontario solo and small firms, not BigLaw.",
  openGraph: {
    title: "Harvey AI Alternative for Ontario Lawyers | Atticus vs Harvey AI",
    description:
      "Why Ontario lawyers choose Atticus over Harvey AI. Atticus delivers Canadian legal AI plus full practice management in one LSO-compliant platform.",
    url: "https://getatticus.ca/harvey-ai-alternative",
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
  "description": "Atticus is the Harvey AI alternative for Ontario lawyers that combines Canadian legal AI with full practice management, trust accounting, HST billing, and LSO compliance in one platform built for Ontario solo and small law firms.",
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
  harvey: string;
};

const featureComparison: Feature[] = [
  {
    feature: "Practice management",
    atticus: "Full integrated practice management",
    harvey: "AI research and drafting tool only; no practice management",
  },
  {
    feature: "Ontario trust accounting",
    atticus: "Built-in, LSO compliant",
    harvey: "No trust accounting functionality",
  },
  {
    feature: "HST billing",
    atticus: "Native HST with CRA-compliant invoices",
    harvey: "No billing or invoicing module",
  },
  {
    feature: "Time tracking",
    atticus: "Integrated time and billing",
    harvey: "No time tracking functionality",
  },
  {
    feature: "AI legal work",
    atticus: "Canadian legal AI: document drafting, file summarization, limitation period flagging, LSO compliance",
    harvey: "Large language model for legal research, contract review, and drafting — US/global law focus",
  },
  {
    feature: "Canadian law training",
    atticus: "AI trained and optimized for Ontario and Canadian law",
    harvey: "Primarily trained on US legal data; Canadian legal context limited",
  },
  {
    feature: "Matter management",
    atticus: "Full matter lifecycle from intake to close",
    harvey: "No matter management; standalone AI tool",
  },
  {
    feature: "Limitation period alerts",
    atticus: "Ontario Limitations Act built in",
    harvey: "Not included",
  },
  {
    feature: "Conflict checking",
    atticus: "Automated conflict search",
    harvey: "Not included",
  },
  {
    feature: "LSO compliance",
    atticus: "Built for Ontario LSO requirements",
    harvey: "No Ontario LSO-specific compliance features",
  },
  {
    feature: "Target market",
    atticus: "Ontario solo and small law firms",
    harvey: "Large law firms and enterprise legal departments (AmLaw); not designed for small firms",
  },
  {
    feature: "Pricing (CAD)",
    atticus: "$149/lawyer/month (all-in, including AI)",
    harvey: "Enterprise pricing in USD; not publicly disclosed; designed for large firm budgets",
  },
  {
    feature: "Data residency",
    atticus: "Canadian servers by default",
    harvey: "US-based infrastructure; Canadian data residency not standard",
  },
  {
    feature: "Deployment",
    atticus: "Self-serve; ready in hours",
    harvey: "Enterprise sales and onboarding process; not self-serve",
  },
];

const reasons = [
  {
    title: "Harvey AI is a Research Tool — Not a Practice Platform",
    description:
      "Harvey AI is a large language model for legal research, drafting, and contract review. It does not include practice management, billing, trust accounting, conflict checking, or client intake. Ontario solo and small firms need a complete platform — not a standalone AI tool that requires a separate practice management subscription alongside it.",
  },
  {
    title: "Canadian AI, Not US Legal Training",
    description:
      "Harvey AI is primarily trained on US legal data, case law, and regulatory frameworks. Ontario lawyers need AI that understands the Ontario Limitations Act, LSO Rules of Professional Conduct, PPSA, OBCA, Residential Tenancies Act, and provincial court procedure — not US federal law. Atticus AI is optimized specifically for Ontario and Canadian legal practice.",
  },
  {
    title: "Ontario Trust Accounting Included",
    description:
      "Harvey AI has no trust accounting functionality. For Ontario lawyers, LSO-compliant trust accounting is not optional — it is a core professional obligation. Atticus includes fully compliant trust ledgers, mixed trust management, and Law Society reporting as core features, not add-ons.",
  },
  {
    title: "All-In Pricing in CAD — No Enterprise Contract Required",
    description:
      "Harvey AI targets large law firms with enterprise pricing in USD that is not publicly disclosed. A solo Ontario practitioner cannot practically deploy Harvey at any reasonable cost. Atticus is $149 CAD per lawyer per month — all features included, no enterprise sales process, no implementation project.",
  },
  {
    title: "Canadian Data Residency as the Default",
    description:
      "Harvey AI runs on US infrastructure. LSO guidance on cloud computing and data storage requires Ontario lawyers to consider where client data is stored. Atticus stores all client data on Canadian servers by default — meeting PIPEDA and Law Society data guidance without additional configuration.",
  },
  {
    title: "One Platform — Not Two Subscriptions",
    description:
      "Using Harvey alongside a separate practice management platform means two enterprise subscriptions, no data integration, and no unified workflow. Atticus delivers practice management, billing, trust accounting, and Canadian AI in one platform — one price, one login, one place for all client data.",
  },
];

export default function HarveyAiAlternativePage() {
  return (
    <>
      <Script id="harvey-ai-alternative-schema" type="application/ld+json">
        {schemaJson}
      </Script>

      <div className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-amber-400 text-slate-900 text-sm font-semibold px-4 py-1 rounded-full mb-6">
              Harvey AI Alternative
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              The Harvey AI Alternative for Ontario Lawyers
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Harvey AI is an enterprise research tool trained on US law — not a
              practice management platform built for Ontario. Atticus gives Ontario
              solo and small firms Canadian legal AI plus full practice management,
              trust accounting, and LSO compliance in one platform.
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
              Why Ontario Lawyers Choose Atticus Over Harvey AI
            </h2>
            <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
              Harvey AI is built for BigLaw research teams with enterprise budgets.
              Ontario solo and small firms need affordable, complete practice
              management with Canadian legal AI and LSO compliance built in.
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
              Atticus vs Harvey AI: Feature Comparison
            </h2>
            <p className="text-center text-slate-600 mb-12">
              See what Ontario lawyers get with Atticus vs Harvey AI — a complete
              Canadian practice platform versus a US enterprise research tool.
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
                      Harvey AI
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
                        {row.harvey}
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
              Ready for Canadian AI Built for Ontario Practice — Not BigLaw?
            </h2>
            <p className="text-slate-600 mb-8">
              Ontario lawyers deserve AI trained on Canadian law, combined with
              trust accounting, billing, and LSO compliance — all in one
              affordable platform. Try Atticus free for 14 days.
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
                { href: "/casetext-alternative", label: "Casetext Alternative" },
                { href: "/opus-alternative", label: "Opus 2 Alternative" },
                { href: "/intapp-alternative", label: "Intapp Alternative" },
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
