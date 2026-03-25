import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Clio Manage Canada Alternative for Ontario Lawyers | Atticus",
  description:
    "Comparing Clio Manage vs Atticus for Ontario law firms. Clio is a strong platform but per-user pricing scales steeply, trust accounting is add-on, and AI is limited. Atticus is built for Ontario.",
  openGraph: {
    title: "Clio Manage Canada Alternative — Ontario Law Firms",
    description:
      "Clio Manage is popular but expensive at scale, with add-on trust accounting and limited AI. Atticus is the Ontario-built alternative with flat pricing, native trust accounting, and deeper AI.",
    type: "website",
    url: "https://getatticus.ca/clio-manage-canada-alternative",
  },
  alternates: { canonical: "https://getatticus.ca/clio-manage-canada-alternative" },
};

export default function ClioManageCanadaAlternativePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Clio Manage Canada Alternative for Ontario Lawyers",
    description:
      "Comparing Clio Manage vs Atticus for Ontario law firms. Clio is popular but expensive at scale with add-on trust accounting and limited AI. Atticus offers flat pricing, native LSO trust accounting, and deeper AI.",
    url: "https://getatticus.ca/clio-manage-canada-alternative",
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
      clio: "Add-on via Clio Payments or third-party — not native",
      atticus: "Native — full LSO By-Law 9 compliance built in",
    },
    {
      feature: "AI Document Analysis",
      clio: "Limited — Clio Duo basic AI assistant",
      atticus: "Every document auto-processed — summaries + entity extraction",
    },
    {
      feature: "AI Practice Assistant",
      clio: "Clio Duo — general assistant; limited action tools",
      atticus: "Atticus Chat — 7 action tools; live practice context",
    },
    {
      feature: "Pricing",
      clio: "$89–$149+ USD/user/month (EasyStart to Complete)",
      atticus: "$149 CAD/month — per lawyer",
    },
    {
      feature: "Canadian Data Residency",
      clio: "Canadian data centres available for Canadian firms",
      atticus: "Yes — Canadian data residency, PIPEDA compliant",
    },
    {
      feature: "Ontario Limitation Period Tracking",
      clio: "Manual task management — no automated tracking",
      atticus: "Automated deadline tracking with overdue alerts",
    },
    {
      feature: "Matter Management",
      clio: "Strong — core product feature",
      atticus: "Full matter records with documents and AI search",
    },
    {
      feature: "Billing and Invoicing",
      clio: "Yes — strong billing; requires Clio Payments for trust",
      atticus: "Yes — billing with HST; trust accounting integrated",
    },
    {
      feature: "Target Market",
      clio: "Global law firms of all sizes",
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
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-blue-300 text-blue-900 text-sm font-semibold px-4 py-1 rounded-full mb-6">
            Clio Manage Canada Alternative
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Clio Manage vs Atticus for Ontario Lawyers
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Clio Manage is one of the most popular legal practice management platforms — but it was built
            for global law firms. Atticus is built specifically for Ontario: native LSO trust accounting,
            deeper AI, and flat pricing for the whole firm.
          </p>
          <Link
            href="/sign-up"
            className="inline-block bg-blue-300 hover:bg-blue-200 text-blue-900 font-bold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Start Free Trial
          </Link>
        </div>
      </section>

      {/* What Is Clio Manage */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">What Is Clio Manage?</h2>
          <p className="text-lg text-gray-700 mb-4">
            Clio Manage is the core practice management product from Clio (Themis Solutions Inc.), a
            Vancouver-based company that has become the largest legal technology company in Canada.
            Clio Manage provides matter management, time tracking, billing, document management,
            and client portals to law firms worldwide.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Clio is strong on practice management fundamentals — its matter management and billing
            workflows are polished and well-designed. However, Clio was built for global law firms
            of all sizes, not specifically for Ontario&apos;s regulatory environment. Trust accounting
            for LSO By-Law&nbsp;9 compliance requires additional setup with Clio Payments or third-party
            integrations — it is not a native out-of-the-box feature the way it is in Atticus.
          </p>
          <p className="text-lg text-gray-700">
            For Ontario solo and small firms, the primary concerns with Clio are cost (per-user pricing
            that scales steeply) and the absence of deeply integrated LSO trust accounting. Atticus addresses
            both: native trust accounting, deeper AI purpose-built for practice files, and $149 CAD/month
            flat per lawyer per month.
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Clio Manage vs Atticus — Feature Comparison
          </h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-blue-900 text-white">
                  <th className="px-6 py-4 font-semibold w-1/3">Feature</th>
                  <th className="px-6 py-4 font-semibold w-1/3">Clio Manage</th>
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
                    <td className="px-6 py-4 text-gray-600">{row.clio}</td>
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
            5 Reasons Ontario Lawyers Choose Atticus Over Clio Manage
          </h2>
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {[
              {
                title: "Native LSO By-Law 9 Trust Accounting",
                body:
                  "Clio requires additional configuration or Clio Payments to handle Ontario trust accounting. Atticus was built with LSO By-Law 9 trust accounting as the foundation — receipt, disbursement, reconciliation, and audit trail from day one.",
              },
              {
                title: "AI That Processes Every Document Automatically",
                body:
                  "Atticus processes every uploaded document automatically — extracting parties, dates, dollar amounts, and deadlines without any manual input. Clio Duo is a general AI assistant, not a document intelligence layer built around your matter files.",
              },
              {
                title: "Flat Pricing That Doesn't Punish Growth",
                body:
                  "Clio charges $89–$149+ USD per user per month — a 3-lawyer firm pays $267–$447+ USD/month (before exchange rate) just for Manage, before any Clio Payments add-on. Atticus is $149 CAD/month per lawyer per month.",
              },
              {
                title: "Automated Ontario Deadline Tracking",
                body:
                  "Atticus tracks every deadline across all matters and sends overdue alerts automatically. Ontario limitation periods, discovery deadlines, LTB hearing dates — all tracked without manual setup. Clio uses manual task management.",
              },
              {
                title: "Built Exclusively for Ontario",
                body:
                  "Clio serves law firms globally — features and workflows are built for the lowest common denominator across many jurisdictions. Atticus is built solely for Ontario practice, with LSO compliance, Ontario-specific AI context, and Ontario legal terminology throughout.",
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
              <h3 className="text-2xl font-bold mb-2">Clio Manage</h3>
              <p className="text-gray-500 mb-4">Global practice management platform</p>
              <ul className="space-y-3 text-gray-700">
                <li>$89 USD/user/month (EasyStart)</li>
                <li>$109 USD/user/month (Essentials)</li>
                <li>$129 USD/user/month (Advanced)</li>
                <li>$149 USD/user/month (Complete)</li>
                <li>Trust accounting via Clio Payments add-on</li>
                <li>Per-user pricing scales with every new hire</li>
                <li>USD pricing + exchange rate</li>
              </ul>
            </div>
            <div className="border-2 border-blue-500 rounded-xl p-8 relative">
              <div className="absolute -top-3 left-6 bg-blue-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                Ontario&apos;s Choice
              </div>
              <h3 className="text-2xl font-bold mb-2">Atticus</h3>
              <p className="text-gray-500 mb-4">Complete Ontario practice management</p>
              <div className="text-4xl font-bold text-gray-900 mb-1">
                $49 <span className="text-lg font-normal text-gray-600">CAD/month</span>
              </div>
              <p className="text-sm text-gray-500 mb-4">Per lawyer per month</p>
              <ul className="space-y-3 text-gray-700">
                <li>LSO By-Law 9 trust accounting native</li>
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
      <section className="py-20 px-6 bg-blue-900 text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Switch from Clio to an Ontario-Built Platform
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get native LSO trust accounting, deeper AI, and flat pricing — purpose-built for Ontario
            solo and small law firms.
          </p>
          <Link
            href="/sign-up"
            className="inline-block bg-blue-300 hover:bg-blue-200 text-blue-900 font-bold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Start Free Trial
          </Link>
          <p className="mt-4 text-sm text-blue-300">
            No credit card required &middot; $149 CAD/month after trial
          </p>
        </div>
      </section>
    </div>
  );
}
