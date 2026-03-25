import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "LawGeex Alternative for Ontario Lawyers | Atticus vs LawGeex",
  description:
    "Looking for a LawGeex alternative? Compare Atticus vs LawGeex for Ontario law firms. Atticus combines full practice management, Canadian legal AI for document analysis, LSO-compliant trust accounting, and HST billing — built for Ontario solo and small law firms.",
  openGraph: {
    title: "LawGeex Alternative for Ontario Lawyers | Atticus vs LawGeex",
    description:
      "Why Ontario lawyers choose Atticus over LawGeex. Atticus delivers complete Ontario practice management, LSO-compliant trust accounting, and Canadian legal AI — not a standalone AI contract review tool without practice management.",
    url: "https://getatticus.ca/lawgeex-alternative",
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
  "description": "Atticus is the LawGeex alternative for Ontario lawyers that combines Canadian legal AI with LSO-compliant trust accounting, HST billing, full practice management, and AI document analysis — a complete Ontario law firm platform, not a standalone AI contract review tool.",
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
  lawGeex: string;
};

const featureComparison: Feature[] = [
  {
    feature: "Practice management",
    atticus: "Full integrated practice management for all Ontario practice areas",
    lawGeex: "No practice management — standalone AI contract review tool only",
  },
  {
    feature: "Ontario trust accounting",
    atticus: "Built-in, LSO By-Law 9 compliant; mixed trust, monthly reconciliation",
    lawGeex: "No trust accounting — requires separate billing and accounting software",
  },
  {
    feature: "HST billing",
    atticus: "Native HST with CRA-compliant invoices built in",
    lawGeex: "No billing — separate invoicing software required",
  },
  {
    feature: "Time tracking",
    atticus: "Integrated time and billing; AI-assisted time capture",
    lawGeex: "No time tracking functionality",
  },
  {
    feature: "AI contract review",
    atticus: "AI document analysis, entity extraction, clause identification, semantic search across all files",
    lawGeex: "AI-powered contract review and approval workflow; comparison against approved playbooks; risk flagging",
  },
  {
    feature: "Canadian / Ontario context",
    atticus: "Built for Ontario law: Limitations Act 2002, LSO By-Law 9 trust accounting, Ontario court procedures",
    lawGeex: "Israeli-founded platform primarily serving US and global enterprise in-house legal departments; limited Canadian legal context",
  },
  {
    feature: "Matter management",
    atticus: "Full matter lifecycle from intake to close for all practice areas",
    lawGeex: "No matter management — contract-focused tool only",
  },
  {
    feature: "Limitation period alerts",
    atticus: "Ontario Limitations Act 2002 built in; AI extracts dates from documents",
    lawGeex: "Contract deadline and expiry tracking; no Ontario limitation period intelligence",
  },
  {
    feature: "Conflict checking",
    atticus: "Automated AI-assisted conflict search",
    lawGeex: "No conflict checking",
  },
  {
    feature: "LSO compliance",
    atticus: "Built for Ontario LSO requirements; Canadian data residency; LSO AI guidance considered",
    lawGeex: "No LSO-specific compliance features; designed for enterprise in-house departments, not Ontario law firms",
  },
  {
    feature: "Platform type",
    atticus: "Full Ontario law firm practice management platform with AI",
    lawGeex: "Standalone AI contract review and approval automation tool",
  },
  {
    feature: "Target user",
    atticus: "Ontario solo and small law firms ($149 CAD/lawyer/month all-in)",
    lawGeex: "Enterprise in-house legal departments and large law firms; pricing on request",
  },
  {
    feature: "Data residency",
    atticus: "Canadian servers by default",
    lawGeex: "US-based infrastructure; Canadian data residency requires verification",
  },
  {
    feature: "Origin",
    atticus: "Built for Ontario and Canadian legal practice from the ground up",
    lawGeex: "Israeli-founded AI legal technology company with primary focus on US and global enterprise markets",
  },
];

const reasons = [
  {
    title: "A Complete Platform, Not Just Contract Review",
    description:
      "LawGeex is a standalone AI contract review tool. It does not include practice management, trust accounting, time tracking, billing, matter management, or client intake. Ontario lawyers need a complete practice management platform — Atticus delivers all of these at $149 CAD per lawyer per month.",
  },
  {
    title: "LSO By-Law 9 Trust Accounting Built In",
    description:
      "Atticus includes trust accounting built specifically for Ontario LSO By-Law 9 compliance — mixed trust accounts, monthly reconciliation, and trust ledger reporting. LawGeex has no trust accounting functionality.",
  },
  {
    title: "Built for Ontario Law Firms",
    description:
      "LawGeex is designed for enterprise in-house legal departments in the US and global markets. Atticus was built from the ground up for Ontario law firms — solo practitioners, small litigation firms, real estate practices, and family law practices that need full practice management with Canadian AI.",
  },
  {
    title: "Canadian Legal AI Built for Ontario Practice",
    description:
      "Atticus AI is trained specifically on Canadian and Ontario legal context — Ontario Limitations Act dates, LSO guidelines, and Canadian legal document patterns. LawGeex AI is trained primarily on US contract playbooks and templates.",
  },
  {
    title: "Ontario Limitation Period Intelligence",
    description:
      "Atticus AI extracts key dates from your client documents and applies Ontario Limitations Act 2002 rules automatically. LawGeex tracks contract deadlines but has no Ontario limitation period intelligence.",
  },
  {
    title: "All-In Pricing at $149 CAD",
    description:
      "Atticus is $149 CAD per lawyer per month for complete Ontario practice management including AI — no separate contract review tool, no trust accounting add-on, no billing software. LawGeex is an add-on to other systems, not a complete solution.",
  },
];

export default function LawGeexAlternativePage() {
  return (
    <>
      <Script id="lawgeex-alternative-schema" type="application/ld+json">
        {schemaJson}
      </Script>

      <div className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-amber-400 text-slate-900 text-sm font-semibold px-4 py-1 rounded-full mb-6">
              LawGeex Alternative
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              The LawGeex Alternative for Ontario Lawyers
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              LawGeex is an Israeli-founded AI contract review tool built for enterprise in-house departments.
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
              Why Ontario Lawyers Choose Atticus Over LawGeex
            </h2>
            <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
              LawGeex is a standalone AI contract review tool designed for enterprise in-house legal departments.
              Atticus is a complete Ontario law firm platform — practice management, trust accounting, and Canadian AI in one.
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
              Atticus vs LawGeex: Feature Comparison
            </h2>
            <p className="text-center text-slate-600 mb-12">
              See how Atticus compares to LawGeex for Ontario solo and small law firms —
              full Ontario practice management with Canadian AI vs a standalone enterprise AI contract review tool.
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
              <table className="w-full bg-white">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left px-6 py-4 font-semibold">Feature</th>
                    <th className="text-center px-6 py-4 font-semibold text-amber-400">Atticus</th>
                    <th className="text-center px-6 py-4 font-semibold">LawGeex</th>
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
                      <td className="px-6 py-4 text-center text-slate-500 text-sm">{row.lawGeex}</td>
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
                { href: "/spellbook-alternative", label: "Spellbook Alternative" },
                { href: "/practiceevolve-alternative", label: "PracticeEvolve Alternative" },
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
