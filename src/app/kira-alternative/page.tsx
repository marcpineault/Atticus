import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kira Systems Alternative for Ontario Lawyers | Atticus vs Kira",
  description:
    "Looking for a Kira Systems alternative? Compare Atticus vs Kira (by Litera) for Ontario law firms. Atticus combines Canadian legal AI with full practice management, trust accounting, HST billing, and LSO compliance — built for Ontario solo and small firms, not enterprise contract extraction.",
  openGraph: {
    title: "Kira Systems Alternative for Ontario Lawyers | Atticus vs Kira",
    description:
      "Why Ontario lawyers choose Atticus over Kira Systems. Atticus delivers Canadian legal AI plus full practice management in one LSO-compliant platform — not just contract analysis.",
    url: "https://getatticus.ca/kira-alternative",
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
  "description": "Atticus is the Kira Systems alternative for Ontario lawyers that combines Canadian legal AI with full practice management, trust accounting, HST billing, and LSO compliance in one platform built for Ontario solo and small law firms.",
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
  kira: string;
};

const featureComparison: Feature[] = [
  {
    feature: "Practice management",
    atticus: "Full integrated practice management",
    kira: "AI contract analysis and extraction tool only; no practice management",
  },
  {
    feature: "Ontario trust accounting",
    atticus: "Built-in, LSO compliant",
    kira: "No trust accounting functionality",
  },
  {
    feature: "HST billing",
    atticus: "Native HST with CRA-compliant invoices",
    kira: "No billing or invoicing module",
  },
  {
    feature: "Time tracking",
    atticus: "Integrated time and billing",
    kira: "No time tracking functionality",
  },
  {
    feature: "AI legal work",
    atticus: "Canadian legal AI: document drafting, summarization, limitation period flagging, LSO compliance",
    kira: "Machine learning contract analysis: provision extraction, due diligence review, contract comparison across large document sets",
  },
  {
    feature: "Matter management",
    atticus: "Full matter lifecycle from intake to close",
    kira: "No matter or case management; project-based document upload",
  },
  {
    feature: "Limitation period alerts",
    atticus: "Ontario Limitations Act built in",
    kira: "No limitation period tracking",
  },
  {
    feature: "Conflict checking",
    atticus: "Automated conflict search",
    kira: "Not included",
  },
  {
    feature: "Client intake",
    atticus: "Automated client intake portal",
    kira: "Not included",
  },
  {
    feature: "LSO compliance",
    atticus: "Built for Ontario LSO requirements",
    kira: "No Ontario-specific LSO compliance features",
  },
  {
    feature: "Target market",
    atticus: "Ontario solo and small law firms",
    kira: "Large law firms and corporate legal teams conducting high-volume due diligence (now owned by Litera)",
  },
  {
    feature: "Pricing (CAD)",
    atticus: "$149/lawyer/month (all-in, including AI)",
    kira: "Enterprise licensing in USD; volume-based; not designed for solo or small firm budgets",
  },
  {
    feature: "Data residency",
    atticus: "Canadian servers by default",
    kira: "Litera infrastructure (US-based); Canadian data residency not standard",
  },
  {
    feature: "Deployment",
    atticus: "Self-serve; ready in hours",
    kira: "Enterprise implementation; training required; machine learning customization",
  },
];

const reasons = [
  {
    title: "Kira is an Enterprise Due Diligence Tool — Not a Practice Platform",
    description:
      "Kira Systems (now part of Litera) is a machine learning platform for high-volume contract extraction and due diligence review at large law firms and corporate legal departments. It requires significant document upload and training to perform well. Ontario solo and small firms need daily practice management — billing, trust accounting, conflict checking, and client intake — that Kira does not provide.",
  },
  {
    title: "Ontario Trust Accounting Included in the Base Price",
    description:
      "Kira has no trust accounting functionality. Ontario lawyers have mandatory LSO trust accounting obligations. Atticus includes fully LSO-compliant trust ledgers, mixed trust accounts, and annual reporting as core features — not add-ons requiring separate enterprise tooling.",
  },
  {
    title: "AI for the Whole Practice — Not Just Document Extraction",
    description:
      "Kira&apos;s AI is optimized for extracting and tagging provisions from large sets of contracts. Atticus AI is built for Ontario lawyers&apos; full practice needs: drafting documents in Canadian legal context, summarizing case files, flagging Ontario limitation periods, and checking LSO professional conduct compliance.",
  },
  {
    title: "No Training or Machine Learning Customization Required",
    description:
      "Kira requires extensive training to recognize contract provision types specific to your firm&apos;s work. For large firms with dedicated knowledge management teams this is feasible. For Ontario solo and small firms, it is not. Atticus is ready to use from day one — no training data, no customization projects required.",
  },
  {
    title: "Canadian Data Residency as the Default",
    description:
      "Litera (Kira&apos;s owner) is a US-based company with US infrastructure. Canadian data residency requires specific configuration. Atticus stores all client data on Canadian servers by default — meeting PIPEDA and Law Society data guidance without additional negotiation.",
  },
  {
    title: "Affordable All-In CAD Pricing",
    description:
      "Kira carries enterprise licensing costs in USD designed for large firm use cases that produce ROI through high-volume transaction efficiency. Ontario solo and small firms cannot justify that cost. Atticus is $149 CAD per lawyer per month — all features including AI included.",
  },
];

export default function KiraAlternativePage() {
  return (
    <>
      <Script id="kira-alternative-schema" type="application/ld+json">
        {schemaJson}
      </Script>

      <div className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-amber-400 text-slate-900 text-sm font-semibold px-4 py-1 rounded-full mb-6">
              Kira Systems Alternative
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              The Kira Systems Alternative for Ontario Lawyers
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Kira Systems is an enterprise contract extraction tool for BigLaw
              due diligence — not a complete practice platform for Ontario solo
              and small firms. Atticus gives Ontario lawyers Canadian legal AI,
              trust accounting, billing, and LSO compliance in one platform.
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
              Why Ontario Lawyers Choose Atticus Over Kira Systems
            </h2>
            <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
              Kira solves a specific enterprise problem — high-volume contract
              extraction and due diligence. Ontario solo and small firms need a
              complete daily practice platform with Canadian AI, trust accounting,
              and LSO compliance built in.
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
              Atticus vs Kira Systems: Feature Comparison
            </h2>
            <p className="text-center text-slate-600 mb-12">
              See what Ontario lawyers get with Atticus vs Kira — a complete
              Canadian practice platform versus an enterprise contract extraction
              tool.
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
                      Kira Systems
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
                        {row.kira}
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
              Ready for a Complete Practice Platform — Not Just Contract Extraction?
            </h2>
            <p className="text-slate-600 mb-8">
              Ontario lawyers need trust accounting, billing, conflict checking,
              and Canadian legal AI — all in one platform. Try Atticus free for
              14 days.
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
                { href: "/luminance-alternative", label: "Luminance Alternative" },
                { href: "/harvey-ai-alternative", label: "Harvey AI Alternative" },
                { href: "/cocounsel-alternative", label: "CoCounsel Alternative" },
                { href: "/imanage-alternative", label: "iManage Alternative" },
                { href: "/netdocuments-alternative", label: "NetDocuments Alternative" },
                { href: "/clio-alternative", label: "Clio Alternative" },
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
