import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ontario Mental Health Law: Involuntary Admission, Form 1, and CCB | Atticus",
  description:
    "A practical guide to Ontario mental health law under the Mental Health Act, RSO 1990, c M.7. Covers involuntary admission, Form 1 and Form 2, rights advisement, the Consent and Capacity Board, and the Health Care Consent Act.",
  alternates: { canonical: "https://getatticus.ca/blog/ontario-mental-health-law" },
  openGraph: {
    title: "Ontario Mental Health Law: Involuntary Admission, Form 1, and CCB | Atticus",
    description:
      "Complete reference for Ontario lawyers on mental health law — Form 1 and Form 2 criteria, rights advisement, CCB hearings, and HCCA consent and capacity.",
    url: "https://getatticus.ca/blog/ontario-mental-health-law",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Ontario Mental Health Law: Involuntary Admission, Form 1, and CCB",
  description: "A practical guide to Ontario mental health law under the Mental Health Act, RSO 1990, c M.7.",
  author: { "@type": "Organization", name: "Atticus" },
  publisher: { "@type": "Organization", name: "Atticus" },
  datePublished: "2025-10-28",
  url: "https://getatticus.ca/blog/ontario-mental-health-law",
};

const forms = [
  ["Form 1", "Application by Physician for Psychiatric Assessment", "Physician has examined the person within past 7 days and believes criteria met; authorizes 72-hour detention for assessment", "MHA s.15"],
  ["Form 2", "Order for Examination", "Justice of the Peace, on sworn information, orders police to take person to psychiatric facility for examination", "MHA s.16"],
  ["Form 3", "Certificate of Involuntary Admission", "Issued after Form 1 assessment; authorizes detention up to 2 weeks for first certificate", "MHA s.20"],
  ["Form 4", "Certificate of Renewal", "Renews involuntary status: 1 month (first renewal), 2 months (second), 3 months (subsequent)", "MHA s.20"],
  ["Form 14", "Rights Advice Request", "Patient uses this to request a rights adviser", "MHA s.38"],
  ["Form 30", "Application to CCB re: Involuntary Status", "Patient or SDM applies to CCB to review involuntary detention", "MHA s.39"],
];

export default function MentalHealthLawPage() {
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
              <span className="text-slate-400 text-sm">Health Law</span>
            </div>
            <h1 className="text-4xl font-bold mb-4">
              Ontario Mental Health Law: Involuntary Admission, Form 1, and the Consent and Capacity Board
            </h1>
            <p className="text-slate-300 text-lg">
              A complete reference for Ontario lawyers &mdash; the Mental Health Act criteria for
              involuntary admission, Form 1 and Form 2 procedure, rights advisement, CCB hearings,
              and the intersection with the Health Care Consent Act.
            </p>
            <p className="text-slate-500 text-sm mt-4">Last updated: October 2025 &middot; 14 min read</p>
          </div>
        </section>

        <article className="py-12 px-6">
          <div className="max-w-3xl mx-auto space-y-8 text-slate-700 leading-relaxed">

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">The Legislative Framework</h2>
              <p>
                Ontario mental health law is governed primarily by three statutes:
              </p>
              <ul className="list-disc ml-6 mt-3 space-y-1">
                <li><strong>Mental Health Act</strong>, RSO 1990, c M.7 (MHA) &mdash; involuntary admission, detention, and leave;</li>
                <li><strong>Health Care Consent Act</strong>, 1996, SO 1996, c 2, Sched A (HCCA) &mdash; consent to treatment, capacity assessments, substitute decision-making;</li>
                <li><strong>Substitute Decisions Act</strong>, 1992, SO 1992, c 30 (SDA) &mdash; powers of attorney for personal care, guardianship of the person.</li>
              </ul>
              <p className="mt-3">
                The Consent and Capacity Board (CCB) is the administrative tribunal that adjudicates
                most mental health disputes in Ontario, including challenges to involuntary admission,
                treatment decisions, and capacity findings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Criteria for Involuntary Admission (Form 1)</h2>
              <p>
                A physician may complete a Form 1 (Application by Physician for Psychiatric Assessment)
                under s. 15 of the MHA where the physician has examined the person within the previous
                7 days and has reasonable cause to believe that the person:
              </p>
              <div className="bg-slate-50 border-l-4 border-blue-500 p-4 my-4">
                <p className="font-semibold text-slate-900 mb-2">s. 15(1) MHA &mdash; The &quot;Or&quot; Test</p>
                <p className="text-slate-700 text-sm mb-2">The person has apparently a mental disorder of a nature or quality that likely will result in:</p>
                <ol className="list-decimal ml-4 text-sm text-slate-700 space-y-1">
                  <li>Serious bodily harm to the person;</li>
                  <li>Serious bodily harm to another person; or</li>
                  <li>Serious physical impairment of the person.</li>
                </ol>
                <p className="text-slate-700 text-sm mt-2">
                  AND the person is not suitable for admission as a voluntary patient.
                </p>
              </div>
              <p>
                A Form 1 authorizes detention for up to <strong>72 hours</strong> for psychiatric
                assessment. It does not authorize treatment &mdash; treatment consent remains separate
                under the HCCA unless the person is found incapable.
              </p>
              <p className="mt-3">
                Important: the physician need not have personally observed the behaviour. The assessment
                of likelihood can be based on information from third parties (family members, police)
                combined with the clinical examination. In <em>Conway v Jacques</em>, 1954 OWN 412,
                the Court recognized that the examination requirement is satisfied by a genuine
                clinical assessment, not merely a brief conversation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Form 2: Justice of the Peace Application</h2>
              <p>
                Where a physician is not available or accessible, any person may apply to a Justice
                of the Peace under s. 16 of the MHA. The JP may issue a Form 2 (Order for Examination)
                where satisfied on reasonable grounds that the s. 15 criteria are met.
              </p>
              <p className="mt-3">
                A Form 2 authorizes a police officer to take the person to a psychiatric facility
                for examination. The Form 2 itself does not authorize detention &mdash; a physician at
                the facility must then conduct an examination and, if criteria are met, issue a Form 1.
              </p>
              <p className="mt-3">
                Form 2 applications are significant in situations involving: family members seeking
                help for a relative who refuses voluntary treatment; individuals found in public in
                apparent psychiatric crisis; and situations where prior physician contact is difficult.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Forms Reference Table</h2>
              <div className="overflow-x-auto mt-4">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-slate-100">
                      <th className="border border-slate-200 px-3 py-2 text-left font-semibold">Form</th>
                      <th className="border border-slate-200 px-3 py-2 text-left font-semibold">Name</th>
                      <th className="border border-slate-200 px-3 py-2 text-left font-semibold">Effect</th>
                      <th className="border border-slate-200 px-3 py-2 text-left font-semibold">Authority</th>
                    </tr>
                  </thead>
                  <tbody>
                    {forms.map(([form, name, effect, auth]) => (
                      <tr key={form} className="odd:bg-white even:bg-slate-50">
                        <td className="border border-slate-200 px-3 py-2 font-bold">{form}</td>
                        <td className="border border-slate-200 px-3 py-2">{name}</td>
                        <td className="border border-slate-200 px-3 py-2">{effect}</td>
                        <td className="border border-slate-200 px-3 py-2 font-mono text-xs">{auth}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Rights Advisement</h2>
              <p>
                Section 38 of the MHA requires that every involuntary patient be advised of their
                rights by a rights adviser as soon as practicable after being admitted involuntarily.
                Rights advisers are independent of the facility and are funded by the government.
              </p>
              <p className="mt-3">
                A rights adviser must inform the patient of:
              </p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>The right to retain and instruct counsel without delay;</li>
                <li>The right to apply to the CCB for a review of involuntary status;</li>
                <li>The right to apply to the CCB regarding treatment decisions;</li>
                <li>The right to apply for leave of absence from the facility.</li>
              </ul>
              <p className="mt-3">
                For lawyers, rights advisement is the critical intake point. A patient or their family
                who contacts a lawyer should be advised to request a rights adviser immediately if not
                already seen. The clock for CCB applications starts running from the time of
                certification, not from rights advisement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">The Consent and Capacity Board</h2>
              <p>
                The CCB is an independent tribunal established under the HCCA. It has jurisdiction to
                hear applications challenging:
              </p>
              <ul className="list-disc ml-6 mt-3 space-y-1">
                <li>Involuntary detention under the MHA;</li>
                <li>Findings of incapacity to consent to treatment under the HCCA;</li>
                <li>Decisions of substitute decision-makers (SDMs);</li>
                <li>Findings of incapacity under the SDA (powers of attorney for personal care);</li>
                <li>Community treatment orders (CTOs) under s. 33.1 MHA.</li>
              </ul>
              <p className="mt-3">
                <strong>Timing:</strong> A CCB hearing on involuntary status must be held within
                7 days of the application. The hearing is de novo &mdash; the CCB hears evidence
                and makes its own findings rather than deferring to the treating physician.
              </p>
              <p className="mt-3">
                <strong>Standard on CCB review of involuntary status:</strong> The CCB must determine
                whether, at the time of the hearing, the person meets the criteria for involuntary
                admission under s. 20 of the MHA. The onus is on the hospital to justify continued
                detention.
              </p>
              <p className="mt-3">
                <strong>Appeals:</strong> CCB decisions are appealable to the Superior Court of Justice
                under s. 80 of the HCCA on questions of law or fact. The court applies a correctness
                standard on questions of law and reasonableness on questions of fact and mixed
                fact/law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Community Treatment Orders</h2>
              <p>
                Section 33.1 of the MHA provides for community treatment orders (CTOs), which allow
                a person to live in the community subject to conditions including compliance with
                treatment. CTOs are available where a person has been an involuntary patient for at
                least three of the preceding six months and the treating physician believes the person
                will, without a CTO, likely require involuntary admission.
              </p>
              <p className="mt-3">
                CTOs are controversial and are frequently challenged before the CCB. The patient has
                the right to a CCB hearing to review the CTO within 7 days of issuance. In practice,
                CTOs are used most frequently in cases involving persistent non-compliance with
                medication by individuals with serious mental illness.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Intersection with Criminal Law: Fitness and NCR</h2>
              <p>
                Mental health law intersects with criminal procedure in two key contexts:
              </p>
              <div className="space-y-4 mt-4">
                <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-1">Fitness to Stand Trial (Criminal Code s.2)</h3>
                  <p className="text-sm text-slate-600">
                    A court may order a forensic assessment where there are grounds to believe the
                    accused is unfit to stand trial due to mental disorder. Fitness requires the ability
                    to understand the nature of the proceedings and communicate with counsel. The Ontario
                    Review Board (ORB) supervises accused found unfit.
                  </p>
                </div>
                <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-1">Not Criminally Responsible (NCR) &mdash; Criminal Code s.16</h3>
                  <p className="text-sm text-slate-600">
                    A verdict of NCR on account of mental disorder (NCRMD) results in the accused
                    being placed under the jurisdiction of the Ontario Review Board rather than
                    sentenced. The ORB holds annual hearings and may impose absolute discharge,
                    conditional discharge, or detention in a mental health facility.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Practical Tips for Ontario Lawyers</h2>
              <ul className="list-disc ml-6 space-y-2">
                <li>Act quickly on CCB applications &mdash; the 7-day hearing window is tight. Have your application materials ready to file on the day of contact.</li>
                <li>Obtain the Form 1 or Form 3 immediately &mdash; the specific wording of the physician&apos;s grounds will drive your CCB hearing strategy.</li>
                <li>Subpoena the treating physician if possible &mdash; cross-examining them on the basis for certification is often more effective than calling defence witnesses.</li>
                <li>For treatment consent disputes under the HCCA, the &quot;capable wishes&quot; of the patient when capable bind the SDM &mdash; document any prior expressed wishes.</li>
                <li>Community treatment orders can be challenged on procedural grounds &mdash; check whether the CTO meets all conditions in s. 33.1 including the physician&apos;s consultation obligations.</li>
              </ul>
            </section>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
              <h3 className="font-semibold text-blue-900 mb-2">Manage Health Law and CCB Files with Atticus</h3>
              <p className="text-blue-800 text-sm mb-4">
                Atticus tracks tight CCB deadlines, extracts key clinical facts from medical records,
                and organizes your Ontario health law matters with AI document intelligence.
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
