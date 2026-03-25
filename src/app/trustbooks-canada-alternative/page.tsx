import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "TrustBooks Canada Alternative for Ontario Lawyers | Atticus",
  description:
    "Comparing TrustBooks to Atticus for Ontario law firms. TrustBooks is a US trust accounting-only platform with no matter management or AI. Atticus is purpose-built for Ontario: LSO By-Law 9 trust accounting, AI, matter management, billing — all at flat $149 CAD/month.",
  openGraph: {
    title: "TrustBooks Canada Alternative — Atticus vs TrustBooks for Ontario Lawyers",
    description:
      "TrustBooks is a US trust accounting-only platform — no matter management, no billing, no AI, no Ontario trust rules. Atticus is built for Ontario: native LSO trust accounting, AI, complete practice management, $149 CAD/month.",
    type: "website",
    url: "https://getatticus.ca/trustbooks-canada-alternative",
  },
  alternates: { canonical: "https://getatticus.ca/trustbooks-canada-alternative" },
};

export default function TrustbooksCanadaAlternativePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "TrustBooks Canada Alternative for Ontario Lawyers",
    description:
      "Comparing TrustBooks to Atticus for Ontario law firms. Atticus offers LSO By-Law 9 trust accounting, AI document analysis, and flat $149 CAD/month pricing.",
    url: "https://getatticus.ca/trustbooks-canada-alternative",
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
        <section className="bg-gradient-to-br from-slate-900 to-emerald-900 text-white py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block bg-emerald-500 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              TrustBooks Canada Alternative
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Atticus vs TrustBooks — Ontario Lawyers Need Trust Accounting Plus Everything Else
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              TrustBooks is a US trust accounting-only platform designed for US IOLTA rules.
              Atticus is a complete Ontario practice management platform: LSO By-Law 9 trust
              accounting, AI document analysis, matter management, and billing at $149 CAD/month
              flat for your entire firm.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/sign-up"
                className="bg-emerald-500 hover:bg-emerald-400 text-white font-semibold px-8 py-3 rounded-lg transition"
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

        {/* What Is TrustBooks */}
        <section className="py-16 px-6 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">What Is TrustBooks?</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-4">
              TrustBooks is a US-based cloud trust accounting platform designed for law firms
              to manage their client trust accounts. It focuses specifically on IOLTA trust
              accounting compliance under US state bar rules. TrustBooks provides ledger
              management, reconciliation, and trust fund reporting for US law firms.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              TrustBooks is a single-purpose trust accounting tool for US firms. It does not
              support Ontario&apos;s LSO By-Law 9 requirements, has no matter management, no
              billing, no time tracking, and no AI. Ontario law firms using TrustBooks would
              still need practice management software, billing tools, and time tracking —
              and would still be using US IOLTA-based trust accounting rather than Ontario
              LSO By-Law 9 compliant trust accounting.
            </p>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Atticus vs TrustBooks — Side-by-Side Comparison
            </h2>
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left p-4 font-semibold">Feature</th>
                    <th className="text-center p-4 font-semibold">Atticus</th>
                    <th className="text-center p-4 font-semibold">TrustBooks</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["LSO By-Law 9 Trust Accounting", "Native — built-in", "No — US IOLTA rules"],
                    ["Pricing", "$149 CAD/month entire firm", "$49–$99+ USD/month"],
                    ["Matter Management", "Full matter management", "Not available"],
                    ["AI Document Analysis", "Included — Ontario law", "Not available"],
                    ["Billing & Invoicing", "Included with HST", "Not available"],
                    ["Time Tracking", "Included", "Not available"],
                    ["Client Intake", "Included", "Not available"],
                    ["Data Residency", "Canadian — PIPEDA compliant", "US data centres"],
                    ["Platform Purpose", "Complete practice management", "Trust accounting only"],
                  ].map(([feature, atticus, tb], i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-4 font-medium text-slate-800">{feature}</td>
                      <td className="p-4 text-center text-green-700 font-medium">{atticus}</td>
                      <td className="p-4 text-center text-slate-500">{tb}</td>
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
              5 Reasons Ontario Lawyers Choose Atticus Over TrustBooks
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "LSO By-Law 9 vs US IOLTA",
                  body: "TrustBooks is built for US IOLTA rules. Ontario&apos;s LSO By-Law 9 trust accounting requirements have distinct rules around individual client ledgers, monthly reconciliation reports, and trust records retention. Atticus handles Ontario requirements natively.",
                },
                {
                  title: "Complete Platform vs Trust Accounting Only",
                  body: "TrustBooks only handles trust accounting. Ontario law firms also need matter management, billing, time tracking, client intake, and document analysis. Adding TrustBooks to your stack still leaves you needing multiple other tools. Atticus replaces all of them.",
                },
                {
                  title: "Same Price — Way More Features",
                  body: "TrustBooks charges $49–$99+ USD/month for trust accounting only. Atticus charges $149 CAD/month for trust accounting plus matter management, billing, time tracking, AI document analysis, and client intake — all in one platform.",
                },
                {
                  title: "Canadian Data Residency",
                  body: "TrustBooks stores trust account data on US servers. Ontario law firm trust accounts contain sensitive client financial information. PIPEDA compliance and client confidentiality obligations favour Canadian data residency. Atticus keeps all data in Canada.",
                },
                {
                  title: "No More Software Stack",
                  body: "Ontario firms using TrustBooks still need practice management, billing, and time tracking software separately. Atticus replaces the entire stack for $149 CAD/month — eliminating TrustBooks and every other tool you currently pay for.",
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
              TrustBooks + Practice Stack vs Atticus All-in-One
            </h2>
            <p className="text-slate-600 text-lg mb-8">
              TrustBooks: $49–$99+ USD/month for trust accounting only (~$67–$136 CAD).
              Add practice management, billing, and time tracking and you are paying $500+
              CAD/month across tools — none of which are built for Ontario LSO By-Law 9.
              Atticus covers everything for $149 CAD/month total with native Ontario compliance.
            </p>
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-8 inline-block">
              <p className="text-4xl font-bold text-emerald-700 mb-2">$149 CAD/month</p>
              <p className="text-slate-600">For your entire Ontario firm — LSO trust accounting included</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6 bg-slate-900 text-white">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Replace TrustBooks and Your Entire Stack with Atticus
            </h2>
            <p className="text-slate-300 mb-8">
              Atticus gives Ontario lawyers LSO By-Law 9 trust accounting, AI, matter management,
              and billing in one platform at $149 CAD/month for the whole firm.
            </p>
            <Link
              href="/sign-up"
              className="bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-10 py-4 rounded-lg text-lg transition inline-block"
            >
              Start Free Trial
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
