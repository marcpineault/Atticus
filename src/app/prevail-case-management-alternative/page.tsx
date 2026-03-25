import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Prevail Case Management Alternative for Ontario Lawyers | Atticus",
  description:
    "Comparing Prevail Case Management vs Atticus for Ontario personal injury and plaintiff lawyers. Atticus includes LSO-compliant trust accounting, Ontario court forms, and AI document analysis — features Prevail lacks for Canadian practice.",
  alternates: { canonical: "https://getatticus.ca/prevail-case-management-alternative" },
  openGraph: {
    title: "Prevail Case Management Alternative for Ontario Lawyers | Atticus",
    description:
      "Prevail is built for US plaintiff firms. Ontario PI lawyers need LSO trust accounting, Ontario limitation periods, and SABS compliance — all built into Atticus.",
    url: "https://getatticus.ca/prevail-case-management-alternative",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Prevail Case Management Alternative for Ontario Lawyers",
  description:
    "A detailed comparison of Prevail Case Management and Atticus for Ontario personal injury and plaintiff lawyers.",
  url: "https://getatticus.ca/prevail-case-management-alternative",
};

const features = [
  {
    category: "Ontario Compliance",
    atticus: "LSO By-Law 9 trust accounting, mixed trust, monthly reconciliation",
    prevail: "No Canadian trust accounting — US IOLTA concepts only",
  },
  {
    category: "Personal Injury Workflow",
    atticus: "AI-extracted SABS timelines, tort threshold tracking, LAT deadlines",
    prevail: "US plaintiff workflows — state-specific statutes, not Ontario",
  },
  {
    category: "Limitation Periods",
    atticus: "Ontario 2-year basic limitation, discoverability flags, SABS 2-year LAT deadline",
    prevail: "US state limitation periods; no Ontario Limitations Act 2002 rules",
  },
  {
    category: "Court Forms",
    atticus: "Ontario Rules of Civil Procedure forms auto-populated from file data",
    prevail: "US court forms only — no Ontario or Superior Court support",
  },
  {
    category: "AI Document Analysis",
    atticus: "Extracts key facts from medical records, IME reports, expert opinions",
    prevail: "Limited document automation; no AI extraction from medical records",
  },
  {
    category: "HST / Tax Billing",
    atticus: "13% Ontario HST on legal fees, HST registration, compliance invoicing",
    prevail: "US sales tax configuration — no HST support",
  },
  {
    category: "Data Residency",
    atticus: "Canadian data storage, PIPEDA and Ontario privacy law compliant",
    prevail: "US data centres — data sovereignty issue for Ontario lawyers",
  },
  {
    category: "Morning Briefing",
    atticus: "Daily AI briefing: upcoming LAT hearings, OHIP deadlines, file milestones",
    prevail: "No AI briefing feature",
  },
];

const gaps = [
  {
    title: "No LSO Trust Accounting",
    desc: "Prevail has no concept of Ontario mixed trust accounting rules. Every Ontario lawyer must comply with By-Law 9 — Prevail cannot help you do that.",
  },
  {
    title: "US Data Storage",
    desc: "Client files with sensitive medical and personal information stored in US data centres creates data sovereignty risk for Ontario lawyers under PIPEDA.",
  },
  {
    title: "Wrong Limitation Periods",
    desc: "Prevail tracks US state statutes of limitations. Ontario 2-year basic limitation period, discoverability rules, and SABS 2-year LAT window operate differently.",
  },
];

const context = [
  {
    title: "SABS (O.Reg. 34/10)",
    body: "Statutory Accident Benefits have strict deadlines — application within 30 days of accident, election between MIG and non-MIG, CAT assessment timelines, and a 2-year LAT deadline. Your practice management software should flag these automatically.",
  },
  {
    title: "Tort Threshold (s.267.5 ICA)",
    body: "Ontario tort threshold and $44,576.07 deductible on general damages require tracking whether injuries qualify. Atticus extracts relevant medical findings from records to help assess threshold arguments.",
  },
  {
    title: "Limitation Periods",
    body: "The basic 2-year limitation under the Limitations Act, 2002 applies to tort claims, but discoverability can extend or suspend it. SABS denials trigger a separate 2-year LAT application window from the date of denial.",
  },
  {
    title: "Trust Accounting",
    body: "Advances for disbursements, settlement proceeds, and client trust funds must all be managed in compliance with LSO By-Law 9. Mixed trust accounts require monthly reconciliation and proper ledgers — Prevail cannot do this.",
  },
];

export default function PrevailAlternativePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-slate-900 text-white py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 rounded-full px-4 py-1.5 mb-6">
              <span className="text-blue-300 text-sm font-medium">Prevail Case Management vs Atticus</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              The Prevail Alternative Built for<br />
              <span className="text-blue-400">Ontario Personal Injury Lawyers</span>
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
              Prevail is designed for US plaintiff firms. Ontario PI lawyers need LSO trust accounting,
              Ontario SABS compliance, and Canadian data residency — all of which Atticus provides out of the box.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/sign-up"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Start Free Trial
              </Link>
              <Link
                href="/calculator"
                className="border border-slate-600 hover:border-slate-400 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Calculate Your Time Savings
              </Link>
            </div>
          </div>
        </section>

        {/* Why Prevail Falls Short */}
        <section className="py-16 px-6 bg-amber-50 border-b border-amber-100">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Why Prevail Does Not Work for Ontario Plaintiff Lawyers
            </h2>
            <p className="text-slate-600 mb-6">
              Prevail has a strong reputation in US personal injury firms, but it was built for American
              legal practice. Ontario lawyers face different obligations: LSO trust accounting rules under
              By-Law 9, SABS timelines under O.Reg. 34/10, the 2-year limitation period under the
              Limitations Act, 2002, LAT proceedings, and PIPEDA data privacy requirements.
              Prevail&apos;s US-centric architecture addresses none of these.
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

        {/* Feature Comparison Table */}
        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-3 text-center">
              Prevail vs Atticus: Feature Comparison
            </h2>
            <p className="text-slate-500 text-center mb-10">
              For Ontario personal injury and plaintiff lawyers
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="px-6 py-4 text-left text-sm font-semibold">Feature</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Atticus</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Prevail</th>
                  </tr>
                </thead>
                <tbody>
                  {features.map((row, i) => (
                    <tr key={row.category} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-6 py-4 text-sm font-medium text-slate-900 w-1/4">
                        {row.category}
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-700 w-[37.5%]">
                        <span className="text-green-600 mr-2">✓</span>
                        {row.atticus}
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-500 w-[37.5%]">
                        <span className="text-red-400 mr-2">✗</span>
                        {row.prevail}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Ontario PI Context */}
        <section className="py-16 px-6 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Ontario Personal Injury Practice: What Your Software Must Handle
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {context.map((item) => (
                <div key={item.title} className="bg-white rounded-lg p-6 border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 bg-blue-600 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Built for Ontario PI Lawyers — Not Adapted From US Software
            </h2>
            <p className="text-blue-100 mb-8">
              Atticus is designed from the ground up for Ontario legal practice. Trust accounting, SABS
              timelines, Ontario limitations, and Canadian data residency — it&apos;s all there on day one.
            </p>
            <Link
              href="/sign-up"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors inline-block"
            >
              Start Your Free Trial
            </Link>
            <p className="text-blue-200 text-sm mt-4">No credit card required · Canadian data storage</p>
          </div>
        </section>
      </main>
    </>
  );
}
