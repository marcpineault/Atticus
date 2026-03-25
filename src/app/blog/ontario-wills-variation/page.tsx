import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ontario Wills: Variation, Challenges, and Dependants Relief 2024 | Atticus",
  description:
    "Ontario will variation and challenge law: testamentary capacity test (Banks v Goodfellow), undue influence, knowledge and approval, suspicious circumstances, dependants relief under SLRA Part V, and 5 grounds to set aside a will for Ontario estates lawyers.",
  openGraph: {
    title: "Ontario Wills: Variation, Challenges, and Dependants Relief 2024",
    description:
      "Complete guide for Ontario wills and estates lawyers on challenging a will — capacity, undue influence, dependants relief claims under the Succession Law Reform Act, and limitation periods.",
    url: "https://getatticus.ca/blog/ontario-wills-variation",
    siteName: "Atticus",
    type: "article",
  },
  alternates: { canonical: "https://getatticus.ca/blog/ontario-wills-variation" },
};

const schemaJson = `{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Ontario Wills: Variation, Challenges, and Dependants Relief 2024",
      "description": "Ontario will challenges covering testamentary capacity (Banks v Goodfellow 4-part test), undue influence, suspicious circumstances, dependants relief under SLRA Part V, and limitation periods for estate claims.",
      "url": "https://getatticus.ca/blog/ontario-wills-variation",
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
          "name": "What are the grounds to challenge a will in Ontario?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A will may be challenged in Ontario on the following grounds: lack of testamentary capacity (the testator did not meet the Banks v Goodfellow 4-part test), undue influence (a third party overpowered the testator's free will), fraud or forgery, failure to satisfy formal execution requirements under the Succession Law Reform Act, and lack of knowledge and approval (the testator did not know the contents of the document they signed)."
          }
        },
        {
          "@type": "Question",
          "name": "Who can make a dependants relief claim in Ontario?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under Part V of the Succession Law Reform Act, a dependant may apply to court for adequate provision from the estate. Dependants include the testator's spouse (including common-law spouse of 3+ years or in a relationship of permanence with a child), children (including adult children who are unable to support themselves), grandchildren, and parents. The claim must be commenced within 6 months of the grant of probate."
          }
        },
        {
          "@type": "Question",
          "name": "What is testamentary capacity in Ontario?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Testamentary capacity in Ontario follows the Banks v Goodfellow (1870) test: the testator must (1) understand the nature of the act of making a will and its effects; (2) understand the extent of the property being disposed of; (3) understand the claims of those who might reasonably expect to benefit; and (4) not be suffering from any disorder of the mind that poisons their affections, perverts their sense of right, or prevents the exercise of their natural faculties in disposing of their property."
          }
        },
        {
          "@type": "Question",
          "name": "Can the court change the terms of a will in Ontario?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ontario courts do not generally vary the terms of a valid will as they do in British Columbia under the Wills, Estates and Succession Act. The Ontario court's primary remedy is to declare a will (or part of it) invalid or to order adequate provision for dependants under Part V of the Succession Law Reform Act. Courts will not rewrite a will to achieve a more equitable distribution absent a valid ground to challenge."
          }
        }
      ]
    }
  ]
}`;

type CapacityRow = {
  element: string;
  test: string;
  evidence: string;
};

const capacityElements: CapacityRow[] = [
  {
    element: "Nature of the act",
    test: "Testator understands they are making a will and what a will does",
    evidence: "Certificate of incapacity, medical records, lawyer notes, video signing",
  },
  {
    element: "Extent of property",
    test: "Testator has a general understanding of what they own — precise figures not required",
    evidence: "Asset listing discussions recorded in drafting notes; ability to describe property",
  },
  {
    element: "Natural objects of bounty",
    test: "Testator can identify people who might reasonably expect to benefit and considers their claims",
    evidence: "Instruction letters naming family members and explaining exclusions",
  },
  {
    element: "No disorder of the mind",
    test: "No mental disorder that poisons affections, perverts sense of right, or prevents natural faculties",
    evidence: "Cognitive assessments, dementia diagnosis timing, paranoid delusions evidence",
  },
];

type ChallengGround = {
  ground: string;
  test: string;
  burden: string;
  notes: string;
};

const challengeGrounds: ChallengGround[] = [
  {
    ground: "Testamentary incapacity",
    test: "Banks v Goodfellow 4-part test at the time of execution",
    burden: "Propounding party proves due execution; challenger bears evidential burden to raise doubt",
    notes: "Testator may have capacity on a good day despite general dementia — capacity fluctuates",
  },
  {
    ground: "Undue influence",
    test: "A third party overpowered the testator such that the will is not an expression of free volition",
    burden: "Challenger bears the burden of proof — mere persuasion or pressure is insufficient",
    notes: "No presumption of undue influence in Ontario; courts look for coercion that overcomes free will",
  },
  {
    ground: "Fraud or forgery",
    test: "Will was not executed by the testator or testator was deceived about what they were signing",
    burden: "Challenger proves fraud or forgery on a balance of probabilities",
    notes: "Handwriting expert evidence and execution circumstances are key",
  },
  {
    ground: "Formal execution defects",
    test: "Will does not satisfy SLRA requirements: in writing, signed at end, two witnesses present simultaneously",
    burden: "Propounding party must prove proper execution; challenger raises defects",
    notes: "Courts have authority under SLRA s. 21.1 to validate wills with execution defects if testamentary intent is clear",
  },
  {
    ground: "Knowledge and approval",
    test: "Testator did not know and approve the contents of the will at the time of execution",
    burden: "Propounding party bears the burden; suspicious circumstances shift burden to propounding party",
    notes: "Different from capacity — testator may have capacity but not know what they are signing",
  },
];

type SuspiciousCircumstance = {
  factor: string;
  significance: string;
};

const suspiciousCircumstances: SuspiciousCircumstance[] = [
  {
    factor: "Beneficiary participated in instructions or preparation",
    significance: "Very strong suspicious circumstance; raises inference of undue influence",
  },
  {
    factor: "Drastic change from prior testamentary pattern",
    significance: "Particularly significant where prior wills were consistent and change is unexplained",
  },
  {
    factor: "Testator in a weakened physical or mental state",
    significance: "Suggests vulnerability to influence; does not on its own establish incapacity",
  },
  {
    factor: "Natural heirs excluded without apparent reason",
    significance: "Court will look for rational explanation; unexplained exclusion raises questions",
  },
  {
    factor: "Haste in preparing or executing the will",
    significance: "Raised where will executed shortly before death without apparent urgency",
  },
  {
    factor: "Instructions given when sole beneficiary present",
    significance: "Best practice is for beneficiaries to leave the room during will instructions",
  },
];

type DependantRow = {
  dependant: string;
  eligibility: string;
  factors: string;
};

const dependantsRelief: DependantRow[] = [
  {
    dependant: "Spouse (married)",
    eligibility: "Eligible as dependant; equalization claim under FLA may be more favourable",
    factors: "Court considers equalization claim, length of marriage, standard of living",
  },
  {
    dependant: "Common-law spouse",
    eligibility: "Eligible if cohabited continuously for 3 years or in relationship of permanence with child",
    factors: "No equalization right — dependants relief is primary remedy",
  },
  {
    dependant: "Minor children",
    eligibility: "Always eligible regardless of financial need",
    factors: "Court will order support to maintain standard of living; child support tables used as guide",
  },
  {
    dependant: "Adult children (unable to support themselves)",
    eligibility: "Eligible only if unable to support themselves due to disability or other recognized reason",
    factors: "Adult independent children are generally not dependants even if disinherited",
  },
  {
    dependant: "Parents / grandparents",
    eligibility: "Eligible if they were dependants of the testator — actual dependency required",
    factors: "Must show financial dependence on testator at time of death",
  },
];

const faqs = [
  {
    q: "What are the grounds to challenge a will in Ontario?",
    a: "A will may be challenged in Ontario on the following grounds: lack of testamentary capacity (the testator did not meet the Banks v Goodfellow 4-part test), undue influence (a third party overpowered the testator's free will), fraud or forgery, failure to satisfy formal execution requirements under the Succession Law Reform Act, and lack of knowledge and approval (the testator did not know the contents of the document they signed).",
  },
  {
    q: "Who can make a dependants relief claim in Ontario?",
    a: "Under Part V of the Succession Law Reform Act, a dependant may apply to court for adequate provision from the estate. Dependants include the testator's spouse (including common-law spouse of 3+ years or in a relationship of permanence with a child), children (including adult children who are unable to support themselves), grandchildren, and parents. The claim must be commenced within 6 months of the grant of probate.",
  },
  {
    q: "What is testamentary capacity in Ontario?",
    a: "Testamentary capacity in Ontario follows the Banks v Goodfellow (1870) test: the testator must (1) understand the nature of the act of making a will and its effects; (2) understand the extent of the property being disposed of; (3) understand the claims of those who might reasonably expect to benefit; and (4) not be suffering from any disorder of the mind that poisons their affections, perverts their sense of right, or prevents the exercise of their natural faculties in disposing of their property.",
  },
  {
    q: "Can the court change the terms of a will in Ontario?",
    a: "Ontario courts do not generally vary the terms of a valid will as they do in British Columbia under the Wills, Estates and Succession Act. The Ontario court's primary remedy is to declare a will (or part of it) invalid or to order adequate provision for dependants under Part V of the Succession Law Reform Act. Courts will not rewrite a will to achieve a more equitable distribution absent a valid ground to challenge.",
  },
];

export default function OntarioWillsVariationPage() {
  return (
    <>
      <Script id="ontario-wills-variation-schema" type="application/ld+json">
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
            <span className="text-slate-900">Ontario Wills Variation Guide</span>
          </div>
        </div>

        {/* Header */}
        <header className="py-16 px-6 border-b border-slate-100">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-amber-100 text-amber-800 text-sm font-medium px-3 py-1 rounded-full mb-6">
              Wills &amp; Estates
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-4 leading-tight">
              Ontario Wills: Variation, Challenges, and Dependants Relief 2024
            </h1>
            <p className="text-xl text-slate-600 mb-6">
              Testamentary capacity under Banks v Goodfellow, undue influence, suspicious circumstances, 5 grounds to challenge a will, dependants relief under SLRA Part V, and limitation periods for Ontario estate litigation.
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
              Estate litigation involving will challenges and dependants relief claims is among the most emotionally charged and technically complex work Ontario estate lawyers handle. The intersection of capacity law, undue influence principles, and the statutory dependants relief regime requires careful navigation.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Unlike British Columbia&apos;s Wills, Estates and Succession Act — which gives courts broad power to vary a will where it fails to make adequate provision — Ontario courts cannot rewrite a will. The Ontario remedies are more limited: set aside the will or order support under Part V of the Succession Law Reform Act (SLRA). This distinction shapes strategy in contested estate matters.
            </p>
            <p className="text-slate-700 leading-relaxed">
              This guide covers the five grounds to challenge a will in Ontario, the testamentary capacity test, suspicious circumstances doctrine, dependants relief eligibility and factors, and the limitation periods estate litigators must track.
            </p>
          </section>

          {/* Capacity Test */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Testamentary Capacity: The Banks v Goodfellow Test
            </h2>
            <p className="text-slate-700 mb-6">
              Ontario courts apply the four-part test from Banks v Goodfellow (1870) LR 5 QB 549, which remains the governing standard. All four elements must be satisfied at the moment of execution — not before or after.
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm mb-6">
              <table className="w-full bg-white">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left px-5 py-4 font-semibold text-sm">Element</th>
                    <th className="text-left px-5 py-4 font-semibold text-sm">Test</th>
                    <th className="text-left px-5 py-4 font-semibold text-sm">Evidence Sources</th>
                  </tr>
                </thead>
                <tbody>
                  {capacityElements.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-5 py-4 font-medium text-slate-900 text-sm">{row.element}</td>
                      <td className="px-5 py-4 text-slate-700 text-sm">{row.test}</td>
                      <td className="px-5 py-4 text-slate-700 text-sm">{row.evidence}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
              <p className="text-blue-900 text-sm">
                <strong>Burden of proof:</strong> The party propounding the will bears the initial burden of proving due execution. If there are suspicious circumstances, the burden shifts to the propounder to affirmatively prove knowledge and approval. A diagnosis of dementia does not automatically establish incapacity — courts look at capacity at the specific moment of execution, which can vary in cognitive conditions.
              </p>
            </div>
          </section>

          {/* Challenge Grounds */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Five Grounds to Challenge a Will in Ontario
            </h2>
            <div className="space-y-4 mb-6">
              {challengeGrounds.map((row, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-7 h-7 bg-amber-400 text-slate-900 rounded-full flex items-center justify-center font-bold text-sm">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">{row.ground}</h3>
                      <p className="text-slate-700 text-sm mb-1"><strong>Test:</strong> {row.test}</p>
                      <p className="text-slate-700 text-sm mb-1"><strong>Burden:</strong> {row.burden}</p>
                      <p className="text-slate-500 text-xs italic">{row.notes}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Suspicious Circumstances */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Suspicious Circumstances: The Shifting Burden Doctrine
            </h2>
            <p className="text-slate-700 mb-6">
              Where suspicious circumstances surround the will&apos;s preparation or execution, the burden of proving knowledge and approval shifts to the propounder. Courts have identified a non-exhaustive list of circumstances that can raise suspicion.
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
              <table className="w-full bg-white">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left px-5 py-4 font-semibold text-sm">Suspicious Factor</th>
                    <th className="text-left px-5 py-4 font-semibold text-sm">Legal Significance</th>
                  </tr>
                </thead>
                <tbody>
                  {suspiciousCircumstances.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-5 py-4 font-medium text-slate-900 text-sm">{row.factor}</td>
                      <td className="px-5 py-4 text-slate-700 text-sm">{row.significance}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Dependants Relief */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Dependants Relief Under SLRA Part V
            </h2>
            <p className="text-slate-700 mb-4">
              Even where a will is valid, a dependant of the testator may apply to court for adequate provision from the estate under Part V of the Succession Law Reform Act. The application must be commenced within 6 months from the grant of probate — this is a hard deadline.
            </p>
            <p className="text-slate-700 mb-6">
              Courts consider the nature and duration of the relationship, the dependant&apos;s need and ability to support themselves, the testator&apos;s reasons for the disposition, any legal obligations to the dependant, and the size of the estate. The court aims to provide adequate support, not to equalise the estate.
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm mb-6">
              <table className="w-full bg-white">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left px-5 py-4 font-semibold text-sm">Dependant Category</th>
                    <th className="text-left px-5 py-4 font-semibold text-sm">Eligibility</th>
                    <th className="text-left px-5 py-4 font-semibold text-sm">Key Factors</th>
                  </tr>
                </thead>
                <tbody>
                  {dependantsRelief.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-5 py-4 font-medium text-slate-900 text-sm">{row.dependant}</td>
                      <td className="px-5 py-4 text-slate-700 text-sm">{row.eligibility}</td>
                      <td className="px-5 py-4 text-slate-700 text-sm">{row.factors}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
              <p className="text-amber-900 text-sm">
                <strong>Election for spouses:</strong> A surviving spouse may elect between taking under the will and making an equalization claim under the Family Law Act. The equalization claim can be significantly more valuable than the testamentary provision where the deceased had substantial assets accumulated during the marriage. The election must be made within 6 months of the spouse&apos;s death.
              </p>
            </div>
          </section>

          {/* Limitation Periods */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Limitation Periods for Ontario Estate Claims
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  title: "Will challenge (capacity / undue influence)",
                  period: "2 years from discoverability (Limitations Act, 2002)",
                  note: "Practical challenge: discovery usually occurs at or shortly after probate is granted",
                },
                {
                  title: "Dependants relief application",
                  period: "6 months from grant of letters probate or administration",
                  note: "Hard deadline under SLRA s. 61; court has limited discretion to extend",
                },
                {
                  title: "Unjust enrichment / constructive trust against estate",
                  period: "2 years from discoverability",
                  note: "Constructive trust claims by common-law partners not included in will",
                },
                {
                  title: "Estate trustee passing of accounts",
                  period: "No limitation — court can order at any time; 5-year delay may trigger adverse inference",
                  note: "Beneficiaries can apply to compel passing of accounts at any time",
                },
                {
                  title: "Estate trustee removal",
                  period: "No limitation on application to remove",
                  note: "Courts require ongoing unfitness or misconduct; not simply disagreement",
                },
                {
                  title: "FLA election (spouse)",
                  period: "6 months from death of the testator spouse",
                  note: "Failure to elect within 6 months means estate proceeds under the will",
                },
              ].map((item, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-1 text-sm">{item.title}</h3>
                  <p className="text-amber-700 font-medium text-sm mb-1">{item.period}</p>
                  <p className="text-slate-600 text-xs">{item.note}</p>
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
              Manage Estate Litigation Files with Atticus
            </h2>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto text-sm">
              Atticus helps Ontario wills and estates lawyers track limitation periods, manage trust accounting, and keep estate files LSO-compliant from instruction to closing.
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
                { href: "/blog/ontario-estate-litigation", label: "Ontario Estate Litigation Guide" },
                { href: "/blog/ontario-estate-administration", label: "Ontario Estate Administration" },
                { href: "/blog/how-to-make-a-will-ontario", label: "How to Make a Will in Ontario" },
                { href: "/blog/ontario-power-of-attorney", label: "Ontario Power of Attorney Guide" },
                { href: "/blog/ontario-spousal-support", label: "Ontario Spousal Support Guide" },
                { href: "/blog/ontario-constructive-trust", label: "Ontario Constructive Trust Guide" },
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
