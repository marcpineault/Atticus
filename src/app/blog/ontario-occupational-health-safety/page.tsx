import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ontario Occupational Health and Safety: Employer Duties, OHSA, and Workplace Investigations | Atticus Blog",
  description:
    "Complete guide to Ontario occupational health and safety law: OHSA RSO 1990, employer duties, worker rights, MOL inspections, reprisals, workplace violence and harassment, and Bill 168.",
  openGraph: {
    title: "Ontario Occupational Health and Safety: Employer Duties, OHSA, and Workplace Investigations",
    description:
      "Complete guide to Ontario OHS law: OHSA RSO 1990 employer duties, worker right to refuse, JHSC requirements, MOL inspections, reprisals, workplace violence/harassment, and enforcement.",
    type: "article",
    url: "https://getatticus.ca/blog/ontario-occupational-health-safety",
  },
  alternates: { canonical: "https://getatticus.ca/blog/ontario-occupational-health-safety" },
};

export default function OntarioOccupationalHealthSafetyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Ontario Occupational Health and Safety: Employer Duties, OHSA, and Workplace Investigations",
            description:
              "Complete guide to Ontario occupational health and safety law under OHSA RSO 1990: employer duties, worker rights, JHSC, MOL inspections, reprisals, and workplace violence/harassment.",
            url: "https://getatticus.ca/blog/ontario-occupational-health-safety",
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
            <span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
              Employment Law
            </span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
            Ontario Occupational Health and Safety: Employer Duties, OHSA, and Workplace Investigations
          </h1>
          <p className="text-gray-500 text-sm mb-8">March 2026 &middot; 14 min read</p>

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Ontario&apos;s <em>Occupational Health and Safety Act</em>, RSO 1990, c O.1 (OHSA) is the primary
            statute governing workplace health and safety. It imposes obligations on employers, supervisors,
            owners, constructors, and workers, and creates significant enforcement and liability exposure.
            Employment lawyers advising on workplace injuries, harassment investigations, and regulatory
            compliance must understand the full OHSA framework.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            1. Scope and Application
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The OHSA applies to virtually all Ontario workplaces — manufacturing, construction, offices,
            healthcare, retail, and hospitality. Certain sectors have sector-specific regulations that
            elaborate on the general OHSA framework:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li><em>Industrial Establishments Regulation</em> (O. Reg. 851)</li>
            <li><em>Construction Projects Regulation</em> (O. Reg. 213/91)</li>
            <li><em>Health Care and Residential Facilities Regulation</em> (O. Reg. 67/93)</li>
            <li><em>Mines and Mining Plants Regulation</em> (O. Reg. 854)</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-6">
            Federal undertakings (banks, airlines, telecommunications, interprovincial transport) are
            governed by the <em>Canada Labour Code</em>, Part II, not OHSA.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            2. Core Employer Duties — Section 25
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Section 25 of the OHSA imposes broad duties on employers. The most important:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>
              <strong>s. 25(1)(a):</strong> Provide and maintain equipment, materials, and protective devices
              as prescribed.
            </li>
            <li>
              <strong>s. 25(1)(b):</strong> Ensure equipment, materials, and protective devices are used
              as prescribed.
            </li>
            <li>
              <strong>s. 25(2)(a):</strong> Provide information, instruction, and supervision to a worker
              to protect health and safety.
            </li>
            <li>
              <strong>s. 25(2)(h) — the overarching duty:</strong> Take every precaution reasonable in
              the circumstances for the protection of workers. This is the residual &quot;catch-all&quot; duty and
              is frequently the basis for Ministry of Labour prosecutions.
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-6">
            The &quot;take every precaution reasonable&quot; standard is objective — the employer is measured against
            what a reasonable employer in similar circumstances would have done. Ignorance of a hazard is
            not a defence if the hazard was reasonably foreseeable.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            3. Supervisor Duties — Section 27
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Supervisors bear personal duties under s. 27. A supervisor must:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>Ensure workers comply with the OHSA and regulations</li>
            <li>Ensure workers use required equipment and protective devices</li>
            <li>Advise workers of actual and potential hazards</li>
            <li>Take every precaution reasonable in the circumstances</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-6">
            Supervisors can be personally prosecuted. Individual convictions of supervisors — resulting
            in fines up to $100,000 or 12 months imprisonment (or both) — are not uncommon following
            serious workplace injuries.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            4. Worker Rights
          </h2>
          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">4.1 Right to Know</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Workers have the right to know about actual and potential hazards in the workplace. This
            includes WHMIS (Workplace Hazardous Materials Information System) labelling and Safety Data
            Sheets for hazardous materials.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">4.2 Right to Participate</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Workers have the right to participate in identifying and resolving workplace health and
            safety concerns — primarily through the Joint Health and Safety Committee (JHSC).
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">4.3 Right to Refuse Unsafe Work — Sections 43–45</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            A worker may refuse work where they have reasonable grounds to believe the work is likely to
            endanger themselves or another worker. The refusal procedure:
          </p>
          <ol className="list-decimal pl-6 mb-6 space-y-2 text-gray-700">
            <li>Worker notifies supervisor or employer of the refusal and the reasons</li>
            <li>Supervisor and worker (and JHSC worker member or worker health and safety representative, if any) investigate</li>
            <li>If the matter is not resolved, the worker may continue the refusal</li>
            <li>Either party may request a Ministry of Labour inspector to investigate (s. 44)</li>
            <li>The inspector investigates and issues a decision in writing</li>
          </ol>
          <p className="text-gray-700 leading-relaxed mb-6">
            Pending investigation, the employer may assign the refusing worker to other reasonable work.
            The employer may direct another worker to perform the work — but must first inform that worker
            of the refusal and the reasons.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            5. Joint Health and Safety Committee (JHSC)
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Workplaces with 20 or more regularly employed workers must have a JHSC under s. 9. The JHSC:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>Must include at least two members — at least one management and one worker representative</li>
            <li>Worker members must be certified under s. 9(12) — must complete a Ministry-approved certification training program</li>
            <li>Must meet at least quarterly (monthly if the workplace had a lost-time injury rate above average)</li>
            <li>Must conduct workplace inspections at least monthly (rotating portions of the workplace)</li>
            <li>Must investigate serious accidents (critical injuries or fatalities)</li>
            <li>Has the right to make recommendations to the employer — the employer must respond in writing within 21 days</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-6">
            Workplaces with fewer than 20 workers but at least 6 must have a health and safety
            representative (s. 8) with similar but reduced functions.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            6. Critical Injury and Fatality Reporting
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Section 51 requires immediate notification to the Ministry of Labour when a worker is killed
            or critically injured at a workplace. &quot;Critical injury&quot; is defined in O. Reg. 834 and includes:
            fracture of the skull, spine, pelvis, arm, leg, or wrist; amputation; loss of sight; internal
            haemorrhage; burns; loss of consciousness from any cause.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Section 51 also requires preserving the scene: the employer must ensure the scene is not
            disturbed except to rescue a worker, prevent further injury, or comply with an order of
            an inspector. Tampering with a scene after a critical injury or fatality is a serious offence.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            A written report must follow within 48 hours describing the accident. The employer must
            also notify the JHSC co-chairs.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            7. Workplace Violence and Harassment — Bill 168 (2009)
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Ontario&apos;s <em>Bill 168</em> (2009) amended the OHSA to add specific requirements for workplace
            violence and harassment (ss. 32.0.1–32.0.7). These obligations apply to all Ontario employers:
          </p>
          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">7.1 Workplace Violence</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>
              <strong>Policy required (s. 32.0.1):</strong> Employer must prepare and review at least annually
              a written workplace violence policy.
            </li>
            <li>
              <strong>Program required (s. 32.0.2):</strong> Employer must develop a workplace violence
              program to implement the policy — including measures and procedures to control identified risks,
              summoning immediate assistance, and reporting to the employer.
            </li>
            <li>
              <strong>Risk assessment (s. 32.0.3):</strong> Employer must assess the risk of workplace violence
              from the nature of the workplace, type of work, and conditions of work. The assessment must be
              reviewed at least annually or when a new circumstance arises.
            </li>
            <li>
              <strong>Domestic violence disclosure (s. 32.0.4):</strong> Where an employer becomes aware —
              or ought reasonably to be aware — that domestic violence may come into the workplace and expose
              a worker to physical injury, the employer must take every precaution reasonable.
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">7.2 Workplace Harassment</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Workplace harassment is defined in s. 1 as engaging in a course of vexatious comment or
            conduct that is known or ought reasonably to be known to be unwelcome. It includes harassment
            on prohibited grounds under the <em>Human Rights Code</em> and sexual harassment.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Bill 132 (2016) strengthened workplace harassment requirements by requiring employers to:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>Develop a written workplace harassment policy (s. 32.0.1(1)(b))</li>
            <li>Establish a workplace harassment program addressing investigation procedures</li>
            <li>Ensure reported incidents are investigated appropriately (s. 32.0.7)</li>
            <li>Provide written results of the investigation to the complainant and respondent</li>
            <li>Inform the complainant of any corrective action taken</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-6">
            The Ministry of Labour may appoint an investigator if it determines that an employer&apos;s
            investigation was inadequate. This &quot;ministry investigator&quot; mechanism was introduced by Bill 132
            and has been used in high-profile cases.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            8. Reprisals — Section 50
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Section 50 prohibits reprisals against workers who exercise rights under the OHSA — including
            refusing unsafe work, participating in JHSC activities, seeking enforcement, or giving evidence
            in proceedings. A reprisal is defined broadly to include dismissal, discipline, penalty, or
            threat.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            The burden of proof is reversed: once a worker establishes that they exercised an OHSA right
            and suffered an adverse employment action, the employer must prove the action was not a reprisal.
            This reversal significantly strengthens the worker&apos;s position.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Reprisal complaints are filed with the Ontario Labour Relations Board (OLRB) — not the Ministry
            of Labour. The OLRB may reinstate the worker, award lost wages, and impose civil penalties.
            The OLRB process is faster and less formal than civil litigation.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            9. Ministry of Labour Inspections and Enforcement
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Ministry of Labour inspectors have broad powers under s. 54: to enter workplaces without
            notice, inspect and take samples, examine documents and records, and issue orders.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            An inspector may issue:
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="min-w-full border border-gray-200 rounded-lg text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">Order Type</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">Effect</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">Appeal</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-100">
                  <td className="px-4 py-3 font-medium text-gray-900">Order to comply (s. 57)</td>
                  <td className="px-4 py-3 text-gray-600">Requires compliance with OHSA or regulations by set date</td>
                  <td className="px-4 py-3 text-gray-600">OLRB within 30 days</td>
                </tr>
                <tr className="border-t border-gray-100 bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-900">Stop-work order (s. 57)</td>
                  <td className="px-4 py-3 text-gray-600">Shuts down work or part of workplace until hazard addressed</td>
                  <td className="px-4 py-3 text-gray-600">OLRB within 30 days; work remains stopped pending appeal</td>
                </tr>
                <tr className="border-t border-gray-100">
                  <td className="px-4 py-3 font-medium text-gray-900">Order to produce</td>
                  <td className="px-4 py-3 text-gray-600">Requires production of records, reports, and documents</td>
                  <td className="px-4 py-3 text-gray-600">Not typically separately appealable</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            10. Offences and Penalties — Section 66
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            OHSA offences are quasi-criminal (regulatory). Convictions carry significant consequences:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>
              <strong>Individual (worker, supervisor):</strong> Fine up to $100,000 and/or 12 months imprisonment.
            </li>
            <li>
              <strong>Corporation:</strong> Fine up to $1,500,000.
            </li>
            <li>
              <strong>Director/officer:</strong> Where they directed, authorized, assented to, acquiesced
              in, or participated in the offence — personally liable to the same fines and imprisonment
              as an individual.
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-6">
            The Ministry has ramped up prosecutions following serious workplace fatalities. High-profile
            convictions — including in the construction, mining, and food processing sectors — have
            resulted in fines in the millions of dollars.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            The due diligence defence is available: the defendant must prove they took every precaution
            reasonable in the circumstances. The burden of establishing due diligence is on the defendant
            on a balance of probabilities.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            11. Practical Considerations for Employment Lawyers
          </h2>
          <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
            <li>
              <strong>Scene preservation is critical:</strong> Following a critical injury or fatality,
              advise the employer immediately to preserve the scene and document the condition of equipment,
              materials, and the work area. Contemporaneous photographs and measurements are essential.
            </li>
            <li>
              <strong>Privilege considerations:</strong> Internal investigation reports prepared in anticipation
              of OHSA prosecution may attract solicitor-client privilege if counsel is engaged immediately.
              Engage criminal/regulatory counsel promptly after any serious incident.
            </li>
            <li>
              <strong>Separate the internal investigation from the regulatory response:</strong> The OHSA
              harassment investigation obligation and a potential HRTO complaint are distinct processes.
              Ensure the internal investigation is documented and defensible independently of any
              regulatory proceeding.
            </li>
            <li>
              <strong>Directors and officers personal liability:</strong> Advise directors and officers that
              &quot;I didn&apos;t know&quot; is not a defence if they ought to have known. Strong OHS management systems,
              documented training programs, and safety audits are the best protection.
            </li>
            <li>
              <strong>Limitation period for OLRB reprisal complaints:</strong> A reprisal complaint under
              s. 50 must be filed with the OLRB within 60 days of the reprisal. This is a hard deadline
              with limited ability to extend.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            Conclusion
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Ontario&apos;s OHSA imposes substantial obligations on employers, supervisors, and directors.
            The combination of regulatory prosecution risk, stop-work orders, JHSC requirements,
            and the growing enforcement of workplace harassment obligations means that employment
            lawyers must be well-versed in the Act. The due diligence defence rewards employers
            who build genuine OHS management systems — not just paper policies.
          </p>

          <div className="mt-16 p-8 bg-yellow-50 rounded-2xl border border-yellow-100">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Manage Employment Law Files with Atticus
            </h3>
            <p className="text-gray-600 mb-6">
              Employment and labour matters involve tight deadlines, complex regulatory compliance, and
              sensitive client communications. Atticus helps Ontario employment lawyers track limitation
              periods, manage trust accounting, and stay organized — all in one LSO-compliant platform.
            </p>
            <a
              href="/sign-up"
              className="inline-block bg-yellow-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-yellow-700 transition-colors"
            >
              Start Free Trial
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
