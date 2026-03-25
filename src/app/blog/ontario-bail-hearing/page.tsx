import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ontario Bail Hearing Guide 2024: Show Cause, Reverse Onus, and Detention Grounds | Atticus",
  description:
    "Ontario bail hearings: primary, secondary, and tertiary grounds for detention, reverse onus offences, show cause procedure, surety qualifications, bail conditions, bail review, and preparation checklist for defence counsel at bail hearings.",
  openGraph: {
    title: "Ontario Bail Hearing Guide 2024: Show Cause, Reverse Onus, and Detention Grounds",
    description:
      "Complete guide for Ontario criminal defence lawyers on bail hearings — show cause burden, 3 detention grounds, reverse onus offences, surety requirements, bail conditions, and bail review procedure.",
    url: "https://getatticus.ca/blog/ontario-bail-hearing",
    siteName: "Atticus",
    type: "article",
  },
  alternates: { canonical: "https://getatticus.ca/blog/ontario-bail-hearing" },
};

const schemaJson = `{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Ontario Bail Hearing Guide 2024: Show Cause, Reverse Onus, and Detention Grounds",
      "description": "Ontario bail hearings covering primary/secondary/tertiary detention grounds, reverse onus offences, show cause procedure, surety qualifications, bail conditions, and bail review.",
      "url": "https://getatticus.ca/blog/ontario-bail-hearing",
      "datePublished": "2024-12-01",
      "dateModified": "2024-12-01",
      "author": { "@type": "Organization", "name": "Atticus" },
      "publisher": { "@type": "Organization", "name": "Atticus", "url": "https://getatticus.ca" }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What are the three grounds for detention at a bail hearing in Ontario?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under Criminal Code s. 515(10), detention may be justified on three grounds: (1) Primary ground — necessary to ensure attendance in court (flight risk); (2) Secondary ground — necessary for protection or safety of the public, including witnesses, where the accused poses a substantial likelihood of committing a criminal offence or interfering with the administration of justice; (3) Tertiary ground — necessary to maintain confidence in the administration of justice, considering the strength of the Crown's case, the gravity of the offence, circumstances of the commission, and potential for a lengthy sentence."
          }
        },
        {
          "@type": "Question",
          "name": "What is a reverse onus bail hearing in Ontario?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In a standard show cause hearing, the Crown bears the burden of justifying detention. In a reverse onus hearing under Criminal Code s. 515(6), the accused must show cause why detention is not justified. Reverse onus applies to specific offences including: indictable offences committed while on bail, drug trafficking and importing offences, offences involving firearms and prohibited weapons, serious offences alleged to have been committed for a criminal organization, and terrorism offences."
          }
        },
        {
          "@type": "Question",
          "name": "Who can be a surety at a bail hearing in Ontario?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A surety is a person who pledges money (the recognizance amount) as security for the accused's compliance with bail conditions. To qualify as a surety in Ontario, a person must: be a Canadian citizen or permanent resident, have assets sufficient to cover the pledged amount, not be charged with a criminal offence themselves, understand the conditions of release, and be willing to report to police if the accused breaches conditions. Sureties are not required in all cases — many accused are released on their own recognizance."
          }
        },
        {
          "@type": "Question",
          "name": "How do you review a bail order in Ontario?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A bail review is an application to a Superior Court judge to review the order of the justice of the peace who made the original bail decision. The reviewing court does not conduct a de novo hearing — it looks for errors in principle, a material change in circumstances, or a clearly unreasonable order. Defence counsel can apply for a bail review if the accused was detained or if the conditions imposed are unreasonable. The Crown can apply for a bail review to seek detention or additional conditions."
          }
        }
      ]
    }
  ]
}`;

type DetentionGround = {
  ground: string;
  title: string;
  test: string;
  keyFactors: string;
};

const detentionGrounds: DetentionGround[] = [
  {
    ground: "Primary",
    title: "Flight risk — ensure attendance in court",
    test: "Detention is necessary to ensure the accused will appear in court",
    keyFactors: "Ties to the community (family, employment, property), history of failures to appear, strength of the Crown case, potential sentence on conviction",
  },
  {
    ground: "Secondary",
    title: "Public protection — substantial likelihood of offending or interfering",
    test: "Detention is necessary for protection or safety of the public where there is a substantial likelihood of criminal conduct or interference with justice",
    keyFactors: "Nature of alleged offence, criminal record (particularly similar offences), outstanding charges, named victims or witnesses, history of violence or threats",
  },
  {
    ground: "Tertiary",
    title: "Confidence in administration of justice",
    test: "Detention is necessary to maintain confidence in the administration of justice, considering: strength of Crown case, gravity of offence, circumstances including weapon use, potential for long imprisonment",
    keyFactors: "Most controversial ground; reserved for very serious offences; courts must balance all factors in the balancing test established by R v St-Cloud",
  },
];

type ReverseOnusRow = {
  category: string;
  examples: string;
  notes: string;
};

const reverseOnusOffences: ReverseOnusRow[] = [
  {
    category: "Indictable offence committed while on bail",
    examples: "Any indictable offence allegedly committed after release on bail for another indictable offence",
    notes: "Most common reverse onus in practice; Crown must establish accused was on bail at time of alleged offence",
  },
  {
    category: "Firearms and prohibited weapons",
    examples: "Possession of prohibited/restricted firearm, weapons trafficking, using firearm in commission of offence",
    notes: "Applies to specific offences listed in s. 515(6)(d); even first-time accused bears onus",
  },
  {
    category: "Drug trafficking and importing",
    examples: "Trafficking or importation of Schedule I substance (cocaine, heroin, fentanyl, methamphetamine)",
    notes: "Large-scale trafficking cases especially difficult for accused; Crown will emphasize public safety",
  },
  {
    category: "Criminal organization offences",
    examples: "Committing offence for the benefit of a criminal organization",
    notes: "Reverse onus applies; gang-related offences are treated very seriously by Ontario courts",
  },
  {
    category: "Terrorism offences",
    examples: "Any terrorism offence as defined in the Criminal Code",
    notes: "Reverse onus applies; extremely rare in Ontario practice",
  },
];

type ConditionRow = {
  condition: string;
  purpose: string;
  typical: boolean;
};

const bailConditions: ConditionRow[] = [
  {
    condition: "Report to police",
    purpose: "Ensures ongoing monitoring of the accused",
    typical: true,
  },
  {
    condition: "Remain in Ontario",
    purpose: "Prevents flight; addresses primary ground",
    typical: true,
  },
  {
    condition: "Reside at specified address",
    purpose: "Ensures known location; supports surety supervision",
    typical: true,
  },
  {
    condition: "No contact with named persons (victims, witnesses)",
    purpose: "Protects victims; addresses secondary ground",
    typical: true,
  },
  {
    condition: "Non-attendance at specified locations",
    purpose: "Keeps accused away from places associated with offence",
    typical: true,
  },
  {
    condition: "Curfew",
    purpose: "Restricts movement at high-risk times; addresses secondary and primary grounds",
    typical: false,
  },
  {
    condition: "Electronic monitoring (ankle bracelet)",
    purpose: "Location monitoring; addresses flight and public safety concerns",
    typical: false,
  },
  {
    condition: "Surrender passport",
    purpose: "Prevents international flight; typically required for flight risk concerns",
    typical: false,
  },
  {
    condition: "No alcohol or drugs",
    purpose: "Addresses substance-related risk factors in the offence",
    typical: false,
  },
  {
    condition: "Not to possess weapons",
    purpose: "Required for firearms offences; may be imposed for other violent offences",
    typical: true,
  },
];

const faqs = [
  {
    q: "What are the three grounds for detention at a bail hearing in Ontario?",
    a: "Under Criminal Code s. 515(10), detention may be justified on three grounds: (1) Primary ground — necessary to ensure attendance in court (flight risk); (2) Secondary ground — necessary for protection or safety of the public, including witnesses, where the accused poses a substantial likelihood of committing a criminal offence or interfering with the administration of justice; (3) Tertiary ground — necessary to maintain confidence in the administration of justice, considering the strength of the Crown's case, the gravity of the offence, circumstances of the commission, and potential for a lengthy sentence.",
  },
  {
    q: "What is a reverse onus bail hearing in Ontario?",
    a: "In a standard show cause hearing, the Crown bears the burden of justifying detention. In a reverse onus hearing under Criminal Code s. 515(6), the accused must show cause why detention is not justified. Reverse onus applies to specific offences including: indictable offences committed while on bail, drug trafficking and importing offences, offences involving firearms and prohibited weapons, serious offences alleged to have been committed for a criminal organization, and terrorism offences.",
  },
  {
    q: "Who can be a surety at a bail hearing in Ontario?",
    a: "A surety is a person who pledges money (the recognizance amount) as security for the accused's compliance with bail conditions. To qualify as a surety in Ontario, a person must: be a Canadian citizen or permanent resident, have assets sufficient to cover the pledged amount, not be charged with a criminal offence themselves, understand the conditions of release, and be willing to report to police if the accused breaches conditions. Sureties are not required in all cases — many accused are released on their own recognizance.",
  },
  {
    q: "How do you review a bail order in Ontario?",
    a: "A bail review is an application to a Superior Court judge to review the order of the justice of the peace who made the original bail decision. The reviewing court does not conduct a de novo hearing — it looks for errors in principle, a material change in circumstances, or a clearly unreasonable order. Defence counsel can apply for a bail review if the accused was detained or if the conditions imposed are unreasonable. The Crown can apply for a bail review to seek detention or additional conditions.",
  },
];

export default function OntarioBailHearingPage() {
  return (
    <>
      <Script id="ontario-bail-hearing-schema" type="application/ld+json">
        {schemaJson}
      </Script>

      <div className="min-h-screen bg-white">
        {/* Breadcrumb */}
        <div className="bg-slate-50 border-b border-slate-200 px-6 py-3">
          <div className="max-w-4xl mx-auto text-sm text-slate-500">
            <Link href="/" className="hover:text-slate-700">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-slate-700">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-900">Ontario Bail Hearing Guide</span>
          </div>
        </div>

        {/* Header */}
        <header className="py-16 px-6 border-b border-slate-100">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-amber-100 text-amber-800 text-sm font-medium px-3 py-1 rounded-full mb-6">
              Criminal Law
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-4 leading-tight">
              Ontario Bail Hearing Guide 2024: Show Cause, Reverse Onus, and Detention Grounds
            </h1>
            <p className="text-xl text-slate-600 mb-6">
              Three grounds for detention (primary, secondary, tertiary), show cause vs reverse onus burden, 5 reverse onus offence categories, surety requirements, 10 common bail conditions, bail review procedure, and defence preparation checklist.
            </p>
            <div className="flex items-center gap-4 text-sm text-slate-500">
              <span>December 2024</span>
              <span>•</span>
              <span>15 min read</span>
              <span>•</span>
              <span>Atticus Legal Team</span>
            </div>
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-6 py-12">
          {/* Intro */}
          <section className="mb-12">
            <p className="text-slate-700 leading-relaxed mb-4">
              Bail hearings are among the most urgent and high-stakes matters in Ontario criminal practice. An accused who is detained pending trial faces months or years in custody before the matter is resolved — with profound consequences for employment, family, housing, and ultimately for the trial outcome. A well-prepared bail hearing can make the difference between freedom and custody.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Section 515 of the Criminal Code governs judicial interim release (bail) in Canada. The justice of the peace conducts the show cause hearing and must order the accused released unless the Crown (or accused, in a reverse onus case) shows cause why detention is justified. The Criminal Code explicitly requires the least onerous conditions consistent with public protection and court attendance.
            </p>
            <p className="text-slate-700 leading-relaxed">
              This guide covers the three grounds for detention, the difference between show cause and reverse onus hearings, the offences that attract reverse onus, surety requirements, bail conditions, bail review, and a checklist for defence counsel preparing for a bail hearing.
            </p>
          </section>

          {/* Detention Grounds */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Three Grounds for Detention Under Criminal Code s. 515(10)
            </h2>
            <div className="space-y-4 mb-6">
              {detentionGrounds.map((row, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-bold ${
                        i === 0 ? "bg-blue-100 text-blue-800" :
                        i === 1 ? "bg-amber-100 text-amber-800" :
                        "bg-red-100 text-red-800"
                      }`}>
                        {row.ground}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">{row.title}</h3>
                      <p className="text-slate-700 text-sm mb-2"><strong>Test:</strong> {row.test}</p>
                      <p className="text-slate-600 text-sm"><strong>Key factors:</strong> {row.keyFactors}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
              <p className="text-blue-900 text-sm">
                <strong>Ladder principle:</strong> Criminal Code s. 515 requires the justice to start with the least restrictive release condition and move to more restrictive conditions only where necessary. The Crown must justify any condition sought. The accused cannot be detained simply because conditions seem appropriate — the Crown must establish that detention is necessary on one of the three grounds.
              </p>
            </div>
          </section>

          {/* Reverse Onus */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Reverse Onus: When the Accused Must Show Cause
            </h2>
            <p className="text-slate-700 mb-6">
              In a standard bail hearing, the Crown bears the burden of justifying detention. In a reverse onus hearing under s. 515(6), the accused must satisfy the court that detention is not justified. This is a significant procedural shift — defence counsel must affirmatively establish that release is appropriate.
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
              <table className="w-full bg-white">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left px-5 py-4 font-semibold text-sm">Offence Category</th>
                    <th className="text-left px-5 py-4 font-semibold text-sm">Examples</th>
                    <th className="text-left px-5 py-4 font-semibold text-sm">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {reverseOnusOffences.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-5 py-4 font-medium text-slate-900 text-sm">{row.category}</td>
                      <td className="px-5 py-4 text-slate-700 text-sm">{row.examples}</td>
                      <td className="px-5 py-4 text-slate-600 text-sm">{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Bail Conditions */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Bail Conditions: Standard and Enhanced
            </h2>
            <p className="text-slate-700 mb-6">
              Bail conditions must be justified by the evidence and proportionate to the risk presented. They must also be enforceable and not unnecessarily restrict the accused beyond what public protection requires. Defence counsel should challenge conditions that are unnecessary or disproportionate.
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
              <table className="w-full bg-white">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left px-5 py-4 font-semibold text-sm">Condition</th>
                    <th className="text-left px-5 py-4 font-semibold text-sm">Purpose</th>
                    <th className="text-left px-5 py-4 font-semibold text-sm">Frequency</th>
                  </tr>
                </thead>
                <tbody>
                  {bailConditions.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-5 py-4 font-medium text-slate-900 text-sm">{row.condition}</td>
                      <td className="px-5 py-4 text-slate-700 text-sm">{row.purpose}</td>
                      <td className="px-5 py-4 text-sm">
                        <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${
                          row.typical ? "bg-green-100 text-green-700" : "bg-slate-100 text-slate-600"
                        }`}>
                          {row.typical ? "Common" : "Case-specific"}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Defence Preparation */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Defence Preparation Checklist for Bail Hearings
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  title: "Obtain disclosure before the hearing",
                  body: "Request and review the circumstances of the offence, any victim statement, and the accused's criminal record and outstanding charges. Understanding the Crown's evidence is essential to anticipating the grounds they will rely on.",
                },
                {
                  title: "Interview the accused thoroughly",
                  body: "Gather all relevant background: employment, family ties, length of time in community, prior bail compliance record, address for release, and potential sureties. The release plan must be concrete and credible.",
                },
                {
                  title: "Prepare and coach sureties",
                  body: "A surety must be able to articulate their understanding of the conditions, their relationship with the accused, their financial ability to cover the pledge, and their plan for supervision. Unprepared sureties are commonly rejected.",
                },
                {
                  title: "Address the specific detention ground",
                  body: "Tailor the release plan to the ground the Crown is likely to rely on. If the concern is flight risk, emphasize community ties. If public safety, emphasize supervision plan and proposed conditions.",
                },
                {
                  title: "Propose a release plan proactively",
                  body: "Come to the hearing with a concrete release address, surety ready to testify, proposed conditions, and explanation of why each condition is sufficient. A credible plan shifts the discussion to conditions, not detention.",
                },
                {
                  title: "Know the reverse onus rules",
                  body: "Confirm whether the charges attract reverse onus. If so, the defence must affirmatively make the case for release rather than simply challenging the Crown's grounds for detention.",
                },
              ].map((item, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2 text-sm">{item.title}</h3>
                  <p className="text-slate-600 text-sm">{item.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                  <h3 className="font-semibold text-slate-900 mb-2">{faq.q}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="bg-slate-900 rounded-2xl p-10 text-center text-white mb-12">
            <h2 className="text-2xl font-bold mb-3">
              Manage Criminal Defence Files with Atticus
            </h2>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto text-sm">
              Atticus helps Ontario criminal defence lawyers track court dates, manage trust accounting, and keep files LSO-compliant from bail hearing through sentencing.
            </p>
            <Link
              href="/sign-up"
              className="inline-block bg-amber-400 text-slate-900 font-semibold px-8 py-3 rounded-lg hover:bg-amber-300 transition-colors"
            >
              Start Free Trial
            </Link>
          </section>

          {/* Related */}
          <section className="border-t border-slate-100 pt-8">
            <h3 className="font-semibold text-slate-900 mb-4">Related Guides</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { href: "/blog/ontario-criminal-procedure", label: "Ontario Criminal Procedure Guide" },
                { href: "/blog/ontario-criminal-sentencing", label: "Ontario Criminal Sentencing Guide" },
                { href: "/blog/ontario-criminal-defence-process", label: "Ontario Criminal Defence Process" },
                { href: "/blog/ontario-human-rights-complaint", label: "Ontario Human Rights Complaint" },
                { href: "/blog/ontario-administrative-law", label: "Ontario Administrative Law Guide" },
                { href: "/blog/ontario-child-protection", label: "Ontario Child Protection Guide" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-amber-700 hover:text-amber-900 font-medium underline underline-offset-2"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
