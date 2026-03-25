import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ESILaw Canada Alternative for Ontario Lawyers | Atticus",
  description:
    "Comparing ESILaw vs Atticus for Ontario law firms. ESILaw is a legacy Canadian legal accounting desktop application — being discontinued. Atticus is the modern cloud Ontario replacement with AI.",
  openGraph: {
    title: "ESILaw Canada Alternative — Ontario Law Firms",
    description:
      "ESILaw is a legacy Canadian desktop legal accounting application that is being discontinued. Atticus is the modern cloud Ontario replacement with AI, trust accounting, and flat pricing.",
    type: "website",
    url: "https://getatticus.ca/esilaw-canada-alternative",
  },
  alternates: { canonical: "https://getatticus.ca/esilaw-canada-alternative" },
};

export default function EsilawCanadaAlternativePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "ESILaw Canada Alternative for Ontario Lawyers",
    description:
      "Comparing ESILaw vs Atticus for Ontario law firms. ESILaw is a legacy Canadian legal accounting desktop application being discontinued by Dye & Durham, with no AI and aging infrastructure.",
    url: "https://getatticus.ca/esilaw-canada-alternative",
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
      esilaw: "Yes — legacy Canadian trust accounting",
      atticus: "Native — receipt, disbursement, reconciliation",
    },
    {
      feature: "Deployment",
      esilaw: "Legacy desktop application being discontinued",
      atticus: "Modern cloud-native, browser-based, always current",
    },
    {
      feature: "AI Document Analysis",
      esilaw: "No",
      atticus: "Every document summarized and entity-extracted",
    },
    {
      feature: "AI Practice Assistant",
      esilaw: "No",
      atticus: "Atticus Chat with 7 action tools",
    },
    {
      feature: "Matter Management",
      esilaw: "Basic file/matter management",
      atticus: "Full matter records with documents and AI search",
    },
    {
      feature: "Canadian Data Residency",
      esilaw: "Desktop: local storage; migration to Dye & Durham platform",
      atticus: "Yes — Canadian data residency, PIPEDA compliant",
    },
    {
      feature: "Product Future",
      esilaw: "Being discontinued — Dye & Durham urging migration",
      atticus: "Active development — new AI and practice features monthly",
    },
    {
      feature: "Pricing",
      esilaw: "Legacy perpetual license + annual maintenance fees",
      atticus: "$149 CAD/month — per lawyer",
    },
    {
      feature: "Target Market",
      esilaw: "Canadian law firms — legacy desktop",
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
      <section className="bg-gradient-to-br from-orange-900 to-orange-800 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-orange-300 text-orange-900 text-sm font-semibold px-4 py-1 rounded-full mb-6">
            ESILaw Canada Alternative
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            ESILaw vs Atticus for Ontario Lawyers
          </h1>
          <p className="text-xl text-orange-100 max-w-2xl mx-auto mb-8">
            ESILaw is a legacy desktop application being discontinued by Dye &amp; Durham. If you&apos;re
            planning your ESILaw exit, Atticus offers a modern cloud platform with LSO trust accounting,
            AI document analysis, and flat pricing for your whole firm.
          </p>
          <Link
            href="/sign-up"
            className="inline-block bg-orange-300 hover:bg-orange-200 text-orange-900 font-bold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Start Free Trial
          </Link>
        </div>
      </section>

      {/* What Is ESILaw */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">What Is ESILaw?</h2>
          <p className="text-lg text-gray-700 mb-4">
            ESILaw was a Canadian legal practice management and accounting platform that was a popular
            choice for small to mid-size Canadian law firms. It was acquired by Dye &amp; Durham, the
            Canadian legal technology company. ESILaw offered trust accounting compliant with Canadian
            law society rules, time tracking, billing, and basic matter management.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Dye &amp; Durham has been transitioning ESILaw users to its newer platforms and the ESILaw
            desktop product is being phased out. ESILaw has no AI capabilities, no modern cloud architecture,
            and as it is being discontinued, there is no future development roadmap for new features.
          </p>
          <p className="text-lg text-gray-700">
            For Ontario firms currently on ESILaw, Atticus offers the most direct modern replacement:
            cloud-native with LSO By-Law&nbsp;9 trust accounting, AI document analysis, an AI practice
            assistant, and flat pricing — without migrating to an enterprise Dye &amp; Durham platform
            sized for a much larger firm.
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">
            ESILaw vs Atticus — Feature Comparison
          </h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-orange-900 text-white">
                  <th className="px-6 py-4 font-semibold w-1/3">Feature</th>
                  <th className="px-6 py-4 font-semibold w-1/3">ESILaw</th>
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
                    <td className="px-6 py-4 text-gray-600">{row.esilaw}</td>
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
            Why ESILaw Users Switch to Atticus
          </h2>
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {[
              {
                title: "ESILaw Is Being Discontinued",
                body:
                  "Dye &amp; Durham is sunsetting ESILaw. If you&apos;re on ESILaw, migration is not optional — it&apos;s a question of timing. Atticus is a purpose-built Ontario alternative with an active product roadmap.",
              },
              {
                title: "AI Your Current Platform Will Never Offer",
                body:
                  "Atticus AI processes every document — contracts, court documents, correspondence — extracting entities, deadlines, and action items automatically. ESILaw has no AI and will receive no further AI development.",
              },
              {
                title: "Trust Accounting Flow You Already Know",
                body:
                  "ESILaw users understand trust accounting. Atticus implements the same LSO By-Law 9 compliance model — receipts, disbursements, reconciliation — in a clean modern interface with full audit trail.",
              },
              {
                title: "Cloud-Native and Always Backed Up",
                body:
                  "ESILaw is a desktop application with local data storage. Atticus is cloud-native — your data is always backed up, accessible from any browser, and never lost to a hard drive failure.",
              },
              {
                title: "Predictable Flat Pricing",
                body:
                  "ESILaw&apos;s licensing model includes annual maintenance fees and per-user costs that scale. Atticus is $149 CAD/month per lawyer regardless of headcount — predictable and simple.",
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
              <h3 className="text-2xl font-bold mb-2">ESILaw</h3>
              <p className="text-gray-500 mb-4">Legacy desktop legal accounting</p>
              <ul className="space-y-3 text-gray-700">
                <li>Perpetual license + annual maintenance</li>
                <li>Being discontinued by Dye &amp; Durham</li>
                <li>Trust accounting (Canadian compliance)</li>
                <li>No AI capabilities</li>
                <li>No cloud-native architecture</li>
                <li>No active development roadmap</li>
                <li>Local desktop data storage</li>
              </ul>
            </div>
            <div className="border-2 border-orange-500 rounded-xl p-8 relative">
              <div className="absolute -top-3 left-6 bg-orange-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                ESILaw Replacement
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
      <section className="py-20 px-6 bg-orange-900 text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Make Your ESILaw Migration to Atticus
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Don&apos;t wait for ESILaw to be shut off. Migrate to a modern Ontario platform with trust
            accounting, AI, and flat pricing — purpose-built for small Ontario firms.
          </p>
          <Link
            href="/sign-up"
            className="inline-block bg-orange-300 hover:bg-orange-200 text-orange-900 font-bold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Start Free Trial
          </Link>
          <p className="mt-4 text-sm text-orange-200">
            No credit card required &middot; $149 CAD/month after trial
          </p>
        </div>
      </section>
    </div>
  );
}
