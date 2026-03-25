import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "PCLaw Alternative for Ontario Law Firms | Atticus",
  description:
    "Moving off PCLaw? Atticus is the modern, cloud-based alternative built for Ontario lawyers — trust accounting, AI document processing, deadline tracking, and billing in one platform. Canadian data residency.",
  keywords: [
    "pclaw alternative ontario",
    "pclaw replacement ontario",
    "replace pclaw ontario law firm",
    "pclaw cloud alternative canada",
    "pclaw migration ontario",
    "legal software replace pclaw",
    "pclaw vs atticus",
    "modern pclaw alternative",
  ],
  openGraph: {
    title: "PCLaw Alternative for Ontario Law Firms — Atticus",
    description:
      "Moving off PCLaw? Atticus is the modern cloud-based alternative built for Ontario lawyers — AI-powered, Canadian data residency, $149 CAD/month.",
    type: "website",
    url: "https://getatticus.ca/pclaw-alternative",
  },
  alternates: { canonical: "https://getatticus.ca/pclaw-alternative" },
};

const jsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Atticus — PCLaw Alternative for Ontario Law Firms",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Modern cloud-based PCLaw replacement for Ontario law firms. Trust accounting, AI document processing, deadline tracking, billing, and conflict of interest checking — all Canadian infrastructure.",
  offers: {
    "@type": "Offer",
    price: "149",
    priceCurrency: "CAD",
    priceValidUntil: "2027-01-01",
    availability: "https://schema.org/InStock",
  },
  provider: { "@type": "Organization", name: "Atticus", url: "https://getatticus.ca" },
});

const faqJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does Atticus have trust accounting like PCLaw?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Atticus tracks trust receipts and disbursements per client, shows real-time balances, and alerts you if any client balance goes negative. All records comply with LSO By-Law 9. Trust ledger is exportable to CSV for your monthly reconciliation.",
      },
    },
    {
      "@type": "Question",
      name: "Is Atticus cloud-based unlike PCLaw?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Atticus is fully cloud-based — accessible from any device, anywhere. PCLaw is an on-premise Windows application. Atticus requires no installation, no server, and no IT maintenance.",
      },
    },
    {
      "@type": "Question",
      name: "Is Atticus data stored in Canada like PCLaw?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Atticus runs on Railway's Canadian infrastructure. All client data stays in Canada, consistent with PIPEDA and LSO guidance on data residency.",
      },
    },
    {
      "@type": "Question",
      name: "How much does Atticus cost compared to PCLaw?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Atticus is $149 CAD per lawyer per month — all features included. No per-module pricing, no hidden fees. Includes a 14-day free trial with no credit card required.",
      },
    },
  ],
});

const COMPARISON_ROWS = [
  { feature: "Deployment", pclaw: "On-premise Windows only", atticus: "Cloud — any device, anywhere" },
  { feature: "Data residency", pclaw: "Local server / your office", atticus: "Canadian cloud infrastructure" },
  { feature: "Trust accounting (By-Law 9)", pclaw: "✓ Yes", atticus: "✓ Yes" },
  { feature: "Per-client trust ledgers", pclaw: "✓ Yes", atticus: "✓ Yes" },
  { feature: "Negative trust balance alert", pclaw: "Manual check required", atticus: "Automated daily alert" },
  { feature: "AI document processing", pclaw: "✗ No", atticus: "✓ Auto-extracts deadlines, parties, dates" },
  { feature: "AI chat assistant", pclaw: "✗ No", atticus: "✓ Ask questions about your files" },
  { feature: "Audio transcription", pclaw: "✗ No", atticus: "✓ MP3/MP4/M4A → searchable transcript" },
  { feature: "Semantic document search", pclaw: "✗ No", atticus: "✓ Ask questions, get answers" },
  { feature: "Deadline extraction from docs", pclaw: "✗ Manual entry", atticus: "✓ Automatic from every upload" },
  { feature: "Morning briefing email", pclaw: "✗ No", atticus: "✓ Daily 9am digest" },
  { feature: "Client portal", pclaw: "✗ No", atticus: "✓ Shareable read-only link per matter" },
  { feature: "Conflict of interest check", pclaw: "Manual", atticus: "✓ AI-powered on creation" },
  { feature: "Mobile access", pclaw: "Limited (RDP only)", atticus: "✓ Full browser access" },
  { feature: "IT maintenance required", pclaw: "Yes — server updates, backups", atticus: "No — fully managed" },
  { feature: "Pricing (per lawyer/month)", pclaw: "~$100–$200+ CAD + IT costs", atticus: "$149 CAD all-inclusive" },
  { feature: "Free trial", pclaw: "✗ No", atticus: "✓ 14 days, no credit card" },
];

export default function PclawAlternativePage() {
  return (
    <div style={{ fontFamily: "Georgia, 'Times New Roman', serif", color: "#1a1a2e", minHeight: "100vh", backgroundColor: "#fff" }}>
      <Script id="jsonld-software" type="application/ld+json">{jsonLd}</Script>
      <Script id="jsonld-faq" type="application/ld+json">{faqJsonLd}</Script>

      {/* Nav */}
      <nav style={{ borderBottom: "1px solid #e5e7eb", padding: "16px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", backgroundColor: "#fff" }}>
        <Link href="/" style={{ fontFamily: "system-ui, sans-serif", fontWeight: 700, fontSize: "18px", color: "#1a1a2e", textDecoration: "none" }}>
          Atticus
        </Link>
        <div style={{ display: "flex", gap: "24px", alignItems: "center", fontFamily: "system-ui, sans-serif", fontSize: "14px" }}>
          <Link href="/clio-alternative" style={{ color: "#4b5563", textDecoration: "none" }}>vs Clio</Link>
          <Link href="/pricing" style={{ color: "#4b5563", textDecoration: "none" }}>Pricing</Link>
          <Link href="/sign-up" style={{ backgroundColor: "#1a1a2e", color: "#fff", padding: "8px 18px", borderRadius: "6px", textDecoration: "none" }}>
            Free Trial
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <header style={{ maxWidth: "880px", margin: "0 auto", padding: "72px 24px 48px" }}>
        <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", color: "#6b7280", textTransform: "uppercase", marginBottom: "16px" }}>
          PCLaw Alternative for Ontario Law Firms
        </p>
        <h1 style={{ fontSize: "clamp(28px, 4vw, 46px)", fontWeight: 700, lineHeight: 1.2, marginBottom: "24px", color: "#1a1a2e" }}>
          Ready to Move Off PCLaw?<br />Here&apos;s the Modern Ontario Alternative.
        </h1>
        <p style={{ fontSize: "18px", lineHeight: 1.7, color: "#4b5563", marginBottom: "32px", fontFamily: "system-ui, sans-serif", maxWidth: "680px" }}>
          PCLaw is an aging Windows application built for a world before the cloud, before AI, and before lawyers expected to access their practice from anywhere. Atticus is what PCLaw would be if it were rebuilt today — cloud-native, AI-powered, and built specifically for Ontario.
        </p>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <Link href="/sign-up" style={{ backgroundColor: "#1a1a2e", color: "#fff", padding: "12px 28px", borderRadius: "6px", textDecoration: "none", fontFamily: "system-ui, sans-serif", fontWeight: 700 }}>
            Start Free 14-Day Trial
          </Link>
          <Link href="/pricing" style={{ border: "1px solid #d1d5db", color: "#374151", padding: "12px 28px", borderRadius: "6px", textDecoration: "none", fontFamily: "system-ui, sans-serif", fontWeight: 600 }}>
            See Pricing
          </Link>
        </div>
        <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "13px", color: "#9ca3af", marginTop: "12px" }}>No credit card required · Canadian data residency · $149 CAD/month</p>
      </header>

      {/* Why leave PCLaw */}
      <section style={{ backgroundColor: "#fef9f0", borderTop: "1px solid #fed7aa", borderBottom: "1px solid #fed7aa", padding: "48px 24px" }}>
        <div style={{ maxWidth: "880px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "22px", fontWeight: 700, marginBottom: "24px", color: "#92400e" }}>
            Why Ontario Law Firms Are Leaving PCLaw
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px" }}>
            {[
              { title: "Still on Windows only", body: "PCLaw requires a local Windows PC or expensive RDP/virtual desktop setup. Work-from-anywhere is either painful or impossible." },
              { title: "No AI features", body: "PCLaw doesn't process documents, extract deadlines, transcribe audio, or let you search your files by asking questions in plain English." },
              { title: "IT burden", body: "Local server means you're responsible for backups, updates, security patches, and disaster recovery. That's a second job for a solo practice." },
              { title: "No client portal", body: "Clients expect a modern digital experience. PCLaw has no client portal, no secure document sharing, and no self-serve intake." },
              { title: "Stagnant development", body: "PCLaw's development has slowed significantly. The core product looks and works largely the same as it did a decade ago." },
              { title: "Hidden total cost", body: "PCLaw's licensing fee is just the start — add IT support, server hardware, remote access setup, and annual maintenance fees." },
            ].map((item) => (
              <div key={item.title} style={{ padding: "20px", backgroundColor: "#fff", borderRadius: "8px", border: "1px solid #fed7aa" }}>
                <h3 style={{ fontSize: "14px", fontWeight: 700, marginBottom: "6px", fontFamily: "system-ui, sans-serif", color: "#92400e" }}>{item.title}</h3>
                <p style={{ fontSize: "13px", lineHeight: 1.6, color: "#78350f", fontFamily: "system-ui, sans-serif" }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section style={{ maxWidth: "880px", margin: "0 auto", padding: "64px 24px" }}>
        <h2 style={{ fontSize: "26px", fontWeight: 700, marginBottom: "8px", color: "#1a1a2e" }}>
          PCLaw vs Atticus — Side-by-Side
        </h2>
        <p style={{ fontSize: "15px", color: "#6b7280", marginBottom: "32px", fontFamily: "system-ui, sans-serif" }}>
          How the two platforms compare for Ontario solo and small law firms
        </p>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "system-ui, sans-serif", fontSize: "14px" }}>
            <thead>
              <tr style={{ backgroundColor: "#f9fafb" }}>
                <th style={{ padding: "14px 16px", textAlign: "left", fontWeight: 700, borderBottom: "2px solid #e5e7eb", width: "35%" }}>Feature</th>
                <th style={{ padding: "14px 16px", textAlign: "left", fontWeight: 700, borderBottom: "2px solid #e5e7eb", color: "#6b7280" }}>PCLaw</th>
                <th style={{ padding: "14px 16px", textAlign: "left", fontWeight: 700, borderBottom: "2px solid #e5e7eb", color: "#1a1a2e", backgroundColor: "#f0f9ff" }}>Atticus</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_ROWS.map((row, i) => (
                <tr key={row.feature} style={{ borderBottom: "1px solid #e5e7eb", backgroundColor: i % 2 === 0 ? "#fff" : "#f9fafb" }}>
                  <td style={{ padding: "12px 16px", fontWeight: 600 }}>{row.feature}</td>
                  <td style={{ padding: "12px 16px", color: row.pclaw.startsWith("✗") ? "#ef4444" : "#4b5563" }}>{row.pclaw}</td>
                  <td style={{ padding: "12px 16px", color: row.atticus.startsWith("✓") ? "#15803d" : "#374151", fontWeight: row.atticus.startsWith("✓") ? 600 : 400, backgroundColor: i % 2 === 0 ? "#f0f9ff" : "#e0f2fe" }}>{row.atticus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Trust accounting callout */}
      <section style={{ backgroundColor: "#f0fdf4", borderTop: "1px solid #86efac", borderBottom: "1px solid #86efac", padding: "48px 24px" }}>
        <div style={{ maxWidth: "880px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "22px", fontWeight: 700, marginBottom: "16px", color: "#166534" }}>
            Trust Accounting That Meets LSO By-Law 9
          </h2>
          <p style={{ fontSize: "16px", lineHeight: 1.7, color: "#15803d", fontFamily: "system-ui, sans-serif", marginBottom: "16px" }}>
            Like PCLaw, Atticus handles trust receipts and disbursements per client. Unlike PCLaw, it&apos;s the only thing you need to open — no separate server, no remote desktop, no IT call on a Sunday.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
            {[
              "Per-client trust ledger",
              "Automatic negative balance alerts",
              "Morning briefing shows trust status",
              "CSV export for monthly reconciliation",
              "Disbursement records per matter",
              "Compliant with LSO By-Law 9",
            ].map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: "8px", fontFamily: "system-ui, sans-serif", fontSize: "14px", color: "#166534" }}>
                <span style={{ color: "#22c55e", fontWeight: 700 }}>✓</span> {item}
              </div>
            ))}
          </div>
          <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "13px", color: "#166534", marginTop: "16px" }}>
            Monthly reconciliation due by the 25th? Export your trust ledger to CSV in one click, whenever you need it.
          </p>
        </div>
      </section>

      {/* What you gain with Atticus */}
      <section style={{ maxWidth: "880px", margin: "0 auto", padding: "64px 24px" }}>
        <h2 style={{ fontSize: "26px", fontWeight: 700, marginBottom: "8px", color: "#1a1a2e" }}>
          What You Gain by Switching
        </h2>
        <p style={{ fontSize: "15px", color: "#6b7280", marginBottom: "32px", fontFamily: "system-ui, sans-serif" }}>
          Features PCLaw never had — and never will
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px" }}>
          {[
            {
              icon: "🤖",
              title: "AI Document Processing",
              body: "Every document you upload is automatically processed. Claude AI extracts deadlines, parties, dates, and action items. Everything becomes searchable.",
            },
            {
              icon: "🎙️",
              title: "Audio Transcription",
              body: "Upload a recorded client call, voicemail, or dictation. Atticus transcribes it, extracts key facts, and makes it searchable — all automatically.",
            },
            {
              icon: "💬",
              title: "AI Assistant (Atticus Chat)",
              body: "Ask your files questions in plain English: \"What does Smith owe me?\" \"Any deadlines this week?\" \"Summarize the Jones matter.\" Get direct answers.",
            },
            {
              icon: "📅",
              title: "Automated Deadline Briefings",
              body: "Every weekday at 9am, Atticus emails you: overdue items, today's deadlines, upcoming events, outstanding invoices, and negative trust balances.",
            },
            {
              icon: "🌐",
              title: "Work From Anywhere",
              body: "Open a browser tab. That's it. No VPN, no RDP, no server, no IT. Your full practice available on any device, anywhere.",
            },
            {
              icon: "📁",
              title: "Client Portal",
              body: "Share a secure read-only portal link with each client. Clients upload documents directly — Atticus processes them automatically and links them to the matter.",
            },
          ].map((f) => (
            <div key={f.title} style={{ padding: "24px", border: "1px solid #e5e7eb", borderRadius: "10px" }}>
              <div style={{ fontSize: "28px", marginBottom: "12px" }}>{f.icon}</div>
              <h3 style={{ fontSize: "15px", fontWeight: 700, marginBottom: "8px", fontFamily: "system-ui, sans-serif" }}>{f.title}</h3>
              <p style={{ fontSize: "14px", lineHeight: 1.65, color: "#4b5563", fontFamily: "system-ui, sans-serif" }}>{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section style={{ backgroundColor: "#f8f7f4", borderTop: "1px solid #e5e7eb", padding: "56px 24px" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "32px", color: "#1a1a2e", textAlign: "center" }}>
            PCLaw Migration Questions
          </h2>
          <div style={{ display: "grid", gap: "16px" }}>
            {[
              {
                q: "Does Atticus have trust accounting like PCLaw?",
                a: "Yes. Atticus tracks trust receipts and disbursements per client, shows real-time balances, and alerts you immediately if any client balance goes negative. Compliant with LSO By-Law 9. Trust ledger exports to CSV for monthly reconciliation.",
              },
              {
                q: "Is Atticus cloud-based unlike PCLaw?",
                a: "Yes. Atticus is fully cloud-based — accessible from any browser, any device, anywhere. PCLaw is an on-premise Windows application requiring local installation or RDP setup. Atticus requires nothing to install.",
              },
              {
                q: "Is Atticus data stored in Canada?",
                a: "Yes. Atticus runs on Railway's Canadian infrastructure. All client data stays in Canada, consistent with PIPEDA and LSO guidance on cloud data residency.",
              },
              {
                q: "How much does Atticus cost?",
                a: "$149 CAD per lawyer per month — all features included. No per-module pricing. Starts with a 14-day free trial, no credit card required.",
              },
              {
                q: "What happens to my existing PCLaw data?",
                a: "PCLaw data can be exported in various formats. Atticus support can help you get set up. For most Ontario solo practices, starting fresh in Atticus while keeping PCLaw read-only for historical reference is the simplest migration path.",
              },
            ].map((item) => (
              <div key={item.q} style={{ padding: "20px", backgroundColor: "#fff", borderRadius: "8px", border: "1px solid #e5e7eb" }}>
                <h3 style={{ fontSize: "15px", fontWeight: 700, marginBottom: "8px", fontFamily: "system-ui, sans-serif", color: "#1a1a2e" }}>{item.q}</h3>
                <p style={{ fontSize: "14px", lineHeight: 1.65, color: "#4b5563", fontFamily: "system-ui, sans-serif" }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "72px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "30px", fontWeight: 700, marginBottom: "16px", color: "#1a1a2e" }}>
            Try Atticus Free for 14 Days
          </h2>
          <p style={{ fontSize: "16px", color: "#4b5563", marginBottom: "32px", fontFamily: "system-ui, sans-serif" }}>
            No credit card required. Full access to trust accounting, AI document processing, deadline tracking, billing, and the Atticus AI assistant.
          </p>
          <Link href="/sign-up" style={{ backgroundColor: "#1a1a2e", color: "#fff", padding: "14px 36px", borderRadius: "8px", textDecoration: "none", fontFamily: "system-ui, sans-serif", fontWeight: 700, fontSize: "16px" }}>
            Get Started Free
          </Link>
          <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "13px", color: "#9ca3af", marginTop: "16px" }}>
            $149 CAD/month after trial · Cancel anytime · Canadian infrastructure
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid #e5e7eb", padding: "32px 24px", backgroundColor: "#f9fafb" }}>
        <div style={{ maxWidth: "880px", margin: "0 auto" }}>
          <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "13px", color: "#9ca3af", marginBottom: "16px", fontWeight: 700 }}>
            Also Compare
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", fontSize: "13px", fontFamily: "system-ui, sans-serif" }}>
            <Link href="/clio-alternative" style={{ color: "#6b7280", textDecoration: "none" }}>Clio Alternative</Link>
            <Link href="/ontario-legal-software" style={{ color: "#6b7280", textDecoration: "none" }}>Ontario Legal Software</Link>
            <Link href="/trust-accounting-ontario" style={{ color: "#6b7280", textDecoration: "none" }}>Trust Accounting Guide</Link>
            <Link href="/pricing" style={{ color: "#6b7280", textDecoration: "none" }}>Pricing</Link>
            <Link href="/ontario-real-estate-lawyer" style={{ color: "#6b7280", textDecoration: "none" }}>Real Estate</Link>
            <Link href="/ontario-wills-estate-lawyer" style={{ color: "#6b7280", textDecoration: "none" }}>Wills &amp; Estates</Link>
            <Link href="/ontario-family-lawyer" style={{ color: "#6b7280", textDecoration: "none" }}>Family Law</Link>
            <Link href="/ontario-civil-litigation-lawyer" style={{ color: "#6b7280", textDecoration: "none" }}>Civil Litigation</Link>
            <Link href="/calculator" style={{ color: "#6b7280", textDecoration: "none" }}>Limitation Calculator</Link>
            <Link href="/blog" style={{ color: "#6b7280", textDecoration: "none" }}>Blog</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
