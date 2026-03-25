import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Ontario Personal Injury Claims: Car Accidents, SABS, and Tort Actions (2026 Guide)",
  description:
    "How Ontario personal injury claims work — Statutory Accident Benefits (SABS), tort claims against at-fault drivers, threshold requirements, catastrophic impairment, and the 2-year limitation period personal injury lawyers must track.",
  openGraph: {
    title: "Ontario Personal Injury Claims: Car Accidents, SABS, and Tort Actions (2026 Guide)",
    description:
      "Ontario's two-track personal injury system: Statutory Accident Benefits from your own insurer and tort claims against at-fault drivers. Thresholds, catastrophic impairment, and what personal injury lawyers advise in 2026.",
    type: "article",
    url: "https://getatticus.ca/blog/ontario-personal-injury-claim",
  },
  alternates: { canonical: "https://getatticus.ca/blog/ontario-personal-injury-claim" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Ontario Personal Injury Claims: Car Accidents, SABS, and Tort Actions (2026 Guide)",
  description:
    "How Ontario personal injury claims work — SABS, tort claims, threshold requirements, catastrophic impairment, and the 2-year limitation period.",
  datePublished: "2026-03-18",
  dateModified: "2026-03-18",
  author: { "@type": "Organization", name: "Atticus" },
  publisher: { "@type": "Organization", name: "Atticus", url: "https://getatticus.ca" },
  mainEntityOfPage: "https://getatticus.ca/blog/ontario-personal-injury-claim",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the limitation period for a personal injury claim in Ontario?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The basic limitation period for tort claims (including motor vehicle accidents) is 2 years from the date the claim was discovered under the Limitations Act, 2002. However, for Statutory Accident Benefits claims, the limitation periods are different and arise at the time of denying or reducing specific benefits. Missing the 2-year tort deadline permanently bars the claim.",
      },
    },
    {
      "@type": "Question",
      name: "What is the threshold test in Ontario motor vehicle accident claims?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Under the Insurance Act, s. 267.5, plaintiffs in Ontario motor vehicle accidents can only sue for general damages (pain and suffering) if they have sustained a permanent, serious disfigurement or a permanent serious impairment of an important physical, mental, or psychological function. This is called the tort threshold. Claims that do not meet the threshold are limited to economic losses only.",
      },
    },
    {
      "@type": "Question",
      name: "What are Statutory Accident Benefits (SABS) in Ontario?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SABS are accident benefits payable from your own automobile insurer regardless of who was at fault. Under the SABS Schedule, you can claim income replacement benefits, medical and rehabilitation benefits, attendant care, caregiver benefits, and death/funeral benefits. SABS apply to all Ontario automobile accidents.",
      },
    },
    {
      "@type": "Question",
      name: "What is catastrophic impairment in Ontario?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Catastrophic impairment (CAT) is a designation under the SABS Schedule that unlocks significantly enhanced benefit limits. Catastrophic impairment includes paraplegia/tetraplegia, loss of limb, brain injury resulting in GCS score of 9 or less, and other severe impairments. CAT accident victims receive up to $1,000,000 for medical/rehab and $1,000,000 for attendant care, versus $65,000 non-CAT.",
      },
    },
  ],
};

const sabsBenefits = [
  { benefit: "Income Replacement", nonCat: "Up to $400/week (70% of gross income)", cat: "Up to $400/week or enhanced optional benefits" },
  { benefit: "Medical & Rehabilitation", nonCat: "$65,000 (minor injury: $3,500)", cat: "$1,000,000" },
  { benefit: "Attendant Care", nonCat: "$36,000 (total with med/rehab: $65,000)", cat: "$1,000,000" },
  { benefit: "Caregiver", nonCat: "Not available (unless pre-approved optional)", cat: "$250/week first dependant + $50 additional" },
  { benefit: "Death Benefit", nonCat: "$25,000 to spouse + $10,000 each dependant", cat: "Same" },
  { benefit: "Funeral Benefit", nonCat: "Up to $6,000", cat: "Same" },
];

const tortDamages = [
  { category: "General damages (pain and suffering)", note: "Threshold requirement applies; subject to $44,866.15 deductible (2026 approximate) for claims under $147,843.24" },
  { category: "Loss of income (past)", note: "Full recovery less SABS income replacement received" },
  { category: "Loss of income (future)", note: "Expert evidence typically required; subject to tax deduction adjustments" },
  { category: "Health care expenses (past)", note: "Amounts not covered by SABS or provincial health care" },
  { category: "Health care expenses (future)", note: "Expert evidence required; future care cost report typical in serious cases" },
  { category: "Family Law Act claims", note: "Spouse, children, parents can claim loss of care, guidance, and companionship" },
];

const piProcess = [
  { step: "1. Immediate notification", detail: "Notify your own insurer within 7 days of the accident (or as soon as practicable). Failure to provide timely notice can prejudice SABS claims." },
  { step: "2. Open SABS claim", detail: "Submit OCF-1 (Application for Accident Benefits) to your own insurer. The insurer must respond within statutory timeframes. This runs concurrently with the tort claim." },
  { step: "3. Investigate tort liability", detail: "Obtain police report, photographs, witness statements, and medical records. Determine fault allocation (Ontario uses modified contributory negligence)." },
  { step: "4. Serve notice on municipality (if applicable)", detail: "If the accident involved a road or municipal property defect, notice must be served within 10 days under the Municipal Act, s. 44(10). This is a critical and often-missed deadline." },
  { step: "5. File Statement of Claim within 2 years", detail: "Commence the tort action within 2 years of the accident or discovery. Most actions are filed in the Ontario Superior Court of Justice." },
  { step: "6. Mediation (mandatory)", detail: "Under Rule 24.1, parties in Toronto, Ottawa, and Windsor (and optionally elsewhere) must attend mandatory mediation before trial. Most PI cases settle at or before mediation." },
  { step: "7. Trial or settlement", detail: "The vast majority of motor vehicle accident claims settle before trial. Plaintiffs must produce the threshold evidence at discovery or risk having their general damages claim dismissed." },
];

export default function OntarioPersonalInjuryClaimPage() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", background: "#07070a", color: "#f0e8d8", minHeight: "100vh" }}>
      <Script id="ld-pi-claim" type="application/ld+json">{JSON.stringify(jsonLd)}</Script>
      <Script id="ld-pi-claim-faq" type="application/ld+json">{JSON.stringify(faqJsonLd)}</Script>

      <nav style={{ padding: "20px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(198,146,42,0.1)" }}>
        <Link href="/" style={{ fontSize: "20px", fontWeight: 600, color: "#faf8f4", textDecoration: "none" }}>Atticus</Link>
        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          <Link href="/blog" style={{ color: "rgba(240,232,216,0.5)", fontSize: "14px", textDecoration: "none" }}>Blog</Link>
          <Link href="/sign-up" style={{ background: "#C6922A", color: "#07070a", padding: "10px 24px", textDecoration: "none", fontSize: "14px", fontWeight: 500 }}>
            Start Free Trial →
          </Link>
        </div>
      </nav>

      <section style={{ padding: "60px 24px 40px", maxWidth: "800px", margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
          <span style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#C6922A", background: "rgba(198,146,42,0.1)", padding: "3px 10px", borderRadius: "20px" }}>Personal Injury</span>
          <span style={{ fontSize: "12px", color: "rgba(240,232,216,0.4)" }}>March 2026 · 12 min read</span>
        </div>
        <h1 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 300, lineHeight: 1.2, color: "#faf8f4", marginBottom: "20px" }}>
          Ontario Personal Injury Claims: Car Accidents, SABS, and Tort Actions (2026 Guide)
        </h1>
        <p style={{ fontSize: "17px", color: "rgba(240,232,216,0.65)", lineHeight: 1.8 }}>
          Ontario has a complex two-track personal injury system for motor vehicle accidents: Statutory Accident Benefits from your own insurer plus potential tort claims against at-fault parties. Here is what plaintiffs and their personal injury lawyers need to understand about SABS, the tort threshold, catastrophic impairment, and the critical deadlines that can permanently bar a claim.
        </p>
      </section>

      <article style={{ padding: "0 24px 80px", maxWidth: "800px", margin: "0 auto" }}>

        <section style={{ marginBottom: "48px" }}>
          <div style={{ padding: "20px 24px", background: "rgba(139,32,32,0.12)", border: "1px solid rgba(139,32,32,0.3)", borderRadius: "8px" }}>
            <div style={{ fontSize: "13px", fontWeight: 600, color: "#e05555", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "8px" }}>Critical Deadlines</div>
            <ul style={{ paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "6px", margin: 0 }}>
              {[
                "Municipal property accident: serve written notice within 10 days (Municipal Act, s. 44(10))",
                "Tort claim: commence action within 2 years of accident or discovery (Limitations Act, 2002)",
                "SABS claim: notify your insurer within 7 days of accident",
                "SABS: submit OCF-1 Application within 30 days of accident",
              ].map((item, i) => (
                <li key={i} style={{ fontSize: "14px", color: "rgba(240,232,216,0.8)", lineHeight: 1.6 }}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section style={{ marginBottom: "48px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 400, color: "#faf8f4", marginBottom: "16px" }}>Ontario&apos;s Two-Track System</h2>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.8, marginBottom: "20px" }}>
            Every Ontario motor vehicle accident triggers two separate legal tracks simultaneously:
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            <div style={{ padding: "24px", background: "rgba(198,146,42,0.06)", border: "1px solid rgba(198,146,42,0.2)", borderRadius: "8px" }}>
              <div style={{ fontSize: "15px", fontWeight: 600, color: "#C6922A", marginBottom: "12px" }}>Track 1: SABS (No-Fault)</div>
              <ul style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "6px" }}>
                {[
                  "From your own insurer",
                  "No fault determination",
                  "Income replacement, rehab, attendant care",
                  "Limited to SABS Schedule amounts",
                  "Dispute goes to LAT (Licence Appeal Tribunal)",
                ].map((item, i) => (
                  <li key={i} style={{ fontSize: "13px", color: "rgba(240,232,216,0.7)", lineHeight: 1.5 }}>{item}</li>
                ))}
              </ul>
            </div>
            <div style={{ padding: "24px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "8px" }}>
              <div style={{ fontSize: "15px", fontWeight: 600, color: "#faf8f4", marginBottom: "12px" }}>Track 2: Tort (Negligence)</div>
              <ul style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "6px" }}>
                {[
                  "Against at-fault driver/party",
                  "Fault must be proven",
                  "Pain and suffering, income loss, care costs",
                  "Threshold test for general damages",
                  "Action in Ontario Superior Court",
                ].map((item, i) => (
                  <li key={i} style={{ fontSize: "13px", color: "rgba(240,232,216,0.7)", lineHeight: 1.5 }}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section style={{ marginBottom: "48px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 400, color: "#faf8f4", marginBottom: "16px" }}>Statutory Accident Benefits (SABS) — Key Amounts</h2>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(198,146,42,0.3)" }}>
                  <th style={{ textAlign: "left", padding: "12px 16px", color: "#C6922A", fontWeight: 500 }}>Benefit</th>
                  <th style={{ textAlign: "left", padding: "12px 16px", color: "#C6922A", fontWeight: 500 }}>Non-Catastrophic</th>
                  <th style={{ textAlign: "left", padding: "12px 16px", color: "#C6922A", fontWeight: 500 }}>Catastrophic</th>
                </tr>
              </thead>
              <tbody>
                {sabsBenefits.map((row, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.05)", background: i % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent" }}>
                    <td style={{ padding: "12px 16px", color: "#faf8f4", fontWeight: 500 }}>{row.benefit}</td>
                    <td style={{ padding: "12px 16px", color: "rgba(240,232,216,0.65)" }}>{row.nonCat}</td>
                    <td style={{ padding: "12px 16px", color: "#C6922A" }}>{row.cat}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: "13px", color: "rgba(240,232,216,0.4)", marginTop: "12px", lineHeight: 1.6 }}>
            Note: Minor injury guideline (MIG) applies to sprains, strains, and whiplash associated disorders — limited to $3,500 for medical/rehab unless the insured has a pre-existing condition that was documented before the accident.
          </p>
        </section>

        <section style={{ marginBottom: "48px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 400, color: "#faf8f4", marginBottom: "16px" }}>The Tort Threshold</h2>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.8, marginBottom: "16px" }}>
            Ontario&apos;s Insurance Act (s. 267.5) creates a threshold that must be met before a plaintiff can claim general damages (pain and suffering) in a motor vehicle accident tort action. The plaintiff must establish:
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "20px" }}>
            {[
              { test: "Permanent serious disfigurement", detail: "Visible, significant, and long-lasting physical change — burns, scarring, or amputation are typical examples." },
              { test: "Permanent serious impairment of an important physical, mental, or psychological function", detail: "The impairment must be permanent (not just long-lasting), serious (causes substantial inability to perform important tasks), and affect an important function of daily life." },
            ].map((item, i) => (
              <div key={i} style={{ padding: "18px 20px", background: "rgba(255,255,255,0.03)", borderLeft: "3px solid rgba(198,146,42,0.4)", borderRadius: "4px" }}>
                <div style={{ fontSize: "14px", fontWeight: 500, color: "#C6922A", marginBottom: "6px" }}>{item.test}</div>
                <div style={{ fontSize: "14px", color: "rgba(240,232,216,0.65)", lineHeight: 1.7 }}>{item.detail}</div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.8 }}>
            Plaintiffs who do not meet the threshold can still claim economic losses — past and future income loss, medical expenses — but cannot recover pain and suffering damages.
          </p>
        </section>

        <section style={{ marginBottom: "48px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 400, color: "#faf8f4", marginBottom: "16px" }}>Tort Damages Available</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {tortDamages.map((item, i) => (
              <div key={i} style={{ padding: "16px 20px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "6px" }}>
                <div style={{ fontSize: "14px", fontWeight: 500, color: "#faf8f4", marginBottom: "4px" }}>{item.category}</div>
                <div style={{ fontSize: "13px", color: "rgba(240,232,216,0.55)", lineHeight: 1.6 }}>{item.note}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: "48px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 400, color: "#faf8f4", marginBottom: "16px" }}>The Personal Injury Process: 7 Steps</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            {piProcess.map((item, i) => (
              <div key={i} style={{ padding: "18px 20px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "8px" }}>
                <div style={{ fontSize: "15px", fontWeight: 500, color: "#C6922A", marginBottom: "6px" }}>{item.step}</div>
                <div style={{ fontSize: "14px", color: "rgba(240,232,216,0.65)", lineHeight: 1.7 }}>{item.detail}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 400, color: "#faf8f4", marginBottom: "20px" }}>Frequently Asked Questions</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {faqJsonLd.mainEntity.map((item, i) => (
              <div key={i} style={{ padding: "20px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "8px" }}>
                <div style={{ fontSize: "15px", fontWeight: 500, color: "#faf8f4", marginBottom: "10px" }}>{item.name}</div>
                <div style={{ fontSize: "14px", color: "rgba(240,232,216,0.65)", lineHeight: 1.7 }}>{item.acceptedAnswer.text}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ padding: "40px", background: "rgba(198,146,42,0.08)", border: "1px solid rgba(198,146,42,0.2)", borderRadius: "12px", marginBottom: "48px" }}>
          <h2 style={{ fontSize: "22px", fontWeight: 400, color: "#faf8f4", marginBottom: "12px" }}>
            Managing Personal Injury Files in Ontario?
          </h2>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.65)", lineHeight: 1.7, marginBottom: "24px" }}>
            Atticus tracks the 2-year limitation period, municipal notice deadlines, and SABS response deadlines automatically. AI document processing extracts key dates from accident reports, medical records, and insurer correspondence. 14-day free trial.
          </p>
          <Link href="/sign-up" style={{ display: "inline-block", background: "#C6922A", color: "#07070a", padding: "14px 28px", textDecoration: "none", fontSize: "15px", fontWeight: 600, borderRadius: "4px" }}>
            Try Atticus Free →
          </Link>
        </section>

        <section>
          <h3 style={{ fontSize: "16px", color: "rgba(240,232,216,0.5)", marginBottom: "16px", fontWeight: 400 }}>Related guides</h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
            {[
              { href: "/blog/missing-limitation-periods-ontario", label: "Missing Limitation Periods" },
              { href: "/calculator", label: "Limitation Period Calculator" },
              { href: "/blog/small-claims-court-ontario", label: "Small Claims Court Guide" },
              { href: "/ontario-civil-litigation-lawyer", label: "Atticus for Litigation Lawyers" },
              { href: "/blog/client-intake-ontario-lawyers", label: "Client Intake Best Practices" },
            ].map((link, i) => (
              <Link key={i} href={link.href} style={{ fontSize: "13px", color: "#C6922A", background: "rgba(198,146,42,0.08)", padding: "6px 14px", borderRadius: "20px", textDecoration: "none" }}>
                {link.label}
              </Link>
            ))}
          </div>
        </section>
      </article>

      <footer style={{ padding: "32px 24px", borderTop: "1px solid rgba(198,146,42,0.1)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
        <Link href="/blog" style={{ color: "rgba(240,232,216,0.3)", fontSize: "13px", textDecoration: "none" }}>← All Articles</Link>
        <Link href="/" style={{ color: "rgba(240,232,216,0.3)", fontSize: "13px", textDecoration: "none" }}>Atticus — Practice Management for Ontario Lawyers</Link>
      </footer>
    </div>
  );
}
