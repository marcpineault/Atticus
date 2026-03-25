import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "How to Make a Will in Ontario: Requirements, Costs, and What Lawyers Actually Do (2026)",
  description:
    "A complete guide to making a valid will in Ontario — SLRA requirements, holograph vs witnessed wills, what happens without a will, and what an estate lawyer does during will preparation.",
  openGraph: {
    title: "How to Make a Will in Ontario: Requirements, Costs, and What Lawyers Actually Do (2026)",
    description:
      "Ontario will requirements under the Succession Law Reform Act, types of wills, witness rules, costs, and why a lawyer-drafted will is better than a DIY kit.",
    type: "article",
    url: "https://getatticus.ca/blog/how-to-make-a-will-ontario",
  },
  alternates: { canonical: "https://getatticus.ca/blog/how-to-make-a-will-ontario" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Make a Will in Ontario: Requirements, Costs, and What Lawyers Actually Do (2026)",
  description:
    "Ontario will requirements, SLRA rules, holograph vs witnessed wills, and when to hire a lawyer.",
  author: { "@type": "Organization", name: "Atticus" },
  publisher: { "@type": "Organization", name: "Atticus", url: "https://getatticus.ca" },
  datePublished: "2026-03-01",
  url: "https://getatticus.ca/blog/how-to-make-a-will-ontario",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are the legal requirements for a valid will in Ontario?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Under Ontario's Succession Law Reform Act (SLRA), a formal will must be in writing, signed at the end by the testator (or by someone else in their presence and at their direction), and witnessed by two people who are present at the same time. Witnesses cannot be beneficiaries of the will.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if you die without a will in Ontario?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If you die intestate (without a will) in Ontario, your estate is distributed according to the Succession Law Reform Act. The distribution follows a fixed formula based on surviving spouse and children. You lose control over who receives your assets, who acts as guardian for minor children, and who administers your estate.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a will cost in Ontario?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A basic will from an Ontario lawyer typically costs $400–$800 for a single person, or $700–$1,200 for a couple with mirror wills. More complex estates with trusts, multiple properties, or business interests cost more. Online will services cost $90–$200 but may not handle complex situations.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a lawyer to make a will in Ontario?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, you are not legally required to use a lawyer. A handwritten (holograph) will that is entirely in your handwriting and signed is valid in Ontario without witnesses. However, a lawyer ensures the will meets formal requirements, reflects your actual intentions, and is less likely to be challenged.",
      },
    },
  ],
};

export default function HowToMakeWillPage() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", background: "#07070a", color: "#f0e8d8", minHeight: "100vh" }}>
      <Script id="ld-will" type="application/ld+json">{JSON.stringify(jsonLd)}</Script>
      <Script id="ld-will-faq" type="application/ld+json">{JSON.stringify(faqJsonLd)}</Script>

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
          <span style={{ fontSize: "12px", color: "rgba(240,232,216,0.3)" }}>March 2026 · 10 min read</span>
        </div>
        <h1 style={{ fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 300, lineHeight: 1.15, color: "#faf8f4", marginBottom: "24px" }}>
          How to Make a Will in Ontario:<br />
          <em style={{ fontStyle: "italic", color: "#e8b84b" }}>Requirements, Costs, and What Lawyers Do</em>
        </h1>
        <p style={{ fontSize: "17px", color: "rgba(240,232,216,0.65)", lineHeight: 1.8 }}>
          Over 50% of Canadians do not have a valid will. In Ontario, dying without one means the Succession Law Reform Act decides who gets your assets, who looks after your children, and who manages your estate — not you. Here is what you need to know to make a valid Ontario will, and what an estate lawyer actually does when you hire them to draft one.
        </p>
      </header>

      {/* CONTENT */}
      <article style={{ padding: "0 48px 80px", maxWidth: "760px", margin: "0 auto" }}>

        {/* WHAT IS A WILL */}
        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "26px", fontWeight: 400, color: "#faf8f4", marginBottom: "20px" }}>What a will does (and what it doesn&apos;t)</h2>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.8, marginBottom: "20px" }}>
            A will is a legal document that records your instructions for what should happen to your property after you die. More specifically, it:
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "rgba(255,255,255,0.06)", marginBottom: "24px" }}>
            <div style={{ background: "#07070a", padding: "24px" }}>
              <p style={{ fontSize: "13px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#C6922A", marginBottom: "12px" }}>A will can</p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                {[
                  "Specify who receives your assets",
                  "Appoint an executor (estate trustee)",
                  "Name a guardian for minor children",
                  "Create testamentary trusts",
                  "Include funeral and burial instructions",
                  "Specify gifts of specific property or money",
                ].map(item => (
                  <li key={item} style={{ fontSize: "13px", color: "rgba(240,232,216,0.7)", display: "flex", gap: "8px" }}>
                    <span style={{ color: "#C6922A" }}>✓</span>{item}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ background: "#0d0d10", padding: "24px" }}>
              <p style={{ fontSize: "13px", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(240,232,216,0.4)", marginBottom: "12px" }}>A will cannot</p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                {[
                  "Override beneficiary designations on RRSPs, TFSAs, or life insurance",
                  "Override joint ownership (survives outside the estate)",
                  "Include binding funeral arrangements (often read after burial)",
                  "Remove support obligations to dependants",
                  "Deal with property held jointly with right of survivorship",
                ].map(item => (
                  <li key={item} style={{ fontSize: "13px", color: "rgba(240,232,216,0.45)", display: "flex", gap: "8px" }}>
                    <span style={{ color: "rgba(240,232,216,0.3)" }}>–</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* SLRA REQUIREMENTS */}
        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "26px", fontWeight: 400, color: "#faf8f4", marginBottom: "20px" }}>Ontario will requirements under the SLRA</h2>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.8, marginBottom: "20px" }}>
            Ontario wills are governed by the <em>Succession Law Reform Act, R.S.O. 1990, c. S.26</em>. The formal requirements for a valid will are:
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "24px" }}>
            {[
              { req: "In writing", detail: "The will must be written — either typed/printed or handwritten. An oral will is not valid in Ontario (with narrow military exceptions)." },
              { req: "Signed by the testator", detail: "The person making the will (the testator) must sign at the end of the will. Someone else can sign at the testator&apos;s direction if the testator is physically unable — but only in their presence." },
              { req: "Two adult witnesses", detail: "Two witnesses must be present at the same time when the testator signs. Both must then sign the will in the testator&apos;s presence. Witnesses must be 18 or older." },
              { req: "Witnesses cannot be beneficiaries", detail: "A witness who is also a beneficiary under the will (or the spouse of a beneficiary) may forfeit their gift. This is a common DIY will mistake — having a spouse witness the will." },
              { req: "Testator must have capacity", detail: "The testator must be of sound mind — understanding the nature and extent of their property, who their natural heirs are, and the effect of the will." },
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

        {/* TYPES */}
        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "26px", fontWeight: 400, color: "#faf8f4", marginBottom: "20px" }}>Types of wills in Ontario</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "rgba(255,255,255,0.06)", marginBottom: "24px" }}>
            {[
              {
                type: "Formal (attested) will",
                desc: "A typed or printed will signed in front of two witnesses. The standard format for lawyer-drafted wills. Provides the clearest evidence of the testator&apos;s intentions and is the least likely to be challenged.",
                best: "Most Ontarians — especially those with real property, significant assets, or complex family situations",
              },
              {
                type: "Holograph will",
                desc: "A will that is entirely written in the testator&apos;s own handwriting and signed. No witnesses required. Valid in Ontario under SLRA s. 6. Useful for urgent situations, but easy to challenge if the handwriting is questioned.",
                best: "Simple estates, urgent situations, or as a temporary measure before a formal will is prepared",
              },
              {
                type: "Notarial will",
                desc: "A will prepared and signed before a notary — common in Quebec. Not available in Ontario. If you have property in Quebec as well as Ontario, you may need wills in both provinces.",
                best: "Not applicable in Ontario — Quebec-based property only",
              },
            ].map(({ type, desc, best }) => (
              <div key={type} style={{ background: "#07070a", padding: "24px 28px" }}>
                <p style={{ fontSize: "15px", fontWeight: 600, color: "#C6922A", marginBottom: "8px" }}>{type}</p>
                <p style={{ fontSize: "14px", color: "rgba(240,232,216,0.65)", lineHeight: 1.7, marginBottom: "10px" }}>{desc}</p>
                <p style={{ fontSize: "12px", color: "rgba(240,232,216,0.35)" }}>Best for: {best}</p>
              </div>
            ))}
          </div>
        </section>

        {/* INTESTACY */}
        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "26px", fontWeight: 400, color: "#faf8f4", marginBottom: "20px" }}>What happens if you die without a will in Ontario</h2>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.8, marginBottom: "20px" }}>
            Dying intestate (without a will) in Ontario means the SLRA&apos;s intestacy rules apply. The distribution formula as of 2021:
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "rgba(255,255,255,0.06)", marginBottom: "24px" }}>
            {[
              { situation: "Spouse only, no children", dist: "Entire estate to spouse" },
              { situation: "Spouse and children", dist: "Spouse receives first $350,000 (preferential share), remainder split based on number of children and spouse" },
              { situation: "Children only, no spouse", dist: "Split equally among children (or their children if a child predeceased)" },
              { situation: "No spouse or children", dist: "To parents; if none, to siblings; if none, to next of kin; if none, to the Crown" },
            ].map(({ situation, dist }) => (
              <div key={situation} style={{ background: "#07070a", padding: "16px 24px", display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "24px" }}>
                <p style={{ fontSize: "14px", color: "rgba(240,232,216,0.65)", margin: 0 }}>{situation}</p>
                <p style={{ fontSize: "14px", color: "#C6922A", margin: 0 }}>{dist}</p>
              </div>
            ))}
          </div>
          <div style={{ background: "rgba(220,53,69,0.08)", border: "1px solid rgba(220,53,69,0.15)", padding: "24px 28px", borderRadius: "4px" }}>
            <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.8)", lineHeight: 1.7, margin: 0 }}>
              <strong style={{ color: "#e8534a" }}>Common problems with intestacy:</strong> Common-law partners (regardless of how long together) do not inherit under Ontario intestacy rules — only legal spouses do. A blended family without a will often results in outcomes the deceased would never have wanted. Unmarried partners must sue the estate under dependant&apos;s relief provisions.
            </p>
          </div>
        </section>

        {/* WHAT A LAWYER DOES */}
        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "26px", fontWeight: 400, color: "#faf8f4", marginBottom: "20px" }}>What an Ontario estate lawyer does when drafting your will</h2>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.8, marginBottom: "24px" }}>
            A DIY will kit can produce a valid document. A lawyer-drafted will does substantially more:
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1px", background: "rgba(255,255,255,0.06)", marginBottom: "24px" }}>
            {[
              { task: "Reviews the full estate picture", desc: "RRSP/TFSA beneficiary designations, life insurance, jointly-held property, real estate, corporate interests. A will only covers estate property — the lawyer identifies what falls outside the estate." },
              { task: "Recommends the right executor", desc: "Advises on executor duties, liability, and whether a trust company should be named instead of or alongside a family member." },
              { task: "Drafts testamentary trusts if needed", desc: "For minor children, beneficiaries with disabilities, or tax-efficient distribution, trusts inside the will provide structure that a basic will cannot." },
              { task: "Plans for dependant support obligations", desc: "Ontario dependant relief provisions allow a spouse, partner, or child to make a court claim if inadequately provided for. A lawyer plans around this." },
              { task: "Handles the signing ceremony", desc: "Ensures capacity is demonstrated, witnesses are appropriate, and the signing meets every formal requirement. This reduces the risk of a successful challenge." },
              { task: "Coordinates powers of attorney", desc: "A will only operates at death. Most Ontario estate lawyers also prepare a Continuing Power of Attorney for Property and a Power of Attorney for Personal Care at the same time." },
            ].map(({ task, desc }) => (
              <div key={task} style={{ background: "#07070a", padding: "22px" }}>
                <h3 style={{ fontSize: "14px", fontWeight: 600, color: "#C6922A", marginBottom: "8px" }}>{task}</h3>
                <p style={{ fontSize: "13px", color: "rgba(240,232,216,0.6)", lineHeight: 1.6, margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* COSTS */}
        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "26px", fontWeight: 400, color: "#faf8f4", marginBottom: "20px" }}>How much does a will cost in Ontario in 2026?</h2>
          <div style={{ overflowX: "auto", marginBottom: "24px" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(198,146,42,0.2)" }}>
                  <th style={{ padding: "12px 0", textAlign: "left", fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(240,232,216,0.4)" }}>Option</th>
                  <th style={{ padding: "12px 16px", textAlign: "right", fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(240,232,216,0.4)" }}>Typical Cost</th>
                  <th style={{ padding: "12px 0", textAlign: "right", fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(240,232,216,0.4)" }}>Best For</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Online will service (Willful, Epilogue)", "$90–$200", "Simple estates, no real property in multiple provinces"],
                  ["Lawyer — simple will (single)", "$400–$700", "Basic estates, clear family situation"],
                  ["Lawyer — mirror wills (couple)", "$700–$1,200", "Couples with straightforward wishes"],
                  ["Lawyer — will + 2 POAs (single)", "$700–$1,100", "Full estate planning package"],
                  ["Lawyer — will + 2 POAs (couple)", "$1,100–$1,800", "Recommended starting point for most families"],
                  ["Complex estate (trusts, business)", "$2,000–$5,000+", "Business owners, blended families, large estates"],
                ].map(([option, cost, bestFor], i) => (
                  <tr key={i as number} style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                    <td style={{ padding: "12px 0", fontSize: "14px", color: "rgba(240,232,216,0.75)" }}>{option as string}</td>
                    <td style={{ padding: "12px 16px", textAlign: "right", fontSize: "14px", color: "#C6922A", fontWeight: 500 }}>{cost as string}</td>
                    <td style={{ padding: "12px 0", textAlign: "right", fontSize: "12px", color: "rgba(240,232,216,0.4)" }}>{bestFor as string}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: "14px", color: "rgba(240,232,216,0.4)", lineHeight: 1.6 }}>
            Prices vary by city and lawyer experience. All fees are subject to HST (13%) in Ontario.
          </p>
        </section>

        {/* FOR LAWYERS */}
        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "26px", fontWeight: 400, color: "#faf8f4", marginBottom: "20px" }}>For Ontario estate lawyers: what Atticus does for wills and estates practice</h2>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.8, marginBottom: "20px" }}>
            Atticus includes specific tools for wills and estate lawyers:
          </p>
          <ul style={{ paddingLeft: "20px", marginBottom: "24px", display: "flex", flexDirection: "column", gap: "10px" }}>
            {[
              "Will matter template with pre-populated action item checklist (review beneficiary designations, confirm executor capacity, sign ceremony logistics, etc.)",
              "AI Draft tool generates SLRA-compliant will drafts and Powers of Attorney grounded in your matter notes",
              "Document processing extracts named beneficiaries, assets, and executor names from client-provided documents",
              "Daily briefing flags any overdue action items across all active estate files",
              "Atticus AI can draft engagement letters, draft client update emails, and summarize completed wills for your records",
            ].map((item) => (
              <li key={item} style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.7 }}>{item}</li>
            ))}
          </ul>
        </section>

        {/* CTA */}
        <div style={{ padding: "40px", background: "rgba(198,146,42,0.08)", border: "1px solid rgba(198,146,42,0.2)", borderRadius: "4px" }}>
          <h3 style={{ fontSize: "22px", fontWeight: 400, color: "#faf8f4", marginBottom: "12px" }}>Are you an Ontario wills and estate lawyer?</h3>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.65)", lineHeight: 1.7, marginBottom: "24px" }}>
            Atticus handles your practice admin — document processing, deadline tracking, trust accounting, and AI-drafted wills and powers of attorney. Try free for 14 days.
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
            { href: "/ontario-wills-estate-lawyer", label: "Atticus for estate lawyers" },
            { href: "/blog/engagement-letter-ontario-lawyers", label: "Engagement letter guide" },
            { href: "/blog/time-tracking-lawyers-ontario", label: "Time tracking for lawyers" },
            { href: "/blog/missing-limitation-periods-ontario", label: "Missing limitation periods" },
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
