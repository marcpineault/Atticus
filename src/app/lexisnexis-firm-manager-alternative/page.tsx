import { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "LexisNexis Firm Manager Alternative for Ontario Lawyers | Atticus",
  description:
    "Looking for a LexisNexis Firm Manager alternative? See how Atticus compares for Ontario law firms. Ontario-built AI practice management vs US legal billing software.",
  keywords: [
    "LexisNexis Firm Manager alternative",
    "Firm Manager Ontario",
    "LexisNexis alternative Ontario",
    "law practice management Ontario",
    "legal billing software Ontario alternative",
  ],
  openGraph: {
    title: "LexisNexis Firm Manager Alternative for Ontario Lawyers | Atticus",
    description: "Compare Atticus vs LexisNexis Firm Manager for Ontario law firms. Ontario-built AI practice management.",
    type: "website",
  },
};

const schemaJson = `{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Atticus",
  "applicationCategory": "LegalSoftware",
  "operatingSystem": "Web",
  "description": "Ontario-built AI practice management platform for Canadian law firms — the modern alternative to LexisNexis Firm Manager.",
  "url": "https://getatticus.ca",
  "offers": {
    "@type": "Offer",
    "price": "149",
    "priceCurrency": "CAD",
    "priceSpecification": {
      "@type": "UnitPriceSpecification",
      "price": "149",
      "priceCurrency": "CAD",
      "unitText": "per user per month"
    }
  }
}`;

type Feature = {
  feature: string;
  atticus: string;
  firmManager: string;
};

const featureComparison: Feature[] = [
  { feature: "Built for Ontario law firms", atticus: "Yes — Canadian compliance by design", firmManager: "No — US-focused billing and PM software" },
  { feature: "Trust accounting (LSO-compliant)", atticus: "Full LSO trust ledger, Form 9, s. 57 reconciliation", firmManager: "US trust accounting — not calibrated to Ontario LSO rules" },
  { feature: "AI document drafting", atticus: "Built-in AI trained on Ontario law", firmManager: "No native AI drafting capability" },
  { feature: "Pricing transparency", atticus: "$149 CAD/user/month, all-inclusive", firmManager: "Tiered pricing; requires quote for Canadian firms" },
  { feature: "Canadian data residency", atticus: "Data hosted in Canada", firmManager: "US-based data infrastructure" },
  { feature: "Matter management", atticus: "Intuitive matter-centric workflow", firmManager: "Matter and billing management for US firms" },
  { feature: "Client portal", atticus: "Included — secure document sharing", firmManager: "Limited portal capabilities" },
  { feature: "Billing & invoicing", atticus: "LEDES, flat fee, contingency, trust billing", firmManager: "Full billing suite for US hourly billing" },
  { feature: "Mobile access", atticus: "Full-featured mobile browser access", firmManager: "Basic mobile access" },
  { feature: "Conflict checking", atticus: "Automated conflict search on intake", firmManager: "Conflict checking available" },
  { feature: "Onboarding", atticus: "Same-day self-serve onboarding", firmManager: "Guided setup required" },
  { feature: "LSO compliance tools", atticus: "Built-in LSO rule compliance checks", firmManager: "Not designed for LSO requirements" },
  { feature: "Support", atticus: "Dedicated Canadian support team", firmManager: "US-based support" },
  { feature: "LexisNexis research bundling", atticus: "Integrates with research tools separately", firmManager: "Bundled with LexisNexis research products" },
];

const reasons = [
  {
    title: "Built for Ontario, Not the US Market",
    desc: "LexisNexis Firm Manager is designed for US law firms and billing workflows. Atticus is built exclusively for Ontario and Canadian law firms — LSO trust accounting, Canadian billing, and LAWPRO risk management built in from day one.",
  },
  {
    title: "Canadian Data Stays in Canada",
    desc: "Atticus stores all client data on Canadian servers. LexisNexis operates US-based infrastructure. For Ontario lawyers handling sensitive client files, Canadian data residency matters.",
  },
  {
    title: "AI Calibrated to Ontario Law",
    desc: "Atticus includes an AI assistant trained on Ontario legislation, LSO rules, and Ontario court forms. Firm Manager has no native AI — and LexisNexis AI tools are US-focused research products, not Ontario practice management tools.",
  },
  {
    title: "No Bundling Required",
    desc: "LexisNexis bundles Firm Manager with research subscriptions — you pay for both whether or not you use LexisNexis for research. Atticus is standalone practice management at $149 CAD/user/month.",
  },
  {
    title: "LSO Trust Compliance Without Configuration",
    desc: "Setting up Firm Manager to meet Ontario LSO trust accounting rules requires significant customization. Atticus handles s. 57 reconciliation, Form 9, and mixed trust correctly by default.",
  },
  {
    title: "Onboard Today, Not Next Month",
    desc: "Firm Manager implementations require guided setup and training. Atticus onboards in hours — import your matters, configure your billing rates, and start tracking time immediately.",
  },
];

export default function LexisNexisFirmManagerAlternativePage() {
  return (
    <>
      <Script id="lexisnexis-fm-alt-schema" type="application/ld+json">
        {schemaJson}
      </Script>
      <div className="min-h-screen bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <nav className="mb-8 text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-700">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">LexisNexis Firm Manager Alternative</span>
          </nav>

          <header className="mb-12 text-center">
            <div className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              Competitor Comparison
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              The Best LexisNexis Firm Manager Alternative for Ontario Law Firms
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              LexisNexis Firm Manager was built for US firms. Atticus is built for Ontario lawyers — AI practice management with LSO compliance, Canadian data residency, and no bundling requirements.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/intake" className="bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Start Free Trial
              </Link>
              <Link href="/pricing" className="border border-gray-300 text-gray-700 font-semibold px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors">
                View Pricing
              </Link>
            </div>
          </header>

          <section className="mb-14">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              6 Reasons Ontario Lawyers Choose Atticus Over LexisNexis Firm Manager
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {reasons.map((reason, i) => (
                <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-sm mb-4">
                    {i + 1}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{reason.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{reason.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-14">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Atticus vs LexisNexis Firm Manager: Feature Comparison
            </h2>
            <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
              <table className="min-w-full divide-y divide-gray-200 text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-5 py-4 text-left font-semibold text-gray-700">Feature</th>
                    <th className="px-5 py-4 text-left font-semibold text-blue-700">
                      Atticus
                      <span className="ml-2 bg-blue-100 text-blue-700 text-xs px-2 py-0.5 rounded-full font-normal">Ontario-built</span>
                    </th>
                    <th className="px-5 py-4 text-left font-semibold text-gray-600">LexisNexis Firm Manager</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {featureComparison.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-5 py-4 font-medium text-gray-800">{row.feature}</td>
                      <td className="px-5 py-4 text-gray-700">{row.atticus}</td>
                      <td className="px-5 py-4 text-gray-500">{row.firmManager}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white text-center mb-14">
            <h2 className="text-2xl font-bold mb-3">Start with Ontario-Built Practice Management</h2>
            <p className="text-blue-100 mb-2 text-lg">$149 CAD / lawyer / month — everything included.</p>
            <p className="text-blue-200 text-sm mb-6">No research subscription bundle. Canadian data. LSO compliance ready.</p>
            <Link href="/intake" className="inline-block bg-white text-blue-700 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
              Start Your Free Trial
            </Link>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Compare Other Alternatives</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { href: "/clio-alternative", label: "Clio Alternative" },
                { href: "/pclaw-alternative", label: "PCLaw Alternative" },
                { href: "/cosmolex-alternative", label: "CosmoLex Alternative" },
                { href: "/prolaw-alternative", label: "ProLaw Alternative" },
                { href: "/caret-legal-alternative", label: "Caret Legal Alternative" },
                { href: "/visualfiles-alternative", label: "VisualFiles Alternative" },
                { href: "/practicepanther-alternative", label: "PracticePanther Alternative" },
                { href: "/tabs3-alternative", label: "Tabs3 Alternative" },
                { href: "/blog/law-firm-billing-software-ontario", label: "Ontario Billing Software Guide" },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="text-blue-600 hover:text-blue-800 text-sm font-medium hover:underline">
                  {link.label} &rarr;
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
