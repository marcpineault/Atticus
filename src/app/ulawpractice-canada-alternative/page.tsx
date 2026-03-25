import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "uLaw Practice Canada Alternative for Ontario Lawyers | Atticus",
  description:
    "Comparing uLaw Practice vs Atticus for Ontario law firms. uLaw is a Canadian cloud legal accounting platform — trust accounting but no AI, limited matter management, and per-user pricing. Atticus is complete Ontario practice management.",
  openGraph: {
    title: "uLaw Practice Canada Alternative — Ontario Law Firms",
    description:
      "uLaw Practice is a Canadian cloud accounting tool with no AI, limited matter management, and per-user pricing. Atticus is the complete Ontario alternative.",
    type: "website",
    url: "https://getatticus.ca/ulawpractice-canada-alternative",
  },
  alternates: { canonical: "https://getatticus.ca/ulawpractice-canada-alternative" },
};

export default function UlawpracticeCanadaAlternativePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "uLaw Practice Canada Alternative for Ontario Lawyers",
    description:
      "Comparing uLaw Practice vs Atticus for Ontario law firms. uLaw is a Canadian cloud legal accounting platform with no AI, limited document management, and per-user pricing.",
    url: "https://getatticus.ca/ulawpractice-canada-alternative",
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
      ulaw: "Yes — Canadian trust accounting compliance",
      atticus: "Native — receipt, disbursement, reconciliation",
    },
    {
      feature: "AI Document Analysis",
      ulaw: "No",
      atticus: "Every document summarized and entity-extracted",
    },
    {
      feature: "Matter Management",
      ulaw: "Basic matter/file tracking",
      atticus: "Full matter records with documents and AI search",
    },
    {
      feature: "AI Practice Assistant",
      ulaw: "No",
      atticus: "Atticus Chat with 7 action tools",
    },
    {
      feature: "Document Storage and Search",
      ulaw: "Limited",
      atticus: "Full document storage with AI semantic search",
    },
    {
      feature: "Canadian Data Residency",
      ulaw: "Yes — Canadian servers",
      atticus: "Yes — Canadian data residency, PIPEDA compliant",
    },
    {
      feature: "Ontario Limitation Period Tracking",
      ulaw: "No",
      atticus: "Automated deadline tracking with overdue alerts",
    },
    {
      feature: "Pricing",
      ulaw: "$34–$79+ CAD/user/month",
      atticus: "$149 CAD/month — per lawyer",
    },
    {
      feature: "Target Market",
      ulaw: "Canadian solo and small law firms",
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
      <section className="bg-gradient-to-br from-cyan-900 to-cyan-800 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-cyan-300 text-cyan-900 text-sm font-semibold px-4 py-1 rounded-full mb-6">
            uLaw Practice Canada Alternative
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            uLaw Practice vs Atticus for Ontario Lawyers
          </h1>
          <p className="text-xl text-cyan-100 max-w-2xl mx-auto mb-8">
            uLaw Practice is a solid Canadian cloud accounting tool — but it has no AI, limited document
            management, and per-user pricing. Atticus adds AI document analysis, an AI practice assistant,
            automated deadline tracking, and flat firm-wide pricing.
          </p>
          <Link
            href="/sign-up"
            className="inline-block bg-cyan-300 hover:bg-cyan-200 text-cyan-900 font-bold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Start Free Trial
          </Link>
        </div>
      </section>

      {/* What Is uLaw */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">What Is uLaw Practice?</h2>
          <p className="text-lg text-gray-700 mb-4">
            uLaw Practice (developed by uLaw Inc. in Ontario) is a cloud-based legal practice management
            platform designed for Canadian solo and small law firms. It covers trust accounting with Canadian
            law society compliance, time tracking, billing, invoicing, and basic matter management — all hosted
            on Canadian servers.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            uLaw is one of the few purpose-built Canadian alternatives to legacy desktop software like PCLaw
            and ESILaw. It handles the accounting core competently. However, it has no AI capabilities, no
            AI-powered document analysis, no AI practice assistant, and limited document management beyond
            basic file storage.
          </p>
          <p className="text-lg text-gray-700">
            For Ontario firms looking to add AI to their practice — and replace the patchwork of tools with
            a single platform that includes AI, matter management, trust accounting, and billing — Atticus
            delivers everything uLaw does plus an AI layer that reduces administrative work and surfaces
            insights from your practice files automatically.
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">
            uLaw Practice vs Atticus — Feature Comparison
          </h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-cyan-900 text-white">
                  <th className="px-6 py-4 font-semibold w-1/3">Feature</th>
                  <th className="px-6 py-4 font-semibold w-1/3">uLaw Practice</th>
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
                    <td className="px-6 py-4 text-gray-600">{row.ulaw}</td>
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
            5 Reasons Ontario Lawyers Choose Atticus Over uLaw Practice
          </h2>
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {[
              {
                title: "AI That Works Across Every Document",
                body:
                  "Atticus AI automatically processes every uploaded file — contracts, affidavits, correspondence, audio transcriptions — extracting parties, deadlines, and action items. uLaw has no AI capabilities.",
              },
              {
                title: "AI Practice Assistant With Action Tools",
                body:
                  "Atticus Chat lets you ask questions about your practice in plain English and take actions directly from chat: log time, create invoices, add deadlines, check trust balances. uLaw has no AI assistant.",
              },
              {
                title: "Automated Deadline Tracking",
                body:
                  "Atticus tracks every deadline across all matters and alerts you before anything becomes overdue. Ontario limitation periods, discovery deadlines, court dates — all tracked automatically. uLaw has no deadline tracking.",
              },
              {
                title: "Flat Firm Pricing — No Per-User Markup",
                body:
                  "uLaw charges $34–$79+ CAD per user per month — for a 3-lawyer firm that&apos;s $100–$237+ CAD/month and grows with every new hire. Atticus is $149 CAD/month per lawyer per month, always.",
              },
              {
                title: "Full Document Management With AI Search",
                body:
                  "Atticus stores all matter documents with AI-powered semantic search — ask natural language questions about your documents and get precise answers. uLaw has limited document capabilities without AI search.",
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
              <h3 className="text-2xl font-bold mb-2">uLaw Practice</h3>
              <p className="text-gray-500 mb-4">Canadian cloud legal accounting</p>
              <ul className="space-y-3 text-gray-700">
                <li>$34–$79+ CAD/user/month</li>
                <li>Trust accounting (Canadian compliance)</li>
                <li>Time tracking and billing</li>
                <li>Basic matter management</li>
                <li>No AI</li>
                <li>No deadline tracking</li>
                <li>Canadian servers</li>
              </ul>
            </div>
            <div className="border-2 border-cyan-500 rounded-xl p-8 relative">
              <div className="absolute -top-3 left-6 bg-cyan-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                Ontario&apos;s Choice
              </div>
              <h3 className="text-2xl font-bold mb-2">Atticus</h3>
              <p className="text-gray-500 mb-4">Complete Ontario practice management</p>
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
      <section className="py-20 px-6 bg-cyan-900 text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Upgrade from uLaw to Atticus
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Keep Canadian data residency. Add AI document analysis, an AI practice assistant, and deadline
            tracking — all at a flat price for your whole firm.
          </p>
          <Link
            href="/sign-up"
            className="inline-block bg-cyan-300 hover:bg-cyan-200 text-cyan-900 font-bold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Start Free Trial
          </Link>
          <p className="mt-4 text-sm text-cyan-200">
            No credit card required &middot; $149 CAD/month after trial
          </p>
        </div>
      </section>
    </div>
  );
}
