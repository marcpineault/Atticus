import { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Caret Legal Alternative for Ontario Lawyers | Atticus vs Caret Legal",
  description:
    "Looking for a Caret Legal alternative? See how Atticus compares to Caret Legal (formerly LawToolBox) for Ontario law firms. Ontario-built AI practice management vs US legal software.",
  keywords: [
    "Caret Legal alternative",
    "LawToolBox alternative",
    "Caret Legal vs Atticus",
    "Caret Legal Ontario",
    "law practice management software Ontario",
    "legal software Canada alternative",
  ],
  openGraph: {
    title: "Caret Legal Alternative for Ontario Lawyers | Atticus",
    description:
      "Compare Atticus vs Caret Legal for Ontario law firms. Ontario-built AI practice management with LSO compliance.",
    type: "website",
  },
};

const schemaJson = `{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Atticus",
  "applicationCategory": "LegalSoftware",
  "operatingSystem": "Web",
  "description": "Ontario-built AI practice management platform for Canadian law firms — the modern alternative to Caret Legal.",
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
  caretLegal: string;
};

const featureComparison: Feature[] = [
  { feature: "Built for Ontario law firms", atticus: "Yes — Canadian compliance by design", caretLegal: "No — US-focused product suite" },
  { feature: "Trust accounting (LSO-compliant)", atticus: "Full LSO trust ledger, Form 9, s. 57 reconciliation", caretLegal: "US trust accounting — requires Canadian reconfiguration" },
  { feature: "AI document drafting", atticus: "Built-in AI trained on Ontario law", caretLegal: "Limited AI features; third-party integrations" },
  { feature: "Pricing transparency", atticus: "$149 CAD/user/month, all-inclusive", caretLegal: "Bundled product tiers; pricing not publicly listed" },
  { feature: "Calendaring & deadlines", atticus: "Court deadlines, limitation periods, LSO rules", caretLegal: "Court rules calendar integration (LawToolBox heritage)" },
  { feature: "Client portal", atticus: "Included — secure document sharing", caretLegal: "Available in higher tiers" },
  { feature: "Billing & invoicing", atticus: "LEDES, flat fee, contingency, trust billing", caretLegal: "Full billing suite" },
  { feature: "Mobile access", atticus: "Full-featured mobile browser access", caretLegal: "Mobile app available" },
  { feature: "Conflict checking", atticus: "Automated conflict search on intake", caretLegal: "Conflict module included" },
  { feature: "Matter management", atticus: "Intuitive matter-centric workflow", caretLegal: "Comprehensive matter management" },
  { feature: "Canadian data residency", atticus: "Data hosted in Canada", caretLegal: "US-based data centres" },
  { feature: "Onboarding & implementation", atticus: "Same-day self-serve onboarding", caretLegal: "Guided implementation, longer ramp time" },
  { feature: "Canadian support", atticus: "Dedicated Canadian support team", caretLegal: "US-based support" },
  { feature: "LSO compliance tools", atticus: "Built-in LSO rule compliance checks", caretLegal: "Not specifically designed for LSO requirements" },
];

const reasons = [
  {
    title: "Ontario-First Architecture",
    desc: "Caret Legal (formerly LawToolBox, acquired by CARET Group) is built for the US legal market. Atticus is built exclusively for Ontario and Canadian law firms — with LSO trust accounting, LAWPRO risk considerations, and Canadian billing formats built in from day one.",
  },
  {
    title: "Your Data Stays in Canada",
    desc: "Atticus stores all client data on Canadian servers. For Ontario lawyers handling sensitive client information, Canadian data residency matters — both for client trust and potential regulatory considerations.",
  },
  {
    title: "AI Trained on Ontario Law",
    desc: "Atticus includes an AI assistant trained on Ontario legislation, LSO rules, and Ontario court forms. Caret Legal offers limited AI features that are not calibrated to Canadian legal practice.",
  },
  {
    title: "Transparent $149 CAD Pricing",
    desc: "Caret Legal bundles multiple product tiers without public pricing. Atticus is one flat rate — $149 CAD per user per month, everything included. No surprises, no annual lock-in.",
  },
  {
    title: "Built-In LSO Trust Compliance",
    desc: "Trust accounting in Caret Legal requires configuration for Ontario rules. Atticus handles s. 57 monthly reconciliation, Form 9 reporting, and mixed trust correctly by default — ready out of the box.",
  },
  {
    title: "Same-Day Onboarding",
    desc: "Getting started with Caret Legal requires guided implementation and training. Atticus onboards in hours — import your matters, configure billing, and start managing files the same day.",
  },
];

export default function CaretLegalAlternativePage() {
  return (
    <>
      <Script id="caret-legal-alternative-schema" type="application/ld+json">
        {schemaJson}
      </Script>
      <div className="min-h-screen bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <nav className="mb-8 text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-700">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Caret Legal Alternative</span>
          </nav>

          <header className="mb-12 text-center">
            <div className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              Competitor Comparison
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              The Best Caret Legal Alternative for Ontario Law Firms
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Caret Legal (formerly LawToolBox) was built for the US market. Atticus is built for Ontario lawyers — AI practice management with LSO compliance, Canadian data residency, and transparent pricing.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/intake"
                className="bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Start Free Trial
              </Link>
              <Link
                href="/pricing"
                className="border border-gray-300 text-gray-700 font-semibold px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </header>

          <section className="mb-14">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              6 Reasons Ontario Lawyers Choose Atticus Over Caret Legal
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
              Atticus vs Caret Legal: Feature Comparison
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
                    <th className="px-5 py-4 text-left font-semibold text-gray-600">Caret Legal</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {featureComparison.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-5 py-4 font-medium text-gray-800">{row.feature}</td>
                      <td className="px-5 py-4 text-gray-700">{row.atticus}</td>
                      <td className="px-5 py-4 text-gray-500">{row.caretLegal}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white text-center mb-14">
            <h2 className="text-2xl font-bold mb-3">Switch to an Ontario-Built Alternative</h2>
            <p className="text-blue-100 mb-2 text-lg">
              $149 CAD / lawyer / month — everything included.
            </p>
            <p className="text-blue-200 text-sm mb-6">
              Canadian data residency, LSO trust compliance, and AI trained on Ontario law. Start today.
            </p>
            <Link
              href="/intake"
              className="inline-block bg-white text-blue-700 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
            >
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
                { href: "/practicepanther-alternative", label: "PracticePanther Alternative" },
                { href: "/mycase-alternative", label: "MyCase Alternative" },
                { href: "/rocketmatter-alternative", label: "Rocket Matter Alternative" },
                { href: "/actionstep-alternative", label: "Actionstep Alternative" },
                { href: "/blog/law-firm-billing-software-ontario", label: "Ontario Billing Software Guide" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium hover:underline"
                >
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
