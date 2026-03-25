import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Worldox Alternative for Ontario Lawyers | Atticus vs Worldox",
  description:
    "Looking for a Worldox alternative? Compare Atticus vs Worldox for Ontario law firms. Full practice management, AI document analysis, trust accounting, HST billing, and LSO compliance — built for Canadian law.",
  openGraph: {
    title: "Worldox Alternative for Ontario Lawyers | Atticus vs Worldox",
    description:
      "Why Ontario lawyers choose Atticus over Worldox. Atticus combines document management with full practice management, trust accounting, and LSO compliance in one Canadian platform.",
    url: "https://getatticus.ca/worldox-alternative",
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
  "description": "Atticus is the Worldox alternative that provides AI-powered document management plus full practice management, Ontario trust accounting, HST billing, and LSO compliance for Ontario law firms.",
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
  worldox: string;
};

const featureComparison: Feature[] = [
  {
    feature: "Document management",
    atticus: "AI-powered document analysis and storage",
    worldox: "On-premise or cloud DMS with matter-centric filing",
  },
  {
    feature: "Ontario trust accounting",
    atticus: "Built-in, LSO compliant",
    worldox: "Not included (document platform only)",
  },
  {
    feature: "HST billing",
    atticus: "Native HST with CRA-compliant invoices",
    worldox: "No billing functionality",
  },
  {
    feature: "Time tracking",
    atticus: "Integrated time and billing",
    worldox: "Not included",
  },
  {
    feature: "AI document intelligence",
    atticus: "Canadian legal AI for drafting and analysis",
    worldox: "Basic search and classification; no AI drafting",
  },
  {
    feature: "Matter management",
    atticus: "Full matter lifecycle",
    worldox: "Matter folder organization within DMS",
  },
  {
    feature: "Limitation period alerts",
    atticus: "Ontario Limitations Act built in",
    worldox: "Not included",
  },
  {
    feature: "Conflict checking",
    atticus: "Automated conflict search",
    worldox: "Not included",
  },
  {
    feature: "Client intake",
    atticus: "Automated client intake portal",
    worldox: "Not included",
  },
  {
    feature: "LSO compliance",
    atticus: "Built for LSO requirements",
    worldox: "No LSO compliance features",
  },
  {
    feature: "Deployment",
    atticus: "Cloud-native; no local IT required",
    worldox: "Primarily on-premise; Worldox GX Cloud available",
  },
  {
    feature: "Pricing (CAD)",
    atticus: "$149/lawyer/month (all-in)",
    worldox: "Per-seat licensing plus server and IT costs (on-premise)",
  },
  {
    feature: "Implementation",
    atticus: "Self-serve; ready in hours",
    worldox: "IT-dependent installation and configuration",
  },
  {
    feature: "Platform scope",
    atticus: "Full practice management",
    worldox: "Document management only",
  },
];

const reasons = [
  {
    title: "Complete Practice Management Beyond Document Filing",
    description:
      "Worldox is a well-established document management system for law firms. Ontario solo and small firms need more than organized file storage: trust accounting, HST billing, limitation period tracking, conflict checking, and matter management. Atticus provides all of this in one platform. Worldox requires separate software for every function beyond document storage.",
  },
  {
    title: "No Trust Accounting in Worldox",
    description:
      "Worldox includes no trust accounting capabilities. Ontario lawyers have LSO obligations around trust ledgers, mixed trust accounts, and annual reporting. Atticus includes fully LSO-compliant trust accounting as a core feature — at no additional cost.",
  },
  {
    title: "Cloud-Native vs On-Premise Complexity",
    description:
      "Worldox is traditionally an on-premise product requiring server installation, IT maintenance, and local backup management. Atticus is cloud-native — accessible from anywhere, no server to maintain, automatic updates, and no IT overhead for solo and small Ontario firms.",
  },
  {
    title: "AI Built for Ontario Legal Practice",
    description:
      "Worldox offers document search and classification features but no legal AI drafting. Atticus AI is purpose-built for Canadian legal practice — drafting Ontario-specific documents, summarizing files in Canadian legal context, and flagging LSO compliance issues automatically.",
  },
  {
    title: "Canadian Data Residency by Default",
    description:
      "Worldox on-premise stores data on your own servers, while Worldox GX Cloud hosting depends on the hosting provider and their region configuration. Atticus stores all client data on Canadian servers by default — meeting PIPEDA requirements and Law Society data guidance without additional configuration.",
  },
  {
    title: "All-Inclusive CAD Pricing, No IT Budget Required",
    description:
      "Worldox on-premise requires per-seat licensing plus server costs, IT support, and backup infrastructure. Atticus is $149 CAD per lawyer per month — all features included, no hardware costs, no IT fees, and no currency risk from USD pricing.",
  },
];

export default function WorldoxAlternativePage() {
  return (
    <>
      <Script id="worldox-alternative-schema" type="application/ld+json">
        {schemaJson}
      </Script>

      <div className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-amber-400 text-slate-900 text-sm font-semibold px-4 py-1 rounded-full mb-6">
              Worldox Alternative
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              The Worldox Alternative Built for Ontario Lawyers
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Worldox manages your documents — but Ontario lawyers also need
              trust accounting, billing, limitation period tracking, and LSO
              compliance. Atticus provides everything in one Canadian platform.
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
              Why Ontario Lawyers Choose Atticus Over Worldox
            </h2>
            <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
              Worldox is a proven on-premise document management system. Ontario
              solo and small firms need a complete, cloud-native practice
              management solution with Canadian compliance built in — not just an
              on-premise document filing system.
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
              Atticus vs Worldox: Feature Comparison
            </h2>
            <p className="text-center text-slate-600 mb-12">
              See what Ontario lawyers get with Atticus vs what Worldox includes
              as a document management platform.
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
                      Worldox
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
                        {row.worldox}
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
              Ready to Switch from Worldox?
            </h2>
            <p className="text-slate-600 mb-8">
              Ontario lawyers deserve one platform that handles everything —
              documents, billing, trust accounting, and LSO compliance.
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
                { href: "/netdocuments-alternative", label: "NetDocuments Alternative" },
                { href: "/imanage-alternative", label: "iManage Alternative" },
                { href: "/clio-alternative", label: "Clio Alternative" },
                { href: "/leap-alternative", label: "LEAP Alternative" },
                { href: "/pclaw-alternative", label: "PCLaw Alternative" },
                { href: "/cosmolex-alternative", label: "CosmoLex Alternative" },
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
