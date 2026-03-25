import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Intapp Alternative for Ontario Lawyers | Atticus vs Intapp",
  description:
    "Looking for an Intapp alternative? Compare Atticus vs Intapp for Ontario law firms. Full practice management, AI document analysis, trust accounting, HST billing, and LSO compliance — built for Canadian law.",
  openGraph: {
    title: "Intapp Alternative for Ontario Lawyers | Atticus vs Intapp",
    description:
      "Why Ontario lawyers choose Atticus over Intapp. Atticus combines practice management with trust accounting and LSO compliance in one Canadian platform designed for solo and small firms.",
    url: "https://getatticus.ca/intapp-alternative",
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
  "description": "Atticus is the Intapp alternative that provides full practice management, Ontario trust accounting, HST billing, AI document analysis, and LSO compliance for Ontario solo and small law firms.",
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
  intapp: string;
};

const featureComparison: Feature[] = [
  {
    feature: "Document management",
    atticus: "AI-powered document analysis and storage",
    intapp: "Intapp Documents (enterprise DMS for large firms)",
  },
  {
    feature: "Ontario trust accounting",
    atticus: "Built-in, LSO compliant",
    intapp: "Not included in core platform",
  },
  {
    feature: "HST billing",
    atticus: "Native HST with CRA-compliant invoices",
    intapp: "Time and billing via Intapp Time/Billstream — complex enterprise setup",
  },
  {
    feature: "Time tracking",
    atticus: "Integrated time and billing",
    intapp: "Intapp Time (separate product; AI time capture for large firms)",
  },
  {
    feature: "AI capabilities",
    atticus: "Canadian legal AI for drafting and analysis",
    intapp: "Intapp AI — conflict, risk, and client intelligence for large firms",
  },
  {
    feature: "Conflict checking",
    atticus: "Automated conflict search built in",
    intapp: "Intapp Conflicts (enterprise conflict workflow — large firm focus)",
  },
  {
    feature: "Client intake",
    atticus: "Automated client intake portal",
    intapp: "Intapp Intake (enterprise intake workflow for large firms)",
  },
  {
    feature: "Limitation period alerts",
    atticus: "Ontario Limitations Act built in",
    intapp: "Not included",
  },
  {
    feature: "LSO compliance",
    atticus: "Built for LSO requirements",
    intapp: "No Ontario LSO compliance features",
  },
  {
    feature: "Target market",
    atticus: "Ontario solo and small law firms",
    intapp: "Large law firms (Am Law 200) and professional services firms",
  },
  {
    feature: "Data residency",
    atticus: "Canadian servers by default",
    intapp: "US-based cloud; Canadian hosting not standard",
  },
  {
    feature: "Pricing (CAD)",
    atticus: "$149/lawyer/month (all-in)",
    intapp: "Enterprise pricing in USD; per-module subscriptions; minimum seat requirements",
  },
  {
    feature: "Implementation",
    atticus: "Self-serve; ready in hours",
    intapp: "Enterprise implementation project; months to deploy",
  },
  {
    feature: "Platform scope",
    atticus: "Full integrated practice management",
    intapp: "Enterprise suite of separate modules (Documents, Time, Conflicts, Intake)",
  },
];

const reasons = [
  {
    title: "Built for Solo and Small Firms, Not Am Law 200",
    description:
      "Intapp is designed for large law firms and professional services enterprises. Its products — Intapp Documents, Intapp Time, Intapp Conflicts, and Intapp Intake — are modular enterprise tools that require significant IT infrastructure and implementation effort. Atticus is built specifically for Ontario solo and small firms that need everything working out of the box.",
  },
  {
    title: "Ontario Trust Accounting Included",
    description:
      "Intapp&apos;s core platform does not include trust accounting. Ontario lawyers need LSO-compliant trust ledgers, mixed trust accounts, and annual reporting capabilities. Atticus includes all of this natively, with no additional cost or integration required.",
  },
  {
    title: "All-in-One vs Multi-Module Enterprise Suite",
    description:
      "Intapp is a suite of separate products that must be purchased and integrated individually. A large firm deploying Intapp would need Documents, Time, Conflicts, and Intake separately. Atticus provides all of these functions in one integrated platform for a single monthly price.",
  },
  {
    title: "Canadian AI for Ontario Legal Practice",
    description:
      "Intapp AI focuses on enterprise conflict checking, client intelligence, and risk management for large firms. Atticus AI is built for Ontario-specific legal drafting, file summarization in Canadian legal context, and LSO compliance flagging — built for the work Ontario lawyers actually do every day.",
  },
  {
    title: "Canadian Data Residency Standard",
    description:
      "Intapp runs on US-based cloud infrastructure. Canadian hosting is not a standard offering. Atticus stores all client data on Canadian servers by default — supporting PIPEDA compliance and Law Society data guidance without additional configuration or cost.",
  },
  {
    title: "Predictable CAD Pricing for Ontario Firms",
    description:
      "Intapp prices in USD with enterprise minimums and per-module fees that add up quickly. A solo or small Ontario firm cannot deploy Intapp at any reasonable cost. Atticus is $149 CAD per lawyer per month — all features included, no enterprise contract required.",
  },
];

export default function IntappAlternativePage() {
  return (
    <>
      <Script id="intapp-alternative-schema" type="application/ld+json">
        {schemaJson}
      </Script>

      <div className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-amber-400 text-slate-900 text-sm font-semibold px-4 py-1 rounded-full mb-6">
              Intapp Alternative
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              The Intapp Alternative Built for Ontario Lawyers
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Intapp is built for Am Law 200 firms — not Ontario solo and small
              practices. Atticus provides full practice management, trust
              accounting, AI, and LSO compliance in one Canadian platform at a
              price Ontario firms can actually afford.
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
              Why Ontario Lawyers Choose Atticus Over Intapp
            </h2>
            <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
              Intapp is an enterprise suite for large law firms. Ontario solo and
              small firms need a complete, affordable practice management
              solution built for their scale — with Canadian compliance included.
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
              Atticus vs Intapp: Feature Comparison
            </h2>
            <p className="text-center text-slate-600 mb-12">
              See what Ontario lawyers get with Atticus vs the Intapp enterprise
              suite — designed for very different firm sizes.
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
                      Intapp
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
                        {row.intapp}
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
              Ready for a Simpler Alternative to Intapp?
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
                { href: "/imanage-alternative", label: "iManage Alternative" },
                { href: "/netdocuments-alternative", label: "NetDocuments Alternative" },
                { href: "/worldox-alternative", label: "Worldox Alternative" },
                { href: "/clio-alternative", label: "Clio Alternative" },
                { href: "/leap-alternative", label: "LEAP Alternative" },
                { href: "/pclaw-alternative", label: "PCLaw Alternative" },
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
