import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ontario Environmental Law — Environmental Protection Act, Spills, and the ERT | Atticus Blog",
  description:
    "Comprehensive guide to Ontario environmental law: Environmental Protection Act RSO 1990, spills liability, director/officer liability, Environmental Review Tribunal, Ontario Water Resources Act, Species at Risk Act, and environmental due diligence for Ontario lawyers.",
  openGraph: {
    title: "Ontario Environmental Law — EPA, Spills Liability, and the ERT",
    description:
      "Environmental Protection Act RSO 1990 c E.19, spills liability s.92-99, director/officer liability, ERT appeals, Ontario Water Resources Act, Species at Risk Act, and environmental compliance for Ontario lawyers.",
    type: "article",
    url: "https://getatticus.ca/blog/ontario-environmental-law",
  },
  alternates: { canonical: "https://getatticus.ca/blog/ontario-environmental-law" },
};

export default function OntarioEnvironmentalLawPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Ontario Environmental Law — EPA, Spills Liability, and the ERT",
    description:
      "Environmental Protection Act RSO 1990, spills liability, director/officer liability, ERT, Ontario Water Resources Act, Species at Risk Act, and due diligence for Ontario lawyers.",
    author: { "@type": "Organization", name: "Atticus" },
    publisher: { "@type": "Organization", name: "Atticus", url: "https://getatticus.ca" },
    url: "https://getatticus.ca/blog/ontario-environmental-law",
    mainEntityOfPage: "https://getatticus.ca/blog/ontario-environmental-law",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-slate-900 to-green-900 text-white py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <Link href="/blog" className="text-slate-400 hover:text-white text-sm transition">
                &#8592; Blog
              </Link>
              <span className="bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded">
                Environmental Law
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Ontario Environmental Law — EPA, Spills Liability, and the ERT
            </h1>
            <p className="text-slate-300 text-lg">
              Environmental Protection Act RSO 1990, spills liability, director and officer
              liability, Environmental Review Tribunal proceedings, Ontario Water Resources Act,
              Species at Risk Act, and environmental due diligence — for Ontario environmental
              and corporate lawyers.
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

            <h2>Environmental Protection Act — Overview</h2>
            <p>
              The Environmental Protection Act RSO 1990 c E.19 (EPA) is Ontario&apos;s principal
              environmental statute. It prohibits the discharge of a contaminant into the
              natural environment that causes or is likely to cause an adverse effect (s.14 —
              the general prohibition). An &quot;adverse effect&quot; is broadly defined in s.1
              to include impairment of the quality of the natural environment, injury or damage
              to property, harm to human health, loss of enjoyment of normal use of property,
              and interference with normal conduct of business.
            </p>
            <p>
              The EPA is administered by the Ministry of the Environment, Conservation and Parks
              (MECP). The Environmental Commissioner of Ontario reviews and reports on the
              government&apos;s environmental activities. The Environmental Review Tribunal (ERT)
              is the independent adjudicative body that hears appeals from MECP decisions under
              the EPA and related statutes.
            </p>

            <h2>Environmental Approvals and Environmental Compliance Approvals</h2>
            <p>
              Under the EPA, certain activities require an Environmental Compliance Approval (ECA)
              from MECP before they may be undertaken. ECAs were formerly known as Certificates
              of Approval (C of As). Activities requiring ECAs include the construction and
              operation of: industrial sources of air emissions; sewage works; waste management
              systems; and noise-generating operations. The ECA sets out terms and conditions
              for the approval, including monitoring, reporting, and mitigation requirements.
            </p>
            <p>
              Appeals of ECA decisions go to the Environmental Review Tribunal. The ERT applies
              a standard of review in its enabling statute: under EPA s.145.2.1, the ERT may
              consider whether engaging in the activity is in the public interest having regard
              to the purposes of the EPA. This is a broader review than the typical
              administrative law reasonableness standard for most adjudicative bodies.
            </p>

            <h2>Spills Liability — EPA ss.92-99</h2>
            <p>
              The EPA&apos;s spills provisions (Part X, ss.92-99) create strict liability for
              the costs of cleaning up a spill of a pollutant into the natural environment.
              A &quot;spill&quot; is a discharge of a pollutant into the natural environment
              that is abnormal in quality or quantity in light of all the circumstances of
              the discharge (s.91(1)). The spill reporting obligations in s.92 require the
              owner and person in control of the pollutant to report the spill immediately
              to MECP and to take all reasonable steps to prevent, eliminate, and ameliorate
              the adverse effects.
            </p>
            <p>
              EPA s.99 imposes liability for clean-up costs on: (1) the owner of the pollutant
              that was spilled; (2) the person who had charge, management, or control of the
              pollutant immediately before the spill; and (3) persons who had charge, management,
              or control of the undertaking or activity that caused the spill. The court may
              also make orders against persons who had charge, management, or control of the
              land from which the spill occurred.
            </p>
            <p>
              Strict liability means that the owner and responsible persons are liable for
              clean-up costs even if they were not negligent and even if the spill was caused
              by a third party or an act of God — subject to the due diligence defence and
              force majeure under the Act. R v Bata Industries Ltd (1992) 7 OR (3d) 615 (Prov
              Ct) is the leading Ontario case on director/officer liability under the EPA — it
              established the due diligence framework for corporate officers.
            </p>

            <h2>Director and Officer Liability</h2>
            <p>
              EPA s.194 provides that directors and officers of a corporation may be personally
              liable for offences under the EPA committed by the corporation if they directed,
              authorized, assented to, acquiesced in, or participated in the contravention.
              The due diligence defence is available — a director or officer is not liable if
              they took all reasonable care to prevent the contravention.
            </p>
            <p>
              R v Bata Industries (above) identified the minimum standard of care for corporate
              officers: (1) the director must establish that the corporate structure provided
              for compliance with the EPA and that the system was working; (2) the director
              must ensure that there were regular reports and updates on environmental matters;
              (3) the director must ensure that corrective action was taken when environmental
              problems were identified; and (4) the director cannot claim ignorance of the
              corporation&apos;s activities as a defence.
            </p>
            <p>
              Ontario courts have consistently held that the due diligence defence requires
              active steps — not mere paper compliance. Directors and officers of companies
              with environmental obligations must demonstrate genuine engagement with
              environmental compliance programs.
            </p>

            <h2>Ontario Water Resources Act</h2>
            <p>
              The Ontario Water Resources Act RSO 1990 c O.40 (OWRA) prohibits the discharge
              of material into any water that may impair water quality (s.30). OWRA s.30A
              imposes strict liability for costs of remediation of water quality impairment
              caused by a discharge, similar to the EPA spills regime. Permits to Take Water
              (PTTWs) are required for taking water from a natural source above prescribed
              thresholds (generally 50,000 litres per day) under OWRA s.34.
            </p>

            <h2>Species at Risk and Protected Areas</h2>
            <p>
              The Endangered Species Act SO 2007 c 6 (ESA) protects species at risk and their
              habitats in Ontario. The ESA prohibits killing, harming, harassing, capturing,
              taking, and possessing listed threatened and endangered species (s.9), and
              prohibits damaging or destroying the habitat of threatened and endangered species
              (s.10). Permits may be obtained from MECP for activities that would otherwise
              contravene the ESA, subject to conditions including mitigation, monitoring, and
              offsetting.
            </p>
            <p>
              Federal environmental assessment requirements under the Impact Assessment Act
              SC 2019 c 28 apply to &quot;designated projects&quot; with potential adverse
              effects on federal areas of jurisdiction. The Impact Assessment Act replaced the
              Canadian Environmental Assessment Act 2012 and was significantly revised following
              the Supreme Court of Canada&apos;s decision in Reference re Impact Assessment Act
              2023 SCC 23, which found parts of the Act unconstitutional as exceeding federal
              jurisdiction.
            </p>

            <h2>Environmental Due Diligence in Real Estate</h2>
            <p>
              Environmental due diligence is critical in Ontario commercial real estate
              transactions. Phase I Environmental Site Assessment (ESA) — following CSA
              Z768-01 standards — identifies recognized environmental conditions (RECs) on a
              property through records review and site inspection. A Phase II ESA involves
              soil and groundwater sampling to confirm contamination. Where contamination is
              found, a Record of Site Condition (RSC) may be required before a change in
              property use to a more sensitive land use (under Environmental Protection Act O.Reg. 153/04).
            </p>
            <p>
              Purchasers of commercial and industrial properties in Ontario should ensure
              that environmental conditions are addressed in purchase agreements, that
              representations and warranties address environmental compliance, and that
              indemnification provisions allocate known environmental liabilities appropriately.
              The EPA&apos;s retroactive liability provisions mean that current owners may
              be liable for contamination caused by historical operations.
            </p>

            <div className="bg-green-50 border border-green-200 rounded-xl p-6 mt-8">
              <h3 className="text-lg font-bold text-green-900 mb-2">
                Manage Environmental Law Matters with Atticus
              </h3>
              <p className="text-green-800 mb-4">
                Track ECA appeal deadlines, spill reporting obligations, ESA permit conditions,
                and environmental litigation files — all in one platform built for Ontario
                environmental and corporate lawyers.
              </p>
              <Link
                href="/sign-up"
                className="inline-block bg-green-700 hover:bg-green-800 text-white font-semibold px-6 py-3 rounded-lg transition"
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
