import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ontario Competition Law Guide 2024 | Competition Act, Mergers, and Deceptive Marketing",
  description:
    "Ontario competition law: Competition Act merger review, abuse of dominance, price-fixing conspiracies, deceptive marketing practices, competitor collaborations, and Competition Bureau enforcement. For Ontario competition and commercial lawyers.",
  openGraph: {
    title: "Ontario Competition Law Guide 2024 | Competition Act, Mergers, and Deceptive Marketing",
    description:
      "Competition Act merger review, abuse of dominance, price-fixing conspiracies, and deceptive marketing enforcement for Ontario competition and commercial lawyers.",
    url: "https://getatticus.ca/blog/ontario-competition-law",
    siteName: "Atticus",
    type: "article",
  },
  alternates: { canonical: "https://getatticus.ca/blog/ontario-competition-law" },
};

const schemaJson = `{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Ontario Competition Law Guide 2024: Competition Act, Mergers, and Deceptive Marketing",
  "description": "Comprehensive guide to Canadian competition law including Competition Act merger review, abuse of dominance, price-fixing conspiracies, deceptive marketing practices, and Competition Bureau enforcement.",
  "author": { "@type": "Organization", "name": "Atticus" },
  "publisher": { "@type": "Organization", "name": "Atticus", "url": "https://getatticus.ca" },
  "url": "https://getatticus.ca/blog/ontario-competition-law",
  "mainEntityOfPage": "https://getatticus.ca/blog/ontario-competition-law"
}`;

const faqSchema = `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "When is a merger notifiable under the Competition Act?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A transaction is notifiable under the Competition Act when both the size-of-parties threshold and the size-of-transaction threshold are met. As of 2024, the size-of-parties threshold is $400 million (parties and affiliates combined Canadian revenues or assets). The size-of-transaction threshold is $93 million (target's Canadian revenues or assets, indexed annually). Notifiable transactions cannot close until either the waiting period expires (30 days after filing) or the Commissioner issues an advance ruling certificate (ARC) or no-action letter."
      }
    },
    {
      "@type": "Question",
      "name": "What is abuse of dominance under the Competition Act?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Under s.79 of the Competition Act, abuse of dominance occurs when: (1) one or more persons substantially or completely control a class or species of business; (2) those persons have engaged or are engaging in a practice of anti-competitive acts; and (3) the practice has had, is having, or is likely to have the effect of preventing or lessening competition substantially. The Competition Tribunal may make remedial orders including prohibition orders and, since 2022, administrative monetary penalties up to $35 million (or 3 times the benefit obtained, or 3% of annual worldwide revenues) for corporate respondents."
      }
    },
    {
      "@type": "Question",
      "name": "What are the penalties for price-fixing in Canada?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Price-fixing conspiracies under s.45 of the Competition Act are criminal per se offences since 2010 — no proof of market harm is required. Penalties include: individual: up to 14 years imprisonment and/or a fine; corporation: up to a $25 million fine per count; courts may also order disgorgement of profits. The Competition Bureau operates an Immunity Program (leniency) allowing the first co-conspirator to self-report and cooperate to receive immunity from prosecution. The Leniency Program allows subsequent cooperators to receive reduced penalties."
      }
    },
    {
      "@type": "Question",
      "name": "What is the drip pricing prohibition under the Competition Act?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Amendments to the Competition Act in effect since June 2022 added an express prohibition on drip pricing — the practice of advertising a price for a product that does not include all mandatory fees or charges. Under s.74.01(1.1), it is a reviewable deceptive marketing practice to advertise a price for a product that does not include all additional charges that will be required to be paid. The Competition Bureau can seek civil administrative monetary penalties up to $10 million for first violations, $15 million for subsequent violations, or 3% of annual worldwide revenues."
      }
    }
  ]
}`;

const offencesTable = [
  {
    offence: "Conspiracy — price-fixing (s.45)",
    type: "Criminal — per se",
    test: "Agreement to fix prices, allocate markets, or restrict output between competitors; no proof of harm required since 2010",
    penalty: "Individual: up to 14 years + fine; Corporation: up to $25M per count",
  },
  {
    offence: "Bid-rigging (s.47)",
    type: "Criminal — per se",
    test: "Agreement between bidders to submit pre-arranged bids or to refrain from bidding; tenderer not informed",
    penalty: "Individual: up to 14 years + fine; Corporation: fine in discretion of court",
  },
  {
    offence: "Abuse of dominance (s.79)",
    type: "Civil (Tribunal)",
    test: "Dominant firm + practice of anti-competitive acts + SLCP (substantial lessening or prevention of competition)",
    penalty: "Prohibition order; AMP up to $35M (corporate); structural remedies (divestiture) since 2024",
  },
  {
    offence: "Deceptive marketing (s.74.01)",
    type: "Civil reviewable",
    test: "False or misleading representation material to consumers; drip pricing; performance claims; testimonials",
    penalty: "Corporate: up to $10M first violation, $15M subsequent, or 3% of worldwide revenues",
  },
  {
    offence: "Misleading advertising — criminal (s.52)",
    type: "Criminal",
    test: "Knowingly or recklessly making a materially false or misleading representation",
    penalty: "Summary conviction: up to $200,000 and/or 1 year; Indictment: fine + up to 14 years",
  },
  {
    offence: "Merger — substantial prevention or lessening of competition (s.92)",
    type: "Civil (Tribunal)",
    test: "Merger that prevents or lessens competition substantially in any market in Canada",
    penalty: "Dissolution; divestiture; prohibition order; conditions on closing",
  },
];

const mergerProcess = [
  {
    step: "1. Pre-Merger Assessment",
    description: "Determine whether transaction meets notification thresholds; assess competitive overlap between parties; consider whether Bureau pre-notification consultation is warranted for complex transactions",
  },
  {
    step: "2. Filing Notification",
    description: "Submit prescribed information to Competition Bureau within prescribed timelines; both acquirer and target must file where threshold met; filing fee payable (currently $74,680 for standard notification)",
  },
  {
    step: "3. Initial Waiting Period (30 days)",
    description: "Bureau has 30 days to review from filing; transaction cannot close during waiting period; Bureau may request supplementary information (SIR), which triggers a second 30-day period after SIR compliance",
  },
  {
    step: "4. Bureau Review",
    description: "Bureau assesses competitive effects in relevant markets; defines product and geographic markets; assesses market shares, barriers to entry, competitive constraints, and efficiencies; contacts customers, competitors, and suppliers",
  },
  {
    step: "5. Resolution",
    description: "Outcomes: (a) No-action letter (Bureau will not challenge); (b) Consent agreement — parties accept conditions (divestiture, behavioural remedies) to resolve concerns; (c) Application to Competition Tribunal to block transaction",
  },
  {
    step: "6. Tribunal Proceeding (if required)",
    description: "Bureau applies to Tribunal under s.92 to challenge transaction; full evidentiary hearing; Tribunal may order dissolution, divestiture, or that merger not proceed; parties may argue efficiencies offset competitive harm (s.96)",
  },
];

export default function OntarioCompetitionLawPage() {
  return (
    <>
      <Script id="ontario-competition-law-schema" type="application/ld+json">
        {schemaJson}
      </Script>
      <Script id="ontario-competition-law-faq" type="application/ld+json">
        {faqSchema}
      </Script>

      <div className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-amber-400 text-slate-900 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              Competition Law
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Ontario Competition Law Guide 2024
            </h1>
            <p className="text-lg text-slate-300 mb-6 max-w-2xl">
              Competition Act merger review, abuse of dominance, price-fixing
              conspiracies, deceptive marketing practices, and Competition Bureau
              enforcement for Ontario competition and commercial lawyers.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-slate-400">
              <span>December 2024</span>
              <span>•</span>
              <span>14 min read</span>
              <span>•</span>
              <span>Competition Law</span>
            </div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-6 py-12">
          {/* Overview */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Canadian Competition Law Framework
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Canadian competition law is federal. The primary statute is the{" "}
              <em>Competition Act</em> (RSC 1985, c C-34), administered by the
              Competition Bureau (an independent law enforcement agency) and
              enforced before the Competition Tribunal (a specialized adjudicative
              body) and the Federal Court. The 2022 and 2024 amendments
              (Bill C-19 and Bill C-56) significantly strengthened the Competition
              Act — expanding abuse of dominance remedies, adding a drip pricing
              prohibition, and enabling structural merger remedies.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              Ontario lawyers encounter competition law most often in: M&A
              transactions (merger notification); commercial agreements (distribution,
              franchise, licensing — ensuring no anti-competitive provisions);
              marketing and advertising review (deceptive practices); and regulatory
              matters where clients are under Bureau investigation.
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-900">
              <strong>2024 amendment note:</strong> Bill C-56 (Affordable Housing
              and Groceries Act, in force December 2023) amended the Competition
              Act to: (1) allow the Tribunal to order dissolution in abuse of
              dominance cases; (2) expand the market studies power; and (3) remove
              the efficiencies defence in merger cases (eliminating the ability to
              justify anti-competitive mergers based on cost efficiencies).
            </div>
          </section>

          {/* Offences Table */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Key Competition Act Offences and Reviewable Matters
            </h2>
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left px-4 py-3 font-semibold">Offence</th>
                    <th className="text-left px-4 py-3 font-semibold">Type</th>
                    <th className="text-left px-4 py-3 font-semibold">Test</th>
                    <th className="text-left px-4 py-3 font-semibold">Penalties</th>
                  </tr>
                </thead>
                <tbody>
                  {offencesTable.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-4 py-3 text-slate-700 font-semibold">{row.offence}</td>
                      <td className="px-4 py-3 text-slate-600">{row.type}</td>
                      <td className="px-4 py-3 text-slate-600">{row.test}</td>
                      <td className="px-4 py-3 text-slate-600">{row.penalty}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Merger Review */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Merger Review Process (6 Stages)
            </h2>
            <div className="space-y-4">
              {mergerProcess.map((step, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center text-slate-900 font-bold text-sm">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1 text-sm">{step.step}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-slate-50 rounded-xl p-5 border border-slate-200">
              <h3 className="font-semibold text-slate-900 mb-2 text-sm">
                Advance Ruling Certificate (ARC)
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                An ARC is a binding commitment by the Commissioner not to
                challenge a specific transaction for 1 year. ARC applications
                can be filed before or alongside a notification. Where the
                Commissioner will not issue an ARC but has no immediate concerns,
                a &quot;no-action letter&quot; may be issued (non-binding). ARCs
                provide commercial certainty in complex transactions where
                competition concerns are unclear.
              </p>
            </div>
          </section>

          {/* Competitor Collaboration */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Competitor Collaborations: Joint Ventures and Agreements
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Not all competitor collaborations are anti-competitive. The
              Competition Act distinguishes between criminal conspiracies (s.45
              — per se illegal) and strategic alliances or joint ventures that
              may be reviewable under s.90.1 (civil collaboration provisions) or
              the merger provisions.
            </p>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                <h3 className="font-semibold text-slate-900 mb-2 text-sm">
                  Criminal Per Se: s.45 Conspiracies
                </h3>
                <ul className="text-slate-600 text-sm space-y-2">
                  <li>Price-fixing (agreeing to fix, raise, maintain, or stabilize prices)</li>
                  <li>Market allocation (dividing territories, customers, or products)</li>
                  <li>Output restriction (agreeing to limit or control production)</li>
                  <li>No defences based on reasonableness or efficiency</li>
                  <li>Ancillary restraints defence: restraint must be directly related to and reasonably necessary for the principal transaction/agreement between the parties</li>
                </ul>
              </div>
              <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                <h3 className="font-semibold text-slate-900 mb-2 text-sm">
                  Civil Reviewable: s.90.1 Collaborations
                </h3>
                <ul className="text-slate-600 text-sm space-y-2">
                  <li>Agreements between competitors that prevent or lessen competition substantially</li>
                  <li>Applies to agreements that do not fall under criminal conspiracy provisions</li>
                  <li>Tribunal may make orders to modify, prohibit, or terminate the agreement</li>
                  <li>Efficiency gains may be considered as justification</li>
                  <li>Joint ventures, R&D collaborations, purchasing groups may be reviewable under s.90.1</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Deceptive Marketing */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Deceptive Marketing Practices
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              The Competition Act prohibits both criminal (s.52 — knowing and
              reckless) and civil reviewable (s.74.01) deceptive marketing
              practices. Key Ontario advertising matters:
            </p>
            <ul className="space-y-3 text-slate-600 text-sm">
              <li className="flex gap-3">
                <span className="text-amber-600 font-bold flex-shrink-0">•</span>
                <span><strong>Drip pricing (s.74.01(1.1)):</strong> Advertising a price that does not include all mandatory fees or charges; Competition Bureau has issued enforcement guidance and has challenged airlines, event ticketing, and online retailers for drip pricing</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-600 font-bold flex-shrink-0">•</span>
                <span><strong>Performance claims:</strong> Claims about performance, efficacy, or length of life must be based on adequate and proper testing before making the representation</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-600 font-bold flex-shrink-0">•</span>
                <span><strong>Ordinary selling price:</strong> Representing a price as a regular, ordinary, or usual price must reflect what the product was sold at for a substantial volume of recent sales</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-600 font-bold flex-shrink-0">•</span>
                <span><strong>Fake reviews (s.74.011, since 2024):</strong> Purchasing, creating, or using fake online reviews or fake social media engagement is now a reviewable practice under Bill C-56 amendments</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-600 font-bold flex-shrink-0">•</span>
                <span><strong>Dark patterns (s.74.011, since 2024):</strong> Online representations designed to obscure, impede, or prevent consumers from exercising rights — including confusing unsubscribe flows and forced continuity clauses — are now deceptive marketing practices</span>
              </li>
            </ul>
          </section>

          {/* FAQs */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: "When is a merger notifiable under the Competition Act?",
                  a: "A transaction is notifiable when both the size-of-parties threshold ($400 million combined Canadian revenues/assets) and the size-of-transaction threshold ($93 million target Canadian revenues/assets, indexed annually) are met. Notifiable transactions cannot close until the 30-day waiting period expires or the Commissioner issues an ARC or no-action letter.",
                },
                {
                  q: "What is abuse of dominance under the Competition Act?",
                  a: "Under s.79 of the Competition Act, abuse of dominance requires: (1) substantial or complete control of a class of business; (2) a practice of anti-competitive acts; and (3) the practice has had or is likely to have the effect of preventing or lessening competition substantially. Since 2022, the Tribunal can impose administrative monetary penalties up to $35 million for corporate respondents.",
                },
                {
                  q: "What are the penalties for price-fixing in Canada?",
                  a: "Price-fixing conspiracies under s.45 are criminal per se offences since 2010. Penalties include: individual: up to 14 years imprisonment and/or a fine; corporation: up to $25 million per count. The Competition Bureau operates an Immunity Program allowing the first co-conspirator to self-report and cooperate to receive immunity from prosecution.",
                },
                {
                  q: "What is the drip pricing prohibition under the Competition Act?",
                  a: "Amendments effective June 2022 added an express prohibition on drip pricing under s.74.01(1.1) — advertising a price for a product that does not include all mandatory fees or charges. Civil AMPs up to $10 million for first violations, $15 million for subsequent violations, or 3% of annual worldwide revenues. The Bureau has challenged airlines, event ticketing platforms, and online retailers.",
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
              Manage Your Competition Law Practice with Atticus
            </h2>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto">
              Track limitation periods, manage trust accounting, and organize
              competition law files with Atticus — built for Ontario solo and
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
                { href: "/blog/ontario-corporate-reorganization", label: "Ontario Corporate Reorganization" },
                { href: "/blog/ontario-business-purchase-agreement", label: "Ontario Business Purchase Agreements" },
                { href: "/blog/ontario-franchise-law", label: "Ontario Franchise Law" },
                { href: "/blog/ontario-intellectual-property", label: "Ontario Intellectual Property Law" },
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
