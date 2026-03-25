import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ontario Professional Negligence Law Guide | Atticus",
  description:
    "Guide to professional negligence in Ontario: duty of care, standard of care, breach, causation, damages. Covers solicitor negligence, medical negligence, architect/engineer liability, and auditor liability.",
  openGraph: {
    title: "Ontario Professional Negligence — Duty, Standard of Care, and Damages",
    description:
      "Professional negligence law in Ontario: Anns/Cooper test, professional standard of care, causation but-for test, contributory negligence, and limitation periods for solicitors, physicians, architects, and auditors.",
    type: "article",
    url: "https://getatticus.ca/blog/ontario-professional-negligence",
  },
  alternates: { canonical: "https://getatticus.ca/blog/ontario-professional-negligence" },
};

export default function OntarioProfessionalNegligencePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Ontario Professional Negligence Law — Complete Guide",
    description:
      "Professional negligence in Ontario: duty, standard of care, breach, causation, and damages for solicitors, physicians, architects, engineers, and auditors.",
    author: { "@type": "Organization", name: "Atticus" },
    publisher: { "@type": "Organization", name: "Atticus" },
    datePublished: "2026-03-01",
    dateModified: "2026-03-01",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="inline-block bg-amber-500 text-slate-900 text-sm font-semibold px-4 py-1 rounded-full mb-6">
              Professional Liability
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Ontario Professional Negligence — Duty, Standard of Care, and Damages
            </h1>
            <p className="text-xl text-slate-300">
              Comprehensive guide to professional negligence in Ontario: the Anns/Cooper framework,
              profession-specific standards of care, causation, contributory negligence, and limitation
              periods for claims against solicitors, physicians, architects, engineers, and auditors.
            </p>
          </div>
        </section>

        <article className="py-16 px-4">
          <div className="max-w-3xl mx-auto prose prose-slate prose-lg">

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">The Professional Negligence Framework</h2>
            <p className="text-slate-600 mb-4">
              Professional negligence is a subspecies of the tort of negligence, applying when a person
              holding themselves out as possessing special skill or knowledge provides services below the
              standard reasonably expected of a competent member of that profession. The plaintiff must
              establish the classic negligence elements: (1) duty of care; (2) standard of care;
              (3) breach; (4) causation; and (5) damages.
            </p>
            <p className="text-slate-600 mb-4">
              The <em>Anns/Cooper</em> test governs duty of care in Canadian negligence law
              (<em>Cooper v Hobart</em> [2001] 3 SCR 537): (1) is there a sufficiently close relationship
              between the parties from which a prima facie duty arises (foreseeability + proximity)?
              (2) Are there policy reasons to negate or limit the duty? For established professional
              relationships — solicitor-client, physician-patient, architect-client — the duty is not
              in dispute. Novel duty situations require full Anns/Cooper analysis.
            </p>
            <p className="text-slate-600 mb-4">
              The standard of care in professional negligence is objective: the court asks what a
              reasonably competent member of the relevant profession, with the defendant&apos;s level of
              specialization, would have done in the same circumstances. This is not a perfection
              standard — errors in judgment do not constitute negligence if they represent choices
              a reasonable practitioner could make. Expert evidence on the standard of care is almost
              always required.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Solicitor Negligence</h2>
            <p className="text-slate-600 mb-4">
              Solicitor negligence is one of the most litigated areas of professional liability in Ontario.
              The solicitor-client relationship creates a duty of care in both contract and tort
              (<em>Central Trust Co v Rafuse</em> [1986] 2 SCR 147 — concurrent liability). The
              Limitations Act 2002 two-year period runs from the date the client knew or ought to have
              known of the damage, not from the date of the negligent act.
            </p>
            <p className="text-slate-600 mb-4">
              Common categories of solicitor negligence:
            </p>
            <ul className="space-y-3 text-slate-600 mb-6 list-none">
              <li className="flex gap-3">
                <span className="text-amber-500 font-bold">•</span>
                <span><strong>Limitation period failures</strong> — missing the 2-year Limitations Act period or 10-day discovery deadline under the <em>Proceedings Against the Crown Act</em> is the leading category of LAWPRO claims. No &quot;mistake&quot; defence — a limitation miss is strict liability negligence.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500 font-bold">•</span>
                <span><strong>Title defects in real estate</strong> — failure to search title, missed executions, survey errors, failure to obtain title insurance where appropriate. <em>Krawchuk v Scherbak</em> 2011 ONCA 352 — solicitor liable for failing to advise on survey discrepancy.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500 font-bold">•</span>
                <span><strong>Trust accounting errors</strong> — misappropriation (no defence), misapplication of trust funds, failure to remit to correct party, delayed payment. LAWPRO indemnity does not cover deliberate misappropriation.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500 font-bold">•</span>
                <span><strong>Inadequate advice</strong> — failure to advise on tax consequences, failure to identify legal issues, failure to recommend independent legal advice in conflict situations, failure to advise on risks of proceeding.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500 font-bold">•</span>
                <span><strong>Document drafting errors</strong> — wills (failure to execute, missing attestation, capacity, undue influence), agreements of purchase and sale (conditions, closing dates), commercial contracts (missing conditions precedent, no limitation of liability).</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500 font-bold">•</span>
                <span><strong>Undertaking breaches</strong> — undertakings given to other solicitors are enforceable as solicitor obligations; failure to fulfill creates professional misconduct and civil liability.</span>
              </li>
            </ul>
            <p className="text-slate-600 mb-4">
              Causation in solicitor negligence: the &quot;but for&quot; test (<em>Athey v Leonati</em> [1996] 3 SCR 458).
              For litigation file failures, the plaintiff must prove they had a &quot;viable&quot; or &quot;good arguable&quot;
              case (<em>Hall v Bennett Estate</em> 2003 ONCA — not certainty of success). The court conducts
              a &quot;trial within a trial&quot; to assess the lost chance. For transactional negligence, the
              plaintiff must show what they would have done differently with proper advice (often &quot;I would
              not have entered the transaction&quot;).
            </p>
            <p className="text-slate-600 mb-4">
              LAWPRO (Lawyers&apos; Professional Indemnity Company) is the mandatory insurer for Ontario
              lawyers. Coverage: $1 million per claim for most lawyers; $2 million aggregate per year.
              TitlePLUS program for real estate. Coverage exclusions include fraudulent acts (though
              innocent partner coverage exists), business enterprise activities, and claims between
              law firm partners/employees.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Medical Negligence</h2>
            <p className="text-slate-600 mb-4">
              Medical negligence in Ontario follows the same negligence framework with profession-specific
              standards of care. The physician&apos;s standard of care is that of a reasonably competent
              physician in the same specialty in the same or similar circumstances — a cardiologist is
              held to a cardiologist&apos;s standard, not a GP&apos;s standard (<em>ter Neuzen v Korn</em> [1995]
              3 SCR 674).
            </p>
            <p className="text-slate-600 mb-4">
              Informed consent is a separate head of liability distinct from negligence in the performance
              of the procedure. Under <em>Reibl v Hughes</em> [1980] 2 SCR 880, the standard for disclosure
              is objective-subjective: what information would a reasonable patient in the plaintiff&apos;s
              circumstances want to know, assessed against the specific patient&apos;s circumstances and
              questions asked. The physician must disclose material risks — those that a reasonable person
              in the patient&apos;s position would want to know. Causation for informed consent: would the
              patient have refused the procedure if properly informed? This is assessed objectively —
              not whether this particular plaintiff would have refused, but whether a reasonable person
              in the plaintiff&apos;s position would have refused (modified objective standard from <em>Arndt v
              Smith</em> [1997] 2 SCR 539).
            </p>
            <p className="text-slate-600 mb-4">
              Causation in medical negligence: general but-for test (<em>Athey</em>), with material
              contribution to risk exception where multiple defendants may each have contributed and
              it is impossible to determine which caused the harm (<em>Clements v Clements</em> [2012]
              2 SCR 181 — material contribution to risk applies only where but-for would deny recovery
              to a plaintiff who was clearly injured by a defendant&apos;s breach).
            </p>
            <p className="text-slate-600 mb-4">
              Limitation periods: standard 2-year Limitations Act 2002 discovery-based period, with
              the 15-year ultimate limitation period under s.15. For children, the limitation period
              does not run until the child reaches age 18 (s.6). For claims arising from sexual abuse,
              special rules under s.10 (no limitation period for certain claims).
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Architect and Engineer Liability</h2>
            <p className="text-slate-600 mb-4">
              Architects and engineers owe a duty of care to their clients in both contract and tort.
              The standard of care is that of a reasonably competent practitioner in the relevant
              specialty. Design errors, supervision failures, and certification errors are common
              categories of claims.
            </p>
            <p className="text-slate-600 mb-4">
              Under the <em>Construction Act</em> RSO 1990 c C.30, certified progress payment certificates
              (Form 9 architect&apos;s certificate) bind the certifier — an architect who certifies work as
              complete when it is not can face liability to the owner. The architect&apos;s duty to the owner
              includes inspecting construction for substantial compliance with drawings and specifications.
            </p>
            <p className="text-slate-600 mb-4">
              Third party liability: under <em>Hedley Byrne</em> principles (adopted in Canada in
              <em>Haig v Bamford</em> [1977] 1 SCR 466), a professional may owe a duty to third parties
              who reasonably rely on their work product if the professional knew the statement or report
              would be communicated to a limited class of persons for a specific purpose. Environmental
              assessors, appraisers, and structural engineers may face third-party liability to
              purchasers who relied on their reports.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Auditor and Accountant Liability</h2>
            <p className="text-slate-600 mb-4">
              Auditors owe a duty to the audited company and its shareholders as a class. Third-party
              claims by creditors and investors who relied on audit reports are governed by the
              <em>Hercules Management Ltd v Ernst &amp; Young</em> [1997] 2 SCR 165 framework: duty
              of care to the class of shareholders as a group for the purpose of supervising management,
              but NOT to individual shareholders making investment decisions or to third-party lenders.
            </p>
            <p className="text-slate-600 mb-4">
              Standard of care for auditors follows GAAP and GAAS (Generally Accepted Auditing Standards).
              Failure to detect a material misstatement may constitute negligence if a competent auditor
              applying GAAS would have detected it. Fraud by management is not generally attributable
              to auditor negligence unless the auditor failed to apply appropriate skepticism required
              by auditing standards.
            </p>
            <p className="text-slate-600 mb-4">
              Ontario Securities Act Part XXIII.1 secondary market civil liability: auditors who certify
              financial statements included in a prospectus or annual report face statutory liability
              for misrepresentations. This is a form of securities professional liability distinct from
              the tort of negligence, with different causation and damages rules.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Defences and Contribution</h2>
            <p className="text-slate-600 mb-4">
              <strong>Contributory negligence</strong> under the <em>Negligence Act</em> RSO 1990 c N.1:
              where the plaintiff&apos;s own negligence contributed to their damage, liability is apportioned
              proportionately. Contributory negligence is commonly raised in professional negligence —
              &quot;the client failed to read the contract and would have identified the defect.&quot;
            </p>
            <p className="text-slate-600 mb-4">
              <strong>Voluntary assumption of risk</strong> (volenti non fit injuria): the plaintiff
              knew of and agreed to accept the risk. Rarely succeeds in professional negligence — courts
              are reluctant to find a client assumed the risk of professional incompetence.
            </p>
            <p className="text-slate-600 mb-4">
              <strong>Contractual limitation of liability</strong>: professionals may limit their liability
              by contract to a fixed amount or to fees paid. Courts will enforce limitation clauses
              if clearly expressed and not unconscionable, though they will not enforce clauses that
              purport to exclude liability for fraud or intentional wrongdoing.
            </p>
            <p className="text-slate-600 mb-4">
              <strong>Concurrent tortfeasors</strong>: under the Negligence Act, multiple defendants
              who caused the same indivisible damage are jointly and severally liable. Contribution
              between professionals is assessed proportionately. A plaintiff can pursue any or all
              defendants for full recovery, leaving contribution claims between the defendants.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Limitation Periods — Professional Negligence</h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full border border-slate-200 rounded-lg">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="text-left py-3 px-4 font-semibold text-slate-700">Profession</th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-700">Limitation Period</th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-700">Key Trigger</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="py-3 px-4 text-slate-600">Solicitor negligence</td>
                    <td className="py-3 px-4 text-slate-600">2 years (discovery)</td>
                    <td className="py-3 px-4 text-slate-600">Knowledge of loss, not act</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-slate-600">Medical negligence</td>
                    <td className="py-3 px-4 text-slate-600">2 years (discovery)</td>
                    <td className="py-3 px-4 text-slate-600">Knowledge of injury and connection</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-slate-600">Architect/engineer</td>
                    <td className="py-3 px-4 text-slate-600">2 years (discovery)</td>
                    <td className="py-3 px-4 text-slate-600">Discovery of defect/damage</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-slate-600">Auditor negligence</td>
                    <td className="py-3 px-4 text-slate-600">2 years (discovery)</td>
                    <td className="py-3 px-4 text-slate-600">Discovery of misstatement reliance</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-slate-600">All professions — ultimate</td>
                    <td className="py-3 px-4 text-slate-600">15 years (s.15 LA 2002)</td>
                    <td className="py-3 px-4 text-slate-600">Date of act or omission</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Practical Checklist for Professional Negligence Counsel</h2>
            <ul className="space-y-3 text-lg text-slate-600">
              <li className="flex gap-3">
                <span className="text-amber-500 font-bold mt-1">✓</span>
                <span>Identify the retainer or engagement scope — the professional&apos;s duty is limited to the scope of the retainer; acts outside retainer may not create liability</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500 font-bold mt-1">✓</span>
                <span>Obtain expert evidence on standard of care — courts will not accept counsel argument on what a &quot;reasonable&quot; professional would do without expert support</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500 font-bold mt-1">✓</span>
                <span>Apply but-for causation rigorously: what would plaintiff have done with proper advice? For litigation claims, assess lost-chance value</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500 font-bold mt-1">✓</span>
                <span>Check discovery: limitation runs from when plaintiff knew (or ought to have known) loss was occasioned by the professional&apos;s act — not from the act itself</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500 font-bold mt-1">✓</span>
                <span>Identify all potential defendants: firm plus individual practitioner; supervisors if applicable; consider contribution claims against other professionals involved</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500 font-bold mt-1">✓</span>
                <span>Assess contributory negligence: did the client fail to read documents, provide incorrect information, or ignore warnings? Proportionate reduction may apply</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500 font-bold mt-1">✓</span>
                <span>Review the professional&apos;s insurance: LAWPRO for lawyers (mandatory), CMPA for physicians, professional liability insurance for accountants/engineers/architects</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500 font-bold mt-1">✓</span>
                <span>For solicitor claims: file a LAWPRO claim notice early — LAWPRO defence counsel will appear; consider whether client&apos;s interests and LAWPRO&apos;s interests are aligned</span>
              </li>
            </ul>

            <div className="mt-12 bg-amber-50 rounded-xl p-6 border border-amber-200">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Manage Professional Negligence Files with Atticus
              </h3>
              <p className="text-slate-600 mb-4">
                Atticus helps professional liability counsel track Limitations Act deadlines, manage
                expert retainers, and maintain LSO-compliant trust accounts for settlements. AI document
                analysis extracts key facts from expert reports, retainer letters, and file records.
              </p>
              <a
                href="/sign-up"
                className="inline-block bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold py-3 px-8 rounded-lg transition-colors"
              >
                Try Atticus Free
              </a>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
