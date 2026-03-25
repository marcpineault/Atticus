import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Lawyered Canada Alternative for Ontario Lawyers | Atticus",
  description:
    "Comparing Lawyered to Atticus for Ontario law firms and clients. Lawyered is an Indian legal tech platform for lawyer discovery and online consultations. Atticus is purpose-built for Ontario law firms: trust accounting, AI, matter management, flat $149 CAD/month.",
  openGraph: {
    title: "Lawyered Canada Alternative — Atticus vs Lawyered for Ontario Lawyers",
    description:
      "Lawyered is an Indian legal tech platform for lawyer discovery — not Ontario practice management. Atticus is built for Ontario law firms: native trust accounting, AI, $149 CAD/month.",
    type: "website",
    url: "https://getatticus.ca/lawyered-canada-alternative",
  },
  alternates: { canonical: "https://getatticus.ca/lawyered-canada-alternative" },
};

export default function LawyeredCanadaAlternativePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Lawyered Canada Alternative for Ontario Lawyers",
    description:
      "Comparing Lawyered to Atticus for Ontario law firms. Atticus offers LSO By-Law 9 trust accounting, AI document analysis, and flat $149 CAD/month pricing.",
    url: "https://getatticus.ca/lawyered-canada-alternative",
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
              Lawyered Canada Alternative
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Atticus vs Lawyered — Ontario Law Firms Need Practice Management, Not a Discovery Platform
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Lawyered is an Indian legal tech platform for lawyer discovery and online
              consultations. Atticus is a complete Ontario practice management platform:
              trust accounting, AI document analysis, matter management, and billing at
              $149 CAD/month for your entire firm.
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

        {/* What Is Lawyered */}
        <section className="py-16 px-6 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">What Is Lawyered?</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-4">
              Lawyered is an Indian legal technology platform that helps consumers find lawyers
              and book online legal consultations. It operates primarily in the Indian market,
              providing a marketplace for lawyers to list their profiles and services, and for
              clients to search for legal help and book video consultations.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              Lawyered is not a practice management platform. It is a lawyer discovery and
              consultation booking service designed for Indian law and the Indian market. Ontario
              law firms searching for practice management software will not find what they need
              in a lawyer discovery platform built for India. Ontario lawyers need LSO By-Law 9
              compliant trust accounting, Ontario matter management, and AI built for Ontario
              law — all things that Lawyered does not provide.
            </p>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Atticus vs Lawyered — What Ontario Law Firms Need
            </h2>
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left p-4 font-semibold">Feature</th>
                    <th className="text-center p-4 font-semibold">Atticus</th>
                    <th className="text-center p-4 font-semibold">Lawyered</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["LSO By-Law 9 Trust Accounting", "Native — built-in", "Not available"],
                    ["Pricing", "$149 CAD/month entire firm", "Indian market pricing"],
                    ["Matter Management", "Full matter management", "Not available"],
                    ["AI Document Analysis", "Included — Ontario law", "Not available"],
                    ["Lawyer Discovery", "Not applicable", "Core feature (Indian market)"],
                    ["Billing & Invoicing", "Included with HST", "Not available"],
                    ["Ontario-Compliant Features", "Yes — purpose-built", "No — Indian law focus"],
                    ["Data Residency", "Canadian — PIPEDA compliant", "Indian servers"],
                    ["Platform Purpose", "Complete Ontario practice management", "Indian lawyer discovery"],
                  ].map(([feature, atticus, lw], i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-4 font-medium text-slate-800">{feature}</td>
                      <td className="p-4 text-center text-green-700 font-medium">{atticus}</td>
                      <td className="p-4 text-center text-slate-500">{lw}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* The Ontario Alternative */}
        <section className="py-16 px-6 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              What Ontario Law Firms Actually Need
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "LSO By-Law 9 Trust Accounting",
                  body: "Ontario lawyers must maintain client trust funds in strict compliance with Law Society regulations. Trust accounting is not optional — it is a professional regulatory requirement. Atticus includes native LSO By-Law 9 compliant trust accounting with client ledgers, monthly reconciliation, and trust reports.",
                },
                {
                  title: "Ontario Matter Management",
                  body: "Ontario law firms need matter management built around Ontario practice: limitation periods under the Limitations Act 2002, Rules of Civil Procedure deadlines, Ontario court forms, and Ontario regulatory compliance. Atticus is purpose-built for this environment.",
                },
                {
                  title: "AI for Ontario Legal Documents",
                  body: "Atticus AI is trained on Ontario statutes and case law — the Employment Standards Act 2000, the Residential Tenancies Act 2006, the Business Corporations Act, and hundreds of Ontario legal decisions. Ontario-specific AI assistance is not available from platforms built for other markets.",
                },
                {
                  title: "Complete Firm Operations in One Platform",
                  body: "Atticus manages your entire Ontario practice: intake, matters, trust accounting, billing, AI document analysis, and client communication. Ontario lawyers do not need a lawyer discovery platform — they need a platform that runs their practice.",
                },
                {
                  title: "Flat Pricing for Ontario Firms",
                  body: "Atticus charges $149 CAD/month per lawyer per month regardless of the number of lawyers, clients, or matters. Ontario small and solo firm lawyers get enterprise-level practice management at a price point designed for their practices.",
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

        {/* CTA */}
        <section className="py-16 px-6 bg-slate-900 text-white">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Complete Ontario Practice Management at $149 CAD/Month
            </h2>
            <p className="text-slate-300 mb-8">
              Atticus gives Ontario lawyers trust accounting, AI document analysis, matter
              management, and billing in one platform purpose-built for Ontario law.
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
