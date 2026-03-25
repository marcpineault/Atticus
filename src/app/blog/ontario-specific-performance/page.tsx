import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ontario Specific Performance: When Courts Order Contract Performance (2024)",
  description:
    "Complete guide to specific performance in Ontario. When courts will order specific performance, the uniqueness requirement and its evolution, inadequacy of damages, land contracts and the presumption, personal service contracts, hardship defence, partial performance, laches, and the relationship to damages in lieu under the Judicature Act.",
  alternates: { canonical: "https://getatticus.ca/blog/ontario-specific-performance" },
  openGraph: {
    title: "Ontario Specific Performance: When Courts Order Contract Performance (2024)",
    description:
      "Guide to specific performance in Ontario — uniqueness requirement, inadequacy of damages, land contracts, hardship defence, partial performance, laches, and damages in lieu.",
    url: "https://getatticus.ca/blog/ontario-specific-performance",
    type: "article",
  },
};

const schemaJson = `{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Ontario Specific Performance: When Courts Order Contract Performance (2024)",
  "description": "Guide to specific performance in Ontario. Uniqueness requirement, inadequacy of damages, land contracts, hardship defence, partial performance, laches, and damages in lieu.",
  "author": { "@type": "Organization", "name": "Atticus" },
  "publisher": { "@type": "Organization", "name": "Atticus", "url": "https://getatticus.ca" },
  "url": "https://getatticus.ca/blog/ontario-specific-performance",
  "datePublished": "2024-12-01",
  "dateModified": "2024-12-01"
}`;

export default function OntarioSpecificPerformancePage() {
  return (
    <>
      <Script id="ontario-specific-performance-schema" type="application/ld+json">
        {schemaJson}
      </Script>

      <div className="min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <div className="mb-8">
            <Link
              href="/blog"
              className="text-sm text-amber-700 hover:text-amber-900 font-medium"
            >
              ← Back to Blog
            </Link>
          </div>

          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-amber-100 text-amber-800 text-xs font-semibold px-3 py-1 rounded-full">
                Civil Litigation
              </span>
              <span className="text-slate-400 text-sm">13 min read</span>
              <span className="text-slate-400 text-sm">December 2024</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-6">
              Ontario Specific Performance: When Courts Order Contract Performance
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Specific performance is an equitable remedy that compels a party to perform their contractual
              obligations. It is available where damages would be an inadequate remedy and where the
              court is satisfied that it would be just and equitable to compel performance. In Ontario,
              specific performance is most commonly ordered in real estate transactions but extends
              to other contracts for unique goods, intellectual property, and other matters where
              monetary compensation cannot adequately substitute for actual performance.
            </p>
          </header>

          <article className="prose prose-slate max-w-none">
            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
              The Foundational Principle: Inadequacy of Damages
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Specific performance is not a matter of right — it is a discretionary equitable remedy.
              The fundamental prerequisite is that damages would be an inadequate remedy for the breach.
              Where monetary compensation would fully compensate the innocent party for the loss suffered
              from breach, courts will leave the parties to their remedy in damages and will not compel
              performance.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              The classic statement is from <em>Beswick v Beswick</em> [1968] AC 58 (HL): equity will
              give specific performance where the common law remedy of damages is inadequate to do justice
              between the parties. Inadequacy of damages arises most clearly where the subject matter
              of the contract is unique — something that cannot be readily obtained on the open market
              with the damages award.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
              Real Property: The Traditional Domain of Specific Performance
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Land has historically been treated as unique, and specific performance of contracts for
              the purchase and sale of land has traditionally been available almost as of right in
              Ontario. The traditional presumption is that every parcel of land is unique — no two
              parcels are in the same location with the same characteristics — so damages cannot
              adequately compensate a purchaser for the loss of the specific parcel contracted for.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              The traditional approach was significantly modified by the Supreme Court of Canada in
              <em>Semelhago v Paramadevan</em> [1996] 2 SCR 415. Justice Sopinka, writing for the
              majority, held that the presumption that all land is unique is no longer sustainable in
              the modern context. Residential real estate is frequently available as a commodity —
              there are often many comparable properties available for purchase on the market, and
              monetary compensation may adequately compensate a purchaser.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              After <em>Semelhago</em>, a purchaser seeking specific performance of a real estate
              contract must establish that the property has a particular and special value that cannot
              be compensated in damages. This may be established where:
            </p>
            <ul className="list-disc pl-6 mb-4 text-slate-700 space-y-2">
              <li>The property has unique physical characteristics (location, views, access to water,
              heritage buildings)</li>
              <li>The property is adjacent to the purchaser&apos;s existing land and has strategic value
              for combination or development that cannot be replicated by a substitute property</li>
              <li>The purchaser contracted for a specific property for personal reasons that a
              substitute cannot fulfil</li>
              <li>The market was extremely tight and no comparable property was available</li>
            </ul>
            <p className="text-slate-700 leading-relaxed mb-4">
              Commercial real estate — development land, properties with specific zoning or density
              entitlements, or properties with critical locational advantages — more readily attracts
              specific performance because the commercial value of the specific location or entitlements
              cannot be replicated by a substitute.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Ontario courts post-<em>Semelhago</em> have ordered specific performance where the
              property has unique characteristics or the purchaser has demonstrated a specific
              purpose, while declining it for standard residential properties where the purchaser
              has not established specific uniqueness.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
              Specific Performance for Vendors
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              The principle of mutuality of remedies holds that specific performance should be
              available to both parties where it is available to one. A vendor of real property can
              seek specific performance against a purchaser who refuses to close, compelling the
              purchaser to complete the transaction and pay the purchase price.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              The vendor&apos;s claim for specific performance is important in markets where property
              values have declined: if the vendor must resell the property, a claim for damages
              (the difference between the original contract price and the resale price) may be
              straightforward. But where the vendor has a tax reason to sell in a particular year,
              or where the property is subject to other complications, specific performance may be
              the preferred remedy.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
              Specific Performance Beyond Real Estate
            </h2>

            <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
              Unique Goods
            </h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              The Ontario <em>Sale of Goods Act</em> RSO 1990 c S.1 s.51 authorizes a court to
              make an order for specific delivery of specific or ascertained goods — but only
              at the court&apos;s discretion and not as a matter of right. Goods are candidates for
              specific performance where they are genuinely unique — antiques, original works of
              art, historically significant items, one-of-a-kind equipment, or goods of particular
              personal significance.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Standard commercial goods available on the open market do not attract specific performance —
              damages for the cost of obtaining substitute goods from another supplier will adequately
              compensate the buyer.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
              Contracts for Personal Services
            </h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              Courts will not order specific performance of a contract for personal services —
              requiring a person to personally perform services for another. This flows from the
              refusal to compel personal service relationships and the recognition that courts cannot
              adequately supervise the performance of such contracts.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Negative covenants in personal service contracts — restraints of trade and non-compete
              clauses — may be enforced by injunction restraining the party from breaching their
              promise not to compete, even though specific performance compelling them to work
              would not be granted.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
              Share Purchase Agreements
            </h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              Specific performance of share purchase agreements is increasingly recognized in Ontario.
              Where a party has agreed to sell shares in a private corporation and refuses to complete,
              the purchaser may seek specific performance on the basis that the shares — representing
              a specific ownership interest in a specific enterprise — are unique and cannot be
              substituted by any other shares.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              The argument for uniqueness is particularly strong for controlling or majority share
              interests, and for shares in companies with unique assets, proprietary technology,
              or specific business relationships that cannot be replicated.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
              Defences to Specific Performance
            </h2>

            <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
              Hardship
            </h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              Courts will refuse specific performance where it would result in hardship to the
              defendant out of proportion to the benefit conferred on the plaintiff — particularly
              where the hardship arises from circumstances beyond the defendant&apos;s control. The
              hardship must be significant and must relate to the specific enforcement being ordered.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              A vendor who agreed to sell and is subsequently required to find alternative housing
              at significantly higher cost does not normally establish hardship sufficient to defeat
              specific performance — changed market conditions are within the expected risks of a
              real estate transaction. But supervening events that make performance genuinely
              impossible or oppressive may engage the hardship defence.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
              Laches and Delay
            </h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              Specific performance is an equitable remedy, and equity refuses to assist those who
              sleep on their rights. Unreasonable delay in bringing a claim for specific performance
              — especially delay that has caused prejudice to the defendant — may bar the remedy.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              The Ontario <em>Limitations Act 2002</em> applies a two-year limitation period to
              claims for specific performance, subject to discoverability. Equitable delay (laches)
              may operate independently of the statutory limitation period to bar specific performance
              where the plaintiff&apos;s delay has been inequitable.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
              Plaintiff&apos;s Default (Clean Hands)
            </h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              Equity requires the plaintiff seeking specific performance to have themselves performed
              their obligations under the contract or to have tendered performance. A purchaser who
              was not ready, willing, and able to complete the transaction on the closing date cannot
              seek specific performance against a non-performing vendor.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              The clean hands doctrine — &quot;he who comes to equity must come with clean hands&quot; —
              may also bar specific performance where the plaintiff has engaged in misleading or
              unconscionable conduct in connection with the contract.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
              Mutuality
            </h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              Specific performance must generally be available to both parties to a contract for
              the court to order it against one. Where the nature of the contract is such that the
              remedy would only be available to one party (for example, a contract for personal
              services that only the plaintiff could perform), the court may decline to grant it
              against the defendant.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
              Partial Performance
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Ontario courts may order specific performance of part of a contract where only part
              of the contract is enforceable or where the plaintiff can take what is available
              on the terms of the contract. In real estate, partial performance may arise where
              only part of the land contracted for is available for conveyance due to a survey
              discrepancy or encumbrance.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              In the law of contract, part performance operates in equity to make otherwise
              unenforceable oral contracts for land specifically enforceable where acts of part
              performance have occurred — the classic example being the payment of purchase money
              plus taking possession of land under an oral agreement for sale.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
              Damages in Lieu of Specific Performance
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Under the <em>Courts of Justice Act</em> RSO 1990 c C.43 s.99, the court may award
              damages in lieu of or in addition to an injunction or specific performance. This
              provision (formerly the Lord Cairns Act jurisdiction) permits the court to award
              equitable damages where legal damages would be inadequate and where specific
              performance is not an appropriate remedy on the specific facts.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Equitable damages in lieu of specific performance can be measured differently from
              common law damages — they may compensate the plaintiff for the specific value of the
              performance rather than simply the expectation measure. In real estate, this permits
              the court to compensate the purchaser for the specific value of the property (including
              development value or personal value) rather than just the market value difference.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
              Practical Considerations for Ontario Real Property Lawyers
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Real estate lawyers in Ontario should advise clients who face a non-performing counterparty
              on:
            </p>
            <ul className="list-disc pl-6 mb-4 text-slate-700 space-y-2">
              <li>Whether the property has unique characteristics that would support a claim for
              specific performance post-<em>Semelhago</em></li>
              <li>The time-sensitive nature of the election between pursuing specific performance
              and repudiating the contract and claiming damages — taking inconsistent steps can
              waive the right to specific performance</li>
              <li>The obligation to remain ready, willing, and able to perform in order to maintain
              the claim for specific performance</li>
              <li>The desirability of registering a certificate of pending litigation (CPL) on the
              title to the property to prevent a third party purchase that would make specific
              performance impossible</li>
              <li>The limitation period for commencing an action for specific performance after
              a vendor refuses to close</li>
            </ul>
            <p className="text-slate-700 leading-relaxed mb-4">
              Atticus supports Ontario real property and civil litigation lawyers with deadline
              tracking for limitation periods, AI document analysis across transaction documents,
              LSO By-Law 9 compliant trust accounting, and full matter management from agreement
              of purchase and sale through closing or litigation.
            </p>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mt-10">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                Atticus for Ontario Real Property and Litigation Lawyers
              </h3>
              <p className="text-slate-700 text-sm leading-relaxed mb-4">
                Atticus is built for Ontario real estate and litigation practice — AI document analysis,
                limitation period tracking, LSO By-Law 9 compliant trust accounting, and full matter
                management built for Ontario solo and small law firms.
              </p>
              <Link
                href="/sign-up"
                className="inline-block bg-slate-900 text-white font-semibold px-6 py-3 rounded-lg hover:bg-slate-700 transition-colors text-sm"
              >
                Start Free Trial
              </Link>
            </div>

            <div className="mt-12 pt-8 border-t border-slate-100">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Related Articles</h3>
              <div className="space-y-3">
                <Link
                  href="/blog/ontario-real-estate-purchase-agreement"
                  className="block text-amber-700 hover:text-amber-900 font-medium text-sm"
                >
                  Ontario Real Estate Purchase Agreement: OREA APS, Conditions, Deposits, and Closing
                </Link>
                <Link
                  href="/blog/ontario-contract-dispute"
                  className="block text-amber-700 hover:text-amber-900 font-medium text-sm"
                >
                  Ontario Contract Disputes: Breach Categories, Damages, Mitigation, and Remedies
                </Link>
                <Link
                  href="/blog/ontario-fraudulent-misrepresentation"
                  className="block text-amber-700 hover:text-amber-900 font-medium text-sm"
                >
                  Ontario Fraudulent Misrepresentation: Elements, Rescission, and Damages
                </Link>
                <Link
                  href="/blog/ontario-injunction-process"
                  className="block text-amber-700 hover:text-amber-900 font-medium text-sm"
                >
                  Ontario Injunctions: Interlocutory Injunctions and the American Cyanamid Test
                </Link>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
