import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ontario Child Protection Law Guide 2024: CYFSA, CAS Investigations, and Court Process | Atticus",
  description:
    "Ontario child protection law: Child, Youth and Family Services Act (CYFSA), 6 grounds for child in need of protection, CAS investigation process, consent agreements, child protection hearings, Crown wardship vs society wardship, and responding to a CAS apprehension.",
  openGraph: {
    title: "Ontario Child Protection Law Guide 2024: CYFSA, CAS Investigations, and Court Process",
    description:
      "Comprehensive guide for Ontario family lawyers on child protection — CYFSA grounds for protection, CAS process, temporary care agreements, child protection hearings, and wardship orders.",
    url: "https://getatticus.ca/blog/ontario-child-protection",
    siteName: "Atticus",
    type: "article",
  },
  alternates: { canonical: "https://getatticus.ca/blog/ontario-child-protection" },
};

const schemaJson = `{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Ontario Child Protection Law Guide 2024: CYFSA, CAS Investigations, and Court Process",
      "description": "Ontario child protection law covering CYFSA grounds, CAS investigation process, consent agreements, child protection court hearings, and wardship orders.",
      "url": "https://getatticus.ca/blog/ontario-child-protection",
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
          "name": "What is the CYFSA and how does it govern child protection in Ontario?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Child, Youth and Family Services Act, 2017 (CYFSA) is the Ontario statute governing child protection, children's aid societies (CAS), adoption, and child and family services. It replaced the former Child and Family Services Act. The CYFSA establishes the grounds on which a child is in need of protection, the powers and duties of CAS, the court process for child protection proceedings, and the primacy of the best interests of the child in all decisions."
          }
        },
        {
          "@type": "Question",
          "name": "Can CAS take my child without a court order in Ontario?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. A CAS worker can apprehend a child without a court order if they have reasonable grounds to believe the child is or may be in need of protection and there is immediate risk to the child that cannot be addressed by bringing the matter before a court. Following an apprehension, CAS must bring the matter before a court within 5 days. Parents must be served and can attend the initial hearing."
          }
        },
        {
          "@type": "Question",
          "name": "What is the difference between society wardship and Crown wardship in Ontario?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Society wardship (temporary wardship) places the child in the care of the CAS for a period while the parents work toward the child's return. Crown wardship terminates parental rights and makes the child permanently a ward of the Crown, with adoption being the typical next step. Crown wardship is ordered where the court finds it is in the best interests of the child and the matter cannot be resolved by a lesser order, including where risk of harm cannot be adequately managed with the child in parental care."
          }
        },
        {
          "@type": "Question",
          "name": "What are a parent's rights when CAS apprehends their child in Ontario?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "When CAS apprehends a child, parents have the right to: be notified of the apprehension and the reasons; attend all court hearings; be represented by a lawyer (Legal Aid Ontario provides coverage for qualifying parents in child protection proceedings); participate in case conferences; receive disclosure of the CAS file and evidence; make submissions on any proposed disposition; and appeal any order made by the court."
          }
        }
      ]
    }
  ]
}`;

type GroundRow = {
  ground: string;
  description: string;
  examples: string;
};

const protectionGrounds: GroundRow[] = [
  {
    ground: "Physical harm or risk of physical harm",
    description: "The child has been or is likely to be physically harmed by the person having charge",
    examples: "Physical abuse, failure to protect from domestic violence, pattern of harsh physical discipline",
  },
  {
    ground: "Sexual abuse or exploitation",
    description: "The child has been or is likely to be sexually abused or exploited",
    examples: "Sexual assault by family member, exposure to sexual exploitation, failure to protect from known abuser",
  },
  {
    ground: "Emotional harm",
    description: "The child has suffered or is likely to suffer emotional harm through the acts or omissions of the caregiver",
    examples: "Severe anxiety or depression caused by parenting, witnessed violence, rejection by caregiver",
  },
  {
    ground: "Neglect",
    description: "The child has been or is likely to be physically harmed due to failure to provide adequate food, clothing, shelter, medical care, or supervision",
    examples: "Failure to seek medical treatment, unsafe living conditions, leaving young child unsupervised",
  },
  {
    ground: "Developmental needs not being met",
    description: "The child has or is at risk of suffering developmental delay due to caregiver conduct or failure to act",
    examples: "Failure to address known developmental disability, chronic school absenteeism caused by parents",
  },
  {
    ground: "Caregiver unable or unwilling to provide care",
    description: "The person having charge of the child is unable or unwilling to provide care for the child",
    examples: "Parent incapacity due to mental illness or addiction, parent abandonment, parent incarceration",
  },
];

type ProcessStep = {
  stage: string;
  description: string;
  timeline: string;
};

const processSteps: ProcessStep[] = [
  {
    stage: "Referral / complaint",
    description: "Report made to CAS by mandatory reporter (teacher, doctor, neighbour) or by any person concerned about a child",
    timeline: "CAS must screen the referral and determine response level within set timelines",
  },
  {
    stage: "CAS investigation",
    description: "CAS investigates the referral, interviews parents, children, and collateral contacts; may involve police",
    timeline: "24-hour response for imminent risk; 12-hour for emergency situations",
  },
  {
    stage: "Risk assessment",
    description: "CAS completes a structured decision-making tool to assess safety and risk; determines whether child is in need of protection",
    timeline: "Ongoing during investigation; conclusion typically within 30 days",
  },
  {
    stage: "Voluntary service agreement",
    description: "CAS may offer a voluntary services agreement instead of court involvement where parents are cooperative and risk can be managed",
    timeline: "Alternative to court proceedings; can be refused by parents without prejudice",
  },
  {
    stage: "Apprehension (if necessary)",
    description: "CAS may remove the child with or without a court order where there is immediate risk and insufficient time to obtain order",
    timeline: "Apprehension followed by court hearing within 5 days",
  },
  {
    stage: "Protection application",
    description: "CAS files an application in the Ontario Court of Justice; parents and child served and entitled to attend",
    timeline: "First hearing within 5 days of apprehension; adjournments on consent are common",
  },
  {
    stage: "Case conference",
    description: "Parties and lawyers meet to discuss case plan, disclosure, and potential resolution without a full hearing",
    timeline: "Typically scheduled early in proceedings; can lead to consent order",
  },
  {
    stage: "Child protection hearing",
    description: "Full hearing where CAS must prove the child is in need of protection; if proven, disposition hearing determines appropriate order",
    timeline: "Trial generally completed within 6 months of first court date (CYFSA timelines)",
  },
];

type WardshipRow = {
  order: string;
  meaning: string;
  duration: string;
  effect: string;
};

const wardshipOrders: WardshipRow[] = [
  {
    order: "Supervision order",
    meaning: "Child remains in parental care subject to CAS supervision and conditions",
    duration: "Up to 12 months; renewable",
    effect: "Least intrusive option; parental rights maintained; CAS monitors compliance with conditions",
  },
  {
    order: "Society wardship (temporary)",
    meaning: "Child placed in CAS care while parents work toward reunification",
    duration: "Up to 12 months; aggregate maximum of 24 months before Crown wardship required",
    effect: "Parental rights suspended but not terminated; access typically ordered; case plan includes reunification goals",
  },
  {
    order: "Crown wardship",
    meaning: "Child permanently in care of the Crown; parental rights effectively terminated",
    duration: "Permanent until child turns 18 or is adopted",
    effect: "CAS has exclusive care authority; adoption process typically follows; access may be terminated or severely limited",
  },
  {
    order: "Custody to third party",
    meaning: "Child placed with a relative or other trusted adult under custody order",
    duration: "Defined period; may be permanent where appropriate",
    effect: "Alternative to wardship; can preserve family connections while protecting child",
  },
];

const faqs = [
  {
    q: "What is the CYFSA and how does it govern child protection in Ontario?",
    a: "The Child, Youth and Family Services Act, 2017 (CYFSA) is the Ontario statute governing child protection, children's aid societies (CAS), adoption, and child and family services. It replaced the former Child and Family Services Act. The CYFSA establishes the grounds on which a child is in need of protection, the powers and duties of CAS, the court process for child protection proceedings, and the primacy of the best interests of the child in all decisions.",
  },
  {
    q: "Can CAS take my child without a court order in Ontario?",
    a: "Yes. A CAS worker can apprehend a child without a court order if they have reasonable grounds to believe the child is or may be in need of protection and there is immediate risk to the child that cannot be addressed by bringing the matter before a court. Following an apprehension, CAS must bring the matter before a court within 5 days. Parents must be served and can attend the initial hearing.",
  },
  {
    q: "What is the difference between society wardship and Crown wardship in Ontario?",
    a: "Society wardship (temporary wardship) places the child in the care of the CAS for a period while the parents work toward the child's return. Crown wardship terminates parental rights and makes the child permanently a ward of the Crown, with adoption being the typical next step. Crown wardship is ordered where the court finds it is in the best interests of the child and the matter cannot be resolved by a lesser order, including where risk of harm cannot be adequately managed with the child in parental care.",
  },
  {
    q: "What are a parent's rights when CAS apprehends their child in Ontario?",
    a: "When CAS apprehends a child, parents have the right to: be notified of the apprehension and the reasons; attend all court hearings; be represented by a lawyer (Legal Aid Ontario provides coverage for qualifying parents in child protection proceedings); participate in case conferences; receive disclosure of the CAS file and evidence; make submissions on any proposed disposition; and appeal any order made by the court.",
  },
];

export default function OntarioChildProtectionPage() {
  return (
    <>
      <Script id="ontario-child-protection-schema" type="application/ld+json">
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
            <span className="text-slate-900">Ontario Child Protection Guide</span>
          </div>
        </div>

        {/* Header */}
        <header className="py-16 px-6 border-b border-slate-100">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-amber-100 text-amber-800 text-sm font-medium px-3 py-1 rounded-full mb-6">
              Family Law
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-4 leading-tight">
              Ontario Child Protection Law Guide 2024: CYFSA, CAS Investigations, and Court Process
            </h1>
            <p className="text-xl text-slate-600 mb-6">
              CYFSA grounds for child in need of protection, CAS investigation and apprehension procedure, 8-stage court process, voluntary service agreements, supervision vs society wardship vs Crown wardship, and parents&apos; rights throughout proceedings.
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
              Child protection proceedings are some of the most high-stakes and time-sensitive matters in Ontario family law. Parents may lose custody of their children entirely; children may be permanently separated from their families. For Ontario family lawyers — whether acting for parents, extended family members, or other parties — a thorough understanding of the Child, Youth and Family Services Act, 2017 (CYFSA) is essential.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              The CYFSA replaced the Child and Family Services Act (CFSA) in 2018. It modernized the child protection framework, added additional rights for children and youth, and restructured the types of orders available. The guiding principle throughout is the best interests of the child — but courts must also respect the importance of family preservation where consistent with the child&apos;s safety.
            </p>
            <p className="text-slate-700 leading-relaxed">
              This guide covers the grounds for finding a child in need of protection, the CAS investigation and apprehension process, voluntary agreements, the court process, wardship orders, and parents&apos; rights throughout child protection proceedings.
            </p>
          </section>

          {/* Grounds */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              CYFSA Grounds: When Is a Child in Need of Protection?
            </h2>
            <p className="text-slate-700 mb-6">
              Section 74(2) of the CYFSA lists the grounds on which a child may be found to be in need of protection. CAS must have reasonable and probable grounds to believe one or more of these grounds exist before taking protective action.
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm mb-6">
              <table className="w-full bg-white">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left px-5 py-4 font-semibold text-sm">Ground</th>
                    <th className="text-left px-5 py-4 font-semibold text-sm">Description</th>
                    <th className="text-left px-5 py-4 font-semibold text-sm">Examples</th>
                  </tr>
                </thead>
                <tbody>
                  {protectionGrounds.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-5 py-4 font-medium text-slate-900 text-sm">{row.ground}</td>
                      <td className="px-5 py-4 text-slate-700 text-sm">{row.description}</td>
                      <td className="px-5 py-4 text-slate-600 text-sm">{row.examples}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
              <p className="text-amber-900 text-sm">
                <strong>Best interests of the child:</strong> Even where a ground for protection exists, courts must make the order that is in the best interests of the child. The CYFSA enumerates factors including the child&apos;s physical, mental, and emotional needs; the importance of continuity in care and stable family relationships; the child&apos;s cultural and linguistic heritage; and the child&apos;s own views and preferences where ascertainable.
              </p>
            </div>
          </section>

          {/* Court Process */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              CAS Investigation and Court Process: 8 Stages
            </h2>
            <div className="space-y-4">
              {processSteps.map((item, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-7 h-7 bg-amber-400 text-slate-900 rounded-full flex items-center justify-center font-bold text-sm">
                      {i + 1}
                    </div>
                    <div>
                      <div className="flex flex-wrap gap-2 mb-1">
                        <h3 className="font-semibold text-slate-900">{item.stage}</h3>
                        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">{item.timeline}</span>
                      </div>
                      <p className="text-slate-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Wardship Orders */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Child Protection Orders: From Supervision to Crown Wardship
            </h2>
            <p className="text-slate-700 mb-6">
              Ontario courts apply the principle of least restrictive intervention — the court must make the order that is in the best interests of the child, and where two orders are equally consistent with those interests, the court prefers the less intrusive option.
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
              <table className="w-full bg-white">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left px-5 py-4 font-semibold text-sm">Order</th>
                    <th className="text-left px-5 py-4 font-semibold text-sm">Meaning</th>
                    <th className="text-left px-5 py-4 font-semibold text-sm">Duration</th>
                    <th className="text-left px-5 py-4 font-semibold text-sm">Effect</th>
                  </tr>
                </thead>
                <tbody>
                  {wardshipOrders.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-5 py-4 font-medium text-slate-900 text-sm">{row.order}</td>
                      <td className="px-5 py-4 text-slate-700 text-sm">{row.meaning}</td>
                      <td className="px-5 py-4 text-slate-700 text-sm">{row.duration}</td>
                      <td className="px-5 py-4 text-slate-600 text-sm">{row.effect}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
              Manage Family Law Files with Atticus
            </h2>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto text-sm">
              Atticus helps Ontario family lawyers track court deadlines, manage trust accounting, and keep files LSO-compliant throughout child protection and custody proceedings.
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
                { href: "/blog/ontario-child-custody-law", label: "Ontario Child Custody Law Guide" },
                { href: "/blog/ontario-child-support-guidelines", label: "Ontario Child Support Guidelines" },
                { href: "/blog/ontario-family-law-separation-process", label: "Ontario Family Law Separation Process" },
                { href: "/blog/ontario-spousal-support", label: "Ontario Spousal Support Guide" },
                { href: "/blog/ontario-human-rights-complaint", label: "Ontario Human Rights Complaint" },
                { href: "/blog/ontario-criminal-sentencing", label: "Ontario Criminal Sentencing Guide" },
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
