import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ontario Non-Compete and Non-Solicitation Clauses: Enforceability and Limits",
  description:
    "Complete guide to Ontario non-competition and non-solicitation clauses in employment contracts and commercial agreements: enforceability, reasonableness test, ESA s.67.2 prohibition on post-employment non-competes (2021), sale of business exception, injunctive relief, and blue-pencilling.",
  openGraph: {
    title: "Ontario Non-Compete and Non-Solicitation Clauses: Enforceability and Limits",
    description:
      "Ontario non-compete law: ESA s.67.2 prohibition on employment non-competes (2021), reasonableness test, sale of business exception, blue-pencilling, and injunctive relief.",
    type: "article",
    url: "https://getatticus.ca/blog/ontario-non-compete",
    siteName: "Atticus",
  },
  alternates: { canonical: "https://getatticus.ca/blog/ontario-non-compete" },
};

const schemaJson = `{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Ontario Non-Compete and Non-Solicitation Clauses: Enforceability and Limits",
  "description": "Complete guide to Ontario non-competition and non-solicitation clauses: ESA s.67.2 post-employment non-compete prohibition, reasonableness test, sale of business exception, blue-pencilling, and injunctive relief.",
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
  "datePublished": "2025-01-22",
  "dateModified": "2025-01-22",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://getatticus.ca/blog/ontario-non-compete"
  }
}`;

const faqSchemaJson = `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Are non-compete clauses enforceable in Ontario employment contracts?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Since October 25, 2021, non-competition agreements in employment contracts are generally prohibited by ESA s.67.2, which was added by the Working for Workers Act, 2021. An employer cannot enter into an agreement with an employee that is, or includes, a non-compete agreement. The only exception for employment contracts is for executives who were in a 'C-suite' or equivalent position (president, chief executive officer, chief operating officer, chief financial officer, chief information officer, chief legal officer, chief human resources officer, or chief revenue officer), and only if the non-compete is entered into in connection with the sale of a business where the employee was the seller."
      }
    },
    {
      "@type": "Question",
      "name": "What is the sale of business exception to the Ontario non-compete prohibition?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ESA s.67.2(2) provides an exception where: (a) the non-compete is entered into between a seller and purchaser of a business (or the assets of a business) as part of the sale; and (b) following the sale, the seller becomes an employee of the purchaser. In this context, a non-compete can be agreed upon and will be assessed under the common law reasonableness test rather than being prohibited outright."
      }
    },
    {
      "@type": "Question",
      "name": "Are non-solicitation clauses still enforceable in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Non-solicitation clauses (restricting the employee from soliciting former clients or colleagues after leaving) are not prohibited by ESA s.67.2, which prohibits only non-compete clauses. Non-solicitation clauses remain enforceable at common law if they are reasonable in scope, duration, and geographic area, and protect a legitimate proprietary interest."
      }
    },
    {
      "@type": "Question",
      "name": "What is the common law reasonableness test for non-compete clauses?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "At common law, a restrictive covenant in restraint of trade (including non-competes in sale of business agreements and non-solicitation clauses in employment agreements) must: (1) protect a legitimate proprietary interest (confidential information, goodwill, trade secrets); (2) be reasonable as between the parties — limited in geographic scope, duration, and activity to what is reasonably necessary to protect the interest; and (3) not be contrary to the public interest. If any element fails, the clause is void. Courts apply a strict contra proferentem approach and will not rewrite unreasonable clauses."
      }
    },
    {
      "@type": "Question",
      "name": "Can Ontario courts blue-pencil an unenforceable non-compete?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Blue-pencilling — severing the unenforceable part while enforcing the remainder — is available in Ontario but applied narrowly. Courts will only blue-pencil where the offending words can be removed without altering the fundamental character of the agreement. Courts will not rewrite, read down, or otherwise modify an unreasonable restrictive covenant. In Shafron v KRG Insurance Brokers (Western) Inc 2009 SCC 6, the Supreme Court of Canada held that notional severance (reading down) is not available for unreasonable restrictive covenants in employment contracts."
      }
    }
  ]
}`;

export default function OntarioNonCompetePage() {
  return (
    <>
      <Script id="ontario-non-compete-schema" type="application/ld+json">
        {schemaJson}
      </Script>
      <Script id="ontario-non-compete-faq" type="application/ld+json">
        {faqSchemaJson}
      </Script>

      <div className="min-h-screen bg-white">
        <article className="max-w-3xl mx-auto px-6 py-16">
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-amber-100 text-amber-800 text-xs font-semibold px-3 py-1 rounded-full">
                Employment Law
              </span>
              <span className="text-slate-400 text-sm">January 2025 · 13 min read</span>
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Ontario Non-Compete and Non-Solicitation Clauses: Enforceability and Limits
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Ontario significantly changed the landscape for post-employment restrictions in 2021.
              Non-competition clauses in employment agreements are now generally prohibited.
              Non-solicitation clauses remain enforceable at common law if they are reasonable.
              Understanding the current law is critical for employers drafting employment
              agreements and for employees navigating post-employment restrictions.
            </p>
          </header>

          <div className="prose prose-slate max-w-none">
            <h2>1. The 2021 Prohibition on Employment Non-Compete Clauses: ESA s.67.2</h2>
            <p>
              The <em>Working for Workers Act, 2021</em>, S.O. 2021, c. 35 added section 67.2
              to the <em>Employment Standards Act, 2000</em> (&quot;ESA&quot;), effective October 25, 2021.
              The key provision reads:
            </p>
            <blockquote>
              <p>
                &quot;No employer shall enter into an employment contract or other agreement with an
                employee that is, or that includes, a non-compete agreement.&quot;
              </p>
            </blockquote>
            <p>
              A &quot;non-compete agreement&quot; is defined as an agreement, or part of an agreement,
              between an employer and an employee that prohibits the employee from engaging
              in any business, work, occupation, profession, project, or other activity that
              is in competition with the employer&apos;s business after the employment relationship ends.
            </p>
            <p>
              Contravention results in the non-compete provision being void. The rest of the
              employment agreement is not affected.
            </p>

            <h3>1.1 Scope of the Prohibition</h3>
            <p>
              The prohibition applies to:
            </p>
            <ul>
              <li>New employment contracts entered into on or after October 25, 2021;</li>
              <li>Employment contract amendments made on or after October 25, 2021 that add or modify a non-compete clause;</li>
              <li>Stand-alone non-compete agreements entered into between employer and employee on or after October 25, 2021.</li>
            </ul>
            <p>
              Non-compete clauses in employment agreements entered into <em>before</em> October 25, 2021
              continue to be assessed under the pre-existing common law reasonableness test.
            </p>

            <h2>2. The Executive and Sale of Business Exception: ESA s.67.2(2)</h2>
            <p>
              ESA s.67.2(2) provides two exceptions to the prohibition:
            </p>

            <h3>2.1 Sale of Business Exception</h3>
            <p>
              A non-compete is permitted where:
            </p>
            <ol>
              <li>
                It is entered into between a seller and purchaser of a business (or the assets
                of a business) as part of the sale; and
              </li>
              <li>
                Following the sale, the seller becomes an employee of the purchaser.
              </li>
            </ol>
            <p>
              This exception recognizes that in a commercial sale of business, a non-compete
              from the selling founder or key employee is often essential to the value of what
              the purchaser is buying. The non-compete in this context is assessed under the
              common law reasonableness test, not automatically prohibited.
            </p>

            <h3>2.2 Implication: C-Suite Employees</h3>
            <p>
              The Ontario government issued guidance suggesting that non-competes may be permissible
              for &quot;executives&quot; in the context of a sale of business — typically the president,
              CEO, COO, CFO, CIO, CLO, CHRO, and CRO. Outside the sale of business context,
              even executives are subject to the prohibition.
            </p>

            <h2>3. Non-Solicitation Clauses: Not Prohibited by ESA s.67.2</h2>
            <p>
              Non-solicitation clauses — restricting an employee from soliciting former clients
              or colleagues after leaving — are not prohibited by ESA s.67.2. The prohibition
              applies only to non-compete clauses (prohibiting competitive business activity).
            </p>
            <p>
              Non-solicitation clauses remain enforceable at common law if they satisfy the
              reasonableness test (see Section 4 below). Employers should ensure their post-employment
              restrictions are framed as non-solicitation clauses rather than non-compete clauses
              to avoid the ESA prohibition.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse border border-slate-200 text-sm">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-700">Clause Type</th>
                    <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-700">ESA Prohibition</th>
                    <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-700">Common Law Test Applies</th>
                    <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-700">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-200 px-4 py-3">Non-compete (employment)</td>
                    <td className="border border-slate-200 px-4 py-3">Yes (post Oct 25, 2021)</td>
                    <td className="border border-slate-200 px-4 py-3">No — void</td>
                    <td className="border border-slate-200 px-4 py-3">Sale of business exception only</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="border border-slate-200 px-4 py-3">Non-compete (sale of business)</td>
                    <td className="border border-slate-200 px-4 py-3">No — exception applies</td>
                    <td className="border border-slate-200 px-4 py-3">Yes</td>
                    <td className="border border-slate-200 px-4 py-3">Reasonableness test at common law</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 px-4 py-3">Non-solicitation (clients)</td>
                    <td className="border border-slate-200 px-4 py-3">No</td>
                    <td className="border border-slate-200 px-4 py-3">Yes</td>
                    <td className="border border-slate-200 px-4 py-3">Must be reasonable in scope, duration, geography</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="border border-slate-200 px-4 py-3">Non-solicitation (employees)</td>
                    <td className="border border-slate-200 px-4 py-3">No</td>
                    <td className="border border-slate-200 px-4 py-3">Yes</td>
                    <td className="border border-slate-200 px-4 py-3">Must be reasonable; broadly drawn clauses often fail</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 px-4 py-3">Confidentiality clause</td>
                    <td className="border border-slate-200 px-4 py-3">No</td>
                    <td className="border border-slate-200 px-4 py-3">Yes</td>
                    <td className="border border-slate-200 px-4 py-3">Can protect trade secrets; no duration cap if tied to confidential information</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>4. The Common Law Reasonableness Test for Restrictive Covenants</h2>
            <p>
              For restrictive covenants that are not prohibited by ESA s.67.2 (e.g., non-solicitation
              clauses, non-competes in sale of business agreements, pre-2021 employment non-competes),
              the common law reasonableness test applies. From <em>Elsley v J.G. Collins Insurance
              Agencies Ltd</em> [1978] 2 SCR 916 and subsequent Ontario jurisprudence:
            </p>
            <ol>
              <li>
                <strong>Legitimate proprietary interest</strong>: The employer must have a genuine
                proprietary interest that requires protection — trade secrets, confidential information,
                or demonstrably close client relationships (not merely an employer preference to
                prevent competition).
              </li>
              <li>
                <strong>Reasonable as between the parties</strong>: The restriction must be
                limited in:
                <ul>
                  <li><strong>Duration</strong>: Courts have enforced 6–24 months; longer periods
                  require compelling justification. Indefinite non-competes are void.</li>
                  <li><strong>Geographic scope</strong>: Limited to the area where the employee
                  actually competed or had client relationships. Worldwide or overly broad geographic
                  clauses are often struck down.</li>
                  <li><strong>Activity</strong>: Limited to activities actually in competition
                  with the employer, not all business activities.</li>
                </ul>
              </li>
              <li>
                <strong>Not contrary to the public interest</strong>: Restrictions that unduly
                limit competition in a market or that prevent employees from earning a living
                in their field may be void on public policy grounds.
              </li>
            </ol>

            <h2>5. Shafron v KRG Insurance: The Blue-Pencil Limit</h2>
            <p>
              In <em>Shafron v KRG Insurance Brokers (Western) Inc</em> 2009 SCC 6, the Supreme
              Court of Canada held that &quot;notional severance&quot; — reading down or rewriting
              an unreasonable restrictive covenant to make it reasonable — is not available
              for employment restrictive covenants. The Court distinguished:
            </p>
            <ul>
              <li>
                <strong>True blue-pencil severance</strong>: Striking out a clearly severable,
                unreasonable portion, leaving the remainder unchanged and enforceable. Available,
                but only where the contract still makes sense without the deleted words.
              </li>
              <li>
                <strong>Notional severance / reading down</strong>: Rewriting, modifying, or
                reading down the clause to make it reasonable. Not available for employment
                restrictive covenants — the employer wrote the clause and should bear the
                consequences of drafting it too broadly.
              </li>
            </ul>
            <p>
              The practical consequence: an overly broad non-solicitation clause is entirely void,
              not merely reduced to what a court considers reasonable. Counsel must draft carefully.
            </p>

            <h2>6. Confidentiality Clauses and Implied Obligations</h2>
            <p>
              Even without an express restrictive covenant, employees owe implied obligations
              to their employer under the duty of good faith and fidelity:
            </p>
            <ul>
              <li>
                <strong>During employment</strong>: An employee may not compete with the employer,
                solicit clients, or misuse confidential information while employed.
              </li>
              <li>
                <strong>After employment</strong>: The implied duty does not generally extend
                to post-employment competition. However, an employee may not misuse or disclose
                confidential information that rises to the level of a trade secret.
              </li>
            </ul>
            <p>
              Well-drafted confidentiality clauses remain highly effective post-employment tools,
              particularly for protecting true trade secrets, pricing information, and proprietary
              client data. A confidentiality clause is not a &quot;non-compete agreement&quot; within
              the ESA s.67.2 prohibition.
            </p>

            <h2>7. Injunctive Relief for Breach</h2>
            <p>
              Where an employee breaches an enforceable restrictive covenant, the employer&apos;s
              primary remedy is often injunctive relief to stop the competitive activity or
              solicitation. To obtain an interlocutory injunction (pending trial), the employer must satisfy the
              <em>RJR-MacDonald Inc v Canada</em> [1994] 1 SCR 311 test:
            </p>
            <ol>
              <li>
                <strong>Serious question to be tried</strong>: The restrictive covenant is prima
                facie enforceable and the breach is not clearly without merit.
              </li>
              <li>
                <strong>Irreparable harm</strong>: The harm from the breach cannot be adequately
                compensated in damages — loss of client relationships, disclosure of trade secrets,
                and the difficulty of quantifying ongoing damage often satisfy this requirement.
              </li>
              <li>
                <strong>Balance of convenience</strong>: The harm to the plaintiff from refusing
                the injunction outweighs the harm to the defendant from granting it.
              </li>
            </ol>
            <p>
              Courts move quickly on injunction motions in restrictive covenant cases —
              the employer must act promptly after discovering the breach.
            </p>

            <h2>8. Pre-2021 Non-Compete Clauses</h2>
            <p>
              Non-compete clauses in employment agreements entered into before October 25, 2021
              are not void under ESA s.67.2 — they are assessed under the common law reasonableness
              test. However, given that courts already applied the reasonableness test strictly
              and rarely enforced employment non-competes, and that the ESA prohibition reflects
              public policy against employment non-competes, courts may apply heightened scrutiny
              to pre-2021 clauses as well.
            </p>

            <h2>9. Non-Competes in Commercial Agreements</h2>
            <p>
              Non-compete clauses in purely commercial agreements — between businesses, in
              franchise agreements, shareholder agreements, or partnership agreements — are not
              subject to the ESA s.67.2 prohibition. They are assessed under the common law
              reasonableness test applicable to parties of equal bargaining power, which is
              less strict than the employment context. Courts are more willing to enforce
              commercial non-competes where both parties had legal advice and negotiated at arm&apos;s length.
            </p>

            <h2>10. Limitations Act 2002</h2>
            <p>
              Claims for breach of a restrictive covenant (damages or injunction) are subject
              to the general two-year limitation period under the <em>Limitations Act, 2002</em>,
              running from the date the breach was discovered. Where the breach is continuing
              (ongoing competitive activity), the limitation period runs from each act of breach.
              Injunctive relief may be sought while the breach is ongoing without the two-year
              period barring the claim.
            </p>

            <h2>Frequently Asked Questions</h2>

            <h3>Are non-compete clauses enforceable in Ontario employment contracts?</h3>
            <p>
              Since October 25, 2021, non-competition clauses in employment agreements are
              generally void under ESA s.67.2. The prohibition applies to employment contracts
              entered into (or amended) on or after that date. The only exception is for
              the sale of a business where the seller becomes an employee of the purchaser.
              Pre-2021 employment non-competes are assessed under the common law reasonableness test.
            </p>

            <h3>What is the sale of business exception to the Ontario non-compete prohibition?</h3>
            <p>
              Under ESA s.67.2(2), a non-compete is permitted where it is entered into between
              a seller and purchaser of a business (or business assets) as part of the sale,
              and following the sale the seller becomes an employee of the purchaser. Such clauses
              are assessed under the common law reasonableness test.
            </p>

            <h3>Are non-solicitation clauses still enforceable in Ontario?</h3>
            <p>
              Yes. Non-solicitation clauses (restricting solicitation of former clients or colleagues)
              are not prohibited by ESA s.67.2. They remain enforceable at common law if they
              are reasonable in scope, duration, and geographic area, and protect a legitimate
              proprietary interest.
            </p>

            <h3>What is the common law reasonableness test for non-compete clauses?</h3>
            <p>
              The clause must: (1) protect a legitimate proprietary interest (trade secrets,
              confidential information, goodwill); (2) be reasonable as between the parties
              — limited in duration, geographic scope, and activity; and (3) not be contrary
              to the public interest. An overly broad clause is entirely void — courts will
              not rewrite it (Shafron v KRG Insurance 2009 SCC 6).
            </p>

            <h3>Can Ontario courts blue-pencil an unenforceable non-compete?</h3>
            <p>
              True blue-pencil severance (deleting clearly severable offending words) is available
              but narrow. &quot;Notional severance&quot; — reading down or rewriting an unreasonable clause —
              is not available in the employment context after <em>Shafron v KRG Insurance</em>
              2009 SCC 6.
            </p>
          </div>

          <div className="mt-16 pt-8 border-t border-slate-200">
            <p className="text-sm text-slate-500 mb-8">
              This article is for general informational purposes only and does not constitute legal advice.
              Non-compete and non-solicitation clauses involve complex factual and legal analysis.
              Consult qualified Ontario employment counsel for advice on your specific situation.
            </p>
            <div className="bg-amber-50 rounded-xl p-6 border border-amber-100">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Managing Ontario Employment Law Matters with Atticus
              </h3>
              <p className="text-slate-600 text-sm mb-4">
                Atticus helps Ontario employment lawyers track limitation periods, manage restrictive
                covenant matters, and organize employment agreements — with automatic extraction of
                key dates and terms from contracts and correspondence. Built specifically for Ontario law firms.
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
                { href: "/blog/ontario-wrongful-dismissal", label: "Ontario Wrongful Dismissal" },
                { href: "/blog/ontario-constructive-dismissal", label: "Ontario Constructive Dismissal" },
                { href: "/blog/ontario-employment-contract", label: "Ontario Employment Contracts" },
                { href: "/blog/ontario-employment-standards-act", label: "Ontario Employment Standards Act" },
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
