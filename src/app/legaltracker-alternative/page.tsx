import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "LegalTracker Alternative for Ontario Lawyers | Atticus vs LegalTracker",
  description:
    "Looking for a LegalTracker alternative? Compare Atticus vs LegalTracker for Ontario law firms. Atticus combines full practice management, Canadian legal AI, LSO-compliant trust accounting, and HST billing — built for Ontario solo and small law firms, not corporate legal departments.",
  openGraph: {
    title: "LegalTracker Alternative for Ontario Lawyers | Atticus vs LegalTracker",
    description:
      "Why Ontario lawyers choose Atticus over LegalTracker. Atticus delivers complete Ontario practice management, LSO-compliant trust accounting, and Canadian legal AI — not a Thomson Reuters enterprise legal management platform for in-house departments.",
    url: "https://getatticus.ca/legaltracker-alternative",
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
  "description": "Atticus is the LegalTracker alternative for Ontario lawyers that combines Canadian legal AI with LSO-compliant trust accounting, HST billing, full practice management, and AI document analysis — a complete Ontario law firm platform, not a Thomson Reuters enterprise legal management and e-billing platform for corporate in-house departments.",
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
  legalTracker: string;
};

const featureComparison: Feature[] = [
  {
    feature: "Practice management",
    atticus: "Full integrated practice management for all Ontario practice areas",
    legalTracker: "No law firm practice management — Thomson Reuters enterprise legal management for corporate in-house departments",
  },
  {
    feature: "Ontario trust accounting",
    atticus: "Built-in, LSO By-Law 9 compliant; mixed trust, monthly reconciliation",
    legalTracker: "No trust accounting — designed for in-house legal operations, not law firm trust fund management",
  },
  {
    feature: "HST billing",
    atticus: "Native HST with CRA-compliant invoices built in",
    legalTracker: "E-billing and invoice review from in-house perspective (LEDES format); not law firm HST billing",
  },
  {
    feature: "Time tracking",
    atticus: "Integrated time and billing; AI-assisted time capture",
    legalTracker: "No law firm time tracking — tracks outside counsel invoices from in-house side",
  },
  {
    feature: "AI legal work",
    atticus: "Canadian legal AI: document analysis, entity extraction, limitation period flagging, semantic search",
    legalTracker: "Matter management and spend analytics; no AI for legal work product",
  },
  {
    feature: "Matter management",
    atticus: "Full matter lifecycle from intake to close for all Ontario practice areas",
    legalTracker: "In-house matter management: budget, spend, and outside counsel tracking by matter",
  },
  {
    feature: "Canadian / Ontario context",
    atticus: "Built for Ontario law: Limitations Act 2002, LSO By-Law 9 trust accounting, Ontario court procedures",
    legalTracker: "Thomson Reuters global enterprise platform; no Ontario LSO-specific compliance features",
  },
  {
    feature: "Limitation period alerts",
    atticus: "Ontario Limitations Act 2002 built in; AI extracts dates from documents",
    legalTracker: "No limitation period tracking",
  },
  {
    feature: "Conflict checking",
    atticus: "Automated AI-assisted conflict search",
    legalTracker: "No conflict checking",
  },
  {
    feature: "LSO compliance",
    atticus: "Built for Ontario LSO requirements; Canadian data residency; LSO AI guidance considered",
    legalTracker: "No LSO-specific compliance features; designed for global corporate in-house departments",
  },
  {
    feature: "Platform type",
    atticus: "Full Ontario law firm practice management platform with AI",
    legalTracker: "Thomson Reuters enterprise legal management, e-billing, and outside counsel management for in-house departments",
  },
  {
    feature: "Target user",
    atticus: "Ontario solo and small law firms ($149 CAD/lawyer/month all-in)",
    legalTracker: "Large corporations and enterprise in-house legal departments monitoring outside counsel spend",
  },
  {
    feature: "Data residency",
    atticus: "Canadian servers by default",
    legalTracker: "Thomson Reuters global infrastructure; Canadian data residency requires enterprise negotiation",
  },
  {
    feature: "Origin",
    atticus: "Built for Ontario and Canadian legal practice from the ground up",
    legalTracker: "Thomson Reuters global enterprise legal management platform for corporate legal departments",
  },
];

const reasons = [
  {
    title: "Built for Law Firms, Not In-House Departments",
    description:
      "LegalTracker (by Thomson Reuters) is an enterprise legal management platform for corporate in-house legal departments monitoring outside counsel spend and managing matter budgets. Atticus is built for Ontario law firms doing the actual legal work, billing clients, and managing trust accounts.",
  },
  {
    title: "LSO By-Law 9 Trust Accounting Built In",
    description:
      "Atticus includes trust accounting built specifically for Ontario LSO By-Law 9 compliance. LegalTracker has no trust accounting functionality — it manages legal spend from an in-house perspective, not law firm trust fund management.",
  },
  {
    title: "Complete Ontario Practice Management",
    description:
      "LegalTracker does not include practice management, client intake, conflict checking, billing for law firms, or AI document analysis for legal work. Atticus delivers all of these in a single platform at $149 CAD per lawyer per month.",
  },
  {
    title: "Canadian Legal AI Built for Ontario Practice",
    description:
      "Atticus AI is trained on Canadian and Ontario legal context. LegalTracker provides matter management and spend analytics for corporations — not AI-powered legal work product analysis, document review, or Ontario limitation period intelligence.",
  },
  {
    title: "Ontario Limitation Period Intelligence",
    description:
      "Atticus AI extracts key dates from your client documents and applies Ontario Limitations Act 2002 rules automatically. LegalTracker has no limitation period tracking — it is a legal operations and spend platform for corporate clients.",
  },
  {
    title: "All-In Pricing at $149 CAD",
    description:
      "Atticus is $149 CAD per lawyer per month for complete Ontario practice management including AI. LegalTracker is an enterprise Thomson Reuters platform priced for large corporations — not designed for Ontario solo and small law firms.",
  },
];

export default function LegalTrackerAlternativePage() {
  return (
    <>
      <Script id="legaltracker-alternative-schema" type="application/ld+json">
        {schemaJson}
      </Script>

      <div className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-amber-400 text-slate-900 text-sm font-semibold px-4 py-1 rounded-full mb-6">
              LegalTracker Alternative
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              The LegalTracker Alternative for Ontario Lawyers
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              LegalTracker is a Thomson Reuters enterprise legal management platform for corporate
              in-house legal departments monitoring outside counsel. Atticus is built from the ground
              up for Ontario law firms — LSO-compliant trust accounting, Canadian AI, and full practice
              management at $149 CAD per lawyer per month.
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
              Why Ontario Lawyers Choose Atticus Over LegalTracker
            </h2>
            <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
              LegalTracker is designed for corporate in-house departments managing outside counsel.
              Atticus is a complete Ontario law firm platform — practice management, trust accounting,
              and Canadian AI built for the lawyers doing the legal work.
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
              Atticus vs LegalTracker: Feature Comparison
            </h2>
            <p className="text-center text-slate-600 mb-12">
              See how Atticus compares to LegalTracker for Ontario solo and small law firms —
              full Ontario practice management with Canadian AI vs a Thomson Reuters enterprise legal management platform.
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
              <table className="w-full bg-white">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left px-6 py-4 font-semibold">Feature</th>
                    <th className="text-center px-6 py-4 font-semibold text-amber-400">Atticus</th>
                    <th className="text-center px-6 py-4 font-semibold">LegalTracker</th>
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
                      <td className="px-6 py-4 text-center text-slate-500 text-sm">{row.legalTracker}</td>
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
                { href: "/apperio-alternative", label: "Apperio Alternative" },
                { href: "/simplelegal-alternative", label: "SimpleLegal Alternative" },
                { href: "/intapp-alternative", label: "Intapp Alternative" },
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
