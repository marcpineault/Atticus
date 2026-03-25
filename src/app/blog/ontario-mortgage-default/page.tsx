import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ontario Mortgage Default and Power of Sale Guide | Atticus",
  description:
    "Complete guide to mortgage default remedies in Ontario: power of sale under the Mortgages Act, judicial sale, redemption rights, deficiency claims, and the 2024-2026 process timeline.",
  openGraph: {
    title: "Ontario Mortgage Default — Power of Sale, Redemption, and Deficiency",
    description:
      "Mortgage default remedies in Ontario: Mortgages Act RSO 1990 power of sale (35-day notice, redemption period, sale process), judicial sale, PPSA priority, deficiency claims, and Land Titles Act implications.",
    type: "article",
    url: "https://getatticus.ca/blog/ontario-mortgage-default",
  },
  alternates: { canonical: "https://getatticus.ca/blog/ontario-mortgage-default" },
};

export default function OntarioMortgageDefaultPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Ontario Mortgage Default — Power of Sale, Redemption, and Deficiency",
    description:
      "Power of sale and judicial remedies for mortgage default in Ontario under the Mortgages Act RSO 1990.",
    author: { "@type": "Organization", name: "Atticus" },
    publisher: { "@type": "Organization", name: "Atticus" },
    datePublished: "2026-03-01",
    dateModified: "2026-03-01",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="inline-block bg-amber-500 text-slate-900 text-sm font-semibold px-4 py-1 rounded-full mb-6">
              Real Estate Law
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Ontario Mortgage Default — Power of Sale, Redemption, and Deficiency
            </h1>
            <p className="text-xl text-slate-300">
              Mortgages Act RSO 1990 c M.40 power of sale procedure, redemption rights, judicial sale,
              deficiency claims, priority among mortgages, and lender obligations — practical guide
              for Ontario real estate counsel.
            </p>
          </div>
        </section>

        <article className="py-16 px-4">
          <div className="max-w-3xl mx-auto prose prose-slate prose-lg">

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Overview — Mortgage Default Remedies in Ontario</h2>
            <p className="text-slate-600 mb-4">
              When a mortgagor (borrower) defaults on a mortgage, Ontario law provides two primary
              remedies for the mortgagee (lender): <strong>power of sale</strong> (statutory right
              under the <em>Mortgages Act</em> RSO 1990 c M.40) and <strong>judicial sale by
              foreclosure</strong> (court-ordered sale). Power of sale is by far the more common
              remedy in Ontario — it is faster, less expensive, and does not require a court application.
            </p>
            <p className="text-slate-600 mb-4">
              Unlike other provinces where the lender forecloses (takes title to the property), Ontario
              power of sale does not transfer title to the mortgagee. The mortgagee sells the property
              as agent for the mortgagor, applies the proceeds to the mortgage debt, and pays any surplus
              to the mortgagor (or subordinate charge holders). The mortgagee never takes title.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Power of Sale — Step by Step</h2>

            <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">Step 1: Notice of Sale (s.32)</h3>
            <p className="text-slate-600 mb-4">
              Before exercising power of sale, the mortgagee must give the mortgagor written notice
              of the intention to sell under s.32 of the <em>Mortgages Act</em>. The notice must:
            </p>
            <ul className="space-y-2 text-slate-600 mb-4 list-none">
              <li className="flex gap-3"><span className="text-amber-500 font-bold">•</span><span>Be in writing and served on the mortgagor (and any subsequent encumbrancers) personally or by registered mail to their last known address</span></li>
              <li className="flex gap-3"><span className="text-amber-500 font-bold">•</span><span>Identify the default (missed payments, property tax arrears, insurance lapse, etc.)</span></li>
              <li className="flex gap-3"><span className="text-amber-500 font-bold">•</span><span>State the amount required to cure the default and redeem the mortgage</span></li>
              <li className="flex gap-3"><span className="text-amber-500 font-bold">•</span><span>State the mortgagee&apos;s intention to exercise power of sale if the default is not cured</span></li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">Step 2: Redemption Period</h3>
            <p className="text-slate-600 mb-4">
              After service of the Notice of Sale, the mortgagor has a <strong>35-day statutory
              redemption period</strong> (s.32) to cure the default and redeem the mortgage. The
              mortgagee may not sell the property during this period.
            </p>
            <p className="text-slate-600 mb-4">
              However, if the mortgage document contains a longer notice provision, that provision
              governs. Most institutional mortgage documents (bank standard forms) contain the 35-day
              statutory minimum — private mortgages and commercial mortgages may provide for longer
              redemption periods.
            </p>
            <p className="text-slate-600 mb-4">
              Cure of default during the redemption period requires payment of: all arrears of
              interest and principal, property taxes in arrears, insurance premiums in arrears,
              the mortgagee&apos;s legal costs incurred to the date of cure (typically $500–$2,000 for
              the notice stage), and any other sums required under the mortgage terms.
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">Step 3: Property Listing and Sale</h3>
            <p className="text-slate-600 mb-4">
              If the mortgagor does not cure the default within the redemption period, the mortgagee
              may proceed to sell. The mortgagee&apos;s key obligation is to obtain the best price
              reasonably obtainable in the circumstances — <strong>not necessarily fair market value</strong>,
              but a price that a reasonable vendor would accept in a properly conducted sale
              (<em>Farrar v Farrars Ltd</em> (1888) 40 Ch D 395, adopted in Ontario).
            </p>
            <p className="text-slate-600 mb-4">
              The mortgagee must take reasonable steps to obtain the best price, which typically includes:
            </p>
            <ul className="space-y-2 text-slate-600 mb-4 list-none">
              <li className="flex gap-3"><span className="text-amber-500 font-bold">•</span><span>Listing with a licensed real estate agent on MLS</span></li>
              <li className="flex gap-3"><span className="text-amber-500 font-bold">•</span><span>Obtaining an appraisal or BMA (Broker Market Analysis) before listing</span></li>
              <li className="flex gap-3"><span className="text-amber-500 font-bold">•</span><span>Allowing reasonable time for the property to be marketed</span></li>
              <li className="flex gap-3"><span className="text-amber-500 font-bold">•</span><span>Not selling to a related party or at an obvious undervalue</span></li>
            </ul>
            <p className="text-slate-600 mb-4">
              The mortgagee may sell without court approval. The purchaser on a power of sale takes
              clear title free of the mortgage and subsequent encumbrances (s.35) — subsequent
              mortgages are discharged on registration of the power of sale deed.
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">Step 4: Distribution of Proceeds</h3>
            <p className="text-slate-600 mb-4">
              After the sale, proceeds are distributed in this priority order:
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full border border-slate-200 rounded-lg">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="text-left py-3 px-4 font-semibold text-slate-700">Priority</th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-700">Item</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    ["1st", "Mortgagee's costs of sale (real estate commission, legal fees, disbursements)"],
                    ["2nd", "Outstanding principal, interest, and other sums due under the first mortgage"],
                    ["3rd", "Subsequent charge holders in priority order (second mortgages, third mortgages, construction liens, judgment liens)"],
                    ["4th", "Surplus to the mortgagor"],
                  ].map(([priority, item]) => (
                    <tr key={priority} className="hover:bg-slate-50">
                      <td className="py-3 px-4 text-amber-600 font-semibold">{priority}</td>
                      <td className="py-3 px-4 text-slate-600">{item}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Deficiency Claims</h2>
            <p className="text-slate-600 mb-4">
              A deficiency arises when the power of sale proceeds are insufficient to satisfy the
              full mortgage debt. The mortgagee may sue the mortgagor personally for the deficiency
              — this is a personal debt claim, not a property claim.
            </p>
            <p className="text-slate-600 mb-4">
              Ontario has no anti-deficiency legislation for residential mortgages (unlike some US
              states). The mortgagee may sue for the full deficiency in the Ontario Superior Court
              of Justice. The limitation period is 2 years from the date the deficiency is quantified
              (i.e., from the date of the power of sale closing, when the net proceeds are determined).
            </p>
            <p className="text-slate-600 mb-4">
              However, if the mortgagee failed to obtain the best price reasonably obtainable, the
              mortgagor may counterclaim in the deficiency action for the shortfall attributable to
              the inadequate sale price. The mortgagee must prove the sale was conducted at arm&apos;s
              length and at the best price reasonably obtainable in the circumstances.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Judicial Sale by Foreclosure</h2>
            <p className="text-slate-600 mb-4">
              The alternative to power of sale is a court application for judicial sale under s.39
              of the <em>Mortgages Act</em>. Judicial sale is significantly less common in Ontario
              because power of sale is faster and less expensive. However, judicial sale may be
              preferable where:
            </p>
            <ul className="space-y-2 text-slate-600 mb-4 list-none">
              <li className="flex gap-3"><span className="text-amber-500 font-bold">•</span><span>The mortgage instrument does not contain a power of sale clause</span></li>
              <li className="flex gap-3"><span className="text-amber-500 font-bold">•</span><span>The mortgagor is in bankruptcy and automatic stay applies to power of sale proceedings</span></li>
              <li className="flex gap-3"><span className="text-amber-500 font-bold">•</span><span>Title is defective and the mortgagee wants a court-supervised process to ensure clear title to the purchaser</span></li>
              <li className="flex gap-3"><span className="text-amber-500 font-bold">•</span><span>There is a dispute about the amount owing or priority that benefits from court supervision</span></li>
            </ul>
            <p className="text-slate-600 mb-4">
              Under judicial sale, the court appoints a reference officer who oversees the sale process.
              The reference officer confirms the amount owing, gives notice to all encumbrancers,
              supervises the listing and sale, and reports to the court. A judicial sale is typically
              6–12 months longer than power of sale.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Mortgagor&apos;s Rights During Power of Sale</h2>
            <p className="text-slate-600 mb-4">
              The mortgagor retains several rights during the power of sale process:
            </p>
            <ul className="space-y-3 text-slate-600 mb-6 list-none">
              <li className="flex gap-3">
                <span className="text-amber-500 font-bold">•</span>
                <span><strong>Right of redemption</strong>: the mortgagor may redeem (pay off the mortgage in full) at any time up until the moment the power of sale closes — even after the property is listed and an offer is accepted, the mortgagor may redeem by paying the full amount required to discharge</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500 font-bold">•</span>
                <span><strong>Right to challenge inadequate sale price</strong>: the mortgagor may seek an injunction to stop the sale if the proposed price is grossly inadequate, or sue for damages after the sale if the price was not the best obtainable</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500 font-bold">•</span>
                <span><strong>Right to surplus</strong>: after all encumbrances are satisfied, any surplus belongs to the mortgagor</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500 font-bold">•</span>
                <span><strong>Right to notice of sale</strong>: all subsequent encumbrancers must receive notice of the sale and have an opportunity to redeem or exercise their own rights</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Priority Among Charges</h2>
            <p className="text-slate-600 mb-4">
              Under the <em>Land Titles Act</em> RSO 1990 c L.5 and <em>Registry Act</em> RSO 1990 c R.20,
              priority among charges on land is generally determined by registration order (first in
              time, first in right), subject to exceptions:
            </p>
            <ul className="space-y-2 text-slate-600 mb-4 list-none">
              <li className="flex gap-3"><span className="text-amber-500 font-bold">•</span><span><strong>Construction liens</strong> under the <em>Construction Act</em> RSO 1990 c C.30 have a special priority over mortgages registered after the first lien attached — the date of lien attachment relates back to the first supply of services or materials to the improvement</span></li>
              <li className="flex gap-3"><span className="text-amber-500 font-bold">•</span><span><strong>Property tax arrears</strong> have a super-priority over all charges — property taxes in arrears survive a power of sale and must be paid from proceeds first</span></li>
              <li className="flex gap-3"><span className="text-amber-500 font-bold">•</span><span><strong>Crown priority</strong> — certain Crown claims (source deductions, HST, environmental liabilities) may have priority over registered charges in specified circumstances</span></li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Practical Checklist for Mortgagee&apos;s Counsel</h2>
            <ul className="space-y-3 text-lg text-slate-600">
              <li className="flex gap-3">
                <span className="text-amber-500 font-bold mt-1">✓</span>
                <span>Confirm power of sale clause exists in mortgage instrument — not all mortgages contain it; statutory power under s.25 requires a charge or mortgage &quot;under seal&quot;</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500 font-bold mt-1">✓</span>
                <span>Conduct title search to identify all encumbrancers who must receive Notice of Sale — construction liens, caveats, second mortgages, execution creditors</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500 font-bold mt-1">✓</span>
                <span>Calculate exact amount in default including principal, interest, tax arrears, insurance, and legal costs to date — mortgagor has right to redeem on payment of this amount</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500 font-bold mt-1">✓</span>
                <span>Serve Notice of Sale properly — personal service or registered mail to last known address; incorrect service voids the notice and restarts the 35-day period</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500 font-bold mt-1">✓</span>
                <span>Obtain BMA/appraisal before listing and document the best price analysis — critical to defend against mortgagor&apos;s inadequate sale price challenge</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500 font-bold mt-1">✓</span>
                <span>Confirm no bankruptcy/CCAA stay — insolvency proceedings automatically stay power of sale proceedings without leave of the insolvency court</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500 font-bold mt-1">✓</span>
                <span>Assess deficiency at closing — if proceeds insufficient, issue claim within 2-year limitation period; document mortgagor&apos;s personal covenant to pay</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500 font-bold mt-1">✓</span>
                <span>Trust accounting: sale proceeds must be held in trust — LSO By-Law 9 applies to all funds held in the course of a real estate transaction</span>
              </li>
            </ul>

            <div className="mt-12 bg-amber-50 rounded-xl p-6 border border-amber-200">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Manage Mortgage Default Files with Atticus
              </h3>
              <p className="text-slate-600 mb-4">
                Atticus helps Ontario real estate and lending counsel manage power of sale files,
                track redemption period deadlines, and maintain LSO-compliant trust accounting for
                sale proceeds. AI document analysis extracts key terms from mortgage documents, title
                searches, and discharge statements.
              </p>
              <a
                href="/sign-up"
                className="inline-block bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold py-3 px-8 rounded-lg transition-colors"
              >
                Try Atticus Free
              </a>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
