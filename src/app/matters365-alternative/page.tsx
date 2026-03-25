import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Matters365 Alternative for Ontario Lawyers | Atticus vs Matters365",
  description:
    "Looking for a Matters365 alternative? Compare Atticus vs Matters365 for Ontario law firms. Atticus combines full practice management, Canadian legal AI for document analysis, LSO-compliant trust accounting, and HST billing — built for Ontario solo and small law firms.",
  openGraph: {
    title: "Matters365 Alternative for Ontario Lawyers | Atticus vs Matters365",
    description:
      "Why Ontario lawyers choose Atticus over Matters365. Atticus delivers complete practice management, LSO-compliant trust accounting, and Canadian legal AI — not just Microsoft 365-based legal matter management.",
    url: "https://getatticus.ca/matters365-alternative",
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
  "description": "Atticus is the Matters365 alternative for Ontario lawyers that combines Canadian legal AI with LSO-compliant trust accounting, HST billing, full practice management, and AI document analysis — not just Microsoft 365-integrated legal matter management built on SharePoint and Teams.",
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
  matters365: string;
};

const featureComparison: Feature[] = [
  {
    feature: "Practice management",
    atticus: "Full integrated practice management for all Ontario practice areas",
    matters365: "Legal matter management built on Microsoft 365 (SharePoint, Teams, Outlook); depends on Microsoft licensing",
  },
  {
    feature: "Ontario trust accounting",
    atticus: "Built-in, LSO By-Law 9 compliant; mixed trust, monthly reconciliation",
    matters365: "Limited or no trust accounting; typically requires separate accounting integration",
  },
  {
    feature: "HST billing",
    atticus: "Native HST with CRA-compliant invoices built in",
    matters365: "Billing capabilities vary by deployment; typically requires integration with accounting software",
  },
  {
    feature: "Time tracking",
    atticus: "Integrated time and billing; AI-assisted time capture",
    matters365: "Time tracking tied to Microsoft 365 tools; AI time capture limited",
  },
  {
    feature: "AI legal work",
    atticus: "Canadian legal AI: document analysis, entity extraction, limitation period flagging, practice assistant, semantic search across your files",
    matters365: "Microsoft Copilot AI features where licensed; AI capabilities depend on Microsoft 365 plan and Copilot add-on pricing",
  },
  {
    feature: "Matter management",
    atticus: "Full matter lifecycle from intake to close for all practice areas",
    matters365: "Matter management workspace on SharePoint; structured around Microsoft Teams channels and document libraries",
  },
  {
    feature: "Document management",
    atticus: "AI document analysis, summarization, and entity extraction; semantic search across all files",
    matters365: "Document management through SharePoint and OneDrive; Microsoft 365 native document storage and collaboration",
  },
  {
    feature: "Canadian legal context",
    atticus: "Built for Ontario law: Limitations Act 2002, LSO By-Law 9 trust accounting, Ontario court procedures",
    matters365: "Built on Microsoft global infrastructure; not specifically tailored to Ontario or Canadian legal requirements",
  },
  {
    feature: "Limitation period alerts",
    atticus: "Ontario Limitations Act 2002 built in; AI extracts dates from documents",
    matters365: "Calendar-based deadline tracking through Outlook; no Ontario limitation period intelligence",
  },
  {
    feature: "Conflict checking",
    atticus: "Automated AI-assisted conflict search",
    matters365: "Conflict checking requires customization or separate tool; not built-in",
  },
  {
    feature: "LSO compliance",
    atticus: "Built for Ontario LSO requirements; Canadian data residency; LSO AI guidance considered",
    matters365: "Microsoft 365 data residency depends on tenant configuration; Ontario LSO compliance requires configuration",
  },
  {
    feature: "Pricing (CAD)",
    atticus: "$149/lawyer/month (all-in, including AI)",
    matters365: "Requires Microsoft 365 subscription plus Matters365 licensing; total cost varies with Microsoft plan tier",
  },
  {
    feature: "Platform dependency",
    atticus: "Standalone web platform — no Microsoft dependency",
    matters365: "Requires Microsoft 365 subscription and SharePoint configuration; platform lock-in to Microsoft ecosystem",
  },
  {
    feature: "Scope",
    atticus: "Full practice — intake, matters, billing, trust accounting, AI for all documents",
    matters365: "Matter management within Microsoft 365 — document workspace, task management, calendar integration through Outlook and Teams",
  },
];

const reasons = [
  {
    title: "No Microsoft 365 Dependency",
    description:
      "Matters365 requires a Microsoft 365 subscription and SharePoint configuration. Atticus is a standalone web platform — no dependency on Microsoft licensing tiers or Copilot add-ons. Access your Ontario practice from any browser on any device.",
  },
  {
    title: "LSO-Compliant Trust Accounting Built In",
    description:
      "Matters365 has limited trust accounting functionality and typically requires separate accounting software integration. Atticus includes LSO By-Law 9 compliant trust accounting with mixed trust accounts, monthly reconciliation, and trust ledger reporting built in.",
  },
  {
    title: "Canadian Legal AI Built for Ontario",
    description:
      "Matters365 relies on Microsoft Copilot for AI features, which is a general-purpose enterprise AI. Atticus is built specifically for Ontario legal practice — Ontario Limitations Act, LSO By-Law 9 trust accounting rules, Canadian case law references, and LSO AI guidance.",
  },
  {
    title: "Native HST Billing Without Integrations",
    description:
      "Matters365 billing typically requires integration with separate accounting tools. Atticus includes native HST billing with CRA-compliant invoicing, time tracking, and billing all in one platform — no separate software required.",
  },
  {
    title: "Ontario Limitation Period Intelligence",
    description:
      "Matters365 uses Outlook calendar for deadline tracking with no Ontario-specific limitation period logic. Atticus AI extracts key dates from your client documents and flags Ontario Limitations Act 2002 deadlines automatically.",
  },
  {
    title: "One All-In Platform at $149 CAD",
    description:
      "Matters365 requires Microsoft 365 licensing plus the Matters365 platform cost. Atticus is $149 CAD per lawyer per month for complete Ontario practice management including AI — no additional Microsoft licensing required.",
  },
];

export default function Matters365AlternativePage() {
  return (
    <>
      <Script id="matters365-alternative-schema" type="application/ld+json">
        {schemaJson}
      </Script>

      <div className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-amber-400 text-slate-900 text-sm font-semibold px-4 py-1 rounded-full mb-6">
              Matters365 Alternative
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              The Matters365 Alternative for Ontario Lawyers
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Matters365 provides legal matter management built on Microsoft 365 SharePoint and Teams.
              Atticus manages your entire Ontario practice — matters, billing, LSO-compliant trust
              accounting, and Canadian AI for all your client files. $149 CAD per lawyer per month.
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
              Why Ontario Lawyers Choose Atticus Over Matters365
            </h2>
            <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
              Matters365 handles matter management within Microsoft 365. Atticus manages your
              entire practice — from intake and conflict checking through trust accounting,
              billing, and Canadian AI for your files — with no Microsoft dependency.
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
              Atticus vs Matters365: Feature Comparison
            </h2>
            <p className="text-center text-slate-600 mb-12">
              See how Atticus compares to Matters365 for Ontario solo and small law firms —
              complete Ontario practice management with Canadian AI vs Microsoft 365-based
              legal matter management.
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
              <table className="w-full bg-white">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left px-6 py-4 font-semibold">Feature</th>
                    <th className="text-center px-6 py-4 font-semibold text-amber-400">Atticus</th>
                    <th className="text-center px-6 py-4 font-semibold">Matters365</th>
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
                      <td className="px-6 py-4 text-center text-slate-500 text-sm">{row.matters365}</td>
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
              Add Atticus for practice management — LSO-compliant trust accounting, HST billing,
              AI document analysis, limitation period tracking, and conflict checking.
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
                { href: "/pclaw-alternative", label: "PCLaw Alternative" },
                { href: "/cosmolex-alternative", label: "CosmoLex Alternative" },
                { href: "/leap-alternative", label: "LEAP Alternative" },
                { href: "/mycase-alternative", label: "MyCase Alternative" },
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
