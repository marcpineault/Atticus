import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Niku Alternative for Ontario Lawyers | Atticus vs Niku (CA PPM)",
  description:
    "Looking for a Niku or CA PPM alternative? Compare Atticus vs Niku for Ontario law firms. Atticus combines full practice management, Canadian legal AI, LSO-compliant trust accounting, and HST billing — built for Ontario solo and small law firms.",
  openGraph: {
    title: "Niku Alternative for Ontario Lawyers | Atticus vs Niku (CA PPM)",
    description:
      "Why Ontario lawyers choose Atticus over Niku (CA Technologies Project Portfolio Management). Atticus delivers complete Ontario practice management at $149 CAD/lawyer/month.",
    url: "https://getatticus.ca/niku-alternative",
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
  "description": "Atticus is the Niku alternative for Ontario lawyers — Canadian legal AI, LSO-compliant trust accounting, HST billing, full practice management, and AI document analysis at $149 CAD per lawyer per month.",
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
  niku: string;
};

const featureComparison: Feature[] = [
  {
    feature: "Practice management",
    atticus: "Full integrated practice management for all Ontario practice areas",
    niku: "Enterprise project portfolio management (PPM) for IT and business operations — not law firm practice management",
  },
  {
    feature: "Ontario trust accounting",
    atticus: "Built-in, LSO By-Law 9 compliant; mixed trust, monthly reconciliation",
    niku: "No trust accounting — enterprise project management platform",
  },
  {
    feature: "HST billing",
    atticus: "Native HST with CRA-compliant invoices built in",
    niku: "No law firm billing or HST invoicing features",
  },
  {
    feature: "Time tracking",
    atticus: "Integrated time and billing; AI-assisted time capture",
    niku: "Project-level resource and time tracking for enterprise IT; not legal billing",
  },
  {
    feature: "AI legal work",
    atticus: "Canadian legal AI: document analysis, entity extraction, limitation period flagging, semantic search",
    niku: "No legal AI features — enterprise project and resource management focus",
  },
  {
    feature: "Matter management",
    atticus: "Full matter lifecycle from intake to close for all Ontario practice areas",
    niku: "No legal matter management — IT project and portfolio management only",
  },
  {
    feature: "Canadian / Ontario context",
    atticus: "Built for Ontario law: Limitations Act 2002, LSO By-Law 9 trust accounting, Ontario court procedures",
    niku: "Global enterprise platform — no Ontario legal compliance features",
  },
  {
    feature: "Limitation period alerts",
    atticus: "Ontario Limitations Act 2002 built in; AI extracts dates from documents",
    niku: "No limitation period tracking or legal deadline management",
  },
  {
    feature: "Conflict checking",
    atticus: "Automated AI-assisted conflict search",
    niku: "No conflict checking functionality",
  },
  {
    feature: "LSO compliance",
    atticus: "Built for Ontario LSO requirements; Canadian data residency; LSO AI guidance considered",
    niku: "No law society compliance features",
  },
  {
    feature: "Platform type",
    atticus: "Full Ontario law firm practice management platform with AI",
    niku: "Enterprise project portfolio management (PPM) platform",
  },
  {
    feature: "Target user",
    atticus: "Ontario solo and small law firms ($149 CAD/lawyer/month all-in)",
    niku: "Large enterprises managing IT and business project portfolios",
  },
  {
    feature: "Data residency",
    atticus: "Canadian servers by default",
    niku: "Enterprise data residency — not optimized for Canadian legal requirements",
  },
  {
    feature: "Complete solution",
    atticus: "End-to-end Ontario practice management: intake, conflicts, matters, time, trust, billing, AI",
    niku: "IT project portfolio management — no legal practice management capabilities",
  },
];

const reasons = [
  {
    title: "Purpose-Built for Law Firms, Not IT Projects",
    description:
      "Niku (CA PPM) is an enterprise project portfolio management platform for IT and business operations. Atticus is a complete Ontario law firm practice management platform — intake, conflicts, matters, time tracking, trust accounting, HST billing, and Canadian AI, all in one.",
  },
  {
    title: "LSO By-Law 9 Trust Accounting Built In",
    description:
      "Atticus includes trust accounting built specifically for Ontario LSO By-Law 9 compliance. Niku has no trust accounting functionality — it is not designed for law firm financial compliance.",
  },
  {
    title: "Canadian Legal AI Integrated With Your Practice",
    description:
      "Atticus AI is trained on Canadian and Ontario legal context. It extracts limitation dates, flags compliance issues, and answers practice questions — all integrated with your Ontario matters, not an enterprise IT management tool.",
  },
  {
    title: "Ontario Limitation Period Intelligence",
    description:
      "Atticus AI extracts key dates from client documents and applies Ontario Limitations Act 2002 rules automatically. Niku has no legal deadline tracking or Ontario limitation period intelligence.",
  },
  {
    title: "Built for Small Firms, Not Enterprise IT",
    description:
      "Niku targets large enterprise IT departments with complex project portfolio requirements. Atticus is built for Ontario solo and small law firms — at $149 CAD per lawyer per month, with no enterprise IT management overhead.",
  },
  {
    title: "All-In Pricing at $149 CAD",
    description:
      "Atticus is $149 CAD per lawyer per month for complete Ontario practice management including AI. No enterprise licensing, no IT project management overhead, no separate legal software required.",
  },
];

export default function NikuAlternativePage() {
  return (
    <>
      <Script id="niku-alternative-schema" type="application/ld+json">
        {schemaJson}
      </Script>

      <div className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-amber-400 text-slate-900 text-sm font-semibold px-4 py-1 rounded-full mb-6">
              Niku / CA PPM Alternative
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              The Niku Alternative for Ontario Lawyers
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Niku (CA Technologies Project Portfolio Management) is an enterprise IT project management
              platform — not designed for law firm practice management, trust accounting, or Ontario
              legal compliance. Atticus is built from the ground up for Ontario law firms at $149 CAD
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
              Why Ontario Lawyers Choose Atticus Over Niku
            </h2>
            <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
              Atticus is a complete Ontario law firm platform — practice management, trust accounting,
              and Canadian AI built for the lawyers doing the legal work. Not an enterprise IT
              project portfolio management tool.
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
              Atticus vs Niku (CA PPM): Feature Comparison
            </h2>
            <p className="text-center text-slate-600 mb-12">
              See how Atticus compares to Niku for Ontario solo and small law firms —
              complete Ontario practice management with integrated Canadian AI vs an enterprise
              IT project portfolio management platform.
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
              <table className="w-full bg-white">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left px-6 py-4 font-semibold">Feature</th>
                    <th className="text-center px-6 py-4 font-semibold text-amber-400">Atticus</th>
                    <th className="text-center px-6 py-4 font-semibold">Niku / CA PPM</th>
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
                      <td className="px-6 py-4 text-center text-slate-500 text-sm">{row.niku}</td>
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
                { href: "/harvey-ai-alternative", label: "Harvey AI Alternative" },
                { href: "/lexata-alternative", label: "Lexata Alternative" },
                { href: "/ai-for-lawyers", label: "AI for Ontario Lawyers" },
                { href: "/leap-alternative", label: "LEAP Alternative" },
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
