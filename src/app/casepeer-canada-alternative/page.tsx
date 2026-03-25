import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CasePeer Canada Alternative for Ontario Lawyers | Atticus",
  description:
    "Comparing CasePeer to Atticus for Ontario law firms. CasePeer is a US plaintiff personal injury software with no LSO By-Law 9 trust accounting. Atticus is purpose-built for Ontario: trust accounting, AI, matter management, flat $149 CAD/month for the whole firm.",
  openGraph: {
    title: "CasePeer Canada Alternative — Atticus vs CasePeer for Ontario Lawyers",
    description:
      "CasePeer is a US plaintiff PI software — optimized for US contingency fee personal injury, no LSO By-Law 9, US data centres, USD pricing. Atticus is built for Ontario: native trust accounting, AI, $149 CAD/month.",
    type: "website",
    url: "https://getatticus.ca/casepeer-canada-alternative",
  },
  alternates: { canonical: "https://getatticus.ca/casepeer-canada-alternative" },
};

export default function CasepeerCanadaAlternativePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "CasePeer Canada Alternative for Ontario Lawyers",
    description:
      "Comparing CasePeer to Atticus for Ontario law firms. Atticus offers LSO By-Law 9 trust accounting, AI document analysis, and flat $149 CAD/month pricing.",
    url: "https://getatticus.ca/casepeer-canada-alternative",
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
        <section className="bg-gradient-to-br from-slate-900 to-orange-900 text-white py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block bg-orange-500 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              CasePeer Canada Alternative
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Atticus vs CasePeer — Ontario Personal Injury Lawyers Need a Canadian Platform
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              CasePeer is a US plaintiff personal injury software built for US contingency fee
              practice. Atticus is a complete Ontario practice management platform — trust accounting,
              AI, matter management, and billing at $149 CAD/month for your entire firm.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/sign-up"
                className="bg-orange-500 hover:bg-orange-400 text-white font-semibold px-8 py-3 rounded-lg transition"
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

        {/* What Is CasePeer */}
        <section className="py-16 px-6 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">What Is CasePeer?</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-4">
              CasePeer is a US-based cloud legal practice management platform designed specifically
              for plaintiff personal injury (PI) law firms. It offers features tailored to US
              contingency fee PI practice: medical record tracking, demand letter automation,
              lien tracking, settlement management, and plaintiff-specific workflows.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              CasePeer is built for US PI firms and US IOLTA trust accounting. It does not natively
              support LSO By-Law 9 trust accounting requirements for Ontario, its billing workflows
              are optimized for US contingency fee structures, and its data centres are located in
              the United States. Ontario personal injury firms handling SABS (Statutory Accident
              Benefits Schedule), tort claims, and Ontario Rules of Civil Procedure litigation need
              tools built for the Ontario regulatory environment.
            </p>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Atticus vs CasePeer — Side-by-Side Comparison
            </h2>
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left p-4 font-semibold">Feature</th>
                    <th className="text-center p-4 font-semibold">Atticus</th>
                    <th className="text-center p-4 font-semibold">CasePeer</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["LSO By-Law 9 Trust Accounting", "Native — built-in", "No — US IOLTA rules"],
                    ["Pricing", "$149 CAD/month entire firm", "$65–$95+ USD/user/month"],
                    ["5-Lawyer Firm Monthly Cost", "~$149 CAD/month", "~$325–$475+ USD/month"],
                    ["AI Document Analysis", "Included — Ontario law", "Not available"],
                    ["Ontario-Specific PI Workflows", "Ontario SABS + tort", "US PI workflows"],
                    ["Matter Management", "Full matter management", "PI-focused case management"],
                    ["Billing & Invoicing", "Included with HST", "US contingency fee billing"],
                    ["Data Residency", "Canadian — PIPEDA compliant", "US data centres"],
                    ["Platform Origin", "Built for Ontario", "US plaintiff PI platform"],
                  ].map(([feature, atticus, casepeer], i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-4 font-medium text-slate-800">{feature}</td>
                      <td className="p-4 text-center text-green-700 font-medium">{atticus}</td>
                      <td className="p-4 text-center text-slate-500">{casepeer}</td>
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
              5 Reasons Ontario PI Lawyers Choose Atticus Over CasePeer
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "LSO Trust Accounting vs US IOLTA",
                  body: "CasePeer&apos;s trust accounting is built for US IOLTA. Ontario PI firms receive large settlement funds into trust, handle SABS accident benefit amounts, and must comply with LSO By-Law 9 for every disbursement. Atticus handles Ontario trust accounting natively.",
                },
                {
                  title: "Ontario PI Regulatory Context",
                  body: "Ontario personal injury practice operates under the Insurance Act RSO 1990 c I.8, the Statutory Accident Benefits Schedule (SABS), the Rules of Civil Procedure, and the Licence Appeal Tribunal (LAT). CasePeer is built for US insurance and US court systems — not these Ontario-specific frameworks.",
                },
                {
                  title: "Flat Pricing for Multi-Lawyer PI Firms",
                  body: "CasePeer charges per user at $65–$95+ USD/user/month. A 5-lawyer PI firm pays $325–$475+ USD/month (~$445–$651 CAD/month). Atticus covers your entire firm for $149 CAD/month regardless of how many lawyers are handling files.",
                },
                {
                  title: "Canadian Data Residency",
                  body: "Personal injury files contain sensitive medical records, accident reports, and financial information about injured clients. Canadian data residency and PIPEDA compliance are not optional for Ontario PI firms. Atticus stores all client data in Canada.",
                },
                {
                  title: "AI for Ontario Documents",
                  body: "Atticus AI is built on Ontario law — it can analyze SABS claim documents, OCF forms, Ontario court orders, and legal agreements with understanding of Ontario legislative and regulatory context, not US statutes.",
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
              CasePeer vs Atticus: The Cost for an Ontario PI Firm
            </h2>
            <p className="text-slate-600 text-lg mb-8">
              CasePeer pricing runs $65–$95 USD/user/month for typical PI firm plans. For a
              5-lawyer Ontario PI firm: $325–$475 USD/month or $445–$651 CAD/month at current
              exchange rates. Plus any add-ons for document management, additional storage, or
              premium features. Atticus covers the entire firm — trust accounting, AI, billing,
              matter management — for $149 CAD/month.
            </p>
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-8 inline-block">
              <p className="text-4xl font-bold text-orange-700 mb-2">$149 CAD/month</p>
              <p className="text-slate-600">For your entire Ontario firm — all practice areas</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6 bg-slate-900 text-white">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ontario PI Lawyers: Switch to a Platform Built for Canadian Practice
            </h2>
            <p className="text-slate-300 mb-8">
              Atticus gives Ontario personal injury lawyers trust accounting, AI document analysis,
              matter management, and billing in one platform at $149 CAD/month.
            </p>
            <Link
              href="/sign-up"
              className="bg-orange-500 hover:bg-orange-400 text-white font-bold px-10 py-4 rounded-lg text-lg transition inline-block"
            >
              Start Free Trial
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
