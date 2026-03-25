import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ontario Personal Property Security Act Guide 2024: PPSA Registration, Priority, and Enforcement",
  description:
    "Ontario PPSA guide: security interest creation and attachment (value, debtor rights, security agreement), perfection by registration in PPSR, purchase money security interests (PMSIs), priority rules, deemed trusts, and enforcement under Part V including seizure, disposition, and deficiency claims.",
  openGraph: {
    title: "Ontario PPSA Guide 2024: Security Interests, Registration, Priority, and Enforcement",
    description:
      "Complete guide to Ontario Personal Property Security Act — security interest attachment, perfection by PPSR registration, PMSI super-priority, priority disputes, deemed trusts, and Part V enforcement rights.",
    url: "https://getatticus.ca/blog/ontario-personal-property-security",
    siteName: "Atticus",
    type: "article",
  },
  alternates: { canonical: "https://getatticus.ca/blog/ontario-personal-property-security" },
};

const schemaJson = `{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Ontario Personal Property Security Act Guide 2024: PPSA Registration, Priority, and Enforcement",
  "description": "Ontario PPSA guide: security interest creation and attachment, perfection by PPSR registration, purchase money security interests (PMSIs), priority rules, deemed trusts, and enforcement under Part V including seizure, disposition, and deficiency claims.",
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
  "url": "https://getatticus.ca/blog/ontario-personal-property-security"
}`;

const faqSchemaJson = `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is required for a security interest to attach under the Ontario PPSA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Under Ontario PPSA s.11(2), a security interest attaches when three conditions are met: (1) value has been given by the secured party; (2) the debtor has rights in the collateral or the power to transfer rights; and (3) the security interest has been agreed upon in a signed written security agreement that contains a description of the collateral, or the secured party has taken possession or control of the collateral. All three conditions must be met before a security interest attaches, which is the precondition for enforceability against the debtor."
      }
    },
    {
      "@type": "Question",
      "name": "What is a purchase money security interest (PMSI) and why does it matter?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A purchase money security interest (PMSI) under Ontario PPSA s.1(1) is a security interest taken or reserved by a seller to secure the purchase price of collateral, or a security interest taken by a person who gives value for the purpose of enabling the debtor to acquire rights in the collateral, to the extent the value is used for that purpose. PMSIs receive super-priority under ss.33-34 — a perfected PMSI in inventory takes priority over a prior perfected security interest in the same inventory if the PMSI is perfected and notice is given to prior secured parties before the debtor receives possession. In non-inventory collateral (equipment), the PMSI takes priority if perfected within 15 days after the debtor takes possession."
      }
    },
    {
      "@type": "Question",
      "name": "How does priority work between competing security interests under the Ontario PPSA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Under PPSA s.30, priority between competing perfected security interests is determined by the order of registration or perfection — whichever is earlier — unless the Act provides otherwise. The first-to-register-or-perfect rule means a creditor who registers a financing statement before another creditor perfects (even before attachment) generally has priority. PMSIs are the major exception. Other exceptions include liens arising by statute or operation of law (which may take priority over registered security interests), deemed trusts for source deductions under the Income Tax Act, and purchase money security interests."
      }
    }
  ]
}`;

export default function OntarioPersonalPropertySecurityPage() {
  return (
    <>
      <Script id="ontario-ppsa-schema" type="application/ld+json">
        {schemaJson}
      </Script>
      <Script id="ontario-ppsa-faq-schema" type="application/ld+json">
        {faqSchemaJson}
      </Script>

      <div className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-amber-400 text-slate-900 text-sm font-semibold px-3 py-1 rounded-full">
                Commercial Law
              </span>
              <span className="text-slate-400 text-sm">December 2024 &middot; 14 min read</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Ontario Personal Property Security Act Guide 2024: PPSA Registration, Priority, and Enforcement
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl">
              Security interest creation and attachment (s.11), perfection by PPSR registration,
              purchase money security interests (PMSIs) and super-priority (ss.33-34),
              priority rules (s.30), deemed trusts, and Part V enforcement including
              seizure, disposition, and deficiency claims.
            </p>
          </div>
        </section>

        <article className="py-16 px-6">
          <div className="max-w-3xl mx-auto prose prose-slate prose-lg">

            <h2>Overview of the Ontario PPSA</h2>
            <p>
              The <em>Personal Property Security Act</em>, R.S.O. 1990, c. P.10 (PPSA) governs
              the creation, perfection, and priority of security interests in personal property
              in Ontario. The PPSA replaced the prior patchwork of common law chattel mortgages,
              conditional sales, and other security devices with a single, comprehensive
              statutory regime based on Article 9 of the US Uniform Commercial Code.
            </p>
            <p>
              The PPSA applies broadly to &quot;every transaction that in substance creates a security
              interest, without regard to its form and without regard to the person who has title
              to the collateral&quot; (s.2). This functional approach means that conditional sales,
              consignments, trusts, and leases of more than one year may all constitute security
              interests subject to the PPSA even if the parties have not described the arrangement
              as a security agreement.
            </p>
            <p>
              The PPSA does not apply to certain transactions including liens arising by statute
              or rule of law (s.4(1)(a)), interests in real property (s.4(1)(b)), and assignments
              of accounts for collection only (s.4(1)(e)).
            </p>

            <h2>Creation and Attachment of Security Interests</h2>

            <h3>Attachment: Section 11(2)</h3>
            <p>
              A security interest attaches — becoming enforceable against the debtor — when three
              conditions are met:
            </p>
            <ol>
              <li>
                <strong>Value has been given</strong> by the secured party. Value is defined
                broadly in s.1 to include any consideration sufficient to support a simple
                contract, an antecedent debt, and a binding commitment to extend credit.
              </li>
              <li>
                <strong>The debtor has rights in the collateral</strong> or the power to
                transfer rights to the secured party. A debtor who has only agreed to
                purchase collateral but not yet received it generally cannot grant a security
                interest in that collateral.
              </li>
              <li>
                <strong>A security agreement has been authenticated</strong> — either a signed
                written agreement containing a description of the collateral, or the secured
                party has taken possession or control of the collateral.
              </li>
            </ol>
            <p>
              Attachment is the precondition for enforceability of the security interest against
              the debtor. A security interest that has attached but not been perfected is
              enforceable between the parties but may be subordinate to other claims.
            </p>

            <h3>The Security Agreement</h3>
            <p>
              The security agreement must: be in writing and signed by the debtor; contain a
              description of the collateral sufficient to identify it; and be authenticated by
              the debtor. Generic descriptions such as &quot;all assets&quot; or &quot;all personal property&quot;
              are permissible. For consumer goods, the description must be specific enough
              to enable the debtor to identify the collateral.
            </p>
            <p>
              For accounts and other intangibles, the security agreement must specifically
              describe the collateral or use a general description that is not misleading.
              The Ontario Court of Appeal in <em>Re Giffen</em> (affirmed 1998 SCC 14) confirmed
              that a description of collateral in a financing statement need only describe the
              collateral in a manner that is not seriously misleading.
            </p>

            <h2>Perfection by Registration in the PPSR</h2>
            <p>
              A security interest is perfected when it has attached and the secured party has
              either: registered a financing statement in the Personal Property Security
              Register (PPSR); taken possession of the collateral; or obtained control of
              certain types of collateral (investment property, deposit accounts) (s.19).
            </p>

            <h3>PPSR Registration</h3>
            <p>
              The Ontario PPSR is administered by ServiceOntario and is accessible through
              the electronic registration system. A financing statement must contain:
              the name and address of the secured party; the name and address of the debtor;
              a description of the collateral; and, where applicable, the registration period.
            </p>
            <p>
              Registration is effective for the period specified, which may be up to 25 years
              (or infinity for certain transactions). A registration that lapses before the
              security interest is discharged creates a priority gap — a creditor who registers
              during the lapse period may obtain priority.
            </p>
            <p>
              A financing statement describing collateral as &quot;all present and after-acquired
              personal property&quot; (PAAP) creates a general security agreement (GSA) that
              captures all personal property the debtor acquires after the date of the agreement,
              subject to PMSI super-priority and other exceptions.
            </p>

            <h3>Errors in Registration</h3>
            <p>
              An error in a financing statement does not invalidate the registration unless it
              is &quot;seriously misleading&quot; (s.46(4)). Courts apply the test of whether a
              reasonably careful searcher, searching under the debtor&apos;s name, would fail to
              find the registration due to the error. A misspelling of the debtor&apos;s name
              may or may not be seriously misleading depending on whether a reasonable search
              would retrieve it.
            </p>

            <h2>Purchase Money Security Interests: Sections 33-34</h2>
            <p>
              A purchase money security interest (PMSI) receives super-priority — the ability
              to leap-frog a prior perfected security interest in the same collateral — subject
              to compliance with the notice and perfection requirements in ss.33-34.
            </p>

            <h3>Definition of PMSI</h3>
            <p>
              Under s.1(1), a PMSI is:
            </p>
            <ul>
              <li>
                A security interest taken or reserved by a seller of collateral to secure all
                or part of its purchase price (seller&apos;s PMSI); or
              </li>
              <li>
                A security interest taken by a person who gives value for the purpose of
                enabling the debtor to acquire rights in the collateral, to the extent the
                value is used for that purpose (lender&apos;s PMSI).
              </li>
            </ul>
            <p>
              A PMSI does not include a security interest taken by a debtor under a sale and
              leaseback, or a security interest in collateral that is inventory.
            </p>

            <h3>PMSI Priority in Inventory (s.33)</h3>
            <p>
              A PMSI in inventory takes priority over a conflicting security interest in the
              same inventory if before the debtor receives possession of the inventory, the
              PMSI is perfected and the PMSI holder gives written notice to every other secured
              party with a perfected security interest in the same inventory category.
            </p>

            <h3>PMSI Priority in Non-Inventory Collateral (s.34)</h3>
            <p>
              A PMSI in collateral other than inventory (typically equipment) takes priority
              over a conflicting security interest if the PMSI is perfected no later than 15
              days after the day the debtor takes possession. No advance notice to prior secured
              parties is required for equipment PMSIs.
            </p>

            <h2>Priority Rules: Section 30</h2>
            <p>
              The general rule under PPSA s.30(1) is that priority between competing perfected
              security interests in the same collateral is determined by the order of registration
              or perfection — whichever occurred first — and is not affected by the order in
              which value was given or the security interests attached. This is the
              &quot;first-to-register-or-perfect&quot; rule.
            </p>
            <p>
              A creditor who registers a financing statement before a security interest attaches
              — called &quot;pre-registering&quot; — obtains priority as of the date of registration, even
              over a creditor whose security interest attached first but was perfected later.
            </p>

            <h3>Priority Between Perfected and Unperfected Interests</h3>
            <p>
              An unperfected security interest is subordinate to a perfected security interest
              in the same collateral (s.30(3)). Where two security interests are both unperfected,
              priority is determined by order of attachment (s.30(2)).
            </p>

            <h3>Liens Arising by Statute or Operation of Law</h3>
            <p>
              Section 4(1)(a) exempts liens arising by statute or rule of law from the PPSA.
              However, s.31 addresses priority between PPSA security interests and certain
              statutory liens. Unpaid supplier liens under the <em>Repair and Storage Liens Act</em>
              typically take priority over prior perfected PPSA security interests while the
              repairer retains possession.
            </p>

            <h3>Deemed Trusts: Income Tax Act and ETA</h3>
            <p>
              Federal deemed trusts for unremitted source deductions under <em>Income Tax Act</em>
              s.227(4) and for unremitted HST under <em>Excise Tax Act</em> s.222 take priority
              over PPSA security interests, including perfected PMSIs. The deemed trust for
              unremitted source deductions attaches to the debtor&apos;s assets in an amount equal
              to the deductions not remitted to the CRA, and takes super-priority over all other
              creditors including secured creditors. Ontario corporate lawyers and insolvency
              counsel must always check for outstanding source deduction and HST arrears before
              relying on a security interest to recover.
            </p>

            <h2>Enforcement: PPSA Part V</h2>
            <p>
              Part V of the PPSA (ss.58-67) governs enforcement of security interests upon default.
            </p>

            <h3>Default</h3>
            <p>
              The PPSA does not define default — it is governed by the security agreement.
              Common default triggers include failure to pay, insolvency, breach of covenant,
              material adverse change, and cross-default provisions.
            </p>

            <h3>Seizing Collateral</h3>
            <p>
              Upon default, a secured party may seize collateral (s.62). Seizure may occur
              by taking possession of the collateral or, in the case of a debtor business,
              by appointing a receiver. A secured party may enter premises to seize
              collateral but must not breach the peace. If the debtor does not consent and
              a breach of the peace is apprehended, the secured party must obtain a court order.
            </p>

            <h3>Disposal of Collateral (s.63)</h3>
            <p>
              After seizing collateral, the secured party must provide written notice to the
              debtor, any guarantors, and any other secured parties with an interest in the
              collateral at least 15 days (for consumer goods) or 10 days (for other collateral)
              before disposing. The notice must describe the collateral and state the time
              and method of sale.
            </p>
            <p>
              The disposition must be conducted in a commercially reasonable manner. The secured
              party may sell at public auction or by private sale; the proceeds are applied first
              to enforcement costs, then to the secured obligation, then to any surplus (payable
              to the debtor or subordinate creditors).
            </p>

            <h3>Deficiency (s.67) and Redemption (s.66)</h3>
            <p>
              Where the proceeds of disposition are insufficient to satisfy the secured obligation,
              the secured party has a right to a deficiency judgment against the debtor, subject
              to any restrictions in the security agreement. The debtor has the right to redeem
              the collateral at any time before disposition by paying the full amount owing plus
              enforcement costs.
            </p>

            <h2>Practice Points for Ontario Commercial Lawyers</h2>
            <ul>
              <li>
                Always search the PPSR before closing any secured financing or asset purchase
                to identify prior registrations — a missed registration can result in the
                client taking collateral subject to a prior perfected security interest.
              </li>
              <li>
                For equipment financing with a lender PMSI, register within 15 days of the
                debtor receiving possession to preserve super-priority under s.34.
              </li>
              <li>
                For inventory PMSIs, give written notice to all prior perfected secured parties
                in the same inventory category before the debtor receives possession (s.33).
              </li>
              <li>
                Search for outstanding CRA source deduction and HST arrears before relying on
                a general security agreement to recover — the federal deemed trusts take
                priority over PPSA security interests.
              </li>
              <li>
                Ensure security agreements contain after-acquired property clauses to capture
                collateral the debtor acquires after the date of the agreement.
              </li>
              <li>
                When drafting financing statements, describe collateral specifically enough to
                avoid a &quot;seriously misleading&quot; error argument (s.46(4)) while remaining broad
                enough to capture all intended collateral.
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
              Track PPSR registration renewal deadlines, manage financing matters, and run
              LSO-compliant trust accounting for commercial closings — all in one Ontario platform.
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
                { href: "/blog/ontario-oppression-remedy", label: "Ontario Oppression Remedy" },
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
