import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contract Express Alternative for Ontario Lawyers | Atticus vs Thomson Reuters Contract Express",
  description:
    "Looking for a Contract Express alternative? Compare Atticus vs Thomson Reuters Contract Express for Ontario law firms. Atticus combines AI-powered document analysis, full practice management, LSO-compliant trust accounting, and Canadian legal AI — built for Ontario solo and small law firms without requiring document template development.",
  openGraph: {
    title: "Contract Express Alternative for Ontario Lawyers | Atticus vs Contract Express",
    description:
      "Why Ontario lawyers choose Atticus over Contract Express. Atticus delivers AI document intelligence, complete practice management, and LSO-compliant trust accounting — without template programming projects.",
    url: "https://getatticus.ca/contract-express-alternative",
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
  "description": "Atticus is the Contract Express alternative for Ontario lawyers that combines Canadian legal AI document intelligence with LSO-compliant trust accounting, HST billing, and full practice management — without requiring document template development.",
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
  contractexpress: string;
};

const featureComparison: Feature[] = [
  {
    feature: "Practice management",
    atticus: "Full integrated practice management for all practice areas",
    contractexpress: "Document automation only; no practice management",
  },
  {
    feature: "Ontario trust accounting",
    atticus: "Built-in, LSO By-Law 9 compliant; mixed trust, monthly reconciliation",
    contractexpress: "No trust accounting",
  },
  {
    feature: "HST billing",
    atticus: "Native HST with CRA-compliant invoices built in",
    contractexpress: "No billing",
  },
  {
    feature: "AI document work",
    atticus: "Canadian legal AI: analyzes incoming documents, extracts entities and dates, semantic search across your file library",
    contractexpress: "Template-driven document assembly using interview-based questionnaires; conditional logic for complex document generation",
  },
  {
    feature: "Document generation",
    atticus: "AI-assisted drafting with context from your matter and client files",
    contractexpress: "Core strength: sophisticated document automation from pre-built templates; high-quality output for standardized complex documents",
  },
  {
    feature: "Setup and implementation",
    atticus: "Self-serve; ready in hours; no template development required",
    contractexpress: "Implementation project required; significant time to develop, test, and maintain template library",
  },
  {
    feature: "Matter management",
    atticus: "Full matter lifecycle from intake to close",
    contractexpress: "No matter management",
  },
  {
    feature: "Incoming document analysis",
    atticus: "AI reads received documents, extracts key information, and flags deadlines",
    contractexpress: "No incoming document intelligence; generates outgoing documents from templates",
  },
  {
    feature: "Limitation period alerts",
    atticus: "Ontario Limitations Act 2002 built in; AI extracts dates from documents",
    contractexpress: "No limitation period tracking",
  },
  {
    feature: "Conflict checking",
    atticus: "Automated AI-assisted conflict search",
    contractexpress: "No conflict checking",
  },
  {
    feature: "LSO compliance",
    atticus: "Built for Ontario LSO requirements; Canadian data residency; LSO AI guidance considered",
    contractexpress: "Enterprise document automation platform; Ontario LSO compliance requires separate practice management",
  },
  {
    feature: "Pricing (CAD)",
    atticus: "$149/lawyer/month (all-in, including AI)",
    contractexpress: "Enterprise licensing; implementation and template development costs additional",
  },
  {
    feature: "Target firm size",
    atticus: "Designed for Ontario solo and small law firms",
    contractexpress: "Primarily used in large law firms and corporate legal departments with high document volumes",
  },
  {
    feature: "Data residency",
    atticus: "Canadian servers by default",
    contractexpress: "Thomson Reuters cloud infrastructure; data residency varies",
  },
];

const reasons = [
  {
    title: "AI Reads Your Incoming Documents — Not Just Generates Outgoing Ones",
    description:
      "Contract Express generates documents from pre-built templates — it works on outgoing documents you produce. Atticus AI reads the documents you receive from clients and counterparties — extracting key dates, parties, obligations, and limitation periods automatically from contracts, statements of claim, and correspondence.",
  },
  {
    title: "No Template Development Required",
    description:
      "Contract Express implementations require significant time and expertise to develop and maintain template libraries. Atticus delivers AI document intelligence from day one — upload your first document and the AI begins extracting value immediately, without any template development.",
  },
  {
    title: "Complete Practice Management",
    description:
      "Contract Express is a document automation tool — it does not include practice management, billing, or trust accounting. Atticus manages your full practice: matter lifecycle, time tracking, HST billing, and LSO-compliant trust accounting, all in one platform.",
  },
  {
    title: "Right-Sized for Ontario Solo and Small Firms",
    description:
      "Contract Express is designed for large law firms and corporate legal departments with high document volumes that justify the implementation investment. Atticus is built specifically for Ontario solo and small law firms — where AI-powered practice management delivers the highest impact without enterprise-scale implementation costs.",
  },
  {
    title: "Limitation Period Detection from Your Actual Files",
    description:
      "Contract Express does not track limitation periods. Atticus AI reads your uploaded documents and automatically extracts Ontario limitation period triggers — accident dates, service dates, breach dates — flagging deadlines under the Limitations Act 2002 from your real client files.",
  },
  {
    title: "Canadian Data Residency by Default",
    description:
      "Atticus stores all client files on Canadian servers by default — aligned with Law Society of Ontario guidance on cloud storage of client data. Your client documents and trust records never leave Canada.",
  },
];

export default function ContractExpressAlternativePage() {
  return (
    <>
      <Script id="contract-express-alternative-schema" type="application/ld+json">
        {schemaJson}
      </Script>

      <div className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-amber-400 text-slate-900 text-sm font-semibold px-4 py-1 rounded-full mb-6">
              Contract Express Alternative
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              The Contract Express Alternative for Ontario Lawyers
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Contract Express generates outgoing documents from pre-built
              templates — requiring significant implementation investment.
              Atticus uses Canadian legal AI to analyze your incoming documents,
              manage your full practice, and handle trust accounting — ready
              in hours, not months.
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
              Why Ontario Lawyers Choose Atticus Over Contract Express
            </h2>
            <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
              Contract Express is an enterprise document automation platform. Atticus delivers
              AI document intelligence and full practice management for Ontario solo and small
              law firms — without the implementation project.
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
              Atticus vs Contract Express: Feature Comparison
            </h2>
            <p className="text-center text-slate-600 mb-12">
              See how Atticus compares to Thomson Reuters Contract Express for Ontario
              solo and small law firms — AI-powered full practice management vs
              enterprise document assembly.
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
              <table className="w-full bg-white">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left px-6 py-4 font-semibold">Feature</th>
                    <th className="text-center px-6 py-4 font-semibold text-amber-400">Atticus</th>
                    <th className="text-center px-6 py-4 font-semibold">Contract Express</th>
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
                      <td className="px-6 py-4 text-center text-slate-500 text-sm">{row.contractexpress}</td>
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
              AI Document Intelligence Without the Enterprise Implementation
            </h2>
            <p className="text-slate-600 mb-8">
              Atticus AI analyzes your client documents, extracts limitation periods,
              manages your matters, and handles trust accounting — all ready in hours.
              $149 CAD per lawyer per month, no implementation project required.
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
                { href: "/hotdocs-alternative", label: "HotDocs Alternative" },
                { href: "/thomson-reuters-elite-alternative", label: "Thomson Reuters Elite Alternative" },
                { href: "/netdocuments-alternative", label: "NetDocuments Alternative" },
                { href: "/clio-alternative", label: "Clio Alternative" },
                { href: "/pclaw-alternative", label: "PCLaw Alternative" },
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
