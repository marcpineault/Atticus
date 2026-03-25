import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fastcase Alternative for Ontario Lawyers | Atticus",
  description:
    "Comparing Fastcase vs Atticus for Ontario lawyers. Fastcase covers US legal research. Ontario lawyers need Canadian case law, CanLII integration, LSO trust accounting, and practice management — all in Atticus.",
  alternates: { canonical: "https://getatticus.ca/fastcase-alternative" },
  openGraph: {
    title: "Fastcase Alternative for Ontario Lawyers | Atticus",
    description:
      "Fastcase is a US legal research tool. Atticus is a full Ontario practice management platform with AI document intelligence, trust accounting, and client management.",
    url: "https://getatticus.ca/fastcase-alternative",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Fastcase Alternative for Ontario Lawyers",
  description: "Comparison of Fastcase and Atticus for Ontario law firms.",
  url: "https://getatticus.ca/fastcase-alternative",
};

const features = [
  {
    category: "Canadian Case Law",
    atticus: "AI searches and extracts from your uploaded Ontario case documents and client files",
    fastcase: "US federal and state cases only — no CanLII, no Ontario or Canadian jurisprudence",
  },
  {
    category: "Practice Management",
    atticus: "Full matter management — clients, files, deadlines, trust accounting, billing",
    fastcase: "Legal research tool only — no practice management features",
  },
  {
    category: "Trust Accounting",
    atticus: "LSO By-Law 9 compliant mixed trust, monthly reconciliation, client ledgers",
    fastcase: "No accounting features whatsoever",
  },
  {
    category: "AI Document Analysis",
    atticus: "Extracts key facts from your client documents, contracts, and pleadings",
    fastcase: "Case law search only — no analysis of your own client documents",
  },
  {
    category: "Ontario Compliance",
    atticus: "Limitation period tracking, LSO rules, HST invoicing, PIPEDA compliance",
    fastcase: "No Ontario compliance features — US jurisdiction focus",
  },
  {
    category: "Time Tracking & Billing",
    atticus: "Built-in time tracking, HST invoices, Stripe payment collection",
    fastcase: "No time tracking or billing",
  },
  {
    category: "Data Residency",
    atticus: "Canadian data storage — PIPEDA compliant",
    fastcase: "US data centres — data residency risk for Ontario lawyers",
  },
  {
    category: "Target User",
    atticus: "Ontario lawyers — full practice management platform from $149 CAD/month",
    fastcase: "US lawyers doing legal research — not built for Canadian practice",
  },
];

export default function FastcaseAlternativePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-white">
        <section className="bg-slate-900 text-white py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 rounded-full px-4 py-1.5 mb-6">
              <span className="text-blue-300 text-sm font-medium">Fastcase vs Atticus</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              The Fastcase Alternative for<br />
              <span className="text-blue-400">Ontario Law Firms</span>
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
              Fastcase covers US legal research. Ontario lawyers need Canadian jurisprudence,
              LSO trust accounting, AI document intelligence, and practice management in one
              platform — all of which Atticus provides.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/sign-up" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Start Free Trial
              </Link>
              <Link href="/calculator" className="border border-slate-600 hover:border-slate-400 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Calculate Time Savings
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-slate-50 border-b border-slate-200">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Why Fastcase Does Not Serve Ontario Lawyers</h2>
            <p className="text-slate-600 mb-6">
              Fastcase is a well-regarded US legal research platform, but it does not index Canadian
              case law, Ontario statutes, or CanLII decisions. Ontario lawyers practising under the
              Limitations Act 2002, the OBCA, the RTA, or any Ontario statute need Canadian sources.
              Beyond research, Fastcase offers no practice management, trust accounting, or billing
              features — meaning Ontario lawyers need a completely separate platform for their
              day-to-day operations.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                {
                  title: "No Canadian Case Law",
                  desc: "Fastcase does not index CanLII, Ontario Court of Appeal, or Supreme Court of Canada decisions. Ontario lawyers rely on Canadian jurisprudence for every file.",
                },
                {
                  title: "Research Only — No Practice Management",
                  desc: "Fastcase cannot manage client files, track deadlines, handle trust accounting, or generate invoices. Ontario lawyers need a complete practice management solution.",
                },
                {
                  title: "No LSO Compliance",
                  desc: "Fastcase has no trust accounting, no LSO By-Law 9 compliance, and no Ontario-specific billing features. It cannot support the core administrative obligations of an Ontario law firm.",
                },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-lg p-5 border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-3 text-center">Fastcase vs Atticus: Feature Comparison</h2>
            <p className="text-slate-500 text-center mb-10">For Ontario lawyers and law firms</p>
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="px-6 py-4 text-left text-sm font-semibold">Feature</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Atticus</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Fastcase</th>
                  </tr>
                </thead>
                <tbody>
                  {features.map((row, i) => (
                    <tr key={row.category} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-6 py-4 text-sm font-medium text-slate-900 w-1/4">{row.category}</td>
                      <td className="px-6 py-4 text-sm text-slate-700 w-[37.5%]">
                        <span className="text-green-600 mr-2">✓</span>{row.atticus}
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-500 w-[37.5%]">
                        <span className="text-red-400 mr-2">✗</span>{row.fastcase}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-blue-600 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Built for Ontario Practice — Not US Legal Research</h2>
            <p className="text-blue-100 mb-8">
              Atticus is a complete Ontario practice management platform. AI document intelligence,
              LSO-compliant trust accounting, matter management, and HST billing &mdash; starting at
              $149 CAD/month.
            </p>
            <Link href="/sign-up" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors inline-block">
              Start Your Free Trial
            </Link>
            <p className="text-blue-200 text-sm mt-4">No credit card required &middot; Canadian data storage</p>
          </div>
        </section>
      </main>
    </>
  );
}
