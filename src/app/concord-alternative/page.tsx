import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Concord Alternative for Ontario Lawyers | Atticus vs Concord Contract Management",
  description:
    "Looking for a Concord alternative? Compare Atticus vs Concord for Ontario law firms. Atticus combines full practice management, Canadian legal AI for document analysis, LSO-compliant trust accounting, and HST billing — built for Ontario solo and small law firms.",
  openGraph: {
    title: "Concord Alternative for Ontario Lawyers | Atticus vs Concord",
    description:
      "Why Ontario lawyers choose Atticus over Concord. Atticus delivers complete practice management, LSO-compliant trust accounting, and Canadian legal AI — not just AI-powered contract lifecycle management.",
    url: "https://getatticus.ca/concord-alternative",
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
  "description": "Atticus is the Concord alternative for Ontario lawyers that combines Canadian legal AI with LSO-compliant trust accounting, HST billing, full practice management, and AI document analysis — not just AI-powered contract lifecycle management for SMBs.",
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
  concord: string;
};

const featureComparison: Feature[] = [
  {
    feature: "Practice management",
    atticus: "Full integrated practice management for all Ontario practice areas",
    concord: "Contract lifecycle management platform; no general practice management",
  },
  {
    feature: "Ontario trust accounting",
    atticus: "Built-in, LSO By-Law 9 compliant; mixed trust, monthly reconciliation",
    concord: "No trust accounting",
  },
  {
    feature: "HST billing",
    atticus: "Native HST with CRA-compliant invoices built in",
    concord: "No billing or invoicing",
  },
  {
    feature: "Time tracking",
    atticus: "Integrated time and billing; AI-assisted time capture",
    concord: "No time tracking",
  },
  {
    feature: "AI legal work",
    atticus: "Canadian legal AI: document analysis, entity extraction, limitation period flagging, practice assistant, semantic search across your files",
    concord: "AI contract drafting, redlining, and clause suggestions; contract analytics; SMB-focused CLM",
  },
  {
    feature: "Matter management",
    atticus: "Full matter lifecycle from intake to close for all practice areas",
    concord: "Contract-centric workflow; no matter management beyond the contract lifecycle",
  },
  {
    feature: "Document management",
    atticus: "AI document analysis, summarization, and entity extraction; semantic search across all files",
    concord: "Contract repository with version control, e-signatures, and approval workflows",
  },
  {
    feature: "Canadian legal context",
    atticus: "Built for Ontario law: Limitations Act 2002, LSO By-Law 9 trust accounting, Ontario court procedures",
    concord: "US-focused CLM platform; generic contract templates not tailored to Ontario law",
  },
  {
    feature: "Limitation period alerts",
    atticus: "Ontario Limitations Act 2002 built in; AI extracts dates from documents",
    concord: "Contract renewal and deadline reminders; no Ontario limitation period tracking",
  },
  {
    feature: "Conflict checking",
    atticus: "Automated AI-assisted conflict search",
    concord: "No conflict checking",
  },
  {
    feature: "LSO compliance",
    atticus: "Built for Ontario LSO requirements; Canadian data residency; LSO AI guidance considered",
    concord: "US-based platform; Ontario LSO compliance requires separate practice management",
  },
  {
    feature: "Pricing (CAD)",
    atticus: "$149/lawyer/month (all-in, including AI)",
    concord: "Per-user subscription for contract management; separate practice management cost additional",
  },
  {
    feature: "Data residency",
    atticus: "Canadian servers by default",
    concord: "US-based infrastructure",
  },
  {
    feature: "Scope",
    atticus: "Full practice — intake, matters, billing, trust accounting, AI for all documents",
    concord: "Contract lifecycle management — drafting, negotiation, signing, and renewal reminders",
  },
];

const reasons = [
  {
    title: "Full Practice Management Beyond Contract Workflows",
    description:
      "Concord manages the contract lifecycle — drafting, redlining, e-signatures, and renewal reminders. After contracts are signed, you still need separate software for matters, billing, trust accounting, and client intake. Atticus manages your entire Ontario practice from intake through trust accounting.",
  },
  {
    title: "Canadian Legal AI Built for Ontario",
    description:
      "Concord is a US-focused AI CLM platform. Atticus is built specifically for Canadian and Ontario legal context — Ontario Limitations Act, LSO By-Law 9 trust accounting rules, Canadian case law references, and LSO AI guidance on using AI in practice.",
  },
  {
    title: "LSO-Compliant Trust Accounting Built In",
    description:
      "Concord has no trust accounting module. Ontario lawyers using Concord for contract management still need separate software for LSO By-Law 9 trust accounting. Atticus includes mixed trust accounts, monthly reconciliation, and trust ledger reporting.",
  },
  {
    title: "AI That Reads All Your Documents",
    description:
      "Concord AI focuses on contract drafting and redlining. Atticus AI reads all the documents in your practice — corporate records, agreements, correspondence, wills — extracting limitation period triggers, key dates, and parties across all practice areas.",
  },
  {
    title: "Canadian Data Residency by Default",
    description:
      "Concord is a US-based platform. Atticus stores all Ontario client files and trust records on Canadian servers by default — aligned with Law Society of Ontario guidance on cloud storage of client confidential information.",
  },
  {
    title: "One All-In Platform at $149 CAD",
    description:
      "Concord charges a per-user subscription for contract management, and Ontario lawyers still need separate practice management, billing, and trust accounting software on top. Atticus is $149 CAD per lawyer per month for the complete Ontario practice platform.",
  },
];

export default function ConcordAlternativePage() {
  return (
    <>
      <Script id="concord-alternative-schema" type="application/ld+json">
        {schemaJson}
      </Script>

      <div className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-amber-400 text-slate-900 text-sm font-semibold px-4 py-1 rounded-full mb-6">
              Concord Alternative
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              The Concord Alternative for Ontario Lawyers
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Concord manages AI-powered contract drafting, redlining, and
              e-signatures. Atticus manages your entire Ontario practice —
              matters, billing, trust accounting, and Canadian AI for all
              your client files. $149 CAD per lawyer per month.
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
              Why Ontario Lawyers Choose Atticus Over Concord
            </h2>
            <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
              Concord handles AI contract management. Atticus manages your
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
              Atticus vs Concord: Feature Comparison
            </h2>
            <p className="text-center text-slate-600 mb-12">
              See how Atticus compares to Concord for Ontario solo and small
              law firms — complete Ontario practice management with Canadian AI
              vs AI-powered contract lifecycle management.
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
              <table className="w-full bg-white">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left px-6 py-4 font-semibold">Feature</th>
                    <th className="text-center px-6 py-4 font-semibold text-amber-400">Atticus</th>
                    <th className="text-center px-6 py-4 font-semibold">Concord</th>
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
                      <td className="px-6 py-4 text-center text-slate-500 text-sm">{row.concord}</td>
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
              Keep your contract tools. Add Atticus for practice management — LSO-compliant trust
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
                { href: "/simplyagree-alternative", label: "SimplyAgree Alternative" },
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
