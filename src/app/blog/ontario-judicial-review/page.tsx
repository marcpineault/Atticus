import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ontario Judicial Review Guide 2024: Procedure, Standard of Review, and Remedies | Atticus",
  description:
    "Ontario judicial review: Divisional Court vs Court of Appeal jurisdiction, standard of review (correctness vs reasonableness after Vavilov), 5 grounds for judicial review, certiorari/mandamus/prohibition remedies, procedural fairness requirements, and time limits.",
  openGraph: {
    title: "Ontario Judicial Review Guide 2024: Procedure, Standard of Review, and Remedies",
    description:
      "Comprehensive guide for Ontario administrative law litigators on judicial review — Vavilov standard of review, procedural fairness, grounds to set aside tribunal decisions, and remedies.",
    url: "https://getatticus.ca/blog/ontario-judicial-review",
    siteName: "Atticus",
    type: "article",
  },
  alternates: { canonical: "https://getatticus.ca/blog/ontario-judicial-review" },
};

const schemaJson = `{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Ontario Judicial Review Guide 2024: Procedure, Standard of Review, and Remedies",
      "description": "Ontario judicial review covering Vavilov standard of review (correctness vs reasonableness), 5 grounds, procedural fairness, Divisional Court procedure, and remedies (certiorari, mandamus, prohibition).",
      "url": "https://getatticus.ca/blog/ontario-judicial-review",
      "datePublished": "2024-12-01",
      "dateModified": "2024-12-01",
      "author": { "@type": "Organization", "name": "Atticus" },
      "publisher": { "@type": "Organization", "name": "Atticus", "url": "https://getatticus.ca" }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is judicial review in Ontario?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Judicial review is the process by which Ontario courts supervise the decisions of administrative tribunals, government decision-makers, and statutory bodies. It is not an appeal — courts do not reconsider the merits of the decision but assess whether the decision-maker stayed within its jurisdiction, followed procedural fairness requirements, and made a decision that is reasonable or correct (depending on the applicable standard of review)."
          }
        },
        {
          "@type": "Question",
          "name": "What is the standard of review after Vavilov?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "After Canada (Minister of Citizenship and Immigration) v Vavilov [2019] 4 SCR 653, the Supreme Court established a simplified standard of review framework. Reasonableness is the presumptive standard for most administrative decisions. Correctness applies in a limited number of situations: constitutional questions, questions of central importance to the legal system that fall outside the tribunal's expertise, questions regarding the boundaries of tribunals' jurisdiction relative to each other, and where a statutory right of appeal exists on a question of law."
          }
        },
        {
          "@type": "Question",
          "name": "Where is judicial review heard in Ontario?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In Ontario, judicial review of provincial tribunal and administrative decisions is heard by the Divisional Court (a branch of the Ontario Superior Court of Justice). An application for judicial review must be made promptly and no later than 30 days after the decision, unless the court extends the time. The Judicial Review Procedure Act (Ontario) governs the procedure."
          }
        },
        {
          "@type": "Question",
          "name": "What are the grounds for judicial review in Ontario?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The main grounds for judicial review in Ontario are: (1) excess of jurisdiction (the tribunal acted beyond its statutory authority); (2) breach of procedural fairness (inadequate hearing, biased decision-maker); (3) unreasonable decision (after Vavilov — decision not justified, transparent, or intelligible); (4) incorrect decision on a correctness issue; and (5) fraud or bad faith."
          }
        }
      ]
    }
  ]
}`;

type StandardRow = {
  standard: string;
  when: string;
  examples: string;
};

const standardsOfReview: StandardRow[] = [
  {
    standard: "Reasonableness",
    when: "Presumptive standard for most administrative decisions; applies where legislator intended deference",
    examples: "HRTO decisions on discrimination, immigration officer decisions, LTB eviction orders, professional discipline panels",
  },
  {
    standard: "Correctness",
    when: "Constitutional questions (Charter, division of powers), questions of central importance to legal system outside tribunal expertise",
    examples: "Whether a tribunal has jurisdiction over a constitutional question; questions at the boundaries of competing tribunal jurisdictions",
  },
  {
    standard: "Correctness (statutory appeal)",
    when: "Where statute provides a right of appeal to a court on a question of law, correctness applies to that question",
    examples: "Some professional discipline statutes provide a right of appeal to Divisional Court; court applies correctness to pure law questions",
  },
];

type GroundRow = {
  ground: string;
  description: string;
  examples: string;
};

const reviewGrounds: GroundRow[] = [
  {
    ground: "Excess of jurisdiction",
    description: "The tribunal acted beyond the scope of its statutory authority — made a decision it had no power to make",
    examples: "Tribunal applying wrong statute, ordering remedy not available under enabling legislation, deciding matters outside its subject-matter jurisdiction",
  },
  {
    ground: "Breach of procedural fairness",
    description: "The duty of procedural fairness was not met — inadequate notice, no opportunity to be heard, or decision-maker was biased",
    examples: "No hearing before adverse decision, failure to disclose evidence relied upon, appearance of bias by tribunal member",
  },
  {
    ground: "Unreasonable decision",
    description: "The decision is not justified, transparent, and intelligible — it is not a reasonable outcome based on the facts and law (post-Vavilov test)",
    examples: "Reasons that do not support the outcome, decision that ignores binding precedent without explanation, factual findings with no evidentiary basis",
  },
  {
    ground: "Incorrect decision (correctness issues)",
    description: "On correctness questions, the court may substitute its own decision if the tribunal erred in law",
    examples: "Constitutional question decided incorrectly, statutory interpretation of a provision of central importance decided incorrectly",
  },
  {
    ground: "Bad faith or improper purpose",
    description: "The decision-maker acted in bad faith, for an improper purpose, or on the basis of irrelevant considerations",
    examples: "Decision motivated by personal animosity, consideration of prohibited factors, decision made without genuine consideration of the application",
  },
];

type FairnessRow = {
  factor: string;
  moreProcess: string;
  lessProcess: string;
};

const fairnessFactors: FairnessRow[] = [
  {
    factor: "Nature of decision",
    moreProcess: "Adjudicative decisions affecting individual rights — more process required",
    lessProcess: "Legislative or policy decisions with broad application — less individual process required",
  },
  {
    factor: "Relationship between decision-maker and affected person",
    moreProcess: "Statutory scheme that resembles judicial decision-making (rights adjudicator)",
    lessProcess: "Ministerial discretion in policy areas; preliminary investigative stage",
  },
  {
    factor: "Importance of decision to affected persons",
    moreProcess: "Decision affects liberty, livelihood, or fundamental rights — highest procedural protection",
    lessProcess: "Routine administrative classification with no direct prejudice to individual",
  },
  {
    factor: "Legitimate expectations",
    moreProcess: "Government made a specific representation that particular procedures would be followed",
    lessProcess: "No representation made; no established practice of additional process",
  },
  {
    factor: "Tribunal's choice of procedure",
    moreProcess: "Tribunal has not chosen a particular procedure; courts may impose minimum standards",
    lessProcess: "Tribunal has enacted its own procedural rules; greater deference to those rules",
  },
];

type RemedyRow = {
  remedy: string;
  description: string;
  when: string;
};

const remedies: RemedyRow[] = [
  {
    remedy: "Certiorari (quashing order)",
    description: "Quashes (voids) the impugned decision — the tribunal's order is set aside as if never made",
    when: "Most common JR remedy; used where tribunal lacked jurisdiction, breached fairness, or made unreasonable decision",
  },
  {
    remedy: "Mandamus (compelling order)",
    description: "Orders a decision-maker to perform a public duty they have failed or refused to perform",
    when: "Where a tribunal refuses to decide a matter it is required to hear; where a government official fails to perform a ministerial duty",
  },
  {
    remedy: "Prohibition",
    description: "Prohibits a decision-maker from proceeding with or continuing an unauthorized process",
    when: "Prospective remedy used before a decision is made; useful where bias established or tribunal clearly acting without jurisdiction",
  },
  {
    remedy: "Declaration",
    description: "Court declares the legal rights or obligations of the parties without directing enforcement",
    when: "Useful where quashing is not needed but the law requires clarification; often combined with other remedies",
  },
  {
    remedy: "Remitting to tribunal",
    description: "Court remits the matter to the original tribunal (or different panel) for reconsideration",
    when: "After quashing an unreasonable decision; court declines to substitute its own decision and sends it back",
  },
];

const faqs = [
  {
    q: "What is judicial review in Ontario?",
    a: "Judicial review is the process by which Ontario courts supervise the decisions of administrative tribunals, government decision-makers, and statutory bodies. It is not an appeal — courts do not reconsider the merits of the decision but assess whether the decision-maker stayed within its jurisdiction, followed procedural fairness requirements, and made a decision that is reasonable or correct (depending on the applicable standard of review).",
  },
  {
    q: "What is the standard of review after Vavilov?",
    a: "After Canada (Minister of Citizenship and Immigration) v Vavilov [2019] 4 SCR 653, the Supreme Court established a simplified standard of review framework. Reasonableness is the presumptive standard for most administrative decisions. Correctness applies in a limited number of situations: constitutional questions, questions of central importance to the legal system that fall outside the tribunal's expertise, questions regarding the boundaries of tribunals' jurisdiction relative to each other, and where a statutory right of appeal exists on a question of law.",
  },
  {
    q: "Where is judicial review heard in Ontario?",
    a: "In Ontario, judicial review of provincial tribunal and administrative decisions is heard by the Divisional Court (a branch of the Ontario Superior Court of Justice). An application for judicial review must be made promptly and no later than 30 days after the decision, unless the court extends the time. The Judicial Review Procedure Act (Ontario) governs the procedure.",
  },
  {
    q: "What are the grounds for judicial review in Ontario?",
    a: "The main grounds for judicial review in Ontario are: (1) excess of jurisdiction (the tribunal acted beyond its statutory authority); (2) breach of procedural fairness (inadequate hearing, biased decision-maker); (3) unreasonable decision (after Vavilov — decision not justified, transparent, or intelligible); (4) incorrect decision on a correctness issue; and (5) fraud or bad faith.",
  },
];

export default function OntarioJudicialReviewPage() {
  return (
    <>
      <Script id="ontario-judicial-review-schema" type="application/ld+json">
        {schemaJson}
      </Script>

      <div className="min-h-screen bg-white">
        {/* Breadcrumb */}
        <div className="bg-slate-50 border-b border-slate-200 px-6 py-3">
          <div className="max-w-4xl mx-auto text-sm text-slate-500">
            <Link href="/" className="hover:text-slate-700">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-slate-700">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-900">Ontario Judicial Review Guide</span>
          </div>
        </div>

        {/* Header */}
        <header className="py-16 px-6 border-b border-slate-100">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-amber-100 text-amber-800 text-sm font-medium px-3 py-1 rounded-full mb-6">
              Administrative Law
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-4 leading-tight">
              Ontario Judicial Review Guide 2024: Procedure, Standard of Review, and Remedies
            </h1>
            <p className="text-xl text-slate-600 mb-6">
              Vavilov standard of review (reasonableness vs correctness), 5 grounds for judicial review, procedural fairness requirements (Baker factors), Divisional Court procedure, and remedies including certiorari, mandamus, and prohibition.
            </p>
            <div className="flex items-center gap-4 text-sm text-slate-500">
              <span>December 2024</span>
              <span>•</span>
              <span>16 min read</span>
              <span>•</span>
              <span>Atticus Legal Team</span>
            </div>
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-6 py-12">
          {/* Intro */}
          <section className="mb-12">
            <p className="text-slate-700 leading-relaxed mb-4">
              Judicial review is the mechanism by which Ontario courts hold administrative decision-makers accountable to the rule of law. Unlike an appeal, judicial review does not allow the court to substitute its own view of the merits — it examines whether the decision was made lawfully, fairly, and reasonably.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              The Supreme Court of Canada&apos;s landmark 2019 decision in Vavilov fundamentally restructured the standard of review framework. Ontario courts now apply a simplified approach: reasonableness is the presumptive standard for most administrative decisions, with correctness reserved for a narrow category of questions.
            </p>
            <p className="text-slate-700 leading-relaxed">
              This guide covers the complete Ontario judicial review framework: jurisdiction, standard of review, grounds, procedural fairness, the Divisional Court process, remedies, and the time limits Ontario administrative law litigators must observe.
            </p>
          </section>

          {/* Standard of Review */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Standard of Review After Vavilov
            </h2>
            <p className="text-slate-700 mb-6">
              In Canada (Minister of Citizenship and Immigration) v Vavilov [2019] 4 SCR 653, the Supreme Court established that reasonableness is the presumptive standard. A reasonable decision is one that is justified, transparent, and intelligible — and the outcome must be defensible in relation to the facts and the law.
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm mb-6">
              <table className="w-full bg-white">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left px-5 py-4 font-semibold text-sm">Standard</th>
                    <th className="text-left px-5 py-4 font-semibold text-sm">When It Applies</th>
                    <th className="text-left px-5 py-4 font-semibold text-sm">Ontario Examples</th>
                  </tr>
                </thead>
                <tbody>
                  {standardsOfReview.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-5 py-4 font-medium text-slate-900 text-sm">{row.standard}</td>
                      <td className="px-5 py-4 text-slate-700 text-sm">{row.when}</td>
                      <td className="px-5 py-4 text-slate-700 text-sm">{row.examples}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
              <p className="text-blue-900 text-sm">
                <strong>Reasonableness post-Vavilov:</strong> Courts focus on the reasons actually given by the decision-maker — not on reasons the court could construct. A decision may be unreasonable if the reasons fail to address key arguments, rely on an indefensible interpretation of a key term, or apply the law in a way that undermines the statutory scheme. The Vavilov framework substantially raised the bar on the quality of reasons required from decision-makers.
              </p>
            </div>
          </section>

          {/* Grounds */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Five Grounds for Judicial Review in Ontario
            </h2>
            <div className="space-y-4">
              {reviewGrounds.map((row, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-7 h-7 bg-amber-400 text-slate-900 rounded-full flex items-center justify-center font-bold text-sm">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">{row.ground}</h3>
                      <p className="text-slate-700 text-sm mb-1">{row.description}</p>
                      <p className="text-slate-500 text-xs italic"><strong>Examples:</strong> {row.examples}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Procedural Fairness */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Procedural Fairness: The Baker Factors
            </h2>
            <p className="text-slate-700 mb-6">
              The content of the duty of procedural fairness is contextual. In Baker v Canada [1999] 2 SCR 817, the Supreme Court identified five factors that determine how much process is owed. More process is required as the decision becomes more adjudicative and its impact on the individual more serious.
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
              <table className="w-full bg-white">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left px-5 py-4 font-semibold text-sm">Baker Factor</th>
                    <th className="text-left px-5 py-4 font-semibold text-sm">More Process Required</th>
                    <th className="text-left px-5 py-4 font-semibold text-sm">Less Process Required</th>
                  </tr>
                </thead>
                <tbody>
                  {fairnessFactors.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-5 py-4 font-medium text-slate-900 text-sm">{row.factor}</td>
                      <td className="px-5 py-4 text-slate-700 text-sm">{row.moreProcess}</td>
                      <td className="px-5 py-4 text-slate-700 text-sm">{row.lessProcess}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Remedies */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Judicial Review Remedies in Ontario
            </h2>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm mb-6">
              <table className="w-full bg-white">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left px-5 py-4 font-semibold text-sm">Remedy</th>
                    <th className="text-left px-5 py-4 font-semibold text-sm">Description</th>
                    <th className="text-left px-5 py-4 font-semibold text-sm">When Used</th>
                  </tr>
                </thead>
                <tbody>
                  {remedies.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-5 py-4 font-medium text-slate-900 text-sm">{row.remedy}</td>
                      <td className="px-5 py-4 text-slate-700 text-sm">{row.description}</td>
                      <td className="px-5 py-4 text-slate-700 text-sm">{row.when}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">Time Limits and Procedure</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  title: "30-day limitation period",
                  body: "An application for judicial review must be brought within 30 days of the decision. The court has discretion to extend this period where there is a reasonable explanation for the delay and no substantial prejudice to other parties.",
                },
                {
                  title: "Leave requirement (Divisional Court)",
                  body: "Some judicial reviews require leave from the Divisional Court before the full application can proceed. Leave is granted where the application raises an arguable case with some merit.",
                },
                {
                  title: "Record of proceedings",
                  body: "The applicant must obtain and file the record of the tribunal proceedings — the evidence, submissions, and reasons. The tribunal is obligated to compile and provide this record.",
                },
                {
                  title: "Stay pending review",
                  body: "The applicant may seek a stay of the impugned decision pending the outcome of the judicial review. The stay test follows the three-part injunction framework: arguable case, irreparable harm, balance of convenience.",
                },
              ].map((item, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                  <h4 className="font-semibold text-slate-900 mb-2 text-sm">{item.title}</h4>
                  <p className="text-slate-600 text-sm">{item.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                  <h3 className="font-semibold text-slate-900 mb-2">{faq.q}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="bg-slate-900 rounded-2xl p-10 text-center text-white mb-12">
            <h2 className="text-2xl font-bold mb-3">
              Manage Administrative Law Files with Atticus
            </h2>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto text-sm">
              Atticus helps Ontario administrative law litigators track limitation periods, manage matter timelines, and keep files LSO-compliant throughout the judicial review process.
            </p>
            <Link
              href="/sign-up"
              className="inline-block bg-amber-400 text-slate-900 font-semibold px-8 py-3 rounded-lg hover:bg-amber-300 transition-colors"
            >
              Start Free Trial
            </Link>
          </section>

          {/* Related */}
          <section className="border-t border-slate-100 pt-8">
            <h3 className="font-semibold text-slate-900 mb-4">Related Guides</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { href: "/blog/ontario-administrative-law", label: "Ontario Administrative Law Guide" },
                { href: "/blog/ontario-human-rights-tribunal", label: "Ontario Human Rights Tribunal Guide" },
                { href: "/blog/ontario-injunction-process", label: "Ontario Injunction Process" },
                { href: "/blog/ontario-civil-litigation-process", label: "Ontario Civil Litigation Process" },
                { href: "/blog/ontario-labour-law", label: "Ontario Labour Law Guide" },
                { href: "/blog/ontario-negligence-law", label: "Ontario Negligence Law Guide" },
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
          </section>
        </div>
      </div>
    </>
  );
}
