import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Soluno Canada Alternative for Ontario Lawyers | Atticus",
  description:
    "Comparing Soluno vs Atticus for Ontario law firms. Soluno is a cloud legal accounting platform — strong on billing but lacks AI, integrated matter management, and Canadian data residency. Atticus is complete Ontario practice management.",
  openGraph: {
    title: "Soluno Canada Alternative — Ontario Law Firms",
    description:
      "Soluno is a cloud legal billing and accounting product with no AI, limited matter management, and US data hosting. Atticus is the complete Ontario alternative.",
    type: "website",
    url: "https://getatticus.ca/soluno-canada-alternative",
  },
  alternates: { canonical: "https://getatticus.ca/soluno-canada-alternative" },
};

export default function SolunoCanadaAlternativePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Soluno Canada Alternative for Ontario Lawyers",
    description:
      "Comparing Soluno vs Atticus for Ontario law firms. Soluno is a cloud legal accounting and billing platform that lacks AI, integrated document analysis, and Canadian data residency.",
    url: "https://getatticus.ca/soluno-canada-alternative",
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
      soluno: "Yes — designed for Canadian legal trust",
      atticus: "Native — receipt, disbursement, reconciliation",
    },
    {
      feature: "AI Document Analysis",
      soluno: "No",
      atticus: "Every document summarized and entity-extracted",
    },
    {
      feature: "Matter Management",
      soluno: "Basic matter/file management",
      atticus: "Full matter records with documents and AI search",
    },
    {
      feature: "Document Storage and Search",
      soluno: "Limited — primarily accounting-oriented",
      atticus: "Full document storage with AI semantic search",
    },
    {
      feature: "AI Practice Assistant",
      soluno: "No",
      atticus: "Atticus Chat — AI assistant with 7 action tools",
    },
    {
      feature: "Canadian Data Residency",
      soluno: "No — hosted by Centerbase (US infrastructure)",
      atticus: "Yes — Canadian data residency, PIPEDA compliant",
    },
    {
      feature: "Ontario Limitation Period Tracking",
      soluno: "Limited",
      atticus: "Automated deadline tracking with overdue alerts",
    },
    {
      feature: "Pricing",
      soluno: "$55–$75+ USD/user/month",
      atticus: "$149 CAD/month — per lawyer",
    },
    {
      feature: "Target Market",
      soluno: "Canadian law firms — accounting focus",
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
      <section className="bg-gradient-to-br from-indigo-900 to-indigo-800 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-indigo-300 text-indigo-900 text-sm font-semibold px-4 py-1 rounded-full mb-6">
            Soluno Canada Alternative
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Soluno vs Atticus for Ontario Lawyers
          </h1>
          <p className="text-xl text-indigo-100 max-w-2xl mx-auto mb-8">
            Soluno is a capable cloud legal accounting platform — but it has no AI, limited document management,
            and runs on US infrastructure. Atticus adds AI document analysis, an AI practice assistant,
            full document storage, and Canadian data residency at a flat price for the whole firm.
          </p>
          <Link
            href="/sign-up"
            className="inline-block bg-indigo-300 hover:bg-indigo-200 text-indigo-900 font-bold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Start Free Trial
          </Link>
        </div>
      </section>

      {/* What Is Soluno */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">What Is Soluno?</h2>
          <p className="text-lg text-gray-700 mb-4">
            Soluno is a Canadian cloud-based legal accounting and billing platform designed for law firms
            with a focus on financial management. It handles trust accounting, time tracking, billing, invoicing,
            and general ledger. Soluno has been positioned as a modern replacement for legacy desktop accounting
            software like PCLaw and ESILaw.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Soluno&apos;s primary strength is its accounting capabilities — it is well-regarded for Canadian
            trust accounting compliance. However, it is built on the Centerbase platform (a US legal software
            company), meaning data is hosted on US infrastructure without the Canadian data residency protections
            that Ontario firms increasingly require for PIPEDA compliance.
          </p>
          <p className="text-lg text-gray-700">
            Soluno has no AI capabilities, limited document management, and per-user pricing that makes it
            increasingly expensive as a firm grows. Atticus offers native trust accounting alongside AI document
            analysis, an AI practice assistant, full document storage, and flat firm-wide pricing — all in one
            Canadian-hosted platform.
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Soluno vs Atticus — Feature Comparison
          </h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-indigo-900 text-white">
                  <th className="px-6 py-4 font-semibold w-1/3">Feature</th>
                  <th className="px-6 py-4 font-semibold w-1/3">Soluno</th>
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
                    <td className="px-6 py-4 text-gray-600">{row.soluno}</td>
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
            5 Reasons Ontario Lawyers Choose Atticus Over Soluno
          </h2>
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {[
              {
                title: "AI That Works Across Your Entire Practice",
                body:
                  "Atticus AI automatically processes every document you upload — extracting parties, dates, dollar amounts, and deadlines — and answers questions about any file in your practice. Soluno has no AI capabilities whatsoever.",
              },
              {
                title: "Canadian Data Residency — Actually Canadian",
                body:
                  "Soluno is built on the Centerbase platform, which runs on US infrastructure. Atticus hosts all data in Canadian data centres with PIPEDA-compliant practices — the right choice for Ontario firms handling sensitive client files.",
              },
              {
                title: "AI Practice Assistant With 7 Action Tools",
                body:
                  "Atticus Chat is an AI executive assistant that understands your practice: it can tell you which clients owe money, what trust balances look like, which deadlines are overdue — and take action (log time, create invoice, add deadline) from the chat interface.",
              },
              {
                title: "Full Document Management — Not Just Accounting",
                body:
                  "Soluno is accounting-first with limited document capabilities. Atticus combines full document storage, AI-powered semantic search, and matter management in one product — so documents are as searchable as they are securely stored.",
              },
              {
                title: "Flat Firm Pricing — No Per-User Scaling",
                body:
                  "Soluno charges $55–$75+ USD per user per month — for a 4-lawyer firm that is $220–$300+ USD/month before exchange rate. Atticus is $149 CAD/month per lawyer regardless of how many lawyers or staff.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm"
              >
                <h3 className="text-xl font-bold mb-3 text-gray-900">{card.title}</h3>
                <p className="text-gray-600">{card.body}</p>
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
              <h3 className="text-2xl font-bold mb-2">Soluno</h3>
              <p className="text-gray-500 mb-4">Cloud legal accounting</p>
              <ul className="space-y-3 text-gray-700">
                <li>$55–$75+ USD/user/month</li>
                <li>Trust accounting (Canadian compliance)</li>
                <li>Time tracking and billing</li>
                <li>Basic matter management</li>
                <li>No AI</li>
                <li>No document AI analysis</li>
                <li>US data centres (Centerbase infrastructure)</li>
              </ul>
            </div>
            <div className="border-2 border-indigo-500 rounded-xl p-8 relative">
              <div className="absolute -top-3 left-6 bg-indigo-500 text-white text-sm font-bold px-3 py-1 rounded-full">
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
      <section className="py-20 px-6 bg-indigo-900 text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Upgrade from Soluno to Atticus
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Get trust accounting, AI, document management, and a practice assistant — all in one Canadian platform
            at a flat price for your whole firm.
          </p>
          <Link
            href="/sign-up"
            className="inline-block bg-indigo-300 hover:bg-indigo-200 text-indigo-900 font-bold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Start Free Trial
          </Link>
          <p className="mt-4 text-sm text-indigo-300">
            No credit card required &middot; $149 CAD/month after trial
          </p>
        </div>
      </section>
    </div>
  );
}
