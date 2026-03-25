import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SuiteFiles Canada Alternative for Ontario Lawyers | Atticus",
  description:
    "Comparing SuiteFiles to Atticus for Ontario law firms. SuiteFiles is a New Zealand document management platform with no LSO By-Law 9 trust accounting. Atticus is purpose-built for Ontario: trust accounting, AI, matter management, flat $149 CAD/month for the whole firm.",
  openGraph: {
    title: "SuiteFiles Canada Alternative — Atticus vs SuiteFiles for Ontario Lawyers",
    description:
      "SuiteFiles is a New Zealand document management platform — no trust accounting, no matter management, international servers. Atticus is built for Ontario: native trust accounting, AI, complete practice management, $149 CAD/month.",
    type: "website",
    url: "https://getatticus.ca/suitefiles-canada-alternative",
  },
  alternates: { canonical: "https://getatticus.ca/suitefiles-canada-alternative" },
};

export default function SuitefilesCanadaAlternativePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "SuiteFiles Canada Alternative for Ontario Lawyers",
    description:
      "Comparing SuiteFiles to Atticus for Ontario law firms. Atticus offers LSO By-Law 9 trust accounting, AI document analysis, and flat $149 CAD/month pricing.",
    url: "https://getatticus.ca/suitefiles-canada-alternative",
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
        <section className="bg-gradient-to-br from-slate-900 to-sky-900 text-white py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block bg-sky-500 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              SuiteFiles Canada Alternative
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Atticus vs SuiteFiles — Ontario Law Firms Need More Than Document Storage
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              SuiteFiles is a New Zealand-based document management platform. Atticus is a
              complete Ontario practice management platform: trust accounting, AI document
              analysis, matter management, billing, and document storage — all at $149 CAD/month
              flat for your entire firm.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/sign-up"
                className="bg-sky-500 hover:bg-sky-400 text-white font-semibold px-8 py-3 rounded-lg transition"
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

        {/* What Is SuiteFiles */}
        <section className="py-16 px-6 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">What Is SuiteFiles?</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-4">
              SuiteFiles is a New Zealand-based cloud document management platform designed for
              professional services firms including law firms, accounting firms, and consultants.
              It integrates with Microsoft 365 and provides document storage, workflow automation,
              e-signatures, and client portal features. SuiteFiles is popular in New Zealand and
              Australia and has expanded to other markets.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              SuiteFiles is a document management tool, not a practice management platform. It has
              no trust accounting, no billing, no time tracking, and no legal matter management.
              Ontario law firms using SuiteFiles still need practice management software,
              LSO By-Law 9 compliant trust accounting, billing, and time tracking from other
              tools. Its servers are based outside Canada, raising data residency concerns for
              Ontario firms handling sensitive client documents.
            </p>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Atticus vs SuiteFiles — Side-by-Side Comparison
            </h2>
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left p-4 font-semibold">Feature</th>
                    <th className="text-center p-4 font-semibold">Atticus</th>
                    <th className="text-center p-4 font-semibold">SuiteFiles</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["LSO By-Law 9 Trust Accounting", "Native — built-in", "Not available"],
                    ["Pricing", "$149 CAD/month entire firm", "$NZD/user/month"],
                    ["Matter Management", "Full matter management", "Not available"],
                    ["AI Document Analysis", "Included — Ontario law", "Not available"],
                    ["Document Management", "Included", "Core feature"],
                    ["Billing & Invoicing", "Included with HST", "Not available"],
                    ["E-Signatures", "Included", "Included"],
                    ["Data Residency", "Canadian — PIPEDA compliant", "International servers"],
                    ["Platform Purpose", "Complete practice management", "Document management only"],
                  ].map(([feature, atticus, sf], i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-4 font-medium text-slate-800">{feature}</td>
                      <td className="p-4 text-center text-green-700 font-medium">{atticus}</td>
                      <td className="p-4 text-center text-slate-500">{sf}</td>
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
              5 Reasons Ontario Lawyers Choose Atticus Over SuiteFiles
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Complete Platform vs Document Storage",
                  body: "SuiteFiles stores and organizes documents. Atticus stores documents and also handles trust accounting, matter management, billing, time tracking, and AI document analysis. One platform replaces the stack of tools you currently use — including SuiteFiles.",
                },
                {
                  title: "Trust Accounting for Ontario Compliance",
                  body: "SuiteFiles has no trust accounting. Every Ontario lawyer handling client funds must maintain LSO By-Law 9 compliant trust records. Atticus includes native trust accounting built for Ontario regulatory requirements — no additional software needed.",
                },
                {
                  title: "AI That Analyzes Your Ontario Documents",
                  body: "Atticus includes AI document analysis trained on Ontario statutes and case law. When you upload client documents, Atticus can analyze them for Ontario-specific legal issues, not just store them. SuiteFiles is a document storage system with no legal intelligence built in.",
                },
                {
                  title: "Canadian Data Residency",
                  body: "SuiteFiles is a New Zealand company with international infrastructure. Client documents stored in SuiteFiles may not be subject to Canadian data residency requirements. Atticus keeps all documents and client data in Canada with full PIPEDA compliance.",
                },
                {
                  title: "One Subscription for Everything",
                  body: "SuiteFiles requires you to also pay for practice management, trust accounting, billing, and time tracking tools separately. Atticus covers all of these at $149 CAD/month per lawyer per month — eliminating the need for SuiteFiles and every other tool in your stack.",
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
              SuiteFiles + Practice Stack vs Atticus All-in-One
            </h2>
            <p className="text-slate-600 text-lg mb-8">
              SuiteFiles charges per user in NZD. Add practice management, trust accounting,
              billing, and time tracking and a typical Ontario firm spends $500–$1,000+ CAD/month
              on a fragmented software stack. Atticus replaces all of it for $149 CAD/month
              — and adds AI document analysis that SuiteFiles cannot provide.
            </p>
            <div className="bg-sky-50 border border-sky-200 rounded-xl p-8 inline-block">
              <p className="text-4xl font-bold text-sky-700 mb-2">$149 CAD/month</p>
              <p className="text-slate-600">For your entire Ontario firm — documents plus everything else</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6 bg-slate-900 text-white">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Replace SuiteFiles and Your Entire Software Stack with Atticus
            </h2>
            <p className="text-slate-300 mb-8">
              Atticus gives Ontario lawyers trust accounting, AI document analysis, matter
              management, billing, and document storage in one platform at $149 CAD/month.
            </p>
            <Link
              href="/sign-up"
              className="bg-sky-500 hover:bg-sky-400 text-white font-bold px-10 py-4 rounded-lg text-lg transition inline-block"
            >
              Start Free Trial
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
