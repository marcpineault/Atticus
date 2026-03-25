import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ontario Bail Hearings: Pre-Trial Release and s.11(e) Charter Rights | Atticus Blog",
  description:
    "A practical guide to Ontario bail hearings — the Criminal Code bail scheme, grounds for detention, reverse onus provisions, surety selection, s.11(e) Charter rights, and bail review.",
  openGraph: {
    title: "Ontario Bail Hearings: Pre-Trial Release and s.11(e) Charter Rights",
    description:
      "Criminal Code bail scheme, grounds for detention, reverse onus provisions, surety selection, s.11(e) Charter rights, and bail review for Ontario criminal lawyers.",
    type: "article",
    publishedTime: "2026-03-19",
  },
};

export default function OntarioBailHearings() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Ontario Bail Hearings: Pre-Trial Release and s.11(e) Charter Rights",
    description:
      "Criminal Code bail scheme, grounds for detention, reverse onus, sureties, and bail review in Ontario.",
    datePublished: "2026-03-19",
    author: {
      "@type": "Organization",
      name: "Atticus",
    },
    publisher: {
      "@type": "Organization",
      name: "Atticus",
      url: "https://getatticus.ca",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <header className="mb-10">
          <div className="mb-4 flex items-center gap-3 text-sm text-gray-500">
            <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
              Criminal Law
            </span>
            <time dateTime="2026-03-19">March 19, 2026</time>
            <span>13 min read</span>
          </div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900">
            Ontario Bail Hearings: Pre-Trial Release and s.11(e) Charter Rights
          </h1>
          <p className="text-xl text-gray-600">
            Bail — or more precisely, judicial interim release — is the proceeding that
            determines whether an accused person is detained or released pending trial.
            In Ontario, bail hearings are governed by Part XVI of the <em>Criminal Code</em>,
            RSC 1985, c C-46, and the <em>Canadian Charter of Rights and Freedoms</em> s.11(e).
            This guide covers the key principles Ontario criminal defence lawyers encounter.
          </p>
        </header>

        <div className="prose prose-gray max-w-none">
          <h2>The s.11(e) Charter Right</h2>
          <p>
            Section 11(e) of the <em>Charter</em> provides that any person charged with an
            offence has the right &ldquo;not to be denied reasonable bail without just cause.&rdquo;
            The Supreme Court of Canada held in <em>R v Antic</em>, 2017 SCC 27, that s.11(e)
            requires courts to release accused persons on the least onerous conditions that will
            address the concerns raised by the Crown, working through a ladder of conditions from
            least to most restrictive.
          </p>

          <h2>The Bail Hearing Process</h2>
          <p>
            <strong>Show cause hearing</strong>: A bail hearing is a &ldquo;show cause hearing&rdquo; under
            the <em>Criminal Code</em>. In the ordinary case, the Crown bears the burden of
            &ldquo;showing cause&rdquo; why the accused should be detained (s.515(1)). Where a reverse
            onus applies, the burden shifts to the accused to show why their detention is
            not justified.
          </p>
          <p>
            <strong>Timing</strong>: An accused must be brought before a justice within 24 hours
            of arrest without undue delay (s.503(1)), or as soon as practicable. A detained
            accused may apply for a bail review if the hearing cannot proceed within three clear
            days (s.520).
          </p>
          <p>
            <strong>Evidentiary rules</strong>: Bail hearings proceed on a relaxed standard —
            the Crown and accused may tender evidence through oral testimony, police reports,
            Crown summaries, and typed records. The justice may receive any &ldquo;credible or
            trustworthy&rdquo; evidence (s.518(1)(e)). Hearsay is regularly admitted.
          </p>

          <h2>Grounds for Detention</h2>
          <p>
            The Crown must establish one of three grounds to justify detention (s.515(10)):
          </p>
          <ul>
            <li>
              <strong>Primary ground (s.515(10)(a))</strong>: Detention is necessary to ensure
              the accused&apos;s attendance in court. Factors: ties to the community, roots, employment,
              family obligations, history of failing to appear (FTA), strength of the Crown&apos;s case,
              seriousness of the offence.
            </li>
            <li>
              <strong>Secondary ground (s.515(10)(b))</strong>: Detention is necessary for
              the protection or safety of the public, having regard to all circumstances including
              the substantial likelihood of reoffending and the gravity of the offence. This is
              the most common ground for detention. The Crown must show a substantial likelihood
              — not mere possibility — that the accused will reoffend.
            </li>
            <li>
              <strong>Tertiary ground (s.515(10)(c))</strong>: Detention is necessary to maintain
              confidence in the administration of justice, having regard to all the circumstances
              including the apparent strength of the prosecution&apos;s case, the gravity of the
              nature of the offence, the circumstances surrounding its commission, and the potential
              for a lengthy term of imprisonment. Restricted to very serious cases (murder, mass
              casualties, etc.) — <em>R v St-Cloud</em>, 2015 SCC 27.
            </li>
          </ul>

          <h2>Reverse Onus Provisions</h2>
          <p>
            In certain categories of cases, the burden shifts to the accused to show cause why
            their detention is not justified:
          </p>
          <ul>
            <li>
              <strong>Serious drug offences (s.515(6)(d))</strong>: Trafficking, production,
              or importation of Schedule I or II substances — accused must show cause.
            </li>
            <li>
              <strong>Firearms offences (s.515(6)(a))</strong>: Accused charged with certain
              firearms offences while subject to a prohibition order.
            </li>
            <li>
              <strong>Indictable offence committed while on release (s.515(6)(b))</strong>:
              Accused charged with an indictable offence alleged to have been committed while
              on judicial interim release for another indictable offence.
            </li>
            <li>
              <strong>Criminal organization and terrorism offences (s.515(6)(a))</strong>:
              Offences under ss.83.01-83.33 (terrorism), ss.467.11-467.13 (criminal organization),
              and certain CDSA offences.
            </li>
          </ul>
          <p>
            In <em>R v Morales</em>, [1992] 3 SCR 711, the Supreme Court upheld the
            constitutionality of reverse onus provisions, finding that the Charter requires only
            that detention be justified under the s.515(10) grounds — the burden can be shifted
            in appropriate circumstances.
          </p>

          <h2>The Ladder Principle (Antic)</h2>
          <p>
            The Supreme Court in <em>Antic</em> confirmed that the bail regime must be applied
            using the &ldquo;ladder&rdquo; approach — courts must consider release options in ascending order
            of onerousness:
          </p>
          <ol>
            <li>Release on an undertaking with no conditions (s.515(1))</li>
            <li>Release on an undertaking with conditions (s.515(2)(a))</li>
            <li>Release into the custody of a surety (s.515(2)(b))</li>
            <li>Release on a recognizance with or without surety and with deposit (s.515(2)(c)-(e))</li>
          </ol>
          <p>
            Courts must not impose conditions that are more onerous than necessary to address the
            specific grounds for concern. A surety should not be required if an undertaking with
            conditions will suffice.
          </p>

          <h2>Conditions of Release</h2>
          <p>
            Conditions must be rationally connected to addressing a bail concern. Common conditions:
          </p>
          <ul>
            <li>Reside at a specified address with surety</li>
            <li>Curfew (specific hours, GPS monitoring in some cases)</li>
            <li>No contact with named individuals (especially complainants in domestic violence cases)</li>
            <li>No-go zones (areas, schools, residences)</li>
            <li>Abstain from alcohol and drugs</li>
            <li>Weapons prohibition</li>
            <li>Report to police</li>
            <li>Surrender passport / not leave the province</li>
          </ul>
          <p>
            <strong>Bail and COVID-era reforms (Bill C-75, 2019)</strong>: Bill C-75 introduced
            a requirement that conditions be &ldquo;necessary&rdquo; to address a bail concern and
            proportionate to the gravity of the offence and circumstances. Courts cannot impose
            conditions that would likely cause the accused to breach bail and return to custody.
          </p>

          <h2>Sureties</h2>
          <p>
            A surety is a person (not a professional bondsperson in Canada) who agrees to
            supervise the accused and ensures their compliance with bail conditions. The surety
            pledges a specific amount — which is forfeited if the accused fails to comply or
            appear.
          </p>
          <p>
            <strong>Surety qualifications</strong>: A surety must be a Canadian resident with
            sufficient financial means to make the pledge meaningful. The justice will inquire
            about the surety&apos;s assets, liabilities, income, relationship to the accused, and
            knowledge of the conditions. The Crown may challenge a proposed surety.
          </p>
          <p>
            <strong>Forfeiture</strong>: If the accused breaches a condition or fails to appear,
            the surety is brought before the court. The court may declare forfeiture of all or
            part of the pledged amount unless the surety demonstrates they took reasonable
            steps to ensure compliance and had no knowledge of the breach.
          </p>

          <h2>Bail Review</h2>
          <p>
            Either the accused or the Crown may apply to the Superior Court for a review of a
            bail decision (s.520 for accused; s.521 for Crown):
          </p>
          <ul>
            <li>
              <strong>Accused review (s.520)</strong>: Where the accused was detained or
              released on conditions the accused believes are excessive. The review judge must
              determine whether the original decision was proper on the evidence before the
              justice. New evidence may be admitted.
            </li>
            <li>
              <strong>Crown review (s.521)</strong>: Where the Crown seeks detention or more
              restrictive conditions. Same standard — the Crown bears the burden on ordinary onus cases.
            </li>
            <li>
              <strong>Standard of review</strong>: The review judge may substitute their
              judgment where the original decision was not &ldquo;proper&rdquo; — i.e., was made on
              incorrect evidence, was legally wrong, or is clearly unreasonable (<em>R v St-Cloud</em>
              at para 128). Not a de novo hearing, but new evidence can be introduced.
            </li>
          </ul>

          <h2>Bail and Domestic Violence</h2>
          <p>
            In domestic violence cases, s.515(6)(b.1) applies where the accused is charged with
            a listed offence against an intimate partner and has a prior conviction for an
            offence of domestic violence — creating a reverse onus. Additionally, courts will
            virtually always impose no-contact conditions in domestic violence bail orders.
          </p>
          <p>
            The <em>Tackling Violent Crime Act</em> amendments and subsequent Bill C-75 reforms
            have strengthened bail restrictions in intimate partner violence cases. Courts must
            consider any patterns of violence when setting conditions.
          </p>

          <h2>Indigenous Accused and the Gladue Principles</h2>
          <p>
            The Supreme Court in <em>R v Gladue</em>, [1999] 1 SCR 688, held that courts must
            consider the systemic and background factors that may have contributed to an Indigenous
            accused&apos;s situation when making sentencing decisions. The Ontario Court of Appeal
            confirmed in <em>R v Summers</em>, 2014 SCC 26, that Gladue principles also apply
            at the bail stage — courts must consider the unique circumstances of Indigenous
            accused when assessing bail conditions and the s.515(10) grounds.
          </p>

          <h2>Summary</h2>
          <p>
            Bail proceedings in Ontario require rapid assessment of grounds for detention,
            knowledge of reverse onus provisions, and effective use of the ladder principle
            from <em>Antic</em>. The Crown&apos;s burden on the secondary ground (substantial
            likelihood of reoffending) is frequently contested. Effective bail advocacy involves
            understanding the specific concerns raised on each ground and proposing targeted
            conditions — or a surety plan — that address those concerns at the least onerous
            level.
          </p>
          <p>
            Atticus helps Ontario criminal defence lawyers manage urgent bail hearing timelines,
            track client contact conditions, and stay organized across multiple files — with
            LSO-compliant trust accounting for criminal defence retainers.
          </p>
        </div>

        <div className="mt-12 rounded-xl bg-gray-50 p-8 text-center">
          <h3 className="mb-2 text-xl font-bold text-gray-900">
            Practice Management for Ontario Criminal Defence Lawyers
          </h3>
          <p className="mb-6 text-gray-600">
            Deadline tracking, trust accounting, matter management, and AI document analysis —
            built for Ontario criminal defence practice.
          </p>
          <a
            href="/sign-up"
            className="inline-block rounded-lg bg-gray-800 px-6 py-3 font-semibold text-white hover:bg-gray-900"
          >
            Start Free Trial
          </a>
        </div>
      </article>
    </>
  );
}
