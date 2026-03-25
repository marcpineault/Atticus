import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CaseFleet Alternative for Ontario Lawyers | Atticus vs CaseFleet",
  description:
    "Looking for a CaseFleet alternative? Compare Atticus vs CaseFleet for Ontario law firms. Atticus combines full practice management, Canadian legal AI for document analysis, LSO-compliant trust accounting, and HST billing — built for Ontario solo and small law firms.",
  openGraph: {
    title: "CaseFleet Alternative for Ontario Lawyers | Atticus vs CaseFleet",
    description:
      "Why Ontario lawyers choose Atticus over CaseFleet. Atticus delivers complete Ontario practice management, LSO-compliant trust accounting, and Canadian legal AI — not a standalone US litigation chronology tool.",
    url: "https://getatticus.ca/casefleet-alternative",
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
  "description": "Atticus is the CaseFleet alternative for Ontario lawyers that combines Canadian legal AI with LSO-compliant trust accounting, HST billing, full practice management, and AI document analysis — a complete Ontario law firm platform, not a standalone US litigation chronology tool.",
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
  caseFleet: string;
};

const featureComparison: Feature[] = [
  {
    feature: "Practice management",
    atticus: "Full integrated practice management for all Ontario practice areas",
    caseFleet: "No full practice management — specialized litigation chronology and case facts tool",
  },
  {
    feature: "Ontario trust accounting",
    atticus: "Built-in, LSO By-Law 9 compliant; mixed trust, monthly reconciliation",
    caseFleet: "No trust accounting — requires separate billing and accounting software",
  },
  {
    feature: "HST billing",
    atticus: "Native HST with CRA-compliant invoices built in",
    caseFleet: "No billing — separate invoicing software required",
  },
  {
    feature: "Time tracking",
    atticus: "Integrated time and billing; AI-assisted time capture",
    caseFleet: "No time tracking functionality",
  },
  {
    feature: "AI legal work",
    atticus: "Canadian legal AI: document analysis, entity extraction, limitation period flagging, semantic search across your files",
    caseFleet: "Litigation fact management, chronology building, and document tagging; no Canadian legal AI context",
  },
  {
    feature: "Chronology and fact management",
    atticus: "AI extracts key dates and facts from uploaded documents for matter timelines",
    caseFleet: "Dedicated litigation chronology software with fact linking, issue mapping, and timeline views",
  },
  {
    feature: "Matter management",
    atticus: "Full matter lifecycle from intake to close for all practice areas",
    caseFleet: "Litigation matter facts — not a full matter lifecycle platform",
  },
  {
    feature: "Canadian / Ontario context",
    atticus: "Built for Ontario law: Limitations Act 2002, LSO By-Law 9 trust accounting, Ontario court procedures",
    caseFleet: "US-focused litigation tool; no Ontario-specific rules or LSO compliance features",
  },
  {
    feature: "Limitation period alerts",
    atticus: "Ontario Limitations Act 2002 built in; AI extracts dates from documents",
    caseFleet: "Chronology date tracking; no Ontario Limitations Act 2002 intelligence",
  },
  {
    feature: "Conflict checking",
    atticus: "Automated AI-assisted conflict search",
    caseFleet: "No conflict checking",
  },
  {
    feature: "LSO compliance",
    atticus: "Built for Ontario LSO requirements; Canadian data residency; LSO AI guidance considered",
    caseFleet: "No LSO-specific compliance features",
  },
  {
    feature: "Platform type",
    atticus: "Full Ontario law firm practice management platform with AI",
    caseFleet: "Standalone US litigation fact management and chronology tool",
  },
  {
    feature: "Data residency",
    atticus: "Canadian servers by default",
    caseFleet: "US-based infrastructure; Canadian data residency requires verification",
  },
  {
    feature: "Pricing (CAD)",
    atticus: "$149/lawyer/month (all-in, including AI)",
    caseFleet: "Subscription pricing in USD; contact for details",
  },
];

const reasons = [
  {
    title: "A Complete Platform, Not a Standalone Litigation Tool",
    description:
      "CaseFleet is a litigation chronology and fact management tool. It does not include practice management, trust accounting, billing, time tracking, or client intake. Ontario litigators need a complete platform — Atticus delivers all of these at $149 CAD per lawyer per month.",
  },
  {
    title: "LSO By-Law 9 Trust Accounting Built In",
    description:
      "Atticus includes trust accounting built specifically for Ontario LSO By-Law 9 compliance — mixed trust accounts, monthly reconciliation, and trust ledger reporting. CaseFleet has no trust accounting functionality whatsoever.",
  },
  {
    title: "Built for Ontario Law Firms",
    description:
      "CaseFleet is a US-focused litigation tool with no Ontario-specific compliance features. Atticus was designed from the ground up for Ontario legal practice — LSO compliance, Ontario Limitations Act 2002, Canadian data residency, and HST billing.",
  },
  {
    title: "Canadian Legal AI for Document Analysis",
    description:
      "Atticus AI is trained on Canadian and Ontario legal context — extracting dates, parties, and limitation period triggers from Ontario client documents. CaseFleet offers fact tagging and chronology building without Canadian legal AI context.",
  },
  {
    title: "Ontario Limitation Period Intelligence",
    description:
      "Atticus AI extracts key dates from your client documents and applies Ontario Limitations Act 2002 rules automatically. CaseFleet tracks chronology dates but has no Ontario limitation period intelligence.",
  },
  {
    title: "All-In Pricing at $149 CAD",
    description:
      "Atticus is $149 CAD per lawyer per month for complete Ontario practice management including AI — no separate chronology tool, no trust accounting add-on, no billing software. CaseFleet requires additional systems to run a complete Ontario practice.",
  },
];

export default function CaseFleetAlternativePage() {
  return (
    <>
      <Script id="casefleet-alternative-schema" type="application/ld+json">
        {schemaJson}
      </Script>

      <div className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-amber-400 text-slate-900 text-sm font-semibold px-4 py-1 rounded-full mb-6">
              CaseFleet Alternative
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              The CaseFleet Alternative for Ontario Lawyers
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              CaseFleet is a US-based litigation chronology and fact management tool. Atticus is built
              from the ground up for Ontario law firms — LSO-compliant trust accounting, Canadian AI,
              and full practice management at $149 CAD per lawyer per month.
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
              Why Ontario Lawyers Choose Atticus Over CaseFleet
            </h2>
            <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
              CaseFleet is a standalone US litigation chronology tool. Atticus is a complete Ontario
              law firm platform — practice management, trust accounting, and Canadian AI in one.
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
              Atticus vs CaseFleet: Feature Comparison
            </h2>
            <p className="text-center text-slate-600 mb-12">
              See how Atticus compares to CaseFleet for Ontario solo and small law firms —
              full Ontario practice management with Canadian AI vs a standalone US litigation fact management tool.
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
              <table className="w-full bg-white">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left px-6 py-4 font-semibold">Feature</th>
                    <th className="text-center px-6 py-4 font-semibold text-amber-400">Atticus</th>
                    <th className="text-center px-6 py-4 font-semibold">CaseFleet</th>
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
                      <td className="px-6 py-4 text-center text-slate-500 text-sm">{row.caseFleet}</td>
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
                { href: "/smokeball-alternative", label: "Smokeball Alternative" },
                { href: "/casepoint-alternative", label: "Casepoint Alternative" },
                { href: "/everlaw-alternative", label: "Everlaw Alternative" },
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
