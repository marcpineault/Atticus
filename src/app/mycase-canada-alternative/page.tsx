import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MyCase Canada Alternative for Ontario Lawyers | Atticus",
  description:
    "Comparing MyCase vs Atticus for Ontario law firms. MyCase is a US practice management platform with no LSO trust accounting, US data centres, and limited AI. Atticus is built for Ontario.",
  openGraph: {
    title: "MyCase Canada Alternative — Ontario Law Firms",
    description:
      "MyCase is a US practice management platform with no LSO By-Law 9 trust accounting, US data hosting, and USD pricing. Atticus is the Ontario-built alternative.",
    type: "website",
    url: "https://getatticus.ca/mycase-canada-alternative",
  },
  alternates: { canonical: "https://getatticus.ca/mycase-canada-alternative" },
};

export default function MycaseCanadaAlternativePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "MyCase Canada Alternative for Ontario Lawyers",
    description:
      "Comparing MyCase vs Atticus for Ontario law firms. MyCase is a US practice management platform lacking LSO By-Law 9 trust accounting, Canadian data residency, and Ontario-specific compliance features.",
    url: "https://getatticus.ca/mycase-canada-alternative",
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
      mycase: "No — US IOLTA trust, not Ontario LSO By-Law 9",
      atticus: "Native — full LSO By-Law 9 compliance built in",
    },
    {
      feature: "AI Document Analysis",
      mycase: "Limited — basic AI drafting assist",
      atticus: "Every document auto-processed — summaries + entity extraction",
    },
    {
      feature: "Canadian Data Residency",
      mycase: "No — US data centres",
      atticus: "Yes — Canadian data residency, PIPEDA compliant",
    },
    {
      feature: "Pricing Currency",
      mycase: "USD pricing — $39–$89+ USD/user/month",
      atticus: "$149 CAD/month — per lawyer",
    },
    {
      feature: "Ontario Limitation Period Tracking",
      mycase: "No — US-oriented deadline tools",
      atticus: "Automated deadline tracking with overdue alerts",
    },
    {
      feature: "Matter Management",
      mycase: "Strong — core US practice management",
      atticus: "Full matter records with documents and AI search",
    },
    {
      feature: "Client Portal",
      mycase: "Yes — MyCase client portal",
      atticus: "Yes — client notes and matter communication",
    },
    {
      feature: "Billing and Invoicing",
      mycase: "Yes — US billing; HST requires manual configuration",
      atticus: "Yes — billing with HST in CAD; trust accounting integrated",
    },
    {
      feature: "Target Market",
      mycase: "US law firms primarily",
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
      <section className="bg-gradient-to-br from-violet-900 to-violet-800 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-violet-300 text-violet-900 text-sm font-semibold px-4 py-1 rounded-full mb-6">
            MyCase Canada Alternative
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            MyCase vs Atticus for Ontario Lawyers
          </h1>
          <p className="text-xl text-violet-100 max-w-2xl mx-auto mb-8">
            MyCase is a well-designed US practice management platform — but it was built for the
            American market. Ontario lawyers need LSO By-Law&nbsp;9 trust accounting, Canadian data
            residency, and CAD pricing. Atticus was built for exactly that.
          </p>
          <Link
            href="/sign-up"
            className="inline-block bg-violet-300 hover:bg-violet-200 text-violet-900 font-bold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Start Free Trial
          </Link>
        </div>
      </section>

      {/* What Is MyCase */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">What Is MyCase?</h2>
          <p className="text-lg text-gray-700 mb-4">
            MyCase is a US cloud practice management platform offering matter management, time tracking,
            billing, document storage, and a client portal. It is widely used by small to mid-size US law
            firms and is owned by AffiniPay, the same company that owns LawPay.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            MyCase is built for the US legal market — its trust accounting is designed for US IOLTA rules,
            not for Ontario&apos;s LSO By-Law&nbsp;9 requirements. All data is stored in US data centres,
            creating PIPEDA compliance concerns for Ontario firms. Pricing is in USD and configured for
            the US tax system, meaning HST handling requires manual workarounds.
          </p>
          <p className="text-lg text-gray-700">
            Ontario lawyers choosing between MyCase and Atticus should focus on the regulatory mismatch:
            Atticus is built specifically for Ontario with native LSO trust accounting, Canadian data
            centres, CAD pricing, and AI document analysis purpose-built for Ontario legal practice.
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">
            MyCase vs Atticus — Feature Comparison
          </h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-violet-900 text-white">
                  <th className="px-6 py-4 font-semibold w-1/3">Feature</th>
                  <th className="px-6 py-4 font-semibold w-1/3">MyCase</th>
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
                    <td className="px-6 py-4 text-gray-600">{row.mycase}</td>
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
            5 Reasons Ontario Lawyers Choose Atticus Over MyCase
          </h2>
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {[
              {
                title: "LSO By-Law 9 Trust Accounting — Out of the Box",
                body:
                  "MyCase trust accounting is built for US IOLTA rules. Ontario law firms need LSO By-Law 9 compliance — a different and more demanding regulatory regime. Atticus implements this natively from day one.",
              },
              {
                title: "Canadian Data Residency for PIPEDA Compliance",
                body:
                  "MyCase stores all data on US servers. Ontario firms handling client files with personal information need PIPEDA-compliant Canadian data storage. Atticus hosts all data in Canadian data centres.",
              },
              {
                title: "CAD Pricing — No Exchange Rate Uncertainty",
                body:
                  "MyCase charges $39–$89+ USD per user per month — after exchange rate, that is $54–$123+ CAD/user/month for a currency that fluctuates. Atticus is $149 CAD/month per lawyer.",
              },
              {
                title: "AI Purpose-Built for Ontario Practice",
                body:
                  "Atticus AI understands Ontario legal context — it processes documents with Ontario law terminology, tracks Ontario limitation periods, and answers questions about LSO compliance from your matter files. MyCase AI is generic.",
              },
              {
                title: "Ontario-Specific Features Throughout",
                body:
                  "HST is built in to Atticus billing. Ontario limitation period tracking is automated. LSO By-Law 9 trust accounting is native. Every feature was designed for an Ontario practice — not retrofitted from a US product.",
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
              <h3 className="text-2xl font-bold mb-2">MyCase</h3>
              <p className="text-gray-500 mb-4">US practice management platform</p>
              <ul className="space-y-3 text-gray-700">
                <li>$39–$89+ USD/user/month</li>
                <li>No LSO By-Law 9 trust accounting</li>
                <li>US IOLTA trust only</li>
                <li>US data centres — not PIPEDA</li>
                <li>USD billing + manual HST</li>
                <li>Per-user pricing scales with hires</li>
                <li>US-focused features and compliance</li>
              </ul>
            </div>
            <div className="border-2 border-violet-500 rounded-xl p-8 relative">
              <div className="absolute -top-3 left-6 bg-violet-500 text-white text-sm font-bold px-3 py-1 rounded-full">
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
                <li>Billing with HST in CAD</li>
                <li>Deadline tracking and alerts</li>
                <li>Canadian data residency PIPEDA</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-violet-900 text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Choose Ontario-Built Over US-Adapted
          </h2>
          <p className="text-xl text-violet-100 mb-8">
            Stop adapting a US product to Ontario requirements. Atticus was built for Ontario from day one —
            LSO trust accounting, Canadian data residency, and AI that understands your practice.
          </p>
          <Link
            href="/sign-up"
            className="inline-block bg-violet-300 hover:bg-violet-200 text-violet-900 font-bold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Start Free Trial
          </Link>
          <p className="mt-4 text-sm text-violet-300">
            No credit card required &middot; $149 CAD/month after trial
          </p>
        </div>
      </section>
    </div>
  );
}
