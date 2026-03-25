import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "FINTRAC Reporting for Ontario Lawyers: Client Identification, Large Cash Rules, and MLCA Obligations",
  description:
    "Ontario lawyers' obligations under the Proceeds of Crime (Money Laundering) and Terrorist Financing Act and FINTRAC. Client identification requirements, large cash transaction reporting, and LSO guidance on anti-money laundering compliance.",
  alternates: { canonical: "https://getatticus.ca/blog/ontario-lso-fintrac-reporting" },
  openGraph: {
    title: "FINTRAC Reporting for Ontario Lawyers: Client Identification and AML Compliance",
    description:
      "Complete guide to FINTRAC obligations for Ontario lawyers. Client identification rules, large cash transaction reporting, and Law Society guidance on anti-money laundering.",
    url: "https://getatticus.ca/blog/ontario-lso-fintrac-reporting",
    type: "article",
  },
};

const articleSchema = `{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "FINTRAC Reporting for Ontario Lawyers: Client Identification, Large Cash Rules, and MLCA Obligations",
  "description": "Ontario lawyers' FINTRAC obligations under the Proceeds of Crime Act and FINTRAC. Client identification requirements, large cash transaction reporting, and LSO anti-money laundering guidance.",
  "datePublished": "2025-02-20",
  "dateModified": "2025-02-20",
  "author": { "@type": "Organization", "name": "Atticus" },
  "publisher": { "@type": "Organization", "name": "Atticus", "url": "https://getatticus.ca" },
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://getatticus.ca/blog/ontario-lso-fintrac-reporting" }
}`;

const faqSchema = `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Are Ontario lawyers required to report to FINTRAC?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Proceeds of Crime (Money Laundering) and Terrorist Financing Act includes lawyers as reporting entities, but the Supreme Court of Canada has repeatedly struck down mandatory FINTRAC reporting and client identification for lawyers as unconstitutional violations of solicitor-client privilege (Law Society of British Columbia v Canada 2021 SCC 31). The LSO has separate voluntary guidance and professional responsibility obligations for lawyers to refuse retainers used for money laundering."
      }
    },
    {
      "@type": "Question",
      "name": "What is the $10,000 cash rule for Ontario lawyers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "While FINTRAC large cash transaction reporting does not currently apply to lawyers (due to constitutional exemptions), the LSO's rules on cash fees under the Paralegal and Lawyer Rules of Conduct require lawyers to be alert to cash payments and to refuse funds that are proceeds of crime. Receiving large unexplained cash payments creates professional conduct risk regardless of FINTRAC applicability."
      }
    },
    {
      "@type": "Question",
      "name": "What are Ontario lawyers' obligations regarding money laundering?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ontario lawyers have obligations under the Law Society Act and LSO Rules of Professional Conduct to: refuse retainers where there are reasonable grounds to suspect funds are proceeds of crime; conduct client verification under Rule 3.2-1 (know your client); report cash receipts over $7,500 to the Law Society in trust accounting records; and withdraw from a retainer where a client proposes to use legal services to facilitate money laundering."
      }
    }
  ]
}`;

export default function OntarioLsoFintracPage() {
  return (
    <>
      <Script id="schema-article" type="application/ld+json" strategy="beforeInteractive">
        {articleSchema}
      </Script>
      <Script id="schema-faq" type="application/ld+json" strategy="beforeInteractive">
        {faqSchema}
      </Script>
      <div style={{ fontFamily: "system-ui, sans-serif", maxWidth: 780, margin: "0 auto", padding: "40px 24px", color: "#111" }}>
        <nav style={{ marginBottom: 32, fontSize: 14, color: "#666" }}>
          <Link href="/" style={{ color: "#2563eb", textDecoration: "none" }}>Atticus</Link>
          {" › "}
          <Link href="/blog" style={{ color: "#2563eb", textDecoration: "none" }}>Blog</Link>
          {" › "}
          <span>FINTRAC Reporting for Ontario Lawyers</span>
        </nav>

        <div style={{ marginBottom: 8 }}>
          <span style={{ background: "#eff6ff", color: "#2563eb", padding: "4px 12px", borderRadius: 20, fontSize: 13, fontWeight: 600 }}>
            Professional Responsibility
          </span>
        </div>

        <h1 style={{ fontSize: 36, fontWeight: 800, lineHeight: 1.2, marginBottom: 16, marginTop: 12 }}>
          FINTRAC Reporting for Ontario Lawyers: Client Identification, Large Cash Rules, and Anti-Money Laundering Obligations
        </h1>

        <p style={{ fontSize: 18, color: "#555", marginBottom: 8, lineHeight: 1.5 }}>
          14 min read &nbsp;·&nbsp; February 2025
        </p>

        <p style={{ fontSize: 18, color: "#444", lineHeight: 1.7, marginBottom: 40 }}>
          Money laundering compliance is one of the most confusing areas of professional responsibility for Ontario
          lawyers. The <em>Proceeds of Crime (Money Laundering) and Terrorist Financing Act</em> purports to impose
          FINTRAC reporting obligations on lawyers — but the Supreme Court of Canada has struck down mandatory
          reporting as unconstitutional. Here is what Ontario lawyers actually need to know: what FINTRAC requires,
          what the courts have said, what LSO obligations remain, and how to handle client identification and suspicious
          transactions in practice.
        </p>

        <nav style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 10, padding: "20px 24px", marginBottom: 40 }}>
          <p style={{ fontWeight: 700, marginBottom: 8, fontSize: 15 }}>Contents</p>
          <ol style={{ paddingLeft: 20, lineHeight: 2.2, margin: 0, fontSize: 14, color: "#2563eb" }}>
            <li><a href="#background" style={{ color: "#2563eb" }}>FINTRAC and the PCMLTFA</a></li>
            <li><a href="#constitutional" style={{ color: "#2563eb" }}>Constitutional Exemption for Lawyers</a></li>
            <li><a href="#lso-rules" style={{ color: "#2563eb" }}>LSO Rules of Professional Conduct</a></li>
            <li><a href="#client-id" style={{ color: "#2563eb" }}>Client Identification (Know Your Client)</a></li>
            <li><a href="#cash" style={{ color: "#2563eb" }}>Cash Payments and Retainers</a></li>
            <li><a href="#suspicious" style={{ color: "#2563eb" }}>Refusing Suspicious Retainers</a></li>
            <li><a href="#withdrawal" style={{ color: "#2563eb" }}>Withdrawal and Mid-Retainer Concerns</a></li>
            <li><a href="#real-estate" style={{ color: "#2563eb" }}>Real Estate and High-Risk Transactions</a></li>
            <li><a href="#records" style={{ color: "#2563eb" }}>Record Keeping</a></li>
            <li><a href="#paralegal" style={{ color: "#2563eb" }}>Paralegal AML Obligations</a></li>
          </ol>
        </nav>

        <section id="background" style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, marginBottom: 12 }}>1. FINTRAC and the Proceeds of Crime Act</h2>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7, marginBottom: 12 }}>
            The <em>Proceeds of Crime (Money Laundering) and Terrorist Financing Act</em> S.C. 2000, c. 17
            (PCMLTFA) established FINTRAC — the Financial Transactions and Reports Analysis Centre of Canada —
            as Canada&apos;s financial intelligence unit. The Act imposes obligations on &quot;reporting entities&quot;
            including banks, casinos, real estate brokers, and — controversially — lawyers.
          </p>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7, marginBottom: 12 }}>
            The PCMLTFA&apos;s lawyer provisions purport to require:
          </p>
          <ul style={{ paddingLeft: 24, lineHeight: 2, color: "#444", fontSize: 16 }}>
            <li>Client identification and verification for certain real estate, corporate, and financial transactions</li>
            <li>Record keeping for covered transactions</li>
            <li>Reporting large cash transactions ($10,000 or more received in cash in a single transaction)</li>
            <li>Reporting suspicious transactions to FINTRAC</li>
          </ul>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7, marginTop: 12 }}>
            However, these obligations have been constitutionally challenged by legal professional bodies across
            Canada — and the challenges have succeeded.
          </p>
        </section>

        <section id="constitutional" style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, marginBottom: 12 }}>2. Constitutional Exemption for Lawyers</h2>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7, marginBottom: 12 }}>
            In <em>Law Society of British Columbia v Canada (Attorney General)</em> 2021 SCC 31, the Supreme Court
            of Canada confirmed that the mandatory reporting and client identification provisions of the PCMLTFA
            violate the constitutional protection of solicitor-client privilege under section 8 of the
            <em> Canadian Charter of Rights and Freedoms</em> and cannot be applied to lawyers acting in their
            professional capacity.
          </p>
          <div style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: 8, padding: 16, marginBottom: 16 }}>
            <p style={{ fontWeight: 700, marginBottom: 4, fontSize: 15 }}>Key Ruling — 2021 SCC 31</p>
            <p style={{ fontSize: 14, lineHeight: 1.6, color: "#444" }}>
              The Court unanimously held that the law&apos;s requirement for lawyers to report client financial
              information to FINTRAC — without any solicitor-client privilege exemption — was unconstitutional.
              Solicitor-client privilege is a principle of fundamental justice. The mandatory reporting scheme was
              struck down as it applied to legal professionals. Lawyers are currently <strong>not required</strong>
              to file FINTRAC reports.
            </p>
          </div>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7 }}>
            This constitutional exemption has survived subsequent legislative attempts to modify the PCMLTFA.
            As of 2025, lawyers in Canada are not subject to mandatory FINTRAC reporting, large cash transaction
            reporting to FINTRAC, or mandatory suspicious transaction reporting to FINTRAC.
          </p>
        </section>

        <section id="lso-rules" style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, marginBottom: 12 }}>3. LSO Rules of Professional Conduct</h2>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7, marginBottom: 12 }}>
            The absence of FINTRAC obligations does not mean Ontario lawyers have no anti-money laundering
            obligations. The Law Society of Ontario&apos;s <em>Rules of Professional Conduct</em> impose independent
            professional obligations that effectively require vigilance about money laundering:
          </p>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
              <thead>
                <tr style={{ background: "#f1f5f9" }}>
                  <th style={{ textAlign: "left", padding: "10px 14px", borderBottom: "2px solid #e2e8f0" }}>Rule</th>
                  <th style={{ textAlign: "left", padding: "10px 14px", borderBottom: "2px solid #e2e8f0" }}>Obligation</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Rule 3.2-7", "A lawyer must not engage in or facilitate a transaction that the lawyer knows or ought to know is a money laundering transaction"],
                  ["Rule 3.2-1 (Know Your Client)", "A lawyer must obtain and verify the identity of clients before accepting a retainer, through a risk-based approach"],
                  ["Rule 3.4-1 (Conflicts)", "Relates to checking for conflicts — also requires a complete client identification process"],
                  ["Rule 2.1-1 (Integrity)", "General requirement to act with integrity — receiving funds known or suspected to be proceeds of crime violates this rule"],
                  ["Rule 7.8-1 (Withdrawal)", "A lawyer must withdraw from a retainer where continued representation would facilitate money laundering"],
                ].map(([rule, obligation], i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? "#fff" : "#f8fafc" }}>
                    <td style={{ padding: "10px 14px", borderBottom: "1px solid #e2e8f0", fontWeight: 600, verticalAlign: "top" }}>{rule}</td>
                    <td style={{ padding: "10px 14px", borderBottom: "1px solid #e2e8f0", verticalAlign: "top", color: "#444" }}>{obligation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="client-id" style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, marginBottom: 12 }}>4. Client Identification (Know Your Client)</h2>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7, marginBottom: 12 }}>
            Even without FINTRAC obligations, Rule 3.2-1 requires lawyers to obtain and verify client identity
            before accepting a retainer. The LSO has published voluntary client identification and verification
            guidance that mirrors the FINTRAC approach:
          </p>

          <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>Individual Clients</h3>
          <ul style={{ paddingLeft: 24, lineHeight: 2, color: "#444", fontSize: 16, marginBottom: 16 }}>
            <li>Obtain full legal name, date of birth, address</li>
            <li>Verify identity using government-issued photo ID (passport, driver&apos;s licence)</li>
            <li>For non-face-to-face retainers: use agent verification or electronic identity verification services</li>
            <li>Record the verification method and document reference number</li>
          </ul>

          <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>Corporate Clients</h3>
          <ul style={{ paddingLeft: 24, lineHeight: 2, color: "#444", fontSize: 16, marginBottom: 16 }}>
            <li>Verify the corporation exists: obtain certificate of incorporation or articles of incorporation</li>
            <li>Obtain the names and addresses of directors</li>
            <li>Identify beneficial owners who own 25% or more of the corporation</li>
            <li>For complex corporate structures: trace beneficial ownership to natural persons</li>
          </ul>

          <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>Politically Exposed Persons (PEPs)</h3>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7 }}>
            LSO guidance recommends enhanced due diligence for politically exposed persons — current or former
            heads of state, senior government officials, senior military officers, judges, and their family members
            and associates. The connection between political exposure and proceeds of crime risk is well-established
            in international anti-money laundering standards.
          </p>
        </section>

        <section id="cash" style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, marginBottom: 12 }}>5. Cash Payments and Retainers</h2>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7, marginBottom: 12 }}>
            While Ontario lawyers are not required to report large cash transactions to FINTRAC, receiving
            significant unexplained cash raises serious professional responsibility concerns:
          </p>
          <ul style={{ paddingLeft: 24, lineHeight: 2, color: "#444", fontSize: 16 }}>
            <li>
              <strong>LSO By-Law 9 and trust accounting:</strong> All cash received into trust must be recorded
              with the source identified. The LSO&apos;s trust account rules effectively require you to document
              why cash was received and from whom.
            </li>
            <li>
              <strong>Criminal Code s. 462.31:</strong> Receiving proceeds of crime — even unknowingly if you
              &quot;ought to have known&quot; — is an offence. Lawyers who receive large unexplained cash are at
              risk if those funds turn out to be proceeds of crime.
            </li>
            <li>
              <strong>Professional conduct:</strong> The LSO investigates lawyers who routinely receive large
              cash payments and cannot explain the source.
            </li>
          </ul>
          <div style={{ background: "#fef9c3", border: "1px solid #fde68a", borderRadius: 8, padding: 16, marginTop: 16 }}>
            <p style={{ fontWeight: 700, marginBottom: 4, fontSize: 15 }}>Practical Guidance</p>
            <p style={{ fontSize: 14, lineHeight: 1.6, color: "#444" }}>
              Many Ontario lawyers adopt a firm policy of not accepting cash payments over $1,000–$3,000 and
              requiring bank drafts, certified cheques, or electronic transfers for larger amounts. This eliminates
              most cash-related risk without requiring FINTRAC-level analysis of every cash transaction.
            </p>
          </div>
        </section>

        <section id="suspicious" style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, marginBottom: 12 }}>6. Refusing Suspicious Retainers</h2>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7, marginBottom: 12 }}>
            Rule 3.2-7 of the <em>Rules of Professional Conduct</em> prohibits a lawyer from engaging in or
            facilitating any transaction the lawyer knows or ought to know is a money laundering transaction.
            Red flags that trigger Rule 3.2-7 scrutiny include:
          </p>
          <ul style={{ paddingLeft: 24, lineHeight: 2, color: "#444", fontSize: 16 }}>
            <li>Client cannot explain the legitimate source of large funds</li>
            <li>Retainer paid by a third party with no connection to the legal matter</li>
            <li>Transaction structured to avoid round numbers or reporting thresholds</li>
            <li>Client asks you to hold funds without a clear legal purpose</li>
            <li>Rapid movement of funds through your trust account with no clear legal work product</li>
            <li>Real property transactions involving unexplained price variations from assessed value</li>
            <li>Client refuses to provide identification or explains identity with implausible documents</li>
          </ul>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7, marginTop: 12 }}>
            You do not need certainty that a transaction is money laundering. The standard is &quot;knows or
            ought to know.&quot; If a reasonable lawyer in your position, aware of all the circumstances, would
            have serious concerns — you must either satisfy yourself the transaction is legitimate or decline the
            retainer.
          </p>
        </section>

        <section id="withdrawal" style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, marginBottom: 12 }}>7. Withdrawal and Mid-Retainer Concerns</h2>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7, marginBottom: 12 }}>
            If money laundering concerns arise during a retainer — after you have already accepted the client —
            Rule 7.8-1 requires you to withdraw if continued representation would facilitate the illegal activity.
          </p>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7, marginBottom: 12 }}>
            The challenge is that solicitor-client privilege prevents you from telling others — including FINTRAC —
            why you are withdrawing. You may simply state that you are unable to continue acting and cannot
            elaborate further. You must return trust funds to the client, less any fees actually earned.
          </p>
          <div style={{ background: "#fef2f2", border: "1px solid #fecaca", borderRadius: 8, padding: 16 }}>
            <p style={{ fontWeight: 700, marginBottom: 4, fontSize: 15, color: "#991b1b" }}>Warning: Tipping Off</p>
            <p style={{ fontSize: 14, lineHeight: 1.6, color: "#444" }}>
              While lawyers are not required to file FINTRAC suspicious transaction reports, you should also not
              tip off a client that law enforcement or regulators are investigating them when you become aware of
              an investigation through confidential communications. This can constitute obstruction of justice
              under Criminal Code s. 139 or breach of other legal obligations.
            </p>
          </div>
        </section>

        <section id="real-estate" style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, marginBottom: 12 }}>8. Real Estate and High-Risk Transactions</h2>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7, marginBottom: 12 }}>
            Real estate transactions are a primary vehicle for money laundering in Canada. Ontario real estate
            lawyers face heightened vigilance expectations:
          </p>
          <ul style={{ paddingLeft: 24, lineHeight: 2, color: "#444", fontSize: 16 }}>
            <li>
              <strong>Source of funds:</strong> For purchases over $100,000, obtain confirmation of legitimate
              source of funds (bank statements, mortgage commitment letters) before closing
            </li>
            <li>
              <strong>Beneficial ownership:</strong> Where the buyer is a corporation or trust, identify the
              natural persons who ultimately own or control the entity
            </li>
            <li>
              <strong>Third-party deposits:</strong> Deposits paid by someone other than the buyer require
              explanation and source-of-funds documentation
            </li>
            <li>
              <strong>Price manipulation:</strong> Transactions where the stated price is dramatically different
              from assessed value require explanation
            </li>
            <li>
              <strong>Assignment flips:</strong> Pre-construction assignments with rapid appreciation may indicate
              speculation or laundering — enhanced due diligence warranted
            </li>
          </ul>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7, marginTop: 12 }}>
            The LSO&apos;s real estate title insurance fraud guidelines and the Land Titles Assurance Fund rules
            also impose documentation requirements on real estate lawyers that overlap with AML compliance.
          </p>
        </section>

        <section id="records" style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, marginBottom: 12 }}>9. Record Keeping</h2>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7, marginBottom: 12 }}>
            The LSO requires lawyers to maintain records documenting client identification and verification. These
            records must be retained for a minimum of six years after the end of the retainer:
          </p>
          <ul style={{ paddingLeft: 24, lineHeight: 2, color: "#444", fontSize: 16 }}>
            <li>Copy of the government ID used for verification (or electronic verification reference)</li>
            <li>For corporations: articles of incorporation, director list, beneficial ownership documentation</li>
            <li>Date of verification and name of lawyer who performed it</li>
            <li>Any third-party verification documentation</li>
            <li>Records of the transaction itself — trust deposits, disbursements, final accounting</li>
          </ul>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7, marginTop: 12 }}>
            These records are separate from trust accounting records (retained 10 years) and general client file
            records (retained per LSO file management obligations).
          </p>
        </section>

        <section id="paralegal" style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, marginBottom: 12 }}>10. Paralegal AML Obligations</h2>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7, marginBottom: 12 }}>
            Licensed paralegals have the same fundamental obligations as lawyers regarding money laundering under
            the <em>Paralegal Rules of Conduct</em>:
          </p>
          <ul style={{ paddingLeft: 24, lineHeight: 2, color: "#444", fontSize: 16 }}>
            <li>Rule 3.02(3): Paralegals must not engage in or facilitate transactions known or ought to be known to be money laundering</li>
            <li>Know-your-client identification requirements apply to all new paralegal retainers</li>
            <li>Cash payment concerns and suspicious retainer analysis apply equally</li>
            <li>Trust accounting obligations (By-Law 9) require source-of-funds documentation for all trust receipts</li>
          </ul>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7, marginTop: 12 }}>
            The FINTRAC constitutional exemption extends to paralegals as legal service providers under the
            Law Society Act. Paralegals are also not required to file FINTRAC reports.
          </p>
        </section>

        <section style={{ background: "#eff6ff", borderRadius: 12, padding: 28, marginBottom: 40 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>Automate Client ID and Trust Records with Atticus</h2>
          <p style={{ fontSize: 15, color: "#444", lineHeight: 1.7, marginBottom: 16 }}>
            Atticus&apos;s client intake forms capture identification details at onboarding. Trust accounting records
            document every receipt with source and purpose. Canadian data residency keeps client records in Canada
            where they belong.
          </p>
          <Link
            href="/sign-up"
            style={{
              display: "inline-block",
              background: "#2563eb",
              color: "#fff",
              padding: "12px 28px",
              borderRadius: 8,
              fontWeight: 600,
              fontSize: 15,
              textDecoration: "none",
            }}
          >
            Start Free Trial
          </Link>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 20 }}>Frequently Asked Questions</h2>
          {[
            {
              q: "Are Ontario lawyers required to report to FINTRAC?",
              a: "No. The Supreme Court of Canada has held that mandatory FINTRAC reporting by lawyers violates solicitor-client privilege and is unconstitutional (Law Society of BC v Canada 2021 SCC 31). Ontario lawyers are not required to file FINTRAC reports, but they have separate LSO professional conduct obligations regarding money laundering.",
            },
            {
              q: "What is the $10,000 cash rule for Ontario lawyers?",
              a: "There is no mandatory FINTRAC $10,000 cash transaction reporting obligation for lawyers. However, receiving large unexplained cash payments creates professional conduct risk and potential Criminal Code s. 462.31 liability if funds turn out to be proceeds of crime. Most Ontario lawyers adopt internal policies limiting cash acceptance.",
            },
            {
              q: "What are Ontario lawyers' obligations regarding money laundering?",
              a: "Ontario lawyers must: refuse retainers where they know or ought to know funds are proceeds of crime (Rule 3.2-7); conduct know-your-client identification for all retainers; withdraw if continued representation would facilitate money laundering (Rule 7.8-1); and maintain client identification records for six years.",
            },
            {
              q: "Does solicitor-client privilege protect lawyers from money laundering liability?",
              a: "Solicitor-client privilege protects confidential communications — it does not provide a defence to participating in money laundering. Receiving proceeds of crime through trust accounts, even unknowingly but negligently, can result in professional discipline and potential criminal liability.",
            },
          ].map((faq, i) => (
            <div key={i} style={{ marginBottom: 20, paddingBottom: 20, borderBottom: i < 3 ? "1px solid #e2e8f0" : "none" }}>
              <h3 style={{ fontSize: 17, fontWeight: 600, marginBottom: 6 }}>{faq.q}</h3>
              <p style={{ fontSize: 15, color: "#444", lineHeight: 1.7 }}>{faq.a}</p>
            </div>
          ))}
        </section>

        <section>
          <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16 }}>Related Articles</h2>
          <ul style={{ paddingLeft: 0, listStyle: "none", lineHeight: 2 }}>
            {[
              { href: "/blog/trust-accounting-guide-ontario", label: "Ontario Trust Accounting Guide" },
              { href: "/lso-ai-guidance", label: "LSO AI Guidance for Ontario Lawyers" },
              { href: "/blog/ontario-paralegal-trust-accounting", label: "Paralegal Trust Accounting Rules" },
              { href: "/ontario-legal-software", label: "Ontario Legal Software Comparison" },
            ].map((link) => (
              <li key={link.href}>
                <Link href={link.href} style={{ color: "#2563eb", textDecoration: "none", fontSize: 15 }}>
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
