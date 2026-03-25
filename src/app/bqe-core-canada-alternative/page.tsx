import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "BQE Core Canada Alternative for Ontario Lawyers | Atticus",
  description:
    "Comparing BQE Core to Atticus for Ontario law firms. BQE Core is a US professional services billing platform with no LSO By-Law 9 trust accounting. Atticus is purpose-built for Ontario: trust accounting, AI, matter management, flat $149 CAD/month for the whole firm.",
  openGraph: {
    title: "BQE Core Canada Alternative — Atticus vs BQE Core for Ontario Lawyers",
    description:
      "BQE Core is a US professional services billing platform — no LSO By-Law 9 trust accounting, US data centres, USD pricing. Atticus is built for Ontario: native trust accounting, AI, $149 CAD/month.",
    type: "website",
    url: "https://getatticus.ca/bqe-core-canada-alternative",
  },
  alternates: { canonical: "https://getatticus.ca/bqe-core-canada-alternative" },
};

export default function BqeCoreCanadaAlternativePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "BQE Core Canada Alternative for Ontario Lawyers",
    description:
      "Comparing BQE Core to Atticus for Ontario law firms. Atticus offers LSO By-Law 9 trust accounting, AI document analysis, and flat $149 CAD/month pricing.",
    url: "https://getatticus.ca/bqe-core-canada-alternative",
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
        <section className="bg-gradient-to-br from-slate-900 to-teal-900 text-white py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block bg-teal-500 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              BQE Core Canada Alternative
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Atticus vs BQE Core — Ontario Law Firms Need More Than a Billing Platform
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              BQE Core is a US professional services billing and project management platform built
              for architecture, engineering, and accounting firms — not Ontario law. Atticus is a
              complete Ontario legal practice management platform: trust accounting, AI, matter
              management, and billing at $149 CAD/month.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/sign-up"
                className="bg-teal-500 hover:bg-teal-400 text-white font-semibold px-8 py-3 rounded-lg transition"
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

        {/* What Is BQE Core */}
        <section className="py-16 px-6 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">What Is BQE Core?</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-4">
              BQE Core (formerly BillQuick and ArchiOffice) is a US-based cloud professional
              services automation (PSA) platform. It is primarily designed for architecture,
              engineering, consulting, and accounting firms — not specifically for law firms.
              BQE Core offers time tracking, billing, project management, HR features, and
              basic trust accounting capability.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              Some Ontario lawyers use BQE Core as a billing and time tracking solution, but it
              lacks the legal-specific features Ontario practices require: native LSO By-Law 9
              trust accounting, legal matter management workflows, Ontario limitation period
              tracking, and AI built for Ontario legal documents. Its trust accounting is designed
              around US accounting standards, not Canadian regulatory requirements.
            </p>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Atticus vs BQE Core — Side-by-Side Comparison
            </h2>
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left p-4 font-semibold">Feature</th>
                    <th className="text-center p-4 font-semibold">Atticus</th>
                    <th className="text-center p-4 font-semibold">BQE Core</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["LSO By-Law 9 Trust Accounting", "Native — built-in", "No — not law-specific"],
                    ["Pricing", "$149 CAD/month entire firm", "$9–$29+ USD/user/month"],
                    ["5-Lawyer Firm Monthly Cost", "~$149 CAD/month", "~$45–$145+ USD/month"],
                    ["AI Document Analysis", "Included — Ontario law", "Not available"],
                    ["Legal Matter Management", "Full matter management", "Project management (not legal)"],
                    ["Ontario Limitation Tracking", "Included", "Not available"],
                    ["Platform Purpose", "Built for law firms", "Architecture/engineering/accounting"],
                    ["Data Residency", "Canadian — PIPEDA compliant", "US data centres"],
                    ["Platform Origin", "Built for Ontario", "US professional services platform"],
                  ].map(([feature, atticus, bqe], i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-4 font-medium text-slate-800">{feature}</td>
                      <td className="p-4 text-center text-green-700 font-medium">{atticus}</td>
                      <td className="p-4 text-center text-slate-500">{bqe}</td>
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
              5 Reasons Ontario Lawyers Choose Atticus Over BQE Core
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Law-Specific vs Professional Services Generic",
                  body: "BQE Core is built for architecture and engineering project billing — not for the specific workflows of Ontario legal practice. Atticus is built exclusively for law firms, with matter management, client trust accounting, legal billing, and AI document review designed around how Ontario lawyers work.",
                },
                {
                  title: "LSO By-Law 9 Compliance",
                  body: "BQE Core&apos;s trust accounting features are not built for LSO By-Law 9 requirements. Ontario lawyers must maintain trust funds in strict compliance with Law Society rules — pooled trust, individual client ledgers, monthly reconciliation, and reporting. Atticus handles all of this natively.",
                },
                {
                  title: "Ontario Limitation Period Tracking",
                  body: "Ontario&apos;s Limitations Act 2002 creates complex deadline obligations across practice areas. Missing a limitation period is a serious professional liability exposure. Atticus includes matter deadline tracking built around Ontario limitation periods. BQE Core has no legal deadline tracking.",
                },
                {
                  title: "Canadian Data Residency",
                  body: "BQE Core operates on US servers. Ontario law firms have obligations to protect client confidentiality that extend to the infrastructure they use. Atticus stores all client data in Canada with PIPEDA compliance.",
                },
                {
                  title: "AI Built for Ontario Legal Documents",
                  body: "Atticus includes AI document analysis trained on Ontario statutes and case law. BQE Core has no legal AI. Ontario lawyers who need to analyze contracts, review court orders, or flag Ontario-specific legal issues get no AI assistance from BQE Core.",
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
              BQE Core vs Atticus Pricing for Ontario Lawyers
            </h2>
            <p className="text-slate-600 text-lg mb-8">
              BQE Core offers tiered per-user pricing starting around $9–$29 USD/user/month for
              basic plans, but most law firm use cases require higher tiers. Even at lower tiers,
              you still need to add separate legal-specific software for trust accounting, matter
              management, and legal AI — software BQE Core cannot provide. Atticus covers
              everything an Ontario law firm needs for $149 CAD/month per lawyer per month.
            </p>
            <div className="bg-teal-50 border border-teal-200 rounded-xl p-8 inline-block">
              <p className="text-4xl font-bold text-teal-700 mb-2">$149 CAD/month</p>
              <p className="text-slate-600">For your entire Ontario firm — purpose-built for legal practice</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6 bg-slate-900 text-white">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Replace BQE Core with a Platform Built for Ontario Law Firms
            </h2>
            <p className="text-slate-300 mb-8">
              Atticus gives Ontario lawyers trust accounting, AI, matter management, limitation
              tracking, and billing in one platform at $149 CAD/month for the whole firm.
            </p>
            <Link
              href="/sign-up"
              className="bg-teal-500 hover:bg-teal-400 text-white font-bold px-10 py-4 rounded-lg text-lg transition inline-block"
            >
              Start Free Trial
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
