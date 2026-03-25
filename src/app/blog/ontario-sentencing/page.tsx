import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ontario Criminal Sentencing Guide 2024: Section 718, Proportionality, Gladue, and Conditional Sentences",
  description:
    "Ontario criminal sentencing under Criminal Code ss.718-718.2: proportionality principle, sentencing objectives, aggravating and mitigating factors, Gladue principles for Indigenous offenders, conditional sentence orders (s.742.1), pre-sentence reports, credit for pre-trial custody, and victim surcharge.",
  openGraph: {
    title: "Ontario Criminal Sentencing Guide 2024: s.718, Gladue, and Conditional Sentences",
    description:
      "Complete guide to Ontario criminal sentencing — s.718 objectives, proportionality, Gladue principles for Indigenous offenders, conditional sentences (s.742.1), pre-sentence reports, Summers credit for pre-trial custody, and victim surcharge.",
    url: "https://getatticus.ca/blog/ontario-sentencing",
    siteName: "Atticus",
    type: "article",
  },
  alternates: { canonical: "https://getatticus.ca/blog/ontario-sentencing" },
};

const schemaJson = `{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Ontario Criminal Sentencing Guide 2024: Section 718, Proportionality, Gladue, and Conditional Sentences",
  "description": "Ontario criminal sentencing under Criminal Code ss.718-718.2: proportionality principle, sentencing objectives, aggravating and mitigating factors, Gladue principles for Indigenous offenders, conditional sentence orders (s.742.1), pre-sentence reports, credit for pre-trial custody, and victim surcharge.",
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
  "url": "https://getatticus.ca/blog/ontario-sentencing"
}`;

const faqSchemaJson = `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the proportionality principle in Canadian criminal sentencing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The proportionality principle in Criminal Code s.718.1 requires that a sentence must be proportionate to the gravity of the offence and the degree of responsibility of the offender. It is the fundamental principle of sentencing in Canada. The Supreme Court in R. v. Lacasse, 2015 SCC 64 confirmed that proportionality is the overarching principle and that other sentencing objectives must yield to it. Proportionality looks at both the harm caused and the offender's moral blameworthiness — a less culpable offender who causes serious harm may receive a lower sentence than the offence gravity alone would suggest."
      }
    },
    {
      "@type": "Question",
      "name": "When is a conditional sentence order available in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A conditional sentence order (CSO) under Criminal Code s.742.1 is available where: the offence does not carry a minimum term of imprisonment; the court imposes a sentence of imprisonment of less than two years; and the court is satisfied that serving the sentence in the community would not endanger the safety of the community and would be consistent with the fundamental purpose and principles of sentencing. Following Bill C-5 (S.C. 2022, c. 15), the list of offences excluded from CSO eligibility was significantly narrowed — serious personal injury offences involving bodily harm, terrorism offences, and organized crime offences remain excluded, but many drug and property offences were removed from the exclusion list."
      }
    },
    {
      "@type": "Question",
      "name": "What are Gladue principles and when do they apply?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Gladue principles derive from R. v. Gladue, [1999] 1 SCR 688 and R. v. Ipeelee, 2012 SCC 13. They require sentencing judges to consider the unique systemic and background factors that may have contributed to an Indigenous offender's conduct before the court, and to consider sentencing procedures and sanctions that may be appropriate in light of the offender's heritage. Gladue principles apply to all Indigenous accused — First Nations, Métis, and Inuit — at every sentencing, including for serious offences. The principles apply even when incarceration is the only appropriate sentence: the judge must still consider how Gladue factors affect the length and conditions of imprisonment. A Gladue report, prepared by a trained Indigenous community worker, provides the court with systemic background information."
      }
    }
  ]
}`;

export default function OntarioSentencingPage() {
  return (
    <>
      <Script id="ontario-sentencing-schema" type="application/ld+json">
        {schemaJson}
      </Script>
      <Script id="ontario-sentencing-faq-schema" type="application/ld+json">
        {faqSchemaJson}
      </Script>

      <div className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-amber-400 text-slate-900 text-sm font-semibold px-3 py-1 rounded-full">
                Criminal Law
              </span>
              <span className="text-slate-400 text-sm">December 2024 &middot; 14 min read</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Ontario Criminal Sentencing Guide 2024: Section 718, Proportionality, Gladue, and Conditional Sentences
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl">
              Criminal Code ss.718-718.2 sentencing objectives and proportionality,
              aggravating and mitigating factors, Gladue principles for Indigenous offenders,
              conditional sentence orders (s.742.1), pre-sentence reports, credit for
              pre-trial custody (Summers), and victim surcharge.
            </p>
          </div>
        </section>

        <article className="py-16 px-6">
          <div className="max-w-3xl mx-auto prose prose-slate prose-lg">

            <h2>The Purpose of Sentencing: Criminal Code Section 718</h2>
            <p>
              The fundamental purpose of sentencing in Canada is set out in Criminal Code s.718:
              to protect society and to contribute, along with crime prevention initiatives, to
              respect for the law and the maintenance of a just, peaceful, and safe society by
              imposing just sanctions that have one or more of the following objectives:
            </p>
            <ul>
              <li>(a) to denounce unlawful conduct and the harm done to victims or to the community;</li>
              <li>(b) to deter the offender and other persons from committing offences;</li>
              <li>(c) to separate offenders from society, where necessary;</li>
              <li>(d) to assist in rehabilitating offenders;</li>
              <li>(e) to provide reparations for harm done to victims or to the community;</li>
              <li>(f) to promote a sense of responsibility in offenders, and acknowledgment of the harm done to victims and to the community.</li>
            </ul>
            <p>
              No single objective automatically trumps the others. The sentencing judge must
              weigh all applicable objectives in light of the specific offence and offender.
              In serious violent cases, denunciation and deterrence will typically dominate.
              For non-violent first offenders, rehabilitation may be the primary objective.
            </p>

            <h2>The Fundamental Principle: Proportionality (Section 718.1)</h2>
            <p>
              Section 718.1 of the Criminal Code establishes the fundamental principle of
              sentencing: a sentence must be proportionate to the gravity of the offence and
              the degree of responsibility of the offender.
            </p>
            <p>
              The Supreme Court of Canada in <em>R. v. Lacasse</em>, 2015 SCC 64 confirmed that
              proportionality is the overarching principle that governs the entire sentencing
              analysis. All other objectives in s.718 and the additional principles in s.718.2
              must operate within the bounds of proportionality. A sentence may not be increased
              beyond what is proportionate simply to achieve deterrence or denunciation.
            </p>
            <p>
              Proportionality has two dimensions: (1) the gravity of the offence — measured
              by the harm caused, the maximum penalty, and the circumstances of commission;
              and (2) the degree of responsibility of the offender — measured by moral
              blameworthiness, including intention, motive, and personal circumstances.
            </p>

            <h2>Other Sentencing Principles: Section 718.2</h2>
            <p>
              Section 718.2 establishes additional sentencing principles:
            </p>

            <h3>Aggravating and Mitigating Factors (s.718.2(a))</h3>
            <p>
              Section 718.2(a) requires a court to take into account aggravating and mitigating
              factors relating to the offence or the offender. Statutory aggravating factors
              listed in s.718.2(a)(i)-(viii) include:
            </p>
            <ul>
              <li>Evidence that the offence was motivated by bias, prejudice, or hate based on listed grounds (hate crimes);</li>
              <li>Evidence that the offender abused a position of trust or authority;</li>
              <li>Evidence that the offence had a significant impact on the victim due to age, disability, or other factors;</li>
              <li>Evidence that the offence was committed for the benefit of, at the direction of, or in association with a criminal organization;</li>
              <li>Evidence that the offence constituted terrorist activity;</li>
              <li>Offences against intimate partners or family members (increased weight under 2018 amendments).</li>
            </ul>
            <p>
              Common mitigating factors in Ontario sentencing include: guilty plea (especially
              early plea demonstrating remorse); prior clean record; youthful age; employment
              and community ties; expression of remorse; substance abuse history; mental health
              issues; and cooperation with police.
            </p>

            <h3>Parity (s.718.2(b))</h3>
            <p>
              A sentence should be similar to sentences imposed on similar offenders for similar
              offences committed in similar circumstances. Parity is particularly important in
              co-accused sentencings, where sentencing judges must explain any significant
              disparity between co-accused who played comparable roles.
            </p>

            <h3>Totality (s.718.2(c))</h3>
            <p>
              Where consecutive sentences are imposed for multiple offences, the combined
              sentence must not be unduly long or harsh. The totality principle requires
              the sentencing judge to step back and consider the overall effect of all the
              sentences imposed.
            </p>

            <h3>Restraint (s.718.2(d)-(e))</h3>
            <p>
              Section 718.2(d) directs courts to consider all available sanctions other than
              imprisonment that are reasonable in the circumstances. Section 718.2(e) directs
              that all available sanctions other than imprisonment are to be considered for
              all offenders, with particular attention to the circumstances of Aboriginal offenders.
            </p>

            <h2>Gladue Principles: Indigenous Offenders</h2>
            <p>
              The Supreme Court of Canada in <em>R. v. Gladue</em>, [1999] 1 SCR 688 gave
              content to s.718.2(e) and established a framework for sentencing Indigenous
              offenders. The Court in <em>R. v. Ipeelee</em>, 2012 SCC 13 reaffirmed and
              strengthened the Gladue framework.
            </p>

            <h3>The Two-Part Gladue Analysis</h3>
            <p>
              At sentencing of an Indigenous offender, the court must:
            </p>
            <ol>
              <li>
                <strong>Consider systemic and background factors</strong> that may have
                played a role in bringing the offender before the court — including the
                inter-generational effects of residential schools, family disruption, loss
                of language and culture, substance abuse, and over-representation of
                Indigenous people in the criminal justice system.
              </li>
              <li>
                <strong>Consider sentencing procedures and sanctions different from those
                of non-Indigenous offenders</strong>, including restorative justice measures,
                community-based sanctions, and culturally appropriate programming.
              </li>
            </ol>
            <p>
              Gladue applies to all Indigenous people — First Nations, Métis, and Inuit —
              regardless of whether they live on-reserve or in urban settings. It applies
              at every sentencing, including for serious violent offences: the Supreme Court
              in <em>Ipeelee</em> rejected the proposition that Gladue does not apply
              above a certain threshold of offence seriousness.
            </p>

            <h3>Gladue Reports</h3>
            <p>
              A Gladue report is a specialized pre-sentence report prepared by a trained
              Indigenous community worker or Gladue writer. It documents the offender&apos;s
              personal, family, and community history, including the impact of systemic
              factors, and identifies culturally appropriate sentencing options. Gladue
              reports are distinct from standard pre-sentence reports (PSRs) and require
              considerably more extensive interviews and community consultation.
            </p>
            <p>
              In Ontario, Gladue writers are available through Legal Aid Ontario and
              Indigenous court worker programs at Ontario Court of Justice locations.
              Defence counsel should request a Gladue report for any Indigenous client
              facing a custodial sentence.
            </p>

            <h2>Pre-Sentence Reports</h2>
            <p>
              A pre-sentence report (PSR) under Criminal Code s.721 is prepared by a
              probation officer and provides the court with information about the offender&apos;s
              background, family circumstances, employment history, attitude toward the offence,
              and suitability for probation or other community sanctions.
            </p>
            <p>
              Defence counsel may request a PSR where it will provide helpful context.
              However, a PSR that reveals an offender&apos;s lack of remorse, criminal associates,
              or substance abuse problems can be harmful. Counsel should discuss the
              potential benefits and risks with the client before requesting one.
            </p>

            <h2>Conditional Sentence Orders: Section 742.1</h2>
            <p>
              A conditional sentence order (CSO) under s.742.1 allows an offender to serve
              a sentence of imprisonment of less than two years in the community, subject to
              conditions. The CSO provisions were significantly amended by Bill C-5
              (S.C. 2022, c. 15), which came into force on November 17, 2022.
            </p>

            <h3>Eligibility Requirements</h3>
            <p>
              A CSO is available where:
            </p>
            <ol>
              <li>The offence does not have a minimum term of imprisonment;</li>
              <li>The court imposes a sentence of imprisonment of less than two years;</li>
              <li>The court is satisfied that serving the sentence in the community would not endanger the safety of the community; and</li>
              <li>The court is satisfied that serving the sentence in the community would be consistent with the fundamental purpose and principles of sentencing in ss.718-718.2.</li>
            </ol>

            <h3>Post-Bill C-5 Exclusions</h3>
            <p>
              Prior to Bill C-5, numerous offences were expressly excluded from CSO
              eligibility. Bill C-5 significantly narrowed the exclusion list. Currently
              excluded are: serious personal injury offences (as defined in s.752) involving
              the use or attempted use of violence against another person or creating a
              substantial likelihood of causing serious bodily harm; terrorism offences;
              criminal organization offences prosecuted by indictment with maximum of ten
              years or more; and offences under s.467.11 (participating in activities of
              criminal organization).
            </p>

            <h3>Conditions</h3>
            <p>
              A CSO includes compulsory conditions (remain in Canada, report to a supervisor,
              keep the peace and be of good behaviour) and optional conditions tailored to
              the offender (house arrest, curfew, treatment, abstinence from alcohol or drugs,
              community service, no-contact orders). Breach of a condition may result in
              suspension and a hearing before the court to determine whether the balance
              of the sentence should be served in custody.
            </p>

            <h2>Credit for Pre-Trial Custody: Section 719(3)</h2>
            <p>
              Section 719(3) of the Criminal Code directs the sentencing court to take into
              account any time spent in custody between arrest and sentencing. The Supreme
              Court of Canada in <em>R. v. Summers</em>, 2014 SCC 26 confirmed that enhanced
              credit of 1.5:1 for pre-trial custody is appropriate where the circumstances
              justify it — typically where the offender was detained and ineligible for
              remission while on remand.
            </p>
            <p>
              Enhanced credit at 1.5:1 is not available where the offender was detained
              primarily due to a prior criminal record or was a breach of bail and the
              circumstances do not otherwise justify it: Criminal Code s.719(3.1).
              The standard credit rate is 1:1 where enhanced credit is not warranted.
            </p>
            <p>
              Defence counsel must address credit for pre-trial custody at sentencing and
              ensure an accurate count of days in custody is placed before the court.
              The Crown and defence should agree on the count where possible.
            </p>

            <h2>Victim Surcharge: Section 737</h2>
            <p>
              Section 737 of the Criminal Code requires the court to impose a victim surcharge
              on every offender convicted or discharged of an offence. The surcharge is 30% of
              any fine imposed, or — where no fine is imposed — $100 per summary conviction
              offence and $200 per indictable offence.
            </p>
            <p>
              Following the Supreme Court&apos;s decision in <em>R. v. Boudreault</em>, 2018 SCC 58,
              which struck down the mandatory victim surcharge as cruel and unusual treatment
              contrary to Charter s.12, Parliament amended s.737 to permit courts to waive the
              surcharge where payment would cause the offender undue hardship.
            </p>

            <h2>Practice Points for Ontario Criminal Defence Lawyers</h2>
            <ul>
              <li>
                File a Gladue report for every Indigenous client facing custody — do not
                rely on a standard PSR to capture the systemic and background information
                required by <em>Ipeelee</em>.
              </li>
              <li>
                Address credit for pre-trial custody at the outset of the sentencing
                submissions and ensure the record reflects the accurate count.
              </li>
              <li>
                Following Bill C-5, assess CSO eligibility for all clients sentenced
                to less than two years — many previously excluded offences are now eligible.
              </li>
              <li>
                Where the Crown is seeking significant deterrence weight, make
                proportionality arguments — <em>Lacasse</em> confirms proportionality
                is the overarching principle that caps the sentence.
              </li>
              <li>
                For young offenders or first offenders in minor cases, explore absolute
                and conditional discharges (s.730) to avoid a criminal record where
                it would not be contrary to the public interest.
              </li>
              <li>
                Adduce character evidence — letters from employers, family, and community
                members are admissible at sentencing under Criminal Code s.723(3) and can
                meaningfully reduce the sentence.
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
              Track limitation periods, manage remand matters, monitor sentencing hearing deadlines,
              and run LSO-compliant trust accounting — all in one Ontario platform.
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
                { href: "/blog/ontario-criminal-bail", label: "Ontario Criminal Bail" },
                { href: "/blog/ontario-drug-offences", label: "Ontario Drug Offences" },
                { href: "/blog/ontario-constitutional-law", label: "Ontario Constitutional Law" },
                { href: "/ontario-criminal-defence-lawyer", label: "Ontario Criminal Defence Lawyer Software" },
                { href: "/ai-for-lawyers", label: "AI for Ontario Lawyers" },
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
