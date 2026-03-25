import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Ontario Statutory Accident Benefits (SABS): Tort Threshold, Accident Benefits, and FSRA Claims",
  description:
    "Complete guide to Ontario Statutory Accident Benefits Schedule (SABS) under the Insurance Act. Accident benefit categories, tort threshold for pain and suffering, FSRA dispute resolution, and limitation periods for Ontario motor vehicle accident claims.",
  alternates: { canonical: "https://getatticus.ca/blog/ontario-statutory-accident-benefits" },
  openGraph: {
    title: "Ontario SABS: Statutory Accident Benefits, Tort Threshold, and FSRA Claims",
    description:
      "Ontario Statutory Accident Benefits Schedule guide for lawyers. Accident benefit categories, tort threshold, FSRA dispute resolution, and limitation periods for motor vehicle accident claims.",
    url: "https://getatticus.ca/blog/ontario-statutory-accident-benefits",
    type: "article",
  },
};

const articleSchema = `{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Ontario Statutory Accident Benefits (SABS): Tort Threshold, Accident Benefits, and FSRA Claims",
  "description": "Complete guide to Ontario SABS under the Insurance Act O.R. Reg. 34/10. Accident benefit categories, minor injury guideline, catastrophic impairment, tort threshold, FSRA dispute resolution, and limitation periods.",
  "datePublished": "2025-02-25",
  "dateModified": "2025-02-25",
  "author": { "@type": "Organization", "name": "Atticus" },
  "publisher": { "@type": "Organization", "name": "Atticus", "url": "https://getatticus.ca" },
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://getatticus.ca/blog/ontario-statutory-accident-benefits" }
}`;

const faqSchema = `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the tort threshold in Ontario car accident claims?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ontario Insurance Act s. 267.5 imposes a verbal threshold on pain and suffering damages: a plaintiff may only recover damages for non-pecuniary general damages if they have sustained a permanent serious disfigurement or a permanent serious impairment of an important physical, mental or psychological function. The threshold is assessed at trial."
      }
    },
    {
      "@type": "Question",
      "name": "What accident benefits are available in Ontario after a car accident?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ontario SABS (O. Reg. 34/10) provides: income replacement benefits (IRBs) up to $400/week standard, medical and rehabilitation benefits up to $65,000 (non-catastrophic) or $1,000,000 (catastrophic impairment), attendant care up to $36,000 (non-cat) or $1,000,000 (cat), caregiver benefits, housekeeping and home maintenance, death and funeral benefits, and other benefits. Enhanced coverage optional upgrades available."
      }
    },
    {
      "@type": "Question",
      "name": "What is the limitation period for Ontario accident benefit claims?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For accident benefits, the insurer must be notified within 7 days of the accident. The application for accident benefits must be submitted within 30 days of receiving the application forms from the insurer. For disputes, a Licence Appeal Tribunal (LAT) application must be filed within 2 years of the insurer's denial or refusal to pay."
      }
    }
  ]
}`;

export default function OntarioSABSPage() {
  return (
    <>
      <Script id="schema-article" type="application/ld+json" strategy="beforeInteractive">
        {articleSchema}
      </Script>
      <Script id="schema-faq" type="application/ld+json" strategy="beforeInteractive">
        {faqSchema}
      </Script>
      <div style={{ fontFamily: "system-ui, sans-serif", maxWidth: 780, margin: "0 auto", padding: "40px 24px", color: "#111" }}>
        <nav style={{ marginBottom: 32, fontSize: 14, color: "#666" }}>
          <Link href="/" style={{ color: "#2563eb", textDecoration: "none" }}>Atticus</Link>
          {" › "}
          <Link href="/blog" style={{ color: "#2563eb", textDecoration: "none" }}>Blog</Link>
          {" › "}
          <span>Ontario SABS Guide</span>
        </nav>

        <div style={{ marginBottom: 8 }}>
          <span style={{ background: "#eff6ff", color: "#2563eb", padding: "4px 12px", borderRadius: 20, fontSize: 13, fontWeight: 600 }}>
            Personal Injury
          </span>
        </div>

        <h1 style={{ fontSize: 36, fontWeight: 800, lineHeight: 1.2, marginBottom: 16, marginTop: 12 }}>
          Ontario Statutory Accident Benefits (SABS): Accident Benefit Categories, Tort Threshold, and FSRA Dispute Resolution
        </h1>

        <p style={{ fontSize: 18, color: "#555", marginBottom: 8, lineHeight: 1.5 }}>
          16 min read &nbsp;·&nbsp; February 2025
        </p>

        <p style={{ fontSize: 18, color: "#444", lineHeight: 1.7, marginBottom: 40 }}>
          Ontario&apos;s motor vehicle accident compensation system is a hybrid of first-party no-fault accident
          benefits and a restricted tort system. Every motor vehicle accident in Ontario triggers potential claims
          under both regimes. This guide covers the Statutory Accident Benefits Schedule (SABS), the Insurance
          Act tort threshold, FSRA dispute resolution, and the limitation periods that govern all of these claims.
        </p>

        <nav style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 10, padding: "20px 24px", marginBottom: 40 }}>
          <p style={{ fontWeight: 700, marginBottom: 8, fontSize: 15 }}>Contents</p>
          <ol style={{ paddingLeft: 20, lineHeight: 2.2, margin: 0, fontSize: 14, color: "#2563eb" }}>
            <li><a href="#overview" style={{ color: "#2563eb" }}>Ontario&apos;s Two-Track System</a></li>
            <li><a href="#accident-benefits" style={{ color: "#2563eb" }}>SABS Benefit Categories</a></li>
            <li><a href="#minor-injury" style={{ color: "#2563eb" }}>Minor Injury Guideline (MIG)</a></li>
            <li><a href="#catastrophic" style={{ color: "#2563eb" }}>Catastrophic Impairment</a></li>
            <li><a href="#enhanced-coverage" style={{ color: "#2563eb" }}>Enhanced Optional Coverage</a></li>
            <li><a href="#tort-threshold" style={{ color: "#2563eb" }}>The Tort Threshold</a></li>
            <li><a href="#deductible" style={{ color: "#2563eb" }}>Statutory Deductibles</a></li>
            <li><a href="#fsra-dispute" style={{ color: "#2563eb" }}>FSRA and LAT Dispute Resolution</a></li>
            <li><a href="#limitation-periods" style={{ color: "#2563eb" }}>Limitation Periods</a></li>
            <li><a href="#direct-compensation" style={{ color: "#2563eb" }}>Direct Compensation — Property Damage</a></li>
          </ol>
        </nav>

        <section id="overview" style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, marginBottom: 12 }}>1. Ontario&apos;s Two-Track System</h2>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7, marginBottom: 12 }}>
            Every person injured in a motor vehicle accident in Ontario has access to two potential sources of
            compensation:
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
            <div style={{ background: "#eff6ff", borderRadius: 10, padding: 20 }}>
              <p style={{ fontWeight: 700, marginBottom: 8, fontSize: 16, color: "#1e40af" }}>Track 1: Accident Benefits (No-Fault)</p>
              <ul style={{ paddingLeft: 20, lineHeight: 1.8, fontSize: 14, color: "#444" }}>
                <li>Available to anyone injured in an Ontario motor vehicle accident — fault is irrelevant</li>
                <li>Claimed from your own insurer (or the insurer of the vehicle you were in)</li>
                <li>Governed by SABS — O. Reg. 34/10 under the <em>Insurance Act</em></li>
                <li>Provides income replacement, medical/rehab, attendant care, and other benefits</li>
              </ul>
            </div>
            <div style={{ background: "#f0fdf4", borderRadius: 10, padding: 20 }}>
              <p style={{ fontWeight: 700, marginBottom: 8, fontSize: 16, color: "#166534" }}>Track 2: Tort (Fault-Based)</p>
              <ul style={{ paddingLeft: 20, lineHeight: 1.8, fontSize: 14, color: "#444" }}>
                <li>Available only when the other driver was at fault or contributorily at fault</li>
                <li>Claimed from the at-fault driver&apos;s insurer</li>
                <li>Governed by <em>Insurance Act</em> s. 267.1–267.8 tort rules</li>
                <li>Subject to verbal threshold, deductible, and contributory negligence</li>
              </ul>
            </div>
          </div>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7 }}>
            Ontario accident victims do not have to choose between the two tracks — they may pursue accident
            benefits AND a tort claim simultaneously, subject to collateral benefits rules preventing double
            recovery.
          </p>
        </section>

        <section id="accident-benefits" style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, marginBottom: 12 }}>2. SABS Benefit Categories</h2>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7, marginBottom: 16 }}>
            The Statutory Accident Benefits Schedule (O. Reg. 34/10, as amended) provides the following benefits.
            All dollar amounts are standard (non-enhanced) coverage:
          </p>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
              <thead>
                <tr style={{ background: "#f1f5f9" }}>
                  <th style={{ textAlign: "left", padding: "10px 14px", borderBottom: "2px solid #e2e8f0" }}>Benefit</th>
                  <th style={{ textAlign: "left", padding: "10px 14px", borderBottom: "2px solid #e2e8f0" }}>Non-Catastrophic Limit</th>
                  <th style={{ textAlign: "left", padding: "10px 14px", borderBottom: "2px solid #e2e8f0" }}>Catastrophic Limit</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Income Replacement Benefit (IRB)", "$400/week (70% of net income, up to $400/week max)", "Same — $400/week standard"],
                  ["Medical and Rehabilitation", "$65,000 combined (up to $3,500 in Minor Injury Guideline cases)", "$1,000,000"],
                  ["Attendant Care", "$36,000 total (max $3,000/month)", "$1,000,000"],
                  ["Caregiver Benefit", "Not available (removed for non-cat)", "$250/week for first dependent + $50/week each additional"],
                  ["Housekeeping and Home Maintenance", "Not available (removed for non-cat)", "$100/week"],
                  ["Non-Earner Benefit", "$185/week after 26 weeks (unemployed/student claimants only)", "Same"],
                  ["Death Benefit", "$25,000 to spouse + $10,000 each dependent", "Same"],
                  ["Funeral Benefit", "Up to $8,000", "Same"],
                  ["Lost Educational Expenses", "Up to $15,000", "Same"],
                ].map(([benefit, noncat, cat], i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? "#fff" : "#f8fafc" }}>
                    <td style={{ padding: "10px 14px", borderBottom: "1px solid #e2e8f0", fontWeight: 600, verticalAlign: "top" }}>{benefit}</td>
                    <td style={{ padding: "10px 14px", borderBottom: "1px solid #e2e8f0", verticalAlign: "top", color: "#444" }}>{noncat}</td>
                    <td style={{ padding: "10px 14px", borderBottom: "1px solid #e2e8f0", verticalAlign: "top", color: "#166534" }}>{cat}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="minor-injury" style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, marginBottom: 12 }}>3. Minor Injury Guideline (MIG)</h2>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7, marginBottom: 12 }}>
            The Minor Injury Guideline (MIG) is a medical and rehabilitation treatment protocol under SABS that
            caps combined medical and rehabilitation benefits at <strong>$3,500</strong> for claimants whose
            injuries fall within the Minor Injury Guideline definition.
          </p>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7, marginBottom: 12 }}>
            &quot;Minor injury&quot; under the MIG means a sprain, strain, whiplash associated disorder (WAD I
            or II), contusion, abrasion, laceration, or minor fracture that does not result in a serious
            impairment.
          </p>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7, marginBottom: 12 }}>
            To escape the MIG cap, a claimant must establish:
          </p>
          <ul style={{ paddingLeft: 24, lineHeight: 2, color: "#444", fontSize: 16 }}>
            <li>A pre-existing condition that is documented by a health practitioner and that was documented before the accident, OR</li>
            <li>A psychological or psychiatric impairment resulting from the accident that is beyond a minor injury</li>
          </ul>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7, marginTop: 12 }}>
            MIG disputes are the most common accident benefit disputes at the Licence Appeal Tribunal. The
            evidentiary threshold for escaping the MIG is contested in virtually every LAT proceeding involving
            soft tissue injuries.
          </p>
        </section>

        <section id="catastrophic" style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, marginBottom: 12 }}>4. Catastrophic Impairment</h2>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7, marginBottom: 12 }}>
            A finding of &quot;catastrophic impairment&quot; under SABS unlocks dramatically higher benefit limits
            and restores benefits eliminated for non-catastrophic claimants. Catastrophic impairment is defined
            in SABS s. 2(1) and Appendix to include:
          </p>
          <ul style={{ paddingLeft: 24, lineHeight: 2, color: "#444", fontSize: 16 }}>
            <li>Paraplegia or quadriplegia</li>
            <li>Amputation or loss of use of both arms or both legs or one arm and one leg</li>
            <li>Total loss of vision in both eyes</li>
            <li>Traumatic brain injury (assessed by Glasgow Outcome Scale rating of 3 or lower 6 months post-accident)</li>
            <li>Physical impairment causing a Whole Person Impairment (WPI) of 55% or more (assessed under AMA Guides, 4th ed.)</li>
            <li>Mental or behavioural impairment causing a Class 4 or 5 impairment in at least 3 of 4 function categories under AMA Guides, Chapter 14</li>
            <li>Combination of physical and mental impairment totalling 55% WPI</li>
          </ul>
          <div style={{ background: "#fef9c3", border: "1px solid #fde68a", borderRadius: 8, padding: 16, marginTop: 16 }}>
            <p style={{ fontWeight: 700, marginBottom: 4, fontSize: 15 }}>2016 SABS Amendments</p>
            <p style={{ fontSize: 14, lineHeight: 1.6, color: "#444" }}>
              The 2016 SABS amendments significantly reduced non-catastrophic benefit limits and eliminated
              caregiver and housekeeping benefits for non-cat claimants. Accidents occurring before June 1, 2016
              are governed by prior SABS regulations with higher non-catastrophic limits. The transition date
              is critical when advising clients with older accidents.
            </p>
          </div>
        </section>

        <section id="enhanced-coverage" style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, marginBottom: 12 }}>5. Enhanced Optional Coverage</h2>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7, marginBottom: 12 }}>
            SABS allows policyholders to purchase optional enhanced coverages:
          </p>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
              <thead>
                <tr style={{ background: "#f1f5f9" }}>
                  <th style={{ textAlign: "left", padding: "10px 14px", borderBottom: "2px solid #e2e8f0" }}>Optional Coverage</th>
                  <th style={{ textAlign: "left", padding: "10px 14px", borderBottom: "2px solid #e2e8f0" }}>Standard Limit</th>
                  <th style={{ textAlign: "left", padding: "10px 14px", borderBottom: "2px solid #e2e8f0" }}>Enhanced Limit</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Medical and Rehabilitation (non-cat)", "$65,000", "Up to $130,000 or $1,000,000"],
                  ["Income Replacement Benefit", "$400/week", "Up to $1,000/week"],
                  ["Death Benefit", "$25,000 spouse / $10,000 dependent", "Up to $50,000 spouse / $20,000 dependent"],
                  ["Funeral Benefit", "$8,000", "Up to $16,000"],
                  ["Indexation (inflation protection)", "Not included", "CPI-indexed IRBs"],
                  ["Caregiver (non-cat)", "Not available", "Optional purchase restores benefit"],
                  ["Housekeeping (non-cat)", "Not available", "Optional purchase restores benefit"],
                ].map(([coverage, standard, enhanced], i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? "#fff" : "#f8fafc" }}>
                    <td style={{ padding: "10px 14px", borderBottom: "1px solid #e2e8f0", fontWeight: 600, verticalAlign: "top" }}>{coverage}</td>
                    <td style={{ padding: "10px 14px", borderBottom: "1px solid #e2e8f0", verticalAlign: "top", color: "#991b1b" }}>{standard}</td>
                    <td style={{ padding: "10px 14px", borderBottom: "1px solid #e2e8f0", verticalAlign: "top", color: "#166534" }}>{enhanced}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="tort-threshold" style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, marginBottom: 12 }}>6. The Tort Threshold</h2>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7, marginBottom: 12 }}>
            Section 267.5 of the <em>Insurance Act</em> creates a &quot;verbal threshold&quot; — a qualitative
            standard for recovery of non-pecuniary general damages (pain and suffering). A plaintiff may only
            recover these damages if they sustained:
          </p>
          <div style={{ background: "#eff6ff", borderRadius: 10, padding: 20, marginBottom: 16 }}>
            <p style={{ fontWeight: 700, marginBottom: 8, fontSize: 15 }}>Section 267.5(5) Threshold Test</p>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: "#444", fontStyle: "italic" }}>
              &quot;...a permanent serious disfigurement or a permanent serious impairment of an important
              physical, mental or psychological function.&quot;
            </p>
          </div>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7, marginBottom: 12 }}>
            The threshold is assessed on all the evidence at trial. Key principles:
          </p>
          <ul style={{ paddingLeft: 24, lineHeight: 2, color: "#444", fontSize: 16 }}>
            <li>
              <strong>Permanent:</strong> The impairment need not be forever — &quot;permanent&quot; means it
              is not expected to substantially improve (<em>Brak v Aird</em>)
            </li>
            <li>
              <strong>Serious:</strong> The impairment must be substantial — minor functional limitations are
              insufficient; the impact on daily living is assessed
            </li>
            <li>
              <strong>Important function:</strong> The function must be important to the specific plaintiff — assessed
              based on their occupation, activities, and life circumstances
            </li>
            <li>
              <strong>Causation:</strong> The threshold impairment must be caused by the accident
            </li>
          </ul>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7, marginTop: 12 }}>
            Threshold is a motion or trial issue — defendants typically bring a threshold motion at the close
            of the plaintiff&apos;s evidence. The onus is on the plaintiff to satisfy the threshold.
          </p>
        </section>

        <section id="deductible" style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, marginBottom: 12 }}>7. Statutory Deductibles</h2>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7, marginBottom: 12 }}>
            Even when a plaintiff clears the verbal threshold, <em>Insurance Act</em> s. 267.5(7) imposes a
            statutory deductible on non-pecuniary general damages. As of January 1, 2025:
          </p>
          <ul style={{ paddingLeft: 24, lineHeight: 2, color: "#444", fontSize: 16 }}>
            <li><strong>General damages deductible:</strong> $47,647.43 (indexed annually)</li>
            <li><strong>Family Law Act claims deductible:</strong> $23,823.71 (indexed annually)</li>
          </ul>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7, marginTop: 12 }}>
            The deductible applies only when the award is below a prescribed threshold — currently $158,824.77.
            Awards above this amount are paid in full with no deductible applied. The deductibles are indexed
            to inflation and change annually.
          </p>
        </section>

        <section id="fsra-dispute" style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, marginBottom: 12 }}>8. FSRA and LAT Dispute Resolution</h2>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7, marginBottom: 12 }}>
            Accident benefit disputes are resolved through the Financial Services Regulatory Authority (FSRA)
            arbitration process and the Licence Appeal Tribunal (LAT), not the courts. The process:
          </p>
          <ol style={{ paddingLeft: 24, lineHeight: 2, color: "#444", fontSize: 16 }}>
            <li>
              <strong>Insurer denial or reduction:</strong> The insurer sends an explanation of benefits (EOB) or
              denial letter. This triggers the dispute timeline.
            </li>
            <li>
              <strong>Internal dispute resolution (IDR):</strong> The insurer must have an internal dispute
              resolution process. The claimant may request a reconsideration before proceeding to LAT.
            </li>
            <li>
              <strong>LAT application:</strong> Must be filed within 2 years of the insurer&apos;s written
              denial or refusal. The LAT adjudicates accident benefit disputes including MIG disputes,
              catastrophic impairment designations, and benefit amount disputes.
            </li>
            <li>
              <strong>Reconsideration:</strong> LAT decisions may be reconsidered on questions of law or
              jurisdiction within 21 days of the decision.
            </li>
            <li>
              <strong>Judicial review:</strong> LAT decisions may be judicially reviewed in Divisional Court.
            </li>
          </ol>
          <div style={{ background: "#fef2f2", border: "1px solid #fecaca", borderRadius: 8, padding: 16, marginTop: 16 }}>
            <p style={{ fontWeight: 700, marginBottom: 4, fontSize: 15, color: "#991b1b" }}>Costs at LAT</p>
            <p style={{ fontSize: 14, lineHeight: 1.6, color: "#444" }}>
              The LAT has a costs regime that can result in cost awards against parties who behave unreasonably.
              Costs are not available for successful claimants as a matter of right — they must be specifically
              requested and approved based on the conduct of the proceeding.
            </p>
          </div>
        </section>

        <section id="limitation-periods" style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, marginBottom: 12 }}>9. Limitation Periods</h2>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7, marginBottom: 16 }}>
            Limitation periods in Ontario motor vehicle accident claims are multiple and interacting:
          </p>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
              <thead>
                <tr style={{ background: "#f1f5f9" }}>
                  <th style={{ textAlign: "left", padding: "10px 14px", borderBottom: "2px solid #e2e8f0" }}>Obligation / Claim</th>
                  <th style={{ textAlign: "left", padding: "10px 14px", borderBottom: "2px solid #e2e8f0" }}>Deadline</th>
                  <th style={{ textAlign: "left", padding: "10px 14px", borderBottom: "2px solid #e2e8f0" }}>Source</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Notify own insurer of accident", "7 days from accident", "SABS s. 32(1)"],
                  ["Submit accident benefit application forms", "30 days after receiving application from insurer", "SABS s. 32(2)"],
                  ["Tort action against at-fault driver", "2 years from date of accident (discovery rule may apply)", "Limitations Act 2002 s. 4"],
                  ["LAT application (accident benefits dispute)", "2 years from insurer's written refusal or failure to pay", "SABS s. 281(5)"],
                  ["Notice of accident to municipality (road condition claims)", "10 days from accident", "Municipal Act 2001 s. 44(10)"],
                  ["Ultimate limitation period (tort)", "15 years from accident", "Limitations Act 2002 s. 15"],
                ].map(([obligation, deadline, source], i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? "#fff" : "#f8fafc" }}>
                    <td style={{ padding: "10px 14px", borderBottom: "1px solid #e2e8f0", fontWeight: 600, verticalAlign: "top" }}>{obligation}</td>
                    <td style={{ padding: "10px 14px", borderBottom: "1px solid #e2e8f0", verticalAlign: "top", color: "#991b1b", fontWeight: 600 }}>{deadline}</td>
                    <td style={{ padding: "10px 14px", borderBottom: "1px solid #e2e8f0", verticalAlign: "top", color: "#444" }}>{source}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="direct-compensation" style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, marginBottom: 12 }}>10. Direct Compensation — Property Damage</h2>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7, marginBottom: 12 }}>
            Direct Compensation — Property Damage (DCPD) coverage allows Ontario drivers to claim for vehicle
            damage directly from their own insurer, even when the other driver was at fault. As of January 1, 2024,
            DCPD is an optional coverage — drivers may opt out.
          </p>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7 }}>
            DCPD applies only when: (1) the accident occurred in Ontario; (2) another vehicle was involved;
            and (3) the other driver was wholly or partly at fault. Claims are governed by the DCPD Fault
            Determination Rules (O. Reg. 668) which assign fault percentages based on standardized accident
            scenarios.
          </p>
        </section>

        <section style={{ background: "#eff6ff", borderRadius: 12, padding: 28, marginBottom: 40 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>Track PI Deadlines Automatically with Atticus</h2>
          <p style={{ fontSize: 15, color: "#444", lineHeight: 1.7, marginBottom: 16 }}>
            Atticus AI extracts SABS application deadlines, LAT limitation periods, and tort action deadlines
            from your case documents automatically. Ontario PI lawyers use Atticus to track dozens of concurrent
            accident files without missing a deadline.
          </p>
          <Link
            href="/sign-up"
            style={{
              display: "inline-block",
              background: "#2563eb",
              color: "#fff",
              padding: "12px 28px",
              borderRadius: 8,
              fontWeight: 600,
              fontSize: 15,
              textDecoration: "none",
            }}
          >
            Start Free Trial
          </Link>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 20 }}>Frequently Asked Questions</h2>
          {[
            {
              q: "What is the tort threshold in Ontario car accident claims?",
              a: "Insurance Act s. 267.5 imposes a verbal threshold: a plaintiff may only recover non-pecuniary general damages if they sustained a permanent serious disfigurement or a permanent serious impairment of an important physical, mental or psychological function. The threshold is assessed at trial based on all the evidence.",
            },
            {
              q: "What accident benefits are available in Ontario after a car accident?",
              a: "SABS (O. Reg. 34/10) provides: income replacement benefits up to $400/week, medical and rehabilitation up to $65,000 (non-catastrophic) or $1,000,000 (catastrophic), attendant care up to $36,000 (non-cat) or $1,000,000 (cat), death benefits, funeral benefits, and lost educational expenses. Enhanced optional coverages can increase most limits.",
            },
            {
              q: "What is the limitation period for Ontario accident benefit claims?",
              a: "Notify your insurer within 7 days. Submit the application within 30 days of receiving forms. For LAT disputes, apply within 2 years of the insurer's written denial. Tort claims must be commenced within 2 years of the accident (discovery rule applies).",
            },
            {
              q: "What is the 2024 SABS deductible?",
              a: "As of January 2025, the non-pecuniary general damages deductible is $47,647.43 (indexed annually). The deductible applies only when the award is below $158,824.77 — awards above this threshold are paid without any deductible.",
            },
          ].map((faq, i) => (
            <div key={i} style={{ marginBottom: 20, paddingBottom: 20, borderBottom: i < 3 ? "1px solid #e2e8f0" : "none" }}>
              <h3 style={{ fontSize: 17, fontWeight: 600, marginBottom: 6 }}>{faq.q}</h3>
              <p style={{ fontSize: 15, color: "#444", lineHeight: 1.7 }}>{faq.a}</p>
            </div>
          ))}
        </section>

        <section>
          <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16 }}>Related Articles</h2>
          <ul style={{ paddingLeft: 0, listStyle: "none", lineHeight: 2 }}>
            {[
              { href: "/blog/ontario-personal-injury-claim", label: "Ontario Personal Injury Claims Guide" },
              { href: "/blog/ontario-limitation-period", label: "Ontario Limitation Periods Guide" },
              { href: "/ontario-civil-litigation-lawyer", label: "Ontario Civil Litigation Lawyers" },
              { href: "/casepeer-alternative", label: "Best Practice Management for Ontario PI Lawyers" },
            ].map((link) => (
              <li key={link.href}>
                <Link href={link.href} style={{ color: "#2563eb", textDecoration: "none", fontSize: 15 }}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
