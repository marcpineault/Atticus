import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "LSO Rules on AI for Ontario Lawyers: What You Actually Need to Do | Atticus",
  description:
    "The Law Society of Ontario has issued guidance on AI use. Here's what Rule 3.3 (confidentiality) and Rule 3.1 (competence) mean in practice for lawyers using AI tools.",
  openGraph: {
    title: "LSO Rules on AI for Ontario Lawyers: What You Actually Need to Do",
    description:
      "What Rule 3.3 and Rule 3.1 of the LSO Rules of Professional Conduct mean for Ontario lawyers using AI tools like ChatGPT, Claude, or legal AI platforms.",
    type: "article",
    url: "https://getatticus.ca/blog/lso-ai-compliance-ontario",
  },
  alternates: { canonical: "https://getatticus.ca/blog/lso-ai-compliance-ontario" },
};

const jsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "LSO Rules on AI for Ontario Lawyers: What You Actually Need to Do",
  description:
    "The Law Society of Ontario has issued guidance on AI use. What Rule 3.3 (confidentiality) and Rule 3.1 (competence) mean in practice for lawyers using AI tools.",
  datePublished: "2026-03-05",
  dateModified: "2026-03-05",
  author: { "@type": "Organization", name: "Atticus" },
  publisher: { "@type": "Organization", name: "Atticus", url: "https://getatticus.ca" },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://getatticus.ca/blog/lso-ai-compliance-ontario",
  },
});

const RULES = [
  {
    rule: "Rule 3.3 — Confidentiality",
    summary: "A lawyer at all times shall hold in strict confidence all information concerning the business and affairs of a client acquired in the course of the professional relationship and shall not divulge any such information unless expressly or impliedly authorized by the client.",
    implication:
      "If you paste client data into ChatGPT or another general-purpose AI that uses inputs for training, you may be breaching confidentiality. The key question is: where does the data go and who can access it?",
  },
  {
    rule: "Rule 3.1 — Competence",
    summary: "A lawyer shall perform all legal services undertaken on a client's behalf to the standard of a competent lawyer, which includes keeping current with developments in the law and its practice.",
    implication:
      "Competence now includes understanding AI tools you use. If you rely on AI-generated research without verifying it — and it turns out to be wrong — that may constitute incompetence under Rule 3.1.",
  },
];

const CHECKLIST = [
  {
    category: "Before Using Any AI Tool",
    items: [
      "Read the provider's privacy policy and data processing agreement.",
      "Confirm data is not used for AI model training (or get an explicit opt-out).",
      "Confirm where data is stored — ideally Canadian or EU servers.",
      "Determine if a data processing agreement (DPA) is available.",
      "Document your assessment and keep it on file.",
    ],
  },
  {
    category: "For Every Client Matter",
    items: [
      "Disclose AI use in your retainer agreement or engagement letter.",
      "Obtain client consent if using AI to process their confidential information.",
      "Verify all AI-generated legal research before relying on it.",
      "Do not submit AI-generated content to a court without reviewing it yourself.",
      "Keep a record of what AI tools were used in each matter.",
    ],
  },
  {
    category: "Ongoing Practice",
    items: [
      "Monitor LSO guidance — it continues to evolve.",
      "Train any staff who use AI tools on your firm's AI policy.",
      "Update your retainer templates at least annually to reflect AI use disclosures.",
      "Prefer AI tools built specifically for legal use with Canadian data residency.",
    ],
  },
];

export default function LsoAiComplianceBlogPost() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", background: "#07070a", color: "#f0e8d8", minHeight: "100vh" }}>
      <Script id="article-jsonld" type="application/ld+json">{jsonLd}</Script>

      {/* NAV */}
      <nav style={{ padding: "20px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(198,146,42,0.1)" }}>
        <Link href="/" style={{ fontSize: "20px", fontWeight: 600, color: "#faf8f4", textDecoration: "none" }}>Atticus</Link>
        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          <Link href="/lso-ai-guidance" style={{ color: "rgba(240,232,216,0.5)", fontSize: "14px", textDecoration: "none" }}>LSO Guidance</Link>
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
          <span style={{ fontSize: "12px", color: "rgba(240,232,216,0.4)" }}>LSO Compliance</span>
          <span style={{ color: "rgba(240,232,216,0.2)" }}>·</span>
          <span style={{ fontSize: "12px", color: "rgba(240,232,216,0.4)" }}>9 min read</span>
        </div>
        <h1 style={{ fontSize: "clamp(28px, 4vw, 46px)", fontWeight: 300, lineHeight: 1.15, color: "#faf8f4", marginBottom: "24px" }}>
          LSO Rules on AI for Ontario Lawyers:{" "}
          <em style={{ fontStyle: "italic", color: "#e8b84b" }}>What You Actually Need to Do</em>
        </h1>
        <p style={{ fontSize: "18px", color: "rgba(240,232,216,0.65)", lineHeight: 1.7, marginBottom: "16px" }}>
          The Law Society of Ontario has issued guidance on AI use in legal practice, and it touches two of the most fundamental rules in the Rules of Professional Conduct: Rule 3.3 (confidentiality) and Rule 3.1 (competence). Here is what they mean in practice.
        </p>
        <p style={{ fontSize: "13px", color: "rgba(240,232,216,0.3)" }}>March 2026 · By Atticus</p>
      </header>

      {/* ARTICLE */}
      <article style={{ padding: "0 48px 80px", maxWidth: "760px", margin: "0 auto" }}>

        <div style={{ background: "rgba(198,146,42,0.06)", border: "1px solid rgba(198,146,42,0.15)", padding: "20px 24px", marginBottom: "48px" }}>
          <p style={{ fontSize: "13px", color: "rgba(240,232,216,0.6)", lineHeight: 1.7, margin: 0 }}>
            <strong style={{ color: "#C6922A" }}>Note:</strong> This article is for informational purposes only and does not constitute legal advice. LSO guidance on AI continues to evolve. Always consult the current LSO Rules of Professional Conduct and any updated LSO guidance documents.
          </p>
        </div>

        <h2 style={{ fontSize: "26px", fontWeight: 400, color: "#faf8f4", margin: "0 0 20px" }}>The Two Rules That Matter Most</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "24px", marginBottom: "48px" }}>
          {RULES.map(r => (
            <div key={r.rule} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", padding: "28px 32px" }}>
              <h3 style={{ fontSize: "17px", fontWeight: 600, color: "#C6922A", marginBottom: "12px" }}>{r.rule}</h3>
              <p style={{ fontSize: "14px", color: "rgba(240,232,216,0.5)", lineHeight: 1.8, marginBottom: "16px", fontStyle: "italic" }}>&ldquo;{r.summary}&rdquo;</p>
              <p style={{ fontSize: "14px", color: "rgba(240,232,216,0.75)", lineHeight: 1.8, margin: 0 }}>
                <strong style={{ color: "#faf8f4" }}>In practice:</strong> {r.implication}
              </p>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: "26px", fontWeight: 400, color: "#faf8f4", margin: "0 0 16px" }}>The Core Problem with General-Purpose AI</h2>
        <p style={{ fontSize: "16px", color: "rgba(240,232,216,0.7)", lineHeight: 1.9, marginBottom: "20px" }}>
          Tools like ChatGPT, Google Gemini, and Claude are extraordinarily capable. But most of their consumer-facing products were not designed with legal confidentiality in mind. The default configuration for many of these services uses your prompts and outputs to improve their models.
        </p>
        <p style={{ fontSize: "16px", color: "rgba(240,232,216,0.7)", lineHeight: 1.9, marginBottom: "20px" }}>
          If you paste a client&apos;s name, the facts of their matter, financial details, or any identifying information into a general-purpose AI chatbot, you may be disclosing client information to a third party without consent. Under Rule 3.3, that is a problem.
        </p>
        <p style={{ fontSize: "16px", color: "rgba(240,232,216,0.7)", lineHeight: 1.9, marginBottom: "40px" }}>
          Enterprise versions of these tools (ChatGPT Enterprise, Claude for Work with a DPA) often have stronger privacy protections, but you need to verify the terms before use.
        </p>

        <h2 style={{ fontSize: "26px", fontWeight: 400, color: "#faf8f4", margin: "0 0 16px" }}>What &ldquo;Competent Use of AI&rdquo; Means Under Rule 3.1</h2>
        <p style={{ fontSize: "16px", color: "rgba(240,232,216,0.7)", lineHeight: 1.9, marginBottom: "20px" }}>
          Rule 3.1 has always required lawyers to keep current with the law. The LSO has signalled that this now includes understanding the tools used in legal practice — including AI.
        </p>
        <p style={{ fontSize: "16px", color: "rgba(240,232,216,0.7)", lineHeight: 1.9, marginBottom: "20px" }}>
          There have already been cases in Ontario and across Canada where AI-generated content contained fabricated case citations. A lawyer who submits AI-generated submissions to a court without verifying them is at risk under Rule 3.1.
        </p>
        <p style={{ fontSize: "16px", color: "rgba(240,232,216,0.7)", lineHeight: 1.9, marginBottom: "40px" }}>
          Competent use of AI does not mean avoiding AI — it means understanding what the tool does, verifying its outputs, and ensuring clients are served to a professional standard.
        </p>

        <h2 style={{ fontSize: "26px", fontWeight: 400, color: "#faf8f4", margin: "0 0 20px" }}>Your LSO AI Compliance Checklist</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "28px", marginBottom: "48px" }}>
          {CHECKLIST.map(section => (
            <div key={section.category}>
              <h3 style={{ fontSize: "13px", fontWeight: 600, color: "#C6922A", marginBottom: "14px", textTransform: "uppercase", letterSpacing: "0.1em" }}>{section.category}</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                {section.items.map((item, i) => (
                  <li key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                    <span style={{ color: "#C6922A", minWidth: "16px", marginTop: "1px" }}>☐</span>
                    <span style={{ fontSize: "14px", color: "rgba(240,232,216,0.7)", lineHeight: 1.7 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: "26px", fontWeight: 400, color: "#faf8f4", margin: "0 0 16px" }}>What to Look for in a Legal AI Platform</h2>
        <p style={{ fontSize: "16px", color: "rgba(240,232,216,0.7)", lineHeight: 1.9, marginBottom: "20px" }}>
          If you want to use AI in your practice without the compliance headache, the safest option is to use a platform that was purpose-built for legal use and has already done the privacy work:
        </p>
        <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px", display: "flex", flexDirection: "column", gap: "12px" }}>
          {[
            "Data stored in Canada — PIPEDA compliance is easier when data never leaves the country.",
            "Explicit commitment that data is never used to train AI models.",
            "Data processing agreements with all AI sub-processors (Anthropic, OpenAI, etc.).",
            "AI consent gate built into the onboarding flow, so client consent is documented.",
            "Encryption in transit and at rest.",
          ].map((item, i) => (
            <li key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
              <span style={{ color: "#C6922A", marginTop: "2px" }}>✓</span>
              <span style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.7 }}>{item}</span>
            </li>
          ))}
        </ul>

        {/* LSO guide CTA */}
        <div style={{ background: "rgba(198,146,42,0.07)", border: "1px solid rgba(198,146,42,0.2)", padding: "36px 40px", margin: "48px 0", textAlign: "center" }}>
          <p style={{ fontSize: "12px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#C6922A", marginBottom: "16px" }}>Full Guide</p>
          <h3 style={{ fontSize: "22px", fontWeight: 400, color: "#faf8f4", marginBottom: "12px" }}>LSO AI Compliance Guide for Ontario Lawyers</h3>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.6)", lineHeight: 1.7, marginBottom: "28px" }}>
            Detailed breakdown of every LSO requirement for AI use — Rule 3.3, Rule 3.1, disclosure obligations, and what to put in your retainer.
          </p>
          <Link href="/lso-ai-guidance" style={{ background: "#C6922A", color: "#07070a", padding: "14px 32px", textDecoration: "none", fontSize: "15px", fontWeight: 600, display: "inline-block" }}>
            Read the Full LSO Guidance →
          </Link>
        </div>

        <h2 style={{ fontSize: "26px", fontWeight: 400, color: "#faf8f4", margin: "48px 0 16px" }}>The Bottom Line</h2>
        <p style={{ fontSize: "16px", color: "rgba(240,232,216,0.7)", lineHeight: 1.9, marginBottom: "20px" }}>
          The LSO is not trying to ban AI from Ontario legal practice. The guidance is about using AI responsibly — in a way that protects clients and maintains professional standards. Most lawyers can satisfy their obligations by:
        </p>
        <ol style={{ padding: "0 0 0 20px", margin: "0 0 32px", display: "flex", flexDirection: "column", gap: "10px" }}>
          {[
            "Choosing AI tools with strong privacy protections and Canadian data residency.",
            "Disclosing AI use in retainers and getting client consent.",
            "Verifying AI-generated legal research before relying on it.",
            "Using AI for efficiency — not to replace professional judgment.",
          ].map((item, i) => (
            <li key={i} style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.7, paddingLeft: "8px" }}>{item}</li>
          ))}
        </ol>
        <p style={{ fontSize: "16px", color: "rgba(240,232,216,0.7)", lineHeight: 1.9 }}>
          Ontario solo and small firm lawyers who get this right will have a significant competitive advantage. Those who ignore it are taking on unnecessary risk.
        </p>

        {/* Bottom CTA */}
        <div style={{ margin: "60px 0 0", padding: "40px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", textAlign: "center" }}>
          <p style={{ fontSize: "13px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#C6922A", marginBottom: "12px" }}>Atticus for Ontario Lawyers</p>
          <h3 style={{ fontSize: "22px", fontWeight: 400, color: "#faf8f4", marginBottom: "12px" }}>Built for LSO compliance from day one.</h3>
          <p style={{ fontSize: "14px", color: "rgba(240,232,216,0.5)", marginBottom: "24px" }}>Canadian data residency. AI consent gate built in. No training on your data. 14-day free trial.</p>
          <Link href="/sign-up" style={{ background: "#C6922A", color: "#07070a", padding: "12px 28px", textDecoration: "none", fontSize: "14px", fontWeight: 600, display: "inline-block" }}>
            Start Free Trial →
          </Link>
        </div>
      </article>

      <footer style={{ padding: "32px 48px", borderTop: "1px solid rgba(198,146,42,0.1)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
        <Link href="/blog" style={{ color: "rgba(240,232,216,0.3)", fontSize: "13px", textDecoration: "none" }}>← All Articles</Link>
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          <Link href="/lso-ai-guidance" style={{ color: "rgba(240,232,216,0.3)", fontSize: "13px", textDecoration: "none" }}>LSO AI Guidance</Link>
          <Link href="/ai-for-lawyers" style={{ color: "rgba(240,232,216,0.3)", fontSize: "13px", textDecoration: "none" }}>AI for Lawyers</Link>
          <Link href="/pricing" style={{ color: "rgba(240,232,216,0.3)", fontSize: "13px", textDecoration: "none" }}>Pricing</Link>
        </div>
      </footer>
    </div>
  );
}
