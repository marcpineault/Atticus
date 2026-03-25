import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Practice Management Software for Ontario Immigration Lawyers | Atticus",
  description:
    "Atticus helps Ontario immigration lawyers manage client files, track application deadlines, process correspondence, and organize IRCC matters — with AI document processing and automated deadline alerts.",
  keywords: [
    "ontario immigration lawyer software",
    "immigration law practice management ontario",
    "immigration lawyer software canada",
    "ircc deadline tracking software ontario",
    "ontario immigration law firm software",
    "canadian immigration lawyer practice management",
  ],
  openGraph: {
    title: "Practice Management Software for Ontario Immigration Lawyers",
    description:
      "Atticus helps Ontario immigration lawyers track IRCC deadlines, manage client files, process immigration documents, and stay on top of every application — with AI automation.",
    type: "website",
    url: "https://getatticus.ca/ontario-immigration-lawyer",
  },
  alternates: { canonical: "https://getatticus.ca/ontario-immigration-lawyer" },
};

const jsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Atticus — Practice Management for Ontario Immigration Lawyers",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Practice management software for Ontario immigration lawyers. AI document processing, IRCC deadline tracking, client file organization, automated briefings, and billing — built for Ontario immigration law practice.",
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
      name: "Does Atticus track IRCC processing deadlines?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Atticus automatically extracts deadlines and dates from documents you upload, including IRCC correspondence, application receipts, and status letters. Every deadline is tracked and included in your daily morning briefing.",
      },
    },
    {
      "@type": "Question",
      name: "Can Atticus process immigration documents and correspondence?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Atticus processes PDF, DOCX, and TXT files. AI extracts key parties, dates, application types, and action items from IRCC correspondence, employment letters, study permits, PR applications, and other immigration documents.",
      },
    },
    {
      "@type": "Question",
      name: "Does Atticus have a conflict of interest check for immigration matters?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. AI-powered conflict checking against all existing clients, companies, and parties extracted from your documents. Critical for family sponsorship cases and corporate immigration matters where relationships between parties must be verified.",
      },
    },
  ],
});

export default function OntarioImmigrationLawyerPage() {
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
          <Link href="/calculator" style={{ color: "#4b5563", textDecoration: "none" }}>Limitation Calculator</Link>
          <Link href="/pricing" style={{ color: "#4b5563", textDecoration: "none" }}>Pricing</Link>
          <Link href="/sign-up" style={{ backgroundColor: "#1a1a2e", color: "#fff", padding: "8px 18px", borderRadius: "6px", textDecoration: "none" }}>
            Free Trial
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <header style={{ maxWidth: "880px", margin: "0 auto", padding: "72px 24px 48px" }}>
        <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", color: "#6b7280", textTransform: "uppercase", marginBottom: "16px" }}>
          Ontario Immigration Law Practice Management
        </p>
        <h1 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, lineHeight: 1.2, marginBottom: "24px", color: "#1a1a2e" }}>
          Practice Management Software for Ontario Immigration Lawyers
        </h1>
        <p style={{ fontSize: "18px", lineHeight: 1.7, color: "#4b5563", marginBottom: "32px", fontFamily: "system-ui, sans-serif", maxWidth: "680px" }}>
          Immigration practice generates enormous document volume — IRCC correspondence, employment letters, educational credentials, medical exams, police certificates, reference letters. Atticus processes all of it, extracts the deadlines and key facts, and sends you a morning briefing before your day starts.
        </p>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <Link href="/sign-up" style={{ backgroundColor: "#1a1a2e", color: "#fff", padding: "12px 24px", borderRadius: "6px", textDecoration: "none", fontFamily: "system-ui, sans-serif", fontWeight: 700 }}>
            Start 14-Day Free Trial
          </Link>
          <Link href="/pricing" style={{ border: "1px solid #d1d5db", color: "#374151", padding: "12px 24px", borderRadius: "6px", textDecoration: "none", fontFamily: "system-ui, sans-serif", fontWeight: 600 }}>
            See Pricing
          </Link>
        </div>
      </header>

      {/* Immigration-specific challenges */}
      <section style={{ backgroundColor: "#f8f7f4", borderTop: "1px solid #e5e7eb", borderBottom: "1px solid #e5e7eb", padding: "48px 24px" }}>
        <div style={{ maxWidth: "880px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "22px", fontWeight: 700, marginBottom: "24px", color: "#1a1a2e" }}>
            The Immigration Lawyer&apos;s Document Problem
          </h2>
          <p style={{ fontSize: "16px", lineHeight: 1.7, color: "#374151", fontFamily: "system-ui, sans-serif", marginBottom: "16px" }}>
            A PR application for a family of four can involve 50+ documents per applicant — in multiple languages, from multiple countries, covering the past 10 years. IRCC correspondence arrives with response deadlines that are easy to miss when managing a high-volume practice.
          </p>
          <p style={{ fontSize: "16px", lineHeight: 1.7, color: "#374151", fontFamily: "system-ui, sans-serif" }}>
            Atticus processes every document on upload — extracting applicant names, key dates, application types, deadlines, and outstanding requirements. Your entire client file becomes searchable in plain English. Ask &ldquo;What documents has the Chen family submitted so far?&rdquo; and get an answer.
          </p>
        </div>
      </section>

      {/* Common immigration matter types */}
      <section style={{ maxWidth: "880px", margin: "0 auto", padding: "56px 24px" }}>
        <h2 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "8px", color: "#1a1a2e" }}>
          Immigration Matter Types Atticus Supports
        </h2>
        <p style={{ fontSize: "15px", color: "#6b7280", marginBottom: "32px", fontFamily: "system-ui, sans-serif" }}>
          Track deadlines, manage documents, and organize client files for all common Ontario immigration matters
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "12px" }}>
          {[
            { category: "Temporary Residence", items: ["Visitor Visa (TRV)", "Study Permit", "Work Permit (LMIA & LMIA-exempt)", "International Mobility Program", "Temporary Resident Permit (TRP)"] },
            { category: "Permanent Residence", items: ["Express Entry (CEC, FSW, FST)", "Provincial Nominee Program (PNP)", "Family Sponsorship", "Humanitarian & Compassionate", "Caregiver Programs"] },
            { category: "Citizenship & Travel", items: ["Citizenship Application", "Citizenship Certificate", "Permanent Resident Card Renewal", "Travel Document", "Renunciation"] },
            { category: "Status & Appeals", items: ["Restoration of Status", "Refugee Protection (RPD/RAD)", "Immigration Division hearings", "Judicial Review (Federal Court)", "PRRA Applications"] },
          ].map((group) => (
            <div key={group.category} style={{ padding: "20px", border: "1px solid #e5e7eb", borderRadius: "8px" }}>
              <h3 style={{ fontSize: "14px", fontWeight: 700, marginBottom: "12px", fontFamily: "system-ui, sans-serif", color: "#1a1a2e" }}>{group.category}</h3>
              <ul style={{ paddingLeft: "0", listStyle: "none" }}>
                {group.items.map((item) => (
                  <li key={item} style={{ fontSize: "13px", color: "#4b5563", fontFamily: "system-ui, sans-serif", padding: "3px 0", display: "flex", gap: "8px" }}>
                    <span style={{ color: "#d1d5db" }}>·</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Key features */}
      <section style={{ backgroundColor: "#f8f7f4", borderTop: "1px solid #e5e7eb", padding: "56px 24px" }}>
        <div style={{ maxWidth: "880px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "32px", color: "#1a1a2e" }}>
            How Atticus Helps Immigration Lawyers
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px" }}>
            {[
              {
                title: "IRCC Deadline Tracking",
                body: "Every deadline in every IRCC notice, decision letter, or procedural fairness letter is automatically extracted and tracked. Daily 9am briefing and 6pm escalation alerts if anything is unresolved.",
              },
              {
                title: "Document Processing",
                body: "Upload application packages, IRCC correspondence, supporting documents. AI summarizes each file and extracts key facts — applicant names, dates, status, outstanding requirements.",
              },
              {
                title: "AI Chat Over Client Files",
                body: "Ask 'What is the status of the Singh work permit?' or 'What documents has the Nguyen family still not provided?' Get direct answers from your case files.",
              },
              {
                title: "High-Volume Client Management",
                body: "Immigration practices often manage dozens of active files simultaneously. Atticus surfaces overdue items and upcoming deadlines across all clients in your daily briefing.",
              },
              {
                title: "Client Portal & Document Upload",
                body: "Share a secure portal link with clients. They upload credentials, employment letters, and other supporting documents directly — automatically processed and linked to their matter.",
              },
              {
                title: "Conflict Checking",
                body: "AI conflict check before opening any new file. Critical for corporate immigration where multiple employees from one company, or opposing parties in an immigration dispute, may be in your system.",
              },
            ].map((f) => (
              <div key={f.title} style={{ padding: "24px", backgroundColor: "#fff", border: "1px solid #e5e7eb", borderRadius: "10px" }}>
                <h3 style={{ fontSize: "15px", fontWeight: 700, marginBottom: "8px", fontFamily: "system-ui, sans-serif" }}>{f.title}</h3>
                <p style={{ fontSize: "14px", lineHeight: 1.65, color: "#4b5563", fontFamily: "system-ui, sans-serif" }}>{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "72px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "28px", fontWeight: 700, marginBottom: "16px", color: "#1a1a2e" }}>
            Start Your Free 14-Day Trial
          </h2>
          <p style={{ fontSize: "16px", color: "#4b5563", marginBottom: "32px", fontFamily: "system-ui, sans-serif" }}>
            No credit card required. Full access to document processing, Atticus AI, deadline tracking, and billing.
          </p>
          <Link href="/sign-up" style={{ backgroundColor: "#1a1a2e", color: "#fff", padding: "14px 32px", borderRadius: "8px", textDecoration: "none", fontFamily: "system-ui, sans-serif", fontWeight: 700, fontSize: "15px" }}>
            Get Started Free
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid #e5e7eb", padding: "32px 24px", backgroundColor: "#f9fafb" }}>
        <div style={{ maxWidth: "880px", margin: "0 auto" }}>
          <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "13px", color: "#9ca3af", marginBottom: "16px", fontWeight: 700 }}>
            Practice Area Guides
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", fontSize: "13px", fontFamily: "system-ui, sans-serif" }}>
            <Link href="/ontario-real-estate-lawyer" style={{ color: "#6b7280", textDecoration: "none" }}>Real Estate</Link>
            <Link href="/ontario-wills-estate-lawyer" style={{ color: "#6b7280", textDecoration: "none" }}>Wills &amp; Estates</Link>
            <Link href="/ontario-family-lawyer" style={{ color: "#6b7280", textDecoration: "none" }}>Family Law</Link>
            <Link href="/ontario-corporate-lawyer" style={{ color: "#6b7280", textDecoration: "none" }}>Corporate Law</Link>
            <Link href="/ontario-civil-litigation-lawyer" style={{ color: "#6b7280", textDecoration: "none" }}>Civil Litigation</Link>
            <Link href="/ontario-criminal-defence-lawyer" style={{ color: "#6b7280", textDecoration: "none" }}>Criminal Defence</Link>
            <Link href="/ontario-immigration-lawyer" style={{ color: "#1a1a2e", fontWeight: 600, textDecoration: "none" }}>Immigration Law</Link>
            <Link href="/clio-alternative" style={{ color: "#6b7280", textDecoration: "none" }}>Clio Alternative</Link>
            <Link href="/pclaw-alternative" style={{ color: "#6b7280", textDecoration: "none" }}>PCLaw Alternative</Link>
            <Link href="/calculator" style={{ color: "#6b7280", textDecoration: "none" }}>Limitation Calculator</Link>
            <Link href="/pricing" style={{ color: "#6b7280", textDecoration: "none" }}>Pricing</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
