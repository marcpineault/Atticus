import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ontario Contract Law — Formation, Terms, Breach, and Remedies | Atticus",
  description:
    "A practical guide for Ontario lawyers: contract formation, terms (conditions vs warranties vs innominate), exemption clauses, breach, frustration, and remedies under Ontario contract law.",
  openGraph: {
    title: "Ontario Contract Law — Formation, Terms, Breach, and Remedies",
    description:
      "Ontario contract law guide: offer and acceptance, consideration, terms, exemption clauses, breach, frustration, damages, and specific performance.",
    type: "article",
    url: "https://getatticus.ca/blog/ontario-contract-law",
  },
  alternates: { canonical: "https://getatticus.ca/blog/ontario-contract-law" },
};

export default function OntarioContractLawPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Ontario Contract Law — Formation, Terms, Breach, and Remedies",
    description:
      "Practical guide to Ontario contract law: contract formation, offer and acceptance, consideration, terms, exemption clauses, breach, frustration, and remedies.",
    url: "https://getatticus.ca/blog/ontario-contract-law",
    author: { "@type": "Organization", name: "Atticus" },
    publisher: { "@type": "Organization", name: "Atticus", url: "https://getatticus.ca" },
    datePublished: "2026-03-19",
    keywords: [
      "Ontario contract law",
      "contract formation Ontario",
      "breach of contract Ontario",
      "frustration of contract Ontario",
      "contract remedies Ontario",
      "exemption clauses Ontario",
      "specific performance Ontario",
    ],
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="max-w-3xl mx-auto px-6 py-16">
        <div className="mb-8">
          <div className="inline-block bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full mb-4">
            Contract Law
          </div>
          <h1 className="text-4xl font-bold leading-tight mb-4">
            Ontario Contract Law — Formation, Terms, Breach, and Remedies
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            A practical guide to Ontario contract law: the elements of contract formation, classification of terms,
            exemption and exclusion clauses, breach, frustration, and the full range of remedies available in Ontario courts.
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>March 2026</span>
            <span>&middot;</span>
            <span>16 min read</span>
            <span>&middot;</span>
            <span>Atticus Legal Research</span>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">

          <h2>Contract Formation — Offer and Acceptance</h2>
          <p>
            A binding contract requires: offer, acceptance, consideration, certainty of terms, intention to
            create legal relations, and capacity. Each element must be present; the absence of any one
            prevents a binding contract from arising.
          </p>
          <h3>Offer</h3>
          <p>
            An offer is a definite promise to be bound on specified terms (<em>Carlill v Carbolic Smoke Ball Co</em>
            [1893] 1 QB 256). An invitation to treat — a price list, advertisement, or display of goods — is
            not an offer but an invitation to make offers. The offeror may revoke the offer at any time before
            acceptance, provided revocation is communicated to the offeree (<em>Byrne v Van Tienhoven</em>
            (1880) 5 CPD 344). An option supported by consideration is irrevocable for the option period.
          </p>
          <h3>Acceptance</h3>
          <p>
            Acceptance must be unconditional and correspond exactly to the offer — any variation constitutes
            a counter-offer which destroys the original offer (<em>Hyde v Wrench</em> (1840) 49 ER 132).
            Acceptance is effective when communicated to the offeror. The postal acceptance rule — acceptance
            effective upon posting — applies when post is the contemplated means of communication
            (<em>Household Fire Insurance v Grant</em> (1879) 4 Ex D 216); email and electronic acceptance
            typically follow the instantaneous communication rule (receipt of acceptance).
          </p>

          <h2>Consideration</h2>
          <p>
            Consideration is something of value exchanged between the parties. It need not be adequate
            (adequate consideration is not required — only sufficient) but it must move from the promisee
            (<em>Dunlop v Selfridge</em> [1915] AC 847). Past consideration is not good consideration
            (<em>Re McArdle</em> [1951] Ch 669). A promise to perform an existing duty is not consideration
            unless the promisee goes beyond the existing obligation (<em>Gilbert Steel v University
            Construction</em> (1976) 12 OR (2d) 19 ONCA — established under Ontario law).
          </p>
          <h3>Promissory Estoppel</h3>
          <p>
            Where there is no consideration for a variation, promissory estoppel may prevent the promisor
            from resiling from a promise where the promisee has relied on it to their detriment
            (<em>Central London Property Trust v High Trees House</em> [1947] KB 130). In Ontario, promissory
            estoppel is a shield — a defence to an action — not a cause of action: it suspends rather than
            extinguishes the promisor&apos;s rights (<em>John Burrows Ltd v Subsurface Surveys</em>
            [1968] SCR 607). The <em>Contract and Commercial Law Act</em> reform debate aside, Ontario courts
            have not adopted the Australian &quot;sword&quot; approach from <em>Walton Stores v Maher</em>
            (1988) 164 CLR 387.
          </p>

          <h2>Intention to Create Legal Relations</h2>
          <p>
            Commercial agreements are presumed to be intended to be legally binding. Social and domestic
            arrangements are presumed not to be legally binding (<em>Balfour v Balfour</em> [1919] 2 KB 571).
            Each presumption is rebuttable. Comfort letters, letters of intent, and Memoranda of Understanding
            in commercial contexts are scrutinized carefully — language such as &quot;subject to contract&quot;
            or &quot;this is not legally binding&quot; generally negates contractual intent (<em>Bawitko
            Investments v Kernels Popcorn</em> (1991) 79 DLR (4th) 97 ONCA).
          </p>

          <h2>Terms — Classification and Interpretation</h2>
          <h3>Conditions, Warranties, and Innominate Terms</h3>
          <p>
            Contractual terms are classified by their importance:
          </p>
          <ul>
            <li>
              <strong>Condition</strong> — a term so fundamental that breach entitles the innocent party to
              terminate the contract and sue for damages (<em>Poussard v Spiers</em> (1876) 1 QBD 410)
            </li>
            <li>
              <strong>Warranty</strong> — a less important term; breach gives rise only to damages, not a
              right to terminate (<em>Bettini v Gye</em> (1876) 1 QBD 183)
            </li>
            <li>
              <strong>Innominate (intermediate) term</strong> — a term whose classification depends on the
              consequences of breach; if breach deprives the innocent party of substantially the whole
              benefit of the contract, it has the effect of a condition (<em>Hong Kong Fir Shipping v
              Kawasaki</em> [1962] 2 QB 26). Ontario courts have adopted the innominate term analysis.
            </li>
          </ul>
          <h3>Implied Terms</h3>
          <p>
            Terms may be implied: (a) in fact — to give business efficacy to the contract or as an obvious
            inference from the contract (<em>BP Refinery v Shire of Hastings</em> (1977) 180 CLR 266
            five-part test applied in Ontario); (b) in law — by statute (e.g., <em>Sale of Goods Act</em>
            RSO 1990 c S.1 implies conditions as to merchantable quality and fitness for purpose into
            contracts for the sale of goods by description); (c) by custom or usage of trade.
          </p>
          <h3>Exemption and Exclusion Clauses</h3>
          <p>
            Exemption clauses are strictly construed against the party seeking to rely on them (contra
            proferentem rule). Three conditions must be met for an exemption clause to be effective:
          </p>
          <ul>
            <li>
              <strong>Incorporation</strong> — the clause must be part of the contract at the time of
              contracting; unsigned documents require reasonable notice (<em>Parker v South Eastern Railway</em>
              (1877) 2 CPD 416; <em>Tilden Rent-A-Car v Clendenning</em> (1978) 18 OR (2d) 601 ONCA —
              unsigned documents with unusual terms require greater notice)
            </li>
            <li>
              <strong>Interpretation</strong> — the clause must clearly cover the breach in question; courts
              construe exemptions narrowly against the party relying on them
            </li>
            <li>
              <strong>Unconscionability and public policy</strong> — courts may refuse to enforce exemption
              clauses that are unconscionable or contrary to public policy
            </li>
          </ul>
          <p>
            The Supreme Court in <em>Tercon Contractors v British Columbia</em> 2010 SCC 4 confirmed the
            analytical framework: first interpret the clause; second, if it applies, ask if it was unconscionable
            at formation; third, ask if there is overriding public policy reason to refuse enforcement.
          </p>

          <h2>Breach of Contract</h2>
          <p>
            A breach occurs when a party fails to perform a contractual obligation or repudiates the contract
            before performance is due (anticipatory breach). Anticipatory breach entitles the innocent party
            to treat the contract as discharged and sue immediately for damages, or to wait until performance
            is due and risk the contract being frustrated in the interim (<em>Hochster v De la Tour</em>
            (1853) 118 ER 922).
          </p>
          <p>
            Whether a breach is repudiatory (going to the root of the contract and entitling termination)
            or merely a breach giving rise to damages depends on the classification of the term breached
            or the seriousness of the consequences of breach under the innominate term analysis.
            An innocent party who affirms the contract after a repudiatory breach loses the right to terminate.
          </p>

          <h2>Frustration</h2>
          <p>
            Frustration at common law discharges a contract where a supervening event, not caused by either
            party&apos;s default, makes performance radically different from what the parties contemplated at
            the time of contracting (<em>Davis Contractors v Fareham UDC</em> [1956] AC 696). The doctrine
            is narrow: increased difficulty or economic hardship does not frustrate a contract. Frustrating
            events include supervening illegality, destruction of the subject matter, and occurrence of an
            event that was the basis of the contract.
          </p>
          <p>
            In Ontario, the <em>Frustrated Contracts Act</em> RSO 1990 c F.34 governs the consequences of
            frustration: money paid before frustration is recoverable; money payable before frustration
            ceases to be payable; expenses incurred may be recovered up to the amount of the prepayment
            or payable sum; if one party has obtained a valuable benefit before frustration, a just sum
            is payable for it. The Act does not apply to contracts for sale of specific goods under the
            Sale of Goods Act or to insurance contracts.
          </p>

          <h2>Remedies for Breach of Contract</h2>
          <h3>Damages</h3>
          <p>
            The general principle is that damages place the innocent party in the position they would have
            been in had the contract been performed — expectation loss or &quot;benefit of the bargain&quot;
            (<em>Robinson v Harman</em> (1848) 154 ER 363). Reliance damages — expenditures made in
            performance of the contract — are also recoverable as an alternative.
          </p>
          <p>
            Two limitations apply to recovery of damages:
          </p>
          <ul>
            <li>
              <strong>Remoteness</strong> — damages must be the natural consequence of the breach in the
              ordinary course of things, or within the reasonable contemplation of the parties at the time
              of contracting as a serious possibility (<em>Hadley v Baxendale</em> (1854) 156 ER 145;
              two-limb test confirmed in <em>Victoria Laundry v Newman Industries</em> [1949] 2 KB 528)
            </li>
            <li>
              <strong>Mitigation</strong> — the innocent party must take reasonable steps to mitigate loss;
              failure to mitigate reduces the recoverable damages
            </li>
          </ul>
          <h3>Specific Performance</h3>
          <p>
            Specific performance is an equitable remedy ordering the defendant to perform the contract.
            It is available where damages are an inadequate remedy — typically for contracts involving
            unique property (real estate, unique chattels, shares in a private company).
            <em>Semelhago v Paramadevan</em> [1996] 2 SCR 415 confirmed that specific performance remains
            available for real estate contracts in Ontario where the property is truly unique to the purchaser.
            Specific performance will not be ordered for contracts requiring personal services or where
            constant supervision would be required.
          </p>
          <h3>Injunction</h3>
          <p>
            A prohibitory injunction restrains breach of a negative covenant. In employment and commercial
            contexts, restrictive covenants (non-competition, non-solicitation) are enforced by injunction
            if reasonably limited in scope, geographic area, and duration. The interlocutory injunction
            test from <em>RJR-MacDonald</em> [1994] 1 SCR 311 applies.
          </p>
          <h3>Unjust Enrichment and Restitution</h3>
          <p>
            Where a contract is void, frustrated, or not yet concluded, a party who has conferred a benefit
            on the other without juristic reason may claim in unjust enrichment (<em>Garland v Consumers
            Gas</em> 2004 SCC 25). The three-part test: (1) defendant enriched; (2) plaintiff correspondingly
            deprived; (3) no juristic reason for the enrichment. The remedy is restitution — restoration
            of the benefit conferred — not expectation damages.
          </p>

          <h2>Consumer Contracts and the Consumer Protection Act</h2>
          <p>
            The <em>Consumer Protection Act</em> SO 2002 c 30 Sch A (CPA) provides additional protections
            for consumers beyond common law. Key protections include:
          </p>
          <ul>
            <li>
              Unfair practices (s.17): false, misleading, or unconscionable representations give rise to
              a right of rescission and damages regardless of intent
            </li>
            <li>
              Internet agreements (s.38): cooling-off period 7 days; consumer may cancel if required
              information not provided
            </li>
            <li>
              Future performance agreements (s.22): must contain prescribed information; 1-year cooling-off
              if information absent
            </li>
            <li>
              Limitation of liability clauses (s.9): any term that waives or limits rights under the CPA
              is void; any term that waives rights that arise from a breach of the CPA is void
            </li>
          </ul>
        </div>
      </article>
    </div>
  );
}
