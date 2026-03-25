import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jarvis Legal Alternative for Ontario Lawyers | Atticus vs Jarvis",
  description:
    "Looking for a Jarvis Legal alternative? See why Ontario lawyers choose Atticus over Jarvis Legal. Canadian trust accounting, HST billing, and AI drafting built for Ontario law.",
  openGraph: {
    title: "Jarvis Legal Alternative for Ontario Lawyers | Atticus vs Jarvis",
    description:
      "Compare Atticus vs Jarvis Legal for Ontario law firms. LSO-compliant trust accounting, HST billing, and AI document drafting — ready on day one.",
    url: "https://getatticus.ca/jarvis-legal-alternative",
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
  "description": "Atticus is the Jarvis Legal alternative built for Ontario solo and small law firms, with Canadian trust accounting, HST billing, and LSO compliance included from day one.",
  "url": "https://getatticus.ca",
  "featureList": [
    "Ontario trust accounting (Law Society compliant)",
    "HST billing and CRA-compliant invoicing",
    "AI-powered document drafting",
    "Limitation period tracking (Ontario Limitations Act)",
    "Canadian court forms library",
    "Client intake automation",
    "Matter and time management",
    "LSO compliance built in"
  ]
}`;

type Feature = {
  feature: string;
  atticus: string;
  jarvis: string;
};

const featureComparison: Feature[] = [
  {
    feature: "Ontario trust accounting",
    atticus: "Built-in, LSO compliant",
    jarvis: "General accounting module",
  },
  {
    feature: "HST billing",
    atticus: "Native HST with CRA-compliant invoices",
    jarvis: "Tax billing requires configuration",
  },
  {
    feature: "AI document drafting",
    atticus: "Canadian legal AI built in",
    jarvis: "AI-powered research and drafting",
  },
  {
    feature: "Limitation period alerts",
    atticus: "Ontario Limitations Act 2002",
    jarvis: "General deadline tracking",
  },
  {
    feature: "Ontario court forms",
    atticus: "Pre-built Ontario forms library",
    jarvis: "Document automation available",
  },
  {
    feature: "Matter management",
    atticus: "Full matter lifecycle",
    jarvis: "Matter management included",
  },
  {
    feature: "Time tracking",
    atticus: "Integrated time and billing",
    jarvis: "Time tracking included",
  },
  {
    feature: "Client intake",
    atticus: "Automated intake portal",
    jarvis: "Client intake features",
  },
  {
    feature: "LSO compliance",
    atticus: "Built for LSO requirements",
    jarvis: "Not Canada-specific",
  },
  {
    feature: "Conflict checking",
    atticus: "Automated conflict search",
    jarvis: "Conflict checking available",
  },
  {
    feature: "Data residency",
    atticus: "Canadian servers",
    jarvis: "US/international infrastructure",
  },
  {
    feature: "Pricing (CAD)",
    atticus: "$149/lawyer/month",
    jarvis: "USD pricing, higher CAD equivalent",
  },
  {
    feature: "Canadian legal AI",
    atticus: "Trained on Canadian law",
    jarvis: "General legal AI (US-centric)",
  },
  {
    feature: "Canadian support",
    atticus: "Ontario-based support",
    jarvis: "International support team",
  },
];

const reasons = [
  {
    title: "Ontario Trust Accounting From Day One",
    description:
      "Jarvis Legal offers AI-powered research and drafting, but Ontario trust accounting — the Law Society&apos;s most scrutinized compliance requirement — requires configuration and workarounds. Atticus ships with LSO-compliant trust ledgers, mixed trust accounts, and Annual Report data built in.",
  },
  {
    title: "Canadian Legal AI, Not US-Focused AI",
    description:
      "Both platforms use AI, but the difference matters for Ontario lawyers. Atticus AI is trained and tuned for Canadian legal concepts — Ontario statutes, LSO rules, and PIPEDA. Jarvis Legal&apos;s AI was built primarily for US common law, which can produce inaccurate suggestions in Canadian contexts.",
  },
  {
    title: "HST Billing Without Configuration",
    description:
      "Ontario billing requires HST on fees, zero-rating on disbursements, and CRA-compliant invoice formatting. Atticus handles all of this natively. Jarvis Legal requires manual tax setup to approximate Canadian billing requirements.",
  },
  {
    title: "Ontario Limitation Periods Built In",
    description:
      "Atticus tracks Ontario&apos;s two-year basic limitation, the ultimate 15-year period, and practice-area-specific rules (motor vehicle accidents, construction liens, etc.) automatically. Missing a limitation period is a negligence risk that generic deadline tracking can&apos;t fully address.",
  },
  {
    title: "Predictable CAD Pricing",
    description:
      "Jarvis Legal prices in USD, meaning Ontario firms pay more whenever the Canadian dollar weakens. Atticus charges $149 CAD per lawyer per month — fully transparent, no currency surprises.",
  },
  {
    title: "Canadian Data Residency",
    description:
      "Ontario lawyers have privacy obligations under PIPEDA and Law Society guidelines that favour keeping client data in Canada. Atticus stores everything on Canadian servers. Jarvis Legal uses international infrastructure.",
  },
];

export default function JarvisLegalAlternativePage() {
  return (
    <>
      <Script id="jarvis-legal-alternative-schema" type="application/ld+json">
        {schemaJson}
      </Script>

      <div className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-amber-400 text-slate-900 text-sm font-semibold px-4 py-1 rounded-full mb-6">
              Jarvis Legal Alternative
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              The Jarvis Legal Alternative Built for Ontario Lawyers
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Jarvis Legal brings AI to legal research and drafting, but it
              wasn&apos;t built for Ontario trust accounting, HST billing, or LSO
              compliance. Atticus was.
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
              Why Ontario Lawyers Choose Atticus Over Jarvis Legal
            </h2>
            <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
              AI features are only valuable if they understand Canadian law.
              Atticus combines Canadian legal AI with Ontario-ready trust
              accounting and compliance.
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
              Atticus vs Jarvis Legal: Feature Comparison
            </h2>
            <p className="text-center text-slate-600 mb-12">
              See what Ontario lawyers get built-in with Atticus vs what Jarvis
              Legal requires additional setup to achieve.
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
                      Jarvis Legal
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
                        {row.jarvis}
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
              $149 CAD per lawyer per month. All features. No implementation
              fees. No currency risk.
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
                  <li>✓ Canadian legal AI</li>
                  <li>✓ Canadian data residency</li>
                  <li>✓ No setup fees</li>
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
                  Jarvis Legal
                </div>
                <div className="text-5xl font-bold text-slate-900 mb-2">
                  USD
                </div>
                <div className="text-slate-500 mb-6">Currency risk for CAD firms</div>
                <ul className="text-left space-y-2 text-sm text-slate-600 mb-8">
                  <li>✗ No Ontario trust accounting</li>
                  <li>✗ No HST billing</li>
                  <li>✗ US-focused AI</li>
                  <li>✗ US data centres</li>
                  <li>✗ Currency fluctuation</li>
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
              Ready to Switch from Jarvis Legal?
            </h2>
            <p className="text-slate-600 mb-8">
              Ontario lawyers deserve AI that understands Canadian law — plus
              the trust accounting, HST billing, and LSO compliance features
              that Jarvis Legal doesn&apos;t include. Try Atticus free for 14 days.
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
                  href: "/cloudlex-alternative",
                  label: "CloudLex Alternative",
                },
                {
                  href: "/assembly-neos-alternative",
                  label: "Assembly NEOS Alternative",
                },
                {
                  href: "/cosmolex-alternative",
                  label: "CosmoLex Alternative",
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
