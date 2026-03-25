import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hona Canada Alternative for Ontario Lawyers | Atticus",
  description:
    "Comparing Hona vs Atticus for Ontario law firms. Hona is a client communication and case status tool — no LSO trust accounting, no matter management, no AI. Atticus is complete Ontario practice management.",
  openGraph: {
    title: "Hona Canada Alternative — Ontario Law Firms",
    description:
      "Hona is a client communication portal with no trust accounting, no billing, and no AI. Atticus is the complete Ontario alternative built for LSO compliance.",
    type: "website",
    url: "https://getatticus.ca/hona-canada-alternative",
  },
  alternates: { canonical: "https://getatticus.ca/hona-canada-alternative" },
};

export default function HonaCanadaAlternativePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Hona Canada Alternative for Ontario Lawyers",
    description:
      "Comparing Hona vs Atticus for Ontario law firms. Hona is a client communication portal that lacks LSO By-Law 9 trust accounting, matter management, billing, and AI capabilities.",
    url: "https://getatticus.ca/hona-canada-alternative",
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
      hona: "No — no financial management features",
      atticus: "Native — receipt, disbursement, reconciliation",
    },
    {
      feature: "Matter Management",
      hona: "Basic case status updates only",
      atticus: "Full matter records with documents and notes",
    },
    {
      feature: "Client Communication Portal",
      hona: "Yes — core product feature",
      atticus: "Yes — built-in client notes and matter access",
    },
    {
      feature: "AI Document Analysis",
      hona: "No",
      atticus: "Every document summarized and entity-extracted",
    },
    {
      feature: "Billing and Invoicing",
      hona: "No",
      atticus: "Time tracking, invoicing, HST in CAD",
    },
    {
      feature: "Canadian Data Residency",
      hona: "No — US servers",
      atticus: "Yes — Canadian data residency, PIPEDA compliant",
    },
    {
      feature: "Deadline Tracking",
      hona: "No",
      atticus: "Automated with overdue alerts and AI chat",
    },
    {
      feature: "Pricing",
      hona: "$49–$99+ USD/month client portal only",
      atticus: "$149 CAD/month — per lawyer, all features included",
    },
    {
      feature: "Target Market",
      hona: "General law firm client communication",
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
      <section className="bg-gradient-to-br from-teal-900 to-teal-800 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-teal-400 text-teal-900 text-sm font-semibold px-4 py-1 rounded-full mb-6">
            Hona Canada Alternative
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Hona vs Atticus for Ontario Lawyers
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-8">
            Hona is a client communication and case status portal — a single feature bolted onto existing practice
            management software. Atticus gives you client communication, matter management, trust accounting,
            AI, and billing all in one platform built for Ontario.
          </p>
          <Link
            href="/sign-up"
            className="inline-block bg-teal-400 hover:bg-teal-300 text-teal-900 font-bold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Start Free Trial
          </Link>
        </div>
      </section>

      {/* What Is Hona */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">What Is Hona?</h2>
          <p className="text-lg text-gray-700 mb-4">
            Hona is a client portal and case status communication tool designed to reduce inbound client calls
            by giving clients a window into their case status. It integrates with existing practice management
            systems (Clio, MyCase, etc.) to surface case milestones and document requests to clients through
            a branded portal.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            The product is focused on one problem: client communication and status updates. It does not
            handle trust accounting, billing, time tracking, document storage, AI analysis, or any other
            core practice management function. Law firms using Hona still need separate software for
            everything else.
          </p>
          <p className="text-lg text-gray-700">
            For Ontario firms, Hona is an additional subscription on top of existing software costs —
            addressing one narrow workflow while leaving LSO By-Law&nbsp;9 trust accounting, billing,
            and AI document analysis entirely to other products.
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Hona vs Atticus — Feature Comparison
          </h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-teal-900 text-white">
                  <th className="px-6 py-4 font-semibold w-1/3">Feature</th>
                  <th className="px-6 py-4 font-semibold w-1/3">Hona</th>
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
                    <td className="px-6 py-4 text-gray-600">{row.hona}</td>
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
            5 Reasons Ontario Lawyers Choose Atticus Over Hona
          </h2>
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {[
              {
                title: "One Platform Instead of Two (or Three)",
                body:
                  "Hona requires you to keep paying for your existing practice management software AND add Hona on top. Atticus replaces the stack — client communication, matter management, trust accounting, billing, and AI in one product at $149 CAD/month.",
              },
              {
                title: "LSO By-Law 9 Trust Accounting Included",
                body:
                  "Hona has no financial management features whatsoever. Atticus includes LSO By-Law 9 compliant trust accounting natively — the most critical compliance requirement for Ontario lawyers.",
              },
              {
                title: "AI That Actually Reduces Your Workload",
                body:
                  "Atticus AI processes every uploaded document, extracts deadlines and parties, answers questions about your files, and takes actions from chat (log time, create invoice, add deadline). Hona has no AI.",
              },
              {
                title: "Canadian Data Residency",
                body:
                  "Hona runs on US infrastructure. Atticus stores all client data in Canadian data centres with PIPEDA-compliant practices — the right choice for Ontario firms with confidential client files.",
              },
              {
                title: "Flat Pricing That Makes Sense",
                body:
                  "Hona charges $49–$99+ USD/month for a communication add-on, on top of your existing practice management software. Atticus replaces everything at $149 CAD/month per lawyer per month.",
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
              <h3 className="text-2xl font-bold mb-2">Hona</h3>
              <p className="text-gray-500 mb-4">Client portal add-on</p>
              <ul className="space-y-3 text-gray-700">
                <li>$49–$99+ USD/month client portal only</li>
                <li>Requires separate practice management software</li>
                <li>Client status updates only</li>
                <li>No trust accounting</li>
                <li>No billing or invoicing</li>
                <li>No AI</li>
                <li>US data centres</li>
              </ul>
            </div>
            <div className="border-2 border-teal-500 rounded-xl p-8 relative">
              <div className="absolute -top-3 left-6 bg-teal-500 text-white text-sm font-bold px-3 py-1 rounded-full">
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
      <section className="py-20 px-6 bg-teal-900 text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Replace Hona and Your Practice Management Software
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Stop paying for multiple tools. Get trust accounting, AI, matter management, billing, and client
            communication in one platform — built for Ontario.
          </p>
          <Link
            href="/sign-up"
            className="inline-block bg-teal-400 hover:bg-teal-300 text-teal-900 font-bold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Start Free Trial
          </Link>
          <p className="mt-4 text-sm text-gray-300">
            No credit card required &middot; $149 CAD/month after trial
          </p>
        </div>
      </section>
    </div>
  );
}
