import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ontario Insurance Law — SABS, Auto Insurance, and the Insurance Act | Atticus Blog",
  description:
    "Comprehensive guide to Ontario insurance law: Insurance Act RSO 1990, Statutory Accident Benefits Schedule (SABS), direct compensation property damage, fault determination rules, LAT proceedings, and tort threshold for Ontario lawyers.",
  openGraph: {
    title: "Ontario Insurance Law — SABS, Auto Insurance, and the Insurance Act",
    description:
      "Insurance Act RSO 1990, SABS O.Reg. 34/10, direct compensation, LAT proceedings, tort threshold verbal threshold minor injury guideline, and accident benefits dispute resolution for Ontario practitioners.",
    type: "article",
    url: "https://getatticus.ca/blog/ontario-insurance-law",
  },
  alternates: { canonical: "https://getatticus.ca/blog/ontario-insurance-law" },
};

export default function OntarioInsuranceLawPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Ontario Insurance Law — SABS, Auto Insurance, and the Insurance Act",
    description:
      "SABS O.Reg. 34/10, Insurance Act RSO 1990, LAT proceedings, tort threshold, direct compensation, and accident benefits dispute resolution for Ontario practitioners.",
    author: { "@type": "Organization", name: "Atticus" },
    publisher: { "@type": "Organization", name: "Atticus", url: "https://getatticus.ca" },
    url: "https://getatticus.ca/blog/ontario-insurance-law",
    mainEntityOfPage: "https://getatticus.ca/blog/ontario-insurance-law",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-slate-900 to-red-900 text-white py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <Link href="/blog" className="text-slate-400 hover:text-white text-sm transition">
                &#8592; Blog
              </Link>
              <span className="bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
                Insurance Law
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Ontario Insurance Law — SABS, Auto Insurance, and the Insurance Act
            </h1>
            <p className="text-slate-300 text-lg">
              The Statutory Accident Benefits Schedule, Insurance Act framework, LAT dispute
              resolution, the tort threshold, direct compensation, and practical guidance for
              Ontario personal injury and insurance defence lawyers.
            </p>
            <div className="flex items-center gap-4 mt-6 text-sm text-slate-400">
              <span>March 2026</span>
              <span>&#8226;</span>
              <span>14 min read</span>
            </div>
          </div>
        </section>

        <article className="py-16 px-6">
          <div className="max-w-3xl mx-auto prose prose-slate max-w-none">

            <h2>The Insurance Act Framework</h2>
            <p>
              Insurance in Ontario is governed primarily by the Insurance Act RSO 1990 c I.8.
              The Act regulates insurance companies, brokers, and agents; establishes mandatory
              policy terms and conditions; and creates the framework for auto insurance in
              Ontario. The Financial Services Regulatory Authority of Ontario (FSRA) regulates
              insurance companies and licensed intermediaries in Ontario under the Insurance Act,
              the Registered Insurance Brokers Act RSO 1990 c R.19, and associated regulations.
            </p>
            <p>
              Ontario operates a private automobile insurance system in which coverage is
              mandatory but provided by private insurers. The Insurance Act Part VI (Automobile
              Insurance) establishes the compulsory coverages, the standard automobile policy
              (OAP 1 — Owner&apos;s Policy), the standard opcf endorsement system, and the
              framework for accident benefits and tort liability. Ontario&apos;s auto insurance
              is no-fault in the sense that accident benefits are available regardless of fault,
              but the province retains a tort system for compensation of serious injuries.
            </p>

            <h2>Statutory Accident Benefits Schedule (SABS)</h2>
            <p>
              The Statutory Accident Benefits Schedule O.Reg. 34/10 (SABS) provides accident
              benefits to persons injured in automobile accidents in Ontario regardless of fault.
              SABS benefits are first-party benefits paid by the injured person&apos;s own insurer
              (or by another insurer in defined priority rules). Key SABS benefit categories include:
            </p>
            <ul>
              <li>
                <strong>Medical and Rehabilitation Benefits:</strong> For minor injuries (as
                defined under the Minor Injury Guideline — MIG), the medical and rehabilitation
                benefit is capped at $3,500 in total. For non-catastrophic injuries, the combined
                medical/rehabilitation and attendant care limit is $65,000 (enhanced optional
                coverage up to $130,000 or $1,000,000 available). For catastrophic impairment
                (as defined — 55%+ WPI whole person impairment; brain injury; paraplegia/
                quadriplegia; blindness; loss of limb), the combined limit is $1,000,000
                (enhanced optional: $2,000,000).
              </li>
              <li>
                <strong>Attendant Care Benefits:</strong> For non-catastrophic injuries, up to
                $3,000/month ($72,000 total). For catastrophic impairment, up to $6,000/month
                with no aggregate cap (limited by the combined $1,000,000 limit above).
              </li>
              <li>
                <strong>Income Replacement Benefits (IRB):</strong> 70% of gross income to a
                maximum of $400/week (standard); enhanced optional coverage up to $1,000/week.
                Available if the insured suffers a substantial inability to perform the essential
                tasks of their employment (the &quot;employed&quot; test for the first 104 weeks;
                thereafter the &quot;complete inability&quot; test of any employment for which
                the person is reasonably suited).
              </li>
              <li>
                <strong>Non-Earner Benefit:</strong> $185/week after a 26-week waiting period,
                for persons who did not have employment income and who suffer a complete inability
                to carry on a normal life. Not available to persons entitled to an IRB.
              </li>
              <li>
                <strong>Caregiver Benefit:</strong> Optional benefit; $250/week for first
                dependant + $50/week each additional, if the insured is the primary caregiver
                and suffers a catastrophic impairment or, for non-catastrophic, if the optional
                coverage is purchased.
              </li>
              <li>
                <strong>Death and Funeral Benefits:</strong> $25,000 to eligible survivors;
                $6,000 funeral benefit.
              </li>
            </ul>

            <h2>Minor Injury Guideline (MIG)</h2>
            <p>
              The Minor Injury Guideline (MIG) under SABS s.18 caps medical and rehabilitation
              benefits for &quot;minor injuries&quot; at $3,500. The MIG defines &quot;minor
              injury&quot; as a sprain, strain, whiplash-associated disorder, contusion, abrasion,
              laceration, or subluxation and any clinically associated sequelae. An injury falls
              outside the MIG if the insured has a pre-existing condition that would prevent
              maximal recovery under the MIG cap; or if the insured sustains a psychological
              condition arising from the accident as a primary condition, not secondary to the
              minor physical injury.
            </p>
            <p>
              Disputes about whether an injury falls within or outside the MIG are among the most
              common SABS disputes resolved at the LAT. Medical evidence establishing that the
              injury is more than a &quot;minor injury&quot; — particularly psychological condition
              evidence — is critical to escaping the MIG cap.
            </p>

            <h2>Catastrophic Impairment Determination</h2>
            <p>
              Catastrophic impairment under SABS s.2 (definition) and the associated guidelines
              determines access to the significantly higher benefit limits ($1,000,000 combined
              medical/rehabilitation/attendant care vs $65,000 for non-catastrophic). The SABS
              Superintendent&apos;s Guideline for Determining Catastrophic Impairment (2012 and
              as updated) applies the AMA Guides to the Evaluation of Permanent Impairment 4th
              Edition (4th Ed. AMA Guides) for most impairment categories.
            </p>
            <p>
              Catastrophic impairment categories include: paraplegia or tetraplegia; loss of vision
              in both eyes; loss of an arm or leg; brain impairment resulting in a score of 9 or
              less on the Glasgow Outcome Scale (GOS); brain impairment resulting in a specified
              GCS score sustained for 6 hours; 55% or greater whole person impairment (WPI) under
              the 4th Ed. AMA Guides (physical impairment categories); Class 4 or 5 mental
              behavioural impairment under the 4th Ed. AMA Guides (for accidents after
              September 1, 2010); or a combination of physical and mental/behavioural impairments
              that results in 55%+ WPI when combined using the Combined Values Chart.
            </p>

            <h2>LAT Dispute Resolution</h2>
            <p>
              Since April 1, 2016, disputes about accident benefits under the SABS (with limited
              exceptions) are resolved by the Licence Appeal Tribunal (LAT) under the Insurance
              Act s.280 et seq. and the Licence Appeal Tribunal Act 1999 SO 1999 c 12 Sch G.
              The LAT replaced the Financial Services Commission of Ontario (FSCO) mediation and
              arbitration process.
            </p>
            <p>
              LAT proceedings are governed by the LAT&apos;s Common Rules of Practice and
              Procedure and the SPPA RSO 1990 c S.22. Key procedural points:
            </p>
            <ul>
              <li>
                <strong>Two-year limitation:</strong> An application to the LAT must be made
                within two years after the insurer&apos;s refusal, failure to pay, or dispute
                of entitlement. The limitation period can be complex in disputes about ongoing
                benefits.
              </li>
              <li>
                <strong>Case conference:</strong> The LAT schedules a mandatory case conference
                before a hearing to identify issues, explore settlement, and address procedural
                matters.
              </li>
              <li>
                <strong>Written decisions:</strong> LAT adjudicators issue written decisions
                with reasons. Decisions can be appealed to the Divisional Court on questions
                of law under the Insurance Act s.283.
              </li>
              <li>
                <strong>Costs:</strong> The LAT may award costs under the SPPA; special awards
                for unreasonable insurer conduct under Insurance Act s.282 (up to 50% of
                benefits withheld, plus interest) where the insurer withheld/delayed benefits
                without reasonable grounds.
              </li>
            </ul>

            <h2>The Tort System — Verbal Threshold</h2>
            <p>
              Ontario retains a tort system for automobile accident injuries, but access to general
              damages (pain and suffering) is restricted by the &quot;verbal threshold&quot; under
              Insurance Act s.267.5. A plaintiff in a tort claim arising from an automobile accident
              may only recover general damages for non-pecuniary loss if they have sustained a
              &quot;permanent serious disfigurement&quot; or a &quot;permanent serious impairment
              of an important physical, mental, or psychological function.&quot;
            </p>
            <p>
              Demme v Sprott 2007 ONCA 150 and Brak v Walsh 2008 ONCA 219 clarify the two-stage
              threshold test: (1) is the impairment of an important function (relevant to the
              plaintiff&apos;s particular activities)? and (2) is it both permanent and serious?
              The threshold is assessed at trial. Plaintiffs must also deduct the statutory
              deductible from general damage awards — the deductible amount is indexed annually
              (approximately $44,367 for 2025/2026) and applies unless the award exceeds the
              upper deductible threshold.
            </p>

            <h2>Direct Compensation — Property Damage</h2>
            <p>
              Under Insurance Act Part VII (ss.263-278), Ontario operates a direct compensation
              property damage (DCPD) system. A person whose automobile is damaged in an accident
              for which they are not at fault (or are partly at fault) claims their vehicle
              damage directly from their own insurer rather than from the at-fault driver&apos;s
              insurer. Fault is determined according to the Fault Determination Rules O.Reg. 668/90
              (recently amended by O.Reg. 95/22). The amount payable is reduced proportionally
              to the claimant&apos;s degree of fault.
            </p>

            <div className="bg-red-50 border border-red-200 rounded-xl p-6 mt-8">
              <h3 className="text-lg font-bold text-red-900 mb-2">
                Manage Insurance and PI Matters with Atticus
              </h3>
              <p className="text-red-800 mb-4">
                Track SABS deadlines, LAT proceedings, and limitation periods for Ontario personal
                injury and insurance defence files — all in one platform built for Ontario law firms.
              </p>
              <Link
                href="/sign-up"
                className="inline-block bg-red-700 hover:bg-red-800 text-white font-semibold px-6 py-3 rounded-lg transition"
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
