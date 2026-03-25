import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Spellbook Alternative for Ontario Lawyers | Atticus vs Spellbook AI Contract Drafting",
  description:
    "Looking for a Spellbook alternative? Compare Atticus vs Spellbook for Ontario law firms. Atticus combines full practice management, Canadian legal AI for document analysis, LSO-compliant trust accounting, and HST billing — built for Ontario solo and small law firms.",
  openGraph: {
    title: "Spellbook Alternative for Ontario Lawyers | Atticus vs Spellbook",
    description:
      "Why Ontario lawyers choose Atticus over Spellbook. Atticus delivers complete practice management, LSO-compliant trust accounting, and Canadian legal AI — not just AI contract drafting and review inside Microsoft Word.",
    url: "https://getatticus.ca/spellbook-alternative",
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
  "description": "Atticus is the Spellbook alternative for Ontario lawyers that combines Canadian legal AI with LSO-compliant trust accounting, HST billing, full practice management, and AI document analysis — not just AI-powered contract drafting and review integrated into Microsoft Word.",
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
  spellbook: string;
};

const featureComparison: Feature[] = [
  {
    feature: "Practice management",
    atticus: "Full integrated practice management for all Ontario practice areas",
    spellbook: "AI contract drafting and review add-in inside Microsoft Word; no general practice management",
  },
  {
    feature: "Ontario trust accounting",
    atticus: "Built-in, LSO By-Law 9 compliant; mixed trust, monthly reconciliation",
    spellbook: "No trust accounting",
  },
  {
    feature: "HST billing",
    atticus: "Native HST with CRA-compliant invoices built in",
    spellbook: "No billing or invoicing",
  },
  {
    feature: "Time tracking",
    atticus: "Integrated time and billing; AI-assisted time capture",
    spellbook: "No time tracking",
  },
  {
    feature: "AI legal work",
    atticus: "Canadian legal AI: document analysis, entity extraction, limitation period flagging, practice assistant, semantic search across your files",
    spellbook: "AI contract drafting suggestions, clause generation, language simplification, and contract review inside Microsoft Word using GPT-4",
  },
  {
    feature: "Matter management",
    atticus: "Full matter lifecycle from intake to close for all practice areas",
    spellbook: "Contract drafting workflow inside Word; no matter management",
  },
  {
    feature: "Document management",
    atticus: "AI document analysis, summarization, and entity extraction; semantic search across all files",
    spellbook: "AI-assisted drafting and editing within a single Word document; no document repository or semantic search",
  },
  {
    feature: "Canadian legal context",
    atticus: "Built for Ontario law: Limitations Act 2002, LSO By-Law 9 trust accounting, Ontario court procedures",
    spellbook: "Canadian-founded company (Ottawa); AI trained on legal contracts including some Canadian context, but not Ontario-specific practice management",
  },
  {
    feature: "Limitation period alerts",
    atticus: "Ontario Limitations Act 2002 built in; AI extracts dates from documents",
    spellbook: "No limitation period tracking",
  },
  {
    feature: "Conflict checking",
    atticus: "Automated AI-assisted conflict search",
    spellbook: "No conflict checking",
  },
  {
    feature: "LSO compliance",
    atticus: "Built for Ontario LSO requirements; Canadian data residency; LSO AI guidance considered",
    spellbook: "Ontario LSO compliance requires separate practice management; Microsoft Word integration means data may be in Microsoft cloud",
  },
  {
    feature: "Pricing (CAD)",
    atticus: "$149/lawyer/month (all-in, including AI)",
    spellbook: "Per-user subscription; separate practice management cost additional",
  },
  {
    feature: "Data residency",
    atticus: "Canadian servers by default",
    spellbook: "Microsoft Azure infrastructure; data processing depends on Microsoft and Spellbook privacy terms",
  },
  {
    feature: "Scope",
    atticus: "Full practice — intake, matters, billing, trust accounting, AI for all documents",
    spellbook: "Contract drafting acceleration — AI suggestions and clause generation inside Microsoft Word for commercial agreements",
  },
];

const reasons = [
  {
    title: "Full Practice Management Beyond Contract Drafting",
    description:
      "Spellbook provides AI-powered contract drafting and review inside Microsoft Word. Ontario law firms need more: billing, trust accounting, matter management, client intake, and conflict checking across your whole practice, not just the document you're currently drafting.",
  },
  {
    title: "Canadian Legal AI Built for Ontario",
    description:
      "While Spellbook is Canadian-founded, it focuses on commercial contract drafting AI. Atticus is built specifically for Ontario practice management — Ontario Limitations Act, LSO By-Law 9 trust accounting rules, and LSO AI guidance on using AI in Ontario legal practice.",
  },
  {
    title: "LSO-Compliant Trust Accounting Built In",
    description:
      "Spellbook has no trust accounting module. Ontario lawyers still need separate software for LSO By-Law 9 trust accounting. Atticus includes mixed trust accounts, monthly reconciliation, and trust ledger reporting alongside AI-powered drafting assistance.",
  },
  {
    title: "AI Across Your Entire Practice",
    description:
      "Spellbook AI works inside the Word document you have open. Atticus AI works across your entire practice — corporate records, agreements, correspondence, wills — extracting limitation period triggers, key dates, and parties regardless of document type or practice area.",
  },
  {
    title: "Platform Independence",
    description:
      "Spellbook requires Microsoft Word and Microsoft 365. Atticus is a standalone web platform — no dependency on Microsoft licensing or Word add-in compatibility issues. Access your practice from any browser on any device.",
  },
  {
    title: "One All-In Platform at $149 CAD",
    description:
      "Spellbook is a drafting add-in, and Ontario lawyers still need separate practice management, billing, and trust accounting tools. Atticus is $149 CAD per lawyer per month for the complete Ontario practice platform including AI.",
  },
];

export default function SpellbookAlternativePage() {
  return (
    <>
      <Script id="spellbook-alternative-schema" type="application/ld+json">
        {schemaJson}
      </Script>

      <div className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-amber-400 text-slate-900 text-sm font-semibold px-4 py-1 rounded-full mb-6">
              Spellbook Alternative
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              The Spellbook Alternative for Ontario Lawyers
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Spellbook provides AI-powered contract drafting and review inside Microsoft Word.
              Atticus manages your entire Ontario practice — matters, billing, trust accounting,
              and Canadian AI for all your client files. $149 CAD per lawyer per month.
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
              Why Ontario Lawyers Choose Atticus Over Spellbook
            </h2>
            <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
              Spellbook handles AI contract drafting inside Microsoft Word. Atticus manages
              your practice — from intake and conflict checking through matter management,
              trust accounting, and Canadian AI for your files.
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
              Atticus vs Spellbook: Feature Comparison
            </h2>
            <p className="text-center text-slate-600 mb-12">
              See how Atticus compares to Spellbook for Ontario solo and small law firms —
              complete Ontario practice management with Canadian AI vs AI contract drafting
              and review inside Microsoft Word.
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
              <table className="w-full bg-white">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left px-6 py-4 font-semibold">Feature</th>
                    <th className="text-center px-6 py-4 font-semibold text-amber-400">Atticus</th>
                    <th className="text-center px-6 py-4 font-semibold">Spellbook</th>
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
                      <td className="px-6 py-4 text-center text-slate-500 text-sm">{row.spellbook}</td>
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
                { href: "/harvey-ai-alternative", label: "Harvey AI Alternative" },
                { href: "/cocounsel-alternative", label: "CoCounsel Alternative" },
                { href: "/draftwise-alternative", label: "DraftWise Alternative" },
                { href: "/lexcheck-alternative", label: "LexCheck Alternative" },
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
