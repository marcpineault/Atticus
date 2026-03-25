import { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SmartAdvocate Alternative for Ontario Lawyers | Atticus vs SmartAdvocate",
  description:
    "Looking for a SmartAdvocate alternative? See how Atticus compares for Ontario personal injury and litigation firms. Ontario-built AI practice management vs US plaintiff litigation software.",
  keywords: [
    "SmartAdvocate alternative",
    "SmartAdvocate Ontario",
    "SmartAdvocate vs Atticus",
    "personal injury law software Ontario",
    "plaintiff litigation software Ontario",
    "SmartAdvocate Canada alternative",
  ],
  openGraph: {
    title: "SmartAdvocate Alternative for Ontario Lawyers | Atticus",
    description: "Compare Atticus vs SmartAdvocate for Ontario personal injury and litigation firms. Ontario-built AI practice management.",
    type: "website",
  },
};

const schemaJson = `{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Atticus",
  "applicationCategory": "LegalSoftware",
  "operatingSystem": "Web",
  "description": "Ontario-built AI practice management platform for Canadian law firms — the modern alternative to SmartAdvocate.",
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
  smartAdvocate: string;
};

const featureComparison: Feature[] = [
  { feature: "Built for Ontario law firms", atticus: "Yes — Canadian compliance by design", smartAdvocate: "No — US plaintiff litigation software" },
  { feature: "Trust accounting (LSO-compliant)", atticus: "Full LSO trust ledger, Form 9, s. 57 reconciliation", smartAdvocate: "US trust accounting — not designed for Ontario LSO rules" },
  { feature: "AI document drafting", atticus: "Built-in AI trained on Ontario law", smartAdvocate: "Limited AI features — US-focused" },
  { feature: "Pricing model", atticus: "$149 CAD/user/month, all-inclusive", smartAdvocate: "Per-user licensing; enterprise pricing for full features" },
  { feature: "Personal injury case management", atticus: "Matter management + Ontario PI workflow", smartAdvocate: "Deep PI case management with US-specific forms" },
  { feature: "Canadian data residency", atticus: "Data hosted in Canada", smartAdvocate: "US-based data infrastructure" },
  { feature: "Client portal", atticus: "Included — secure document sharing", smartAdvocate: "Client portal available in higher tiers" },
  { feature: "Contingency billing", atticus: "Contingency fee tracking and billing", smartAdvocate: "Full contingency billing module" },
  { feature: "Medical record management", atticus: "Document management with tagging", smartAdvocate: "Specialized medical record tracking and chronology tools" },
  { feature: "OHIP and FSRA forms", atticus: "Ontario-specific form templates", smartAdvocate: "US insurance forms — Canadian forms require customization" },
  { feature: "Referral tracking", atticus: "Referral source tracking", smartAdvocate: "Detailed referral and intake management" },
  { feature: "LSO compliance tools", atticus: "Built-in LSO rule compliance checks", smartAdvocate: "Not designed for LSO requirements" },
  { feature: "Onboarding", atticus: "Same-day self-serve onboarding", smartAdvocate: "Implementation and training required" },
  { feature: "Support", atticus: "Dedicated Canadian support team", smartAdvocate: "US-based support" },
];

const reasons = [
  {
    title: "Built for Ontario PI Practice, Not the US",
    desc: "SmartAdvocate is purpose-built for US plaintiff litigation firms. Atticus is built for Ontario — with FSRA accident benefits familiarity, Ontario court forms, LSO trust accounting, and OHIP considerations built into the Ontario context.",
  },
  {
    title: "Canadian Data Stays in Canada",
    desc: "All client health records, medical reports, and settlement information in Atticus are hosted on Canadian servers. SmartAdvocate operates US infrastructure. For Ontario PI firms handling sensitive client health information, Canadian data residency matters.",
  },
  {
    title: "LSO Trust Compliance Out of the Box",
    desc: "Contingency fee trust accounting under Ontario LSO rules requires proper trust accounting for settlement funds, disbursements, and fee accounts. Atticus handles this correctly by default — no configuration for Ontario rules required.",
  },
  {
    title: "Transparent $149 CAD Pricing",
    desc: "SmartAdvocate enterprise licensing requires a quote and has significant implementation costs. Atticus is $149 CAD per user per month — all-inclusive, no implementation fee, no long-term contract required.",
  },
  {
    title: "AI Trained on Ontario Law",
    desc: "Atticus includes an AI assistant calibrated to Ontario legislation, LSO rules, and Ontario court forms. SmartAdvocate AI features are US-focused and will not understand Ontario PI practice nuances.",
  },
  {
    title: "Onboard in Hours — Not Weeks",
    desc: "SmartAdvocate implementations take weeks with dedicated training. Atticus onboards in a day — import your matters, set up contingency fee tracking, and start managing files immediately.",
  },
];

export default function SmartAdvocateAlternativePage() {
  return (
    <>
      <Script id="smart-advocate-alt-schema" type="application/ld+json">
        {schemaJson}
      </Script>
      <div className="min-h-screen bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <nav className="mb-8 text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-700">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">SmartAdvocate Alternative</span>
          </nav>

          <header className="mb-12 text-center">
            <div className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              Competitor Comparison
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              The Best SmartAdvocate Alternative for Ontario Law Firms
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              SmartAdvocate was built for US plaintiff litigation firms. Atticus is built for Ontario — AI practice management with LSO compliance, Canadian data residency, and transparent pricing.
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
              6 Reasons Ontario PI Lawyers Choose Atticus Over SmartAdvocate
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
              Atticus vs SmartAdvocate: Feature Comparison
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
                    <th className="px-5 py-4 text-left font-semibold text-gray-600">SmartAdvocate</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {featureComparison.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-5 py-4 font-medium text-gray-800">{row.feature}</td>
                      <td className="px-5 py-4 text-gray-700">{row.atticus}</td>
                      <td className="px-5 py-4 text-gray-500">{row.smartAdvocate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white text-center mb-14">
            <h2 className="text-2xl font-bold mb-3">Ontario PI Practice Management — Built Right</h2>
            <p className="text-blue-100 mb-2 text-lg">$149 CAD / lawyer / month — everything included.</p>
            <p className="text-blue-200 text-sm mb-6">Canadian data. LSO trust compliance. AI trained on Ontario law.</p>
            <Link href="/intake" className="inline-block bg-white text-blue-700 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
              Start Your Free Trial
            </Link>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Compare Other Alternatives</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { href: "/clio-alternative", label: "Clio Alternative" },
                { href: "/needles-alternative", label: "Needles Alternative" },
                { href: "/filevine-alternative", label: "Filevine Alternative" },
                { href: "/mycase-alternative", label: "MyCase Alternative" },
                { href: "/practicepanther-alternative", label: "PracticePanther Alternative" },
                { href: "/litify-alternative", label: "Litify Alternative" },
                { href: "/rocketmatter-alternative", label: "Rocket Matter Alternative" },
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
