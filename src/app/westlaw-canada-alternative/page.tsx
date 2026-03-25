import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Westlaw Canada Alternative for Ontario Lawyers | Atticus vs Thomson Reuters Westlaw",
  description:
    "Looking for a Westlaw Canada alternative? Compare Atticus vs Thomson Reuters Westlaw Canada for Ontario law firms. Atticus combines full practice management, Canadian legal AI for your client files, LSO-compliant trust accounting, and HST billing — built for Ontario solo and small law firms.",
  openGraph: {
    title: "Westlaw Canada Alternative for Ontario Lawyers | Atticus vs Thomson Reuters Westlaw",
    description:
      "Why Ontario lawyers pair Atticus with or choose it over Westlaw Canada. Atticus delivers complete practice management, LSO-compliant trust accounting, and Canadian legal AI for your files — not just case law search.",
    url: "https://getatticus.ca/westlaw-canada-alternative",
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
  "description": "Atticus is the Canadian practice management platform for Ontario lawyers that combines Canadian legal AI with LSO-compliant trust accounting, HST billing, matter management, and AI document analysis — complementing or replacing Westlaw Canada for solo and small law firms.",
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
  westlaw: string;
};

const featureComparison: Feature[] = [
  {
    feature: "Practice management",
    atticus: "Full integrated practice management for all practice areas",
    westlaw: "Legal research platform only; no practice management",
  },
  {
    feature: "Ontario trust accounting",
    atticus: "Built-in, LSO By-Law 9 compliant; mixed trust, monthly reconciliation",
    westlaw: "No trust accounting",
  },
  {
    feature: "HST billing",
    atticus: "Native HST with CRA-compliant invoices built in",
    westlaw: "No billing",
  },
  {
    feature: "Time tracking",
    atticus: "Integrated time and billing; AI-assisted time capture",
    westlaw: "No time tracking",
  },
  {
    feature: "Canadian case law and legislation",
    atticus: "AI extracts case references, legislation citations, and limitation periods from your client files",
    westlaw: "Core strength: comprehensive Canadian case law, legislation, secondary sources, and AI-powered legal research (CoCounsel)",
  },
  {
    feature: "AI for legal research",
    atticus: "AI practice assistant knows your files; Canadian legal AI for document analysis",
    westlaw: "CoCounsel AI legal research assistant (Thomson Reuters AI); natural language search",
  },
  {
    feature: "Matter management",
    atticus: "Full matter lifecycle from intake to close",
    westlaw: "No matter management",
  },
  {
    feature: "Document management",
    atticus: "AI document analysis, summarization, entity extraction; semantic search across your files",
    westlaw: "Case law and secondary source document search; no client file document management",
  },
  {
    feature: "Limitation period alerts",
    atticus: "Ontario Limitations Act 2002 built in; AI extracts dates from your client documents",
    westlaw: "No limitation period tracking for client files",
  },
  {
    feature: "Conflict checking",
    atticus: "Automated AI-assisted conflict search",
    westlaw: "No conflict checking",
  },
  {
    feature: "LSO compliance",
    atticus: "Built for Ontario LSO requirements; Canadian data residency; LSO AI guidance considered",
    westlaw: "Thomson Reuters Canada; Canadian legal content; practice management compliance not included",
  },
  {
    feature: "Pricing (CAD)",
    atticus: "$149/lawyer/month (all-in, including AI)",
    westlaw: "Per-seat subscription; pricing varies by plan and practice area modules",
  },
  {
    feature: "Data residency",
    atticus: "Canadian servers for all client data by default",
    westlaw: "Thomson Reuters Canada; data hosting varies by product",
  },
  {
    feature: "Practice scope",
    atticus: "Manages all Ontario practice areas: matters, billing, trust, AI for every client file",
    westlaw: "Legal research across all practice areas; integration with Thomson Reuters Elite for large firms",
  },
];

const reasons = [
  {
    title: "Practice Management — Westlaw Handles Research",
    description:
      "Westlaw Canada is a legal research tool — it provides case law, legislation, and secondary sources. Atticus is the practice management layer that runs your firm: matters, time, billing, trust accounting, and AI for your specific client files. They serve different purposes; many Ontario firms need both.",
  },
  {
    title: "LSO-Compliant Trust Accounting Built In",
    description:
      "Westlaw has no trust accounting. Ontario lawyers using Westlaw for research still need separate software for LSO By-Law 9 trust accounting. Atticus includes mixed trust accounts, monthly reconciliation, and trust ledger reporting — at no additional cost.",
  },
  {
    title: "AI That Reads Your Client Files — Not Just Published Law",
    description:
      "Westlaw&apos;s CoCounsel AI is optimized for researching published case law and legislation. Atticus AI reads your uploaded client documents — contracts, medical records, correspondence — and extracts limitation periods, key dates, and parties specific to your matters.",
  },
  {
    title: "Limitation Period Detection from Your Documents",
    description:
      "Westlaw does not track limitation periods in your client files. Atticus AI analyzes uploaded documents and flags Ontario limitation period deadlines from the Limitations Act 2002 — service dates, accident dates, breach dates — automatically extracted from your case documents.",
  },
  {
    title: "Complete Practice Operations for Ontario Solo Firms",
    description:
      "Solo and small Ontario law firms need both research access and practice management. Atticus manages the full operational layer — client intake, matters, time tracking, HST billing, and trust accounting — at $149 CAD per lawyer per month.",
  },
  {
    title: "Canadian Client Data Stays in Canada",
    description:
      "Atticus stores all client files, trust records, and matter data on Canadian servers by default — aligned with LSO guidance on cloud storage of client data under Rule 3.3-1.",
  },
];

export default function WestlawCanadaAlternativePage() {
  return (
    <>
      <Script id="westlaw-canada-alternative-schema" type="application/ld+json">
        {schemaJson}
      </Script>

      <div className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-amber-400 text-slate-900 text-sm font-semibold px-4 py-1 rounded-full mb-6">
              Westlaw Canada Alternative
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              The Westlaw Canada Alternative for Ontario Lawyers
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Thomson Reuters Westlaw Canada is a legal research database —
              it provides case law and legislation, not practice management.
              Atticus is the complete Ontario practice management platform
              that complements your research tools: matters, billing, trust
              accounting, and Canadian AI for your client files.
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
              What Atticus Does That Westlaw Canada Doesn&apos;t
            </h2>
            <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
              Westlaw provides legal research. Atticus manages your practice.
              Ontario solo and small firms typically need both — here&apos;s
              what Atticus adds to your practice stack.
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
              Atticus vs Westlaw Canada: Feature Comparison
            </h2>
            <p className="text-center text-slate-600 mb-12">
              See how Atticus compares to Thomson Reuters Westlaw Canada for Ontario solo
              and small law firms — complete practice management with Canadian AI vs
              Canadian legal research platform.
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
              <table className="w-full bg-white">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left px-6 py-4 font-semibold">Feature</th>
                    <th className="text-center px-6 py-4 font-semibold text-amber-400">Atticus</th>
                    <th className="text-center px-6 py-4 font-semibold">Westlaw Canada</th>
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
                      <td className="px-6 py-4 text-center text-slate-500 text-sm">{row.westlaw}</td>
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
              Keep Westlaw Canada for legal research. Add Atticus for practice management —
              LSO-compliant trust accounting, HST billing, AI document analysis, and limitation
              period tracking. $149 CAD per lawyer per month.
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
                { href: "/quicklaw-alternative", label: "Quicklaw Alternative" },
                { href: "/cocounsel-alternative", label: "CoCounsel Alternative" },
                { href: "/thomson-reuters-elite-alternative", label: "Thomson Reuters Elite Alternative" },
                { href: "/harvey-ai-alternative", label: "Harvey AI Alternative" },
                { href: "/clio-alternative", label: "Clio Alternative" },
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
