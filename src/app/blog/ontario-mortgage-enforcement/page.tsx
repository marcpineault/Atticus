import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ontario Mortgage Enforcement: Power of Sale, Foreclosure, and Remedies",
  description:
    "Complete guide to Ontario mortgage enforcement: power of sale under the Mortgages Act, notice requirements, foreclosure proceedings, redemption rights, deficiency claims, priority disputes, and the PPSA intersection for commercial mortgages.",
  openGraph: {
    title: "Ontario Mortgage Enforcement: Power of Sale, Foreclosure, and Remedies",
    description:
      "Ontario mortgage enforcement: Mortgages Act power of sale procedure, 35-day notice, redemption rights, foreclosure, deficiency claims, LTA priority, and commercial mortgage considerations.",
    url: "https://getatticus.ca/blog/ontario-mortgage-enforcement",
    siteName: "Atticus",
    type: "article",
  },
  alternates: {
    canonical: "https://getatticus.ca/blog/ontario-mortgage-enforcement",
  },
};

const schemaJson = `{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Ontario Mortgage Enforcement: Power of Sale, Foreclosure, and Remedies",
  "description": "Complete guide to Ontario mortgage enforcement covering Mortgages Act power of sale procedure, 35-day notice of sale, redemption rights, foreclosure by court action, deficiency claims, LTA priority, and commercial mortgage considerations.",
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
  "mainEntityOfPage": "https://getatticus.ca/blog/ontario-mortgage-enforcement",
  "keywords": ["power of sale Ontario", "foreclosure Ontario", "Mortgages Act Ontario", "mortgage enforcement Ontario", "35-day notice power of sale", "redemption right mortgage Ontario", "deficiency claim mortgage Ontario", "commercial mortgage enforcement Ontario"]
}`;

const faqSchemaJson = `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the difference between power of sale and foreclosure in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Power of sale is an out-of-court remedy under the Mortgages Act allowing the lender to sell the mortgaged property on the mortgagor's default after following the required notice procedure (35-day notice). The lender must account for any surplus over the mortgage debt to the mortgagor and any subsequent encumbrancers. Foreclosure is a court action that extinguishes the mortgagor's equity of redemption and vests title in the lender — no surplus to the mortgagor, but the lender also loses any right to a personal deficiency claim against the mortgagor. Power of sale is by far the more common enforcement method in Ontario."
      }
    },
    {
      "@type": "Question",
      "name": "How long does power of sale take in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The minimum statutory timeline under the Mortgages Act requires: serving a notice of sale under s.33, which gives the mortgagor 35 days to redeem. After expiry of the redemption period (35 days minimum), the lender can list and sell the property. The full process from default to completion of sale typically takes 3-6 months or longer depending on market conditions and whether the mortgagor contests the proceedings or applies for relief."
      }
    },
    {
      "@type": "Question",
      "name": "Can a mortgagor redeem the mortgage after power of sale has started?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — the mortgagor has a right to redeem (pay off the full mortgage debt including costs and interest) at any time before the power of sale is completed (i.e., before the transfer to the purchaser is registered). Once a binding agreement of purchase and sale has been executed with a third party purchaser and the sale is complete, the equity of redemption is extinguished and redemption is no longer possible."
      }
    },
    {
      "@type": "Question",
      "name": "Is a lender entitled to a deficiency judgment after power of sale in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Unlike foreclosure (which extinguishes the personal covenant), power of sale does not release the mortgagor from the personal covenant to pay the debt. If the sale proceeds are insufficient to satisfy the mortgage debt, costs, and interest, the lender can sue the mortgagor for the deficiency under the personal covenant in the mortgage. However, the lender must sell at fair market value and account for the proceeds — selling at a price below market value exposes the lender to liability."
      }
    }
  ]
}`;

export default function OntarioMortgageEnforcement() {
  return (
    <>
      <Script id="mortgage-enforcement-schema" type="application/ld+json">
        {schemaJson}
      </Script>
      <Script id="mortgage-enforcement-faq-schema" type="application/ld+json">
        {faqSchemaJson}
      </Script>

      <div className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-amber-400 text-slate-900 text-sm font-semibold px-4 py-1 rounded-full mb-4">
              Real Estate / Finance Law
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Ontario Mortgage Enforcement: Power of Sale, Foreclosure, and Remedies
            </h1>
            <p className="text-slate-300 text-lg mb-4 max-w-3xl">
              Mortgages Act power of sale procedure, 35-day notice requirements, redemption rights,
              foreclosure proceedings, deficiency claims, priority disputes under the Land Titles Act,
              and commercial mortgage enforcement considerations.
            </p>
            <div className="flex gap-4 text-sm text-slate-400">
              <span>December 2024</span>
              <span>•</span>
              <span>13 min read</span>
              <span>•</span>
              <span>Real Estate / Finance Law</span>
            </div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 py-12">

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-10">
            <h2 className="text-lg font-semibold text-slate-900 mb-2">Key Takeaways</h2>
            <ul className="space-y-1 text-slate-700 text-sm">
              <li>• Power of sale is the standard enforcement remedy in Ontario — out-of-court, requires 35-day notice to redeem</li>
              <li>• Foreclosure is a court action extinguishing the equity of redemption — lender loses deficiency claim but gets title</li>
              <li>• The mortgagor&apos;s equity of redemption persists until the power of sale transfer is registered</li>
              <li>• Lender must sell at fair market value — grossly undervaluing the sale exposes the lender to liability</li>
              <li>• Surplus proceeds from power of sale go to the mortgagor after paying the debt and costs</li>
              <li>• Personal covenant survives power of sale — deficiency claim possible if sale insufficient</li>
              <li>• Priority of registered charges on LTA land: first to register generally has priority (s.78)</li>
              <li>• Mortgagee in possession is liable as a trustee for proper management and accounting</li>
            </ul>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              The Mortgages Act (Ontario): Overview
            </h2>
            <p className="text-slate-700 mb-4">
              Mortgage enforcement in Ontario is governed primarily by the <em>Mortgages Act</em>
              R.S.O. 1990, c. M.40, the <em>Land Titles Act</em> R.S.O. 1990, c. L.5, and the
              <em> Courts of Justice Act</em>. The two principal enforcement remedies are:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
              <li>
                <strong>Power of sale</strong> (ss.32-36) — the lender sells the property on the
                mortgagor&apos;s default after giving proper notice; no court order required
              </li>
              <li>
                <strong>Foreclosure</strong> — a court action requesting that the mortgagor&apos;s equity
                of redemption be extinguished and title vested in the lender
              </li>
            </ul>
            <p className="text-slate-700">
              Additional remedies include: appointment of a receiver, obtaining possession
              (mortgagee in possession), and suing on the personal covenant for the debt. In
              practice, power of sale is used in the vast majority of residential and commercial
              mortgage defaults in Ontario because it is faster and does not require court
              proceedings.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Power of Sale: Step-by-Step Procedure
            </h2>
            <div className="space-y-4 mb-4">
              {[
                {
                  step: "1. Default",
                  desc: "The mortgagor defaults on payment of principal, interest, or other obligations under the mortgage (taxes, insurance, repairs, etc.).",
                },
                {
                  step: "2. Demand / Acceleration",
                  desc: "Where the mortgage contains an acceleration clause (standard in most institutional mortgages), the lender demands immediate payment of the full outstanding balance following default. The mortgage terms govern the conditions for acceleration — typically after a 15-30 day cure period.",
                },
                {
                  step: "3. Notice of Sale Under s.33 (35-day notice)",
                  desc: "The lender serves a written notice of sale on the mortgagor and every other person having an interest in the equity of redemption registered on title. The notice must state the amount required to redeem and give at least 35 days to redeem. Service requirements: registered mail or personal service on all encumbrancers and persons in possession.",
                },
                {
                  step: "4. Redemption Period (35 days minimum)",
                  desc: "During the 35-day period, the mortgagor (and any subsequent encumbrancers) may redeem by paying all amounts owing including principal, interest, costs, and the lender's legal fees for the power of sale proceedings.",
                },
                {
                  step: "5. Listing and Sale of the Property",
                  desc: "After expiry of the 35-day period without redemption, the lender can list and market the property for sale. The lender has a duty to sell at the best price reasonably obtainable — this requires genuine efforts to market the property (MLS listing, reasonable exposure time). The lender is not required to wait indefinitely but must take reasonable steps to achieve fair market value.",
                },
                {
                  step: "6. Application of Proceeds",
                  desc: "Proceeds are applied in order: (1) costs of sale (real estate commissions, legal fees, carrying costs); (2) first mortgage principal and interest; (3) subsequent registered encumbrances in priority order; (4) surplus (if any) to the mortgagor.",
                },
                {
                  step: "7. Transfer / Registration",
                  desc: "The lender executes and registers a transfer of the property to the purchaser. The transfer under power of sale extinguishes the mortgagor's equity of redemption and all subsequent encumbrances.",
                },
              ].map((item, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-5 border border-slate-100">
                  <h3 className="font-semibold text-slate-900 mb-1">{item.step}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Lender&apos;s Duty to Sell at Fair Market Value
            </h2>
            <p className="text-slate-700 mb-4">
              The lender exercising power of sale owes a duty to the mortgagor and subsequent
              encumbrancers to take reasonable steps to obtain the best price reasonably obtainable.
              This is not an absolute duty to achieve the highest possible price — it is a duty of
              reasonable care in the selling process:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
              <li>Proper marketing (MLS listing, adequate exposure period)</li>
              <li>Accepting reasonable offers — not selling at an artificially depressed price to a related party</li>
              <li>Obtaining a market appraisal if any doubt about value</li>
              <li>Not proceeding in a manner designed to harm the mortgagor</li>
            </ul>
            <p className="text-slate-700">
              If the lender sells at a grossly undervalued price or fails to properly market the
              property, the mortgagor or subsequent encumbrancers may challenge the sale and claim
              damages for the difference between the actual sale price and fair market value. In
              extreme cases, a court may set aside the power of sale transfer (though this is
              difficult after a bona fide third-party purchaser acquires title).
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Foreclosure by Court Action
            </h2>
            <p className="text-slate-700 mb-4">
              Foreclosure is commenced by statement of claim in the Superior Court of Justice.
              The court action seeks an order for sale with a redemption period (usually 60 days),
              failing which the equity of redemption is foreclosed and title vests in the lender.
              Key aspects of foreclosure:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
              <li>
                <strong>Parties to the action</strong> — all persons with registered interests in
                the property (subsequent mortgagees, judgment creditors, Construction Lien Act lien
                claimants) must be named as defendants
              </li>
              <li>
                <strong>Order for sale</strong> — the court first grants an order for sale and a
                redemption period; if the property is not redeemed, the order for foreclosure vests
                title in the lender
              </li>
              <li>
                <strong>Effect of foreclosure</strong> — the personal covenant is extinguished by
                foreclosure; the lender acquires title but cannot then sue the mortgagor for any
                deficiency. This is the key distinction from power of sale.
              </li>
              <li>
                <strong>Re-opening foreclosure</strong> — in exceptional circumstances (new value
                evidence, changed circumstances), the court may allow re-opening the redemption
                period, but this is unusual and discretionary
              </li>
              <li>
                <strong>When lenders prefer foreclosure</strong> — where the property value exceeds
                the debt (positive equity), foreclosure is rarely used; where the property is
                significantly underwater and there is no worthwhile personal covenant to preserve,
                some lenders prefer the clean title result of foreclosure without a power of sale
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Deficiency Claims and the Personal Covenant
            </h2>
            <p className="text-slate-700 mb-4">
              After a power of sale, if the net sale proceeds are insufficient to fully satisfy the
              mortgage debt, the lender may sue the mortgagor on the personal covenant to pay
              (typically contained in the Schedule to the standard OREA/CMHC charge form).
              Key points:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
              <li>
                <strong>Limitation period for deficiency claim</strong> — two years under the
                <em> Limitations Act</em> 2002 from the date of discovery (typically the date the
                sale closes and the deficiency is known)
              </li>
              <li>
                <strong>Proving the deficiency</strong> — the lender must show the sale was conducted
                at fair market value and provide a proper accounting of all sale proceeds and
                outstanding amounts
              </li>
              <li>
                <strong>Guarantors</strong> — guarantors of the mortgage obligation remain liable
                for deficiencies; the lender must also give notice to guarantors before exercising
                power of sale if the guarantee requires it
              </li>
              <li>
                <strong>Foreclosure extinguishes the covenant</strong> — once foreclosure is granted
                and becomes absolute, the personal covenant merges in the judgment and the lender
                cannot separately sue for the deficiency
              </li>
              <li>
                <strong>Practical considerations</strong> — deficiency claims against consumer
                mortgagors are often economically unproductive; lenders focus on institutional
                borrowers, commercial guarantors, and corporate borrowers with assets
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Priority of Mortgages Under the Land Titles Act
            </h2>
            <p className="text-slate-700 mb-4">
              On Land Titles land (the vast majority of Ontario residential and commercial property),
              priority among competing charges is determined by the date and time of registration
              (LTA s.78):
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
              <li>
                <strong>First registered, first in priority</strong> — the first mortgage/charge
                registered on a PIN has priority over subsequently registered charges; this is
                why lenders register their mortgage immediately on closing
              </li>
              <li>
                <strong>Postponement agreements</strong> — a prior registered mortgagee can
                voluntarily postpone to a later mortgage (e.g., a second mortgage postponing to
                a new first mortgage on refinancing)
              </li>
              <li>
                <strong>Construction liens</strong> — a Construction Lien Act lien registered within
                the statutory lien period has priority over subsequent mortgages but not over
                prior registered mortgages; however, a prior lender who advances funds after
                the lien period begins may lose priority to construction liens registered before
                the mortgage
              </li>
              <li>
                <strong>Crown priority</strong> — unregistered Crown claims (CRA tax liens) may
                have priority over registered mortgages in certain circumstances under the
                <em> Income Tax Act</em> s.227; due diligence on tax arrears before advancing
              </li>
              <li>
                <strong>Condominium common expense arrears</strong> — under the
                <em> Condominium Act</em> 1998 s.85, common expense arrears have super-priority
                over a first mortgagee&apos;s claim to the extent of three months&apos; common expenses
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Mortgagee in Possession
            </h2>
            <p className="text-slate-700 mb-4">
              A mortgagee who takes possession of the mortgaged property (before or instead of
              selling) assumes significant responsibilities:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
              <li>
                The mortgagee in possession must manage the property with the care of a reasonable
                prudent property manager — not merely preserve it
              </li>
              <li>
                Must collect rents and apply them to the mortgage debt and carrying costs; must
                account strictly for all receipts and expenditures
              </li>
              <li>
                Is liable for negligent waste or failure to collect rents from existing tenants
              </li>
              <li>
                Taking possession does not accelerate the power of sale procedure — the statutory
                notice requirements still apply
              </li>
              <li>
                For commercial properties, a receiver appointed by the court or by contract
                (under a general security agreement) is often preferable to mortgagee in possession
                because the receiver has clear management authority and the mortgagee maintains
                better insulation from liability
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                {
                  q: "Can a mortgagee sell to a related party or company?",
                  a: "Yes, but with heightened scrutiny. The lender must demonstrate the sale was at fair market value and the process was arm's length and properly marketed. Sales to related parties are subject to close examination by courts in any subsequent challenge. As a practical matter, most lenders avoid selling to related parties to eliminate the litigation risk.",
                },
                {
                  q: "What happens to tenants when a property is sold under power of sale?",
                  a: "Residential tenants are protected by the Residential Tenancies Act 2006. A purchaser under a power of sale takes the property subject to existing residential tenancies. Commercial tenants take the risk of their lease being extinguished if the mortgage predates the lease — most commercial tenants seek a non-disturbance agreement (SNDA) from the mortgagee at the time the mortgage is registered to protect their lease against enforcement.",
                },
                {
                  q: "Is HST payable on a power of sale?",
                  a: "HST may be payable on a power of sale depending on the nature of the property and the mortgagor's HST registration status. Residential resale property is generally HST-exempt. Commercial property transfers and new construction may attract HST. The purchaser may be required to self-assess HST under the ETA s.228(4). Always confirm HST status with the vendor's lender and review the CRA GST/HST New Housing Rebate provisions for any applicable residential property.",
                },
              ].map((faq, i) => (
                <div key={i} className="border border-slate-200 rounded-xl p-6">
                  <h3 className="font-semibold text-slate-900 mb-2">{faq.q}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-amber-50 border border-amber-200 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              Manage Real Estate and Finance Matters with Atticus
            </h2>
            <p className="text-slate-600 mb-6 max-w-xl mx-auto">
              Atticus is the Ontario practice management platform built for real estate lawyers —
              LSO-compliant trust accounting, HST billing, AI document analysis, limitation period
              tracking, and Canadian legal AI. $149 CAD per lawyer per month.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/sign-up"
                className="bg-slate-900 text-white font-semibold px-8 py-3 rounded-lg hover:bg-slate-700 transition-colors"
              >
                Start Free Trial
              </Link>
              <Link
                href="/trust-accounting-ontario"
                className="border border-slate-900 text-slate-900 font-semibold px-8 py-3 rounded-lg hover:bg-slate-100 transition-colors"
              >
                Ontario Trust Accounting
              </Link>
            </div>
          </section>

          <section className="mt-12 pt-8 border-t border-slate-100">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Related Articles</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { href: "/blog/ontario-easements-restrictive-covenants", label: "Ontario Easements and Restrictive Covenants" },
                { href: "/blog/ontario-trespass-to-land", label: "Ontario Trespass to Land" },
                { href: "/blog/ontario-commercial-lease", label: "Ontario Commercial Lease Law" },
                { href: "/blog/ontario-specific-performance", label: "Ontario Specific Performance" },
                { href: "/ontario-real-estate-lawyer", label: "Ontario Real Estate Lawyer Software" },
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
          </section>
        </article>
      </div>
    </>
  );
}
