import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ontario Agency Law Guide 2024: Authority, Duties of Agent, and Undisclosed Principals",
  description:
    "Ontario agency law guide: creation of agency (express, implied, apparent authority, ratification), actual vs apparent authority, duties of agent to principal (fiduciary duty, duty to account, conflict of interest), undisclosed principals, agent liability to third parties, and termination of agency.",
  openGraph: {
    title: "Ontario Agency Law Guide 2024: Authority, Agent Duties, and Undisclosed Principals",
    description:
      "Complete guide to Ontario agency law — actual authority (express and implied), apparent authority (holding out and reliance), ratification, fiduciary duties of agent, undisclosed principal doctrine, agent personal liability, and termination of agency.",
    url: "https://getatticus.ca/blog/ontario-agency-law",
    siteName: "Atticus",
    type: "article",
  },
  alternates: { canonical: "https://getatticus.ca/blog/ontario-agency-law" },
};

const schemaJson = `{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Ontario Agency Law Guide 2024: Authority, Duties of Agent, and Undisclosed Principals",
  "description": "Ontario agency law: actual and apparent authority, ratification, fiduciary duties of agent, undisclosed principal doctrine, agent personal liability to third parties, and termination of agency.",
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
  "url": "https://getatticus.ca/blog/ontario-agency-law"
}`;

const faqSchemaJson = `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the difference between actual authority and apparent authority in Ontario agency law?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Actual authority is the authority actually conferred on an agent by the principal, either expressly (by words or writing) or impliedly (from the circumstances, the nature of the agency, or the course of dealing). Apparent authority (also called ostensible authority) arises where the principal represents to a third party that the agent has authority to act — even if the agent has no actual authority. Where a third party relies on this representation to their detriment, the principal is estopped from denying the agent had authority. A principal who holds out an agent as having authority and then gives secret instructions limiting that authority cannot rely on those secret limitations against a third party who had no notice of them."
      }
    },
    {
      "@type": "Question",
      "name": "What are the fiduciary duties of an agent in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "An agent owes fiduciary duties to the principal because of the position of trust and confidence between them. The core fiduciary duties include: (1) Duty to act in the principal's best interests — the agent must not allow personal interests to conflict with the principal's interests without disclosure and consent; (2) Duty of loyalty — the agent must not make a secret profit or receive a commission from a third party in connection with the agency without disclosure; (3) Duty to account — the agent must keep accurate accounts and pay over all money and property received on the principal's behalf; (4) Duty not to delegate — the agent must personally perform duties unless delegation is expressly or impliedly authorized (delegatus non potest delegare). The fiduciary duties of an agent can be modified by agreement, but only with full and fair disclosure."
      }
    },
    {
      "@type": "Question",
      "name": "When is an agent personally liable to a third party in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "An agent who acts within the scope of actual authority for a disclosed principal is generally not personally liable on the contract with the third party — the principal alone is bound. An agent becomes personally liable in several circumstances: (1) The agent contracts personally, expressly assuming personal liability; (2) The principal is undisclosed — the third party may, on discovering the principal, elect to sue either the agent or the principal; (3) The agent acts without authority and purports to bind a non-existent or unauthorized principal, making the agent liable for breach of warranty of authority; (4) The agent commits a tort in the course of the agency — the principal and agent are jointly liable for the tort, and the agent remains personally liable even when the principal is also liable."
      }
    }
  ]
}`;

export default function OntarioAgencyLawPage() {
  return (
    <>
      <Script id="ontario-agency-law-schema" type="application/ld+json">
        {schemaJson}
      </Script>
      <Script id="ontario-agency-law-faq-schema" type="application/ld+json">
        {faqSchemaJson}
      </Script>

      <div className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-amber-400 text-slate-900 text-sm font-semibold px-3 py-1 rounded-full">
                Commercial Law
              </span>
              <span className="text-slate-400 text-sm">December 2024 &middot; 12 min read</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Ontario Agency Law Guide 2024: Authority, Duties of Agent, and Undisclosed Principals
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl">
              Actual authority (express and implied), apparent authority (holding out
              and reliance), ratification, fiduciary duties of agent to principal,
              undisclosed principal doctrine, agent personal liability to third parties,
              and termination of agency in Ontario commercial transactions.
            </p>
          </div>
        </section>

        <article className="py-16 px-6">
          <div className="max-w-3xl mx-auto prose prose-slate prose-lg">

            <h2>The Agency Relationship</h2>
            <p>
              Agency is a legal relationship in which one person (the agent) is authorized
              to act on behalf of another (the principal) and to create, modify, or
              terminate legal relationships between the principal and third parties.
              The principal is bound by contracts made by the agent within the scope
              of the agent&apos;s authority as if the principal had made them personally.
            </p>
            <p>
              Agency arises in a wide range of Ontario commercial relationships: real estate
              agents and brokers, solicitors and barristers acting for clients, corporate
              officers and directors acting for corporations, employees acting within the
              scope of employment, partners acting for a partnership, and independent
              contractors retained to negotiate on a client&apos;s behalf.
            </p>

            <h2>Creation of Agency</h2>

            <h3>Express Agency</h3>
            <p>
              Express agency is created by the principal expressly authorizing the agent,
              orally or in writing, to act on their behalf. A power of attorney is the
              most formal written instrument of agency; it may be general (authorizing the
              agent to act in all matters) or limited to specific transactions. Ontario&apos;s
              <em>Substitute Decisions Act, 1992</em> governs continuing powers of attorney
              for property and personal care.
            </p>

            <h3>Implied Agency</h3>
            <p>
              Implied agency arises from the conduct, circumstances, or relationship of the
              parties. An agent&apos;s implied authority extends to everything reasonably
              necessary to carry out the express authority — a real estate agent with
              authority to sell has implied authority to accept deposits and sign contracts
              of purchase and sale in the normal course. A managing director of a company
              has implied authority to enter ordinary commercial contracts on the company&apos;s
              behalf by virtue of the position.
            </p>

            <h3>Apparent (Ostensible) Authority</h3>
            <p>
              Apparent authority arises where the principal represents or holds out to a
              third party that the agent has authority to act, and the third party relies on
              that representation. The principal is then estopped from denying the agent&apos;s
              authority as against the third party.
            </p>
            <p>
              Key requirements for apparent authority:
            </p>
            <ul>
              <li>A representation by the principal (not merely by the agent) that the agent has authority;</li>
              <li>The third party relies on the representation;</li>
              <li>The third party acts to their detriment in reliance on the representation.</li>
            </ul>
            <p>
              Secret limitations on an agent&apos;s authority do not affect apparent authority:
              a principal who places an agent in a position of apparent authority cannot
              rely on internal instructions limiting that authority against a third party
              who had no notice of the limitations.
            </p>

            <h3>Ratification</h3>
            <p>
              Where an agent acts without authority, the principal may ratify the agent&apos;s
              unauthorized act and adopt it as their own. Ratification requires:
            </p>
            <ul>
              <li>The agent must purport to act as agent for a named or ascertainable principal;</li>
              <li>The principal must have existed and had capacity at the time of the act;</li>
              <li>The principal must ratify the whole transaction, not just the beneficial parts;</li>
              <li>Ratification must occur before the third party withdraws from the transaction.</li>
            </ul>
            <p>
              Ratification relates back to the date of the original unauthorized act — the
              contract is treated as if it had been authorized from the start.
            </p>

            <h2>Duties of an Agent to the Principal</h2>

            <h3>Fiduciary Duty</h3>
            <p>
              An agent is a fiduciary and owes the principal the full range of fiduciary duties:
            </p>
            <ul>
              <li>
                <strong>Duty to act in the principal&apos;s best interests:</strong> The agent
                must subordinate their personal interests to those of the principal and must
                not allow conflicts between personal and professional duties without disclosure
                and informed consent.
              </li>
              <li>
                <strong>Duty of loyalty — no secret profit:</strong> An agent must not make a
                secret profit or receive a commission, gratuity, or kickback from a third
                party in connection with the agency without the principal&apos;s knowledge
                and consent. Any profit made in breach of fiduciary duty is held on constructive
                trust for the principal.
              </li>
              <li>
                <strong>Duty not to act for adverse parties:</strong> An agent must not act
                for both the principal and a third party whose interests conflict with the
                principal&apos;s without the informed consent of both.
              </li>
            </ul>

            <h3>Duty to Account</h3>
            <p>
              An agent must keep accurate accounts of all transactions carried out on behalf
              of the principal, and must pay over all money and property received for the
              principal. The agent must keep the principal&apos;s money separate from their
              own — commingling of funds is a breach of fiduciary duty.
            </p>

            <h3>Duty of Care and Skill</h3>
            <p>
              An agent must exercise the degree of care and skill that can reasonably be
              expected in the circumstances — if the agent holds themselves out as having
              specialist skill (a lawyer, accountant, or real estate agent), the standard
              is that of a reasonably competent professional in that field.
            </p>

            <h3>Duty to Obey Instructions</h3>
            <p>
              An agent must carry out the lawful instructions of the principal. An agent
              who departs from the principal&apos;s instructions without justification
              is personally liable for any resulting loss. An agent is not required to
              carry out instructions that are unlawful.
            </p>

            <h2>The Undisclosed Principal</h2>
            <p>
              Where an agent contracts on behalf of a principal but does not disclose the
              existence of the principal to the third party, the third party contracts with
              the agent personally. On discovering the existence of the undisclosed principal,
              the third party may elect to hold either the agent or the principal liable on
              the contract — but not both. Once the election is made and acted upon, the
              third party cannot switch.
            </p>
            <p>
              The undisclosed principal may also intervene and sue the third party directly
              on the contract, unless the terms of the contract, or the circumstances,
              indicate that the contract was intended to be personal to the agent.
            </p>

            <h2>Agent&apos;s Personal Liability to Third Parties</h2>
            <p>
              An agent acting within actual authority for a disclosed principal is not
              personally liable on contracts made on the principal&apos;s behalf. Personal
              liability arises where:
            </p>
            <ul>
              <li>
                <strong>Agent contracts personally:</strong> where the agent signs in their
                own name, or the contract terms impose personal liability;
              </li>
              <li>
                <strong>Undisclosed principal:</strong> the agent is personally liable until
                the principal is disclosed and the third party elects to proceed against
                the principal;
              </li>
              <li>
                <strong>Breach of warranty of authority:</strong> where the agent purports
                to act for a principal but has no actual authority, the agent is liable to
                the third party for breach of the implied warranty that they have authority
                to bind the principal;
              </li>
              <li>
                <strong>Tortious acts:</strong> an agent is always personally liable for
                their own tortious acts, regardless of whether the principal is also vicariously
                liable.
              </li>
            </ul>

            <h2>Termination of Agency</h2>
            <p>
              Agency may be terminated by:
            </p>
            <ul>
              <li>Agreement between the principal and agent;</li>
              <li>Revocation by the principal — subject to liability for breach of contract if the agency was for a fixed term or supported by consideration;</li>
              <li>Renunciation by the agent;</li>
              <li>Completion of the purpose for which the agency was created;</li>
              <li>Expiry of a fixed term;</li>
              <li>Death, insanity, or bankruptcy of the principal or agent (subject to the protection of third parties who act in good faith without notice).</li>
            </ul>
            <p>
              A <strong>power of attorney made irrevocable</strong> (usually given as security
              for a loan or obligation owed to the agent) cannot be revoked by the principal
              while the underlying obligation subsists. Ontario&apos;s <em>Substitute Decisions
              Act, 1992</em> governs continuing powers of attorney that survive the grantor&apos;s
              incapacity.
            </p>

            <h2>Practice Points for Ontario Business Lawyers</h2>
            <ul>
              <li>
                Where a client acts through agents or directors, confirm actual authority
                before the transaction closes — resolution of the board or written authorization
                prevents disputes about apparent authority.
              </li>
              <li>
                When acting as solicitor, the lawyer is an agent of the client; the client
                is bound by contracts entered within the solicitor&apos;s actual authority.
                Exceeding instructions creates personal liability for breach of warranty
                of authority.
              </li>
              <li>
                Identify whether any party is acting as an undisclosed principal at the
                outset of a transaction — the counterparty&apos;s right to elect creates
                risk that must be disclosed to the client.
              </li>
              <li>
                In real estate transactions, confirm the agent&apos;s authority to bind
                the principal and whether a valid signed agreement is required to satisfy
                the Statute of Frauds requirements under the <em>Statute of Frauds</em>,
                R.S.O. 1990, c. S.19.
              </li>
              <li>
                Corporate law intersects with agency: a director acting beyond the
                objects of the corporation or without board authorization may bind the
                corporation under apparent authority but may be personally liable
                to the corporation for the unauthorized act.
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
              Track limitation periods and transaction deadlines, manage corporate and
              commercial matter files, and run LSO-compliant trust accounting — all in
              one Ontario platform.
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
                { href: "/blog/ontario-contract-formation", label: "Ontario Contract Formation" },
                { href: "/blog/ontario-unjust-enrichment", label: "Ontario Unjust Enrichment" },
                { href: "/blog/ontario-corporate-governance", label: "Ontario Corporate Governance" },
                { href: "/blog/ontario-director-liability", label: "Ontario Director Liability" },
                { href: "/blog/ontario-franchise-law", label: "Ontario Franchise Law" },
                { href: "/ontario-corporate-lawyer", label: "Ontario Corporate Lawyer Software" },
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
