import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "TimeSolv Alternative — Atticus vs TimeSolv for Ontario Law Firms",
  description:
    "Comparing TimeSolv and Atticus for Ontario lawyers. See how Atticus adds AI document intelligence, automated morning briefings, and LSO-compliant trust accounting beyond TimeSolv's time billing focus.",
  alternates: { canonical: "https://getatticus.ca/timesolv-alternative" },
  openGraph: {
    title: "TimeSolv Alternative — Atticus vs TimeSolv",
    description:
      "Ontario lawyers comparing TimeSolv with Atticus. AI practice management, trust accounting, and automated briefings for LSO-compliant Ontario law firms.",
    url: "https://getatticus.ca/timesolv-alternative",
    type: "website",
  },
};

type Feature = { feature: string; atticus: string; timesolv: string };

const features: Feature[] = [
  {
    feature: "Core focus",
    atticus: "Full AI practice management — documents, billing, trust, deadlines",
    timesolv: "Time tracking and billing with legal invoicing",
  },
  {
    feature: "AI document intelligence",
    atticus: "Extracts deadlines, parties, action items from any document",
    timesolv: "No AI document processing",
  },
  {
    feature: "Morning briefings",
    atticus: "Daily 9am email with deadlines, action items, open matters",
    timesolv: "Not available",
  },
  {
    feature: "Voice note processing",
    atticus: "Upload voice memos — transcribed, structured, filed",
    timesolv: "Not available",
  },
  {
    feature: "Ontario LSO trust accounting",
    atticus: "Full By-Law 9 compliant trust ledger and reconciliation",
    timesolv: "No trust accounting — billing and invoicing only",
  },
  {
    feature: "Time tracking",
    atticus: "Manual time entries + AI-extracted billable time from documents",
    timesolv: "Advanced time tracking with multiple timers, mobile app",
  },
  {
    feature: "Invoicing",
    atticus: "Generate invoices from time entries, Stripe online payments",
    timesolv: "Professional invoicing with batch billing and LEDES export",
  },
  {
    feature: "Matter management",
    atticus: "Clients, matters, documents, time entries all linked",
    timesolv: "Matter-based billing with budget tracking",
  },
  {
    feature: "Canadian data residency",
    atticus: "Data stored on Canadian servers",
    timesolv: "US-based servers — data stored in United States",
  },
  {
    feature: "Client intake",
    atticus: "Branded intake links auto-create client/matter records",
    timesolv: "Not included — requires separate CRM",
  },
  {
    feature: "AI chat over case files",
    atticus: "Ask questions across all documents and matters",
    timesolv: "Not available",
  },
  {
    feature: "Conflict of interest checking",
    atticus: "Built-in conflict search across clients and matters",
    timesolv: "Not available",
  },
  {
    feature: "Pricing",
    atticus: "From $49/month — all features included",
    timesolv: "From approx $34 USD/month per user (time tracking only)",
  },
  {
    feature: "Setup complexity",
    atticus: "Under 10 minutes, guided onboarding",
    timesolv: "Moderate — billing templates and matter setup required",
  },
];

const schemaJson = `{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Atticus",
  "applicationCategory": "LegalApplication",
  "operatingSystem": "Web",
  "description": "AI-powered legal practice management for Ontario solo and small law firms. Full practice management including LSO-compliant trust accounting, AI document intelligence, and automated morning briefings.",
  "url": "https://getatticus.ca",
  "offers": {
    "@type": "Offer",
    "price": "49",
    "priceCurrency": "CAD",
    "priceSpecification": {
      "@type": "UnitPriceSpecification",
      "price": "49",
      "priceCurrency": "CAD",
      "billingDuration": "P1M"
    }
  }
}`;

export default function TimeSolvAlternativePage() {
  return (
    <>
      <Script id="schema-timesolv" type="application/ld+json" strategy="beforeInteractive">
        {schemaJson}
      </Script>
      <div style={{ fontFamily: "system-ui, sans-serif", maxWidth: 900, margin: "0 auto", padding: "40px 24px", color: "#111" }}>
        <nav style={{ marginBottom: 32, fontSize: 14, color: "#666" }}>
          <Link href="/" style={{ color: "#2563eb", textDecoration: "none" }}>Atticus</Link>
          {" › "}
          <span>TimeSolv Alternative</span>
        </nav>

        <h1 style={{ fontSize: 36, fontWeight: 700, lineHeight: 1.2, marginBottom: 16 }}>
          Atticus vs TimeSolv: Beyond Time Billing to Full AI Practice Management for Ontario Lawyers
        </h1>

        <p style={{ fontSize: 18, color: "#444", marginBottom: 40, lineHeight: 1.6 }}>
          TimeSolv is a respected time billing platform used by lawyers across North America. If you&apos;re an
          Ontario lawyer evaluating TimeSolv, this comparison covers what TimeSolv does well, where it falls
          short for Ontario practices, and how Atticus delivers a complete practice management solution —
          including trust accounting, AI document intelligence, and Canadian data residency — that TimeSolv
          doesn&apos;t offer.
        </p>

        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 12 }}>TimeSolv&apos;s Strength: Time Billing</h2>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7, marginBottom: 12 }}>
            TimeSolv excels at what it was built for: capturing time, generating professional invoices, and running
            billing reports. If your practice only needs a better time tracking and invoicing tool to bolt onto
            your existing setup, TimeSolv is a solid choice.
          </p>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7 }}>
            But most Ontario solo and small firm lawyers need more than billing software. They need trust accounting
            that complies with LSO By-Law 9, they need deadline management, they need a way to handle the daily
            volume of client emails and documents, and increasingly they need AI assistance. TimeSolv provides none
            of these.
          </p>
        </section>

        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 20 }}>Feature Comparison</h2>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
              <thead>
                <tr style={{ background: "#f1f5f9" }}>
                  <th style={{ textAlign: "left", padding: "12px 16px", borderBottom: "2px solid #e2e8f0", width: "25%" }}>Feature</th>
                  <th style={{ textAlign: "left", padding: "12px 16px", borderBottom: "2px solid #e2e8f0", width: "37.5%", color: "#2563eb" }}>Atticus</th>
                  <th style={{ textAlign: "left", padding: "12px 16px", borderBottom: "2px solid #e2e8f0", width: "37.5%" }}>TimeSolv</th>
                </tr>
              </thead>
              <tbody>
                {features.map((row, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? "#fff" : "#f8fafc" }}>
                    <td style={{ padding: "11px 16px", borderBottom: "1px solid #e2e8f0", fontWeight: 600, verticalAlign: "top" }}>{row.feature}</td>
                    <td style={{ padding: "11px 16px", borderBottom: "1px solid #e2e8f0", verticalAlign: "top", color: "#166534" }}>{row.atticus}</td>
                    <td style={{ padding: "11px 16px", borderBottom: "1px solid #e2e8f0", verticalAlign: "top", color: "#444" }}>{row.timesolv}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>Why Ontario Lawyers Choose Atticus Over TimeSolv</h2>

          <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>1. Trust Accounting Is Not Optional in Ontario</h3>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7, marginBottom: 16 }}>
            TimeSolv is a billing tool — it does not include trust accounting. Ontario lawyers who receive client
            funds are legally required to maintain LSO By-Law 9 compliant trust accounts with proper client ledgers
            and monthly reconciliation. Using TimeSolv means running a separate trust accounting system alongside
            your billing software. Atticus handles both in one place.
          </p>

          <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>2. AI That Works for Solo Lawyers</h3>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7, marginBottom: 16 }}>
            Atticus processes every document you upload — client emails, contracts, voice recordings, court orders
            — and automatically extracts deadlines, parties, and action items. TimeSolv has no document intelligence.
            For a solo lawyer handling 30+ active matters, this difference is hours per week.
          </p>

          <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>3. Daily Briefings Instead of Manual Reporting</h3>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7, marginBottom: 16 }}>
            Atticus sends your practice summary every morning: deadlines due this week, open action items, unbilled
            time, outstanding invoices. With TimeSolv, generating this picture requires pulling reports manually.
          </p>

          <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>4. Data Stays in Canada</h3>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7, marginBottom: 16 }}>
            TimeSolv stores data on US servers. For Ontario lawyers with confidentiality obligations under the
            <em> Law Society Act</em> and LSO technology guidelines, keeping client data in Canada is the right
            default. Atticus stores all data on Canadian servers.
          </p>

          <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>5. One Subscription, Complete Practice</h3>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7 }}>
            TimeSolv plus a trust accounting solution plus a document management tool plus a CRM for intake plus
            a conflict checker — you&apos;re paying for and managing four or five software subscriptions. Atticus
            is one platform at $49/month that covers all of these.
          </p>
        </section>

        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>When TimeSolv Makes Sense</h2>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7, marginBottom: 12 }}>
            TimeSolv is a reasonable choice for:
          </p>
          <ul style={{ paddingLeft: 24, color: "#444", lineHeight: 2, fontSize: 16 }}>
            <li>Firms that already have separate, well-functioning trust accounting and document management systems</li>
            <li>Lawyers in non-trust jurisdictions (US states) where billing software is sufficient</li>
            <li>Firms needing advanced LEDES invoicing for corporate clients</li>
            <li>Practices where dedicated admin staff handle document management and trust accounting manually</li>
          </ul>
        </section>

        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>Pricing</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            <div style={{ border: "2px solid #2563eb", borderRadius: 12, padding: 24 }}>
              <h3 style={{ fontWeight: 700, fontSize: 20, marginBottom: 8, color: "#2563eb" }}>Atticus</h3>
              <p style={{ fontSize: 32, fontWeight: 800, marginBottom: 8 }}>$49<span style={{ fontSize: 16, fontWeight: 400, color: "#666" }}>/month</span></p>
              <ul style={{ paddingLeft: 20, lineHeight: 2, color: "#444", fontSize: 14 }}>
                <li>Full practice management</li>
                <li>AI document intelligence</li>
                <li>LSO trust accounting</li>
                <li>Daily briefings</li>
                <li>Canadian data residency</li>
                <li>No credit card required for trial</li>
              </ul>
            </div>
            <div style={{ border: "1px solid #e2e8f0", borderRadius: 12, padding: 24 }}>
              <h3 style={{ fontWeight: 700, fontSize: 20, marginBottom: 8 }}>TimeSolv</h3>
              <p style={{ fontSize: 18, fontWeight: 600, marginBottom: 8, color: "#666" }}>From ~$34 USD/user/month</p>
              <ul style={{ paddingLeft: 20, lineHeight: 2, color: "#444", fontSize: 14 }}>
                <li>Time tracking and billing only</li>
                <li>No trust accounting</li>
                <li>No AI features</li>
                <li>US data storage</li>
                <li>Additional software needed for full practice management</li>
              </ul>
            </div>
          </div>
        </section>

        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 20 }}>Frequently Asked Questions</h2>
          {[
            {
              q: "Does TimeSolv have trust accounting for Ontario lawyers?",
              a: "No. TimeSolv is a time billing and invoicing platform. It does not include trust accounting functionality. Ontario lawyers who receive client funds need a separate LSO By-Law 9 compliant trust accounting system.",
            },
            {
              q: "Can I use Atticus alongside TimeSolv?",
              a: "You can, but most firms replace TimeSolv entirely when they switch to Atticus — there's no reason to maintain separate billing software when Atticus includes full invoicing, time tracking, and online payments.",
            },
            {
              q: "Does Atticus have LEDES invoicing like TimeSolv?",
              a: "Atticus generates standard legal invoices with time entries, rates, and HST. LEDES e-billing format is primarily used by large firms billing corporate clients under electronic billing mandates. If your practice requires LEDES, contact us.",
            },
            {
              q: "Where does TimeSolv store data?",
              a: "TimeSolv is a US company and stores data on US servers. For Ontario lawyers with privacy obligations under PIPEDA and LSO technology guidelines, this raises data residency concerns. Atticus stores all data on Canadian servers.",
            },
          ].map((faq, i) => (
            <div key={i} style={{ marginBottom: 24, paddingBottom: 24, borderBottom: i < 3 ? "1px solid #e2e8f0" : "none" }}>
              <h3 style={{ fontSize: 17, fontWeight: 600, marginBottom: 8 }}>{faq.q}</h3>
              <p style={{ fontSize: 15, color: "#444", lineHeight: 1.7 }}>{faq.a}</p>
            </div>
          ))}
        </section>

        <section style={{ background: "#eff6ff", borderRadius: 16, padding: 40, textAlign: "center", marginBottom: 48 }}>
          <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 12 }}>
            Replace TimeSolv with Full AI Practice Management
          </h2>
          <p style={{ fontSize: 16, color: "#444", marginBottom: 24 }}>
            Get trust accounting, AI document intelligence, daily briefings, and invoicing — everything TimeSolv
            doesn&apos;t offer — in one Ontario-built platform.
          </p>
          <Link
            href="/sign-up"
            style={{
              display: "inline-block",
              background: "#2563eb",
              color: "#fff",
              padding: "14px 32px",
              borderRadius: 8,
              fontWeight: 600,
              fontSize: 16,
              textDecoration: "none",
            }}
          >
            Start Free Trial — No Credit Card
          </Link>
        </section>

        <section>
          <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16 }}>Related Comparisons</h2>
          <ul style={{ paddingLeft: 0, listStyle: "none", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 8 }}>
            {[
              { href: "/clio-alternative", label: "Clio Alternative" },
              { href: "/bill4time-alternative", label: "Bill4Time Alternative" },
              { href: "/rocketmatter-alternative", label: "Rocket Matter Alternative" },
              { href: "/cosmolex-alternative", label: "CosmoLex Alternative" },
              { href: "/pclaw-alternative", label: "PCLaw Alternative" },
              { href: "/practicepanther-alternative", label: "PracticePanther Alternative" },
            ].map((link) => (
              <li key={link.href}>
                <Link href={link.href} style={{ color: "#2563eb", textDecoration: "none", fontSize: 14 }}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
