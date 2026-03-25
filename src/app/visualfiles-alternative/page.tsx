import { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "VisualFiles Alternative for Ontario Lawyers | Atticus vs VisualFiles",
  description:
    "Looking for a VisualFiles alternative? See how Atticus compares to VisualFiles for Ontario law firms. Ontario-built AI practice management vs UK case management software.",
  keywords: [
    "VisualFiles alternative",
    "VisualFiles Ontario",
    "VisualFiles vs Atticus",
    "law practice management software Ontario",
    "UK legal software alternative Canada",
    "case management software Ontario",
  ],
  openGraph: {
    title: "VisualFiles Alternative for Ontario Lawyers | Atticus",
    description:
      "Compare Atticus vs VisualFiles for Ontario law firms. Ontario-built AI practice management with LSO compliance.",
    type: "website",
  },
};

const schemaJson = `{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Atticus",
  "applicationCategory": "LegalSoftware",
  "operatingSystem": "Web",
  "description": "Ontario-built AI practice management platform for Canadian law firms — the modern alternative to VisualFiles.",
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
  visualFiles: string;
};

const featureComparison: Feature[] = [
  { feature: "Built for Ontario law firms", atticus: "Yes — Canadian compliance by design", visualFiles: "No — UK case management software" },
  { feature: "Trust accounting (LSO-compliant)", atticus: "Full LSO trust ledger, Form 9, s. 57 reconciliation", visualFiles: "UK Solicitors Regulation Authority rules — not Ontario LSO" },
  { feature: "AI document drafting", atticus: "Built-in AI trained on Ontario law", visualFiles: "No native AI capability" },
  { feature: "Pricing transparency", atticus: "$149 CAD/user/month, all-inclusive", visualFiles: "Enterprise licensing; pricing requires consultation" },
  { feature: "Deployment model", atticus: "Cloud-native SaaS, any browser", visualFiles: "On-premise with hosted options" },
  { feature: "Implementation timeline", atticus: "Same-day onboarding", visualFiles: "Weeks to months of implementation" },
  { feature: "Canadian data residency", atticus: "Data hosted in Canada", visualFiles: "UK-based data infrastructure" },
  { feature: "Matter management", atticus: "Intuitive matter-centric workflow", visualFiles: "Highly customizable case management" },
  { feature: "Client portal", atticus: "Included — secure document sharing", visualFiles: "Requires additional configuration" },
  { feature: "Billing & invoicing", atticus: "LEDES, flat fee, contingency, trust billing", visualFiles: "Time recording and billing — UK billing formats" },
  { feature: "Mobile access", atticus: "Full-featured mobile browser access", visualFiles: "Limited mobile support" },
  { feature: "Conflict checking", atticus: "Automated conflict search on intake", visualFiles: "Conflict module available" },
  { feature: "LSO compliance tools", atticus: "Built-in LSO rule compliance checks", visualFiles: "SRA-focused — not built for LSO" },
  { feature: "Support team", atticus: "Dedicated Canadian support", visualFiles: "UK-based support team" },
];

const reasons = [
  {
    title: "Ontario-First — Not a UK Retrofit",
    desc: "VisualFiles is a UK case management system built for the Solicitors Regulation Authority and UK legal workflows. Atticus is built from the ground up for Ontario law firms — with LSO trust accounting, Canadian billing formats, and Ontario court deadline tracking by default.",
  },
  {
    title: "Canadian Data Residency",
    desc: "All Atticus client data is hosted in Canada. VisualFiles infrastructure is UK-based. For Ontario lawyers handling sensitive client matters, keeping data on Canadian soil matters for both professional responsibility and client confidence.",
  },
  {
    title: "AI That Understands Ontario Law",
    desc: "Atticus includes an AI assistant calibrated to Ontario legislation, LSO practice rules, and Canadian court forms. VisualFiles has no native AI — and any AI integrations would not be trained on Ontario-specific content.",
  },
  {
    title: "Transparent Canadian Pricing",
    desc: "VisualFiles requires an enterprise consultation just to get pricing. Atticus is $149 CAD per user per month — all-inclusive, no hidden implementation fees, cancel any time.",
  },
  {
    title: "LSO Trust Accounting — Ready on Day One",
    desc: "VisualFiles trust accounting follows SRA rules, not LSO rules. Configuring it for Ontario compliance is a custom project. Atticus handles s. 57 reconciliation, Form 9, and mixed trust correctly by default.",
  },
  {
    title: "Onboard in Hours, Not Months",
    desc: "VisualFiles implementations take weeks to months with UK-based implementation consultants. Atticus onboards in a day — import your matters, set up billing, and start working immediately.",
  },
];

export default function VisualFilesAlternativePage() {
  return (
    <>
      <Script id="visualfiles-alternative-schema" type="application/ld+json">
        {schemaJson}
      </Script>
      <div className="min-h-screen bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <nav className="mb-8 text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-700">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">VisualFiles Alternative</span>
          </nav>

          <header className="mb-12 text-center">
            <div className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              Competitor Comparison
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              The Best VisualFiles Alternative for Ontario Law Firms
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              VisualFiles was built for UK solicitor firms. Atticus is built for Ontario lawyers — modern AI practice management with LSO compliance, Canadian data residency, and transparent pricing.
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
              6 Reasons Ontario Lawyers Choose Atticus Over VisualFiles
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
              Atticus vs VisualFiles: Feature Comparison
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
                    <th className="px-5 py-4 text-left font-semibold text-gray-600">VisualFiles</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {featureComparison.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-5 py-4 font-medium text-gray-800">{row.feature}</td>
                      <td className="px-5 py-4 text-gray-700">{row.atticus}</td>
                      <td className="px-5 py-4 text-gray-500">{row.visualFiles}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white text-center mb-14">
            <h2 className="text-2xl font-bold mb-3">Switch to Ontario-Built Practice Management</h2>
            <p className="text-blue-100 mb-2 text-lg">
              $149 CAD / lawyer / month — everything included.
            </p>
            <p className="text-blue-200 text-sm mb-6">
              Canadian data residency, LSO trust compliance, AI trained on Ontario law. Start today.
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
                { href: "/prolaw-alternative", label: "ProLaw Alternative" },
                { href: "/proclaim-alternative", label: "Proclaim Alternative" },
                { href: "/caret-legal-alternative", label: "Caret Legal Alternative" },
                { href: "/cosmolex-alternative", label: "CosmoLex Alternative" },
                { href: "/esilaw-alternative", label: "ESILaw Alternative" },
                { href: "/soluno-alternative", label: "Soluno Alternative" },
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
