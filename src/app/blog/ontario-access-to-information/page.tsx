import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Ontario Access to Information: MFIPPA, FIPPA, and Freedom of Information Requests",
  description:
    "Complete guide to Ontario freedom of information and privacy legislation. MFIPPA (municipal records), FIPPA (provincial records), request procedures, exemptions, appeals to the Information and Privacy Commissioner, and fee disputes.",
  alternates: { canonical: "https://getatticus.ca/blog/ontario-access-to-information" },
  openGraph: {
    title: "Ontario Access to Information: MFIPPA and FIPPA Guide",
    description:
      "Ontario freedom of information guide. MFIPPA and FIPPA access requests, exemptions, IPC appeals, and fee disputes for lawyers and their clients.",
    url: "https://getatticus.ca/blog/ontario-access-to-information",
    type: "article",
  },
};

const articleSchema = `{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Ontario Access to Information: MFIPPA, FIPPA, and Freedom of Information Requests",
  "description": "Complete guide to Ontario freedom of information legislation. MFIPPA and FIPPA access requests, exemptions, IPC appeals, and practical strategy for information requests.",
  "datePublished": "2025-03-10",
  "dateModified": "2025-03-10",
  "author": { "@type": "Organization", "name": "Atticus" },
  "publisher": { "@type": "Organization", "name": "Atticus", "url": "https://getatticus.ca" },
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://getatticus.ca/blog/ontario-access-to-information" }
}`;

const faqSchema = `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the difference between MFIPPA and FIPPA in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "MFIPPA (Municipal Freedom of Information and Protection of Privacy Act) applies to municipal institutions — cities, towns, school boards, police services boards, conservation authorities, and local boards. FIPPA (Freedom of Information and Protection of Privacy Act) applies to provincial institutions — ministries, Crown agencies, hospitals, and provincial boards and commissions. Both provide a right of access to records and impose privacy obligations."
      }
    },
    {
      "@type": "Question",
      "name": "How do I submit a freedom of information request in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Submit a written request to the institution's designated Freedom of Information Coordinator along with the $5 application fee. Specify the records as clearly and specifically as possible. The institution has 30 days to respond, subject to a possible extension of up to 30 additional days (and longer in some circumstances). If the request is denied or not responded to within the deadline, you may appeal to the Information and Privacy Commissioner of Ontario."
      }
    },
    {
      "@type": "Question",
      "name": "What are the mandatory exemptions under FIPPA/MFIPPA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mandatory exemptions (institution must refuse access) include: third-party personal information (s. 21 FIPPA / s. 14 MFIPPA); information supplied in confidence under a statutory scheme or whose disclosure could reasonably be expected to prejudice the supplier (s. 17 / s. 10); law enforcement matters where disclosure could reasonably be expected to interfere with a law enforcement matter (s. 14 / s. 8); and solicitor-client privileged records (s. 19 / s. 12)."
      }
    }
  ]
}`;

export default function OntarioAccessToInformationPage() {
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
          <span>Ontario Access to Information</span>
        </nav>

        <div style={{ marginBottom: 8 }}>
          <span style={{ background: "#eff6ff", color: "#2563eb", padding: "4px 12px", borderRadius: 20, fontSize: 13, fontWeight: 600 }}>
            Administrative Law
          </span>
        </div>

        <h1 style={{ fontSize: 36, fontWeight: 800, lineHeight: 1.2, marginBottom: 16, marginTop: 12 }}>
          Ontario Access to Information: MFIPPA, FIPPA, and How to Get Government Records
        </h1>

        <p style={{ fontSize: 18, color: "#555", marginBottom: 8, lineHeight: 1.5 }}>
          14 min read &nbsp;·&nbsp; March 2025
        </p>

        <p style={{ fontSize: 18, color: "#444", lineHeight: 1.7, marginBottom: 40 }}>
          Ontario&apos;s freedom of information regime gives individuals and organizations a right of access
          to records held by provincial and municipal institutions. Understanding MFIPPA, FIPPA, and the
          Information and Privacy Commissioner&apos;s appeal process is essential for Ontario lawyers in
          administrative law, civil litigation, employment law, and any practice where government records
          are relevant to a client&apos;s matter.
        </p>

        <nav style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 10, padding: "20px 24px", marginBottom: 40 }}>
          <p style={{ fontWeight: 700, marginBottom: 8, fontSize: 15 }}>Contents</p>
          <ol style={{ paddingLeft: 20, lineHeight: 2.2, margin: 0, fontSize: 14, color: "#2563eb" }}>
            <li><a href="#legislation" style={{ color: "#2563eb" }}>The Legislation: FIPPA and MFIPPA</a></li>
            <li><a href="#institutions" style={{ color: "#2563eb" }}>Covered Institutions</a></li>
            <li><a href="#access-right" style={{ color: "#2563eb" }}>The Right of Access</a></li>
            <li><a href="#how-to-request" style={{ color: "#2563eb" }}>How to Submit a Request</a></li>
            <li><a href="#timelines" style={{ color: "#2563eb" }}>Response Timelines</a></li>
            <li><a href="#fees" style={{ color: "#2563eb" }}>Fees and Fee Waiver</a></li>
            <li><a href="#exemptions" style={{ color: "#2563eb" }}>Exemptions from Disclosure</a></li>
            <li><a href="#privacy" style={{ color: "#2563eb" }}>Privacy Protection Provisions</a></li>
            <li><a href="#ipc-appeal" style={{ color: "#2563eb" }}>Appeal to the IPC</a></li>
            <li><a href="#strategy" style={{ color: "#2563eb" }}>Strategic Use in Litigation</a></li>
          </ol>
        </nav>

        <section id="legislation" style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, marginBottom: 12 }}>1. The Legislation: FIPPA and MFIPPA</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
            <div style={{ background: "#eff6ff", borderRadius: 10, padding: 20 }}>
              <p style={{ fontWeight: 700, marginBottom: 8, fontSize: 16, color: "#1e40af" }}>FIPPA</p>
              <p style={{ fontSize: 14, fontStyle: "italic", marginBottom: 8 }}>Freedom of Information and Protection of Privacy Act, R.S.O. 1990, c. F.31</p>
              <ul style={{ paddingLeft: 20, lineHeight: 1.8, fontSize: 14, color: "#444" }}>
                <li>Applies to provincial institutions</li>
                <li>Ministries, Crown agencies, hospitals, universities</li>
                <li>Ontario Legislature excluded</li>
              </ul>
            </div>
            <div style={{ background: "#f0fdf4", borderRadius: 10, padding: 20 }}>
              <p style={{ fontWeight: 700, marginBottom: 8, fontSize: 16, color: "#166534" }}>MFIPPA</p>
              <p style={{ fontSize: 14, fontStyle: "italic", marginBottom: 8 }}>Municipal Freedom of Information and Protection of Privacy Act, R.S.O. 1990, c. M.56</p>
              <ul style={{ paddingLeft: 20, lineHeight: 1.8, fontSize: 14, color: "#444" }}>
                <li>Applies to municipal institutions</li>
                <li>Cities, towns, police services boards</li>
                <li>School boards, conservation authorities</li>
              </ul>
            </div>
          </div>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7 }}>
            Both Acts have parallel structures — the right of access, the exemptions, the privacy protection
            provisions, and the appeal mechanism are substantially similar. The key difference is the category
            of institution covered. The <em>Information and Privacy Commissioner of Ontario</em> (IPC) oversees
            both Acts.
          </p>
        </section>

        <section id="institutions" style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, marginBottom: 12 }}>2. Covered Institutions</h2>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
              <thead>
                <tr style={{ background: "#f1f5f9" }}>
                  <th style={{ textAlign: "left", padding: "10px 14px", borderBottom: "2px solid #e2e8f0" }}>Institution Type</th>
                  <th style={{ textAlign: "left", padding: "10px 14px", borderBottom: "2px solid #e2e8f0" }}>Act</th>
                  <th style={{ textAlign: "left", padding: "10px 14px", borderBottom: "2px solid #e2e8f0" }}>Examples</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Provincial ministries", "FIPPA", "Ministry of the Attorney General, Ministry of Health, Ministry of Finance"],
                  ["Crown corporations and agencies", "FIPPA", "TVO, Metrolinx, OPG, Hydro One, OHIP administration"],
                  ["Hospitals", "FIPPA", "All Ontario hospitals — patient records and administrative records"],
                  ["Colleges and universities", "FIPPA", "All Ontario publicly funded post-secondary institutions"],
                  ["Municipalities", "MFIPPA", "City of Toronto, Ottawa, Mississauga, all Ontario cities and towns"],
                  ["Police services boards", "MFIPPA", "Toronto Police Services Board, OPS boards"],
                  ["School boards", "MFIPPA", "TDSB, OCDSB, all Ontario school boards"],
                  ["Conservation authorities", "MFIPPA", "TRCA, CLOCA, all Ontario conservation authorities"],
                  ["Courts (judicial records)", "Neither", "Courts not covered — court records accessed through court services"],
                  ["Federal institutions", "Neither", "Federal ATIP request under Privacy Act / Access to Information Act"],
                ].map(([type, act, examples], i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? "#fff" : "#f8fafc" }}>
                    <td style={{ padding: "10px 14px", borderBottom: "1px solid #e2e8f0", fontWeight: 600, verticalAlign: "top" }}>{type}</td>
                    <td style={{ padding: "10px 14px", borderBottom: "1px solid #e2e8f0", verticalAlign: "top", color: "#2563eb", fontWeight: 600 }}>{act}</td>
                    <td style={{ padding: "10px 14px", borderBottom: "1px solid #e2e8f0", verticalAlign: "top", color: "#444" }}>{examples}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="access-right" style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, marginBottom: 12 }}>3. The Right of Access</h2>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7, marginBottom: 12 }}>
            FIPPA s. 10 and MFIPPA s. 4 provide a general right of access to records held by institutions,
            subject to the exemptions in the Act. The right of access is broadly construed:
          </p>
          <ul style={{ paddingLeft: 24, lineHeight: 2, color: "#444", fontSize: 16 }}>
            <li><strong>Any person</strong> may request records — not just citizens or those affected by the records</li>
            <li>No need to state a reason for the request — the institution cannot require justification</li>
            <li>Access includes inspection of records and receiving copies</li>
            <li>The right applies to records in any format — paper, electronic, audio, video</li>
          </ul>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7, marginTop: 12 }}>
            The burden is on the institution to justify any refusal to disclose — not on the requester to prove
            entitlement. This is a critical principle in IPC appeals.
          </p>
        </section>

        <section id="how-to-request" style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, marginBottom: 12 }}>4. How to Submit a Request</h2>
          <ol style={{ paddingLeft: 24, lineHeight: 2, color: "#444", fontSize: 16 }}>
            <li>
              <strong>Identify the institution:</strong> Determine whether the records are held by a FIPPA
              or MFIPPA institution and identify the specific institution (e.g., City of Toronto, Ministry of
              Health)
            </li>
            <li>
              <strong>Identify the FOI Coordinator:</strong> Every institution designates a Freedom of Information
              Coordinator — find this person on the institution&apos;s website or call the general line
            </li>
            <li>
              <strong>Submit a written request:</strong> No special form is required — a letter or email to
              the FOI Coordinator clearly identifying the records requested is sufficient. Be as specific as
              possible: date ranges, subject matter, names involved, document types
            </li>
            <li>
              <strong>Pay the $5 application fee:</strong> Both Acts require a $5 application fee payable to
              the institution. Some institutions accept credit cards; others require a cheque or money order
            </li>
            <li>
              <strong>Await the response:</strong> Institution has 30 days to respond (subject to extension)
            </li>
          </ol>
          <div style={{ background: "#fef9c3", border: "1px solid #fde68a", borderRadius: 8, padding: 16, marginTop: 16 }}>
            <p style={{ fontWeight: 700, marginBottom: 4, fontSize: 15 }}>Tip: Be Specific but Not Too Narrow</p>
            <p style={{ fontSize: 14, lineHeight: 1.6, color: "#444" }}>
              A vague request (e.g., &quot;all records relating to my client&quot;) may result in a fee
              estimate for a very large search. An overly narrow request may miss relevant records. Target your
              request to specific time periods, subject matters, or document categories. You can submit multiple
              requests to the same institution.
            </p>
          </div>
        </section>

        <section id="timelines" style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, marginBottom: 12 }}>5. Response Timelines</h2>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
              <thead>
                <tr style={{ background: "#f1f5f9" }}>
                  <th style={{ textAlign: "left", padding: "10px 14px", borderBottom: "2px solid #e2e8f0" }}>Step</th>
                  <th style={{ textAlign: "left", padding: "10px 14px", borderBottom: "2px solid #e2e8f0" }}>Timeline</th>
                  <th style={{ textAlign: "left", padding: "10px 14px", borderBottom: "2px solid #e2e8f0" }}>Notes</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Initial response deadline", "30 days from receipt of request", "Institution must respond with a decision"],
                  ["Extension — complex or third-party notice required", "Up to 30 additional days (notice required)", "Institution must notify requester of extension"],
                  ["Extension — large volume of records", "Further extension possible with IPC approval", "Rarely used for ordinary requests"],
                  ["Third-party notice", "Issued within 30-day period — 20 days for third party to respond", "When records relate to third party who may object"],
                  ["Deemed refusal", "If no response in 30 days (+ extension), deemed refusal", "Triggers right to appeal to IPC immediately"],
                  ["IPC appeal deadline", "30 days from the institution's decision or deemed refusal", "File Form A with IPC + $25 fee"],
                  ["IPC mediation", "Typically 3–6 months", "IPC mediator attempts to resolve before adjudication"],
                  ["IPC adjudication / Order", "1–3 years for complex matters", "Significant backlog at IPC"],
                ].map(([step, timeline, notes], i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? "#fff" : "#f8fafc" }}>
                    <td style={{ padding: "10px 14px", borderBottom: "1px solid #e2e8f0", fontWeight: 600, verticalAlign: "top" }}>{step}</td>
                    <td style={{ padding: "10px 14px", borderBottom: "1px solid #e2e8f0", verticalAlign: "top", color: "#2563eb", fontWeight: 600 }}>{timeline}</td>
                    <td style={{ padding: "10px 14px", borderBottom: "1px solid #e2e8f0", verticalAlign: "top", color: "#444" }}>{notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="fees" style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, marginBottom: 12 }}>6. Fees and Fee Waiver</h2>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7, marginBottom: 12 }}>
            In addition to the $5 application fee, institutions may charge additional fees for search,
            preparation, and copying costs, governed by O. Reg. 460 (FIPPA) and O. Reg. 823 (MFIPPA):
          </p>
          <ul style={{ paddingLeft: 24, lineHeight: 2, color: "#444", fontSize: 16 }}>
            <li><strong>Search time:</strong> $7.50 per 15 minutes for searching paper records; $15 per 15 minutes for programming time for electronic records</li>
            <li><strong>Preparation time:</strong> $7.50 per 15 minutes for preparing records for disclosure (redaction, etc.)</li>
            <li><strong>Photocopying:</strong> $0.20 per page</li>
            <li><strong>Fee estimate:</strong> If estimated fees exceed $25, the institution provides a fee estimate; if over $100, may require a 50% deposit before proceeding</li>
          </ul>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7, marginTop: 12 }}>
            <strong>Fee waiver:</strong> Under FIPPA s. 57(4) and MFIPPA s. 45(4), the institution must waive
            or reduce fees if: (1) the records relate to the requester&apos;s own personal information;
            (2) the fee would unreasonably deprive the requester of access; or (3) there are other public
            benefit grounds for waiver. Fee waiver appeals to the IPC are available.
          </p>
        </section>

        <section id="exemptions" style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, marginBottom: 12 }}>7. Exemptions from Disclosure</h2>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7, marginBottom: 16 }}>
            Institutions may refuse to disclose records (or portions of records) under mandatory or discretionary
            exemptions. The key exemptions under FIPPA (parallel provisions exist in MFIPPA):
          </p>

          <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>Mandatory Exemptions (institution must refuse)</h3>
          <ul style={{ paddingLeft: 24, lineHeight: 2, color: "#444", fontSize: 16, marginBottom: 16 }}>
            <li><strong>s. 21 (personal privacy):</strong> Personal information about an identifiable individual — the most commonly invoked exemption</li>
            <li><strong>s. 17 (third-party information):</strong> Information supplied in confidence whose disclosure could reasonably cause prejudice to the supplier</li>
          </ul>

          <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>Discretionary Exemptions (institution may refuse)</h3>
          <ul style={{ paddingLeft: 24, lineHeight: 2, color: "#444", fontSize: 16 }}>
            <li><strong>s. 13 (advice to government):</strong> Advice and recommendations of public servants to government — not final decisions or factual information</li>
            <li><strong>s. 14 (law enforcement):</strong> Records that could reasonably be expected to interfere with law enforcement matters, disclose information of a confidential informant, etc.</li>
            <li><strong>s. 15 (relations with other governments):</strong> Federal-provincial or inter-governmental communications</li>
            <li><strong>s. 19 (solicitor-client privilege):</strong> Records subject to solicitor-client or litigation privilege — the institution&apos;s own legal privilege, not a requester&apos;s privilege</li>
            <li><strong>s. 20 (danger to safety):</strong> Records that could reasonably be expected to endanger physical safety</li>
          </ul>
          <div style={{ background: "#fef9c3", border: "1px solid #fde68a", borderRadius: 8, padding: 16, marginTop: 16 }}>
            <p style={{ fontWeight: 700, marginBottom: 4, fontSize: 15 }}>Severance</p>
            <p style={{ fontSize: 14, lineHeight: 1.6, color: "#444" }}>
              Institutions must sever (redact) exempt portions and provide access to the rest — they cannot
              withhold entire documents because one paragraph qualifies for an exemption. If excessive
              severance occurs, appeal to the IPC.
            </p>
          </div>
        </section>

        <section id="privacy" style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, marginBottom: 12 }}>8. Privacy Protection Provisions</h2>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7, marginBottom: 12 }}>
            FIPPA and MFIPPA also regulate how institutions collect, use, and disclose personal information —
            independently of the access request mechanism. Key obligations:
          </p>
          <ul style={{ paddingLeft: 24, lineHeight: 2, color: "#444", fontSize: 16 }}>
            <li>Collection of personal information only for lawful purposes directly connected to a government function (FIPPA s. 38)</li>
            <li>Notice to individuals of the purposes for collection (s. 39)</li>
            <li>Disclosure of personal information only with consent or as authorized (s. 42)</li>
            <li>Right of individuals to request correction of their own personal information (s. 47)</li>
          </ul>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7, marginTop: 12 }}>
            Privacy complaints (about an institution&apos;s collection, use, or disclosure of personal
            information) are filed with the IPC. The IPC investigates and may order corrective action.
          </p>
        </section>

        <section id="ipc-appeal" style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, marginBottom: 12 }}>9. Appeal to the IPC</h2>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7, marginBottom: 12 }}>
            The Information and Privacy Commissioner of Ontario is an independent officer of the Legislature
            who adjudicates appeals from institution decisions. The appeal process:
          </p>
          <ol style={{ paddingLeft: 24, lineHeight: 2, color: "#444", fontSize: 16 }}>
            <li><strong>File a Notice of Appeal</strong> with the IPC within 30 days of the institution&apos;s decision (or deemed refusal)</li>
            <li><strong>Pay the $25 appeal fee</strong> — fee may be waived for personal information appeals</li>
            <li><strong>Mediation:</strong> IPC mediator contacts both parties. Most appeals resolve at mediation (partial or full disclosure)</li>
            <li><strong>Adjudication:</strong> If mediation fails, the file proceeds to an adjudicator who may order disclosure, require production of a record for review, or dismiss the appeal</li>
            <li><strong>IPC Order:</strong> IPC Orders are binding on institutions and may be appealed to Divisional Court on questions of law</li>
          </ol>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7, marginTop: 12 }}>
            The IPC has broad powers — it may require the institution to produce records for review in camera
            to determine whether an exemption applies. The IPC&apos;s jurisprudence on exemptions is extensive
            and provides detailed guidance on how each exemption is interpreted.
          </p>
        </section>

        <section id="strategy" style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, marginBottom: 12 }}>10. Strategic Use in Litigation</h2>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7, marginBottom: 12 }}>
            FOI requests are an underused litigation tool. Consider using MFIPPA/FIPPA requests:
          </p>
          <ul style={{ paddingLeft: 24, lineHeight: 2, color: "#444", fontSize: 16 }}>
            <li><strong>Police records:</strong> MFIPPA requests to police services for arrest records, occurrence reports, and investigation files (not covered by court proceedings privilege)</li>
            <li><strong>Municipal approvals:</strong> Development applications, committee minutes, staff reports — valuable in land use planning and expropriation matters</li>
            <li><strong>Hospital records:</strong> Administrative records about a patient&apos;s admission, policies, or incidents — separate from personal health records under PHIPA</li>
            <li><strong>Ministry decision records:</strong> Records behind regulatory or licensing decisions — useful in administrative law challenges</li>
            <li><strong>School board records:</strong> Bullying incident records, administrative investigations</li>
          </ul>
          <div style={{ background: "#fef9c3", border: "1px solid #fde68a", borderRadius: 8, padding: 16, marginTop: 16 }}>
            <p style={{ fontWeight: 700, marginBottom: 4, fontSize: 15 }}>FOI vs Undertakings</p>
            <p style={{ fontSize: 14, lineHeight: 1.6, color: "#444" }}>
              In civil litigation, documents held by government institutions may be obtainable through both
              FOI requests and undertakings (if the government is a party) or third-party production orders
              (if not a party). FOI requests are often faster and cheaper than court orders — consider using
              them early in the litigation to identify what documents exist before serving a more targeted
              production order.
            </p>
          </div>
        </section>

        <section style={{ background: "#eff6ff", borderRadius: 12, padding: 28, marginBottom: 40 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>Track FOI Request Deadlines with Atticus</h2>
          <p style={{ fontSize: 15, color: "#444", lineHeight: 1.7, marginBottom: 16 }}>
            Atticus extracts deadlines from correspondence and documents automatically — including FOI request
            deadlines, IPC appeal deadlines, and institution response timelines. Ontario administrative law
            lawyers use Atticus to manage multiple concurrent FOI matters without missing critical dates.
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
              q: "What is the difference between MFIPPA and FIPPA in Ontario?",
              a: "MFIPPA applies to municipal institutions (cities, police services boards, school boards, conservation authorities). FIPPA applies to provincial institutions (ministries, Crown agencies, hospitals, universities). Both provide access rights and are overseen by the Information and Privacy Commissioner of Ontario.",
            },
            {
              q: "How do I submit a freedom of information request in Ontario?",
              a: "Submit a written request to the institution's FOI Coordinator with a $5 application fee. Describe the records as specifically as possible. The institution has 30 days to respond, subject to a possible 30-day extension. If denied or no response, appeal to the IPC within 30 days.",
            },
            {
              q: "What are the mandatory exemptions under FIPPA/MFIPPA?",
              a: "Mandatory exemptions include: s. 21 personal privacy (personal information about identifiable individuals) and s. 17 third-party information (supplied in confidence whose disclosure could prejudice the supplier). Discretionary exemptions include: advice to government (s. 13), law enforcement (s. 14), and solicitor-client privilege (s. 19).",
            },
            {
              q: "How long does an IPC appeal take?",
              a: "IPC mediation typically takes 3–6 months. If the matter proceeds to adjudication, it can take 1–3 years given the IPC's backlog. Complex matters involving large institutions or novel exemption arguments take longer.",
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
              { href: "/blog/ontario-judicial-review", label: "Ontario Judicial Review" },
              { href: "/blog/ontario-administrative-law", label: "Ontario Administrative Law Guide" },
              { href: "/blog/ontario-privacy-law", label: "Ontario Privacy Law" },
              { href: "/blog/ontario-administrative-tribunal", label: "Ontario Administrative Tribunals" },
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
