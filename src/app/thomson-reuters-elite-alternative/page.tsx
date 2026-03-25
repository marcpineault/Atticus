import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thomson Reuters Elite Alternative for Ontario Lawyers | Atticus vs Elite",
  description:
    "Looking for a Thomson Reuters Elite alternative? Compare Atticus vs Elite 3E for Ontario law firms. Full practice management, trust accounting, HST billing, AI document analysis, and LSO compliance — built for Canadian solo and small firms.",
  openGraph: {
    title: "Thomson Reuters Elite Alternative for Ontario Lawyers | Atticus vs Elite",
    description:
      "Why Ontario lawyers choose Atticus over Thomson Reuters Elite. Atticus combines full practice management with trust accounting and LSO compliance in one affordable Canadian platform.",
    url: "https://getatticus.ca/thomson-reuters-elite-alternative",
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
  "description": "Atticus is the Thomson Reuters Elite alternative that provides full practice management, Ontario trust accounting, HST billing, AI document analysis, and LSO compliance for Ontario solo and small law firms.",
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
  elite: string;
};

const featureComparison: Feature[] = [
  {
    feature: "Practice management",
    atticus: "Full integrated practice management",
    elite: "Enterprise billing, time, and matter management (large firms)",
  },
  {
    feature: "Ontario trust accounting",
    atticus: "Built-in, LSO compliant",
    elite: "Not optimized for Ontario LSO trust requirements",
  },
  {
    feature: "HST billing",
    atticus: "Native HST with CRA-compliant invoices",
    elite: "Billing module exists; Canadian tax configuration required",
  },
  {
    feature: "Time tracking",
    atticus: "Integrated time and billing",
    elite: "Integrated time tracking in Elite 3E",
  },
  {
    feature: "AI document intelligence",
    atticus: "Canadian legal AI for drafting and analysis",
    elite: "AI features focused on time capture and billing analytics",
  },
  {
    feature: "Matter management",
    atticus: "Full matter lifecycle",
    elite: "Comprehensive matter management in Enterprise suite",
  },
  {
    feature: "Limitation period alerts",
    atticus: "Ontario Limitations Act built in",
    elite: "Not included as a standard feature",
  },
  {
    feature: "Conflict checking",
    atticus: "Automated conflict search",
    elite: "Conflict checking module available",
  },
  {
    feature: "Client intake",
    atticus: "Automated client intake portal",
    elite: "Not a standard feature",
  },
  {
    feature: "LSO compliance",
    atticus: "Built for Ontario LSO requirements",
    elite: "No specific Ontario LSO compliance features",
  },
  {
    feature: "Target market",
    atticus: "Ontario solo and small law firms",
    elite: "Large and global law firms (Am Law 200); not designed for small firms",
  },
  {
    feature: "Pricing (CAD)",
    atticus: "$149/lawyer/month (all-in)",
    elite: "Enterprise pricing in USD; six-figure implementation costs; minimum seats",
  },
  {
    feature: "Implementation",
    atticus: "Self-serve; ready in hours",
    elite: "Enterprise implementation project; 6-18 months; dedicated IT team required",
  },
  {
    feature: "Data residency",
    atticus: "Canadian servers by default",
    elite: "US-based infrastructure; Canadian hosting configuration varies",
  },
];

const reasons = [
  {
    title: "Built for Solo and Small Firms — Not Global Law Firms",
    description:
      "Thomson Reuters Elite (Elite 3E) is designed for large and global law firms with hundreds of lawyers and complex billing structures. Ontario solo and small firm lawyers cannot practically deploy Elite — the cost, implementation timeline, and IT requirements are prohibitive. Atticus is built specifically for Ontario solo and small firms.",
  },
  {
    title: "Ontario Trust Accounting Without the Enterprise Complexity",
    description:
      "Elite&apos;s accounting features are built for large firm billing complexity, not Ontario LSO trust requirements. Atticus includes fully LSO-compliant trust ledgers, mixed trust accounts, and annual reporting as core features — ready to use without custom configuration.",
  },
  {
    title: "Deploy Today, Not in 12 Months",
    description:
      "Elite 3E implementations for law firms typically take 6-18 months and require a dedicated implementation team. Ontario solo and small firms need software that works today. Atticus is self-serve and can be deployed in hours — no implementation consultant required.",
  },
  {
    title: "AI for Canadian Legal Practice",
    description:
      "Thomson Reuters offers AI tools focused on billing analytics and time capture. Atticus AI is purpose-built for Ontario legal drafting, file summarization in Canadian legal context, and LSO compliance flagging — the AI work Ontario lawyers actually need done.",
  },
  {
    title: "Canadian Data Residency as the Default",
    description:
      "Elite&apos;s infrastructure is US-based with Canadian hosting requiring specific configuration. Atticus stores all client data on Canadian servers by default — meeting PIPEDA requirements and Law Society data guidance without additional setup.",
  },
  {
    title: "Affordable All-Inclusive CAD Pricing",
    description:
      "Thomson Reuters Elite carries six-figure implementation costs and enterprise per-seat fees in USD. A solo Ontario practitioner could not deploy Elite at any reasonable cost. Atticus is $149 CAD per lawyer per month — all features included, no enterprise contract, no implementation fees.",
  },
];

export default function ThomsonReutersEliteAlternativePage() {
  return (
    <>
      <Script id="thomson-reuters-elite-alternative-schema" type="application/ld+json">
        {schemaJson}
      </Script>

      <div className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-amber-400 text-slate-900 text-sm font-semibold px-4 py-1 rounded-full mb-6">
              Thomson Reuters Elite Alternative
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              The Thomson Reuters Elite Alternative for Ontario Lawyers
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Elite is built for global law firms — not Ontario solo and small
              practices. Atticus provides full practice management, trust
              accounting, AI, and LSO compliance in one Canadian platform at a
              price Ontario firms can actually afford.
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
              Why Ontario Lawyers Choose Atticus Over Thomson Reuters Elite
            </h2>
            <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
              Thomson Reuters Elite is enterprise software for the world&apos;s
              largest law firms. Ontario solo and small firms need affordable,
              complete practice management with Canadian compliance — not a
              six-figure enterprise deployment.
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
              Atticus vs Thomson Reuters Elite: Feature Comparison
            </h2>
            <p className="text-center text-slate-600 mb-12">
              See what Ontario lawyers get with Atticus vs Elite 3E — software
              built for very different scales of practice.
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
                      Thomson Reuters Elite
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
                        {row.elite}
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
              Ready for a Right-Sized Alternative to Thomson Reuters Elite?
            </h2>
            <p className="text-slate-600 mb-8">
              Ontario lawyers deserve one platform built for their practice size —
              with trust accounting, billing, and LSO compliance included.
              Try Atticus free for 14 days.
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
                { href: "/intapp-alternative", label: "Intapp Alternative" },
                { href: "/imanage-alternative", label: "iManage Alternative" },
                { href: "/netdocuments-alternative", label: "NetDocuments Alternative" },
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
