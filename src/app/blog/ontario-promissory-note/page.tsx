import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ontario Promissory Notes: Requirements, Holder in Due Course, and Limitation Periods",
  description:
    "Complete guide to promissory notes in Ontario: requirements under the Bills of Exchange Act, demand vs fixed term notes, holder in due course, defences, interest, default, enforcement, and the Limitations Act 2002.",
  openGraph: {
    title: "Ontario Promissory Notes: Requirements, Holder in Due Course, and Limitation Periods",
    description:
      "Ontario promissory notes: Bills of Exchange Act requirements, demand vs fixed term, holder in due course protections, defences, and Limitations Act 2002 limitation periods.",
    type: "article",
    url: "https://getatticus.ca/blog/ontario-promissory-note",
    siteName: "Atticus",
  },
  alternates: { canonical: "https://getatticus.ca/blog/ontario-promissory-note" },
};

const schemaJson = `{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Ontario Promissory Notes: Requirements, Holder in Due Course, and Limitation Periods",
  "description": "Complete guide to Ontario promissory notes: Bills of Exchange Act requirements, demand vs fixed term, holder in due course, defences, and Limitations Act 2002.",
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
  "datePublished": "2025-02-15",
  "dateModified": "2025-02-15",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://getatticus.ca/blog/ontario-promissory-note"
  }
}`;

const faqSchemaJson = `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What are the requirements for a valid promissory note in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Under the Bills of Exchange Act, R.S.C. 1985, c. B-4, a valid promissory note must: (1) be an unconditional promise in writing; (2) be made by one person (the maker) to another person (the payee) or to bearer; (3) be signed by the maker; (4) contain a promise to pay a sum certain in money; (5) be payable on demand or at a fixed or determinable future time. A document that fails to meet these requirements is not a negotiable instrument and does not carry the special protections of the Bills of Exchange Act."
      }
    },
    {
      "@type": "Question",
      "name": "What is the limitation period for a promissory note in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The general two-year limitation period under the Limitations Act, 2002 applies to claims on promissory notes. For a demand note, the limitation period begins on the date demand is made — the cause of action does not arise until demand is made. For a fixed term note, the limitation period begins when the note matures and is not paid. Making a partial payment or providing a written acknowledgment of the debt resets the limitation period."
      }
    },
    {
      "@type": "Question",
      "name": "What is a holder in due course for a promissory note?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A holder in due course (HDC) is a person who takes a promissory note that is complete and regular on its face, for value, before maturity, without notice of any dishonour, and in good faith — with no notice of any defect in the title of the person who negotiated it. A HDC takes the note free of most personal defences that could be raised against the original payee (such as failure of consideration), though 'real' defences such as forgery, fraud in the factum, incapacity, and illegality remain available."
      }
    },
    {
      "@type": "Question",
      "name": "Is a promissory note enforceable without consideration in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A promissory note that is given for past consideration or as a gift may not be enforceable by the original payee, who must prove valuable consideration under contract law. However, a holder in due course takes the note free of the defence of failure or absence of consideration and can enforce the note even if the original transaction lacked consideration. This is one of the key advantages of negotiable instruments under the Bills of Exchange Act."
      }
    }
  ]
}`;

export default function OntarioPromissoryNotePage() {
  return (
    <>
      <Script id="ontario-promissory-note-schema" type="application/ld+json">
        {schemaJson}
      </Script>
      <Script id="ontario-promissory-note-faq" type="application/ld+json">
        {faqSchemaJson}
      </Script>

      <div className="min-h-screen bg-white">
        <article className="max-w-3xl mx-auto px-6 py-16">
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-amber-100 text-amber-800 text-xs font-semibold px-3 py-1 rounded-full">
                Commercial Law
              </span>
              <span className="text-slate-400 text-sm">February 2025 · 12 min read</span>
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Ontario Promissory Notes: Requirements, Holder in Due Course, and Limitation Periods
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Promissory notes are commonly used in Ontario for shareholder loans, vendor take-back
              financing, real estate transactions, and private lending. Understanding the requirements,
              the holder in due course rules, available defences, and the limitation periods is
              essential for commercial lawyers and litigators.
            </p>
          </header>

          <div className="prose prose-slate max-w-none">
            <h2>1. Statutory Framework: Bills of Exchange Act</h2>
            <p>
              Promissory notes in Canada are governed by the federal <em>Bills of Exchange Act</em>,
              R.S.C. 1985, c. B-4 (&quot;BEA&quot;). The BEA is federal legislation — it applies uniformly
              across Canada, including in Ontario. Provincial legislation (including Ontario common law)
              applies to aspects of promissory note transactions not covered by the BEA.
            </p>

            <h2>2. Requirements for a Valid Promissory Note</h2>
            <p>
              Under BEA s.176(1), a promissory note is an unconditional promise in writing made
              by one person (the maker) to another person (the payee), or to bearer, signed by
              the maker, engaging to pay on demand or at a fixed or determinable future time,
              a sum certain in money to, or to the order of, a specified person or to bearer.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse border border-slate-200 text-sm">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-700">Requirement</th>
                    <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-700">Details</th>
                    <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-700">Failure Consequences</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-200 px-4 py-3">Unconditional promise in writing</td>
                    <td className="border border-slate-200 px-4 py-3">No contingencies; &quot;I promise to pay&quot; language required</td>
                    <td className="border border-slate-200 px-4 py-3">Not a negotiable instrument; enforceable as contract only</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="border border-slate-200 px-4 py-3">Signed by maker</td>
                    <td className="border border-slate-200 px-4 py-3">Signature of promisor (maker) required</td>
                    <td className="border border-slate-200 px-4 py-3">No binding obligation; unsigned note is unenforceable as a note</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 px-4 py-3">Sum certain in money</td>
                    <td className="border border-slate-200 px-4 py-3">Fixed amount in Canadian or specified foreign currency</td>
                    <td className="border border-slate-200 px-4 py-3">Note void if amount uncertain or non-monetary</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="border border-slate-200 px-4 py-3">Payable on demand or fixed/determinable date</td>
                    <td className="border border-slate-200 px-4 py-3">Demand note or note with specified maturity date</td>
                    <td className="border border-slate-200 px-4 py-3">If no date stated, treated as demand note</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 px-4 py-3">Payee identified</td>
                    <td className="border border-slate-200 px-4 py-3">Named payee or &quot;bearer&quot; note</td>
                    <td className="border border-slate-200 px-4 py-3">Defective but may be enforceable by the holder as a bearer note</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>3. Demand Notes vs Fixed Term Notes</h2>

            <h3>3.1 Demand Promissory Notes</h3>
            <p>
              A demand note is payable immediately on demand — the maker promises to pay when
              the payee demands repayment. The payee can make demand at any time after the
              note is executed. Key characteristics:
            </p>
            <ul>
              <li>No maturity date; payable immediately upon demand;</li>
              <li>The cause of action does not accrue until demand is made — the limitation period begins to run on the date of demand;</li>
              <li>Common in shareholder loan arrangements, director loan documentation, and informal lending.</li>
            </ul>

            <h3>3.2 Fixed Term Promissory Notes</h3>
            <p>
              A fixed term note specifies the maturity date on which the principal (and any
              accrued interest) is due and payable. Key characteristics:
            </p>
            <ul>
              <li>Principal and interest are due on the specified maturity date;</li>
              <li>The limitation period begins on the maturity date if not paid;</li>
              <li>May include acceleration clauses (the full amount becomes due on default of any instalment payment);</li>
              <li>Common in vendor take-back mortgages, business acquisition financing, and real estate transactions.</li>
            </ul>

            <h2>4. Interest Provisions</h2>
            <p>
              Promissory notes may specify an interest rate. Provisions typically include:
            </p>
            <ul>
              <li>
                <strong>Fixed interest rate</strong>: A stated percentage per annum on the
                principal balance, accruing from the date of the note or from the date of
                advance;
              </li>
              <li>
                <strong>Prime rate or floating rate</strong>: A rate tied to the Bank of Canada
                overnight rate or a chartered bank&apos;s prime lending rate, which fluctuates
                over the term;
              </li>
              <li>
                <strong>Default interest</strong>: A higher rate applicable after default —
                enforceable if not unconscionable;
              </li>
              <li>
                <strong>Criminal rate of interest (ITA s.347)</strong>: Interest exceeding
                60% per annum (effective annual rate) is a criminal offence under the
                <em>Criminal Code</em> s.347 and renders the interest provision void.
              </li>
            </ul>

            <h2>5. Holder in Due Course</h2>
            <p>
              The holder in due course (&quot;HDC&quot;) doctrine is one of the most important features
              of negotiable instruments. An HDC is a holder who takes a note:
            </p>
            <ol>
              <li>That is complete and regular on its face;</li>
              <li>Before it is overdue (i.e., before maturity);</li>
              <li>Without notice that it has been previously dishonoured;</li>
              <li>In good faith and for value; and</li>
              <li>Without notice of any defect in the title of the person negotiating it.</li>
            </ol>
            <p>
              An HDC takes the note free of <em>personal defences</em> that the maker could
              raise against the original payee. This means the maker cannot refuse to pay
              the HDC even if the maker has a valid defence against the original payee.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse border border-slate-200 text-sm">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-700">Defence Type</th>
                    <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-700">Examples</th>
                    <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-700">Available Against HDC?</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-200 px-4 py-3">Personal (defects in transaction)</td>
                    <td className="border border-slate-200 px-4 py-3">Failure of consideration, set-off, breach of contract, payment</td>
                    <td className="border border-slate-200 px-4 py-3">No — HDC takes free of personal defences</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="border border-slate-200 px-4 py-3">Real (absolute) defences</td>
                    <td className="border border-slate-200 px-4 py-3">Forgery, fraud in the factum, incapacity (minors), illegality, material alteration</td>
                    <td className="border border-slate-200 px-4 py-3">Yes — real defences are available against all holders including HDC</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>6. Negotiation and Endorsement</h2>
            <p>
              A promissory note is transferred (negotiated) by:
            </p>
            <ul>
              <li>
                <strong>Endorsement and delivery</strong>: For a note payable to order (e.g.,
                &quot;pay to the order of John Smith&quot;), the payee must endorse the note (sign the
                back) and deliver it to the transferee. The transferee then becomes the holder.
              </li>
              <li>
                <strong>Delivery only</strong>: For a bearer note, delivery alone is sufficient
                to negotiate the note.
              </li>
            </ul>
            <p>
              Endorsement types include:
            </p>
            <ul>
              <li><strong>Blank endorsement</strong>: Endorser signs without specifying a transferee — converts the note to bearer form;</li>
              <li><strong>Special endorsement</strong>: Specifies the person to whom the note is negotiated;</li>
              <li><strong>Restrictive endorsement</strong>: Limits negotiability (e.g., &quot;for deposit only&quot;) — the note can no longer be further negotiated.</li>
            </ul>

            <h2>7. Consumer Protection and Promissory Notes</h2>
            <p>
              Where a promissory note is taken in connection with a consumer transaction governed
              by the <em>Consumer Protection Act, 2002</em> (Ontario), restrictions apply:
            </p>
            <ul>
              <li>
                BEA s.189.2 restricts the holder in due course rules for consumer bills and
                consumer notes — a holder of a consumer note takes it subject to any defence
                or right of set-off that the maker has against the original supplier;
              </li>
              <li>
                Consumer transactions are defined under the CPA and include purchases of goods
                and services by individuals for personal, family, or household purposes.
              </li>
            </ul>

            <h2>8. Limitation Periods for Promissory Notes in Ontario</h2>
            <p>
              The <em>Limitations Act, 2002</em> governs limitation periods for claims on
              promissory notes in Ontario:
            </p>
            <ul>
              <li>
                <strong>Demand notes</strong>: The cause of action accrues on the date demand
                is made. The two-year limitation period runs from the date of demand. If no
                demand is ever made, the claim does not accrue (though the ultimate 15-year
                limitation period from the date the note was executed may eventually apply).
              </li>
              <li>
                <strong>Fixed term notes</strong>: The cause of action accrues on the maturity
                date (or upon acceleration after default, if an acceleration clause applies).
                The two-year period runs from that date.
              </li>
              <li>
                <strong>Acknowledgment and partial payment</strong>: A written acknowledgment
                of the debt (signed by the debtor) or a partial payment resets the limitation
                period under the <em>Limitations Act, 2002</em> ss.13-14. This is particularly
                important for demand notes where the creditor has not called the loan.
              </li>
            </ul>

            <h2>9. Default and Enforcement</h2>
            <p>
              On default (failure to pay at maturity or on demand), the holder may:
            </p>
            <ul>
              <li>
                Commence a civil action on the note in the Ontario Superior Court of Justice
                or Small Claims Court (for amounts up to $35,000). The note itself is typically
                sufficient evidence of the debt;
              </li>
              <li>
                Seek summary judgment — a claim on a promissory note is a typical candidate
                for summary judgment under Rule 20 of the Ontario Rules of Civil Procedure,
                as the defendant&apos;s available defences are limited;
              </li>
              <li>
                Enforce any security pledged in connection with the note (e.g., a charge on
                real property, PPSA security interest);
              </li>
              <li>
                Sue endorsers and guarantors jointly and severally in the same action.
              </li>
            </ul>

            <h2>10. Shareholder Loans and Promissory Notes</h2>
            <p>
              Ontario corporations commonly use promissory notes to document shareholder loans —
              amounts loaned by a shareholder to the corporation or by the corporation to a
              shareholder. Key considerations:
            </p>
            <ul>
              <li>
                <strong>Corporation borrowing from shareholder</strong>: A demand promissory
                note documents the shareholder loan. The limitation period begins when demand
                is made. Shareholder loan notes are often interest-free and repayable on demand —
                counsel should advise on the income tax implications under ITA s.80.4;
              </li>
              <li>
                <strong>Corporation lending to shareholder</strong>: A shareholder who borrows
                from the corporation and takes more than one year to repay may have the loan
                included in income under ITA s.15(2). Demand notes are commonly used to
                document these loans.
              </li>
            </ul>

            <h2>Frequently Asked Questions</h2>

            <h3>What are the requirements for a valid promissory note in Ontario?</h3>
            <p>
              Under the Bills of Exchange Act, a valid promissory note must be: (1) an unconditional
              promise in writing; (2) signed by the maker; (3) to pay a sum certain in money;
              (4) to a named payee or bearer; (5) on demand or at a fixed or determinable future time.
              A document failing any of these requirements is not a negotiable instrument.
            </p>

            <h3>What is the limitation period for a promissory note in Ontario?</h3>
            <p>
              The two-year limitation period under the Limitations Act, 2002 applies. For demand
              notes, the period runs from the date demand is made. For fixed term notes, it runs
              from the maturity date. A written acknowledgment or partial payment resets the
              limitation period.
            </p>

            <h3>What is a holder in due course for a promissory note?</h3>
            <p>
              An HDC is a holder who takes the note before maturity, for value, in good faith,
              without notice of defects or dishonour. An HDC takes the note free of personal
              defences (failure of consideration, set-off) but not real defences (forgery, fraud
              in the factum, incapacity, illegality).
            </p>

            <h3>Is a promissory note enforceable without consideration in Ontario?</h3>
            <p>
              Against the original payee, a note without consideration may fail. However, a
              holder in due course takes the note free of the defence of failure or absence of
              consideration — the HDC can enforce the note regardless. This is a key advantage
              of transferring notes to HDC status.
            </p>
          </div>

          <div className="mt-16 pt-8 border-t border-slate-200">
            <p className="text-sm text-slate-500 mb-8">
              This article is for general informational purposes only and does not constitute legal advice.
              Promissory note transactions involve legal, tax, and financial considerations.
              Consult qualified Ontario commercial and tax counsel for advice on your specific situation.
            </p>
            <div className="bg-amber-50 rounded-xl p-6 border border-amber-100">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Managing Ontario Commercial Matters with Atticus
              </h3>
              <p className="text-slate-600 text-sm mb-4">
                Atticus helps Ontario commercial lawyers track limitation periods, manage lending
                matters, and organize documents — with automatic extraction of maturity dates,
                interest rates, and payment terms from promissory notes and loan agreements.
                Built specifically for Ontario law firms.
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
                { href: "/blog/ontario-personal-property-security", label: "Ontario Personal Property Security (PPSA)" },
                { href: "/blog/ontario-debtor-creditor-law", label: "Ontario Debtor-Creditor Law" },
                { href: "/blog/ontario-mortgage-law", label: "Ontario Mortgage Law" },
                { href: "/blog/ontario-contract-formation", label: "Ontario Contract Formation" },
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
