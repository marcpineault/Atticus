import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Law Ruler Alternative for Ontario Lawyers | Atticus vs Law Ruler CRM",
  description:
    "Looking for a Law Ruler alternative? Compare Atticus vs Law Ruler for Ontario law firms. Atticus combines full practice management, client intake, LSO-compliant trust accounting, Canadian legal AI, and HST billing — built for Ontario solo and small law firms.",
  openGraph: {
    title: "Law Ruler Alternative for Ontario Lawyers | Atticus vs Law Ruler CRM",
    description:
      "Why Ontario lawyers choose Atticus over Law Ruler. Atticus delivers complete practice management, LSO-compliant trust accounting, and Canadian legal AI — not just intake CRM.",
    url: "https://getatticus.ca/lawruler-alternative",
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
  "description": "Atticus is the Law Ruler alternative for Ontario lawyers that combines Canadian legal AI with LSO-compliant trust accounting, HST billing, matter management, client intake, and AI document analysis in one platform built for Ontario solo and small law firms.",
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
  lawruler: string;
};

const featureComparison: Feature[] = [
  {
    feature: "Practice management",
    atticus: "Full integrated practice management for all practice areas",
    lawruler: "CRM and intake-focused; limited post-intake practice management",
  },
  {
    feature: "Ontario trust accounting",
    atticus: "Built-in, LSO By-Law 9 compliant; mixed trust, monthly reconciliation",
    lawruler: "No trust accounting; requires separate practice management software",
  },
  {
    feature: "HST billing",
    atticus: "Native HST with CRA-compliant invoices built in",
    lawruler: "No billing module; intake and CRM focus only",
  },
  {
    feature: "Time tracking",
    atticus: "Integrated time and billing; AI-assisted time capture",
    lawruler: "No time tracking; focused on lead intake and conversion",
  },
  {
    feature: "AI legal work",
    atticus: "Canadian legal AI: document drafting, summarization, limitation period flagging, LSO compliance, chat assistant",
    lawruler: "AI-assisted intake forms and automated follow-up; no legal AI for documents or matters",
  },
  {
    feature: "Matter management",
    atticus: "Full matter lifecycle from intake to close",
    lawruler: "Lead and intake pipeline management; limited post-retention matter management",
  },
  {
    feature: "Client intake",
    atticus: "AI-powered intake with conflict checking; customizable forms; portal access",
    lawruler: "Core strength: automated intake, e-signatures, web forms, text/email follow-up",
  },
  {
    feature: "Document management",
    atticus: "AI document analysis, summarization, and entity extraction; semantic search across all files",
    lawruler: "Document upload for intake purposes; no AI document intelligence",
  },
  {
    feature: "Limitation period alerts",
    atticus: "Ontario Limitations Act 2002 built in; AI extracts dates from documents",
    lawruler: "No limitation period tracking",
  },
  {
    feature: "Conflict checking",
    atticus: "Automated AI-assisted conflict search",
    lawruler: "Basic conflict check in intake workflow",
  },
  {
    feature: "LSO compliance",
    atticus: "Built for Ontario LSO requirements; Canadian data residency; LSO AI guidance considered",
    lawruler: "US-based platform; Ontario LSO compliance requires configuration and additional tools",
  },
  {
    feature: "AI assistant",
    atticus: "Atticus chat: answers questions about your practice, clients, deadlines, and trust balances",
    lawruler: "No conversational AI for practice management",
  },
  {
    feature: "Pricing (CAD)",
    atticus: "$149/lawyer/month (all-in, including AI)",
    lawruler: "Monthly subscription per seat; separate practice management software cost additional",
  },
  {
    feature: "Data residency",
    atticus: "Canadian servers by default",
    lawruler: "US-based servers; Canadian data residency not standard",
  },
];

const reasons = [
  {
    title: "Full Practice Management — Not Just Intake",
    description:
      "Law Ruler is a CRM and intake automation platform — it is designed to convert leads into retained clients. After retention, you still need separate practice management software for matters, time tracking, billing, and trust accounting. Atticus handles the full practice lifecycle from intake through billing and trust accounting in one platform.",
  },
  {
    title: "LSO-Compliant Ontario Trust Accounting Built In",
    description:
      "Law Ruler has no trust accounting module. Ontario lawyers using Law Ruler for intake must use a separate accounting system for trust funds. Atticus includes LSO By-Law 9 compliant trust accounting — mixed trust accounts, monthly reconciliation, and trust ledger reporting — as part of the core product.",
  },
  {
    title: "Canadian Legal AI Included",
    description:
      "Law Ruler includes AI for intake automation (form filling, follow-up). Atticus includes Canadian legal AI for document analysis, limitation period detection, AI-assisted conflict checking, and the Atticus chat assistant — giving you AI throughout the matter lifecycle, not just at intake.",
  },
  {
    title: "Canadian Data Residency as the Default",
    description:
      "Law Ruler is a US-based platform with US data hosting. Atticus stores all client data on Canadian servers by default — aligned with Law Society of Ontario guidance on cloud storage of client data.",
  },
  {
    title: "HST Billing and CRA-Compliant Invoicing",
    description:
      "Law Ruler has no billing module. Ontario lawyers must use separate invoicing software to generate HST-compliant invoices. Atticus includes native HST billing with CRA-compliant invoices generated directly from tracked time — no additional tool required.",
  },
  {
    title: "One Platform at a Transparent All-In Price",
    description:
      "Law Ruler pricing is per seat for the CRM only — Ontario lawyers must add separate billing software, trust accounting software, and practice management software on top. Atticus is $149 CAD per lawyer per month for the complete platform: intake, matters, billing, trust accounting, and Canadian AI.",
  },
];

export default function LawRulerAlternativePage() {
  return (
    <>
      <Script id="lawruler-alternative-schema" type="application/ld+json">
        {schemaJson}
      </Script>

      <div className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-amber-400 text-slate-900 text-sm font-semibold px-4 py-1 rounded-full mb-6">
              Law Ruler Alternative
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              The Law Ruler Alternative for Ontario Lawyers
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Law Ruler is a CRM and intake automation platform — after
              retention, you still need practice management, billing, and trust
              accounting software. Atticus is the complete Ontario practice
              management platform: client intake, matters, LSO-compliant trust
              accounting, and Canadian legal AI — all in one product.
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
              Why Ontario Lawyers Choose Atticus Over Law Ruler
            </h2>
            <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
              Law Ruler automates intake. Atticus manages your entire practice —
              from intake through trust accounting, billing, and AI document
              analysis — built specifically for Ontario LSO requirements.
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
              Atticus vs Law Ruler: Feature Comparison
            </h2>
            <p className="text-center text-slate-600 mb-12">
              See how Atticus compares to Law Ruler for Ontario solo and small
              law firms — complete practice management with Canadian AI vs
              intake CRM requiring additional practice management software.
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
              <table className="w-full bg-white">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left px-6 py-4 font-semibold">Feature</th>
                    <th className="text-center px-6 py-4 font-semibold text-amber-400">Atticus</th>
                    <th className="text-center px-6 py-4 font-semibold">Law Ruler</th>
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
                      <td className="px-6 py-4 text-center text-slate-500 text-sm">{row.lawruler}</td>
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
              Ready for Complete Ontario Practice Management?
            </h2>
            <p className="text-slate-600 mb-8">
              Client intake. Matter management. Trust accounting built for LSO By-Law 9. HST billing.
              AI document analysis. Limitation period tracking. All in one platform at $149 CAD per
              lawyer per month. Try Atticus free for 14 days.
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
                { href: "/clio-grow-alternative", label: "Clio Grow Alternative" },
                { href: "/lawmatics-alternative", label: "Lawmatics Alternative" },
                { href: "/mycase-alternative", label: "MyCase Alternative" },
                { href: "/practicepanther-alternative", label: "PracticePanther Alternative" },
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
