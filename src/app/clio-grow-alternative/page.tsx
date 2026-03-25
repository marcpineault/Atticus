import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Clio Grow Alternative for Ontario Lawyers | Atticus vs Clio Grow",
  description:
    "Looking for a Clio Grow alternative? Compare Atticus vs Clio Grow for Ontario law firms. Full practice management, trust accounting, and AI drafting — all in one Canadian platform.",
  openGraph: {
    title: "Clio Grow Alternative for Ontario Lawyers | Atticus vs Clio Grow",
    description:
      "Why Ontario lawyers choose Atticus over Clio Grow. Atticus combines intake, matter management, billing, trust accounting, and AI in one LSO-compliant Canadian platform.",
    url: "https://getatticus.ca/clio-grow-alternative",
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
  "description": "Atticus is the Clio Grow alternative that combines client intake, full practice management, trust accounting, billing, and AI document drafting in one Ontario-ready platform.",
  "url": "https://getatticus.ca",
  "featureList": [
    "Automated client intake portal",
    "Ontario trust accounting (Law Society compliant)",
    "HST billing and CRA-compliant invoicing",
    "AI-powered document drafting",
    "Matter and time management",
    "Limitation period tracking",
    "Conflict checking",
    "LSO compliance built in"
  ]
}`;

type Feature = {
  feature: string;
  atticus: string;
  clioGrow: string;
};

const featureComparison: Feature[] = [
  {
    feature: "Client intake automation",
    atticus: "Built-in intake portal",
    clioGrow: "Core feature (intake only platform)",
  },
  {
    feature: "Matter management",
    atticus: "Full matter lifecycle",
    clioGrow: "Requires separate Clio Manage subscription",
  },
  {
    feature: "Trust accounting",
    atticus: "LSO-compliant trust accounting",
    clioGrow: "Not included (Clio Manage only)",
  },
  {
    feature: "HST billing",
    atticus: "Native HST with CRA-compliant invoices",
    clioGrow: "Not included (Clio Manage only)",
  },
  {
    feature: "Time tracking",
    atticus: "Integrated time tracking",
    clioGrow: "Not included (Clio Manage only)",
  },
  {
    feature: "AI document drafting",
    atticus: "Canadian legal AI built in",
    clioGrow: "No AI drafting",
  },
  {
    feature: "Conflict checking",
    atticus: "Automated conflict search",
    clioGrow: "Not included",
  },
  {
    feature: "Limitation period alerts",
    atticus: "Ontario Limitations Act built in",
    clioGrow: "Not included",
  },
  {
    feature: "Client portal",
    atticus: "Included",
    clioGrow: "Clio for Clients add-on",
  },
  {
    feature: "CRM features",
    atticus: "Intake + matter conversion",
    clioGrow: "Full CRM (lead tracking, pipelines)",
  },
  {
    feature: "Total price (CAD)",
    atticus: "$149/lawyer/month (all-in)",
    clioGrow: "$71+ USD/month (Grow alone, CAD higher)",
  },
  {
    feature: "Platform needed",
    atticus: "One platform for everything",
    clioGrow: "Clio Grow + Clio Manage = two subscriptions",
  },
  {
    feature: "Data residency",
    atticus: "Canadian servers",
    clioGrow: "US data centres",
  },
  {
    feature: "Canadian support",
    atticus: "Ontario-based support team",
    clioGrow: "US/Canadian support",
  },
];

const reasons = [
  {
    title: "One Platform vs Two Subscriptions",
    description:
      "Clio Grow handles intake and CRM. Clio Manage handles practice management. To run a complete firm on Clio, you need both — at a combined price significantly higher than Atticus. Atticus provides intake, matter management, billing, trust accounting, and AI in one subscription.",
  },
  {
    title: "Trust Accounting Not in Clio Grow",
    description:
      "Clio Grow is an intake and client relationship management tool — it does not include trust accounting. Ontario lawyers who need LSO-compliant trust accounting require Clio Manage. Atticus includes trust accounting from the start, at no additional cost.",
  },
  {
    title: "Canadian Legal AI Built In",
    description:
      "Atticus includes AI trained on Canadian legal content — drafting Ontario documents, summarizing Canadian statutes, flagging LSO compliance issues. Clio Grow has no AI document drafting capability, and Clio Manage&apos;s AI features require separate subscriptions.",
  },
  {
    title: "Ontario Limitation Period Tracking",
    description:
      "Atticus tracks Ontario&apos;s two-year basic limitation and practice-area specific rules under the Limitations Act, 2002. Clio Grow, as an intake-only platform, has no limitation period tracking — critical for Ontario practice.",
  },
  {
    title: "Single Canadian Price",
    description:
      "Clio Grow is priced in USD and requires Clio Manage for full functionality — meaning two USD subscriptions. Atticus is $149 CAD per lawyer per month, all-in, with no additional modules needed.",
  },
  {
    title: "Built for Ontario from Day One",
    description:
      "Atticus was designed around Ontario&apos;s specific requirements: Law Society trust accounting rules, HST billing, Ontario court forms, and Canadian limitation periods. These are native features, not bolt-ons requiring configuration.",
  },
];

export default function ClioGrowAlternativePage() {
  return (
    <>
      <Script id="clio-grow-alternative-schema" type="application/ld+json">
        {schemaJson}
      </Script>

      <div className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-amber-400 text-slate-900 text-sm font-semibold px-4 py-1 rounded-full mb-6">
              Clio Grow Alternative
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              The Clio Grow Alternative That Does Everything
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Clio Grow handles intake. But Ontario lawyers also need trust
              accounting, billing, AI drafting, and limitation period tracking.
              Atticus includes everything — in one Canadian platform.
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
              Why Ontario Lawyers Choose Atticus Over Clio Grow
            </h2>
            <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
              Clio Grow is a great intake tool — but Ontario lawyers need a
              complete practice management solution. Atticus delivers everything
              in one subscription.
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
              Atticus vs Clio Grow: Feature Comparison
            </h2>
            <p className="text-center text-slate-600 mb-12">
              See what Ontario lawyers get with Atticus vs what Clio Grow
              includes (and doesn&apos;t include).
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
                      Clio Grow
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
                        {row.clioGrow}
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
              One Price vs Two Subscriptions
            </h2>
            <p className="text-slate-600 mb-12">
              Running a full Ontario practice on Clio requires Clio Grow AND
              Clio Manage. Atticus gives you everything for $149 CAD per lawyer
              per month.
            </p>
            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              <div className="bg-slate-900 text-white rounded-2xl p-8">
                <div className="text-amber-400 font-semibold mb-2">Atticus</div>
                <div className="text-5xl font-bold mb-2">$149</div>
                <div className="text-slate-400 mb-6">
                  CAD per lawyer per month
                </div>
                <ul className="text-left space-y-2 text-sm text-slate-300 mb-8">
                  <li>✓ Client intake included</li>
                  <li>✓ Ontario trust accounting</li>
                  <li>✓ HST billing included</li>
                  <li>✓ AI document drafting</li>
                  <li>✓ One platform, one price</li>
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
                  Clio Grow + Manage
                </div>
                <div className="text-5xl font-bold text-slate-900 mb-2">
                  2x USD
                </div>
                <div className="text-slate-500 mb-6">Two separate subscriptions</div>
                <ul className="text-left space-y-2 text-sm text-slate-600 mb-8">
                  <li>~ Clio Grow = $71+ USD/month</li>
                  <li>~ Clio Manage = $99+ USD/month</li>
                  <li>~ Total = $170+ USD/month per lawyer</li>
                  <li>✗ Currency risk (USD)</li>
                  <li>✗ US data centres</li>
                </ul>
                <div className="block border border-slate-300 text-slate-500 font-semibold px-6 py-3 rounded-lg text-center">
                  Double the Cost
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 bg-amber-50 border-t border-amber-100">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Ready to Replace Clio Grow?
            </h2>
            <p className="text-slate-600 mb-8">
              Get everything you need for your Ontario practice — intake, matter
              management, billing, trust accounting, and AI — in one platform
              for $149 CAD. Try free for 14 days.
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
                { href: "/cosmolex-alternative", label: "CosmoLex Alternative" },
                { href: "/mycase-alternative", label: "MyCase Alternative" },
                { href: "/practicepanther-alternative", label: "PracticePanther Alternative" },
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
