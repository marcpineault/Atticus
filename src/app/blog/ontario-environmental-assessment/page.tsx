import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ontario Environmental Assessment Law Guide | Atticus",
  description:
    "Guide to Ontario's Environmental Assessment Act and federal Impact Assessment Act: EA triggers, scope, public participation, conditions of approval, and CERB remediation liability.",
  openGraph: {
    title: "Ontario Environmental Assessment — EA Act, IAA, and Contaminated Sites",
    description:
      "Environmental assessment in Ontario: Environmental Assessment Act RSO 1990, Impact Assessment Act 2019, designated projects, conditions of approval, contamination liability, and CERB certificates.",
    type: "article",
    url: "https://getatticus.ca/blog/ontario-environmental-assessment",
  },
  alternates: { canonical: "https://getatticus.ca/blog/ontario-environmental-assessment" },
};

export default function OntarioEnvironmentalAssessmentPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Ontario Environmental Assessment — EA Act, IAA, and Contaminated Sites",
    description:
      "Environmental assessment law in Ontario: provincial EA Act, federal IAA, contamination liability, and CERB certificates.",
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
              Environmental Law
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Ontario Environmental Assessment — EA Act, Federal IAA, and Contaminated Sites
            </h1>
            <p className="text-xl text-slate-300">
              Environmental assessment in Ontario: provincial EA Act RSO 1990 c E.18 process, federal
              Impact Assessment Act 2019, proponent obligations, conditions of approval, contaminated
              site liability, and CERB certificates for brownfield development.
            </p>
          </div>
        </section>

        <article className="py-16 px-4">
          <div className="max-w-3xl mx-auto prose prose-slate prose-lg">

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Provincial EA Framework — Environmental Assessment Act RSO 1990</h2>
            <p className="text-slate-600 mb-4">
              The <em>Environmental Assessment Act</em> RSO 1990 c E.18 (EAA) governs the assessment
              of environmental effects of major projects in Ontario. It applies to &quot;undertakings&quot; —
              broadly defined to include projects, activities, and plans — by public sector proponents
              (provincial government, Crown agencies, municipalities) and designated private sector
              proponents.
            </p>
            <p className="text-slate-600 mb-4">
              The purpose of the EAA is to ensure that environmental effects of major undertakings
              are considered before approval — the &quot;look before you leap&quot; principle. Undertakings
              subject to the EAA require approval from the Minister of the Environment, Conservation
              and Parks (MECP) before proceeding.
            </p>
            <p className="text-slate-600 mb-4">
              Three EA tracks under the Ontario EAA:
            </p>
            <ul className="space-y-3 text-slate-600 mb-6 list-none">
              <li className="flex gap-3">
                <span className="text-amber-500 font-bold">•</span>
                <span><strong>Individual EA</strong> — for major provincial infrastructure projects (highways, transit, waste management facilities). Full assessment process including terms of reference, EA document, agency/public review, and Minister approval. Can take 5–10 years.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500 font-bold">•</span>
                <span><strong>Class EA</strong> — pre-approved process for routine categories of projects (municipal road upgrades, transit projects, waste diversion). Proponent follows a pre-approved schedule including public notices and consultation. Only individual opponents may &quot;bump up&quot; to a full EA.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500 font-bold">•</span>
                <span><strong>Streamlined EA (post-2021 amendments)</strong> — Bill 197 (COVID-19 Economic Recovery Act 2020) and Bill 257 amended the EAA to add a more expedited process for certain resource sector and economic projects, with reduced public consultation requirements — controversial amendments that face ongoing legal challenges from First Nations and environmental groups.</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Federal Impact Assessment Act 2019</h2>
            <p className="text-slate-600 mb-4">
              The federal <em>Impact Assessment Act</em> SC 2019 c 28 (IAA) replaced the previous
              <em>Canadian Environmental Assessment Act 2012</em>. The IAA governs federally designated
              projects — a defined list of project types with federal environmental effects (s.7 and
              Physical Activities Regulations SOR/2019-285).
            </p>
            <p className="text-slate-600 mb-4">
              Designated projects under the IAA include: nuclear facilities, interprovincial pipelines,
              federal lands facilities, offshore oil and gas, international/interprovincial bridges,
              certain electrical transmission lines, and mining projects over specified thresholds.
              Note: in <em>Reference re Impact Assessment Act</em> 2023 SCC 23, the Supreme Court
              declared significant portions of the IAA unconstitutional as exceeding federal jurisdiction —
              Parliament responded with amendments under Bill C-69 amending legislation, and the IAA
              is under ongoing constitutional revision.
            </p>
            <p className="text-slate-600 mb-4">
              For projects with both federal and provincial EA requirements, the federal Impact
              Assessment Agency of Canada and Ontario MECP have entered substitution and cooperation
              agreements to run joint or substituted processes — avoiding full parallel assessments.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Conditions of Approval and Enforcement</h2>
            <p className="text-slate-600 mb-4">
              EA approvals are accompanied by conditions — binding requirements on the proponent
              addressing mitigation measures, monitoring programs, and reporting. Conditions are
              enforceable: violation is an offence under the EAA (s.40) and the proponent may face
              stop-work orders, remediation orders, and fines.
            </p>
            <p className="text-slate-600 mb-4">
              Post-2021 changes to the Ontario EAA reduced the public consultation requirements and
              timelines for many projects. Environmental groups argue this weakened the EA process;
              the government argues it was necessary to reduce backlog and facilitate economic
              development. These changes are significant context for any current EA proceeding in Ontario.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Environmental Liability — Contaminated Sites</h2>
            <p className="text-slate-600 mb-4">
              The <em>Environmental Protection Act</em> RSO 1990 c E.19 (EPA) is the primary Ontario
              statute governing contamination and environmental liability. Key provisions:
            </p>
            <p className="text-slate-600 mb-4">
              <strong>Section 18 Environmental Compliance Approvals (ECAs)</strong>: facilities that
              discharge contaminants into the natural environment require an ECA. Operating without
              an ECA, or exceeding ECA conditions, is an offence.
            </p>
            <p className="text-slate-600 mb-4">
              <strong>Section 93 Remediation Orders</strong>: the MECP Director may order a &quot;person
              responsible&quot; to remediate a contaminated site. The &quot;person responsible&quot; is broadly
              defined to include the owner of the contaminant, the owner of the land where contamination
              occurred, and successors in title. Innocent purchasers who had no knowledge of contamination
              at time of purchase may still face remediation orders — the EPA creates a form of strict
              liability for the current owner.
            </p>
            <p className="text-slate-600 mb-4">
              <strong>Retroactive liability</strong>: the EPA applies to existing contamination from
              past industrial activity, not just future discharges. This is significant for brownfield
              development — purchasers acquiring contaminated commercial/industrial land may inherit
              historic contamination liability.
            </p>
            <p className="text-slate-600 mb-4">
              <strong>Personal liability</strong>: s.194 of the EPA and s.148 of the Ontario Water
              Resources Act create personal liability for directors and officers of corporations who
              &quot;direct, authorize, assent to, acquiesce in or participate in&quot; corporate EPA violations.
              No mens rea is required for most EPA offences — due diligence is the only defence.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Records of Site Condition (RSC) / O.Reg. 153/04</h2>
            <p className="text-slate-600 mb-4">
              Ontario Regulation 153/04 (<em>Records of Site Condition — Part XV.1 of the Act</em>)
              establishes the framework for voluntary site assessment and filing of Records of Site
              Condition (RSCs) — also called Phase I and Phase II Environmental Site Assessments
              (ESAs).
            </p>
            <p className="text-slate-600 mb-4">
              Phase I ESA: desktop review of site history, records search, and site reconnaissance —
              no sampling. Identifies &quot;areas of potential environmental concern&quot; (APECs).
            </p>
            <p className="text-slate-600 mb-4">
              Phase II ESA: intrusive investigation — soil sampling, groundwater monitoring wells,
              laboratory analysis — to characterize the nature and extent of contamination. Compared
              against O.Reg. 153/04 Table 2 (generic site condition standards) based on site use
              (residential/parkland/institutional vs commercial/industrial).
            </p>
            <p className="text-slate-600 mb-4">
              A filed RSC (filed in the Environmental Site Registry) is required before a zoning
              change or building permit that increases land sensitivity (e.g., industrial to
              residential). The RSC filed by a Qualified Person (QP — P.Eng. or P.Geo.) limits
              future liability claims to the extent of the representations in the RSC.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">CERB — Certificates of Property Use</h2>
            <p className="text-slate-600 mb-4">
              A Certificate of Property Use (CPU) is issued by the MECP Director where a contaminated
              property cannot meet the full site condition standards but can be used safely for a
              specified purpose with risk management measures (institutional and engineering controls).
              CPUs restrict property use, require ongoing monitoring, and bind the current and future
              owners.
            </p>
            <p className="text-slate-600 mb-4">
              CPUs must be disclosed in real estate transactions — failure to disclose is a civil
              tort and regulatory offence. Real estate lawyers representing purchasers of commercial/
              industrial properties should always conduct an Environmental Site Registry search to
              identify filed RSCs, filed CPUs, and notices of contamination.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">First Nations Consultation in EA</h2>
            <p className="text-slate-600 mb-4">
              The duty to consult Aboriginal peoples regarding proposed projects that may affect
              Aboriginal or treaty rights is a Crown constitutional obligation under s.35 of the
              <em>Constitution Act 1982</em> (<em>Haida Nation v British Columbia (Minister of
              Forests)</em> [2004] 3 SCR 511). The duty extends to the EA process.
            </p>
            <p className="text-slate-600 mb-4">
              Ontario&apos;s EAA and the IAA both include provisions for Indigenous consultation. Failure
              to adequately consult can result in judicial review — courts have quashed both EA
              approvals and regulatory approvals that failed to meet the Crown&apos;s duty to consult.
              Indigenous communities may also be interveners in EA proceedings.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Practical Checklist for Environmental Counsel</h2>
            <ul className="space-y-3 text-lg text-slate-600">
              <li className="flex gap-3">
                <span className="text-amber-500 font-bold mt-1">✓</span>
                <span>Determine EA triggering — is the project subject to provincial EAA (public sector proponent or designated private sector), federal IAA (Physical Activities Regulations designated project), or both?</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500 font-bold mt-1">✓</span>
                <span>Confirm jurisdiction for any Class EA — review the applicable Class EA document for the project type (municipal Class EA for roads/sewers vs transit Class EA)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500 font-bold mt-1">✓</span>
                <span>For commercial real estate transactions: search the Environmental Site Registry, Ontario Ministry of Environment database, and fire marshal records — Phase I ESA minimum</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500 font-bold mt-1">✓</span>
                <span>Due diligence for purchasers of contaminated land: Phase II ESA, quantify remediation cost, obtain representations and warranties or price reduction reflecting liability assumed</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500 font-bold mt-1">✓</span>
                <span>Corporate due diligence for EPA compliance: s.194 EPA personal liability for directors — confirm ECA compliance, spill prevention and response plans, and monitoring programs</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500 font-bold mt-1">✓</span>
                <span>Brownfield redevelopment: RSC filing requirement before rezoning; CPU restrictions bind future owners — disclose in purchase and sale agreement</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500 font-bold mt-1">✓</span>
                <span>First Nations consultation: identify affected First Nations in the project area early — inadequate consultation is the most common ground for successful judicial review of EA approvals</span>
              </li>
            </ul>

            <div className="mt-12 bg-amber-50 rounded-xl p-6 border border-amber-200">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Manage Environmental Law Files with Atticus
              </h3>
              <p className="text-slate-600 mb-4">
                Atticus helps Ontario environmental lawyers track EA timelines, manage complex
                multi-party matters, and maintain LSO-compliant trust accounts. AI document analysis
                extracts key facts from EA documents, Phase I/II ESA reports, and remediation orders.
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
