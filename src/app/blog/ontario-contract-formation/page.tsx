import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ontario Contract Formation Guide 2024: Offer, Acceptance, Consideration, and Enforceability",
  description:
    "Ontario contract formation guide: offer and acceptance (communication, revocation, postal rule), consideration (adequacy vs sufficiency, past consideration, promissory estoppel), capacity, certainty of terms, intention to create legal relations, and defences including misrepresentation, mistake, duress, and undue influence.",
  openGraph: {
    title: "Ontario Contract Formation Guide 2024: Offer, Acceptance, Consideration, Enforceability",
    description:
      "Complete guide to contract formation in Ontario — offer and acceptance rules, consideration (adequacy vs sufficiency), promissory estoppel (Combe v Combe, John Burrows Ltd), capacity, certainty of terms, misrepresentation, common mistake, duress, and undue influence.",
    url: "https://getatticus.ca/blog/ontario-contract-formation",
    siteName: "Atticus",
    type: "article",
  },
  alternates: { canonical: "https://getatticus.ca/blog/ontario-contract-formation" },
};

const schemaJson = `{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Ontario Contract Formation Guide 2024: Offer, Acceptance, Consideration, and Enforceability",
  "description": "Ontario contract formation: offer and acceptance, consideration, promissory estoppel, capacity, certainty of terms, misrepresentation, mistake, duress, and undue influence.",
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
  "url": "https://getatticus.ca/blog/ontario-contract-formation"
}`;

const faqSchemaJson = `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the postal acceptance rule in Ontario contract law?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The postal acceptance rule, established in Adams v Lindsell (1818) 1 B & Ald 681 and applied in Ontario, provides that a contract is formed at the time and place of posting the acceptance letter, not when the offeror receives it. The rule applies when: the parties have communicated by post, or the offeror has expressly or impliedly authorized acceptance by post. The rule does not apply to instantaneous communications (telephone, fax, email, or electronic contracting): in those cases, acceptance is effective when and where it is received by the offeror. Parties can displace the postal rule by clear contract language specifying that acceptance is only effective upon receipt."
      }
    },
    {
      "@type": "Question",
      "name": "Is past consideration sufficient to support a contract in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Past consideration — an act or promise already performed before the promise sought to be enforced was made — is generally not valid consideration under Ontario common law. The rule derives from Roscorla v Thomas (1842) 3 QB 234: a promise made after the consideration has already been given cannot be supported by that past consideration. However, the courts have recognized exceptions where: (1) the past act was done at the promisor's request; (2) both parties understood that the act would be paid for; and (3) a payment, if promised, would be legally enforceable (Pao On v Lau Yiu Long [1980] AC 614). The past consideration rule may be avoided by framing the contract as a promissory note or deed under seal, which does not require consideration under Ontario common law."
      }
    },
    {
      "@type": "Question",
      "name": "What is promissory estoppel and how does it operate in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Promissory estoppel in Ontario operates as a shield, not a sword — it can be used as a defence to prevent a party from resiling from a clear and unequivocal promise that induced the other party to rely on it to their detriment, but it cannot found an independent cause of action in the absence of consideration. The doctrine was articulated by Denning J in Central London Property Trust v High Trees House [1947] KB 130 and confirmed by the Ontario courts. The requirements are: (1) a clear and unequivocal representation by one party that they will not enforce their strict legal rights; (2) reliance on that representation by the other party; (3) it would be inequitable for the promisor to resile from the representation. The doctrine suspends (rather than extinguishes) the legal right, and the promisor may resile upon giving reasonable notice."
      }
    }
  ]
}`;

export default function OntarioContractFormationPage() {
  return (
    <>
      <Script id="ontario-contract-formation-schema" type="application/ld+json">
        {schemaJson}
      </Script>
      <Script id="ontario-contract-formation-faq-schema" type="application/ld+json">
        {faqSchemaJson}
      </Script>

      <div className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-amber-400 text-slate-900 text-sm font-semibold px-3 py-1 rounded-full">
                Contract Law
              </span>
              <span className="text-slate-400 text-sm">December 2024 &middot; 13 min read</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Ontario Contract Formation Guide 2024: Offer, Acceptance, Consideration, and Enforceability
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl">
              Offer and acceptance (communication, revocation, counter-offer, postal rule for mail,
              instantaneous communications), consideration (adequacy vs sufficiency, past consideration,
              promissory estoppel), capacity, certainty of terms, and defences (misrepresentation,
              mistake, duress, undue influence).
            </p>
          </div>
        </section>

        <article className="py-16 px-6">
          <div className="max-w-3xl mx-auto prose prose-slate prose-lg">

            <h2>Elements of a Valid Contract</h2>
            <p>
              For a contract to be enforceable in Ontario, the following elements must be
              present: (1) offer; (2) acceptance; (3) consideration; (4) capacity; (5) certainty
              of terms; and (6) intention to create legal relations. The absence of any of these
              elements means no contract has been formed.
            </p>

            <h2>Offer</h2>
            <p>
              An offer is a clear and definite proposal made by one party (the offeror) to
              another (the offeree), containing all essential terms, communicated with the
              intention that it become binding upon acceptance.
            </p>

            <h3>Invitation to Treat vs Offer</h3>
            <p>
              An invitation to treat is not an offer — it is an invitation to make an offer.
              An advertisement, a price list, or a goods display in a store window is generally
              an invitation to treat, not an offer: <em>Pharmaceutical Society of Great Britain
              v Boots Cash Chemists</em>, [1953] 1 QB 401. The customer&apos;s act of bringing goods
              to the counter constitutes an offer; the retailer may accept or refuse.
            </p>

            <h3>Communication of Offer</h3>
            <p>
              An offer must be communicated to the offeree before it can be accepted.
              An offeree who is unaware of an offer cannot accept it — even if they act in
              a way that would constitute acceptance if they had known of the offer:
              <em>R. v. Clarke</em> (1927) 40 CLR 227 (High Court of Australia, widely
              followed in Canada).
            </p>

            <h3>Revocation</h3>
            <p>
              An offer may be revoked at any time before acceptance, even if the offeror
              promised to hold it open. The revocation must be communicated to the offeree.
              Communication through a reliable third party is sufficient: <em>Dickinson v
              Dodds</em> (1876) 2 Ch D 463. An option contract supported by consideration
              prevents revocation during the option period.
            </p>

            <h3>Lapse and Counter-Offer</h3>
            <p>
              An offer lapses: at the end of a stated time; after a reasonable time if no
              time is stated; upon the death of the offeror (in most circumstances); or upon
              rejection by the offeree. A counter-offer operates as a rejection of the original
              offer and a new offer: <em>Hyde v Wrench</em> (1840) 3 Beav 334.
            </p>

            <h2>Acceptance</h2>
            <p>
              Acceptance is an unconditional agreement to all the terms of the offer, communicated
              to the offeror. Acceptance must mirror the offer exactly — any variation constitutes
              a counter-offer (the &quot;mirror image rule&quot;).
            </p>

            <h3>Communication of Acceptance</h3>
            <p>
              The general rule is that acceptance is effective when and where it is received by
              the offeror. For instantaneous communications — telephone, fax, and email — this
              means acceptance is effective when the offeror receives it, not when the acceptor
              sends it.
            </p>

            <h3>The Postal Acceptance Rule</h3>
            <p>
              Where the parties have communicated by post, or the offeror has expressly or
              impliedly authorized acceptance by post, acceptance is effective at the time
              and place of posting, even before the offeror receives the letter:{" "}
              <em>Adams v Lindsell</em> (1818) 1 B & Ald 681. The offeror cannot revoke after
              a valid postal acceptance has been posted.
            </p>
            <p>
              Ontario courts have confirmed that the postal rule does not apply to email and
              other electronic communications. The <em>Electronic Commerce Act, 2000</em>, S.O.
              2000, c. 17, s.22 provides that an electronic document is received when it enters
              the information system designated by the addressee or, if no system is designated,
              when the addressee becomes aware of the document.
            </p>

            <h2>Consideration</h2>
            <p>
              Consideration is the price for which the promise is bought — the benefit to the
              promisor or the detriment to the promisee:{" "}
              <em>Dunlop Pneumatic Tyre Co. v Selfridge &amp; Co.</em>, [1915] AC 847. The common
              law requires consideration to support a promise in order to make it enforceable
              (subject to the formal exception of a deed under seal).
            </p>

            <h3>Adequacy vs Sufficiency</h3>
            <p>
              The courts will not inquire into the adequacy of consideration — &quot;a peppercorn&quot;
              is valid consideration if the parties have agreed that it should be so. However,
              consideration must be sufficient — it must be real, certain, and have some value
              in the eyes of the law. Consideration may be: an act; a forbearance; or a promise
              to do or refrain from doing something.
            </p>

            <h3>Past Consideration</h3>
            <p>
              Past consideration — an act already performed before the promise to be enforced
              was made — is generally not valid consideration: <em>Roscorla v Thomas</em> (1842)
              3 QB 234. However, courts recognize exceptions where the past act was done at
              the promisor&apos;s request and both parties understood it would be compensated:
              <em>Pao On v Lau Yiu Long</em>, [1980] AC 614.
            </p>

            <h3>Pre-Existing Duty Rule</h3>
            <p>
              A promise to perform an existing legal obligation is not good consideration for
              a new promise. However, the Supreme Court of Canada in <em>Greater Fredericton
              Airport Authority Inc. v NAV Canada</em>, 2008 NBCA 28 (applied across Canada)
              recognized that where a party promises additional compensation to induce a party
              to continue with performance under an existing contract without any duress or
              unfair dealing, the courts may enforce the promise if there is practical benefit
              to the promisor.
            </p>

            <h3>Promissory Estoppel</h3>
            <p>
              Promissory estoppel operates to prevent a party from resiling from a clear and
              unequivocal promise not to enforce strict legal rights where the other party
              has relied on that promise. The doctrine was articulated in <em>Central London
              Property Trust Ltd v High Trees House Ltd</em>, [1947] KB 130 (Denning J) and
              has been applied in Ontario.
            </p>
            <p>
              The requirements are: (1) a clear and unequivocal representation that the
              promisor will not enforce their strict legal rights; (2) reliance on that
              representation by the promisee; and (3) it would be inequitable for the promisor
              to resile. Promissory estoppel generally suspends rather than extinguishes the
              legal right, and the promisor may resile upon giving reasonable notice.
            </p>
            <p>
              In Ontario, promissory estoppel operates as a shield, not a sword — it may be
              used as a defence but not as an independent cause of action in the absence of
              pre-existing legal relations: <em>John Burrows Ltd v Subsurface Surveys Ltd</em>,
              [1968] SCR 607.
            </p>

            <h2>Capacity to Contract</h2>
            <p>
              Parties to a contract must have capacity. The principal categories of persons
              with limited capacity are:
            </p>
            <ul>
              <li>
                <strong>Minors:</strong> In Ontario, persons under 18 years of age have
                limited capacity. A minor&apos;s contract for necessaries (food, clothing, shelter,
                and other goods and services appropriate to their station in life) is enforceable.
                Other contracts are voidable at the minor&apos;s option: the minor may ratify the
                contract upon reaching majority.
              </li>
              <li>
                <strong>Mental incapacity:</strong> A contract entered into by a person who
                lacked capacity due to mental illness or impairment at the time of contracting
                is voidable (not void) if the other party knew or should have known of the
                incapacity.
              </li>
              <li>
                <strong>Corporations:</strong> A corporation may only contract within its
                capacity as defined by its constating documents and the{" "}
                <em>Business Corporations Act</em> or <em>Canada Business Corporations Act</em>.
                Ultra vires contracts may be unenforceable.
              </li>
            </ul>

            <h2>Certainty of Terms</h2>
            <p>
              A contract must be certain and complete to be enforceable. Where essential terms
              are missing or too vague to be given effect, the court may decline to enforce
              the agreement. However, courts prefer to give effect to commercial agreements
              where possible and will use implied terms, trade usage, and prior dealings to
              fill gaps rather than strike down an otherwise binding agreement.
            </p>
            <p>
              An &quot;agreement to agree&quot; — where parties agree to negotiate essential terms in
              the future — is generally unenforceable as it lacks certainty. However, an
              &quot;agreement to negotiate in good faith&quot; may be enforceable in limited commercial
              contexts: <em>Empress Towers Ltd v Bank of Nova Scotia</em>, 1991 BCCA.
            </p>

            <h2>Vitiating Factors</h2>

            <h3>Misrepresentation</h3>
            <p>
              A misrepresentation is a false statement of existing fact that induces the other
              party to enter the contract. Where a misrepresentation is fraudulent, the innocent
              party may rescind the contract and claim damages in tort. Where the misrepresentation
              is negligent or innocent, rescission is available but damages depend on whether
              the representor owed a duty of care or the contract contains a warranty.
            </p>
            <p>
              The leading Ontario authority on negligent misrepresentation is{" "}
              <em>Queen v Cognos Inc.</em>, [1993] 1 SCR 87, which applied the Hedley Byrne
              principle to pre-contractual representations in an employment context.
            </p>

            <h3>Mistake</h3>
            <p>
              Common mistake — where both parties contract under a shared mistaken assumption —
              may render a contract void at common law (where the mistake goes to the root of
              the subject matter) or voidable in equity. The common law test from{" "}
              <em>Bell v Lever Brothers Ltd</em>, [1932] AC 161 sets a high threshold: the
              mistake must render performance fundamentally different from what the parties
              believed it to be.
            </p>

            <h3>Duress and Undue Influence</h3>
            <p>
              A contract is voidable for duress where it was induced by an illegitimate threat
              — including economic duress where a party exploits another&apos;s vulnerability to
              extract contractual modifications. Undue influence arises where one party exerts
              such pressure or dominance over the other that the latter&apos;s will is overborne.
              Both doctrines allow rescission of the contract.
            </p>

            <h2>Practice Points for Ontario Commercial Lawyers</h2>
            <ul>
              <li>
                Advise clients that an agreement to agree on essential terms is unenforceable —
                all material terms must be agreed before a binding contract is formed.
              </li>
              <li>
                Where using email to communicate offers and acceptances, confirm whether the
                Electronic Commerce Act requirements have been met and specify in the offer
                when and how acceptance becomes effective.
              </li>
              <li>
                For contracts that modify existing obligations (e.g., post-formation price
                increases), ensure the modification is supported by fresh consideration or is
                documented as a deed to avoid the pre-existing duty problem.
              </li>
              <li>
                Require independent legal advice certificates for guarantees and contracts where
                undue influence may be an issue (e.g., intra-family transactions, guarantees
                by non-business-connected parties).
              </li>
              <li>
                Where pre-contractual representations have been made, include an entire agreement
                clause and a representations clause confirming the representee has not relied on
                any representations outside the written contract.
              </li>
            </ul>

          </div>
        </article>

        <section className="py-12 px-6 bg-amber-50 border-t border-amber-100">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Manage Your Commercial Practice with Atticus
            </h2>
            <p className="text-slate-600 mb-6">
              Track contract limitation periods, manage commercial matters, and run
              LSO-compliant trust accounting — all in one Ontario platform.
            </p>
            <Link
              href="/sign-up"
              className="inline-block bg-slate-900 text-white font-semibold px-8 py-4 rounded-lg hover:bg-slate-700 transition-colors"
            >
              Start Free Trial
            </Link>
          </div>
        </section>

        <section className="py-12 px-6 border-t border-slate-100">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-lg font-semibold text-slate-900 mb-6">Related Articles</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { href: "/blog/ontario-corporate-law", label: "Ontario Corporate Law" },
                { href: "/blog/ontario-personal-property-security", label: "Ontario PPSA Guide" },
                { href: "/blog/ontario-limitation-periods", label: "Ontario Limitation Periods" },
                { href: "/ontario-corporate-lawyer", label: "Ontario Corporate Lawyer Software" },
                { href: "/ai-for-lawyers", label: "AI for Ontario Lawyers" },
                { href: "/trust-accounting-ontario", label: "Ontario Trust Accounting" },
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
