import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "LawPay Alternative for Ontario Lawyers | Atticus vs LawPay",
  description:
    "Looking for a LawPay alternative? Compare Atticus vs LawPay for Ontario law firms. Atticus includes trust-compliant payments, full practice management, AI document analysis, HST billing, and LSO compliance — built for Canadian law.",
  openGraph: {
    title: "LawPay Alternative for Ontario Lawyers | Atticus vs LawPay",
    description:
      "Why Ontario lawyers choose Atticus over LawPay. Atticus includes integrated payment processing plus full practice management, trust accounting, and LSO compliance in one Canadian platform.",
    url: "https://getatticus.ca/lawpay-alternative",
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
  "description": "Atticus is the LawPay alternative that provides integrated payment processing plus full practice management, Ontario trust accounting, HST billing, AI document analysis, and LSO compliance for Ontario law firms.",
  "url": "https://getatticus.ca",
  "featureList": [
    "Trust-compliant payment processing",
    "Ontario trust accounting (Law Society compliant)",
    "HST billing and CRA-compliant invoicing",
    "AI-powered document analysis",
    "Matter and time management",
    "Limitation period tracking",
    "Client intake automation",
    "LSO compliance built in"
  ]
}`;

type Feature = {
  feature: string;
  atticus: string;
  lawpay: string;
};

const featureComparison: Feature[] = [
  {
    feature: "Payment processing",
    atticus: "Integrated trust-compliant payment processing built in",
    lawpay: "Dedicated legal payment processor (credit, debit, eCheck)",
  },
  {
    feature: "Ontario trust accounting",
    atticus: "Built-in, LSO compliant",
    lawpay: "Not included — payment only; no accounting",
  },
  {
    feature: "HST billing",
    atticus: "Native HST with CRA-compliant invoices",
    lawpay: "No invoicing or billing features",
  },
  {
    feature: "Time tracking",
    atticus: "Integrated time and billing",
    lawpay: "Not included",
  },
  {
    feature: "Matter management",
    atticus: "Full matter lifecycle management",
    lawpay: "Not included",
  },
  {
    feature: "AI document intelligence",
    atticus: "Canadian legal AI for drafting and analysis",
    lawpay: "Not included",
  },
  {
    feature: "Limitation period alerts",
    atticus: "Ontario Limitations Act built in",
    lawpay: "Not included",
  },
  {
    feature: "Conflict checking",
    atticus: "Automated conflict search",
    lawpay: "Not included",
  },
  {
    feature: "Client intake",
    atticus: "Automated client intake portal",
    lawpay: "Not included",
  },
  {
    feature: "LSO compliance",
    atticus: "Built for LSO requirements",
    lawpay: "No LSO compliance features",
  },
  {
    feature: "Canadian support",
    atticus: "Built and supported in Canada",
    lawpay: "US-based product; Canadian legal payment rules may vary",
  },
  {
    feature: "Pricing (CAD)",
    atticus: "$149/lawyer/month (all-in, including payments)",
    lawpay: "Per-transaction fees + monthly subscription; USD pricing",
  },
  {
    feature: "Platform scope",
    atticus: "Full practice management including payments",
    lawpay: "Payment processing only",
  },
  {
    feature: "Practice management integration",
    atticus: "Native — no integration needed",
    lawpay: "Requires integration with separate practice management software",
  },
];

const reasons = [
  {
    title: "Payments Plus Full Practice Management",
    description:
      "LawPay is a dedicated legal payment processor — it does one thing well. Ontario lawyers also need trust accounting, billing, time tracking, matter management, limitation period alerts, and conflict checking. Atticus provides all of this, including integrated payment processing, in one platform.",
  },
  {
    title: "LSO-Compliant Trust Accounting Built In",
    description:
      "LawPay processes payments but has no trust accounting capabilities. Ontario lawyers need LSO-compliant trust ledgers, mixed trust accounts, and annual reporting. Atticus includes all of this natively — payments are automatically allocated to the correct trust or general ledger account.",
  },
  {
    title: "No Integration Required",
    description:
      "Using LawPay requires integration with a separate practice management system. Atticus includes payment processing natively — no integration, no data gaps, no separate monthly subscription for payments.",
  },
  {
    title: "Canadian Legal Payment Rules",
    description:
      "Ontario&apos;s Law Society has specific rules about how client payments must be handled — particularly for trust funds. Atticus is built specifically for LSO requirements. LawPay is a US product that may require additional configuration to comply with Ontario trust payment rules.",
  },
  {
    title: "HST Invoicing and CRA Compliance",
    description:
      "LawPay has no invoicing features. Ontario lawyers must issue CRA-compliant invoices showing HST number, HST amount, and other required fields. Atticus generates compliant invoices and tracks HST automatically — with no separate invoicing software required.",
  },
  {
    title: "All-Inclusive CAD Pricing",
    description:
      "LawPay charges per-transaction fees plus a monthly subscription in USD. The total cost of LawPay plus a separate practice management system often exceeds $200-$400 CAD per lawyer per month. Atticus is $149 CAD per lawyer per month — all features included, payments included.",
  },
];

export default function LawPayAlternativePage() {
  return (
    <>
      <Script id="lawpay-alternative-schema" type="application/ld+json">
        {schemaJson}
      </Script>

      <div className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-amber-400 text-slate-900 text-sm font-semibold px-4 py-1 rounded-full mb-6">
              LawPay Alternative
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              The LawPay Alternative Built for Ontario Lawyers
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              LawPay processes payments — but Ontario lawyers also need trust
              accounting, billing, matter management, and LSO compliance.
              Atticus provides payments and full practice management in one
              Canadian platform.
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
              Why Ontario Lawyers Choose Atticus Over LawPay
            </h2>
            <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
              LawPay is a specialized legal payment processor. Ontario lawyers
              need more than payments — they need integrated trust accounting,
              billing, and practice management built for Canadian law.
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
              Atticus vs LawPay: Feature Comparison
            </h2>
            <p className="text-center text-slate-600 mb-12">
              See what Ontario lawyers get with Atticus vs LawPay as a
              payment-only solution.
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
                      LawPay
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
                        {row.lawpay}
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
              Ready to Replace LawPay with One Complete Platform?
            </h2>
            <p className="text-slate-600 mb-8">
              Ontario lawyers deserve one platform that handles payments,
              billing, trust accounting, and LSO compliance.
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
                { href: "/cosmolex-alternative", label: "CosmoLex Alternative" },
                { href: "/pclaw-alternative", label: "PCLaw Alternative" },
                { href: "/leap-alternative", label: "LEAP Alternative" },
                { href: "/mycase-alternative", label: "MyCase Alternative" },
                { href: "/bill4time-alternative", label: "Bill4Time Alternative" },
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
