import { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Zola Suite Alternative for Ontario Lawyers | Atticus vs Zola Suite",
  description:
    "Looking for a Zola Suite alternative? See how Atticus compares for Ontario law firms. Ontario-built AI practice management vs US legal software with built-in email.",
  keywords: [
    "Zola Suite alternative",
    "Zola Suite Ontario",
    "Zola Suite vs Atticus",
    "law practice management Ontario",
    "legal software Canada alternative",
    "Zola Suite replacement",
  ],
  openGraph: {
    title: "Zola Suite Alternative for Ontario Lawyers | Atticus",
    description: "Compare Atticus vs Zola Suite for Ontario law firms. Ontario-built AI practice management with LSO compliance.",
    type: "website",
  },
};

const schemaJson = `{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Atticus",
  "applicationCategory": "LegalSoftware",
  "operatingSystem": "Web",
  "description": "Ontario-built AI practice management platform for Canadian law firms — the modern alternative to Zola Suite.",
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
  zolaSuite: string;
};

const featureComparison: Feature[] = [
  { feature: "Built for Ontario law firms", atticus: "Yes — Canadian compliance by design", zolaSuite: "No — US-focused practice management" },
  { feature: "Trust accounting (LSO-compliant)", atticus: "Full LSO trust ledger, Form 9, s. 57 reconciliation", zolaSuite: "US trust accounting — requires configuration for Ontario LSO rules" },
  { feature: "AI document drafting", atticus: "Built-in AI trained on Ontario law", zolaSuite: "Limited AI features — US-focused" },
  { feature: "Pricing model", atticus: "$149 CAD/user/month, all-inclusive", zolaSuite: "Per-user pricing; higher tiers for advanced features" },
  { feature: "Built-in email client", atticus: "Integrates with existing email (Outlook, Gmail)", zolaSuite: "Native email client built into the platform" },
  { feature: "Canadian data residency", atticus: "Data hosted in Canada", zolaSuite: "US-based data infrastructure" },
  { feature: "Matter management", atticus: "Intuitive matter-centric workflow", zolaSuite: "Comprehensive matter management with email threading" },
  { feature: "Client portal", atticus: "Included — secure document sharing", zolaSuite: "Client portal available" },
  { feature: "Billing & invoicing", atticus: "LEDES, flat fee, contingency, trust billing", zolaSuite: "Full billing with LEDES and trust billing" },
  { feature: "Mobile access", atticus: "Full mobile browser access", zolaSuite: "Mobile app available" },
  { feature: "Conflict checking", atticus: "Automated conflict search on intake", zolaSuite: "Conflict checking included" },
  { feature: "LSO compliance tools", atticus: "Built-in LSO rule compliance checks", zolaSuite: "Not designed for LSO requirements" },
  { feature: "Onboarding", atticus: "Same-day self-serve onboarding", zolaSuite: "Guided implementation; email migration required" },
  { feature: "Support", atticus: "Dedicated Canadian support team", zolaSuite: "US-based support" },
];

const reasons = [
  {
    title: "Ontario-First Architecture",
    desc: "Zola Suite is built for US law firms. Atticus is built exclusively for Ontario and Canadian lawyers — LSO trust accounting rules, LAWPRO compliance considerations, and Canadian billing formats built in from day one, with no configuration required.",
  },
  {
    title: "Canadian Data Stays in Canada",
    desc: "All Atticus client data and email communications are hosted on Canadian servers. Zola Suite operates US-based infrastructure. For Ontario lawyers, Canadian data residency protects client confidentiality and aligns with professional obligations.",
  },
  {
    title: "AI Trained on Ontario Law",
    desc: "Atticus includes an AI assistant calibrated to Ontario legislation, LSO rules, and Ontario court forms. Zola Suite's features are US-focused — any AI capability will not understand Ontario practice requirements.",
  },
  {
    title: "No Email Migration Required",
    desc: "Switching to Zola Suite requires migrating your existing email to their built-in email client — a significant disruption. Atticus integrates with your existing Outlook or Gmail workflow without requiring you to change your email system.",
  },
  {
    title: "LSO Trust Compliance — Zero Config",
    desc: "Zola Suite's trust accounting needs reconfiguration for Ontario LSO rules. Atticus handles s. 57 monthly reconciliation, Form 9 reporting, and mixed trust accounts correctly by default — Ontario-compliant out of the box.",
  },
  {
    title: "Transparent $149 CAD Pricing",
    desc: "Zola Suite's pricing tiers vary by features. Atticus is one price — $149 CAD per user per month, fully inclusive. No migration fees, no add-on modules, no surprises.",
  },
];

export default function ZolaSuiteAlternativePage() {
  return (
    <>
      <Script id="zola-suite-alt-schema" type="application/ld+json">
        {schemaJson}
      </Script>
      <div className="min-h-screen bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <nav className="mb-8 text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-700">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Zola Suite Alternative</span>
          </nav>

          <header className="mb-12 text-center">
            <div className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              Competitor Comparison
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              The Best Zola Suite Alternative for Ontario Law Firms
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Zola Suite was built for US firms with a built-in email client. Atticus is built for Ontario lawyers — AI practice management with LSO compliance, Canadian data residency, and no email migration required.
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
              6 Reasons Ontario Lawyers Choose Atticus Over Zola Suite
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
              Atticus vs Zola Suite: Feature Comparison
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
                    <th className="px-5 py-4 text-left font-semibold text-gray-600">Zola Suite</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {featureComparison.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-5 py-4 font-medium text-gray-800">{row.feature}</td>
                      <td className="px-5 py-4 text-gray-700">{row.atticus}</td>
                      <td className="px-5 py-4 text-gray-500">{row.zolaSuite}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white text-center mb-14">
            <h2 className="text-2xl font-bold mb-3">Switch to Ontario-Built Practice Management</h2>
            <p className="text-blue-100 mb-2 text-lg">$149 CAD / lawyer / month — everything included.</p>
            <p className="text-blue-200 text-sm mb-6">Canadian data. LSO compliance. AI trained on Ontario law. No email migration.</p>
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
                { href: "/mycase-alternative", label: "MyCase Alternative" },
                { href: "/practicepanther-alternative", label: "PracticePanther Alternative" },
                { href: "/rocketmatter-alternative", label: "Rocket Matter Alternative" },
                { href: "/caret-legal-alternative", label: "Caret Legal Alternative" },
                { href: "/prolaw-alternative", label: "ProLaw Alternative" },
                { href: "/cosmolex-alternative", label: "CosmoLex Alternative" },
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
