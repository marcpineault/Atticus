import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Docketwise Canada Alternative for Ontario Lawyers | Atticus",
  description:
    "Comparing Docketwise to Atticus for Ontario immigration and general law firms. Docketwise is a US immigration-focused practice management platform with no LSO By-Law 9 trust accounting. Atticus is purpose-built for Ontario: trust accounting, AI, matter management, flat $149 CAD/month.",
  openGraph: {
    title: "Docketwise Canada Alternative — Atticus vs Docketwise for Ontario Lawyers",
    description:
      "Docketwise is a US immigration software platform — optimized for US immigration forms, no LSO By-Law 9 trust accounting, US data centres. Atticus is built for Ontario: native trust accounting, AI, $149 CAD/month.",
    type: "website",
    url: "https://getatticus.ca/docketwise-canada-alternative",
  },
  alternates: { canonical: "https://getatticus.ca/docketwise-canada-alternative" },
};

export default function DocketwiseCanadaAlternativePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Docketwise Canada Alternative for Ontario Lawyers",
    description:
      "Comparing Docketwise to Atticus for Ontario law firms. Atticus offers LSO By-Law 9 trust accounting, AI document analysis, and flat $149 CAD/month pricing.",
    url: "https://getatticus.ca/docketwise-canada-alternative",
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
        <section className="bg-gradient-to-br from-slate-900 to-cyan-900 text-white py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block bg-cyan-500 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Docketwise Canada Alternative
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Atticus vs Docketwise — Ontario Immigration Lawyers Need a Canadian Platform
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Docketwise is a US immigration software platform built for USCIS forms and US
              immigration practice. Atticus is a complete Ontario practice management platform:
              trust accounting, AI, matter management, and billing at $149 CAD/month for
              your entire firm.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/sign-up"
                className="bg-cyan-500 hover:bg-cyan-400 text-white font-semibold px-8 py-3 rounded-lg transition"
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

        {/* What Is Docketwise */}
        <section className="py-16 px-6 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">What Is Docketwise?</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-4">
              Docketwise is a US-based cloud practice management platform designed for immigration
              law firms. It automates US immigration forms (USCIS, DOS), tracks case status, manages
              client questionnaires, and handles billing for US immigration practices. It was
              acquired by Soluno&apos;s parent company in 2022 and has continued as a standalone
              immigration-focused product.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              While Docketwise has some Canadian users, it is fundamentally built for US
              immigration practice: USCIS forms, US immigration case types, and US billing
              conventions. Canadian immigration lawyers practicing under IRCC (Immigration,
              Refugees and Citizenship Canada) procedures and RCIC regulatory requirements have
              a different set of needs — and Ontario lawyers in any practice area need LSO
              By-Law 9 compliant trust accounting that Docketwise does not provide.
            </p>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Atticus vs Docketwise — Side-by-Side Comparison
            </h2>
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left p-4 font-semibold">Feature</th>
                    <th className="text-center p-4 font-semibold">Atticus</th>
                    <th className="text-center p-4 font-semibold">Docketwise</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["LSO By-Law 9 Trust Accounting", "Native — built-in", "No — US billing focused"],
                    ["Pricing", "$149 CAD/month entire firm", "$69–$99+ USD/user/month"],
                    ["5-Lawyer Firm Monthly Cost", "~$149 CAD/month", "~$345–$495+ USD/month"],
                    ["AI Document Analysis", "Included — Ontario law", "Not available"],
                    ["Canadian Immigration Support", "IRCC matter tracking", "US USCIS forms only"],
                    ["Matter Management", "Full matter management", "Immigration case management"],
                    ["Billing & Invoicing", "Included with HST", "US billing conventions"],
                    ["Data Residency", "Canadian — PIPEDA compliant", "US data centres"],
                    ["Platform Origin", "Built for Ontario", "US immigration platform"],
                  ].map(([feature, atticus, dw], i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-4 font-medium text-slate-800">{feature}</td>
                      <td className="p-4 text-center text-green-700 font-medium">{atticus}</td>
                      <td className="p-4 text-center text-slate-500">{dw}</td>
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
              5 Reasons Ontario Immigration Lawyers Choose Atticus Over Docketwise
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Canadian Immigration vs US USCIS",
                  body: "Docketwise is built for USCIS forms and US immigration case types. Canadian immigration lawyers deal with IRCC applications, NOCs, LMIA-exempt work permits, Express Entry, Provincial Nominee Programs, and refugee claims — none of which Docketwise was designed for.",
                },
                {
                  title: "LSO Trust Accounting Required",
                  body: "Ontario immigration lawyers who are also LSO-licensed lawyers must maintain LSO By-Law 9 compliant trust accounting. Retainers received from immigration clients are trust funds. Docketwise has no LSO-compliant trust accounting. Atticus handles it natively.",
                },
                {
                  title: "Flat Pricing for Growing Immigration Practices",
                  body: "Docketwise charges $69–$99+ USD/user/month. A 5-lawyer immigration firm pays $345–$495+ USD/month (~$473–$678 CAD/month). Atticus covers the entire firm for $149 CAD/month — more than 10x cheaper for a typical immigration practice.",
                },
                {
                  title: "Canadian Data Residency",
                  body: "Immigration files contain highly sensitive personal information: passports, biometrics, criminal records, health information. Docketwise stores this on US servers. Atticus keeps all data in Canada with PIPEDA compliance — essential for client trust in immigration practice.",
                },
                {
                  title: "Complete Practice Management",
                  body: "Many Ontario immigration lawyers also handle other practice areas or want one platform for all matters. Atticus manages all Ontario practice areas — immigration, corporate, real estate, litigation — in a single system with shared billing and trust accounting.",
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
              The Real Cost of Docketwise for an Ontario Immigration Firm
            </h2>
            <p className="text-slate-600 text-lg mb-8">
              Docketwise Solo starts around $69 USD/user/month; higher tiers run $99+ USD/user/month.
              For 5 lawyers: $345–$495+ USD/month or $473–$678+ CAD/month at current exchange rates.
              Plus separate trust accounting software to meet Ontario LSO requirements.
              Atticus covers everything for $149 CAD/month total.
            </p>
            <div className="bg-cyan-50 border border-cyan-200 rounded-xl p-8 inline-block">
              <p className="text-4xl font-bold text-cyan-700 mb-2">$149 CAD/month</p>
              <p className="text-slate-600">For your entire Ontario firm — all practice areas</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6 bg-slate-900 text-white">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Switch from Docketwise to a Complete Ontario Practice Management Platform
            </h2>
            <p className="text-slate-300 mb-8">
              Atticus gives Ontario lawyers trust accounting, AI, matter management, and billing
              in one platform at $149 CAD/month for the whole firm.
            </p>
            <Link
              href="/sign-up"
              className="bg-cyan-500 hover:bg-cyan-400 text-white font-bold px-10 py-4 rounded-lg text-lg transition inline-block"
            >
              Start Free Trial
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
