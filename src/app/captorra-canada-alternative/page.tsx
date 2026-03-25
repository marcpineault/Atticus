import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Captorra Canada Alternative for Ontario Lawyers | Atticus",
  description:
    "Comparing Captorra to Atticus for Ontario law firms. Captorra is a US lead intake and CRM platform for PI and mass tort firms with no LSO By-Law 9 trust accounting. Atticus is purpose-built for Ontario: trust accounting, AI, matter management, flat $149 CAD/month.",
  openGraph: {
    title: "Captorra Canada Alternative — Atticus vs Captorra for Ontario Lawyers",
    description:
      "Captorra is a US lead intake and CRM platform for PI/mass tort firms — no LSO By-Law 9, US data centres, USD pricing. Atticus is built for Ontario: native trust accounting, AI, complete practice management, $149 CAD/month.",
    type: "website",
    url: "https://getatticus.ca/captorra-canada-alternative",
  },
  alternates: { canonical: "https://getatticus.ca/captorra-canada-alternative" },
};

export default function CaptorraCanadaAlternativePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Captorra Canada Alternative for Ontario Lawyers",
    description:
      "Comparing Captorra to Atticus for Ontario law firms. Atticus offers LSO By-Law 9 trust accounting, AI document analysis, and flat $149 CAD/month pricing.",
    url: "https://getatticus.ca/captorra-canada-alternative",
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
        <section className="bg-gradient-to-br from-slate-900 to-rose-900 text-white py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block bg-rose-500 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Captorra Canada Alternative
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Atticus vs Captorra — Ontario PI Lawyers Need a Canadian Practice Management Platform
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Captorra is a US lead intake and CRM platform for personal injury and mass tort law
              firms. Atticus is a complete Ontario practice management platform: trust accounting,
              AI, matter management, and billing — at $149 CAD/month for your entire firm.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/sign-up"
                className="bg-rose-500 hover:bg-rose-400 text-white font-semibold px-8 py-3 rounded-lg transition"
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

        {/* What Is Captorra */}
        <section className="py-16 px-6 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">What Is Captorra?</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-4">
              Captorra is a US-based lead intake, CRM, and intake automation platform designed
              for plaintiff personal injury and mass tort law firms. It focuses on converting
              inbound leads into signed clients through automated follow-up, intake forms, e-sign
              retainer agreements, and pipeline management. Captorra integrates with other
              practice management and billing systems.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              Captorra is designed for US PI firms operating under US IOLTA trust accounting,
              US insurance regulations, and US court systems. It has no LSO By-Law 9 trust
              accounting, no Ontario-specific PI workflows, and its data infrastructure is
              US-based. Ontario PI firms need a platform that understands SABS, Ontario tort
              rules, and Ontario Law Society trust requirements from the ground up.
            </p>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Atticus vs Captorra — Side-by-Side Comparison
            </h2>
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left p-4 font-semibold">Feature</th>
                    <th className="text-center p-4 font-semibold">Atticus</th>
                    <th className="text-center p-4 font-semibold">Captorra</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["LSO By-Law 9 Trust Accounting", "Native — built-in", "Not available"],
                    ["Pricing", "$149 CAD/month entire firm", "Custom enterprise pricing"],
                    ["AI Document Analysis", "Included — Ontario law", "Not available"],
                    ["Lead Intake & CRM", "Included with intake", "Core feature"],
                    ["Matter Management", "Full matter management", "Not available"],
                    ["Ontario SABS Workflows", "Ontario PI support", "US PI workflows"],
                    ["Billing & Invoicing", "Included with HST", "Not available"],
                    ["Data Residency", "Canadian — PIPEDA compliant", "US data centres"],
                    ["Platform Origin", "Built for Ontario", "US plaintiff PI platform"],
                  ].map(([feature, atticus, captorra], i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-4 font-medium text-slate-800">{feature}</td>
                      <td className="p-4 text-center text-green-700 font-medium">{atticus}</td>
                      <td className="p-4 text-center text-slate-500">{captorra}</td>
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
              5 Reasons Ontario PI Lawyers Choose Atticus Over Captorra
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Complete Platform vs Intake-Only",
                  body: "Captorra captures leads and signs retainers. After that you need a separate practice management system, trust accounting, billing, and document tools. Atticus handles intake, matters, trust accounting, billing, and AI document analysis in one platform.",
                },
                {
                  title: "Trust Accounting for Ontario PI Settlements",
                  body: "Ontario PI firms receive large settlement funds into trust — sometimes hundreds of thousands of dollars. LSO By-Law 9 compliance is mandatory for every disbursement. Captorra has no trust accounting. Atticus handles Ontario trust accounting natively so you never risk a Law Society compliance issue.",
                },
                {
                  title: "Ontario PI Regulatory Context",
                  body: "Captorra is built for US plaintiff PI practice. Ontario personal injury lawyers work under the Insurance Act, SABS O.Reg. 34/10, the Licence Appeal Tribunal, and Ontario tort threshold rules — not US insurance systems. Atticus is built for the Ontario legal environment.",
                },
                {
                  title: "Canadian Client Data Protection",
                  body: "Captorra stores intake data on US servers. Ontario PI clients provide highly sensitive personal, medical, and financial information during intake. PIPEDA and client confidentiality obligations require careful attention to data residency. Atticus keeps all data in Canada.",
                },
                {
                  title: "Flat Pricing vs Enterprise Quotes",
                  body: "Captorra typically requires an enterprise quote — pricing varies by firm size and features. Atticus is $149 CAD/month per lawyer per month, period. No surprise invoices, no per-case fees, no implementation project.",
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
              Captorra + Practice Management vs Atticus All-in-One
            </h2>
            <p className="text-slate-600 text-lg mb-8">
              Captorra requires enterprise pricing conversations. On top of that, you need
              practice management software, trust accounting, billing, and document tools.
              Ontario PI firms building this stack typically spend $800–$2,000+ CAD/month on
              combined software. Atticus replaces everything for $149 CAD/month.
            </p>
            <div className="bg-rose-50 border border-rose-200 rounded-xl p-8 inline-block">
              <p className="text-4xl font-bold text-rose-700 mb-2">$149 CAD/month</p>
              <p className="text-slate-600">For your entire Ontario firm — intake through trust accounting</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6 bg-slate-900 text-white">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ontario PI Lawyers: Replace Captorra with a Complete Practice Platform
            </h2>
            <p className="text-slate-300 mb-8">
              Atticus gives Ontario personal injury lawyers trust accounting, AI, intake, matter
              management, and billing in one platform at $149 CAD/month.
            </p>
            <Link
              href="/sign-up"
              className="bg-rose-500 hover:bg-rose-400 text-white font-bold px-10 py-4 rounded-lg text-lg transition inline-block"
            >
              Start Free Trial
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
