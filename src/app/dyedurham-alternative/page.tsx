import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dye & Durham Alternative for Ontario Lawyers | Atticus vs Do Process / Unity",
  description:
    "Looking for a Dye & Durham / Do Process alternative? Compare Atticus vs Dye & Durham Unity for Ontario law firms. Atticus combines full practice management, LSO-compliant trust accounting, Canadian legal AI, and HST billing — built for Ontario solo and small law firms beyond real estate closings.",
  openGraph: {
    title: "Dye & Durham Alternative for Ontario Lawyers | Atticus vs Do Process / Unity",
    description:
      "Why Ontario lawyers choose Atticus alongside or instead of Dye & Durham. Atticus delivers complete practice management, LSO-compliant trust accounting, and Canadian legal AI in one platform — not just real estate closings.",
    url: "https://getatticus.ca/dyedurham-alternative",
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
  "description": "Atticus is the Dye & Durham / Do Process alternative for Ontario lawyers that combines Canadian legal AI with LSO-compliant trust accounting, HST billing, matter management, and AI document analysis in one platform built for Ontario solo and small law firms.",
  "url": "https://getatticus.ca",
  "featureList": [
    "AI-powered document analysis and management",
    "Ontario trust accounting (Law Society By-Law 9 compliant)",
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
  dyedurham: string;
};

const featureComparison: Feature[] = [
  {
    feature: "Practice management",
    atticus: "Full integrated practice management for all practice areas",
    dyedurham: "Transaction-focused (real estate, corporate, estate); limited general practice management",
  },
  {
    feature: "Ontario trust accounting",
    atticus: "Built-in, LSO By-Law 9 compliant; mixed trust, monthly reconciliation",
    dyedurham: "Real estate trust accounting in Do Process; general trust account management limited",
  },
  {
    feature: "HST billing",
    atticus: "Native HST with CRA-compliant invoices built in",
    dyedurham: "Transaction disbursement billing; general invoicing not core product focus",
  },
  {
    feature: "Time tracking",
    atticus: "Integrated time and billing; AI-assisted time capture",
    dyedurham: "Limited time tracking; focused on transaction workflow, not hourly billing",
  },
  {
    feature: "AI legal work",
    atticus: "Canadian legal AI: document drafting, summarization, limitation period flagging, LSO compliance, chat assistant",
    dyedurham: "No Canadian legal AI features; data and workflow platform",
  },
  {
    feature: "Matter management",
    atticus: "Full matter lifecycle from intake to close, all practice areas",
    dyedurham: "Matter management scoped to real estate, corporate, wills/estates transactions",
  },
  {
    feature: "Document management",
    atticus: "AI document analysis, summarization, and entity extraction; semantic search across all files",
    dyedurham: "Document generation from precedents; no AI document intelligence",
  },
  {
    feature: "Limitation period alerts",
    atticus: "Ontario Limitations Act 2002 built in; AI extracts dates from documents",
    dyedurham: "Transaction closing dates tracked; no general limitation period management",
  },
  {
    feature: "Conflict checking",
    atticus: "Automated AI-assisted conflict search",
    dyedurham: "No dedicated conflict checking module",
  },
  {
    feature: "LSO compliance",
    atticus: "Built for Ontario LSO requirements; Canadian data residency; LSO AI guidance considered",
    dyedurham: "Ontario real estate and corporate transaction workflows; LSO compliance partial",
  },
  {
    feature: "AI assistant",
    atticus: "Atticus chat: answers questions about your practice, clients, deadlines, and trust balances",
    dyedurham: "No conversational AI assistant",
  },
  {
    feature: "Pricing (CAD)",
    atticus: "$149/lawyer/month (all-in, including AI)",
    dyedurham: "Per-transaction and per-seat pricing; module and data subscription costs additional",
  },
  {
    feature: "Data residency",
    atticus: "Canadian servers by default",
    dyedurham: "Canadian company; data hosting varies by product and subscription tier",
  },
  {
    feature: "Practice scope",
    atticus: "All Ontario practice areas: litigation, corporate, real estate, family, criminal, immigration",
    dyedurham: "Real estate closings, corporate filings, wills/estates — transaction workflow focus",
  },
];

const reasons = [
  {
    title: "Full Practice Management Beyond Real Estate Closings",
    description:
      "Dye & Durham (Do Process / Unity) excels at real estate closing workflows, corporate filings, and wills/estates transactions. It does not provide general practice management — time tracking, billing, matter management across practice areas, or litigation support. Atticus covers the full practice lifecycle for Ontario lawyers across all practice areas.",
  },
  {
    title: "Canadian Legal AI Included",
    description:
      "Dye & Durham is a data and transaction workflow platform — it does not include Canadian legal AI. Atticus includes AI document analysis, an AI practice assistant that knows your files and deadlines, and Canadian legal context (Ontario Limitations Act, LSO trust accounting rules) as part of the core $149 CAD monthly price.",
  },
  {
    title: "LSO Trust Accounting for All Clients",
    description:
      "Atticus is built for Ontario LSO By-Law 9 trust accounting requirements across all client matters — not just real estate trust funds. Mixed trust accounts, monthly reconciliation, trust ledgers per client, and reporting formats familiar to Ontario lawyers. No configuration required.",
  },
  {
    title: "Time Tracking and Hourly Billing",
    description:
      "Dye & Durham is designed around transaction-based billing, not hourly time tracking. Atticus provides integrated time tracking and billing — capturing billable hours against matters, generating HST-compliant invoices, and managing unbilled time across your practice.",
  },
  {
    title: "Limitation Period Detection from Documents",
    description:
      "Atticus AI reads uploaded documents and automatically identifies and flags Ontario limitation periods — service dates, accident dates, breach dates — under the Limitations Act 2002. Dye & Durham tracks transaction closing dates but has no AI-assisted limitation period detection.",
  },
  {
    title: "One All-In Platform at a Transparent Price",
    description:
      "Dye & Durham pricing involves per-transaction fees, per-seat licensing, and data subscription costs across multiple products. Atticus is $149 CAD per lawyer per month — complete practice management, LSO-compliant trust accounting, AI document analysis, and the Atticus chat assistant all included.",
  },
];

export default function DyeDurhamAlternativePage() {
  return (
    <>
      <Script id="dyedurham-alternative-schema" type="application/ld+json">
        {schemaJson}
      </Script>

      <div className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-amber-400 text-slate-900 text-sm font-semibold px-4 py-1 rounded-full mb-6">
              Dye &amp; Durham Alternative
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              The Dye &amp; Durham Alternative for Ontario Lawyers
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Dye &amp; Durham (Do Process / Unity) is a transaction workflow
              platform for real estate closings, corporate filings, and
              wills/estates. Atticus is a complete practice management platform
              for Ontario lawyers — with Canadian legal AI, LSO-compliant trust
              accounting, and full matter management across all practice areas.
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
              Why Ontario Lawyers Choose Atticus Alongside or Instead of Dye &amp; Durham
            </h2>
            <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
              Dye &amp; Durham is built for real estate, corporate, and wills/estates
              transaction workflows — not full practice management. Atticus covers
              the complete practice lifecycle for Ontario lawyers with Canadian legal
              AI and LSO-compliant trust accounting built in.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reasons.map((reason, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                  <div className="w-10 h-10 bg-amber-400 rounded-lg flex items-center justify-center text-slate-900 font-bold mb-4">
                    {i + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{reason.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-20 px-6 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-900 mb-4">
              Atticus vs Dye &amp; Durham: Feature Comparison
            </h2>
            <p className="text-center text-slate-600 mb-12">
              See how Atticus compares to Dye &amp; Durham / Do Process for Ontario solo and
              small law firms — full practice management with Canadian AI vs real estate
              and corporate transaction workflow software.
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
              <table className="w-full bg-white">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left px-6 py-4 font-semibold">Feature</th>
                    <th className="text-center px-6 py-4 font-semibold text-amber-400">Atticus</th>
                    <th className="text-center px-6 py-4 font-semibold">Dye &amp; Durham</th>
                  </tr>
                </thead>
                <tbody>
                  {featureComparison.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-6 py-4 text-slate-700 font-medium">{row.feature}</td>
                      <td className="px-6 py-4 text-center text-slate-700">
                        <span className="inline-flex items-center gap-1">
                          <span className="text-green-600 font-bold">✓</span>
                          <span className="text-sm">{row.atticus}</span>
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center text-slate-500 text-sm">{row.dyedurham}</td>
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
              Ready for Complete Ontario Practice Management?
            </h2>
            <p className="text-slate-600 mb-8">
              Trust accounting built for LSO By-Law 9. HST billing. AI document analysis. Limitation
              period tracking. Conflict checking. All practice areas. All in one platform at $149 CAD
              per lawyer per month. Try Atticus free for 14 days.
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
            <h3 className="text-lg font-semibold text-slate-900 mb-6">Compare More Alternatives</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { href: "/pclaw-alternative", label: "PCLaw Alternative" },
                { href: "/cosmolex-alternative", label: "CosmoLex Alternative" },
                { href: "/encompass-alternative", label: "Encompass Alternative" },
                { href: "/esilaw-alternative", label: "ESILaw Alternative" },
                { href: "/clio-alternative", label: "Clio Alternative" },
                { href: "/trust-accounting-ontario", label: "Ontario Trust Accounting" },
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
