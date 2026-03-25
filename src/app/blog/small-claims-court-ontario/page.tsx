import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Ontario Small Claims Court: How It Works, Limits, and When to Use It (2026)",
  description:
    "A complete guide to Ontario Small Claims Court — the $35,000 limit, filing a claim, serving the defendant, settlement conferences, hearings, and collecting judgments. What lawyers do differently.",
  openGraph: {
    title: "Ontario Small Claims Court: How It Works, Limits, and When to Use It (2026)",
    description:
      "Ontario Small Claims Court guide: $35,000 limit, Plaintiff&apos;s Claim, service requirements, settlement conference, hearing, and judgment enforcement.",
    type: "article",
    url: "https://getatticus.ca/blog/small-claims-court-ontario",
  },
  alternates: { canonical: "https://getatticus.ca/blog/small-claims-court-ontario" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Ontario Small Claims Court: How It Works, Limits, and When to Use It (2026)",
  description:
    "Ontario Small Claims Court: $35,000 limit, filing, service, settlement conference, hearing, and judgment enforcement.",
  author: { "@type": "Organization", name: "Atticus" },
  publisher: { "@type": "Organization", name: "Atticus", url: "https://getatticus.ca" },
  datePublished: "2026-03-01",
  url: "https://getatticus.ca/blog/small-claims-court-ontario",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the maximum claim in Ontario Small Claims Court?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The monetary limit for Ontario Small Claims Court is $35,000 (as of 2020). Claims above this amount must be filed in the Ontario Superior Court of Justice. You can voluntarily reduce your claim to fit within Small Claims Court if you want to use the simplified process.",
      },
    },
    {
      "@type": "Question",
      name: "How long does Small Claims Court take in Ontario?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Small Claims Court case in Ontario typically takes 6–18 months from filing to judgment, depending on location and whether it settles. The settlement conference is usually scheduled within 90 days of the defence being filed. Trials may be several months after that.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a lawyer for Small Claims Court in Ontario?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, you can represent yourself in Small Claims Court. Ontario paralegals are also permitted to represent parties in Small Claims Court. Lawyers may represent clients but their fees cannot be recovered in full — cost awards in Small Claims are generally limited to 15% of the claim.",
      },
    },
    {
      "@type": "Question",
      name: "What is the limitation period for Small Claims Court in Ontario?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The general limitation period is two years under the Limitations Act, 2002 — the same as Superior Court. The clock starts when you knew or ought to have known about the claim.",
      },
    },
  ],
};

export default function SmallClaimsCourtPage() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", background: "#07070a", color: "#f0e8d8", minHeight: "100vh" }}>
      <Script id="ld-scc" type="application/ld+json">{JSON.stringify(jsonLd)}</Script>
      <Script id="ld-scc-faq" type="application/ld+json">{JSON.stringify(faqJsonLd)}</Script>

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
          <span style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#C6922A", background: "rgba(198,146,42,0.1)", padding: "3px 10px", borderRadius: "20px" }}>Civil Litigation</span>
          <span style={{ fontSize: "12px", color: "rgba(240,232,216,0.3)" }}>March 2026 · 10 min read</span>
        </div>
        <h1 style={{ fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 300, lineHeight: 1.15, color: "#faf8f4", marginBottom: "24px" }}>
          Ontario Small Claims Court:<br />
          <em style={{ fontStyle: "italic", color: "#e8b84b" }}>How It Works, Limits, and When to Use It</em>
        </h1>
        <p style={{ fontSize: "17px", color: "rgba(240,232,216,0.65)", lineHeight: 1.8 }}>
          Ontario&apos;s Small Claims Court is the most accessible civil court for everyday disputes — unpaid invoices, security deposits, property damage, and consumer claims up to $35,000. Here is how the process works, what lawyers and paralegals do differently, and how to collect on a judgment once you win.
        </p>
      </header>

      <article style={{ padding: "0 48px 80px", maxWidth: "760px", margin: "0 auto" }}>

        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "26px", fontWeight: 400, color: "#faf8f4", marginBottom: "20px" }}>What is Small Claims Court in Ontario?</h2>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.8, marginBottom: "20px" }}>
            Ontario&apos;s Small Claims Court is a division of the Ontario Superior Court of Justice, governed by the Courts of Justice Act and the Rules of the Small Claims Court. It is designed to resolve money claims up to $35,000 in a simplified, accessible way.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1px", background: "rgba(255,255,255,0.06)", marginBottom: "24px" }}>
            {[
              { label: "Monetary limit", value: "$35,000" },
              { label: "Filing fee", value: "$102–$204 depending on claim amount" },
              { label: "Representation", value: "Self, lawyer, or paralegal" },
              { label: "Limitation period", value: "2 years (Limitations Act, 2002)" },
              { label: "Cost recovery", value: "Up to 15% of the claim" },
              { label: "Appeals", value: "Divisional Court on questions of law" },
            ].map(({ label, value }) => (
              <div key={label} style={{ background: "#07070a", padding: "20px" }}>
                <p style={{ fontSize: "12px", color: "rgba(240,232,216,0.4)", marginBottom: "6px" }}>{label}</p>
                <p style={{ fontSize: "14px", fontWeight: 500, color: "#C6922A", margin: 0 }}>{value}</p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.8 }}>
            Small Claims Court can award money only — not specific performance or injunctions. If you want the court to order someone to do something (other than pay), you need Superior Court.
          </p>
        </section>

        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "26px", fontWeight: 400, color: "#faf8f4", marginBottom: "20px" }}>Step-by-step: the Ontario Small Claims Court process</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {[
              {
                step: "1",
                title: "Check the limitation period",
                desc: "Confirm your claim is within the two-year limitation period under the Limitations Act, 2002. If your claim has expired, you cannot file. The date the claim was &quot;discovered&quot; starts the clock — when you knew or ought to have known about the claim.",
              },
              {
                step: "2",
                title: "File the Plaintiff&apos;s Claim (Form 7A)",
                desc: "Complete Form 7A describing what happened, why the defendant owes you money, and the amount claimed. File at the Small Claims Court office in the region where the defendant lives or where the event occurred. Pay the filing fee. The court assigns a claim number.",
              },
              {
                step: "3",
                title: "Serve the defendant",
                desc: "You must serve the defendant with the claim personally or by an approved method within 6 months of filing. Individuals: personal service or at their home with an adult. Corporations: at the registered office or by registered mail. Keep an Affidavit of Service. Improper service is the most common procedural error.",
              },
              {
                step: "4",
                title: "Defence and counterclaim",
                desc: "The defendant has 20 days (within Ontario) to file a Defence. If they do not file a defence, you can request default judgment. If they file a Defence and Defendant&apos;s Claim (counterclaim), you must respond to any claim against you.",
              },
              {
                step: "5",
                title: "Settlement conference",
                desc: "A judge or deputy judge meets with both parties (usually within 90 days of the Defence being filed) to identify issues, encourage settlement, and plan the hearing. Most Small Claims cases settle at or before the settlement conference.",
              },
              {
                step: "6",
                title: "Trial",
                desc: "If the case does not settle, it proceeds to a hearing (trial). Each party presents their evidence, calls witnesses, and makes submissions. Rules of evidence are relaxed compared to Superior Court but hearsay is still generally excluded.",
              },
              {
                step: "7",
                title: "Judgment and enforcement",
                desc: "The judge issues a judgment — often at the end of the hearing, sometimes reserved. If you win, you still have to collect. The court does not collect for you. Collection options: garnishment of wages, garnishment of bank accounts, writ of seizure, examination of debtor.",
              },
            ].map(({ step, title, desc }) => (
              <div key={step} style={{ display: "flex", gap: "20px", padding: "20px 24px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                <div style={{ flexShrink: 0, width: "32px", height: "32px", background: "rgba(198,146,42,0.15)", border: "1px solid rgba(198,146,42,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: 600, color: "#C6922A" }}>
                  {step}
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
          <h2 style={{ fontSize: "26px", fontWeight: 400, color: "#faf8f4", marginBottom: "20px" }}>Collecting on a Small Claims judgment in Ontario</h2>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.8, marginBottom: "24px" }}>
            Winning a judgment does not mean you have the money. Collection requires additional steps:
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1px", background: "rgba(255,255,255,0.06)", marginBottom: "24px" }}>
            {[
              { method: "Examination of debtor", desc: "Summons the defendant to court to disclose their assets, income, and employment. Required before most other enforcement steps." },
              { method: "Garnishment of wages", desc: "Court order directing the employer to withhold 20% of net wages and pay it to you. Effective if the debtor is employed." },
              { method: "Bank garnishment", desc: "If you know the debtor&apos;s bank and branch, a Notice of Garnishment is served on the bank requiring them to pay funds from the account." },
              { method: "Writ of seizure and sale", desc: "Filed with the Sheriff&apos;s office. Attaches to any real property the debtor owns in the county. The property cannot be sold until the judgment is satisfied." },
            ].map(({ method, desc }) => (
              <div key={method} style={{ background: "#07070a", padding: "22px" }}>
                <h3 style={{ fontSize: "14px", fontWeight: 600, color: "#C6922A", marginBottom: "8px" }}>{method}</h3>
                <p style={{ fontSize: "13px", color: "rgba(240,232,216,0.6)", lineHeight: 1.6, margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "26px", fontWeight: 400, color: "#faf8f4", marginBottom: "20px" }}>For Ontario civil litigation lawyers: managing Small Claims files</h2>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.8, marginBottom: "20px" }}>
            Atticus supports civil litigation lawyers with Small Claims file management:
          </p>
          <ul style={{ paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "8px" }}>
            {[
              "Limitation period calculator — two-year clock from discovery date, calculated instantly",
              "Civil Litigation matter template — action item checklist from claim through judgment",
              "Document AI — extract claim amounts, parties, and dates from filed documents",
              "Daily briefing — settlement conference dates, hearing dates, deadline to serve appear in your morning email",
              "AI Draft — Plaintiff&apos;s Claim narrative, demand letters, settlement proposals",
            ].map((item) => (
              <li key={item} style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.7 }}>{item}</li>
            ))}
          </ul>
        </section>

        <div style={{ padding: "40px", background: "rgba(198,146,42,0.08)", border: "1px solid rgba(198,146,42,0.2)", borderRadius: "4px" }}>
          <h3 style={{ fontSize: "22px", fontWeight: 400, color: "#faf8f4", marginBottom: "12px" }}>Practice management for Ontario civil litigation</h3>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.65)", lineHeight: 1.7, marginBottom: "24px" }}>
            Atticus tracks limitation periods, hearing dates, and deadlines automatically for Ontario civil litigation lawyers. Try free for 14 days.
          </p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link href="/sign-up" style={{ background: "#C6922A", color: "#07070a", padding: "12px 28px", textDecoration: "none", fontSize: "14px", fontWeight: 600, display: "inline-block" }}>
              Start Free Trial →
            </Link>
            <Link href="/calculator" style={{ border: "1px solid rgba(198,146,42,0.4)", color: "#C6922A", padding: "12px 28px", textDecoration: "none", fontSize: "14px", display: "inline-block" }}>
              Free Limitation Period Calculator →
            </Link>
          </div>
        </div>
      </article>

      <section style={{ padding: "0 48px 80px", maxWidth: "760px", margin: "0 auto" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
          {[
            { href: "/ontario-civil-litigation-lawyer", label: "Atticus for civil litigation" },
            { href: "/calculator", label: "Limitation period calculator" },
            { href: "/blog/missing-limitation-periods-ontario", label: "Missing limitation periods" },
            { href: "/blog/ontario-wrongful-dismissal-guide", label: "Wrongful dismissal guide" },
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
