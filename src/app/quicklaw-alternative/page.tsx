import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Quicklaw Alternative for Ontario Lawyers | Atticus vs LexisNexis Quicklaw",
  description:
    "Looking for a Quicklaw alternative? Compare Atticus vs LexisNexis Quicklaw for Ontario law firms. Atticus combines full practice management, Canadian legal AI for document analysis and research assistance, LSO-compliant trust accounting, and HST billing — built for Ontario solo and small law firms.",
  openGraph: {
    title: "Quicklaw Alternative for Ontario Lawyers | Atticus vs LexisNexis Quicklaw",
    description:
      "Why Ontario lawyers choose Atticus alongside or instead of Quicklaw. Atticus delivers complete practice management, LSO-compliant trust accounting, and Canadian legal AI — not just case law research.",
    url: "https://getatticus.ca/quicklaw-alternative",
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
  "description": "Atticus is the Canadian practice management platform for Ontario lawyers that combines Canadian legal AI with LSO-compliant trust accounting, HST billing, matter management, and AI document analysis — complementing or replacing Quicklaw for solo and small law firms.",
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
  quicklaw: string;
};

const featureComparison: Feature[] = [
  {
    feature: "Practice management",
    atticus: "Full integrated practice management for all practice areas",
    quicklaw: "Legal research platform only; no practice management",
  },
  {
    feature: "Ontario trust accounting",
    atticus: "Built-in, LSO By-Law 9 compliant; mixed trust, monthly reconciliation",
    quicklaw: "No trust accounting; research platform only",
  },
  {
    feature: "HST billing",
    atticus: "Native HST with CRA-compliant invoices built in",
    quicklaw: "No billing; research subscription only",
  },
  {
    feature: "Time tracking",
    atticus: "Integrated time and billing; AI-assisted time capture",
    quicklaw: "No time tracking",
  },
  {
    feature: "Canadian case law and legislation",
    atticus: "AI document analysis with Canadian legal context; extracts case references, limitation periods, legislation citations from your files",
    quicklaw: "Core strength: Canadian case law database (CanLII + premium sources), legislation, secondary sources, Canadian legal research",
  },
  {
    feature: "AI legal research",
    atticus: "AI practice assistant with context from your files; Canadian legal AI for document analysis and deadline extraction",
    quicklaw: "AI-assisted legal research tools (LexisNexis+ AI); natural language case law search",
  },
  {
    feature: "Matter management",
    atticus: "Full matter lifecycle from intake to close",
    quicklaw: "No matter management; research only",
  },
  {
    feature: "Document management",
    atticus: "AI document analysis, summarization, entity extraction; semantic search across your files",
    quicklaw: "No document management for client files",
  },
  {
    feature: "Limitation period alerts",
    atticus: "Ontario Limitations Act 2002 built in; AI extracts dates from documents",
    quicklaw: "No limitation period tracking",
  },
  {
    feature: "Conflict checking",
    atticus: "Automated AI-assisted conflict search",
    quicklaw: "No conflict checking",
  },
  {
    feature: "LSO compliance",
    atticus: "Built for Ontario LSO requirements; Canadian data residency; LSO AI guidance considered",
    quicklaw: "Canadian legal research platform; LSO compliance for practice management not included",
  },
  {
    feature: "Pricing (CAD)",
    atticus: "$149/lawyer/month (all-in, including AI)",
    quicklaw: "Subscription pricing; per-seat or firm licensing; separate from practice management costs",
  },
  {
    feature: "Data residency",
    atticus: "Canadian servers by default",
    quicklaw: "LexisNexis Canada; Canadian legal data; data hosting may vary by product tier",
  },
  {
    feature: "Deployment",
    atticus: "Self-serve; ready in hours; no implementation project",
    quicklaw: "Subscription sign-up; training on research tools recommended",
  },
];

const reasons = [
  {
    title: "Practice Management — Not Just Research",
    description:
      "Quicklaw (LexisNexis Quicklaw) is a legal research database — it provides case law, legislation, and secondary sources. It is not a practice management platform. Atticus manages your matters, time, billing, trust accounting, and client files — the operational layer that complements legal research tools.",
  },
  {
    title: "LSO-Compliant Ontario Trust Accounting",
    description:
      "Quicklaw has no trust accounting. Ontario lawyers using Quicklaw for research must use separate software for trust accounting. Atticus includes LSO By-Law 9 compliant trust accounting — mixed trust accounts, monthly reconciliation, and trust ledger reporting — in the core product.",
  },
  {
    title: "AI That Knows Your Client Files",
    description:
      "Quicklaw provides AI for researching published law. Atticus provides AI that knows your specific client files — analyzing uploaded documents, extracting limitation periods and key dates, and answering questions about your practice, clients, and deadlines. These are complementary AI capabilities.",
  },
  {
    title: "Limitation Period Detection From Your Documents",
    description:
      "Quicklaw does not track limitation periods in your client files. Atticus AI reads your uploaded documents and automatically extracts dates — accident dates, service dates, breach dates — and flags Ontario limitation period deadlines under the Limitations Act 2002.",
  },
  {
    title: "All Practice Operations in One Platform",
    description:
      "Solo and small Ontario law firms typically need both legal research access and practice management. Atticus handles the full practice management layer — intake, matters, time, billing, trust accounting — at $149 CAD per lawyer per month, separate from whatever research subscription the firm uses.",
  },
  {
    title: "Canadian Data Residency for Client Files",
    description:
      "Atticus stores all client data (documents, matter files, trust records) on Canadian servers by default — aligned with Law Society of Ontario guidance on cloud storage of client data. Your client files never leave Canada.",
  },
];

export default function QuicklawAlternativePage() {
  return (
    <>
      <Script id="quicklaw-alternative-schema" type="application/ld+json">
        {schemaJson}
      </Script>

      <div className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-amber-400 text-slate-900 text-sm font-semibold px-4 py-1 rounded-full mb-6">
              Quicklaw Alternative
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              The Quicklaw Alternative for Ontario Lawyers
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              LexisNexis Quicklaw is a Canadian legal research database —
              it provides case law and legislation, not practice management.
              Atticus is the complete Ontario practice management platform
              built to complement your research tools: matters, trust
              accounting, billing, and Canadian AI for your client files.
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
              Atticus and Quicklaw Serve Different Needs — Here&apos;s What Atticus Does
            </h2>
            <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
              Quicklaw provides legal research. Atticus manages your practice —
              clients, matters, billing, trust accounting, and AI for your
              specific files. Ontario solo and small firms typically need both.
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
              Atticus vs Quicklaw: Feature Comparison
            </h2>
            <p className="text-center text-slate-600 mb-12">
              See how Atticus compares to LexisNexis Quicklaw for Ontario solo and
              small law firms — complete practice management with Canadian AI vs
              Canadian legal research platform.
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
              <table className="w-full bg-white">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left px-6 py-4 font-semibold">Feature</th>
                    <th className="text-center px-6 py-4 font-semibold text-amber-400">Atticus</th>
                    <th className="text-center px-6 py-4 font-semibold">Quicklaw</th>
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
                      <td className="px-6 py-4 text-center text-slate-500 text-sm">{row.quicklaw}</td>
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
              Complete Your Ontario Practice Stack with Atticus
            </h2>
            <p className="text-slate-600 mb-8">
              Keep your legal research tools. Add Atticus for practice management —
              trust accounting built for LSO By-Law 9, HST billing, AI document analysis,
              limitation period tracking, and conflict checking. $149 CAD per lawyer per month.
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
                { href: "/cocounsel-alternative", label: "CoCounsel Alternative" },
                { href: "/lexisnexis-firm-manager-alternative", label: "LexisNexis Firm Manager Alternative" },
                { href: "/harvey-ai-alternative", label: "Harvey AI Alternative" },
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
