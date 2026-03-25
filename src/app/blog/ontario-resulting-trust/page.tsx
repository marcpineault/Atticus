import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ontario Resulting Trusts: Automatic Resulting Trusts, Presumption of Advancement, and Unjust Enrichment",
  description:
    "Complete guide to resulting trusts in Ontario: automatic resulting trusts, presumption of resulting trust, presumption of advancement (Pecore v Pecore 2007 SCC 17), family law context, unjust enrichment comparison, and remedial constructive trusts.",
  openGraph: {
    title: "Ontario Resulting Trusts: Automatic Resulting Trusts, Presumption of Advancement, and Unjust Enrichment",
    description:
      "Ontario resulting trusts: presumption of resulting trust, presumption of advancement Pecore v Pecore 2007 SCC 17, family property transfers, gratuitous transfers, and unjust enrichment.",
    type: "article",
    url: "https://getatticus.ca/blog/ontario-resulting-trust",
    siteName: "Atticus",
  },
  alternates: { canonical: "https://getatticus.ca/blog/ontario-resulting-trust" },
};

const schemaJson = `{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Ontario Resulting Trusts: Automatic Resulting Trusts, Presumption of Advancement, and Unjust Enrichment",
  "description": "Complete guide to Ontario resulting trusts: automatic resulting trusts, presumption of resulting trust vs advancement, Pecore v Pecore 2007 SCC 17, family property, and unjust enrichment.",
  "author": {
    "@type": "Organization",
    "name": "Atticus",
    "url": "https://getatticus.ca"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Atticus",
    "url": "https://getatticus.ca"
  },
  "datePublished": "2025-02-10",
  "dateModified": "2025-02-10",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://getatticus.ca/blog/ontario-resulting-trust"
  }
}`;

const faqSchemaJson = `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is a resulting trust in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A resulting trust arises when a person transfers property to another person but the beneficial interest 'results back' to the transferor. There are two main categories: (1) automatic resulting trusts, which arise where a trust fails (e.g., for uncertainty of objects) and the surplus results back to the settlor; and (2) presumed resulting trusts, which arise where a person gratuitously transfers property to another and there is no explanation for the gift — the law presumes the transferee holds the property on trust for the transferor."
      }
    },
    {
      "@type": "Question",
      "name": "What is the presumption of resulting trust in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "When a person gratuitously transfers property to another (i.e., without consideration), Ontario law presumes that a resulting trust arises — the transferee holds the property on trust for the transferor. This presumption is rebuttable: the transferee can show the transfer was intended as a gift. The presumption of resulting trust applies in adult-to-adult gratuitous transfers and shifts the burden to the transferee to prove gift intention."
      }
    },
    {
      "@type": "Question",
      "name": "What is the presumption of advancement in Ontario family law?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The presumption of advancement historically applied to transfers from husband to wife and from parent to child — the law presumed a gift, not a resulting trust. In Pecore v Pecore 2007 SCC 17, the Supreme Court of Canada confirmed that the presumption of advancement from parent to child survives in Canada, but it is rebuttable and weakens as the child becomes an adult. Transfers between spouses (including common law partners under the Family Law Act) may be governed by FLA s.14 equalization and constructive trust principles rather than the presumption of advancement."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between a resulting trust and a constructive trust in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A resulting trust returns beneficial ownership to the original transferor based on the presumed common intention at the time of transfer — it does not depend on wrongdoing. A constructive trust is imposed by a court as a remedy for unjust enrichment (Pettkus v Becker [1980] 2 SCR 834) or other equitable claims — the trust is created regardless of the parties' original intentions to reverse an unjust enrichment. In family law, a constructive trust may arise from a common law partner's contributions to the other's property even without a formal transfer."
      }
    }
  ]
}`;

export default function OntarioResultingTrustPage() {
  return (
    <>
      <Script id="ontario-resulting-trust-schema" type="application/ld+json">
        {schemaJson}
      </Script>
      <Script id="ontario-resulting-trust-faq" type="application/ld+json">
        {faqSchemaJson}
      </Script>

      <div className="min-h-screen bg-white">
        <article className="max-w-3xl mx-auto px-6 py-16">
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-amber-100 text-amber-800 text-xs font-semibold px-3 py-1 rounded-full">
                Trust Law
              </span>
              <span className="text-slate-400 text-sm">February 2025 · 12 min read</span>
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Ontario Resulting Trusts: Automatic Resulting Trusts, Presumption of Advancement, and Unjust Enrichment
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Resulting trusts arise in a wide range of Ontario legal contexts — family property
              disputes, failed estate plans, gratuitous property transfers, and joint bank accounts.
              Understanding when a resulting trust arises, when the presumption of advancement
              applies, and how resulting trusts interact with unjust enrichment is essential for
              property, family, and estates lawyers.
            </p>
          </header>

          <div className="prose prose-slate max-w-none">
            <h2>1. What Is a Resulting Trust?</h2>
            <p>
              A resulting trust arises when the beneficial interest in property &quot;results back&quot;
              to the person who originally provided the purchase money or transferred the property,
              rather than vesting in the legal owner. The name comes from the Latin &quot;resultare&quot; —
              to spring back.
            </p>
            <p>
              Resulting trusts are not imposed by the court as a remedy for wrongdoing —
              they arise from the presumed intentions of the parties at the time of the
              original transaction. This distinguishes them from constructive trusts, which
              are remedial.
            </p>

            <h2>2. Categories of Resulting Trusts</h2>
            <p>
              The traditional categorization, adopted by the Supreme Court of Canada in
              <em>Pecore v Pecore</em> 2007 SCC 17, divides resulting trusts into two categories:
            </p>

            <h3>2.1 Automatic Resulting Trusts</h3>
            <p>
              Automatic resulting trusts arise by operation of law in situations including:
            </p>
            <ul>
              <li>
                <strong>Failed express trust</strong>: Where an express trust fails in whole
                or in part (for uncertainty of objects, illegality, or failure to complete),
                the property subject to the failed trust results back to the settlor (or their estate);
              </li>
              <li>
                <strong>Surplus of trust property</strong>: Where a trust fully achieves its
                purpose and a surplus remains, the surplus results back to the settlor;
              </li>
              <li>
                <strong>Incomplete disposal of beneficial interest</strong>: Where the settlor
                transfers legal title but does not completely exhaust the equitable interest.
              </li>
            </ul>

            <h3>2.2 Presumed Resulting Trusts</h3>
            <p>
              Presumed resulting trusts arise from the presumption that a gratuitous transfer
              of property is not intended as a gift — the transferee is presumed to hold on
              trust for the transferor. The presumption is rebuttable.
            </p>

            <h2>3. The Presumption of Resulting Trust</h2>
            <p>
              The foundation principle is: where a person gratuitously transfers property to
              another without consideration, equity presumes the transferee holds the property
              on trust for the transferor. This presumption shifts the burden to the transferee
              to prove that the transfer was intended as a gift.
            </p>
            <p>
              The presumption applies to:
            </p>
            <ul>
              <li>Gratuitous transfers of real property;</li>
              <li>Gratuitous transfers of personal property with legal documentation (e.g., shares, bank accounts);</li>
              <li>Purchase money resulting trusts — where A pays the purchase price and title is taken in B&apos;s name.</li>
            </ul>

            <h2>4. The Presumption of Advancement: Pecore v Pecore</h2>
            <p>
              The presumption of advancement is the counterpart to the presumption of resulting
              trust. It arises where the relationship between the parties is one in which the
              law presumes a gift was intended:
            </p>
            <ul>
              <li>
                <strong>Parent to minor child</strong>: A parent who gratuitously transfers
                property to a minor child is presumed to have intended a gift (advancement).
                The presumption of resulting trust does not apply.
              </li>
              <li>
                <strong>Parent to adult child</strong>: The presumption of advancement historically
                applied to adult children as well, but weakens as the child becomes independent.
              </li>
            </ul>
            <p>
              In <em>Pecore v Pecore</em> 2007 SCC 17, the Supreme Court of Canada held that
              the presumption of advancement from parent to child survives in Canada and applies
              to transfers to adult children — but it is rebuttable and its strength diminishes
              as the child achieves financial independence. The Court rejected the English approach
              (eliminating the presumption for adult children).
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse border border-slate-200 text-sm">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-700">Transfer Relationship</th>
                    <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-700">Presumption</th>
                    <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-700">Rebuttable By</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-200 px-4 py-3">Adult to adult (strangers)</td>
                    <td className="border border-slate-200 px-4 py-3">Resulting trust</td>
                    <td className="border border-slate-200 px-4 py-3">Transferee showing gift intention</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="border border-slate-200 px-4 py-3">Parent to minor child</td>
                    <td className="border border-slate-200 px-4 py-3">Advancement (gift)</td>
                    <td className="border border-slate-200 px-4 py-3">Transferor showing trust intention</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 px-4 py-3">Parent to adult child</td>
                    <td className="border border-slate-200 px-4 py-3">Advancement (weakened)</td>
                    <td className="border border-slate-200 px-4 py-3">Transferor showing trust intention; strength depends on circumstances</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="border border-slate-200 px-4 py-3">Spouses (married)</td>
                    <td className="border border-slate-200 px-4 py-3">FLA s.14 and equalization regime; also constructive trust principles</td>
                    <td className="border border-slate-200 px-4 py-3">Evidence of contrary intention</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 px-4 py-3">Common law partners</td>
                    <td className="border border-slate-200 px-4 py-3">Resulting trust; unjust enrichment</td>
                    <td className="border border-slate-200 px-4 py-3">Evidence of gift intention or unjust enrichment basis</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>5. Resulting Trusts in the Family Law Context</h2>

            <h3>5.1 Joint Bank Accounts</h3>
            <p>
              One of the most common resulting trust disputes in Ontario involves joint bank accounts
              created by parents for estate planning purposes. A parent adds an adult child as
              a joint account holder for convenience (to manage accounts in the event of incapacity),
              but on the parent&apos;s death, the child claims the joint account passes to them by
              survivorship as a gift.
            </p>
            <p>
              <em>Pecore v Pecore</em> addressed this directly: where a gratuitous transfer into
              joint tenancy is made by a parent to an adult child, the presumption of advancement
              applies (though weakened). The child must rebut the presumption of resulting trust
              by demonstrating on a balance of probabilities that the parent intended to give
              the entire account to the child by survivorship. Courts examine: the parent&apos;s
              stated purposes, access and use of the account during the parent&apos;s lifetime,
              tax treatment, and evidence of the parent&apos;s testamentary intentions.
            </p>

            <h3>5.2 Common Law Partners and Unjust Enrichment</h3>
            <p>
              Common law spouses in Ontario do not have equalization rights under the Family Law Act
              (those rights are limited to married spouses). A common law partner who has contributed
              to the acquisition or improvement of the other&apos;s property may have a claim based on:
            </p>
            <ul>
              <li>
                <strong>Resulting trust</strong>: Where the common law partner directly contributed
                to the purchase price of property held in the other&apos;s name (purchase money resulting trust);
              </li>
              <li>
                <strong>Unjust enrichment and constructive trust</strong>: Where the partner&apos;s
                contributions (financial or domestic labour) enriched the other at the partner&apos;s
                expense with no juristic reason for the enrichment — <em>Kerr v Baranow</em> 2011 SCC 10.
              </li>
            </ul>

            <h2>6. Resulting Trust vs Constructive Trust</h2>
            <p>
              The distinction between resulting trusts and constructive trusts is significant:
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse border border-slate-200 text-sm">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-700">Feature</th>
                    <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-700">Resulting Trust</th>
                    <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-700">Constructive Trust</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-200 px-4 py-3">Basis</td>
                    <td className="border border-slate-200 px-4 py-3">Presumed or actual common intention at time of transfer</td>
                    <td className="border border-slate-200 px-4 py-3">Remedy for unjust enrichment or wrongdoing</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="border border-slate-200 px-4 py-3">Wrongdoing required</td>
                    <td className="border border-slate-200 px-4 py-3">No</td>
                    <td className="border border-slate-200 px-4 py-3">No (unjust enrichment) or Yes (fraud, breach of fiduciary duty)</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 px-4 py-3">Quantum</td>
                    <td className="border border-slate-200 px-4 py-3">Proportional to contribution (purchase money)</td>
                    <td className="border border-slate-200 px-4 py-3">Proportional to unjust enrichment (monetary remedy may be preferred)</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="border border-slate-200 px-4 py-3">Leading Ontario/SCC case</td>
                    <td className="border border-slate-200 px-4 py-3">Pecore v Pecore 2007 SCC 17</td>
                    <td className="border border-slate-200 px-4 py-3">Kerr v Baranow 2011 SCC 10; Pettkus v Becker [1980] 2 SCR 834</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 px-4 py-3">Applicable to common law spouses</td>
                    <td className="border border-slate-200 px-4 py-3">Yes (purchase money)</td>
                    <td className="border border-slate-200 px-4 py-3">Yes (unjust enrichment, domestic contributions)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>7. Purchase Money Resulting Trusts</h2>
            <p>
              A purchase money resulting trust arises where A contributes to the purchase price
              of property that is registered in B&apos;s name (or jointly in A and B&apos;s name).
              A&apos;s proportional contribution to the purchase price creates a beneficial interest
              in A&apos;s favour — the resulting trust reflects the parties&apos; presumed intention
              that beneficial ownership follows the money.
            </p>
            <p>
              Key issues in purchase money resulting trust disputes:
            </p>
            <ul>
              <li>Whether A&apos;s payment was a loan, gift, or contribution to purchase (characterization);</li>
              <li>The proportion of A&apos;s contribution to the total purchase price (quantum of beneficial interest);</li>
              <li>Subsequent mortgage payments — Ontario courts have generally not extended the resulting trust proportional share to post-purchase mortgage payments (unlike contributions to the original purchase).</li>
            </ul>

            <h2>8. Limitations Act 2002</h2>
            <p>
              Claims based on resulting trust are subject to the general two-year limitation
              period under the <em>Limitations Act, 2002</em>, running from the date the claim
              was discovered. In the context of resulting trusts arising on death (e.g., joint
              account survivorship disputes), the limitation period typically begins running when
              the plaintiff has actual or constructive knowledge of the transfer and the circumstances
              giving rise to the trust claim — which may be upon or after the death of the original
              transferor.
            </p>
            <p>
              The ultimate 15-year limitation period applies from the act or omission (typically
              the date of the original transfer).
            </p>

            <h2>Frequently Asked Questions</h2>

            <h3>What is a resulting trust in Ontario?</h3>
            <p>
              A resulting trust arises when the beneficial interest in property &quot;results back&quot;
              to the original transferor. It arises from the presumed or actual common intention
              at the time of the original transaction — not from wrongdoing. The two main categories
              are automatic resulting trusts (failed trusts) and presumed resulting trusts
              (gratuitous transfers).
            </p>

            <h3>What is the presumption of resulting trust in Ontario?</h3>
            <p>
              When a person gratuitously transfers property to another without consideration,
              Ontario law presumes a resulting trust — the transferee holds on trust for the
              transferor. The transferee can rebut the presumption by showing a gift was intended.
            </p>

            <h3>What is the presumption of advancement in Ontario family law?</h3>
            <p>
              The presumption of advancement presumes a gift (not a resulting trust) in certain
              relationships. Following <em>Pecore v Pecore</em> 2007 SCC 17, the presumption
              applies to transfers from parent to child (minor or adult, though weakened for
              adults) and is rebuttable. Common law partner transfers are governed by resulting
              trust and unjust enrichment principles.
            </p>

            <h3>What is the difference between a resulting trust and a constructive trust in Ontario?</h3>
            <p>
              A resulting trust reflects presumed intentions at the time of transfer and returns
              beneficial ownership to the original transferor. A constructive trust is a court-imposed
              remedy for unjust enrichment (under <em>Kerr v Baranow</em> 2011 SCC 10 and
              <em>Pettkus v Becker</em> [1980] 2 SCR 834) — it arises regardless of original
              intentions to reverse an unjust enrichment.
            </p>
          </div>

          <div className="mt-16 pt-8 border-t border-slate-200">
            <p className="text-sm text-slate-500 mb-8">
              This article is for general informational purposes only and does not constitute legal advice.
              Resulting trust disputes involve complex factual and legal analysis.
              Consult qualified Ontario legal counsel for advice on your specific situation.
            </p>
            <div className="bg-amber-50 rounded-xl p-6 border border-amber-100">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Managing Ontario Trust and Estate Matters with Atticus
              </h3>
              <p className="text-slate-600 text-sm mb-4">
                Atticus helps Ontario trust and estate lawyers track limitation periods, manage
                complex trust matters, and organize documents — with automatic extraction of key
                dates, parties, and amounts from trust instruments and correspondence. Built
                specifically for Ontario law firms.
              </p>
              <Link
                href="/sign-up"
                className="inline-block bg-slate-900 text-white font-semibold px-6 py-3 rounded-lg hover:bg-slate-700 transition-colors text-sm"
              >
                Try Atticus Free
              </Link>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Related Articles</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { href: "/blog/ontario-constructive-trust", label: "Ontario Constructive Trust" },
                { href: "/blog/ontario-trust-law", label: "Ontario Trust Law" },
                { href: "/blog/ontario-unjust-enrichment", label: "Ontario Unjust Enrichment" },
                { href: "/blog/ontario-estate-planning", label: "Ontario Estate Planning" },
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
        </article>
      </div>
    </>
  );
}
