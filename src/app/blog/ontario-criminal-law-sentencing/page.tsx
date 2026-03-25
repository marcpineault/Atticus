import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ontario Criminal Law — Sentencing Principles, Pre-Sentence Reports, and Appeals | Atticus",
  description:
    "A practical guide for Ontario criminal defence lawyers: Criminal Code sentencing principles, proportionality, Gladue principles, pre-sentence reports, conditional sentences, and sentencing appeals.",
  openGraph: {
    title: "Ontario Criminal Law — Sentencing Principles, Pre-Sentence Reports, and Appeals",
    description:
      "Ontario criminal sentencing guide: Criminal Code s.718-718.2 principles, proportionality, Gladue principles, conditional sentences, dangerous offender, pre-sentence reports, and sentencing appeals.",
    type: "article",
    url: "https://getatticus.ca/blog/ontario-criminal-law-sentencing",
  },
  alternates: { canonical: "https://getatticus.ca/blog/ontario-criminal-law-sentencing" },
};

export default function OntarioCriminalLawSentencingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Ontario Criminal Law — Sentencing Principles, Pre-Sentence Reports, and Appeals",
    description:
      "Practical guide to Ontario criminal sentencing: Criminal Code s.718-718.2 principles, proportionality, Gladue principles, conditional sentences, dangerous offender designation, and appeals.",
    url: "https://getatticus.ca/blog/ontario-criminal-law-sentencing",
    author: { "@type": "Organization", name: "Atticus" },
    publisher: { "@type": "Organization", name: "Atticus", url: "https://getatticus.ca" },
    datePublished: "2026-03-19",
    keywords: [
      "Ontario criminal sentencing",
      "Criminal Code sentencing principles",
      "Gladue principles Ontario",
      "conditional sentence Ontario",
      "dangerous offender Ontario",
      "pre-sentence report Ontario",
      "sentencing appeal Ontario",
    ],
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="max-w-3xl mx-auto px-6 py-16">
        <div className="mb-8">
          <div className="inline-block bg-gray-200 text-gray-800 text-sm font-semibold px-3 py-1 rounded-full mb-4">
            Criminal Law
          </div>
          <h1 className="text-4xl font-bold leading-tight mb-4">
            Ontario Criminal Law — Sentencing Principles, Pre-Sentence Reports, and Appeals
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            A practical guide to criminal sentencing in Ontario: the fundamental principles in ss.718–718.2
            of the <em>Criminal Code</em> RSC 1985 c C-46, proportionality, Gladue principles, conditional
            sentences, dangerous offender designations, pre-sentence reports, and sentencing appeals.
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>March 2026</span>
            <span>&middot;</span>
            <span>16 min read</span>
            <span>&middot;</span>
            <span>Atticus Legal Research</span>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">

          <h2>Sentencing Principles — Criminal Code ss.718–718.2</h2>
          <p>
            The fundamental purpose of sentencing under s.718 of the <em>Criminal Code</em> RSC 1985 c C-46
            is to protect society and to contribute to respect for the law and to the maintenance of a just,
            peaceful, and safe society by imposing just sanctions that have one or more of the following objectives:
          </p>
          <ul>
            <li><strong>s.718(a)</strong> — to denounce unlawful conduct and the harm done to victims and to the community</li>
            <li><strong>s.718(b)</strong> — to deter the offender and other persons from committing offences</li>
            <li><strong>s.718(c)</strong> — to separate offenders from society where necessary</li>
            <li><strong>s.718(d)</strong> — to assist in rehabilitating offenders</li>
            <li><strong>s.718(e)</strong> — to provide reparations for harm done to victims or to the community</li>
            <li><strong>s.718(f)</strong> — to promote a sense of responsibility in offenders and acknowledgment of the harm done to victims and to the community</li>
          </ul>

          <h2>Proportionality — The Fundamental Principle</h2>
          <p>
            Section 718.1 establishes proportionality as the fundamental principle of sentencing: a sentence
            must be proportionate to the gravity of the offence and the degree of responsibility of the offender.
            The SCC in <em>R v Lacasse</em> 2015 SCC 64 confirmed that proportionality is the &quot;cardinal
            principle&quot; of sentencing — parity, totality, and all other principles are subordinate to
            proportionality.
          </p>
          <p>
            Sentencing is an individualized exercise — the particular circumstances of the offence and
            offender must be considered. There is no single correct sentence for a given offence; ranges
            exist and appellate courts intervene only where a sentence is demonstrably unfit
            (<em>R v Lacasse</em> 2015 SCC 64 per Wagner J as he then was).
          </p>

          <h2>Aggravating and Mitigating Factors — Section 718.2</h2>
          <p>
            Section 718.2 requires courts to take into account aggravating and mitigating circumstances.
            Statutory aggravating factors under s.718.2(a) include:
          </p>
          <ul>
            <li>Evidence that the offence was motivated by bias, prejudice, or hate based on race, national/ethnic origin, language, colour, religion, sex, age, mental/physical disability, sexual orientation, or gender identity</li>
            <li>Abuse of a spouse or common-law partner</li>
            <li>Abuse of a person under 18 years of age</li>
            <li>Abuse of a position of trust or authority relative to the victim</li>
            <li>Evidence that the offence was committed for the benefit of, at the direction of, or in association with a criminal organization</li>
            <li>Evidence that the offence was a terrorism offence</li>
          </ul>
          <p>
            Mitigating factors (common law) include: early guilty plea; remorse and acknowledgment of harm;
            first offence; employment and family circumstances; rehabilitation prospects; addiction treatment;
            collateral consequences (deportation, professional license loss, immigration consequences).
          </p>

          <h2>Parity and Totality</h2>
          <p>
            Section 718.2(b) — parity: a sentence should be similar to sentences imposed on similar
            offenders for similar offences committed in similar circumstances. Parity is a principle —
            the range of sentences for comparable offences provides the starting point, but the judge
            must still impose a proportionate sentence for the particular offender.
          </p>
          <p>
            Section 718.2(c) — totality: where consecutive sentences are imposed, the combined sentence
            must not be unduly long or harsh. The totality principle requires the sentencing judge to
            consider the overall effect of all sentences, and to reduce individual sentences if the total
            would be excessive having regard to the offender&apos;s overall culpability.
          </p>

          <h2>Gladue Principles — Indigenous Offenders</h2>
          <p>
            Section 718.2(e) requires that the court consider all available sanctions other than imprisonment
            and pay particular attention to the circumstances of Aboriginal offenders. The SCC in{" "}
            <em>R v Gladue</em> [1999] 1 SCR 688 interpreted this provision as requiring courts to take
            a different approach to sentencing Aboriginal offenders.
          </p>
          <p>
            In <em>R v Ipeelee</em> 2012 SCC 13, the SCC affirmed and strengthened the Gladue framework:
          </p>
          <ul>
            <li>
              The systemic and background factors that may have played a role in bringing the Aboriginal
              offender before the courts must be considered — intergenerational trauma, residential school
              impacts, loss of culture and language, displacement, poverty, substance abuse
            </li>
            <li>
              The types of sentencing procedures and sanctions that may be appropriate given the offender&apos;s
              particular Indigenous heritage and connection to community
            </li>
            <li>
              Gladue applies at every sentencing hearing regardless of the seriousness of the offence —
              the gravity of the offence may affect weight given to Gladue factors but does not eliminate
              the obligation to consider them
            </li>
          </ul>
          <p>
            A Gladue report — a specialized pre-sentence report that addresses the offender&apos;s
            Indigenous background and systemic factors — is the primary mechanism for bringing Gladue
            factors before the court. Defence counsel should request a Gladue report early in serious matters
            involving Indigenous clients.
          </p>

          <h2>Pre-Sentence Reports</h2>
          <p>
            Under s.721 of the Criminal Code, the court may request a pre-sentence report (PSR) from
            a probation officer. The PSR addresses:
          </p>
          <ul>
            <li>The offender&apos;s age, maturity, and character</li>
            <li>Behaviour and attitude; remorse</li>
            <li>Family, education, and employment history</li>
            <li>History of prior offences</li>
            <li>Relationship with the victim (if applicable)</li>
            <li>Opportunities for the offender to be rehabilitated</li>
          </ul>
          <p>
            A PSR is typically requested in youth matters (mandatory for custody orders under the
            <em>Youth Criminal Justice Act</em> SC 2002 c 1) and in adult matters where the court is
            considering probation, conditional sentences, or where the offender&apos;s background is
            in dispute. Both the Crown and defence may challenge the contents of a PSR.
          </p>

          <h2>Conditional Sentences — Section 742.1</h2>
          <p>
            A conditional sentence of imprisonment (CSO) allows the offender to serve a sentence of less
            than two years in the community subject to conditions. Under s.742.1, a conditional sentence
            is available where: the offence is not punishable by a minimum term of imprisonment; the court
            imposes a sentence of imprisonment of less than two years; the court is satisfied that service
            of the sentence in the community is consistent with the fundamental purpose and principles
            of sentencing; and the offender will not endanger the safety of the community.
          </p>
          <p>
            Mandatory conditions (s.742.3) include: keep the peace and be of good behaviour; appear before
            the court when required; report to the supervisor; remain within Ontario unless given written
            permission; notify the supervisor of changes in employment/address.
          </p>
          <p>
            Conditional sentences cannot be imposed for: terrorism offences; criminal organization offences;
            serious personal injury offences (where the Crown proceeds by indictment and there is a maximum
            of 10 years or more); and specified listed offences as amended by successive criminal justice
            reform legislation. The <em>Safe Streets and Communities Act</em> SC 2012 c 1 significantly
            restricted CSO availability.
          </p>

          <h2>Dangerous Offender and Long-Term Offender</h2>
          <p>
            Part XXIV of the Criminal Code provides for dangerous offender (DO) and long-term offender
            (LTO) designations for offenders who pose a substantial risk to reoffend.
          </p>
          <h3>Dangerous Offender — Section 753</h3>
          <p>
            A DO application requires a pattern of behaviour — the offender&apos;s past behaviour must
            demonstrate a failure to restrain violent or sexual behaviour and a likely failure to restrain
            that behaviour in the future. Conviction for a serious personal injury offence is a prerequisite.
            On designation, the court must impose an indeterminate sentence of detention in a penitentiary
            for an indeterminate period — the offender has no automatic release date and must apply to
            the Parole Board of Canada.
          </p>
          <h3>Long-Term Offender — Section 753.1</h3>
          <p>
            An LTO designation is available for sexual offenders who pose a substantial risk to reoffend
            but for whom a determinate sentence plus a long-term supervision order (LTSO) of up to 10 years
            in the community will adequately protect the public. A LTSO is equivalent to probation with
            Correctional Service supervision.
          </p>

          <h2>Sentencing Appeals</h2>
          <p>
            Sentencing appeals by an accused are governed by s.687 (summary conviction) and s.675 (indictable)
            of the Criminal Code. The Crown may also appeal as of right under s.676. The appellate standard
            for sentencing is &quot;demonstrably unfit&quot; — the sentence must be clearly unreasonable,
            not merely different from what the appellate court would have imposed
            (<em>R v Shropshire</em> [1995] 4 SCR 227). The Court of Appeal has broad power to vary the
            sentence to one that should have been imposed.
          </p>
          <p>
            Mitigating factors that arise after sentencing (employment, rehabilitation progress, family
            circumstances) generally cannot be raised on appeal — they are properly raised on an application
            for judicial review of the Parole Board or for a s.745.6 faint hope clause review (available
            for offenders serving life sentences after 15 years).
          </p>
        </div>
      </article>
    </div>
  );
}
