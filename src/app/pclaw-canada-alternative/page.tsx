import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "PCLaw Canada Alternative for Ontario Lawyers | Atticus",
  description:
    "Comparing PCLaw vs Atticus for Ontario law firms. PCLaw is a legacy desktop legal accounting application nearing end-of-life — no AI, no modern cloud, no Canadian data residency. Atticus is the modern Ontario replacement.",
  openGraph: {
    title: "PCLaw Canada Alternative — Ontario Law Firms",
    description:
      "PCLaw is a legacy desktop legal accounting application being sunset by Thomson Reuters. Atticus is the modern cloud Ontario alternative with AI, trust accounting, and flat pricing.",
    type: "website",
    url: "https://getatticus.ca/pclaw-canada-alternative",
  },
  alternates: { canonical: "https://getatticus.ca/pclaw-canada-alternative" },
};

export default function PclawCanadaAlternativePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "PCLaw Canada Alternative for Ontario Lawyers",
    description:
      "Comparing PCLaw vs Atticus for Ontario law firms. PCLaw is a legacy desktop legal accounting application being sunsetted by Thomson Reuters, with no AI and aging infrastructure.",
    url: "https://getatticus.ca/pclaw-canada-alternative",
    mainEntity: {
      "@type": "SoftwareApplication",
      name: "Atticus",
      applicationCategory: "LegalSoftware",
      operatingSystem: "Web",
      offers: {
        "@type": "Offer",
        price: "49",
        priceCurrency: "CAD",
        description: "Flat $149 CAD/month per lawyer per month",
      },
    },
  };

  const comparisonRows = [
    {
      feature: "LSO By-Law 9 Trust Accounting",
      pclaw: "Yes — legacy Canadian trust accounting",
      atticus: "Native — receipt, disbursement, reconciliation",
    },
    {
      feature: "Deployment",
      pclaw: "Legacy desktop + limited cloud; sunset by Thomson Reuters",
      atticus: "Modern cloud-native, browser-based, always current",
    },
    {
      feature: "AI Document Analysis",
      pclaw: "No",
      atticus: "Every document summarized and entity-extracted",
    },
    {
      feature: "AI Practice Assistant",
      pclaw: "No",
      atticus: "Atticus Chat with 7 action tools",
    },
    {
      feature: "Matter Management",
      pclaw: "Basic file/matter management",
      atticus: "Full matter records with documents and AI search",
    },
    {
      feature: "Canadian Data Residency",
      pclaw: "Desktop: local; cloud version: Thomson Reuters US infrastructure",
      atticus: "Yes — Canadian data residency, PIPEDA compliant",
    },
    {
      feature: "Product Roadmap",
      pclaw: "Being sunsetted — Thomson Reuters steering firms to alternatives",
      atticus: "Active development — new AI and practice features monthly",
    },
    {
      feature: "Pricing",
      pclaw: "$100–$180+ CAD/user/month or perpetual license",
      atticus: "$149 CAD/month — per lawyer",
    },
    {
      feature: "Target Market",
      pclaw: "Canadian law firms — legacy desktop",
      atticus: "Ontario solo and small law firms exclusively",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-red-900 to-red-800 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-red-300 text-red-900 text-sm font-semibold px-4 py-1 rounded-full mb-6">
            PCLaw Canada Alternative
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            PCLaw vs Atticus for Ontario Lawyers
          </h1>
          <p className="text-xl text-red-100 max-w-2xl mx-auto mb-8">
            PCLaw is a legacy desktop application being sunset by Thomson Reuters. If you&apos;re planning
            your PCLaw exit, Atticus offers everything PCLaw does — trust accounting, billing, matter management —
            plus AI, a modern cloud interface, and flat pricing for the whole firm.
          </p>
          <Link
            href="/sign-up"
            className="inline-block bg-red-300 hover:bg-red-200 text-red-900 font-bold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Start Free Trial
          </Link>
        </div>
      </section>

      {/* What Is PCLaw */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">What Is PCLaw?</h2>
          <p className="text-lg text-gray-700 mb-4">
            PCLaw is a Canadian legal practice management and accounting application developed by LexisNexis
            and later acquired by Thomson Reuters. For decades, it was the dominant accounting platform for
            small to mid-size Canadian law firms, offering trust accounting, billing, time tracking, and
            general ledger in a desktop application designed for Canadian law society compliance.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Thomson Reuters has been steering PCLaw users toward its HighQ and 3E platforms (targeted at
            large firms) or encouraging migration to cloud alternatives. PCLaw&apos;s desktop codebase has
            limited ongoing development, no AI capabilities, and the cloud version runs on US infrastructure —
            creating data residency concerns for Ontario firms subject to PIPEDA.
          </p>
          <p className="text-lg text-gray-700">
            For Ontario solo and small firms, Atticus is the natural PCLaw replacement: modern cloud
            architecture, LSO By-Law&nbsp;9 trust accounting, AI document analysis and assistant, flat pricing,
            and active product development — without migrating to an enterprise platform sized for 100+ lawyers.
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">
            PCLaw vs Atticus — Feature Comparison
          </h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-red-900 text-white">
                  <th className="px-6 py-4 font-semibold w-1/3">Feature</th>
                  <th className="px-6 py-4 font-semibold w-1/3">PCLaw</th>
                  <th className="px-6 py-4 font-semibold w-1/3">Atticus</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, idx) => (
                  <tr
                    key={row.feature}
                    className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="px-6 py-4 font-medium text-gray-900">{row.feature}</td>
                    <td className="px-6 py-4 text-gray-600">{row.pclaw}</td>
                    <td className="px-6 py-4 text-gray-900 font-medium">{row.atticus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5 Reasons */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Why PCLaw Users Switch to Atticus
          </h2>
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {[
              {
                title: "PCLaw Is Being Sunset",
                body:
                  "Thomson Reuters has stopped active investment in PCLaw. If you&apos;re on PCLaw, migrating is a question of when, not if. Atticus gives you a modern cloud platform with a committed Ontario practice management roadmap.",
              },
              {
                title: "AI That PCLaw Will Never Have",
                body:
                  "Atticus AI processes every document, extracts key information, and answers questions about your practice from chat. PCLaw has no AI capabilities and no roadmap for them.",
              },
              {
                title: "Trust Accounting You Already Understand",
                body:
                  "PCLaw users know trust accounting inside and out. Atticus mirrors the same core flow — receipts, disbursements, reconciliation — in a modern interface with LSO By-Law 9 compliance built in.",
              },
              {
                title: "No Per-User Pricing Penalty",
                body:
                  "PCLaw charges per user — costs that scale steeply as you add staff, articling students, or associates. Atticus is $149 CAD/month per lawyer, always.",
              },
              {
                title: "Cloud-Native with Canadian Data Residency",
                body:
                  "PCLaw desktop stores data locally; the cloud version runs on US Thomson Reuters infrastructure. Atticus is cloud-native with Canadian data centres and PIPEDA compliance — essential for Ontario firm data security.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm"
              >
                <h3 className="text-xl font-bold mb-3 text-gray-900">{card.title}</h3>
                <p
                  className="text-gray-600"
                  dangerouslySetInnerHTML={{ __html: card.body }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Pricing Comparison</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-gray-200 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-2">PCLaw</h3>
              <p className="text-gray-500 mb-4">Legacy desktop legal accounting</p>
              <ul className="space-y-3 text-gray-700">
                <li>$100–$180+ CAD/user/month (subscription)</li>
                <li>Or perpetual license + annual maintenance</li>
                <li>Desktop application (aging codebase)</li>
                <li>Trust accounting (Canadian compliance)</li>
                <li>No AI</li>
                <li>No modern document management</li>
                <li>Being sunsetted by Thomson Reuters</li>
              </ul>
            </div>
            <div className="border-2 border-red-500 rounded-xl p-8 relative">
              <div className="absolute -top-3 left-6 bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                PCLaw Replacement
              </div>
              <h3 className="text-2xl font-bold mb-2">Atticus</h3>
              <p className="text-gray-500 mb-4">Modern Ontario practice management</p>
              <div className="text-4xl font-bold text-gray-900 mb-1">
                $49 <span className="text-lg font-normal text-gray-600">CAD/month</span>
              </div>
              <p className="text-sm text-gray-500 mb-4">Per lawyer per month</p>
              <ul className="space-y-3 text-gray-700">
                <li>LSO By-Law 9 trust accounting</li>
                <li>AI document analysis and assistant</li>
                <li>Matter management and documents</li>
                <li>Billing, invoicing with HST</li>
                <li>Deadline tracking and alerts</li>
                <li>Canadian data residency PIPEDA</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-red-900 text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Make Your PCLaw Exit Today
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Migrate to a modern platform before Thomson Reuters forces the decision. Atticus brings trust
            accounting, AI, and flat pricing to Ontario small firms — purpose-built for the transition.
          </p>
          <Link
            href="/sign-up"
            className="inline-block bg-red-300 hover:bg-red-200 text-red-900 font-bold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Start Free Trial
          </Link>
          <p className="mt-4 text-sm text-red-200">
            No credit card required &middot; $149 CAD/month after trial
          </p>
        </div>
      </section>
    </div>
  );
}
