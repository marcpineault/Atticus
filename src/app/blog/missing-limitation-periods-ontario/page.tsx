import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "How Ontario Lawyers Miss Limitation Periods — And How to Stop It | Atticus",
  description:
    "Missing a limitation period is one of the top causes of malpractice claims for Ontario lawyers. A practical breakdown of where it goes wrong and how AI deadline tracking helps.",
  openGraph: {
    title: "How Ontario Lawyers Miss Limitation Periods — And How to Stop It",
    description:
      "Missing a limitation period is one of the top causes of malpractice claims for Ontario lawyers. Here's where it goes wrong and what to do about it.",
    type: "article",
    url: "https://getatticus.ca/blog/missing-limitation-periods-ontario",
  },
  alternates: { canonical: "https://getatticus.ca/blog/missing-limitation-periods-ontario" },
};

const jsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How Ontario Lawyers Miss Limitation Periods — And How to Stop It",
  description:
    "Missing a limitation period is one of the top causes of malpractice claims for Ontario lawyers. A practical breakdown of where it goes wrong and how AI deadline tracking helps.",
  datePublished: "2026-03-01",
  dateModified: "2026-03-01",
  author: { "@type": "Organization", name: "Atticus" },
  publisher: { "@type": "Organization", name: "Atticus", url: "https://getatticus.ca" },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://getatticus.ca/blog/missing-limitation-periods-ontario",
  },
});

const FAILURE_MODES = [
  {
    n: "01",
    title: "The trigger date is unclear",
    body: "When exactly did the claim 'arise' or get 'discovered'? For a contract dispute, is it breach of contract, the last payment due, or when the client first called you? Many lawyers conservatively use the earliest possible date — but don't track it systematically.",
  },
  {
    n: "02",
    title: "The file sat in intake limbo",
    body: "A client calls with a slip-and-fall in January. They need to think about it. They call back in October. By then, you're 9 months into a 2-year window and the file hasn't been formally opened or diaried.",
  },
  {
    n: "03",
    title: "The municipal notice period gets missed",
    body: "Under the Municipal Act, 2001, s. 44(10), you must give written notice within 10 days of a municipal slip-and-fall. This isn't in the Limitations Act — it's easy to miss if you don't specialize in personal injury.",
  },
  {
    n: "04",
    title: "Deadline tracking lives in one system, files in another",
    body: "If your deadlines are in a spreadsheet, your calendar is in Outlook, and your files are in folders on a shared drive, you will eventually have a file that slips between the cracks during a busy month.",
  },
  {
    n: "05",
    title: "The referring lawyer assumes someone else is tracking it",
    body: "Co-counsel situations are particularly dangerous. If it isn't clearly documented whose job it is to diary the limitation period, it's no one's job.",
  },
];

const LIMITATION_TABLE = [
  ["General civil claims", "2 years", "Discovery of claim", "Limitations Act, 2002, s. 4"],
  ["Ultimate limitation period", "15 years", "Date of act/omission", "Limitations Act, 2002, s. 15"],
  ["Minor claimants", "2 years after age 18", "18th birthday", "Limitations Act, 2002, s. 6"],
  ["Municipal slip & fall notice", "10 days", "Date of incident", "Municipal Act, 2001, s. 44(10)"],
  ["Construction lien", "45 days", "Substantial performance", "Construction Act, s. 31"],
  ["Sexual assault", "No limitation", "—", "Limitations Act, 2002, s. 16(1)(h)"],
  ["Defamation", "2 years", "Publication date", "Limitations Act, 2002, s. 4"],
];

const BEST_PRACTICES = [
  "Diary the limitation period at intake, before you open the file formally — even for consultations that might not convert.",
  "Use one system for everything: deadlines, files, and calendar. Splitting these across tools creates gaps.",
  "Get a morning briefing of what's due today, this week, and overdue — not just when you think to check.",
  "For every new matter, extract key dates from the retainer and any documents as soon as they come in.",
  "Set a 60-day warning before the limitation period expires — not just a same-day reminder.",
  "For municipal claims, build a separate short-notice alert (7-day, not just 10-day) into your intake checklist.",
];

export default function MissingLimitationPeriodsBlogPost() {
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
          <span style={{ fontSize: "12px", color: "rgba(240,232,216,0.4)" }}>Deadline Management</span>
          <span style={{ color: "rgba(240,232,216,0.2)" }}>·</span>
          <span style={{ fontSize: "12px", color: "rgba(240,232,216,0.4)" }}>7 min read</span>
        </div>
        <h1 style={{ fontSize: "clamp(30px, 4vw, 48px)", fontWeight: 300, lineHeight: 1.15, color: "#faf8f4", marginBottom: "24px" }}>
          How Ontario Lawyers Miss Limitation Periods —{" "}
          <em style={{ fontStyle: "italic", color: "#e8b84b" }}>And How to Stop It</em>
        </h1>
        <p style={{ fontSize: "18px", color: "rgba(240,232,216,0.65)", lineHeight: 1.7, marginBottom: "16px" }}>
          Missing a limitation period is one of the most common — and most devastating — sources of malpractice claims for Ontario lawyers. The Limitations Act, 2002 created a tight two-year basic limitation period for most civil claims, with a 15-year ultimate period. But knowing the rules isn&apos;t enough. The real problem is workflow.
        </p>
        <p style={{ fontSize: "13px", color: "rgba(240,232,216,0.3)" }}>March 2026 · By Atticus</p>
      </header>

      {/* ARTICLE */}
      <article style={{ padding: "0 48px 80px", maxWidth: "760px", margin: "0 auto" }}>

        <div style={{ borderLeft: "3px solid #C6922A", paddingLeft: "24px", margin: "40px 0", background: "rgba(198,146,42,0.04)", padding: "24px" }}>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.8)", lineHeight: 1.8, margin: 0 }}>
            <strong style={{ color: "#e8b84b" }}>The basic rule:</strong> Under the <em>Limitations Act, 2002</em>, S.O. 2002, c. 24, Sched. B, s. 4, a proceeding shall not be commenced in respect of a claim after the second anniversary of the day on which the claim was discovered. The ultimate limitation period is 15 years from the act or omission (s. 15). There are important exceptions — minors, persons with disabilities, fraud, and more.
          </p>
        </div>

        <h2 style={{ fontSize: "26px", fontWeight: 400, color: "#faf8f4", margin: "48px 0 16px" }}>Where It Actually Goes Wrong</h2>
        <p style={{ fontSize: "16px", color: "rgba(240,232,216,0.7)", lineHeight: 1.9, marginBottom: "24px" }}>
          In conversations with Ontario solo lawyers and small firm partners, limitation period errors fall into a few consistent patterns:
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px", margin: "32px 0 40px" }}>
          {FAILURE_MODES.map(item => (
            <div key={item.n} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", padding: "24px 28px" }}>
              <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                <span style={{ fontSize: "12px", color: "#C6922A", fontWeight: 700, minWidth: "24px", marginTop: "3px" }}>{item.n}</span>
                <div>
                  <h3 style={{ fontSize: "17px", fontWeight: 500, color: "#faf8f4", marginBottom: "8px" }}>{item.title}</h3>
                  <p style={{ fontSize: "14px", color: "rgba(240,232,216,0.65)", lineHeight: 1.8, margin: 0 }}>{item.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: "26px", fontWeight: 400, color: "#faf8f4", margin: "48px 0 16px" }}>Ontario Limitation Periods You Need to Know</h2>
        <p style={{ fontSize: "16px", color: "rgba(240,232,216,0.7)", lineHeight: 1.9, marginBottom: "24px" }}>
          Here&apos;s a quick-reference breakdown of the limitation periods that trip up Ontario lawyers most often:
        </p>

        <div style={{ overflowX: "auto", margin: "0 0 40px" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid rgba(198,146,42,0.3)" }}>
                {["Claim Type", "Period", "Starting Point", "Authority"].map(h => (
                  <th key={h} style={{ textAlign: "left", padding: "12px 16px", color: "#C6922A", fontWeight: 500 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {LIMITATION_TABLE.map((row, i) => (
                <tr key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.04)", background: i % 2 === 0 ? "rgba(255,255,255,0.01)" : "transparent" }}>
                  {row.map((cell, j) => (
                    <td key={j} style={{ padding: "12px 16px", color: j === 0 ? "#f0e8d8" : "rgba(240,232,216,0.6)", verticalAlign: "top" }}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={{ fontSize: "26px", fontWeight: 400, color: "#faf8f4", margin: "48px 0 16px" }}>What a Good System Looks Like</h2>
        <p style={{ fontSize: "16px", color: "rgba(240,232,216,0.7)", lineHeight: 1.9, marginBottom: "20px" }}>
          The lawyers who don&apos;t have limitation period problems don&apos;t have better memories — they have better systems. Here&apos;s what works:
        </p>
        <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px", display: "flex", flexDirection: "column", gap: "12px" }}>
          {BEST_PRACTICES.map((item, i) => (
            <li key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
              <span style={{ color: "#C6922A", marginTop: "2px", fontSize: "16px" }}>✓</span>
              <span style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.7 }}>{item}</span>
            </li>
          ))}
        </ul>

        <h2 style={{ fontSize: "26px", fontWeight: 400, color: "#faf8f4", margin: "48px 0 16px" }}>How AI Changes This</h2>
        <p style={{ fontSize: "16px", color: "rgba(240,232,216,0.7)", lineHeight: 1.9, marginBottom: "20px" }}>
          Modern practice management software with AI document processing changes the equation. Instead of manually extracting dates from every letter, demand notice, or police report, the AI reads the document and surfaces dates, deadlines, and parties automatically.
        </p>
        <p style={{ fontSize: "16px", color: "rgba(240,232,216,0.7)", lineHeight: 1.9, marginBottom: "32px" }}>
          Atticus extracts every date and action item from uploaded documents — PDF, Word, or audio — and flags them for review. Add any to your deadline tracker with one click. The morning briefing then reminds you every day of what&apos;s overdue and what&apos;s coming up.
        </p>

        {/* Calculator CTA */}
        <div style={{ background: "rgba(198,146,42,0.07)", border: "1px solid rgba(198,146,42,0.2)", padding: "36px 40px", margin: "48px 0", textAlign: "center" }}>
          <p style={{ fontSize: "12px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#C6922A", marginBottom: "16px" }}>Free Tool</p>
          <h3 style={{ fontSize: "24px", fontWeight: 400, color: "#faf8f4", marginBottom: "12px" }}>Ontario Limitation Period Calculator</h3>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.6)", lineHeight: 1.7, marginBottom: "28px" }}>
            Enter the incident date and case type. Get all relevant limitation periods instantly — no login required.
          </p>
          <Link href="/calculator" style={{ background: "#C6922A", color: "#07070a", padding: "14px 32px", textDecoration: "none", fontSize: "15px", fontWeight: 600, display: "inline-block" }}>
            Use the Free Calculator →
          </Link>
        </div>

        <h2 style={{ fontSize: "26px", fontWeight: 400, color: "#faf8f4", margin: "48px 0 16px" }}>The Bottom Line</h2>
        <p style={{ fontSize: "16px", color: "rgba(240,232,216,0.7)", lineHeight: 1.9, marginBottom: "20px" }}>
          Missed limitation periods don&apos;t happen because lawyers are careless. They happen because manual systems fail under the volume and complexity of a growing practice. The fix isn&apos;t working harder — it&apos;s automating the parts that shouldn&apos;t require human judgment in the first place.
        </p>
        <p style={{ fontSize: "16px", color: "rgba(240,232,216,0.7)", lineHeight: 1.9 }}>
          If you&apos;re running a solo or small Ontario practice, ask yourself whether your current deadline system would catch a file that sat in intake for 9 months. If the answer is &ldquo;maybe not,&rdquo; it&apos;s worth looking at what automated practice management can do for you.
        </p>

        {/* Bottom CTA */}
        <div style={{ margin: "60px 0 0", padding: "40px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", textAlign: "center" }}>
          <p style={{ fontSize: "13px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#C6922A", marginBottom: "12px" }}>Atticus for Ontario Lawyers</p>
          <h3 style={{ fontSize: "22px", fontWeight: 400, color: "#faf8f4", marginBottom: "12px" }}>AI deadline tracking built for Ontario law firms.</h3>
          <p style={{ fontSize: "14px", color: "rgba(240,232,216,0.5)", marginBottom: "24px" }}>14-day free trial. No credit card required. Canadian infrastructure.</p>
          <Link href="/sign-up" style={{ background: "#C6922A", color: "#07070a", padding: "12px 28px", textDecoration: "none", fontSize: "14px", fontWeight: 600, display: "inline-block" }}>
            Start Free Trial →
          </Link>
        </div>
      </article>

      <footer style={{ padding: "32px 48px", borderTop: "1px solid rgba(198,146,42,0.1)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
        <Link href="/blog" style={{ color: "rgba(240,232,216,0.3)", fontSize: "13px", textDecoration: "none" }}>← All Articles</Link>
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          <Link href="/calculator" style={{ color: "rgba(240,232,216,0.3)", fontSize: "13px", textDecoration: "none" }}>Free Calculator</Link>
          <Link href="/ontario-limitation-period" style={{ color: "rgba(240,232,216,0.3)", fontSize: "13px", textDecoration: "none" }}>Limitation Period Guide</Link>
          <Link href="/pricing" style={{ color: "rgba(240,232,216,0.3)", fontSize: "13px", textDecoration: "none" }}>Pricing</Link>
        </div>
      </footer>
    </div>
  );
}
