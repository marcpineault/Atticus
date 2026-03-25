import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Assembly NEOS Alternative for Ontario Lawyers | Atticus vs NEOS",
  description:
    "Looking for an Assembly NEOS alternative? Compare Atticus vs Assembly NEOS for Ontario law firms. Canadian trust accounting, HST billing, and AI document drafting built in.",
  openGraph: {
    title: "Assembly NEOS Alternative for Ontario Lawyers | Atticus vs NEOS",
    description:
      "Why Ontario lawyers choose Atticus over Assembly NEOS. Built for Canadian law: LSO-compliant trust accounting, HST billing, and Ontario court forms.",
    url: "https://getatticus.ca/assembly-neos-alternative",
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
  "description": "Atticus is the Assembly NEOS alternative built specifically for Ontario solo and small law firms, with Canadian trust accounting, HST billing, and LSO compliance.",
  "url": "https://getatticus.ca",
  "featureList": [
    "Ontario trust accounting (Law Society compliant)",
    "HST billing and reporting",
    "AI-powered document drafting",
    "Limitation period tracking",
    "Canadian court forms library",
    "Matter and time management",
    "Client intake automation",
    "LSO compliance built in"
  ]
}`;

type Feature = {
  feature: string;
  atticus: string;
  neos: string;
};

const featureComparison: Feature[] = [
  {
    feature: "Ontario trust accounting",
    atticus: "Built-in, LSO compliant",
    neos: "General trust module, not Canada-specific",
  },
  {
    feature: "HST billing",
    atticus: "Native HST support with CRA-compliant invoices",
    neos: "Requires manual configuration",
  },
  {
    feature: "AI document drafting",
    atticus: "Canadian legal AI built in",
    neos: "Document assembly templates",
  },
  {
    feature: "Limitation period alerts",
    atticus: "Ontario Limitations Act 2002 built in",
    neos: "Generic deadline tracking only",
  },
  {
    feature: "Ontario court forms",
    atticus: "Pre-built Ontario forms library",
    neos: "Document assembly (custom setup required)",
  },
  {
    feature: "Matter management",
    atticus: "Full matter lifecycle management",
    neos: "Matter management included",
  },
  {
    feature: "Client intake",
    atticus: "Automated client intake portal",
    neos: "Client portal add-on",
  },
  {
    feature: "Time tracking",
    atticus: "Integrated time tracking",
    neos: "Time and billing included",
  },
  {
    feature: "Document management",
    atticus: "AI-powered document analysis",
    neos: "Document storage and assembly",
  },
  {
    feature: "Conflict checking",
    atticus: "Automated conflict search",
    neos: "Conflict checking included",
  },
  {
    feature: "Data residency",
    atticus: "Canadian servers",
    neos: "US/international data centres",
  },
  {
    feature: "Pricing (CAD)",
    atticus: "$149/lawyer/month",
    neos: "USD pricing, higher CAD equivalent",
  },
  {
    feature: "Setup complexity",
    atticus: "Ready in hours, no consultant needed",
    neos: "Implementation requires setup time",
  },
  {
    feature: "Canadian support",
    atticus: "Ontario-based support team",
    neos: "US/international support",
  },
];

const reasons = [
  {
    title: "Built for Ontario Law, Not Generic Firms",
    description:
      "Assembly NEOS is a capable international platform, but it requires configuration to work for Ontario practices. Atticus ships with Ontario Limitations Act deadlines, LSO trust accounting rules, and HST billing pre-configured — no consultant required.",
  },
  {
    title: "AI That Understands Canadian Law",
    description:
      "Atticus includes AI trained on Canadian legal concepts — drafting Ontario-specific clauses, summarizing documents in the context of Ontario law, and flagging issues relevant to LSO practice requirements. NEOS offers document assembly without Canadian legal AI.",
  },
  {
    title: "LSO-Compliant Trust Accounting",
    description:
      "The Law Society of Ontario has specific trust accounting requirements that differ from other jurisdictions. Atticus handles mixed trust accounts, trust ledgers, and LSO Annual Report data automatically. NEOS requires manual configuration to approximate Ontario requirements.",
  },
  {
    title: "Simpler Pricing in Canadian Dollars",
    description:
      "Assembly NEOS prices in USD, exposing Ontario firms to currency fluctuation. Atticus charges a flat $149 CAD per lawyer per month — transparent, predictable, and fully Canadian.",
  },
  {
    title: "Deploy in Hours, Not Weeks",
    description:
      "Assembly NEOS implementations often require consultant-led setup. Atticus is designed for Ontario solo and small firms to go live themselves within a day — no implementation fees, no professional services required.",
  },
  {
    title: "Canadian Data Residency",
    description:
      "Ontario lawyers handling sensitive client data benefit from Canadian data residency. Atticus stores all data on Canadian servers, supporting compliance with PIPEDA and Law Society privacy guidance. NEOS uses international infrastructure.",
  },
];

export default function AssemblyNeosAlternativePage() {
  return (
    <>
      <Script id="assembly-neos-alternative-schema" type="application/ld+json">
        {schemaJson}
      </Script>

      <div className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-amber-400 text-slate-900 text-sm font-semibold px-4 py-1 rounded-full mb-6">
              Assembly NEOS Alternative
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              The Assembly NEOS Alternative Built for Ontario Lawyers
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Assembly NEOS is a capable platform, but it takes months and a
              consultant to configure for Ontario law. Atticus ships with LSO
              trust accounting, HST billing, and Canadian legal AI ready on day
              one.
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
              Why Ontario Lawyers Choose Atticus Over Assembly NEOS
            </h2>
            <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
              NEOS is powerful but built for enterprise firms globally. Ontario
              solo and small firms need something built for their practice from
              day one.
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
              Atticus vs Assembly NEOS: Feature Comparison
            </h2>
            <p className="text-center text-slate-600 mb-12">
              See what Ontario lawyers get out of the box with Atticus vs what
              NEOS requires configuration to achieve.
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
                      Assembly NEOS
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
                        {row.neos}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Predictable Canadian Pricing
            </h2>
            <p className="text-slate-600 mb-12">
              Atticus is $149 CAD per lawyer per month — all features included,
              no implementation fees, no consultant costs.
            </p>
            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              <div className="bg-slate-900 text-white rounded-2xl p-8">
                <div className="text-amber-400 font-semibold mb-2">Atticus</div>
                <div className="text-5xl font-bold mb-2">$149</div>
                <div className="text-slate-400 mb-6">
                  CAD per lawyer per month
                </div>
                <ul className="text-left space-y-2 text-sm text-slate-300 mb-8">
                  <li>✓ Ontario trust accounting</li>
                  <li>✓ HST billing included</li>
                  <li>✓ AI document drafting</li>
                  <li>✓ No implementation fees</li>
                  <li>✓ Canadian data residency</li>
                </ul>
                <Link
                  href="/sign-up"
                  className="block bg-amber-400 text-slate-900 font-semibold px-6 py-3 rounded-lg hover:bg-amber-300 transition-colors"
                >
                  Start Free Trial
                </Link>
              </div>
              <div className="bg-white border-2 border-slate-200 rounded-2xl p-8">
                <div className="text-slate-500 font-semibold mb-2">
                  Assembly NEOS
                </div>
                <div className="text-5xl font-bold text-slate-900 mb-2">
                  $$$
                </div>
                <div className="text-slate-500 mb-6">USD + implementation costs</div>
                <ul className="text-left space-y-2 text-sm text-slate-600 mb-8">
                  <li>✗ Currency risk (USD pricing)</li>
                  <li>✗ Configuration required</li>
                  <li>✗ Implementation fees</li>
                  <li>✗ Weeks to go live</li>
                  <li>✗ US data centres</li>
                </ul>
                <div className="block border border-slate-300 text-slate-500 font-semibold px-6 py-3 rounded-lg text-center">
                  Enterprise Complexity
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 bg-amber-50 border-t border-amber-100">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Ready to Switch from Assembly NEOS?
            </h2>
            <p className="text-slate-600 mb-8">
              Ontario lawyers deserve practice management built for Ontario law
              — not a global platform that needs months of customization. Try
              Atticus free for 14 days.
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
                { href: "/pclaw-alternative", label: "PCLaw Alternative" },
                { href: "/leap-alternative", label: "LEAP Alternative" },
                {
                  href: "/cosmolex-alternative",
                  label: "CosmoLex Alternative",
                },
                {
                  href: "/cloudlex-alternative",
                  label: "CloudLex Alternative",
                },
                {
                  href: "/mycase-alternative",
                  label: "MyCase Alternative",
                },
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
