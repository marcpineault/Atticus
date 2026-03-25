import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ontario Just Cause Dismissal: What Employers Must Prove",
  description:
    "Complete guide to Ontario just cause dismissal: the contextual approach, McKinley v BC Tel cumulative misconduct, insubordination, theft, dishonesty, harassment, proportionality, and the Dowling v Ontario Workplace Safety standards.",
  openGraph: {
    title: "Ontario Just Cause Dismissal: What Employers Must Prove",
    description:
      "Ontario just cause dismissal law: McKinley contextual approach, cumulative misconduct, insubordination, dishonesty, proportionality test, and ESA just cause standard.",
    url: "https://getatticus.ca/blog/ontario-just-cause-dismissal",
    siteName: "Atticus",
    type: "article",
  },
  alternates: {
    canonical: "https://getatticus.ca/blog/ontario-just-cause-dismissal",
  },
};

const schemaJson = `{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Ontario Just Cause Dismissal: What Employers Must Prove",
  "description": "Complete guide to Ontario just cause dismissal covering the contextual approach from McKinley v BC Telephone Company 2001 SCC 38, proportionality, cumulative misconduct, insubordination, theft and dishonesty, harassment, ESA just cause standard, and how just cause affects termination pay and severance.",
  "author": {
    "@type": "Organization",
    "name": "Atticus"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Atticus",
    "url": "https://getatticus.ca"
  },
  "datePublished": "2024-12-01",
  "dateModified": "2024-12-01",
  "mainEntityOfPage": "https://getatticus.ca/blog/ontario-just-cause-dismissal",
  "keywords": ["just cause dismissal Ontario", "cause for dismissal Ontario", "McKinley v BC Telephone just cause", "contextual approach just cause Ontario", "summary dismissal Ontario", "ESA just cause Ontario", "insubordination dismissal Ontario", "dishonesty dismissal Ontario", "cumulative misconduct Ontario"]
}`;

const faqSchemaJson = `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is just cause for dismissal in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Just cause for dismissal in Ontario requires an employer to demonstrate that the employee's misconduct was so serious that dismissal — the most severe employment sanction — was the proportionate response. The Supreme Court of Canada in McKinley v BC Telephone Company 2001 SCC 38 confirmed a contextual and proportional approach: the court considers the nature and gravity of the misconduct, the employee's length of service and disciplinary record, and whether the misconduct was so fundamentally incompatible with the employment relationship that dismissal was the only reasonable response."
      }
    },
    {
      "@type": "Question",
      "name": "If there is just cause, does the employer still need to pay notice or severance?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If there is just cause under the Employment Standards Act (wilful misconduct, disobedience, or wilful neglect of duty not condoned by the employer), the employer is not required to pay ESA minimum notice or severance. At common law, just cause also eliminates the obligation to provide reasonable notice. However, the ESA just cause standard (wilful misconduct) is higher than the common law just cause standard — an employer may have common law just cause but still owe ESA minimums. Always assess both standards separately."
      }
    },
    {
      "@type": "Question",
      "name": "What is cumulative just cause in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cumulative just cause arises where a series of individually insufficient incidents of misconduct, taken together and viewed in the context of the entire employment history, justify summary dismissal. Each prior incident should typically have been documented and progressively disciplined. The employer must show that the employee was on notice that their continued employment was at risk and that the final incident was the 'last straw' that exhausted the employer's tolerance for the pattern of conduct."
      }
    }
  ]
}`;

export default function OntarioJustCauseDismissal() {
  return (
    <>
      <Script id="just-cause-schema" type="application/ld+json">
        {schemaJson}
      </Script>
      <Script id="just-cause-faq-schema" type="application/ld+json">
        {faqSchemaJson}
      </Script>

      <div className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-amber-400 text-slate-900 text-sm font-semibold px-4 py-1 rounded-full mb-4">
              Employment Law
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Ontario Just Cause Dismissal: What Employers Must Prove
            </h1>
            <p className="text-slate-300 text-lg mb-4 max-w-3xl">
              The McKinley contextual and proportional approach, cumulative misconduct, insubordination,
              dishonesty, harassment, the ESA wilful misconduct standard, progressive discipline,
              and how just cause affects notice and severance obligations.
            </p>
            <div className="flex gap-4 text-sm text-slate-400">
              <span>December 2024</span>
              <span>•</span>
              <span>12 min read</span>
              <span>•</span>
              <span>Employment Law</span>
            </div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 py-12">

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-10">
            <h2 className="text-lg font-semibold text-slate-900 mb-2">Key Takeaways</h2>
            <ul className="space-y-1 text-slate-700 text-sm">
              <li>• McKinley v BC Telephone Company 2001 SCC 38: contextual and proportional approach — not a bright-line rule</li>
              <li>• Must ask: was the misconduct so fundamentally incompatible with the employment relationship that dismissal was the proportionate response?</li>
              <li>• ESA &quot;wilful misconduct&quot; standard for no-notice/no-severance is higher than common law just cause</li>
              <li>• Progressive discipline and documentation are critical — documented warnings show employee was on notice</li>
              <li>• Cumulative just cause: series of incidents together can justify dismissal even if each alone would not</li>
              <li>• Condonation (accepting the employee back / not disciplining promptly) can defeat a just cause claim</li>
              <li>• Employer has the burden of proof to establish just cause on a balance of probabilities</li>
            </ul>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              The McKinley Contextual Approach
            </h2>
            <p className="text-slate-700 mb-4">
              The Supreme Court of Canada in <em>McKinley v BC Telephone Company</em> 2001 SCC 38
              rejected a rigid categorical approach to just cause — the analysis is not simply
              &quot;was there dishonesty?&quot; or &quot;was there insubordination?&quot; — and adopted a contextual,
              proportional framework:
            </p>
            <ol className="list-decimal pl-6 text-slate-700 space-y-3 mb-4">
              <li>
                <strong>Identify the nature and gravity of the misconduct</strong> — what exactly
                did the employee do, and how serious was the conduct?
              </li>
              <li>
                <strong>Consider the context and circumstances</strong> — the employee&apos;s length
                of service, seniority, disciplinary history, industry context, the nature of the
                employment relationship, and whether the employee showed remorse
              </li>
              <li>
                <strong>Assess proportionality</strong> — was summary dismissal (the most severe
                sanction) proportionate to the misconduct, or would a lesser sanction (warning,
                demotion, suspension) have been appropriate?
              </li>
            </ol>
            <p className="text-slate-700">
              The question is whether the employee&apos;s conduct was incompatible with the continuation
              of the employment relationship, not whether the employee did something &quot;bad&quot; enough
              to be named in a particular category. Courts have found just cause for relatively minor
              dishonesty where trust was foundational to the role, and have denied just cause for
              serious misconduct by long-service employees without prior discipline.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Common Grounds for Just Cause in Ontario
            </h2>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm mb-4">
              <table className="w-full bg-white text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left px-5 py-3 font-semibold">Ground</th>
                    <th className="text-left px-5 py-3 font-semibold">Key Considerations</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      ground: "Dishonesty / Fraud",
                      considerations: "Theft, falsification of records, falsifying time records, resume fraud. McKinley applied to dishonesty — gravity of dishonesty and position of trust are central. A single act of dishonesty directly relating to the employment may justify dismissal; minor dishonesty may not. Courts consider whether the employee held a position of trust, the value involved, and whether the dishonesty was isolated or systematic.",
                    },
                    {
                      ground: "Insubordination",
                      considerations: "Wilful refusal to follow reasonable and lawful instructions of the employer. Must be a reasonable instruction, deliberately defied (not inability to comply). Repeated insubordination after warnings may justify dismissal. A single act of insubordination rarely justifies summary dismissal unless it was serious and in front of others or had significant consequences.",
                    },
                    {
                      ground: "Chronic absenteeism / lateness",
                      considerations: "Pattern of excessive absences or lateness after repeated documented warnings and progressive discipline. The employer must show the employee was on notice that their job was at risk and was given a clear opportunity to improve. Innocent absenteeism (illness-related) requires different analysis — Ontario Human Rights Code accommodation duties apply.",
                    },
                    {
                      ground: "Workplace harassment",
                      considerations: "Serious harassment, sexual harassment, bullying, or discriminatory conduct toward colleagues. Ontario Occupational Health and Safety Act (OHSA) imposes a duty on employers to maintain a harassment-free workplace. Single serious incidents of sexual harassment may justify summary dismissal. The employer must investigate properly before dismissing.",
                    },
                    {
                      ground: "Conflict of interest",
                      considerations: "Competing directly with the employer, disclosure of confidential information to competitors, undisclosed financial interests in vendors or clients. The seriousness depends on the employee's seniority and the extent of the breach.",
                    },
                    {
                      ground: "Incompetence / poor performance",
                      considerations: "Rarely justifies summary dismissal without prior progressive discipline and documented performance improvement plans. Employer must demonstrate: established performance standards, employee was clearly aware of them, given opportunity to improve, warned that job was at risk, and failed to improve after fair opportunity.",
                    },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-5 py-3 font-medium text-slate-800">{row.ground}</td>
                      <td className="px-5 py-3 text-slate-600">{row.considerations}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Progressive Discipline: Why It Matters
            </h2>
            <p className="text-slate-700 mb-4">
              Progressive discipline demonstrates that:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
              <li>The employee was aware their conduct was unacceptable</li>
              <li>The employee was given a clear opportunity to improve</li>
              <li>The employer gave the employee a chance before taking the most severe sanction</li>
              <li>The dismissal was proportionate — a considered last resort, not a first response</li>
            </ul>
            <p className="text-slate-700 mb-4">
              A typical progressive discipline sequence:
            </p>
            <ol className="list-decimal pl-6 text-slate-700 space-y-2 mb-4">
              <li>Verbal warning (documented in HR file)</li>
              <li>Written warning (signed by employee)</li>
              <li>Final written warning explicitly stating continued employment is at risk</li>
              <li>Suspension (with or without pay)</li>
              <li>Termination for cause</li>
            </ol>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-4">
              <h4 className="font-semibold text-slate-900 mb-2">Documentation is Critical</h4>
              <p className="text-slate-700 text-sm">
                In just cause litigation, employers who cannot produce written warnings, performance
                improvement plans, and contemporaneous records of misconduct consistently lose.
                Courts are highly skeptical of a just cause dismissal where the only evidence of
                problems is the employer&apos;s testimony after the fact. Document every warning, every
                meeting, and every incident at the time it occurs.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Condonation: Losing the Right to Dismiss for Cause
            </h2>
            <p className="text-slate-700 mb-4">
              Condonation occurs where the employer becomes aware of an employee&apos;s misconduct and
              either:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
              <li>Expressly forgives the misconduct (tells the employee the incident is forgiven and will not be held against them)</li>
              <li>Implicitly condones it by allowing the employee to continue working without discipline for an unreasonable period after learning of the misconduct</li>
            </ul>
            <p className="text-slate-700">
              Where an employer condones misconduct, they lose the right to later use that incident
              as a basis for just cause. The employer who discovered theft but allowed the employee
              to continue working for three months before dismissing will find that the delay has
              condoned the misconduct. Act promptly on discovered misconduct or lose the right to
              rely on it.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              ESA Wilful Misconduct Standard vs Common Law Just Cause
            </h2>
            <p className="text-slate-700 mb-4">
              There are two distinct just cause standards in Ontario employment law that operate
              independently:
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm mb-4">
              <table className="w-full bg-white text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left px-5 py-3 font-semibold">Standard</th>
                    <th className="text-left px-5 py-3 font-semibold">Effect</th>
                    <th className="text-left px-5 py-3 font-semibold">Test</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      standard: "Common law just cause",
                      effect: "No reasonable notice obligation; no common law reasonable notice pay",
                      test: "McKinley contextual proportional approach — misconduct fundamentally incompatible with employment",
                    },
                    {
                      standard: "ESA wilful misconduct (s.2(1) O. Reg. 288/01)",
                      effect: "No ESA minimum notice (1 week/year max 8 weeks) and no ESA severance (1 week/year for qualifying employees) required",
                      test: "Higher threshold: wilful misconduct, disobedience, or wilful neglect of duty that is not condoned by the employer — deliberate and intentional choice to disobey",
                    },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-5 py-3 font-medium text-slate-800">{row.standard}</td>
                      <td className="px-5 py-3 text-slate-600">{row.effect}</td>
                      <td className="px-5 py-3 text-slate-600">{row.test}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-slate-700">
              An employer may have common law just cause but still owe ESA minimum notice and
              severance if the conduct does not meet the higher &quot;wilful misconduct&quot; ESA standard.
              This is a common error — always assess both standards when advising on a just cause
              dismissal.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Employer&apos;s Burden of Proof
            </h2>
            <p className="text-slate-700 mb-4">
              The employer has the burden of proving just cause on a balance of probabilities. This
              is not a criminal standard — but courts apply the civil standard with care given the
              seriousness of the allegation (particularly for dishonesty allegations — the more
              serious the allegation, the more cogent the evidence required to prove it on the
              civil standard).
            </p>
            <p className="text-slate-700">
              The employer must prove both the underlying misconduct and that dismissal was the
              proportionate response. An employer who proves misconduct but cannot show
              proportionality (e.g., dismissed a 20-year employee for a single minor infraction
              without prior discipline) may still lose the just cause defence.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                {
                  q: "Can an employer add new allegations of misconduct after dismissal to justify the termination?",
                  a: "Generally no — after-acquired cause. An employer who discovers additional misconduct after termination may rely on it to bolster a just cause defence (Manthey v Edmonton (City) [2002] 3 SCR 209), but only if: (a) the after-acquired cause itself was sufficiently serious to justify dismissal, and (b) the employer discovered it after the dismissal but before the wrongful dismissal trial. After-acquired cause cannot be used where the employer knew of the conduct before dismissal but chose not to rely on it.",
                },
                {
                  q: "Does just cause require a formal investigation before dismissal?",
                  a: "Best practice requires a proper investigation proportionate to the allegations — interview the accused employee, gather evidence, provide an opportunity to respond. Procedural fairness does not create just cause where none exists, but a failure to investigate may undermine just cause where the employer would have discovered exonerating information had they investigated properly. For serious allegations (theft, harassment), a documented investigation is essential.",
                },
                {
                  q: "What is the 'last straw' doctrine in Ontario?",
                  a: "The last straw doctrine applies in cumulative just cause cases — where an employee with a poor disciplinary history commits a further (possibly minor) incident that is the 'last straw' justifying summary dismissal. The doctrine requires: a documented history of prior misconduct and discipline; the employee was aware their job was at risk; and the final incident, viewed in context of the history, justifies the ultimate sanction. The last straw cannot be trivial — it must be genuinely related to the prior pattern.",
                },
              ].map((faq, i) => (
                <div key={i} className="border border-slate-200 rounded-xl p-6">
                  <h3 className="font-semibold text-slate-900 mb-2">{faq.q}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-amber-50 border border-amber-200 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              Manage Your Employment Law Matters with Atticus
            </h2>
            <p className="text-slate-600 mb-6 max-w-xl mx-auto">
              Atticus is the Ontario practice management platform built for employment lawyers —
              LSO-compliant trust accounting, HST billing, AI document analysis, limitation period
              tracking, and Canadian legal AI. $149 CAD per lawyer per month.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/sign-up"
                className="bg-slate-900 text-white font-semibold px-8 py-3 rounded-lg hover:bg-slate-700 transition-colors"
              >
                Start Free Trial
              </Link>
              <Link
                href="/ontario-employment-lawyer"
                className="border border-slate-900 text-slate-900 font-semibold px-8 py-3 rounded-lg hover:bg-slate-100 transition-colors"
              >
                Ontario Employment Lawyer Software
              </Link>
            </div>
          </section>

          <section className="mt-12 pt-8 border-t border-slate-100">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Related Articles</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { href: "/blog/ontario-constructive-dismissal", label: "Ontario Constructive Dismissal" },
                { href: "/blog/ontario-employment-termination-pay", label: "Ontario Employment Termination Pay" },
                { href: "/blog/ontario-human-rights-code", label: "Ontario Human Rights Code" },
                { href: "/blog/ontario-mareva-injunction", label: "Ontario Mareva Injunctions" },
                { href: "/ontario-employment-lawyer", label: "Ontario Employment Lawyer Software" },
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
          </section>
        </article>
      </div>
    </>
  );
}
