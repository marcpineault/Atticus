import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Client Intake for Ontario Law Firms: Best Practices for 2026 | Atticus Blog",
  description:
    "How Ontario solo and small law firms should structure their client intake process — from first contact to engagement letter, conflict check, and retainer. Includes intake form best practices and LSO compliance checklist.",
  keywords: [
    "client intake ontario law firm",
    "law firm intake process ontario",
    "client intake form ontario lawyer",
    "legal intake best practices ontario",
    "conflict of interest check ontario lawyer",
    "retainer agreement ontario lawyer",
    "client onboarding law firm ontario",
    "intake software ontario lawyers",
  ],
  openGraph: {
    title: "Client Intake for Ontario Law Firms: Best Practices 2026",
    description:
      "Structure a compliant, efficient client intake process for your Ontario law firm — from first contact to signed retainer.",
    type: "article",
    url: "https://getatticus.ca/blog/client-intake-ontario-lawyers",
  },
  alternates: { canonical: "https://getatticus.ca/blog/client-intake-ontario-lawyers" },
};

const jsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Client Intake for Ontario Law Firms: Best Practices for 2026",
  description:
    "How Ontario solo and small law firms should structure their client intake process — from first contact to engagement letter, conflict check, and retainer.",
  datePublished: "2026-03-18",
  dateModified: "2026-03-18",
  author: { "@type": "Organization", name: "Atticus" },
  publisher: { "@type": "Organization", name: "Atticus", url: "https://getatticus.ca" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://getatticus.ca/blog/client-intake-ontario-lawyers" },
});

const INTAKE_STEPS = [
  {
    step: "1",
    title: "First Contact & Intake Form",
    time: "Day 0",
    lso: "Rule 7.2 — Availability",
    detail: "Capture the prospective client&apos;s basic information before the consultation. A web-based intake form (accessible 24/7) captures: full legal name, contact information, opposing party name(s), matter type, brief description of the issue, and how they heard about you. This gives you everything needed to run a conflict check before the call.",
    atticusTip: "Atticus provides a shareable intake form link you can embed on your website. New leads are added to your client list automatically.",
  },
  {
    step: "2",
    title: "Conflict of Interest Check",
    time: "Before first consultation",
    lso: "Rule 3.4 — Conflicts of Interest",
    detail: "Before speaking with a prospective client about the substance of their matter, you must check for conflicts. Search your existing client list, matters, and all parties mentioned in prior documents against the new client&apos;s name and any known opposing parties. Document that the check was performed and what was found.",
    atticusTip: "Atticus AI checks the new client name and opposing party against all existing clients, matters, and entities extracted from documents — with a severity rating.",
  },
  {
    step: "3",
    title: "Initial Consultation",
    time: "Day 1–3",
    lso: "Rule 3.2 — Quality of Service",
    detail: "The consultation serves multiple purposes: you assess whether you can help, the client assesses whether they want to retain you, and you gather the information needed to scope the engagement. Document the consultation thoroughly — either with notes or (with client consent) an audio recording. Key items to cover: facts, timeline, objectives, fee structure, realistic outcomes, and any limitations or concerns.",
    atticusTip: "Record the consultation (with consent). Upload the audio file to Atticus — Whisper transcribes it, and AI extracts all action items, dates, parties, and key facts.",
  },
  {
    step: "4",
    title: "Engagement Letter / Retainer Agreement",
    time: "Day 2–5",
    lso: "Rule 3.6 — Fees and Disbursements",
    detail: "The LSO requires that you confirm the terms of the retainer in writing. The engagement letter must include: scope of services, fee arrangement (hourly, flat, contingency), billing frequency, client responsibilities, how communications will work, file retention policy, and circumstances under which you may withdraw. For new counsel relationships, be clear about what is and is not included.",
    atticusTip: "Use Atticus AI Draft to generate an engagement letter grounded in your consultation notes and the client&apos;s matter details. 13 document types supported.",
  },
  {
    step: "5",
    title: "Trust Retainer Collection",
    time: "Before work begins",
    lso: "By-Law 9 — Trust Accounting",
    detail: "If you are collecting a retainer to be held in trust, deposit it to your designated trust account immediately upon receipt. Record the receipt against the client&apos;s trust ledger. Never begin substantive work until the trust retainer is received and deposited, unless you have a clear fee arrangement and credit relationship.",
    atticusTip: "Record the trust receipt in Atticus — it&apos;s immediately reflected in the client&apos;s trust ledger and your morning briefing trust summary.",
  },
  {
    step: "6",
    title: "Matter Setup & Document Collection",
    time: "Day 3–7",
    lso: "Rule 3.1 — Competence",
    detail: "Create the client file, open the matter with the appropriate type and status, set up initial deadline tracking, and begin collecting documents. Request from the client all documents relevant to the matter using a clear document request list. Upload everything to the matter file as it arrives.",
    atticusTip: "Atticus can send a document request email from the lawyer to the client. The client uploads documents through their portal link — AI processes each file automatically.",
  },
];

const INTAKE_FORM_FIELDS = [
  ["Full legal name", "Required — for conflict check"],
  ["Date of birth", "For identity verification and minor status"],
  ["Contact: email + phone", "For communications"],
  ["Company name (if applicable)", "For conflict check against corporate entities"],
  ["Opposing party name(s)", "Critical for conflict check before consultation"],
  ["Matter type / practice area", "Helps route to right lawyer if multi-person firm"],
  ["Brief description of issue", "Enough to assess jurisdiction and expertise fit"],
  ["How they heard about you", "Marketing attribution"],
  ["Urgency (is there a deadline?)", "Triage — are there limitation periods in play?"],
  ["Prior legal advice (Y/N)", "Conflict and conflict-adjacent check"],
];

export default function ClientIntakePage() {
  return (
    <div style={{ fontFamily: "Georgia, 'Times New Roman', serif", color: "#1a1a2e", minHeight: "100vh", backgroundColor: "#fff" }}>
      <Script id="jsonld-intake" type="application/ld+json">{jsonLd}</Script>

      {/* Nav */}
      <nav style={{ borderBottom: "1px solid #e5e7eb", padding: "16px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Link href="/" style={{ fontFamily: "system-ui, sans-serif", fontWeight: 700, fontSize: "18px", color: "#1a1a2e", textDecoration: "none" }}>Atticus</Link>
        <div style={{ display: "flex", gap: "20px", alignItems: "center", fontFamily: "system-ui, sans-serif", fontSize: "14px" }}>
          <Link href="/blog" style={{ color: "#4b5563", textDecoration: "none" }}>Blog</Link>
          <Link href="/sign-up" style={{ backgroundColor: "#1a1a2e", color: "#fff", padding: "8px 18px", borderRadius: "6px", textDecoration: "none" }}>Free Trial</Link>
        </div>
      </nav>

      {/* Article */}
      <article style={{ maxWidth: "760px", margin: "0 auto", padding: "64px 24px 80px" }}>
        {/* Header */}
        <div style={{ marginBottom: "48px" }}>
          <div style={{ display: "flex", gap: "12px", alignItems: "center", marginBottom: "20px", flexWrap: "wrap" }}>
            <span style={{ fontFamily: "system-ui, sans-serif", fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#6b7280", background: "#f3f4f6", padding: "3px 10px", borderRadius: "20px" }}>Practice Management</span>
            <span style={{ fontFamily: "system-ui, sans-serif", fontSize: "12px", color: "#9ca3af" }}>March 2026 · 9 min read</span>
          </div>
          <h1 style={{ fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 700, lineHeight: 1.25, marginBottom: "20px" }}>
            Client Intake for Ontario Law Firms: Best Practices for 2026
          </h1>
          <p style={{ fontSize: "18px", lineHeight: 1.7, color: "#4b5563", fontFamily: "system-ui, sans-serif" }}>
            A poor intake process costs Ontario solo lawyers in two ways: missed conflicts that create liability, and poor client information that slows everything down. Here&apos;s a step-by-step intake process designed for LSO compliance and maximum efficiency.
          </p>
        </div>

        {/* Why intake matters */}
        <section style={{ marginBottom: "48px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "16px" }}>Why Intake Is the Most Important Process in Your Practice</h2>
          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", fontFamily: "system-ui, sans-serif", marginBottom: "16px" }}>
            Most malpractice claims and LSO complaints start with a failure at intake. The conflict check is either not done or not documented. The scope of the engagement is unclear. The client&apos;s expectations were never managed. The limitation period was not flagged.
          </p>
          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", fontFamily: "system-ui, sans-serif", marginBottom: "16px" }}>
            A systematic intake process prevents all of these. It also makes your practice more efficient: lawyers with a defined intake process spend less time on admin per new client, have fewer scope disputes, and collect retainers faster.
          </p>
          <div style={{ backgroundColor: "#fef9f0", border: "1px solid #fed7aa", borderRadius: "8px", padding: "20px" }}>
            <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "14px", fontWeight: 700, color: "#92400e", marginBottom: "8px" }}>Common intake failures that lead to LSO complaints:</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "6px" }}>
              {[
                "Conflict check not done before consultation — client reveals adverse information you can&apos;t unhear",
                "Scope of retainer not documented in writing — dispute over what was included",
                "Limitation period not identified and flagged at intake — client claims you missed it",
                "Trust retainer not collected before work begins — fee collection problems later",
                "No written engagement letter — client disputes fees, services, or results",
              ].map((item) => (
                <li key={item} style={{ fontFamily: "system-ui, sans-serif", fontSize: "13px", color: "#78350f", display: "flex", gap: "8px" }}>
                  <span style={{ flexShrink: 0 }}>—</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* The 6-step process */}
        <section style={{ marginBottom: "48px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "20px" }}>The 6-Step Intake Process for Ontario Law Firms</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {INTAKE_STEPS.map((s) => (
              <div key={s.step} style={{ border: "1px solid #e5e7eb", borderRadius: "10px", overflow: "hidden" }}>
                <div style={{ backgroundColor: "#1a1a2e", padding: "16px 20px", display: "flex", gap: "16px", alignItems: "baseline" }}>
                  <span style={{ fontFamily: "system-ui, sans-serif", fontSize: "28px", fontWeight: 700, color: "rgba(255,255,255,0.2)", lineHeight: 1 }}>{s.step}</span>
                  <div>
                    <h3 style={{ fontFamily: "system-ui, sans-serif", fontSize: "16px", fontWeight: 700, color: "#fff", margin: 0 }}>{s.title}</h3>
                    <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.5)", margin: "2px 0 0" }}>{s.time} · {s.lso}</p>
                  </div>
                </div>
                <div style={{ padding: "20px" }}>
                  <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#374151", fontFamily: "system-ui, sans-serif", marginBottom: "12px" }}>{s.detail}</p>
                  <div style={{ backgroundColor: "#f0f9ff", borderRadius: "6px", padding: "10px 14px", display: "flex", gap: "8px" }}>
                    <span style={{ fontSize: "13px", color: "#0369a1", flexShrink: 0 }}>💡</span>
                    <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "13px", color: "#0369a1", margin: 0, lineHeight: 1.6 }}><strong>Atticus:</strong> {s.atticusTip}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Intake form fields */}
        <section style={{ marginBottom: "48px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "16px" }}>What Your Intake Form Must Capture</h2>
          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", fontFamily: "system-ui, sans-serif", marginBottom: "20px" }}>
            Your intake form should be completable online before the consultation. Keep it short enough that prospective clients will fill it out (under 10 fields), but complete enough to run a conflict check and assess the matter.
          </p>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "system-ui, sans-serif", fontSize: "14px" }}>
              <thead>
                <tr style={{ backgroundColor: "#f9fafb" }}>
                  <th style={{ padding: "10px 14px", textAlign: "left", fontWeight: 700, borderBottom: "2px solid #e5e7eb" }}>Field</th>
                  <th style={{ padding: "10px 14px", textAlign: "left", fontWeight: 700, borderBottom: "2px solid #e5e7eb" }}>Why It&apos;s Needed</th>
                </tr>
              </thead>
              <tbody>
                {INTAKE_FORM_FIELDS.map(([field, reason], i) => (
                  <tr key={field} style={{ borderBottom: "1px solid #e5e7eb", backgroundColor: i % 2 === 0 ? "#fff" : "#f9fafb" }}>
                    <td style={{ padding: "10px 14px", fontWeight: 600 }}>{field}</td>
                    <td style={{ padding: "10px 14px", color: "#4b5563" }}>{reason}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Limitation period flag */}
        <section style={{ marginBottom: "48px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "16px" }}>Always Check for Limitation Periods at Intake</h2>
          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", fontFamily: "system-ui, sans-serif", marginBottom: "16px" }}>
            The intake form should ask whether there is a known deadline or whether the client has been involved in an incident that may trigger a limitation period. This prompts you to run the limitation period check immediately — before you even begin the consultation.
          </p>
          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", fontFamily: "system-ui, sans-serif", marginBottom: "16px" }}>
            Ontario&apos;s general limitation period is 2 years from the date the claim was discovered (Limitations Act, 2002, s. 4). For personal injury or tort matters, the discovery rule can extend this — but the clock often starts earlier than clients realize. Municipal Act s. 44(10) notice requirements (10 days for injuries on municipal property) are especially easy to miss.
          </p>
          <div style={{ backgroundColor: "#fef2f2", border: "1px solid #fecaca", borderRadius: "8px", padding: "20px" }}>
            <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "14px", fontWeight: 700, color: "#991b1b", marginBottom: "8px" }}>At intake, for every new matter:</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "6px" }}>
              {[
                "Ask: What date did the triggering event occur?",
                "Ask: Has the client sought legal advice before?",
                "Run the limitation period calculator for the applicable proceeding type",
                "Add the calculated deadline to your tracker immediately",
                "Note the limitation period assessment in the engagement letter",
              ].map((item) => (
                <li key={item} style={{ fontFamily: "system-ui, sans-serif", fontSize: "13px", color: "#991b1b", display: "flex", gap: "8px" }}>
                  <span style={{ flexShrink: 0, color: "#dc2626" }}>→</span> {item}
                </li>
              ))}
            </ul>
          </div>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#374151", fontFamily: "system-ui, sans-serif", marginTop: "16px" }}>
            Use the <Link href="/calculator" style={{ color: "#1a1a2e", fontWeight: 600 }}>free Ontario limitation period calculator</Link> to check all applicable periods. It covers the Limitations Act, Construction Act, Municipal Act, and special rules for minors and sexual assault claims.
          </p>
        </section>

        {/* CTA */}
        <div style={{ backgroundColor: "#1a1a2e", borderRadius: "12px", padding: "40px", textAlign: "center" }}>
          <h3 style={{ fontSize: "22px", fontWeight: 700, marginBottom: "12px", color: "#fff" }}>
            Automate Your Intake Process with Atticus
          </h3>
          <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.7)", marginBottom: "24px", fontFamily: "system-ui, sans-serif", maxWidth: "480px", margin: "0 auto 24px" }}>
            Shareable intake form, AI conflict check, document portal, limitation period calculator, and engagement letter drafting — all in one platform.
          </p>
          <Link href="/sign-up" style={{ backgroundColor: "#fff", color: "#1a1a2e", padding: "12px 28px", borderRadius: "6px", textDecoration: "none", fontFamily: "system-ui, sans-serif", fontWeight: 700, fontSize: "15px" }}>
            Start Free 14-Day Trial
          </Link>
          <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.4)", marginTop: "12px" }}>No credit card · $149 CAD/mo · Canadian infrastructure</p>
        </div>
      </article>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid #e5e7eb", padding: "32px 24px", backgroundColor: "#f9fafb" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "16px", fontSize: "13px", fontFamily: "system-ui, sans-serif" }}>
          <Link href="/blog" style={{ color: "#6b7280", textDecoration: "none" }}>← All Posts</Link>
          <Link href="/blog/how-to-start-a-law-firm-ontario" style={{ color: "#6b7280", textDecoration: "none" }}>How to Start a Law Firm</Link>
          <Link href="/blog/missing-limitation-periods-ontario" style={{ color: "#6b7280", textDecoration: "none" }}>Missing Limitation Periods</Link>
          <Link href="/calculator" style={{ color: "#6b7280", textDecoration: "none" }}>Limitation Calculator</Link>
          <Link href="/pricing" style={{ color: "#6b7280", textDecoration: "none" }}>Pricing</Link>
        </div>
      </footer>
    </div>
  );
}
