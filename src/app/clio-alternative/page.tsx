import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Atticus vs Clio: The Better Clio Alternative for Ontario Solo Law Firms",
  description:
    "Comparing Atticus and Clio for Ontario solo and small law firms. Atticus is an AI-native practice assistant — proactive morning briefings, document AI, and conflict checks — at a fraction of Clio's cost.",
  keywords: [
    "clio alternative Ontario",
    "clio alternative canada",
    "legal practice management software alternative clio",
    "clio vs atticus",
    "solo law firm software ontario alternative clio",
    "legal software ontario small firm",
    "ai legal assistant ontario alternative",
    "clio manage alternative ontario",
    "affordable legal practice software ontario",
    "law firm software canada alternative",
  ],
  openGraph: {
    title: "Atticus vs Clio — AI-First Alternative for Ontario Law Firms",
    description:
      "Atticus sends daily briefings, transcribes meetings, and answers questions about your case files. Clio doesn't. See the comparison.",
    type: "website",
    url: "https://getatticus.ca/clio-alternative",
  },
  alternates: { canonical: "https://getatticus.ca/clio-alternative" },
};

const jsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Atticus vs Clio: Clio Alternative for Ontario Lawyers",
  url: "https://getatticus.ca/clio-alternative",
  description:
    "Comparison of Atticus and Clio for Ontario solo and small law firms.",
  mainEntity: {
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is Atticus a good Clio alternative for Ontario lawyers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Atticus is designed specifically for Ontario solo and small law firms. It includes proactive daily briefings, AI document processing, meeting transcription, semantic search across your case files, conflict of interest checking, trust accounting, and HST invoicing. Unlike Clio, Atticus is built AI-first — it proactively manages your practice rather than waiting for you to use it.",
        },
      },
      {
        "@type": "Question",
        name: "How much does Atticus cost compared to Clio?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Atticus Pro is $149 CAD/month per lawyer with a 14-day free trial and no credit card required. Clio Manage typically starts at $49 USD/month but AI features are in the Clio Duo add-on at additional cost. Atticus includes all AI features in one flat price.",
        },
      },
      {
        "@type": "Question",
        name: "Does Atticus work for Canadian law firms?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Atticus is built specifically for Canadian law firms, with all data stored in Canada, HST support, LSO Rule 3.3 AI disclosure compliance, and an Ontario Limitation Period Calculator built in. It is PIPEDA-compliant and designed for Ontario legal practice.",
        },
      },
    ],
  },
});

const features = [
  {
    category: "AI & Automation",
    atticus: [
      "Daily morning briefings (Mon–Fri, 9am) — deadlines, action items, overdue invoices",
      "6pm escalation alert if today's deadlines unresolved",
      "AI chat grounded in your actual case files (not generic AI)",
      "Meeting transcription with deadline extraction",
      "Document upload triggers automatic summary + entity extraction",
      "Email a document directly to your practice inbox for processing",
    ],
    clio: [
      "No daily briefing emails",
      "No escalation alerts",
      "Clio Duo — AI add-on at additional cost, no RAG on your files",
      "No transcription",
      "Manual document management",
      "No email intake processing",
    ],
  },
  {
    category: "Ontario-Specific Features",
    atticus: [
      "Ontario Limitation Period Calculator (Limitations Act, 2002) — built in",
      "LSO Rule 3.3 AI disclosure consent gate",
      "HST 13% support on invoices",
      "Canadian data residency (never leaves Canada)",
      "PIPEDA compliance",
    ],
    clio: [
      "No Ontario limitation period calculator",
      "No Ontario-specific AI disclosure workflow",
      "HST support",
      "Data stored in Canadian AWS regions",
      "PIPEDA compliance",
    ],
  },
  {
    category: "Practice Management",
    atticus: [
      "Clients, matters, documents, deadlines",
      "8 Ontario matter templates with pre-loaded action item checklists",
      "Conflict of interest check (name + AI severity rating)",
      "Trust account receipts, disbursements, per-client balances",
      "Invoicing with line items, HST, send to client via email",
      "Shareable client portal per matter (read-only)",
      "Client portal document upload (client submits, Atticus processes automatically)",
      "Recurring deadlines (weekly, monthly, yearly)",
      "ICS calendar export + CSV deadline export",
    ],
    clio: [
      "Clients, matters, documents, deadlines",
      "Matter templates",
      "Conflict checking",
      "Trust accounting",
      "Invoicing with Clio Payments",
      "Client portal (Clio Connect, paid add-on)",
      "Client portal document upload",
      "Recurring tasks",
      "Calendar sync",
    ],
  },
  {
    category: "Pricing",
    atticus: [
      "$149 CAD/month — all features included",
      "14-day free trial, no credit card required",
      "One price, one plan",
    ],
    clio: [
      "Clio Manage: from $49 USD/month",
      "Clio Duo (AI features): additional cost",
      "Clio Connect (portal): additional cost",
      "Multiple tiers with different feature sets",
    ],
  },
];

export default function ClioAlternativePage() {
  return (
    <>
      <Script
        id="ld-json-clio-alt"
        type="application/ld+json"
        strategy="beforeInteractive"
      >{jsonLd}</Script>

      <div style={{ fontFamily: "system-ui, sans-serif", background: "#07070a", color: "#f0e8d8", minHeight: "100vh" }}>

        {/* NAV */}
        <nav style={{ padding: "20px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(198,146,42,0.1)" }}>
          <Link href="/" style={{ fontSize: "20px", fontWeight: 600, color: "#faf8f4", textDecoration: "none" }}>Atticus</Link>
          <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
            <Link href="/#pricing" style={{ color: "rgba(240,232,216,0.5)", fontSize: "14px", textDecoration: "none" }}>Pricing</Link>
            <Link href="/calculator" style={{ color: "rgba(240,232,216,0.5)", fontSize: "14px", textDecoration: "none" }}>Free Calculator</Link>
            <Link href="/dashboard" style={{ background: "#C6922A", color: "#07070a", padding: "10px 24px", textDecoration: "none", fontSize: "14px", fontWeight: 500 }}>
              Sign In →
            </Link>
          </div>
        </nav>

        {/* HERO */}
        <section style={{ padding: "80px 48px 60px", maxWidth: "820px", margin: "0 auto" }}>
          <p style={{ fontSize: "12px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#C6922A", marginBottom: "24px" }}>
            Clio Alternative · Ontario Law Firms
          </p>
          <h1 style={{ fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 300, lineHeight: 1.1, color: "#faf8f4", marginBottom: "28px" }}>
            A better Clio alternative<br />
            <em style={{ fontStyle: "italic", color: "#e8b84b" }}>built for Ontario solo firms.</em>
          </h1>
          <p style={{ fontSize: "18px", color: "rgba(240,232,216,0.6)", maxWidth: "600px", lineHeight: 1.7, marginBottom: "40px" }}>
            Clio is practice management software. Atticus is an AI executive assistant that proactively manages your practice — sending daily briefings, transcribing meetings, extracting deadlines, and answering questions about any client file.
          </p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link href="/sign-up" style={{ background: "#C6922A", color: "#07070a", padding: "16px 40px", textDecoration: "none", fontSize: "14px", fontWeight: 500, letterSpacing: "0.1em" }}>
              Try Atticus Free →
            </Link>
            <a href="#comparison" style={{ border: "1px solid rgba(198,146,42,0.3)", color: "#C6922A", padding: "16px 40px", textDecoration: "none", fontSize: "14px" }}>
              See the Comparison
            </a>
          </div>
        </section>

        {/* KEY DIFFERENCES */}
        <section style={{ padding: "0 48px 80px", maxWidth: "820px", margin: "0 auto" }}>
          <div style={{ background: "#0d0f1a", border: "1px solid rgba(198,146,42,0.15)", borderRadius: "8px", padding: "32px 36px" }}>
            <div style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(198,146,42,0.6)", marginBottom: "20px" }}>
              The core difference
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                { icon: "📬", text: "Atticus emails you every weekday morning with everything due today, overdue items, and what's coming up. Clio doesn't send you a daily briefing." },
                { icon: "🎙️", text: "Record a client meeting, upload the audio — Atticus transcribes it and extracts every deadline and action item automatically. Clio has no meeting transcription." },
                { icon: "💬", text: "\"What were the payment terms we agreed to with Smith?\" — Atticus answers from your actual case files in seconds. Clio's AI (Clio Duo, paid add-on) can't search your documents this way." },
                { icon: "⚖️", text: "Ontario Limitation Period Calculator built into the Deadlines page. Covers Limitations Act, 2002 with one-click deadline creation. Clio has no Ontario limitation calculator." },
              ].map(d => (
                <div key={d.icon} style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                  <span style={{ fontSize: "20px", flexShrink: 0 }}>{d.icon}</span>
                  <p style={{ fontSize: "14px", color: "rgba(240,232,216,0.7)", lineHeight: 1.7, margin: 0 }}>{d.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COMPARISON TABLE */}
        <section id="comparison" style={{ padding: "0 48px 100px", maxWidth: "1000px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "36px", fontWeight: 300, color: "#faf8f4", marginBottom: "48px" }}>
            Feature comparison
          </h2>
          {features.map(section => (
            <div key={section.category} style={{ marginBottom: "48px" }}>
              <h3 style={{ fontSize: "14px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#C6922A", marginBottom: "20px" }}>{section.category}</h3>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "rgba(255,255,255,0.06)" }}>
                <div style={{ background: "#07070a", padding: "20px 24px" }}>
                  <p style={{ fontSize: "13px", fontWeight: 600, color: "#e8b84b", marginBottom: "12px" }}>Atticus</p>
                  <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                    {section.atticus.map(f => (
                      <li key={f} style={{ display: "flex", gap: "8px", marginBottom: "8px", fontSize: "13px", color: "rgba(240,232,216,0.7)", alignItems: "flex-start" }}>
                        <span style={{ color: "#22c55e", flexShrink: 0, marginTop: "2px" }}>✓</span>{f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div style={{ background: "#0a0a0d", padding: "20px 24px" }}>
                  <p style={{ fontSize: "13px", fontWeight: 600, color: "rgba(240,232,216,0.4)", marginBottom: "12px" }}>Clio</p>
                  <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                    {section.clio.map(f => (
                      <li key={f} style={{ display: "flex", gap: "8px", marginBottom: "8px", fontSize: "13px", color: "rgba(240,232,216,0.45)", alignItems: "flex-start" }}>
                        <span style={{ color: "rgba(240,232,216,0.25)", flexShrink: 0, marginTop: "2px" }}>·</span>{f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* FAQ */}
        <section style={{ padding: "0 48px 100px", maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "36px", fontWeight: 300, color: "#faf8f4", marginBottom: "48px" }}>Common questions</h2>
          {[
            {
              q: "Is Atticus a complete Clio replacement?",
              a: "Atticus covers the core features Ontario solo lawyers use most: client and matter management, document processing, deadlines, billing, trust accounting, conflict checks, and invoicing. It doesn't have time tracking timers on mobile apps or deep court filing integrations. If you use Clio primarily for its AI and email features, Atticus is a direct upgrade. If you rely on Clio's mobile app or court integrations, you'd use both."
            },
            {
              q: "How much does Atticus cost compared to Clio?",
              a: "Atticus Pro is $149 CAD/month per lawyer — all features included. Clio Manage starts around $49 USD/month, but Clio Duo (AI features) is an expensive add-on, and Clio Connect (client portal) is a separate charge. Most solo Ontario lawyers find Atticus cheaper all-in, and it does more of the AI work automatically."
            },
            {
              q: "Can I use Atticus alongside Clio?",
              a: "Yes. Some lawyers use Atticus as their AI layer for document processing, meeting transcription, and morning briefings, while keeping Clio for billing and court filing workflows. Atticus is flexible enough to work as a standalone or as a complement."
            },
            {
              q: "Does Atticus have a Canadian data centre like Clio?",
              a: "Yes. All Atticus data is stored in Canada (Railway Canadian infrastructure), encrypted in transit and at rest, and never used to train AI models. We operate under PIPEDA and have data processing agreements with all AI sub-processors (Anthropic, OpenAI, Voyage AI)."
            },
          ].map(faq => (
            <div key={faq.q} style={{ borderBottom: "1px solid rgba(198,146,42,0.1)", paddingBottom: "28px", marginBottom: "28px" }}>
              <h3 style={{ fontSize: "17px", fontWeight: 400, color: "#faf8f4", marginBottom: "10px" }}>{faq.q}</h3>
              <p style={{ fontSize: "14px", color: "rgba(240,232,216,0.55)", lineHeight: 1.8, margin: 0 }}>{faq.a}</p>
            </div>
          ))}
        </section>

        {/* CTA */}
        <section style={{ padding: "80px 48px", background: "#0d0f1a", textAlign: "center", borderTop: "1px solid rgba(198,146,42,0.1)" }}>
          <h2 style={{ fontSize: "40px", fontWeight: 300, color: "#faf8f4", marginBottom: "16px" }}>
            Try the AI-first alternative.<br />
            <em style={{ fontStyle: "italic", color: "#e8b84b" }}>14 days free.</em>
          </h2>
          <p style={{ fontSize: "16px", color: "rgba(240,232,216,0.5)", marginBottom: "40px" }}>No credit card required. Your first briefing arrives tomorrow morning at 9am.</p>
          <Link href="/sign-up" style={{ background: "#C6922A", color: "#07070a", padding: "16px 48px", textDecoration: "none", fontSize: "14px", fontWeight: 500, letterSpacing: "0.1em", display: "inline-block" }}>
            START FREE TRIAL →
          </Link>
        </section>

        {/* FOOTER */}
        <footer style={{ padding: "32px 48px", borderTop: "1px solid rgba(198,146,42,0.1)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
          <span style={{ color: "rgba(240,232,216,0.3)", fontSize: "13px" }}>© 2026 Atticus · Ontario, Canada</span>
          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            <Link href="/" style={{ color: "rgba(240,232,216,0.3)", fontSize: "13px", textDecoration: "none" }}>Home</Link>
            <Link href="/calculator" style={{ color: "rgba(240,232,216,0.3)", fontSize: "13px", textDecoration: "none" }}>Free Calculator</Link>
            <Link href="/ontario-real-estate-lawyer" style={{ color: "rgba(240,232,216,0.3)", fontSize: "13px", textDecoration: "none" }}>Real Estate</Link>
            <Link href="/ontario-wills-estate-lawyer" style={{ color: "rgba(240,232,216,0.3)", fontSize: "13px", textDecoration: "none" }}>Wills &amp; Estate</Link>
            <Link href="/ontario-family-lawyer" style={{ color: "rgba(240,232,216,0.3)", fontSize: "13px", textDecoration: "none" }}>Family Law</Link>
            <Link href="/ontario-corporate-lawyer" style={{ color: "rgba(240,232,216,0.3)", fontSize: "13px", textDecoration: "none" }}>Corporate Law</Link>
            <Link href="/pricing" style={{ color: "rgba(240,232,216,0.3)", fontSize: "13px", textDecoration: "none" }}>Pricing</Link>
            <Link href="/privacy" style={{ color: "rgba(240,232,216,0.3)", fontSize: "13px", textDecoration: "none" }}>Privacy</Link>
          </div>
        </footer>
      </div>
    </>
  );
}
