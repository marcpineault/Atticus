import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Engagement Letters for Ontario Lawyers: What to Include and Why (2026)",
  description:
    "A practical guide to engagement letters for Ontario law firms — LSO requirements, what to include, retainer terms, limitation period notices, and a section-by-section breakdown with AI drafting tips.",
  openGraph: {
    title: "Engagement Letters for Ontario Lawyers: What to Include and Why (2026)",
    description:
      "Everything Ontario lawyers need in an engagement letter: LSO By-Law 9 requirements, scope of representation, billing terms, trust deposits, and limitation period notices.",
    type: "article",
    url: "https://getatticus.ca/blog/engagement-letter-ontario-lawyers",
  },
  alternates: { canonical: "https://getatticus.ca/blog/engagement-letter-ontario-lawyers" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Engagement Letters for Ontario Lawyers: What to Include and Why (2026)",
  description:
    "LSO requirements, retainer terms, trust deposits, and limitation period notices for Ontario engagement letters.",
  author: { "@type": "Organization", name: "Atticus" },
  publisher: { "@type": "Organization", name: "Atticus", url: "https://getatticus.ca" },
  datePublished: "2026-03-01",
  url: "https://getatticus.ca/blog/engagement-letter-ontario-lawyers",
};

const SECTIONS = [
  {
    section: "1. Identification of the client",
    lsoRequired: true,
    details:
      "Full legal name of the client, whether individual or corporate. If corporate, include the name of your contact person and their authority to instruct. For joint clients, identify all parties and confirm they have been advised of potential conflicts.",
  },
  {
    section: "2. Scope of the retainer",
    lsoRequired: true,
    details:
      "Clearly describe what you are and are not being retained to do. A matter labelled 'real estate purchase' should specify the property address, closing date, and whether it includes title insurance review, HST certificate review, or mortgage advice. Scope creep is a claims risk — define the edges.",
  },
  {
    section: "3. Fee arrangement",
    lsoRequired: true,
    details:
      "Hourly rate or flat fee, how and when invoices are issued, payment terms, and interest on overdue amounts. If hourly, include an estimate of the range of expected fees with a clear disclaimer that it is an estimate only. HST registration number and the 13% HST rate must appear on every invoice.",
  },
  {
    section: "4. Retainer deposit and trust account",
    lsoRequired: true,
    details:
      "If you are collecting a retainer deposit, state the amount, that it will be held in trust, and the conditions under which it will be applied to fees. Under LSO By-Law 9, trust funds can only be withdrawn once the fees have been earned and invoiced. Be specific about when replenishment is required.",
  },
  {
    section: "5. Communication and availability",
    lsoRequired: false,
    details:
      "How and when you will communicate with the client, expected response times, and who to contact if you are unavailable. This section manages expectations and reduces 'my lawyer never calls me back' complaints that lead to LSO complaints even in cases where the legal work is fine.",
  },
  {
    section: "6. Limitation periods and critical dates",
    lsoRequired: false,
    details:
      "For litigation matters, include an explicit notice that the client is responsible for advising you of any additional facts that might affect the limitation period, and that you will advise them of the applicable period as the matter proceeds. This is your first layer of malpractice protection on limitation periods.",
  },
  {
    section: "7. Conflict of interest disclosure",
    lsoRequired: true,
    details:
      "Confirm that you have conducted a conflict of interest check, describe any disclosed conflict that has been waived, and include the client's written consent if applicable. For matters with no conflict, a brief statement confirming the check was run provides a paper trail.",
  },
  {
    section: "8. Client responsibilities",
    lsoRequired: false,
    details:
      "What the client must provide: documents, instructions, information, and prompt responses to requests. If the client fails to provide documents or instructions in a timely way, your ability to meet deadlines is compromised — this section puts that risk back on them.",
  },
  {
    section: "9. File termination and withdrawal",
    lsoRequired: true,
    details:
      "Your right to withdraw in certain circumstances (non-payment, client misconduct, irreparable breakdown of relationship), notice you will provide, return of client documents, and handling of trust funds on withdrawal. Rule 3.7 governs withdrawal — your engagement letter should align with it.",
  },
  {
    section: "10. File retention and destruction",
    lsoRequired: false,
    details:
      "How long you will retain the file after the matter closes, how the client can request their documents, and your policy on destruction. The LSO requires you to retain files for at least seven years after the matter closes — your engagement letter should confirm this.",
  },
  {
    section: "11. Privacy and confidentiality",
    lsoRequired: true,
    details:
      "Reference to PIPEDA and your privacy policy, disclosure of any third-party service providers who may access client information (including cloud software and AI tools per Rule 3.3), and your obligations to keep client information confidential.",
  },
  {
    section: "12. AI tools disclosure (Rule 3.3)",
    lsoRequired: true,
    details:
      "If you use AI tools — whether for document drafting, research, or practice management — Rule 3.3 requires that clients understand how their information may be processed. Include a brief disclosure of the AI tools you use, that data is held in Canada where applicable, and that you supervise all AI-generated work.",
  },
];

export default function EngagementLetterPage() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", background: "#07070a", color: "#f0e8d8", minHeight: "100vh" }}>
      <Script id="ld-engagement" type="application/ld+json">{JSON.stringify(jsonLd)}</Script>

      {/* NAV */}
      <nav style={{ padding: "20px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(198,146,42,0.1)" }}>
        <Link href="/" style={{ fontSize: "20px", fontWeight: 600, color: "#faf8f4", textDecoration: "none" }}>Atticus</Link>
        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          <Link href="/blog" style={{ color: "rgba(240,232,216,0.5)", fontSize: "14px", textDecoration: "none" }}>Blog</Link>
          <Link href="/sign-up" style={{ background: "#C6922A", color: "#07070a", padding: "10px 24px", textDecoration: "none", fontSize: "14px", fontWeight: 500 }}>
            Start Free Trial →
          </Link>
        </div>
      </nav>

      {/* HEADER */}
      <header style={{ padding: "80px 48px 60px", maxWidth: "760px", margin: "0 auto" }}>
        <div style={{ display: "flex", gap: "12px", alignItems: "center", marginBottom: "24px" }}>
          <span style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#C6922A", background: "rgba(198,146,42,0.1)", padding: "3px 10px", borderRadius: "20px" }}>Practice Management</span>
          <span style={{ fontSize: "12px", color: "rgba(240,232,216,0.3)" }}>March 2026 · 10 min read</span>
        </div>
        <h1 style={{ fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 300, lineHeight: 1.15, color: "#faf8f4", marginBottom: "24px" }}>
          Engagement Letters for Ontario Lawyers:<br />
          <em style={{ fontStyle: "italic", color: "#e8b84b" }}>What to Include and Why</em>
        </h1>
        <p style={{ fontSize: "17px", color: "rgba(240,232,216,0.65)", lineHeight: 1.8 }}>
          The engagement letter is the most important document in any client relationship. It establishes the scope of the retainer, protects you from fee disputes and malpractice claims, and satisfies LSO compliance obligations before a single billable hour is recorded.
        </p>
      </header>

      {/* CONTENT */}
      <article style={{ padding: "0 48px 80px", maxWidth: "760px", margin: "0 auto" }}>

        {/* WHY THEY MATTER */}
        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "26px", fontWeight: 400, color: "#faf8f4", marginBottom: "20px" }}>Why engagement letters matter for Ontario lawyers</h2>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.8, marginBottom: "20px" }}>
            LAWPRO data shows that a significant portion of malpractice claims against Ontario lawyers involve fee disputes, scope confusion, or missed deadlines that an engagement letter would have clearly defined. The letter does several things simultaneously:
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1px", background: "rgba(255,255,255,0.06)", marginBottom: "24px" }}>
            {[
              { title: "Defines the scope", desc: "Clients often believe their lawyer is handling more than the lawyer thinks they were retained for. A clear scope prevents this misalignment." },
              { title: "Manages fee expectations", desc: "Fee disputes are the #1 source of LSO complaints. A signed engagement letter with clear billing terms dramatically reduces the risk." },
              { title: "Creates the limitation period paper trail", desc: "For litigation matters, documenting your limitation period discussion protects you if a deadline is later missed due to client-provided information." },
              { title: "Satisfies LSO requirements", desc: "Rules 3.2, 3.3, and 7.8 together require specific disclosures that an engagement letter formalizes." },
            ].map(({ title, desc }) => (
              <div key={title} style={{ background: "#07070a", padding: "24px" }}>
                <h3 style={{ fontSize: "14px", fontWeight: 600, color: "#C6922A", marginBottom: "8px" }}>{title}</h3>
                <p style={{ fontSize: "13px", color: "rgba(240,232,216,0.6)", lineHeight: 1.7, margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>
          <div style={{ background: "rgba(198,146,42,0.08)", border: "1px solid rgba(198,146,42,0.2)", padding: "24px 28px", borderRadius: "4px" }}>
            <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.8)", lineHeight: 1.7, margin: 0 }}>
              <strong style={{ color: "#C6922A" }}>LAWPRO Practice Pro Tip:</strong> LAWPRO consistently recommends sending engagement letters for every matter — including matters where you have acted for the client before. The scope changes with each matter, and so does the risk.
            </p>
          </div>
        </section>

        {/* SECTION BY SECTION */}
        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "26px", fontWeight: 400, color: "#faf8f4", marginBottom: "8px" }}>Section-by-section breakdown</h2>
          <p style={{ fontSize: "14px", color: "rgba(240,232,216,0.45)", marginBottom: "28px" }}>
            Sections marked LSO Required must appear in your engagement letter to satisfy professional obligations.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "rgba(255,255,255,0.06)" }}>
            {SECTIONS.map(({ section, lsoRequired, details }) => (
              <div key={section} style={{ background: "#07070a", padding: "24px 28px" }}>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "16px", marginBottom: "10px" }}>
                  <h3 style={{ fontSize: "15px", fontWeight: 600, color: "#faf8f4", margin: 0 }}>{section}</h3>
                  {lsoRequired && (
                    <span style={{ fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#C6922A", background: "rgba(198,146,42,0.1)", padding: "2px 8px", borderRadius: "10px", flexShrink: 0 }}>LSO Required</span>
                  )}
                </div>
                <p style={{ fontSize: "14px", color: "rgba(240,232,216,0.6)", lineHeight: 1.7, margin: 0 }}>{details}</p>
              </div>
            ))}
          </div>
        </section>

        {/* TRUST DEPOSIT SECTION */}
        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "26px", fontWeight: 400, color: "#faf8f4", marginBottom: "20px" }}>Trust deposits: what LSO By-Law 9 requires</h2>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.8, marginBottom: "20px" }}>
            If you collect a retainer deposit, it must go into your mixed trust account and be tracked in a client trust ledger. Your engagement letter&apos;s trust deposit section must be consistent with By-Law 9 requirements:
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "24px" }}>
            {[
              "The deposit is held in trust until fees are earned and invoiced",
              "Fees cannot be taken from trust without an invoice — not even as a draw",
              "If the retainer is exhausted, describe when and how it must be replenished",
              "On matter closure, any unearned trust balance must be returned to the client",
              "Trust funds cannot be mixed with your general account",
            ].map((item) => (
              <div key={item} style={{ display: "flex", gap: "12px", padding: "12px 16px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                <span style={{ color: "#C6922A", flexShrink: 0 }}>✓</span>
                <p style={{ fontSize: "14px", color: "rgba(240,232,216,0.7)", lineHeight: 1.6, margin: 0 }}>{item}</p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.8 }}>
            Your practice management software should automate the trust ledger entries when you receive a deposit and when you transfer earned fees from trust to general. Manual trust tracking is a significant compliance risk.
          </p>
        </section>

        {/* AI DRAFTING */}
        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "26px", fontWeight: 400, color: "#faf8f4", marginBottom: "20px" }}>Using AI to draft and customize engagement letters</h2>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.8, marginBottom: "20px" }}>
            Atticus includes an AI Draft tool that can generate engagement letters grounded in your matter details. When you open a new matter, Atticus can draft an engagement letter that:
          </p>
          <ul style={{ paddingLeft: "20px", marginBottom: "24px", display: "flex", flexDirection: "column", gap: "8px" }}>
            {[
              "Includes the client name, matter description, and scope from the matter record",
              "Applies your firm&apos;s hourly rate and billing preferences from settings",
              "Inserts your standard trust deposit requirements",
              "Includes an LSO-compliant AI disclosure if you have enabled AI tools in your settings",
              "Is formatted as a proper professional letter ready to send via email",
            ].map((item) => (
              <li key={item} style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.7 }}>{item}</li>
            ))}
          </ul>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.8 }}>
            You review and approve every letter before it goes out. AI drafts the routine structure; you make the professional judgement calls about scope, fees, and risk disclosures specific to the matter.
          </p>
        </section>

        {/* COMMON MISTAKES */}
        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "26px", fontWeight: 400, color: "#faf8f4", marginBottom: "20px" }}>Common engagement letter mistakes Ontario lawyers make</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "rgba(255,255,255,0.06)" }}>
            {[
              { mistake: "Sending the same template for every matter", fix: "The scope section must be specific to the matter. A template for a will is not appropriate for a corporate transaction. Customize the scope, fee estimate, and limitation period language per matter." },
              { mistake: "Vague fee estimates", fix: "\"Fees will depend on the complexity of the matter\" is not useful. Give a range based on your typical experience with similar matters, with a clear disclaimer that it is an estimate. Clients remember a number, and if the final bill is 3x the number you mentioned, you have a problem." },
              { mistake: "No retainer replenishment clause", fix: "If the trust retainer runs out mid-matter, do you stop work? Do you continue on credit? Your engagement letter must answer this or you will be in an uncomfortable conversation later." },
              { mistake: "Skipping the AI disclosure", fix: "If you use ChatGPT, Claude, Atticus, Clio AI, or any other AI tool, Rule 3.3 requires client disclosure. Not having it in your engagement letter is a compliance gap." },
              { mistake: "Not requiring client signature", fix: "An engagement letter that is not signed and returned provides less protection than one that is. Build the signature step into your intake workflow — send, wait for signature, then begin work." },
            ].map(({ mistake, fix }) => (
              <div key={mistake} style={{ background: "#07070a", padding: "20px 24px" }}>
                <p style={{ fontSize: "14px", fontWeight: 600, color: "#e8534a", marginBottom: "6px" }}>✗ {mistake}</p>
                <p style={{ fontSize: "14px", color: "rgba(240,232,216,0.6)", lineHeight: 1.7, margin: 0 }}><span style={{ color: "#C6922A" }}>Fix: </span>{fix}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div style={{ padding: "40px", background: "rgba(198,146,42,0.08)", border: "1px solid rgba(198,146,42,0.2)", borderRadius: "4px" }}>
          <h3 style={{ fontSize: "22px", fontWeight: 400, color: "#faf8f4", marginBottom: "12px" }}>Draft engagement letters in seconds with Atticus AI</h3>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.65)", lineHeight: 1.7, marginBottom: "24px" }}>
            Atticus drafts engagement letters, demand letters, wills, powers of attorney, and more — grounded in your matter details. LSO-compliant AI disclosure included automatically.
          </p>
          <Link href="/sign-up" style={{ background: "#C6922A", color: "#07070a", padding: "12px 28px", textDecoration: "none", fontSize: "14px", fontWeight: 600, display: "inline-block" }}>
            Start Free Trial →
          </Link>
        </div>
      </article>

      {/* RELATED */}
      <section style={{ padding: "0 48px 80px", maxWidth: "760px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "18px", fontWeight: 400, color: "rgba(240,232,216,0.5)", marginBottom: "20px" }}>Related guides</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
          {[
            { href: "/blog/client-intake-ontario-lawyers", label: "Client intake best practices" },
            { href: "/blog/trust-accounting-guide-ontario", label: "Trust accounting guide" },
            { href: "/blog/conflict-of-interest-lawyers-ontario", label: "Conflict of interest checks" },
            { href: "/blog/lso-ai-compliance-ontario", label: "LSO rules on AI" },
          ].map(({ href, label }) => (
            <Link key={href} href={href} style={{ color: "#C6922A", fontSize: "14px", textDecoration: "none", border: "1px solid rgba(198,146,42,0.3)", padding: "6px 16px", borderRadius: "20px" }}>
              {label}
            </Link>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: "32px 48px", borderTop: "1px solid rgba(198,146,42,0.1)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
        <Link href="/blog" style={{ color: "rgba(240,232,216,0.3)", fontSize: "13px", textDecoration: "none" }}>← All Articles</Link>
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          <Link href="/calculator" style={{ color: "rgba(240,232,216,0.3)", fontSize: "13px", textDecoration: "none" }}>Free Calculator</Link>
          <Link href="/pricing" style={{ color: "rgba(240,232,216,0.3)", fontSize: "13px", textDecoration: "none" }}>Pricing</Link>
          <Link href="/privacy" style={{ color: "rgba(240,232,216,0.3)", fontSize: "13px", textDecoration: "none" }}>Privacy</Link>
        </div>
      </footer>
    </div>
  );
}
