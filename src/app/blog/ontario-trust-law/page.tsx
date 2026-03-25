import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ontario Trust Law Guide 2024 | Express Trusts, Resulting Trusts, Constructive Trusts, and Trustee Duties",
  description:
    "Complete guide to Ontario trust law: express trust creation (three certainties), resulting trusts, constructive trusts (unjust enrichment), Pecore presumption of resulting trust, trustee duties and powers, breach of trust remedies, and Trustee Act provisions for Ontario lawyers.",
  openGraph: {
    title: "Ontario Trust Law Guide 2024 | Express Trusts, Resulting Trusts, Constructive Trusts, and Trustee Duties",
    description:
      "Ontario trust law: three certainties, resulting trusts, constructive trusts and unjust enrichment, Pecore presumption, trustee duties, breach of trust, and Trustee Act.",
    url: "https://getatticus.ca/blog/ontario-trust-law",
    siteName: "Atticus",
    type: "article",
  },
  alternates: { canonical: "https://getatticus.ca/blog/ontario-trust-law" },
};

const articleSchema = `{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Ontario Trust Law Guide 2024: Express Trusts, Resulting Trusts, Constructive Trusts, and Trustee Duties",
  "description": "Complete guide to Ontario trust law including express trust creation (three certainties), resulting trusts, constructive trusts and unjust enrichment, Pecore presumption of resulting trust, trustee duties and powers under the Trustee Act, and breach of trust remedies.",
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
  "url": "https://getatticus.ca/blog/ontario-trust-law",
  "mainEntityOfPage": "https://getatticus.ca/blog/ontario-trust-law"
}`;

const faqSchema = `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What are the three certainties required to create an express trust in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "An express trust in Ontario requires three certainties: (1) certainty of intention — the settlor must manifest a clear intention to create a trust, not merely express a wish or hope (precatory language like 'I wish' is insufficient); (2) certainty of subject matter — the trust property must be identified with sufficient certainty; and (3) certainty of objects — the beneficiaries must be identifiable. Fixed trusts require every beneficiary to be ascertainable. Discretionary trusts use the 'is or is not' test from McPhail v Doulton — the trustee must be able to say whether any given person is or is not within the class of potential beneficiaries."
      }
    },
    {
      "@type": "Question",
      "name": "What is the Pecore presumption of resulting trust in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In Pecore v Pecore [2007] 1 SCR 795, the Supreme Court of Canada confirmed the presumption of resulting trust for gratuitous transfers between adults: when an adult transfers property to another adult for no consideration, equity presumes the transferee holds the property on resulting trust for the transferor. This presumption is rebuttable by evidence of the transferor's intention to make a gift. The reverse applies for transfers from parent to minor child — a presumption of advancement (gift) applies in that direction. The Pecore presumption is critical in family property disputes and estate litigation where joint accounts and transfers are contested."
      }
    },
    {
      "@type": "Question",
      "name": "What is a constructive trust in Ontario law?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A constructive trust in Ontario is a remedial trust imposed by courts to prevent unjust enrichment. Under the Supreme Court of Canada's framework from Pettkus v Becker [1980] and refined in Kerr v Baranow [2011] 2 SCR 379, a constructive trust is awarded when: (1) the defendant was enriched; (2) the plaintiff suffered a corresponding deprivation; and (3) there is no juristic reason for the enrichment. A constructive trust remedy (rather than monetary unjust enrichment award) is available where there is a link between the plaintiff's contribution and the specific property, and where a monetary award would be insufficient. Constructive trusts are frequently litigated in common-law partner separations, business disputes, and family property cases."
      }
    },
    {
      "@type": "Question",
      "name": "What are a trustee's core duties in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "An Ontario trustee's core duties include: (1) duty of loyalty — act in beneficiaries' interests, avoid conflicts of interest, no self-dealing; (2) duty of prudence — invest as a prudent investor would, applying the Trustee Act s.27 prudent investor standard (diversification, risk-return balance); (3) duty to act personally — cannot delegate decision-making unless authorized; (4) duty of impartiality — balance interests of income and capital beneficiaries fairly; (5) duty to account — keep accurate records and provide accounts to beneficiaries; and (6) duty to follow the trust instrument. Breach of these duties makes the trustee personally liable to the trust estate."
      }
    },
    {
      "@type": "Question",
      "name": "What remedies are available for breach of trust in Ontario?",
        "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ontario breach of trust remedies include: (1) equitable compensation — restoring the trust estate to the position it would have been in but for the breach; (2) account of profits — stripping the trustee of profits made through breach of fiduciary duty; (3) constructive trust — imposed on specific property held by a wrongdoing trustee or third party; (4) tracing — following trust assets into the hands of recipients and recovering them, subject to the bona fide purchaser for value defence; and (5) personal liability — trustees are jointly and severally liable for co-trustees' breaches if they permitted or acquiesced in the breach. Limitation periods for breach of trust under the Limitations Act 2002 are subject to the discovery principle, though s.16 of the Limitations Act 2002 provides that there is no limitation period for a claim by a beneficiary to recover trust property from the trustee."
      }
    }
  ]
}`;

export default function OntarioTrustLawPage() {
  return (
    <>
      <Script id="ontario-trust-law-article-schema" type="application/ld+json">
        {articleSchema}
      </Script>
      <Script id="ontario-trust-law-faq-schema" type="application/ld+json">
        {faqSchema}
      </Script>

      <div className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-amber-400 text-slate-900 text-sm font-semibold px-4 py-1 rounded-full mb-4">
              Equity &amp; Trusts
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Ontario Trust Law Guide 2024
            </h1>
            <p className="text-xl text-slate-300 mb-6">
              Express trusts (three certainties), resulting trusts, constructive trusts and unjust enrichment, Pecore presumption, trustee duties under the Trustee Act, breach of trust remedies, and tracing — the complete guide for Ontario trust and estates lawyers.
            </p>
            <div className="flex gap-4 text-sm text-slate-400">
              <span>December 2024</span>
              <span>•</span>
              <span>13 min read</span>
              <span>•</span>
              <span>Equity &amp; Trusts</span>
            </div>
          </div>
        </section>

        <article className="py-12 px-6">
          <div className="max-w-4xl mx-auto prose prose-slate max-w-none">

            <h2>The Structure of Ontario Trust Law</h2>
            <p>
              Trust law in Ontario is a blend of common law equity and statute. The primary statutes are the <strong>Trustee Act</strong> (which governs trustee powers and duties), the <strong>Variation of Trusts Act</strong>, and the relevant provisions of the <strong>Succession Law Reform Act</strong> for testamentary trusts. The foundational equitable principles derive from English equity — Ontario courts regularly apply and adapt English trust law authorities.
            </p>
            <p>
              A trust is a relationship in which one person (the <strong>trustee</strong>) holds property for the benefit of another (the <strong>beneficiary</strong>). The person who creates the trust (the <strong>settlor</strong>) transfers property to the trustee with the intention that the trustee manage it for the beneficiaries. The legal title to trust property vests in the trustee; the beneficial interest is the beneficiary&apos;s.
            </p>

            <h2>Creating an Express Trust: The Three Certainties</h2>
            <p>
              An express trust is deliberately created by the settlor. The classic formulation from <em>Knight v Knight</em> (1840) requires three certainties:
            </p>

            <h3>1. Certainty of Intention</h3>
            <p>
              The settlor must manifest a clear intention to create a trust — to impose an obligation on the trustee to deal with property for the benefit of another. Precatory language — &quot;I wish,&quot; &quot;I hope,&quot; &quot;I request,&quot; or &quot;I desire&quot; — is generally insufficient to create a trust. Courts look at the substance of the arrangement, not merely the words used.
            </p>
            <p>
              The distinction between a trust and an outright gift with accompanying wishes is fact-specific. Where a transferee is subject to a binding legal obligation to deal with property for another&apos;s benefit, a trust is created. Where the transferee is merely subject to a moral expectation, no trust arises.
            </p>

            <h3>2. Certainty of Subject Matter</h3>
            <p>
              The trust property must be identified with sufficient certainty. A trust of &quot;some of my shares&quot; or &quot;the bulk of my residuary estate&quot; may fail for uncertainty of subject matter if the specific property cannot be identified. Where fungible property (money, shares in the same company) is held in a mixed pool, questions of certainty of subject matter arise — courts in Ontario have followed the English approach that homogeneous fungibles can form the subject matter of a trust if the proportion is identified.
            </p>

            <h3>3. Certainty of Objects (Beneficiaries)</h3>
            <p>
              The beneficiaries must be identifiable. The test differs for fixed and discretionary trusts:
            </p>
            <ul>
              <li><strong>Fixed trusts</strong>: Every beneficiary must be ascertainable — the complete list test</li>
              <li><strong>Discretionary trusts</strong>: The &quot;is or is not&quot; test from <em>McPhail v Doulton</em> [1971] AC 424 (adopted in Canada) — the trustee must be able to determine whether any given person is or is not within the class of potential beneficiaries. A class description that creates conceptual uncertainty (&quot;my friends,&quot; &quot;my employees&quot; in a context where &quot;employee&quot; is unclear) may fail</li>
            </ul>

            <h2>Resulting Trusts in Ontario</h2>
            <p>
              A resulting trust arises by operation of law, not by express declaration. Ontario recognizes two main categories:
            </p>

            <h3>Automatic Resulting Trusts</h3>
            <p>
              An automatic resulting trust arises when an express trust fails — either for uncertainty, illegality, or incompleteness. The property returns (&quot;results&quot;) to the settlor. If a testamentary trust fails, the property results back to the residuary estate or, failing that, passes on intestacy.
            </p>

            <h3>Presumed Resulting Trusts: The Pecore Principle</h3>
            <p>
              In <em>Pecore v Pecore</em> [2007] 1 SCR 795, the Supreme Court of Canada confirmed the presumption of resulting trust for gratuitous transfers between adults: when property is transferred to another adult for no consideration, equity presumes the transferee holds on resulting trust for the transferor, absent evidence of a gift intention.
            </p>
            <p>
              This presumption applies to joint bank accounts and investments — a common source of Ontario estate litigation. When a parent gratuitously adds an adult child to a bank account, the default presumption under <em>Pecore</em> is that the child holds the account on resulting trust for the parent&apos;s estate, not as a gift to survive jointly. The child can rebut the presumption by evidence that the parent intended to make a gift of the survivorship right.
            </p>
            <p>
              <strong>Practical implication</strong>: Adult children added to a parent&apos;s accounts for &quot;convenience&quot; purposes may not receive those assets beneficially on the parent&apos;s death — the resulting trust presumption applies unless the parent&apos;s gift intention is clearly established by evidence (account documentation, solicitor notes, communications). This is one of the most litigated areas in Ontario estate law.
            </p>
            <p>
              For transfers from a parent to a <em>minor</em> child, the opposite presumption — <strong>presumption of advancement</strong> (a gift) — applies. The parent is presumed to have intended the gift. This presumption is rebuttable by evidence of the parent&apos;s contrary intention.
            </p>

            <h2>Constructive Trusts and Unjust Enrichment</h2>
            <p>
              A constructive trust is a remedial device imposed by courts to prevent unjust enrichment — it arises by operation of law regardless of the parties&apos; intention. The unjust enrichment framework from <em>Pettkus v Becker</em> [1980] 2 SCR 834 and refined in <em>Kerr v Baranow</em> [2011] 2 SCR 379 requires three elements:
            </p>
            <ol>
              <li><strong>Enrichment of the defendant</strong></li>
              <li><strong>Corresponding deprivation of the plaintiff</strong></li>
              <li><strong>No juristic reason for the enrichment</strong> — the enrichment has no legal basis (not a gift, contract, or legal obligation)</li>
            </ol>

            <h3>Juristic Reason Analysis</h3>
            <p>
              The <em>Garland v Consumers&apos; Gas</em> [2004] 1 SCR 629 framework for juristic reason analysis involves a two-step process:
            </p>
            <ol>
              <li>The plaintiff establishes that the enrichment does not fall within established categories of juristic reason (contract, disposition of law, donative intent, other valid common law or equitable defences)</li>
              <li>The burden shifts to the defendant to demonstrate a residual juristic reason based on the parties&apos; reasonable expectations and public policy</li>
            </ol>

            <h3>Constructive Trust as Remedy</h3>
            <p>
              Once unjust enrichment is established, the court must determine the appropriate remedy. A <strong>monetary award</strong> is the default; a <strong>constructive trust</strong> over specific property is available where:
            </p>
            <ul>
              <li>There is a link between the plaintiff&apos;s contribution and the specific property claimed</li>
              <li>A monetary award would be insufficient — for example, if the defendant is insolvent or the property has special value</li>
            </ul>
            <p>
              In Ontario common-law partner separations, constructive trust claims over the family home are frequently advanced where one partner contributed to the property&apos;s acquisition, improvement, or mortgage reduction but is not on title. Unlike married spouses under the <em>Family Law Act</em>, common-law partners have no equalization entitlement — unjust enrichment and constructive trust are the primary equitable remedies available to unmarried partners with property contributions.
            </p>

            <h2>Trustee Duties Under the Ontario Trustee Act</h2>
            <p>
              The <strong>Trustee Act</strong> of Ontario governs trustee powers and duties. Key provisions:
            </p>

            <h3>Investment Duty: Prudent Investor Standard (s.27)</h3>
            <p>
              Under Trustee Act s.27, a trustee must exercise the care, skill, diligence, and judgment that a prudent investor would exercise in making investments. The prudent investor standard replaced the former legal list approach — trustees can invest in a diversified portfolio including equities, not just government bonds and mortgages. Trustees must consider:
            </p>
            <ul>
              <li>General economic conditions</li>
              <li>The possible effect of inflation</li>
              <li>The expected tax consequences</li>
              <li>The role each investment plays within the overall trust portfolio</li>
              <li>The expected total return from income and appreciation</li>
              <li>Needs for liquidity, regularity of income, and preservation and appreciation of capital</li>
              <li>An asset&apos;s special relationship or special value, if any, to the purposes of the trust or beneficiaries</li>
            </ul>

            <h3>Duty of Loyalty and No-Conflict Rule</h3>
            <p>
              A trustee must act in the beneficiaries&apos; interests, not their own. The no-profit rule prohibits trustees from making personal profits from the trust. The no-conflict rule prohibits trustees from placing themselves in a position where personal interests conflict with their duty to beneficiaries. These duties may be relaxed by express provisions in the trust instrument or by unanimous beneficiary consent.
            </p>

            <h3>Duty to Act Personally and Delegation</h3>
            <p>
              At common law, trustees could not delegate their duties — the delegatus non potest delegare principle. Ontario&apos;s Trustee Act now permits broader delegation of investment management functions to investment advisers, subject to the trustee maintaining oversight and review obligations. Trustees cannot delegate their core decision-making discretion.
            </p>

            <h3>Duty of Impartiality</h3>
            <p>
              Where a trust has income beneficiaries (entitled to income during the trust&apos;s term) and capital beneficiaries (entitled to the corpus on termination), the trustee must act impartially between them. An investment approach that maximizes income at the expense of capital appreciation (or vice versa) may constitute a breach of this duty.
            </p>

            <h2>Breach of Trust: Remedies in Ontario</h2>
            <p>
              When a trustee commits a breach of trust — by investing inappropriately, misappropriating assets, self-dealing, or failing to account — several remedies are available:
            </p>

            <h3>Equitable Compensation</h3>
            <p>
              The primary remedy is equitable compensation — restoring the trust estate to the position it would have been in but for the breach. Unlike contract damages, equitable compensation is not subject to remoteness limitations — the trustee is liable for all losses flowing from the breach, even if not reasonably foreseeable. The Supreme Court of Canada addressed equitable compensation principles in <em>Canson Enterprises v Boughton</em> [1991] 3 SCR 534.
            </p>

            <h3>Account of Profits</h3>
            <p>
              Where a trustee profits from a breach of fiduciary duty (self-dealing, appropriating business opportunities), the beneficiaries may elect an account of profits — stripping the trustee of all profits made through the breach, regardless of whether the trust suffered equivalent loss.
            </p>

            <h3>Tracing</h3>
            <p>
              Trust beneficiaries may trace trust property into the hands of the trustee or third parties who received it. Tracing at common law is limited to following identifiable property through unmixed funds. Equitable tracing permits following funds through mixed accounts using the rules in <em>Re Hallett</em> and <em>Re Oatway</em>. Third-party recipients are subject to the constructive trust remedy unless they are bona fide purchasers for value without notice of the trust.
            </p>

            <h3>Limitation Periods for Breach of Trust</h3>
            <p>
              Section 16 of the <em>Limitations Act 2002</em> provides that there is no limitation period for a claim by a beneficiary to recover trust property from a trustee who holds it. For other breach of trust claims (equitable compensation, account of profits), the basic 2-year limitation period from discovery applies, subject to the ultimate 15-year period under s.15. Fraudulent breach of trust may attract the discovery-based limitation without an ultimate cap.
            </p>

            <h2>Atticus for Ontario Trust and Estates Lawyers</h2>
            <p>
              Trust files — particularly contested resulting trust and constructive trust matters — generate complex documentation. Atticus is designed for Ontario solo and small law firms and manages client intake, matter management, trust accounting (Law Society By-Law 9 compliant for client trust funds), HST billing, and AI document analysis — at $149 CAD per lawyer per month. For trusts and estates lawyers, Atticus tracks limitation periods, manages multiple estate and trust matters simultaneously, and uses Canadian AI to extract key dates, parties, and provisions from trust instruments and estate documents.
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Manage Ontario Trust and Estate Files with Atticus</h3>
              <p className="text-slate-700 mb-4">
                Practice management, trust accounting, and AI document analysis for Ontario trusts and estates — at $149 CAD per lawyer per month.
              </p>
              <Link
                href="/sign-up"
                className="inline-block bg-slate-900 text-white font-semibold px-6 py-3 rounded-lg hover:bg-slate-700 transition-colors"
              >
                Start Free Trial
              </Link>
            </div>

            <h2>Frequently Asked Questions</h2>

            <h3>What are the three certainties required to create an express trust in Ontario?</h3>
            <p>
              An express trust requires certainty of intention (clear intent to impose a trust obligation, not mere precatory language), certainty of subject matter (identified trust property), and certainty of objects (identifiable beneficiaries — complete list for fixed trusts, &quot;is or is not&quot; test from McPhail v Doulton for discretionary trusts).
            </p>

            <h3>What is the Pecore presumption of resulting trust in Ontario?</h3>
            <p>
              From <em>Pecore v Pecore</em> [2007], when an adult gratuitously transfers property to another adult, equity presumes a resulting trust — the transferee holds for the transferor. This is rebuttable by gift intention evidence. The opposite presumption of advancement (gift) applies for parent-to-minor-child transfers.
            </p>

            <h3>What is a constructive trust in Ontario law?</h3>
            <p>
              A constructive trust is a remedial trust imposed to prevent unjust enrichment. Under <em>Kerr v Baranow</em> [2011], unjust enrichment requires: enrichment of the defendant, corresponding deprivation of the plaintiff, and no juristic reason. A constructive trust (rather than a monetary award) requires a link between the plaintiff&apos;s contribution and the specific property.
            </p>

            <h3>What are a trustee&apos;s core duties in Ontario?</h3>
            <p>
              Core trustee duties include the prudent investor standard (Trustee Act s.27), duty of loyalty (no self-dealing, no conflicts), duty to act personally (limited delegation), duty of impartiality between income and capital beneficiaries, and duty to account. Breach makes the trustee personally liable to the trust estate.
            </p>

            <h3>What remedies are available for breach of trust in Ontario?</h3>
            <p>
              Remedies include equitable compensation (restoring the trust estate), account of profits (stripping the trustee&apos;s gains), constructive trust over specific property, and tracing (following trust assets). Under Limitations Act 2002 s.16, there is no limitation period for a beneficiary&apos;s claim to recover trust property from a trustee.
            </p>

          </div>
        </article>

        <section className="py-12 px-6 border-t border-slate-100 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-lg font-semibold text-slate-900 mb-6">Related Ontario Law Resources</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { href: "/blog/ontario-wills-estates-procedure", label: "Ontario Wills and Estates Guide" },
                { href: "/blog/ontario-elder-law", label: "Ontario Elder Law Guide" },
                { href: "/blog/ontario-solicitor-client-privilege", label: "Solicitor-Client Privilege Guide" },
                { href: "/trust-accounting-ontario", label: "Ontario Trust Accounting" },
                { href: "/ontario-wills-estate-lawyer", label: "Atticus for Estate Lawyers" },
                { href: "/blog/ontario-corporate-tax", label: "Ontario Corporate Tax Guide" },
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
