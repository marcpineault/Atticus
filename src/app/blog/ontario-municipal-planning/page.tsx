import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ontario Municipal Planning Law 2024 | OLT Appeals and Zoning Guide for Lawyers",
  description:
    "A practical guide to Ontario municipal planning law: the Planning Act, zoning by-laws, official plans, minor variances, severances, subdivision approval, Ontario Land Tribunal (OLT) appeals, and the role of Ontario lawyers in land use planning.",
  openGraph: {
    title: "Ontario Municipal Planning Law 2024 | OLT Appeals and Zoning Guide for Lawyers",
    description:
      "Ontario Planning Act, zoning by-laws, official plans, minor variances, severances, subdivision approval, Ontario Land Tribunal appeals, and Bill 23/185 changes. A guide for Ontario planning lawyers.",
    url: "https://getatticus.ca/blog/ontario-municipal-planning",
    siteName: "Atticus",
    type: "article",
  },
};

const articleSchema = `{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Ontario Municipal Planning Law: Zoning, Official Plans, and OLT Appeals",
  "description": "A practical guide to Ontario municipal planning law: Planning Act, zoning by-laws, official plans, minor variances, severances, OLT appeals, and recent legislative changes.",
  "author": {
    "@type": "Organization",
    "name": "Atticus"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Atticus",
    "url": "https://getatticus.ca"
  },
  "url": "https://getatticus.ca/blog/ontario-municipal-planning",
  "mainEntityOfPage": "https://getatticus.ca/blog/ontario-municipal-planning"
}`;

const faqSchema = `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is an Ontario official plan and who must follow it?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "An official plan is a municipal land use planning document required under section 17 of the Ontario Planning Act that sets out the municipality's long-term policies for managing land use and growth. Zoning by-laws must conform to the official plan, and all development applications must be consistent with or conform to the official plan. Official plans must also conform to provincial policy statements and plans (the Provincial Policy Statement, Growth Plan for the Greater Golden Horseshoe, Greenbelt Plan, etc.)."
      }
    },
    {
      "@type": "Question",
      "name": "What is a minor variance and when is it required in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A minor variance under section 45 of the Planning Act authorizes a small deviation from the requirements of the zoning by-law where the general intent and purpose of the by-law and official plan are maintained, the variance is minor, and the proposal is desirable for the appropriate development or use of the land. Minor variances are heard by the Committee of Adjustment, not municipal council. They are required when a proposed development does not meet precise zoning standards (e.g., setback is 3.8m instead of 4m required) but the owner does not want to seek a full zoning by-law amendment."
      }
    },
    {
      "@type": "Question",
      "name": "Who can appeal planning decisions to the Ontario Land Tribunal?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Ontario Land Tribunal (OLT) hears appeals of planning decisions including: official plan amendments, zoning by-law amendments, consents (severances), minor variances, subdivision approvals, and site plan decisions. Standing to appeal was significantly restricted by Bill 23 (More Homes Built Faster Act, 2022) — only the applicant, the municipality (in some cases), and the Minister of Municipal Affairs and Housing may appeal most OLT decisions; third-party appeals (by neighbours, residents, or municipalities) were largely eliminated for most application types. Environmental and conservation authority matters still have broader standing."
      }
    },
    {
      "@type": "Question",
      "name": "What is a consent (severance) application in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A consent application under section 53 of the Planning Act authorizes the division of land (severing a parcel from a larger lot), easements, mortgages of part of a property, and leases of 21 years or more. Consent applications are heard by the Committee of Adjustment (in most municipalities) or the Land Division Committee. The committee considers whether the proposed consent conforms to the official plan, is appropriate for the use of the land, and whether the retained and severed lots are adequate. Conditions of consent (servicing requirements, road widenings) are common."
      }
    },
    {
      "@type": "Question",
      "name": "How have Bill 23 and Bill 185 changed Ontario planning law?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Bill 23 (More Homes Built Faster Act, 2022) made major changes including: restricting third-party OLT appeals for most planning applications; requiring municipalities to permit additional residential units (ARUs) as-of-right; expanding as-of-right uses in residential zones; reducing development charge exemptions for affordable housing; and enabling increased density in transit-served communities. Bill 185 (Cutting Red Tape to Build More Homes Act, 2024) further streamlined processes including mandatory timelines for municipal decisions, enhanced Minister's Zoning Orders (MZOs), and modified OLT procedures."
      }
    }
  ]
}`;

export default function OntarioMunicipalPlanningPage() {
  return (
    <>
      <Script id="municipal-planning-article-schema" type="application/ld+json">
        {articleSchema}
      </Script>
      <Script id="municipal-planning-faq-schema" type="application/ld+json">
        {faqSchema}
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
            <div className="inline-block bg-amber-100 text-amber-800 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              Municipal & Planning Law
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-4 leading-tight">
              Ontario Municipal Planning Law: Zoning, Official Plans, and OLT Appeals
            </h1>
            <p className="text-lg text-slate-600">
              Ontario&apos;s planning law framework — centred on the{" "}
              <em>Planning Act</em>, provincial policy statements, and the
              Ontario Land Tribunal — governs how land is used, developed, and
              changed across the province. With major legislative changes from
              Bill 23 and Bill 185, the planning law landscape has shifted
              significantly. This guide covers the key processes, appeal rights,
              and recent changes affecting Ontario planning lawyers.
            </p>
          </header>

          <article className="prose prose-slate max-w-none">
            <h2>The Planning Act Framework</h2>
            <p>
              The Ontario <em>Planning Act</em>, RSO 1990, c P.13 is the
              primary statute governing land use planning in Ontario. It
              establishes the framework for official plans, zoning by-laws,
              subdivision approval, consents, minor variances, and appeals.
              The Act operates within a hierarchy:
            </p>
            <ol>
              <li>
                Provincial policy statements and plans (PPS, Growth Plan for
                the Greater Golden Horseshoe, Greenbelt Plan, Oak Ridges
                Moraine Conservation Plan, Niagara Escarpment Plan)
              </li>
              <li>
                Municipal official plans — must conform to provincial plans
                and be consistent with the PPS
              </li>
              <li>
                Zoning by-laws — must conform to the official plan
              </li>
              <li>
                Individual development applications — must conform to zoning
                and official plan
              </li>
            </ol>

            <h2>Official Plans</h2>
            <p>
              Every municipality in Ontario must have an official plan (s. 17
              Planning Act). The official plan:
            </p>
            <ul>
              <li>Designates land uses (residential, commercial, employment, mixed-use, natural heritage, agricultural)</li>
              <li>Sets out policies governing the type, density, and character of permitted development within each designation</li>
              <li>Must be reviewed every 5 years (s. 26)</li>
              <li>May be amended by municipal council through an official plan amendment (OPA) application</li>
            </ul>
            <p>
              Official plans must be approved by the appropriate approval authority (the Minister of Municipal Affairs and Housing for upper-tier municipalities and some large lower-tier municipalities; the upper-tier municipality for lower-tier municipalities).
            </p>

            <h2>Zoning By-Laws</h2>
            <p>
              A zoning by-law implements the official plan at the parcel level.
              It specifies:
            </p>
            <ul>
              <li>Permitted uses for each zone (e.g., residential, commercial, industrial)</li>
              <li>Standards for development (setbacks from property lines, minimum lot frontage and area, maximum lot coverage, building height, parking requirements)</li>
            </ul>
            <p>
              Development that does not comply with zoning requires one of:
            </p>
            <ul>
              <li>A <strong>zoning by-law amendment (rezoning)</strong> — a formal amendment to the by-law by council</li>
              <li>A <strong>minor variance</strong> from the Committee of Adjustment — for small deviations from precise standards</li>
              <li>A <strong>holding symbol removal</strong> — where the by-law permits development once specified conditions are met</li>
            </ul>

            <h2>Minor Variances</h2>
            <p>
              A minor variance (s. 45 Planning Act) authorizes a deviation from
              the zoning by-law that satisfies the four-part test:
            </p>
            <ol>
              <li>Maintains the general intent and purpose of the official plan</li>
              <li>Maintains the general intent and purpose of the zoning by-law</li>
              <li>Is desirable for the appropriate development or use of the land, building, or structure</li>
              <li>Is minor in nature</li>
            </ol>
            <p>
              Minor variances are heard by the Committee of Adjustment — a
              quasi-judicial body appointed by the municipal council. Conditions
              may be imposed. The applicant, the municipality, and (historically)
              any person who appeared before the committee may appeal to the OLT.
            </p>

            <h2>Consents (Severances)</h2>
            <p>
              A consent under s. 53 of the Planning Act authorizes:
            </p>
            <ul>
              <li>Division of a lot (land severance)</li>
              <li>Easements, rights-of-way</li>
              <li>Mortgages of part of a parcel</li>
              <li>Leases of 21 years or more</li>
            </ul>
            <p>
              Consent applications are typically heard by the Committee of
              Adjustment. Conditions of consent commonly include: road
              widenings, lot grading plans, parkland dedication, servicing
              requirements, and architectural controls. Consent lapse after
              2 years if conditions are not fulfilled (s. 53(41)).
            </p>

            <h2>Subdivision Approval</h2>
            <p>
              A plan of subdivision under s. 51 is required to divide land into
              lots for separate ownership and sale. The approval process involves:
            </p>
            <ol>
              <li>Draft plan approval by the approval authority (conditions set out)</li>
              <li>Satisfaction of draft plan conditions (servicing agreements, road construction, parkland dedication, heritage requirements)</li>
              <li>Final approval and registration of the plan in the Land Registry Office</li>
            </ol>
            <p>
              Subdivision agreements (s. 51.1) bind the developer and subsequent
              owners to obligations related to the development.
            </p>

            <h2>Ontario Land Tribunal (OLT)</h2>
            <p>
              The Ontario Land Tribunal was created in 2021 by amalgamating
              the Local Planning Appeal Tribunal (LPAT), the Environmental
              Review Tribunal, the Conservation Review Board, and other
              adjudicative bodies. The OLT hears appeals of:
            </p>
            <ul>
              <li>Official plan amendments and official plan approvals</li>
              <li>Zoning by-law amendments</li>
              <li>Minor variance and consent decisions (from the Committee of Adjustment)</li>
              <li>Subdivision approval decisions</li>
              <li>Site plan decisions (limited circumstances)</li>
              <li>Development charge disputes</li>
            </ul>
            <p>
              OLT hearings are de novo proceedings — the Tribunal does not defer
              to the municipal decision and may substitute its own planning
              judgment.
            </p>

            <h3>Standing Restrictions Post-Bill 23</h3>
            <p>
              Bill 23 (More Homes Built Faster Act, 2022) dramatically restricted
              third-party appeal rights. For most OPA, zoning amendment, minor
              variance, and consent decisions, only the following may appeal:
            </p>
            <ul>
              <li>The applicant</li>
              <li>The Minister of Municipal Affairs and Housing</li>
              <li>A public body specified in regulations</li>
              <li>The municipality (in specific circumstances)</li>
            </ul>
            <p>
              Neighbours, residents&apos; associations, and third-party
              intervenors can no longer appeal most planning decisions to the OLT.
              This was one of the most significant changes to Ontario planning
              law in a generation.
            </p>

            <h2>Minister&apos;s Zoning Orders (MZOs)</h2>
            <p>
              Under s. 47 of the Planning Act, the Minister of Municipal
              Affairs and Housing may issue a Minister&apos;s Zoning Order
              (MZO) that overrides local zoning and official plan provisions.
              MZOs were significantly expanded under Bill 23 and Bill 185 and
              have been used extensively by the provincial government to
              facilitate major development projects, including in the Greenbelt
              (later reversed following a provincial audit). MZOs are not
              subject to OLT appeal.
            </p>

            <h2>Development Charges and Parkland</h2>
            <p>
              Development charges (DCs) are levied on new development to fund
              the capital costs of infrastructure required to service growth
              (roads, transit, water, community centres). The{" "}
              <em>Development Charges Act, 1997</em> governs DC by-laws.
              Bill 23 modified DC exemptions for purpose-built rental housing,
              non-profit housing, and affordable housing units — a significant
              financial planning consideration for development clients.
            </p>
            <p>
              Municipalities may require parkland dedication as a condition of
              development approval (s. 42 Planning Act) — 5% of the land for
              residential, or a cash-in-lieu payment.
            </p>

            <h2>How Atticus Helps Ontario Planning Lawyers</h2>
            <p>
              Municipal planning matters involve complex timelines (statutory
              decision deadlines, OLT appeal windows, draft plan approval
              lapse dates), multiple government bodies, and large document
              sets (consultant reports, agency comments, OLT case materials).
              Atticus supports Ontario planning lawyers with:
            </p>
            <ul>
              <li>
                <strong>Deadline tracking</strong> — AI extracts key dates
                from OLT decisions, draft plan approvals, and consent lapse
                notices to flag upcoming deadlines
              </li>
              <li>
                <strong>Matter management</strong> — track application stages,
                government agency correspondence, and hearing schedules for
                complex multi-stage planning matters
              </li>
              <li>
                <strong>Document analysis</strong> — AI reviews planning
                reports, agency comments, and OLT decisions to extract key
                conditions, dates, and outstanding obligations
              </li>
              <li>
                <strong>LSO-compliant trust accounting</strong> — manage
                trust funds for development agreement deposits and complex
                multi-party planning files
              </li>
            </ul>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mt-10">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Ontario-Built Practice Management for Planning Lawyers
              </h3>
              <p className="text-slate-700 mb-4 text-sm">
                Atticus helps Ontario planning and municipal lawyers manage
                deadlines, document analysis, and client files — with
                LSO-compliant trust accounting built in.
                $149 CAD per lawyer per month.
              </p>
              <Link
                href="/sign-up"
                className="inline-block bg-slate-900 text-white font-semibold px-6 py-3 rounded-lg hover:bg-slate-700 transition-colors text-sm"
              >
                Start Free Trial
              </Link>
            </div>
          </article>

          <div className="mt-12 pt-8 border-t border-slate-100">
            <h3 className="text-sm font-semibold text-slate-900 mb-4">
              Related Resources
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                {
                  href: "/blog/ontario-municipal-law",
                  label: "Ontario Municipal Law",
                },
                {
                  href: "/blog/ontario-environmental-law",
                  label: "Ontario Environmental Law",
                },
                {
                  href: "/blog/ontario-real-estate-closing",
                  label: "Ontario Real Estate Closing",
                },
                {
                  href: "/blog/ontario-administrative-law",
                  label: "Ontario Administrative Law",
                },
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
        </div>
      </div>
    </>
  );
}
