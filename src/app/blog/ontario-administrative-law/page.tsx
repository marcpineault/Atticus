import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ontario Administrative Law — Judicial Review, Tribunals, and Procedural Fairness | Atticus Blog",
  description:
    "Comprehensive guide to Ontario administrative law: judicial review standards (correctness vs reasonableness post-Vavilov), procedural fairness Baker factors, the Statutory Powers Procedure Act, major Ontario tribunals, and how to navigate administrative proceedings.",
  openGraph: {
    title: "Ontario Administrative Law — Judicial Review, Tribunals, and Procedural Fairness",
    description:
      "Vavilov reasonableness standard, Baker procedural fairness factors, SPPA rules, Ontario tribunal practice, privative clauses, and remedies on judicial review.",
    type: "article",
    url: "https://getatticus.ca/blog/ontario-administrative-law",
  },
  alternates: { canonical: "https://getatticus.ca/blog/ontario-administrative-law" },
};

export default function OntarioAdministrativeLawPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Ontario Administrative Law — Judicial Review, Tribunals, and Procedural Fairness",
    description:
      "Comprehensive guide to Ontario administrative law: Vavilov reasonableness, Baker procedural fairness, SPPA, Ontario tribunal practice, and judicial review remedies.",
    author: { "@type": "Organization", name: "Atticus" },
    publisher: { "@type": "Organization", name: "Atticus", url: "https://getatticus.ca" },
    url: "https://getatticus.ca/blog/ontario-administrative-law",
    mainEntityOfPage: "https://getatticus.ca/blog/ontario-administrative-law",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-slate-900 to-indigo-900 text-white py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <Link href="/blog" className="text-slate-400 hover:text-white text-sm transition">
                ← Blog
              </Link>
              <span className="bg-indigo-500 text-white text-xs font-semibold px-2 py-1 rounded">
                Administrative Law
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Ontario Administrative Law — Judicial Review, Tribunals, and Procedural Fairness
            </h1>
            <p className="text-slate-300 text-lg">
              From the Vavilov reasonableness standard to Baker procedural fairness factors and
              the Statutory Powers Procedure Act — a comprehensive guide for Ontario practitioners.
            </p>
            <div className="flex items-center gap-4 mt-6 text-sm text-slate-400">
              <span>March 2026</span>
              <span>•</span>
              <span>14 min read</span>
            </div>
          </div>
        </section>

        <article className="py-16 px-6">
          <div className="max-w-3xl mx-auto prose prose-slate max-w-none">

            <h2>Constitutional Basis and Scope of Administrative Law</h2>
            <p>
              Administrative law governs the exercise of statutory powers by government decision-makers
              — tribunals, boards, ministers, and administrative officials. In Ontario, administrative
              decision-making is subject to both federal and provincial constitutional constraints.
              The Constitution Act 1867 divides legislative authority between Parliament and
              provincial legislatures: provincial administrative law flows from provincial legislative
              competence under s.92 heads of power (property and civil rights, local and private
              matters, administration of justice). Federal administrative decision-makers are subject
              to judicial review in the Federal Court under the Federal Courts Act RSC 1985 c F-7.
              Ontario administrative decision-makers are reviewable in the Divisional Court under
              the Judicial Review Procedure Act RSO 1990 c J.1 (JRPA).
            </p>
            <p>
              The Supreme Court of Canada&apos;s decision in Canada (Minister of Citizenship and
              Immigration) v Vavilov 2019 SCC 65 fundamentally restructured the standard of review
              framework that now governs judicial review of administrative decisions across Canada,
              including Ontario administrative law proceedings.
            </p>

            <h2>Standard of Review: Vavilov Framework</h2>
            <p>
              Canada (Minister of Citizenship and Immigration) v Vavilov 2019 SCC 65 established
              a revised standard of review framework. The default standard is reasonableness. Courts
              presume that legislators intend administrative decision-makers to have the primary
              responsibility for resolving questions within their statutory mandate.
            </p>
            <p>
              Correctness applies in two categories. First, where the legislature has explicitly
              signalled that correctness applies — for example by providing a statutory right of
              appeal or by prescribing the standard in the enabling statute. Second, for certain
              categories of legal questions regardless of legislative intent: (1) constitutional
              questions, including division of powers and Charter questions where the administrative
              decision-maker&apos;s statutory authority is being questioned; (2) general questions
              of central importance to the legal system as a whole and outside the adjudicator&apos;s
              specialized expertise; (3) questions regarding jurisdictional boundaries between two
              or more administrative bodies.
            </p>
            <p>
              Reasonableness review is a single standard that is applied with attention to context.
              A reasonable decision must be justified, intelligible, and transparent. Vavilov
              identified two categories of fundamental flaws that will render a decision unreasonable:
              (1) a failure of rationality internal to the decision-maker&apos;s reasoning process
              — the reasoning does not bear logical scrutiny; and (2) a decision that is untenable
              in light of the relevant factual and legal constraints — legal constraints include the
              governing statutory scheme, other relevant statutory and common law principles, prior
              decisions of the tribunal and courts, and the requirement to respond to the
              parties&apos; submissions. Mason v Canada (Citizenship and Immigration) 2023 SCC 21
              confirmed that Vavilov applies to Charter issues raised before administrative
              decision-makers: the standard is reasonableness unless correctness is triggered
              by one of the Vavilov exceptions.
            </p>

            <h2>Procedural Fairness: Baker Factors</h2>
            <p>
              Baker v Canada (Minister of Citizenship and Immigration) [1999] 2 SCR 817 established
              a contextual approach to procedural fairness requirements. The content of procedural
              fairness varies with context; it is not a fixed standard. Baker identified five
              factors relevant to determining the procedural fairness owed in any particular case:
            </p>
            <ul>
              <li>
                <strong>Nature of the decision and process used:</strong> Decisions that are more
                adjudicative in nature and that closely resemble judicial proceedings attract
                higher procedural protections. Legislative or policy decisions attract fewer
                procedural requirements.
              </li>
              <li>
                <strong>Nature of the statutory scheme:</strong> Where a statute provides for
                appeal rights or review mechanisms, this signals that the legislature intended
                procedural protections. Where a statute signals finality or speed, less procedure
                may be required.
              </li>
              <li>
                <strong>Importance of the decision to the individual affected:</strong> The more
                significant the impact on the individual&apos;s rights, interests, or expectations,
                the more procedural protection is warranted. Decisions affecting fundamental rights
                (liberty, security, livelihood) attract the highest protections.
              </li>
              <li>
                <strong>Legitimate expectations of the party claiming the right:</strong> Where a
                party has been given a specific undertaking or promise of a particular procedure,
                or where a consistent administrative practice has created a reasonable expectation,
                fairness may require that the expectation be honoured.
              </li>
              <li>
                <strong>Choices of procedure made by the agency:</strong> Courts give deference to
                the procedural choices made by tribunals with expertise in their area, particularly
                where Parliament or the legislature has given the tribunal wide latitude to
                determine its own procedures.
              </li>
            </ul>
            <p>
              At minimum, procedural fairness requires the right to be heard (the opportunity to
              present evidence and argument before an adverse decision is made) and the right to
              an unbiased decision-maker (the rule against bias). Newfoundland Nurses 2011 SCC 62
              confirmed that courts may look to the record and the parties&apos; submissions to
              supplement sparse reasons — adequacy of reasons is assessed against the Baker
              contextual factors.
            </p>

            <h2>Statutory Powers Procedure Act (SPPA)</h2>
            <p>
              The Statutory Powers Procedure Act RSO 1990 c S.22 (SPPA) establishes minimum
              procedural requirements for Ontario tribunals exercising statutory powers of decision
              affecting parties&apos; legal rights, powers, privileges, immunities, duties, or
              liabilities. The SPPA applies unless a tribunal&apos;s enabling statute expressly or
              by necessary implication modifies or excludes its requirements.
            </p>
            <p>
              Key SPPA requirements include: (1) notice — parties must receive reasonable notice
              of the hearing and the matters to be decided (s.6); (2) right to hearing — parties
              have the right to present evidence and make submissions (s.10); (3) oral evidence —
              oral hearings are the default unless the tribunal determines that written submissions
              are adequate (s.5.1-5.2); (4) electronic hearings — permitted unless a party
              objects and satisfies the tribunal that electronic participation would cause
              prejudice (s.5.2); (5) public hearings — default is public absent grounds for
              exclusion (s.9); (6) disclosure — parties may examine evidence before a hearing
              (s.9.1); (7) representation — parties may be represented by counsel or agent (s.10);
              (8) interim orders — tribunals may make interim decisions pending final disposition
              (s.16.1); (9) appeals — reserved to the enabling statute but SPPA s.21 preserves
              judicial review rights.
            </p>
            <p>
              Amendments to the SPPA by the Tribunal Adjudicative Records Act SO 2019 c 7 and
              subsequent reforms also address electronic records and modernized disclosure
              obligations. Tribunals Ontario (the consolidated tribunal cluster) has its own
              Practice Directions that supplement the SPPA.
            </p>

            <h2>Major Ontario Tribunals</h2>
            <p>
              Ontario has a large and diverse administrative tribunal system covering most areas
              of regulated activity:
            </p>
            <ul>
              <li>
                <strong>Landlord and Tenant Board (LTB):</strong> Governs residential tenancy
                disputes under the Residential Tenancies Act SO 2006 c 17. Subject to judicial
                review in Divisional Court. Post-Vavilov, LTB decisions on mixed law/fact
                questions reviewed for reasonableness.
              </li>
              <li>
                <strong>Ontario Human Rights Tribunal (HRTO):</strong> Adjudicates applications
                under the Human Rights Code RSO 1990 c H.19. Direct access model — complainants
                apply directly without going through the Human Rights Commission (post-2008 reforms).
                Remedies include compensation, reinstatement, public interest remedies, and
                discrimination findings.
              </li>
              <li>
                <strong>Labour Relations Board (OLRB):</strong> Administers the Labour Relations
                Act SO 1995 c 1 Sch A — collective bargaining rights, unfair labour practices,
                organizing rights. Strong privative clause limits judicial review to jurisdictional
                errors and denial of natural justice.
              </li>
              <li>
                <strong>Environmental Review Tribunal (ERT):</strong> Hears appeals from decisions
                under environmental legislation including the Environmental Protection Act RSO 1990
                c E.19. Specialized tribunal with technical expertise; standard of review tilts
                toward deference.
              </li>
              <li>
                <strong>Conservation Review Board:</strong> Reviews heritage property designations
                under the Ontario Heritage Act RSO 1990 c O.18.
              </li>
              <li>
                <strong>Financial Services Regulatory Authority (FSRA):</strong> Regulates
                insurance, credit unions, mortgage brokers, and financial planners. Appeals from
                FSRA Director decisions go to the Financial Services Tribunal.
              </li>
              <li>
                <strong>Law Society Tribunal:</strong> Adjudicates discipline and licensing
                matters under the Law Society Act RSO 1990 c L.8. Decisions on professional
                conduct reviewed on reasonableness for factual findings and penalty; correctness
                for questions of law of general importance.
              </li>
              <li>
                <strong>Assessment Review Board (ARB):</strong> Hears appeals of property
                assessments under the Assessment Act RSO 1990 c A.31 — relevant for real property
                and commercial litigation.
              </li>
            </ul>

            <h2>Judicial Review Procedure in Ontario</h2>
            <p>
              Judicial review of Ontario administrative decisions proceeds in the Divisional Court
              under the Judicial Review Procedure Act RSO 1990 c J.1. Key procedural points:
            </p>
            <ul>
              <li>
                <strong>Leave requirement:</strong> No leave is required for judicial review in
                the Divisional Court for most matters, but some enabling statutes impose a leave
                requirement. The Court of Appeal has leave requirements for further appeals.
              </li>
              <li>
                <strong>Time limits:</strong> JRPA s.5 — application must be made promptly, and
                in any event within 30 days of the order or decision, unless the court extends the
                time. Extensions are discretionary; courts consider prejudice and merits.
              </li>
              <li>
                <strong>Privative clauses:</strong> Many enabling statutes contain privative clauses
                purporting to bar or limit judicial review. Post-Vavilov, privative clauses signal
                legislative intent for deference but do not oust constitutional judicial review —
                courts retain supervisory jurisdiction under s.96 Constitution Act 1867.
              </li>
              <li>
                <strong>Exhaustion of remedies:</strong> Courts generally require parties to
                exhaust all statutory remedies (appeals, reconsideration) before applying for
                judicial review, unless the statutory remedy is inadequate or exceptional
                circumstances justify bypassing it.
              </li>
              <li>
                <strong>Record:</strong> The tribunal is required to produce the record of
                proceedings. Fresh evidence is generally not admitted; the record is defined by
                what was before the decision-maker.
              </li>
            </ul>

            <h2>Remedies on Judicial Review</h2>
            <p>
              JRPA s.2 codifies the traditional prerogative writs as judicial review remedies:
              certiorari (quash the decision), mandamus (order the tribunal to perform its duty),
              prohibition (restrain the tribunal from acting), and declaratory relief. In practice,
              Ontario courts grant certiorari to quash unreasonable decisions and remit to the
              tribunal for redetermination.
            </p>
            <p>
              Remittal is the standard remedy on successful judicial review — courts generally
              do not substitute their own decision for the tribunal&apos;s on the merits. The
              court will substitute its own decision only where there is only one reasonable
              outcome and remittal would serve no purpose (Vavilov para 142). A court may also
              decline to grant relief where the outcome would inevitably be the same even on
              redetermination, or where the defect in procedure caused no prejudice.
            </p>

            <h2>Practical Implications for Ontario Solicitors</h2>
            <p>
              Administrative law matters arise frequently in Ontario general practice:
            </p>
            <ul>
              <li>
                <strong>Real estate:</strong> LTB proceedings for landlord clients, ARB assessment
                appeals, Committee of Adjustment variances (reviewable in Divisional Court).
              </li>
              <li>
                <strong>Employment:</strong> Employment Standards Act complaints, WSIB appeals
                (Workplace Safety and Insurance Appeals Tribunal), OHSA inspector orders.
              </li>
              <li>
                <strong>Corporate/regulatory:</strong> FSRA licensing decisions, securities
                regulatory proceedings, business licensing appeals.
              </li>
              <li>
                <strong>Human rights:</strong> HRTO applications as respondent counsel, advising
                on accommodation obligations, defending complaints.
              </li>
              <li>
                <strong>Immigration:</strong> Federal administrative law — Immigration and Refugee
                Board, Immigration Division, Refugee Appeal Division — Federal Court judicial
                review.
              </li>
            </ul>

            <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6 mt-8">
              <h3 className="text-lg font-bold text-indigo-900 mb-2">
                Manage Administrative Matters with Atticus
              </h3>
              <p className="text-indigo-800 mb-4">
                Track tribunal deadlines, manage administrative law matters, and keep client trust
                funds properly accounted — all in one platform built for Ontario law firms.
              </p>
              <Link
                href="/sign-up"
                className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg transition"
              >
                Try Atticus Free
              </Link>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
