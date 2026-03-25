import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ontario Secured Creditor Remedies | PPSA Enforcement for Lawyers",
  description:
    "A practical guide to Ontario secured creditor remedies under the Personal Property Security Act: appointment of receiver, seizure and disposition of collateral, PPSA priority rules, and compliance obligations for Ontario lawyers.",
  openGraph: {
    title: "Ontario Secured Creditor Remedies | PPSA Enforcement for Lawyers",
    description:
      "Ontario PPSA enforcement: receiver appointments, collateral seizure and disposition, deficiency claims, and priority rules. A practical guide for Ontario lawyers advising secured creditors.",
    url: "https://getatticus.ca/blog/ontario-secured-creditor-remedies",
    siteName: "Atticus",
    type: "article",
  },
};

const articleSchema = `{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Ontario Secured Creditor Remedies: PPSA Enforcement Guide",
  "description": "A practical guide to Ontario secured creditor remedies under the Personal Property Security Act: appointment of receiver, seizure and disposition of collateral, PPSA priority rules.",
  "author": {
    "@type": "Organization",
    "name": "Atticus"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Atticus",
    "url": "https://getatticus.ca"
  },
  "url": "https://getatticus.ca/blog/ontario-secured-creditor-remedies",
  "mainEntityOfPage": "https://getatticus.ca/blog/ontario-secured-creditor-remedies"
}`;

const faqSchema = `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What remedies does a secured creditor have under the Ontario PPSA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Under Part V of the Ontario Personal Property Security Act, a secured creditor may seize or repossess collateral, dispose of collateral by sale or lease, appoint a receiver or receiver-manager, or retain collateral in satisfaction of the debt (strict foreclosure). The creditor must give notice as required by the PPSA and conduct the enforcement in a commercially reasonable manner."
      }
    },
    {
      "@type": "Question",
      "name": "When can a secured creditor appoint a receiver in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A secured creditor may appoint a private receiver under a security agreement that grants the right of appointment (typically a general security agreement) or may apply to the court for appointment of a court-appointed receiver under section 101 of the Courts of Justice Act. A private receiver acts as agent of the debtor, while a court-appointed receiver is an officer of the court."
      }
    },
    {
      "@type": "Question",
      "name": "What notice is required before disposing of collateral under the PPSA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Under section 63 of the Ontario PPSA, a secured party must give at least 15 days written notice of disposal to the debtor, any guarantor, and any other secured party with a registered interest in the collateral. The notice must describe the collateral and state the manner, time, and place of disposal. Notice is not required for perishable collateral or where the debtor has waived notice in writing after default."
      }
    },
    {
      "@type": "Question",
      "name": "How does PPSA priority work between competing secured creditors in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Under sections 30-35 of the Ontario PPSA, priority between perfected security interests is generally determined by the order of registration or perfection — first to register or perfect prevails. A purchase money security interest (PMSI) has superpriority over a prior general security agreement if the PMSI creditor registers before or within 15 days of the debtor obtaining possession of the collateral (10 days for inventory PMSIs)."
      }
    },
    {
      "@type": "Question",
      "name": "Can a secured creditor recover a deficiency after selling collateral in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. After disposal of collateral, the secured creditor applies proceeds in the order set out in section 64 of the PPSA: reasonable enforcement costs, interest secured, principal secured, subordinate security interests, and the surplus to the debtor. If proceeds are insufficient, the creditor may sue for the deficiency, provided the enforcement was conducted in a commercially reasonable manner. Failure to give proper notice or conduct a commercially reasonable disposal can bar the deficiency claim."
      }
    }
  ]
}`;

export default function OntarioSecuredCreditorRemediesPage() {
  return (
    <>
      <Script id="secured-creditor-article-schema" type="application/ld+json">
        {articleSchema}
      </Script>
      <Script id="secured-creditor-faq-schema" type="application/ld+json">
        {faqSchema}
      </Script>

      <div className="min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <div className="mb-8">
            <Link
              href="/blog"
              className="text-sm text-amber-700 hover:text-amber-900 font-medium"
            >
              ← Back to Blog
            </Link>
          </div>

          <header className="mb-12">
            <div className="inline-block bg-amber-100 text-amber-800 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              Secured Transactions
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-4 leading-tight">
              Ontario Secured Creditor Remedies: PPSA Enforcement Guide
            </h1>
            <p className="text-lg text-slate-600">
              When a debtor defaults, Ontario secured creditors have a range of
              remedies under Part V of the Personal Property Security Act —
              from seizure and private sale to court-appointed receivers. This
              guide covers the key enforcement steps, notice requirements,
              priority rules, and deficiency claim considerations for Ontario
              lawyers advising secured creditors.
            </p>
          </header>

          <article className="prose prose-slate max-w-none">
            <h2>PPSA Enforcement: The Foundation</h2>
            <p>
              Ontario&apos;s <em>Personal Property Security Act</em>, RSO 1990,
              c P.10 governs the creation, perfection, and enforcement of
              security interests in personal property. Part V of the PPSA
              (sections 59–66) sets out the enforcement rights of secured
              parties following debtor default.
            </p>
            <p>
              A secured creditor&apos;s remedies are cumulative — the creditor
              may exercise any combination of PPSA remedies, contractual
              remedies under the security agreement, and common law remedies,
              subject to the requirement that enforcement be conducted in a
              commercially reasonable manner.
            </p>

            <h2>Core PPSA Remedies on Default</h2>
            <p>
              Upon default, a secured party holding a perfected security
              interest may:
            </p>
            <ul>
              <li>
                <strong>Seize or repossess collateral</strong> — without court
                order if this can be done without a breach of the peace
                (s. 62(1))
              </li>
              <li>
                <strong>Dispose of collateral</strong> by public or private
                sale, lease, or other disposition (s. 63)
              </li>
              <li>
                <strong>Retain collateral in satisfaction of the debt</strong>{" "}
                (strict foreclosure), subject to notice and objection rights
                (s. 65)
              </li>
              <li>
                <strong>Appoint a receiver or receiver-manager</strong> under
                the security agreement or by court order
              </li>
              <li>
                Collect on accounts, chattel paper, and instruments assigned as
                collateral (s. 61)
              </li>
            </ul>

            <h2>Appointment of Receiver</h2>
            <h3>Private Receiver Under Security Agreement</h3>
            <p>
              Most general security agreements (GSAs) grant the secured creditor
              the right to appoint a receiver or receiver-manager upon default.
              A private receiver is appointed by written notice to the debtor
              and acts as the debtor&apos;s agent — meaning the debtor bears
              liability for the receiver&apos;s acts unless the security
              agreement provides otherwise.
            </p>
            <p>
              The receiver takes possession of and manages the collateral,
              collects revenues, and may sell assets in satisfaction of the
              secured debt. The receiver must also comply with PPSA notice and
              commercially reasonable disposal requirements.
            </p>

            <h3>Court-Appointed Receiver</h3>
            <p>
              Under section 101 of the Courts of Justice Act, a court may
              appoint a receiver by interlocutory order &quot;where it appears
              to a judge to be just or convenient to do so.&quot; A
              court-appointed receiver is an officer of the court, acts
              independently of both creditor and debtor, and can be granted
              broader powers (including the ability to sell real property and
              manage complex business operations).
            </p>
            <p>
              Court appointment is typically sought where there is a risk of
              asset dissipation, complex multi-creditor situations, or where
              the secured creditor wants the protection of court supervision.
              Applications proceed under Rule 41 of the Rules of Civil Procedure.
            </p>

            <h2>Notice Requirements for Collateral Disposal</h2>
            <p>
              Before disposing of collateral, the secured party must give
              written notice to (s. 63(4)):
            </p>
            <ul>
              <li>The debtor</li>
              <li>Any guarantor or surety whose obligation is secured</li>
              <li>
                Any other secured party who has registered a financing statement
                covering the collateral or who has given written notice of a
                claim
              </li>
            </ul>
            <p>
              The notice period is <strong>at least 15 days</strong> before
              disposal. The notice must state: a description of the collateral,
              the amount required to satisfy the secured obligation, a statement
              that the debtor is entitled to redeem, and the manner, time, and
              place of proposed disposal.
            </p>
            <p>
              Notice is not required where the collateral is perishable or where
              the debtor has agreed in writing after default to waive notice
              (s. 63(7)). Notice is also not required for consumer goods where
              the debtor has paid 60% or more of the obligation — in that
              situation, the creditor must either dispose within 90 days or
              return the goods to the debtor.
            </p>

            <h2>Commercially Reasonable Disposal</h2>
            <p>
              Section 63(2) requires every aspect of disposal to be
              &quot;commercially reasonable.&quot; This applies to the method,
              manner, time, place, and terms of the sale. Commercially
              reasonable does not necessarily mean the highest possible price
              — it means the disposal must follow practices that are reasonable
              for the type of collateral.
            </p>
            <p>
              Failure to conduct a commercially reasonable disposal does not
              affect the validity of the sale to a bona fide purchaser, but it
              does give the debtor and subordinate creditors a claim for damages
              and can bar the secured creditor&apos;s deficiency claim under
              Ontario case law (see <em>Leavere v Port Colborne (City)</em>).
            </p>

            <h2>PPSA Priority Rules</h2>
            <h3>Basic Priority: First to Perfect</h3>
            <p>
              Between competing perfected security interests, priority is
              determined by the order of registration or perfection —
              whichever is earlier (s. 30(1)). A perfected security interest
              has priority over an unperfected security interest. Between
              competing unperfected interests, priority goes to the party that
              first attached.
            </p>

            <h3>Purchase Money Security Interest (PMSI) Superpriority</h3>
            <p>
              A PMSI — a security interest taken by a seller or lender to
              finance the debtor&apos;s acquisition of specific collateral —
              has superpriority over a prior-registered general security
              agreement if the PMSI creditor registers:
            </p>
            <ul>
              <li>
                <strong>Non-inventory collateral</strong>: before or within
                15 days after the debtor obtains possession (s. 33(1))
              </li>
              <li>
                <strong>Inventory collateral</strong>: before the debtor
                obtains possession (s. 34(2))
              </li>
            </ul>
            <p>
              PMSI superpriority allows equipment financiers and conditional
              sellers to take priority over a bank&apos;s floating charge GSA
              covering all present and after-acquired personal property — a
              critical priority issue in commercial lending.
            </p>

            <h3>Proceeds</h3>
            <p>
              A security interest extends automatically to identifiable proceeds
              of the original collateral (s. 25). Priority in proceeds is
              generally determined by priority in the original collateral.
            </p>

            <h2>Application of Disposal Proceeds</h2>
            <p>
              Under section 64, proceeds of disposition are applied in the
              following order:
            </p>
            <ol>
              <li>Reasonable costs of enforcement and disposal</li>
              <li>Satisfaction of the secured obligation</li>
              <li>Subordinate secured parties in order of priority</li>
              <li>Surplus to the debtor</li>
            </ol>

            <h2>Deficiency Claims</h2>
            <p>
              If disposal proceeds are insufficient to satisfy the secured
              obligation, the secured creditor may sue the debtor for the
              deficiency. However, the creditor must establish that enforcement
              was conducted in compliance with PPSA requirements — particularly
              the notice obligations and commercially reasonable disposal
              standard.
            </p>
            <p>
              Where the secured creditor has not given proper notice or has not
              conducted a commercially reasonable disposal, Ontario courts have
              held that the creditor may be barred from recovering a deficiency
              entirely or limited to an amount reflecting what would have been
              recovered with proper enforcement.
            </p>

            <h2>Debtor&apos;s Right of Redemption</h2>
            <p>
              At any time before the secured party disposes of or contracts to
              dispose of collateral, the debtor may redeem by paying the full
              amount of the secured obligation plus reasonable enforcement costs
              (s. 66). This right cannot be waived in advance — any agreement
              to waive the right of redemption before default is void under
              section 66(2).
            </p>

            <h2>How Atticus Helps Ontario Lawyers with Secured Creditor Files</h2>
            <p>
              Secured creditor enforcement files involve strict timelines
              (15-day notice periods, PMSI registration deadlines), multiple
              parties (debtor, guarantors, subordinate creditors), and
              significant liability exposure if enforcement steps are missed.
              Atticus helps Ontario lawyers manage these files with:
            </p>
            <ul>
              <li>
                <strong>Limitation period and deadline tracking</strong> —
                AI extracts dates from security agreements, default notices,
                and correspondence to flag PPSA enforcement timelines
              </li>
              <li>
                <strong>Matter management</strong> — track enforcement steps,
                notices sent, and parties notified in a single file view
              </li>
              <li>
                <strong>Document analysis</strong> — AI reviews GSAs, financing
                statements, and security agreements to surface key terms,
                collateral descriptions, and priority issues
              </li>
              <li>
                <strong>LSO-compliant trust accounting</strong> — manage
                enforcement costs and trust funds for multi-creditor
                distributions
              </li>
            </ul>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mt-10">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Manage Ontario Secured Creditor Files with Atticus
              </h3>
              <p className="text-slate-700 mb-4 text-sm">
                Atticus is built for Ontario lawyers — with AI deadline
                extraction, LSO-compliant trust accounting, and integrated
                matter management. $149 CAD per lawyer per month.
              </p>
              <Link
                href="/sign-up"
                className="inline-block bg-slate-900 text-white font-semibold px-6 py-3 rounded-lg hover:bg-slate-700 transition-colors text-sm"
              >
                Start Free Trial
              </Link>
            </div>
          </article>

          <div className="mt-12 pt-8 border-t border-slate-100">
            <h3 className="text-sm font-semibold text-slate-900 mb-4">
              Related Resources
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                {
                  href: "/blog/ontario-corporate-governance",
                  label: "Ontario Corporate Governance",
                },
                {
                  href: "/blog/ontario-construction-liens",
                  label: "Ontario Construction Liens",
                },
                {
                  href: "/blog/ontario-civil-procedure",
                  label: "Ontario Civil Procedure",
                },
                {
                  href: "/trust-accounting-ontario",
                  label: "Ontario Trust Accounting",
                },
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
        </div>
      </div>
    </>
  );
}
