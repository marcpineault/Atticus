import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "TimeSOLV Canada Alternative for Ontario Lawyers | Atticus",
  description:
    "Comparing TimeSOLV to Atticus for Ontario law firms. TimeSOLV is a US cloud billing platform with no LSO By-Law 9 trust accounting. Atticus is purpose-built for Ontario: trust accounting, AI, matter management, flat $149 CAD/month for the whole firm.",
  openGraph: {
    title: "TimeSOLV Canada Alternative — Atticus vs TimeSOLV for Ontario Lawyers",
    description:
      "TimeSOLV is a US cloud billing platform — no LSO By-Law 9 trust accounting, US data centres, USD pricing. Atticus is built for Ontario: native trust accounting, AI document analysis, $149 CAD/month.",
    type: "website",
    url: "https://getatticus.ca/timesolv-canada-alternative",
  },
  alternates: { canonical: "https://getatticus.ca/timesolv-canada-alternative" },
};

export default function TimesolvCanadaAlternativePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "TimeSOLV Canada Alternative for Ontario Lawyers",
    description:
      "Comparing TimeSOLV to Atticus for Ontario law firms. Atticus offers LSO By-Law 9 trust accounting, AI document analysis, and flat $149 CAD/month pricing.",
    url: "https://getatticus.ca/timesolv-canada-alternative",
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
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block bg-violet-500 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              TimeSOLV Canada Alternative
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Atticus vs TimeSOLV — Ontario Law Firms Deserve More Than a Billing Timer
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              TimeSOLV is a US-based cloud billing platform that tracks time and sends invoices.
              Atticus is a complete Ontario practice management platform: trust accounting, AI,
              matter management, and billing — all at $149 CAD/month for your entire firm.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/sign-up"
                className="bg-violet-500 hover:bg-violet-400 text-white font-semibold px-8 py-3 rounded-lg transition"
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

        {/* What Is TimeSOLV */}
        <section className="py-16 px-6 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">What Is TimeSOLV?</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-4">
              TimeSOLV is a US-based cloud legal time-billing and invoicing platform founded in 1999.
              It is marketed primarily to US law firms that need time tracking, invoicing, and basic
              trust accounting under US IOLTA rules. TimeSOLV offers per-user monthly plans ranging
              from approximately $34.95 to $59.95 USD per user per month depending on the tier
              selected.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              While TimeSOLV has Canadian subscribers, it is designed around US billing workflows,
              US IOLTA trust accounting, and USD invoicing. It does not natively support LSO By-Law
              9 trust accounting requirements — the mandatory Ontario rules governing client trust
              funds — and its servers are based in the United States.
            </p>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Atticus vs TimeSOLV — Side-by-Side Comparison
            </h2>
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left p-4 font-semibold">Feature</th>
                    <th className="text-center p-4 font-semibold">Atticus</th>
                    <th className="text-center p-4 font-semibold">TimeSOLV</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["LSO By-Law 9 Trust Accounting", "Native — built-in", "No — US IOLTA rules"],
                    ["Pricing", "$149 CAD/month entire firm", "$34.95–$59.95 USD/user/month"],
                    ["5-Lawyer Firm Monthly Cost", "~$149 CAD/month", "~$235–$400+ USD/month"],
                    ["AI Document Analysis", "Included — Ontario law", "Not available"],
                    ["Matter Management", "Full matter management", "Basic matter tracking"],
                    ["Billing & Invoicing", "Included with HST", "Core feature — USD default"],
                    ["Data Residency", "Canadian — PIPEDA compliant", "US data centres"],
                    ["Platform Origin", "Built for Ontario", "US platform"],
                    ["Mobile App", "Browser-based anywhere", "iOS/Android + web"],
                  ].map(([feature, atticus, timesolv], i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-4 font-medium text-slate-800">{feature}</td>
                      <td className="p-4 text-center text-green-700 font-medium">{atticus}</td>
                      <td className="p-4 text-center text-slate-500">{timesolv}</td>
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
              5 Reasons Ontario Lawyers Switch from TimeSOLV to Atticus
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Trust Accounting Built for Ontario",
                  body: "TimeSOLV&apos;s trust accounting is built for US IOLTA rules. LSO By-Law 9 has distinct requirements around client trust records, reconciliation, and reporting. Atticus handles these natively — you are not retrofitting a US product to meet Ontario obligations.",
                },
                {
                  title: "All-in-One vs Billing-Only",
                  body: "TimeSOLV is fundamentally a billing timer with invoicing attached. Atticus includes matter management, client intake, document analysis, trust accounting, and billing in a single platform — no additional subscriptions required.",
                },
                {
                  title: "Flat Pricing That Scales",
                  body: "TimeSOLV charges per user. As your firm grows from 3 to 6 to 10 lawyers, your bill multiplies. Atticus charges $149 CAD/month per lawyer per month regardless of headcount — the price does not change as you hire.",
                },
                {
                  title: "Canadian Data Residency",
                  body: "Client files, trust records, and billing data in Atticus stay in Canada. TimeSOLV operates on US data centres. For firms handling sensitive client matters, Canadian data residency and PIPEDA compliance are not optional.",
                },
                {
                  title: "AI Built for Ontario Legal Work",
                  body: "Atticus includes AI document analysis trained on Ontario statutes, case law, and practice standards — not US legal content. Review Ontario court orders, analyze property documents, and flag Ontario-specific issues without manual research.",
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
              What TimeSOLV Really Costs a 5-Lawyer Ontario Firm
            </h2>
            <p className="text-slate-600 text-lg mb-8">
              TimeSOLV Solo: ~$34.95 USD/user/month. TimeSOLV Billing Plus: ~$59.95 USD/user/month.
              For a 5-lawyer firm: $175–$300 USD/month for billing features alone — plus separate
              practice management, trust accounting, and document software if needed. At current
              exchange rates (1 USD ≈ 1.37 CAD), that is $240–$411 CAD/month just for billing.
              Atticus covers billing, trust accounting, matter management, and AI for $149 CAD/month
              total.
            </p>
            <div className="bg-violet-50 border border-violet-200 rounded-xl p-8 inline-block">
              <p className="text-4xl font-bold text-violet-700 mb-2">$149 CAD/month</p>
              <p className="text-slate-600">For your entire Ontario firm — not per user</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6 bg-slate-900 text-white">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Replace TimeSOLV with a Complete Ontario Solution?
            </h2>
            <p className="text-slate-300 mb-8">
              Atticus gives Ontario lawyers trust accounting, AI, billing, and matter management in
              one platform at $149 CAD/month for the whole firm.
            </p>
            <Link
              href="/sign-up"
              className="bg-violet-500 hover:bg-violet-400 text-white font-bold px-10 py-4 rounded-lg text-lg transition inline-block"
            >
              Start Free Trial
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
