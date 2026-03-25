import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Ontario Limitation Period Calculator — Free Tool for Lawyers | Atticus",
  description:
    "Free Ontario limitation period calculator. Calculate 2-year basic, 15-year ultimate, minors' tolling, municipal notice, construction lien, and defamation limitation periods under the Limitations Act, 2002.",
  keywords: [
    "ontario limitation period",
    "ontario limitation period calculator",
    "limitations act 2002 ontario",
    "ontario limitation period for lawyers",
    "basic limitation period ontario",
    "ultimate limitation period ontario",
    "limitation period personal injury ontario",
    "limitation period real estate ontario",
    "ontario statute of limitations calculator",
    "limitation period minor ontario",
    "municipal notice period ontario",
    "construction lien limitation ontario",
    "ontario limitation period 2 years",
  ],
  openGraph: {
    title: "Ontario Limitation Period Calculator — Free Tool for Lawyers",
    description:
      "Calculate all Ontario limitation periods: 2-year basic, 15-year ultimate, minors, municipal notice, construction lien, defamation. Based on Limitations Act, 2002.",
    type: "website",
    url: "https://getatticus.ca/ontario-limitation-period",
  },
  alternates: { canonical: "https://getatticus.ca/ontario-limitation-period" },
};

const jsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://getatticus.ca/ontario-limitation-period",
      headline: "Ontario Limitation Periods: A Complete Guide for Lawyers",
      description:
        "A practical guide to Ontario limitation periods under the Limitations Act, 2002, Municipal Act, 2001, Construction Act, and other Ontario statutes. Includes a free online calculator.",
      url: "https://getatticus.ca/ontario-limitation-period",
      author: { "@type": "Organization", name: "Atticus", url: "https://getatticus.ca" },
      publisher: { "@type": "Organization", name: "Atticus", url: "https://getatticus.ca" },
      about: { "@type": "Thing", name: "Ontario Limitation Periods" },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the basic limitation period in Ontario?",
          acceptedAnswer: { "@type": "Answer", text: "The basic limitation period in Ontario is 2 years under the Limitations Act, 2002, s. 4. It begins to run on the date the claim was discovered — meaning the day the claimant first knew or reasonably should have known that the injury, loss, or damage occurred, that it was caused by an act or omission of the defendant, and that a proceeding would be an appropriate means to seek a remedy. If the claim is not discovered, the discovery rule can extend the start date." },
        },
        {
          "@type": "Question",
          name: "What is the ultimate limitation period in Ontario?",
          acceptedAnswer: { "@type": "Answer", text: "The ultimate limitation period in Ontario is 15 years under the Limitations Act, 2002, s. 15. This is an absolute deadline — regardless of when the claim was discovered — calculated from the date of the act or omission that caused the claim. After 15 years, no claim can be brought regardless of when it was discovered." },
        },
        {
          "@type": "Question",
          name: "What is the limitation period for minors in Ontario?",
          acceptedAnswer: { "@type": "Answer", text: "For claims where the plaintiff was a minor (under 18) on the date the claim was discovered, the 2-year basic limitation period does not run until the minor reaches age 18 under Limitations Act, 2002, s. 6. So a minor whose claim is discovered at age 10 has until age 20 (age 18 + 2 years) to commence the proceeding. The 15-year ultimate limitation period still applies from the date of the act or omission." },
        },
        {
          "@type": "Question",
          name: "What is the municipal notice period in Ontario?",
          acceptedAnswer: { "@type": "Answer", text: "Before suing a municipality for injury arising from failure to maintain a highway or bridge, the claimant must give notice to the municipality within 10 days of the injury under Municipal Act, 2001, s. 44(10). This is a strict notice requirement — not just a limitation period. Failure to give notice within 10 days may be a complete bar to the claim unless the court grants relief. This is different from the 2-year limitation period within which the actual claim must be commenced." },
        },
        {
          "@type": "Question",
          name: "What is the limitation period for construction liens in Ontario?",
          acceptedAnswer: { "@type": "Answer", text: "Under the Construction Act, R.S.O. 1990, c. C.30, a lien must be preserved within 60 days of the last day of work or supply on the contract (for subcontractors and suppliers). An action to enforce a construction lien must be commenced within 2 years of the date the lien was preserved. The Limitations Act, 2002 also applies as a backstop — 2 years from discovery and 15 years ultimate." },
        },
        {
          "@type": "Question",
          name: "Is there a limitation period for sexual assault claims in Ontario?",
          acceptedAnswer: { "@type": "Answer", text: "No. Under the Limitations Act, 2002, s. 10, there is no limitation period for claims based on sexual assault or other sexual misconduct. A plaintiff can commence an action at any time, regardless of when the assault occurred. The discovery rule in s. 5 also does not apply — the plaintiff does not need to demonstrate when they first discovered the claim." },
        },
        {
          "@type": "Question",
          name: "What is the Ontario limitation period for defamation?",
          acceptedAnswer: { "@type": "Answer", text: "Under the Libel and Slander Act, R.S.O. 1990, c. L.12, s. 5(1), notice of an action for libel in a newspaper or broadcast must be given within 6 weeks of the publication coming to the plaintiff's attention. The action itself must be commenced within 3 months from the service of notice for broadcast/newspaper libel. For other defamation (not a newspaper or broadcast), the general 2-year Limitations Act period applies." },
        },
      ],
    },
  ],
});

export default function OntarioLimitationPeriodPage() {
  return (
    <>
      <Script id="ld-json-lim" type="application/ld+json" strategy="beforeInteractive">{jsonLd}</Script>

      <div style={{ fontFamily: "system-ui, sans-serif", background: "#07070a", color: "#f0e8d8", minHeight: "100vh" }}>

        {/* NAV */}
        <nav style={{ padding: "20px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(198,146,42,0.1)" }}>
          <Link href="/" style={{ fontSize: "20px", fontWeight: 600, color: "#faf8f4", textDecoration: "none" }}>Atticus</Link>
          <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
            <Link href="/calculator" className="hidden sm:block" style={{ color: "#C6922A", fontSize: "14px", textDecoration: "none", fontWeight: 500 }}>Free Calculator →</Link>
            <Link href="/sign-up" style={{ background: "#C6922A", color: "#07070a", padding: "10px 24px", textDecoration: "none", fontSize: "14px", fontWeight: 500 }}>
              Start Free Trial →
            </Link>
          </div>
        </nav>

        {/* HERO */}
        <section style={{ padding: "80px 48px 60px", maxWidth: "820px", margin: "0 auto" }}>
          <p style={{ fontSize: "12px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#C6922A", marginBottom: "24px" }}>
            Ontario Limitation Periods · Limitations Act, 2002
          </p>
          <h1 style={{ fontSize: "clamp(40px, 5vw, 68px)", fontWeight: 300, lineHeight: 1.1, color: "#faf8f4", marginBottom: "28px" }}>
            Ontario limitation periods:<br />
            <em style={{ fontStyle: "italic", color: "#e8b84b" }}>a practical guide.</em>
          </h1>
          <p style={{ fontSize: "18px", color: "rgba(240,232,216,0.6)", maxWidth: "600px", lineHeight: 1.7, marginBottom: "40px" }}>
            Ontario&apos;s Limitations Act, 2002 governs when court proceedings must be commenced. Missing a limitation period is one of the most common causes of malpractice claims for Ontario lawyers. This guide covers the key limitation periods, including the free interactive calculator below.
          </p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link href="/calculator" style={{ background: "#C6922A", color: "#07070a", padding: "16px 40px", textDecoration: "none", fontSize: "14px", fontWeight: 500, letterSpacing: "0.1em" }}>
              Open Free Calculator →
            </Link>
            <Link href="/sign-up" style={{ border: "1px solid rgba(198,146,42,0.3)", color: "#C6922A", padding: "16px 40px", textDecoration: "none", fontSize: "14px" }}>
              Try Atticus Free
            </Link>
          </div>
        </section>

        {/* CALCULATOR PROMO */}
        <section style={{ padding: "0 48px 80px", maxWidth: "820px", margin: "0 auto" }}>
          <div style={{ background: "#0d0f1a", border: "2px solid rgba(198,146,42,0.3)", borderRadius: "8px", padding: "36px" }}>
            <div style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#C6922A", marginBottom: "12px" }}>Free Tool</div>
            <h2 style={{ fontSize: "24px", fontWeight: 400, color: "#faf8f4", marginBottom: "12px" }}>Ontario Limitation Period Calculator</h2>
            <p style={{ fontSize: "14px", color: "rgba(240,232,216,0.6)", lineHeight: 1.7, marginBottom: "24px" }}>
              Enter the incident date and case type. Instantly calculate all applicable limitation periods — 2-year basic, 15-year ultimate, minors&apos; tolling, municipal notice, construction lien, and defamation — with citations, days remaining, and urgency warnings. No login required.
            </p>
            <Link href="/calculator" style={{ background: "#C6922A", color: "#07070a", padding: "14px 32px", textDecoration: "none", fontSize: "14px", fontWeight: 500, display: "inline-block" }}>
              Open Calculator (Free) →
            </Link>
          </div>
        </section>

        {/* LIMITATION PERIODS */}
        <section style={{ padding: "60px 48px", borderTop: "1px solid rgba(198,146,42,0.1)", maxWidth: "1000px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "36px", fontWeight: 300, color: "#faf8f4", marginBottom: "16px" }}>
            Ontario limitation periods explained
          </h2>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.5)", marginBottom: "48px" }}>
            Reference guide for Ontario litigators. Last updated 2026.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "rgba(255,255,255,0.06)" }}>
            {[
              {
                period: "2 years",
                title: "Basic Limitation Period",
                legislation: "Limitations Act, 2002, s. 4",
                description: "The general rule. A claim must be commenced within 2 years from the date the claim was discovered (i.e., the plaintiff knew or reasonably ought to have known of the injury, cause, identity of defendant, and that a proceeding would be appropriate). The discovery rule under s. 5 governs when the clock starts.",
                urgency: "warning",
              },
              {
                period: "15 years",
                title: "Ultimate Limitation Period",
                legislation: "Limitations Act, 2002, s. 15",
                description: "An absolute backstop. No claim can be commenced more than 15 years after the date of the act or omission, regardless of when it was discovered. Does not apply to claims based on sexual assault, sexual exploitation of a minor, or certain proceedings involving minors.",
                urgency: "info",
              },
              {
                period: "Age 18 + 2 years",
                title: "Minors — Tolling of Basic Period",
                legislation: "Limitations Act, 2002, s. 6",
                description: "If the plaintiff was a minor when the claim was discovered, the 2-year basic limitation period does not begin until the plaintiff turns 18. A minor who discovers a claim at age 12 has until age 20 to sue. The 15-year ultimate period still runs from the date of the act or omission.",
                urgency: "info",
              },
              {
                period: "10 days (notice)",
                title: "Municipal Notice Period",
                legislation: "Municipal Act, 2001, s. 44(10)",
                description: "For personal injury claims arising from a municipality's failure to maintain a highway or bridge, written notice must be given to the municipality within 10 days of the injury. This is separate from the limitation period — failure to give notice within 10 days may bar the claim unless the court grants relief. The 2-year limitation period for commencing the action still applies.",
                urgency: "critical",
              },
              {
                period: "60 days (lien) + 2 years (action)",
                title: "Construction Lien",
                legislation: "Construction Act, R.S.O. 1990, c. C.30",
                description: "A construction lien must be preserved within 60 days of the date of last supply of services or materials. An action to enforce the lien must be commenced within 2 years of the date the lien was preserved. The basic Limitations Act periods apply as backstops.",
                urgency: "warning",
              },
              {
                period: "No limitation",
                title: "Sexual Assault",
                legislation: "Limitations Act, 2002, s. 10",
                description: "There is no limitation period for claims based on sexual assault or sexual misconduct. A plaintiff may commence an action at any time regardless of when the assault occurred. The discovery rule and ultimate limitation period do not apply. This also applies to claims arising from sexual exploitation of a minor by a person in a position of trust.",
                urgency: "none",
              },
              {
                period: "6 weeks (notice) / 3 months (action) for broadcast & print",
                title: "Defamation",
                legislation: "Libel and Slander Act, R.S.O. 1990, c. L.12, s. 5(1)",
                description: "For defamation in a newspaper or broadcast: written notice must be given to the defendant within 6 weeks of the publication coming to the plaintiff's knowledge. The action must be commenced within 3 months of serving the notice. For defamation not in a newspaper or broadcast, the general 2-year Limitations Act period applies.",
                urgency: "warning",
              },
            ].map((item) => {
              const urgencyColors: Record<string, { border: string; label: string }> = {
                critical: { border: "rgba(220,38,38,0.3)", label: "#dc2626" },
                warning: { border: "rgba(234,179,8,0.3)", label: "#ca8a04" },
                info: { border: "rgba(59,130,246,0.2)", label: "#3b82f6" },
                none: { border: "rgba(34,197,94,0.2)", label: "#16a34a" },
              };
              const colors = urgencyColors[item.urgency] ?? urgencyColors["info"]!;
              return (
                <div key={item.title} style={{ background: "#07070a", padding: "32px 36px", borderLeft: `3px solid ${colors.border}` }}>
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "16px", flexWrap: "wrap", marginBottom: "8px" }}>
                    <div>
                      <span style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(240,232,216,0.4)" }}>{item.legislation}</span>
                      <h3 style={{ fontSize: "18px", fontWeight: 500, color: "#faf8f4", marginTop: "4px" }}>{item.title}</h3>
                    </div>
                    <span style={{ fontSize: "20px", fontWeight: 600, color: colors.label, whiteSpace: "nowrap", flexShrink: 0 }}>{item.period}</span>
                  </div>
                  <p style={{ fontSize: "14px", color: "rgba(240,232,216,0.55)", lineHeight: 1.8 }}>{item.description}</p>
                </div>
              );
            })}
          </div>
          <p style={{ marginTop: "24px", fontSize: "12px", color: "rgba(240,232,216,0.3)", lineHeight: 1.6 }}>
            <strong>Disclaimer:</strong> This is a reference guide for Ontario lawyers and is not legal advice. Limitation periods are complex — always verify against current legislation and case law, and consult with a colleague if in doubt. Nothing in this guide creates a lawyer-client relationship.
          </p>
        </section>

        {/* ATTICUS CALCULATOR CTA */}
        <section style={{ padding: "80px 48px", background: "#0d0f1a", borderTop: "1px solid rgba(198,146,42,0.1)" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h2 style={{ fontSize: "36px", fontWeight: 300, color: "#faf8f4", marginBottom: "24px" }}>
              Stop calculating dates manually.<br /><em style={{ fontStyle: "italic", color: "#e8b84b" }}>Use the free Atticus calculator.</em>
            </h2>
            <p style={{ fontSize: "16px", color: "rgba(240,232,216,0.55)", maxWidth: "580px", lineHeight: 1.7, marginBottom: "24px" }}>
              Enter the incident date and select the case type. Get every applicable limitation period instantly — with citations, days remaining, and a one-click button to add the calculated date as a tracked deadline in Atticus. No login required for the calculator.
            </p>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <Link href="/calculator" style={{ background: "#C6922A", color: "#07070a", padding: "14px 36px", textDecoration: "none", fontSize: "14px", fontWeight: 500, display: "inline-block" }}>
                Open Free Calculator →
              </Link>
              <Link href="/sign-up" style={{ border: "1px solid rgba(198,146,42,0.3)", color: "#C6922A", padding: "14px 36px", textDecoration: "none", fontSize: "14px", display: "inline-block" }}>
                Start Free Trial
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ padding: "80px 48px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h2 style={{ fontSize: "36px", fontWeight: 300, color: "#faf8f4", marginBottom: "48px" }}>Common questions</h2>
            {[
              { q: "Does the discovery rule affect when the 2-year period starts?", a: "Yes. The 2-year basic limitation period starts on the date the claim was 'discovered' under Limitations Act, 2002, s. 5. Discovery means the day the claimant first knew or ought reasonably to have known: (a) that the injury, loss, or damage occurred; (b) that it was caused by an act or omission of the person against whom the claim is made; (c) that the act or omission was that of the person against whom the claim is made; and (d) that a proceeding would be an appropriate means to seek to remedy it. In many cases — especially latent injury cases — the discovery date may be later than the date of the incident." },
              { q: "Can limitation periods be extended by agreement?", a: "Yes. Parties can agree in writing to extend or suspend a limitation period under Limitations Act, 2002, s. 22. Such agreements are enforceable. However, parties cannot shorten a limitation period by agreement for consumer claims. For commercial matters, parties often include limitation period clauses in contracts — these must be carefully reviewed." },
              { q: "What happens if you miss a limitation period?", a: "If a limitation period expires before the claim is commenced, the defendant can raise the limitation period as a complete defence. The claim will typically be dismissed. The plaintiff may have a claim against their lawyer for missing the deadline — this is one of the most common sources of legal malpractice claims in Ontario. This is why tracking limitation periods diligently, including using tools like the Atticus calculator, is essential." },
              { q: "How does the Atticus calculator handle the discovery rule?", a: "The Atticus calculator at getatticus.ca/calculator allows you to enter both an incident date and a discovery date when they differ. The calculator will show both the period starting from the incident date and from the discovery date, and flag whichever produces the earlier expiry date. The ultimate 15-year period is always calculated from the incident date regardless of discovery." },
            ].map(faq => (
              <div key={faq.q} style={{ borderBottom: "1px solid rgba(198,146,42,0.1)", paddingBottom: "28px", marginBottom: "28px" }}>
                <h3 style={{ fontSize: "16px", fontWeight: 500, color: "#faf8f4", marginBottom: "10px" }}>{faq.q}</h3>
                <p style={{ fontSize: "14px", color: "rgba(240,232,216,0.55)", lineHeight: 1.8 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer style={{ padding: "32px 48px", borderTop: "1px solid rgba(198,146,42,0.1)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
          <Link href="/" style={{ color: "rgba(240,232,216,0.3)", fontSize: "13px", textDecoration: "none" }}>← Atticus Home</Link>
          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            <Link href="/calculator" style={{ color: "rgba(240,232,216,0.3)", fontSize: "13px", textDecoration: "none" }}>Free Calculator</Link>
            <Link href="/clio-alternative" style={{ color: "rgba(240,232,216,0.3)", fontSize: "13px", textDecoration: "none" }}>Clio Alternative</Link>
            <Link href="/lso-ai-guidance" style={{ color: "rgba(240,232,216,0.3)", fontSize: "13px", textDecoration: "none" }}>LSO AI Guide</Link>
            <Link href="/trust-accounting-ontario" style={{ color: "rgba(240,232,216,0.3)", fontSize: "13px", textDecoration: "none" }}>Trust Accounting</Link>
            <Link href="/privacy" style={{ color: "rgba(240,232,216,0.3)", fontSize: "13px", textDecoration: "none" }}>Privacy</Link>
          </div>
        </footer>
      </div>
    </>
  );
}
