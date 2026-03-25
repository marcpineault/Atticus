import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nucleus Alternative for Ontario Lawyers | Atticus vs Nucleus Law",
  description:
    "Looking for a Nucleus alternative? Compare Atticus vs Nucleus Law for Ontario law firms. Atticus combines full practice management, Canadian legal AI for document analysis, LSO-compliant trust accounting, and HST billing — built for Ontario solo and small law firms.",
  openGraph: {
    title: "Nucleus Alternative for Ontario Lawyers | Atticus vs Nucleus Law",
    description:
      "Why Ontario lawyers choose Atticus over Nucleus Law. Atticus delivers complete Ontario practice management, LSO-compliant trust accounting, and Canadian legal AI — built from the ground up for Ontario, not US litigation software.",
    url: "https://getatticus.ca/nucleus-alternative",
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
  "description": "Atticus is the Nucleus alternative for Ontario lawyers that combines Canadian legal AI with LSO-compliant trust accounting, HST billing, full practice management, and AI document analysis — built from the ground up for Ontario law firms.",
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
  nucleus: string;
};

const featureComparison: Feature[] = [
  {
    feature: "Practice management",
    atticus: "Full integrated practice management for all Ontario practice areas",
    nucleus: "Legal practice management software; primarily focused on US plaintiff personal injury and mass tort firms",
  },
  {
    feature: "Ontario trust accounting",
    atticus: "Built-in, LSO By-Law 9 compliant; mixed trust, monthly reconciliation",
    nucleus: "Settlement tracking and trust/escrow functions designed for US personal injury settlement workflows; not configured for Ontario LSO By-Law 9",
  },
  {
    feature: "HST billing",
    atticus: "Native HST with CRA-compliant invoices built in",
    nucleus: "Billing for US firms; Canadian HST configuration requires verification",
  },
  {
    feature: "Time tracking",
    atticus: "Integrated time and billing; AI-assisted time capture",
    nucleus: "Time tracking included; optimized for US contingency fee personal injury matters",
  },
  {
    feature: "AI legal work",
    atticus: "Canadian legal AI: document analysis, entity extraction, limitation period flagging, semantic search across your files",
    nucleus: "Medical records management and document organization for US personal injury; no Canadian legal AI",
  },
  {
    feature: "Matter management",
    atticus: "Full matter lifecycle from intake to close for all Ontario practice areas",
    nucleus: "Matter management optimized for US plaintiff personal injury and mass tort workflows",
  },
  {
    feature: "Canadian / Ontario context",
    atticus: "Built for Ontario law: Limitations Act 2002, LSO By-Law 9 trust accounting, Ontario court procedures",
    nucleus: "US-based platform designed for US plaintiff litigation; no Ontario LSO compliance features",
  },
  {
    feature: "Limitation period alerts",
    atticus: "Ontario Limitations Act 2002 built in; AI extracts dates from documents",
    nucleus: "Statute of limitations tracking for US personal injury; no Ontario Limitations Act 2002 intelligence",
  },
  {
    feature: "Conflict checking",
    atticus: "Automated AI-assisted conflict search",
    nucleus: "Conflict checking included",
  },
  {
    feature: "LSO compliance",
    atticus: "Built for Ontario LSO requirements; Canadian data residency; LSO AI guidance considered",
    nucleus: "US-based; no Ontario LSO-specific compliance features",
  },
  {
    feature: "Pricing (CAD)",
    atticus: "$149/lawyer/month (all-in, including AI)",
    nucleus: "Subscription pricing in USD; contact for Canadian pricing",
  },
  {
    feature: "Data residency",
    atticus: "Canadian servers by default",
    nucleus: "US-based infrastructure; Canadian data residency requires verification",
  },
  {
    feature: "Origin",
    atticus: "Built for Ontario and Canadian legal practice from the ground up",
    nucleus: "US-founded legal practice management optimized for plaintiff personal injury and mass tort",
  },
  {
    feature: "Target firms",
    atticus: "Ontario solo and small law firms across all practice areas",
    nucleus: "US plaintiff personal injury, mass tort, and class action law firms",
  },
];

const reasons = [
  {
    title: "Built for All Ontario Practice Areas",
    description:
      "Nucleus is optimized for US plaintiff personal injury and mass tort litigation. Atticus is built for Ontario law firms across all practice areas — real estate, family law, corporate, civil litigation, wills and estates, immigration, and criminal defence.",
  },
  {
    title: "LSO By-Law 9 Trust Accounting Built In",
    description:
      "Atticus includes trust accounting built specifically for Ontario LSO By-Law 9 compliance — mixed trust accounts, monthly reconciliation, and trust ledger reporting. Nucleus is designed for US settlement escrow workflows, not Ontario LSO By-Law 9.",
  },
  {
    title: "Built for Ontario Law Firms",
    description:
      "Nucleus was designed for US plaintiff personal injury firms and adapted for other markets. Atticus was designed from the ground up for Ontario legal practice — LSO compliance, Ontario Limitations Act 2002, Canadian data residency, and HST billing.",
  },
  {
    title: "Canadian Legal AI Built for Ontario Practice",
    description:
      "Atticus AI is trained on Canadian and Ontario legal context — Ontario Limitations Act dates, LSO guidelines, and Canadian legal document patterns. Nucleus offers medical records management for US personal injury, not Canadian legal AI.",
  },
  {
    title: "Ontario Limitation Period Intelligence",
    description:
      "Atticus AI extracts key dates from your client documents and applies Ontario Limitations Act 2002 rules automatically. Nucleus tracks US statutes of limitations — not Ontario Limitations Act 2002 discoverability rules.",
  },
  {
    title: "All-In Pricing at $149 CAD",
    description:
      "Atticus is $149 CAD per lawyer per month for complete Ontario practice management including AI. No US-only software configured for Canadian use — a platform built for Ontario from day one.",
  },
];

export default function NucleusAlternativePage() {
  return (
    <>
      <Script id="nucleus-alternative-schema" type="application/ld+json">
        {schemaJson}
      </Script>

      <div className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-amber-400 text-slate-900 text-sm font-semibold px-4 py-1 rounded-full mb-6">
              Nucleus Alternative
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              The Nucleus Alternative for Ontario Lawyers
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Nucleus is a US-based legal practice management platform optimized for plaintiff personal
              injury and mass tort firms. Atticus is built from the ground up for Ontario law firms —
              LSO-compliant trust accounting, Canadian AI, and full practice management at $149 CAD
              per lawyer per month.
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
              Why Ontario Lawyers Choose Atticus Over Nucleus
            </h2>
            <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
              Nucleus is designed for US plaintiff personal injury and mass tort law firms.
              Atticus is a complete Ontario law firm platform — practice management, trust accounting,
              and Canadian AI across all Ontario practice areas.
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
              Atticus vs Nucleus: Feature Comparison
            </h2>
            <p className="text-center text-slate-600 mb-12">
              See how Atticus compares to Nucleus for Ontario solo and small law firms —
              full Ontario practice management with Canadian AI vs US plaintiff personal injury software.
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
              <table className="w-full bg-white">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left px-6 py-4 font-semibold">Feature</th>
                    <th className="text-center px-6 py-4 font-semibold text-amber-400">Atticus</th>
                    <th className="text-center px-6 py-4 font-semibold">Nucleus</th>
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
                      <td className="px-6 py-4 text-center text-slate-500 text-sm">{row.nucleus}</td>
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
              Atticus is built for Ontario from day one — LSO-compliant trust accounting, HST billing,
              Canadian AI, limitation period tracking, and conflict checking.
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
                { href: "/leap-alternative", label: "LEAP Alternative" },
                { href: "/smokeball-alternative", label: "Smokeball Alternative" },
                { href: "/cloudlex-alternative", label: "CloudLex Alternative" },
                { href: "/filevine-alternative", label: "Filevine Alternative" },
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
