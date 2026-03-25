import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Time Tracking for Ontario Lawyers: A Practical Guide for 2026 | Atticus Blog",
  description:
    "How Ontario solo and small firm lawyers should track billable time in 2026 — best practices, common mistakes, how to recover lost hours, and what to look for in time tracking software.",
  keywords: [
    "time tracking lawyers ontario",
    "billable hours tracking ontario lawyer",
    "time tracking software lawyers canada",
    "lawyer billing time ontario",
    "billable hours law firm ontario",
    "how to track time as a lawyer ontario",
    "legal time tracking software ontario",
  ],
  openGraph: {
    title: "Time Tracking for Ontario Lawyers: Practical Guide 2026",
    description:
      "Stop losing billable hours. A practical guide to time tracking for Ontario solo and small firm lawyers — methods, software, and how to recover underreported time.",
    type: "article",
    url: "https://getatticus.ca/blog/time-tracking-lawyers-ontario",
  },
  alternates: { canonical: "https://getatticus.ca/blog/time-tracking-lawyers-ontario" },
};

const jsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Time Tracking for Ontario Lawyers: A Practical Guide for 2026",
  description:
    "How Ontario solo and small firm lawyers should track billable time — best practices, common leakage, and time tracking software guide.",
  datePublished: "2026-03-18",
  dateModified: "2026-03-18",
  author: { "@type": "Organization", name: "Atticus" },
  publisher: { "@type": "Organization", name: "Atticus", url: "https://getatticus.ca" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://getatticus.ca/blog/time-tracking-lawyers-ontario" },
});

export default function TimeTrackingPage() {
  return (
    <div style={{ fontFamily: "Georgia, 'Times New Roman', serif", color: "#1a1a2e", minHeight: "100vh", backgroundColor: "#fff" }}>
      <Script id="jsonld-time" type="application/ld+json">{jsonLd}</Script>

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
            <span style={{ fontFamily: "system-ui, sans-serif", fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#6b7280", background: "#f3f4f6", padding: "3px 10px", borderRadius: "20px" }}>Billing & Business</span>
            <span style={{ fontFamily: "system-ui, sans-serif", fontSize: "12px", color: "#9ca3af" }}>March 2026 · 9 min read</span>
          </div>
          <h1 style={{ fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 700, lineHeight: 1.25, marginBottom: "20px" }}>
            Time Tracking for Ontario Lawyers: A Practical Guide for 2026
          </h1>
          <p style={{ fontSize: "18px", lineHeight: 1.7, color: "#4b5563", fontFamily: "system-ui, sans-serif" }}>
            Research consistently shows that lawyers underreport billable time by 10–20%. For an Ontario solo lawyer billing at $250/hr with 1,400 billable hours per year, that&apos;s $35,000–$70,000 in lost annual revenue — simply from not capturing work already done.
          </p>
        </div>

        {/* The leakage problem */}
        <section style={{ marginBottom: "48px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "16px" }}>Where Billable Time Gets Lost</h2>
          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", fontFamily: "system-ui, sans-serif", marginBottom: "20px" }}>
            Time leakage happens in predictable ways. Understanding where hours disappear is the first step to recovering them.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              {
                category: "End-of-day reconstruction",
                desc: "Logging time at 5pm from memory means 40–50% of small interactions are forgotten or underestimated. A 3-minute client call becomes 0 on the time sheet.",
                impact: "High — accounts for 60% of time leakage",
              },
              {
                category: "Non-billable classification of billable work",
                desc: "Lawyers often write off small tasks as &quot;too small to bill&quot; — a quick email, a 2-minute call, a 5-minute research question. Cumulatively, these add up to hours per week.",
                impact: "Medium — often $500–$1,500/month",
              },
              {
                category: "Write-downs at billing time",
                desc: "Lawyers review recorded time at billing and voluntarily write down entries they feel are excessive. Sometimes this is appropriate; often it&apos;s unnecessary self-discounting.",
                impact: "Medium — average 15% write-down rate in small firms",
              },
              {
                category: "Missing matter codes",
                desc: "Time gets recorded against &quot;general&quot; or the wrong matter, then written off because it can&apos;t be billed to anyone.",
                impact: "Low-medium — administrative drag",
              },
              {
                category: "After-hours and weekend work",
                desc: "Work done evenings, weekends, or while traveling rarely gets logged consistently. No device, no habit, no log.",
                impact: "Medium — significant for high-volume litigators",
              },
            ].map((row) => (
              <div key={row.category} style={{ border: "1px solid #e5e7eb", borderRadius: "8px", padding: "16px 20px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "12px", flexWrap: "wrap", marginBottom: "8px" }}>
                  <h3 style={{ fontFamily: "system-ui, sans-serif", fontSize: "15px", fontWeight: 700, color: "#1a1a2e" }}>{row.category}</h3>
                  <span style={{ fontFamily: "system-ui, sans-serif", fontSize: "11px", color: "#6b7280", background: "#f3f4f6", padding: "2px 8px", borderRadius: "12px", whiteSpace: "nowrap" }}>{row.impact}</span>
                </div>
                <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "14px", color: "#4b5563", lineHeight: 1.7, margin: 0 }}>{row.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Time tracking methods */}
        <section style={{ marginBottom: "48px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "16px" }}>Time Tracking Methods: What Actually Works</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {[
              {
                method: "Live Timer (Best)",
                how: "Start a timer when you begin a task. Stop it when you stop. Log immediately with matter and description.",
                pros: ["Most accurate — captures real elapsed time", "No reconstruction required", "Small tasks get captured"],
                cons: ["Requires discipline to start/stop consistently", "Interruptions require resetting workflow"],
                verdict: "gold",
              },
              {
                method: "Contemporaneous Entry (Very Good)",
                how: "Log time immediately after completing each task — before moving to the next one.",
                pros: ["Very accurate while memory is fresh", "Works without leaving what you&apos;re doing", "Natural fit for task-based work"],
                cons: ["Can&apos;t log while in flow", "Tasks that blend together are harder to separate"],
                verdict: "gold",
              },
              {
                method: "Hourly Reconstruction (Poor)",
                how: "Look at your calendar, emails, and files at the end of the day to reconstruct what you did.",
                pros: ["Better than nothing", "Catches some missed tasks"],
                cons: ["10–30% of time is forgotten", "Small interactions universally missed", "Estimates trend low"],
                verdict: "red",
              },
              {
                method: "Weekly Reconstruction (Avoid)",
                how: "Reconstructing a full week&apos;s time on Friday afternoon or invoice day.",
                pros: ["Feels efficient (one time block)"],
                cons: ["Up to 50% of time forgotten", "Creates inaccurate billing records", "Legal billing records must be accurate"],
                verdict: "red",
              },
            ].map((row) => (
              <div key={row.method} style={{ border: `2px solid ${row.verdict === "gold" ? "#86efac" : "#fecaca"}`, borderRadius: "8px", padding: "20px" }}>
                <div style={{ display: "flex", gap: "12px", alignItems: "center", marginBottom: "12px" }}>
                  <span style={{ fontSize: "18px" }}>{row.verdict === "gold" ? "✓" : "✗"}</span>
                  <h3 style={{ fontFamily: "system-ui, sans-serif", fontSize: "16px", fontWeight: 700, color: "#1a1a2e" }}>{row.method}</h3>
                </div>
                <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "14px", color: "#4b5563", marginBottom: "12px" }}><em>{row.how}</em></p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                  <div>
                    <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "12px", fontWeight: 700, color: "#15803d", marginBottom: "6px" }}>Pros</p>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                      {row.pros.map((p) => <li key={p} style={{ fontFamily: "system-ui, sans-serif", fontSize: "13px", color: "#374151", marginBottom: "4px" }}>+ {p}</li>)}
                    </ul>
                  </div>
                  <div>
                    <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "12px", fontWeight: 700, color: "#dc2626", marginBottom: "6px" }}>Cons</p>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                      {row.cons.map((c) => <li key={c} style={{ fontFamily: "system-ui, sans-serif", fontSize: "13px", color: "#374151", marginBottom: "4px" }}>− {c}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Time entry structure */}
        <section style={{ marginBottom: "48px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "16px" }}>What Every Time Entry Should Include</h2>
          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", fontFamily: "system-ui, sans-serif", marginBottom: "16px" }}>
            A time entry that will survive client scrutiny and LSO review needs five elements:
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "1px", border: "1px solid #e5e7eb", borderRadius: "8px", overflow: "hidden" }}>
            {[
              ["Date", "The date the work was performed — not when it was entered. Reconstructed time must be accurate to the date."],
              ["Client & matter", "Link to the specific matter being billed. Misallocated time creates billing problems."],
              ["Hours (or units)", "6-minute increments (0.1 hour) are standard for Ontario law firms. Round to the nearest 0.1 — don&apos;t round up blocks."],
              ["Description", "What specifically was done: &quot;Reviewed draft settlement agreement; identified three issues with indemnity clause&quot; — not &quot;Legal services.&quot; Vague descriptions invite write-offs and disputes."],
              ["Rate", "Your hourly rate, or a note if this entry is at a different rate (articled clerk rate, reduced rate, etc.)."],
            ].map(([field, desc], i) => (
              <div key={field as string} style={{ display: "grid", gridTemplateColumns: "140px 1fr", backgroundColor: i % 2 === 0 ? "#fff" : "#f9fafb" }}>
                <div style={{ padding: "14px 16px", fontFamily: "system-ui, sans-serif", fontSize: "13px", fontWeight: 700, borderRight: "1px solid #e5e7eb", color: "#1a1a2e" }}>{field}</div>
                <div style={{ padding: "14px 16px", fontFamily: "system-ui, sans-serif", fontSize: "13px", color: "#4b5563", lineHeight: 1.6 }}>{desc as string}</div>
              </div>
            ))}
          </div>
        </section>

        {/* The math section */}
        <section style={{ marginBottom: "48px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "16px" }}>The Revenue Math: What Better Time Tracking Is Worth</h2>
          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", fontFamily: "system-ui, sans-serif", marginBottom: "20px" }}>
            Using the average Ontario lawyer rates from 2026 data:
          </p>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "system-ui, sans-serif", fontSize: "14px" }}>
              <thead>
                <tr style={{ backgroundColor: "#1a1a2e" }}>
                  <th style={{ padding: "12px 16px", textAlign: "left", fontWeight: 700, color: "#fff" }}>Scenario</th>
                  <th style={{ padding: "12px 16px", textAlign: "right", fontWeight: 700, color: "#fff" }}>Hours Lost/Day</th>
                  <th style={{ padding: "12px 16px", textAlign: "right", fontWeight: 700, color: "#fff" }}>@$250/hr</th>
                  <th style={{ padding: "12px 16px", textAlign: "right", fontWeight: 700, color: "#fff" }}>Annual Impact</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["End-of-day reconstruction (avg loss)", "0.5 hrs", "$125/day", "$32,500/yr"],
                  ["&quot;Too small to bill&quot; write-offs", "0.3 hrs", "$75/day", "$19,500/yr"],
                  ["Voluntary write-downs at billing", "0.2 hrs", "$50/day", "$13,000/yr"],
                  ["Total recoverable (conservative)", "1.0 hrs", "$250/day", "$65,000/yr"],
                ].map(([scenario, hours, daily, annual], i) => (
                  <tr key={scenario as string} style={{ borderBottom: "1px solid #e5e7eb", backgroundColor: i === 3 ? "#f0fdf4" : (i % 2 === 0 ? "#fff" : "#f9fafb") }}>
                    <td style={{ padding: "11px 16px", fontWeight: i === 3 ? 700 : 400 }}>{scenario}</td>
                    <td style={{ padding: "11px 16px", textAlign: "right", color: "#6b7280" }}>{hours}</td>
                    <td style={{ padding: "11px 16px", textAlign: "right", color: "#6b7280" }}>{daily}</td>
                    <td style={{ padding: "11px 16px", textAlign: "right", fontWeight: 700, color: i === 3 ? "#15803d" : "#4b5563" }}>{annual}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "13px", color: "#6b7280", marginTop: "8px" }}>Assumes 260 working days/year, $250/hr average Ontario solo lawyer rate.</p>
        </section>

        {/* Software section */}
        <section style={{ marginBottom: "48px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "16px" }}>What to Look For in Time Tracking Software</h2>
          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", fontFamily: "system-ui, sans-serif", marginBottom: "16px" }}>
            Standalone time tracking apps (Toggl, Harvest, Clockify) miss the integration that makes time tracking actually useful for lawyers. You need:
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "16px" }}>
            {[
              ["Live timer with one-click stop/start", "Start a timer directly from the matter page. No friction means more timers started."],
              ["Auto-prefill from active timer", "When you stop the timer, the elapsed time pre-fills the time entry form. No manual calculation."],
              ["Matter-linked entries", "Time entries linked to specific client/matter — not just a description. This feeds directly into invoice generation."],
              ["One-click invoice generation", "Select unbilled time entries, review, and generate a draft invoice. No manual line-item rebuilding."],
              ["CSV export for reporting", "Export time log data for tax purposes, client reporting, or analysis in Excel/Sheets."],
              ["AI chat for time entry", "Log time via natural language: &quot;Log 30 minutes to Smith RE Closing for reviewing closing documents.&quot;"],
            ].map(([title, desc]) => (
              <div key={title as string} style={{ border: "1px solid #e5e7eb", borderRadius: "8px", padding: "18px" }}>
                <h3 style={{ fontSize: "14px", fontWeight: 700, marginBottom: "8px", fontFamily: "system-ui, sans-serif", color: "#1a1a2e" }}>{title as string}</h3>
                <p style={{ fontSize: "13px", lineHeight: 1.7, color: "#4b5563", fontFamily: "system-ui, sans-serif" }}>{desc as string}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div style={{ backgroundColor: "#1a1a2e", borderRadius: "12px", padding: "40px", textAlign: "center" }}>
          <h3 style={{ fontSize: "22px", fontWeight: 700, marginBottom: "12px", color: "#fff" }}>
            Stop Leaving Revenue on the Table
          </h3>
          <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.7)", marginBottom: "24px", fontFamily: "system-ui, sans-serif", maxWidth: "480px", margin: "0 auto 24px" }}>
            Atticus includes a live timer, matter-linked time entries, one-click invoice generation, and the ability to log time via AI chat. Try it free for 14 days.
          </p>
          <Link href="/sign-up" style={{ backgroundColor: "#fff", color: "#1a1a2e", padding: "12px 28px", borderRadius: "6px", textDecoration: "none", fontFamily: "system-ui, sans-serif", fontWeight: 700, fontSize: "15px" }}>
            Start Free Trial
          </Link>
          <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.4)", marginTop: "12px" }}>No credit card · $149 CAD/mo · Cancel anytime</p>
        </div>
      </article>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid #e5e7eb", padding: "32px 24px", backgroundColor: "#f9fafb" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "16px", fontSize: "13px", fontFamily: "system-ui, sans-serif" }}>
          <Link href="/blog" style={{ color: "#6b7280", textDecoration: "none" }}>← All Posts</Link>
          <Link href="/blog/ontario-lawyer-hourly-rates" style={{ color: "#6b7280", textDecoration: "none" }}>Ontario Lawyer Rates 2026</Link>
          <Link href="/blog/law-firm-billing-software-ontario" style={{ color: "#6b7280", textDecoration: "none" }}>Billing Software Guide</Link>
          <Link href="/blog/trust-accounting-guide-ontario" style={{ color: "#6b7280", textDecoration: "none" }}>Trust Accounting Guide</Link>
          <Link href="/pricing" style={{ color: "#6b7280", textDecoration: "none" }}>Pricing</Link>
        </div>
      </footer>
    </div>
  );
}
