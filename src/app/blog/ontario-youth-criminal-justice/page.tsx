import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ontario Youth Criminal Justice Act Guide 2024: YCJA, Extrajudicial Measures, and Youth Sentencing",
  description:
    "Ontario youth criminal justice guide: Youth Criminal Justice Act (YCJA) principles, extrajudicial measures and sanctions, youth justice court jurisdiction, detention as last resort, youth sentencing options (CDSO, deferred custody, intensive rehabilitation custody), publication bans, and records.",
  openGraph: {
    title: "Ontario Youth Criminal Justice Act Guide 2024: YCJA, Diversion, and Youth Sentencing",
    description:
      "Complete guide to Ontario youth criminal justice — YCJA principles, extrajudicial measures and sanctions (police warnings, cautions, referrals, Crown cautions), youth court jurisdiction, detention as last resort, youth sentencing (CDSO, intensive rehabilitation custody supervision order), publication bans, and youth records.",
    url: "https://getatticus.ca/blog/ontario-youth-criminal-justice",
    siteName: "Atticus",
    type: "article",
  },
  alternates: { canonical: "https://getatticus.ca/blog/ontario-youth-criminal-justice" },
};

const schemaJson = `{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Ontario Youth Criminal Justice Act Guide 2024: YCJA, Extrajudicial Measures, and Youth Sentencing",
  "description": "Ontario youth criminal justice under the YCJA: principles, extrajudicial measures and sanctions, youth justice court jurisdiction, detention as last resort, youth sentencing options, publication bans, and youth records.",
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
  "url": "https://getatticus.ca/blog/ontario-youth-criminal-justice"
}`;

const faqSchemaJson = `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What are extrajudicial measures under the Youth Criminal Justice Act?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Extrajudicial measures under YCJA Part 1 (ss.4-12) are non-court responses to youth offending designed to divert young persons from the formal justice system. Police officers may take extrajudicial measures including: taking no further action; giving a warning; administering a caution; or making a referral with the young person's consent to a community program or agency. Crown counsel may give a formal Crown caution (s.8). Extrajudicial sanctions (s.10) are more structured diversion programs administered by authorized persons, typically involving community service, restitution, or participation in a program — the young person must accept responsibility for the offence and consent to participate, and statements made during the process are not admissible in subsequent criminal proceedings."
      }
    },
    {
      "@type": "Question",
      "name": "When can a youth be detained before trial under the YCJA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pre-trial detention of a young person is governed by YCJA s.29, which provides that detention must not be used as a substitute for appropriate child protection, mental health, or other social measures. A young person must not be detained unless: (a) an adult in similar circumstances would be detained under Criminal Code s.515; and (b) the court is satisfied that the young person's detention is necessary to ensure their appearance in court, to protect the public, or to maintain public confidence in the justice system. The YCJA reinforces the detention-as-last-resort principle — youth court judges are to consider whether alternatives to detention (release to parents, bail supervision) adequately address the grounds for detention."
      }
    },
    {
      "@type": "Question",
      "name": "What are the main sentencing options available in Ontario youth justice court?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Youth justice court in Ontario may impose the following sentences under YCJA s.42: a reprimand; an absolute discharge; a conditional discharge with probation; a fine (not to exceed $1,000); community service; a payment of compensation or restitution; a prohibition, seizure, or forfeiture order; an intensive support and supervision program (ISSP) order; an attendance centre order; a deferred custody and supervision order (DCSO); a custody and supervision order (CSO) — the equivalent of a custodial sentence, served two-thirds in custody and one-third under community supervision; and an intensive rehabilitative custody and supervision order (IRCS) for serious violent offenders with mental health disorders. An adult sentence under s.64 may be sought by the Crown for youths 14 and older charged with presumptive offences including murder, manslaughter, and aggravated sexual assault."
      }
    }
  ]
}`;

export default function OntarioYouthCriminalJusticePage() {
  return (
    <>
      <Script id="ontario-ycja-schema" type="application/ld+json">
        {schemaJson}
      </Script>
      <Script id="ontario-ycja-faq-schema" type="application/ld+json">
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
              Ontario Youth Criminal Justice Act Guide 2024: YCJA, Extrajudicial Measures, and Youth Sentencing
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl">
              YCJA principles and declaration of principle (s.3), extrajudicial measures
              and sanctions (police warnings, Crown cautions, diversion), youth justice
              court jurisdiction, detention as last resort (s.29), youth sentencing options
              (CDSO, CSO, IRCS), adult sentences (s.64), publication bans, and youth records.
            </p>
          </div>
        </section>

        <article className="py-16 px-6">
          <div className="max-w-3xl mx-auto prose prose-slate prose-lg">

            <h2>Framework: The Youth Criminal Justice Act</h2>
            <p>
              Youth criminal justice in Canada is governed by the{" "}
              <em>Youth Criminal Justice Act</em>, S.C. 2002, c. 1 (YCJA), which replaced
              the <em>Young Offenders Act</em> in 2003. The YCJA applies to persons who are
              12 years of age or older at the time of the alleged offence and have not yet
              reached their 18th birthday (s.2). Children under 12 cannot be charged under
              the YCJA; their conduct is addressed through child welfare and protective
              legislation.
            </p>
            <p>
              The YCJA is federal legislation. Provincial and territorial governments
              administer youth justice services — youth custody facilities, youth probation,
              and extrajudicial sanctions programs — in Ontario through the Ministry of
              Children, Community and Social Services and the Ministry of the Attorney General.
            </p>

            <h2>Declaration of Principle: YCJA Section 3</h2>
            <p>
              The YCJA&apos;s declaration of principle in s.3 sets out the fundamental values
              that govern youth criminal justice:
            </p>
            <ul>
              <li>
                The youth criminal justice system must hold young persons accountable by
                imposing meaningful consequences, but accountability must be proportionate
                to the seriousness of the offence and the degree of the youth&apos;s responsibility.
              </li>
              <li>
                Rehabilitation and reintegration are primary objectives, along with long-term
                public protection.
              </li>
              <li>
                The rights and freedoms of young persons are to be respected, including the
                right to the least possible interference with freedom.
              </li>
              <li>
                Parents and families are to be involved in the process where appropriate.
              </li>
              <li>
                Victims should be treated with courtesy, compassion, and respect.
              </li>
            </ul>

            <h2>Extrajudicial Measures: YCJA Part 1 (Sections 4-12)</h2>
            <p>
              The YCJA strongly favours diversion from the formal court process for less serious
              offences. Section 4 confirms that extrajudicial measures are presumed adequate
              to hold first-time, non-violent young offenders accountable and that police and
              Crown counsel should consider them before proceeding to formal charges.
            </p>

            <h3>Police Extrajudicial Measures (s.6)</h3>
            <p>
              Police officers investigating a young person may, in lieu of laying a charge:
            </p>
            <ul>
              <li>Take no further action;</li>
              <li>Give a warning;</li>
              <li>Administer a formal caution, which is logged but involves no formal sanctions; or</li>
              <li>With the young person&apos;s consent, refer them to a community program or agency that may be of assistance.</li>
            </ul>
            <p>
              Police have broad discretion in choosing among these options. In Ontario, police
              services have established formal youth diversion programs operating under YCJA s.6
              authority.
            </p>

            <h3>Crown Cautions (s.8)</h3>
            <p>
              Crown counsel may administer a formal Crown caution to a young person in lieu
              of proceeding with a charge. The Crown caution is recorded and may be considered
              if the young person re-offends. Crown cautions are generally used where police
              extrajudicial measures have already been tried or are inappropriate given the
              offence.
            </p>

            <h3>Extrajudicial Sanctions (s.10)</h3>
            <p>
              Extrajudicial sanctions (EJS) are more structured diversion programs that may
              be imposed by a designated program administrator (not the court). To participate
              in EJS, the young person must: accept responsibility for the act; consent to
              participate; and be advised of their right to counsel before accepting
              responsibility.
            </p>
            <p>
              An admission by a young person in connection with EJS is not admissible in
              evidence in any civil or criminal proceedings (s.10(4)). EJS programs in Ontario
              may involve community service, restitution to the victim, participation in
              counselling, or other constructive activities.
            </p>

            <h2>Youth Justice Court Jurisdiction</h2>
            <p>
              Youth justice court in Ontario has exclusive jurisdiction over offences allegedly
              committed by young persons (s.14). In Ontario, the Ontario Court of Justice
              (OCJ) serves as the youth justice court. Superior Court of Justice judges may
              conduct YCJA proceedings in certain circumstances, including adult sentence hearings.
            </p>

            <h3>Rights to Counsel</h3>
            <p>
              A young person has the right to retain and instruct counsel without delay upon
              arrest or detention (YCJA s.25; Charter s.10(b)). Section 25(4) creates an
              additional YCJA-specific right: where a young person does not retain counsel,
              the court must adjourn proceedings to give the young person an opportunity to
              obtain counsel, and the court may direct legal aid to be provided.
            </p>
            <p>
              Legal Aid Ontario provides duty counsel and certificates for young persons facing
              serious YCJA charges. Defence counsel should advise young clients to invoke their
              right to counsel at the outset of any police contact.
            </p>

            <h2>Pre-Trial Detention: Section 29</h2>
            <p>
              The YCJA reinforces the detention-as-last-resort principle. Section 29(1) provides
              that pre-trial detention must not be used as a substitute for appropriate child
              protection, mental health, or other social measures. Section 29(2) further provides
              that a youth justice court judge shall not detain a young person in custody prior
              to sentencing unless:
            </p>
            <ol>
              <li>
                An adult charged with the same offence and in the same circumstances would be
                detained under Criminal Code s.515; and
              </li>
              <li>
                The detention is necessary for one of the grounds in s.515(10) — ensuring
                appearance, protection of the public, or maintaining public confidence in
                the administration of justice.
              </li>
            </ol>
            <p>
              If detention is ordered, the young person must be placed in a youth facility,
              not an adult remand centre (s.30).
            </p>

            <h2>Youth Sentencing: Section 42</h2>
            <p>
              The sentencing principles for young persons under YCJA s.38 differ from adult
              sentencing. The youth sentence must be the least restrictive sentence that is
              capable of achieving the purpose of sentencing, which is to hold young persons
              accountable through proportionate sentences promoting rehabilitation and
              reintegration: s.38(1).
            </p>

            <h3>Available Youth Sentences</h3>
            <p>
              Section 42(2) sets out the available youth sentences in increasing order of
              severity:
            </p>
            <ul>
              <li>
                <strong>Reprimand:</strong> Verbal admonition by the court.
              </li>
              <li>
                <strong>Absolute discharge:</strong> No conditions attached; the young person
                is found guilty but discharged without penalty.
              </li>
              <li>
                <strong>Conditional discharge:</strong> Discharge conditional on compliance
                with probation conditions.
              </li>
              <li>
                <strong>Fine:</strong> Maximum $1,000 for any single offence.
              </li>
              <li>
                <strong>Community service:</strong> Up to 240 hours; to be completed within 12 months.
              </li>
              <li>
                <strong>Probation:</strong> Up to two years; conditions may include reporting,
                residence, curfew, and treatment.
              </li>
              <li>
                <strong>Intensive support and supervision program (ISSP) order:</strong>
                A non-custodial sentence with intensive community-based supervision.
              </li>
              <li>
                <strong>Deferred custody and supervision order (DCSO):</strong> An order that
                the young person serve the sentence in the community subject to conditions;
                failure to comply results in the young person serving the remainder in custody.
              </li>
              <li>
                <strong>Custody and supervision order (CSO):</strong> Custodial sentence served
                two-thirds in custody and one-third under conditional supervision in the community.
              </li>
              <li>
                <strong>Intensive rehabilitative custody and supervision order (IRCS):</strong>
                Available only where the young person is convicted of a presumptive offence
                or a serious violent offence and suffers from a mental illness or disorder,
                psychological disorder, or emotional disturbance. Intensive individualized
                treatment in a specialized custody facility.
              </li>
            </ul>

            <h2>Adult Sentences: Section 64</h2>
            <p>
              The Crown may apply for an adult sentence where a young person is 14 years of
              age or older at the time of the offence and is convicted of an offence for which
              an adult would be liable to imprisonment for more than two years (s.64(1)).
            </p>
            <p>
              If the court imposes an adult sentence, the young person loses the YCJA
              publication ban protections (s.75) and the youth record regime (Part 6) ceases
              to apply. An adult sentence is a significant step and is reserved for the most
              serious youth offenders — typically those convicted of murder, manslaughter,
              aggravated assault, or major drug trafficking.
            </p>

            <h2>Publication Bans: Section 110</h2>
            <p>
              Section 110 of the YCJA establishes a presumptive publication ban on identifying
              information about young persons charged with or found guilty of offences. The
              publication ban may be lifted by the court in limited circumstances, including
              where the young person has received an adult sentence or where the young person
              is subject to a youth sentence and has been convicted of a violent offence and
              the information is necessary to protect the public (s.110(4)).
            </p>

            <h2>Youth Records: Part 6</h2>
            <p>
              Youth records are subject to strict access restrictions and automatic expiry
              under YCJA Part 6 (ss.114-129). After a period of time following completion
              of the sentence (the &quot;record suspension&quot; period, which varies from 2 years for
              summary convictions to 5 years for indictable offences), youth records are
              sealed and inaccessible. Youth records cannot be used to establish prior
              criminal record for adult sentencing purposes once sealed.
            </p>

            <h2>Practice Points for Ontario Youth Criminal Defence Lawyers</h2>
            <ul>
              <li>
                Raise extrajudicial measures at the earliest opportunity — the YCJA creates
                a presumption that EJM are adequate for first-time, non-violent youth;
                Crown counsel should be invited to consider EJS before proceeding to trial.
              </li>
              <li>
                Always advise young clients to invoke the right to counsel at the outset
                of any police contact; statements made before consulting counsel are
                frequently challenged and may be excluded.
              </li>
              <li>
                Pre-sentence reports for youth carry significant weight; ensure the report
                accurately reflects the young person&apos;s background, family circumstances,
                and rehabilitative potential.
              </li>
              <li>
                For Indigenous youth, Gladue principles apply — prepare a Gladue report
                or ensure the pre-sentence report addresses the systemic factors under
                <em>Ipeelee</em>.
              </li>
              <li>
                Monitor the youth record retention periods carefully — adult criminal record
                checks will not disclose sealed youth records, but the young person must
                understand that the record exists until the sealing period expires.
              </li>
            </ul>

          </div>
        </article>

        <section className="py-12 px-6 bg-amber-50 border-t border-amber-100">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Manage Your Youth Criminal Defence Practice with Atticus
            </h2>
            <p className="text-slate-600 mb-6">
              Track youth court deadlines, manage YCJA matters, monitor publication ban
              requirements, and run LSO-compliant trust accounting — all in one Ontario platform.
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
                { href: "/blog/ontario-sentencing", label: "Ontario Sentencing" },
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
