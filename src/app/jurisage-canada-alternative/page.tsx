import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jurisage Canada Alternative for Ontario Lawyers | Atticus",
  description:
    "Comparing Jurisage to Atticus for Ontario law firms. Jurisage is a Canadian AI legal research platform. Atticus is a complete Ontario practice management platform: trust accounting, AI, matter management, and billing — all at flat $149 CAD/month for your entire firm.",
  openGraph: {
    title: "Jurisage Canada Alternative — Atticus vs Jurisage for Ontario Lawyers",
    description:
      "Jurisage is a Canadian AI legal research platform — not practice management software; no trust accounting; no billing. Atticus is built for Ontario: native trust accounting, AI document analysis, $149 CAD/month.",
    type: "website",
    url: "https://getatticus.ca/jurisage-canada-alternative",
  },
  alternates: { canonical: "https://getatticus.ca/jurisage-canada-alternative" },
};

export default function JurisageCanadaAlternativePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Jurisage Canada Alternative for Ontario Lawyers",
    description:
      "Comparing Jurisage to Atticus for Ontario law firms. Atticus offers LSO By-Law 9 trust accounting, AI document analysis, and flat $149 CAD/month pricing.",
    url: "https://getatticus.ca/jurisage-canada-alternative",
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
        <section className="bg-gradient-to-br from-slate-900 to-violet-900 text-white py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block bg-violet-500 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Jurisage Canada Alternative
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Atticus vs Jurisage — Ontario Lawyers Need AI That Runs Their Practice, Not Just Searches It
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Jurisage is a Canadian AI legal research tool. Atticus is a complete Ontario practice
              management platform: trust accounting, AI document analysis, matter management, and
              billing at $149 CAD/month for your entire firm.
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

        {/* What Is Jurisage */}
        <section className="py-16 px-6 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">What Is Jurisage?</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-4">
              Jurisage is a Canadian AI-powered legal research platform. It provides natural
              language legal research across Canadian case law and legislation, and offers AI
              assistance for drafting legal research memoranda. It is designed as a research
              tool for Canadian lawyers — not as a practice management platform.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              Jurisage does not include trust accounting, billing, matter management, time
              tracking, or client intake. It is a research tool that sits alongside your
              practice management system — not a replacement for it. Ontario lawyers who need
              a complete practice management platform still need all the tools that Jurisage
              cannot provide.
            </p>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Atticus vs Jurisage — What Ontario Law Firms Need
            </h2>
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left p-4 font-semibold">Feature</th>
                    <th className="text-center p-4 font-semibold">Atticus</th>
                    <th className="text-center p-4 font-semibold">Jurisage</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["LSO By-Law 9 Trust Accounting", "Native — built-in", "Not available"],
                    ["Pricing", "$149 CAD/month entire firm", "$50–$150+ CAD/month"],
                    ["Matter Management", "Full matter management", "Not available"],
                    ["AI Legal Research", "Included — Ontario law", "Core feature"],
                    ["AI Document Analysis", "Included — Ontario documents", "Research-focused"],
                    ["Billing & Invoicing", "Included with HST", "Not available"],
                    ["Time Tracking", "Included", "Not available"],
                    ["Data Residency", "Canadian — PIPEDA compliant", "Canadian"],
                    ["Platform Purpose", "Complete practice management", "Legal research only"],
                  ].map(([feature, atticus, js], i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-4 font-medium text-slate-800">{feature}</td>
                      <td className="p-4 text-center text-green-700 font-medium">{atticus}</td>
                      <td className="p-4 text-center text-slate-500">{js}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* The Difference */}
        <section className="py-16 px-6 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Research Tool vs Complete Practice Platform
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "AI That Acts vs AI That Searches",
                  body: "Jurisage helps you find case law. Atticus AI analyzes the documents in front of you — client contracts, court orders, property documents — and identifies Ontario-specific legal issues in the context of your actual matter files. Different tools for different needs.",
                },
                {
                  title: "Trust Accounting — Non-Negotiable",
                  body: "Jurisage does not have trust accounting. Every Ontario lawyer who receives client funds must maintain LSO By-Law 9 compliant trust records. Atticus includes this natively — you cannot replace it with a research tool, however sophisticated.",
                },
                {
                  title: "One Platform vs Multiple Subscriptions",
                  body: "If you use Jurisage for research, you also need practice management, trust accounting, billing, and time tracking software separately. Atticus provides AI document analysis plus all practice management functions in one $149 CAD/month subscription.",
                },
                {
                  title: "Practice Management Includes AI",
                  body: "Atticus is built with AI as a core feature of a complete practice management platform — not as a standalone research tool. The AI works in context with your matters, clients, and documents rather than as a separate research environment.",
                },
                {
                  title: "Flat Pricing for Growing Firms",
                  body: "Jurisage pricing scales by usage or user. Atticus is $149 CAD/month per lawyer per month regardless of size. As your Ontario practice grows, your software costs stay the same.",
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
              Complete Ontario Practice Management with AI Built In
            </h2>
            <p className="text-slate-300 mb-8">
              Atticus gives Ontario lawyers trust accounting, AI document analysis, matter
              management, and billing in one platform at $149 CAD/month for the whole firm.
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
