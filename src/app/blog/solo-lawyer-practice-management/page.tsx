import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "The Solo Lawyer's Practice Management Playbook | Atticus",
  description:
    "Running a solo law practice means you're the lawyer, the bookkeeper, and the admin. How Ontario solo lawyers are using AI to eliminate admin overhead and focus on lawyering.",
  openGraph: {
    title: "The Solo Lawyer's Practice Management Playbook",
    description:
      "Running a solo law practice means you're the lawyer, the bookkeeper, and the admin. Here's how Ontario solo lawyers are using AI to eliminate the admin overhead.",
    type: "article",
    url: "https://getatticus.ca/blog/solo-lawyer-practice-management",
  },
  alternates: { canonical: "https://getatticus.ca/blog/solo-lawyer-practice-management" },
};

const jsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "The Solo Lawyer's Practice Management Playbook",
  description:
    "Running a solo law practice means you're the lawyer, the bookkeeper, and the admin. How Ontario solo lawyers are using AI to eliminate admin overhead and focus on lawyering.",
  datePublished: "2026-03-10",
  dateModified: "2026-03-10",
  author: { "@type": "Organization", name: "Atticus" },
  publisher: { "@type": "Organization", name: "Atticus", url: "https://getatticus.ca" },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://getatticus.ca/blog/solo-lawyer-practice-management",
  },
});

const ADMIN_TASKS = [
  { task: "Transcribing client meeting notes", hours: "1-2 hrs/meeting", aiSolution: "Auto-transcribed and summarized on upload" },
  { task: "Extracting dates from incoming documents", hours: "15-30 min/doc", aiSolution: "Automatically extracted and diaried" },
  { task: "Trust account reconciliation", hours: "2-4 hrs/month", aiSolution: "Running balance, per-client ledger, CSV export" },
  { task: "Billing time reconstruction", hours: "1-2 hrs/week", aiSolution: "Live timer + auto-prefill from document processing time" },
  { task: "Conflict of interest checks", hours: "20-40 min/new client", aiSolution: "AI check against all clients and entities in seconds" },
  { task: "Client intake forms", hours: "Ongoing phone tag", aiSolution: "Shareable public intake form, auto-linked to client record" },
  { task: "Document searches", hours: "Variable — often slow", aiSolution: "Semantic search across all documents and entities" },
];

const PILLARS = [
  {
    n: "01",
    title: "Deadlines first, everything else second",
    body: "The single most dangerous thing that can happen to a solo practice is missing a deadline. Set up automated deadline extraction from every incoming document, and get a daily morning briefing. Nothing else matters if the limitation period slips.",
  },
  {
    n: "02",
    title: "Your time is your inventory",
    body: "Every six-minute increment you don't capture is revenue gone. Set up a live timer, and make it dead simple to log time from any page in your practice system — not just when you're in the billing module.",
  },
  {
    n: "03",
    title: "Trust accounting must be airtight",
    body: "LSO By-Law 9 is not optional. Trust accounting errors can end your license. Every trust receipt and disbursement needs to be logged with the client and matter it applies to. A running per-client balance should be visible at all times.",
  },
  {
    n: "04",
    title: "Conflict checks are not optional either",
    body: "As a solo, you don't have a conflicts coordinator. Every new client intake must include a conflict check against all existing clients, adverse parties, and matter-related entities. AI can do this in seconds if your documents are searchable.",
  },
  {
    n: "05",
    title: "Automate client communication",
    body: "Use shareable client portals, automated invoice emails, and document request workflows instead of playing phone tag. Your clients get better service; you get your afternoons back.",
  },
  {
    n: "06",
    title: "Use matter templates",
    body: "Every residential real estate purchase, every will, every corporate incorporation has the same 20-step checklist. Build it once. Apply it every time. You can't miss a step you never had to remember.",
  },
];

export default function SoloLawyerPlaybookBlogPost() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", background: "#07070a", color: "#f0e8d8", minHeight: "100vh" }}>
      <Script id="article-jsonld" type="application/ld+json">{jsonLd}</Script>

      {/* NAV */}
      <nav style={{ padding: "20px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(198,146,42,0.1)" }}>
        <Link href="/" style={{ fontSize: "20px", fontWeight: 600, color: "#faf8f4", textDecoration: "none" }}>Atticus</Link>
        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          <Link href="/calculator" style={{ color: "rgba(240,232,216,0.5)", fontSize: "14px", textDecoration: "none" }}>Free Calculator</Link>
          <Link href="/sign-up" style={{ background: "#C6922A", color: "#07070a", padding: "10px 24px", textDecoration: "none", fontSize: "14px", fontWeight: 500 }}>
            Start Free Trial →
          </Link>
        </div>
      </nav>

      {/* HEADER */}
      <header style={{ padding: "72px 48px 48px", maxWidth: "760px", margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
          <Link href="/blog" style={{ fontSize: "12px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#C6922A", textDecoration: "none" }}>← Blog</Link>
          <span style={{ color: "rgba(240,232,216,0.2)" }}>·</span>
          <span style={{ fontSize: "12px", color: "rgba(240,232,216,0.4)" }}>Practice Management</span>
          <span style={{ color: "rgba(240,232,216,0.2)" }}>·</span>
          <span style={{ fontSize: "12px", color: "rgba(240,232,216,0.4)" }}>8 min read</span>
        </div>
        <h1 style={{ fontSize: "clamp(28px, 4vw, 46px)", fontWeight: 300, lineHeight: 1.15, color: "#faf8f4", marginBottom: "24px" }}>
          The Solo Lawyer&apos;s{" "}
          <em style={{ fontStyle: "italic", color: "#e8b84b" }}>Practice Management Playbook</em>
        </h1>
        <p style={{ fontSize: "18px", color: "rgba(240,232,216,0.65)", lineHeight: 1.7, marginBottom: "16px" }}>
          Running a solo law practice in Ontario means you are simultaneously the lawyer, the bookkeeper, the intake coordinator, and the billing department. The good news: most of the admin that consumes your week can be automated. Here&apos;s how.
        </p>
        <p style={{ fontSize: "13px", color: "rgba(240,232,216,0.3)" }}>March 2026 · By Atticus</p>
      </header>

      {/* ARTICLE */}
      <article style={{ padding: "0 48px 80px", maxWidth: "760px", margin: "0 auto" }}>

        <h2 style={{ fontSize: "26px", fontWeight: 400, color: "#faf8f4", margin: "0 0 20px" }}>The Real Cost of Admin for Solo Lawyers</h2>
        <p style={{ fontSize: "16px", color: "rgba(240,232,216,0.7)", lineHeight: 1.9, marginBottom: "24px" }}>
          Solo lawyers typically bill between $250 and $400 per hour. Every hour spent on non-billable admin is worth that much in lost revenue. Here&apos;s a look at common admin tasks and what AI practice management replaces them with:
        </p>

        <div style={{ overflowX: "auto", margin: "0 0 48px" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid rgba(198,146,42,0.3)" }}>
                {["Admin Task", "Typical Time", "With AI"].map(h => (
                  <th key={h} style={{ textAlign: "left", padding: "12px 16px", color: "#C6922A", fontWeight: 500 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ADMIN_TASKS.map((row, i) => (
                <tr key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.04)", background: i % 2 === 0 ? "rgba(255,255,255,0.01)" : "transparent" }}>
                  <td style={{ padding: "12px 16px", color: "#f0e8d8", verticalAlign: "top" }}>{row.task}</td>
                  <td style={{ padding: "12px 16px", color: "rgba(240,232,216,0.5)", verticalAlign: "top" }}>{row.hours}</td>
                  <td style={{ padding: "12px 16px", color: "#C6922A", verticalAlign: "top" }}>{row.aiSolution}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={{ fontSize: "26px", fontWeight: 400, color: "#faf8f4", margin: "0 0 20px" }}>The Six Pillars of Solo Practice Management</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "48px" }}>
          {PILLARS.map(p => (
            <div key={p.n} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", padding: "24px 28px" }}>
              <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                <span style={{ fontSize: "12px", color: "#C6922A", fontWeight: 700, minWidth: "24px", marginTop: "3px" }}>{p.n}</span>
                <div>
                  <h3 style={{ fontSize: "17px", fontWeight: 500, color: "#faf8f4", marginBottom: "8px" }}>{p.title}</h3>
                  <p style={{ fontSize: "14px", color: "rgba(240,232,216,0.65)", lineHeight: 1.8, margin: 0 }}>{p.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: "26px", fontWeight: 400, color: "#faf8f4", margin: "0 0 16px" }}>What a Good Week Looks Like</h2>
        <p style={{ fontSize: "16px", color: "rgba(240,232,216,0.7)", lineHeight: 1.9, marginBottom: "20px" }}>
          With a fully automated practice system, a solo lawyer&apos;s week looks different:
        </p>
        <ul style={{ listStyle: "none", padding: 0, margin: "0 0 40px", display: "flex", flexDirection: "column", gap: "12px" }}>
          {[
            "Monday morning: review the AI briefing — overdue deadlines, what's due this week, outstanding invoices, negative trust balances. 10 minutes.",
            "New client call: run the conflict check before the call ends. Send the intake form link. File opens automatically.",
            "Court appearance: record audio on your phone. Upload it when you're back. The transcript and summary are waiting within minutes.",
            "End of week: send invoices for all unbilled time logged during the week. One click per client.",
            "Trust receipts: logged at the moment they happen, tied to the client and matter. No Friday reconciliation scramble.",
          ].map((item, i) => (
            <li key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
              <span style={{ color: "#C6922A", minWidth: "20px", marginTop: "2px" }}>→</span>
              <span style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.7 }}>{item}</span>
            </li>
          ))}
        </ul>

        <h2 style={{ fontSize: "26px", fontWeight: 400, color: "#faf8f4", margin: "0 0 16px" }}>The Ontario Matter Templates Worth Using</h2>
        <p style={{ fontSize: "16px", color: "rgba(240,232,216,0.7)", lineHeight: 1.9, marginBottom: "20px" }}>
          Ontario solo lawyers tend to concentrate in a few practice areas. Each area has a standard set of tasks — there&apos;s no reason to rebuild the checklist every time:
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "40px" }}>
          {[
            "Residential Real Estate Purchase",
            "Residential Real Estate Sale",
            "Will and Powers of Attorney",
            "Corporate Incorporation",
            "Employment Agreement Review",
            "Civil Litigation",
            "Separation Agreement",
            "Estate Administration",
          ].map(t => (
            <span key={t} style={{ background: "rgba(198,146,42,0.08)", border: "1px solid rgba(198,146,42,0.15)", padding: "8px 16px", fontSize: "13px", color: "rgba(240,232,216,0.7)" }}>{t}</span>
          ))}
        </div>
        <p style={{ fontSize: "16px", color: "rgba(240,232,216,0.7)", lineHeight: 1.9, marginBottom: "40px" }}>
          Atticus includes pre-populated action item checklists for all eight matter types. Open a matter, select the type, and your standard task list is already there — with checkboxes, due dates, and a progress bar.
        </p>

        <h2 style={{ fontSize: "26px", fontWeight: 400, color: "#faf8f4", margin: "0 0 16px" }}>The AI Assistant That Knows Your Practice</h2>
        <p style={{ fontSize: "16px", color: "rgba(240,232,216,0.7)", lineHeight: 1.9, marginBottom: "20px" }}>
          The most time-leveraged thing a solo lawyer can have is an assistant who knows the entire practice — every client, every matter, every deadline, every outstanding invoice. AI makes that possible at zero additional headcount.
        </p>
        <p style={{ fontSize: "16px", color: "rgba(240,232,216,0.7)", lineHeight: 1.9, marginBottom: "40px" }}>
          Atticus Chat is an AI assistant that operates within your practice data. You can ask it: &ldquo;Who owes me money?&rdquo; &ldquo;What&apos;s Smith&apos;s trust balance?&rdquo; &ldquo;Any overdue tasks this week?&rdquo; — and get answers grounded in your actual data, not generic AI responses. You can also take action directly from chat: add a deadline, log time, create an invoice, record a trust transaction.
        </p>

        {/* CTA */}
        <div style={{ background: "rgba(198,146,42,0.07)", border: "1px solid rgba(198,146,42,0.2)", padding: "36px 40px", margin: "48px 0", textAlign: "center" }}>
          <p style={{ fontSize: "12px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#C6922A", marginBottom: "16px" }}>Ontario Legal Software</p>
          <h3 style={{ fontSize: "22px", fontWeight: 400, color: "#faf8f4", marginBottom: "12px" }}>Atticus is built for Ontario solo lawyers.</h3>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.6)", lineHeight: 1.7, marginBottom: "28px" }}>
            AI document processing, automated deadline extraction, trust accounting, billing, and conflict checks — all in one platform designed for Ontario legal practice.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/sign-up" style={{ background: "#C6922A", color: "#07070a", padding: "14px 32px", textDecoration: "none", fontSize: "15px", fontWeight: 600, display: "inline-block" }}>
              Start Free Trial →
            </Link>
            <Link href="/ontario-legal-software" style={{ border: "1px solid rgba(198,146,42,0.4)", color: "#C6922A", padding: "14px 32px", textDecoration: "none", fontSize: "15px", display: "inline-block" }}>
              See Full Feature List
            </Link>
          </div>
        </div>

        <h2 style={{ fontSize: "26px", fontWeight: 400, color: "#faf8f4", margin: "48px 0 16px" }}>The Bottom Line</h2>
        <p style={{ fontSize: "16px", color: "rgba(240,232,216,0.7)", lineHeight: 1.9, marginBottom: "20px" }}>
          Solo practice doesn&apos;t have to mean working nights and weekends just to keep up with admin. The lawyers who are thriving are the ones who have systematized everything that doesn&apos;t require a law degree, so they can spend their billable hours actually doing law.
        </p>
        <p style={{ fontSize: "16px", color: "rgba(240,232,216,0.7)", lineHeight: 1.9 }}>
          The technology is here. The question is whether you want to be one of the Ontario lawyers who uses it.
        </p>
      </article>

      <footer style={{ padding: "32px 48px", borderTop: "1px solid rgba(198,146,42,0.1)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
        <Link href="/blog" style={{ color: "rgba(240,232,216,0.3)", fontSize: "13px", textDecoration: "none" }}>← All Articles</Link>
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          <Link href="/ontario-legal-software" style={{ color: "rgba(240,232,216,0.3)", fontSize: "13px", textDecoration: "none" }}>Ontario Legal Software</Link>
          <Link href="/clio-alternative" style={{ color: "rgba(240,232,216,0.3)", fontSize: "13px", textDecoration: "none" }}>Clio Alternative</Link>
          <Link href="/pricing" style={{ color: "rgba(240,232,216,0.3)", fontSize: "13px", textDecoration: "none" }}>Pricing</Link>
        </div>
      </footer>
    </div>
  );
}
