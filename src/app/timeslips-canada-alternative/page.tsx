import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Timeslips Canada Alternative for Ontario Lawyers | Atticus",
  description:
    "Comparing Timeslips vs Atticus for Ontario law firms. Timeslips is a legacy desktop billing application — no LSO trust accounting, no matter management, no AI. Atticus is built for Ontario.",
  openGraph: {
    title: "Timeslips Canada Alternative — Ontario Law Firms",
    description:
      "Timeslips is an outdated desktop billing app with no LSO By-Law 9 trust accounting, no matter management, and no AI. Atticus is the complete Ontario alternative.",
    type: "website",
    url: "https://getatticus.ca/timeslips-canada-alternative",
  },
  alternates: { canonical: "https://getatticus.ca/timeslips-canada-alternative" },
};

export default function TimeslipsCanadaAlternativePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Timeslips Canada Alternative for Ontario Lawyers",
    description:
      "Comparing Timeslips vs Atticus for Ontario law firms. Timeslips is a legacy desktop billing application that lacks LSO By-Law 9 trust accounting, matter management, and AI capabilities.",
    url: "https://getatticus.ca/timeslips-canada-alternative",
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
      timeslips: "No — billing/AR only, no trust ledger",
      atticus: "Native — receipt, disbursement, reconciliation",
    },
    {
      feature: "Matter Management",
      timeslips: "No — time and billing only",
      atticus: "Full matter records with documents and notes",
    },
    {
      feature: "AI Document Analysis",
      timeslips: "No",
      atticus: "Every document summarized and entity-extracted",
    },
    {
      feature: "Deployment",
      timeslips: "Legacy desktop + optional cloud (Sage Timeslips Online)",
      atticus: "Modern cloud-native, browser-based",
    },
    {
      feature: "Canadian Data Residency",
      timeslips: "No — US servers",
      atticus: "Yes — Canadian data residency, PIPEDA compliant",
    },
    {
      feature: "Ontario Limitation Period Tracking",
      timeslips: "No",
      atticus: "Automated deadline tracking with overdue alerts",
    },
    {
      feature: "Time Tracking",
      timeslips: "Yes — core billing feature",
      atticus: "Yes — built-in with AI chat logging",
    },
    {
      feature: "Pricing",
      timeslips: "$499+ USD/year desktop or $40+ USD/user/month cloud",
      atticus: "$149 CAD/month — per lawyer",
    },
    {
      feature: "Target Market",
      timeslips: "General professional services billing",
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
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-amber-500 text-gray-900 text-sm font-semibold px-4 py-1 rounded-full mb-6">
            Timeslips Canada Alternative
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Timeslips vs Atticus for Ontario Lawyers
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Timeslips is a legacy desktop billing application built for general professional services — not Ontario law firms.
            Atticus is purpose-built for Ontario with LSO By-Law&nbsp;9 trust accounting, AI, and matter management from day one.
          </p>
          <Link
            href="/sign-up"
            className="inline-block bg-amber-500 hover:bg-amber-400 text-gray-900 font-bold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Start Free Trial
          </Link>
        </div>
      </section>

      {/* What Is Timeslips */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">What Is Timeslips?</h2>
          <p className="text-lg text-gray-700 mb-4">
            Timeslips (owned by Sage) is one of the oldest legal and professional billing applications on the market,
            originally released in the 1980s as a desktop product. It tracks time, generates invoices, and manages
            accounts receivable for professional services firms including law, accounting, and consulting.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Sage Timeslips Online (the cloud version) modernizes the interface but retains the same billing-centric architecture:
            there is no trust accounting, no matter management, no document storage, and no AI.
            The product was built for general professional services billing, not specifically for law firms and certainly not for
            Ontario&apos;s Law Society regulatory requirements.
          </p>
          <p className="text-lg text-gray-700">
            For Ontario law firms, Timeslips is an incomplete solution — it handles one slice of practice management (billing)
            while leaving trust accounting, matter management, document analysis, and deadline tracking entirely unaddressed.
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Timeslips vs Atticus — Feature Comparison
          </h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-6 py-4 font-semibold w-1/3">Feature</th>
                  <th className="px-6 py-4 font-semibold w-1/3">Timeslips</th>
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
                    <td className="px-6 py-4 text-gray-600">{row.timeslips}</td>
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
            5 Reasons Ontario Lawyers Choose Atticus Over Timeslips
          </h2>
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {[
              {
                title: "LSO By-Law 9 Trust Accounting — Built In",
                body:
                  "Timeslips has no trust accounting at all. Atticus includes LSO By-Law 9 compliant trust receipt, disbursement, and reconciliation natively — no separate software, no integration, no patchwork.",
              },
              {
                title: "Complete Practice Management, Not Just Billing",
                body:
                  "Timeslips only handles time tracking and invoicing. Atticus adds matter management, document storage, AI document analysis, deadline tracking, and client notes — everything a firm needs in one product.",
              },
              {
                title: "AI That Understands Your Practice",
                body:
                  "Atticus automatically processes every document you upload — extracting parties, deadlines, dollar amounts, and action items. Ask &quot;What did the Smith retainer say about scope?&quot; and get an instant answer. Timeslips has zero AI capabilities.",
              },
              {
                title: "Canadian Data Residency",
                body:
                  "Timeslips runs on US servers. Atticus stores all client data in Canadian data centres with PIPEDA-compliant practices — important for Ontario firms handling sensitive client files.",
              },
              {
                title: "Flat Pricing — No Per-User Markup",
                body:
                  "Timeslips charges $499+ USD/year for desktop or $40+ USD/user/month for cloud — costs that scale steeply for multi-lawyer firms. Atticus is $149 CAD/month per lawyer per month regardless of headcount.",
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
              <h3 className="text-2xl font-bold mb-2">Timeslips</h3>
              <p className="text-gray-500 mb-4">Legacy billing software</p>
              <ul className="space-y-3 text-gray-700">
                <li>$499+ USD/year desktop license</li>
                <li>~$40+ USD/user/month cloud (Sage Timeslips Online)</li>
                <li>Time tracking and billing only</li>
                <li>No trust accounting</li>
                <li>No matter management</li>
                <li>No AI</li>
                <li>US data centres</li>
              </ul>
            </div>
            <div className="border-2 border-amber-500 rounded-xl p-8 relative">
              <div className="absolute -top-3 left-6 bg-amber-500 text-gray-900 text-sm font-bold px-3 py-1 rounded-full">
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
      <section className="py-20 px-6 bg-gray-900 text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Replace Timeslips?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Switch to a platform that includes trust accounting, AI, matter management, and billing — all built for Ontario.
          </p>
          <Link
            href="/sign-up"
            className="inline-block bg-amber-500 hover:bg-amber-400 text-gray-900 font-bold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Start Free Trial
          </Link>
          <p className="mt-4 text-sm text-gray-400">
            No credit card required &middot; $149 CAD/month after trial
          </p>
        </div>
      </section>
    </div>
  );
}
