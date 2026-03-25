import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ontario Drug Offences Guide 2024: CDSA, Possession, Trafficking, and Sentencing",
  description:
    "Ontario drug offences under the Controlled Drugs and Substances Act: simple possession (s.4), trafficking (s.5), possession for the purpose of trafficking, importing/exporting (s.6), production (s.7), Bill C-5 mandatory minimum repeal, drug treatment courts, and Charter challenges to search and seizure.",
  openGraph: {
    title: "Ontario Drug Offences Guide 2024: CDSA Charges, Trafficking, and Sentencing",
    description:
      "Complete guide to Ontario drug law — CDSA schedules, possession vs trafficking, possession for purpose, production, Bill C-5 mandatory minimum repeal, drug treatment courts, and s.8 Charter search and seizure challenges.",
    url: "https://getatticus.ca/blog/ontario-drug-offences",
    siteName: "Atticus",
    type: "article",
  },
  alternates: { canonical: "https://getatticus.ca/blog/ontario-drug-offences" },
};

const schemaJson = `{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Ontario Drug Offences Guide 2024: CDSA, Possession, Trafficking, and Sentencing",
  "description": "Ontario drug offences under the Controlled Drugs and Substances Act: simple possession (s.4), trafficking (s.5), possession for the purpose of trafficking, importing/exporting (s.6), production (s.7), Bill C-5 mandatory minimum repeal, drug treatment courts, and Charter challenges to search and seizure.",
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
  "url": "https://getatticus.ca/blog/ontario-drug-offences"
}`;

const faqSchemaJson = `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the difference between simple possession and possession for the purpose of trafficking under the CDSA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Simple possession under CDSA s.4 requires only knowing possession of a controlled substance. Possession for the purpose of trafficking under s.5(2) requires that the Crown prove beyond a reasonable doubt that the accused possessed the substance with the intention to traffic it. Courts infer intent from circumstantial evidence including quantity, packaging, presence of scales, cash, and communication records. The distinction is critical because possession for purpose carries significantly higher maximum sentences — life imprisonment for Schedule I substances such as heroin, cocaine, and methamphetamine."
      }
    },
    {
      "@type": "Question",
      "name": "Did Bill C-5 eliminate all mandatory minimums for drug offences in Canada?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Bill C-5 (S.C. 2022, c. 15), which received Royal Assent on November 17, 2022, repealed mandatory minimum penalties for all CDSA drug offences, including trafficking, importing, and production of Schedule I substances such as cocaine and heroin. However, mandatory minimums for certain firearm offences were retained. Bill C-5 also expanded the availability of conditional sentence orders (CSOs) for non-violent offenders and directed prosecutors to consider diversion to treatment programs for simple possession."
      }
    },
    {
      "@type": "Question",
      "name": "What is a drug treatment court and how does it work in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Drug treatment courts (DTCs) are specialized problem-solving courts available in Toronto, Ottawa, and other Ontario centres. Eligible accused — typically non-violent offenders charged with possession or low-level trafficking to fund addiction — enter a supervised treatment program in lieu of conventional prosecution. Participants must plead guilty, undergo regular drug testing, attend counselling, and appear before the DTC judge regularly. Successful completion typically results in a stay of proceedings or significantly reduced sentence. DTCs are governed by the federal Drug Treatment Court Funding Program and the DTC Guidelines."
      }
    }
  ]
}`;

export default function OntarioDrugOffencesPage() {
  return (
    <>
      <Script id="ontario-drug-offences-schema" type="application/ld+json">
        {schemaJson}
      </Script>
      <Script id="ontario-drug-offences-faq-schema" type="application/ld+json">
        {faqSchemaJson}
      </Script>

      <div className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-amber-400 text-slate-900 text-sm font-semibold px-3 py-1 rounded-full">
                Criminal Law
              </span>
              <span className="text-slate-400 text-sm">December 2024 &middot; 13 min read</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Ontario Drug Offences Guide 2024: CDSA, Possession, Trafficking, and Sentencing
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl">
              Controlled Drugs and Substances Act schedules, simple possession (s.4),
              trafficking (s.5), possession for purpose, importing/exporting (s.6),
              production (s.7), Bill C-5 mandatory minimum repeal, drug treatment
              courts, and Charter s.8 search and seizure challenges.
            </p>
          </div>
        </section>

        <article className="py-16 px-6">
          <div className="max-w-3xl mx-auto prose prose-slate prose-lg">

            <h2>The Controlled Drugs and Substances Act: Framework</h2>
            <p>
              Drug offences in Canada are primarily governed by the{" "}
              <em>Controlled Drugs and Substances Act</em>, S.C. 1996, c. 19 (CDSA). The CDSA
              replaced the former <em>Narcotic Control Act</em> and <em>Food and Drugs Act</em>{" "}
              schedules and created a unified federal drug control regime. The CDSA schedules
              classify controlled substances by their potential for harm and abuse.
            </p>

            <h3>CDSA Schedules</h3>
            <p>
              The CDSA organizes controlled substances into eight schedules. Schedule I contains
              the most serious substances — heroin, cocaine, methamphetamine, MDMA, fentanyl, and
              their derivatives — and attracts the most severe penalties. Schedule II (formerly
              cannabis, now largely governed by the <em>Cannabis Act</em>, S.C. 2018, c. 16 for
              adults) retains limited application. Schedule III includes amphetamines and
              psychedelics such as LSD and psilocybin. Schedules IV through VI cover benzodiazepines,
              precursors, and related substances.
            </p>
            <p>
              The schedule of the substance determines the maximum sentence and available
              proceedings. For Schedule I substances, trafficking and production offences are
              indictable with a maximum of life imprisonment. For Schedule III, the maximum
              on indictment is ten years.
            </p>

            <h2>Simple Possession: CDSA Section 4</h2>
            <p>
              Section 4(1) of the CDSA prohibits the possession of a substance included in
              Schedule I, II, or III. The Crown must prove three elements: (1) physical or
              constructive custody of the substance; (2) knowledge of the presence of the substance;
              and (3) knowledge that it is a controlled substance.
            </p>

            <h3>Constructive Possession</h3>
            <p>
              Constructive possession arises where the accused has knowledge and control of a
              substance not on their person — for example, in a vehicle shared with others or in
              a residence. The Supreme Court of Canada in <em>R. v. Morelli</em>, 2010 SCC 8
              clarified that constructive possession requires knowledge of the specific substance
              and the ability to exercise control, not merely awareness of its existence.
            </p>
            <p>
              Joint possession — shared physical or constructive possession by two or more persons
              — requires that each person have knowledge and consent to the other&apos;s possession:
              {" "}<em>R. v. Terrence</em>, [1983] 1 SCR 357.
            </p>

            <h3>Penalty for Simple Possession</h3>
            <p>
              For a Schedule I substance, simple possession is a hybrid offence. On summary
              conviction, the maximum is two years less a day; on indictment, seven years.
              Following Bill C-5, which received Royal Assent on November 17, 2022, prosecutors
              are directed under s.10.1 of the CDSA to consider diversion to treatment
              programs as an alternative to prosecution for simple possession offences where
              the accused has a substance use disorder.
            </p>

            <h2>Trafficking: CDSA Section 5</h2>
            <p>
              Section 5(1) prohibits trafficking in a substance included in Schedule I, II, III, or IV.
              &quot;Traffic&quot; is defined broadly in s.2 to include selling, administering, giving,
              transferring, transporting, sending, and delivering a controlled substance — as well
              as offering to do any of these acts. The Crown does not need to prove a completed
              transaction; an offer to traffic is sufficient.
            </p>

            <h3>Possession for the Purpose of Trafficking: Section 5(2)</h3>
            <p>
              Section 5(2) creates a separate offence of possession for the purpose of trafficking.
              The Crown must prove beyond a reasonable doubt that the accused possessed the
              substance with intent to traffic. Intent is typically inferred from circumstantial
              evidence:
            </p>
            <ul>
              <li>
                <strong>Quantity:</strong> A quantity inconsistent with personal use raises an
                inference of distribution.
              </li>
              <li>
                <strong>Packaging:</strong> Pre-packaged quantities in multiple bags or bindles
                consistent with street-level distribution.
              </li>
              <li>
                <strong>Presence of paraphernalia:</strong> Scales, cutting agents, and drug
                transaction records.
              </li>
              <li>
                <strong>Cash:</strong> Large amounts of small-denomination bills consistent with
                retail drug sales.
              </li>
              <li>
                <strong>Communication records:</strong> Text messages evidencing drug transactions.
              </li>
            </ul>
            <p>
              For Schedule I substances, trafficking and possession for purpose carry a maximum
              of life imprisonment on indictment. Prior to Bill C-5, mandatory minimums ranging
              from one to three years applied to trafficking Schedule I substances depending on
              aggravating factors. Bill C-5 repealed all CDSA mandatory minimums.
            </p>

            <h2>Importing and Exporting: CDSA Section 6</h2>
            <p>
              Section 6(1) prohibits importing or exporting a controlled substance listed in
              Schedules I through VI. The offence is complete upon the physical crossing of
              the Canadian border with a controlled substance, regardless of the accused&apos;s
              ultimate destination or purpose.
            </p>
            <p>
              Importing Schedule I substances carries a maximum of life imprisonment and
              was historically subject to mandatory minimum sentences. The 2022 Bill C-5
              amendments repealed the mandatory minimums that previously attached to s.6
              importation offences.
            </p>
            <p>
              Jurisdiction over importation offences is federal. Ontario drug importation
              prosecutions typically proceed in the Ontario Court of Justice or Superior
              Court of Justice depending on the election.
            </p>

            <h2>Production of Controlled Substances: CDSA Section 7</h2>
            <p>
              Section 7(1) prohibits producing a substance included in Schedule I, II, III,
              or V. &quot;Produce&quot; is defined in s.2 to include manufacturing, synthesizing, and
              any other method of creating a controlled substance, including harvesting plants.
              Cultivation of cannabis plants in excess of the amounts permitted by the{" "}
              <em>Cannabis Act</em> may engage the CDSA.
            </p>
            <p>
              Production of Schedule I substances carries a maximum of life imprisonment.
              Production offences in residential dwellings, near schools, or involving
              health and safety risks were formerly subject to mandatory minimums under
              the <em>Safe Streets and Communities Act</em>; these were repealed by Bill C-5.
            </p>

            <h2>Bill C-5: Mandatory Minimum Repeal (2022)</h2>
            <p>
              <em>An Act to amend the Criminal Code and the Controlled Drugs and Substances Act</em>
              {" "}(Bill C-5), S.C. 2022, c. 15, came into force on November 17, 2022. It made
              two significant changes to the CDSA regime:
            </p>
            <ul>
              <li>
                <strong>Repeal of all CDSA mandatory minimums:</strong> Every mandatory minimum
                penalty under the CDSA — including those for trafficking, importing, and
                producing Schedule I substances — was repealed. Courts now have full sentencing
                discretion subject to the general principles in Criminal Code ss.718-718.2.
              </li>
              <li>
                <strong>Diversion directive (s.10.1):</strong> Federal prosecutors must now
                consider diversion to drug treatment programs as an alternative to prosecution
                for simple possession charges where the accused has a substance use disorder.
                Diversion is not automatic; Crown counsel retains discretion.
              </li>
            </ul>
            <p>
              Bill C-5 also expanded the availability of conditional sentence orders (CSOs)
              under Criminal Code s.742.1 for certain drug offences that previously excluded
              CSOs.
            </p>

            <h2>Drug Treatment Courts in Ontario</h2>
            <p>
              Drug treatment courts (DTCs) operate in Toronto (established 1998), Ottawa,
              and other Ontario centres. They are intensive, judicially supervised diversion
              programs for eligible accused persons with substance use disorders who are
              charged with possession or low-level trafficking to fund addiction.
            </p>

            <h3>Eligibility</h3>
            <p>
              Candidates for DTC must generally: be charged with a non-violent drug offence;
              have a demonstrable substance use disorder; be motivated to participate in treatment;
              and be prepared to plead guilty. Persons charged with serious violence, large-scale
              trafficking, or importation are typically ineligible.
            </p>

            <h3>The DTC Process</h3>
            <p>
              Participants enter a guilty plea and then complete a phased treatment program
              involving: regular attendance before the DTC judge; urinalysis; residential or
              outpatient treatment; and compliance with program conditions. The program
              typically runs 12 to 18 months. The DTC judge has authority to impose sanctions
              for non-compliance short of re-incarceration and to award incentives for progress.
            </p>
            <p>
              Successful completion typically results in a stay of proceedings or a
              significantly reduced sentence, often a conditional discharge or suspended sentence.
              Failure to complete results in sentencing on the guilty plea.
            </p>

            <h2>Charter Challenges in Drug Cases</h2>
            <p>
              Drug prosecutions frequently engage Charter rights. The most common challenges arise
              under s.8 (unreasonable search and seizure) and s.9 (arbitrary detention).
            </p>

            <h3>Section 8: Unreasonable Search and Seizure</h3>
            <p>
              Police require reasonable grounds to believe that an offence has been committed
              and that evidence will be found at the place to be searched in order to obtain
              a search warrant under Criminal Code s.487. Warrantless searches are presumptively
              unreasonable: <em>Hunter v. Southam Inc.</em>, [1984] 2 SCR 145.
            </p>
            <p>
              Common s.8 issues in drug cases include:
            </p>
            <ul>
              <li>
                <strong>Sniff searches:</strong> The Supreme Court in{" "}
                <em>R. v. Kang-Brown</em>, 2008 SCC 18 and <em>R. v. A.M.</em>, 2008 SCC 19
                held that random dog sniff searches absent reasonable suspicion engage s.8
                in some contexts.
              </li>
              <li>
                <strong>Strip searches:</strong> Strip searches incident to arrest require
                reasonable and probable grounds that the accused is concealing a weapon or
                evidence: <em>R. v. Golden</em>, 2001 SCC 83.
              </li>
              <li>
                <strong>Wiretap and production orders:</strong> Interception of private
                communications under Part VI of the Criminal Code requires judicial
                authorization and supporting affidavit material meeting the stringent
                reasonable and probable grounds standard.
              </li>
            </ul>
            <p>
              Where s.8 is breached, the accused may apply under s.24(2) for exclusion of
              evidence. The court applies the three-part framework from{" "}
              <em>R. v. Grant</em>, 2009 SCC 32: (1) seriousness of the Charter-infringing
              conduct; (2) impact on the accused&apos;s Charter-protected interests; and (3)
              society&apos;s interest in adjudication on the merits.
            </p>

            <h3>Section 9: Arbitrary Detention</h3>
            <p>
              Police may detain a person for investigative purposes only if they have
              reasonable suspicion based on objective, articulable facts that the person
              is implicated in criminal activity: <em>R. v. Mann</em>, 2004 SCC 52.
              Racial profiling as the basis for detention constitutes arbitrary detention:
              {" "}<em>R. v. Le</em>, 2019 SCC 34.
            </p>

            <h2>Sentencing for Drug Offences Post-Bill C-5</h2>
            <p>
              Following the repeal of mandatory minimums, sentencing for CDSA offences
              is governed by the general sentencing principles in Criminal Code ss.718-718.2:
            </p>
            <ul>
              <li>
                <strong>Denunciation and deterrence</strong> (s.718(a)-(b)): Primary objectives
                for large-scale trafficking and importation.
              </li>
              <li>
                <strong>Rehabilitation</strong> (s.718(d)-(e)): Particularly relevant for
                possession and low-level trafficking driven by addiction.
              </li>
              <li>
                <strong>Gladue principles:</strong> For Indigenous offenders, courts must
                apply the principles from <em>R. v. Gladue</em>, [1999] 1 SCR 688 and{" "}
                <em>R. v. Ipeelee</em>, 2012 SCC 13 — considering systemic factors and
                community-based sanctions.
              </li>
              <li>
                <strong>Parity:</strong> Sentences should be similar to those imposed on
                similar offenders for similar offences (s.718.2(b)).
              </li>
            </ul>
            <p>
              Aggravating factors for drug offences include large quantity, proximity to
              a school or youth, role as an organizer or manager, and use of a weapon.
              Mitigating factors include addiction, prior clean record, cooperation with
              police, and early guilty plea.
            </p>

            <h2>Practice Points for Ontario Criminal Defence Lawyers</h2>
            <ul>
              <li>
                Review the ITO (Information to Obtain) underlying any search warrant for
                facial sufficiency and excision of improperly obtained information:
                {" "}<em>R. v. Garofoli</em>, [1990] 2 SCR 1421.
              </li>
              <li>
                Assess whether the quantity and packaging are genuinely inconsistent with
                personal use before conceding a possession-for-purpose charge.
              </li>
              <li>
                For clients with substance use disorders, explore drug treatment court
                eligibility before entering a plea to avoid a criminal record.
              </li>
              <li>
                Post-Bill C-5, make proportionality arguments for lower-level trafficking
                and possession-for-purpose charges where the accused was motivated by
                addiction rather than profit.
              </li>
              <li>
                File Gladue reports for all Indigenous accused to ensure the sentencing judge
                has the systemic and background information required by{" "}
                <em>Ipeelee</em>.
              </li>
              <li>
                Consider constitutional challenges to production offences where evidence
                was obtained through warrantless electronic surveillance or cell-site
                location information (CSLI) without judicial authorization.
              </li>
            </ul>

          </div>
        </article>

        <section className="py-12 px-6 bg-amber-50 border-t border-amber-100">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Manage Your Criminal Defence Practice with Atticus
            </h2>
            <p className="text-slate-600 mb-6">
              Track limitation periods, manage bail hearing matters, monitor Gladue report
              deadlines, and run LSO-compliant trust accounting — all in one Ontario platform.
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
                { href: "/blog/ontario-criminal-bail", label: "Ontario Criminal Bail" },
                { href: "/blog/ontario-constitutional-law", label: "Ontario Constitutional Law" },
                { href: "/blog/ontario-limitation-periods", label: "Ontario Limitation Periods" },
                { href: "/ontario-criminal-defence-lawyer", label: "Ontario Criminal Defence Lawyer Software" },
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
