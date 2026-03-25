import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ontario Charter Remedies Guide 2024: Section 24 Remedies, Exclusion of Evidence, and Declarations",
  description:
    "Ontario Charter remedies guide: s.24(1) appropriate and just remedy (damages, stays of proceedings, declarations), s.24(2) exclusion of evidence (Grant v R 2009 SCC 32 three-step test: seriousness of Charter breach, impact on Charter-protected interests, society's interest in adjudication on merits), s.52(1) constitutional invalidity, and structural injunctions in Charter litigation.",
  openGraph: {
    title: "Ontario Charter Remedies Guide 2024: Section 24 and Exclusion of Evidence",
    description:
      "Complete guide to Ontario Charter remedies — s.24(1) damages and stays, s.24(2) exclusion of evidence (Grant v R 2009 SCC 32 three-step balancing test), s.52(1) declarations of invalidity, and structural remedies in Charter rights litigation.",
    url: "https://getatticus.ca/blog/ontario-charter-remedies",
    siteName: "Atticus",
    type: "article",
  },
  alternates: { canonical: "https://getatticus.ca/blog/ontario-charter-remedies" },
};

const schemaJson = `{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Ontario Charter Remedies Guide 2024: Section 24 Remedies, Exclusion of Evidence, and Declarations",
  "description": "Ontario Charter remedies: s.24(1) appropriate and just remedy, s.24(2) exclusion of evidence Grant v R 2009 SCC 32 three-step test, s.52(1) constitutional invalidity, and structural injunctions.",
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
  "url": "https://getatticus.ca/blog/ontario-charter-remedies"
}`;

const faqSchemaJson = `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the test for excluding evidence under s.24(2) of the Charter?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Supreme Court of Canada in Grant v R, 2009 SCC 32 replaced the old Collins/Stillman test with a three-step balancing framework for s.24(2) exclusion of evidence. The court must consider: (1) The seriousness of the Charter-infringing state conduct — the more deliberate or systematic the violation, the more this factor favours exclusion; (2) The impact of the breach on the Charter-protected interests of the accused — a severe intrusion on a significant privacy interest favours exclusion; and (3) Society's interest in adjudication on the merits — reliable evidence of a serious crime favours admission even if obtained by a Charter breach. The court weighs all three factors to determine whether admitting the evidence would bring the administration of justice into disrepute."
      }
    },
    {
      "@type": "Question",
      "name": "What remedies are available under s.24(1) of the Charter in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Section 24(1) of the Charter provides that anyone whose Charter rights or freedoms have been infringed may apply to a court of competent jurisdiction to obtain such remedy as the court considers appropriate and just in the circumstances. Remedies available under s.24(1) include: constitutional damages (Vancouver (City) v Ward 2010 SCC 27 — four-part test: Charter breach, no good reason to deny damages, absence of other adequate remedy, no countervailing considerations of good governance); a stay of proceedings where a fair trial is impossible or to prevent abuse of process; exclusion of evidence (where s.24(2) is not the specific avenue relied on); mandamus requiring a government actor to perform a legal duty; and declarations of rights violations."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between s.24(1) and s.52(1) Charter remedies?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Section 24(1) is an individual remedy — it provides relief to a specific person whose Charter rights have been violated. Section 52(1) of the Constitution Act, 1982 is a structural remedy — it strikes down or reads down legislation that is inconsistent with the Constitution, rendering it of no force or effect to the extent of the inconsistency. A s.52(1) declaration benefits everyone, not just the individual who challenged the law. Where a law itself violates the Charter, the proper remedy is s.52(1) invalidity; where the law is valid but has been applied in a Charter-infringing way, s.24(1) applies. Courts may suspend a declaration of invalidity under s.52(1) for a period to allow the legislature to enact compliant legislation — a remedy developed in R v Schachter [1992] 2 SCR 679."
      }
    }
  ]
}`;

export default function OntarioCharterRemediesPage() {
  return (
    <>
      <Script id="ontario-charter-remedies-schema" type="application/ld+json">
        {schemaJson}
      </Script>
      <Script id="ontario-charter-remedies-faq-schema" type="application/ld+json">
        {faqSchemaJson}
      </Script>

      <div className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-amber-400 text-slate-900 text-sm font-semibold px-3 py-1 rounded-full">
                Constitutional Law
              </span>
              <span className="text-slate-400 text-sm">December 2024 &middot; 13 min read</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Ontario Charter Remedies Guide 2024: Section 24 Remedies, Exclusion of Evidence, and Declarations
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl">
              Section 24(1) appropriate and just remedies (constitutional damages, stays
              of proceedings, declarations), s.24(2) exclusion of evidence
              (<em>Grant v R</em> 2009 SCC 32 three-step balancing test), s.52(1) declarations
              of invalidity and suspended declarations, and structural remedies in Ontario
              Charter litigation.
            </p>
          </div>
        </section>

        <article className="py-16 px-6">
          <div className="max-w-3xl mx-auto prose prose-slate prose-lg">

            <h2>Charter Remedies: Overview</h2>
            <p>
              Part I of the <em>Constitution Act, 1982</em> — the <em>Canadian Charter of Rights
              and Freedoms</em> — contains two principal remedial provisions: s.24, which
              empowers courts to grant individual remedies for Charter violations, and s.52(1)
              of the <em>Constitution Act, 1982</em>, which authorizes structural remedies
              (declarations of invalidity of unconstitutional legislation). Understanding
              which provision applies to a given situation is a threshold question in any
              Charter litigation.
            </p>

            <h2>Section 24(1): Appropriate and Just Remedies</h2>
            <p>
              Section 24(1) provides that anyone whose Charter rights or freedoms have
              been infringed or denied may apply to a court of competent jurisdiction
              to obtain such remedy as the court considers appropriate and just in the
              circumstances. Section 24(1) is a broad and flexible provision — it empowers
              courts to fashion remedies tailored to the specific violation.
            </p>

            <h3>Constitutional Damages</h3>
            <p>
              The Supreme Court of Canada confirmed in <em>Vancouver (City) v Ward</em>,
              2010 SCC 27 that courts may award damages for Charter violations under s.24(1).
              The Ward test for constitutional damages has four steps:
            </p>
            <ol>
              <li>
                <strong>Has a Charter right been infringed?</strong> The claimant must establish
                a breach of a specific Charter right or freedom.
              </li>
              <li>
                <strong>Are damages appropriate and just?</strong> Damages are appropriate where
                they would (a) vindicate the right, (b) compensate the claimant, or (c) deter
                future violations.
              </li>
              <li>
                <strong>Is there a sufficient reason not to award damages?</strong> Good governance
                concerns, the availability of other adequate remedies, or the chilling effect on
                legitimate law enforcement may militate against damages.
              </li>
              <li>
                <strong>Are there countervailing considerations?</strong> The court may reduce or
                deny damages where awarding them would not serve the purposes of the Charter remedy.
              </li>
            </ol>
            <p>
              Constitutional damages are assessed functionally — the quantum should vindicate
              the right in a meaningful way, not merely serve as nominal recognition of the
              breach. Courts have awarded substantial damages for serious violations of liberty
              interests and arbitrary detention.
            </p>

            <h3>Stay of Proceedings</h3>
            <p>
              A stay of proceedings under s.24(1) is available as a remedy for the most
              serious Charter violations — where proceeding with the case would be unfair
              to the accused or would bring the administration of justice into disrepute.
              The Supreme Court in <em>R v O&apos;Connor</em> [1995] 4 SCR 411 recognized
              a stay as an exceptional remedy, available only where:
            </p>
            <ul>
              <li>The prejudice caused by the abuse is likely to taint the fairness of the trial, or continue to appear in the proceedings; and</li>
              <li>No other remedy is reasonably capable of removing that prejudice.</li>
            </ul>
            <p>
              Common grounds for stays include: unreasonable delay under s.11(b) where the
              delay ceiling has been exceeded (<em>R v Jordan</em>, 2016 SCC 27 — 18 months
              in provincial court, 30 months in superior court); deliberate destruction of
              evidence by the Crown; and entrapment by state agents.
            </p>

            <h3>Other Section 24(1) Remedies</h3>
            <ul>
              <li>
                <strong>Mandamus:</strong> An order requiring a government actor to perform
                a legal duty — available where the Charter requires positive action by the
                state;
              </li>
              <li>
                <strong>Prohibition:</strong> An order preventing a government actor from
                acting in a Charter-infringing manner;
              </li>
              <li>
                <strong>Declaration:</strong> A declaration that the claimant&apos;s Charter
                rights have been violated (available under s.24(1) where individual, not
                systemic, relief is sought).
              </li>
            </ul>

            <h2>Section 24(2): Exclusion of Evidence</h2>
            <p>
              Section 24(2) provides that where evidence was obtained in a manner that
              infringed or denied any rights or freedoms guaranteed by the Charter, the
              evidence shall be excluded if, having regard to all the circumstances, its
              admission would bring the administration of justice into disrepute.
            </p>

            <h3>The Grant Test: Three-Step Balancing</h3>
            <p>
              The Supreme Court of Canada replaced the former <em>Collins/Stillman</em>
              framework with the three-step balancing test in <em>R v Grant</em>, 2009 SCC 32.
              The court must weigh three sets of considerations:
            </p>
            <ol>
              <li>
                <strong>Seriousness of the Charter-infringing state conduct:</strong> The court
                asks whether admitting the evidence would send a message that state misconduct
                is condoned. Deliberate, systematic, or egregious Charter violations favour
                exclusion; good faith errors or minor technical violations favour admission.
              </li>
              <li>
                <strong>Impact of the breach on the Charter-protected interests of the accused:</strong>
                The court asks how seriously the breach affected the accused&apos;s Charter-protected
                interests. A significant intrusion on a core privacy interest (such as a strip
                search or seizure of bodily samples) weighs heavily in favour of exclusion.
              </li>
              <li>
                <strong>Society&apos;s interest in adjudication on the merits:</strong> The court
                considers the reliability of the evidence and the seriousness of the offence.
                Reliable evidence of a serious violent or sexual offence creates stronger pressure
                for admission; unreliable evidence (such as conscriptive evidence obtained through
                a Charter breach) favours exclusion.
              </li>
            </ol>
            <p>
              The three factors are balanced to determine whether a reasonable person, fully
              informed of the circumstances, would conclude that admitting the evidence would
              bring the administration of justice into disrepute.
            </p>

            <h3>Application: Common Scenarios</h3>
            <ul>
              <li>
                <strong>Arbitrary detention (s.9) and failure to inform of right to counsel (s.10(b)):</strong>
                If police detain an accused without reasonable grounds and fail to inform them of
                the right to counsel, evidence obtained (such as a statement or breathalyzer sample)
                may be excluded if the Grant balancing weighs in favour of exclusion.
              </li>
              <li>
                <strong>Unreasonable search or seizure (s.8):</strong> Evidence obtained in a
                warrantless search of a home or private communications will likely be excluded
                given the serious impact on privacy interests and the strong social message
                required to deter state overreach.
              </li>
              <li>
                <strong>Right to silence (s.7):</strong> A statement taken in breach of the
                accused&apos;s right to silence or the right against self-incrimination may be
                excluded where the breach was deliberate or the statement was conscripted.
              </li>
            </ul>

            <h2>Section 52(1): Declarations of Invalidity</h2>
            <p>
              Section 52(1) of the <em>Constitution Act, 1982</em> provides that the
              Constitution is the supreme law of Canada, and any law that is inconsistent
              with the provisions of the Constitution is, to the extent of the inconsistency,
              of no force or effect. Where a court finds that legislation infringes the Charter
              and is not saved by s.1, the legislation is declared invalid under s.52(1).
            </p>

            <h3>Suspended Declarations of Invalidity</h3>
            <p>
              Courts have jurisdiction to suspend a declaration of invalidity for a period
              to allow the legislature to enact compliant legislation without the immediate
              harm of a legal vacuum. The power to suspend was confirmed in
              <em>R v Schachter</em> [1992] 2 SCR 679. Courts consider:
            </p>
            <ul>
              <li>Whether immediate invalidity would pose a danger to the public or the rule of law;</li>
              <li>Whether the legislature requires time to design a constitutionally compliant scheme;</li>
              <li>The balance between the right to remediation and the public interest in the continued operation of the law.</li>
            </ul>
            <p>
              The Supreme Court has suspended declarations of invalidity in contexts as varied
              as criminal law provisions, electoral laws, and health care regulation.
            </p>

            <h2>Practice Points for Ontario Criminal and Constitutional Lawyers</h2>
            <ul>
              <li>
                In criminal matters, identify the specific Charter breach and the evidence at
                issue before framing the s.24(2) application — the Grant analysis is highly
                fact-specific and requires a thorough record of the circumstances of the breach.
              </li>
              <li>
                For s.24(1) damages claims arising from police misconduct, structure the claim
                under the Ward four-part test and quantify the damages that would meaningfully
                vindicate the right — symbolic awards are unlikely to deter future violations.
              </li>
              <li>
                In administrative and civil Charter matters, consider whether s.52(1) invalidity
                is the appropriate remedy or whether individual declaratory relief under s.24(1)
                is sufficient — only s.52(1) can render legislation invalid for everyone.
              </li>
              <li>
                A stay of proceedings is an exceptional remedy — reserve it for cases of
                deliberate state misconduct, irreparable prejudice to a fair trial, or
                clear delay in excess of the Jordan ceilings.
              </li>
              <li>
                The Ontario Court of Appeal hears Charter appeals in criminal matters from the
                Superior Court of Justice; constitutional questions of broad public importance
                may be referred to the Supreme Court of Canada.
              </li>
            </ul>

          </div>
        </article>

        <section className="py-12 px-6 bg-amber-50 border-t border-amber-100">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Manage Your Criminal and Constitutional Practice with Atticus
            </h2>
            <p className="text-slate-600 mb-6">
              Track limitation periods and hearing deadlines, manage criminal and constitutional
              matter files, and run LSO-compliant trust accounting — all in one Ontario platform.
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
                { href: "/blog/ontario-constitutional-law", label: "Ontario Constitutional Law" },
                { href: "/blog/ontario-criminal-procedure", label: "Ontario Criminal Procedure" },
                { href: "/blog/ontario-bail-hearing", label: "Ontario Bail Hearings" },
                { href: "/blog/ontario-judicial-review", label: "Ontario Judicial Review" },
                { href: "/blog/ontario-criminal-sentencing", label: "Ontario Criminal Sentencing" },
                { href: "/ontario-criminal-defence-lawyer", label: "Ontario Criminal Defence Software" },
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
