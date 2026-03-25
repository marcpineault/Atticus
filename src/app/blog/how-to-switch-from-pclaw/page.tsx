import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "How to Switch from PCLaw: A Step-by-Step Migration Guide for Ontario Firms | Atticus Blog",
  description:
    "How Ontario law firms can migrate from PCLaw to modern cloud-based practice management. Data export, matter migration, trust account transition, and what to do with your historical records.",
  keywords: [
    "switch from pclaw ontario",
    "migrate from pclaw canada",
    "pclaw migration guide ontario",
    "leaving pclaw ontario",
    "pclaw alternative switch",
    "pclaw data export ontario",
    "pclaw to cloud migration",
    "how to move off pclaw",
  ],
  openGraph: {
    title: "How to Switch from PCLaw: Migration Guide for Ontario Law Firms",
    description:
      "Step-by-step guide to migrating from PCLaw to modern practice management — data export, trust account transition, and what to do with historical records.",
    type: "article",
    url: "https://getatticus.ca/blog/how-to-switch-from-pclaw",
  },
  alternates: { canonical: "https://getatticus.ca/blog/how-to-switch-from-pclaw" },
};

const jsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Switch from PCLaw: A Step-by-Step Migration Guide for Ontario Firms",
  description:
    "How Ontario law firms can migrate from PCLaw to modern cloud practice management — data export, matter migration, and trust account transition.",
  datePublished: "2026-03-18",
  dateModified: "2026-03-18",
  author: { "@type": "Organization", name: "Atticus" },
  publisher: { "@type": "Organization", name: "Atticus", url: "https://getatticus.ca" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://getatticus.ca/blog/how-to-switch-from-pclaw" },
});

export default function SwitchFromPclawPage() {
  return (
    <div style={{ fontFamily: "Georgia, 'Times New Roman', serif", color: "#1a1a2e", minHeight: "100vh", backgroundColor: "#fff" }}>
      <Script id="jsonld-pclaw-switch" type="application/ld+json">{jsonLd}</Script>

      {/* Nav */}
      <nav style={{ borderBottom: "1px solid #e5e7eb", padding: "16px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Link href="/" style={{ fontFamily: "system-ui, sans-serif", fontWeight: 700, fontSize: "18px", color: "#1a1a2e", textDecoration: "none" }}>Atticus</Link>
        <div style={{ display: "flex", gap: "20px", alignItems: "center", fontFamily: "system-ui, sans-serif", fontSize: "14px" }}>
          <Link href="/blog" style={{ color: "#4b5563", textDecoration: "none" }}>Blog</Link>
          <Link href="/pclaw-alternative" style={{ color: "#4b5563", textDecoration: "none" }}>PCLaw Alternative</Link>
          <Link href="/sign-up" style={{ backgroundColor: "#1a1a2e", color: "#fff", padding: "8px 18px", borderRadius: "6px", textDecoration: "none" }}>Free Trial</Link>
        </div>
      </nav>

      <article style={{ maxWidth: "760px", margin: "0 auto", padding: "64px 24px 80px" }}>
        <div style={{ marginBottom: "48px" }}>
          <div style={{ display: "flex", gap: "12px", alignItems: "center", marginBottom: "20px", flexWrap: "wrap" }}>
            <span style={{ fontFamily: "system-ui, sans-serif", fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#6b7280", background: "#f3f4f6", padding: "3px 10px", borderRadius: "20px" }}>Practice Management</span>
            <span style={{ fontFamily: "system-ui, sans-serif", fontSize: "12px", color: "#9ca3af" }}>March 2026 · 10 min read</span>
          </div>
          <h1 style={{ fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 700, lineHeight: 1.25, marginBottom: "20px" }}>
            How to Switch from PCLaw: A Migration Guide for Ontario Law Firms
          </h1>
          <p style={{ fontSize: "18px", lineHeight: 1.7, color: "#4b5563", fontFamily: "system-ui, sans-serif" }}>
            PCLaw has been the backbone of Ontario legal accounting for decades. Switching off it feels daunting — but it&apos;s more manageable than most lawyers expect. This guide walks through the practical steps: what to export, how to handle trust account continuity, and how to set up your new platform without disrupting active matters.
          </p>
        </div>

        {/* Why now */}
        <section style={{ marginBottom: "48px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "16px" }}>Why Ontario Firms Are Finally Moving Off PCLaw</h2>
          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", fontFamily: "system-ui, sans-serif", marginBottom: "16px" }}>
            PCLaw (now owned by Thomson Reuters) is still widely used, but it&apos;s fundamentally a legacy product:
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 16px", display: "flex", flexDirection: "column", gap: "10px" }}>
            {[
              "Windows-only desktop application — no cloud access without VPN or hosted setup",
              "No AI features anywhere in the product",
              "Remote work requires IT setup — a significant barrier post-COVID",
              "Annual maintenance fees plus perpetual license costs",
              "No automatic deadline extraction from documents",
              "No client portal, no document sharing, no morning briefing",
              "Feature development has slowed substantially",
            ].map((item) => (
              <li key={item} style={{ display: "flex", gap: "8px", fontFamily: "system-ui, sans-serif", fontSize: "15px", color: "#374151" }}>
                <span style={{ color: "#6b7280", flexShrink: 0 }}>—</span> {item}
              </li>
            ))}
          </ul>
          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", fontFamily: "system-ui, sans-serif" }}>
            The migration calculus has changed: modern alternatives now fully cover trust accounting compliance, which was the main reason lawyers stayed on PCLaw despite its limitations.
          </p>
        </section>

        {/* What to do with historical data */}
        <section style={{ marginBottom: "48px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "16px" }}>The Biggest Concern: Historical Data</h2>
          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", fontFamily: "system-ui, sans-serif", marginBottom: "16px" }}>
            The single biggest barrier to switching from PCLaw is fear of losing years of client and matter history. Here&apos;s the key insight: <strong>you don&apos;t need to migrate historical data to switch platforms.</strong>
          </p>
          <div style={{ backgroundColor: "#f0fdf4", border: "1px solid #86efac", borderRadius: "8px", padding: "20px", marginBottom: "20px" }}>
            <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "15px", fontWeight: 700, color: "#166534", marginBottom: "12px" }}>The practical approach most firms use:</p>
            <ol style={{ paddingLeft: "20px", margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                "Keep PCLaw running (on your existing Windows machine) for historical record access — you don&apos;t need to cancel immediately",
                "Export your client list as CSV from PCLaw and import into the new platform",
                "Start all new matters on the new platform from a set date",
                "Close active PCLaw matters naturally as they conclude over the next 6–12 months",
                "Once all active matters have closed in PCLaw, retire it — keeping the historical database accessible offline",
              ].map((step, i) => (
                <li key={i} style={{ fontFamily: "system-ui, sans-serif", fontSize: "14px", color: "#166534", lineHeight: 1.6 }}>{step}</li>
              ))}
            </ol>
          </div>
          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", fontFamily: "system-ui, sans-serif" }}>
            LSO By-Law 9 requires you to retain trust records for 10 years. You can comply by keeping your PCLaw data accessible offline or by exporting all historical trust records to CSV before retiring the system.
          </p>
        </section>

        {/* Step by step migration */}
        <section style={{ marginBottom: "48px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "20px" }}>The PCLaw Migration: Step-by-Step</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {[
              {
                phase: "Phase 1: Before You Switch",
                timeframe: "2–4 weeks before go-live",
                steps: [
                  "Export your complete client list from PCLaw (File → Export → Client List as CSV)",
                  "Export trust ledger balances for all active clients with funds on trust",
                  "Export all open matters and their basic details",
                  "Note all active matters with outstanding trust balances — these need special attention at transition",
                  "Identify your target go-live date (ideally at a month-end for clean trust reconciliation)",
                ],
              },
              {
                phase: "Phase 2: Set Up Your New Platform",
                timeframe: "1–2 weeks before go-live",
                steps: [
                  "Import client list CSV into your new practice management platform",
                  "Configure your trust account details",
                  "Set up your billing preferences, hourly rates, and HST settings",
                  "Run a conflict check on all imported clients (use AI if available)",
                  "Test trust receipt and disbursement recording with a small test amount",
                ],
              },
              {
                phase: "Phase 3: Trust Account Transition",
                timeframe: "At go-live (ideally month-end)",
                steps: [
                  "Complete your final PCLaw monthly trust reconciliation (Form 9) for the last PCLaw month",
                  "Record opening trust balances in your new platform for all active clients with trust funds",
                  "Verify: sum of opening balances in new platform = trust bank balance at transition date",
                  "From go-live date forward, record all trust receipts and disbursements in the new platform only",
                  "Do NOT record the same transaction in both systems",
                ],
              },
              {
                phase: "Phase 4: Running Parallel (Transition Period)",
                timeframe: "Months 1–6 after go-live",
                steps: [
                  "All new matters open in the new platform — PCLaw is now read-only",
                  "As active PCLaw matters close: finalize billing, disburse trust funds, close the matter in PCLaw",
                  "Once a PCLaw matter is fully closed, open any continuation work in the new platform",
                  "Continue monthly trust reconciliation in the new platform (PCLaw matters should have $0 trust after closing)",
                  "Export PCLaw historical records to CSV/PDF for archive before the machine retires",
                ],
              },
              {
                phase: "Phase 5: Full Retirement",
                timeframe: "After all active PCLaw matters are closed",
                steps: [
                  "Export complete PCLaw trust ledger history to CSV",
                  "Export all client and matter records for archive",
                  "Store exported files in your cloud practice management system or a secure archive",
                  "Keep PCLaw installation accessible (or the exported data) for 10 years from last trust transaction",
                  "Cancel PCLaw maintenance subscription",
                ],
              },
            ].map((phase) => (
              <div key={phase.phase} style={{ border: "1px solid #e5e7eb", borderRadius: "8px", overflow: "hidden" }}>
                <div style={{ padding: "14px 20px", backgroundColor: "#1a1a2e" }}>
                  <h3 style={{ fontFamily: "system-ui, sans-serif", fontSize: "15px", fontWeight: 700, color: "#fff", margin: 0 }}>{phase.phase}</h3>
                  <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.5)", margin: "2px 0 0" }}>{phase.timeframe}</p>
                </div>
                <div style={{ padding: "16px 20px" }}>
                  <ol style={{ paddingLeft: "20px", margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                    {phase.steps.map((step) => (
                      <li key={step} style={{ fontFamily: "system-ui, sans-serif", fontSize: "14px", color: "#374151", lineHeight: 1.6 }}>{step}</li>
                    ))}
                  </ol>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Common fears addressed */}
        <section style={{ marginBottom: "48px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "16px" }}>Common Migration Fears — Addressed</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            {[
              [
                "&quot;I&apos;ll lose my trust accounting history.&quot;",
                "You won&apos;t. Export your PCLaw trust records to CSV before retiring it. Store them in your new platform or secure cloud storage. You retain full access for the 10-year LSO retention period.",
              ],
              [
                "&quot;The transition will disrupt active matters.&quot;",
                "It won&apos;t if you use the parallel approach. PCLaw remains the system of record for pre-transition matters. New matters open in the new platform. No data is touched, no matters are disrupted.",
              ],
              [
                "&quot;My legal assistant knows PCLaw — I can&apos;t retrain everyone.&quot;",
                "Modern cloud platforms are genuinely easier to learn than PCLaw. Plan for a 2–3 week adjustment period. Most practices report their team is fully comfortable within a month.",
              ],
              [
                "&quot;What if there&apos;s a discrepancy in trust balances at transition?&quot;",
                "This is why you transfer at month-end and reconcile immediately. Set the opening balances in your new platform, then reconcile them against the bank statement. Any discrepancy is a sign of an existing issue in PCLaw that should be resolved before transition.",
              ],
              [
                "&quot;I need my PCLaw data imported, not just the client list.&quot;",
                "Full data migrations are possible but complex. For solo and small firms, the parallel approach is usually simpler and lower-risk than attempting a complete migration of years of PCLaw data. Most cloud providers offer limited import assistance for key data points.",
              ],
            ].map(([fear, answer]) => (
              <div key={fear as string} style={{ border: "1px solid #e5e7eb", borderRadius: "8px", padding: "18px" }}>
                <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "14px", fontWeight: 700, color: "#1a1a2e", marginBottom: "8px" }}>{fear as string}</p>
                <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "14px", color: "#4b5563", lineHeight: 1.7, margin: 0 }}>{answer as string}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div style={{ backgroundColor: "#1a1a2e", borderRadius: "12px", padding: "40px", textAlign: "center" }}>
          <h3 style={{ fontSize: "22px", fontWeight: 700, marginBottom: "12px", color: "#fff" }}>
            Start Your Migration With a Free Trial
          </h3>
          <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.7)", marginBottom: "24px", fontFamily: "system-ui, sans-serif", maxWidth: "480px", margin: "0 auto 24px" }}>
            Try Atticus for 14 days while PCLaw stays running. Set up your trust account, import your clients, and see what AI practice management feels like before you commit.
          </p>
          <Link href="/sign-up" style={{ backgroundColor: "#fff", color: "#1a1a2e", padding: "12px 28px", borderRadius: "6px", textDecoration: "none", fontFamily: "system-ui, sans-serif", fontWeight: 700, fontSize: "15px" }}>
            Start Free Trial
          </Link>
          <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.4)", marginTop: "12px" }}>No credit card · $149 CAD/mo · Canadian infrastructure</p>
        </div>
      </article>

      <footer style={{ borderTop: "1px solid #e5e7eb", padding: "32px 24px", backgroundColor: "#f9fafb" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "16px", fontSize: "13px", fontFamily: "system-ui, sans-serif" }}>
          <Link href="/blog" style={{ color: "#6b7280", textDecoration: "none" }}>← All Posts</Link>
          <Link href="/pclaw-alternative" style={{ color: "#6b7280", textDecoration: "none" }}>PCLaw Alternative</Link>
          <Link href="/blog/trust-accounting-guide-ontario" style={{ color: "#6b7280", textDecoration: "none" }}>Trust Accounting Guide</Link>
          <Link href="/blog/form-9-trust-reconciliation-ontario" style={{ color: "#6b7280", textDecoration: "none" }}>Form 9 Guide</Link>
          <Link href="/pricing" style={{ color: "#6b7280", textDecoration: "none" }}>Pricing</Link>
        </div>
      </footer>
    </div>
  );
}
