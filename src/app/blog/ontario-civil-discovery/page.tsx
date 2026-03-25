import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ontario Civil Discovery: Examinations for Discovery, Documentary Production, and Undertakings (2024)",
  description:
    "Complete guide to civil discovery in Ontario. Documentary production under Rules 29-30, examinations for discovery Rule 31, scope of proper questions, objections and refusals, undertakings and their follow-up, Rule 31.07 use of discovery evidence at trial, expert reports Rule 53.03, and pre-trial discovery motions.",
  alternates: { canonical: "https://getatticus.ca/blog/ontario-civil-discovery" },
  openGraph: {
    title: "Ontario Civil Discovery: Examinations for Discovery, Documentary Production, and Undertakings (2024)",
    description:
      "Guide to Ontario civil discovery — documentary production, examinations for discovery, scope of questions, undertakings and refusals, use at trial, and expert disclosure.",
    url: "https://getatticus.ca/blog/ontario-civil-discovery",
    type: "article",
  },
};

const schemaJson = `{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Ontario Civil Discovery: Examinations for Discovery, Documentary Production, and Undertakings (2024)",
  "description": "Complete guide to civil discovery in Ontario. Documentary production, examinations for discovery, scope, undertakings, refusals, use at trial, and expert disclosure under Ontario Rules of Civil Procedure.",
  "author": { "@type": "Organization", "name": "Atticus" },
  "publisher": { "@type": "Organization", "name": "Atticus", "url": "https://getatticus.ca" },
  "url": "https://getatticus.ca/blog/ontario-civil-discovery",
  "datePublished": "2024-12-01",
  "dateModified": "2024-12-01"
}`;

export default function OntarioCivilDiscoveryPage() {
  return (
    <>
      <Script id="ontario-civil-discovery-schema" type="application/ld+json">
        {schemaJson}
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
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-amber-100 text-amber-800 text-xs font-semibold px-3 py-1 rounded-full">
                Civil Litigation
              </span>
              <span className="text-slate-400 text-sm">14 min read</span>
              <span className="text-slate-400 text-sm">December 2024</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-6">
              Ontario Civil Discovery: Examinations for Discovery, Documentary Production, and Undertakings
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Discovery is the cornerstone of Ontario civil litigation. The Rules of Civil Procedure RRO 1990
              Reg 194 contain a comprehensive discovery regime that requires parties to produce all relevant
              documents and submit to oral examinations before trial. Mastering documentary production,
              the scope of examination questions, undertakings, refusals, and the use of discovery evidence
              at trial is essential to effective Ontario civil litigation practice.
            </p>
          </header>

          <article className="prose prose-slate max-w-none">
            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
              Documentary Discovery: The Affidavit of Documents
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Rule 30 governs documentary discovery. Each party must serve and file an affidavit of documents
              (Form 30A) listing all documents relevant to any matter in issue in the action that are or have
              been in the party&apos;s possession, control, or power: Rule 30.03(1).
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              The affidavit of documents has three schedules:
            </p>
            <ul className="list-disc pl-6 mb-4 text-slate-700 space-y-2">
              <li><strong>Schedule A</strong>: Documents in the party&apos;s possession, control, or power that
              the party does not object to producing. These must be produced for inspection.</li>
              <li><strong>Schedule B</strong>: Documents in the party&apos;s possession, control, or power for
              which the party claims privilege — must identify each document and state the grounds of privilege.</li>
              <li><strong>Schedule C</strong>: Documents that were in the party&apos;s possession, control, or
              power but are no longer — must identify each document and state where it is believed to be
              and when and how it ceased to be in the party&apos;s possession.</li>
            </ul>
            <p className="text-slate-700 leading-relaxed mb-4">
              The obligation to produce is ongoing. Rule 30.07 requires a party who comes into possession
              of a relevant document after serving the original affidavit to immediately serve an amended
              affidavit disclosing the new document. Failure to update the affidavit of documents can result
              in exclusion of the document at trial under Rule 30.08 or costs consequences.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
              Relevance: The Scope of Documentary Production
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              The test for relevance in documentary discovery is broader than the test for admissibility
              at trial. A document is relevant if it may reasonably be expected to significantly help establish
              or disprove a fact in issue, or if it may lead to a train of inquiry that reveals relevant
              documents. The leading statement of the standard comes from <em>Compagnie Financiere du Pacifique
              v Peruvian Guano Co</em> (1882) 11 QBD 55 — a document is relevant if it may &quot;either directly
              or indirectly enable the party to advance his own case or to damage the case of his adversary.&quot;
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Ontario courts have adopted the broad Peruvian Guano standard for documentary production.
              Relevance disputes are common in commercial litigation involving large document sets.
              Courts balance the broad relevance standard against proportionality — Rule 29.2 and
              Rule 1.04(1.1) require the court to consider the time and expense of disclosure relative
              to the importance of the issues and the amount in dispute.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
              Privilege Claims in Documentary Discovery
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Documents for which privilege is claimed are listed in Schedule B but are not produced.
              The principal grounds for privilege in Ontario civil litigation are:
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
              Solicitor-Client Privilege
            </h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              Solicitor-client privilege protects confidential communications between a lawyer and client
              for the purpose of giving or receiving legal advice. The Supreme Court of Canada has affirmed
              that solicitor-client privilege is a substantive right, not merely a procedural rule, and should
              be construed broadly: <em>Lavallee, Rackel and Heintz v Canada (AG)</em> 2002 SCC 61. The privilege
              belongs to the client and can only be waived by the client.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              The crime-fraud exception removes solicitor-client privilege where the communication was made
              to facilitate a crime or fraud. The test requires prima facie evidence that the client was
              engaged in criminal or fraudulent conduct and that the communication furthered it.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
              Litigation Privilege
            </h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              Litigation privilege (or &quot;work product&quot; privilege) protects documents prepared by or for a
              party primarily for the dominant purpose of anticipated or existing litigation. Unlike solicitor-client
              privilege, litigation privilege is not limited to communications with counsel — it covers documents
              prepared by the party, investigators, consultants, and experts in preparation for litigation.
              Litigation privilege expires at the end of the litigation to which it relates: <em>Blank v Canada
              (Minister of Justice)</em> 2006 SCC 39.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              The dominant purpose test is applied objectively. A document created for multiple purposes —
              only one of which is litigation — may not attract privilege if litigation was not the dominant
              purpose at the time of creation.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
              Settlement Privilege
            </h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              Communications made in the course of genuine settlement negotiations are protected from production
              under settlement privilege. The purpose of settlement privilege is to encourage frank exchange
              in settlement discussions. Communications must be genuinely aimed at settlement; mere posturing
              may not qualify.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Rule 49 offer-to-settle documents are covered by separate provisions. The fact of an offer
              and its terms are generally not disclosed to the trial judge until after judgment for the
              purpose of the costs determination.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
              Examination for Discovery: Rule 31
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Rule 31 governs oral examinations for discovery. Each party may examine any adverse party:
              Rule 31.03(1). For corporations and other non-individual parties, the examining party is
              entitled to examine an officer or director or, with leave, any employee of the party having
              personal knowledge of the matters in question: Rule 31.03(2)-(3).
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
              Scope of Proper Questions
            </h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              A person being examined for discovery may be asked about any matter that is relevant to any
              matter in issue in the action: Rule 31.06(1). The scope of examination is broad — the same
              wide Peruvian Guano relevance standard applies.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Specifically, a party may be asked about:
            </p>
            <ul className="list-disc pl-6 mb-4 text-slate-700 space-y-2">
              <li>The names and addresses of persons who might reasonably be expected to have knowledge
              of transactions or occurrences in issue: Rule 31.06(2)</li>
              <li>The names and addresses of expert witnesses that the other party intends to call:
              Rule 31.06(3)</li>
              <li>The contents of a document that the other party relies on and that is in the other
              party&apos;s possession, control, or power: Rule 31.06(4)</li>
            </ul>
            <p className="text-slate-700 leading-relaxed mb-4">
              Questions about the legal advice the party has received, however, are not proper — they
              are protected by solicitor-client privilege. A question that calls for disclosure of
              privileged communications should be met with a proper objection and refusal to answer.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
              Objections, Refusals, and the Refusals Chart
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Where a question is objected to and the witness refuses to answer, the examining party
              may either accept the refusal or bring a motion to compel under Rule 34.14. Standard
              grounds for refusal include privilege, relevance, oppressiveness, and confidentiality.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Ontario practice requires counsel to maintain a refusals chart — a written record of each
              question refused, the grounds for refusal, and whether the question was answered on
              reconsideration. The refusals chart is typically prepared jointly by counsel after the
              examination. Courts expect counsel to attempt to resolve refusal disputes before bringing
              motions.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              On a motion to compel, the court will determine whether the question falls within the
              proper scope of examination and whether the objection is valid. The costs of a refusal
              motion are often awarded against the unsuccessful party.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
              Undertakings: Obligation, Scope, and Follow-Through
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              An undertaking is a commitment given during examination to provide information or documents
              that the witness does not have immediately available. Counsel for the party being examined
              gives undertakings on behalf of the party — not merely on behalf of the witness.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Undertakings are binding. A party who fails to fulfill undertakings may be subject to a
              motion to compel, costs sanctions, or — in egregious cases — striking of pleadings. Courts
              take unfulfilled undertakings seriously, particularly where the failure appears deliberate
              or has prejudiced the examining party&apos;s trial preparation.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Best practice is to maintain a separate undertakings chart during the examination, listing
              each undertaking given with the question number and a description of what must be provided.
              After the examination, counsel should send a confirming letter to opposing counsel setting
              out all undertakings given, to prevent later disputes about scope.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              The responding party must fulfill undertakings within a reasonable time, typically 30 days,
              unless a specific deadline is agreed. If a party is unable to fulfill an undertaking because
              the information or documents do not exist, it must advise the examining party promptly and
              explain why the undertaking cannot be fulfilled.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
              Use of Discovery Evidence at Trial: Rule 31.11
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Discovery evidence may be used at trial to impeach the credibility of a party or witness,
              or as evidence of the facts admitted: Rule 31.11(1). A party may read in portions of the
              examination of an adverse party as evidence in chief at trial — this is the &quot;read-in&quot; procedure
              commonly used to introduce admissions made at discovery.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Rule 31.11(2) prevents a party from reading in parts of the examination of their own party
              as evidence (self-serving statements). Rule 31.11(5) allows opposing counsel to read in
              additional portions of the examination to give context to the portions read in by the party.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Discovery evidence read in at trial is subject to the same rules of admissibility as
              in-court testimony. A party who gave inconsistent answers at discovery and at trial
              will face credibility challenges based on the prior inconsistent statement: Rule 20.05 of
              the <em>Evidence Act</em> RSO 1990 c E.23.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              The trial judge will permit read-ins from discovery that are relevant and not unduly
              cumulative. Strategic selection of discovery admissions to read in at trial is an
              important element of trial preparation.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
              Expert Witness Disclosure: Rule 53.03
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Rule 53.03 requires a party who intends to call an expert witness to serve a signed expert
              report at least 90 days before trial (or 60 days for a responding expert report). The
              expert report must contain:
            </p>
            <ul className="list-disc pl-6 mb-4 text-slate-700 space-y-2">
              <li>The expert&apos;s name, address, and qualifications</li>
              <li>The instructions provided to the expert in relation to the proceeding</li>
              <li>The nature of the opinion being sought and each issue in the proceeding to which
              the opinion relates</li>
              <li>The expert&apos;s opinion respecting each issue and, where there is a range of opinions
              given, a summary of the range and the reasons for the expert&apos;s opinion within that range</li>
              <li>The expert&apos;s reasons for the opinion, including a description of the factual assumptions
              and the literature or other material relied upon</li>
              <li>An acknowledgment of expert&apos;s duty in Form 53</li>
            </ul>
            <p className="text-slate-700 leading-relaxed mb-4">
              The Form 53 acknowledgment requires the expert to certify that the duty is to provide
              opinion evidence that is fair, objective, and non-partisan — and that the duty is owed
              to the court rather than to the party retaining the expert. Failure to include the
              acknowledgment is a formal defect that may result in the expert not being permitted
              to testify.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
              Discovery Plans and Proportionality
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Rule 29.1 requires parties to cases involving more than $200,000 to agree on a discovery
              plan before conducting discoveries. The discovery plan must be agreed in writing and must
              address the scope of documentary discovery, the order of examinations, and a schedule
              for completing discovery.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Rule 29.2 allows a party to move to limit or abridge discoveries where the cost or time
              of discovery is disproportionate to the amounts at stake or the complexity of the issues.
              Courts have become increasingly attentive to proportionality, particularly in commercial
              disputes involving electronic discovery of large document sets.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              The Ontario e-Discovery Guidelines and the Sedona Canada Principles provide a framework
              for proportionate electronic discovery. Counsel dealing with large volume electronically
              stored information (ESI) should address preservation obligations, search methodology,
              and production format early in the litigation.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
              Deemed Undertaking Rule: Rule 30.1
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Rule 30.1(3) provides that all parties and their lawyers are deemed to undertake not to
              use evidence or information obtained through the discovery process for any purposes other
              than those of the proceeding in which the evidence was obtained. This is the &quot;implied
              undertaking&quot; or &quot;deemed undertaking&quot; rule.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Using discovery material obtained in one proceeding in another proceeding, or for non-litigation
              purposes, without court leave is a breach of the deemed undertaking. Courts treat this
              seriously — using discovery documents to harm the disclosing party&apos;s competitive position
              outside litigation may result in contempt proceedings.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              The deemed undertaking survives the conclusion of the litigation. Even after the proceeding
              has ended, documents and information obtained through discovery cannot be used for other
              purposes without leave of court.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
              Motions Arising from Discovery
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Several categories of motion arise from discovery disputes:
            </p>
            <ul className="list-disc pl-6 mb-4 text-slate-700 space-y-2">
              <li><strong>Motion to compel production</strong>: Where a party fails to properly complete
              the affidavit of documents or refuses to produce Schedule A documents.</li>
              <li><strong>Motion to compel answers</strong>: Where a witness refuses to answer questions
              at examination without proper grounds.</li>
              <li><strong>Motion to fulfill undertakings</strong>: Where a party fails to fulfill undertakings
              given at examination.</li>
              <li><strong>Motion to strike examination answers</strong>: Where a party seeks to exclude
              improperly admitted evidence from the record of examination.</li>
              <li><strong>Motion for adverse inference</strong>: Where a party fails to call a key witness
              or produce expected documents, potentially warranting an adverse inference at trial.</li>
              <li><strong>Norwich order</strong>: A pre-litigation discovery order against a non-party
              to identify unknown wrongdoers — requires proper grounds and balance of convenience.</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
              Practical Tips for Ontario Civil Litigators
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Effective discovery practice in Ontario requires careful attention to deadlines, documentation,
              and communication with opposing counsel. Key practical considerations include:
            </p>
            <ul className="list-disc pl-6 mb-4 text-slate-700 space-y-2">
              <li>Serve the affidavit of documents within the required timeline — Rule 30.03 requires
              production within 10 days of close of pleadings in most cases.</li>
              <li>Update the affidavit promptly when new relevant documents come to light — Rule 30.07
              requires immediate amendment.</li>
              <li>Prepare a thorough undertakings and refusals chart during the examination and send
              a confirming letter to opposing counsel within 5 business days.</li>
              <li>Calendar undertaking follow-up dates — discovery management files can generate
              dozens of outstanding undertakings requiring tracking.</li>
              <li>Serve expert reports 90 days before trial and confirm the expert has signed Form 53.</li>
              <li>Address privilege disputes promptly to avoid surprise exclusions at trial.</li>
            </ul>
            <p className="text-slate-700 leading-relaxed mb-4">
              Atticus helps Ontario litigators manage discovery workflows — tracking undertaking deadlines,
              managing discovery schedules across multiple files, and using AI document analysis to
              identify relevant documents and key dates in client files. Built for Ontario civil practice
              with LSO-compliant trust accounting and full matter management.
            </p>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mt-10">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                Atticus for Ontario Civil Litigators
              </h3>
              <p className="text-slate-700 text-sm leading-relaxed mb-4">
                Atticus is built for Ontario civil litigation practice — AI document analysis to identify
                relevant documents, deadline tracking for undertakings and expert report timelines,
                LSO By-Law 9 compliant trust accounting, and full matter management from pleadings to trial.
              </p>
              <Link
                href="/sign-up"
                className="inline-block bg-slate-900 text-white font-semibold px-6 py-3 rounded-lg hover:bg-slate-700 transition-colors text-sm"
              >
                Start Free Trial
              </Link>
            </div>

            <div className="mt-12 pt-8 border-t border-slate-100">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Related Articles</h3>
              <div className="space-y-3">
                <Link
                  href="/blog/ontario-civil-procedure"
                  className="block text-amber-700 hover:text-amber-900 font-medium text-sm"
                >
                  Ontario Civil Procedure: Rules of Civil Procedure, Discoveries, and Summary Judgment
                </Link>
                <Link
                  href="/blog/ontario-summary-judgment"
                  className="block text-amber-700 hover:text-amber-900 font-medium text-sm"
                >
                  Ontario Summary Judgment: Hryniak v Mauldin Culture Shift and Rule 20 Enhanced Powers
                </Link>
                <Link
                  href="/blog/ontario-solicitor-client-privilege"
                  className="block text-amber-700 hover:text-amber-900 font-medium text-sm"
                >
                  Ontario Solicitor-Client Privilege: What Is Protected, Waiver, and Exceptions
                </Link>
                <Link
                  href="/blog/ontario-costs-rules"
                  className="block text-amber-700 hover:text-amber-900 font-medium text-sm"
                >
                  Ontario Costs Rules: Partial Indemnity, Substantial Indemnity, and Rule 49 Offers to Settle
                </Link>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
