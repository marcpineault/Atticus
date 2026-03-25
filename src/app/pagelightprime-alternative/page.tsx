import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "PageLightPrime Alternative — Atticus vs PageLightPrime for Ontario Law Firms",
  description:
    "Comparing PageLightPrime and Atticus for Ontario law firms. See how Atticus delivers AI-powered intake, document intelligence, and LSO-compliant trust accounting at a lower price point.",
  alternates: { canonical: "https://getatticus.ca/pagelightprime-alternative" },
  openGraph: {
    title: "PageLightPrime Alternative — Atticus vs PageLightPrime",
    description:
      "Ontario lawyers comparing PageLightPrime with Atticus. AI document processing, morning briefings, and trust accounting built for LSO compliance.",
    url: "https://getatticus.ca/pagelightprime-alternative",
    type: "website",
  },
};

type Feature = { feature: string; atticus: string; pagelightprime: string };

const features: Feature[] = [
  {
    feature: "Ontario LSO compliance",
    atticus: "Built-in LSO trust accounting, By-Law 9 rules",
    pagelightprime: "General trust tools, manual compliance tracking",
  },
  {
    feature: "AI document intelligence",
    atticus: "Extracts deadlines, parties, action items automatically",
    pagelightprime: "Document storage and categorization, no AI extraction",
  },
  {
    feature: "Morning briefings",
    atticus: "Daily 9am email summary of deadlines and open items",
    pagelightprime: "Manual dashboard review required",
  },
  {
    feature: "Voice note processing",
    atticus: "Upload voice memos — transcribed and structured instantly",
    pagelightprime: "Not available",
  },
  {
    feature: "Canadian data residency",
    atticus: "Data stored on Canadian servers",
    pagelightprime: "Mixed — US and Canadian infrastructure",
  },
  {
    feature: "Client intake forms",
    atticus: "Branded intake links, auto-creates client/matter",
    pagelightprime: "Basic intake, requires manual setup",
  },
  {
    feature: "Matter management",
    atticus: "Linked clients, matters, documents, time entries",
    pagelightprime: "Full matter management with templates",
  },
  {
    feature: "Trust accounting",
    atticus: "Full LSO-compliant trust ledger, bank reconciliation",
    pagelightprime: "Trust accounting with compliance reports",
  },
  {
    feature: "AI chat over documents",
    atticus: "Ask questions across all your case files",
    pagelightprime: "Not available",
  },
  {
    feature: "Pricing",
    atticus: "From $49/month — all features included",
    pagelightprime: "Mid-tier pricing, feature-tiered plans",
  },
  {
    feature: "Setup time",
    atticus: "Under 10 minutes, guided onboarding",
    pagelightprime: "Several hours for full configuration",
  },
  {
    feature: "Mobile experience",
    atticus: "Responsive web app, upload from phone",
    pagelightprime: "Web-based, limited mobile optimization",
  },
  {
    feature: "Billing & invoicing",
    atticus: "Time tracking, invoicing, Stripe online payments",
    pagelightprime: "Full billing suite with templates",
  },
  {
    feature: "Ontario limitation period tracker",
    atticus: "AI-extracted from documents with reminders",
    pagelightprime: "Manual deadline entry",
  },
];

const schemaJson = `{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Atticus",
  "applicationCategory": "LegalApplication",
  "operatingSystem": "Web",
  "description": "AI-powered legal practice management for Ontario solo and small law firms. LSO-compliant trust accounting, AI document intelligence, and automated morning briefings.",
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
  },
  "featureList": [
    "LSO-compliant trust accounting",
    "AI document intelligence",
    "Daily morning briefings",
    "Ontario limitation period tracking",
    "Client intake forms",
    "Canadian data residency"
  ]
}`;

export default function PageLightPrimeAlternativePage() {
  return (
    <>
      <Script id="schema-pagelightprime" type="application/ld+json" strategy="beforeInteractive">
        {schemaJson}
      </Script>
      <div style={{ fontFamily: "system-ui, sans-serif", maxWidth: 900, margin: "0 auto", padding: "40px 24px", color: "#111" }}>
        <nav style={{ marginBottom: 32, fontSize: 14, color: "#666" }}>
          <Link href="/" style={{ color: "#2563eb", textDecoration: "none" }}>Atticus</Link>
          {" › "}
          <span>PageLightPrime Alternative</span>
        </nav>

        <h1 style={{ fontSize: 36, fontWeight: 700, lineHeight: 1.2, marginBottom: 16 }}>
          Atticus vs PageLightPrime: Which Practice Management Software Is Right for Ontario Lawyers?
        </h1>

        <p style={{ fontSize: 18, color: "#444", marginBottom: 40, lineHeight: 1.6 }}>
          PageLightPrime has built a following among Ontario law firms with its feature-rich practice management tools.
          Atticus takes a different approach — AI-first design that reduces daily admin work through document intelligence,
          automated briefings, and an LSO-compliant trust accounting engine that actually understands Ontario rules.
        </p>

        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 12 }}>The Core Difference</h2>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7, marginBottom: 12 }}>
            PageLightPrime is a traditional practice management platform — strong document management, matter tracking,
            and billing workflows. It requires you to actively use the software to stay organized.
          </p>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7 }}>
            Atticus works differently: it processes your documents (emails, voice notes, contracts, meeting recordings)
            and surfaces what matters — upcoming deadlines, overdue action items, billable time — in a daily briefing
            delivered to your inbox at 9am. You can also chat with your entire case file library using plain language.
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
                  <th style={{ textAlign: "left", padding: "12px 16px", borderBottom: "2px solid #e2e8f0", width: "37.5%" }}>PageLightPrime</th>
                </tr>
              </thead>
              <tbody>
                {features.map((row, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? "#fff" : "#f8fafc" }}>
                    <td style={{ padding: "11px 16px", borderBottom: "1px solid #e2e8f0", fontWeight: 600, verticalAlign: "top" }}>{row.feature}</td>
                    <td style={{ padding: "11px 16px", borderBottom: "1px solid #e2e8f0", verticalAlign: "top", color: "#166534" }}>{row.atticus}</td>
                    <td style={{ padding: "11px 16px", borderBottom: "1px solid #e2e8f0", verticalAlign: "top", color: "#444" }}>{row.pagelightprime}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>Why Ontario Lawyers Are Switching from PageLightPrime</h2>

          <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>1. AI Does the Admin Work You Currently Do Manually</h3>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7, marginBottom: 16 }}>
            PageLightPrime helps you organize documents you&apos;ve already categorized and tagged. Atticus reads your
            documents for you — extracting deadlines, parties, action items, and billable time without manual input.
            Upload a client email and Atticus adds the deadline to your tracker automatically.
          </p>

          <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>2. LSO Compliance Built In, Not Bolted On</h3>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7, marginBottom: 16 }}>
            Atticus&apos;s trust accounting was built specifically for Ontario By-Law 9 requirements — mixed trust,
            general trust, required ledger format, monthly reconciliation. You&apos;re not adapting a generic
            accounting tool to Ontario rules; the Ontario rules are the default.
          </p>

          <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>3. Morning Briefings Replace Dashboard Checks</h3>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7, marginBottom: 16 }}>
            Instead of logging into software to check what&apos;s due, Atticus sends your daily practice summary to
            your inbox at 9am. Deadlines for the week, open action items, pending documents — all in one email so
            you start each day fully briefed without opening the app.
          </p>

          <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>4. Voice Notes and Meeting Recordings</h3>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7, marginBottom: 16 }}>
            Record a note after a client call and upload it to Atticus. It transcribes the recording, extracts key
            facts, identifies any deadlines mentioned, logs billable time, and files it under the right matter. No
            other Ontario practice management software does this.
          </p>

          <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>5. Canadian Data Residency</h3>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7 }}>
            Client data stays on Canadian servers. For Ontario lawyers with obligations under PIPEDA and the Law
            Society&apos;s technology guidelines, data residency isn&apos;t optional — it&apos;s a requirement.
          </p>
        </section>

        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>When PageLightPrime Might Still Be the Right Choice</h2>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7, marginBottom: 12 }}>
            PageLightPrime has strengths that work well for certain firms:
          </p>
          <ul style={{ paddingLeft: 24, color: "#444", lineHeight: 2, fontSize: 16 }}>
            <li>Larger firms (10+ lawyers) with dedicated administrative staff who manage documents manually</li>
            <li>Firms with complex document automation needs using custom templates</li>
            <li>Teams that prefer highly structured workflows with manual control at every step</li>
          </ul>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7, marginTop: 12 }}>
            If your firm is under 5 lawyers, you&apos;re spending significant time on admin, and you want AI to
            do more of the heavy lifting — Atticus is designed for exactly that profile.
          </p>
        </section>

        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>Pricing Comparison</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            <div style={{ border: "2px solid #2563eb", borderRadius: 12, padding: 24 }}>
              <h3 style={{ fontWeight: 700, fontSize: 20, marginBottom: 8, color: "#2563eb" }}>Atticus</h3>
              <p style={{ fontSize: 32, fontWeight: 800, marginBottom: 8 }}>$49<span style={{ fontSize: 16, fontWeight: 400, color: "#666" }}>/month</span></p>
              <ul style={{ paddingLeft: 20, lineHeight: 2, color: "#444", fontSize: 14 }}>
                <li>All features included</li>
                <li>Unlimited document uploads</li>
                <li>Trust accounting &amp; invoicing</li>
                <li>AI briefings &amp; document intelligence</li>
                <li>Canadian data residency</li>
                <li>No setup fee</li>
              </ul>
            </div>
            <div style={{ border: "1px solid #e2e8f0", borderRadius: 12, padding: 24 }}>
              <h3 style={{ fontWeight: 700, fontSize: 20, marginBottom: 8 }}>PageLightPrime</h3>
              <p style={{ fontSize: 18, fontWeight: 600, marginBottom: 8, color: "#666" }}>Mid-tier pricing</p>
              <ul style={{ paddingLeft: 20, lineHeight: 2, color: "#444", fontSize: 14 }}>
                <li>Per-user monthly fees</li>
                <li>Feature-tiered plans</li>
                <li>Trust accounting in higher tiers</li>
                <li>No AI document intelligence</li>
                <li>No morning briefings</li>
              </ul>
            </div>
          </div>
        </section>

        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 20 }}>Frequently Asked Questions</h2>
          {[
            {
              q: "Can I import my data from PageLightPrime to Atticus?",
              a: "Yes. Atticus supports CSV imports for clients, matters, and time entries. Our onboarding team can assist with the migration from PageLightPrime to ensure nothing gets lost.",
            },
            {
              q: "Does Atticus have document management like PageLightPrime?",
              a: "Atticus stores and organizes all documents linked to clients and matters. The key difference is that Atticus also processes documents with AI — extracting structured data, deadlines, and summaries — rather than just storing them.",
            },
            {
              q: "Is Atticus approved under LSO technology guidelines?",
              a: "Atticus is designed around the Law Society of Ontario's technology and confidentiality guidelines, including Canadian data storage, encryption at rest and in transit, and access controls.",
            },
            {
              q: "Does Atticus work for small firms or solo practitioners?",
              a: "Atticus is purpose-built for Ontario solo and small firm lawyers (1–5 lawyers). The entire product is designed around the reality of running a practice without a full administrative team.",
            },
            {
              q: "What kind of AI features does Atticus have that PageLightPrime doesn&apos;t?",
              a: "Atticus offers AI document processing (extracting deadlines, parties, action items from any document type), daily morning briefings, AI chat over your entire case file library, and voice note transcription and analysis.",
            },
          ].map((faq, i) => (
            <div key={i} style={{ marginBottom: 24, paddingBottom: 24, borderBottom: i < 4 ? "1px solid #e2e8f0" : "none" }}>
              <h3 style={{ fontSize: 17, fontWeight: 600, marginBottom: 8 }}>{faq.q}</h3>
              <p style={{ fontSize: 15, color: "#444", lineHeight: 1.7 }}>{faq.a}</p>
            </div>
          ))}
        </section>

        <section style={{ background: "#eff6ff", borderRadius: 16, padding: 40, textAlign: "center", marginBottom: 48 }}>
          <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 12 }}>
            Try Atticus Free for 14 Days
          </h2>
          <p style={{ fontSize: 16, color: "#444", marginBottom: 24, maxWidth: 480, margin: "0 auto 24px" }}>
            Ontario lawyers are switching from PageLightPrime to Atticus for AI-powered practice management built
            specifically for LSO compliance. No credit card required.
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
            Start Free Trial
          </Link>
        </section>

        <section>
          <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16 }}>Related Comparisons</h2>
          <ul style={{ paddingLeft: 0, listStyle: "none", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 8 }}>
            {[
              { href: "/clio-alternative", label: "Clio Alternative" },
              { href: "/soluno-alternative", label: "Soluno Alternative" },
              { href: "/cosmolex-alternative", label: "CosmoLex Alternative" },
              { href: "/pclaw-alternative", label: "PCLaw Alternative" },
              { href: "/leap-alternative", label: "LEAP Alternative" },
              { href: "/actionstep-alternative", label: "Actionstep Alternative" },
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
