import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Rocket Lawyer Canada Alternative for Ontario Lawyers | Atticus",
  description:
    "Comparing Rocket Lawyer to Atticus for Ontario law firms and clients. Rocket Lawyer is a US-based DIY legal document service with no trust accounting or professional practice management. Atticus is purpose-built for Ontario law firms: trust accounting, AI, matter management, flat $149 CAD/month.",
  openGraph: {
    title: "Rocket Lawyer Canada Alternative — Atticus vs Rocket Lawyer for Ontario Lawyers",
    description:
      "Rocket Lawyer is a US DIY legal document service — not practice management software; no trust accounting; US legal templates not Ontario documents. Atticus is built for Ontario law firms: native trust accounting, AI, $149 CAD/month.",
    type: "website",
    url: "https://getatticus.ca/rocketlawyer-canada-alternative",
  },
  alternates: { canonical: "https://getatticus.ca/rocketlawyer-canada-alternative" },
};

export default function RocketlawyerCanadaAlternativePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Rocket Lawyer Canada Alternative for Ontario Lawyers",
    description:
      "Comparing Rocket Lawyer to Atticus for Ontario law firms. Atticus offers LSO By-Law 9 trust accounting, AI document analysis, and flat $149 CAD/month pricing for professional law firms.",
    url: "https://getatticus.ca/rocketlawyer-canada-alternative",
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
        <section className="bg-gradient-to-br from-slate-900 to-red-900 text-white py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block bg-red-500 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Rocket Lawyer Canada Alternative
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Atticus vs Rocket Lawyer — Ontario Law Firms Need Professional Practice Management
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Rocket Lawyer is a US consumer-facing DIY legal document service. Atticus is a
              complete Ontario practice management platform for law firms: trust accounting,
              AI document analysis, matter management, and billing at $149 CAD/month for
              your entire firm.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/sign-up"
                className="bg-red-500 hover:bg-red-400 text-white font-semibold px-8 py-3 rounded-lg transition"
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

        {/* What Is Rocket Lawyer */}
        <section className="py-16 px-6 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">What Is Rocket Lawyer?</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-4">
              Rocket Lawyer is a US-based online legal services platform that provides
              document templates, basic legal advice, and on-demand lawyer access to
              consumers and small businesses. It is a consumer-facing service — not law
              firm practice management software. Rocket Lawyer offers US-based document
              templates and connects users with US attorneys for quick legal questions.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              Rocket Lawyer is not a tool for Ontario law firms — it has no trust accounting,
              no matter management, no billing, no time tracking, and its document templates
              are US-based, not Ontario-compliant. Law firms that serve clients who ask
              about Rocket Lawyer can explain that self-service document platforms do not
              replace legal advice for Ontario-specific matters under Ontario statutes and
              regulations.
            </p>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Atticus vs Rocket Lawyer — What Ontario Law Firms Need
            </h2>
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left p-4 font-semibold">Feature</th>
                    <th className="text-center p-4 font-semibold">Atticus</th>
                    <th className="text-center p-4 font-semibold">Rocket Lawyer</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["LSO By-Law 9 Trust Accounting", "Native — built-in", "Not available"],
                    ["Pricing", "$149 CAD/month entire firm", "$39.99+ USD/month consumer"],
                    ["Matter Management", "Full matter management", "Not available"],
                    ["AI Document Analysis", "Included — Ontario law", "US document templates only"],
                    ["Ontario Document Templates", "Ontario-compliant", "US documents"],
                    ["Billing & Invoicing", "Included with HST", "Not available"],
                    ["Time Tracking", "Included", "Not available"],
                    ["Data Residency", "Canadian — PIPEDA compliant", "US data centres"],
                    ["Platform Purpose", "Law firm practice management", "Consumer DIY legal service"],
                  ].map(([feature, atticus, rl], i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-4 font-medium text-slate-800">{feature}</td>
                      <td className="p-4 text-center text-green-700 font-medium">{atticus}</td>
                      <td className="p-4 text-center text-slate-500">{rl}</td>
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
              Why Ontario Law Firms Use Atticus Instead
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Professional Practice Management vs Consumer Service",
                  body: "Rocket Lawyer serves consumers who want to draft their own documents. Atticus serves Ontario law firms that need professional practice management: trust accounting, billing, matter management, and AI document analysis. These are fundamentally different products for different users.",
                },
                {
                  title: "Ontario-Specific vs US-Based Documents",
                  body: "Rocket Lawyer&apos;s documents are built for US law. Ontario has distinct statutes — the Business Corporations Act, the Employment Standards Act 2000, the Residential Tenancies Act — that require Ontario-specific document knowledge. Atticus is built around Ontario legal practice.",
                },
                {
                  title: "Trust Accounting for Law Society Compliance",
                  body: "Rocket Lawyer has no trust accounting. Ontario lawyers must maintain LSO By-Law 9 compliant trust records for every client who provides funds in advance of services. This is a professional obligation. Atticus handles it natively.",
                },
                {
                  title: "Complete Firm Operations in One Platform",
                  body: "Atticus manages your entire firm: from client intake, to matter management, trust accounting, billing, and AI document analysis. Rocket Lawyer is a consumer document service that cannot replace any of these law firm functions.",
                },
                {
                  title: "Canadian Data Residency",
                  body: "Rocket Lawyer stores data on US servers. Atticus keeps all client files, trust records, and billing data in Canada with PIPEDA compliance. For law firms with professional confidentiality obligations, Canadian data residency matters.",
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
              Complete Ontario Law Firm Software at $149 CAD/Month
            </h2>
            <p className="text-slate-600 text-lg mb-8">
              Rocket Lawyer is a consumer service at ~$39.99 USD/month for basic document
              access — and it cannot run a law firm. Atticus is a complete Ontario practice
              management platform at $149 CAD/month per lawyer per month, covering everything
              from trust accounting to AI document analysis.
            </p>
            <div className="bg-red-50 border border-red-200 rounded-xl p-8 inline-block">
              <p className="text-4xl font-bold text-red-700 mb-2">$149 CAD/month</p>
              <p className="text-slate-600">For your entire Ontario firm — professional practice management</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6 bg-slate-900 text-white">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ontario Law Firms: Get Professional Practice Management
            </h2>
            <p className="text-slate-300 mb-8">
              Atticus gives Ontario lawyers trust accounting, AI, matter management, and billing
              in one platform purpose-built for Ontario legal practice at $149 CAD/month.
            </p>
            <Link
              href="/sign-up"
              className="bg-red-500 hover:bg-red-400 text-white font-bold px-10 py-4 rounded-lg text-lg transition inline-block"
            >
              Start Free Trial
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
