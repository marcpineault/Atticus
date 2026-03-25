import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ontario Human Rights Law: OHRC, HRTO Applications, and Duty to Accommodate | Atticus",
  description:
    "A practical guide to Ontario human rights law under the Ontario Human Rights Code, RSO 1990, c H.19. Covers protected grounds, HRTO applications, the duty to accommodate, undue hardship, and remedies.",
  alternates: { canonical: "https://getatticus.ca/blog/ontario-human-rights-discrimination" },
  openGraph: {
    title: "Ontario Human Rights Law: OHRC, HRTO, and Duty to Accommodate | Atticus",
    description:
      "Complete reference for Ontario lawyers on human rights — protected grounds, HRTO procedure, prima facie discrimination, duty to accommodate to the point of undue hardship, and remedies.",
    url: "https://getatticus.ca/blog/ontario-human-rights-discrimination",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Ontario Human Rights Law: OHRC, HRTO Applications, and Duty to Accommodate",
  description: "A practical guide to Ontario human rights law under the Ontario Human Rights Code.",
  author: { "@type": "Organization", name: "Atticus" },
  publisher: { "@type": "Organization", name: "Atticus" },
  datePublished: "2025-11-05",
  url: "https://getatticus.ca/blog/ontario-human-rights-discrimination",
};

const grounds = [
  ["Race, colour, ancestry, place of origin", "Employment, housing, services, contracts, vocational associations"],
  ["Ethnic origin, citizenship", "Employment, housing, services"],
  ["Creed (religion)", "All social areas — includes manifestation of beliefs, not just belief itself"],
  ["Sex (including pregnancy, gender identity, gender expression)", "All social areas — includes sexual harassment, pregnancy discrimination"],
  ["Sexual orientation", "All social areas"],
  ["Disability (physical or mental)", "All social areas — broadest ground by application volume"],
  ["Age (18 and over)", "Employment — mandatory retirement abolished in Ontario 2006"],
  ["Marital status, family status", "Employment and housing — includes childcare obligations (family status)"],
  ["Receipt of public assistance", "Housing only"],
  ["Record of offences (pardoned/record suspension)", "Employment only"],
];

const remedies = [
  ["Monetary compensation — injury to dignity, feelings, and self-respect", "No cap — awards range from $5,000 to $50,000+ for serious cases"],
  ["Lost wages / income", "From date of discrimination to date of decision"],
  ["General damages for other losses", "Provable financial losses flowing from discrimination"],
  ["Reinstatement", "Return to employment — ordered less often than compensation"],
  ["Systemic remedies", "Policy changes, training, reporting requirements on respondent"],
  ["Public interest remedies", "Order respondent to post human rights policy, participate in audit"],
];

export default function HumanRightsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-white">
        <section className="bg-slate-900 text-white py-16 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <Link href="/blog" className="text-slate-400 hover:text-white text-sm transition-colors">Blog</Link>
              <span className="text-slate-600">&#8250;</span>
              <span className="text-slate-400 text-sm">Employment &amp; Human Rights</span>
            </div>
            <h1 className="text-4xl font-bold mb-4">
              Ontario Human Rights Law: OHRC, HRTO Applications, and the Duty to Accommodate
            </h1>
            <p className="text-slate-300 text-lg">
              A complete reference for Ontario lawyers &mdash; protected grounds under the
              Ontario Human Rights Code, HRTO application procedure, prima facie discrimination,
              the duty to accommodate to the point of undue hardship, and available remedies.
            </p>
            <p className="text-slate-500 text-sm mt-4">Last updated: November 2025 &middot; 14 min read</p>
          </div>
        </section>

        <article className="py-12 px-6">
          <div className="max-w-3xl mx-auto space-y-8 text-slate-700 leading-relaxed">

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">The Ontario Human Rights Code</h2>
              <p>
                The <em>Ontario Human Rights Code</em>, RSO 1990, c H.19 (Code) is Ontario&apos;s
                primary human rights legislation. It prohibits discrimination and harassment in five
                social areas:
              </p>
              <ul className="list-disc ml-6 mt-3 space-y-1">
                <li><strong>Services, goods, and facilities</strong> (s. 1) &mdash; includes retail stores, restaurants, professional services, government services, and online platforms;</li>
                <li><strong>Accommodation (housing)</strong> (s. 2) &mdash; includes rental housing and condominiums;</li>
                <li><strong>Contracts</strong> (s. 3);</li>
                <li><strong>Employment</strong> (ss. 5&ndash;7) &mdash; the largest category of HRTO applications;</li>
                <li><strong>Membership in vocational associations and trade unions</strong> (s. 6).</li>
              </ul>
              <p className="mt-3">
                The Code has quasi-constitutional status in Ontario. It prevails over other provincial
                legislation except where a statute expressly says it applies despite the Code.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Protected Grounds</h2>
              <div className="overflow-x-auto mt-4">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-slate-100">
                      <th className="border border-slate-200 px-3 py-2 text-left font-semibold">Protected Ground</th>
                      <th className="border border-slate-200 px-3 py-2 text-left font-semibold">Applicable Social Areas</th>
                    </tr>
                  </thead>
                  <tbody>
                    {grounds.map(([ground, areas]) => (
                      <tr key={ground} className="odd:bg-white even:bg-slate-50">
                        <td className="border border-slate-200 px-3 py-2 font-medium">{ground}</td>
                        <td className="border border-slate-200 px-3 py-2">{areas}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4">
                The ground of <strong>disability</strong> is the most frequently invoked at the
                HRTO, particularly in employment contexts. &quot;Disability&quot; is defined broadly under
                s. 10 to include physical, mental, and developmental disabilities, as well as
                conditions perceived to be disabilities.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">HRTO Application Procedure</h2>
              <p>
                The <em>Human Rights Tribunal of Ontario</em> (HRTO) is the exclusive adjudicative
                body for Code violations in Ontario. Since 2008, applicants file directly with the
                HRTO &mdash; the Ontario Human Rights Commission no longer handles individual complaints.
                The Commission retains a public interest mandate to bring its own applications and
                intervene in proceedings.
              </p>
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 my-4">
                <p className="font-semibold text-red-900 mb-1">Critical: One-Year Limitation Period</p>
                <p className="text-red-800 text-sm">
                  An application to the HRTO must be filed within <strong>one year</strong> of
                  the last incident of discrimination (s. 34(1) Code). The HRTO has discretion to
                  extend this where it is fair and equitable to do so (s. 34(2)), but extensions are
                  not automatically granted. Missing the one-year deadline without a compelling
                  explanation regularly results in dismissal.
                </p>
              </div>
              <p>
                The HRTO process typically involves:
              </p>
              <ol className="list-decimal ml-6 mt-3 space-y-1">
                <li>Filing of Form 1 application online (no fee);</li>
                <li>Respondent&apos;s response (Form 2) within 35 days;</li>
                <li>Mandatory mediation &mdash; approximately 75% of cases settle at this stage;</li>
                <li>Summary hearing (written) to screen out applications without merit;</li>
                <li>Full merits hearing &mdash; evidence, witnesses, submissions;</li>
                <li>Decision by HRTO member.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Establishing Prima Facie Discrimination</h2>
              <p>
                To establish a prima facie case of discrimination, the applicant must show on the
                balance of probabilities that:
              </p>
              <ol className="list-decimal ml-6 mt-3 space-y-1">
                <li>They have a characteristic protected by the Code;</li>
                <li>They experienced adverse treatment in an area covered by the Code; and</li>
                <li>The protected characteristic was a factor in the adverse treatment.</li>
              </ol>
              <p className="mt-3">
                The protected characteristic need not be the <em>sole</em> or even the <em>primary</em>
                reason for the adverse treatment &mdash; it is sufficient if it was <em>a</em> factor.
                This is a lower bar than but-for causation.
              </p>
              <p className="mt-3">
                Once prima facie discrimination is established, the burden shifts to the respondent
                to justify the conduct under s. 11 (constructive discrimination), s. 17 (accommodation
                defence), or another Code provision. The respondent must prove justification on the
                balance of probabilities.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">The Duty to Accommodate</h2>
              <p>
                Section 17 of the Code provides that a right under the Code is not infringed where
                the person responsible for the accommodation demonstrates that the needs of the
                person with the disability cannot be accommodated without undue hardship, considering
                costs, outside sources of funding, and health and safety requirements.
              </p>
              <p className="mt-3">
                The duty to accommodate requires the respondent to take steps to eliminate barriers
                to the fullest extent possible short of undue hardship. Key principles established
                by the HRTO and courts:
              </p>
              <ul className="list-disc ml-6 mt-3 space-y-2">
                <li>
                  <strong>Individualized assessment:</strong> Accommodation must be tailored to the
                  individual&apos;s specific needs, not just offered as a standardized option. In
                  <em> Central Okanagan School District No. 23 v Renaud</em> [1992] 2 SCR 970,
                  the Supreme Court confirmed that minor inconvenience is not undue hardship.
                </li>
                <li>
                  <strong>Cooperative process:</strong> The duty to accommodate is a shared
                  obligation. The employee must cooperate in the accommodation process, provide
                  medical information when requested, and consider alternatives proposed. Failure
                  to cooperate can be found to be a failure to accommodate the accommodation process.
                </li>
                <li>
                  <strong>Undue hardship factors:</strong> Only cost, outside sources of funding,
                  and health and safety are recognized hardship factors in Ontario. Disruption to
                  operations, co-worker resentment, and administrative inconvenience are not undue
                  hardship.
                </li>
                <li>
                  <strong>Medical information:</strong> Employers are entitled to functional
                  information about limitations and restrictions but not the underlying diagnosis.
                  An employer cannot require disclosure of the specific medical condition.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Family Status and Childcare Obligations</h2>
              <p>
                The ground of family status has evolved significantly since <em>Johnstone v Canada
                Border Services Agency</em>, 2014 FCA 110. The test in Ontario has moved toward
                requiring that the employee demonstrate: (1) a legal obligation to a child
                or family member; (2) reasonable efforts to self-accommodate; and (3) the employer&apos;s
                workplace rule materially interferes with the family obligation.
              </p>
              <p className="mt-3">
                Shift change requests, inflexible scheduling, and mandatory overtime have all been
                found to trigger the duty to accommodate on family status grounds in HRTO decisions
                where parents of young children could not arrange childcare. This is an active and
                evolving area of Ontario human rights law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Available Remedies</h2>
              <div className="overflow-x-auto mt-4">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-slate-100">
                      <th className="border border-slate-200 px-3 py-2 text-left font-semibold">Remedy</th>
                      <th className="border border-slate-200 px-3 py-2 text-left font-semibold">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {remedies.map(([remedy, notes]) => (
                      <tr key={remedy} className="odd:bg-white even:bg-slate-50">
                        <td className="border border-slate-200 px-3 py-2 font-medium">{remedy}</td>
                        <td className="border border-slate-200 px-3 py-2">{notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4">
                The <strong>injury to dignity</strong> award is the most common form of monetary
                compensation. The HRTO has awarded up to $75,000 for egregious cases involving
                prolonged sexual harassment or severe racial discrimination, but awards in the
                $15,000&ndash;$30,000 range are most common for workplace discrimination cases.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Practical Tips for Ontario Human Rights Lawyers</h2>
              <ul className="list-disc ml-6 space-y-2">
                <li>Confirm the one-year limitation period at intake — the HRTO is strict, and a missed deadline requires a compelling extension argument.</li>
                <li>Document the accommodation process thoroughly — the failure to keep records of accommodation requests and responses is frequently fatal to respondent defences.</li>
                <li>For disability cases, obtain medical information early and assess whether functional limitations support an accommodation defence or whether the employer is relying on stereotypes.</li>
                <li>Approximately 75% of HRTO matters settle at mediation — prepare your client for a realistic range of outcomes and the time cost of proceeding to a merits hearing.</li>
                <li>Consider concurrent civil claims (wrongful dismissal, harassment) alongside the HRTO application &mdash; Ontario courts have jurisdiction to award Code damages, and civil proceedings offer discovery rights the HRTO process does not.</li>
              </ul>
            </section>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
              <h3 className="font-semibold text-blue-900 mb-2">Manage Human Rights Files with Atticus</h3>
              <p className="text-blue-800 text-sm mb-4">
                Atticus tracks HRTO deadlines, extracts key facts from employment records and
                correspondence, and organizes your Ontario human rights matters with AI document
                intelligence.
              </p>
              <Link href="/sign-up" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-sm font-semibold transition-colors inline-block">
                Start Free Trial
              </Link>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
