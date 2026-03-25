import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ontario Court of Appeal Guide 2024: Procedure, Leave, Standards of Review, and Costs",
  description:
    "Complete guide to Ontario Court of Appeal procedure: appeal routes (as of right vs leave), perfecting timelines under Rules of Civil Procedure rr.61-62, grounds of appeal (correctness vs reasonableness), fresh evidence (Palmer test), stays pending appeal, and costs on appeal for Ontario civil litigators.",
  openGraph: {
    title: "Ontario Court of Appeal Guide 2024: Procedure, Leave, Standards of Review, and Costs",
    description:
      "ONCA procedure: appeal routes, perfecting deadlines (rr.61-62), correctness vs palpable-and-overriding-error standards, stays pending appeal, and costs for Ontario litigators.",
    url: "https://getatticus.ca/blog/ontario-court-of-appeal",
    siteName: "Atticus",
    type: "article",
  },
  alternates: { canonical: "https://getatticus.ca/blog/ontario-court-of-appeal" },
};

const articleSchema = `{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Ontario Court of Appeal Guide 2024: Procedure, Leave, Standards of Review, and Costs",
  "description": "Complete guide to Ontario Court of Appeal procedure for civil litigation: appeal routes, timelines, standards of review, fresh evidence, stays, and costs.",
  "author": { "@type": "Organization", "name": "Atticus" },
  "publisher": { "@type": "Organization", "name": "Atticus", "url": "https://getatticus.ca" },
  "url": "https://getatticus.ca/blog/ontario-court-of-appeal",
  "datePublished": "2024-12-01",
  "dateModified": "2024-12-01",
  "mainEntityOfPage": "https://getatticus.ca/blog/ontario-court-of-appeal"
}`;

const faqSchema = `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the deadline to file a Notice of Appeal at the Ontario Court of Appeal?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Under Rules of Civil Procedure r.61.04(1), a Notice of Appeal must be filed and served within 30 days of the order being appealed. For appeals requiring leave, the motion for leave must be filed within 15 days of the order (r.61.03.1). Extensions of time may be granted on a motion but require demonstrating the delay was not wilful, an arguable ground of appeal, and no serious prejudice."
      }
    },
    {
      "@type": "Question",
      "name": "What is the standard of review at the Ontario Court of Appeal for findings of fact?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Ontario Court of Appeal applies the palpable and overriding error standard to findings of fact and questions of mixed fact and law (Housen v Nikolaisen). A palpable error is one that is obvious; an overriding error is one that goes to the core of the outcome. Pure questions of law attract the correctness standard. Discretionary decisions (costs, case management orders) attract a high degree of deference."
      }
    },
    {
      "@type": "Question",
      "name": "How do you perfect an appeal at the Ontario Court of Appeal?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Under r.61.09, the appellant must perfect the appeal by serving and filing the appeal book and compendium, exhibits book, transcript of evidence (if any), and appellant factum within 60 days of filing the Notice of Appeal (or as extended). Failure to perfect within the deadline may result in dismissal for delay on a respondent motion. The registrar schedules the hearing after perfection."
      }
    },
    {
      "@type": "Question",
      "name": "What are the grounds for a stay pending appeal at the Ontario Court of Appeal?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A stay pending appeal under r.63.02 is granted if the moving party demonstrates: (1) a serious question to be tried on the appeal (not frivolous or vexatious); (2) irreparable harm if the stay is refused; and (3) the balance of convenience favours the stay. This is the RJR-MacDonald test. For money judgments, a stay is more readily granted if there is a serious issue and evidence the respondent could not repay if the appeal succeeds."
      }
    }
  ]
}`;

type AppealRoute = {
  type: string;
  basis: string;
  rule: string;
  deadline: string;
  panel: string;
};

const appealRoutes: AppealRoute[] = [
  {
    type: "Final order — as of right",
    basis: "Appeal as of right from final order of Superior Court judge or Divisional Court (on appeal from tribunal)",
    rule: "Courts of Justice Act s.6(1)(b); r.61.04",
    deadline: "30 days from order",
    panel: "3 judges (or 5 for constitutional questions)",
  },
  {
    type: "Interlocutory order — with leave",
    basis: "Leave required for interlocutory orders (orders that do not finally determine the action)",
    rule: "Courts of Justice Act s.6(1)(b); r.61.03.1",
    deadline: "15 days from order; motion heard in writing",
    panel: "Single judge or 3 judges on leave motion",
  },
  {
    type: "Divisional Court — with leave",
    basis: "Appeal from Divisional Court on question of law; leave required if Div Ct was appellate court",
    rule: "Courts of Justice Act s.6(1)(a)",
    deadline: "15 days from Div Ct order",
    panel: "3 judges",
  },
  {
    type: "Consent appeal / stated case",
    basis: "Parties consent to appeal direct to Court of Appeal; or judge states case on question of law",
    rule: "Courts of Justice Act s.8",
    deadline: "By agreement or court order",
    panel: "3 judges",
  },
];

type StandardOfReview = {
  issue: string;
  standard: string;
  leading: string;
  application: string;
};

const standardsOfReview: StandardOfReview[] = [
  {
    issue: "Questions of law",
    standard: "Correctness",
    leading: "Housen v Nikolaisen, 2002 SCC 33",
    application: "Statutory interpretation, legal elements of a cause of action, rules of evidence as legal propositions",
  },
  {
    issue: "Questions of fact",
    standard: "Palpable and overriding error",
    leading: "Housen v Nikolaisen, 2002 SCC 33",
    application: "Credibility findings, factual inferences, findings supported by evidence; appellate court rarely interferes",
  },
  {
    issue: "Mixed fact and law",
    standard: "Palpable and overriding error (unless legal component extricable)",
    leading: "Housen v Nikolaisen; King v Hershfield",
    application: "Application of legal standard to facts; appellate deference unless legal error extractable",
  },
  {
    issue: "Discretionary orders",
    standard: "Deference; error in principle, significant misapprehension of facts, or clearly wrong result",
    leading: "Montague v Bank of Nova Scotia; Penney v Bell Canada",
    application: "Costs awards, adjournments, case management decisions, interim orders",
  },
  {
    issue: "Contractual interpretation",
    standard: "Correctness (for legal interpretation of written contracts without ambiguity on key terms)",
    leading: "Sattva Capital v Creston Moly, 2014 SCC 53 (modified in Teal Cedar, 2017 SCC 32)",
    application: "Commercial contract disputes; extricable errors of law attract correctness",
  },
];

type PerfectingStep = {
  step: string;
  description: string;
  deadline: string;
  rule: string;
};

const perfectingSteps: PerfectingStep[] = [
  {
    step: "1. File Notice of Appeal",
    description: "File and serve Notice of Appeal in Form 61A; pay filing fee; obtain appeal file number",
    deadline: "30 days from order (15 days for leave)",
    rule: "r.61.04",
  },
  {
    step: "2. Order transcript",
    description: "Request transcript from court reporter; serve transcript order on all parties",
    deadline: "Within 30 days of filing Notice of Appeal",
    rule: "r.61.05",
  },
  {
    step: "3. Settle appeal book",
    description: "Appellant drafts appeal book (pleadings, orders, exhibits) and compendium; serve draft on respondent; settle contents",
    deadline: "Before perfection deadline",
    rule: "r.61.10",
  },
  {
    step: "4. Serve and file appellant factum",
    description: "File factum (max 30 pages without leave) with appeal book; serve on all parties; factum includes facts, issues, law, submissions, and relief sought",
    deadline: "60 days from filing Notice of Appeal (extendable by consent or motion)",
    rule: "r.61.11, r.61.09",
  },
  {
    step: "5. Respondent factum",
    description: "Respondent serves and files responding factum within 60 days of receiving appellant factum (max 30 pages without leave)",
    deadline: "60 days from service of appellant factum",
    rule: "r.61.12",
  },
  {
    step: "6. Hearing scheduled",
    description: "Registrar lists matter for hearing after perfection; complex appeals may require scheduling conference",
    deadline: "Varies; Toronto ONCA wait times 6-18 months post-perfection",
    rule: "r.61.14",
  },
];

export default function OntarioCourtOfAppealPage() {
  return (
    <>
      <Script id="ontario-court-of-appeal-article-schema" type="application/ld+json">
        {articleSchema}
      </Script>
      <Script id="ontario-court-of-appeal-faq-schema" type="application/ld+json">
        {faqSchema}
      </Script>

      <div className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-amber-400 text-slate-900 text-sm font-semibold px-4 py-1 rounded-full mb-4">
              Civil Litigation
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Ontario Court of Appeal Guide 2024
            </h1>
            <p className="text-xl text-slate-300 mb-4">
              Procedure, Leave, Standards of Review, and Costs
            </p>
            <p className="text-slate-400 text-sm">December 2024 &middot; 14 min read</p>
          </div>
        </section>

        {/* Intro */}
        <section className="py-12 px-6 border-b border-slate-100">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-slate-700 leading-relaxed">
              The Ontario Court of Appeal (ONCA) is the final appellate court in Ontario for most civil matters,
              with jurisdiction over Superior Court, Divisional Court, and consent appeals. ONCA procedure is
              governed by the <strong>Courts of Justice Act</strong> and <strong>Rules of Civil Procedure rr.61-63</strong>.
              This guide covers the civil appeal routes (as of right vs leave), the perfecting timeline, standards
              of review (Housen framework), stays pending appeal, fresh evidence (Palmer test), and costs on appeal.
            </p>
          </div>
        </section>

        {/* Appeal Routes */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              ONCA Appeal Routes: As of Right vs Leave
            </h2>
            <p className="text-slate-600 mb-8">
              Whether a civil appeal to ONCA requires leave depends on whether the order appealed from is
              final or interlocutory. Final orders are appealable as of right; interlocutory orders require
              leave of a judge of the Court of Appeal.
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
              <table className="w-full bg-white">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left px-5 py-4 font-semibold">Appeal Type</th>
                    <th className="text-left px-5 py-4 font-semibold">Basis</th>
                    <th className="text-left px-5 py-4 font-semibold">Rule</th>
                    <th className="text-left px-5 py-4 font-semibold">Deadline</th>
                    <th className="text-left px-5 py-4 font-semibold">Panel</th>
                  </tr>
                </thead>
                <tbody>
                  {appealRoutes.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-5 py-4 text-slate-700 font-semibold text-sm">{row.type}</td>
                      <td className="px-5 py-4 text-slate-600 text-sm">{row.basis}</td>
                      <td className="px-5 py-4 text-slate-500 text-xs font-mono">{row.rule}</td>
                      <td className="px-5 py-4 text-slate-600 text-sm whitespace-nowrap">{row.deadline}</td>
                      <td className="px-5 py-4 text-slate-600 text-sm">{row.panel}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Perfecting Steps */}
        <section className="py-16 px-6 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Perfecting an ONCA Civil Appeal: Six Steps
            </h2>
            <p className="text-slate-600 mb-8">
              An appeal is perfected when the appellant serves and files all required documents within the
              prescribed deadlines. Failure to perfect may result in dismissal for delay on a respondent
              motion under r.61.13.
            </p>
            <div className="space-y-4">
              {perfectingSteps.map((step, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-amber-400 rounded-lg flex items-center justify-center text-slate-900 font-bold shrink-0">
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-slate-900 mb-1">{step.step}</h3>
                      <p className="text-slate-600 text-sm mb-3">{step.description}</p>
                      <div className="flex flex-wrap gap-3 text-xs">
                        <span className="bg-amber-50 text-amber-800 px-3 py-1 rounded-full font-medium">
                          Deadline: {step.deadline}
                        </span>
                        <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full font-mono">
                          {step.rule}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Standards of Review */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Standards of Review at ONCA: Housen Framework
            </h2>
            <p className="text-slate-600 mb-8">
              The standard of review determines how closely ONCA scrutinizes the decision below. Housen v
              Nikolaisen (2002 SCC 33) establishes the framework: correctness for questions of law; palpable
              and overriding error for findings of fact and most mixed questions.
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
              <table className="w-full bg-white">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left px-5 py-4 font-semibold">Issue Type</th>
                    <th className="text-left px-5 py-4 font-semibold">Standard</th>
                    <th className="text-left px-5 py-4 font-semibold">Leading Case</th>
                    <th className="text-left px-5 py-4 font-semibold">Application</th>
                  </tr>
                </thead>
                <tbody>
                  {standardsOfReview.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-5 py-4 text-slate-700 font-semibold text-sm">{row.issue}</td>
                      <td className="px-5 py-4">
                        <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                          row.standard === "Correctness"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-amber-100 text-amber-800"
                        }`}>
                          {row.standard}
                        </span>
                      </td>
                      <td className="px-5 py-4 text-slate-500 text-xs font-mono">{row.leading}</td>
                      <td className="px-5 py-4 text-slate-600 text-sm">{row.application}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Stays and Fresh Evidence */}
        <section className="py-16 px-6 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              Stays Pending Appeal and Fresh Evidence
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Stay Pending Appeal (r.63.02)</h3>
                <p className="text-slate-600 text-sm mb-4">
                  RJR-MacDonald three-part test applied by ONCA on motions to stay pending appeal:
                </p>
                <ol className="space-y-3 text-sm text-slate-700 list-decimal list-inside">
                  <li><strong>Serious question to be tried</strong> — not frivolous or vexatious; arguable grounds of appeal</li>
                  <li><strong>Irreparable harm</strong> — harm that cannot be compensated by damages if appeal succeeds; execution of judgment causes harm that cannot be undone</li>
                  <li><strong>Balance of convenience</strong> — weighing harm to moving party from refusal vs harm to responding party from grant</li>
                </ol>
                <p className="text-slate-500 text-xs mt-4 italic">
                  Money judgments: stay more readily granted if there is serious issue and evidence respondent could not repay if appeal succeeds.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Fresh Evidence (Palmer Test)</h3>
                <p className="text-slate-600 text-sm mb-4">
                  ONCA may admit fresh evidence on appeal under the Palmer test (Palmer v R, 1980 SCC):
                </p>
                <ol className="space-y-3 text-sm text-slate-700 list-decimal list-inside">
                  <li><strong>Due diligence</strong> — evidence not discoverable at trial through reasonable diligence (not an absolute bar but a key factor)</li>
                  <li><strong>Relevance</strong> — evidence is relevant and bears on a decisive or potentially decisive issue at trial</li>
                  <li><strong>Credibility</strong> — evidence is credible in the sense that it is reasonably capable of belief</li>
                  <li><strong>Conclusiveness</strong> — evidence, if believed, could reasonably be expected to have affected the result</li>
                </ol>
                <p className="text-slate-500 text-xs mt-4 italic">
                  All four criteria must be satisfied; appellate courts apply the test strictly to maintain finality of trial verdicts.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              Frequently Asked Questions: ONCA Procedure
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: "What is the deadline to file a Notice of Appeal at the Ontario Court of Appeal?",
                  a: "Under Rules of Civil Procedure r.61.04(1), a Notice of Appeal must be filed and served within 30 days of the order being appealed. For appeals requiring leave, the motion for leave must be filed within 15 days of the order (r.61.03.1). Extensions of time may be granted on a motion but require demonstrating the delay was not wilful, an arguable ground of appeal, and no serious prejudice.",
                },
                {
                  q: "What is the standard of review at the Ontario Court of Appeal for findings of fact?",
                  a: "The Ontario Court of Appeal applies the palpable and overriding error standard to findings of fact and questions of mixed fact and law (Housen v Nikolaisen). A palpable error is one that is obvious; an overriding error is one that goes to the core of the outcome. Pure questions of law attract the correctness standard. Discretionary decisions (costs, case management orders) attract a high degree of deference.",
                },
                {
                  q: "How do you perfect an appeal at the Ontario Court of Appeal?",
                  a: "Under r.61.09, the appellant must perfect the appeal by serving and filing the appeal book and compendium, exhibits book, transcript of evidence (if any), and appellant factum within 60 days of filing the Notice of Appeal (or as extended). Failure to perfect within the deadline may result in dismissal for delay on a respondent motion. The registrar schedules the hearing after perfection.",
                },
                {
                  q: "What are the grounds for a stay pending appeal at the Ontario Court of Appeal?",
                  a: "A stay pending appeal under r.63.02 is granted if the moving party demonstrates: (1) a serious question to be tried on the appeal (not frivolous or vexatious); (2) irreparable harm if the stay is refused; and (3) the balance of convenience favours the stay. This is the RJR-MacDonald test. For money judgments, a stay is more readily granted if there is a serious issue and evidence the respondent could not repay if the appeal succeeds.",
                },
              ].map((faq, i) => (
                <div key={i} className="border border-slate-200 rounded-xl p-6 bg-white">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">{faq.q}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6 bg-amber-50 border-t border-amber-100">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Track Appeal Deadlines with Atticus
            </h2>
            <p className="text-slate-600 mb-8">
              Atticus tracks appeal filing deadlines, perfecting timelines, factum due dates, and hearing
              dates for Ontario litigators. AI document analysis extracts key dates from judgments and orders
              automatically — reducing the risk of missed appeal deadlines.
            </p>
            <Link
              href="/sign-up"
              className="inline-block bg-slate-900 text-white font-semibold px-10 py-4 rounded-lg hover:bg-slate-700 transition-colors"
            >
              Try Atticus Free for 14 Days
            </Link>
          </div>
        </section>

        {/* Related */}
        <section className="py-12 px-6 border-t border-slate-100">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-lg font-semibold text-slate-900 mb-6">Related Guides</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { href: "/blog/ontario-criminal-appeals", label: "Ontario Criminal Appeals" },
                { href: "/blog/ontario-civil-procedure", label: "Ontario Civil Procedure" },
                { href: "/blog/ontario-lso-complaints", label: "LSO Complaints & Discipline" },
                { href: "/ontario-civil-litigation-lawyer", label: "Atticus for Litigators" },
                { href: "/ontario-limitation-period", label: "Ontario Limitation Periods" },
                { href: "/trust-accounting-ontario", label: "Ontario Trust Accounting" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-amber-700 hover:text-amber-900 font-medium underline underline-offset-2"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
