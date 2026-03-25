import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ontario Consumer Protection Law Guide 2024 | Consumer Protection Act 2002, Internet Agreements, and Remedies",
  description:
    "Complete guide to Ontario consumer protection law: Consumer Protection Act 2002 (CPA), internet and remote agreements, cooling off periods, unfair practices, implied warranties, consumer remedies, and the role of the Consumer Protection Ontario and FSRA for Ontario consumer protection lawyers.",
  openGraph: {
    title: "Ontario Consumer Protection Law Guide 2024 | CPA 2002, Internet Agreements, and Remedies",
    description:
      "Ontario consumer protection law: Consumer Protection Act 2002, internet agreements, cooling off periods, unfair practices, implied warranties, and consumer remedies.",
    url: "https://getatticus.ca/blog/ontario-consumer-protection",
    siteName: "Atticus",
    type: "article",
  },
  alternates: { canonical: "https://getatticus.ca/blog/ontario-consumer-protection" },
};

const articleSchema = `{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Ontario Consumer Protection Law Guide 2024: Consumer Protection Act 2002, Internet Agreements, Cooling Off Periods, and Consumer Remedies",
  "description": "Complete guide to Ontario consumer protection law including the Consumer Protection Act 2002, internet and remote agreements, cooling off periods, unfair practices, implied warranties, and consumer remedies.",
  "author": {
    "@type": "Organization",
    "name": "Atticus"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Atticus",
    "url": "https://getatticus.ca"
  },
  "datePublished": "2024-12-01",
  "dateModified": "2024-12-01",
  "url": "https://getatticus.ca/blog/ontario-consumer-protection",
  "mainEntityOfPage": "https://getatticus.ca/blog/ontario-consumer-protection"
}`;

const faqSchema = `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the Consumer Protection Act 2002 in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Ontario Consumer Protection Act, 2002 (CPA) is the primary statute governing consumer transactions in Ontario. It applies to agreements between consumers and suppliers for goods and services. The CPA: implies non-waivable warranties of fitness and merchantability for consumer goods (s.9); requires specific disclosure and cancellation rights for internet agreements, direct agreements (door-to-door), and remote agreements; prohibits unfair practices (s.14) — false, misleading, or unconscionable representations; and provides consumers with rescission rights, damages, and the right to advance court claims for CPA violations. Consumers cannot waive their CPA rights — any term purporting to do so is void."
      }
    },
    {
      "@type": "Question",
      "name": "What are the cooling off periods for consumer contracts in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Ontario Consumer Protection Act 2002 provides several cooling off periods that allow consumers to cancel certain contracts without penalty: (1) Direct agreements (door-to-door sales) — 10 days from receipt of a written copy of the agreement; (2) Internet agreements — 7 days from receipt of a written copy of the agreement; (3) Time share agreements — 10 days; (4) Personal development services (gym memberships) — 10 days; (5) Prepaid services agreements — 10 days. These are minimum periods — the consumer must cancel in writing within the applicable period, and the supplier must refund any payments within 15 days of the cancellation."
      }
    },
    {
      "@type": "Question",
      "name": "What are unfair practices under the Ontario Consumer Protection Act?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Section 14 of the Ontario CPA prohibits unfair practices in consumer transactions, including: false, misleading, or deceptive representations about goods or services; representations that goods are new when they are used; misrepresentations about the price, quality, or availability of goods or services; and unconscionable representations that take advantage of a consumer's incapacity, vulnerability, or lack of understanding. The unconscionability standard (s.15) looks at whether the supplier knew or ought to have known that the consumer was unable to protect their own interests. Consumers who are subjected to unfair practices may rescind the agreement and claim damages."
      }
    },
    {
      "@type": "Question",
      "name": "What remedies are available to consumers under the Ontario Consumer Protection Act?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Ontario CPA provides several remedies: (1) rescission of the agreement and refund of payments for unfair practices, non-delivery, or violation of agreement requirements; (2) damages for loss suffered as a result of unfair practices; (3) a private right of action under s.100 — a consumer who suffers a loss from a contravention of the Act can sue the supplier; (4) injunctive relief and orders against suppliers under the Director's enforcement powers; (5) chargeback rights for credit card payments for undelivered goods and services. Class actions under the Class Proceedings Act 1992 have been successfully used for consumer protection violations against major suppliers."
      }
    },
    {
      "@type": "Question",
      "name": "What rules apply to internet agreements under the Ontario Consumer Protection Act?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Internet agreements under the Ontario CPA (s.38-44) require the supplier to: provide a fair and accurate description of the goods or services, the total price including taxes and charges, the delivery arrangements, the supplier's identity and contact information, and a copy of the agreement in writing. The supplier must provide an express opportunity for the consumer to accept or decline the agreement before entering into it. The consumer has a 7-day cooling off period after receipt of a written copy of the agreement. Internet agreements that do not comply with the CPA requirements are voidable at the consumer's option."
      }
    }
  ]
}`;

export default function OntarioConsumerProtectionPage() {
  return (
    <>
      <Script id="ontario-consumer-protection-article-schema" type="application/ld+json">
        {articleSchema}
      </Script>
      <Script id="ontario-consumer-protection-faq-schema" type="application/ld+json">
        {faqSchema}
      </Script>

      <div className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-amber-400 text-slate-900 text-sm font-semibold px-4 py-1 rounded-full mb-4">
              Consumer Law
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Ontario Consumer Protection Law Guide 2024
            </h1>
            <p className="text-xl text-slate-300 mb-6">
              Consumer Protection Act 2002 framework, implied warranties, cooling off periods (direct, internet, and remote agreements), unfair practices, unconscionable representations, consumer remedies, and class actions — the complete guide for Ontario consumer protection and commercial lawyers.
            </p>
            <div className="flex gap-4 text-sm text-slate-400">
              <span>December 2024</span>
              <span>•</span>
              <span>12 min read</span>
              <span>•</span>
              <span>Consumer Law</span>
            </div>
          </div>
        </section>

        <article className="py-12 px-6">
          <div className="max-w-4xl mx-auto prose prose-slate max-w-none">

            <h2>The Ontario Consumer Protection Framework</h2>
            <p>
              Ontario consumer protection law is primarily governed by the <strong>Consumer Protection Act, 2002 (CPA)</strong> and its regulations, supplemented by the <strong>Consumer Reporting Act</strong>, the <strong>Collection and Debt Settlement Services Act</strong>, the <strong>Motor Vehicle Dealers Act, 2002</strong>, and sector-specific legislation. The Financial Services Regulatory Authority (FSRA) and the Ministry of Public and Business Service Delivery (through Consumer Protection Ontario) administer and enforce Ontario consumer protection legislation.
            </p>
            <p>
              The fundamental principles underlying Ontario consumer protection are: mandatory disclosure to enable informed decision-making; minimum standards that cannot be contracted out; cooling off rights for situations where consumers make decisions under pressure; and accessible remedies that level the playing field between consumers and commercial suppliers.
            </p>

            <h2>Application of the Consumer Protection Act 2002</h2>
            <p>
              The CPA applies to <strong>consumer agreements</strong> — agreements between a consumer and a supplier for the supply of goods or services. Key definitions:
            </p>
            <ul>
              <li><strong>Consumer</strong>: An individual acting for personal, family, or household purposes — not a business purpose</li>
              <li><strong>Supplier</strong>: A person who is in the business of supplying goods or services to consumers</li>
              <li><strong>Consumer agreement</strong>: An agreement between a consumer and supplier for the supply of goods or services</li>
            </ul>
            <p>
              The CPA does not apply to: financial products regulated under FSRA legislation; transactions between businesses; real property transactions (though the <em>Real Estate and Business Brokers Act</em> applies to real estate agents); and employment contracts. Some specific exclusions apply to certain types of transactions — lawyers should verify whether the CPA applies to any particular client matter.
            </p>

            <h2>Implied Warranties Under CPA s.9</h2>
            <p>
              Part III of the CPA implies mandatory statutory warranties into every consumer agreement for goods. Under s.9(1), every consumer agreement for goods includes implied conditions and warranties that:
            </p>
            <ul>
              <li>The goods are of <strong>acceptable quality</strong> — fit for the purpose for which goods of that kind are ordinarily used</li>
              <li>The goods are <strong>reasonably fit for the particular purpose</strong> for which the consumer is acquiring them, where the consumer has made that purpose known to the supplier</li>
              <li>The goods and any packaging are <strong>free of encumbrances</strong> not disclosed to the consumer</li>
              <li>The goods are <strong>reasonably durable</strong> having regard to the price and the purpose for which they are acquired</li>
              <li>If sold by <strong>description</strong>, the goods correspond with the description</li>
            </ul>
            <p>
              <strong>Non-waivable</strong>: CPA s.9(3) provides that these implied warranties cannot be excluded, modified, or waived by the supplier or consumer. Any term in a consumer agreement purporting to exclude or modify these warranties is void. This is a significant protection — standard supplier disclaimer clauses such as &ldquo;sold as is&rdquo; or &ldquo;no implied warranties&rdquo; are void in Ontario consumer transactions.
            </p>

            <h2>Internet Agreements Under the CPA</h2>
            <p>
              Part V of the CPA governs <strong>internet agreements</strong> — consumer agreements entered into through the internet. Supplier obligations for internet agreements under ss.38-44:
            </p>
            <ul>
              <li>Provide a fair and accurate description of the goods or services, the total price including taxes and all charges, delivery arrangements, and the supplier&apos;s identity and contact information</li>
              <li>Provide an express opportunity for the consumer to accept or decline before entering into the agreement</li>
              <li>Provide a complete written copy of the agreement to the consumer</li>
            </ul>
            <p>
              The consumer has a <strong>7-day cooling off period</strong> after receiving a written copy of the agreement to cancel without penalty. The consumer must cancel in writing. The supplier must refund all amounts paid within 15 days of receiving the cancellation.
            </p>
            <p>
              An internet agreement that does not comply with these requirements is <strong>voidable</strong> at the consumer&apos;s option for one year after entering into the agreement — a much longer rescission period than the 7-day cooling off period.
            </p>

            <h2>Direct Agreements (Door-to-Door Sales)</h2>
            <p>
              Part IV of the CPA governs <strong>direct agreements</strong> — consumer agreements negotiated in person at a location other than the supplier&apos;s place of business (door-to-door, telemarketing follow-up visits, etc.). Strict requirements apply:
            </p>
            <ul>
              <li>The supplier must provide a written copy of the agreement to the consumer at the time of signing</li>
              <li>The agreement must include specific prescribed information including a cancellation notice form</li>
              <li>The consumer has a <strong>10-day cooling off period</strong> after receiving the written agreement to cancel</li>
            </ul>
            <p>
              Violations of direct agreement requirements render the agreement <strong>voidable</strong> at the consumer&apos;s option for one year. Ontario courts have awarded damages and rescission in direct agreement cases — particularly for home improvement contracts, water heater rentals, and energy product sales.
            </p>

            <h2>Remote Agreements</h2>
            <p>
              Part VI of the CPA governs <strong>remote agreements</strong> — agreements negotiated at a distance without the simultaneous physical presence of both parties (telephone, catalogue, etc., other than internet). Similar disclosure requirements apply as for internet agreements, with a <strong>7-day cooling off period</strong> after the consumer receives a written copy of the agreement.
            </p>

            <h2>Unfair Practices Under CPA s.14</h2>
            <p>
              Section 14 of the CPA prohibits a broad range of unfair practices in consumer transactions:
            </p>

            <h3>False, Misleading, or Deceptive Representations</h3>
            <p>
              Representations about goods or services that are false, misleading, or deceptive — including misrepresentations about quality, price, availability, origin, or certification — are prohibited unfair practices. The test is objective: would the representation mislead a reasonable consumer? Intent to deceive is not required.
            </p>

            <h3>Unconscionable Representations (s.15)</h3>
            <p>
              Section 15 prohibits unconscionable representations — representations that take advantage of a consumer&apos;s incapacity, vulnerability, or inability to protect their own interests. The court or arbitrator may consider whether the supplier knew or ought to have known that the consumer was not capable of protecting their own interests and whether the consumer received grossly excessive consideration.
            </p>
            <p>
              Unconscionability under the CPA can overlap with common law unconscionability and equitable doctrines — but the CPA&apos;s statutory remedies (rescission, damages) may be available even where the common law test is not met.
            </p>

            <h2>Consumer Remedies Under the CPA</h2>
            <p>
              The CPA provides multiple consumer remedies:
            </p>

            <h3>Rescission</h3>
            <p>
              For unfair practices, non-delivery of goods or services, or violation of specific agreement requirements, consumers may rescind the agreement and recover all amounts paid. Rescission is available for up to one year where the supplier failed to comply with applicable agreement requirements.
            </p>

            <h3>Damages (s.100)</h3>
            <p>
              Section 100 provides a private right of action — a consumer who suffers a loss as a result of any contravention of the CPA may sue the supplier for recovery. This is a broad statutory cause of action that does not require proof of negligence — breach of the Act is sufficient. The limitation period is the standard 2 years from discovery under the <em>Limitations Act 2002</em>.
            </p>

            <h3>Class Actions</h3>
            <p>
              Consumer protection class actions under the <em>Class Proceedings Act 1992</em> have been used extensively in Ontario to address: systemic unfair practices by financial institutions; defective consumer products; deceptive marketing campaigns; and internet subscription subscription billing issues. The combination of the CPA&apos;s strict liability standard (no need to prove negligence) and the class action mechanism makes Ontario consumer protection class actions a potent tool.
            </p>

            <h3>Government Enforcement</h3>
            <p>
              Consumer Protection Ontario (Ministry of Public and Business Service Delivery) has enforcement powers under the CPA including: investigation and inspection powers; compliance orders; administrative penalties; and court applications for injunctions and remedial orders against suppliers who contravene the Act. The Director may publish information about compliance proceedings — a reputational sanction for suppliers.
            </p>

            <h2>Atticus for Ontario Consumer Protection Lawyers</h2>
            <p>
              Consumer protection matters — individual claims, class action proceedings, regulatory compliance advice — require efficient practice management. Atticus is designed for Ontario solo and small law firms and manages client intake, matter management, trust accounting (Law Society By-Law 9 compliant), HST billing, and AI document analysis — at $149 CAD per lawyer per month. For consumer protection lawyers, Atticus tracks limitation periods (including the CPA&apos;s 1-year voidability windows), manages multiple client files, and uses Canadian AI to extract key terms and provisions from consumer agreements and supplier disclosure documents.
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Manage Ontario Consumer Law Files with Atticus</h3>
              <p className="text-slate-700 mb-4">
                Practice management, trust accounting, and AI document analysis for Ontario consumer protection law — at $149 CAD per lawyer per month.
              </p>
              <Link
                href="/sign-up"
                className="inline-block bg-slate-900 text-white font-semibold px-6 py-3 rounded-lg hover:bg-slate-700 transition-colors"
              >
                Start Free Trial
              </Link>
            </div>

            <h2>Frequently Asked Questions</h2>

            <h3>What is the Consumer Protection Act 2002 in Ontario?</h3>
            <p>
              The CPA is Ontario&apos;s primary consumer transaction statute. It implies non-waivable warranties of fitness and merchantability for consumer goods (s.9); requires disclosure and cooling off rights for internet, direct, and remote agreements; prohibits unfair and unconscionable practices (ss.14-15); and provides consumers with rescission rights and a private right of action for CPA violations (s.100). Consumer CPA rights cannot be waived — any purported waiver is void.
            </p>

            <h3>What are the cooling off periods for consumer contracts in Ontario?</h3>
            <p>
              Direct agreements (door-to-door): 10 days. Internet agreements: 7 days. Remote agreements: 7 days. Time share agreements: 10 days. Personal development services (gym memberships): 10 days. Cancellation must be in writing; the supplier must refund payments within 15 days.
            </p>

            <h3>What are unfair practices under the Ontario Consumer Protection Act?</h3>
            <p>
              CPA s.14 prohibits false, misleading, or deceptive representations about goods or services. CPA s.15 prohibits unconscionable representations that take advantage of a consumer&apos;s vulnerability or incapacity. Intent to deceive is not required — the objective standard applies. Consumers may rescind the agreement and claim damages for unfair practices.
            </p>

            <h3>What remedies are available to consumers under the Ontario Consumer Protection Act?</h3>
            <p>
              Remedies include rescission (up to 1 year for agreement requirement violations), damages under s.100 private right of action, class action proceedings for systemic violations, and government enforcement (compliance orders, administrative penalties, injunctions). Credit card chargebacks are also available for undelivered goods and services.
            </p>

            <h3>What rules apply to internet agreements under the Ontario Consumer Protection Act?</h3>
            <p>
              Internet agreements under CPA ss.38-44 require specific disclosures, an express acceptance opportunity, and delivery of a written copy of the agreement. The consumer has a 7-day cooling off period after receiving the written copy. Non-compliant internet agreements are voidable for one year.
            </p>

          </div>
        </article>

        <section className="py-12 px-6 border-t border-slate-100 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-lg font-semibold text-slate-900 mb-6">Related Ontario Law Resources</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { href: "/blog/ontario-product-liability", label: "Ontario Product Liability Guide" },
                { href: "/blog/ontario-class-proceedings", label: "Ontario Class Proceedings Guide" },
                { href: "/blog/ontario-limitation-period", label: "Ontario Limitation Periods Guide" },
                { href: "/trust-accounting-ontario", label: "Ontario Trust Accounting" },
                { href: "/ontario-civil-litigation-lawyer", label: "Atticus for Civil Litigation" },
                { href: "/blog/ontario-professional-negligence", label: "Ontario Professional Negligence" },
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
          </div>
        </section>
      </div>
    </>
  );
}
