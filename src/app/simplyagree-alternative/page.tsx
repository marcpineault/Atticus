import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SimplyAgree Alternative for Ontario Lawyers | Atticus vs SimplyAgree Closing Management",
  description:
    "Looking for a SimplyAgree alternative? Compare Atticus vs SimplyAgree for Ontario law firms. Atticus combines full practice management, Canadian legal AI for document analysis, LSO-compliant trust accounting, and HST billing — built for Ontario solo and small law firms.",
  openGraph: {
    title: "SimplyAgree Alternative for Ontario Lawyers | Atticus vs SimplyAgree",
    description:
      "Why Ontario lawyers choose Atticus over SimplyAgree. Atticus delivers complete practice management, LSO-compliant trust accounting, and Canadian legal AI — not just transactional closing management.",
    url: "https://getatticus.ca/simplyagree-alternative",
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
  "description": "Atticus is the SimplyAgree alternative for Ontario lawyers that combines Canadian legal AI with LSO-compliant trust accounting, HST billing, full practice management, and AI document analysis — not just transactional closing and signing management.",
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
  simplyagree: string;
};

const featureComparison: Feature[] = [
  {
    feature: "Practice management",
    atticus: "Full integrated practice management for all Ontario practice areas",
    simplyagree: "Transactional closing workflow and e-signing management; limited general practice management",
  },
  {
    feature: "Ontario trust accounting",
    atticus: "Built-in, LSO By-Law 9 compliant; mixed trust, monthly reconciliation",
    simplyagree: "No trust accounting",
  },
  {
    feature: "HST billing",
    atticus: "Native HST with CRA-compliant invoices built in",
    simplyagree: "No billing",
  },
  {
    feature: "Time tracking",
    atticus: "Integrated time and billing; AI-assisted time capture",
    simplyagree: "No time tracking",
  },
  {
    feature: "AI legal work",
    atticus: "Canadian legal AI: document analysis, entity extraction, limitation period flagging, practice assistant, semantic search across your files",
    simplyagree: "Closing checklist automation, e-signing workflows, and closing book generation; limited AI document analysis",
  },
  {
    feature: "Matter management",
    atticus: "Full matter lifecycle from intake to close for all practice areas",
    simplyagree: "Transactional closing project management; strong for M&A and real estate closings",
  },
  {
    feature: "Document management",
    atticus: "AI document analysis, summarization, and entity extraction; semantic search across all files",
    simplyagree: "Closing document organization and signing workflow; closing book generation",
  },
  {
    feature: "Canadian legal context",
    atticus: "Built for Ontario law: Limitations Act 2002, LSO By-Law 9 trust accounting, Ontario court procedures",
    simplyagree: "US-focused closing management platform; Ontario closing mechanics require custom configuration",
  },
  {
    feature: "Limitation period alerts",
    atticus: "Ontario Limitations Act 2002 built in; AI extracts dates from documents",
    simplyagree: "No limitation period tracking",
  },
  {
    feature: "Conflict checking",
    atticus: "Automated AI-assisted conflict search",
    simplyagree: "No conflict checking",
  },
  {
    feature: "LSO compliance",
    atticus: "Built for Ontario LSO requirements; Canadian data residency; LSO AI guidance considered",
    simplyagree: "US-based platform; Ontario LSO compliance requires separate practice management",
  },
  {
    feature: "Pricing (CAD)",
    atticus: "$149/lawyer/month (all-in, including AI)",
    simplyagree: "Per-seat subscription for closing management; separate practice management cost additional",
  },
  {
    feature: "Data residency",
    atticus: "Canadian servers by default",
    simplyagree: "US-based infrastructure",
  },
  {
    feature: "Scope",
    atticus: "Full practice — intake, matters, billing, trust accounting, AI for all documents",
    simplyagree: "Transactional closing workflow management; does not manage full practice operations",
  },
];

const reasons = [
  {
    title: "Full Practice Management Beyond Closing Workflows",
    description:
      "SimplyAgree manages the closing workflow for transactional matters — checklists, e-signing, and closing book generation. After the closing is complete, you still need separate software for ongoing matters, billing, trust accounting, and client intake. Atticus manages your entire practice from intake through trust accounting.",
  },
  {
    title: "Canadian Legal AI Built for Ontario",
    description:
      "SimplyAgree is a US-focused closing management platform. Atticus is built specifically for Canadian and Ontario legal context — Ontario Limitations Act, LSO By-Law 9 trust accounting rules, Canadian case law references, and LSO AI guidance on using AI in practice.",
  },
  {
    title: "LSO-Compliant Trust Accounting Built In",
    description:
      "SimplyAgree has no trust accounting module. Ontario lawyers using SimplyAgree for closing management still need separate software for LSO By-Law 9 trust accounting — including the trust account management that is central to real estate and corporate closings. Atticus includes mixed trust accounts, monthly reconciliation, and trust ledger reporting.",
  },
  {
    title: "AI That Reads All Your Documents",
    description:
      "SimplyAgree manages the mechanics of the closing workflow. Atticus AI reads all the documents in your practice — corporate records, agreements, correspondence — extracting limitation period triggers, key dates, and parties across all practice areas, not just transactional closings.",
  },
  {
    title: "Canadian Data Residency by Default",
    description:
      "SimplyAgree is a US-based platform. Atticus stores all Ontario client files and trust records on Canadian servers by default — aligned with Law Society of Ontario guidance on cloud storage of client confidential information.",
  },
  {
    title: "One All-In Platform at $149 CAD",
    description:
      "SimplyAgree charges a per-seat subscription for closing management, and Ontario lawyers still need separate practice management, billing, and trust accounting software on top. Atticus is $149 CAD per lawyer per month for the complete Ontario practice platform.",
  },
];

export default function SimplyAgreeAlternativePage() {
  return (
    <>
      <Script id="simplyagree-alternative-schema" type="application/ld+json">
        {schemaJson}
      </Script>

      <div className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-amber-400 text-slate-900 text-sm font-semibold px-4 py-1 rounded-full mb-6">
              SimplyAgree Alternative
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              The SimplyAgree Alternative for Ontario Lawyers
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              SimplyAgree manages transactional closing workflows and e-signing.
              Atticus manages your entire Ontario practice — matters, billing,
              trust accounting, and Canadian AI for your client files.
              Both tools serve different needs; Atticus handles the full
              practice operational layer at $149 CAD per lawyer per month.
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
              Why Ontario Lawyers Choose Atticus Over or Alongside SimplyAgree
            </h2>
            <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
              SimplyAgree handles transactional closings. Atticus manages your
              practice — from intake and conflict checking through matter
              management, trust accounting, and Canadian AI for your files.
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
              Atticus vs SimplyAgree: Feature Comparison
            </h2>
            <p className="text-center text-slate-600 mb-12">
              See how Atticus compares to SimplyAgree for Ontario solo and small
              law firms — complete Ontario practice management with Canadian AI
              vs US-focused transactional closing workflow management.
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
              <table className="w-full bg-white">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left px-6 py-4 font-semibold">Feature</th>
                    <th className="text-center px-6 py-4 font-semibold text-amber-400">Atticus</th>
                    <th className="text-center px-6 py-4 font-semibold">SimplyAgree</th>
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
                      <td className="px-6 py-4 text-center text-slate-500 text-sm">{row.simplyagree}</td>
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
              Keep your closing tools. Add Atticus for practice management — LSO-compliant trust
              accounting, HST billing, AI document analysis, limitation period tracking, and
              conflict checking. $149 CAD per lawyer per month.
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
                { href: "/ironclad-alternative", label: "Ironclad Alternative" },
                { href: "/docusign-clm-alternative", label: "DocuSign CLM Alternative" },
                { href: "/ai-for-lawyers", label: "AI for Ontario Lawyers" },
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
