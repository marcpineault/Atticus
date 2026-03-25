import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Opus 2 Alternative for Ontario Lawyers | Atticus vs Opus",
  description:
    "Looking for an Opus 2 alternative? Compare Atticus vs Opus for Ontario law firms. Atticus delivers full practice management, trust accounting, HST billing, AI document analysis, and LSO compliance — built for Canadian solo and small firms, not just legal research.",
  openGraph: {
    title: "Opus 2 Alternative for Ontario Lawyers | Atticus vs Opus",
    description:
      "Why Ontario lawyers choose Atticus over Opus 2. Atticus combines full practice management with trust accounting and LSO compliance in one affordable Canadian platform.",
    url: "https://getatticus.ca/opus-alternative",
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
  "description": "Atticus is the Opus 2 alternative that combines AI practice management, Ontario trust accounting, HST billing, AI document analysis, and LSO compliance for Ontario solo and small law firms — not just legal research and transcription.",
  "url": "https://getatticus.ca",
  "featureList": [
    "AI-powered document analysis and management",
    "Ontario trust accounting (Law Society compliant)",
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
  opus: string;
};

const featureComparison: Feature[] = [
  {
    feature: "Practice management",
    atticus: "Full integrated practice management",
    opus: "Transcription and hearings management only; not a practice management platform",
  },
  {
    feature: "Ontario trust accounting",
    atticus: "Built-in, LSO compliant",
    opus: "No trust accounting functionality",
  },
  {
    feature: "HST billing",
    atticus: "Native HST with CRA-compliant invoices",
    opus: "No billing or invoicing module",
  },
  {
    feature: "Time tracking",
    atticus: "Integrated time and billing",
    opus: "No time tracking functionality",
  },
  {
    feature: "AI document intelligence",
    atticus: "Canadian legal AI for drafting, summarization, and analysis",
    opus: "AI transcription and annotation of hearings and proceedings",
  },
  {
    feature: "Matter management",
    atticus: "Full matter lifecycle from intake to close",
    opus: "Hearings and transcript management only",
  },
  {
    feature: "Limitation period alerts",
    atticus: "Ontario Limitations Act built in",
    opus: "Not included",
  },
  {
    feature: "Conflict checking",
    atticus: "Automated conflict search",
    opus: "Not included",
  },
  {
    feature: "Client intake",
    atticus: "Automated client intake portal",
    opus: "Not included",
  },
  {
    feature: "LSO compliance",
    atticus: "Built for Ontario LSO requirements",
    opus: "No Ontario-specific LSO compliance features",
  },
  {
    feature: "Target use case",
    atticus: "Complete daily practice management for Ontario solo and small firms",
    opus: "Dispute resolution: hearings, arbitrations, and tribunal proceedings",
  },
  {
    feature: "Pricing (CAD)",
    atticus: "$149/lawyer/month (all-in)",
    opus: "Per-hearing and per-user pricing for transcription services; not an all-in practice platform",
  },
  {
    feature: "Deployment",
    atticus: "Self-serve; ready in hours",
    opus: "Service-based setup for specific proceedings",
  },
  {
    feature: "Data residency",
    atticus: "Canadian servers by default",
    opus: "UK-based company; data hosting varies by deployment",
  },
];

const reasons = [
  {
    title: "Opus 2 is a Transcription Tool — Not a Practice Management Platform",
    description:
      "Opus 2 provides AI-powered transcription, annotation, and management of hearings and arbitration proceedings. It is not a practice management system. Ontario solo and small firms need billing, trust accounting, file management, conflict checking, and client intake — none of which Opus 2 provides. Atticus is built for managing your entire practice.",
  },
  {
    title: "Ontario Trust Accounting Included",
    description:
      "Opus 2 has no trust accounting functionality whatsoever. For Ontario lawyers, LSO-compliant trust accounting is not optional — it is a professional requirement. Atticus includes fully LSO-compliant trust ledgers, mixed trust accounts, and reporting as core features, ready from day one.",
  },
  {
    title: "Billing, HST, and Time Tracking — All in One",
    description:
      "Opus 2 does not include billing, time tracking, or HST invoicing. Every client matter requires docketing, invoicing, and tax-compliant billing. Atticus handles all of this natively — integrated time tracking, HST invoicing, and CRA-compliant records — at $149 CAD per lawyer per month.",
  },
  {
    title: "AI for the Work Ontario Lawyers Actually Do",
    description:
      "Opus 2 AI is optimized for transcription accuracy and hearing annotation. Atticus AI is built for Ontario legal practice: document drafting, file summarization, limitation period flagging, and LSO compliance checking. Purpose-built for the tasks Ontario practitioners perform daily.",
  },
  {
    title: "Canadian Data Residency as the Default",
    description:
      "Opus 2 is a UK-based company with data hosting that varies by deployment. Atticus stores all client data on Canadian servers by default — meeting PIPEDA requirements and Law Society data guidance without additional configuration or negotiation.",
  },
  {
    title: "One Platform — Not Two (or Three) Subscriptions",
    description:
      "Combining Opus 2 with a separate practice management platform and billing system means multiple subscriptions, separate data silos, and no integration. Atticus delivers practice management, billing, trust accounting, and AI in one Canadian platform — one subscription, one workflow.",
  },
];

export default function OpusAlternativePage() {
  return (
    <>
      <Script id="opus-alternative-schema" type="application/ld+json">
        {schemaJson}
      </Script>

      <div className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-amber-400 text-slate-900 text-sm font-semibold px-4 py-1 rounded-full mb-6">
              Opus 2 Alternative
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              The Opus 2 Alternative for Ontario Lawyers
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Opus 2 is a transcription and hearings tool — not a practice
              management platform. Atticus gives Ontario solo and small firms
              full practice management, trust accounting, AI, and LSO compliance
              in one Canadian platform.
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
              Why Ontario Lawyers Choose Atticus Over Opus 2
            </h2>
            <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
              Opus 2 serves a specific niche — AI transcription for hearings and
              arbitrations. Ontario solo and small firm lawyers need a complete
              daily practice platform, not a standalone transcription service.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reasons.map((reason, i) => (
                <div
                  key={i}
                  className="bg-slate-50 rounded-xl p-6 border border-slate-100"
                >
                  <div className="w-10 h-10 bg-amber-400 rounded-lg flex items-center justify-center text-slate-900 font-bold mb-4">
                    {i + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-20 px-6 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-900 mb-4">
              Atticus vs Opus 2: Feature Comparison
            </h2>
            <p className="text-center text-slate-600 mb-12">
              See what Ontario lawyers get with Atticus vs Opus 2 — a complete
              practice platform versus a specialized transcription tool.
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
              <table className="w-full bg-white">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left px-6 py-4 font-semibold">
                      Feature
                    </th>
                    <th className="text-center px-6 py-4 font-semibold text-amber-400">
                      Atticus
                    </th>
                    <th className="text-center px-6 py-4 font-semibold">
                      Opus 2
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {featureComparison.map((row, i) => (
                    <tr
                      key={i}
                      className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}
                    >
                      <td className="px-6 py-4 text-slate-700 font-medium">
                        {row.feature}
                      </td>
                      <td className="px-6 py-4 text-center text-slate-700">
                        <span className="inline-flex items-center gap-1">
                          <span className="text-green-600 font-bold">✓</span>
                          <span className="text-sm">{row.atticus}</span>
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center text-slate-500 text-sm">
                        {row.opus}
                      </td>
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
              Ready for a Complete Practice Platform — Not Just Transcription?
            </h2>
            <p className="text-slate-600 mb-8">
              Ontario lawyers need billing, trust accounting, conflict checking,
              and LSO compliance — all in one platform. Try Atticus free for 14
              days.
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
            <h3 className="text-lg font-semibold text-slate-900 mb-6">
              Compare More Alternatives
            </h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { href: "/thomson-reuters-elite-alternative", label: "Thomson Reuters Elite Alternative" },
                { href: "/intapp-alternative", label: "Intapp Alternative" },
                { href: "/casetext-alternative", label: "Casetext Alternative" },
                { href: "/clio-alternative", label: "Clio Alternative" },
                { href: "/leap-alternative", label: "LEAP Alternative" },
                { href: "/pclaw-alternative", label: "PCLaw Alternative" },
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
