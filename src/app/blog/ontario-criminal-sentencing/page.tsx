import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ontario Criminal Sentencing Guide 2024: Principles, Ranges, and Mitigating Factors | Atticus",
  description:
    "Ontario criminal sentencing: Criminal Code s. 718 objectives, proportionality principle, 8 aggravating factors, 7 mitigating factors, sentencing ranges by offence category, conditional sentence vs imprisonment, and Gladue principles for Indigenous offenders.",
  openGraph: {
    title: "Ontario Criminal Sentencing Guide 2024: Principles, Ranges, and Mitigating Factors",
    description:
      "Comprehensive guide for Ontario criminal defence lawyers on sentencing — proportionality, aggravating/mitigating factors, Gladue, conditional sentences, and Crown/defence sentencing submissions.",
    url: "https://getatticus.ca/blog/ontario-criminal-sentencing",
    siteName: "Atticus",
    type: "article",
  },
  alternates: { canonical: "https://getatticus.ca/blog/ontario-criminal-sentencing" },
};

const schemaJson = `{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Ontario Criminal Sentencing Guide 2024: Principles, Ranges, and Mitigating Factors",
      "description": "Ontario criminal sentencing covering s. 718 objectives, proportionality, aggravating/mitigating factors, Gladue principles, conditional sentences, and sentencing ranges by offence type.",
      "url": "https://getatticus.ca/blog/ontario-criminal-sentencing",
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
          "name": "What are the principles of criminal sentencing in Canada?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Criminal sentencing in Canada is governed by Criminal Code sections 718 to 718.2. The fundamental principle is proportionality: the sentence must be proportionate to the gravity of the offence and the degree of responsibility of the offender. The objectives of sentencing are: denunciation, deterrence (specific and general), separation of offenders from society, rehabilitation, reparation to victims, and promotion of a sense of responsibility in offenders."
          }
        },
        {
          "@type": "Question",
          "name": "What are Gladue principles in Ontario?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Gladue principles, established in R v Gladue [1999] 1 SCR 688, require courts sentencing an Indigenous offender to consider: (1) the unique systemic and background factors that may have brought the Indigenous person before the court; and (2) the types of sentencing procedures and sanctions which may be appropriate because of their particular Indigenous heritage or connection. All Ontario courts must apply Gladue principles when sentencing an Indigenous offender, regardless of whether a Gladue report was prepared."
          }
        },
        {
          "@type": "Question",
          "name": "What is a conditional sentence in Ontario?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A conditional sentence order (CSO) allows an offender to serve a sentence of imprisonment of less than 2 years in the community, subject to conditions. Conditional sentences are not available for offences punishable by a minimum term of imprisonment, serious personal injury offences, terrorism offences, or criminal organization offences. The court must be satisfied that serving the sentence in the community would not endanger public safety."
          }
        },
        {
          "@type": "Question",
          "name": "How do remand credits work in Ontario sentencing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under section 719(3) of the Criminal Code, a court may credit pre-sentence custody (remand) at a rate of up to 1.5:1 — meaning one day in remand can count as 1.5 days of sentence credit. The credit is 1:1 by default unless the judge considers it appropriate to give additional credit, in which case the court must give reasons. Enhanced credit is not available where the accused was denied bail primarily due to criminal record or a pattern of criminal behaviour."
          }
        }
      ]
    }
  ]
}`;

type ObjectiveRow = {
  objective: string;
  description: string;
  offenceType: string;
};

const sentencingObjectives: ObjectiveRow[] = [
  {
    objective: "Denunciation",
    description: "The sentence communicates society's condemnation of the offending conduct",
    offenceType: "Offences involving breach of trust, violence, or moral culpability",
  },
  {
    objective: "Specific deterrence",
    description: "Dissuading this offender from reoffending",
    offenceType: "First-time offenders; offenders with demonstrated ability to reform",
  },
  {
    objective: "General deterrence",
    description: "Dissuading others in the community from committing similar offences",
    offenceType: "Prevalent offences; offences undermining public safety or market integrity",
  },
  {
    objective: "Separation",
    description: "Protecting the public by removing the offender from society for a period",
    offenceType: "Dangerous offenders; violent offences; high recidivism risk",
  },
  {
    objective: "Rehabilitation",
    description: "Assisting the offender in becoming a law-abiding member of society",
    offenceType: "Addiction-related offences; young adults; first-time offenders with prospects",
  },
  {
    objective: "Reparation",
    description: "Addressing the harm done to victims and the community",
    offenceType: "Property offences; fraud; mischief; offences with quantifiable victim loss",
  },
];

type FactorRow = {
  factor: string;
  type: "aggravating" | "mitigating";
  notes: string;
};

const sentencingFactors: FactorRow[] = [
  {
    factor: "Previous criminal record",
    type: "aggravating",
    notes: "Increases sentence particularly for similar offences; directly relevant to specific deterrence",
  },
  {
    factor: "Position of trust or authority",
    type: "aggravating",
    notes: "Explicitly listed in s. 718.2(a)(iii); applies to professionals, employers, family caregivers",
  },
  {
    factor: "Evidence of premeditation or planning",
    type: "aggravating",
    notes: "Planned and deliberate offences attract greater denunciatory sentences",
  },
  {
    factor: "Vulnerable victim",
    type: "aggravating",
    notes: "Age, disability, or other vulnerability of victim explicitly aggravating under s. 718.2(a)(ii.1)",
  },
  {
    factor: "Multiple victims or prolonged offending",
    type: "aggravating",
    notes: "Particularly relevant in fraud, sexual offences, and domestic violence patterns",
  },
  {
    factor: "Failure to comply with court orders",
    type: "aggravating",
    notes: "Breach of bail, probation, or restraining order demonstrates disregard for court authority",
  },
  {
    factor: "Bias, prejudice, or hate motivation",
    type: "aggravating",
    notes: "Explicitly required to be considered under s. 718.2(a)(i) where hate motivation proven",
  },
  {
    factor: "Early guilty plea",
    type: "mitigating",
    notes: "Conserves court resources, spares victim from testifying; typically attracts meaningful reduction",
  },
  {
    factor: "Remorse and acceptance of responsibility",
    type: "mitigating",
    notes: "Genuine remorse beyond entering a guilty plea; requires concrete evidence, not mere assertion",
  },
  {
    factor: "No prior record or minor record",
    type: "mitigating",
    notes: "First offenders generally receive more lenient sentences absent serious offence characteristics",
  },
  {
    factor: "Substance abuse and addiction",
    type: "mitigating",
    notes: "Diminished moral culpability where addiction directly contributed to the offending",
  },
  {
    factor: "Mental health issues",
    type: "mitigating",
    notes: "Diminished responsibility; rehabilitative sentencing more appropriate where mental health is causative",
  },
  {
    factor: "Stable employment and family ties",
    type: "mitigating",
    notes: "Demonstrates low recidivism risk and integration in community",
  },
  {
    factor: "Cooperation with authorities",
    type: "mitigating",
    notes: "Particularly where cooperation assists in prosecuting others; may attract significant reduction",
  },
];

type SentenceRangeRow = {
  offenceCategory: string;
  examples: string;
  typicalRange: string;
  notes: string;
};

const sentenceRanges: SentenceRangeRow[] = [
  {
    offenceCategory: "Minor property offences",
    examples: "Petty theft, minor mischief, fare evasion",
    typicalRange: "Absolute or conditional discharge; fine; probation up to 3 years",
    notes: "Conditional discharge available where no minimum sentence and not in public interest to convict",
  },
  {
    offenceCategory: "Major theft / fraud (under $5,000)",
    examples: "Shoplifting at quantity, debit card fraud, minor identity theft",
    typicalRange: "Conditional discharge to 90 days intermittent; probation",
    notes: "Prior record significantly increases sentence; breach of trust elevates",
  },
  {
    offenceCategory: "Major fraud / theft over $5,000",
    examples: "Large-scale fraud, mortgage fraud, embezzlement",
    typicalRange: "6 months to 4 years depending on quantum and role",
    notes: "Breach of trust, large amounts, and multiple victims push toward penitentiary range",
  },
  {
    offenceCategory: "Impaired driving (first offence)",
    examples: "Over 80, impaired driving, refusal",
    typicalRange: "Mandatory minimum fine ($1,000) + driving prohibition; possible probation",
    notes: "Accident causing bodily harm: mandatory minimum 30 days to 10 years; causing death: 1-14 years",
  },
  {
    offenceCategory: "Simple assault (first offence, no injuries)",
    examples: "Common assault, minor domestic assault",
    typicalRange: "Conditional discharge; fine; probation; up to 18 months conditional sentence",
    notes: "Domestic violence context elevates; pattern of behaviour aggravates significantly",
  },
  {
    offenceCategory: "Sexual assault (first offence, adult victim)",
    examples: "Sexual assault under s. 271",
    typicalRange: "18 months to 4 years depending on circumstances",
    notes: "Victim-offender relationship, use of force, and degree of violation are key variables",
  },
  {
    offenceCategory: "Drug trafficking (Schedule I, small quantity)",
    examples: "Trafficking cocaine, fentanyl, methamphetamine",
    typicalRange: "Conditional sentence to 2-3 years for small-scale; significant uplift for fentanyl",
    notes: "Mandatory minimums for CDSA offences were largely struck down; Gladue applies",
  },
];

const faqs = [
  {
    q: "What are the principles of criminal sentencing in Canada?",
    a: "Criminal sentencing in Canada is governed by Criminal Code sections 718 to 718.2. The fundamental principle is proportionality: the sentence must be proportionate to the gravity of the offence and the degree of responsibility of the offender. The objectives of sentencing are: denunciation, deterrence (specific and general), separation of offenders from society, rehabilitation, reparation to victims, and promotion of a sense of responsibility in offenders.",
  },
  {
    q: "What are Gladue principles in Ontario?",
    a: "Gladue principles, established in R v Gladue [1999] 1 SCR 688, require courts sentencing an Indigenous offender to consider: (1) the unique systemic and background factors that may have brought the Indigenous person before the court; and (2) the types of sentencing procedures and sanctions which may be appropriate because of their particular Indigenous heritage or connection. All Ontario courts must apply Gladue principles when sentencing an Indigenous offender, regardless of whether a Gladue report was prepared.",
  },
  {
    q: "What is a conditional sentence in Ontario?",
    a: "A conditional sentence order (CSO) allows an offender to serve a sentence of imprisonment of less than 2 years in the community, subject to conditions. Conditional sentences are not available for offences punishable by a minimum term of imprisonment, serious personal injury offences, terrorism offences, or criminal organization offences. The court must be satisfied that serving the sentence in the community would not endanger public safety.",
  },
  {
    q: "How do remand credits work in Ontario sentencing?",
    a: "Under section 719(3) of the Criminal Code, a court may credit pre-sentence custody (remand) at a rate of up to 1.5:1 — meaning one day in remand can count as 1.5 days of sentence credit. The credit is 1:1 by default unless the judge considers it appropriate to give additional credit, in which case the court must give reasons. Enhanced credit is not available where the accused was denied bail primarily due to criminal record or a pattern of criminal behaviour.",
  },
];

export default function OntarioCriminalSentencingPage() {
  return (
    <>
      <Script id="ontario-criminal-sentencing-schema" type="application/ld+json">
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
            <span className="text-slate-900">Ontario Criminal Sentencing Guide</span>
          </div>
        </div>

        {/* Header */}
        <header className="py-16 px-6 border-b border-slate-100">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-amber-100 text-amber-800 text-sm font-medium px-3 py-1 rounded-full mb-6">
              Criminal Law
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-4 leading-tight">
              Ontario Criminal Sentencing Guide 2024: Principles, Ranges, and Mitigating Factors
            </h1>
            <p className="text-xl text-slate-600 mb-6">
              Criminal Code s. 718 sentencing objectives, proportionality, 7 aggravating factors, 7 mitigating factors, sentencing ranges by offence category, conditional sentences, Gladue principles, and remand credit under s. 719(3).
            </p>
            <div className="flex items-center gap-4 text-sm text-slate-500">
              <span>December 2024</span>
              <span>•</span>
              <span>16 min read</span>
              <span>•</span>
              <span>Atticus Legal Team</span>
            </div>
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-6 py-12">
          {/* Intro */}
          <section className="mb-12">
            <p className="text-slate-700 leading-relaxed mb-4">
              Sentencing is among the most consequential moments in criminal proceedings. A well-prepared sentencing submission can mean the difference between custody and a community sentence, between a record and a discharge. Ontario criminal defence lawyers must master both the legal framework and the practical art of sentencing advocacy.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              The Criminal Code provisions governing sentencing (ss. 718 to 718.2) set out the objectives and principles courts must apply. These are supplemented by a substantial body of sentencing jurisprudence from the Supreme Court of Canada and the Ontario Court of Appeal, which establishes ranges and benchmarks for common offences.
            </p>
            <p className="text-slate-700 leading-relaxed">
              This guide covers the sentencing objectives, the proportionality principle, aggravating and mitigating factors, sentencing ranges by offence category, conditional sentences, Gladue principles for Indigenous offenders, and remand credit.
            </p>
          </section>

          {/* Objectives */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Sentencing Objectives Under Criminal Code s. 718
            </h2>
            <p className="text-slate-700 mb-6">
              The fundamental purpose of sentencing is to protect society and contribute, along with crime prevention initiatives, to respect for the law and the maintenance of a just, peaceful, and safe society by imposing sanctions that have one or more of the following objectives.
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm mb-6">
              <table className="w-full bg-white">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left px-5 py-4 font-semibold text-sm">Objective</th>
                    <th className="text-left px-5 py-4 font-semibold text-sm">Description</th>
                    <th className="text-left px-5 py-4 font-semibold text-sm">Primary Offence Types</th>
                  </tr>
                </thead>
                <tbody>
                  {sentencingObjectives.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-5 py-4 font-medium text-slate-900 text-sm">{row.objective}</td>
                      <td className="px-5 py-4 text-slate-700 text-sm">{row.description}</td>
                      <td className="px-5 py-4 text-slate-600 text-sm">{row.offenceType}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
              <p className="text-blue-900 text-sm">
                <strong>Proportionality (s. 718.1):</strong> The fundamental principle is that the sentence must be proportionate to the gravity of the offence and the degree of responsibility of the offender. All other objectives are secondary to proportionality. Courts may not impose a disproportionately harsh sentence to achieve deterrence or denunciation where it would be disproportionate to the offender&apos;s actual culpability.
              </p>
            </div>
          </section>

          {/* Aggravating and Mitigating Factors */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Aggravating and Mitigating Factors
            </h2>
            <p className="text-slate-700 mb-6">
              Section 718.2 of the Criminal Code requires courts to consider any relevant aggravating or mitigating circumstances relating to the offence or the offender. The following factors regularly arise in Ontario sentencing hearings.
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
              <table className="w-full bg-white">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left px-5 py-4 font-semibold text-sm">Factor</th>
                    <th className="text-left px-5 py-4 font-semibold text-sm">Type</th>
                    <th className="text-left px-5 py-4 font-semibold text-sm">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {sentencingFactors.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-5 py-4 font-medium text-slate-900 text-sm">{row.factor}</td>
                      <td className="px-5 py-4 text-sm">
                        <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${
                          row.type === "aggravating"
                            ? "bg-red-100 text-red-700"
                            : "bg-green-100 text-green-700"
                        }`}>
                          {row.type === "aggravating" ? "Aggravating" : "Mitigating"}
                        </span>
                      </td>
                      <td className="px-5 py-4 text-slate-700 text-sm">{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Sentencing Ranges */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Ontario Sentencing Ranges by Offence Category
            </h2>
            <p className="text-slate-700 mb-6">
              Sentencing ranges are established by the Court of Appeal to provide consistency, not as mandatory minimums. Courts may depart from the range where the individual circumstances of the offender or offence are exceptional.
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
              <table className="w-full bg-white">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left px-5 py-4 font-semibold text-sm">Offence Category</th>
                    <th className="text-left px-5 py-4 font-semibold text-sm">Examples</th>
                    <th className="text-left px-5 py-4 font-semibold text-sm">Typical Range</th>
                    <th className="text-left px-5 py-4 font-semibold text-sm">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {sentenceRanges.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-5 py-4 font-medium text-slate-900 text-sm">{row.offenceCategory}</td>
                      <td className="px-5 py-4 text-slate-700 text-sm">{row.examples}</td>
                      <td className="px-5 py-4 text-slate-700 text-sm">{row.typicalRange}</td>
                      <td className="px-5 py-4 text-slate-600 text-sm">{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Gladue */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Gladue Principles for Indigenous Offenders
            </h2>
            <p className="text-slate-700 mb-4">
              R v Gladue [1999] 1 SCR 688 and R v Ipeelee [2012] 1 SCR 433 require all Ontario courts to apply a distinct sentencing analysis when an Indigenous person is before the court. Gladue principles are not a blanket reduction — they require individualized consideration of the factors that brought this specific person before the court.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <h3 className="font-semibold text-slate-900 mb-3">What Courts Must Consider</h3>
                <ul className="space-y-2">
                  {[
                    "Unique systemic and background factors specific to this offender (residential schools, child welfare involvement, intergenerational trauma)",
                    "The offender's Indigenous community, culture, and connection",
                    "Whether restorative or culturally appropriate sentences are available",
                    "How systemic factors may have diminished the offender's moral culpability",
                    "Gladue reports if available — courts should encourage their use",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-600 text-sm">
                      <span className="text-amber-500 font-bold mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <h3 className="font-semibold text-slate-900 mb-3">Key Practical Notes</h3>
                <ul className="space-y-2">
                  {[
                    "Gladue applies even if the offender did not grow up in a traditional Indigenous community",
                    "The duty arises automatically — defence counsel need not specifically invoke it",
                    "Gladue does not mean a lighter sentence in all cases — serious violent offences may still attract imprisonment",
                    "Gladue reports are prepared by trained writers, not the defence lawyer; courts can request them",
                    "Ipeelee confirmed Gladue applies at every sentencing, including for serious or repeat offenders",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-600 text-sm">
                      <span className="text-amber-500 font-bold mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
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
              Atticus helps Ontario criminal defence lawyers track court dates, manage trust accounting, and keep files LSO-compliant — from bail hearing through sentencing.
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
                { href: "/blog/ontario-criminal-defence-process", label: "Ontario Criminal Defence Process" },
                { href: "/blog/ontario-human-rights-complaint", label: "Ontario Human Rights Complaint" },
                { href: "/blog/ontario-bail-hearing", label: "Ontario Bail Hearing Guide" },
                { href: "/blog/ontario-administrative-law", label: "Ontario Administrative Law Guide" },
                { href: "/blog/ontario-negligence-law", label: "Ontario Negligence Law Guide" },
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
