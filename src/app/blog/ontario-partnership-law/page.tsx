import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ontario Partnership Law | Partnerships Act, Limited Partnerships, and Partner Liability",
  description:
    "A comprehensive guide to Ontario partnership law: the Partnerships Act R.S.O. 1990, general partnership formation and dissolution, partner authority and liability, fiduciary duties, limited partnerships under the Limited Partnerships Act, and limited liability partnerships for professional firms.",
  openGraph: {
    title: "Ontario Partnership Law | Partnerships Act, Limited Partnerships, and Partner Liability",
    description:
      "Understand Ontario partnership law — general partnership formation, unlimited joint and several liability, partner authority to bind, fiduciary duties, limited partnerships, and LLPs for Ontario professional firms.",
    url: "https://getatticus.ca/blog/ontario-partnership-law",
    siteName: "Atticus",
    type: "article",
  },
};

const schemaJson = `{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Ontario Partnership Law: Partnerships Act, Limited Partnerships, and Partner Liability",
  "description": "A comprehensive guide to Ontario partnership law under the Partnerships Act R.S.O. 1990, covering general partnership formation, unlimited liability, partner authority, fiduciary duties, limited partnerships under the Limited Partnerships Act, and limited liability partnerships for lawyers and other professionals.",
  "author": {
    "@type": "Organization",
    "name": "Atticus"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Atticus",
    "url": "https://getatticus.ca"
  },
  "mainEntityOfPage": "https://getatticus.ca/blog/ontario-partnership-law"
}`;

const faqSchema = `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How is a general partnership formed in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Under the Partnerships Act R.S.O. 1990, a general partnership is formed automatically when two or more persons carry on business in common with a view to profit. No formal registration or written agreement is required. The Act provides default rules that govern the partnership unless the partners contract out by a partnership agreement."
      }
    },
    {
      "@type": "Question",
      "name": "Are partners personally liable for partnership debts in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Under the Partnerships Act s.10, partners are jointly and severally liable for all debts and obligations of the firm incurred while they are partners. Each partner is personally liable for the full amount of any partnership debt — creditors can pursue any individual partner for the whole amount, and that partner must then seek contribution from co-partners."
      }
    },
    {
      "@type": "Question",
      "name": "What is a limited liability partnership (LLP) in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "An Ontario limited liability partnership (LLP) is a partnership in which a partner is not personally liable for negligence, wrongful acts, or omissions of another partner or an employee of the LLP who is not under that partner's direct supervision. LLPs are available only to Ontario professionals — including lawyers, accountants, architects, engineers, and other designated professionals — under their respective governing legislation."
      }
    },
    {
      "@type": "Question",
      "name": "What are the fiduciary duties of partners to each other in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Partners owe fiduciary duties to each other including: duty of good faith and loyalty, duty to account for and pay over any benefit derived from the partnership business without consent, duty to disclose material information, and duty not to compete with the partnership without consent. These duties exist alongside the partnership agreement and can only be modified by express agreement."
      }
    }
  ]
}`;

export default function OntarioPartnershipLawPage() {
  return (
    <>
      <Script id="partnership-law-schema" type="application/ld+json">
        {schemaJson}
      </Script>
      <Script id="partnership-law-faq-schema" type="application/ld+json">
        {faqSchema}
      </Script>

      <div className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-amber-400 text-slate-900 text-sm font-semibold px-4 py-1 rounded-full mb-6">
              Business Law
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Ontario Partnership Law
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl">
              General partnership formation under the Partnerships Act, unlimited joint and several
              liability, partner authority to bind the firm, fiduciary duties, limited partnerships,
              and limited liability partnerships for Ontario professional firms.
            </p>
          </div>
        </section>

        <article className="py-16 px-6">
          <div className="max-w-4xl mx-auto prose prose-slate prose-lg max-w-none">

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Ontario&apos;s Partnerships Act</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Partnership law in Ontario is governed primarily by the <em>Partnerships Act</em>,
                R.S.O. 1990, c. P.5. The Act codifies and supplements common law partnership principles
                derived from the English <em>Partnership Act 1890</em>. The statute provides default rules
                that apply in the absence of a partnership agreement — but the partners can contract
                out of most default provisions (other than obligations owed to third parties) through
                a written partnership agreement.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                Section 2 of the Act defines partnership as &quot;the relation that subsists between
                persons carrying on a business in common with a view of profit.&quot; This is an
                automatic, relationship-based definition — a partnership can exist without registration,
                without a written agreement, and without any conscious intention to form a partnership.
              </p>
              <p className="text-slate-700 leading-relaxed">
                The <em>Limited Partnerships Act</em>, R.S.O. 1990, c. L.16 governs limited partnerships.
                The Partnerships Act&apos;s provisions on limited liability partnerships (LLPs) for
                professionals were added by amendment and are now in ss. 44.1–44.4.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Formation of a General Partnership</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                A general partnership is formed when two or more persons carry on business in common
                with a view to profit — no formalities, registration, or written agreement required.
                Courts look at the substance of the relationship rather than labels.
              </p>

              <h3 className="text-xl font-semibold text-slate-900 mb-3">The Indicia of Partnership</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                Section 3 of the Partnerships Act provides rules for determining whether a partnership
                exists. Key indicators include:
              </p>
              <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
                <li>Sharing of profits is strong evidence of partnership, but sharing of gross returns is not conclusive</li>
                <li>Sharing of losses is strong evidence</li>
                <li>Joint ownership of property does not by itself create a partnership</li>
                <li>Receiving a share of profits as payment for a debt, wages, or annuity does not automatically make a creditor, employee, or annuitant a partner</li>
              </ul>
              <p className="text-slate-700 leading-relaxed mb-4">
                The leading Ontario case on inadvertent partnership is <em>Backman v Canada</em> [2001]
                1 SCR 367 (SCC), which confirmed that even commercially motivated arrangements intended
                as something other than a partnership can be caught by the partnership definition if
                the three elements — carrying on business, in common, with a view to profit — are present.
              </p>

              <h3 className="text-xl font-semibold text-slate-900 mb-3">Partnership by Estoppel</h3>
              <p className="text-slate-700 leading-relaxed">
                Under s. 15 of the Partnerships Act, a person who holds themselves out as a partner
                — or who knowingly allows themselves to be represented as a partner — is liable to third
                parties who rely on that representation to their detriment. Partnership by estoppel
                does not create an actual partnership between the parties, but it creates liability
                to third parties as if a partnership existed.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Partner Authority to Bind the Firm</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Section 8 of the Partnerships Act provides that every partner is an agent of the firm and
                of co-partners for the purpose of the firm&apos;s business. An act of a partner carried
                out in the usual course of the firm&apos;s business binds the firm, unless the partner
                had no authority to act in the particular matter and the third party knew of the limitation
                or did not know or believe the person to be a partner.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                The authority analysis is similar to agency law: actual authority (express or implied by
                the partnership agreement), and apparent authority (what third parties reasonably believe
                a partner has authority to do given the usual scope of the firm&apos;s activities).
                Restrictions on a partner&apos;s authority in the partnership agreement are effective
                only against third parties who have actual notice of them.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Section 11 extends liability to wrongful acts — the firm is liable for loss or injury
                caused to a third party by a partner acting in the ordinary course of the firm&apos;s
                business, or with the authority of co-partners. This covers torts committed by a partner
                in the course of firm business.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Partner Liability: Joint and Several</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                The hallmark of general partnership — and its primary disadvantage — is the unlimited
                joint and several liability of partners. Under s. 10, all partners are jointly liable
                for debts and obligations of the firm. Section 11 imposes joint and several liability
                for wrongful acts and misapplication of money or property received by a partner.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                Joint and several liability means:
              </p>
              <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
                <li>A creditor can sue any individual partner for the full amount of a partnership debt</li>
                <li>A judgment obtained against the firm can be enforced against the personal assets of any partner</li>
                <li>A partner who pays more than their proportionate share can seek contribution from co-partners</li>
                <li>A new partner joining the firm is not personally liable for debts incurred before they joined (s. 18(1)), but a retiring partner remains liable for debts incurred before retirement unless the creditor agrees to release them</li>
              </ul>
              <p className="text-slate-700 leading-relaxed">
                This unlimited liability exposure is the primary reason professionals choose limited
                liability partnerships (LLPs) or professional corporations over general partnerships
                for their practice structure.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Fiduciary Duties of Partners</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Partners owe each other fiduciary duties arising from both the Partnerships Act and
                the common law. These include:
              </p>

              <h3 className="text-xl font-semibold text-slate-900 mb-3">Duty to Account</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                Section 28 requires every partner to render true accounts and full information to
                co-partners or their legal representatives. Section 29 requires a partner to account
                for and pay over to the firm any benefit derived — without the consent of co-partners
                — from any transaction concerning the partnership or any use by the partner of partnership
                property, name, or business connection.
              </p>

              <h3 className="text-xl font-semibold text-slate-900 mb-3">Duty Not to Compete</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                Section 30 requires a partner who carries on a competing business without the consent of
                co-partners to account to the firm for all profits from that competing business. The duty
                subsists throughout the partnership and is not limited to competing activities that
                directly appropriate firm clients or business.
              </p>

              <h3 className="text-xl font-semibold text-slate-900 mb-3">Good Faith and Utmost Fairness</h3>
              <p className="text-slate-700 leading-relaxed">
                Partners owe each other duties of good faith and utmost fairness — a higher standard
                than the ordinary commercial dealing standard of good faith. In <em>Rochwerg v Truster</em>
                (2002) 212 DLR (4th) 498 (ONCA), the court confirmed that partners must act with the
                highest standard of integrity toward co-partners in all dealings touching the partnership.
                This includes disclosing material information and not exploiting the partnership relationship
                for private benefit.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">The Partnership Agreement</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                The Partnerships Act&apos;s default rules can be displaced by a partnership agreement.
                Key matters typically addressed in a partnership agreement include:
              </p>
              <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
                <li><strong>Capital contributions and profit sharing</strong> — overriding the default equal sharing rule (s. 24(1))</li>
                <li><strong>Decision-making authority</strong> — majority vote for ordinary matters, unanimity for changes to the business nature (s. 24(8))</li>
                <li><strong>Admission of new partners</strong> — override the default unanimity requirement (s. 24(7))</li>
                <li><strong>Restrictive covenants</strong> — non-competition and non-solicitation post-departure</li>
                <li><strong>Expulsion and withdrawal</strong> — procedures and compensation terms</li>
                <li><strong>Valuation of a departing partner&apos;s interest</strong></li>
                <li><strong>Dispute resolution</strong> — arbitration clauses</li>
                <li><strong>Dissolution procedures</strong></li>
              </ul>
              <p className="text-slate-700 leading-relaxed">
                In the absence of a partnership agreement (or where the agreement is silent), the
                Partnerships Act applies. Default rules include equal sharing of profits and losses
                (s. 24(1)), no payment of interest on capital (s. 24(4)), and each partner having
                an equal right to participate in management (s. 24(5)).
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Limited Partnerships</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                A limited partnership is governed by the <em>Limited Partnerships Act</em>, R.S.O. 1990,
                c. L.16. It consists of at least one general partner with unlimited liability and one or
                more limited partners whose liability is limited to their capital contribution —
                provided they do not take part in the management and control of the business.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                Formation requires filing a declaration with the Ministry of Government and Consumer
                Services under s. 3 of the LPA. Key features:
              </p>
              <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
                <li><strong>General partner liability</strong> — general partners have the same unlimited joint and several liability as in a general partnership</li>
                <li><strong>Limited partner liability cap</strong> — limited to capital contributed; a limited partner who takes part in management and control becomes liable as a general partner (s. 13)</li>
                <li><strong>Return of capital</strong> — a limited partner may not receive back their contribution if doing so would leave the firm unable to pay its debts (s. 15)</li>
                <li><strong>No management rights by default</strong> — limited partners may not participate in management; permitted activities are narrowly defined (s. 12)</li>
              </ul>
              <p className="text-slate-700 leading-relaxed">
                Limited partnerships are widely used as investment vehicles for real estate, private equity,
                and resource projects because they allow passive investors to benefit from the flow-through
                tax treatment of partnership income while capping liability to their invested capital.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Limited Liability Partnerships for Professionals</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Sections 44.1–44.4 of the Partnerships Act (added in 1998) permit designated Ontario
                professionals to carry on practice as a limited liability partnership (LLP). The LLP
                shield protects partners from personal liability for the negligence of other partners
                and employees not under their direct supervision.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                The LLP protection is limited: a partner remains personally liable for:
              </p>
              <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
                <li>Their own negligent acts and omissions</li>
                <li>Negligence by employees or agents under their direct supervision</li>
                <li>All debts, obligations, and liabilities of the LLP arising from ordinary commercial transactions (e.g., leases, loans)</li>
              </ul>
              <p className="text-slate-700 leading-relaxed mb-4">
                For Ontario law firms, LLP status is governed by Law Society Rule 2.1 — every Ontario law
                firm practising as an LLP must have the &quot;LLP&quot; or &quot;Société à responsabilité
                limitée&quot; designation in its name and meet the LSO&apos;s insurance and maintenance
                requirements. The LLP must maintain at least the minimum insurance required by the LSO.
              </p>
              <p className="text-slate-700 leading-relaxed">
                LLPs replaced general partnerships as the standard structure for Ontario law firms.
                The LLP shield means that a partner in a Toronto law firm is not personally liable
                for a file mishandled by a partner in the Ottawa office — unless the Toronto partner
                had supervisory responsibility for that file.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Dissolution of Partnership</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Under the Partnerships Act, a partnership may be dissolved by:
              </p>
              <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
                <li><strong>Fixed term expiry or completion of undertaking</strong> (s. 32)</li>
                <li><strong>Notice</strong> — by any partner in a partnership at will (s. 32(1)(c))</li>
                <li><strong>Death or insolvency</strong> — subject to contrary agreement (s. 33)</li>
                <li><strong>Charging order</strong> — a partner&apos;s share being charged may entitle co-partners to dissolve (s. 33(2))</li>
                <li><strong>Court order</strong> — under s. 35, on grounds including partner incapacity, prejudicial conduct, persistent breach of agreement, or where it is just and equitable</li>
              </ul>
              <p className="text-slate-700 leading-relaxed mb-4">
                The &quot;just and equitable&quot; ground for dissolution (s. 35(f)) is broadly applied.
                Courts have ordered dissolution where a deadlock renders the partnership unworkable,
                where there has been a breakdown in trust between partners, or where the substratum
                of the partnership has disappeared. The oppression remedy under the <em>Business
                Corporations Act</em> is not available for partnerships — s. 35(f) dissolution is
                the primary equitable remedy.
              </p>
              <p className="text-slate-700 leading-relaxed">
                On dissolution, the firm&apos;s assets are applied first to firm debts, then to return
                capital contributions, and finally to distribute any surplus equally among partners
                (absent contrary agreement). A dissolution notice does not retroactively affect completed
                transactions — authority to bind the firm continues for the purpose of winding up
                existing business.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>

              <div className="space-y-6">
                <div className="border border-slate-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    How is a general partnership formed in Ontario?
                  </h3>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    Under the <em>Partnerships Act</em> R.S.O. 1990, a general partnership is formed
                    automatically when two or more persons carry on business in common with a view to profit.
                    No formal registration or written agreement is required. The Act provides default rules
                    that govern the partnership unless partners contract out through a partnership agreement.
                  </p>
                </div>

                <div className="border border-slate-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    Are partners personally liable for partnership debts in Ontario?
                  </h3>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    Yes. Under <em>Partnerships Act</em> s.10, partners are jointly and severally liable
                    for all debts and obligations of the firm incurred while they are partners. Each partner
                    is personally liable for the full amount — creditors can pursue any individual partner
                    for the whole debt, and that partner must then seek contribution from co-partners.
                  </p>
                </div>

                <div className="border border-slate-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    What is a limited liability partnership (LLP) in Ontario?
                  </h3>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    An Ontario LLP is a partnership in which a partner is not personally liable for negligence
                    of other partners or employees not under their direct supervision. LLPs are available only
                    to Ontario professionals — including lawyers, accountants, architects, and engineers —
                    under their respective governing legislation and the <em>Partnerships Act</em> ss. 44.1–44.4.
                  </p>
                </div>

                <div className="border border-slate-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    What are the fiduciary duties of partners to each other in Ontario?
                  </h3>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    Partners owe each other duties of good faith and utmost fairness, including: duty to
                    account for benefits (Partnerships Act s.29), duty not to compete without consent (s.30),
                    duty of full disclosure of material information, and duty not to exploit the partnership
                    for private benefit at co-partners&apos; expense.
                  </p>
                </div>
              </div>
            </section>

            <section className="py-12 px-8 bg-amber-50 border border-amber-200 rounded-2xl text-center">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Manage Partnership and Corporate Files with Atticus
              </h2>
              <p className="text-slate-600 mb-6 max-w-xl mx-auto">
                Atticus helps Ontario lawyers manage business law files, track limitation periods,
                and stay LSO-compliant — all in one platform built for Canadian legal practice.
                $149 CAD per lawyer per month.
              </p>
              <Link
                href="/sign-up"
                className="inline-block bg-slate-900 text-white font-semibold px-8 py-4 rounded-lg hover:bg-slate-700 transition-colors"
              >
                Start Free Trial
              </Link>
            </section>

          </div>
        </article>

        <section className="py-12 px-6 border-t border-slate-100">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-lg font-semibold text-slate-900 mb-6">Related Resources</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { href: "/ontario-corporate-lawyer", label: "Ontario Corporate Lawyer" },
                { href: "/blog/ontario-fiduciary-duty", label: "Fiduciary Duty in Ontario" },
                { href: "/blog/ontario-agency-law", label: "Agency Law in Ontario" },
                { href: "/blog/ontario-oppression-remedy", label: "Oppression Remedy" },
                { href: "/trust-accounting-ontario", label: "Trust Accounting Ontario" },
                { href: "/ai-for-lawyers", label: "AI for Ontario Lawyers" },
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
