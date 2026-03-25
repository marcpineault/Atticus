import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "WorkSmart (Aderant) Alternative for Ontario Lawyers | Atticus vs WorkSmart",
  description:
    "Looking for a WorkSmart alternative? Compare Atticus vs Aderant WorkSmart for Ontario law firms. Atticus combines full practice management, Canadian legal AI, LSO-compliant trust accounting, and HST billing — built for Ontario solo and small law firms, not large Am Law firms.",
  openGraph: {
    title: "WorkSmart (Aderant) Alternative for Ontario Lawyers | Atticus vs WorkSmart",
    description:
      "Why Ontario lawyers choose Atticus over Aderant WorkSmart. Atticus delivers complete Ontario practice management, LSO-compliant trust accounting, and Canadian legal AI at $149 CAD/lawyer/month — not an enterprise Am Law firm platform.",
    url: "https://getatticus.ca/worksmart-alternative",
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
  "description": "Atticus is the Aderant WorkSmart alternative for Ontario lawyers that combines Canadian legal AI with LSO-compliant trust accounting, HST billing, full practice management, and AI document analysis — a complete Ontario law firm platform at $149 CAD/lawyer/month, not an enterprise Am Law firm practice management system.",
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
  workSmart: string;
};

const featureComparison: Feature[] = [
  {
    feature: "Practice management",
    atticus: "Full integrated practice management for all Ontario practice areas",
    workSmart: "Enterprise practice management for large Am Law and BigLaw firms — complex implementation, high cost",
  },
  {
    feature: "Ontario trust accounting",
    atticus: "Built-in, LSO By-Law 9 compliant; mixed trust, monthly reconciliation",
    workSmart: "General trust accounting features for large firms — not specifically built for Ontario LSO By-Law 9 requirements",
  },
  {
    feature: "HST billing",
    atticus: "Native HST with CRA-compliant invoices built in",
    workSmart: "Billing for large US/global firms; Canadian HST configuration may require customization",
  },
  {
    feature: "Time tracking",
    atticus: "Integrated time and billing; AI-assisted time capture",
    workSmart: "Enterprise time and billing for large law firms; complex configuration",
  },
  {
    feature: "AI legal work",
    atticus: "Canadian legal AI: document analysis, entity extraction, limitation period flagging, semantic search",
    workSmart: "Practice management and billing platform; AI features limited to billing analytics",
  },
  {
    feature: "Matter management",
    atticus: "Full matter lifecycle from intake to close for all Ontario practice areas",
    workSmart: "Enterprise matter management; designed for hundreds of lawyers, not solo/small firms",
  },
  {
    feature: "Canadian / Ontario context",
    atticus: "Built for Ontario law: Limitations Act 2002, LSO By-Law 9 trust accounting, Ontario court procedures",
    workSmart: "Aderant is a US-founded company; Canadian and Ontario-specific configurations require additional setup",
  },
  {
    feature: "Limitation period alerts",
    atticus: "Ontario Limitations Act 2002 built in; AI extracts dates from documents",
    workSmart: "No built-in Ontario limitation period tracking",
  },
  {
    feature: "Conflict checking",
    atticus: "Automated AI-assisted conflict search",
    workSmart: "Conflict checking available in enterprise version; complex setup for large firms",
  },
  {
    feature: "LSO compliance",
    atticus: "Built for Ontario LSO requirements; Canadian data residency; LSO AI guidance considered",
    workSmart: "No Ontario-specific LSO compliance features built in; requires configuration",
  },
  {
    feature: "Platform type",
    atticus: "Full Ontario law firm practice management platform with AI",
    workSmart: "Aderant WorkSmart is enterprise practice management and financial management for large BigLaw and Am Law firms",
  },
  {
    feature: "Target user",
    atticus: "Ontario solo and small law firms ($149 CAD/lawyer/month all-in)",
    workSmart: "Large Am Law 200 and BigLaw firms with 100+ lawyers; enterprise pricing and implementation",
  },
  {
    feature: "Data residency",
    atticus: "Canadian servers by default",
    workSmart: "Aderant US-based; Canadian data residency requires enterprise arrangement",
  },
  {
    feature: "Implementation",
    atticus: "Self-serve setup; start in minutes",
    workSmart: "Multi-month enterprise implementation; significant professional services cost",
  },
];

const reasons = [
  {
    title: "Built for Ontario Solo and Small Firms",
    description:
      "Aderant WorkSmart is an enterprise practice management system designed for Am Law 200 and BigLaw firms with 100+ lawyers. Atticus is purpose-built for Ontario solo and small law firms — start billing in minutes, not months.",
  },
  {
    title: "LSO By-Law 9 Trust Accounting Built In",
    description:
      "Atticus includes trust accounting built specifically for Ontario LSO By-Law 9 compliance from day one. WorkSmart requires configuration for Canadian law firm trust requirements — Atticus works out of the box.",
  },
  {
    title: "Complete Ontario Practice Management",
    description:
      "Atticus delivers intake, conflicts, matter management, time tracking, trust accounting, HST billing, and Canadian AI in a single platform at $149 CAD per lawyer per month — no multi-month enterprise implementation.",
  },
  {
    title: "Canadian Legal AI Built for Ontario Practice",
    description:
      "Atticus AI is trained on Canadian and Ontario legal context — Limitations Act 2002, LSO By-Law 9, Ontario court procedures. WorkSmart is a billing and matter management platform without Canadian legal AI.",
  },
  {
    title: "Ontario Limitation Period Intelligence",
    description:
      "Atticus AI extracts key dates from your client documents and applies Ontario Limitations Act 2002 rules automatically. WorkSmart has no built-in Ontario limitation period tracking.",
  },
  {
    title: "All-In Pricing at $149 CAD",
    description:
      "Atticus is $149 CAD per lawyer per month — all features included, no enterprise implementation fees, no professional services required. Aderant WorkSmart pricing is enterprise-level and includes significant implementation costs.",
  },
];

export default function WorkSmartAlternativePage() {
  return (
    <>
      <Script id="worksmart-alternative-schema" type="application/ld+json">
        {schemaJson}
      </Script>

      <div className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-amber-400 text-slate-900 text-sm font-semibold px-4 py-1 rounded-full mb-6">
              Aderant WorkSmart Alternative
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              The Aderant WorkSmart Alternative for Ontario Lawyers
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Aderant WorkSmart is an enterprise practice management system for Am Law 200 and
              BigLaw firms with 100+ lawyers. Atticus is built from the ground up for Ontario
              solo and small law firms — LSO-compliant trust accounting, Canadian AI, and full
              practice management at $149 CAD per lawyer per month.
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
              Why Ontario Lawyers Choose Atticus Over Aderant WorkSmart
            </h2>
            <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
              WorkSmart is designed for large enterprise law firms. Atticus is a complete Ontario
              law firm platform — practice management, trust accounting, and Canadian AI built for
              Ontario solo and small firms who need results without enterprise complexity.
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
              Atticus vs Aderant WorkSmart: Feature Comparison
            </h2>
            <p className="text-center text-slate-600 mb-12">
              See how Atticus compares to Aderant WorkSmart for Ontario solo and small law firms —
              purpose-built Ontario practice management with Canadian AI vs an enterprise Am Law firm platform.
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
              <table className="w-full bg-white">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left px-6 py-4 font-semibold">Feature</th>
                    <th className="text-center px-6 py-4 font-semibold text-amber-400">Atticus</th>
                    <th className="text-center px-6 py-4 font-semibold">Aderant WorkSmart</th>
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
                      <td className="px-6 py-4 text-center text-slate-500 text-sm">{row.workSmart}</td>
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
              $149 CAD per lawyer per month. Start today.
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
                { href: "/pclaw-alternative", label: "PCLaw Alternative" },
                { href: "/leap-alternative", label: "LEAP Alternative" },
                { href: "/prolaw-alternative", label: "ProLaw Alternative" },
                { href: "/thomson-reuters-elite-alternative", label: "Thomson Reuters Elite Alternative" },
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
