import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "HotDocs Alternative for Ontario Lawyers | Atticus vs HotDocs Document Automation",
  description:
    "Looking for a HotDocs alternative? Compare Atticus vs HotDocs for Ontario law firms. Atticus combines AI-powered document analysis, full practice management, LSO-compliant trust accounting, and Canadian legal AI — built for Ontario solo and small law firms.",
  openGraph: {
    title: "HotDocs Alternative for Ontario Lawyers | Atticus vs HotDocs Document Automation",
    description:
      "Why Ontario lawyers choose Atticus over or alongside HotDocs. Atticus delivers AI document analysis, complete practice management, LSO-compliant trust accounting, and Canadian legal AI — not just document assembly.",
    url: "https://getatticus.ca/hotdocs-alternative",
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
  "description": "Atticus is the HotDocs alternative for Ontario lawyers that combines Canadian legal AI, AI document analysis, LSO-compliant trust accounting, HST billing, and full practice management in one platform — without requiring document template programming.",
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
  hotdocs: string;
};

const featureComparison: Feature[] = [
  {
    feature: "Practice management",
    atticus: "Full integrated practice management for all practice areas",
    hotdocs: "Document automation only; no practice management",
  },
  {
    feature: "Ontario trust accounting",
    atticus: "Built-in, LSO By-Law 9 compliant; mixed trust, monthly reconciliation",
    hotdocs: "No trust accounting",
  },
  {
    feature: "HST billing",
    atticus: "Native HST with CRA-compliant invoices built in",
    hotdocs: "No billing",
  },
  {
    feature: "Time tracking",
    atticus: "Integrated time and billing; AI-assisted time capture",
    hotdocs: "No time tracking",
  },
  {
    feature: "AI document work",
    atticus: "Canadian legal AI: document analysis, summarization, entity extraction, limitation period flagging, semantic search across all files",
    hotdocs: "Template-based document assembly from questionnaire interviews; no AI document intelligence",
  },
  {
    feature: "Document generation",
    atticus: "AI-assisted drafting from context; Canadian legal AI understands your matter details",
    hotdocs: "Core strength: conditional logic document assembly from reusable templates; high-volume standardized document production",
  },
  {
    feature: "Matter management",
    atticus: "Full matter lifecycle from intake to close",
    hotdocs: "No matter management",
  },
  {
    feature: "Document intelligence",
    atticus: "AI reads incoming documents, extracts key information, and semantic-searches your file library",
    hotdocs: "Generates outgoing documents from templates; no incoming document analysis",
  },
  {
    feature: "Limitation period alerts",
    atticus: "Ontario Limitations Act 2002 built in; AI extracts dates from documents",
    hotdocs: "No limitation period tracking",
  },
  {
    feature: "Conflict checking",
    atticus: "Automated AI-assisted conflict search",
    hotdocs: "No conflict checking",
  },
  {
    feature: "LSO compliance",
    atticus: "Built for Ontario LSO requirements; Canadian data residency; LSO AI guidance considered",
    hotdocs: "Document automation platform; LSO compliance requires separate practice management",
  },
  {
    feature: "Pricing (CAD)",
    atticus: "$149/lawyer/month (all-in, including AI)",
    hotdocs: "Per-seat licensing; implementation and template development costs additional",
  },
  {
    feature: "Setup time",
    atticus: "Self-serve; ready in hours; no template programming required",
    hotdocs: "Implementation project required; significant time to develop and test templates",
  },
  {
    feature: "Data residency",
    atticus: "Canadian servers by default",
    hotdocs: "Cloud hosted; data residency varies by deployment",
  },
];

const reasons = [
  {
    title: "AI Document Intelligence — Not Just Template Assembly",
    description:
      "HotDocs generates documents from pre-built templates based on questionnaire answers. Atticus AI reads and analyzes the documents you receive — contracts, statements of claim, medical records — extracting key dates, parties, and obligations automatically. These are complementary capabilities: Atticus adds intelligence to incoming documents rather than just generating outgoing ones.",
  },
  {
    title: "No Template Programming Required",
    description:
      "HotDocs requires significant upfront investment to build and maintain document templates — often a specialized implementation project. Atticus delivers AI document analysis and practice management without any template programming. Upload your documents and Atticus AI immediately begins extracting value.",
  },
  {
    title: "Complete Practice Management Built In",
    description:
      "HotDocs is a document assembly tool — it does not include practice management, billing, or trust accounting. Atticus manages your full practice: matter lifecycle, time tracking, HST billing, and LSO-compliant trust accounting, all in one platform at $149 CAD per lawyer per month.",
  },
  {
    title: "LSO-Compliant Ontario Trust Accounting",
    description:
      "HotDocs has no trust accounting. Ontario lawyers using HotDocs for document generation still need separate software for LSO By-Law 9 trust accounting. Atticus includes mixed trust accounts, monthly reconciliation, and trust ledger reporting as part of the core product.",
  },
  {
    title: "Canadian Legal AI for Limitation Period Detection",
    description:
      "HotDocs does not track limitation periods. Atticus AI reads your uploaded documents and automatically identifies Ontario limitation period triggers — accident dates, service dates, breach dates — flagging deadlines under the Limitations Act 2002 from the documents themselves.",
  },
  {
    title: "Ready in Hours, Not Months",
    description:
      "HotDocs implementations for a law firm typically involve weeks or months of template development before productivity gains materialize. Atticus is self-serve — sign up, upload your first document, and the AI begins working immediately. No implementation project required.",
  },
];

export default function HotdocsAlternativePage() {
  return (
    <>
      <Script id="hotdocs-alternative-schema" type="application/ld+json">
        {schemaJson}
      </Script>

      <div className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-amber-400 text-slate-900 text-sm font-semibold px-4 py-1 rounded-full mb-6">
              HotDocs Alternative
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              The HotDocs Alternative for Ontario Lawyers
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              HotDocs generates documents from pre-built templates — requiring
              significant upfront investment and ongoing maintenance. Atticus
              uses Canadian legal AI to analyze your incoming documents, extract
              critical information automatically, and manage your full practice —
              no template programming required.
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
              Why Ontario Lawyers Choose Atticus Over HotDocs
            </h2>
            <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
              HotDocs generates documents from templates. Atticus delivers AI
              document intelligence, full practice management, and LSO-compliant
              trust accounting — without implementation projects or template programming.
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
              Atticus vs HotDocs: Feature Comparison
            </h2>
            <p className="text-center text-slate-600 mb-12">
              See how Atticus compares to HotDocs for Ontario solo and small
              law firms — AI-powered full practice management vs template-based
              document assembly.
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
              <table className="w-full bg-white">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left px-6 py-4 font-semibold">Feature</th>
                    <th className="text-center px-6 py-4 font-semibold text-amber-400">Atticus</th>
                    <th className="text-center px-6 py-4 font-semibold">HotDocs</th>
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
                      <td className="px-6 py-4 text-center text-slate-500 text-sm">{row.hotdocs}</td>
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
              AI Document Intelligence Without the Implementation Project
            </h2>
            <p className="text-slate-600 mb-8">
              Atticus AI analyzes your documents, extracts limitation periods and key dates,
              manages your matters, and handles trust accounting — ready in hours, not months.
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

        {/* Related */}
        <section className="py-12 px-6 border-t border-slate-100">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-lg font-semibold text-slate-900 mb-6">Compare More Alternatives</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { href: "/clio-alternative", label: "Clio Alternative" },
                { href: "/pclaw-alternative", label: "PCLaw Alternative" },
                { href: "/netdocuments-alternative", label: "NetDocuments Alternative" },
                { href: "/imanage-alternative", label: "iManage Alternative" },
                { href: "/harvey-ai-alternative", label: "Harvey AI Alternative" },
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
