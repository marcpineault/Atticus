import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ontario Estate Planning Guide 2024 | Trusts, RRSP Beneficiaries, and Tax Planning",
  description:
    "Ontario estate planning: testamentary trusts, spousal trusts, alter ego trusts, joint partner trusts, RRSP/RRIF/TFSA beneficiary designations, graduated rate estates, post-mortem planning, and probate fee planning. For Ontario wills and estate lawyers.",
  openGraph: {
    title: "Ontario Estate Planning Guide 2024 | Trusts, RRSP Beneficiaries, and Tax Planning",
    description:
      "Testamentary trusts, spousal trusts, alter ego trusts, RRSP beneficiary designations, graduated rate estates, and probate planning for Ontario estate lawyers.",
    url: "https://getatticus.ca/blog/ontario-estate-planning",
    siteName: "Atticus",
    type: "article",
  },
  alternates: { canonical: "https://getatticus.ca/blog/ontario-estate-planning" },
};

const schemaJson = `{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Ontario Estate Planning Guide 2024: Trusts, RRSP Beneficiaries, and Tax Planning",
  "description": "Comprehensive guide to Ontario estate planning including testamentary trusts, spousal trusts, alter ego trusts, RRSP/RRIF/TFSA beneficiary designations, graduated rate estates, and probate fee planning.",
  "author": { "@type": "Organization", "name": "Atticus" },
  "publisher": { "@type": "Organization", "name": "Atticus", "url": "https://getatticus.ca" },
  "url": "https://getatticus.ca/blog/ontario-estate-planning",
  "mainEntityOfPage": "https://getatticus.ca/blog/ontario-estate-planning"
}`;

const faqSchema = `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is a spousal trust in Ontario estate planning?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A spousal trust (or spouse trust) is an inter vivos or testamentary trust that qualifies under s.70(6) or s.73(1) of the Income Tax Act for a tax-deferred transfer of property. For a testamentary spousal trust, the surviving spouse must be entitled to receive all income arising in the trust during their lifetime, and no person other than the spouse may receive or otherwise obtain the use of the income or capital of the trust during the spouse's lifetime. On the death of the spouse, the trust assets are treated as disposed at fair market value (the 'deemed disposition'), and any accrued gains are included in the spouse's income in the year of death."
      }
    },
    {
      "@type": "Question",
      "name": "What is an alter ego trust in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "An alter ego trust is an inter vivos trust available to individuals who are 65 years of age or older under s.73(1.01) of the Income Tax Act. The settlor (creator) must be the sole beneficiary entitled to receive income and capital during their lifetime — no other person may benefit from the trust during the settlor's lifetime. An alter ego trust allows the tax-deferred transfer of appreciated assets into the trust (no deemed disposition on transfer), avoiding probate fees on death (assets in the trust do not form part of the estate), and providing private succession (no probate, no public record)."
      }
    },
    {
      "@type": "Question",
      "name": "Should I name a beneficiary on my RRSP/RRIF or pass it through my estate?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Naming a beneficiary directly on an RRSP or RRIF allows the proceeds to pass outside the estate, avoiding Ontario Estate Administration Tax (probate fees) and potential delays. A rollover to a spouse or common-law partner (or financially dependent child or grandchild) is tax-deferred — the RRSP/RRIF transfers on a tax-free rollover basis. If no named beneficiary or the estate is named, the RRSP/RRIF is included in the deceased's income in the year of death, triggering immediate tax. Ontario lawyers should advise clients to review RRSP/RRIF beneficiary designations at will drafting and on major life changes."
      }
    },
    {
      "@type": "Question",
      "name": "What is a Graduated Rate Estate in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A Graduated Rate Estate (GRE) is a testamentary trust that qualifies for graduated marginal income tax rates (rather than the flat top rate) for up to 36 months after the date of death. To qualify as a GRE, the estate must: (1) be a testamentary trust; (2) designate itself as a GRE in its first tax return; (3) have a tax year-end of December 31 (after the first year); and (4) not have previously been a GRE. Because the GRE is taxed at graduated rates, it is valuable to time income and deductions within the estate in the 36-month GRE period to minimize overall estate tax."
      }
    }
  ]
}`;

const trustTypes = [
  {
    trust: "Testamentary Spousal Trust (ITA s.70(6))",
    when: "Created by will at death; spouse becomes sole beneficiary during lifetime",
    tax_benefit: "Tax-free rollover of deceased&apos;s property to the trust; no deemed disposition at death; deemed disposition occurs only at spouse&apos;s death",
    probate: "Trust assets are part of the estate and subject to probate fees (EAT) on creation; subsequent trust assets avoid further probate",
    use_case: "Providing income to surviving spouse while preserving capital for children from first marriage; ensuring assets pass to intended beneficiaries on spouse&apos;s death",
  },
  {
    trust: "Inter Vivos Spousal / Common-Law Partner Trust (ITA s.73(1))",
    when: "Created by living settlor during lifetime; spouse/CLP is sole beneficiary during lifetime",
    tax_benefit: "Tax-free rollover of appreciated property to trust; no immediate capital gains on transfer",
    probate: "Assets transferred to trust during life avoid probate on death (pass under trust deed, not will)",
    use_case: "Asset protection; probate planning for blended families; privacy (no probate means no public record)",
  },
  {
    trust: "Alter Ego Trust (ITA s.73(1.01))",
    when: "Settlor must be 65+; settlor is sole beneficiary during lifetime; created inter vivos",
    tax_benefit: "Tax-free rollover on contribution; deemed disposition at settlor&apos;s death (gains included in settlor&apos;s terminal return)",
    probate: "Assets avoid probate entirely on death (trust deed governs distribution)",
    use_case: "Probate planning; privacy; incapacity planning (trustee manages during incapacity); may hold real estate across multiple provinces to avoid multiple probates",
  },
  {
    trust: "Joint Partner Trust (ITA s.73(1.02))",
    when: "Settlor 65+; both settlor and spouse/CLP are sole beneficiaries during their joint lifetimes",
    tax_benefit: "Tax-free rollover; deemed disposition on second death of settlor/spouse",
    probate: "Avoids probate on death of settlor (assets distributed under trust); also avoids probate on spouse&apos;s subsequent death if trust continues",
    use_case: "Combined probate and tax planning for couples; both spouses benefit during lifetime; efficient transfer on second death",
  },
  {
    trust: "Testamentary Discretionary Trust (Henson Trust)",
    when: "Created by will; trustee has absolute discretion to pay income and capital; often for a beneficiary with a disability",
    tax_benefit: "Not a spousal or rollover trust; no special tax rollover; GRE benefits available for 36 months",
    probate: "Trust assets part of estate on creation; EAT paid on creation",
    use_case: "Preserving government disability benefits (ODSP) for a disabled beneficiary while providing for their needs; trustee discretion prevents automatic disqualification from means-tested programs",
  },
];

const rrspPlanning = [
  {
    designation: "Spouse / Common-Law Partner (direct beneficiary)",
    tax: "Tax-free rollover: RRSP/RRIF transfers to spouse&apos;s RRSP/RRIF on tax-deferred basis; no income inclusion on death",
    probate: "Avoids probate on direct designation; beneficiary designation controls (not will)",
    notes: "Most efficient for married/CLP clients; ensure designations updated after divorce (designation survives divorce automatically until changed)",
  },
  {
    designation: "Financially Dependent Child/Grandchild (disability)",
    tax: "Rollover to RDSP or annuity for life; full tax-deferred transfer available for financially dependent child with disability",
    probate: "Avoids probate on direct designation",
    notes: "Specific tax rules apply; financial dependency must be established in the year of death",
  },
  {
    designation: "Financially Dependent Child/Grandchild (under 18)",
    tax: "RRSP may be used to purchase a fixed-term annuity to age 18; amount included in child&apos;s income each year as annuity payments are received",
    probate: "Avoids probate on direct designation",
    notes: "Not a full rollover; partial deferral through annuity; less tax-efficient than spouse rollover",
  },
  {
    designation: "Estate (no beneficiary named or estate named)",
    tax: "Full RRSP/RRIF value included in deceased&apos;s income in year of death; taxes payable from estate; reduces inheritance for beneficiaries",
    probate: "Subject to Ontario Estate Administration Tax; part of probated estate",
    notes: "Avoid where possible; use only where estate is the intended destination (e.g., for creditor protection through estate or specific testamentary planning)",
  },
];

const probateReduction = [
  { strategy: "Beneficiary designations on RRSPs, RRIFs, TFSAs, life insurance", description: "Assets pass directly to named beneficiaries outside the estate; no EAT payable on these assets; significant savings for large registered account holders" },
  { strategy: "Joint ownership with right of survivorship", description: "Joint tenancy passes property to surviving joint owner by survivorship — not through the will; no probate; risk: deemed disposition on transfer to joint owner may trigger capital gains" },
  { strategy: "Inter vivos trust (alter ego or joint partner trust)", description: "Transfer assets to alter ego or joint partner trust during lifetime; assets in trust avoid probate on death; useful for real estate, investment accounts, business interests" },
  { strategy: "Multiple-jurisdiction property in alter ego trust", description: "Property in multiple provinces requires a probate certificate in each province; alter ego trust holding title avoids multiple probate applications (saves fees and delays)" },
  { strategy: "Gifting during lifetime", description: "Lifetime gifts reduce estate size; gifted property avoids EAT; however, gifts may trigger deemed disposition for capital gains tax purposes — net after-tax analysis required" },
];

export default function OntarioEstatePlanningPage() {
  return (
    <>
      <Script id="ontario-estate-planning-schema" type="application/ld+json">
        {schemaJson}
      </Script>
      <Script id="ontario-estate-planning-faq" type="application/ld+json">
        {faqSchema}
      </Script>

      <div className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-amber-400 text-slate-900 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              Wills and Estates
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Ontario Estate Planning Guide 2024
            </h1>
            <p className="text-lg text-slate-300 mb-6 max-w-2xl">
              Testamentary trusts, spousal and alter ego trusts, RRSP/RRIF/TFSA
              beneficiary designations, Graduated Rate Estates, probate fee
              reduction strategies, and post-mortem planning for Ontario wills
              and estate lawyers.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-slate-400">
              <span>December 2024</span>
              <span>•</span>
              <span>15 min read</span>
              <span>•</span>
              <span>Wills and Estates</span>
            </div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-6 py-12">
          {/* Overview */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Ontario Estate Planning Framework
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Estate planning in Ontario combines provincial law (the{" "}
              <em>Succession Law Reform Act</em>, the{" "}
              <em>Estates Administration Act</em>, the{" "}
              <em>Estate Administration Tax Act</em>) with federal tax law
              (the <em>Income Tax Act</em>). Effective estate planning requires
              coordination of wills, powers of attorney, beneficiary
              designations, and trust structures to minimize probate fees,
              income tax, and family conflict.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              Ontario Estate Administration Tax (EAT) — colloquially &quot;probate
              fees&quot; — is charged at 1.5% of the value of the estate over
              $50,000 (as of 2020). For a $2 million estate, EAT is approximately
              $29,250. Reducing the value of the estate passing through probate
              is a primary estate planning objective for most Ontario clients.
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-900">
              <strong>Practice note — 2023 changes:</strong> The Ontario
              government amended the Estate Administration Tax Act in 2021-2022
              to require audit provisions where EAT returns are filed. Executors
              must retain records and may be audited on the valuations reported.
              Accurate property valuations at date of death are critical.
            </div>
          </section>

          {/* Trust Types */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Estate Planning Trusts in Ontario
            </h2>
            <div className="space-y-5">
              {trustTypes.map((trust, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-3">{trust.trust}</h3>
                  <div className="grid md:grid-cols-2 gap-3 text-sm">
                    <div>
                      <span className="font-semibold text-slate-700">When created: </span>
                      <span className="text-slate-600">{trust.when}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-slate-700">Tax benefit: </span>
                      <span className="text-slate-600">{trust.tax_benefit}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-slate-700">Probate: </span>
                      <span className="text-slate-600">{trust.probate}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-amber-700">Use case: </span>
                      <span className="text-slate-600">{trust.use_case}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* RRSP Planning */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              RRSP/RRIF Beneficiary Planning
            </h2>
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left px-4 py-3 font-semibold">Beneficiary Designation</th>
                    <th className="text-left px-4 py-3 font-semibold">Tax Treatment</th>
                    <th className="text-left px-4 py-3 font-semibold">Probate</th>
                    <th className="text-left px-4 py-3 font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {rrspPlanning.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-4 py-3 text-slate-700 font-semibold">{row.designation}</td>
                      <td className="px-4 py-3 text-slate-600">{row.tax}</td>
                      <td className="px-4 py-3 text-slate-600">{row.probate}</td>
                      <td className="px-4 py-3 text-slate-600">{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-slate-600 text-sm mt-3">
              <strong>TFSA beneficiary designations:</strong> Unlike RRSPs,
              TFSAs allow a &quot;successor holder&quot; designation (for spouses/CLP)
              where the TFSA continues in the surviving spouse&apos;s name with
              no income tax. For other beneficiaries, a &quot;designated beneficiary&quot;
              receives the TFSA value tax-free (since TFSA growth is not taxable);
              however, TFSA room is not transferred — the beneficiary cannot
              recontribute the received amount without their own contribution room.
            </p>
          </section>

          {/* Probate Reduction */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Ontario Probate Fee Reduction Strategies
            </h2>
            <div className="space-y-4">
              {probateReduction.map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-2 h-2 mt-2 bg-amber-400 rounded-full"></div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1 text-sm">{item.strategy}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* GRE */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Graduated Rate Estates (GRE) and Post-Mortem Planning
            </h2>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                <h3 className="font-semibold text-slate-900 mb-2 text-sm">Graduated Rate Estate Benefits</h3>
                <ul className="text-slate-600 text-sm space-y-2">
                  <li>GRE is taxed at graduated marginal rates (not the flat top rate) for up to 36 months after date of death</li>
                  <li>Tax year-end may be any date in first year (useful for timing income and deductions)</li>
                  <li>GRE can carry back terminal return losses to reduce taxes in the year of death</li>
                  <li>Only one GRE per deceased; must designate in first return filed</li>
                  <li>After 36 months, estate is taxed at flat top rate as an ordinary trust</li>
                </ul>
              </div>
              <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                <h3 className="font-semibold text-slate-900 mb-2 text-sm">Post-Mortem Planning Strategies</h3>
                <ul className="text-slate-600 text-sm space-y-2">
                  <li><strong>Loss carryback:</strong> Capital losses in estate can be carried back to offset capital gains in year of death (s.164(6) ITA election)</li>
                  <li><strong>Pipeline planning:</strong> Where deceased owned private company shares; avoids double taxation by extracting corporate surplus as tax-free capital rather than taxable dividends</li>
                  <li><strong>RRSP/RRIF offset:</strong> Eligible income of spouse/CLP from RRSP/RRIF rollover reduces the deceased&apos;s RRSP income inclusion</li>
                  <li><strong>Charitable bequest:</strong> Donation credits may be used in the terminal return, the prior year, or carried back from the estate to the terminal return</li>
                </ul>
              </div>
            </div>
          </section>

          {/* FAQs */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: "What is a spousal trust in Ontario estate planning?",
                  a: "A spousal trust is an inter vivos or testamentary trust that qualifies under s.70(6) or s.73(1) of the Income Tax Act for a tax-deferred transfer of property. For a testamentary spousal trust, the surviving spouse must be entitled to receive all income during their lifetime, and no other person may receive or use the income or capital during the spouse's lifetime. On the death of the spouse, the trust assets are treated as disposed at fair market value, and any accrued gains are included in the spouse's income in the year of death.",
                },
                {
                  q: "What is an alter ego trust in Ontario?",
                  a: "An alter ego trust is an inter vivos trust available to individuals 65 years or older under s.73(1.01) of the Income Tax Act. The settlor must be the sole beneficiary entitled to income and capital during their lifetime. An alter ego trust allows tax-deferred transfer of appreciated assets (no deemed disposition on transfer), avoids probate fees on death (assets pass under the trust deed, not the will), and provides privacy (no probate means no public record).",
                },
                {
                  q: "Should I name a beneficiary on my RRSP/RRIF or pass it through my estate?",
                  a: "Naming a beneficiary directly avoids Ontario Estate Administration Tax (probate fees) and delays. A rollover to a spouse or common-law partner is tax-deferred. If no named beneficiary or the estate is named, the full RRSP/RRIF value is included in the deceased's income in the year of death, triggering immediate tax. Ontario lawyers should advise clients to review RRSP/RRIF beneficiary designations at will drafting and on major life changes.",
                },
                {
                  q: "What is a Graduated Rate Estate in Ontario?",
                  a: "A Graduated Rate Estate (GRE) is a testamentary trust taxed at graduated marginal income tax rates (not the flat top rate) for up to 36 months after the date of death. To qualify, the estate must: be a testamentary trust; designate itself as a GRE in its first tax return; and not have previously been a GRE. The GRE is valuable for timing income and deductions within the estate to minimize overall estate tax during the 36-month window.",
                },
              ].map((faq, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                  <h3 className="font-semibold text-slate-900 mb-3">{faq.q}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="bg-slate-900 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">
              Manage Your Wills and Estates Practice with Atticus
            </h2>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto">
              Track limitation periods, manage trust accounting, and organize
              estate planning files with Atticus — built for Ontario solo and
              small law firms.
            </p>
            <Link
              href="/sign-up"
              className="inline-block bg-amber-400 text-slate-900 font-semibold px-8 py-3 rounded-lg hover:bg-amber-300 transition-colors"
            >
              Start Free Trial
            </Link>
          </section>

          {/* Related */}
          <section className="mt-12 pt-8 border-t border-slate-100">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">
              Related Ontario Law Guides
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { href: "/blog/how-to-make-a-will-ontario", label: "How to Make a Will in Ontario" },
                { href: "/blog/ontario-estate-administration", label: "Ontario Estate Administration" },
                { href: "/blog/ontario-wills-variation", label: "Ontario Wills Variation" },
                { href: "/blog/ontario-estate-litigation", label: "Ontario Estate Litigation" },
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
        </div>
      </div>
    </>
  );
}
