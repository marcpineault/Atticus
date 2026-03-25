import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Ontario Child Custody and Parenting Time: Divorce Act, CLRA, and Best Interests (2026 Guide)",
  description:
    "How child custody and parenting time work in Ontario — the Divorce Act 2021 amendments, Children's Law Reform Act, best interests of the child test, primary residence vs shared parenting, parenting plans, and what Ontario family lawyers do.",
  openGraph: {
    title: "Ontario Child Custody and Parenting Time: Divorce Act, CLRA, and Best Interests (2026 Guide)",
    description:
      "Ontario child custody law: Divorce Act 2021 amendments, best interests test, parenting time vs decision-making, CLRA vs Divorce Act, and parenting plans.",
    type: "article",
    url: "https://getatticus.ca/blog/ontario-child-custody-law",
  },
  alternates: { canonical: "https://getatticus.ca/blog/ontario-child-custody-law" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Ontario Child Custody and Parenting Time: Divorce Act, CLRA, and Best Interests (2026 Guide)",
  description:
    "Ontario child custody: Divorce Act 2021 amendments, best interests test, parenting time vs decision-making, CLRA vs Divorce Act, and parenting plans.",
  author: { "@type": "Organization", name: "Atticus" },
  publisher: { "@type": "Organization", name: "Atticus", url: "https://getatticus.ca" },
  datePublished: "2026-03-18",
  url: "https://getatticus.ca/blog/ontario-child-custody-law",
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does 'best interests of the child' mean in Ontario?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The best interests of the child is the paramount consideration in all custody and parenting time decisions in Ontario. Under s. 16(3) of the Divorce Act (as amended in 2021), courts consider: each spouse's ability to care for the child, the nature of existing relationships, each person's willingness to support the other's relationship with the child, the child's cultural/linguistic/religious heritage, the child's views and preferences (depending on age and maturity), and family violence. There is no presumption of equal parenting time.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between decision-making responsibility and parenting time in Ontario?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The 2021 Divorce Act amendments replaced the terms 'custody' and 'access' with 'decision-making responsibility' and 'parenting time.' Decision-making responsibility refers to the authority to make significant decisions about a child's health, education, religion, and extracurricular activities — it can be shared (joint) or with one parent (sole). Parenting time refers to the physical time each parent spends with the child — it can range from primary residence with one parent plus scheduled time with the other, to equal or near-equal shared parenting.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between the Divorce Act and the Children's Law Reform Act in Ontario?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Divorce Act (federal) applies when parties are or were married. The Children's Law Reform Act (CLRA, provincial) applies when parties were not married. Both use a 'best interests of the child' test. The 2021 Divorce Act amendments introduced the new terminology (decision-making responsibility, parenting time) and explicit family violence provisions. The CLRA uses older terminology (custody, access) but Ontario courts apply similar principles.",
      },
    },
    {
      "@type": "Question",
      name: "How does family violence affect custody decisions in Ontario?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The 2021 Divorce Act amendments added explicit family violence provisions at s. 16(4). Courts must consider: the nature/seriousness/frequency of the violence, whether it is directed at the child or whether the child was exposed to violence between the parties, the risk the violence poses to the child, and any steps taken by the person who engaged in violence to improve behaviour. There is no absolute bar to parenting time for a violent parent, but courts take violence seriously as a factor in assessing best interests.",
      },
    },
  ],
};

const bestInterestFactors = [
  "Each person's ability to care for and meet the child's needs",
  "Nature and strength of the child's relationship with each parent and other significant persons",
  "Willingness of each parent to support the child's relationship with the other parent",
  "History of care of the child",
  "Child's views and preferences (given age and maturity)",
  "Child's cultural, linguistic, religious, and spiritual upbringing and heritage",
  "Any family violence and its impact on the child and parenting ability",
  "Any civil or criminal proceeding relevant to the child's safety and well-being",
  "Plans for the child's care proposed by each party",
  "Geographic location of the parties and impact of any proposed relocation",
];

const arrangementTypes = [
  {
    type: "Sole Decision-Making / Primary Residence",
    description: "One parent has decision-making responsibility; the child primarily resides with that parent. The other parent has scheduled parenting time (formerly 'access').",
    when: "Common where one parent has been the primary caregiver, where high conflict limits joint decision-making, or where distance makes shared parenting impractical.",
  },
  {
    type: "Joint Decision-Making / Shared Parenting",
    description: "Both parents share decision-making responsibility for major decisions. The child may or may not have approximately equal time with each parent — joint decision-making does not automatically mean equal time.",
    when: "Works best when parents can communicate and cooperate, live in reasonable proximity, and can agree on major decisions for the child.",
  },
  {
    type: "Parallel Parenting",
    description: "Each parent makes day-to-day decisions during their parenting time. Major decisions may be divided by category (one parent decides education, the other medical) to minimize contact. Not ideal but practical in high-conflict situations.",
    when: "High-conflict separations where parents cannot communicate but neither poses a risk to the child.",
  },
  {
    type: "Supervised Parenting Time",
    description: "One or both parents has parenting time only with a third-party supervisor present. The supervisor can be a family member, friend, or professional (e.g., supervised access centre).",
    when: "Where there are genuine safety concerns: family violence, substance abuse, mental health issues, allegations of alienation, or children who are fearful.",
  },
];

const parentingPlanElements = [
  { element: "Parenting time schedule", detail: "Regular weekly/biweekly schedule; school holidays; summer; statutory holidays; birthdays; special occasions" },
  { element: "Decision-making allocation", detail: "Which parent makes major decisions — education, medical, religious — or how joint decisions are reached if disputed" },
  { element: "Communication between parents", detail: "Method (email, app), frequency, response time expectations, no-disparagement clause" },
  { element: "Child&apos;s extracurriculars", detail: "Which activities are agreed, cost-sharing, attendance at events by both parents" },
  { element: "Travel and international travel", detail: "Advance notice requirements; consent for travel outside Canada; passport control" },
  { element: "Right of first refusal", detail: "When one parent is unavailable for parenting time, they must offer the time to the other parent before arranging third-party childcare" },
  { element: "Relocation provisions", detail: "Notice period and consent process for any proposed relocation; what happens if one parent moves" },
  { element: "Dispute resolution", detail: "Mediation before litigation; parenting coordinator for ongoing disputes; family arbitrator provisions" },
];

const divorceActTimeline = [
  { year: "Pre-2021", event: "Divorce Act used terms 'custody' and 'access'; no explicit family violence provisions; maximum contact principle" },
  { year: "March 2021", event: "Divorce Act amendments in force: 'decision-making responsibility' replaces custody; 'parenting time' replaces access; explicit family violence factors; friendly parent provision removed; relocation provisions added (s. 16.8-16.9)" },
  { year: "2021+", event: "Ontario family courts applying new terminology; CLRA not yet amended to match — lawyers must navigate both statutes depending on marital status of parties" },
];

export default function OntarioChildCustodyLawPage() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", background: "#07070a", color: "#f0e8d8", minHeight: "100vh" }}>
      <Script id="ld-custody" type="application/ld+json">{JSON.stringify(jsonLd)}</Script>
      <Script id="ld-custody-faq" type="application/ld+json">{JSON.stringify(faqLd)}</Script>

      <nav style={{ padding: "20px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(198,146,42,0.1)" }}>
        <Link href="/" style={{ fontSize: "20px", fontWeight: 600, color: "#faf8f4", textDecoration: "none" }}>Atticus</Link>
        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          <Link href="/blog" style={{ color: "rgba(240,232,216,0.5)", fontSize: "14px", textDecoration: "none" }}>Blog</Link>
          <Link href="/sign-up" style={{ background: "#C6922A", color: "#07070a", padding: "10px 24px", textDecoration: "none", fontSize: "14px", fontWeight: 500 }}>
            Start Free Trial →
          </Link>
        </div>
      </nav>

      <article style={{ padding: "56px 24px 80px", maxWidth: "800px", margin: "0 auto" }}>
        <header style={{ marginBottom: "48px" }}>
          <p style={{ fontSize: "12px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#C6922A", marginBottom: "16px" }}>Family Law — Ontario</p>
          <h1 style={{ fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 300, lineHeight: 1.2, color: "#faf8f4", marginBottom: "20px" }}>
            Ontario Child Custody and Parenting Time: Divorce Act, CLRA, and Best Interests (2026 Guide)
          </h1>
          <p style={{ fontSize: "16px", color: "rgba(240,232,216,0.6)", lineHeight: 1.8, marginBottom: "20px" }}>
            The 2021 Divorce Act amendments fundamentally changed the language — and some of the substance — of child parenting law in Canada. Ontario family lawyers must navigate the updated federal Divorce Act (for married parties) and the still-older Children&apos;s Law Reform Act (for unmarried parties), while guiding clients through some of the most emotionally charged decisions of their lives.
          </p>
          <div style={{ display: "flex", gap: "20px", color: "rgba(240,232,216,0.4)", fontSize: "13px" }}>
            <span>March 2026</span>
            <span>12 min read</span>
            <span>Divorce Act, Children&apos;s Law Reform Act</span>
          </div>
        </header>

        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 400, color: "#faf8f4", marginBottom: "20px" }}>
            The 2021 Divorce Act Amendments: What Changed
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "24px" }}>
            {divorceActTimeline.map((item, i) => (
              <div key={i} style={{ display: "flex", gap: "20px", padding: "16px 20px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "8px" }}>
                <div style={{ flexShrink: 0, fontSize: "13px", fontWeight: 600, color: "#C6922A", width: "70px" }}>{item.year}</div>
                <p style={{ fontSize: "14px", color: "rgba(240,232,216,0.7)", lineHeight: 1.65 }}>{item.event}</p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: "14px", color: "rgba(240,232,216,0.55)", lineHeight: 1.7 }}>
            Key change: the 2021 amendments removed the &ldquo;maximum contact principle&rdquo; (which previously required courts to give effect to the principle that the child should have as much contact with each parent as is consistent with the child&apos;s best interests). This was seen as a change that allowed courts to weight other factors more heavily against a parent who poses risks to the child.
          </p>
        </section>

        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 400, color: "#faf8f4", marginBottom: "20px" }}>
            Best Interests of the Child: The Governing Standard
          </h2>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.8, marginBottom: "20px" }}>
            Section 16(3) of the Divorce Act lists the factors courts must consider in determining the best interests of the child. There is no presumption of shared parenting or of either parent being preferred. The list is not exhaustive — courts consider all relevant circumstances.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "12px" }}>
            {bestInterestFactors.map((factor, i) => (
              <div key={i} style={{ display: "flex", gap: "12px", padding: "14px 16px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "6px" }}>
                <span style={{ color: "#C6922A", flexShrink: 0, fontSize: "13px", fontWeight: 600 }}>{i + 1}.</span>
                <p style={{ fontSize: "13px", color: "rgba(240,232,216,0.7)", lineHeight: 1.6 }}>{factor}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 400, color: "#faf8f4", marginBottom: "20px" }}>
            Parenting Arrangements in Ontario
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {arrangementTypes.map((a, i) => (
              <div key={i} style={{ padding: "24px 28px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "8px" }}>
                <h3 style={{ fontSize: "16px", fontWeight: 600, color: "#faf8f4", marginBottom: "10px" }}>{a.type}</h3>
                <p style={{ fontSize: "14px", color: "rgba(240,232,216,0.7)", lineHeight: 1.7, marginBottom: "10px" }}>{a.description}</p>
                <p style={{ fontSize: "13px", color: "#C6922A", lineHeight: 1.65 }}>
                  <strong style={{ fontWeight: 500 }}>When appropriate: </strong>{a.when}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 400, color: "#faf8f4", marginBottom: "20px" }}>
            What Goes in a Parenting Plan
          </h2>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.8, marginBottom: "20px" }}>
            A comprehensive parenting plan reduces future conflict by anticipating disputes before they happen. Ontario family lawyers typically draft these as a schedule attached to a separation agreement or court order.
          </p>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
              <thead>
                <tr style={{ borderBottom: "2px solid rgba(198,146,42,0.3)" }}>
                  <th style={{ textAlign: "left", padding: "12px 14px", color: "rgba(240,232,216,0.5)", fontWeight: 400 }}>Plan Element</th>
                  <th style={{ textAlign: "left", padding: "12px 14px", color: "rgba(240,232,216,0.5)", fontWeight: 400 }}>What to Include</th>
                </tr>
              </thead>
              <tbody>
                {parentingPlanElements.map((row, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.05)", background: i % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent" }}>
                    <td style={{ padding: "12px 14px", color: "#C6922A", fontWeight: 500 }}>{row.element}</td>
                    <td style={{ padding: "12px 14px", color: "rgba(240,232,216,0.7)" }}>{row.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section style={{ marginBottom: "56px", padding: "28px 32px", background: "rgba(198,146,42,0.08)", border: "1px solid rgba(198,146,42,0.25)", borderRadius: "8px" }}>
          <h2 style={{ fontSize: "20px", fontWeight: 500, color: "#e8b84b", marginBottom: "14px" }}>
            Divorce Act vs CLRA: Which Statute Applies?
          </h2>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.8)", lineHeight: 1.75, marginBottom: "12px" }}>
            The <em>Divorce Act</em> (federal) applies only when the parties were married. Applications are made to the Ontario Superior Court of Justice. The <em>Children&apos;s Law Reform Act</em> (CLRA, provincial) applies when parties were not married. Applications can be made to the Superior Court or the Ontario Court of Justice (family court).
          </p>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.8)", lineHeight: 1.75, marginBottom: "12px" }}>
            The CLRA still uses the older terminology — &ldquo;custody&rdquo; and &ldquo;access&rdquo; — because it has not been updated to match the 2021 Divorce Act amendments. In practice, Ontario courts apply very similar principles under both statutes, and the best interests of the child standard governs both.
          </p>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.6)", lineHeight: 1.75 }}>
            Practical point: if parties were married, the lawyer should generally proceed under the Divorce Act in Superior Court — this gives access to corollary relief (child support, spousal support, property) in a single proceeding.
          </p>
        </section>

        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "22px", fontWeight: 400, color: "#faf8f4", marginBottom: "20px" }}>Frequently Asked Questions</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {faqLd.mainEntity.map((faq, i) => (
              <div key={i} style={{ padding: "22px 24px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "8px" }}>
                <h3 style={{ fontSize: "15px", fontWeight: 500, color: "#faf8f4", marginBottom: "10px" }}>{faq.name}</h3>
                <p style={{ fontSize: "14px", color: "rgba(240,232,216,0.6)", lineHeight: 1.75 }}>{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ padding: "40px 36px", background: "rgba(198,146,42,0.06)", border: "1px solid rgba(198,146,42,0.2)", borderRadius: "8px", marginBottom: "56px", textAlign: "center" }}>
          <h3 style={{ fontSize: "20px", fontWeight: 400, color: "#faf8f4", marginBottom: "12px" }}>
            Manage family law matters with AI
          </h3>
          <p style={{ fontSize: "14px", color: "rgba(240,232,216,0.55)", lineHeight: 1.7, maxWidth: "480px", margin: "0 auto 24px" }}>
            Atticus tracks hearing dates, disclosure deadlines, and court-ordered milestones from uploaded documents. Built for Ontario family lawyers.
          </p>
          <Link href="/sign-up" style={{ display: "inline-block", background: "#C6922A", color: "#07070a", padding: "14px 32px", textDecoration: "none", fontSize: "15px", fontWeight: 600, borderRadius: "4px" }}>
            Start Free Trial →
          </Link>
        </section>

        <section style={{ marginBottom: "40px" }}>
          <h3 style={{ fontSize: "14px", color: "rgba(240,232,216,0.4)", marginBottom: "14px", fontWeight: 400 }}>Related guides</h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {[
              { href: "/blog/ontario-family-law-separation-process", label: "Ontario Separation and Divorce" },
              { href: "/blog/ontario-wrongful-dismissal-guide", label: "Wrongful Dismissal" },
              { href: "/ontario-family-lawyer", label: "Practice Mgmt for Family Lawyers" },
              { href: "/calculator", label: "Free Limitation Period Calculator" },
            ].map((link, i) => (
              <Link key={i} href={link.href} style={{ fontSize: "13px", color: "rgba(240,232,216,0.5)", background: "rgba(255,255,255,0.04)", padding: "6px 14px", borderRadius: "20px", textDecoration: "none", border: "1px solid rgba(255,255,255,0.08)" }}>
                {link.label}
              </Link>
            ))}
          </div>
        </section>
      </article>

      <footer style={{ padding: "32px 24px", borderTop: "1px solid rgba(198,146,42,0.1)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
        <Link href="/blog" style={{ color: "rgba(240,232,216,0.3)", fontSize: "13px", textDecoration: "none" }}>← All Articles</Link>
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          <Link href="/pricing" style={{ color: "rgba(240,232,216,0.3)", fontSize: "13px", textDecoration: "none" }}>Pricing</Link>
          <Link href="/calculator" style={{ color: "rgba(240,232,216,0.3)", fontSize: "13px", textDecoration: "none" }}>Free Calculator</Link>
          <Link href="/privacy" style={{ color: "rgba(240,232,216,0.3)", fontSize: "13px", textDecoration: "none" }}>Privacy</Link>
        </div>
      </footer>
    </div>
  );
}
