import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ontario Evidence Law — Admissibility, Hearsay, Privilege, and Expert Evidence",
  description:
    "A comprehensive guide to Ontario evidence law: the Evidence Act RSO 1990, hearsay and its exceptions, similar fact evidence, solicitor-client and other privileges, the voir dire, and the Mohan framework for expert evidence.",
  openGraph: {
    title: "Ontario Evidence Law — Admissibility, Hearsay, Privilege, and Expert Evidence",
    description:
      "Ontario evidence law: Evidence Act RSO 1990, hearsay principled approach Khan/Starr, similar fact Handy, solicitor-client privilege Smith v Jones, expert evidence Mohan/White Burgess.",
    type: "article",
    url: "https://getatticus.ca/blog/ontario-evidence-law",
  },
  alternates: { canonical: "https://getatticus.ca/blog/ontario-evidence-law" },
};

export default function OntarioEvidenceLawPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Ontario Evidence Law — Admissibility, Hearsay, Privilege, and Expert Evidence",
    description:
      "Ontario evidence law guide: Evidence Act RSO 1990, principled hearsay approach Khan/Starr, similar fact Handy, solicitor-client privilege Smith v Jones, expert evidence Mohan/White Burgess/Sekhon.",
    url: "https://getatticus.ca/blog/ontario-evidence-law",
    publisher: {
      "@type": "Organization",
      name: "Atticus",
      url: "https://getatticus.ca",
    },
    author: {
      "@type": "Organization",
      name: "Atticus Legal",
    },
  };

  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-slate-900 to-slate-600 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-slate-500 text-white text-sm font-semibold px-4 py-1.5 rounded-full">
              Evidence Law
            </span>
            <span className="text-slate-400 text-sm">14 min read</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Ontario Evidence Law — Admissibility, Hearsay, Privilege, and Expert Evidence
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl">
            A comprehensive guide to Ontario evidence law: the provincial Evidence Act,
            the principled approach to hearsay, similar fact evidence, solicitor-client privilege,
            and the Mohan framework for qualifying and using expert witnesses.
          </p>
        </div>
      </section>

      <article className="py-16 px-4">
        <div className="max-w-4xl mx-auto prose prose-slate prose-lg max-w-none">

          <h2>The Evidence Act RSO 1990</h2>
          <p>
            The <em>Evidence Act</em> RSO 1990 c E.23 governs civil proceedings in Ontario courts.
            Criminal proceedings in Ontario are governed by the <em>Canada Evidence Act</em> RSC 1985
            c C-5. Both statutes exist alongside the common law of evidence, which continues to
            apply in the absence of statutory provision.
          </p>
          <p>
            Key provisions of the Ontario <em>Evidence Act</em>:
          </p>
          <ul>
            <li>s.8: Spouses of parties are competent and compellable witnesses in civil proceedings</li>
            <li>s.13: Where a person whose evidence is material is dead or unable to testify, documents signed by that person may be admitted with corroborating evidence (discretionary)</li>
            <li>s.35: Business records — records made in the usual and ordinary course of business are admissible without calling the maker; the foundation requires evidence of the nature of the business and the record-keeping practice</li>
            <li>s.52: Admissibility of documentary evidence with proper foundation</li>
          </ul>

          <h2>Hearsay — The Principled Approach</h2>
          <p>
            Hearsay is an out-of-court statement tendered for the truth of its contents. The
            traditional rule excluded hearsay subject to categorical exceptions (dying declarations,
            admissions by party-opponents, statements against interest, res gestae, etc.). The
            Supreme Court of Canada has replaced this with the <strong>principled approach</strong>:
          </p>
          <ul>
            <li><em>R v Khan</em> [1990] 2 SCR 531 — hearsay can be admitted on a principled basis where necessary and reliable</li>
            <li><em>R v Smith</em> [1992] 2 SCR 915 — principled approach established; traditional exceptions retain presumptive admissibility</li>
            <li><em>R v Starr</em> 2000 SCC 40 — threshold reliability assessed at the voir dire; categories can no longer expand by analogy alone</li>
          </ul>
          <p>
            The two criteria for principled hearsay admission:
          </p>
          <ol>
            <li>
              <strong>Necessity</strong>: The original declarant is unavailable (dead, ill, outside jurisdiction, unwilling to testify after being found in contempt) OR the original evidence cannot be presented in an equally effective way. Mere preference for the out-of-court statement is insufficient.
            </li>
            <li>
              <strong>Threshold Reliability</strong>: There are sufficient circumstantial or corroborating guarantees of trustworthiness that the usual dangers of hearsay (no oath, no cross-examination, no demeanour assessment) are overcome. Reliability is assessed at a voir dire.
            </li>
          </ol>
          <p>
            <strong>Traditional categorical exceptions</strong> retain their presumptive admissibility
            (admissions by party-opponents, dying declarations, business records s.35 Evidence Act,
            prior inconsistent statements under oath after adverse witness finding s.9(2) Canada
            Evidence Act). Each exception has its own conditions.
          </p>
          <p>
            <strong>Prior consistent statements</strong> are generally inadmissible to bolster a
            witness&apos;s credibility. Exceptions: rebut allegation of recent fabrication; prior
            identification evidence; to establish truth where Khan necessity and reliability met.
          </p>

          <h2>Similar Fact Evidence</h2>
          <p>
            Similar fact evidence (evidence of prior discreditable conduct) is presumptively
            inadmissible because its primary effect is to show propensity to commit the act in
            question, which risks reasoning based on moral character rather than proof of the
            specific act.
          </p>
          <p>
            The test from <em>R v Handy</em> 2002 SCC 56:
          </p>
          <ol>
            <li>The party seeking admission must identify the specific use to which the evidence is put (identity, intent, modus operandi, absence of mistake — not propensity alone);</li>
            <li>The probative value must exceed the prejudicial effect on a balance;</li>
            <li>In criminal cases, probative value is assessed against: connection to the accused, degree of similarity to the alleged offence, timing, number of prior instances, circumstances, and presence of a distinctive pattern.</li>
          </ol>
          <p>
            <strong>Striking similarity</strong> in the prior conduct and the alleged offence increases
            the inferential strength. <em>Handy</em> noted the &quot;hallmark&quot; or signature quality of
            conduct can elevate probative value enough to warrant admission.
          </p>
          <p>
            In <strong>civil proceedings</strong>, similar fact evidence is subject to the same
            principled cost-benefit analysis: probative value vs prejudice and trial efficiency.
            Ontario courts have admitted prior misconduct to prove fraud, breach of fiduciary
            duty, and dishonesty in commercial disputes where sufficiently probative.
          </p>

          <h2>Privilege</h2>
          <h3>Solicitor-Client Privilege</h3>
          <p>
            Solicitor-client privilege is a substantive rule of law, not merely an evidentiary
            rule: <em>Lavallee, Rackel &amp; Heintz v Canada (AG)</em> 2002 SCC 61. It protects all
            communications between a lawyer and client made in confidence for the purpose of
            obtaining or providing legal advice. Key features:
          </p>
          <ul>
            <li>The privilege belongs to the client, not the lawyer</li>
            <li>The privilege is permanent — it continues after the retainer ends and after the client&apos;s death</li>
            <li>The privilege extends to the legal advice continuum — all communications substantially connected to the provision of legal advice</li>
            <li>The privilege applies to legal advice privilege (seeking/providing advice) and litigation privilege (dominant purpose of anticipated litigation)</li>
          </ul>
          <p>
            <strong>Crime-fraud exception</strong>: Solicitor-client privilege does not protect
            communications in furtherance of a crime or fraud. The exception requires a prima
            facie case that the communication was in furtherance of a criminal or fraudulent
            purpose: <em>Smith v Jones</em> [1999] 1 SCR 455 (public safety exception — where there
            is a clear risk to an identifiable person or group of serious bodily harm or death,
            the privilege may be overridden; threshold is high).
          </p>
          <h3>Litigation Privilege</h3>
          <p>
            Litigation privilege protects documents and communications prepared with the dominant
            purpose of anticipated or ongoing litigation. Unlike solicitor-client privilege, it
            extends beyond lawyer-client communications to include materials prepared by third
            parties (investigators, experts before retainer as experts). Litigation privilege
            ends when the litigation is concluded. <em>Blank v Canada</em> 2006 SCC 39 confirmed
            the distinction between the two privileges.
          </p>
          <h3>Informer Privilege</h3>
          <p>
            Police informer privilege is absolute — it cannot be overridden even to prove
            innocence: <em>Named Person v Vancouver Sun</em> 2007 SCC 43. The Crown must either
            disclose the informer&apos;s identity or stay the proceedings.
          </p>
          <h3>Public Interest Immunity / Crown Privilege</h3>
          <p>
            The court balances the public interest in non-disclosure against the litigant&apos;s
            interest in disclosure: <em>R v Stinchcombe</em> [1991] 3 SCR 326 (disclosure; Stinchcombe
            obligations of Crown in criminal proceedings); <em>Conway v Jacques</em> (1954) ONCA
            (civil public interest immunity).
          </p>

          <h2>The Voir Dire</h2>
          <p>
            A voir dire is a trial within a trial held to determine admissibility of evidence
            before it is placed before the trier of fact. Common voir dire purposes:
          </p>
          <ul>
            <li>Voluntariness of a statement (criminal) — <em>R v Oickle</em> 2000 SCC 38</li>
            <li>Admissibility of hearsay under the principled approach</li>
            <li>Qualification of an expert witness</li>
            <li>Charter s.24(2) exclusion hearing</li>
          </ul>
          <p>
            In jury trials, the jury is excused during the voir dire. The judge determines
            admissibility; the jury then hears only admitted evidence.
          </p>

          <h2>Expert Evidence — The Mohan Framework</h2>
          <p>
            The leading case on the admission of expert evidence in Canada is <em>R v Mohan</em>
            [1994] 2 SCR 9, establishing a four-part test:
          </p>
          <ol>
            <li><strong>Relevance</strong>: The evidence must be logically relevant to an issue in the case;</li>
            <li><strong>Necessity</strong>: The evidence must assist the trier of fact beyond the scope of their ordinary knowledge and experience — experts cannot simply tell the trier what conclusion to reach on the ultimate issue;</li>
            <li><strong>Absence of an exclusionary rule</strong>: No specific rule excludes the evidence; and</li>
            <li><strong>Properly qualified expert</strong>: The witness must have expertise by reason of training, study, or experience in the relevant field.</li>
          </ol>
          <p>
            <em>White Burgess Langille Inman v Abbott and Haliburton Co</em> 2015 SCC 23 added a
            threshold gatekeeping function on the expert&apos;s independence and impartiality:
          </p>
          <ul>
            <li>The expert has a duty to the court to provide fair, objective, and non-partisan opinion</li>
            <li>An expert who cannot or will not fulfil this duty should not be admitted, regardless of expertise</li>
            <li>The weight given to expert evidence must account for real or apparent bias</li>
          </ul>
          <p>
            <em>R v Sekhon</em> 2014 SCC 15 held that an expert witness cannot usurp the role of the
            trier of fact by providing ultimate issue opinions on credibility or guilt. In Ontario
            civil proceedings, the expert can opine on the ultimate issue (e.g., standard of care
            breach) but the trier retains independent judgment.
          </p>
          <h3>Expert Reports in Ontario Civil Proceedings</h3>
          <p>
            Rule 53.03 of the <em>Rules of Civil Procedure</em> RRO 1990 Reg 194 requires expert
            reports to be served in advance and sets out mandatory contents: the expert&apos;s qualifications,
            the opinion expressed, the basis of the opinion, and an acknowledgment of the expert&apos;s
            duty to the court. Failure to comply may result in exclusion at trial.
          </p>

          <h2>Section 24(2) Charter — Exclusion of Evidence</h2>
          <p>
            Where evidence is obtained in a manner that infringes the Canadian Charter of Rights
            and Freedoms, s.24(2) provides that the evidence shall be excluded if admitting it
            would bring the administration of justice into disrepute. The <em>R v Grant</em> 2009 SCC
            32 three-stage analysis:
          </p>
          <ol>
            <li><strong>Seriousness of the Charter-infringing conduct</strong> — more serious infringement favours exclusion;</li>
            <li><strong>Impact on the accused&apos;s Charter-protected interests</strong> — more serious impact on interests favours exclusion; and</li>
            <li><strong>Society&apos;s interest in adjudication on the merits</strong> — where the evidence is reliable and the offence serious, admission may be warranted.</li>
          </ol>
          <p>
            In Ontario, the Grant framework applies in both provincial court and Superior Court
            criminal proceedings. The <em>Evidence Act</em> has no equivalent exclusionary provision
            for civil proceedings; however, courts retain discretion to exclude evidence obtained
            in bad faith where admission would compromise trial fairness.
          </p>

        </div>
      </article>

      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Practice Management Built for Ontario Lawyers
          </h2>
          <p className="text-slate-600 mb-8">
            LSO By-Law 9 trust accounting, AI document analysis, and Ontario deadline tracking.
            $149 CAD/month for your entire firm.
          </p>
          <a
            href="https://getatticus.ca/sign-up"
            className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            Start Free Trial
          </a>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}
