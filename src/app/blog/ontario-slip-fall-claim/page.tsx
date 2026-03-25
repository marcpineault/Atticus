import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Ontario Slip and Fall Claims: Occupier's Liability, Notice, and Damages (2026 Guide)",
  description:
    "How slip and fall claims work in Ontario — Occupiers' Liability Act duty of care, the 10-day municipal notice deadline, comparative negligence, damages, and what personal injury lawyers need to do immediately after a fall accident.",
  openGraph: {
    title: "Ontario Slip and Fall Claims: Occupier's Liability, Notice, and Damages (2026 Guide)",
    description:
      "Occupiers' Liability Act, 10-day municipal notice, comparative fault, and damages for Ontario slip and fall personal injury claims.",
    type: "article",
    url: "https://getatticus.ca/blog/ontario-slip-fall-claim",
  },
  alternates: { canonical: "https://getatticus.ca/blog/ontario-slip-fall-claim" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Ontario Slip and Fall Claims: Occupier's Liability, Notice, and Damages (2026 Guide)",
  description:
    "Occupiers' Liability Act duty of care, 10-day municipal notice, comparative negligence, and damages for Ontario slip and fall claims.",
  author: { "@type": "Organization", name: "Atticus" },
  publisher: { "@type": "Organization", name: "Atticus", url: "https://getatticus.ca" },
  datePublished: "2026-03-18",
  url: "https://getatticus.ca/blog/ontario-slip-fall-claim",
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the deadline to sue for a slip and fall in Ontario?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The standard limitation period is 2 years from the date of the accident under the Limitations Act, 2002. However, if the fall occurred on municipal property (sidewalk, road, park), you must serve a written notice of the injury on the municipality within 10 days of the accident under s. 44(10) of the Municipal Act, 2001. Missing the 10-day notice can be fatal to the claim.",
      },
    },
    {
      "@type": "Question",
      name: "Who is liable for a slip and fall in Ontario?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Liability falls on the 'occupier' of the premises under the Occupiers' Liability Act — the person who has physical possession or control over the condition of the premises. This can be the property owner, tenant, or both. The occupier owes a common duty of care: to take reasonable care to ensure visitors are reasonably safe.",
      },
    },
    {
      "@type": "Question",
      name: "Does comparative negligence apply to slip and falls in Ontario?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Under s. 3(1) of the Negligence Act, damages can be apportioned between plaintiff and defendant based on their respective degrees of fault. A plaintiff who was not watching where they were going or who wore inappropriate footwear may have their damages reduced by their percentage of contributory negligence.",
      },
    },
    {
      "@type": "Question",
      name: "What damages can you recover in a slip and fall claim in Ontario?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Recoverable damages include: general damages (pain and suffering, loss of enjoyment of life), special damages (medical expenses, lost income, out-of-pocket costs), future care costs, and loss of housekeeping capacity. The tort threshold from the Insurance Act does not apply to premises liability claims — it only applies to motor vehicle accidents.",
      },
    },
  ],
};

const occupierTypes = [
  {
    type: "Property Owner (Non-Tenant)",
    standard: "Common Duty of Care",
    note: "Always liable unless property fully leased to tenant with exclusive control",
  },
  {
    type: "Tenant / Occupant",
    standard: "Common Duty of Care",
    note: "Liable for areas within their exclusive control; landlord may share liability for common areas",
  },
  {
    type: "Municipality (Sidewalk/Road)",
    standard: "Common Duty of Care + 10-day notice",
    note: "s. 44(10) Municipal Act: written notice within 10 days or claim barred (absent reasonable excuse)",
  },
  {
    type: "Crown (Provincial)",
    standard: "Proceedings Against the Crown Act",
    note: "60-day pre-litigation notice under s. 7; 2-year limitation period applies",
  },
  {
    type: "Trespasser",
    standard: "Reckless Disregard Standard",
    note: "Lower duty — must not wilfully or recklessly create danger; but higher duty for child trespassers",
  },
];

const immediateSteps = [
  {
    step: 1,
    title: "Document the scene immediately",
    detail: "Photos of the hazard (ice, liquid, uneven surface), the lighting conditions, and any warning signs (or absence of them). Timestamp metadata is evidence.",
  },
  {
    step: 2,
    title: "Report the incident",
    detail: "Report to the property manager or business owner and request a written incident report. Ask for a copy. This creates a contemporaneous record the occupier cannot later deny.",
  },
  {
    step: 3,
    title: "Get witness information",
    detail: "Names and contact information for anyone who saw the fall or the hazardous condition. Witnesses recollections fade quickly.",
  },
  {
    step: 4,
    title: "Seek medical attention — same day",
    detail: "Emergency room or walk-in clinic within hours. The medical record creates an objective timestamp for injuries. Gaps between the fall and medical treatment are exploited by defence counsel.",
  },
  {
    step: 5,
    title: "Serve the 10-day municipal notice (if applicable)",
    detail: "If the fall was on a municipal sidewalk, road, or park — serve written notice on the municipal clerk within 10 days. This is not a suggestion; it is a statutory prerequisite under s. 44(10) Municipal Act.",
  },
  {
    step: 6,
    title: "Preserve evidence and instruct expert",
    detail: "Send a litigation hold letter to the occupier demanding preservation of surveillance footage, maintenance logs, and incident reports. Retention periods for CCTV footage can be as short as 30 days.",
  },
];

const damagesTypes = [
  {
    category: "General Damages",
    description: "Pain and suffering, loss of enjoyment of life, loss of amenities",
    notes: "Assessed by jury or judge based on severity and permanence of injury",
  },
  {
    category: "Lost Income",
    description: "Past lost wages, future loss of earning capacity",
    notes: "Requires medical evidence of disability and actuarial calculation for future loss",
  },
  {
    category: "Medical Expenses",
    description: "Physiotherapy, medications, assistive devices, surgeries",
    notes: "Past receipts + future cost of care report from occupational therapist",
  },
  {
    category: "Housekeeping Loss",
    description: "Replacement cost of domestic services the plaintiff can no longer perform",
    notes: "Recoverable even if not actually hired; based on fair market replacement value",
  },
  {
    category: "Out-of-Pocket Costs",
    description: "Transportation to appointments, home modifications, attendant care",
    notes: "Must be reasonable and causally connected to injuries",
  },
  {
    category: "Family Law Act Claims",
    description: "Loss of care, guidance, and companionship for family members",
    notes: "Available if plaintiff has serious long-term injuries — FLA s. 61",
  },
];

const defenceArguments = [
  {
    defence: "Reasonable Inspection and Maintenance",
    explanation: "Occupier had a reasonable maintenance system in place and the hazard arose so recently that no reasonable inspection would have detected it (the 'creation vs. continuation' distinction).",
  },
  {
    defence: "Contributory Negligence",
    explanation: "Plaintiff was not watching where they were walking, was distracted by a phone, or wore inappropriate footwear — reducing damages proportionally under the Negligence Act.",
  },
  {
    defence: "Obvious Hazard",
    explanation: "The hazard was open and obvious; a reasonable person exercising ordinary care would have seen and avoided it. Increasingly challenged by courts as shifting burden to plaintiff.",
  },
  {
    defence: "Voluntary Assumption of Risk (Volenti)",
    explanation: "Plaintiff was aware of and willingly accepted the specific risk that materialized. Rarely successful in slip and fall cases — requires explicit consent to the specific risk.",
  },
  {
    defence: "10-Day Notice Failure",
    explanation: "For municipal falls: plaintiff failed to provide written notice within 10 days and cannot demonstrate a 'reasonable excuse' — the claim may be statute-barred.",
  },
];

export default function OntarioSlipFallPage() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", background: "#07070a", color: "#f0e8d8", minHeight: "100vh" }}>
      <Script id="ld-slip-fall" type="application/ld+json">{JSON.stringify(jsonLd)}</Script>
      <Script id="ld-slip-fall-faq" type="application/ld+json">{JSON.stringify(faqLd)}</Script>

      <nav style={{ padding: "20px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(198,146,42,0.1)" }}>
        <Link href="/" style={{ fontSize: "20px", fontWeight: 600, color: "#faf8f4", textDecoration: "none" }}>Atticus</Link>
        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          <Link href="/blog" style={{ color: "rgba(240,232,216,0.5)", fontSize: "14px", textDecoration: "none" }}>Blog</Link>
          <Link href="/sign-up" style={{ background: "#C6922A", color: "#07070a", padding: "10px 24px", textDecoration: "none", fontSize: "14px", fontWeight: 500 }}>
            Start Free Trial →
          </Link>
        </div>
      </nav>

      <article style={{ padding: "56px 24px 80px", maxWidth: "800px", margin: "0 auto" }}>
        <header style={{ marginBottom: "48px" }}>
          <p style={{ fontSize: "12px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#C6922A", marginBottom: "16px" }}>Personal Injury Law — Ontario</p>
          <h1 style={{ fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 300, lineHeight: 1.2, color: "#faf8f4", marginBottom: "20px" }}>
            Ontario Slip and Fall Claims: Occupier&apos;s Liability, Municipal Notice, and Damages (2026 Guide)
          </h1>
          <p style={{ fontSize: "16px", color: "rgba(240,232,216,0.6)", lineHeight: 1.8, marginBottom: "20px" }}>
            A slip and fall claim in Ontario engages the Occupiers&apos; Liability Act, the Limitations Act, and — if the property is municipal — a 10-day written notice requirement that cannot be missed. This guide covers who is liable, what duty of care applies, how to preserve a claim in the first 72 hours, and what damages are available.
          </p>
          <div style={{ display: "flex", gap: "20px", color: "rgba(240,232,216,0.4)", fontSize: "13px" }}>
            <span>March 2026</span>
            <span>11 min read</span>
            <span>Ontario Occupiers&apos; Liability Act</span>
          </div>
        </header>

        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 400, color: "#faf8f4", marginBottom: "20px" }}>
            The Occupiers&apos; Liability Act: Who Owes What Duty
          </h2>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.8, marginBottom: "16px" }}>
            The <em>Occupiers&apos; Liability Act</em>, RSO 1990, c O.2 imposes a &ldquo;common duty of care&rdquo; on every occupier of premises toward persons entering those premises and their property. An &ldquo;occupier&rdquo; is defined broadly: any person who has physical possession of premises, or has responsibility for and control over the condition of premises, the activities carried on there, or the persons allowed to enter.
          </p>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.8, marginBottom: "16px" }}>
            The common duty of care under s. 3(1) requires the occupier to &ldquo;take such care as in all the circumstances of the case is reasonable to see that persons entering on the premises, and the property brought on the premises by those persons, are reasonably safe while on the premises.&rdquo;
          </p>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.8, marginBottom: "24px" }}>
            Notably, both a property owner and a tenant can simultaneously be occupiers of the same premises — the owner for the structure and common areas, the tenant for areas under their exclusive control.
          </p>

          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
              <thead>
                <tr style={{ borderBottom: "2px solid rgba(198,146,42,0.3)" }}>
                  <th style={{ textAlign: "left", padding: "12px 14px", color: "rgba(240,232,216,0.5)", fontWeight: 400 }}>Occupier Type</th>
                  <th style={{ textAlign: "left", padding: "12px 14px", color: "rgba(240,232,216,0.5)", fontWeight: 400 }}>Standard</th>
                  <th style={{ textAlign: "left", padding: "12px 14px", color: "rgba(240,232,216,0.5)", fontWeight: 400 }}>Key Caveat</th>
                </tr>
              </thead>
              <tbody>
                {occupierTypes.map((row, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.05)", background: i % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent" }}>
                    <td style={{ padding: "12px 14px", color: "rgba(240,232,216,0.85)", fontWeight: 500 }}>{row.type}</td>
                    <td style={{ padding: "12px 14px", color: "#C6922A" }}>{row.standard}</td>
                    <td style={{ padding: "12px 14px", color: "rgba(240,232,216,0.6)" }}>{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section style={{ marginBottom: "56px", padding: "28px 32px", background: "rgba(198,146,42,0.08)", border: "1px solid rgba(198,146,42,0.25)", borderRadius: "8px" }}>
          <h2 style={{ fontSize: "20px", fontWeight: 500, color: "#e8b84b", marginBottom: "14px" }}>
            The 10-Day Municipal Notice: The Deadline That Kills Claims
          </h2>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.8)", lineHeight: 1.75, marginBottom: "12px" }}>
            Section 44(10) of the <em>Municipal Act, 2001</em> requires that any person who suffers injury or damage on a highway (including sidewalks) maintained by a municipality must serve written notice on the municipal clerk &ldquo;within 10 days after the occurrence of the injury or damage.&rdquo;
          </p>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.8)", lineHeight: 1.75, marginBottom: "12px" }}>
            The notice must include: the date and location of the fall, the nature of the injury, and the claim being made. Failure to serve this notice within 10 days will result in dismissal of the claim unless the court is satisfied there was a reasonable excuse for the omission and the municipality is not prejudiced in its defence.
          </p>
          <p style={{ fontSize: "15px", color: "#C6922A", lineHeight: 1.75, fontWeight: 500 }}>
            Practical reality: &ldquo;reasonable excuse&rdquo; is not easily established. Hospitalization may qualify. Simply not knowing about the requirement does not. If a client walks into your office with a municipal fall, the first question is: when did it happen?
          </p>
        </section>

        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 400, color: "#faf8f4", marginBottom: "20px" }}>
            What to Do in the First 72 Hours
          </h2>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.8, marginBottom: "24px" }}>
            Slip and fall cases are won or lost on evidence gathered in the first 72 hours. Surveillance footage is overwritten, hazardous conditions are remediated, and witnesses forget. Here is the immediate action list.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {immediateSteps.map((s) => (
              <div key={s.step} style={{ display: "flex", gap: "20px", padding: "20px 24px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "8px" }}>
                <div style={{ width: "32px", height: "32px", background: "rgba(198,146,42,0.15)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span style={{ fontSize: "13px", color: "#C6922A", fontWeight: 600 }}>{s.step}</span>
                </div>
                <div>
                  <h3 style={{ fontSize: "15px", fontWeight: 500, color: "#faf8f4", marginBottom: "6px" }}>{s.title}</h3>
                  <p style={{ fontSize: "14px", color: "rgba(240,232,216,0.6)", lineHeight: 1.7 }}>{s.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 400, color: "#faf8f4", marginBottom: "20px" }}>
            Damages in Ontario Slip and Fall Claims
          </h2>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.8, marginBottom: "24px" }}>
            Unlike motor vehicle accident claims, slip and fall claims under the Occupiers&apos; Liability Act are not subject to the s. 267.5 Insurance Act tort threshold. There is no verbal threshold to surmount to recover general damages for pain and suffering. Every injury — even a sprained ankle — is compensable in general damages if liability is established.
          </p>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
              <thead>
                <tr style={{ borderBottom: "2px solid rgba(198,146,42,0.3)" }}>
                  <th style={{ textAlign: "left", padding: "12px 14px", color: "rgba(240,232,216,0.5)", fontWeight: 400 }}>Damages Category</th>
                  <th style={{ textAlign: "left", padding: "12px 14px", color: "rgba(240,232,216,0.5)", fontWeight: 400 }}>Description</th>
                  <th style={{ textAlign: "left", padding: "12px 14px", color: "rgba(240,232,216,0.5)", fontWeight: 400 }}>Notes</th>
                </tr>
              </thead>
              <tbody>
                {damagesTypes.map((row, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.05)", background: i % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent" }}>
                    <td style={{ padding: "12px 14px", color: "#C6922A", fontWeight: 500 }}>{row.category}</td>
                    <td style={{ padding: "12px 14px", color: "rgba(240,232,216,0.8)" }}>{row.description}</td>
                    <td style={{ padding: "12px 14px", color: "rgba(240,232,216,0.55)", fontSize: "13px" }}>{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 400, color: "#faf8f4", marginBottom: "20px" }}>
            Common Defence Arguments and How to Counter Them
          </h2>
          <div style={{ display: "grid", gap: "16px" }}>
            {defenceArguments.map((d, i) => (
              <div key={i} style={{ padding: "22px 24px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "8px" }}>
                <h3 style={{ fontSize: "15px", fontWeight: 500, color: "#faf8f4", marginBottom: "8px" }}>{d.defence}</h3>
                <p style={{ fontSize: "14px", color: "rgba(240,232,216,0.6)", lineHeight: 1.7 }}>{d.explanation}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 400, color: "#faf8f4", marginBottom: "20px" }}>
            Limitation Periods for Ontario Slip and Fall Claims
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
            {[
              { title: "Standard Limitation", period: "2 years", detail: "From date of accident (or discoverability) under the Limitations Act, 2002 s. 4. Ultimate 15-year limit from the act or omission." },
              { title: "Municipal Notice (Sidewalk/Road)", period: "10 days", detail: "Written notice to municipal clerk under Municipal Act s. 44(10). This is a prerequisite to the action, not a limitation period — but equally fatal to the claim if missed." },
              { title: "Minor Plaintiff", period: "Tolled to age 18", detail: "If the plaintiff was under 18 on the date of the fall, the 2-year period does not begin until they turn 18. Separate considerations for a litigation guardian." },
              { title: "Crown (Provincial)", period: "60 days notice + 2 years", detail: "The Proceedings Against the Crown Act requires 60 days pre-litigation notice for certain claims against provincial entities before the 2-year clock begins." },
            ].map((item, i) => (
              <div key={i} style={{ padding: "22px 24px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "8px" }}>
                <p style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#C6922A", marginBottom: "8px" }}>{item.title}</p>
                <p style={{ fontSize: "28px", fontWeight: 300, color: "#faf8f4", marginBottom: "10px" }}>{item.period}</p>
                <p style={{ fontSize: "13px", color: "rgba(240,232,216,0.55)", lineHeight: 1.65 }}>{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "22px", fontWeight: 400, color: "#faf8f4", marginBottom: "20px" }}>Frequently Asked Questions</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {faqLd.mainEntity.map((faq, i) => (
              <div key={i} style={{ padding: "22px 24px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "8px" }}>
                <h3 style={{ fontSize: "15px", fontWeight: 500, color: "#faf8f4", marginBottom: "10px" }}>{faq.name}</h3>
                <p style={{ fontSize: "14px", color: "rgba(240,232,216,0.6)", lineHeight: 1.75 }}>{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ padding: "40px 36px", background: "rgba(198,146,42,0.06)", border: "1px solid rgba(198,146,42,0.2)", borderRadius: "8px", marginBottom: "56px", textAlign: "center" }}>
          <h3 style={{ fontSize: "20px", fontWeight: 400, color: "#faf8f4", marginBottom: "12px" }}>
            Track Ontario limitation periods automatically
          </h3>
          <p style={{ fontSize: "14px", color: "rgba(240,232,216,0.55)", lineHeight: 1.7, maxWidth: "480px", margin: "0 auto 24px" }}>
            Atticus automatically flags the 2-year limitation period and 10-day municipal notice deadline from uploaded documents. Never miss a PI filing deadline. Built for Ontario solo and small law firms.
          </p>
          <Link href="/sign-up" style={{ display: "inline-block", background: "#C6922A", color: "#07070a", padding: "14px 32px", textDecoration: "none", fontSize: "15px", fontWeight: 600, borderRadius: "4px" }}>
            Start Free Trial →
          </Link>
        </section>

        <section style={{ marginBottom: "40px" }}>
          <h3 style={{ fontSize: "14px", color: "rgba(240,232,216,0.4)", marginBottom: "14px", fontWeight: 400 }}>Related guides</h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {[
              { href: "/blog/ontario-personal-injury-claim", label: "Ontario PI Claims &amp; SABS" },
              { href: "/blog/ontario-limitation-period", label: "Ontario Limitation Periods" },
              { href: "/blog/ontario-employment-standards-act", label: "Employment Standards Act" },
              { href: "/ontario-civil-litigation-lawyer", label: "Practice Mgmt for Litigators" },
            ].map((link, i) => (
              <Link key={i} href={link.href} style={{ fontSize: "13px", color: "rgba(240,232,216,0.5)", background: "rgba(255,255,255,0.04)", padding: "6px 14px", borderRadius: "20px", textDecoration: "none", border: "1px solid rgba(255,255,255,0.08)" }}>
                {link.label}
              </Link>
            ))}
          </div>
        </section>
      </article>

      <footer style={{ padding: "32px 24px", borderTop: "1px solid rgba(198,146,42,0.1)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
        <Link href="/blog" style={{ color: "rgba(240,232,216,0.3)", fontSize: "13px", textDecoration: "none" }}>← All Articles</Link>
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          <Link href="/pricing" style={{ color: "rgba(240,232,216,0.3)", fontSize: "13px", textDecoration: "none" }}>Pricing</Link>
          <Link href="/calculator" style={{ color: "rgba(240,232,216,0.3)", fontSize: "13px", textDecoration: "none" }}>Free Calculator</Link>
          <Link href="/privacy" style={{ color: "rgba(240,232,216,0.3)", fontSize: "13px", textDecoration: "none" }}>Privacy</Link>
        </div>
      </footer>
    </div>
  );
}
