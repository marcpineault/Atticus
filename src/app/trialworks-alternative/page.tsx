import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "TrialWorks Alternative for Ontario Lawyers | Atticus",
  description:
    "Comparing TrialWorks vs Atticus for Ontario personal injury and litigation lawyers. Atticus offers LSO-compliant trust accounting, Ontario court workflows, and AI document analysis — capabilities TrialWorks lacks for Canadian practice.",
  alternates: { canonical: "https://getatticus.ca/trialworks-alternative" },
  openGraph: {
    title: "TrialWorks Alternative for Ontario Lawyers | Atticus",
    description:
      "TrialWorks is built for US litigation firms. Ontario lawyers need LSO trust accounting, Ontario Rules of Civil Procedure support, and Canadian data residency — all in Atticus.",
    url: "https://getatticus.ca/trialworks-alternative",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "TrialWorks Alternative for Ontario Lawyers",
  description: "Detailed comparison of TrialWorks and Atticus for Ontario litigation and personal injury lawyers.",
  url: "https://getatticus.ca/trialworks-alternative",
};

const features = [
  {
    category: "Ontario Trust Accounting",
    atticus: "LSO By-Law 9 mixed trust, monthly reconciliation, detailed ledgers",
    trialworks: "No Canadian trust accounting — US IOLTA model only",
  },
  {
    category: "Court Workflow",
    atticus: "Ontario Rules of Civil Procedure, Superior Court and Small Claims forms",
    trialworks: "US court forms and dockets — no Ontario or federal court support",
  },
  {
    category: "Limitation Period Tracking",
    atticus: "Ontario 2-year basic limitation, SABS LAT 2-year deadline, discoverability flags",
    trialworks: "US state statutes of limitations — no Ontario Limitations Act 2002 rules",
  },
  {
    category: "AI Document Analysis",
    atticus: "Extracts key facts from medical records, IME reports, pleadings, and transcripts",
    trialworks: "Document management only — no AI extraction from litigation documents",
  },
  {
    category: "HST Billing",
    atticus: "13% Ontario HST on legal fees, proper tax invoicing",
    trialworks: "US sales tax only — no HST support for Canadian invoicing",
  },
  {
    category: "Data Residency",
    atticus: "Canadian data storage — PIPEDA and Ontario privacy law compliant",
    trialworks: "US data centres — data sovereignty risk for Ontario lawyers",
  },
  {
    category: "Morning AI Briefing",
    atticus: "Daily summary of upcoming deadlines, settlement discussions, discovery dates",
    trialworks: "No AI-powered daily briefing",
  },
  {
    category: "Pricing (CAD)",
    atticus: "From $149 CAD/month — transparent Canadian pricing",
    trialworks: "US pricing in USD — higher effective cost for Canadian firms",
  },
];

const gaps = [
  {
    title: "Built for US Courts",
    desc: "TrialWorks was designed around US federal and state court procedures. Ontario's Rules of Civil Procedure, Simplified Procedure (Rule 76), and Master Scheduling are fundamentally different.",
  },
  {
    title: "No LSO Trust Compliance",
    desc: "Every Ontario litigation lawyer handles client funds in trust. TrialWorks has no mechanism for LSO By-Law 9 trust accounting, mixed trust accounts, or monthly reconciliation.",
  },
  {
    title: "US Data Storage",
    desc: "Sensitive litigation documents — medical records, financial records, settlement communications — stored in US data centres creates PIPEDA compliance risk for Ontario counsel.",
  },
];

export default function TrialWorksAlternativePage() {
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
              <span className="text-blue-300 text-sm font-medium">TrialWorks vs Atticus</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              The TrialWorks Alternative Built for<br />
              <span className="text-blue-400">Ontario Litigation Lawyers</span>
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
              TrialWorks is designed around US litigation practice. Ontario lawyers need LSO trust
              accounting, Ontario procedural rules, and Canadian data residency — all of which Atticus
              delivers out of the box.
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

        <section className="py-16 px-6 bg-amber-50 border-b border-amber-100">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Why TrialWorks Does Not Work for Ontario Lawyers</h2>
            <p className="text-slate-600 mb-6">
              TrialWorks has built a following in US plaintiff and defense litigation firms, but its
              architecture is entirely US-centric. Ontario litigators face distinct requirements: LSO
              trust accounting rules, Ontario Rules of Civil Procedure, the Limitations Act 2002,
              PIPEDA data privacy, and HST invoicing. TrialWorks addresses none of these.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {gaps.map((item) => (
                <div key={item.title} className="bg-white rounded-lg p-5 border border-amber-200">
                  <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-3 text-center">TrialWorks vs Atticus: Feature Comparison</h2>
            <p className="text-slate-500 text-center mb-10">For Ontario litigation and personal injury lawyers</p>
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="px-6 py-4 text-left text-sm font-semibold">Feature</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Atticus</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">TrialWorks</th>
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
                        <span className="text-red-400 mr-2">✗</span>{row.trialworks}
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
            <h2 className="text-3xl font-bold mb-4">Practice Management Built for Ontario Litigation</h2>
            <p className="text-blue-100 mb-8">
              Atticus combines LSO-compliant trust accounting, Ontario deadline tracking, and AI
              document intelligence in one platform designed for Canadian law practice.
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
