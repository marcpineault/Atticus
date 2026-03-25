import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "LegalMaster Alternative for Ontario Lawyers | Atticus vs LegalMaster",
  description:
    "Looking for a LegalMaster alternative? Compare Atticus vs LegalMaster for Ontario law firms. Atticus combines full practice management, Canadian legal AI, LSO-compliant trust accounting, and HST billing — built for Ontario solo and small law firms.",
  openGraph: {
    title: "LegalMaster Alternative for Ontario Lawyers | Atticus vs LegalMaster",
    description:
      "Why Ontario lawyers choose Atticus over LegalMaster. Atticus delivers complete Ontario practice management, LSO-compliant trust accounting, and Canadian legal AI at $149 CAD/lawyer/month.",
    url: "https://getatticus.ca/legalmaster-alternative",
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
  "description": "Atticus is the LegalMaster alternative for Ontario lawyers — Canadian legal AI, LSO-compliant trust accounting, HST billing, full practice management, and AI document analysis at $149 CAD per lawyer per month.",
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
  legalmaster: string;
};

const featureComparison: Feature[] = [
  {
    feature: "Practice management",
    atticus: "Full integrated practice management for all Ontario practice areas",
    legalmaster: "UK-based legal accounting and practice management software — not built for Ontario LSO requirements",
  },
  {
    feature: "Ontario trust accounting",
    atticus: "Built-in, LSO By-Law 9 compliant; mixed trust, monthly reconciliation",
    legalmaster: "UK-specific client account and trust accounting; not LSO By-Law 9 compliant for Ontario",
  },
  {
    feature: "HST billing",
    atticus: "Native HST with CRA-compliant invoices built in",
    legalmaster: "UK VAT billing; Ontario HST and CRA compliance not built in",
  },
  {
    feature: "Time tracking",
    atticus: "Integrated time and billing; AI-assisted time capture",
    legalmaster: "Time recording available; not integrated with Ontario billing standards",
  },
  {
    feature: "AI legal work",
    atticus: "Canadian legal AI: document analysis, entity extraction, limitation period flagging, semantic search",
    legalmaster: "No built-in Canadian legal AI features",
  },
  {
    feature: "Matter management",
    atticus: "Full matter lifecycle from intake to close for all Ontario practice areas",
    legalmaster: "Matter management built for UK legal market and procedures",
  },
  {
    feature: "Canadian / Ontario context",
    atticus: "Built for Ontario law: Limitations Act 2002, LSO By-Law 9 trust accounting, Ontario court procedures",
    legalmaster: "UK platform — not built for Ontario legal market or LSO compliance",
  },
  {
    feature: "Limitation period alerts",
    atticus: "Ontario Limitations Act 2002 built in; AI extracts dates from documents",
    legalmaster: "No Ontario Limitations Act 2002 tracking or Canadian deadline intelligence",
  },
  {
    feature: "Conflict checking",
    atticus: "Automated AI-assisted conflict search",
    legalmaster: "Conflict checking built for UK law firm requirements",
  },
  {
    feature: "LSO compliance",
    atticus: "Built for Ontario LSO requirements; Canadian data residency; LSO AI guidance considered",
    legalmaster: "UK Solicitors Regulation Authority compliance focus; no Ontario LSO features",
  },
  {
    feature: "Platform type",
    atticus: "Full Ontario law firm practice management platform with AI",
    legalmaster: "UK legal accounting and practice management platform",
  },
  {
    feature: "Target user",
    atticus: "Ontario solo and small law firms ($149 CAD/lawyer/month all-in)",
    legalmaster: "UK law firms; not designed for Ontario legal market or compliance requirements",
  },
  {
    feature: "Data residency",
    atticus: "Canadian servers by default",
    legalmaster: "UK data residency; Canadian data residency not available",
  },
  {
    feature: "Complete solution",
    atticus: "End-to-end Ontario practice management: intake, conflicts, matters, time, trust, billing, AI",
    legalmaster: "UK legal accounting solution — significant reconfiguration required for Ontario compliance",
  },
];

const reasons = [
  {
    title: "Built for Ontario, Not the UK Market",
    description:
      "LegalMaster is a UK legal accounting and practice management platform built for the UK legal market and UK Solicitors Regulation Authority requirements. Atticus is built from day one for Ontario law firms — LSO By-Law 9 trust accounting, Ontario Limitations Act 2002, HST billing, and CRA-compliant invoicing are built in.",
  },
  {
    title: "LSO By-Law 9 Trust Accounting Built In",
    description:
      "Atticus includes trust accounting built specifically for Ontario LSO By-Law 9 compliance. LegalMaster&apos;s client account features are built for UK Solicitors Accounts Rules — fundamentally different from Ontario&apos;s LSO By-Law 9 trust accounting requirements.",
  },
  {
    title: "Canadian Legal AI Integrated With Your Practice",
    description:
      "Atticus AI is trained on Canadian and Ontario legal context. It extracts limitation dates, flags compliance issues, and answers practice questions — all integrated with your Ontario matters. LegalMaster has no Canadian legal AI capabilities.",
  },
  {
    title: "Canadian Data Residency by Default",
    description:
      "Atticus stores your client data on Canadian servers by default, supporting LSO data residency expectations. LegalMaster is a UK platform — Canadian data residency is not available.",
  },
  {
    title: "Ontario Limitation Period Intelligence",
    description:
      "Atticus AI extracts key dates from client documents and applies Ontario Limitations Act 2002 rules automatically. LegalMaster has no Ontario limitation period tracking or Canadian legal deadline intelligence.",
  },
  {
    title: "All-In Pricing at $149 CAD",
    description:
      "Atticus is $149 CAD per lawyer per month for complete Ontario practice management including AI. No UK platform import/configuration costs, no separate Canadian compliance tooling required.",
  },
];

export default function LegalMasterAlternativePage() {
  return (
    <>
      <Script id="legalmaster-alternative-schema" type="application/ld+json">
        {schemaJson}
      </Script>

      <div className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-amber-400 text-slate-900 text-sm font-semibold px-4 py-1 rounded-full mb-6">
              LegalMaster Alternative
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              The LegalMaster Alternative for Ontario Lawyers
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              LegalMaster is a UK legal accounting and practice management platform built for
              the UK market — not Ontario LSO compliance, Canadian trust accounting, or Ontario
              practice requirements. Atticus is built from the ground up for Ontario law firms
              at $149 CAD per lawyer per month.
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

        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-900 mb-4">
              Why Ontario Lawyers Choose Atticus Over LegalMaster
            </h2>
            <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
              Atticus is a complete Ontario law firm platform — practice management, trust accounting,
              and Canadian AI built for the lawyers doing the legal work. Not a UK legal accounting
              platform requiring extensive reconfiguration for Ontario compliance.
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

        <section className="py-20 px-6 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-900 mb-4">
              Atticus vs LegalMaster: Feature Comparison
            </h2>
            <p className="text-center text-slate-600 mb-12">
              See how Atticus compares to LegalMaster for Ontario solo and small law firms —
              complete Ontario practice management with integrated Canadian AI vs a UK legal accounting platform.
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
              <table className="w-full bg-white">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left px-6 py-4 font-semibold">Feature</th>
                    <th className="text-center px-6 py-4 font-semibold text-amber-400">Atticus</th>
                    <th className="text-center px-6 py-4 font-semibold">LegalMaster</th>
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
                      <td className="px-6 py-4 text-center text-slate-500 text-sm">{row.legalmaster}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-amber-50 border-t border-amber-100">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Complete Ontario Practice Management Built for Canadian Law
            </h2>
            <p className="text-slate-600 mb-8">
              Atticus is built for Ontario from day one — LSO-compliant trust accounting, HST billing,
              Canadian AI, limitation period tracking, and conflict checking.
              $149 CAD per lawyer per month.
            </p>
            <Link
              href="/sign-up"
              className="inline-block bg-slate-900 text-white font-semibold px-10 py-4 rounded-lg hover:bg-slate-700 transition-colors"
            >
              Start Your Free Trial
            </Link>
          </div>
        </section>

        <section className="py-12 px-6 border-t border-slate-100">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-lg font-semibold text-slate-900 mb-6">Compare More Alternatives</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { href: "/clio-alternative", label: "Clio Alternative" },
                { href: "/legalone-alternative", label: "LegalOne Alternative" },
                { href: "/leap-alternative", label: "LEAP Alternative" },
                { href: "/ai-for-lawyers", label: "AI for Ontario Lawyers" },
                { href: "/cosmolex-alternative", label: "CosmoLex Alternative" },
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
