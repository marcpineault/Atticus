import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Encompass Alternative for Ontario Lawyers | Atticus vs Encompass Legal Accounting",
  description:
    "Looking for an Encompass alternative? Compare Atticus vs Encompass for Ontario law firms. Atticus combines Canadian legal AI with full practice management, trust accounting compliant with LSO By-Law 9, HST billing, and Canadian AI — built for Ontario solo and small law firms.",
  openGraph: {
    title: "Encompass Alternative for Ontario Lawyers | Atticus vs Encompass Legal Accounting",
    description:
      "Why Ontario lawyers choose Atticus over Encompass. Atticus delivers complete practice management, LSO-compliant trust accounting, and Canadian legal AI in one platform.",
    url: "https://getatticus.ca/encompass-alternative",
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
  "description": "Atticus is the Encompass alternative for Ontario lawyers that combines Canadian legal AI with LSO-compliant trust accounting, HST billing, matter management, and AI document analysis in one platform built for Ontario solo and small law firms.",
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
  encompass: string;
};

const featureComparison: Feature[] = [
  {
    feature: "Practice management",
    atticus: "Full integrated practice management",
    encompass: "Legal accounting and billing system; practice management modules add-on",
  },
  {
    feature: "Ontario trust accounting",
    atticus: "Built-in, LSO By-Law 9 compliant; mixed trust, monthly reconciliation",
    encompass: "Trust accounting features; configuration required for Ontario LSO compliance",
  },
  {
    feature: "HST billing",
    atticus: "Native HST with CRA-compliant invoices built in",
    encompass: "Billing and invoicing with tax configuration",
  },
  {
    feature: "Time tracking",
    atticus: "Integrated time and billing; AI-assisted time capture",
    encompass: "Time recording and billing integrated with accounting",
  },
  {
    feature: "AI legal work",
    atticus: "Canadian legal AI: document drafting, summarization, limitation period flagging, LSO compliance, chat assistant",
    encompass: "No Canadian legal AI features",
  },
  {
    feature: "Matter management",
    atticus: "Full matter lifecycle from intake to close",
    encompass: "Matter file management integrated with billing; less comprehensive practice lifecycle features",
  },
  {
    feature: "Document management",
    atticus: "AI document analysis, summarization, and entity extraction; semantic search across all files",
    encompass: "Document management module; no AI document intelligence",
  },
  {
    feature: "Limitation period alerts",
    atticus: "Ontario Limitations Act 2002 built in; AI extracts dates from documents",
    encompass: "Deadline management module; manual entry required",
  },
  {
    feature: "Conflict checking",
    atticus: "Automated AI-assisted conflict search",
    encompass: "Basic conflict check module",
  },
  {
    feature: "LSO compliance",
    atticus: "Built for Ontario LSO requirements; Canadian data residency; LSO AI guidance considered",
    encompass: "General legal accounting; Ontario-specific LSO compliance requires configuration",
  },
  {
    feature: "AI assistant",
    atticus: "Atticus chat: answers questions about your practice, clients, deadlines, and trust balances",
    encompass: "No conversational AI assistant",
  },
  {
    feature: "Pricing (CAD)",
    atticus: "$149/lawyer/month (all-in, including AI)",
    encompass: "Per-seat pricing; modules priced separately; implementation and training costs additional",
  },
  {
    feature: "Data residency",
    atticus: "Canadian servers by default",
    encompass: "Hosted options vary; Canadian hosting may require specific configuration",
  },
  {
    feature: "Deployment",
    atticus: "Self-serve; ready in hours; no implementation project",
    encompass: "Implementation project required; data migration and training needed",
  },
];

const reasons = [
  {
    title: "Canadian Legal AI Included — Not Just Accounting",
    description:
      "Encompass is a legal accounting and billing platform — it does not include Canadian legal AI. Atticus includes AI document analysis, an AI practice assistant that knows your files and deadlines, and Canadian legal context (Ontario Limitations Act, LSO trust accounting rules, LSO AI guidance) as part of the core $149 CAD monthly price.",
  },
  {
    title: "LSO Trust Accounting Built for Ontario — Not Configured",
    description:
      "Atticus is built from the ground up for Ontario LSO By-Law 9 trust accounting requirements: mixed trust accounts, monthly reconciliation, trust ledgers per client, and reporting formats familiar to Ontario lawyers. No configuration project required to meet LSO trust accounting standards.",
  },
  {
    title: "AI-Assisted Conflict Checking and Document Analysis",
    description:
      "Atticus AI automatically analyzes uploaded documents, extracts names, dates, and parties, and flags potential conflicts across your client and matter database. Encompass requires manual conflict check processes without AI-assisted entity extraction.",
  },
  {
    title: "Limitation Period Detection from Documents",
    description:
      "Atticus AI reads uploaded documents and automatically identifies and flags Ontario limitation periods — service dates, accident dates, breach dates — under the Limitations Act 2002. Encompass requires manual deadline entry without AI-assisted date extraction.",
  },
  {
    title: "Canadian Data Residency as the Default",
    description:
      "Atticus stores all client data on Canadian servers by default — aligned with Law Society of Ontario guidance on cloud storage of client data. This is the default configuration, not an optional add-on.",
  },
  {
    title: "One Affordable All-In Platform",
    description:
      "Encompass pricing involves per-seat licensing with additional modules and implementation costs. Atticus is $149 CAD per lawyer per month — complete practice management, LSO-compliant trust accounting, AI document analysis, and the Atticus chat assistant all included.",
  },
];

export default function EncompassAlternativePage() {
  return (
    <>
      <Script id="encompass-alternative-schema" type="application/ld+json">
        {schemaJson}
      </Script>

      <div className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-amber-400 text-slate-900 text-sm font-semibold px-4 py-1 rounded-full mb-6">
              Encompass Alternative
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              The Encompass Alternative for Ontario Lawyers
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Encompass is a legal accounting platform that requires configuration
              and implementation for Ontario-specific compliance. Atticus is built
              from the ground up for Ontario LSO requirements — with Canadian legal
              AI included in every plan.
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
              Why Ontario Lawyers Choose Atticus Over Encompass
            </h2>
            <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
              Atticus is built for Ontario LSO compliance from day one — with Canadian legal AI,
              trust accounting that matches LSO By-Law 9 requirements, and no implementation
              project required.
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
              Atticus vs Encompass: Feature Comparison
            </h2>
            <p className="text-center text-slate-600 mb-12">
              See how Atticus compares to Encompass for Ontario solo and small law firms — Canadian
              legal AI and LSO-native trust accounting vs a legal accounting system requiring
              Ontario-specific configuration.
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
              <table className="w-full bg-white">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left px-6 py-4 font-semibold">Feature</th>
                    <th className="text-center px-6 py-4 font-semibold text-amber-400">Atticus</th>
                    <th className="text-center px-6 py-4 font-semibold">Encompass</th>
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
                      <td className="px-6 py-4 text-center text-slate-500 text-sm">{row.encompass}</td>
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
              Ready for Ontario-Native Practice Management?
            </h2>
            <p className="text-slate-600 mb-8">
              Trust accounting built for LSO By-Law 9. HST billing. AI document analysis. Limitation
              period tracking. Conflict checking. All in one platform at $149 CAD per lawyer per month.
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
            <h3 className="text-lg font-semibold text-slate-900 mb-6">Compare More Alternatives</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { href: "/pclaw-alternative", label: "PCLaw Alternative" },
                { href: "/cosmolex-alternative", label: "CosmoLex Alternative" },
                { href: "/esilaw-alternative", label: "ESILaw Alternative" },
                { href: "/soluno-alternative", label: "Soluno Alternative" },
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
