import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ontario Banking Law Guide 2024: Bank Act, Lending Agreements, Security, and OSFI Regulation",
  description:
    "Ontario banking law guide: federal Bank Act jurisdiction, lending agreements (term loans, revolving credit, syndicated facilities), security documentation (general security agreements, mortgage debentures), PPSA priority, OSFI regulation, banker-customer relationship, and privacy obligations under PIPEDA.",
  openGraph: {
    title: "Ontario Banking Law Guide 2024: Bank Act, Lending, Security, and OSFI",
    description:
      "Complete guide to Ontario banking law — federal Bank Act jurisdiction, lending structures, security documentation, PPSA priority, banker-customer fiduciary obligations, OSFI prudential regulation, and privacy under PIPEDA.",
    url: "https://getatticus.ca/blog/ontario-banking-law",
    siteName: "Atticus",
    type: "article",
  },
  alternates: { canonical: "https://getatticus.ca/blog/ontario-banking-law" },
};

const schemaJson = `{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Ontario Banking Law Guide 2024: Bank Act, Lending Agreements, Security, and OSFI Regulation",
  "description": "Ontario banking law: federal Bank Act jurisdiction, lending agreements (term loans, revolving credit, syndicated facilities), security documentation, PPSA priority, OSFI regulation, banker-customer relationship, and privacy under PIPEDA.",
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
  "url": "https://getatticus.ca/blog/ontario-banking-law"
}`;

const faqSchemaJson = `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Who regulates banks in Canada and do provincial laws apply to federally chartered banks?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Federally chartered banks in Canada are regulated by the federal Office of the Superintendent of Financial Institutions (OSFI) under the Bank Act, S.C. 1991, c. 46. The Constitution Act, 1867 gives Parliament exclusive jurisdiction over banking under s.91(15). Provincial laws of general application may apply to banks (for example, provincial limitation periods), but provincial laws that specifically target banking operations or are in conflict with the Bank Act are inapplicable to the extent of the conflict. The Supreme Court of Canada in Canadian Western Bank v. Alberta, 2007 SCC 22 confirmed that OSFI's prudential regulation of banks is beyond provincial jurisdiction."
      }
    },
    {
      "@type": "Question",
      "name": "What security does a bank typically take in a commercial lending transaction in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In a typical Ontario commercial lending transaction, a bank takes a combination of: (1) a general security agreement (GSA) creating a security interest in all present and after-acquired personal property of the borrower, perfected by registration in the PPSR; (2) a mortgage or charge over real property; (3) a mortgage debenture (for corporate borrowers) creating a fixed and floating charge over all assets; (4) personal guarantees from principals; and (5) assignments of key contracts, insurance policies, and material agreements. The priority of the bank's security interest in personal property is governed by the Ontario PPSA; priority over real property is governed by the Land Titles Act and Registry Act."
      }
    },
    {
      "@type": "Question",
      "name": "What are a bank's fiduciary obligations to its customers in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A bank does not automatically owe fiduciary duties to its customers merely by virtue of the banker-customer relationship. The Supreme Court in Hodgkinson v. Simms, [1994] 3 SCR 377 confirmed that a fiduciary relationship requires that one party have a reasonable expectation that the other will act in their best interest. For banks, a fiduciary duty may arise where: the bank has undertaken to act on the customer's behalf; the customer has placed trust and confidence in the bank's advice; the customer is in a position of vulnerability; and the bank is in a conflict of interest. Banks advising customers on investment products or providing financial planning services may owe fiduciary obligations. Banks enforcing security or acting as lenders at arm's length generally do not."
      }
    }
  ]
}`;

export default function OntarioBankingLawPage() {
  return (
    <>
      <Script id="ontario-banking-law-schema" type="application/ld+json">
        {schemaJson}
      </Script>
      <Script id="ontario-banking-law-faq-schema" type="application/ld+json">
        {faqSchemaJson}
      </Script>

      <div className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-amber-400 text-slate-900 text-sm font-semibold px-3 py-1 rounded-full">
                Commercial Law
              </span>
              <span className="text-slate-400 text-sm">December 2024 &middot; 13 min read</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Ontario Banking Law Guide 2024: Bank Act, Lending Agreements, Security, and OSFI Regulation
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl">
              Federal Bank Act jurisdiction, lending agreement structures (term loans, revolving
              credit, syndicated facilities), security documentation (GSA, mortgage debenture,
              real property charges), PPSA priority, OSFI prudential regulation, banker-customer
              relationship, and privacy obligations under PIPEDA.
            </p>
          </div>
        </section>

        <article className="py-16 px-6">
          <div className="max-w-3xl mx-auto prose prose-slate prose-lg">

            <h2>Constitutional Framework: Federal Jurisdiction Over Banking</h2>
            <p>
              Banking in Canada is a federal matter. Section 91(15) of the <em>Constitution Act,
              1867</em> gives Parliament exclusive legislative authority over &quot;Banking, Incorporation
              of Banks, and the Issue of Paper Money.&quot; This means that federally chartered banks —
              operating under the <em>Bank Act</em>, S.C. 1991, c. 46 — are subject to federal
              regulation and are generally immune from provincial laws that specifically target
              or restrict banking operations.
            </p>
            <p>
              Provincial laws of general application (such as the Ontario PPSA for security
              interests, the <em>Limitations Act, 2002</em> for limitation periods, and the
              <em>Land Titles Act</em> for real property security) do apply to banks to the
              extent they do not conflict with the Bank Act or trench on the core of federal
              banking jurisdiction.
            </p>
            <p>
              The Supreme Court of Canada in <em>Canadian Western Bank v. Alberta</em>, 2007
              SCC 22 reaffirmed the paramountcy principle and confirmed that OSFI&apos;s prudential
              regulation of banks cannot be replicated by provincial law.
            </p>

            <h2>The Office of the Superintendent of Financial Institutions (OSFI)</h2>
            <p>
              OSFI is the primary federal prudential regulator of banks, trust companies, insurance
              companies, and federally regulated pension plans. OSFI&apos;s mandate under the{" "}
              <em>Office of the Superintendent of Financial Institutions Act</em>, R.S.C. 1985,
              c. O-2.7 is to supervise financial institutions to determine whether they are in
              sound financial condition and complying with applicable legislation and supervisory
              requirements.
            </p>
            <p>
              OSFI issues guidelines that establish prudential expectations for banks, including:
              Capital Adequacy Requirements (CAR); Liquidity Adequacy Requirements (LAR);
              guidelines on risk management and corporate governance; and guidelines on
              technology and cyber risk. OSFI guidelines are not technically law but are treated
              as effectively binding by regulated institutions given OSFI&apos;s supervisory authority.
            </p>

            <h2>Banker-Customer Relationship</h2>
            <p>
              The banker-customer relationship is primarily contractual. The deposit agreement
              between the bank and its customer governs the terms on which the bank holds
              customer funds and processes transactions.
            </p>

            <h3>The Debtor-Creditor Relationship</h3>
            <p>
              When a customer deposits money with a bank, the legal relationship is debtor-creditor:
              the bank becomes the owner of the deposited funds and owes the customer a debt equal
              to the deposit. The customer does not retain property rights in the specific funds
              deposited: <em>Foley v. Hill</em> (1848), 2 HLC 28. This foundational principle
              means that upon a bank&apos;s insolvency, depositors are unsecured creditors, not
              beneficial owners, subject to the protection of the Canada Deposit Insurance
              Corporation (CDIC) scheme for insured deposits.
            </p>

            <h3>Implied Terms in the Banking Contract</h3>
            <p>
              Banks owe customers certain implied contractual duties:
            </p>
            <ul>
              <li>
                <strong>Duty of secrecy:</strong> A bank owes a duty to keep its customers&apos;
                affairs secret, subject to four exceptions identified in{" "}
                <em>Tournier v. National Provincial and Union Bank of England</em>, [1924]
                1 KB 461: (1) compulsion of law; (2) duty to the public; (3) interests of the bank;
                (4) express or implied consent of the customer. PIPEDA imposes additional federal
                privacy obligations on banks.
              </li>
              <li>
                <strong>Duty to honour cheques:</strong> A bank is contractually obliged to
                honour its customer&apos;s cheques if the customer has sufficient funds, subject to
                any stop payment instructions.
              </li>
              <li>
                <strong>Duty to follow instructions:</strong> A bank must follow its customer&apos;s
                authorized payment instructions and is liable for wrongful dishonour.
              </li>
            </ul>

            <h3>Fiduciary Duties</h3>
            <p>
              A bank does not automatically owe fiduciary duties to its customers. A fiduciary
              relationship requires the bank to have undertaken to act in the customer&apos;s best
              interests, typically in an advisory or investment management context. The Supreme
              Court in <em>Hodgkinson v. Simms</em>, [1994] 3 SCR 377 established that a
              fiduciary duty arises where one party reasonably relies on the other to act in
              their interest and the other has accepted that obligation.
            </p>
            <p>
              Banks providing investment advice, financial planning, or wealth management services
              may owe fiduciary obligations. Banks enforcing security or acting as arms-length
              commercial lenders generally do not owe fiduciary duties to borrowers.
            </p>

            <h2>Commercial Lending Structures</h2>

            <h3>Term Loans</h3>
            <p>
              A term loan is a fixed-amount credit facility repayable over a defined period.
              The loan agreement typically provides for: a committed principal amount; an interest
              rate (fixed or floating, often expressed as prime plus a spread or CORRA plus a
              spread following the transition away from CDOR); a repayment schedule (bullet,
              amortizing, or partially amortizing); financial and operating covenants; and
              events of default triggering acceleration.
            </p>

            <h3>Revolving Credit Facilities</h3>
            <p>
              A revolving credit facility allows the borrower to draw, repay, and re-draw up
              to a maximum committed amount during the revolving period. Revolving facilities
              are typically used for working capital. Availability under a revolving facility
              may be subject to a borrowing base calculated as a percentage of eligible receivables
              and inventory (an asset-based lending structure).
            </p>

            <h3>Syndicated Facilities</h3>
            <p>
              Large commercial borrowings are often structured as syndicated credit facilities,
              where multiple banks participate as lenders and one bank acts as administrative
              agent on behalf of the syndicate. The Loan Market Association (LMA) standard
              form documentation is commonly used in Canadian syndicated transactions, adapted
              for Canadian law. The administrative agent manages the mechanics of drawdowns,
              repayments, and enforcement, subject to instructions from the majority lenders.
            </p>

            <h2>Security Documentation in Ontario Commercial Lending</h2>

            <h3>General Security Agreement (GSA)</h3>
            <p>
              A GSA creates a security interest in all present and after-acquired personal property
              (PAAP) of the borrower. The GSA is registered in the Ontario PPSR as a financing
              statement describing the collateral as &quot;all present and after-acquired personal
              property.&quot; The GSA typically creates a floating charge over inventory and accounts
              and a fixed charge over specific identified assets (equipment, intellectual property).
            </p>

            <h3>Mortgage Debenture</h3>
            <p>
              A mortgage debenture (or debenture) is a document that creates both a fixed
              charge over identified real property and equipment and a floating charge over
              all other assets of the borrower. The floating charge crystallizes upon the
              occurrence of an event of default or appointment of a receiver, converting
              the floating charge into a fixed charge on all assets then held by the borrower.
              The mortgage debenture is registered against real property in the Land Titles
              Office and as a financing statement in the PPSR.
            </p>

            <h3>Real Property Security</h3>
            <p>
              A mortgage or charge against real property in Ontario must be registered in
              the Land Titles Office under the <em>Land Titles Act</em> to be effective
              against subsequent purchasers and encumbrancers. Priority between registered
              mortgages is determined by order of registration. Banks typically require
              a first mortgage on commercial real property securing a term loan.
            </p>

            <h3>Personal Guarantees</h3>
            <p>
              Banks lending to small and medium enterprises typically require personal guarantees
              from principals. A valid guarantee requires: consideration; writing signed by the
              guarantor (Statute of Frauds, R.S.O. 1990, c. S.19); and independent legal advice
              for the guarantor to reduce the risk that the guarantee will be set aside on the
              basis of non est factum or undue influence.
            </p>

            <h2>PPSA Priority in the Lending Context</h2>
            <p>
              A bank&apos;s PPSA security interest in a borrower&apos;s personal property must be perfected
              by PPSR registration to have priority over subsequent creditors and trustee in
              bankruptcy. The first-to-register-or-perfect rule under PPSA s.30 means that a
              bank that fails to register promptly may lose priority to a subsequent creditor
              who registers first.
            </p>
            <p>
              Banks must also be alert to purchase money security interests (PMSIs) held by
              equipment suppliers and inventory financiers, which can take super-priority over
              the bank&apos;s GSA in the specific PMSI collateral. The bank should require the
              borrower to give advance notice of any PMSI financing and obtain subordination
              agreements from PMSI holders where possible.
            </p>
            <p>
              Federal deemed trusts for unremitted source deductions (ITA s.227(4)) and HST
              (ETA s.222) take priority over bank security interests, including perfected
              GSAs. Banks conducting due diligence before advancing should search for CRA
              arrears and obtain representations and covenants from the borrower confirming
              all source deductions and HST are current.
            </p>

            <h2>Privacy Obligations: PIPEDA</h2>
            <p>
              Banks are subject to the federal <em>Personal Information Protection and Electronic
              Documents Act</em> (PIPEDA), S.C. 2000, c. 5 in respect of customer personal
              information collected in the course of commercial activity. PIPEDA requires banks
              to obtain meaningful consent for the collection, use, and disclosure of personal
              information; implement appropriate safeguards; and respond to access and correction
              requests.
            </p>
            <p>
              The Office of the Privacy Commissioner of Canada (OPC) has jurisdiction over PIPEDA
              complaints against banks. The federal <em>Consumer Privacy Protection Act</em>
              (CPPA) — Bill C-27 — proposes to replace PIPEDA with a strengthened privacy
              regime including administrative monetary penalties, but had not yet come into force
              as of 2024.
            </p>

            <h2>Practice Points for Ontario Commercial Lawyers</h2>
            <ul>
              <li>
                Register the bank&apos;s PPSR financing statement as early as possible — ideally
                before advancing funds — to obtain priority under the first-to-register rule.
              </li>
              <li>
                Require the borrower to represent and covenant that all CRA source deductions
                and HST remittances are current; a lien search with the CRA is appropriate
                in secured transactions.
              </li>
              <li>
                Require independent legal advice (ILA) letters from guarantors, particularly
                where the guarantor has a close personal relationship with the borrower.
              </li>
              <li>
                Review the interest rate clause carefully following the transition from CDOR
                to CORRA (Canadian Overnight Repo Rate Average) as the Canadian dollar
                benchmark rate; ensure fallback provisions are in place.
              </li>
              <li>
                For syndicated facilities, confirm the administrative agent provisions align
                with LMA market standards and that voting thresholds for enforcement actions
                are clearly defined.
              </li>
              <li>
                Advise borrower clients that the bank&apos;s duty of confidentiality is subject
                to court orders, regulatory demands, and enforcement-related disclosures;
                borrowers should not assume their financial information is protected from
                compelled disclosure.
              </li>
            </ul>

          </div>
        </article>

        <section className="py-12 px-6 bg-amber-50 border-t border-amber-100">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Manage Your Commercial Law Practice with Atticus
            </h2>
            <p className="text-slate-600 mb-6">
              Track PPSR registration deadlines, manage financing matters, monitor covenant
              compliance deadlines, and run LSO-compliant trust accounting — all in one Ontario platform.
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
                { href: "/blog/ontario-personal-property-security", label: "Ontario PPSA Guide" },
                { href: "/blog/ontario-corporate-law", label: "Ontario Corporate Law" },
                { href: "/blog/ontario-director-liability", label: "Ontario Director Liability" },
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
