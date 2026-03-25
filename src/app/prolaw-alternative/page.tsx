import { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ProLaw Alternative for Ontario Lawyers | Atticus vs Thomson Reuters ProLaw",
  description:
    "Looking for a ProLaw alternative? See how Atticus compares to Thomson Reuters ProLaw for Ontario law firms. Modern AI practice management vs legacy US-built enterprise software.",
  keywords: [
    "ProLaw alternative",
    "Thomson Reuters ProLaw alternative",
    "ProLaw vs Atticus",
    "ProLaw Ontario",
    "law practice management software Ontario",
    "ProLaw replacement",
  ],
  openGraph: {
    title: "ProLaw Alternative for Ontario Lawyers | Atticus",
    description:
      "Compare Atticus vs Thomson Reuters ProLaw for Ontario law firms. Modern AI practice management built for Canadian lawyers.",
    type: "website",
  },
};

const schemaJson = `{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Atticus",
  "applicationCategory": "LegalSoftware",
  "operatingSystem": "Web",
  "description": "Ontario-built AI practice management platform for Canadian law firms — the modern alternative to Thomson Reuters ProLaw.",
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
  prolaw: string;
};

const featureComparison: Feature[] = [
  { feature: "Built for Ontario law firms", atticus: "Yes — Canadian compliance by design", prolaw: "No — US-focused enterprise software" },
  { feature: "Trust accounting (Law Society)", atticus: "Full LSO-compliant trust ledger", prolaw: "Requires configuration for Canadian rules" },
  { feature: "AI document drafting", atticus: "Built-in AI trained on Ontario law", prolaw: "No native AI — third-party integrations only" },
  { feature: "Deployment model", atticus: "Cloud-native SaaS, any device", prolaw: "On-premise or hosted, complex IT setup" },
  { feature: "Implementation time", atticus: "Same-day onboarding", prolaw: "Months of implementation, consultant fees" },
  { feature: "Pricing model", atticus: "$149 CAD/user/month, all-inclusive", prolaw: "Enterprise licensing, high upfront costs" },
  { feature: "Client portal", atticus: "Included — secure document sharing", prolaw: "Limited; add-ons required" },
  { feature: "Billing & invoicing", atticus: "LEDES, flat fee, contingency, trust billing", prolaw: "Full billing suite — complex to configure" },
  { feature: "Mobile app", atticus: "Full-featured mobile access", prolaw: "Limited mobile capability" },
  { feature: "Conflict checking", atticus: "Automated conflict search on intake", prolaw: "Conflict module — manually configured" },
  { feature: "Matter management", atticus: "Intuitive matter-centric workflow", prolaw: "Comprehensive but steep learning curve" },
  { feature: "Reporting", atticus: "Real-time dashboards, LSO reports", prolaw: "Extensive reporting — requires training" },
  { feature: "Data ownership & portability", atticus: "Your data, exportable anytime", prolaw: "Vendor-controlled, migration complex" },
  { feature: "Support", atticus: "Dedicated Canadian support team", prolaw: "Enterprise support tiers, US-based" },
];

const reasons = [
  {
    title: "Built for Ontario, Not Fortune 500",
    desc: "ProLaw is a Thomson Reuters enterprise product built for large US law firms. Atticus is designed specifically for Ontario small and mid-size firms — with LSO trust accounting rules, LAWPRO compliance, and Canadian billing formats built in from day one.",
  },
  {
    title: "Days, Not Months, to Onboard",
    desc: "ProLaw implementations routinely take 3-6 months and require outside consultants. Atticus onboards in hours. Import your existing matters, set up billing, and start running your firm the same day.",
  },
  {
    title: "AI That Understands Ontario Law",
    desc: "ProLaw has no native AI. Atticus includes an AI assistant trained on Ontario legislation, LSO rules, and Ontario court forms — helping you draft, research, and manage matters without switching tools.",
  },
  {
    title: "Transparent, Predictable Pricing",
    desc: "ProLaw enterprise licensing includes high upfront costs, annual maintenance fees, and consultant costs. Atticus is $149 CAD per user per month — everything included, no hidden fees, cancel anytime.",
  },
  {
    title: "Modern Cloud Architecture",
    desc: "ProLaw runs on-premise or in hosted environments requiring IT infrastructure. Atticus is fully cloud-native — accessible from any browser, auto-updated, with enterprise-grade security and 99.9% uptime.",
  },
  {
    title: "LSO Trust Compliance Out of the Box",
    desc: "Configuring ProLaw for Ontario trust accounting requirements is a project in itself. Atticus handles s. 57 reconciliation, Form 9, and mixed trust accounts correctly by default — no configuration required.",
  },
];

export default function ProlawAlternativePage() {
  return (
    <>
      <Script id="prolaw-alternative-schema" type="application/ld+json">
        {schemaJson}
      </Script>
      <div className="min-h-screen bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-700">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">ProLaw Alternative</span>
          </nav>

          {/* Hero */}
          <header className="mb-12 text-center">
            <div className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              Competitor Comparison
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              The Best ProLaw Alternative for Ontario Law Firms
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Thomson Reuters ProLaw was built for large US firms. Atticus is built for Ontario lawyers — modern AI practice management with LSO compliance, transparent pricing, and same-day onboarding.
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

          {/* 6 Reasons */}
          <section className="mb-14">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              6 Reasons Ontario Lawyers Choose Atticus Over ProLaw
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

          {/* Feature Comparison Table */}
          <section className="mb-14">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Atticus vs ProLaw: Feature Comparison
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
                    <th className="px-5 py-4 text-left font-semibold text-gray-600">Thomson Reuters ProLaw</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {featureComparison.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-5 py-4 font-medium text-gray-800">{row.feature}</td>
                      <td className="px-5 py-4 text-gray-700">{row.atticus}</td>
                      <td className="px-5 py-4 text-gray-500">{row.prolaw}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Pricing CTA */}
          <section className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white text-center mb-14">
            <h2 className="text-2xl font-bold mb-3">Switch from ProLaw — No Consultant Required</h2>
            <p className="text-blue-100 mb-2 text-lg">
              $149 CAD / lawyer / month — everything included.
            </p>
            <p className="text-blue-200 text-sm mb-6">
              Import your matters, set up trust accounting, and start billing on day one. No implementation fees.
            </p>
            <Link
              href="/intake"
              className="inline-block bg-white text-blue-700 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Start Your Free Trial
            </Link>
          </section>

          {/* Related Links */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Compare Other Alternatives</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { href: "/clio-alternative", label: "Clio Alternative" },
                { href: "/pclaw-alternative", label: "PCLaw Alternative" },
                { href: "/cosmolex-alternative", label: "CosmoLex Alternative" },
                { href: "/tabs3-alternative", label: "Tabs3 Alternative" },
                { href: "/timematters-alternative", label: "Time Matters Alternative" },
                { href: "/centerbase-alternative", label: "Centerbase Alternative" },
                { href: "/abacusnext-alternative", label: "AbacusNext Alternative" },
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
