import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Power of Attorney in Ontario: Types, Requirements, and How It Works (2026)",
  description:
    "A complete guide to powers of attorney in Ontario — Continuing Power of Attorney for Property, Power of Attorney for Personal Care, requirements under the Substitute Decisions Act, and what happens if you don't have one.",
  openGraph: {
    title: "Power of Attorney in Ontario: Types, Requirements, and How It Works (2026)",
    description:
      "Ontario POA guide: Continuing Power of Attorney for Property vs Personal Care, Substitute Decisions Act requirements, attorney duties, and why you need one.",
    type: "article",
    url: "https://getatticus.ca/blog/power-of-attorney-ontario",
  },
  alternates: { canonical: "https://getatticus.ca/blog/power-of-attorney-ontario" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Power of Attorney in Ontario: Types, Requirements, and How It Works (2026)",
  description:
    "Ontario power of attorney: types, Substitute Decisions Act requirements, attorney duties, and what happens without one.",
  author: { "@type": "Organization", name: "Atticus" },
  publisher: { "@type": "Organization", name: "Atticus", url: "https://getatticus.ca" },
  datePublished: "2026-03-01",
  url: "https://getatticus.ca/blog/power-of-attorney-ontario",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a power of attorney in Ontario?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A power of attorney is a legal document that gives another person (your attorney) the authority to act on your behalf. In Ontario, there are two main types: a Continuing Power of Attorney for Property (for financial decisions) and a Power of Attorney for Personal Care (for health and personal decisions).",
      },
    },
    {
      "@type": "Question",
      name: "What happens if I don't have a power of attorney in Ontario?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If you become incapacitated without a power of attorney, someone must apply to the court to be appointed as your guardian of property or personal care. This is expensive, time-consuming, and may result in a stranger or the Office of the Public Guardian managing your affairs.",
      },
    },
    {
      "@type": "Question",
      name: "Can a power of attorney be used after death in Ontario?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. A power of attorney automatically ends when the grantor dies. After death, the executor named in the will takes over. This is why a will and power of attorney are two separate documents — they cover different life events.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a power of attorney cost in Ontario?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A power of attorney from an Ontario lawyer typically costs $200–$500 for one document, or $400–$800 for both a Continuing POA for Property and a POA for Personal Care. When prepared alongside a will, most lawyers offer a package price of $1,100–$1,800 for a couple.",
      },
    },
    {
      "@type": "Question",
      name: "Does a power of attorney need to be notarized in Ontario?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, powers of attorney in Ontario do not need to be notarized. They require two adult witnesses who sign in the presence of the grantor. The witnesses cannot be the attorney, the attorney's spouse, the grantor's spouse, a child of the grantor, or anyone under 18.",
      },
    },
  ],
};

export default function PowerOfAttorneyPage() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", background: "#07070a", color: "#f0e8d8", minHeight: "100vh" }}>
      <Script id="ld-poa" type="application/ld+json">{JSON.stringify(jsonLd)}</Script>
      <Script id="ld-poa-faq" type="application/ld+json">{JSON.stringify(faqJsonLd)}</Script>

      {/* NAV */}
      <nav style={{ padding: "20px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(198,146,42,0.1)" }}>
        <Link href="/" style={{ fontSize: "20px", fontWeight: 600, color: "#faf8f4", textDecoration: "none" }}>Atticus</Link>
        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          <Link href="/blog" style={{ color: "rgba(240,232,216,0.5)", fontSize: "14px", textDecoration: "none" }}>Blog</Link>
          <Link href="/sign-up" style={{ background: "#C6922A", color: "#07070a", padding: "10px 24px", textDecoration: "none", fontSize: "14px", fontWeight: 500 }}>
            For Ontario Lawyers →
          </Link>
        </div>
      </nav>

      {/* HEADER */}
      <header style={{ padding: "80px 48px 60px", maxWidth: "760px", margin: "0 auto" }}>
        <div style={{ display: "flex", gap: "12px", alignItems: "center", marginBottom: "24px" }}>
          <span style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#C6922A", background: "rgba(198,146,42,0.1)", padding: "3px 10px", borderRadius: "20px" }}>Wills &amp; Estates</span>
          <span style={{ fontSize: "12px", color: "rgba(240,232,216,0.3)" }}>March 2026 · 11 min read</span>
        </div>
        <h1 style={{ fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 300, lineHeight: 1.15, color: "#faf8f4", marginBottom: "24px" }}>
          Power of Attorney in Ontario:<br />
          <em style={{ fontStyle: "italic", color: "#e8b84b" }}>Types, Requirements, and How It Works</em>
        </h1>
        <p style={{ fontSize: "17px", color: "rgba(240,232,216,0.65)", lineHeight: 1.8 }}>
          A power of attorney is one of the most important legal documents you can prepare — and one of the most overlooked. Most people focus on wills because they think about death. A power of attorney protects you in the far more likely scenario: you are alive but unable to manage your own affairs. Here is everything you need to know about Ontario powers of attorney in 2026.
        </p>
      </header>

      {/* CONTENT */}
      <article style={{ padding: "0 48px 80px", maxWidth: "760px", margin: "0 auto" }}>

        {/* TYPES */}
        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "26px", fontWeight: 400, color: "#faf8f4", marginBottom: "20px" }}>The two types of power of attorney in Ontario</h2>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.8, marginBottom: "24px" }}>
            Ontario has two distinct powers of attorney — they cover different decisions and are governed by different legislation. You can have both, one, or neither.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "rgba(255,255,255,0.06)", marginBottom: "24px" }}>
            <div style={{ background: "#07070a", padding: "32px" }}>
              <p style={{ fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#C6922A", marginBottom: "12px" }}>Type 1</p>
              <h3 style={{ fontSize: "20px", fontWeight: 400, color: "#faf8f4", marginBottom: "12px" }}>Continuing Power of Attorney for Property</h3>
              <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.8, marginBottom: "16px" }}>
                Gives your attorney authority to manage your financial and property affairs — bank accounts, investments, real estate, tax filings, paying bills, managing a business. The word &quot;continuing&quot; means it remains valid if you become mentally incapable (unlike a general POA, which ends on incapacity).
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div>
                  <p style={{ fontSize: "12px", color: "rgba(240,232,216,0.4)", marginBottom: "8px" }}>Governed by</p>
                  <p style={{ fontSize: "14px", color: "rgba(240,232,216,0.7)" }}>Substitute Decisions Act, 1992, Part I</p>
                </div>
                <div>
                  <p style={{ fontSize: "12px", color: "rgba(240,232,216,0.4)", marginBottom: "8px" }}>Takes effect</p>
                  <p style={{ fontSize: "14px", color: "rgba(240,232,216,0.7)" }}>Immediately on signing (unless restricted to incapacity)</p>
                </div>
              </div>
            </div>
            <div style={{ background: "#0d0d10", padding: "32px" }}>
              <p style={{ fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#C6922A", marginBottom: "12px" }}>Type 2</p>
              <h3 style={{ fontSize: "20px", fontWeight: 400, color: "#faf8f4", marginBottom: "12px" }}>Power of Attorney for Personal Care</h3>
              <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.8, marginBottom: "16px" }}>
                Gives your attorney authority to make decisions about your health care, medical treatment, housing, and personal life if you become mentally incapable of making those decisions yourself. This document only takes effect when you cannot make decisions yourself.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div>
                  <p style={{ fontSize: "12px", color: "rgba(240,232,216,0.4)", marginBottom: "8px" }}>Governed by</p>
                  <p style={{ fontSize: "14px", color: "rgba(240,232,216,0.7)" }}>Substitute Decisions Act, 1992, Part II</p>
                </div>
                <div>
                  <p style={{ fontSize: "12px", color: "rgba(240,232,216,0.4)", marginBottom: "8px" }}>Takes effect</p>
                  <p style={{ fontSize: "14px", color: "rgba(240,232,216,0.7)" }}>Only when you lack capacity to make personal care decisions</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* REQUIREMENTS */}
        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "26px", fontWeight: 400, color: "#faf8f4", marginBottom: "20px" }}>Requirements for a valid power of attorney in Ontario</h2>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.8, marginBottom: "24px" }}>
            Under the Substitute Decisions Act, 1992, a valid POA for Property or Personal Care must meet these requirements:
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "24px" }}>
            {[
              { req: "In writing", detail: "The POA must be in writing. There is no verbal equivalent — oral instructions do not create a valid power of attorney." },
              { req: "Signed by the grantor", detail: "The person granting the power (the grantor) must sign the document — or direct someone to sign in their presence if physically unable." },
              { req: "Two adult witnesses", detail: "Two witnesses who are both present at the same time must sign the POA. Both must be 18 or older and must witness the grantor sign." },
              { req: "Prohibited witnesses", detail: "The following cannot be witnesses: the attorney named in the document, the attorney&apos;s spouse, the grantor&apos;s spouse, a child of the grantor, anyone the grantor treats as a child, or a person whose property is under guardianship." },
              { req: "Grantor must have capacity", detail: "At the time of signing, the grantor must understand the nature and extent of the document — who is being appointed, what powers are given, and that the attorney may be able to make decisions the grantor would disagree with." },
            ].map(({ req, detail }) => (
              <div key={req} style={{ display: "flex", gap: "16px", padding: "16px 20px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                <span style={{ color: "#C6922A", flexShrink: 0, marginTop: "2px" }}>✓</span>
                <div>
                  <p style={{ fontSize: "14px", fontWeight: 500, color: "#faf8f4", marginBottom: "4px" }}>{req}</p>
                  <p style={{ fontSize: "13px", color: "rgba(240,232,216,0.6)", lineHeight: 1.6, margin: 0 }}>{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* WITHOUT A POA */}
        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "26px", fontWeight: 400, color: "#faf8f4", marginBottom: "20px" }}>What happens if you become incapacitated without a POA</h2>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.8, marginBottom: "20px" }}>
            Without a power of attorney, someone who wants to manage your affairs must apply to the Ontario Superior Court of Justice for a guardianship order. This process:
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1px", background: "rgba(255,255,255,0.06)", marginBottom: "24px" }}>
            {[
              { problem: "Takes months", desc: "A court guardianship application takes 3–6 months minimum, during which your bank accounts may be frozen and bills may go unpaid." },
              { problem: "Costs thousands", desc: "Court application fees, legal fees, and ongoing reporting requirements. Guardianship involves annual accountings to the court." },
              { problem: "Office of the Public Guardian", desc: "If no family member applies, the Office of the Public Guardian and Trustee (OPGT) may become your temporary guardian — a government office managing your finances." },
              { problem: "You lose choice", desc: "A POA lets you choose who you trust. Guardianship means a court chooses — it may not be who you would have wanted." },
            ].map(({ problem, desc }) => (
              <div key={problem} style={{ background: "#07070a", padding: "22px" }}>
                <h3 style={{ fontSize: "14px", fontWeight: 600, color: "#e8534a", marginBottom: "8px" }}>{problem}</h3>
                <p style={{ fontSize: "13px", color: "rgba(240,232,216,0.6)", lineHeight: 1.6, margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ATTORNEY DUTIES */}
        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "26px", fontWeight: 400, color: "#faf8f4", marginBottom: "20px" }}>Attorney duties under the Substitute Decisions Act</h2>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.8, marginBottom: "20px" }}>
            Being someone&apos;s attorney is a serious legal responsibility. The Substitute Decisions Act imposes specific duties on attorneys:
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {[
              "Act in the grantor&apos;s best interests, not your own",
              "Consult with the grantor wherever reasonably possible (even if they have lost formal capacity)",
              "Keep records of all decisions made on the grantor&apos;s behalf",
              "Maintain separate accounts — attorney for property must not mix the grantor&apos;s assets with their own",
              "Act consistently with the grantor&apos;s previously expressed wishes where known",
              "Apply to the court if uncertain about the scope of authority",
            ].map((duty) => (
              <div key={duty} style={{ display: "flex", gap: "12px", padding: "10px 16px", background: "rgba(255,255,255,0.03)" }}>
                <span style={{ color: "#C6922A", flexShrink: 0 }}>✓</span>
                <p style={{ fontSize: "14px", color: "rgba(240,232,216,0.7)", lineHeight: 1.6, margin: 0 }}>{duty}</p>
              </div>
            ))}
          </div>
        </section>

        {/* COSTS */}
        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "26px", fontWeight: 400, color: "#faf8f4", marginBottom: "20px" }}>Cost of a power of attorney in Ontario in 2026</h2>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(198,146,42,0.2)" }}>
                  <th style={{ padding: "12px 0", textAlign: "left", fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(240,232,216,0.4)" }}>Document</th>
                  <th style={{ padding: "12px 16px", textAlign: "right", fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(240,232,216,0.4)" }}>Typical Cost</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Continuing POA for Property (single)", "$200–$400"],
                  ["POA for Personal Care (single)", "$200–$400"],
                  ["Both POAs (single person)", "$350–$700"],
                  ["Will + 2 POAs package (single)", "$700–$1,100"],
                  ["Will + 2 POAs package (couple)", "$1,100–$1,800"],
                  ["Complex estate planning package", "$2,000+"],
                ].map(([doc, cost], i) => (
                  <tr key={i as number} style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                    <td style={{ padding: "12px 0", fontSize: "14px", color: "rgba(240,232,216,0.75)" }}>{doc as string}</td>
                    <td style={{ padding: "12px 16px", textAlign: "right", fontSize: "14px", color: "#C6922A", fontWeight: 500 }}>{cost as string}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* FOR LAWYERS */}
        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "26px", fontWeight: 400, color: "#faf8f4", marginBottom: "20px" }}>For Ontario estate lawyers: drafting POAs with Atticus</h2>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.8, marginBottom: "20px" }}>
            Atticus includes AI Draft tools that generate Powers of Attorney compliant with the Substitute Decisions Act, 1992. From a matter record, the AI drafts:
          </p>
          <ul style={{ paddingLeft: "20px", marginBottom: "24px", display: "flex", flexDirection: "column", gap: "8px" }}>
            {[
              "Continuing Power of Attorney for Property with named attorney(s) and appropriate scope",
              "Power of Attorney for Personal Care with instructions and known wishes",
              "Witness attestation clause in correct format",
              "Custom restrictions or guidance clauses if instructed",
            ].map((item) => (
              <li key={item} style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.7 }}>{item}</li>
            ))}
          </ul>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.8 }}>
            Every AI draft is reviewed and approved before it leaves your office. Atticus drafts the structure — you make the professional judgement calls.
          </p>
        </section>

        {/* CTA */}
        <div style={{ padding: "40px", background: "rgba(198,146,42,0.08)", border: "1px solid rgba(198,146,42,0.2)", borderRadius: "4px" }}>
          <h3 style={{ fontSize: "22px", fontWeight: 400, color: "#faf8f4", marginBottom: "12px" }}>Draft powers of attorney in minutes with Atticus AI</h3>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.65)", lineHeight: 1.7, marginBottom: "24px" }}>
            Atticus drafts Continuing POAs for Property and POAs for Personal Care grounded in your matter details — Substitute Decisions Act compliant, ready for your review. 14-day free trial.
          </p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link href="/sign-up" style={{ background: "#C6922A", color: "#07070a", padding: "12px 28px", textDecoration: "none", fontSize: "14px", fontWeight: 600, display: "inline-block" }}>
              Start Free Trial →
            </Link>
            <Link href="/ontario-wills-estate-lawyer" style={{ border: "1px solid rgba(198,146,42,0.4)", color: "#C6922A", padding: "12px 28px", textDecoration: "none", fontSize: "14px", display: "inline-block" }}>
              Atticus for Estate Lawyers →
            </Link>
          </div>
        </div>
      </article>

      {/* RELATED */}
      <section style={{ padding: "0 48px 80px", maxWidth: "760px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "18px", fontWeight: 400, color: "rgba(240,232,216,0.5)", marginBottom: "20px" }}>Related guides</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
          {[
            { href: "/blog/how-to-make-a-will-ontario", label: "How to make a will in Ontario" },
            { href: "/ontario-wills-estate-lawyer", label: "Atticus for estate lawyers" },
            { href: "/blog/engagement-letter-ontario-lawyers", label: "Engagement letter guide" },
            { href: "/blog/client-intake-ontario-lawyers", label: "Client intake best practices" },
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
