import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ontario Fraudulent Misrepresentation: Elements, Rescission, and Damages (2024)",
  description:
    "Complete guide to fraudulent misrepresentation in Ontario. The five elements (false representation, knowledge of falsity or recklessness, intention to induce, actual inducement, resulting loss), Derry v Peek definition, rescission, damages in tort, fraudulent concealment, negligent misrepresentation comparison (Hedley Byrne/Queen v Cognos), innocent misrepresentation, and misrepresentation in real estate transactions.",
  alternates: { canonical: "https://getatticus.ca/blog/ontario-fraudulent-misrepresentation" },
  openGraph: {
    title: "Ontario Fraudulent Misrepresentation: Elements, Rescission, and Damages (2024)",
    description:
      "Guide to fraudulent misrepresentation in Ontario — Derry v Peek elements, rescission, all-or-nothing bar, tortious damages, negligent misrepresentation under Hedley Byrne and Queen v Cognos, fraudulent concealment, and real estate applications.",
    url: "https://getatticus.ca/blog/ontario-fraudulent-misrepresentation",
    type: "article",
  },
};

const schemaJson = `{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Ontario Fraudulent Misrepresentation: Elements, Rescission, and Damages (2024)",
  "description": "Guide to fraudulent misrepresentation in Ontario. Derry v Peek elements, rescission, tortious damages, negligent misrepresentation comparison, fraudulent concealment, and real estate applications.",
  "author": { "@type": "Organization", "name": "Atticus" },
  "publisher": { "@type": "Organization", "name": "Atticus", "url": "https://getatticus.ca" },
  "url": "https://getatticus.ca/blog/ontario-fraudulent-misrepresentation",
  "datePublished": "2024-12-01",
  "dateModified": "2024-12-01"
}`;

export default function OntarioFraudulentMisrepresentationPage() {
  return (
    <>
      <Script id="ontario-fraudulent-misrepresentation-schema" type="application/ld+json">
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
              Ontario Fraudulent Misrepresentation: Elements, Rescission, and Damages
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Fraudulent misrepresentation is one of the most significant causes of action in Ontario
              commercial and property law. It allows a deceived party to rescind a contract and/or
              recover tort damages for all losses caused by the fraud — including losses that are not
              reasonably foreseeable, which distinguishes it from negligence and breach of contract
              claims. Understanding the elements, remedies, and relationship to related doctrines is
              essential to advising clients in commercial disputes, real estate transactions, and
              corporate acquisitions.
            </p>
          </header>

          <article className="prose prose-slate max-w-none">
            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
              The Classic Definition: Derry v Peek
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              The foundational statement of fraudulent misrepresentation in the common law comes from
              the House of Lords in <em>Derry v Peek</em> (1889) 14 App Cas 337. Lord Herschell
              defined fraud as a false representation made: (1) knowingly, (2) without belief in
              its truth, or (3) recklessly as to whether it is true or false.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              This definition has been applied consistently in Ontario. A person who makes a statement
              believing it to be true, however unreasonable that belief may be, does not commit fraud —
              the tort requires dishonesty (knowing falsity or recklessness, not mere negligence).
              The distinction between recklessness and negligence is critical: a person who honestly
              does not turn their mind to whether the statement is true may be negligent but is not
              fraudulent; a person who makes the statement with conscious indifference to its truth
              acts recklessly and commits fraud.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
              The Five Elements of Fraudulent Misrepresentation
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Ontario courts require the plaintiff to establish five elements on a balance of probabilities:
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
              1. A False Representation of Fact
            </h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              The misrepresentation must be a statement of fact, not a statement of opinion, intention,
              or future prediction. A representation that a company&apos;s revenues were $X is a statement
              of fact. A representation that revenues will reach $X next year is a prediction, not a
              statement of fact, unless the party making it knew it to be false.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Statements of opinion can constitute fraudulent misrepresentation where the representor
              does not hold the opinion expressed: if a vendor says &quot;I believe the building is in
              excellent condition&quot; knowing the building has serious defects, the statement of belief
              is fraudulent. The statement of belief is implicitly a statement of fact about the
              state of the speaker&apos;s mind.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Puffery — vague and exaggerated promotional statements about quality or value — is not
              a representation of fact and does not give rise to actionable misrepresentation. Courts
              distinguish between specific factual claims and general commercial hyperbole.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
              2. Knowledge of Falsity or Recklessness
            </h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              The representor must have known the statement was false, have made it without belief in
              its truth, or have been reckless as to its truth. As <em>Derry v Peek</em> makes clear,
              gross negligence or unreasonable belief is insufficient — there must be dishonesty.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Recklessness is established where the representor was subjectively indifferent to whether
              the statement was true or false. A person who states facts without checking whether they
              are accurate, in circumstances where they were aware they did not know, acts recklessly.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              In practice, the mental element is often proved by inference from the circumstantial
              evidence — the knowledge the defendant had, the steps they took (or failed to take)
              to verify the statement, and the implausibility of their claimed belief in its truth.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
              3. Intention to Induce the Plaintiff to Act
            </h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              The false representation must have been made with the intention of inducing the plaintiff
              to enter into the contract or take the action that caused the loss. If the representor
              did not intend the plaintiff to rely on the representation — for example, where a statement
              was made to a third party and inadvertently came to the plaintiff&apos;s attention —
              the intention element may not be met.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              In commercial transactions, the intention element is usually satisfied by the context:
              a vendor who makes representations in a disclosure document or in negotiations intends
              those representations to be relied upon by the purchaser.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
              4. Actual Inducement — The Plaintiff Was Induced to Act
            </h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              The plaintiff must actually have been induced by the misrepresentation — it must have
              contributed to the plaintiff&apos;s decision to enter into the contract or take the relevant
              action. The misrepresentation need not be the sole or dominant cause; it is sufficient
              if it was one of the factors that induced the plaintiff.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Where the plaintiff did not know about the representation, or knew it was false, there
              is no inducement. A buyer who conducts independent due diligence and discovers the true
              state of affairs before closing may have difficulty establishing inducement.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
              5. Resulting Loss or Damage
            </h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              The plaintiff must have suffered loss as a result of being induced by the misrepresentation.
              Loss is typically the difference between the price paid and the true value of what was
              received, plus any consequential losses flowing from the transaction entered into by
              reason of the fraud.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
              Remedies: Rescission
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Rescission is the primary contractual remedy for misrepresentation — it treats the contract
              as void ab initio and restores the parties to their pre-contract positions. Rescission
              is available for all categories of misrepresentation (fraudulent, negligent, and innocent),
              subject to bars on rescission.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              The bars to rescission include:
            </p>
            <ul className="list-disc pl-6 mb-4 text-slate-700 space-y-2">
              <li><strong>Affirmation</strong>: The innocent party affirms the contract with knowledge
              of the misrepresentation — either expressly or by conduct inconsistent with an intention
              to rescind.</li>
              <li><strong>Lapse of time</strong>: For non-fraudulent misrepresentation, delay in
              asserting the right to rescind can bar rescission in equity. Fraudulent misrepresentation
              is treated more leniently because the limitation period runs from discovery of the fraud.</li>
              <li><strong>Impossibility of restitutio in integrum</strong>: Rescission requires
              restoration of the parties to their original positions. Where the subject matter has
              been consumed, substantially altered, or passed to innocent third parties, complete
              restitution may be impossible.</li>
              <li><strong>Third party rights</strong>: Where an innocent third party has acquired
              rights in the subject matter of the contract, those rights cannot be displaced by
              rescission.</li>
            </ul>
            <p className="text-slate-700 leading-relaxed mb-4">
              Rescission is an all-or-nothing remedy — the plaintiff cannot rescind part of a contract
              and affirm the rest. Where the contract contains multiple components, the court must
              assess whether the entire transaction was infected by the misrepresentation.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
              Damages for Fraudulent Misrepresentation
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Fraud is a tort, and damages are measured in tort — not contract. The fundamental
              difference is that tort damages restore the plaintiff to the position they were in
              before the tort occurred (the status quo ante), not the position they would have
              been in if the representation had been true (the &quot;expectation&quot; measure of contract damages).
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              The key advantage of fraud damages over contract damages is that all losses caused by
              the fraud are recoverable — including losses that are not reasonably foreseeable at
              the time of the misrepresentation: <em>Doyle v Olby (Ironmongers) Ltd</em> [1969]
              2 QB 158 (adopted in Ontario). This is a significant departure from the remoteness
              principle that limits contract damages to foreseeable consequences.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              In a share purchase or asset acquisition context, fraud damages typically include:
            </p>
            <ul className="list-disc pl-6 mb-4 text-slate-700 space-y-2">
              <li>The difference between the price paid and the true value of what was acquired</li>
              <li>Consequential losses flowing from the transaction — losses of subsequent business
              opportunities, additional costs incurred in reliance on the representations, and
              losses from decisions made on the faith of the false information</li>
              <li>Wasted expenditures incurred in reliance on the representation</li>
            </ul>
            <p className="text-slate-700 leading-relaxed mb-4">
              A plaintiff who rescines the contract and claims damages is entitled to be placed in
              the position they were in before the fraud — recovering the purchase price paid, less
              any benefit received. A plaintiff who cannot rescind (because, for example, third party
              rights have intervened) may still claim damages in tort.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
              Fraudulent Concealment: Duty to Disclose
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              A party ordinarily has no duty to disclose information in commercial negotiations —
              the parties deal at arm&apos;s length and each is responsible for their own due diligence.
              However, fraudulent concealment can give rise to liability where:
            </p>
            <ul className="list-disc pl-6 mb-4 text-slate-700 space-y-2">
              <li>A partial disclosure was made that was misleading without the additional information</li>
              <li>A representation was true when made but became false before the contract was concluded,
              and the representor failed to correct it</li>
              <li>A fiduciary relationship or special relationship of trust exists between the parties</li>
              <li>A statutory duty of disclosure applies (for example, real estate agent disclosure
              obligations under the <em>Real Estate and Business Brokers Act</em>)</li>
            </ul>
            <p className="text-slate-700 leading-relaxed mb-4">
              A half-truth — a statement that is literally true but creates a false impression by
              omitting material context — can constitute fraudulent misrepresentation. The obligation
              to not deceive extends to creating impressions through selective disclosure.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
              Negligent Misrepresentation: Hedley Byrne and Queen v Cognos
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Negligent misrepresentation is distinct from fraudulent misrepresentation — it does not
              require knowing falsity or recklessness, but requires a duty of care arising from a special
              relationship between the parties. The leading Canadian authority is <em>Queen v Cognos Inc</em>
              [1993] 1 SCR 87, building on the House of Lords&apos; decision in <em>Hedley Byrne &amp; Co v
              Heller &amp; Partners</em> [1964] AC 465.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              The elements of negligent misrepresentation under <em>Queen v Cognos</em> are:
            </p>
            <ul className="list-disc pl-6 mb-4 text-slate-700 space-y-2">
              <li>There must be a duty of care based on a special relationship between the representor
              and the representee</li>
              <li>The representation must be untrue, inaccurate, or misleading</li>
              <li>The representor must have acted negligently in making the representation</li>
              <li>The representee must have relied on the negligent misrepresentation and the reliance
              must have been reasonable</li>
              <li>The reliance must have caused damage</li>
            </ul>
            <p className="text-slate-700 leading-relaxed mb-4">
              The key differences from fraudulent misrepresentation: negligent misrepresentation
              requires a special relationship imposing a duty of care; it does not require dishonesty;
              but damages are limited to foreseeable losses (unlike fraud where all caused losses
              are recoverable). A plaintiff with strong facts on the mental element will prefer to
              plead fraud; a plaintiff who cannot establish dishonesty but can establish a duty of
              care and negligence will plead negligent misrepresentation.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
              Misrepresentation in Real Estate Transactions
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Real estate transactions in Ontario generate a significant volume of misrepresentation
              claims. Vendors have a qualified duty not to make active misrepresentations about the
              property — they have no general duty to disclose latent defects, but cannot actively
              misrepresent the property&apos;s condition.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              The distinction between patent defects (visible on inspection, risk on purchaser) and
              latent defects (concealed, risk on vendor who knows) is critical. A vendor who knows
              of a latent defect and actively conceals it, or makes a positive representation
              inconsistent with its existence, commits fraudulent misrepresentation.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              OREA Agreement of Purchase and Sale representations — about the property&apos;s condition,
              existing contracts, zoning, environmental status, or rental income — are commonly
              litigated. Misrepresentations in the OREA APS can give rise to rescission and/or damages
              depending on when the misrepresentation is discovered (before or after closing) and
              whether merger in the deed bars rescission post-closing.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Post-closing real estate misrepresentation claims are complicated by the rule that
              contractual obligations in an APS that are not reflected in the transfer deed may merge
              into the deed on closing. Representation warranties in the APS must be carefully
              drafted to survive closing if the vendor intends them to persist as contractual
              representations after title passes.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
              Limitation Periods for Misrepresentation Claims
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Claims for fraudulent misrepresentation are subject to the general two-year limitation
              period under the <em>Limitations Act 2002</em> s.4, subject to discoverability under s.5.
              The limitation clock begins when the plaintiff knew or ought to have known that:
            </p>
            <ul className="list-disc pl-6 mb-4 text-slate-700 space-y-2">
              <li>The injury or loss occurred</li>
              <li>It was caused by the act or omission</li>
              <li>The act or omission was that of the defendant</li>
              <li>A proceeding would be an appropriate means to seek to remedy the injury</li>
            </ul>
            <p className="text-slate-700 leading-relaxed mb-4">
              Where the fraud was deliberately concealed, the discoverability principle postpones the
              limitation period until the plaintiff discovered or ought reasonably to have discovered
              the fraud. The <em>Limitations Act 2002</em> s.15 ultimate limitation period of 15 years
              applies subject to the exceptions in that section.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Negligent misrepresentation claims are similarly subject to the two-year discoverability
              limitation. Innocent misrepresentation giving rise only to rescission may be subject to
              shorter equitable limitation principles based on laches.
            </p>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mt-10">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                Atticus for Ontario Commercial Litigators
              </h3>
              <p className="text-slate-700 text-sm leading-relaxed mb-4">
                Atticus is built for Ontario civil litigation practice — AI document analysis to identify
                key representations in transaction documents, limitation period tracking for fraud and
                misrepresentation claims, LSO By-Law 9 compliant trust accounting, and full matter management
                from pleadings through trial.
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
                  href="/blog/ontario-contract-formation"
                  className="block text-amber-700 hover:text-amber-900 font-medium text-sm"
                >
                  Ontario Contract Formation: Offer, Acceptance, Consideration, and Vitiating Factors
                </Link>
                <Link
                  href="/blog/ontario-contract-dispute"
                  className="block text-amber-700 hover:text-amber-900 font-medium text-sm"
                >
                  Ontario Contract Disputes: Breach Categories, Damages, Mitigation, and Remedies
                </Link>
                <Link
                  href="/blog/ontario-real-estate-purchase-agreement"
                  className="block text-amber-700 hover:text-amber-900 font-medium text-sm"
                >
                  Ontario Real Estate Purchase Agreement: OREA APS, Conditions, Deposits, and Closing
                </Link>
                <Link
                  href="/blog/ontario-civil-discovery"
                  className="block text-amber-700 hover:text-amber-900 font-medium text-sm"
                >
                  Ontario Civil Discovery: Examinations for Discovery, Documentary Production, and Undertakings
                </Link>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
