import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ontario Slip and Fall Law: Occupiers' Liability Act Guide | Atticus",
  description:
    "A practical guide to Ontario slip and fall claims under the Occupiers' Liability Act, RSO 1990, c O.2. Covers duty of care, contributory negligence, municipal liability, winter maintenance, and limitation periods.",
  alternates: { canonical: "https://getatticus.ca/blog/ontario-slip-and-fall" },
  openGraph: {
    title: "Ontario Slip and Fall Law: Occupiers' Liability Act Guide | Atticus",
    description:
      "Everything Ontario lawyers need to know about occupiers' liability claims — duty of care, standard of care, municipal notices, contributory negligence, and damages.",
    url: "https://getatticus.ca/blog/ontario-slip-and-fall",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Ontario Slip and Fall Law: Occupiers' Liability Act Guide",
  description: "A practical guide to Ontario slip and fall claims under the Occupiers' Liability Act.",
  author: { "@type": "Organization", name: "Atticus" },
  publisher: { "@type": "Organization", name: "Atticus" },
  datePublished: "2025-10-15",
  url: "https://getatticus.ca/blog/ontario-slip-and-fall",
};

const contributoryRows = [
  ["Inappropriate footwear (high heels, flip-flops on ice)", "10\u201325%"],
  ["Distracted by phone / not watching where walking", "15\u201330%"],
  ["Ignoring visible hazard or warning signs", "25\u201350%"],
  ["Entering area despite obvious danger", "30\u201350%"],
  ["Intoxication contributing to fall", "25\u201375% (fact-specific)"],
];

export default function SlipAndFallPage() {
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
              <span className="text-slate-400 text-sm">Personal Injury</span>
            </div>
            <h1 className="text-4xl font-bold mb-4">
              Ontario Slip and Fall Law: A Practical Guide to Occupiers&apos; Liability
            </h1>
            <p className="text-slate-300 text-lg">
              A complete reference for Ontario personal injury lawyers covering the Occupiers&apos; Liability
              Act, winter maintenance standards, municipal liability, contributory negligence, and
              limitation periods.
            </p>
            <p className="text-slate-500 text-sm mt-4">Last updated: October 2025 &middot; 12 min read</p>
          </div>
        </section>

        <article className="py-12 px-6">
          <div className="max-w-3xl mx-auto space-y-8 text-slate-700 leading-relaxed">

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">The Legislative Framework</h2>
              <p>
                Slip and fall claims in Ontario are governed primarily by the <em>Occupiers&apos; Liability
                Act</em>, RSO 1990, c O.2 (OLA). The OLA replaced the common law categories of invitee,
                licensee, and trespasser with a unified statutory duty of care. Section 3(1) requires
                an occupier to take such care as in all the circumstances is reasonable to see that
                persons entering on the premises are reasonably safe while on the premises.
              </p>
              <p className="mt-3">
                This reasonable care standard is contextual. Courts assess what a reasonable occupier
                would have done, given the nature of the premises, foreseeability of harm, and the
                practicality of precautions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Who Is an Occupier?</h2>
              <p>
                Section 1 of the OLA defines an occupier broadly as a person who is in physical
                possession of premises or has responsibility for and control over the condition of
                premises, activities conducted there, or persons allowed to enter. Critically,
                multiple parties can be co-occupiers simultaneously &mdash; a landlord, property manager,
                and commercial tenant may all be occupiers with concurrent liability.
              </p>
              <p className="mt-3">
                In <em>Waldick v Malcolm</em> [1991] 2 SCR 456, the Supreme Court confirmed that
                the occupier&apos;s duty cannot be contracted out of for personal injury to non-trespassing
                visitors (s. 3(3) OLA). Control is the central factor &mdash; if you have the ability to
                remedy a hazard, you may be an occupier.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Standard of Care: What Plaintiffs Must Prove</h2>
              <p>To succeed in an OLA claim, a plaintiff must establish:</p>
              <ol className="list-decimal ml-6 mt-3 space-y-1">
                <li>The defendant was an occupier of the premises;</li>
                <li>The plaintiff was a lawful entrant (not a trespasser);</li>
                <li>There was a hazardous condition on the premises;</li>
                <li>The occupier knew or ought to have known of the hazard;</li>
                <li>The occupier failed to take reasonable steps to remedy or warn; and</li>
                <li>The failure caused the plaintiff&apos;s injury.</li>
              </ol>
              <p className="mt-3">
                Constructive knowledge is sufficient &mdash; a store that fails to inspect its floor for an
                hour before a slip is liable even if no employee saw the liquid. The question is how
                long the hazard existed and whether a reasonable inspection system would have caught it.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Winter Maintenance and Snow/Ice Claims</h2>
              <p>
                Winter slip and fall claims are among the most common in Ontario. The standard of care
                for outdoor surfaces depends on the type of premises:
              </p>
              <ul className="list-disc ml-6 mt-3 space-y-2">
                <li>
                  <strong>Residential landlords</strong> &mdash; must maintain walkways, parking lots, and
                  common areas in a reasonably safe condition. Failure to sand or salt after a freezing
                  rain event within a reasonable time is actionable.
                </li>
                <li>
                  <strong>Commercial occupiers</strong> &mdash; typically expected to implement and follow a
                  written snow and ice removal program. In <em>Stewart v Pettie</em> [1995] 1 SCR 131,
                  the Supreme Court held a bar owner liable for a patron who fell on ice outside because
                  the occupier had control of the area.
                </li>
                <li>
                  <strong>Industrial premises</strong> &mdash; often higher standards given volume of
                  pedestrian traffic and ability to implement robust maintenance programs.
                </li>
              </ul>
              <p className="mt-3">
                Key evidence in winter claims: maintenance logs, Environment Canada weather records,
                photographs taken shortly after the fall, incident reports, and contractor records
                showing the last salt/sand application.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Municipal Liability</h2>
              <p>
                Claims against municipalities for sidewalk and road conditions are governed not only by
                the OLA but also by the <em>Municipal Act, 2001</em>, SO 2001, c 25.
              </p>
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 my-4">
                <p className="font-semibold text-red-900 mb-1">Critical: 10-Day Written Notice Requirement</p>
                <p className="text-red-800 text-sm">
                  Under s. 44(10) of the Municipal Act, written notice must be given to the
                  municipality within 10 days of the injury. Failure to give notice is a complete bar
                  to the claim unless the court finds no prejudice (s. 44(12)). Ontario courts apply
                  this provision strictly &mdash; missing the 10-day window is a litigation-ending error
                  in most cases.
                </p>
              </div>
              <p>
                <strong>Minimum Maintenance Standards (O.Reg. 239/02)</strong> provide a safe harbour
                for municipalities that comply with their inspection and maintenance requirements. If a
                municipality shows MMS compliance, the burden shifts to the plaintiff to prove the
                standard itself was inadequate &mdash; a high bar under s. 44(3.1) of the Municipal Act.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Contributory Negligence</h2>
              <p>
                Ontario&apos;s <em>Negligence Act</em>, RSO 1990, c N.1, allows courts to apportion fault
                between plaintiff and defendant. Common contributory negligence findings:
              </p>
              <div className="overflow-x-auto mt-4">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-slate-100">
                      <th className="border border-slate-200 px-4 py-2 text-left font-semibold">Plaintiff Conduct</th>
                      <th className="border border-slate-200 px-4 py-2 text-left font-semibold">Typical Reduction</th>
                    </tr>
                  </thead>
                  <tbody>
                    {contributoryRows.map(([conduct, range]) => (
                      <tr key={conduct} className="odd:bg-white even:bg-slate-50">
                        <td className="border border-slate-200 px-4 py-2">{conduct}</td>
                        <td className="border border-slate-200 px-4 py-2 font-mono">{range}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Damages</h2>
              <ul className="list-disc ml-6 space-y-2">
                <li><strong>General damages</strong> &mdash; pain and suffering, loss of enjoyment of life. In serious falls (hip fractures, spinal injuries), damages can approach the Andrews cap (~$440,000 in 2025).</li>
                <li><strong>Special damages</strong> &mdash; past medical expenses, assistive devices, home modifications.</li>
                <li><strong>Past income loss</strong> &mdash; documented through tax returns and employment records.</li>
                <li><strong>Future care costs</strong> &mdash; quantified through an OT future care cost report, present-valued by an economist.</li>
                <li><strong>Future income loss</strong> &mdash; relevant where injuries affect long-term employment capacity.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Limitation Periods</h2>
              <p>
                The standard 2-year limitation period under the <em>Limitations Act, 2002</em> applies,
                running from the date the plaintiff discovered (or ought to have discovered) the claim.
              </p>
              <ul className="list-disc ml-6 mt-3 space-y-2">
                <li><strong>Minors:</strong> Limitation does not run against a minor until age 18 or appointment of a litigation guardian (s. 6 Limitations Act, 2002).</li>
                <li><strong>Municipalities:</strong> The 10-day notice requirement operates separately from the 2-year limitation period.</li>
                <li><strong>Crown entities:</strong> Claims subject to the Proceedings Against the Crown Act, RSO 1990, c P.27.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Investigation Checklist (First 30 Days)</h2>
              <ul className="list-disc ml-6 space-y-1">
                <li>Photograph the scene, hazard, footwear worn, and injuries;</li>
                <li>Secure surveillance footage before it is overwritten (typically 30-day retention);</li>
                <li>Obtain incident report filed by the occupier;</li>
                <li>For municipal claims: serve 10-day written notice immediately;</li>
                <li>Request maintenance logs, inspection records, and contractor invoices;</li>
                <li>Obtain Environment Canada weather data for the date and time of fall;</li>
                <li>Identify all possible occupiers and co-defendants;</li>
                <li>Consider a biomechanical engineer or slip resistance expert if causation is contested.</li>
              </ul>
            </section>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
              <h3 className="font-semibold text-blue-900 mb-2">Manage PI Files with Atticus</h3>
              <p className="text-blue-800 text-sm mb-4">
                Atticus automatically tracks limitation period deadlines, extracts key facts from
                medical records and IME reports, and generates morning briefings so you never miss
                a deadline in your Ontario personal injury practice.
              </p>
              <Link
                href="/sign-up"
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-sm font-semibold transition-colors inline-block"
              >
                Start Free Trial
              </Link>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
