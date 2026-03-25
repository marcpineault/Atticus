import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CloudLex Alternative for Ontario Lawyers | Atticus vs CloudLex",
  description:
    "Looking for a CloudLex alternative? See why Ontario personal injury and litigation lawyers choose Atticus over CloudLex. Built for Canadian law, not US markets.",
  openGraph: {
    title: "CloudLex Alternative for Ontario Lawyers | Atticus vs CloudLex",
    description:
      "Compare Atticus vs CloudLex for Ontario personal injury and litigation firms. Canadian trust accounting, HST billing, and LSO compliance built in.",
    url: "https://getatticus.ca/cloudlex-alternative",
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
  "description": "Atticus is the CloudLex alternative built specifically for Ontario personal injury and litigation lawyers, with Canadian trust accounting, HST billing, and LSO compliance.",
  "url": "https://getatticus.ca",
  "featureList": [
    "Ontario trust accounting (Law Society compliant)",
    "HST billing and reporting",
    "Contingency fee tracking",
    "Disbursement management",
    "Settlement distribution ledgers",
    "AI-powered document drafting",
    "Canadian court forms library",
    "LSO compliance built in"
  ]
}`;

type Feature = {
  feature: string;
  atticus: string;
  cloudlex: string;
};

const featureComparison: Feature[] = [
  {
    feature: "Ontario trust accounting",
    atticus: "Built-in, LSO compliant",
    cloudlex: "US IOLTA focused, not Ontario-compliant",
  },
  {
    feature: "HST billing",
    atticus: "Native HST support",
    cloudlex: "US tax framework only",
  },
  {
    feature: "Contingency fee tracking",
    atticus: "Full contingency fee management",
    cloudlex: "Yes (US-centric)",
  },
  {
    feature: "Disbursement management",
    atticus: "Full disbursement ledger",
    cloudlex: "Basic expense tracking",
  },
  {
    feature: "Settlement distribution",
    atticus: "Automated settlement ledgers",
    cloudlex: "Manual calculation required",
  },
  {
    feature: "Canadian court forms",
    atticus: "Ontario court forms library",
    cloudlex: "US court forms only",
  },
  {
    feature: "AI document drafting",
    atticus: "Canadian legal AI built in",
    cloudlex: "Limited AI features",
  },
  {
    feature: "LSO compliance",
    atticus: "Built for LSO requirements",
    cloudlex: "No LSO compliance features",
  },
  {
    feature: "Limitation period alerts",
    atticus: "Ontario Limitations Act 2002",
    cloudlex: "US state limitation rules",
  },
  {
    feature: "Medical-legal tracking",
    atticus: "PI-specific med-legal workflow",
    cloudlex: "PI workflow (US-focused)",
  },
  {
    feature: "Client portal",
    atticus: "Included",
    cloudlex: "Add-on cost",
  },
  {
    feature: "Pricing (CAD)",
    atticus: "$149/lawyer/month",
    cloudlex: "USD pricing, $250+ CAD equivalent",
  },
  {
    feature: "Data residency",
    atticus: "Canadian servers",
    cloudlex: "US data centres",
  },
  {
    feature: "Canadian support",
    atticus: "Ontario-based support team",
    cloudlex: "US support hours",
  },
];

const reasons = [
  {
    title: "Built for Ontario PI Firms",
    description:
      "CloudLex was designed for US personal injury firms. Atticus is built from the ground up for Ontario litigation — contingency fees, Ontario Rules of Civil Procedure, and LSO trust requirements are native features, not afterthoughts.",
  },
  {
    title: "Canadian Trust Accounting",
    description:
      "Ontario lawyers must comply with the Law Society&apos;s trust accounting rules. Atticus handles trust ledgers, mixed trust accounts, and the Law Society Annual Report automatically. CloudLex uses US IOLTA rules that don&apos;t translate to Ontario practice.",
  },
  {
    title: "HST Billing Built In",
    description:
      "Billing in Ontario means HST on fees, zero-rating on disbursements, and CRA-compliant invoicing. Atticus handles all of this natively. CloudLex was built for US state sales tax regimes.",
  },
  {
    title: "Settlement Distribution Ledgers",
    description:
      "Ontario PI lawyers need accurate settlement distribution statements showing proceeds, disbursements, fees, and client net. Atticus automates this workflow. CloudLex requires manual calculation spreadsheets for Canadian settlements.",
  },
  {
    title: "Ontario Limitation Period Alerts",
    description:
      "Missing a limitation period is catastrophic. Atticus tracks Ontario&apos;s two-year basic limitation under the Limitations Act, 2002, plus motor vehicle accident discoverability rules. CloudLex applies US state limitation rules that differ from Ontario law.",
  },
  {
    title: "Canadian Data Residency",
    description:
      "Law Society of Ontario guidelines strongly favour keeping client data in Canada. Atticus stores all data on Canadian servers. CloudLex uses US data centres, creating potential jurisdictional concerns for Ontario clients.",
  },
];

export default function CloudLexAlternativePage() {
  return (
    <>
      <Script id="cloudlex-alternative-schema" type="application/ld+json">
        {schemaJson}
      </Script>

      <div className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-amber-400 text-slate-900 text-sm font-semibold px-4 py-1 rounded-full mb-6">
              CloudLex Alternative
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              The CloudLex Alternative Built for Ontario Lawyers
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              CloudLex was designed for US personal injury firms. Atticus is
              built for Ontario — trust accounting, HST billing, and LSO
              compliance included from day one.
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
              Why Ontario PI Lawyers Switch from CloudLex to Atticus
            </h2>
            <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
              CloudLex is built for American contingency fee firms. Ontario
              personal injury practice has fundamentally different rules.
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
              Atticus vs CloudLex: Full Feature Comparison
            </h2>
            <p className="text-center text-slate-600 mb-12">
              See exactly what Ontario lawyers get with Atticus that CloudLex
              cannot provide.
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
                      CloudLex
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
                        {row.cloudlex}
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
              Simple Canadian Pricing
            </h2>
            <p className="text-slate-600 mb-12">
              CloudLex charges in USD, which means you pay more every time the
              Canadian dollar weakens. Atticus is priced in CAD — no currency
              surprises.
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
                  <li>✓ Canadian data residency</li>
                  <li>✓ Unlimited matters</li>
                  <li>✓ AI document drafting</li>
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
                  CloudLex
                </div>
                <div className="text-5xl font-bold text-slate-900 mb-2">
                  $250+
                </div>
                <div className="text-slate-500 mb-6">CAD equivalent (USD)</div>
                <ul className="text-left space-y-2 text-sm text-slate-600 mb-8">
                  <li>✗ No Ontario trust accounting</li>
                  <li>✗ No HST billing</li>
                  <li>✗ US data centres</li>
                  <li>✗ US court forms only</li>
                  <li>✗ Currency risk</li>
                </ul>
                <div className="block border border-slate-300 text-slate-500 font-semibold px-6 py-3 rounded-lg text-center">
                  Not Built for Canada
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 bg-amber-50 border-t border-amber-100">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Ready to Switch from CloudLex?
            </h2>
            <p className="text-slate-600 mb-8">
              Ontario personal injury lawyers deserve software built for Ontario
              law. Try Atticus free for 14 days — no credit card required.
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
                  href: "/practicepanther-alternative",
                  label: "PracticePanther Alternative",
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
