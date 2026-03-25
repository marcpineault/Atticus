import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ontario Administrative Tribunals Guide 2024 | Tribunal Practice for Lawyers",
  description:
    "A practical guide to Ontario administrative tribunals: jurisdiction and procedure at the HRTO, LTB, ARO, FSRA, AGCO, Consent and Capacity Board, OLT, and major Ontario tribunals — procedural rules, evidence, standard of review, and Vavilov.",
  openGraph: {
    title: "Ontario Administrative Tribunals Guide 2024 | Tribunal Practice for Lawyers",
    description:
      "Ontario administrative tribunal practice: jurisdiction, procedural rights, fairness obligations, SPPA application, and Vavilov standard of review. A guide for Ontario administrative lawyers.",
    url: "https://getatticus.ca/blog/ontario-administrative-tribunal",
    siteName: "Atticus",
    type: "article",
  },
};

const articleSchema = `{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Ontario Administrative Tribunals: Procedure, Fairness, and Judicial Review",
  "description": "Ontario administrative tribunal procedure: SPPA, procedural fairness, the HRTO, LTB, OLT, and other major tribunals, and Vavilov standard of review.",
  "author": {
    "@type": "Organization",
    "name": "Atticus"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Atticus",
    "url": "https://getatticus.ca"
  },
  "url": "https://getatticus.ca/blog/ontario-administrative-tribunal",
  "mainEntityOfPage": "https://getatticus.ca/blog/ontario-administrative-tribunal"
}`;

const faqSchema = `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the Statutory Powers Procedure Act (SPPA) in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Statutory Powers Procedure Act, RSO 1990, c S.22 (SPPA) sets minimum procedural standards for Ontario tribunals and boards that hold hearings. It applies to any statutory proceeding where a decision may adversely affect a person's legal rights or interests and the proceeding is required by statute to be conducted as a hearing. The SPPA provides: the right to notice, the right to be represented by counsel, the right to call and cross-examine witnesses, the right to make representations, and the right to written reasons for decision. Individual tribunals may have more extensive procedural rules that supplement or modify the SPPA."
      }
    },
    {
      "@type": "Question",
      "name": "What is the standard of review for Ontario tribunal decisions?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Following Canada (Minister of Citizenship and Immigration) v Vavilov [2019] 4 SCR 653, the presumptive standard of review for tribunal decisions on questions of law, fact, and mixed fact and law is reasonableness. A reasonableness review asks whether the decision is transparent, intelligible, and justified — not merely whether the reviewing court would have decided differently. Correctness applies to constitutional questions, questions of general law of central importance to the legal system, questions regarding the jurisdictional boundaries between competing adjudicative bodies, and some questions of procedural fairness."
      }
    },
    {
      "@type": "Question",
      "name": "What are the main Ontario administrative tribunals?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Major Ontario administrative tribunals include: the Human Rights Tribunal of Ontario (HRTO) — discrimination and harassment under the Human Rights Code; the Landlord and Tenant Board (LTB) — residential tenancies under the Residential Tenancies Act; the Ontario Land Tribunal (OLT) — planning, conservation, and land use appeals; the Labour Relations Board (OLRB) — labour relations and employment; the Workplace Safety and Insurance Appeals Tribunal (WSIAT); the Consent and Capacity Board (CCB) — mental health and capacity; the Licence Appeal Tribunal (LAT) — insurance accident benefits; the Financial Services Regulatory Authority (FSRA) and Financial Services Tribunal; and the Assessment Review Board (ARB) — property assessment appeals."
      }
    },
    {
      "@type": "Question",
      "name": "What is procedural fairness in Ontario administrative proceedings?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Procedural fairness (natural justice) requires that administrative decision-makers follow fair procedures before making decisions that adversely affect individuals. The content of procedural fairness is contextual and varies with the stakes, the nature of the decision, and any legitimate expectations created by the decision-maker. At minimum, procedural fairness requires: adequate notice of the case to be met, an opportunity to respond, and an unbiased decision-maker. Baker v Canada (1999) established the contextual multi-factor test for determining the content of procedural fairness obligations."
      }
    },
    {
      "@type": "Question",
      "name": "How do you bring a judicial review of an Ontario tribunal decision?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Judicial review of Ontario tribunal decisions is brought in the Ontario Divisional Court (for most provincial tribunals) under Rule 68 of the Rules of Civil Procedure, or in the Superior Court of Justice. The applicant must obtain leave (permission) for many judicial review applications. The application must be brought promptly — typically within 30 days of receiving the tribunal decision (though courts retain discretion to extend). Judicial review is available on grounds of: unreasonableness, errors of jurisdiction, procedural unfairness, and breach of natural justice."
      }
    }
  ]
}`;

export default function OntarioAdministrativeTribunalPage() {
  return (
    <>
      <Script id="admin-tribunal-article-schema" type="application/ld+json">
        {articleSchema}
      </Script>
      <Script id="admin-tribunal-faq-schema" type="application/ld+json">
        {faqSchema}
      </Script>

      <div className="min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <div className="mb-8">
            <Link
              href="/blog"
              className="text-sm text-amber-700 hover:text-amber-900 font-medium"
            >
              ← Back to Blog
            </Link>
          </div>

          <header className="mb-12">
            <div className="inline-block bg-amber-100 text-amber-800 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              Administrative Law
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-4 leading-tight">
              Ontario Administrative Tribunals: Procedure, Fairness, and Judicial Review
            </h1>
            <p className="text-lg text-slate-600">
              Ontario&apos;s administrative tribunals handle an enormous volume
              of disputes — from landlord-tenant conflicts and human rights
              complaints to pension regulation and planning appeals. For Ontario
              lawyers practising in administrative law, understanding the
              procedural framework (SPPA), fairness obligations, key tribunal
              rules, and the Vavilov standard of review is essential.
            </p>
          </header>

          <article className="prose prose-slate max-w-none">
            <h2>The Administrative Justice System in Ontario</h2>
            <p>
              Administrative tribunals are creatures of statute — they exist
              only because a legislature created them, and they exercise only
              the jurisdiction the enabling statute confers. Ontario has over
              100 adjudicative tribunals and boards, covering virtually every
              area of regulated activity: employment, housing, land use,
              health, professional discipline, financial services, and more.
            </p>
            <p>
              Many Ontario tribunals are clustered under Tribunals Ontario —
              an administrative agency created in 2021 that provides shared
              services and coordinates the operations of 13 adjudicative
              tribunals, including the HRTO, LTB, LAT, ARB, and others.
            </p>

            <h2>The SPPA: Minimum Procedural Standards</h2>
            <p>
              The <em>Statutory Powers Procedure Act</em>, RSO 1990, c S.22
              applies to any statutory proceeding that is required to be
              conducted as a &quot;hearing&quot; and may by its decision
              adversely affect the legal rights of any party (s. 3(1)).
            </p>
            <p>
              The SPPA provides minimum procedural entitlements:
            </p>
            <ul>
              <li>
                <strong>Notice</strong> (s. 6): parties must receive reasonable
                notice of a hearing, including the time, place, and subject
                matter
              </li>
              <li>
                <strong>Representation</strong> (s. 10): a party may be
                represented by counsel or an agent authorized under the
                Law Society Act
              </li>
              <li>
                <strong>Evidence</strong> (s. 15): a tribunal may receive
                evidence not admissible in court, but must give reasons for
                admitting or excluding evidence
              </li>
              <li>
                <strong>Cross-examination</strong> (s. 10.1): parties have
                the right to cross-examine witnesses at an oral hearing
              </li>
              <li>
                <strong>Written reasons</strong> (s. 17): a tribunal must
                give written reasons for its decision (unless the parties
                consent to waiver)
              </li>
              <li>
                <strong>Conflict of interest</strong> (s. 17.1): members
                must not participate in decisions where they have a conflict
                of interest
              </li>
            </ul>
            <p>
              Individual tribunal enabling statutes and rules may provide
              more extensive (but not less) procedural protection than the SPPA.
            </p>

            <h2>Procedural Fairness</h2>
            <p>
              Beyond the SPPA, administrative decision-makers owe common law
              duties of procedural fairness (natural justice). The content of
              procedural fairness is contextual and calibrated to the circumstances —
              determined by applying the multi-factor test from{" "}
              <em>Baker v Canada (Minister of Citizenship and Immigration)</em>{" "}
              [1999] 2 SCR 817:
            </p>
            <ul>
              <li>
                The nature of the decision being made and its proximity to
                a judicial decision
              </li>
              <li>
                The nature of the statutory scheme and the terms of the
                statute pursuant to which the body operates
              </li>
              <li>
                The importance of the decision to the individual affected
                (the more significant the impact, the more stringent the
                fairness obligation)
              </li>
              <li>
                Legitimate expectations — where a decision-maker has created
                expectations through promises or established practices, fairness
                requires those expectations be honoured
              </li>
              <li>
                The choices made by the agency itself (e.g., extensive
                procedural rules signal a higher procedural standard)
              </li>
            </ul>

            <h2>Key Ontario Administrative Tribunals</h2>

            <h3>Human Rights Tribunal of Ontario (HRTO)</h3>
            <p>
              The HRTO has exclusive jurisdiction to hear complaints under the
              Ontario Human Rights Code — discrimination in employment,
              housing, services, and contracts on protected grounds (race,
              sex, disability, age, sexual orientation, etc.). Applications
              must be filed within one year of the last alleged discriminatory
              act. The HRTO conducts mediations and hearings; it may order
              remedies including reinstatement, lost wages, damages for injury
              to dignity, and public interest remedies.
            </p>

            <h3>Landlord and Tenant Board (LTB)</h3>
            <p>
              The LTB adjudicates disputes under the Residential Tenancies
              Act, 2006 — evictions, rent arrears, maintenance complaints,
              illegal entry, and above-guideline rent increases. The LTB has
              faced severe backlogs in recent years; Ontario introduced
              amendments and additional adjudicators to address delays. Hearings
              are conducted on a hearing day block system (many files on the
              same day) or as individual hearings for complex cases.
            </p>

            <h3>Ontario Land Tribunal (OLT)</h3>
            <p>
              The OLT hears appeals of municipal planning decisions (OPAs,
              zoning amendments, minor variances, consents, subdivisions),
              conservation authority permits, environmental review matters,
              and development charge disputes. OLT proceedings are de novo —
              the Tribunal hears fresh evidence and substitutes its own
              planning judgment. Bill 23 significantly restricted third-party
              appeal rights before the OLT.
            </p>

            <h3>Licence Appeal Tribunal (LAT)</h3>
            <p>
              The LAT hears disputes under the Insurance Act, including
              accident benefits (SABS) disputes between injured persons and
              their insurers for statutory accident benefits following an
              automobile accident. The LAT also hears appeals of licence
              denials and revocations under various provincial statutes.
              SABS disputes were moved to the LAT from the Financial Services
              Commission of Ontario (FSCO) in 2016.
            </p>

            <h3>Ontario Labour Relations Board (OLRB)</h3>
            <p>
              The OLRB administers the Labour Relations Act and various other
              employment statutes. It certifies trade unions, investigates
              unfair labour practice complaints, adjudicates first contract
              arbitration applications, and hears reprisal complaints under
              the OHSA.
            </p>

            <h3>Assessment Review Board (ARB)</h3>
            <p>
              The ARB hears appeals of property assessments made by the
              Municipal Property Assessment Corporation (MPAC). Property owners
              who disagree with their MPAC assessment may file a Request for
              Reconsideration with MPAC; if unresolved, an appeal may be
              brought to the ARB.
            </p>

            <h2>Standard of Review: Vavilov</h2>
            <p>
              <em>Canada (Minister of Citizenship and Immigration) v Vavilov</em>{" "}
              [2019] 4 SCR 653 fundamentally restructured the Canadian standard
              of review framework. The Supreme Court established:
            </p>
            <ul>
              <li>
                <strong>Presumption of reasonableness</strong>: on all
                questions within a tribunal&apos;s jurisdiction — law, fact,
                and mixed fact and law — the reviewing court applies a
                reasonableness standard unless there is a reason to depart
                from it
              </li>
              <li>
                <strong>Correctness applies to</strong>: constitutional
                questions, questions of central importance to the legal system
                as a whole, questions regarding the jurisdictional boundaries
                between two or more adjudicative bodies, and some questions
                of procedural fairness
              </li>
            </ul>
            <p>
              A reasonable decision is one that is &quot;based on an internally
              coherent and rational chain of analysis&quot; and is &quot;justified
              in relation to the facts and law that constrain the decision-maker.&quot;
              The reviewing court does not ask what decision it would have made —
              it asks whether the tribunal&apos;s decision falls within a range
              of reasonable outcomes.
            </p>

            <h2>Judicial Review of Ontario Tribunal Decisions</h2>
            <p>
              Judicial review of Ontario tribunal decisions proceeds in the
              Divisional Court (for most provincial tribunals) or the
              Superior Court of Justice (for tribunals specifically excluded
              from Divisional Court jurisdiction). Key procedural requirements:
            </p>
            <ul>
              <li>
                <strong>Timeliness</strong>: the application must be brought
                promptly — typically within 30 days (though extensions are
                discretionary)
              </li>
              <li>
                <strong>Exhaustion of statutory appeals</strong>: if the
                enabling statute provides a statutory appeal route, the
                applicant must generally exhaust that route before seeking
                judicial review
              </li>
              <li>
                <strong>Record</strong>: the reviewing court reviews the
                tribunal&apos;s record — it does not hear fresh evidence
                (except on procedural fairness issues)
              </li>
              <li>
                <strong>Remedies</strong>: the Divisional Court may quash
                the decision, remit the matter to the tribunal for
                reconsideration, or (rarely) substitute its own decision
              </li>
            </ul>

            <h2>How Atticus Helps Ontario Administrative Lawyers</h2>
            <p>
              Administrative tribunal files involve strict limitation periods
              (HRTO 1-year, LAT SABS disputes 2-year, judicial review 30 days),
              complex procedural rules, and multiple-party proceedings. Atticus
              supports Ontario administrative lawyers with:
            </p>
            <ul>
              <li>
                <strong>Deadline tracking</strong> — AI extracts tribunal
                filing deadlines, hearing dates, and judicial review timelines
                from orders and correspondence
              </li>
              <li>
                <strong>Document analysis</strong> — AI reviews tribunal
                decisions, hearing materials, and regulatory correspondence
                to surface key findings and outstanding obligations
              </li>
              <li>
                <strong>Matter management</strong> — track tribunal hearing
                stages, mediation outcomes, and judicial review milestones
              </li>
              <li>
                <strong>LSO-compliant trust accounting</strong> — manage
                retainers for administrative tribunal and judicial review files
              </li>
            </ul>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mt-10">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Ontario-Built Practice Management for Administrative Lawyers
              </h3>
              <p className="text-slate-700 mb-4 text-sm">
                Atticus helps Ontario administrative lawyers manage tribunal
                deadlines, document analysis, and client files — with
                LSO-compliant trust accounting built in.
                $149 CAD per lawyer per month.
              </p>
              <Link
                href="/sign-up"
                className="inline-block bg-slate-900 text-white font-semibold px-6 py-3 rounded-lg hover:bg-slate-700 transition-colors text-sm"
              >
                Start Free Trial
              </Link>
            </div>
          </article>

          <div className="mt-12 pt-8 border-t border-slate-100">
            <h3 className="text-sm font-semibold text-slate-900 mb-4">
              Related Resources
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                {
                  href: "/blog/ontario-administrative-law",
                  label: "Ontario Administrative Law",
                },
                {
                  href: "/blog/ontario-judicial-review",
                  label: "Ontario Judicial Review",
                },
                {
                  href: "/blog/ontario-human-rights-tribunal",
                  label: "Ontario Human Rights Tribunal",
                },
                {
                  href: "/blog/ontario-civil-procedure",
                  label: "Ontario Civil Procedure",
                },
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
        </div>
      </div>
    </>
  );
}
