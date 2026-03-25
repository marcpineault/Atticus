import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ontario Criminal Appeals Guide 2024 | Grounds, Fresh Evidence, and Sentence Appeals",
  description:
    "Ontario criminal appeals: appeal routes (Ontario Court of Appeal, SCJ summary conviction appeals), grounds of appeal (unreasonable verdict, legal error, miscarriage of justice), fresh evidence test (Palmer), sentence appeals, Crown appeals, and leave to appeal to the Supreme Court of Canada.",
  openGraph: {
    title: "Ontario Criminal Appeals Guide 2024 | Grounds, Fresh Evidence, and Sentence Appeals",
    description:
      "Criminal Code appeal grounds, fresh evidence (Palmer test), sentence appeals, Crown appeals, and leave to SCC — for Ontario criminal defence lawyers.",
    url: "https://getatticus.ca/blog/ontario-criminal-appeals",
    siteName: "Atticus",
    type: "article",
  },
  alternates: { canonical: "https://getatticus.ca/blog/ontario-criminal-appeals" },
};

const schemaJson = `{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Ontario Criminal Appeals Guide 2024: Grounds, Fresh Evidence, and Sentence Appeals",
  "description": "Comprehensive guide to Ontario criminal appeals including appeal routes, grounds of appeal, fresh evidence, sentence appeals, Crown appeals, and leave to appeal to the Supreme Court of Canada.",
  "author": { "@type": "Organization", "name": "Atticus" },
  "publisher": { "@type": "Organization", "name": "Atticus", "url": "https://getatticus.ca" },
  "url": "https://getatticus.ca/blog/ontario-criminal-appeals",
  "mainEntityOfPage": "https://getatticus.ca/blog/ontario-criminal-appeals"
}`;

const faqSchema = `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What are the grounds for a criminal appeal in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Under s.686 of the Criminal Code, a court of appeal may allow a conviction appeal on three grounds: (1) the verdict is unreasonable or cannot be supported by the evidence; (2) the judgment of the trial court is wrong on a question of law; or (3) there was a miscarriage of justice. For ground (3), the court must be satisfied that the miscarriage of justice actually occurred — not merely that an error occurred. The court may dismiss the appeal despite legal errors under the curative proviso (s.686(1)(b)(iii)) if there is no substantial wrong or miscarriage of justice."
      }
    },
    {
      "@type": "Question",
      "name": "What is the fresh evidence test for criminal appeals?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The test for admitting fresh evidence on a criminal appeal is the Palmer test (Palmer v The Queen, 1980 SCC). The four Palmer criteria are: (1) due diligence — the evidence could not have been obtained at trial by reasonable diligence; (2) relevance — the evidence must be relevant in that it bears on a decisive or potentially decisive issue; (3) credibility — the evidence must be reasonably capable of belief; and (4) effect — the evidence must be such that if believed, it could reasonably, when taken with the other evidence adduced at trial, be expected to have affected the result. In cases of innocence, the first Palmer criterion (due diligence) may be relaxed."
      }
    },
    {
      "@type": "Question",
      "name": "How long does a criminal appeal take in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Summary conviction appeals in Ontario from the Ontario Court of Justice to the Superior Court of Justice are generally heard within 6-12 months of filing, depending on the complexity and jurisdiction. Indictable conviction appeals to the Ontario Court of Appeal typically take 18-36 months from filing of the Notice of Appeal to hearing. Sentence appeals may be heard on a faster track. Appeals involving persons in custody may receive priority scheduling. Factum filing deadlines are set out in the Criminal Appeal Rules of the Court of Appeal."
      }
    },
    {
      "@type": "Question",
      "name": "Can the Crown appeal an acquittal in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Crown may appeal an acquittal, but only on a question of law alone (s.676 Criminal Code). The Crown cannot appeal a jury acquittal on questions of fact — the double jeopardy principle (Kienapple) protects against re-prosecution on the same facts. If the Crown's appeal succeeds, the court of appeal may order a new trial (it cannot enter a conviction directly, except in narrow circumstances under s.686(4)(b)(ii)). Crown appeals of sentence are also available on the same basis as defence sentence appeals."
      }
    }
  ]
}`;

const appealRoutes = [
  {
    court: "Summary conviction appeal (CC s.813)",
    from: "Ontario Court of Justice (summary conviction trial)",
    to: "Superior Court of Justice (single judge)",
    grounds: "Unreasonable verdict, wrong in law, miscarriage of justice (same s.686 test applies)",
    leave: "No leave required",
    timeline: "Notice of appeal within 30 days of sentence; hearing within 6-12 months",
  },
  {
    court: "Indictable conviction appeal (CC s.675)",
    from: "Ontario Court of Justice (elect provincial) or Superior Court (jury or judge alone)",
    to: "Ontario Court of Appeal (3-judge panel)",
    grounds: "s.686: unreasonable verdict; wrong in law; miscarriage of justice",
    leave: "No leave required for conviction appeals; leave required for some sentence-only appeals (s.675(1)(b))",
    timeline: "Notice of appeal within 30 days; factums and hearing 18-36 months",
  },
  {
    court: "Crown appeal of acquittal (CC s.676)",
    from: "Ontario Court of Justice or Superior Court (judge alone)",
    to: "Ontario Court of Appeal",
    grounds: "Question of law alone (not fact); jury acquittals cannot be appealed by Crown",
    leave: "No leave required for questions of law",
    timeline: "Notice within 30 days of acquittal; same Court of Appeal process",
  },
  {
    court: "Appeal to Supreme Court of Canada (CC s.691-693)",
    from: "Ontario Court of Appeal",
    to: "Supreme Court of Canada",
    grounds: "Question of law; dissent in Court of Appeal on question of law (as of right); otherwise leave required",
    leave: "Leave required unless question of law with CoA dissent",
    timeline: "Application for leave within 60 days of CoA judgment; SCC typically 2-4 years from CoA decision",
  },
];

const groundsOfAppeal = [
  {
    ground: "Unreasonable verdict (s.686(1)(a)(i))",
    test: "Would a properly instructed jury, acting reasonably, have been unable to arrive at the verdict on the evidence? On a conviction appeal, the appellate court may conduct its own weighing of evidence where the jury's verdict is the product of an unreasonable assessment of credibility.",
    notes: "High threshold — appellate courts are reluctant to substitute their view of the evidence for the trier of fact; strongest ground for jury verdicts where evidence is weak",
  },
  {
    ground: "Wrong in law (s.686(1)(a)(ii))",
    test: "The trial judge made an error of law that affected the verdict — e.g., incorrect jury charge, wrong legal test for mens rea, error in admitting/excluding evidence, jurisdictional error",
    notes: "Crown may invoke the curative proviso (s.686(1)(b)(iii)) to argue that despite the error, there was no substantial wrong or miscarriage of justice and the verdict should stand",
  },
  {
    ground: "Miscarriage of justice (s.686(1)(a)(iii))",
    test: "Something occurred that caused a fundamental unfairness in the proceeding; this is broader than legal error and can include serious trial counsel incompetence, new evidence of innocence, Crown misconduct, or undisclosed third-party records",
    notes: "Ineffective assistance of counsel requires showing: (1) counsel&apos;s acts/omissions fell below the standard of reasonable professional judgment; and (2) a miscarriage of justice resulted (i.e., a different result was reasonably possible)",
  },
  {
    ground: "Charter remedy — sentence reduction for breach (s.24(1))",
    test: "Where a Charter right was violated in the investigation or trial, the accused may seek a remedy on appeal including exclusion of evidence under s.24(2), stay of proceedings, or sentence reduction",
    notes: "Charter issues must generally be raised at trial; fresh Charter applications on appeal are rare but permitted where the failure to raise the issue was not strategic and the record supports the analysis",
  },
];

const sentenceAppeal = [
  {
    aspect: "Standard of review",
    description: "Appellate intervention in sentencing requires an error in principle, failure to consider a relevant factor, or a sentence that is demonstrably unfit (not merely that the appellate court would have sentenced differently) — Lacasse, 2015 SCC 64",
  },
  {
    aspect: "Errors in principle",
    description: "Errors that justify intervention: overemphasizing one sentencing factor; mischaracterizing the nature of the offence; failing to consider Gladue factors (Indigenous offenders); failing to consider joint submission or position agreed by counsel; imposing consecutive sentences without explanation",
  },
  {
    aspect: "Gladue appeals",
    description: "Where the trial judge failed to properly consider Gladue factors for Indigenous offenders (as required by s.718.2(e) Criminal Code and R v Gladue, 1999 SCC), the Court of Appeal may reduce the sentence or order a new sentencing hearing with a Gladue report",
  },
  {
    aspect: "Sentence reduction pending appeal",
    description: "An accused may apply for bail (judicial interim release) pending a sentence appeal or conviction appeal under s.679 Criminal Code; requires demonstrating the appeal is not frivolous, the accused will surrender, and detention is not necessary in the public interest",
  },
];

export default function OntarioCriminalAppealsPage() {
  return (
    <>
      <Script id="ontario-criminal-appeals-schema" type="application/ld+json">
        {schemaJson}
      </Script>
      <Script id="ontario-criminal-appeals-faq" type="application/ld+json">
        {faqSchema}
      </Script>

      <div className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-amber-400 text-slate-900 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              Criminal Law
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Ontario Criminal Appeals Guide 2024
            </h1>
            <p className="text-lg text-slate-300 mb-6 max-w-2xl">
              Appeal routes (summary conviction vs indictable), grounds of
              appeal (s.686), fresh evidence (Palmer test), sentence appeals
              (Lacasse standard), Crown appeals, and leave to the Supreme Court
              of Canada — for Ontario criminal defence lawyers.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-slate-400">
              <span>December 2024</span>
              <span>•</span>
              <span>14 min read</span>
              <span>•</span>
              <span>Criminal Law</span>
            </div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-6 py-12">
          {/* Overview */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Ontario Criminal Appeal Framework
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Criminal appeals in Ontario are governed by Part XXI of the{" "}
              <em>Criminal Code</em> (ss.673-696). The appeal structure depends
              on whether the original offence was prosecuted by summary
              conviction or on indictment. The Ontario Court of Appeal has
              jurisdiction over indictable conviction and sentence appeals;
              the Superior Court of Justice hears summary conviction appeals.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              A Notice of Appeal must be filed within 30 days of the sentence
              being imposed (for both conviction and sentence appeals). Extensions
              of time to appeal may be granted by a single judge of the Court of
              Appeal where the applicant can show: an intention to appeal existed
              within the appeal period; the extension would cause no prejudice;
              and there is an arguable ground of appeal with some prospect of
              success.
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-900">
              <strong>Curative proviso (s.686(1)(b)(iii)):</strong> Even if a
              legal error is established on appeal, the Crown may invoke the
              curative proviso — arguing that there was no substantial wrong or
              miscarriage of justice and the verdict should stand. The proviso
              applies more readily to minor or technical errors; it cannot save
              a fundamentally flawed trial or a verdict that was clearly
              unreliable.
            </div>
          </section>

          {/* Appeal Routes */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Criminal Appeal Routes in Ontario
            </h2>
            <div className="space-y-5">
              {appealRoutes.map((route, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-3">{route.court}</h3>
                  <div className="grid md:grid-cols-2 gap-3 text-sm">
                    <div>
                      <span className="font-semibold text-slate-700">From: </span>
                      <span className="text-slate-600">{route.from}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-slate-700">To: </span>
                      <span className="text-slate-600">{route.to}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-slate-700">Grounds: </span>
                      <span className="text-slate-600">{route.grounds}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-slate-700">Leave: </span>
                      <span className="text-slate-600">{route.leave}</span>
                    </div>
                    <div className="md:col-span-2">
                      <span className="font-semibold text-slate-700">Timeline: </span>
                      <span className="text-slate-600">{route.timeline}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Grounds */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Grounds of Appeal under s.686 Criminal Code
            </h2>
            <div className="space-y-5">
              {groundsOfAppeal.map((ground, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2">{ground.ground}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-2">{ground.test}</p>
                  <p className="text-xs text-amber-700">
                    <span className="font-semibold">Practice note: </span>{ground.notes}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Fresh Evidence */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Fresh Evidence on Criminal Appeals: The Palmer Test
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Fresh evidence may be admitted on a criminal appeal under s.683(1)
              of the Criminal Code. The test is the Palmer test (Palmer v The
              Queen, 1980 SCC):
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              {[
                { num: "1", title: "Due Diligence", body: "The evidence could not have been obtained at trial by the exercise of reasonable diligence. In innocence cases, this criterion may be relaxed where failing to do so would create a miscarriage of justice." },
                { num: "2", title: "Relevance", body: "The evidence must be relevant in that it bears upon a decisive or potentially decisive issue in the case." },
                { num: "3", title: "Credibility", body: "The evidence must be credible in the sense that it is reasonably capable of belief." },
                { num: "4", title: "Effect", body: "The evidence must be such that if believed, it could reasonably, when taken with the other evidence adduced at trial, be expected to have affected the result." },
              ].map((el, i) => (
                <div key={i} className="bg-amber-50 rounded-xl p-4 border border-amber-200">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-7 h-7 bg-amber-400 rounded-full flex items-center justify-center text-slate-900 font-bold text-sm">{el.num}</div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1 text-sm">{el.title}</h3>
                      <p className="text-slate-600 text-sm">{el.body}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-slate-600 text-sm">
              Fresh evidence applications are brought by notice on the appeal.
              Where the fresh evidence involves medical or forensic expert opinion,
              the expert must file a report; the other party may challenge the
              evidence. The Court of Appeal may hear the fresh evidence itself
              or refer it for a new trial.
            </p>
          </section>

          {/* Sentence Appeals */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Sentence Appeals: Lacasse Standard
            </h2>
            <div className="space-y-4">
              {sentenceAppeal.map((item, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2 text-sm">{item.aspect}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQs */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: "What are the grounds for a criminal appeal in Ontario?",
                  a: "Under s.686 of the Criminal Code, a court of appeal may allow a conviction appeal on three grounds: (1) the verdict is unreasonable or cannot be supported by the evidence; (2) the judgment of the trial court is wrong on a question of law; or (3) there was a miscarriage of justice. The court may dismiss the appeal despite legal errors under the curative proviso (s.686(1)(b)(iii)) if there is no substantial wrong or miscarriage of justice.",
                },
                {
                  q: "What is the fresh evidence test for criminal appeals?",
                  a: "The Palmer test requires: (1) due diligence — the evidence could not have been obtained at trial by reasonable diligence (may be relaxed in innocence cases); (2) relevance — bears on a decisive or potentially decisive issue; (3) credibility — reasonably capable of belief; and (4) effect — if believed, could reasonably be expected to have affected the result.",
                },
                {
                  q: "How long does a criminal appeal take in Ontario?",
                  a: "Summary conviction appeals from OCJ to Superior Court are generally heard within 6-12 months. Indictable conviction appeals to the Ontario Court of Appeal typically take 18-36 months from filing to hearing. Appeals involving persons in custody may receive priority scheduling. Factum filing deadlines are set out in the Criminal Appeal Rules.",
                },
                {
                  q: "Can the Crown appeal an acquittal in Ontario?",
                  a: "The Crown may appeal an acquittal, but only on a question of law alone (s.676 Criminal Code). The Crown cannot appeal a jury acquittal on questions of fact. If the Crown's appeal succeeds, the court of appeal may order a new trial — it cannot enter a conviction directly except in narrow circumstances under s.686(4)(b)(ii).",
                },
              ].map((faq, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                  <h3 className="font-semibold text-slate-900 mb-3">{faq.q}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="bg-slate-900 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">
              Manage Your Criminal Appeal Practice with Atticus
            </h2>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto">
              Track appeal deadlines, manage trust accounting, and organize
              criminal defence files with Atticus — built for Ontario solo and
              small law firms.
            </p>
            <Link
              href="/sign-up"
              className="inline-block bg-amber-400 text-slate-900 font-semibold px-8 py-3 rounded-lg hover:bg-amber-300 transition-colors"
            >
              Start Free Trial
            </Link>
          </section>

          {/* Related */}
          <section className="mt-12 pt-8 border-t border-slate-100">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">
              Related Ontario Law Guides
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { href: "/blog/ontario-criminal-procedure", label: "Ontario Criminal Procedure" },
                { href: "/blog/ontario-criminal-sentencing", label: "Ontario Criminal Sentencing" },
                { href: "/blog/ontario-bail-hearing", label: "Ontario Bail Hearings" },
                { href: "/blog/ontario-administrative-law", label: "Ontario Administrative Law and Judicial Review" },
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
