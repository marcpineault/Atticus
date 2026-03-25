import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Headnote Alternative for Ontario Lawyers | Atticus vs Headnote",
  description:
    "Looking for a Headnote alternative? Compare Atticus vs Headnote for Ontario law firms. Atticus combines full practice management, Canadian legal AI for document analysis, LSO-compliant trust accounting, and HST billing — built for Ontario solo and small law firms.",
  openGraph: {
    title: "Headnote Alternative for Ontario Lawyers | Atticus vs Headnote",
    description:
      "Why Ontario lawyers choose Atticus over Headnote. Atticus delivers complete Ontario practice management, LSO-compliant trust accounting, and Canadian legal AI — not a standalone US law firm payment processing service.",
    url: "https://getatticus.ca/headnote-alternative",
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
  "description": "Atticus is the Headnote alternative for Ontario lawyers that combines Canadian legal AI with LSO-compliant trust accounting, HST billing, full practice management, and AI document analysis — a complete Ontario law firm platform, not a standalone US law firm payment processing service.",
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
  headnote: string;
};

const featureComparison: Feature[] = [
  {
    feature: "Practice management",
    atticus: "Full integrated practice management for all Ontario practice areas",
    headnote: "No full practice management — law firm payment processing and billing service",
  },
  {
    feature: "Ontario trust accounting",
    atticus: "Built-in, LSO By-Law 9 compliant; mixed trust, monthly reconciliation",
    headnote: "US IOLTA trust payment processing; not configured for Ontario LSO By-Law 9 requirements",
  },
  {
    feature: "HST billing",
    atticus: "Native HST with CRA-compliant invoices built in",
    headnote: "US-focused billing; Canadian HST billing requires separate configuration or software",
  },
  {
    feature: "Time tracking",
    atticus: "Integrated time and billing; AI-assisted time capture",
    headnote: "Time tracking and invoicing included; focused on payment processing",
  },
  {
    feature: "AI legal work",
    atticus: "Canadian legal AI: document analysis, entity extraction, limitation period flagging, semantic search",
    headnote: "No AI legal functionality",
  },
  {
    feature: "Matter management",
    atticus: "Full matter lifecycle from intake to close for all Ontario practice areas",
    headnote: "Basic matter and client management in support of billing",
  },
  {
    feature: "Canadian / Ontario context",
    atticus: "Built for Ontario law: Limitations Act 2002, LSO By-Law 9 trust accounting, Ontario court procedures",
    headnote: "US-based payment service; no Ontario LSO compliance features or Canadian trust accounting rules",
  },
  {
    feature: "Limitation period alerts",
    atticus: "Ontario Limitations Act 2002 built in; AI extracts dates from documents",
    headnote: "No limitation period tracking",
  },
  {
    feature: "Conflict checking",
    atticus: "Automated AI-assisted conflict search",
    headnote: "No conflict checking",
  },
  {
    feature: "LSO compliance",
    atticus: "Built for Ontario LSO requirements; Canadian data residency; LSO AI guidance considered",
    headnote: "No LSO-specific compliance features; designed for US IOLTA trust payment rules",
  },
  {
    feature: "Platform type",
    atticus: "Full Ontario law firm practice management platform with AI",
    headnote: "Law firm payment processing and invoicing service with basic practice management",
  },
  {
    feature: "Data residency",
    atticus: "Canadian servers by default",
    headnote: "US-based service; Canadian data residency requires verification",
  },
  {
    feature: "Pricing (CAD)",
    atticus: "$149/lawyer/month (all-in, including AI)",
    headnote: "Transaction-based pricing in USD; no complete Ontario practice management",
  },
  {
    feature: "Origin",
    atticus: "Built for Ontario and Canadian legal practice from the ground up",
    headnote: "US-founded law firm payment processing company focused on the US legal market",
  },
];

const reasons = [
  {
    title: "A Complete Platform, Not Just Payments",
    description:
      "Headnote is a law firm payment processing service. It does not include full practice management, Canadian trust accounting, AI document analysis, matter management, or conflict checking. Ontario lawyers need a complete platform — Atticus delivers all of these at $149 CAD per lawyer per month.",
  },
  {
    title: "LSO By-Law 9 Trust Accounting Built In",
    description:
      "Atticus includes trust accounting built specifically for Ontario LSO By-Law 9 compliance — mixed trust accounts, monthly reconciliation, and trust ledger reporting. Headnote processes IOLTA payments for US firms under US trust accounting rules, not Ontario LSO By-Law 9.",
  },
  {
    title: "Built for Ontario Law Firms",
    description:
      "Headnote is a US payment processing service for US law firms. Atticus was designed from the ground up for Ontario legal practice — LSO compliance, Ontario Limitations Act 2002, Canadian data residency, and HST billing.",
  },
  {
    title: "Canadian Legal AI Built for Ontario Practice",
    description:
      "Atticus AI is trained on Canadian and Ontario legal context — Ontario Limitations Act dates, LSO guidelines, and Canadian legal document patterns. Headnote has no AI legal functionality.",
  },
  {
    title: "Ontario Limitation Period Intelligence",
    description:
      "Atticus AI extracts key dates from your client documents and applies Ontario Limitations Act 2002 rules automatically. Headnote has no limitation period tracking capabilities.",
  },
  {
    title: "All-In Pricing at $149 CAD",
    description:
      "Atticus is $149 CAD per lawyer per month for complete Ontario practice management including AI. Headnote is a payment processing add-on that cannot replace the complete practice management platform Ontario lawyers need.",
  },
];

export default function HeadnoteAlternativePage() {
  return (
    <>
      <Script id="headnote-alternative-schema" type="application/ld+json">
        {schemaJson}
      </Script>

      <div className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-amber-400 text-slate-900 text-sm font-semibold px-4 py-1 rounded-full mb-6">
              Headnote Alternative
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              The Headnote Alternative for Ontario Lawyers
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Headnote is a US law firm payment processing service operating under US IOLTA rules.
              Atticus is built from the ground up for Ontario law firms — LSO-compliant trust accounting,
              Canadian AI, and full practice management at $149 CAD per lawyer per month.
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
              Why Ontario Lawyers Choose Atticus Over Headnote
            </h2>
            <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
              Headnote is a US law firm payment processing service. Atticus is a complete Ontario law
              firm platform — practice management, trust accounting, and Canadian AI in one.
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
              Atticus vs Headnote: Feature Comparison
            </h2>
            <p className="text-center text-slate-600 mb-12">
              See how Atticus compares to Headnote for Ontario solo and small law firms —
              full Ontario practice management with Canadian AI vs a US law firm payment processing service.
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
              <table className="w-full bg-white">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left px-6 py-4 font-semibold">Feature</th>
                    <th className="text-center px-6 py-4 font-semibold text-amber-400">Atticus</th>
                    <th className="text-center px-6 py-4 font-semibold">Headnote</th>
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
                      <td className="px-6 py-4 text-center text-slate-500 text-sm">{row.headnote}</td>
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
                { href: "/leap-alternative", label: "LEAP Alternative" },
                { href: "/lawpay-alternative", label: "LawPay Alternative" },
                { href: "/pclaw-alternative", label: "PCLaw Alternative" },
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
