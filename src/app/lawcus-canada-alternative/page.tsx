import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Lawcus Canada Alternative for Ontario Lawyers | Atticus",
  description:
    "Comparing Lawcus to Atticus for Ontario law firms. Lawcus is a US CRM and practice management platform with no LSO By-Law 9 trust accounting. Atticus is purpose-built for Ontario: trust accounting, AI, matter management, flat $149 CAD/month for the whole firm.",
  openGraph: {
    title: "Lawcus Canada Alternative — Atticus vs Lawcus for Ontario Lawyers",
    description:
      "Lawcus is a US legal CRM/practice management platform — no LSO By-Law 9 trust accounting, US data centres, USD pricing. Atticus is built for Ontario: native trust accounting, AI document analysis, $149 CAD/month.",
    type: "website",
    url: "https://getatticus.ca/lawcus-canada-alternative",
  },
  alternates: { canonical: "https://getatticus.ca/lawcus-canada-alternative" },
};

export default function LawcusCanadaAlternativePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Lawcus Canada Alternative for Ontario Lawyers",
    description:
      "Comparing Lawcus to Atticus for Ontario law firms. Atticus offers LSO By-Law 9 trust accounting, AI document analysis, and flat $149 CAD/month pricing.",
    url: "https://getatticus.ca/lawcus-canada-alternative",
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
        <section className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block bg-blue-500 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Lawcus Canada Alternative
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Atticus vs Lawcus — Ontario Law Firms Need More Than a Legal CRM
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Lawcus is a US-based legal CRM and intake platform. Atticus is a complete Ontario
              practice management platform: trust accounting, AI document analysis, matter management,
              billing, and intake — all at $149 CAD/month for your entire firm.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/sign-up"
                className="bg-blue-500 hover:bg-blue-400 text-white font-semibold px-8 py-3 rounded-lg transition"
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

        {/* What Is Lawcus */}
        <section className="py-16 px-6 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">What Is Lawcus?</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-4">
              Lawcus is a US-based cloud legal practice management platform that emphasizes CRM
              (client relationship management), client intake, pipeline management, and workflow
              automation. It is positioned as a modern alternative to traditional practice management
              software, with Kanban-style matter pipelines and intake automation features.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              While Lawcus has grown its feature set to include time tracking, billing, and basic
              trust accounting, it is designed primarily around US law firm workflows and US IOLTA
              trust accounting requirements. It does not natively support LSO By-Law 9 trust
              accounting requirements for Ontario, and its infrastructure is US-based.
            </p>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Atticus vs Lawcus — Side-by-Side Comparison
            </h2>
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left p-4 font-semibold">Feature</th>
                    <th className="text-center p-4 font-semibold">Atticus</th>
                    <th className="text-center p-4 font-semibold">Lawcus</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["LSO By-Law 9 Trust Accounting", "Native — built-in", "No — US IOLTA rules"],
                    ["Pricing", "$149 CAD/month entire firm", "$34–$79+ USD/user/month"],
                    ["5-Lawyer Firm Monthly Cost", "~$149 CAD/month", "~$170–$395+ USD/month"],
                    ["AI Document Analysis", "Included — Ontario law", "Not available"],
                    ["Client Intake & CRM", "Included", "Core feature"],
                    ["Matter Management", "Full matter management", "Kanban pipeline view"],
                    ["Billing & Invoicing", "Included with HST", "Included — USD default"],
                    ["Data Residency", "Canadian — PIPEDA compliant", "US data centres"],
                    ["Platform Origin", "Built for Ontario", "US platform"],
                  ].map(([feature, atticus, lawcus], i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-4 font-medium text-slate-800">{feature}</td>
                      <td className="p-4 text-center text-green-700 font-medium">{atticus}</td>
                      <td className="p-4 text-center text-slate-500">{lawcus}</td>
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
              5 Reasons Ontario Lawyers Choose Atticus Over Lawcus
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Trust Accounting That Meets Ontario Rules",
                  body: "Lawcus was built for US IOLTA trust accounting. Ontario&apos;s LSO By-Law 9 has different requirements for client trust fund records, pooled trust, and reconciliation. Atticus handles these natively — you are not adapting a US product to Canadian regulatory obligations.",
                },
                {
                  title: "Complete Platform vs CRM-First",
                  body: "Lawcus excels at intake pipelines and CRM but requires integration or separate tools for robust trust accounting and document management. Atticus is built as a complete platform: intake, trust accounting, AI document analysis, billing, and matter management in one place.",
                },
                {
                  title: "Flat Pricing for Growing Firms",
                  body: "Lawcus charges per user. A firm growing from 3 to 5 to 8 lawyers sees the bill grow proportionally. Atticus charges $149 CAD/month per lawyer per month — add lawyers without adding to your subscription cost.",
                },
                {
                  title: "Canadian Data and PIPEDA Compliance",
                  body: "Lawcus stores data on US servers. Ontario law firms handling sensitive client matters, personal health information, and financial records have data residency obligations. Atticus keeps your data in Canada and is designed for PIPEDA compliance.",
                },
                {
                  title: "AI Built on Ontario Law",
                  body: "Atticus includes AI document analysis trained on Ontario statutes and case law — not US legal content. Review Ontario agreements, court orders, and regulatory documents with AI that understands the Ontario legal landscape.",
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
              The Real Cost of Lawcus for a 5-Lawyer Ontario Firm
            </h2>
            <p className="text-slate-600 text-lg mb-8">
              Lawcus Basic: ~$34 USD/user/month. Lawcus Pro: ~$79 USD/user/month. For 5 users:
              $170–$395 USD/month. At 1.37 CAD/USD: $233–$541 CAD/month — and that is before
              adding separate trust accounting software to meet Ontario LSO requirements.
              Atticus covers everything for $149 CAD/month total.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-8 inline-block">
              <p className="text-4xl font-bold text-blue-700 mb-2">$149 CAD/month</p>
              <p className="text-slate-600">For your entire Ontario firm — trust accounting included</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6 bg-slate-900 text-white">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Replace Lawcus with a Complete Ontario Practice Management Platform
            </h2>
            <p className="text-slate-300 mb-8">
              Atticus gives Ontario lawyers trust accounting, AI, intake, billing, and matter
              management in one platform at $149 CAD/month for the whole firm.
            </p>
            <Link
              href="/sign-up"
              className="bg-blue-500 hover:bg-blue-400 text-white font-bold px-10 py-4 rounded-lg text-lg transition inline-block"
            >
              Start Free Trial
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
