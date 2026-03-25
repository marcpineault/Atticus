import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ontario Mareva Injunctions: Asset Freezing Orders, Requirements, and Worldwide Relief (2024)",
  description:
    "Complete guide to Mareva injunctions in Ontario. The test for a freezing order, strong prima facie case, real risk of asset dissipation, balance of convenience, undertaking as to damages, standard form terms, disclosure and living expenses exceptions, worldwide Mareva orders, Anton Piller orders, and garnishment as alternative.",
  alternates: { canonical: "https://getatticus.ca/blog/ontario-mareva-injunction" },
  openGraph: {
    title: "Ontario Mareva Injunctions: Asset Freezing Orders, Requirements, and Worldwide Relief (2024)",
    description:
      "Guide to Mareva injunctions in Ontario — strong prima facie case, real risk of dissipation, undertaking as to damages, standard terms, worldwide Mareva orders, Anton Piller orders, and procedural requirements.",
    url: "https://getatticus.ca/blog/ontario-mareva-injunction",
    type: "article",
  },
};

const schemaJson = `{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Ontario Mareva Injunctions: Asset Freezing Orders, Requirements, and Worldwide Relief (2024)",
  "description": "Complete guide to Mareva injunctions in Ontario. Test for freezing orders, strong prima facie case, real risk of dissipation, undertaking as to damages, standard terms, worldwide Mareva, and Anton Piller orders.",
  "author": { "@type": "Organization", "name": "Atticus" },
  "publisher": { "@type": "Organization", "name": "Atticus", "url": "https://getatticus.ca" },
  "url": "https://getatticus.ca/blog/ontario-mareva-injunction",
  "datePublished": "2024-12-01",
  "dateModified": "2024-12-01"
}`;

export default function OntarioMarevaInjunctionPage() {
  return (
    <>
      <Script id="ontario-mareva-injunction-schema" type="application/ld+json">
        {schemaJson}
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
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-amber-100 text-amber-800 text-xs font-semibold px-3 py-1 rounded-full">
                Civil Litigation
              </span>
              <span className="text-slate-400 text-sm">13 min read</span>
              <span className="text-slate-400 text-sm">December 2024</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-6">
              Ontario Mareva Injunctions: Asset Freezing Orders, Requirements, and Worldwide Relief
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              A Mareva injunction (now commonly called a freezing order) is one of the most powerful
              remedies available in Ontario civil litigation. Named after the English Court of Appeal
              decision in <em>Mareva Compania Naviera SA v International Bulkcarriers SA</em> [1980]
              1 All ER 213, a Mareva order restrains a defendant from dissipating or removing assets
              pending the outcome of a proceeding. Ontario courts apply a stringent test before granting
              such extraordinary relief, and the order carries serious obligations on both sides.
            </p>
          </header>

          <article className="prose prose-slate max-w-none">
            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
              The Purpose of a Mareva Injunction
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              A Mareva injunction is designed to prevent a defendant from rendering a prospective
              judgment worthless by disposing of, hiding, or removing assets before the plaintiff
              can enforce a judgment. Without such relief, a dishonest defendant could transfer assets
              to related parties, move assets offshore, or dissipate assets through lavish spending
              in the knowledge that litigation would take years to resolve.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              The remedy is exceptional — it operates in personam against the defendant, restraining
              their conduct, and does not create a security interest or charge over specific assets.
              The plaintiff remains an unsecured creditor despite the order, which is why Mareva
              relief is often pursued in conjunction with other security-obtaining remedies.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
              The Test for a Mareva Injunction in Ontario
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Ontario courts apply a more stringent test for Mareva orders than for ordinary interlocutory
              injunctions. The leading Ontario authority is <em>Chitel v Rothbart</em> (1982) 39 OR
              (2d) 513 (CA), which requires the plaintiff to establish:
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
              1. A Strong Prima Facie Case
            </h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              For a Mareva injunction, courts require more than a &quot;serious question to be tried&quot; —
              the standard for ordinary interlocutory injunctions under <em>American Cyanamid Co v
              Ethicon Ltd</em> [1975] AC 396 (adopted in Ontario). The plaintiff must establish
              a strong prima facie case — a higher threshold reflecting the extraordinary nature of
              the remedy.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              A strong prima facie case requires more than mere arguability. The plaintiff must adduce
              evidence that, if accepted at trial, would demonstrate a clear cause of action. Courts
              will review the underlying merits to assess whether there is substantial evidence supporting
              the claim, not merely an arguable case.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
              2. A Real Risk of Asset Dissipation
            </h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              The plaintiff must demonstrate a real risk — not a speculative or theoretical risk —
              that the defendant will remove or dissipate their assets before judgment can be executed.
              A mere concern that the defendant might not have assets to satisfy a judgment is
              insufficient; there must be positive evidence of a real and not merely fanciful risk
              of dissipation.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Evidence establishing a real risk of dissipation may include:
            </p>
            <ul className="list-disc pl-6 mb-4 text-slate-700 space-y-2">
              <li>Past conduct of the defendant — prior fraud, prior dissipation, or prior attempts
              to evade creditors</li>
              <li>Evidence that the defendant has begun transferring assets since learning of the
              claim</li>
              <li>The nature of the defendant&apos;s assets — predominantly cash or liquid assets easily
              moved offshore</li>
              <li>International connections that would facilitate asset removal</li>
              <li>Evidence of dishonesty or fraudulent conduct underlying the claim</li>
              <li>Corporate structures designed to shield assets</li>
            </ul>
            <p className="text-slate-700 leading-relaxed mb-4">
              Courts are cautious about granting Mareva relief based on mere insolvency risk or a
              defendant who appears to be in financial difficulty — financial difficulty alone is not
              equivalent to a real risk of dissipation. The risk must be of deliberate conduct by
              the defendant to put assets beyond the plaintiff&apos;s reach.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
              3. The Balance of Convenience
            </h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              Even where the first two elements are established, the court must be satisfied that
              the balance of convenience favours granting the relief. The court weighs:
            </p>
            <ul className="list-disc pl-6 mb-4 text-slate-700 space-y-2">
              <li>The harm to the plaintiff if the order is refused and assets are dissipated</li>
              <li>The harm to the defendant if the order is granted but the plaintiff ultimately fails</li>
              <li>The degree to which the plaintiff&apos;s undertaking as to damages will adequately
              compensate the defendant if the order turns out to have been wrongly granted</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
              The Undertaking as to Damages
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              A condition of any Mareva order is that the plaintiff gives a cross-undertaking in damages.
              The plaintiff undertakes to pay any damages the defendant suffers if the order turns out
              to have been wrongly granted — including lost business opportunities, financing costs,
              and reputational harm caused by the order.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Courts will scrutinize the plaintiff&apos;s ability to satisfy the undertaking. Where a
              plaintiff is a corporation of modest means, the court may require security — a bank
              guarantee, cash into court, or a letter of credit — to secure the undertaking. An
              undertaking by a financially precarious plaintiff may be treated with skepticism.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              The undertaking as to damages is not a formality — plaintiffs have faced substantial
              damages claims when Mareva orders were ultimately set aside or when the underlying
              claim failed. Counsel advising plaintiffs must carefully assess exposure on the
              undertaking before seeking Mareva relief.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
              Standard Terms of a Mareva Order
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Ontario Mareva orders typically include:
            </p>
            <ul className="list-disc pl-6 mb-4 text-slate-700 space-y-2">
              <li><strong>Asset freeze</strong>: The defendant is restrained from disposing of,
              encumbering, or dealing with specific assets (or assets generally up to the amount
              of the claim) pending the outcome of the proceeding.</li>
              <li><strong>Disclosure obligation</strong>: The defendant is required to provide a
              sworn statement disclosing all assets within and outside Ontario above a threshold
              value, including the nature, location, and value of each asset.</li>
              <li><strong>Living expenses carve-out</strong>: The defendant is permitted to spend
              a specified amount per week for ordinary living expenses.</li>
              <li><strong>Legal fees carve-out</strong>: The defendant is permitted to use funds
              for their reasonable legal fees in the proceeding.</li>
              <li><strong>Ordinary business expenses</strong>: For corporate defendants, a carve-out
              for ordinary course of business payments may be included.</li>
              <li><strong>Third party notification</strong>: Banks and financial institutions holding
              the defendant&apos;s assets may be required to be notified of the order.</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
              Ex Parte (Without Notice) Applications
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Mareva orders are frequently sought on an ex parte basis — without notice to the defendant.
              The justification is that giving advance notice would defeat the purpose of the order:
              a defendant forewarned would immediately dissipate the assets the order is designed
              to protect.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              On an ex parte application, the plaintiff must make full and frank disclosure of all
              material facts — including facts adverse to their position. Failure to make full and
              frank disclosure is grounds for the court to set aside the order even if the plaintiff
              would otherwise have been entitled to the relief. The duty of candour on ex parte
              applications is absolute.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              An order obtained ex parte is typically returnable within a short time — 3 to 10 days —
              when the defendant has notice and can attend to contest it. The defendant can also
              move immediately to set aside the order.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
              Worldwide Mareva Orders
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Ontario courts have jurisdiction to grant Mareva orders extending to assets located
              outside Ontario and even outside Canada. The leading Ontario authority on worldwide
              Mareva orders is <em>Mooney v Orr</em> (1994) 100 BCLR (2d) 335 and subsequent
              Ontario Court of Appeal decisions affirming the jurisdiction.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Worldwide Mareva orders are exceptional relief. The plaintiff must satisfy a more
              exacting standard:
            </p>
            <ul className="list-disc pl-6 mb-4 text-slate-700 space-y-2">
              <li>A domestic Mareva would be insufficient to protect the plaintiff&apos;s position
              because the defendant&apos;s assets are primarily held outside Ontario</li>
              <li>There is a real risk of dissipation of the foreign assets</li>
              <li>The court should be satisfied that enforcement in the relevant foreign jurisdiction
              is reasonably practicable</li>
            </ul>
            <p className="text-slate-700 leading-relaxed mb-4">
              Worldwide Mareva orders include a &quot;Babanaft proviso&quot; — a carve-out preventing
              the order from affecting non-parties outside Ontario unless and until the order is
              confirmed by the courts of the relevant jurisdiction. This prevents Ontario courts
              from overreaching into the jurisdiction of foreign courts.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
              Setting Aside a Mareva Order
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              A defendant who has been subject to a Mareva order may apply to set it aside on the
              following grounds:
            </p>
            <ul className="list-disc pl-6 mb-4 text-slate-700 space-y-2">
              <li><strong>Failure of full and frank disclosure</strong>: The plaintiff failed to
              disclose material facts on the ex parte application — even if the plaintiff would
              have been entitled to the order on full disclosure, the court has discretion to
              discharge it as a sanction for non-disclosure.</li>
              <li><strong>No strong prima facie case</strong>: The underlying claim does not
              meet the elevated threshold for Mareva relief.</li>
              <li><strong>No real risk of dissipation</strong>: The defendant can demonstrate
              that the risk of dissipation was speculative or that they have substantial fixed
              assets in Ontario not at risk of dissipation.</li>
              <li><strong>Balance of convenience</strong>: The hardship to the defendant from
              the order outweighs the benefit to the plaintiff.</li>
              <li><strong>Changed circumstances</strong>: Events since the order was granted
              have changed the balance of convenience.</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
              Anton Piller Orders: Search and Seizure in Civil Proceedings
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Anton Piller orders (now called civil search orders) are a related category of
              extraordinary injunctive relief. Named after <em>Anton Piller KG v Manufacturing
              Processes Ltd</em> [1976] Ch 55, an Anton Piller order authorizes the plaintiff
              (and their solicitor) to enter the defendant&apos;s premises to inspect and seize
              documents and other evidence that the defendant might otherwise destroy.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              The three requirements for an Anton Piller order are:
            </p>
            <ul className="list-disc pl-6 mb-4 text-slate-700 space-y-2">
              <li>An extremely strong prima facie case</li>
              <li>The potential or actual damage to the plaintiff is very serious</li>
              <li>There is clear evidence that the defendant has relevant documents or articles
              and there is a real possibility that they might destroy or conceal them</li>
            </ul>
            <p className="text-slate-700 leading-relaxed mb-4">
              Anton Piller orders are most commonly sought in intellectual property proceedings
              (trade secret theft, copyright infringement) and commercial fraud. They are subject
              to the same duty of full and frank disclosure on ex parte application as Mareva orders.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Important procedural safeguards on execution include: the supervising solicitor
              (independent of the plaintiff&apos;s solicitors) must be present; the defendant must
              be given an opportunity to seek legal advice before permitting entry; and the order
              must be executed carefully to minimize disruption.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
              Mareva Injunctions and Contempt
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              A defendant who breaches a Mareva order may be held in contempt of court. The
              test for contempt of a Mareva order follows the standard three-part test for civil
              contempt: the order must have been clear and unambiguous, the defendant must have
              had actual knowledge of the order, and the defendant must have intentionally done
              the act that breached the order — though no intent to defy the court is required:
              <em>Carey v Laiken</em> 2015 SCC 17.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Sanctions for contempt of a Mareva order can include fines, imprisonment, and — in
              appropriate cases — an adverse inference at trial that the defendant breached the order
              because the assets were used to frustrate the plaintiff&apos;s claim.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
              Practical Considerations for Ontario Civil Litigators
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              When advising a client on whether to seek a Mareva order, counsel should consider:
            </p>
            <ul className="list-disc pl-6 mb-4 text-slate-700 space-y-2">
              <li>The strength of the underlying merits — a Mareva requires a strong prima facie
              case, so weak cases should not be brought on an emergency basis on the strength
              of bare allegations.</li>
              <li>The concrete evidence of dissipation risk — identify specific conduct or circumstances
              that establish a real risk beyond financial difficulty.</li>
              <li>The client&apos;s ability to satisfy the undertaking as to damages — assess realistically
              whether the client could pay damages if the order is wrongfully obtained.</li>
              <li>The defendant&apos;s assets — identify the specific assets to be frozen, their location,
              and which financial institutions hold them.</li>
              <li>The duty of full and frank disclosure — prepare an affidavit that discloses all
              material facts, including those adverse to the plaintiff.</li>
            </ul>
            <p className="text-slate-700 leading-relaxed mb-4">
              Atticus supports Ontario civil litigators with AI document analysis to identify key
              facts and asset disclosure in client files, matter management for complex commercial
              litigation, LSO By-Law 9 compliant trust accounting, and full practice management
              built for Ontario litigation practice.
            </p>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mt-10">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                Atticus for Ontario Civil Litigators
              </h3>
              <p className="text-slate-700 text-sm leading-relaxed mb-4">
                Atticus is built for Ontario civil litigation practice — AI document analysis, deadline tracking,
                LSO By-Law 9 compliant trust accounting, and full matter management from pleadings to trial,
                built for Ontario solo and small litigation firms.
              </p>
              <Link
                href="/sign-up"
                className="inline-block bg-slate-900 text-white font-semibold px-6 py-3 rounded-lg hover:bg-slate-700 transition-colors text-sm"
              >
                Start Free Trial
              </Link>
            </div>

            <div className="mt-12 pt-8 border-t border-slate-100">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Related Articles</h3>
              <div className="space-y-3">
                <Link
                  href="/blog/ontario-injunction-process"
                  className="block text-amber-700 hover:text-amber-900 font-medium text-sm"
                >
                  Ontario Injunctions: Interlocutory Injunctions and the American Cyanamid Test
                </Link>
                <Link
                  href="/blog/ontario-contempt-of-court"
                  className="block text-amber-700 hover:text-amber-900 font-medium text-sm"
                >
                  Ontario Contempt of Court: Civil and Criminal Contempt, the Three-Part Test, and Purging
                </Link>
                <Link
                  href="/blog/ontario-fraudulent-misrepresentation"
                  className="block text-amber-700 hover:text-amber-900 font-medium text-sm"
                >
                  Ontario Fraudulent Misrepresentation: Elements, Rescission, and Damages
                </Link>
                <Link
                  href="/blog/ontario-civil-discovery"
                  className="block text-amber-700 hover:text-amber-900 font-medium text-sm"
                >
                  Ontario Civil Discovery: Examinations for Discovery, Documentary Production, and Undertakings
                </Link>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
