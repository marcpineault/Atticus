import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ontario Product Liability Law: Negligence, Warranty, and Consumer Protection | Atticus",
  description:
    "A practical guide to Ontario product liability law — negligence in design, manufacture, and warning, breach of statutory warranty under the Sale of Goods Act and Consumer Protection Act, 2002, class actions, and the standard of care for manufacturers.",
  alternates: { canonical: "https://getatticus.ca/blog/ontario-product-liability" },
  openGraph: {
    title: "Ontario Product Liability Law: Negligence, Warranty, and Consumer Protection | Atticus",
    description:
      "Complete reference for Ontario lawyers on product liability — Donoghue v Stevenson, design/manufacture/warning defects, Sale of Goods Act implied warranties, CPA 2002, and class actions.",
    url: "https://getatticus.ca/blog/ontario-product-liability",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Ontario Product Liability Law: Negligence, Warranty, and Consumer Protection",
  description: "A practical guide to Ontario product liability law.",
  author: { "@type": "Organization", name: "Atticus" },
  publisher: { "@type": "Organization", name: "Atticus" },
  datePublished: "2025-11-08",
  url: "https://getatticus.ca/blog/ontario-product-liability",
};

const defectTypes = [
  {
    type: "Design Defect",
    desc: "The product is inherently dangerous because of how it was designed — even a product made exactly as designed poses unreasonable risk. The plaintiff must show a feasible alternative design existed.",
    example: "A vehicle roof designed with insufficient crush resistance in rollovers.",
  },
  {
    type: "Manufacturing Defect",
    desc: "The product departs from its intended design during production, making the specific unit dangerous. The design itself may be safe; only the defective unit causes harm.",
    example: "A batch of prescription medication contaminated due to a production error.",
  },
  {
    type: "Warning/Instruction Defect",
    desc: "The product is dangerous in a foreseeable way that the manufacturer failed to adequately warn against. The duty to warn extends to post-sale warnings where a danger is discovered after the product reaches market.",
    example: "A power tool sold without adequate warnings about kickback risk.",
  },
  {
    type: "Development Risk (Innovative Products)",
    desc: "Where scientific knowledge at the time of manufacture did not reveal the risk, liability may be reduced but not necessarily eliminated. Ontario courts apply a foreseeability standard.",
    example: "Pharmaceutical side effects unknown at time of approval but discovered post-market.",
  },
];

export default function ProductLiabilityPage() {
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
              <span className="text-slate-400 text-sm">Personal Injury &amp; Commercial</span>
            </div>
            <h1 className="text-4xl font-bold mb-4">
              Ontario Product Liability Law: Negligence, Warranty, and Consumer Protection
            </h1>
            <p className="text-slate-300 text-lg">
              A complete reference for Ontario lawyers on product liability &mdash; the negligence
              framework from Donoghue v Stevenson, design, manufacturing, and warning defects,
              implied warranties under the Sale of Goods Act and Consumer Protection Act, 2002,
              and class action considerations.
            </p>
            <p className="text-slate-500 text-sm mt-4">Last updated: November 2025 &middot; 13 min read</p>
          </div>
        </section>

        <article className="py-12 px-6">
          <div className="max-w-3xl mx-auto space-y-8 text-slate-700 leading-relaxed">

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">The Negligence Foundation: Donoghue v Stevenson</h2>
              <p>
                Ontario product liability law is built on the foundational negligence principles
                established in <em>Donoghue v Stevenson</em> [1932] AC 562 (HL), where Lord Atkin
                held that a manufacturer of products owes a duty of care to the ultimate consumer
                who could reasonably be affected by the product. The neighbour principle &mdash; that
                one must take reasonable care to avoid acts or omissions that you can reasonably
                foresee would injure your neighbour &mdash; applies directly to product manufacturers,
                distributors, retailers, and component suppliers.
              </p>
              <p className="mt-3">
                The duty of care in product liability extends beyond the original purchaser to any
                person who could foreseeably be harmed by the product. This includes bystanders,
                users, and even persons in the vicinity of the product&apos;s use.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">The Anns/Cooper Test in Product Cases</h2>
              <p>
                Canadian courts apply the <em>Anns/Cooper</em> test (from <em>Cooper v Hobart</em>,
                2001 SCC 79) to establish novel duties of care. For product liability, the analysis
                typically proceeds as follows:
              </p>
              <ol className="list-decimal ml-6 mt-3 space-y-2">
                <li>
                  <strong>Proximity:</strong> Is there a sufficiently close relationship between the
                  manufacturer/distributor and the plaintiff such that it is just and fair to impose
                  a duty? For physical injury from a defective product, proximity is almost always
                  established.
                </li>
                <li>
                  <strong>Foreseeability:</strong> Was the plaintiff&apos;s injury a reasonably foreseeable
                  consequence of the defendant&apos;s negligence in design, manufacture, or warning?
                </li>
                <li>
                  <strong>Policy residual:</strong> Are there policy reasons to negate or limit the
                  duty? For pure economic loss from defective products (no personal injury), courts
                  are more cautious under <em>Winnipeg Condominium Corp No 36 v Bird Construction</em>
                  [1995] 1 SCR 85.
                </li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Types of Product Defects</h2>
              <div className="space-y-4">
                {defectTypes.map((item) => (
                  <div key={item.type} className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                    <h3 className="font-semibold text-slate-900 mb-1">{item.type}</h3>
                    <p className="text-sm text-slate-600 mb-2">{item.desc}</p>
                    <p className="text-xs text-slate-500 italic">Example: {item.example}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">The Duty to Warn</h2>
              <p>
                The duty to warn is the most frequently litigated aspect of product liability in
                Ontario. In <em>Lambert v Lastoplex Chemicals Co</em> [1972] SCR 569, the Supreme
                Court established that manufacturers have a duty to warn of dangerous characteristics
                even where the product is used in a foreseeable but unintended way.
              </p>
              <p className="mt-3">
                Key principles on the duty to warn:
              </p>
              <ul className="list-disc ml-6 mt-3 space-y-2">
                <li>
                  <strong>Adequacy:</strong> A warning must be clear, prominent, and communicated
                  in a way that reaches the end user. A warning buried in fine print or only
                  in English where French-speaking users are foreseeable may be inadequate.
                </li>
                <li>
                  <strong>Post-sale duty:</strong> Where a manufacturer discovers a danger after
                  the product has reached market, there is an ongoing duty to warn through recall
                  notices, updated labelling, and direct communication where identifiable
                  purchasers exist.
                </li>
                <li>
                  <strong>Learned intermediary doctrine:</strong> For prescription drugs and medical
                  devices, the manufacturer&apos;s duty to warn runs to the prescribing physician
                  (the &quot;learned intermediary&quot;), not directly to the patient. The physician&apos;s
                  independent professional judgment breaks the chain unless the manufacturer
                  misled the physician.
                </li>
                <li>
                  <strong>Sophisticated user:</strong> Where the plaintiff is a sophisticated user
                  who knows or ought to know the risk, the duty to warn may be reduced or
                  eliminated. This is a fact-specific defence.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Statutory Warranties: Sale of Goods Act</h2>
              <p>
                In addition to the tort framework, plaintiffs may bring warranty claims under the
                <em> Sale of Goods Act</em>, RSO 1990, c S.1. The Act implies the following
                warranties in every contract for the sale of goods:
              </p>
              <ul className="list-disc ml-6 mt-3 space-y-2">
                <li>
                  <strong>Merchantable quality (s. 15(b)):</strong> Where goods are bought by
                  description from a seller who deals in goods of that description, there is an
                  implied condition that the goods shall be of merchantable quality. If the buyer
                  examines the goods, the condition applies to defects that examination ought to
                  have revealed.
                </li>
                <li>
                  <strong>Fitness for purpose (s. 15(a)):</strong> Where the buyer makes known
                  the particular purpose for which the goods are required, there is an implied
                  condition that the goods shall be reasonably fit for that purpose.
                </li>
                <li>
                  <strong>Sale by description (s. 14):</strong> Where goods are sold by description,
                  there is an implied condition that the goods shall correspond with the description.
                </li>
              </ul>
              <p className="mt-3">
                SGA warranties run between the parties to the contract of sale and cannot be
                disclaimed in consumer transactions under the Consumer Protection Act, 2002.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Consumer Protection Act, 2002</h2>
              <p>
                The <em>Consumer Protection Act, 2002</em>, SO 2002, c 30, Sched A (CPA) provides
                additional protections for Ontario consumers:
              </p>
              <ul className="list-disc ml-6 mt-3 space-y-2">
                <li>
                  <strong>Unfair practices (s. 17):</strong> It is an unfair practice for a supplier
                  to make a false, misleading, or deceptive representation, including
                  misrepresentations about product quality or fitness. Consumers may rescind the
                  agreement and recover damages.
                </li>
                <li>
                  <strong>Implied warranties cannot be disclaimed (s. 9):</strong> Any term in a
                  consumer agreement that purports to negate or vary implied conditions and
                  warranties under the Sale of Goods Act is void.
                </li>
                <li>
                  <strong>Internet agreements (s. 38):</strong> Specific disclosure and cancellation
                  rights apply to consumer purchases made online.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Product Liability Class Actions</h2>
              <p>
                Product liability claims often involve large numbers of affected consumers with
                similar claims. Ontario&apos;s <em>Class Proceedings Act, 1992</em>, SO 1992, c 6,
                is frequently used in product liability cases involving defective vehicles,
                pharmaceuticals, medical devices, food products, and consumer electronics.
              </p>
              <p className="mt-3">
                Certification under the CPA requires:
              </p>
              <ol className="list-decimal ml-6 mt-3 space-y-1">
                <li>A cause of action (s. 5(1)(a));</li>
                <li>An identifiable class of two or more persons (s. 5(1)(b));</li>
                <li>Common issues (s. 5(1)(c)) &mdash; the central battleground in product liability certification;</li>
                <li>A class proceeding is the preferable procedure (s. 5(1)(d)); and</li>
                <li>A representative plaintiff who fairly represents the class (s. 5(1)(e)).</li>
              </ol>
              <p className="mt-3">
                In pharmaceutical and medical device class actions, common issues typically include:
                whether the product was defective, whether the manufacturer breached the duty to warn,
                and the appropriate quantum of general damages. Individual issues (causation,
                individual damages) are often reserved for individual trials.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Limitation Periods and Practical Notes</h2>
              <p>
                The 2-year limitation period under the <em>Limitations Act, 2002</em> applies to
                most product liability claims, running from the date the plaintiff discovered (or
                ought to have discovered) the claim. For latent injuries from pharmaceutical
                products, the discovery rule can significantly extend the effective limitation period.
              </p>
              <p className="mt-3">
                Key practical notes for Ontario product liability lawyers:
              </p>
              <ul className="list-disc ml-6 mt-3 space-y-1">
                <li>Preserve the product immediately — spoliation of key evidence is a recurring problem in product cases;</li>
                <li>Obtain all versions of warnings, instructions, and product manuals as they existed at the time of the accident;</li>
                <li>For pharmaceutical cases, obtain Health Canada approval history and post-market surveillance reports;</li>
                <li>Identify all parties in the distribution chain — manufacturer, component supplier, distributor, and retailer may each be separately liable;</li>
                <li>Consider whether the CPA unfair practices provisions support a rescission claim in addition to negligence.</li>
              </ul>
            </section>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
              <h3 className="font-semibold text-blue-900 mb-2">Manage Product Liability Files with Atticus</h3>
              <p className="text-blue-800 text-sm mb-4">
                Atticus extracts key facts from technical reports, product manuals, and medical
                records, and tracks limitation period deadlines across your Ontario litigation files.
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
