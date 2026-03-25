import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ontario Mortgage Law Guide 2024: Power of Sale, Foreclosure, and Discharge",
  description:
    "Complete guide to Ontario mortgage law: Mortgages Act power of sale (s.22 notice, redemption periods, surplus proceeds), foreclosure vs power of sale election, priority rules (first/second mortgages, LTA registration), PPSA fixture rules, mortgage discharge and title insurance for Ontario real estate lawyers.",
  openGraph: {
    title: "Ontario Mortgage Law Guide 2024: Power of Sale, Foreclosure, and Discharge",
    description:
      "Power of sale (s.22 notice, 35-day redemption), foreclosure vs power of sale, mortgage priority and discharge rules for Ontario real estate and lending lawyers.",
    url: "https://getatticus.ca/blog/ontario-mortgage-law",
    siteName: "Atticus",
    type: "article",
  },
  alternates: { canonical: "https://getatticus.ca/blog/ontario-mortgage-law" },
};

const articleSchema = `{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Ontario Mortgage Law Guide 2024: Power of Sale, Foreclosure, and Discharge",
  "description": "Complete guide to Ontario mortgage law for real estate and lending lawyers: power of sale process, foreclosure, mortgage priority, and discharge.",
  "author": { "@type": "Organization", "name": "Atticus" },
  "publisher": { "@type": "Organization", "name": "Atticus", "url": "https://getatticus.ca" },
  "url": "https://getatticus.ca/blog/ontario-mortgage-law",
  "datePublished": "2024-12-01",
  "dateModified": "2024-12-01",
  "mainEntityOfPage": "https://getatticus.ca/blog/ontario-mortgage-law"
}`;

const faqSchema = `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the power of sale notice period in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Under Mortgages Act s.22, the mortgagee must serve a 35-day notice of exercise of power of sale (Form 1). The mortgagor has 35 days to redeem by paying arrears plus costs. If default is not remedied, the mortgagee may proceed to sell. The full mortgage balance becomes due on sale."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between power of sale and foreclosure in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Power of sale is the most common remedy: the mortgagee sells the property, applies proceeds to the debt, and any surplus goes to the mortgagor. Foreclosure extinguishes the mortgagor's equity of redemption through court order — the mortgagee takes title and keeps any surplus. Foreclosure requires a court application and is slower; power of sale is faster but the mortgagee remains liable to account for surplus proceeds."
      }
    },
    {
      "@type": "Question",
      "name": "How does mortgage priority work in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Priority in Ontario is governed by the Land Titles Act (LTA) — first-registered mortgage takes priority (s.72 LTA). A second mortgagee who acquires a first mortgage does not merge if they intend to keep them separate (tacking). Intervening interests registered between a first and second mortgage rank ahead of the second. Discharge of the first does not automatically advance the second if a new first is registered."
      }
    },
    {
      "@type": "Question",
      "name": "How is a mortgage discharged in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mortgage discharge is registered on title under the Land Registration Reform Act using Form 3 (Discharge of Charge). The mortgagee must provide the discharge within a reasonable time after full payment. If the mortgagee fails to discharge, the mortgagor may apply to court for a vesting order or may use the Mortgages Act to compel discharge. Title insurance can protect against delay or failure to discharge."
      }
    }
  ]
}`;

type PowerOfSaleStep = {
  step: string;
  action: string;
  timeline: string;
  notes: string;
};

const powerOfSaleSteps: PowerOfSaleStep[] = [
  {
    step: "1. Default",
    action: "Mortgagor fails to make payments or breaches covenant",
    timeline: "Day 0",
    notes: "Default triggers mortgagee rights under Mortgages Act and mortgage terms",
  },
  {
    step: "2. Demand letter",
    action: "Mortgagee demands payment of arrears",
    timeline: "Day 1-15",
    notes: "Practical step before formal notice; not statutorily required but common",
  },
  {
    step: "3. s.22 Notice (Form 1)",
    action: "Serve notice of exercise of power of sale on mortgagor and subsequent encumbrancers",
    timeline: "Day 15-30",
    notes: "Must be served personally or by registered mail; 35-day redemption period begins on service",
  },
  {
    step: "4. Redemption period",
    action: "Mortgagor has 35 days to pay arrears, interest, and costs",
    timeline: "Days 30-65",
    notes: "If mortgagor pays arrears within 35 days, mortgage reinstates; full balance becomes due on sale",
  },
  {
    step: "5. Listing and sale",
    action: "Property listed; mortgagee must sell for best price reasonably obtainable",
    timeline: "Days 65+",
    notes: "Mortgagee duty to obtain fair market value; cannot sell to related party at undervalue",
  },
  {
    step: "6. Surplus proceeds",
    action: "Sale proceeds applied: costs, first mortgage balance, subsequent encumbrancers, surplus to mortgagor",
    timeline: "On closing",
    notes: "Surplus paid to mortgagor; if competing claims, interpleader or court direction may be required",
  },
];

type MortgagePriorityRule = {
  scenario: string;
  rule: string;
  authority: string;
};

const priorityRules: MortgagePriorityRule[] = [
  {
    scenario: "First vs. second mortgage",
    rule: "First-registered mortgage takes priority under LTA s.72; date and time of registration controls",
    authority: "Land Titles Act s.72",
  },
  {
    scenario: "Tacking / tabula in naufragio",
    rule: "Second mortgagee who acquires the first may tack if no notice of intervening interests at time of acquisition; tabula doctrine largely displaced in LTA system",
    authority: "Equity of tacking; limited under LTA",
  },
  {
    scenario: "Construction mortgage advances",
    rule: "Future advances under a registered mortgage retain priority from date of registration if optional advances have priority notice filed; mandatory advances always retain priority",
    authority: "Mortgages Act s.93-96",
  },
  {
    scenario: "PPSA fixture vs. LTA mortgage",
    rule: "Mortgage registered before PPSA fixture filing takes priority over the fixture; PPSA secured party who files before mortgage registration takes priority for the fixture",
    authority: "PPSA s.34(1)(a)-(b)",
  },
  {
    scenario: "Property tax arrears",
    rule: "Municipal property tax arrears rank in priority over all mortgages under the Municipal Act 2001",
    authority: "Municipal Act 2001 s.349",
  },
  {
    scenario: "Construction lien",
    rule: "Construction lien attaches as of first supply of services or materials; may take priority over advances made after lien arose if mortgagee had notice",
    authority: "Construction Act s.78",
  },
];

type DischargeScenario = {
  situation: string;
  process: string;
  risk: string;
};

const dischargeScenarios: DischargeScenario[] = [
  {
    situation: "Standard full payoff on sale",
    process: "Mortgagee provides Form 3 discharge statement; registered on LTA on closing",
    risk: "Low — title insurance covers gap period between discharge undertaking and registration",
  },
  {
    situation: "Partial discharge (one lot from blanket mortgage)",
    process: "Mortgagee executes partial discharge of charge for specific parcel; balance mortgage continues on remaining parcels",
    risk: "Moderate — ensure discharge covers correct PIN/parcel; blanket mortgage must be carefully reviewed",
  },
  {
    situation: "Mortgagee refuses to discharge (paid in full)",
    process: "Application to court for vesting order or order compelling discharge; or Mortgages Act application",
    risk: "High delay — cloud on title; title insurer will not remove exception without court order or statutory process",
  },
  {
    situation: "Mortgagee bankruptcy (institutional lender)",
    process: "Trustee in bankruptcy or CMHC (if insured) has authority to execute discharge; may require court direction",
    risk: "Complex — confirm authority of party executing discharge; ensure chain of title to discharge authority",
  },
  {
    situation: "Private mortgagee deceased",
    process: "Estate trustee under Certificate of Appointment executes discharge as attorney for deceased mortgagee",
    risk: "Moderate — ensure Certificate of Appointment covers authority; confirm no competing claims to estate",
  },
];

export default function OntarioMortgageLawPage() {
  return (
    <>
      <Script id="ontario-mortgage-law-article-schema" type="application/ld+json">
        {articleSchema}
      </Script>
      <Script id="ontario-mortgage-law-faq-schema" type="application/ld+json">
        {faqSchema}
      </Script>

      <div className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-amber-400 text-slate-900 text-sm font-semibold px-4 py-1 rounded-full mb-4">
              Real Estate Law
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Ontario Mortgage Law Guide 2024
            </h1>
            <p className="text-xl text-slate-300 mb-4">
              Power of Sale, Foreclosure, Priority, and Discharge
            </p>
            <p className="text-slate-400 text-sm">December 2024 &middot; 13 min read</p>
          </div>
        </section>

        {/* Intro */}
        <section className="py-12 px-6 border-b border-slate-100">
          <div className="max-w-4xl mx-auto prose prose-slate max-w-none">
            <p className="text-lg text-slate-700 leading-relaxed">
              Mortgage enforcement in Ontario is governed primarily by the <strong>Mortgages Act</strong> (power
              of sale procedure), the <strong>Land Titles Act</strong> (priority and registration), and the
              <strong> Courts of Justice Act</strong> (foreclosure). Ontario defaults to power of sale rather than
              foreclosure — a faster, out-of-court enforcement mechanism that accounts for the vast majority
              of residential and commercial mortgage enforcement actions. This guide covers the power of sale
              timeline, priority rules including PPSA fixtures and construction liens, discharge procedures,
              and the foreclosure election.
            </p>
          </div>
        </section>

        {/* Power of Sale Timeline */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Power of Sale: Mortgages Act s.22 Process
            </h2>
            <p className="text-slate-600 mb-8">
              Ontario power of sale under Mortgages Act s.22 follows a statutory timeline from default to
              closing. The mortgagee must serve Form 1 notice and allow a 35-day redemption period before
              marketing the property.
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
              <table className="w-full bg-white">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left px-5 py-4 font-semibold">Step</th>
                    <th className="text-left px-5 py-4 font-semibold">Action</th>
                    <th className="text-left px-5 py-4 font-semibold">Timeline</th>
                    <th className="text-left px-5 py-4 font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {powerOfSaleSteps.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-5 py-4 text-slate-700 font-semibold text-sm whitespace-nowrap">{row.step}</td>
                      <td className="px-5 py-4 text-slate-700 text-sm">{row.action}</td>
                      <td className="px-5 py-4 text-slate-600 text-sm whitespace-nowrap">{row.timeline}</td>
                      <td className="px-5 py-4 text-slate-500 text-sm">{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-slate-500 text-sm mt-4">
              * Residential mortgages with consumer mortgagors may have additional protections; commercial mortgages may allow contractual acceleration clauses.
            </p>
          </div>
        </section>

        {/* Foreclosure vs Power of Sale */}
        <section className="py-16 px-6 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              Foreclosure vs. Power of Sale: The Election
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Power of Sale</h3>
                <ul className="space-y-3 text-sm text-slate-700">
                  <li className="flex gap-2"><span className="text-green-600 font-bold mt-0.5">✓</span><span>Out-of-court process; faster and cheaper</span></li>
                  <li className="flex gap-2"><span className="text-green-600 font-bold mt-0.5">✓</span><span>Mortgagee sells as agent; mortgagor retains right to surplus proceeds</span></li>
                  <li className="flex gap-2"><span className="text-green-600 font-bold mt-0.5">✓</span><span>No court involvement unless disputed</span></li>
                  <li className="flex gap-2"><span className="text-amber-500 font-bold mt-0.5">!</span><span>Mortgagee duty to obtain fair market value; liable for shortfall if sold at undervalue</span></li>
                  <li className="flex gap-2"><span className="text-amber-500 font-bold mt-0.5">!</span><span>If proceeds insufficient, mortgagee may sue on covenant for deficiency</span></li>
                  <li className="flex gap-2"><span className="text-amber-500 font-bold mt-0.5">!</span><span>More common for residential and standard commercial mortgages</span></li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Foreclosure</h3>
                <ul className="space-y-3 text-sm text-slate-700">
                  <li className="flex gap-2"><span className="text-green-600 font-bold mt-0.5">✓</span><span>Court order extinguishes equity of redemption; mortgagee takes title</span></li>
                  <li className="flex gap-2"><span className="text-green-600 font-bold mt-0.5">✓</span><span>Mortgagee keeps surplus (if property increases in value post-foreclosure)</span></li>
                  <li className="flex gap-2"><span className="text-amber-500 font-bold mt-0.5">!</span><span>Requires application to court; slower and more expensive</span></li>
                  <li className="flex gap-2"><span className="text-amber-500 font-bold mt-0.5">!</span><span>Court may order sale instead of foreclosure if equity of redemption has value</span></li>
                  <li className="flex gap-2"><span className="text-amber-500 font-bold mt-0.5">!</span><span>Generally elected when: property value below mortgage balance (negative equity) or complex title issues requiring court supervision</span></li>
                  <li className="flex gap-2"><span className="text-red-500 font-bold mt-0.5">✗</span><span>Mortgagee typically cannot sue on personal covenant after foreclosure in most cases</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Priority Rules */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Mortgage Priority Rules in Ontario
            </h2>
            <p className="text-slate-600 mb-8">
              Mortgage priority in Ontario is governed by the Land Titles Act registration system — first
              registered takes priority. However, several rules create exceptions for construction liens,
              PPSA fixtures, tax arrears, and future advances.
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
              <table className="w-full bg-white">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left px-5 py-4 font-semibold">Scenario</th>
                    <th className="text-left px-5 py-4 font-semibold">Priority Rule</th>
                    <th className="text-left px-5 py-4 font-semibold">Authority</th>
                  </tr>
                </thead>
                <tbody>
                  {priorityRules.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-5 py-4 text-slate-700 font-semibold text-sm">{row.scenario}</td>
                      <td className="px-5 py-4 text-slate-700 text-sm">{row.rule}</td>
                      <td className="px-5 py-4 text-slate-500 text-sm font-mono text-xs">{row.authority}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Discharge */}
        <section className="py-16 px-6 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Mortgage Discharge: Process and Risk Management
            </h2>
            <p className="text-slate-600 mb-8">
              Mortgage discharge in Ontario requires registration of Form 3 (Discharge of Charge) under the
              Land Registration Reform Act. Discharge scenarios range from standard payoff-on-closing to complex
              situations involving mortgagee insolvency or refusal to discharge.
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
              <table className="w-full bg-white">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left px-5 py-4 font-semibold">Situation</th>
                    <th className="text-left px-5 py-4 font-semibold">Process</th>
                    <th className="text-left px-5 py-4 font-semibold">Risk</th>
                  </tr>
                </thead>
                <tbody>
                  {dischargeScenarios.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-5 py-4 text-slate-700 font-semibold text-sm">{row.situation}</td>
                      <td className="px-5 py-4 text-slate-700 text-sm">{row.process}</td>
                      <td className="px-5 py-4 text-slate-500 text-sm">{row.risk}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              Frequently Asked Questions: Ontario Mortgage Law
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: "What is the power of sale notice period in Ontario?",
                  a: "Under Mortgages Act s.22, the mortgagee must serve a 35-day notice of exercise of power of sale (Form 1). The mortgagor has 35 days to redeem by paying arrears plus costs. If default is not remedied, the mortgagee may proceed to sell. The full mortgage balance becomes due on sale.",
                },
                {
                  q: "What is the difference between power of sale and foreclosure in Ontario?",
                  a: "Power of sale is the most common remedy: the mortgagee sells the property, applies proceeds to the debt, and any surplus goes to the mortgagor. Foreclosure extinguishes the mortgagor's equity of redemption through court order — the mortgagee takes title and keeps any surplus. Foreclosure requires a court application and is slower; power of sale is faster but the mortgagee remains liable to account for surplus proceeds.",
                },
                {
                  q: "How does mortgage priority work in Ontario?",
                  a: "Priority in Ontario is governed by the Land Titles Act (LTA) — first-registered mortgage takes priority (s.72 LTA). A second mortgagee who acquires a first mortgage does not merge if they intend to keep them separate (tacking). Intervening interests registered between a first and second mortgage rank ahead of the second. Discharge of the first does not automatically advance the second if a new first is registered.",
                },
                {
                  q: "How is a mortgage discharged in Ontario?",
                  a: "Mortgage discharge is registered on title under the Land Registration Reform Act using Form 3 (Discharge of Charge). The mortgagee must provide the discharge within a reasonable time after full payment. If the mortgagee fails to discharge, the mortgagor may apply to court for a vesting order or may use the Mortgages Act to compel discharge. Title insurance can protect against delay or failure to discharge.",
                },
              ].map((faq, i) => (
                <div key={i} className="border border-slate-200 rounded-xl p-6 bg-white">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">{faq.q}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Atticus CTA */}
        <section className="py-16 px-6 bg-amber-50 border-t border-amber-100">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Track Mortgage Files and Deadlines with Atticus
            </h2>
            <p className="text-slate-600 mb-8">
              Atticus tracks power of sale notice periods, redemption deadlines, closing dates, and trust
              funds for Ontario real estate and lending lawyers. AI document analysis extracts key dates and
              amounts from mortgage documents automatically.
            </p>
            <Link
              href="/sign-up"
              className="inline-block bg-slate-900 text-white font-semibold px-10 py-4 rounded-lg hover:bg-slate-700 transition-colors"
            >
              Try Atticus Free for 14 Days
            </Link>
          </div>
        </section>

        {/* Related */}
        <section className="py-12 px-6 border-t border-slate-100">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-lg font-semibold text-slate-900 mb-6">Related Guides</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { href: "/blog/ontario-debtor-creditor-law", label: "Ontario Debtor-Creditor Law" },
                { href: "/blog/ontario-bankruptcy-insolvency", label: "Ontario Bankruptcy & Insolvency" },
                { href: "/blog/ontario-real-estate-closing", label: "Ontario Real Estate Closing" },
                { href: "/ontario-real-estate-lawyer", label: "Atticus for Real Estate Lawyers" },
                { href: "/trust-accounting-ontario", label: "Ontario Trust Accounting" },
                { href: "/ontario-limitation-period", label: "Ontario Limitation Periods" },
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
