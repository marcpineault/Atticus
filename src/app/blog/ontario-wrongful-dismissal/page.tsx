import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ontario Wrongful Dismissal: Common Law Notice, ESA Minimums, and Damages | Atticus Blog",
  description:
    "Complete guide to Ontario wrongful dismissal: common law reasonable notice, ESA minimum entitlements, constructive dismissal, Wallace damages, and mitigation obligations.",
  openGraph: {
    title: "Ontario Wrongful Dismissal: Common Law Notice, ESA Minimums, and Damages",
    description:
      "Complete guide to Ontario wrongful dismissal law: common law reasonable notice (Bardal factors), ESA minimums, constructive dismissal, bad faith damages, and mitigation.",
    type: "article",
    url: "https://getatticus.ca/blog/ontario-wrongful-dismissal",
  },
  alternates: { canonical: "https://getatticus.ca/blog/ontario-wrongful-dismissal" },
};

export default function OntarioWrongfulDismissalPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Ontario Wrongful Dismissal: Common Law Notice, ESA Minimums, and Damages",
            description:
              "Complete guide to Ontario wrongful dismissal: common law reasonable notice, ESA minimums, constructive dismissal, Wallace/Honda damages, and mitigation.",
            url: "https://getatticus.ca/blog/ontario-wrongful-dismissal",
            datePublished: "2026-03-19",
            author: { "@type": "Organization", name: "Atticus" },
            publisher: {
              "@type": "Organization",
              name: "Atticus",
              logo: {
                "@type": "ImageObject",
                url: "https://getatticus.ca/logo.png",
              },
            },
          }),
        }}
      />
      <main className="min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <div className="mb-8">
            <span className="inline-block bg-rose-100 text-rose-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
              Employment Law
            </span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
            Ontario Wrongful Dismissal: Common Law Notice, ESA Minimums, and Damages
          </h1>
          <p className="text-gray-500 text-sm mb-8">March 2026 &middot; 14 min read</p>

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Wrongful dismissal is the most common employment law claim in Ontario. Unlike employment
            at-will jurisdictions, Ontario employees are entitled to reasonable notice of termination —
            or pay in lieu — at common law, in addition to the minimum statutory entitlements under
            the <em>Employment Standards Act, 2000</em>, SO 2000, c 41 (ESA). Understanding the
            relationship between ESA minimums and common law entitlements is fundamental to employment
            practice in Ontario.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            1. The Two-Track System: ESA vs Common Law
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Ontario employees have two parallel sets of rights on termination:
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="min-w-full border border-gray-200 rounded-lg text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">Feature</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">ESA Minimums</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">Common Law</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-100">
                  <td className="px-4 py-3 font-medium text-gray-900">Source</td>
                  <td className="px-4 py-3 text-gray-600">Employment Standards Act, 2000</td>
                  <td className="px-4 py-3 text-gray-600">Court-developed (Bardal factors)</td>
                </tr>
                <tr className="border-t border-gray-100 bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-900">Can be contracted out?</td>
                  <td className="px-4 py-3 text-gray-600">No — ESA minimums cannot be waived</td>
                  <td className="px-4 py-3 text-gray-600">Yes — if contract explicitly limits notice to ESA minimums (with proper language)</td>
                </tr>
                <tr className="border-t border-gray-100">
                  <td className="px-4 py-3 font-medium text-gray-900">Notice period (8 years service)</td>
                  <td className="px-4 py-3 text-gray-600">8 weeks (1 week per year to 8-year max)</td>
                  <td className="px-4 py-3 text-gray-600">10–18 months (depends on Bardal factors)</td>
                </tr>
                <tr className="border-t border-gray-100 bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-900">Severance pay</td>
                  <td className="px-4 py-3 text-gray-600">1 week per year (if 5+ years, employer payroll $2.5M+)</td>
                  <td className="px-4 py-3 text-gray-600">No statutory severance — subsumed in reasonable notice</td>
                </tr>
                <tr className="border-t border-gray-100">
                  <td className="px-4 py-3 font-medium text-gray-900">Benefits continuation</td>
                  <td className="px-4 py-3 text-gray-600">ESA notice period only</td>
                  <td className="px-4 py-3 text-gray-600">Full benefits through notice period (including bonus, pension)</td>
                </tr>
                <tr className="border-t border-gray-100 bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-900">Enforcement</td>
                  <td className="px-4 py-3 text-gray-600">Employment Standards Officer or OLRB</td>
                  <td className="px-4 py-3 text-gray-600">Superior Court of Justice (or Small Claims if under $35K)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            2. ESA Minimum Entitlements
          </h2>
          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">2.1 Termination Pay</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Under s. 57 of the ESA, an employer must provide notice (working notice) or termination
            pay (pay in lieu) of:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>1 week for 1–2 years of service</li>
            <li>2 weeks for 2–3 years of service</li>
            <li>Continuing at 1 week per year up to 8 weeks (8+ years)</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-6">
            During the ESA notice period, the employer must continue benefits and cannot reduce wages
            or hours. Termination notice may be given as working notice, pay in lieu, or a combination.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">2.2 Severance Pay</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Separate from termination pay, s. 64 requires severance pay if:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>The employee has been employed for 5 or more years; AND</li>
            <li>The employer has a total Ontario payroll of $2.5 million or more per year, OR the employee was severed as part of a mass termination of 50 or more employees in a 6-month period</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-6">
            Severance pay = 1 week per year (or partial year) of service, to a maximum of 26 weeks.
            Combined with termination pay, the maximum ESA entitlement for a long-service employee
            at a large employer is 34 weeks (8 weeks termination + 26 weeks severance).
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            3. Common Law Reasonable Notice — The Bardal Factors
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            At common law, an employee dismissed without cause is entitled to reasonable notice or
            pay in lieu. The leading case is <em>Bardal v Globe and Mail</em> (1960), 24 DLR (2d) 140 (Ont HC),
            which established the factors courts consider:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>
              <strong>Character of employment:</strong> Managers and professionals receive longer notice
              than hourly workers. Seniority, specialized skills, and supervisory responsibilities
              increase the notice period.
            </li>
            <li>
              <strong>Length of service:</strong> Generally the most important factor. Courts award
              approximately 1 month per year of service as a starting point, adjusted by other factors.
            </li>
            <li>
              <strong>Age:</strong> Older employees receive longer notice because they face greater
              difficulty finding comparable employment. Age 50+ typically extends the notice period.
            </li>
            <li>
              <strong>Availability of similar employment:</strong> The state of the labour market and
              the availability of comparable positions in the employee&apos;s specialty or industry.
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-6">
            Additional factors recognized by courts:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>Inducement to leave a secure job (inducement claims justify longer notice)</li>
            <li>Whether the employee was promised indefinite employment or job security</li>
            <li>Whether the employee was a key person or held a unique role</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-6">
            The current &quot;soft cap&quot; on reasonable notice is approximately 24 months — though courts have
            awarded up to 30 months in exceptional circumstances: <em>Lowndes v Summit Ford Sales</em>,
            2006 CanLII 14 (ON CA).
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            4. What Is Included in Reasonable Notice Damages
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The plaintiff is entitled to everything they would have earned or received during the notice
            period:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>Base salary (including any salary increases that would have occurred)</li>
            <li>Bonus and commission (based on prior earnings or expectation)</li>
            <li>Benefits — health, dental, life insurance, RRSP contributions, pension</li>
            <li>Share options or restricted shares that would have vested</li>
            <li>Car allowance and expense allowances</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-6">
            Bonus claims during the notice period have generated significant litigation. Courts have
            consistently held that where a bonus was an integral part of compensation, the employee
            is entitled to a bonus equivalent in the notice period even if the plan contains a
            &quot;must be actively employed on payment date&quot; clause — such clauses must explicitly extend
            to the notice period: <em>Paquette v TeraGo Networks</em>, 2016 ONCA 618.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            5. Contractual Limitation of Notice
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            An employment contract may limit the employee to ESA minimums on termination — effectively
            excluding common law notice. However, the clause must:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>Be clearly worded to rebut the common law presumption of reasonable notice</li>
            <li>Not provide less than ESA minimums on its face (or it is void)</li>
            <li>Not have become unenforceable through subsequent promotion or changed duties</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-6">
            Courts have found termination clauses void in two circumstances:
          </p>
          <ol className="list-decimal pl-6 mb-6 space-y-2 text-gray-700">
            <li>
              <strong>ESA violation:</strong> If a clause, on its face or in any realistic application,
              could provide less than ESA minimums, it is void entirely — the employee receives full
              common law notice: <em>Waksdale v Swegon North America</em>, 2020 ONCA 391.
            </li>
            <li>
              <strong>Changed circumstances:</strong> If the employee&apos;s role changed materially (promotion,
              significantly different responsibilities), the original employment contract may not govern
              the new role.
            </li>
          </ol>
          <p className="text-gray-700 leading-relaxed mb-6">
            <em>Waksdale</em> established that courts will invalidate the entire termination clause — not just
            the offending provision — if any part of the clause violates the ESA. This has led many employers
            to re-draft their termination clauses and re-execute employment agreements with existing employees.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            6. Constructive Dismissal
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Constructive dismissal occurs when an employer makes a unilateral change to a fundamental
            term of employment so significant that the employee is treated as having been dismissed.
            The employee may resign and claim wrongful dismissal damages.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Constructive dismissal requires:
          </p>
          <ol className="list-decimal pl-6 mb-6 space-y-2 text-gray-700">
            <li>A unilateral change by the employer to a fundamental term of the employment contract</li>
            <li>A reasonable employee in the circumstances would have felt their employment was substantially changed</li>
          </ol>
          <p className="text-gray-700 leading-relaxed mb-6">
            Common constructive dismissal scenarios: salary reduction, demotion or significant change
            in duties, involuntary transfer to another location, withdrawal of a significant benefit,
            and persistent harassment or hostile work environment.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            An employee who believes they have been constructively dismissed must resign within a
            reasonable time after the change — an employee who continues to work for an extended
            period after the change may be found to have condoned it.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            7. Bad Faith Damages — Honda v Keays
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The Supreme Court of Canada in <em>Honda Canada Inc v Keays</em> [2008] 2 SCR 362 confirmed that
            additional damages are available for the manner of dismissal where the employer acted in
            bad faith, causing mental suffering. The employer&apos;s conduct must be independently wrongful —
            bad faith in the manner of termination.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Unlike the prior <em>Wallace v United Grain Growers</em> [1997] 3 SCR 701 approach (extending
            the notice period), <em>Honda v Keays</em> awards these as aggravated damages — based on
            actual harm suffered, not an extended notice period.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Bad faith conduct examples: making false allegations of cause to force a resignation,
            providing a false reason for dismissal, humiliating the employee in front of colleagues,
            and failure to investigate before termination.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            8. Mitigation
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            A dismissed employee has a duty to mitigate their damages by making reasonable efforts
            to find comparable employment. Failure to mitigate reduces the notice period damages by
            the income the employee could reasonably have earned.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            The mitigation obligation is not absolute:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>The employee must make reasonable efforts — not take any available job</li>
            <li>The employee is not required to accept employment that is humiliating or at a substantially lower level</li>
            <li>The employee is not required to return to the same employer if that employer offers re-employment (unless the offer is reasonable in the circumstances)</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-6">
            Income earned through mitigation during the notice period is deducted from damages. The
            onus is on the employer to prove failure to mitigate — not on the employee to prove they
            mitigated: <em>Evans v Teamsters Local Union No 31</em> [2008] 1 SCR 661.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            9. Practical Considerations for Employment Counsel
          </h2>
          <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
            <li>
              <strong>Review the employment contract first:</strong> Assess whether there is a valid
              termination clause limiting notice to ESA minimums. Apply <em>Waksdale</em> — review the
              entire termination section, not just the without-cause provision.
            </li>
            <li>
              <strong>Calculate ESA minimums precisely:</strong> Confirm employment start date, payroll
              threshold for severance, and whether the employee was part of a mass termination. ESA
              minimums are the floor — they must be met regardless of the contract.
            </li>
            <li>
              <strong>Demand package — compute all elements:</strong> Base salary, average bonus over
              3 years, benefits continuation value, unvested equity. A missed bonus or benefit
              continuation claim can be as large as the salary component.
            </li>
            <li>
              <strong>Record mitigation efforts:</strong> Advise employee clients to keep a log of
              job applications, interviews, and rejections. This evidence is essential if the employer
              raises failure to mitigate.
            </li>
            <li>
              <strong>2-year limitation period:</strong> Claims for wrongful dismissal must be brought
              within 2 years of the date of dismissal (date of last day of employment). The discoverability
              principle generally does not extend this period for wrongful dismissal.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            Conclusion
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Ontario wrongful dismissal law has become increasingly favourable to employees through
            judicial development of the Bardal factors, the broad application of <em>Waksdale</em> to void
            termination clauses, and the expanded bonus entitlement in the notice period. Employment
            counsel representing either side must be well-versed in both the ESA floor and the common
            law ceiling — and the significant contractual complexity that lies between them.
          </p>

          <div className="mt-16 p-8 bg-rose-50 rounded-2xl border border-rose-100">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Manage Employment Law Files with Atticus
            </h3>
            <p className="text-gray-600 mb-6">
              Employment law matters have strict limitation periods, complex damages calculations, and
              sensitive client communications. Atticus helps Ontario employment lawyers track 2-year
              limitation deadlines, manage disbursements in trust, and stay organized across a busy
              practice — all in one LSO-compliant platform.
            </p>
            <a
              href="/sign-up"
              className="inline-block bg-rose-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-rose-700 transition-colors"
            >
              Start Free Trial
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
