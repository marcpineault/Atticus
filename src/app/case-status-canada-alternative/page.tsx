import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Case Status Canada Alternative for Ontario Lawyers | Atticus",
  description:
    "Comparing Case Status to Atticus for Ontario law firms. Case Status is a US client communication app with no LSO By-Law 9 trust accounting or matter management. Atticus is purpose-built for Ontario: trust accounting, AI, matter management, flat $149 CAD/month for the whole firm.",
  openGraph: {
    title: "Case Status Canada Alternative — Atticus vs Case Status for Ontario Lawyers",
    description:
      "Case Status is a US client communication app — no trust accounting, no matter management, US data centres. Atticus is built for Ontario: native trust accounting, AI, complete practice management, $149 CAD/month.",
    type: "website",
    url: "https://getatticus.ca/case-status-canada-alternative",
  },
  alternates: { canonical: "https://getatticus.ca/case-status-canada-alternative" },
};

export default function CaseStatusCanadaAlternativePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Case Status Canada Alternative for Ontario Lawyers",
    description:
      "Comparing Case Status to Atticus for Ontario law firms. Atticus offers LSO By-Law 9 trust accounting, AI document analysis, and flat $149 CAD/month pricing.",
    url: "https://getatticus.ca/case-status-canada-alternative",
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
        <section className="bg-gradient-to-br from-slate-900 to-pink-900 text-white py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block bg-pink-500 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Case Status Canada Alternative
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Atticus vs Case Status — Ontario Law Firms Need More Than a Client App
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Case Status is a US client communication and status update app. Atticus is a
              complete Ontario practice management platform: trust accounting, AI document
              analysis, matter management, billing, and client communication — all at $49
              CAD/month flat for your entire firm.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/sign-up"
                className="bg-pink-500 hover:bg-pink-400 text-white font-semibold px-8 py-3 rounded-lg transition"
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

        {/* What Is Case Status */}
        <section className="py-16 px-6 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">What Is Case Status?</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-4">
              Case Status is a US-based client communication and case tracking platform designed
              to reduce the number of client phone calls to law firms. It provides clients with
              a mobile app to check their case progress, receive automated status updates, and
              communicate with their lawyer through a structured interface.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              Case Status is not a practice management platform — it has no trust accounting,
              no billing, no matter management, and no document analysis. It is a single-purpose
              client communication add-on that integrates with other practice management platforms.
              For Ontario law firms, it means paying for an additional subscription on top of
              whatever practice management software you already use — and still not having LSO
              By-Law 9 compliant trust accounting unless your underlying system provides it.
            </p>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Atticus vs Case Status — Side-by-Side Comparison
            </h2>
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left p-4 font-semibold">Feature</th>
                    <th className="text-center p-4 font-semibold">Atticus</th>
                    <th className="text-center p-4 font-semibold">Case Status</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["LSO By-Law 9 Trust Accounting", "Native — built-in", "Not available"],
                    ["Pricing", "$149 CAD/month entire firm", "$99–$299+ USD/month"],
                    ["Matter Management", "Full matter management", "Not available"],
                    ["AI Document Analysis", "Included — Ontario law", "Not available"],
                    ["Client Communication", "Included", "Core feature"],
                    ["Billing & Invoicing", "Included with HST", "Not available"],
                    ["Time Tracking", "Included", "Not available"],
                    ["Data Residency", "Canadian — PIPEDA compliant", "US data centres"],
                    ["Platform Purpose", "Complete practice management", "Client communication only"],
                  ].map(([feature, atticus, cs], i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-4 font-medium text-slate-800">{feature}</td>
                      <td className="p-4 text-center text-green-700 font-medium">{atticus}</td>
                      <td className="p-4 text-center text-slate-500">{cs}</td>
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
              5 Reasons Ontario Lawyers Choose Atticus Over Case Status
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Complete Platform vs Single-Purpose Add-On",
                  body: "Case Status is a client communication app. To run an Ontario law firm you also need trust accounting, billing, matter management, time tracking, and document management. That means multiple subscriptions plus Case Status. Atticus replaces all of them.",
                },
                {
                  title: "Trust Accounting Included",
                  body: "Case Status has no trust accounting. Every Ontario law firm that receives client funds must maintain LSO By-Law 9 compliant trust accounts. This is not optional — it is a Law Society requirement. Atticus includes native trust accounting so you never need to piece together a compliance solution.",
                },
                {
                  title: "No Per-User Billing",
                  body: "Case Status charges by volume of active clients or by monthly plan — $99 to $299+ USD/month for firm-level plans. Atticus charges $149 CAD/month per lawyer per month regardless of how many clients or lawyers you have.",
                },
                {
                  title: "Canadian Data Residency",
                  body: "Case Status stores client information on US servers. Ontario law firms communicating sensitive matter updates to clients through a third-party app must consider Canadian data residency obligations. Atticus keeps all data in Canada.",
                },
                {
                  title: "AI Built for Ontario Legal Practice",
                  body: "Atticus includes AI document analysis built on Ontario law. Case Status has no legal AI. Ontario lawyers who need help reviewing documents, analyzing legal matters, and flagging Ontario-specific issues get no AI support from Case Status.",
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
              The Real Stack Cost vs Atticus
            </h2>
            <p className="text-slate-600 text-lg mb-8">
              Case Status: $99–$299+ USD/month for client communication only. Plus practice
              management software, plus trust accounting, plus billing. A typical Ontario firm
              cobbling together these tools spends $500–$1,000+ CAD/month across subscriptions.
              Atticus replaces all of them for $149 CAD/month.
            </p>
            <div className="bg-pink-50 border border-pink-200 rounded-xl p-8 inline-block">
              <p className="text-4xl font-bold text-pink-700 mb-2">$149 CAD/month</p>
              <p className="text-slate-600">For your entire Ontario firm — replaces the entire software stack</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6 bg-slate-900 text-white">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Replace Your Entire Software Stack with Atticus
            </h2>
            <p className="text-slate-300 mb-8">
              Atticus gives Ontario lawyers trust accounting, AI, matter management, client
              communication, and billing in one platform at $149 CAD/month for the whole firm.
            </p>
            <Link
              href="/sign-up"
              className="bg-pink-500 hover:bg-pink-400 text-white font-bold px-10 py-4 rounded-lg text-lg transition inline-block"
            >
              Start Free Trial
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
