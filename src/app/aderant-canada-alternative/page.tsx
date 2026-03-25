import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Aderant Canada Alternative for Ontario Lawyers | Atticus",
  description:
    "Comparing Aderant to Atticus for Ontario law firms. Aderant is a US enterprise legal software platform for large firms with no LSO By-Law 9 trust accounting. Atticus is purpose-built for Ontario: trust accounting, AI, matter management, flat $149 CAD/month for the whole firm.",
  openGraph: {
    title: "Aderant Canada Alternative — Atticus vs Aderant for Ontario Lawyers",
    description:
      "Aderant is a US enterprise legal software platform for large law firms — six-figure implementation costs, no LSO By-Law 9, US data centres. Atticus is built for Ontario small-to-mid firms: native trust accounting, AI, $149 CAD/month.",
    type: "website",
    url: "https://getatticus.ca/aderant-canada-alternative",
  },
  alternates: { canonical: "https://getatticus.ca/aderant-canada-alternative" },
};

export default function AderantCanadaAlternativePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Aderant Canada Alternative for Ontario Lawyers",
    description:
      "Comparing Aderant to Atticus for Ontario law firms. Atticus offers LSO By-Law 9 trust accounting, AI document analysis, and flat $149 CAD/month pricing.",
    url: "https://getatticus.ca/aderant-canada-alternative",
    mainEntity: {
      "@type": "SoftwareApplication",
      name: "Atticus",
      applicationCategory: "LegalPracticeManagement",
      operatingSystem: "Web",
      offers: {
        "@type": "Offer",
        price: "49",
        priceCurrency: "CAD",
        description: "Flat monthly rate per lawyer per month",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 to-zinc-800 text-white py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block bg-zinc-500 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Aderant Canada Alternative
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Atticus vs Aderant — Why Ontario Solo and Small Firms Don&apos;t Need Enterprise Legal Software
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Aderant is a US enterprise legal management platform built for large law firms with
              six-figure implementation budgets. Atticus is a complete Ontario practice management
              platform for solo and small firms: trust accounting, AI, matter management, and
              billing at $149 CAD/month for your entire firm.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/sign-up"
                className="bg-zinc-500 hover:bg-zinc-400 text-white font-semibold px-8 py-3 rounded-lg transition"
              >
                Try Atticus Free
              </Link>
              <Link
                href="/calculator"
                className="border border-slate-400 hover:border-white text-white font-semibold px-8 py-3 rounded-lg transition"
              >
                Compare Costs
              </Link>
            </div>
          </div>
        </section>

        {/* What Is Aderant */}
        <section className="py-16 px-6 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">What Is Aderant?</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-4">
              Aderant is a US-based enterprise legal practice management and financial management
              platform. It is designed for large law firms — Am Law 100 and 200 firms, and large
              Canadian firms — that require sophisticated financial reporting, complex billing
              arrangements, conflicts management, and enterprise-level matter management.
              Aderant&apos;s flagship products include Expert (matter and financial management) and
              CMS (case management for litigation firms).
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              Aderant implementations typically cost six figures in implementation fees and require
              a dedicated IT team to maintain. It is priced for and used by firms with hundreds
              of lawyers. Aderant does not natively support LSO By-Law 9 trust accounting for
              Ontario, and its infrastructure and billing are US-based. Solo, boutique, and small
              to mid-size Ontario firms have no need for enterprise software of this complexity
              or cost.
            </p>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Atticus vs Aderant — Ontario Small Firm Perspective
            </h2>
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left p-4 font-semibold">Feature</th>
                    <th className="text-center p-4 font-semibold">Atticus</th>
                    <th className="text-center p-4 font-semibold">Aderant</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["LSO By-Law 9 Trust Accounting", "Native — built-in", "No — not Ontario-specific"],
                    ["Pricing", "$149 CAD/month entire firm", "$200,000+ implementation"],
                    ["Deployment", "Sign up, use today", "Months-long implementation project"],
                    ["AI Document Analysis", "Included — Ontario law", "Not available"],
                    ["Target Firm Size", "Solo to 10+ lawyers", "100+ lawyer firms"],
                    ["Billing & Invoicing", "Included — HST in CAD", "Enterprise billing engine"],
                    ["Data Residency", "Canadian — PIPEDA compliant", "US data centres"],
                    ["IT Requirements", "None — browser-based SaaS", "Dedicated IT team required"],
                    ["Platform Origin", "Built for Ontario", "US enterprise platform"],
                  ].map(([feature, atticus, aderant], i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-4 font-medium text-slate-800">{feature}</td>
                      <td className="p-4 text-center text-green-700 font-medium">{atticus}</td>
                      <td className="p-4 text-center text-slate-500">{aderant}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 5 Reasons */}
        <section className="py-16 px-6 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Why Ontario Solo and Small Firms Choose Atticus Over Enterprise Platforms
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Right-Sized for Ontario Small Firms",
                  body: "Aderant is built for hundred-lawyer firms with complex financial reporting needs. Solo practitioners and small Ontario firms need a tool that works out of the box — not a six-month implementation project with a dedicated IT team. Atticus is ready on day one.",
                },
                {
                  title: "Native LSO Trust Accounting",
                  body: "Aderant&apos;s trust accounting is built for large US firm IOLTA requirements. Ontario&apos;s LSO By-Law 9 requirements — individual client ledgers, monthly reconciliation, pooled trust management — are distinct. Atticus handles these natively.",
                },
                {
                  title: "No Implementation Project",
                  body: "Enterprise legal software implementations take months and cost as much as the software itself in consulting fees. Atticus requires no implementation, no IT team, and no consultant. Sign up, import your clients, and start billing on day one.",
                },
                {
                  title: "Canadian Data Residency",
                  body: "Aderant operates on US infrastructure. For Ontario law firms — particularly those handling regulated client information — Canadian data residency is a material consideration. Atticus stores all data in Canada with PIPEDA compliance.",
                },
                {
                  title: "AI Built for Ontario Law",
                  body: "Atticus includes AI document analysis trained on Ontario statutes and case law. Enterprise platforms like Aderant are built around billing workflows and matter management — they do not include legal AI. Ontario lawyers who want AI assistance reviewing documents need a platform built for it.",
                },
              ].map(({ title, body }, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-slate-200">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
                  <p className="text-slate-600" dangerouslySetInnerHTML={{ __html: body }} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Enterprise Costs vs Atticus Flat Pricing
            </h2>
            <p className="text-slate-600 text-lg mb-8">
              Aderant implementations start at $200,000+ in licensing and consulting fees for
              large firms. Annual maintenance, support, and ongoing IT costs add to this figure.
              For a solo or 5-lawyer Ontario firm, enterprise software is neither appropriate
              nor necessary. Atticus provides everything a small Ontario firm needs for
              $149 CAD/month — no implementation, no consulting, no IT team.
            </p>
            <div className="bg-zinc-50 border border-zinc-200 rounded-xl p-8 inline-block">
              <p className="text-4xl font-bold text-zinc-700 mb-2">$149 CAD/month</p>
              <p className="text-slate-600">Complete Ontario practice management — no enterprise budget required</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6 bg-slate-900 text-white">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ontario Small Firms Don&apos;t Need Enterprise Software to Run a Great Practice
            </h2>
            <p className="text-slate-300 mb-8">
              Atticus gives Ontario lawyers trust accounting, AI, matter management, and billing
              in one platform at $149 CAD/month — built specifically for solo and small firms.
            </p>
            <Link
              href="/sign-up"
              className="bg-zinc-500 hover:bg-zinc-400 text-white font-bold px-10 py-4 rounded-lg text-lg transition inline-block"
            >
              Start Free Trial
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
