import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Conflict of Interest for Ontario Lawyers: Rules, Checks, and Malpractice Prevention (2026)",
  description:
    "How Ontario lawyers identify and manage conflicts of interest under LSO Rules 1.7–1.12. What counts as a conflict, how to run a proper conflict check, and why manual checks aren't enough.",
  openGraph: {
    title: "Conflict of Interest for Ontario Lawyers: Rules, Checks, and Malpractice Prevention (2026)",
    description:
      "A practical guide to conflict of interest management for Ontario solo and small law firms — LSO rules, conflict check procedures, and AI-powered checking.",
    type: "article",
    url: "https://getatticus.ca/blog/conflict-of-interest-lawyers-ontario",
  },
  alternates: { canonical: "https://getatticus.ca/blog/conflict-of-interest-lawyers-ontario" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Conflict of Interest for Ontario Lawyers: Rules, Checks, and Malpractice Prevention (2026)",
  description:
    "How Ontario lawyers identify and manage conflicts of interest under LSO Rules 1.7–1.12.",
  author: { "@type": "Organization", name: "Atticus" },
  publisher: { "@type": "Organization", name: "Atticus", url: "https://getatticus.ca" },
  datePublished: "2026-03-01",
  url: "https://getatticus.ca/blog/conflict-of-interest-lawyers-ontario",
};

export default function ConflictOfInterestPage() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", background: "#07070a", color: "#f0e8d8", minHeight: "100vh" }}>
      <Script id="ld-conflict" type="application/ld+json">{JSON.stringify(jsonLd)}</Script>

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
          <span style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#C6922A", background: "rgba(198,146,42,0.1)", padding: "3px 10px", borderRadius: "20px" }}>LSO Compliance</span>
          <span style={{ fontSize: "12px", color: "rgba(240,232,216,0.3)" }}>March 2026 · 9 min read</span>
        </div>
        <h1 style={{ fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 300, lineHeight: 1.15, color: "#faf8f4", marginBottom: "24px" }}>
          Conflict of Interest for Ontario Lawyers:<br />
          <em style={{ fontStyle: "italic", color: "#e8b84b" }}>Rules, Checks, and Malpractice Prevention</em>
        </h1>
        <p style={{ fontSize: "17px", color: "rgba(240,232,216,0.65)", lineHeight: 1.8 }}>
          Missing a conflict of interest is one of the most serious professional conduct failures an Ontario lawyer can make. It can result in LSO discipline, fee forfeitures, and malpractice claims — even when the conflict was entirely unintentional. Here&apos;s what the rules require and how to run checks that actually work.
        </p>
      </header>

      {/* CONTENT */}
      <article style={{ padding: "0 48px 80px", maxWidth: "760px", margin: "0 auto" }}>

        {/* WHY IT MATTERS */}
        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "26px", fontWeight: 400, color: "#faf8f4", marginBottom: "20px" }}>Why conflict checks are a malpractice risk</h2>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.8, marginBottom: "20px" }}>
            LAWPRO data consistently shows that conflicts of interest represent a significant share of professional liability claims against Ontario lawyers. More concerning: many conflict-related claims stem not from lawyers who knowingly acted in a conflict, but from lawyers who failed to run a thorough conflict check at intake.
          </p>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.8, marginBottom: "20px" }}>
            The practical problem for solo and small firm lawyers is volume. After practicing for 5, 10, or 20 years, you have represented hundreds of clients, and your matters have touched thousands of opposing parties, third parties, and witnesses. No lawyer can hold all of that in memory.
          </p>
          <div style={{ background: "rgba(198,146,42,0.08)", border: "1px solid rgba(198,146,42,0.2)", padding: "24px 28px", borderRadius: "4px", marginBottom: "20px" }}>
            <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.8)", lineHeight: 1.7, margin: 0 }}>
              <strong style={{ color: "#C6922A" }}>The core problem:</strong> A conflict doesn&apos;t just exist between current clients. It can arise from a former client whose matter closed five years ago, or from a party who appeared on the opposing side of a matter you handled for someone else. Manual memory checks are not enough.
            </p>
          </div>
        </section>

        {/* LSO RULES */}
        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "26px", fontWeight: 400, color: "#faf8f4", marginBottom: "20px" }}>LSO conflict of interest rules: what they actually require</h2>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.8, marginBottom: "24px" }}>
            The Rules of Professional Conduct cover conflicts across Rules 1.7 through 1.12. The key provisions Ontario lawyers must understand:
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "rgba(255,255,255,0.06)", marginBottom: "24px" }}>
            {[
              {
                rule: "Rule 1.7 — Conflict of Interest",
                summary: "You must not act where there is a conflict of interest — defined as a substantial risk that your representation would be materially and adversely affected by your duties to another client, a former client, or a third party.",
              },
              {
                rule: "Rule 1.8 — Conflicts in specific transactions",
                summary: "Specific restrictions on business transactions with clients, receiving gifts or benefits, and acting against a client after the retainer ends.",
              },
              {
                rule: "Rule 1.9 — Confidentiality of former client information",
                summary: "You must not act against a former client if confidential information received during that representation could be used to their disadvantage in the new matter.",
              },
              {
                rule: "Rule 1.10 — Conflicts in multi-lawyer firms",
                summary: "A conflict affecting one lawyer in a firm is generally imputed to all lawyers in the firm — meaning the entire firm is conflicted when one lawyer is.",
              },
              {
                rule: "Rule 1.11 — Former government lawyers",
                summary: "Special restrictions for lawyers who previously worked for government agencies — they may not act in matters they had substantial involvement with while in government.",
              },
              {
                rule: "Rule 1.12 — Former judges and mediators",
                summary: "Lawyers who previously served as judges, arbitrators, or mediators are restricted from acting in related matters.",
              },
            ].map(({ rule, summary }) => (
              <div key={rule} style={{ background: "#07070a", padding: "20px 24px" }}>
                <p style={{ fontSize: "14px", fontWeight: 600, color: "#C6922A", marginBottom: "6px" }}>{rule}</p>
                <p style={{ fontSize: "14px", color: "rgba(240,232,216,0.65)", lineHeight: 1.7, margin: 0 }}>{summary}</p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.8 }}>
            Importantly, Rule 1.7 uses the word &quot;substantial risk&quot; — not certainty. If there is a substantial risk that your duties to one client could materially limit your representation of another, you have a conflict even if you believe you can handle it impartially.
          </p>
        </section>

        {/* CONSENT */}
        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "26px", fontWeight: 400, color: "#faf8f4", marginBottom: "20px" }}>When consent cures a conflict — and when it doesn&apos;t</h2>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.8, marginBottom: "20px" }}>
            Some conflicts are waivable with informed client consent. Others are not. Rule 1.7(2) provides that a conflict may be curable if:
          </p>
          <ul style={{ paddingLeft: "20px", marginBottom: "20px", display: "flex", flexDirection: "column", gap: "10px" }}>
            {[
              "The lawyer reasonably believes they can act competently and diligently for both clients",
              "The representation is not prohibited by law",
              "The clients&apos; interests are not directly adverse in the same matter",
              "Each client gives informed consent, confirmed in writing",
            ].map((item) => (
              <li key={item} style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.7 }}>{item}</li>
            ))}
          </ul>
          <div style={{ background: "rgba(220,53,69,0.08)", border: "1px solid rgba(220,53,69,0.2)", padding: "24px 28px", borderRadius: "4px" }}>
            <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.8)", lineHeight: 1.7, margin: 0 }}>
              <strong style={{ color: "#e8534a" }}>Non-waivable conflicts</strong> include representing clients with directly adverse interests in the same litigation, or acting against a former client using confidential information from that prior retainer. No amount of consent cures these.
            </p>
          </div>
        </section>

        {/* HOW TO RUN A CHECK */}
        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "26px", fontWeight: 400, color: "#faf8f4", marginBottom: "20px" }}>How to run a proper conflict check</h2>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.8, marginBottom: "24px" }}>
            A proper conflict check for a new client or matter must search against more than just your current client list. It must include:
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1px", background: "rgba(255,255,255,0.06)", marginBottom: "24px" }}>
            {[
              { category: "Current clients", desc: "All clients you currently represent, including matters that are active but inactive for months." },
              { category: "Former clients", desc: "All clients you have represented at any point — the risk from former clients is just as real as from current ones." },
              { category: "Opposing parties", desc: "Every party who appeared on the opposing side of any matter you have handled. Corporate entities and their related entities." },
              { category: "Witnesses and third parties", desc: "Third parties who gave evidence or were materially involved in prior matters and could be affected by the new representation." },
              { category: "Related companies", desc: "Parent companies, subsidiaries, affiliated entities. A conflict with ABC Corp extends to its subsidiaries." },
              { category: "Individual principals", desc: "Directors, officers, and principals of corporate clients. A conflict with a person extends to corporations they control." },
            ].map(({ category, desc }) => (
              <div key={category} style={{ background: "#07070a", padding: "24px" }}>
                <h3 style={{ fontSize: "15px", fontWeight: 600, color: "#C6922A", marginBottom: "8px" }}>{category}</h3>
                <p style={{ fontSize: "13px", color: "rgba(240,232,216,0.6)", lineHeight: 1.7, margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.8, marginBottom: "16px" }}>
            <strong style={{ color: "#faf8f4" }}>Document your conflict check.</strong> If a complaint is ever made, you need to be able to show the LSO that you ran a systematic conflict check before accepting the retainer, what you searched, and when. A mental review does not leave a paper trail.
          </p>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.8 }}>
            The practical standard most Ontario lawyers follow: run your conflict check in writing, search your system, and record the outcome in the new client&apos;s file before sending the engagement letter.
          </p>
        </section>

        {/* WHY MANUAL CHECKS FAIL */}
        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "26px", fontWeight: 400, color: "#faf8f4", marginBottom: "20px" }}>Why manual conflict checks fail as practices grow</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "rgba(255,255,255,0.06)", marginBottom: "24px" }}>
            {[
              { problem: "Name variations", detail: "Robert Johnson, Bob Johnson, R. Johnson, and Johnson Holdings Inc. may all represent the same person or entity. Manual searches that rely on exact name matches miss these." },
              { problem: "Memory limitations", detail: "After 10+ years of practice, a solo lawyer may have represented 400–600+ individual clients and touched thousands of related parties. No one can hold this in memory." },
              { problem: "Document extraction gaps", detail: "If opposing party names are in PDFs, contracts, and correspondence that aren&apos;t indexed, they won&apos;t appear in a client-list search." },
              { problem: "Speed pressure at intake", detail: "New client calls create urgency. Thorough conflict checks feel like they slow down intake. Practices under time pressure take shortcuts — and that&apos;s when conflicts get missed." },
            ].map(({ problem, detail }) => (
              <div key={problem} style={{ background: "#07070a", padding: "20px 24px", display: "flex", gap: "16px" }}>
                <div style={{ flexShrink: 0 }}>
                  <div style={{ width: "6px", height: "6px", background: "#C6922A", borderRadius: "50%", marginTop: "7px" }} />
                </div>
                <div>
                  <p style={{ fontSize: "15px", fontWeight: 500, color: "#faf8f4", marginBottom: "6px" }}>{problem}</p>
                  <p style={{ fontSize: "14px", color: "rgba(240,232,216,0.6)", lineHeight: 1.7, margin: 0 }}>{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* AI CONFLICT CHECKS */}
        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "26px", fontWeight: 400, color: "#faf8f4", marginBottom: "20px" }}>How AI conflict checking works in Atticus</h2>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.8, marginBottom: "20px" }}>
            Atticus&apos;s conflict checker searches semantically — not just by exact name match. It runs against:
          </p>
          <ul style={{ paddingLeft: "20px", marginBottom: "24px", display: "flex", flexDirection: "column", gap: "8px" }}>
            {[
              "All current and past clients in your account",
              "All parties extracted from every document you have processed",
              "Company names and their associated individuals",
              "Names mentioned in correspondence, contracts, and notes",
              "Similar names and known aliases (semantic matching)",
            ].map((item) => (
              <li key={item} style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.7 }}>{item}</li>
            ))}
          </ul>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.8, marginBottom: "20px" }}>
            The result is a severity rating (high / medium / low) with a plain-language explanation of why the potential conflict exists and which prior matter or client is involved. You can run a conflict check from:
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "24px" }}>
            {["Client creation", "Search page", "Conflicts page", "Command palette (Cmd+K)", "Atticus chat"].map(loc => (
              <span key={loc} style={{ fontSize: "13px", color: "#C6922A", background: "rgba(198,146,42,0.1)", padding: "5px 14px", borderRadius: "20px" }}>{loc}</span>
            ))}
          </div>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.8 }}>
            The search runs against your entire document history — not just your client list. If an opposing party was named in a PDF from three years ago, Atticus finds it.
          </p>
        </section>

        {/* BEST PRACTICES */}
        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "26px", fontWeight: 400, color: "#faf8f4", marginBottom: "20px" }}>Conflict check best practices for Ontario solo firms</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {[
              {
                step: "1",
                title: "Run the check before the first substantive call",
                desc: "Do not have a substantive discussion about the new matter before running the conflict check. Confidential information received in a preliminary consultation can create an obligation even if you later decline the retainer.",
              },
              {
                step: "2",
                title: "Check the company and the individual",
                desc: "If a new client is a corporation, search both the corporate name and the names of its principals. If the client is an individual, check for any companies they control.",
              },
              {
                step: "3",
                title: "Document the check in the file",
                desc: "Record what you searched, when you searched, and the result. A note in the new client record or matter file is sufficient — but it must exist before you send the engagement letter.",
              },
              {
                step: "4",
                title: "Handle potential conflicts in writing",
                desc: "If you identify a potential conflict and decide it is manageable with consent, document that analysis, get informed consent in writing from all affected clients, and keep it in the file.",
              },
              {
                step: "5",
                title: "Decline clearly and promptly",
                desc: "If there is a conflict you cannot cure, decline the retainer promptly in writing, avoid disclosing confidential information about other clients, and suggest the prospective client seek independent counsel.",
              },
            ].map(({ step, title, desc }) => (
              <div key={step} style={{ display: "flex", gap: "20px", padding: "24px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                <div style={{ flexShrink: 0, width: "32px", height: "32px", background: "rgba(198,146,42,0.15)", border: "1px solid rgba(198,146,42,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px", fontWeight: 600, color: "#C6922A" }}>
                  {step}
                </div>
                <div>
                  <p style={{ fontSize: "15px", fontWeight: 500, color: "#faf8f4", marginBottom: "8px" }}>{title}</p>
                  <p style={{ fontSize: "14px", color: "rgba(240,232,216,0.6)", lineHeight: 1.7, margin: 0 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div style={{ padding: "40px", background: "rgba(198,146,42,0.08)", border: "1px solid rgba(198,146,42,0.2)", borderRadius: "4px" }}>
          <h3 style={{ fontSize: "22px", fontWeight: 400, color: "#faf8f4", marginBottom: "12px" }}>Run conflict checks across your entire document history</h3>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.65)", lineHeight: 1.7, marginBottom: "24px" }}>
            Atticus searches semantically against all clients, parties, and documents in your practice — not just a client list. Try it free for 14 days.
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
            { href: "/blog/lso-ai-compliance-ontario", label: "LSO rules on AI" },
            { href: "/blog/missing-limitation-periods-ontario", label: "Missing limitation periods" },
            { href: "/blog/lawpro-insurance-ontario", label: "LAWPRO insurance guide" },
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
