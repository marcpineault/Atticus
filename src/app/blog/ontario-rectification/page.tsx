import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ontario Rectification: Correcting Mistakes in Written Contracts and Instruments",
  description:
    "Complete guide to Ontario rectification: correcting written documents to reflect the true agreement of the parties. Rectification of contracts and deeds, common intention test, unilateral mistake, rectification of wills, limitations, and procedure.",
  openGraph: {
    title: "Ontario Rectification: Correcting Mistakes in Written Contracts and Instruments",
    description:
      "Ontario rectification law: common intention test, unilateral mistake, rectification of wills, instruments, and deeds, defences, and procedure for Ontario courts.",
    url: "https://getatticus.ca/blog/ontario-rectification",
    siteName: "Atticus",
    type: "article",
  },
  alternates: {
    canonical: "https://getatticus.ca/blog/ontario-rectification",
  },
};

const schemaJson = `{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Ontario Rectification: Correcting Mistakes in Written Contracts and Instruments",
  "description": "Complete guide to Ontario rectification covering the common intention test, unilateral mistake rectification, rectification of deeds and instruments, wills variation, defences, and court procedure.",
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
  "mainEntityOfPage": "https://getatticus.ca/blog/ontario-rectification",
  "keywords": ["rectification Ontario", "rectification of contract Ontario", "rectification of deed Ontario", "common intention rectification", "unilateral mistake rectification", "equitable remedy Ontario", "Pitt v Holt", "rectification of will Ontario"]
}`;

const faqSchemaJson = `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is rectification in Ontario contract law?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Rectification is an equitable remedy that corrects a written document (contract, deed, or other instrument) to accurately reflect the true prior agreement of the parties. It does not rewrite the agreement — it fixes a mistake in the written expression of what the parties had already agreed. The remedy requires clear and convincing evidence of the prior agreement and the error in the written document."
      }
    },
    {
      "@type": "Question",
      "name": "What is required for rectification of a contract in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For common intention rectification, the party seeking rectification must prove: (1) a prior concluded agreement (or continuing common intention) on the point in question; (2) the prior agreement continued unchanged up to the time of execution; (3) the written instrument, by mistake, failed to conform to the prior agreement; and (4) the instrument does not represent the true intention of the parties. The standard of proof is clear, convincing, and cogent evidence — higher than the balance of probabilities in practice, though still civil standard."
      }
    },
    {
      "@type": "Question",
      "name": "Can a will be rectified in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Succession Law Reform Act does not expressly provide for rectification of wills, but Ontario courts have jurisdiction to rectify wills to correct clerical errors and errors in expression where the will fails to give effect to the testator's actual intention. The court requires clear and convincing evidence of what the testator intended and that the written instrument does not express that intention. This is distinct from construction (interpreting ambiguous words) — rectification changes the text; construction determines meaning."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between rectification and construction?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Construction (interpretation) determines the meaning of words actually used in a contract or instrument. Rectification changes the words used in the written instrument to correct a mistake in the expression of a prior agreement. Rectification requires prior agreement on the point in issue — you cannot use rectification to rewrite a bad bargain or introduce terms never agreed upon."
      }
    }
  ]
}`;

export default function OntarioRectification() {
  return (
    <>
      <Script id="rectification-schema" type="application/ld+json">
        {schemaJson}
      </Script>
      <Script id="rectification-faq-schema" type="application/ld+json">
        {faqSchemaJson}
      </Script>

      <div className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-amber-400 text-slate-900 text-sm font-semibold px-4 py-1 rounded-full mb-4">
              Contract Law / Equity
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Ontario Rectification: Correcting Mistakes in Written Contracts and Instruments
            </h1>
            <p className="text-slate-300 text-lg mb-4 max-w-3xl">
              Rectification corrects a written document to reflect the true prior agreement of the parties.
              Common intention test, unilateral mistake, rectification of deeds, wills, and conveyances,
              defences, and procedure in Ontario courts.
            </p>
            <div className="flex gap-4 text-sm text-slate-400">
              <span>December 2024</span>
              <span>•</span>
              <span>13 min read</span>
              <span>•</span>
              <span>Contract Law / Equity</span>
            </div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 py-12">

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-10">
            <h2 className="text-lg font-semibold text-slate-900 mb-2">Key Takeaways</h2>
            <ul className="space-y-1 text-slate-700 text-sm">
              <li>• Rectification corrects the written expression of an agreement — it does not rewrite the bargain</li>
              <li>• Common intention rectification requires prior concluded agreement on the disputed point, continuing to execution</li>
              <li>• Unilateral mistake rectification requires knowledge or sharp practice by the other party (A Roberts &amp; Co v Leicestershire CC)</li>
              <li>• Standard of proof is clear, convincing, and cogent evidence — parol evidence is admissible to prove prior intent</li>
              <li>• Defences include laches, third party bona fide purchaser for value, affirmation, and impossibility of precise rectification</li>
              <li>• Ontario courts have jurisdiction to rectify wills to correct clerical errors in expression</li>
              <li>• Rectification orders for registered instruments must be registered under the Land Titles Act to bind successors</li>
            </ul>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">What Is Rectification?</h2>
            <p className="text-slate-700 mb-4">
              Rectification is an equitable remedy that corrects a written document — a contract, deed,
              conveyance, mortgage, trust instrument, will, or other written agreement — to accurately
              reflect the parties&apos; actual prior intention. The court does not create a new agreement;
              it reforms the document to give effect to the agreement that was actually made but incorrectly
              expressed in writing.
            </p>
            <p className="text-slate-700 mb-4">
              The foundational principle, established in <em>Mackenzie v Coulson</em> (1869) LR 8 Eq 368
              and consistently applied in Ontario, is that courts of equity will not allow an instrument
              to be used as a means of fraud where it fails to express the true intention of the parties.
              Rectification does not change the agreement — it changes the document to match the agreement.
            </p>
            <p className="text-slate-700">
              Rectification is distinguished from:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2 mt-2 mb-4">
              <li>
                <strong>Construction / interpretation</strong> — determining the meaning of words used.
                Rectification changes the words; construction assigns meaning to the existing words.
              </li>
              <li>
                <strong>Rescission</strong> — cancels the contract entirely for mistake or misrepresentation.
                Rectification preserves the contract but corrects the written expression.
              </li>
              <li>
                <strong>Variation</strong> — altering the terms of a valid contract by new agreement.
                Rectification reflects what was originally agreed; variation changes the original agreement.
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Common Intention Rectification
            </h2>
            <p className="text-slate-700 mb-4">
              The principal ground for rectification is a shared mistake — both parties agreed on the
              relevant term, but the written instrument does not accurately reflect that agreement.
              The requirements, as stated in <em>Joscelyne v Nissen</em> [1970] 2 QB 86 (CA) and applied
              in Ontario in <em>Canada (Attorney General) v Fairmont Hotels Inc</em> 2016 SCC 56, are:
            </p>
            <ol className="list-decimal pl-6 text-slate-700 space-y-3 mb-4">
              <li>
                <strong>Prior concluded agreement or continuing common intention</strong> — the parties must
                have had an outwardly expressed common intention on the particular point at the time of
                contracting, continuing without change up to execution. The prior agreement need not itself
                be a binding contract — it may be a term in a heads of agreement, a negotiated draft, or
                an oral understanding on a specific point (<em>Joscelyne v Nissen</em>).
              </li>
              <li>
                <strong>Failure to record the agreed term</strong> — the written instrument does not
                correctly record the prior agreement on the point in question. The failure must be in the
                expression of the agreement, not in the agreement itself.
              </li>
              <li>
                <strong>No change in intention</strong> — the common intention continued up to the moment
                of execution. If the parties changed their minds before executing, the prior agreement is
                no longer the operative one.
              </li>
              <li>
                <strong>Clear, convincing, and cogent evidence</strong> — rectification requires more than
                the normal civil balance of probabilities in effect; the evidence must be clear and
                convincing because the remedy rewrites a formal document
                (<em>Fairmont Hotels</em> 2016 SCC 56 at para 39: &quot;convincing proof&quot;).
              </li>
            </ol>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-4">
              <h4 className="font-semibold text-slate-900 mb-2">Fairmont Hotels: Supreme Court of Canada 2016</h4>
              <p className="text-slate-700 text-sm">
                In <em>Canada (AG) v Fairmont Hotels Inc</em> 2016 SCC 56, the Supreme Court confirmed
                that rectification requires proof of a prior agreement on the specific term and that the
                written document does not give effect to that prior agreement. The SCC rejected a broader
                &quot;subjective intention&quot; test that had been applied in some lower courts — rectification
                is not available simply because the written document produces an unintended legal result
                (e.g., unexpected tax consequences). The parties must have expressly agreed on the point
                that the written document fails to reflect.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Unilateral Mistake Rectification
            </h2>
            <p className="text-slate-700 mb-4">
              Where only one party made a mistake in the written expression of the agreement, rectification
              is available only in limited circumstances. The leading English authority is <em>A Roberts
              &amp; Co Ltd v Leicestershire County Council</em> [1961] Ch 555, applied in Ontario:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
              <li>
                <strong>Knowledge of the mistake by the other party</strong> — the non-mistaken party knew
                of the mistake in the instrument and failed to draw it to the mistaken party&apos;s attention,
                amounting to unconscionable conduct or sharp practice. The non-mistaken party cannot benefit
                from the other&apos;s mistake in the written document.
              </li>
              <li>
                <strong>Sharp practice / fraud</strong> — deliberate exploitation of the other party&apos;s
                error; not mere oversight on both sides.
              </li>
            </ul>
            <p className="text-slate-700">
              Ontario courts have been cautious about expanding unilateral mistake rectification beyond the
              knowledge-plus-sharp-practice ground. The party resisting rectification cannot be required
              to accept a contract they never agreed to merely because the other party made a unilateral
              error.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Parol Evidence Rule and Rectification
            </h2>
            <p className="text-slate-700 mb-4">
              The parol evidence rule excludes extrinsic evidence to vary, add to, or contradict a
              written contract. However, rectification constitutes a well-established exception —
              the parol evidence rule does not prevent extrinsic evidence being adduced to show that
              a written document does not reflect the parties&apos; true prior agreement for purposes
              of rectification (<em>United Group Rail Services Ltd v Rail Corporation NSW</em> [2009]
              74 NSWLR 618; consistently applied in Ontario).
            </p>
            <p className="text-slate-700">
              Admissible evidence includes: prior drafts showing the intended term, pre-contract
              negotiations (letters, emails, term sheets), the parties&apos; course of dealing, oral
              evidence of negotiations, post-contractual conduct (with care — limited probative value),
              and evidence of the error itself (comparison between draft and executed version).
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Rectification of Deeds, Conveyances, and Registered Instruments
            </h2>
            <p className="text-slate-700 mb-4">
              Rectification of registered instruments (transfers, mortgages, charges, easements, restrictive
              covenants registered under the <em>Land Titles Act</em>) presents additional issues:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
              <li>
                <strong>Third party rights</strong> — rectification cannot be ordered where it would
                affect the rights of a bona fide purchaser for value without notice who acquired an
                interest in the property in reliance on the registered instrument. The Land Titles system&apos;s
                indefeasibility provisions protect purchasers.
              </li>
              <li>
                <strong>Registration of rectification order</strong> — a court order for rectification
                of a registered instrument must itself be registered against the relevant PIN under the
                Land Titles Act to be effective against the world. Failure to register leaves the original
                erroneous instrument on title.
              </li>
              <li>
                <strong>Planning Act compliance</strong> — rectification of a registered conveyance may
                require a Planning Act consent if the correction effectively creates a new lot or
                changes lot boundaries. Check with the local planning authority.
              </li>
              <li>
                <strong>Land Titles Assurance Fund</strong> — where rectification is required due to
                a mistake by the Land Registrar, the Fund may compensate parties unable to recover
                the land itself (<em>LTA</em> s.57).
              </li>
            </ul>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-4">
              <h4 className="font-semibold text-slate-900 mb-2">Rectification vs. Direction by Consent</h4>
              <p className="text-slate-700 text-sm">
                Where both parties agree the instrument contains an error, a consent rectification
                (executed by both parties and registered as a correction instrument) is faster and
                cheaper than a court application. If the dispute is genuinely about whether a mistake
                occurred — not its nature — a court application is required. Consider whether a correction
                instrument or an application under s.159 of the Land Titles Act (correction of obvious
                errors) is available before commencing litigation.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Rectification of Wills in Ontario
            </h2>
            <p className="text-slate-700 mb-4">
              The <em>Succession Law Reform Act</em> R.S.O. 1990, c. S.26 does not expressly provide
              for rectification of wills, unlike some other provinces. However, Ontario courts have
              inherent equitable jurisdiction to rectify a will where there is a clerical or
              drafting error causing the will to fail to express the testator&apos;s actual intention:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
              <li>
                <strong>Clerical error</strong> — typographical error, wrong name, transposed figures,
                omission of a word or clause by the draftsperson
              </li>
              <li>
                <strong>Failure to understand instructions</strong> — the drafting lawyer or notary
                misunderstood or failed to implement the testator&apos;s instructions
              </li>
              <li>
                <strong>Not available for second thoughts</strong> — rectification does not allow the
                testator&apos;s estate to argue the testator made a mistake in their intentions; it only
                corrects the written expression of a clear intention
              </li>
            </ul>
            <p className="text-slate-700">
              The application is made to the Superior Court of Justice (Estates Branch). Evidence of the
              testator&apos;s instructions to the drafting lawyer (including the lawyer&apos;s file and notes)
              is admissible, as is evidence of the surrounding circumstances. The standard of proof is
              the balance of probabilities, though clear and convincing evidence is required in practice.
              The application must be served on all persons interested under the will and on intestacy.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Defences to Rectification
            </h2>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm mb-4">
              <table className="w-full bg-white text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left px-5 py-3 font-semibold">Defence</th>
                    <th className="text-left px-5 py-3 font-semibold">Effect</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      defence: "Bona fide purchaser for value without notice",
                      effect: "Rectification will not be granted where it would affect a third party who acquired rights in the subject matter for value without notice of the error — particularly for registered land",
                    },
                    {
                      defence: "Laches and delay",
                      effect: "Equitable remedy subject to equitable bars; undue delay in bringing the application where the other party has changed position may bar relief even within the limitation period",
                    },
                    {
                      defence: "Affirmation / acquiescence",
                      effect: "Where the party seeking rectification has performed the contract as written with knowledge of the error, they may be taken to have affirmed the written instrument",
                    },
                    {
                      defence: "Impossibility of precise rectification",
                      effect: "If there is no single identifiable correction that would give effect to the prior agreement, or the error is so fundamental that rectification would amount to rewriting the agreement, the court may decline",
                    },
                    {
                      defence: "Absence of prior concluded agreement",
                      effect: "No common intention rectification where parties were still negotiating and there was no concluded prior agreement on the specific term — mere negotiation does not constitute the requisite common intention",
                    },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-5 py-3 font-medium text-slate-800">{row.defence}</td>
                      <td className="px-5 py-3 text-slate-600">{row.effect}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Limitation Periods for Rectification Claims in Ontario
            </h2>
            <p className="text-slate-700 mb-4">
              Rectification is an equitable remedy. Under the <em>Limitations Act</em> 2002, the two-year
              basic limitation period applies from the date the claim was discovered (s.4). The 15-year
              ultimate limitation period applies from the act or omission (s.15).
            </p>
            <p className="text-slate-700 mb-4">
              Discoverability is important: a party may not discover that an instrument contains an error
              immediately on execution. The two-year period runs from the date the claimant knew or ought
              to have known that the document did not reflect the prior agreement. In practice, the error
              may only become apparent when a transaction is contemplated or when a dispute arises about
              the instrument&apos;s operation.
            </p>
            <p className="text-slate-700">
              Equitable doctrines (laches, acquiescence) may bar relief even within the limitation period
              where unreasonable delay has prejudiced the other party.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Procedure for Rectification Applications in Ontario
            </h2>
            <p className="text-slate-700 mb-4">
              Rectification proceedings in Ontario are typically commenced by:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
              <li>
                <strong>Application (Rule 14.05)</strong> — where the facts are not in dispute or can be
                determined on affidavit evidence; appropriate where the error and prior agreement are
                clearly documented
              </li>
              <li>
                <strong>Action (Statement of Claim)</strong> — where the opposing party disputes the
                existence of the prior agreement or the nature of the error, requiring viva voce evidence
                at trial
              </li>
            </ul>
            <p className="text-slate-700 mb-4">
              The claim for rectification is typically pleaded alongside alternative claims including:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-1 mb-4">
              <li>Declaration as to the true meaning of the instrument (construction)</li>
              <li>Rescission for mutual mistake (if rectification is unavailable)</li>
              <li>Damages for negligent drafting against the solicitor (if applicable)</li>
            </ul>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-4">
              <h4 className="font-semibold text-slate-900 mb-2">Drafting the Pleading</h4>
              <ul className="text-slate-700 text-sm space-y-1">
                <li>• Plead the terms of the prior agreement with particularity</li>
                <li>• Plead how the written instrument differs from the prior agreement</li>
                <li>• Plead the circumstances giving rise to the error (clerical, negligence, misunderstanding)</li>
                <li>• For unilateral mistake: plead the knowledge and conduct of the non-mistaken party</li>
                <li>• Attach the prior agreement (or best evidence of it) and the executed instrument</li>
                <li>• Claim rectification in the prayer for relief and, in the alternative, rescission or damages</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                {
                  q: "Can I use rectification to fix a bad deal?",
                  a: "No. Rectification corrects the written expression of an agreement — it does not allow a party to escape a bad bargain. If you agreed to sell land at below-market value and the contract accurately records that agreement, rectification is not available. The remedy is only available where the written document fails to reflect what was actually agreed.",
                },
                {
                  q: "What evidence do I need for a rectification claim?",
                  a: "Clear and convincing evidence of: (a) the prior agreement on the specific term (prior drafts, emails, term sheets, oral evidence of negotiations); (b) how the executed instrument differs from that prior agreement; and (c) that the intention was unchanged between the prior agreement and execution. Parol evidence is admissible for rectification purposes notwithstanding the parol evidence rule.",
                },
                {
                  q: "Is rectification available for unilateral mistakes?",
                  a: "Only in limited circumstances — where the other party knew of the mistake and failed to draw it to the claimant's attention, or where the other party engaged in sharp practice to exploit the mistake. Mere unilateral error, without knowledge on the other side, does not justify rectifying a binding instrument.",
                },
                {
                  q: "Can rectification be used to correct an error in a registered transfer of land?",
                  a: "Yes, but with important limitations. Rectification will not be granted where it would affect a bona fide purchaser for value who acquired the property in reliance on the registered instrument without notice of the error. Any rectification order must be registered on title under the Land Titles Act to bind successors. Consider whether a Land Titles Act s.159 correction is available before commencing a court application.",
                },
              ].map((faq, i) => (
                <div key={i} className="border border-slate-200 rounded-xl p-6">
                  <h3 className="font-semibold text-slate-900 mb-2">{faq.q}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-amber-50 border border-amber-200 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              Manage Your Litigation and Commercial Matters with Atticus
            </h2>
            <p className="text-slate-600 mb-6 max-w-xl mx-auto">
              Atticus is the Ontario practice management platform built for litigation and commercial
              lawyers — LSO-compliant trust accounting, HST billing, AI document analysis, limitation
              period tracking, and Canadian legal AI. $149 CAD per lawyer per month.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/sign-up"
                className="bg-slate-900 text-white font-semibold px-8 py-3 rounded-lg hover:bg-slate-700 transition-colors"
              >
                Start Free Trial
              </Link>
              <Link
                href="/ontario-civil-litigation-lawyer"
                className="border border-slate-900 text-slate-900 font-semibold px-8 py-3 rounded-lg hover:bg-slate-100 transition-colors"
              >
                Civil Litigation Software
              </Link>
            </div>
          </section>

          <section className="mt-12 pt-8 border-t border-slate-100">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Related Articles</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { href: "/blog/ontario-specific-performance", label: "Ontario Specific Performance" },
                { href: "/blog/ontario-fraudulent-misrepresentation", label: "Ontario Fraudulent Misrepresentation" },
                { href: "/blog/ontario-mareva-injunction", label: "Ontario Mareva Injunctions" },
                { href: "/blog/ontario-easements-restrictive-covenants", label: "Ontario Easements and Restrictive Covenants" },
                { href: "/ontario-civil-litigation-lawyer", label: "Ontario Civil Litigation Lawyer Software" },
                { href: "/clio-alternative", label: "Clio Alternative for Ontario" },
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
        </article>
      </div>
    </>
  );
}
