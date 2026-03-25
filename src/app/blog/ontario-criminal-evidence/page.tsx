import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ontario Criminal Evidence Guide 2024: Hearsay, Similar Fact Evidence, and Privilege",
  description:
    "Ontario criminal evidence guide: hearsay and the principled approach (Khelawon 2006 SCC 57 — threshold reliability and necessity), similar fact evidence (Handy 2002 SCC 56 — probative value vs prejudicial effect, propensity reasoning), solicitor-client privilege (Lavallee 2002 SCC 61), informer privilege, voir dire, and Canada Evidence Act.",
  openGraph: {
    title: "Ontario Criminal Evidence Guide 2024: Hearsay, Similar Fact, and Privilege",
    description:
      "Complete guide to Ontario criminal evidence — principled approach to hearsay (Khelawon 2006 SCC 57), similar fact evidence (Handy 2002 SCC 56), solicitor-client privilege, informer privilege, voir dire admissibility hearings, and Canada Evidence Act provisions.",
    url: "https://getatticus.ca/blog/ontario-criminal-evidence",
    siteName: "Atticus",
    type: "article",
  },
  alternates: { canonical: "https://getatticus.ca/blog/ontario-criminal-evidence" },
};

const schemaJson = `{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Ontario Criminal Evidence Guide 2024: Hearsay, Similar Fact Evidence, and Privilege",
  "description": "Ontario criminal evidence: principled approach to hearsay (Khelawon 2006 SCC 57), similar fact evidence (Handy 2002 SCC 56), solicitor-client privilege, informer privilege, and voir dire.",
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
  "url": "https://getatticus.ca/blog/ontario-criminal-evidence"
}`;

const faqSchemaJson = `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the principled approach to hearsay in Ontario criminal law?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The principled approach to hearsay was established by the Supreme Court of Canada in R v Khan [1990] 2 SCR 531 and refined in R v Khelawon, 2006 SCC 57. Hearsay is presumptively inadmissible because the declarant is not present to be tested by cross-examination, but may be admitted where the proponent establishes necessity and threshold reliability. Necessity is established where the declarant is unavailable (dead, incapable, refusing to testify) or where live testimony would be inappropriate. Threshold reliability may be established through circumstantial guarantees of reliability (the circumstances surrounding the making of the statement) or functional equivalents of the oath, presence, and cross-examination that ground admissibility. The trier of fact then assesses ultimate reliability for the purposes of weight."
      }
    },
    {
      "@type": "Question",
      "name": "What is the test for admitting similar fact evidence in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Supreme Court of Canada in R v Handy, 2002 SCC 56 held that similar fact evidence — evidence that the accused acted similarly on other occasions — is presumptively inadmissible because of the risk of propensity reasoning (convicting for character rather than conduct). Similar fact evidence may be admitted where the probative value of the evidence is high enough to outweigh its prejudicial effect. The judge performs a cost-benefit analysis: the probative value is assessed by reference to the degree of similarity between the prior acts and the charged conduct, the proximity in time, the number of prior acts, and whether the prior acts could be the result of coincidence; the prejudicial effect includes the danger of moral prejudice (convicting on character) and reasoning prejudice (confusion and distraction). Evidence may be used as similar fact to establish identity, intent, a common plan or system, or to rebut a defence of accident or innocent association."
      }
    },
    {
      "@type": "Question",
      "name": "What is solicitor-client privilege in Ontario criminal proceedings and when can it be overridden?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Solicitor-client privilege is a fundamental legal principle that protects confidential communications between a client and their lawyer for the purpose of obtaining legal advice. In R v Lavallee, Rackel & Heintz, 2002 SCC 61, the Supreme Court confirmed that solicitor-client privilege is nearly absolute — it can only be overridden in limited circumstances. The privilege belongs to the client, not the lawyer, and can only be waived by the client. Exceptions include: the innocence at stake exception, where the accused can establish a genuine risk of wrongful conviction and the privileged information would establish innocence; and the public safety exception (Smith v Jones [1999] 1 SCR 455), where there is a serious and imminent threat to an identifiable person or group. The crime-fraud exception means privilege does not protect communications in furtherance of a crime or fraud."
      }
    }
  ]
}`;

export default function OntarioCriminalEvidencePage() {
  return (
    <>
      <Script id="ontario-criminal-evidence-schema" type="application/ld+json">
        {schemaJson}
      </Script>
      <Script id="ontario-criminal-evidence-faq-schema" type="application/ld+json">
        {faqSchemaJson}
      </Script>

      <div className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-amber-400 text-slate-900 text-sm font-semibold px-3 py-1 rounded-full">
                Criminal Law
              </span>
              <span className="text-slate-400 text-sm">December 2024 &middot; 13 min read</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Ontario Criminal Evidence Guide 2024: Hearsay, Similar Fact Evidence, and Privilege
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl">
              Principled approach to hearsay (<em>Khelawon</em> 2006 SCC 57: necessity and
              threshold reliability), similar fact evidence (<em>Handy</em> 2002 SCC 56:
              probative value vs prejudicial effect, propensity reasoning), solicitor-client
              privilege (<em>Lavallee</em> 2002 SCC 61), informer privilege, voir dire
              hearings, and <em>Canada Evidence Act</em> provisions in Ontario criminal trials.
            </p>
          </div>
        </section>

        <article className="py-16 px-6">
          <div className="max-w-3xl mx-auto prose prose-slate prose-lg">

            <h2>Overview of Ontario Criminal Evidence Law</h2>
            <p>
              The law of evidence in Ontario criminal proceedings is governed by a combination
              of common law rules, the <em>Canada Evidence Act</em>, R.S.C. 1985, c. C-5,
              and the <em>Canadian Charter of Rights and Freedoms</em>. The Supreme Court
              of Canada has fundamentally reshaped evidence law through the principled approach,
              replacing rigid categorical rules with flexible cost-benefit analyses. The central
              theme is reliability and fairness: evidence is admitted where it is sufficiently
              reliable and its probative value outweighs the risk of prejudice.
            </p>

            <h2>The Hearsay Rule and the Principled Approach</h2>
            <p>
              Hearsay is an out-of-court statement tendered for the truth of its contents.
              The hearsay rule excludes such evidence because the declarant is not available
              to be cross-examined, the statement was not made under oath, and the trier of
              fact cannot assess the declarant&apos;s demeanour.
            </p>
            <p>
              The traditional categorical approach — with fixed exceptions like dying declarations,
              admissions of a party, statements in the course of duty, and res gestae — was
              replaced by the principled approach beginning with <em>R v Khan</em> [1990]
              2 SCR 531, and fully articulated in <em>R v Khelawon</em>, 2006 SCC 57.
            </p>

            <h3>Necessity and Threshold Reliability</h3>
            <p>
              Under the principled approach, hearsay may be admitted where the proponent
              establishes on a balance of probabilities:
            </p>
            <ul>
              <li>
                <strong>Necessity:</strong> The original basis for requiring necessity
                is the unavailability of the declarant — death, illness, incapacity,
                or unwillingness to testify. In <em>R v B (KG)</em> [1993] 1 SCR 740,
                the Supreme Court expanded necessity to include situations where testimony
                by the declarant would not be as reliable as the prior recorded statement
                — a prior inconsistent statement may be admitted for its truth if the
                principled approach requirements are met.
              </li>
              <li>
                <strong>Threshold reliability:</strong> The statement must bear adequate
                indicia of reliability. Reliability can be established through:
                <ul>
                  <li>
                    <em>Circumstantial guarantees of reliability</em> — the circumstances
                    of the making of the statement (the declarant had personal knowledge,
                    was speaking against interest, made the statement close in time to the
                    events, had no motive to fabricate);
                  </li>
                  <li>
                    <em>Corroborating evidence</em> — independent evidence that confirms
                    the truth of the hearsay statement.
                  </li>
                </ul>
              </li>
            </ul>
            <p>
              The ultimate reliability and weight of hearsay admitted under the principled
              approach is assessed by the trier of fact. The trial judge conducts a voir dire
              to assess threshold reliability.
            </p>

            <h3>Established Categorical Exceptions</h3>
            <p>
              The principled approach does not displace the traditional categorical exceptions —
              they are presumptively reliable and necessary because of long experience. Established
              exceptions include:
            </p>
            <ul>
              <li><strong>Admissions of a party:</strong> statements made by the accused are admissible as admissions (an exception to the hearsay rule) where voluntarily made;</li>
              <li><strong>Dying declarations:</strong> statements of present sense impression or belief of impending death;</li>
              <li><strong>Excited utterances:</strong> spontaneous statements made in the course of a startling event;</li>
              <li><strong>Business records:</strong> records made in the ordinary course of business at or near the time of the events.</li>
            </ul>

            <h2>Similar Fact Evidence</h2>
            <p>
              Similar fact evidence — evidence of other discreditable acts by the accused —
              is presumptively inadmissible because of the danger of propensity reasoning:
              the jury may reason from bad character to guilt rather than focusing on the
              specific evidence of the charged offence.
            </p>

            <h3>The Handy Test: Probative Value vs Prejudicial Effect</h3>
            <p>
              In <em>R v Handy</em>, 2002 SCC 56, the Supreme Court set out the analytical
              framework for similar fact evidence. The trial judge must weigh the probative
              value against the prejudicial effect:
            </p>
            <p>
              <strong>Factors increasing probative value:</strong>
            </p>
            <ul>
              <li>High degree of similarity between the prior acts and the charged conduct (the more distinctive or unusual, the higher the probative value);</li>
              <li>Number of prior incidents (greater frequency reduces the likelihood of coincidence);</li>
              <li>Proximity in time between prior acts and the charged offence;</li>
              <li>Whether the prior acts could have been the product of coincidence;</li>
              <li>Whether the accused had the opportunity to commit both sets of acts.</li>
            </ul>
            <p>
              <strong>Prejudicial effects include:</strong>
            </p>
            <ul>
              <li><em>Moral prejudice</em> — the jury may convict on the basis of bad character rather than the evidence;</li>
              <li><em>Reasoning prejudice</em> — confusion, distraction, and mini-trials on collateral matters.</li>
            </ul>
            <p>
              Where admitted, similar fact evidence may be used to establish identity (distinctive
              modus operandi), intent (rebutting a defence of accident or mistake), a common plan
              or system, or knowledge.
            </p>

            <h2>Solicitor-Client Privilege</h2>
            <p>
              Solicitor-client privilege protects confidential communications between a client
              and their lawyer for the purpose of obtaining or giving legal advice. In
              <em>R v Lavallee, Rackel &amp; Heintz</em>, 2002 SCC 61, the Supreme Court
              confirmed that privilege is a fundamental principle of justice and nearly
              absolute — courts will not balance it against other interests in the ordinary
              case.
            </p>
            <p>
              Privilege may be overridden only in the most extraordinary circumstances:
            </p>
            <ul>
              <li>
                <strong>Innocence at stake exception:</strong> Where an accused faces a
                genuine risk of wrongful conviction and the privileged communications would
                establish innocence, the court may override privilege — but only to the
                extent necessary to prove innocence;
              </li>
              <li>
                <strong>Public safety exception</strong> (<em>Smith v Jones</em> [1999]
                1 SCR 455): Where there is a clear, serious, and imminent danger to an
                identifiable person or group, the lawyer may disclose communications to
                prevent the harm;
              </li>
              <li>
                <strong>Crime-fraud exception:</strong> Communications made to obtain
                legal assistance for a crime or fraud are not protected by privilege.
              </li>
            </ul>

            <h2>Informer Privilege</h2>
            <p>
              Informer privilege is an absolute privilege protecting the identity of persons
              who have provided information to the police in confidence. In <em>R v Leipert</em>
              [1997] 1 SCR 281, the Supreme Court held that informer privilege can only be
              overridden where the accused establishes that the informer was a material witness
              to the offence and the identity is necessary to establish innocence. The court
              applies the innocence at stake exception — it will review the information
              in camera to determine if disclosure is necessary.
            </p>

            <h2>Voir Dire</h2>
            <p>
              A voir dire is a trial within a trial conducted in the absence of the jury to
              determine the admissibility of evidence. Common occasions for voir dire include:
            </p>
            <ul>
              <li>Voluntariness of a statement or confession (s.7 Charter and common law confessions rule);</li>
              <li>Admissibility of hearsay under the principled approach;</li>
              <li>Admissibility of similar fact evidence;</li>
              <li>Admissibility of opinion or expert evidence;</li>
              <li>Exclusion of evidence under s.24(2) of the Charter.</li>
            </ul>
            <p>
              On a voir dire on the voluntariness of a statement, the Crown bears the burden
              of proving voluntariness beyond a reasonable doubt — the accused does not have
              to testify in the main trial merely because they testify on the voir dire.
            </p>

            <h2>Practice Points for Ontario Criminal Defence Lawyers</h2>
            <ul>
              <li>
                Challenge hearsay on necessity and threshold reliability — the Crown must
                establish both; the absence of any cross-examination opportunity weighs
                heavily against admission of an out-of-court statement.
              </li>
              <li>
                For similar fact applications, argue low probative value (lack of striking
                similarity, time gaps, other explanations) and high moral prejudice (jury
                instruction is insufficient to cure the danger).
              </li>
              <li>
                Assert solicitor-client privilege immediately when police seek to intercept
                or search communications with the accused&apos;s lawyer — the privilege is
                the accused&apos;s to assert and cannot be waived by the lawyer.
              </li>
              <li>
                In jury trials, request limiting instructions when similar fact or hearsay
                evidence is admitted — the jury must be told the purpose for which the
                evidence may (and may not) be used.
              </li>
              <li>
                Canada Evidence Act provisions: s.16.1 governs competency of witnesses under
                14 years of age; s.30 governs admissibility of business records; s.40
                provides that in criminal cases not covered by the Act, the law of evidence
                of the province applies.
              </li>
            </ul>

          </div>
        </article>

        <section className="py-12 px-6 bg-amber-50 border-t border-amber-100">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Manage Your Criminal Defence Practice with Atticus
            </h2>
            <p className="text-slate-600 mb-6">
              Track hearing deadlines, manage criminal matter files, and run LSO-compliant
              trust accounting — all in one Ontario platform built for criminal defence lawyers.
            </p>
            <Link
              href="/sign-up"
              className="inline-block bg-slate-900 text-white font-semibold px-8 py-4 rounded-lg hover:bg-slate-700 transition-colors"
            >
              Start Free Trial
            </Link>
          </div>
        </section>

        <section className="py-12 px-6 border-t border-slate-100">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-lg font-semibold text-slate-900 mb-6">Related Articles</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { href: "/blog/ontario-criminal-procedure", label: "Ontario Criminal Procedure" },
                { href: "/blog/ontario-charter-remedies", label: "Ontario Charter Remedies" },
                { href: "/blog/ontario-bail-hearing", label: "Ontario Bail Hearings" },
                { href: "/blog/ontario-criminal-sentencing", label: "Ontario Criminal Sentencing" },
                { href: "/blog/ontario-solicitor-client-privilege", label: "Solicitor-Client Privilege" },
                { href: "/ontario-criminal-defence-lawyer", label: "Ontario Criminal Defence Software" },
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
