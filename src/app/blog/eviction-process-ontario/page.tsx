import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "How to Evict a Tenant in Ontario: LTB Process Step-by-Step (2026)",
  description:
    "A complete guide to the Ontario eviction process — N4, L1, LTB hearing, enforcement. What forms to file, what timelines apply, and how Ontario landlord-tenant lawyers manage eviction files.",
  openGraph: {
    title: "How to Evict a Tenant in Ontario: LTB Process Step-by-Step (2026)",
    description:
      "Ontario LTB eviction process: N4 notice, L1 application, hearing timeline, order enforcement, and what landlord lawyers do to protect landlord rights.",
    type: "article",
    url: "https://getatticus.ca/blog/eviction-process-ontario",
  },
  alternates: { canonical: "https://getatticus.ca/blog/eviction-process-ontario" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Evict a Tenant in Ontario: LTB Process Step-by-Step (2026)",
  description:
    "Ontario LTB eviction: N4 notice, L1 application, hearing timeline, order enforcement.",
  author: { "@type": "Organization", name: "Atticus" },
  publisher: { "@type": "Organization", name: "Atticus", url: "https://getatticus.ca" },
  datePublished: "2026-03-01",
  url: "https://getatticus.ca/blog/eviction-process-ontario",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does the eviction process take in Ontario?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Ontario eviction process typically takes 3–6 months from notice to enforcement, though it varies by reason and current LTB backlogs. An N4 for non-payment requires 14 days notice, then the L1 hearing is scheduled (often 2–4 months out), then a stay period before enforcement.",
      },
    },
    {
      "@type": "Question",
      name: "Can a landlord evict a tenant without going to the LTB in Ontario?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. In Ontario, a landlord cannot self-help evict a tenant — changing locks, removing belongings, or cutting utilities. All evictions must go through the Landlord and Tenant Board (LTB). An illegal eviction exposes the landlord to significant damages.",
      },
    },
    {
      "@type": "Question",
      name: "What is the N4 form in Ontario?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The N4 is a Notice to End a Tenancy Early for Non-payment of Rent. It is the first step in the non-payment eviction process. The landlord must serve the N4, give the tenant 14 days to pay, and if they don't pay or vacate, file an L1 application with the LTB.",
      },
    },
    {
      "@type": "Question",
      name: "What forms do landlords need to evict a tenant in Ontario?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For non-payment of rent: N4 (Notice to End Tenancy) then L1 (Application to Evict a Tenant for Non-payment). For other grounds: various N forms (N5, N6, N7, N8, N12, N13) depending on the reason, then the corresponding L application to the LTB.",
      },
    },
  ],
};

export default function EvictionProcessPage() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", background: "#07070a", color: "#f0e8d8", minHeight: "100vh" }}>
      <Script id="ld-eviction" type="application/ld+json">{JSON.stringify(jsonLd)}</Script>
      <Script id="ld-eviction-faq" type="application/ld+json">{JSON.stringify(faqJsonLd)}</Script>

      <nav style={{ padding: "20px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(198,146,42,0.1)" }}>
        <Link href="/" style={{ fontSize: "20px", fontWeight: 600, color: "#faf8f4", textDecoration: "none" }}>Atticus</Link>
        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          <Link href="/blog" style={{ color: "rgba(240,232,216,0.5)", fontSize: "14px", textDecoration: "none" }}>Blog</Link>
          <Link href="/sign-up" style={{ background: "#C6922A", color: "#07070a", padding: "10px 24px", textDecoration: "none", fontSize: "14px", fontWeight: 500 }}>
            For Ontario Lawyers →
          </Link>
        </div>
      </nav>

      <header style={{ padding: "80px 48px 60px", maxWidth: "760px", margin: "0 auto" }}>
        <div style={{ display: "flex", gap: "12px", alignItems: "center", marginBottom: "24px" }}>
          <span style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#C6922A", background: "rgba(198,146,42,0.1)", padding: "3px 10px", borderRadius: "20px" }}>Landlord &amp; Tenant</span>
          <span style={{ fontSize: "12px", color: "rgba(240,232,216,0.3)" }}>March 2026 · 11 min read</span>
        </div>
        <h1 style={{ fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 300, lineHeight: 1.15, color: "#faf8f4", marginBottom: "24px" }}>
          How to Evict a Tenant in Ontario:<br />
          <em style={{ fontStyle: "italic", color: "#e8b84b" }}>LTB Process Step-by-Step</em>
        </h1>
        <p style={{ fontSize: "17px", color: "rgba(240,232,216,0.65)", lineHeight: 1.8 }}>
          Ontario has some of the strongest tenant protections in North America — which means the eviction process is strictly governed and must be followed precisely. A procedural error can invalidate months of effort and reset the clock. Here is the complete Ontario eviction process for landlords in 2026.
        </p>
      </header>

      <article style={{ padding: "0 48px 80px", maxWidth: "760px", margin: "0 auto" }}>

        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "26px", fontWeight: 400, color: "#faf8f4", marginBottom: "20px" }}>The critical rule: all evictions go through the LTB</h2>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.8, marginBottom: "20px" }}>
            Under the Residential Tenancies Act, 2006 (RTA), no landlord may evict a tenant by any means other than a Landlord and Tenant Board (LTB) order. This means:
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "24px" }}>
            {[
              "You cannot change the locks while the tenant is living there",
              "You cannot remove or restrict access to utilities (heat, electricity, water)",
              "You cannot remove the tenant&apos;s belongings",
              "You cannot harass or intimidate a tenant to leave",
              "Even after an order is granted, only the Sheriff can physically enforce it — not the landlord",
            ].map((item) => (
              <div key={item} style={{ display: "flex", gap: "12px", padding: "10px 14px", background: "rgba(220,53,69,0.06)", border: "1px solid rgba(220,53,69,0.1)" }}>
                <span style={{ color: "#e8534a", flexShrink: 0 }}>✗</span>
                <p style={{ fontSize: "14px", color: "rgba(240,232,216,0.7)", lineHeight: 1.5, margin: 0 }}>{item}</p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.8 }}>
            An illegal lockout can result in the LTB ordering the landlord to pay the tenant&apos;s moving costs, temporary accommodation costs, and up to 12 months rent as a remedy.
          </p>
        </section>

        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "26px", fontWeight: 400, color: "#faf8f4", marginBottom: "20px" }}>Common eviction grounds and the corresponding forms</h2>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(198,146,42,0.2)" }}>
                  <th style={{ padding: "12px 0", textAlign: "left", fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(240,232,216,0.4)" }}>Reason for Eviction</th>
                  <th style={{ padding: "12px 16px", textAlign: "center", fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(240,232,216,0.4)" }}>Notice Form</th>
                  <th style={{ padding: "12px 0", textAlign: "center", fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(240,232,216,0.4)" }}>LTB Application</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Non-payment of rent", "N4", "L1"],
                  ["Interference with landlord / other tenants / property", "N5", "L2"],
                  ["Illegal act", "N6", "L2"],
                  ["Serious impairment of safety", "N7", "L2"],
                  ["Persistent late payment of rent", "N8", "L2"],
                  ["Landlord&apos;s own use (landlord moving in)", "N12", "L2"],
                  ["Demolition, conversion, major repairs", "N13", "L2"],
                ].map(([reason, notice, ltb], i) => (
                  <tr key={i as number} style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                    <td style={{ padding: "12px 0", fontSize: "14px", color: "rgba(240,232,216,0.75)" }}>{reason as string}</td>
                    <td style={{ padding: "12px 16px", textAlign: "center", fontSize: "14px", color: "#C6922A", fontWeight: 600 }}>{notice as string}</td>
                    <td style={{ padding: "12px 0", textAlign: "center", fontSize: "14px", color: "rgba(240,232,216,0.6)" }}>{ltb as string}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "26px", fontWeight: 400, color: "#faf8f4", marginBottom: "20px" }}>The non-payment eviction process: step by step</h2>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.8, marginBottom: "24px" }}>
            Non-payment of rent (N4/L1) is the most common eviction type. Here is how it works:
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "24px" }}>
            {[
              {
                step: "1",
                title: "Serve the N4 Notice",
                timing: "Day 0",
                desc: "Complete the N4 form specifying the amount of rent owed, the period it covers, and the termination date (at least 14 days after service for monthly tenancies). Serve by personal delivery, leaving in mailbox, or registered mail.",
              },
              {
                step: "2",
                title: "14-day remedy period",
                timing: "Days 1–14",
                desc: "The tenant has 14 days to pay the full amount owed or vacate. If the tenant pays, the N4 is void. If they pay and this is not the first N4 for the same tenancy, you may be able to proceed anyway — check with a lawyer.",
              },
              {
                step: "3",
                title: "File L1 Application with LTB",
                timing: "Day 15+",
                desc: "If the tenant has not paid and not vacated, file the L1 Application to Evict a Tenant for Non-payment of Rent. File online via the LTB portal or in person at an LTB office. Pay the filing fee (~$201 as of 2026).",
              },
              {
                step: "4",
                title: "LTB schedules a hearing",
                timing: "2–4 months after filing",
                desc: "The LTB schedules a hearing. Current wait times vary significantly — hearings may be months away. The LTB serves the hearing notice on both parties. Review it carefully for instructions.",
              },
              {
                step: "5",
                title: "Hearing",
                timing: "Hearing date",
                desc: "Both parties present their case. For non-payment, the landlord proves the rent was owed and not paid. The tenant may raise defences (maintenance issues, Rent Geared to Income, harassment). The LTB Member issues an order — often conditional, giving the tenant one last chance to pay.",
              },
              {
                step: "6",
                title: "Order and void period",
                timing: "Post-hearing",
                desc: "A standard non-payment order gives the tenant 11 days to pay. If they pay the full amount (rent owed plus LTB fees), the order is void. If they do not pay, the order becomes enforceable.",
              },
              {
                step: "7",
                title: "Enforcement: Sheriff&apos;s warrant",
                timing: "After void period",
                desc: "File a Request to Enforce an Order with the Court Enforcement Office (Sheriff). Pay the fee (~$50–$75). The Sheriff schedules a date to attend and physically remove the tenant. Only the Sheriff can do this — the landlord cannot.",
              },
            ].map(({ step, title, timing, desc }) => (
              <div key={step} style={{ display: "flex", gap: "20px", padding: "20px 24px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                <div style={{ flexShrink: 0 }}>
                  <div style={{ width: "32px", height: "32px", background: "rgba(198,146,42,0.15)", border: "1px solid rgba(198,146,42,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: 600, color: "#C6922A", marginBottom: "4px" }}>
                    {step}
                  </div>
                  <p style={{ fontSize: "10px", color: "rgba(240,232,216,0.35)", textAlign: "center", lineHeight: 1.2 }}>{timing}</p>
                </div>
                <div>
                  <p style={{ fontSize: "14px", fontWeight: 500, color: "#faf8f4", marginBottom: "6px" }}>{title}</p>
                  <p style={{ fontSize: "13px", color: "rgba(240,232,216,0.6)", lineHeight: 1.7, margin: 0 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "26px", fontWeight: 400, color: "#faf8f4", marginBottom: "20px" }}>Common landlord mistakes that delay evictions</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "rgba(255,255,255,0.06)" }}>
            {[
              { mistake: "Incorrect rent amount on the N4", fix: "The N4 must show the exact rent owing. Overstating or understating the amount can invalidate the notice. If the tenant has made partial payments, the N4 must reflect only what is actually unpaid." },
              { mistake: "Wrong termination date on the N4", fix: "The termination date must be at least 14 days from the date the notice is served (for monthly tenancies). Count carefully. An incorrect date is grounds for the tenant to challenge the notice at the hearing." },
              { mistake: "Service errors", fix: "The N4 must be served by a permitted method: personal delivery, placing in the mailbox, or registered mail. Email and text message are not permitted service methods without the tenant&apos;s prior written consent. Improper service = invalid notice." },
              { mistake: "Filing the L1 too soon", fix: "You cannot file the L1 until the 14-day remedy period has expired and the tenant has neither paid nor vacated. Filing too early will likely result in the application being dismissed." },
              { mistake: "Not attending the hearing prepared", fix: "Bring the lease, all payment records, the N4, and proof of service. The LTB expects landlords to have their evidence organized. An unprepared landlord may receive a conditional order that benefits the tenant." },
            ].map(({ mistake, fix }) => (
              <div key={mistake} style={{ background: "#07070a", padding: "20px 24px" }}>
                <p style={{ fontSize: "14px", fontWeight: 600, color: "#e8534a", marginBottom: "6px" }}>✗ {mistake}</p>
                <p style={{ fontSize: "14px", color: "rgba(240,232,216,0.6)", lineHeight: 1.7, margin: 0 }}><span style={{ color: "#C6922A" }}>Fix: </span>{fix}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "26px", fontWeight: 400, color: "#faf8f4", marginBottom: "20px" }}>For Ontario landlord-tenant lawyers: managing LTB files with Atticus</h2>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.8, marginBottom: "20px" }}>
            High-volume LTB practice means managing dozens of files with similar timelines — N4 dates, hearing dates, order deadlines, and enforcement steps. Atticus supports landlord-tenant lawyers with:
          </p>
          <ul style={{ paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "8px" }}>
            {[
              "Deadline tracking: diarize N4 service date, 14-day expiry, L1 filing date, and hearing date automatically",
              "Document AI: extract rent amounts, lease terms, and payment history from uploaded lease agreements and payment records",
              "Daily morning briefing: every file with a hearing tomorrow appears in your 9am email",
              "Matter templates: LTB matter with pre-populated checklist from N4 through enforcement",
              "AI Draft: cover letters, hearing submissions, and enforcement requests",
            ].map((item) => (
              <li key={item} style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.7 }}>{item}</li>
            ))}
          </ul>
        </section>

        <div style={{ padding: "40px", background: "rgba(198,146,42,0.08)", border: "1px solid rgba(198,146,42,0.2)", borderRadius: "4px" }}>
          <h3 style={{ fontSize: "22px", fontWeight: 400, color: "#faf8f4", marginBottom: "12px" }}>Ontario landlord-tenant practice? Atticus tracks your LTB deadlines.</h3>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.65)", lineHeight: 1.7, marginBottom: "24px" }}>
            14-day free trial. All deadlines in your morning briefing. No missed hearing dates.
          </p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link href="/sign-up" style={{ background: "#C6922A", color: "#07070a", padding: "12px 28px", textDecoration: "none", fontSize: "14px", fontWeight: 600, display: "inline-block" }}>
              Start Free Trial →
            </Link>
            <Link href="/ontario-landlord-tenant-lawyer" style={{ border: "1px solid rgba(198,146,42,0.4)", color: "#C6922A", padding: "12px 28px", textDecoration: "none", fontSize: "14px", display: "inline-block" }}>
              Atticus for LTB Lawyers →
            </Link>
          </div>
        </div>
      </article>

      <section style={{ padding: "0 48px 80px", maxWidth: "760px", margin: "0 auto" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
          {[
            { href: "/ontario-landlord-tenant-lawyer", label: "Atticus for LTB lawyers" },
            { href: "/blog/missing-limitation-periods-ontario", label: "Missing limitation periods" },
            { href: "/blog/client-intake-ontario-lawyers", label: "Client intake guide" },
            { href: "/calculator", label: "Limitation period calculator" },
          ].map(({ href, label }) => (
            <Link key={href} href={href} style={{ color: "#C6922A", fontSize: "14px", textDecoration: "none", border: "1px solid rgba(198,146,42,0.3)", padding: "6px 16px", borderRadius: "20px" }}>
              {label}
            </Link>
          ))}
        </div>
      </section>

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
