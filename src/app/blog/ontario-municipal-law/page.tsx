import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ontario Municipal Law — Planning Act, Zoning, Official Plans, and Development Approvals | Atticus Blog",
  description:
    "Comprehensive guide to Ontario municipal law: Planning Act RSO 1990, official plans, zoning by-laws, minor variances, consent to sever, site plan control, development charges, and Ontario Land Tribunal proceedings for Ontario real estate and municipal lawyers.",
  openGraph: {
    title: "Ontario Municipal Law — Planning Act, Zoning, and Development Approvals",
    description:
      "Planning Act RSO 1990 c P.13, official plans, zoning by-laws, minor variances, consent to sever, site plan control, development charges, and OLT Ontario Land Tribunal for Ontario practitioners.",
    type: "article",
    url: "https://getatticus.ca/blog/ontario-municipal-law",
  },
  alternates: { canonical: "https://getatticus.ca/blog/ontario-municipal-law" },
};

export default function OntarioMunicipalLawPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Ontario Municipal Law — Planning Act, Zoning, and Development Approvals",
    description:
      "Planning Act RSO 1990, official plans, zoning by-laws, variances, consent to sever, site plan control, development charges, and OLT for Ontario municipal and real estate practitioners.",
    author: { "@type": "Organization", name: "Atticus" },
    publisher: { "@type": "Organization", name: "Atticus", url: "https://getatticus.ca" },
    url: "https://getatticus.ca/blog/ontario-municipal-law",
    mainEntityOfPage: "https://getatticus.ca/blog/ontario-municipal-law",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-slate-900 to-stone-800 text-white py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <Link href="/blog" className="text-slate-400 hover:text-white text-sm transition">
                &#8592; Blog
              </Link>
              <span className="bg-stone-500 text-white text-xs font-semibold px-2 py-1 rounded">
                Municipal Law
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Ontario Municipal Law — Planning Act, Zoning, and Development Approvals
            </h1>
            <p className="text-slate-300 text-lg">
              Planning Act RSO 1990, official plans, zoning by-laws, minor variances, consent
              to sever, site plan control, development charges, and Ontario Land Tribunal
              proceedings — a guide for Ontario real estate and municipal lawyers.
            </p>
            <div className="flex items-center gap-4 mt-6 text-sm text-slate-400">
              <span>March 2026</span>
              <span>&#8226;</span>
              <span>13 min read</span>
            </div>
          </div>
        </section>

        <article className="py-16 px-6">
          <div className="max-w-3xl mx-auto prose prose-slate max-w-none">

            <h2>Planning Act Framework</h2>
            <p>
              The Planning Act RSO 1990 c P.13 is Ontario&apos;s primary land use planning statute.
              It establishes the framework for official plans, zoning by-laws, development
              approvals, subdivision and condominium approvals, and appeals to the Ontario Land
              Tribunal (OLT). Land use planning in Ontario operates in a hierarchy: Provincial
              Policy Statements (PPS) and provincial plans (Greenbelt Plan, Growth Plan for
              the Greater Golden Horseshoe) set provincial policy; official plans translate
              provincial policy into local planning frameworks; and zoning by-laws implement
              official plan policies at the property level.
            </p>
            <p>
              The Municipal Act SO 2001 c 25 and the City of Toronto Act SO 2006 c 11 Sch A
              govern the general powers of Ontario municipalities. Municipalities may pass
              by-laws for the purposes of exercising their jurisdiction over matters including
              land use, buildings, drainage, parks, and local services. Municipal by-laws are
              subject to judicial review for compliance with enabling legislation and may be
              challenged at the OLT under the Planning Act.
            </p>

            <h2>Provincial Policy Statement</h2>
            <p>
              The Provincial Policy Statement (PPS 2020) is issued by the Minister under
              Planning Act s.3 and sets out the province&apos;s land use planning policies.
              Planning decisions must be consistent with the PPS (the &quot;consistent with&quot;
              standard replaced the &quot;have regard to&quot; standard as of 2005). Key PPS
              2020 policies include: directing growth to settlement areas; protecting agricultural
              land and the natural heritage system; intensification and compact development;
              transit-supportive development; and adequate housing supply.
            </p>
            <p>
              Note: Bill 23 (More Homes Built Faster Act 2022) and subsequent housing legislation
              significantly amended the Planning Act and related statutes to accelerate housing
              approvals, reduce appeals rights, and limit the ability of municipalities to
              restrict housing development in certain contexts. Ontario lawyers advising on
              development matters must be current with the rapidly evolving legislative environment.
            </p>

            <h2>Official Plans</h2>
            <p>
              An official plan under Planning Act Part II (ss.17-42.2) is a statutory policy
              document adopted by a municipality that sets out the long-term vision and land
              use policies for the community. Official plans designate land for residential,
              commercial, industrial, institutional, open space, and natural heritage uses, and
              establish policies for development and redevelopment.
            </p>
            <p>
              Official plans must be reviewed every five years to ensure conformity with provincial
              plans and consistency with the PPS (s.26). Amendments to official plans (Official
              Plan Amendments — OPAs) may be proposed by property owners or initiated by the
              municipality. OPAs require a statutory public meeting and notice under Planning
              Act s.17. Following approval, OPAs may be appealed to the OLT by persons who have
              objected during the public process (subject to the restricted appeal rights introduced
              by Bill 23).
            </p>

            <h2>Zoning By-Laws</h2>
            <p>
              Zoning by-laws implement official plan policies at the property level, specifying
              permitted uses and development standards (setbacks, height, lot coverage, parking,
              etc.) for every property in the municipality. Ontario municipalities may also adopt
              Holding (H) zones that permit development only when specified conditions are met,
              and Temporary Use By-Laws under s.39 for specified temporary uses.
            </p>
            <p>
              Zoning by-law amendments (ZBAs) are required for changes in permitted uses or
              development standards. A ZBA application involves a statutory public meeting
              under Planning Act s.34(12), public notice, and council consideration. ZBAs
              may be appealed to the OLT.
            </p>
            <p>
              A comprehensive zoning by-law review (CZR) — rewriting the entire municipal
              zoning by-law — requires conformity with the official plan and consistency with
              the PPS. The City of Toronto completed its comprehensive zoning by-law (By-law
              569-2013) with OLT proceedings ongoing on various issues.
            </p>

            <h2>Minor Variances</h2>
            <p>
              A minor variance under Planning Act s.45 allows a property owner to obtain relief
              from a specific zoning requirement without requiring a full zoning by-law amendment.
              The Committee of Adjustment (CoA) hears minor variance applications and applies
              the four-part test from s.45(1): (1) the general intent and purpose of the
              official plan is maintained; (2) the general intent and purpose of the zoning
              by-law is maintained; (3) the variance is desirable for the appropriate development
              or use of land; and (4) the variance is minor.
            </p>
            <p>
              CoA decisions on minor variances may be appealed to the OLT within 20 days of
              the decision. Merits review at the OLT applies the same four-part test. Residents
              who received notice of the application and who appeared at the hearing have standing
              to appeal.
            </p>

            <h2>Consent to Sever</h2>
            <p>
              Consent to sever (land severance) under Planning Act s.53 is required to divide
              a parcel of land into two or more parcels, create an easement or right-of-way,
              or add land to an abutting parcel where the result would be a new lot. The CoA
              acts as consent authority for most municipalities. Conditions may be imposed on
              a consent — including registration of a deposit of a plan of survey, the provision
              of municipal services, and conformity with zoning and official plan requirements.
            </p>

            <h2>Development Charges</h2>
            <p>
              The Development Charges Act SO 1997 c 27 (DCA) allows municipalities to impose
              development charges (DCs) on new development to recover the capital costs of
              new or expanded municipal services needed to accommodate growth. Development
              charges are calculated based on a municipal development charge background study
              and by-law, and are payable before building permit issuance.
            </p>
            <p>
              Bill 23 (2022) introduced significant changes to the DCA including discounts on
              development charges for purpose-built rentals, non-profit housing, and
              intensification, as well as changes to the timing of DC payment and exemptions.
              Development charges are a major cost component in Ontario residential development
              and are the subject of ongoing litigation and OLT proceedings.
            </p>

            <h2>Ontario Land Tribunal</h2>
            <p>
              The Ontario Land Tribunal (OLT) was established in June 2021, consolidating the
              Local Planning Appeal Tribunal (LPAT), Conservation Review Board, Environmental
              Review Tribunal (environmental matters), Assessment Review Board, and Mining and
              Lands Tribunal. The OLT hears appeals under the Planning Act, Building Code Act,
              Assessment Act, and other statutes. OLT proceedings are governed by the OLT&apos;s
              Practice Directions and the SPPA RSO 1990 c S.22.
            </p>
            <p>
              Bill 23 and subsequent legislation significantly narrowed appeal rights to the
              OLT for housing-supportive applications (residential as-of-right, Minister&apos;s
              Zoning Orders, OPAs for housing). The purpose was to reduce delays in housing
              approvals. Ontario real estate and municipal lawyers advising on development
              matters must navigate the evolving appeal rights framework carefully.
            </p>

            <div className="bg-stone-50 border border-stone-200 rounded-xl p-6 mt-8">
              <h3 className="text-lg font-bold text-stone-900 mb-2">
                Manage Municipal Law Matters with Atticus
              </h3>
              <p className="text-stone-800 mb-4">
                Track CoA appeal deadlines, OLT hearing dates, official plan amendment timelines,
                and development charge matters — all in one platform built for Ontario real estate
                and municipal lawyers.
              </p>
              <Link
                href="/sign-up"
                className="inline-block bg-stone-700 hover:bg-stone-800 text-white font-semibold px-6 py-3 rounded-lg transition"
              >
                Try Atticus Free
              </Link>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
