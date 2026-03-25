import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ontario Civil Procedure — Rules of Civil Procedure, Pleadings, Discoveries, and Motions | Atticus",
  description:
    "A practical guide for Ontario civil litigators: Rules of Civil Procedure, pleadings, documentary discovery, examinations for discovery, motions, summary judgment, and trial procedure.",
  openGraph: {
    title: "Ontario Civil Procedure — Rules of Civil Procedure, Pleadings, and Motions",
    description:
      "Ontario civil procedure guide: Rules of Civil Procedure, originating process, pleadings, documentary discovery, examinations, motions, summary judgment, and trial.",
    type: "article",
    url: "https://getatticus.ca/blog/ontario-civil-procedure",
  },
  alternates: { canonical: "https://getatticus.ca/blog/ontario-civil-procedure" },
};

export default function OntarioCivilProcedurePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Ontario Civil Procedure — Rules of Civil Procedure, Pleadings, Discoveries, and Motions",
    description:
      "Practical guide to Ontario civil procedure: Rules of Civil Procedure, originating process, pleadings, documentary discovery, examinations for discovery, motions, summary judgment, and trial.",
    url: "https://getatticus.ca/blog/ontario-civil-procedure",
    author: { "@type": "Organization", name: "Atticus" },
    publisher: { "@type": "Organization", name: "Atticus", url: "https://getatticus.ca" },
    datePublished: "2026-03-19",
    keywords: [
      "Ontario civil procedure",
      "Rules of Civil Procedure Ontario",
      "pleadings Ontario",
      "examination for discovery Ontario",
      "summary judgment Ontario",
      "motion Ontario civil",
      "Ontario civil litigation",
    ],
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="max-w-3xl mx-auto px-6 py-16">
        <div className="mb-8">
          <div className="inline-block bg-slate-100 text-slate-800 text-sm font-semibold px-3 py-1 rounded-full mb-4">
            Civil Litigation
          </div>
          <h1 className="text-4xl font-bold leading-tight mb-4">
            Ontario Civil Procedure — Rules of Civil Procedure, Pleadings, Discoveries, and Motions
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            A practical guide to Ontario civil litigation procedure: the <em>Rules of Civil Procedure</em>,
            originating process, pleadings, documentary discovery, examinations for discovery, motions,
            summary judgment, and trial under the Superior Court of Justice.
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>March 2026</span>
            <span>&middot;</span>
            <span>17 min read</span>
            <span>&middot;</span>
            <span>Atticus Legal Research</span>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">

          <h2>Rules of Civil Procedure — Framework</h2>
          <p>
            The <em>Rules of Civil Procedure</em> RRO 1990 Reg 194 (the &quot;Rules&quot;) made under the{" "}
            <em>Courts of Justice Act</em> RSO 1990 c C.43 govern proceedings in the Superior Court of Justice
            and the Court of Appeal for Ontario. They establish the procedural framework from commencement
            of proceedings through to judgment, costs, and appeals.
          </p>
          <p>
            Rule 1.04(1) — the overriding objective — provides that the Rules shall be liberally construed to
            secure the just, most expeditious, and least expensive determination of every civil proceeding on
            its merits. Courts have increasing latitude to manage proceedings actively under Rule 1.04(1.1),
            introduced to address delay in civil litigation.
          </p>

          <h2>Originating Process — Rule 14</h2>
          <p>
            A proceeding is commenced either by Statement of Claim (Rule 14.03(1)) or Application (Rule 38).
            The Statement of Claim is the default originating process for disputed factual matters requiring
            trial. The Application is used where the relief sought is primarily legal (constitutional questions,
            judicial review, trust matters, uncontested matters) and can be dealt with on affidavit evidence
            without a full trial.
          </p>
          <p>
            Specific proceedings (family law, bankruptcy, class proceedings) have their own originating
            documents under separate regimes — the <em>Family Law Rules</em> O. Reg. 114/99 govern family
            proceedings.
          </p>
          <h3>Service</h3>
          <p>
            Personal service on an individual is effected under Rule 16.02 by leaving a copy with the person.
            An Ontario corporation may be served by leaving copies with an officer or director or at the
            registered office (Rule 16.02(1)(c)). A defendant must be served within 6 months of issuance of
            the claim (Rule 14.08), which can be extended under Rule 3.02.
          </p>

          <h2>Pleadings — Rules 25 to 30</h2>
          <p>
            Pleadings define the issues for trial. The key pleadings documents in a defended action are:
          </p>
          <ul>
            <li><strong>Statement of Claim</strong> — plaintiff&apos;s facts and relief (Rules 25, 26)</li>
            <li><strong>Statement of Defence</strong> — 20 days after service to defend (Rule 18.01)</li>
            <li><strong>Reply</strong> — plaintiff&apos;s response to new matters in Defence (Rule 25.08)</li>
            <li><strong>Counterclaim</strong> — defendant&apos;s claim against plaintiff (Rule 27)</li>
            <li><strong>Crossclaim</strong> — defendant&apos;s claim against co-defendant (Rule 28)</li>
            <li><strong>Third Party Claim</strong> — defendant&apos;s claim against non-party (Rule 29)</li>
          </ul>
          <h3>Pleading Material Facts</h3>
          <p>
            Pleadings must state material facts (Rule 25.06(1)) — the facts, not the evidence or legal conclusions.
            A party must plead every material fact it relies on; failure to plead a fact may preclude reliance
            on it at trial. Pleadings must be as brief as the nature of the case permits (Rule 25.06(2)).
          </p>
          <p>
            Fraud, misrepresentation, and conditions precedent must be specifically pleaded (Rule 25.06(8)).
            Res judicata, issue estoppel, and estoppel must also be expressly pleaded as defences (Rule 25.07(4)).
          </p>
          <h3>Striking Pleadings — Rule 25.11</h3>
          <p>
            The court may strike out all or part of a pleading that discloses no reasonable cause of action or
            defence, is scandalous, frivolous or vexatious, or is an abuse of process. On a motion to strike,
            the facts as pleaded are taken as true (<em>Hunt v Carey Canada Inc</em> [1990] 2 SCR 959).
            The test is whether it is plain and obvious that the claim cannot succeed.
          </p>

          <h2>Documentary Discovery — Rule 30</h2>
          <p>
            Rule 30.02(1) requires every party to disclose every document relevant to any matter in issue
            in the action that is or has been in the party&apos;s possession, control, or power, including
            documents that may be used by an adverse party. Disclosure is made by way of Affidavit of Documents
            (Form 30A) listing:
          </p>
          <ul>
            <li>Schedule A — documents in the party&apos;s possession that are not privileged</li>
            <li>Schedule B — documents in the party&apos;s possession that are privileged</li>
            <li>Schedule C — documents that were in the party&apos;s possession but are no longer</li>
          </ul>
          <p>
            Solicitor-client privileged documents are listed in Schedule B but not produced. Litigation privilege
            covers documents created for the dominant purpose of anticipated or actual litigation —
            the <em>Blank v Canada</em> 2006 SCC 39 dominant purpose test. Work product is protected only for
            the duration of the litigation.
          </p>
          <h3>Electronic Discovery</h3>
          <p>
            The <em>Sedona Canada Principles</em> have been adopted by the Rules committee commentary and
            endorsed by Ontario courts as guiding principles for electronic discovery proportionality and
            cooperation. The court has power to order cost-shifting for disproportionate e-discovery demands
            (Rule 29.1 — discovery plan; Rule 30.04).
          </p>

          <h2>Examinations for Discovery — Rules 31 and 35</h2>
          <p>
            Rule 31.03(1) entitles each party to examine any adverse party for discovery once as of right.
            Only one individual may be examined per corporate party under Rule 31.03(2) unless leave is
            granted. The examining party selects the witness to be produced (Rule 31.03(3)).
          </p>
          <p>
            Undertakings are commitments made during examination to produce documents or provide information
            — their fulfilment is enforceable by motion. Common objections at examination:
          </p>
          <ul>
            <li><strong>Solicitor-client privilege</strong> — absolute protection; must be asserted specifically</li>
            <li><strong>Relevance</strong> — information must be reasonably related to matters in issue</li>
            <li><strong>Question is misleading or harassing</strong> — examiner must rephrase</li>
            <li><strong>Improper scope</strong> — questions must relate to facts pleaded</li>
          </ul>
          <p>
            Transcripts of examinations are admissible at trial as admissions against the party examined
            (Rule 31.11(1)). A witness may also be impeached at trial with prior inconsistent statements
            from the examination transcript.
          </p>

          <h2>Motions — Rules 37 and 39</h2>
          <p>
            Motions are interlocutory applications to the court for relief during the course of an action.
            A motion is commenced by Notice of Motion (Form 37A) and supported by Affidavit (Form 4D).
            Responding parties file responding affidavits; moving parties may file reply affidavits.
            Cross-examination on affidavits is available as of right (Rule 39.02).
          </p>
          <p>
            Interlocutory injunctions are governed by the three-part test from{" "}
            <em>RJR-MacDonald Inc v Canada</em> [1994] 1 SCR 311 (adopting American Cyanamid):
          </p>
          <ul>
            <li>Is there a serious question to be tried? (low threshold)</li>
            <li>Would the applicant suffer irreparable harm if the injunction were refused?</li>
            <li>Does the balance of convenience favour granting or refusing the injunction?</li>
          </ul>
          <p>
            The undertaking as to damages (the moving party&apos;s promise to compensate the responding party
            if the injunction is wrongly granted) is required as a condition of almost every interlocutory
            injunction. Mareva injunctions (asset freeze orders) and Anton Piller orders (search orders)
            are available under the inherent jurisdiction of the Superior Court.
          </p>

          <h2>Summary Judgment — Rule 20</h2>
          <p>
            Rule 20.04(2) allows a court to grant summary judgment where there is no genuine issue requiring
            a trial. The Supreme Court&apos;s decision in <em>Hryniak v Mauldin</em> 2014 SCC 7 fundamentally
            transformed summary judgment practice in Ontario, emphasizing the shift toward proportionate,
            accessible, and timely justice.
          </p>
          <p>
            Under <em>Hryniak</em>, the court&apos;s task on summary judgment is to determine whether there
            is a genuine issue requiring a trial. A genuine issue exists where the court cannot fairly and
            justly resolve it on the motion. The court has enhanced powers under Rule 20.04(2.1): it may
            weigh evidence, evaluate credibility, and draw reasonable inferences from the facts.
          </p>
          <p>
            Where summary judgment is appropriate for some but not all issues, partial summary judgment is
            available — though post-<em>Butera v Chown Cairns LLP</em> 2017 ONCA 783, courts have been
            cautious about granting partial summary judgment that fragments the proceeding and creates the
            risk of inconsistent findings.
          </p>

          <h2>Trial Procedure</h2>
          <p>
            Most civil trials in Ontario are judge-alone. Jury trials are available in limited circumstances
            (Rule 47): not in proceedings for injunctions, partition, winding up, dissolution of partnership,
            execution of trusts, redemption or foreclosure, or matters solely of accounting. A jury notice
            must be delivered within 10 days after the close of pleadings (Rule 47.01).
          </p>
          <p>
            The order of presentation at a civil trial follows the pleadings: the plaintiff opens
            (Rule 52.07) and calls evidence; the defendant may make a no-evidence motion (formerly
            nonsuit) at the close of the plaintiff&apos;s case; the defendant then calls evidence; closing
            arguments follow with defendant going first. Evidence is governed by the <em>Evidence Act</em>
            RSO 1990 c E.23 and the common law rules of evidence.
          </p>

          <h2>Costs — Rule 57</h2>
          <p>
            Ontario follows the principle that costs follow the event (Rule 57.01(2)) — the successful party
            is generally entitled to costs from the losing party. The court has full discretion to determine
            by whom, to whom, and to what extent costs shall be paid (Rule 57.01(1)).
          </p>
          <p>
            Costs in Ontario are assessed on one of three scales:
          </p>
          <ul>
            <li>
              <strong>Partial indemnity</strong> — the default scale; typically 50–65% of reasonable actual
              costs; intended to partially compensate the successful party without fully burdening the losing party
            </li>
            <li>
              <strong>Substantial indemnity</strong> — approximately 90% of actual reasonable costs; awarded
              where a party has acted in bad faith, engaged in reprehensible conduct, or failed to accept
              a reasonable offer to settle
            </li>
            <li>
              <strong>Full indemnity</strong> — exceptional; reserved for clear cases of misconduct
            </li>
          </ul>
          <h3>Offers to Settle — Rule 49</h3>
          <p>
            An offer to settle under Rule 49 creates powerful cost consequences. If a plaintiff obtains a
            judgment as favourable as or more favourable than its offer, it is entitled to partial indemnity
            costs to the date of the offer and substantial indemnity costs thereafter (Rule 49.10(1)).
            A defendant whose offer equals or exceeds the judgment obtained by the plaintiff is entitled
            to partial indemnity costs to the offer date and substantial indemnity thereafter (Rule 49.10(2)).
            Rule 49 offers must comply strictly with the formal requirements (writing, service, timing)
            to trigger cost consequences.
          </p>

          <h2>Case Management and Mandatory Mediation</h2>
          <p>
            Mandatory mediation under O. Reg. 258/98 applies to most defended actions in Toronto, Ottawa,
            and Windsor — parties must attend a mediation session within 180 days of the first defence being
            filed. Non-compliance can result in cost sanctions and case management conferences.
          </p>
          <p>
            Case management under Rule 77 allows courts to actively manage complex proceedings by setting
            timelines, requiring case conferences, and imposing cost sanctions for failure to comply with
            timetables. The increased use of judicial case management reflects the commitment in Rule 1.04
            to expeditious determination of proceedings.
          </p>
        </div>
      </article>
    </div>
  );
}
