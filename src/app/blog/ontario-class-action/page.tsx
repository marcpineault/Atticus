import { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ontario Class Action Law: Certification, Common Issues & Settlement Approval | Atticus",
  description:
    "Complete guide to Ontario class action law. Class Proceedings Act certification test, preferable procedure, common issues, carriage disputes, settlement approval process, and cy-pres awards. Updated 2025.",
  keywords: [
    "Ontario class action law",
    "Class Proceedings Act Ontario",
    "class action certification Ontario",
    "preferable procedure Ontario",
    "common issues Ontario class action",
    "class action settlement approval Ontario",
    "class action lawyer Ontario",
    "cy-pres award Ontario",
  ],
  openGraph: {
    title: "Ontario Class Action Law: Certification, Common Issues & Settlement Approval",
    description:
      "Class Proceedings Act certification test, preferable procedure, carriage motions, settlement approval, and cy-pres for Ontario class action practitioners.",
    type: "article",
  },
};

const schemaJson = `{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Ontario Class Action Law: Certification, Common Issues and Settlement Approval",
      "description": "Complete guide to Ontario class action law covering the Class Proceedings Act certification test, preferable procedure, common issues, carriage disputes, settlement approval process, and cy-pres awards.",
      "datePublished": "2025-06-20",
      "dateModified": "2025-06-20",
      "author": { "@type": "Organization", "name": "Atticus" },
      "publisher": { "@type": "Organization", "name": "Atticus", "url": "https://getatticus.ca" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://getatticus.ca/blog/ontario-class-action" }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the test for certification of a class action in Ontario?",
          "acceptedAnswer": { "@type": "Answer", "text": "Under s. 5(1) of the Class Proceedings Act, 1992, a proceeding may be certified as a class action if: (1) the pleadings disclose a cause of action; (2) there is an identifiable class of two or more persons; (3) the claims of the class members raise common issues; (4) a class action is the preferable procedure for resolution of the common issues; and (5) there is a representative plaintiff who will adequately represent the class, has a workable litigation plan, and has no conflict of interest with class members. All five criteria must be met." }
        },
        {
          "@type": "Question",
          "name": "What does 'preferable procedure' mean in Ontario class action certification?",
          "acceptedAnswer": { "@type": "Answer", "text": "The preferable procedure requirement (s. 5(1)(d) Class Proceedings Act) asks whether a class action is preferable to other available means of resolving the common issues. Courts apply two branch analysis: (1) does the class action satisfy the objectives of behaviour modification, judicial economy, and access to justice better than other alternatives?; (2) is the class action manageable, given the nature of the common issues and the proposed litigation plan? A class action need not be the perfect procedure — only the preferable one." }
        },
        {
          "@type": "Question",
          "name": "What is a carriage motion in Ontario class actions?",
          "acceptedAnswer": { "@type": "Answer", "text": "When multiple law firms file competing class action proceedings arising from the same events, a carriage motion determines which firm will have carriage (control) of the litigation. Courts assess: the nature and scope of the causes of action advanced; the theories of liability; the proposed class definitions; the state of each proceeding; the resources and experience of counsel; and the fees proposed. Carriage motions are decided before certification." }
        },
        {
          "@type": "Question",
          "name": "How is a class action settlement approved in Ontario?",
          "acceptedAnswer": { "@type": "Answer", "text": "Under s. 29 of the Class Proceedings Act, a class action settlement requires court approval. The court must be satisfied the settlement is fair, reasonable, and in the best interests of the class as a whole. The hearing requires: notice to class members, opportunity for class members to object, class counsel's fees approval (separate from settlement), and affidavit evidence on the negotiations and settlement factors. Courts apply the Dabbs factors: likelihood of recovery, amount offered vs. amount achievable at trial, complexity and cost of continued litigation, views of class members, and class counsel's views." }
        }
      ]
    }
  ]
}`;

type CertificationElement = {
  element: string;
  section: string;
  standard: string;
  keyPoint: string;
};

const certificationElements: CertificationElement[] = [
  {
    element: "Cause of Action",
    section: "s. 5(1)(a)",
    standard: "Pleadings must disclose a cause of action — same test as motion to strike; accepts all pleaded facts as true",
    keyPoint: "The lowest bar — courts are very reluctant to refuse certification on this element alone; bare minimum pleading requirements",
  },
  {
    element: "Identifiable Class",
    section: "s. 5(1)(b)",
    standard: "Class can be defined by reference to objective criteria — not dependent on merits of the claim; must be possible to determine membership",
    keyPoint: "Class definition is a key strategic decision — too narrow loses class members, too broad creates manageability problems; class can be defined by reference to a date range, geographic area, or type of transaction",
  },
  {
    element: "Common Issues",
    section: "s. 5(1)(c)",
    standard: "Issues common to all class members — success for one class member must advance the position of all. Need not be determinative of liability; even one common issue can support certification",
    keyPoint: "Defendants argue individual issues predominate; plaintiffs argue common issues advance the litigation even if individual issues remain. The 'some basis in fact' standard applies to factual assertions — not a full merits hearing",
  },
  {
    element: "Preferable Procedure",
    section: "s. 5(1)(d)",
    standard: "Class action must be preferable to other available means (individual actions, regulatory proceedings, etc.) for resolving common issues",
    keyPoint: "Two-branch test: objectives (behaviour modification, judicial economy, access to justice) and manageable (workable litigation plan). Not required to be perfect — only preferable",
  },
  {
    element: "Representative Plaintiff",
    section: "s. 5(1)(e)",
    standard: "Representative plaintiff must: fairly and adequately represent class interests; have a workable litigation plan; have no conflict of interest with class members",
    keyPoint: "Defendants regularly challenge adequacy of representative plaintiff. Disqualifying conflicts include claims that differ materially from the class, or undisclosed financial arrangements",
  },
];

const settlementFactors = [
  { factor: "Likelihood of recovery at trial", desc: "Probability that the class would succeed at trial on liability; strength of the defendants' defences" },
  { factor: "Amount offered vs. potential at trial", desc: "Whether the settlement amount represents a fair proportion of what the class could recover if successful — discounted for risks" },
  { factor: "Complexity, expense, and duration of continued litigation", desc: "Class actions are expensive and slow; settlement avoids years of additional proceedings and appeals" },
  { factor: "Views of class members", desc: "Number and quality of objections; opt-out rate; support or opposition expressed at the fairness hearing" },
  { factor: "Recommendations of class counsel", desc: "Experienced class action counsel's view that the settlement is fair is entitled to weight — but not determinative" },
  { factor: "Good faith negotiations", desc: "Evidence that negotiations were arm's-length and adversarial; absence of collusion; mediator involvement is persuasive" },
];

const faqs = [
  {
    q: "What is the test for certification of a class action in Ontario?",
    a: "Under s. 5(1) of the Class Proceedings Act, 1992, a proceeding may be certified as a class action if: (1) the pleadings disclose a cause of action; (2) there is an identifiable class of two or more persons; (3) the claims of the class members raise common issues; (4) a class action is the preferable procedure for resolution of the common issues; and (5) there is a representative plaintiff who will adequately represent the class, has a workable litigation plan, and has no conflict of interest with class members. All five criteria must be met.",
  },
  {
    q: "What does 'preferable procedure' mean in Ontario class action certification?",
    a: "The preferable procedure requirement (s. 5(1)(d) Class Proceedings Act) asks whether a class action is preferable to other available means of resolving the common issues. Courts apply two branch analysis: (1) does the class action satisfy the objectives of behaviour modification, judicial economy, and access to justice better than other alternatives?; (2) is the class action manageable, given the nature of the common issues and the proposed litigation plan? A class action need not be the perfect procedure — only the preferable one.",
  },
  {
    q: "What is a carriage motion in Ontario class actions?",
    a: "When multiple law firms file competing class action proceedings arising from the same events, a carriage motion determines which firm will have carriage (control) of the litigation. Courts assess: the nature and scope of the causes of action advanced; the theories of liability; the proposed class definitions; the state of each proceeding; the resources and experience of counsel; and the fees proposed. Carriage motions are decided before certification.",
  },
  {
    q: "How is a class action settlement approved in Ontario?",
    a: "Under s. 29 of the Class Proceedings Act, a class action settlement requires court approval. The court must be satisfied the settlement is fair, reasonable, and in the best interests of the class as a whole. The hearing requires: notice to class members, opportunity for class members to object, class counsel's fees approval (separate from settlement), and affidavit evidence on the negotiations and settlement factors. Courts apply the Dabbs factors: likelihood of recovery, amount offered vs. amount achievable at trial, complexity and cost of continued litigation, views of class members, and class counsel's views.",
  },
];

export default function OntarioClassActionPage() {
  return (
    <>
      <Script id="ontario-class-action-schema" type="application/ld+json">
        {schemaJson}
      </Script>
      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <nav className="mb-8 text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-700">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-gray-700">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Ontario Class Action Law</span>
          </nav>

          <header className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">Civil Litigation</span>
              <span className="text-gray-400 text-sm">10 min read</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Ontario Class Action Law: Certification, Common Issues &amp; Settlement Approval
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Class Proceedings Act 5-part certification test, preferable procedure analysis, carriage motions, settlement approval (Dabbs factors), and cy-pres awards for Ontario class action practitioners.
            </p>
            <div className="mt-4 text-sm text-gray-400">Updated June 2025</div>
          </header>

          <section className="mb-10">
            <p className="text-gray-700 leading-relaxed text-lg">
              Ontario&apos;s Class Proceedings Act, 1992 (CPA) provides the framework for class action litigation — one of the most complex and high-stakes areas of civil practice. Ontario is one of Canada&apos;s most active class action jurisdictions. This guide covers the certification test, strategic considerations, carriage disputes, and settlement approval requirements that Ontario class action practitioners navigate.
            </p>
          </section>

          {/* Certification */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The 5-Part Certification Test (s. 5 CPA)</h2>
            <p className="text-gray-700 mb-5 leading-relaxed">
              Certification is the gateway to a class proceeding. The plaintiff bears the burden on all five elements. The standard for factual assertions is &quot;some basis in fact&quot; — not a balance of probabilities. The certification motion is not a merits hearing.
            </p>
            <div className="space-y-5">
              {certificationElements.map((el, i) => (
                <div key={i} className="border border-gray-200 rounded-xl p-5">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="font-bold text-gray-900">{el.element}</h3>
                    <span className="bg-blue-100 text-blue-700 text-xs font-mono px-2 py-1 rounded flex-shrink-0">{el.section}</span>
                  </div>
                  <p className="text-gray-700 text-sm mb-3 leading-relaxed"><strong>Standard:</strong> {el.standard}</p>
                  <div className="bg-blue-50 rounded-lg p-3">
                    <p className="text-blue-800 text-sm"><strong>Key point:</strong> {el.keyPoint}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Common Issues */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Issues: Strategy &amp; Framing</h2>
            <p className="text-gray-700 mb-5 leading-relaxed">
              The common issues element is typically the most contested at certification. Plaintiffs frame issues broadly to encompass the class; defendants argue individual issues predominate. Post-certification, common issues are tried first; individual issues (damages, causation) follow in individual proceedings or aggregate damages.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { label: "What qualifies as a common issue", desc: "An issue that, when resolved in the plaintiff's favour, advances each class member's claim. Need not determine liability completely — partial resolution is enough." },
                { label: "Aggregate damages (s. 24)", desc: "Courts can assess and award aggregate damages without individual proof of loss if: the nature of the right supports it and individual determination is impractical or unnecessary." },
                { label: "Waiver of tort / gain-based damages", desc: "In some class actions plaintiffs claim disgorgement of defendant's gains rather than loss-based compensation — particularly in consumer protection and data breach cases." },
                { label: "Individual issues management", desc: "After common issues trial, individual class members may claim their individual damages in a reference, through a claims process, or in individual proceedings as ordered by the court." },
                { label: "Reverse bifurcation", desc: "Some courts permit trial of aggregate damages before individual causation — practical where defendant's liability is clear and aggregate harm is provable without individual proof." },
                { label: "Issue certification", desc: "Courts sometimes certify only specific common issues rather than the full proceeding — useful where some claims are suitable for class treatment but others are not." },
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                  <div className="font-semibold text-gray-900 text-sm mb-1">{item.label}</div>
                  <div className="text-gray-600 text-sm leading-relaxed">{item.desc}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Settlement Approval */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Settlement Approval: The Dabbs Factors</h2>
            <p className="text-gray-700 mb-5 leading-relaxed">
              Under s. 29 CPA, any settlement, discontinuance, or abandonment of a class proceeding requires court approval. The leading case is Dabbs v. Sun Life Assurance (1998), which identified the factors Ontario courts apply.
            </p>
            <div className="space-y-3 mb-5">
              {settlementFactors.map((item, i) => (
                <div key={i} className="flex gap-4 bg-gray-50 border border-gray-200 rounded-xl p-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">{i + 1}</div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm mb-1">{item.factor}</div>
                    <div className="text-gray-600 text-sm leading-relaxed">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
              <h4 className="font-bold text-amber-900 mb-2">Cy-Pres Awards</h4>
              <p className="text-amber-800 text-sm leading-relaxed">
                Where unclaimed or undistributed settlement funds remain after the claims process, courts may approve cy-pres distribution to charitable or non-profit organizations with a nexus to the class&apos;s interests or the subject matter of the litigation. Cy-pres recipients must be approved by the court; class counsel typically proposes candidates and the court scrutinizes the nexus and the organizations&apos; independence.
              </p>
            </div>
          </section>

          {/* Carriage */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Carriage Motions</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Where multiple plaintiff firms file competing class actions arising from the same facts, a carriage motion determines which counsel proceeds. Courts apply a multi-factor analysis with no single determinative criterion.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Nature and scope of causes of action — breadth and creativity of theories",
                "Proposed class definition — who is included and excluded",
                "State of the proceedings — who acted first and with what diligence",
                "Resources and experience of counsel — class action track record",
                "Funding arrangements and litigation risk",
                "Proposed fee arrangement — reasonableness of counsel fees",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2 bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm text-gray-700">
                  <span className="text-blue-500 mt-0.5 flex-shrink-0">&#8250;</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <div key={i} className="border-b border-gray-200 pb-6">
                  <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white text-center mb-10">
            <h2 className="text-2xl font-bold mb-3">Manage Complex Litigation Files with Atticus</h2>
            <p className="text-blue-100 mb-6">
              Track certification deadlines, hearing schedules, and class member communications — built for Ontario civil litigators.
            </p>
            <Link href="/intake" className="inline-block bg-white text-blue-700 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
              Start Free Trial
            </Link>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Related Resources</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { href: "/blog/small-claims-court-ontario", label: "Ontario Small Claims Court Guide" },
                { href: "/blog/ontario-injunction-process", label: "Ontario Injunction Process" },
                { href: "/blog/ontario-civil-litigation-lawyer", label: "Ontario Civil Litigation Guide" },
                { href: "/blog/ontario-personal-injury-claim", label: "Ontario Personal Injury Claims" },
                { href: "/ontario-civil-litigation-lawyer", label: "Ontario Civil Litigation Lawyer Software" },
                { href: "/ontario-limitation-period", label: "Ontario Limitation Periods" },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="text-blue-600 hover:text-blue-800 text-sm font-medium hover:underline">
                  {link.label} &rarr;
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
