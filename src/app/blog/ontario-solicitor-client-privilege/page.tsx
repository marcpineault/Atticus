import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ontario Solicitor-Client Privilege Guide 2024 | Privilege for Lawyers",
  description:
    "A practical guide to Ontario solicitor-client privilege and litigation privilege: what is protected, waiver, crime-fraud exception, the common interest doctrine, implied waiver, and the dominant purpose test for litigation privilege — for Ontario lawyers managing client files.",
  openGraph: {
    title: "Ontario Solicitor-Client Privilege Guide 2024 | Privilege for Lawyers",
    description:
      "Ontario solicitor-client privilege: what qualifies, waiver (express and implied), crime-fraud exception, litigation privilege dominant purpose test, common interest doctrine, and privilege claims in discovery. A guide for Ontario lawyers.",
    url: "https://getatticus.ca/blog/ontario-solicitor-client-privilege",
    siteName: "Atticus",
    type: "article",
  },
};

const articleSchema = `{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Ontario Solicitor-Client Privilege: What Is Protected, Waiver, and the Crime-Fraud Exception",
  "description": "Ontario solicitor-client privilege and litigation privilege: what qualifies, waiver, crime-fraud exception, common interest doctrine, and privilege in discovery.",
  "author": {
    "@type": "Organization",
    "name": "Atticus"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Atticus",
    "url": "https://getatticus.ca"
  },
  "url": "https://getatticus.ca/blog/ontario-solicitor-client-privilege",
  "mainEntityOfPage": "https://getatticus.ca/blog/ontario-solicitor-client-privilege"
}`;

const faqSchema = `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What communications are protected by solicitor-client privilege in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Solicitor-client privilege (legal advice privilege) protects confidential communications between a lawyer and client made for the purpose of obtaining or giving legal advice. The three elements established in Solosky v Canada [1980] 1 SCR 821 and confirmed in Descôteaux v Mierzwinski [1982] 1 SCR 860 are: (1) a communication between a solicitor and a client; (2) which entails the seeking or giving of legal advice; and (3) which is intended to be confidential. The privilege belongs to the client, not the lawyer, and can only be waived by the client."
      }
    },
    {
      "@type": "Question",
      "name": "What is litigation privilege in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Litigation privilege protects documents and communications prepared for the dominant purpose of anticipated or actual litigation. Unlike solicitor-client privilege, litigation privilege extends beyond lawyer-client communications — it covers communications with third parties (experts, witnesses, investigators) prepared for litigation purposes. The dominant purpose test requires that the primary purpose of creating the document be litigation preparation; if litigation was only one of several purposes and not the dominant one, the privilege may not attach. Litigation privilege ends when the litigation concludes."
      }
    },
    {
      "@type": "Question",
      "name": "When is solicitor-client privilege waived in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Solicitor-client privilege may be waived expressly (the client discloses the communication) or impliedly. Implied waiver occurs where a client puts the legal advice at issue in litigation — for example, by asserting a defence of good faith reliance on legal advice, or by suing the lawyer for negligence. Partial disclosure of privileged communications may waive privilege over related communications (subject to fairness). Disclosure to third parties (other than agents of the lawyer or client) generally waives privilege unless the disclosure was inadvertent or made under the common interest doctrine."
      }
    },
    {
      "@type": "Question",
      "name": "What is the crime-fraud exception to solicitor-client privilege?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The crime-fraud exception provides that communications made in furtherance of a crime or fraud are not protected by solicitor-client privilege — even if the client communicated with the lawyer in confidence. The exception was confirmed by the Supreme Court of Canada in Descôteaux v Mierzwinski and applies where: (1) there is prima facie evidence that the lawyer's assistance was sought to enable the commission of a crime or fraud; and (2) the communication was made for that purpose. A lawyer who discovers a client is using the retainer to facilitate ongoing crime or fraud must refuse to continue the representation."
      }
    },
    {
      "@type": "Question",
      "name": "What is the common interest doctrine in privilege law?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The common interest doctrine allows privileged communications to be shared among parties who have a common legal interest — typically co-defendants, potential partners in a transaction, or affiliated entities — without waiving privilege as against third parties. The doctrine requires: (1) a common legal interest (not merely a commercial interest) between the parties; (2) the communication was made to further that common interest; and (3) the disclosure was made in confidence. Communications shared under a joint defence agreement between co-defendants and their respective counsel are a common application of this doctrine."
      }
    }
  ]
}`;

export default function OntarioSolicitorClientPrivilegePage() {
  return (
    <>
      <Script id="privilege-article-schema" type="application/ld+json">
        {articleSchema}
      </Script>
      <Script id="privilege-faq-schema" type="application/ld+json">
        {faqSchema}
      </Script>

      <div className="min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <div className="mb-8">
            <Link
              href="/blog"
              className="text-sm text-amber-700 hover:text-amber-900 font-medium"
            >
              ← Back to Blog
            </Link>
          </div>

          <header className="mb-12">
            <div className="inline-block bg-amber-100 text-amber-800 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              Evidence & Practice
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-4 leading-tight">
              Ontario Solicitor-Client Privilege: What Is Protected, Waiver, and the Crime-Fraud Exception
            </h1>
            <p className="text-lg text-slate-600">
              Solicitor-client privilege is described by the Supreme Court of
              Canada as a fundamental civil and legal right — &quot;a rule of
              evidence and a positive right of constitutional stature.&quot;
              Every Ontario lawyer must understand what communications are
              protected, how privilege is waived, the distinction between
              solicitor-client privilege and litigation privilege, and the
              crime-fraud exception. This guide covers the key principles
              for Ontario practitioners.
            </p>
          </header>

          <article className="prose prose-slate max-w-none">
            <h2>Solicitor-Client Privilege: The Three-Part Test</h2>
            <p>
              Solicitor-client privilege (also called legal advice privilege)
              protects confidential communications between lawyer and client
              made for the purpose of seeking or giving legal advice. The
              Supreme Court of Canada in{" "}
              <em>Solosky v Canada</em> [1980] 1 SCR 821 articulated the
              three-part test:
            </p>
            <ol>
              <li>A communication between a solicitor and a client</li>
              <li>
                Which entails the seeking or giving of legal advice (not
                merely business advice or administrative information)
              </li>
              <li>Which is intended to be confidential</li>
            </ol>
            <p>
              The Supreme Court in{" "}
              <em>Descôteaux v Mierzwinski</em> [1982] 1 SCR 860 confirmed
              that the privilege protects not just communications in litigation
              but any communication made for the purpose of obtaining legal advice
              from a lawyer.
            </p>
            <p>
              In <em>Lavallee, Rackel &amp; Heintz v Canada (AG)</em> [2002]
              3 SCR 209, the Court reaffirmed that solicitor-client privilege
              &quot;must be as close to absolute as possible&quot; to maintain
              public confidence in the administration of justice.
            </p>

            <h2>What Is (and Is Not) Protected</h2>
            <h3>Protected Communications</h3>
            <ul>
              <li>
                Letters, emails, and memoranda from lawyer to client conveying
                legal advice
              </li>
              <li>
                Client communications to lawyer seeking legal advice
              </li>
              <li>
                Lawyer&apos;s internal notes and memoranda reflecting legal
                advice given to the client
              </li>
              <li>
                Communications through agents of the lawyer (students, law
                clerks) in the course of obtaining or conveying legal advice
              </li>
              <li>
                Documents prepared by the client at the lawyer&apos;s direction
                to enable the lawyer to provide legal advice
              </li>
            </ul>

            <h3>Not Protected</h3>
            <ul>
              <li>
                Business advice (e.g., whether to accept a deal from a
                commercial perspective — distinct from the legal advice on
                the deal)
              </li>
              <li>
                Accounting, tax preparation, or other non-legal professional
                services rendered by a lawyer
              </li>
              <li>
                Pre-existing documents handed to a lawyer that were created
                for other purposes (though some may be protected by litigation
                privilege)
              </li>
              <li>
                The fact of the existence of a retainer (typically not
                privileged — though the content of the retainer is)
              </li>
              <li>
                The client&apos;s identity (generally not privileged, with
                narrow exceptions where disclosure would effectively reveal
                privileged communications)
              </li>
            </ul>

            <h2>Litigation Privilege</h2>
            <p>
              Litigation privilege (work product doctrine) is a distinct
              but related privilege that protects:
            </p>
            <ul>
              <li>
                Documents and communications prepared for the dominant
                purpose of anticipated or existing litigation
              </li>
              <li>
                Communications with third parties (experts, witnesses, private
                investigators) created for litigation purposes
              </li>
            </ul>
            <p>
              The <strong>dominant purpose test</strong> requires that litigation
              preparation be the primary (dominant) purpose for creating the
              document. If documents were created for both litigation and
              business purposes, and neither clearly dominates, the privilege
              may not attach.
            </p>
            <p>
              Unlike solicitor-client privilege, litigation privilege has a
              temporal limit — it ends when the litigation concludes.
              In{" "}
              <em>Blank v Canada (Minister of Justice)</em> [2006] 2 SCR 319,
              the Supreme Court confirmed that litigation privilege is
              premised on the adversarial litigation process and does not
              protect documents against use in collateral proceedings after
              the original litigation concludes.
            </p>

            <h2>Waiver of Privilege</h2>
            <h3>Express Waiver</h3>
            <p>
              The client expressly discloses privileged communications to
              a third party — waiving privilege as against all parties. The
              decision to waive must be voluntary and informed. Only the
              client (not the lawyer) can waive solicitor-client privilege.
            </p>

            <h3>Implied Waiver</h3>
            <p>
              Implied waiver occurs when a party&apos;s conduct is inconsistent
              with maintaining privilege. The most common situations:
            </p>
            <ul>
              <li>
                <strong>Advice at issue</strong>: a defendant relies on
                legal advice as a defence (e.g., good faith reliance on legal
                advice as a defence to a regulatory charge) — this puts the
                content of the advice at issue and implicitly waives privilege
                over relevant communications
              </li>
              <li>
                <strong>Solicitor-client litigation</strong>: a client sues
                their lawyer for negligence — waiving privilege over communications
                relevant to the alleged negligence
              </li>
              <li>
                <strong>Fairness-based waiver</strong>: partial disclosure
                may waive privilege over related portions of the communication
                where it would be unfair to allow selective disclosure
              </li>
            </ul>

            <h3>Inadvertent Disclosure</h3>
            <p>
              Ontario courts have held that inadvertent disclosure in
              discovery does not automatically waive privilege. The court
              considers: the reasonableness of precautions taken, the
              volume of material reviewed, the time constraints, the
              scope of discovery, the extent of disclosure, and the
              promptness of the steps taken to rectify the error. Counsel
              who receive an inadvertently disclosed privileged document
              have obligations under the Rules of Professional Conduct.
            </p>

            <h2>The Crime-Fraud Exception</h2>
            <p>
              Communications made in furtherance of a crime or fraud are
              not protected by solicitor-client privilege. The crime-fraud
              exception confirmed in <em>Descôteaux</em> requires:
            </p>
            <ol>
              <li>
                Prima facie evidence that the advice was sought to enable
                the commission of a crime or fraud (a threshold of some
                evidence — not proof beyond a reasonable doubt)
              </li>
              <li>
                The communication was made for that purpose (not that the
                client simply informed the lawyer of a past crime)
              </li>
            </ol>
            <p>
              The lawyer need not know that the purpose is criminal or
              fraudulent — the exception applies even where the lawyer is
              acting innocently. This creates practical challenges: a lawyer
              who assists in what turns out to be fraud without knowledge
              may find that the client&apos;s communications were never
              privileged.
            </p>

            <h2>Common Interest Doctrine</h2>
            <p>
              The common interest doctrine allows privileged communications
              to be shared among parties with a common legal interest without
              waiving privilege as against third parties. Applications include:
            </p>
            <ul>
              <li>
                <strong>Co-defendants</strong> sharing a joint defence
                strategy — communications between co-defendants and their
                respective counsel pursuant to a joint defence agreement
              </li>
              <li>
                <strong>Affiliated corporations</strong> — communications
                shared within a corporate group may be protected where
                the parties share a common legal interest
              </li>
              <li>
                <strong>Transaction parties</strong> — legal advice shared
                between purchaser and vendor in certain circumstances (though
                this is contested)
              </li>
            </ul>
            <p>
              The doctrine requires a common <em>legal</em> interest — a
              shared commercial interest is insufficient. A formal common
              interest or joint defence agreement is advisable to document
              the arrangement.
            </p>

            <h2>Privilege Claims in Discovery</h2>
            <p>
              In Ontario civil litigation, a party claiming privilege over
              a document must list it in their affidavit of documents (Rule
              30.03) in a &quot;Schedule B&quot; and describe the general
              nature of the privilege claimed. The receiving party may
              challenge a privilege claim by:
            </p>
            <ul>
              <li>
                Moving for an order compelling production on the basis that
                the document is not privileged
              </li>
              <li>
                Requesting the court conduct an in camera review of the
                documents to determine whether the privilege claim is
                sustainable
              </li>
            </ul>
            <p>
              Courts take privilege claims seriously and are reluctant to
              pierce privilege absent strong justification. The burden is
              on the party seeking disclosure to rebut the privilege claim.
            </p>

            <h2>Privilege in Regulatory and Administrative Proceedings</h2>
            <p>
              Solicitor-client privilege applies in regulatory and administrative
              proceedings as well as civil litigation. Government agencies,
              regulatory investigators, and tribunals with broad powers to
              compel production of documents cannot override solicitor-client
              privilege without an explicit statutory provision — and such
              provisions are constitutionally suspect.
            </p>
            <p>
              The Supreme Court in <em>Canada (Privacy Commissioner) v Blood
              Tribe Department of Health</em> [2008] 2 SCR 574 confirmed that
              the Privacy Commissioner cannot compel disclosure of privileged
              documents under PIPEDA without explicit statutory authority —
              the usual canons of statutory construction do not permit such
              an inference.
            </p>

            <h2>How Atticus Helps Ontario Lawyers Manage Privilege</h2>
            <p>
              Atticus AI processes documents uploaded to client matters —
              analyzing, summarizing, and making them searchable. Ontario
              lawyers using Atticus benefit from:
            </p>
            <ul>
              <li>
                <strong>Secure Canadian hosting</strong> — all documents
                stored on Canadian servers with encryption in transit and
                at rest; data never used to train AI models
              </li>
              <li>
                <strong>Client-scoped access</strong> — documents organized
                by matter; AI chat scoped to specific client matters or
                practice-wide as needed
              </li>
              <li>
                <strong>LSO AI guidance compliance</strong> — designed in
                accordance with Law Society of Ontario guidance on using
                AI with confidential client information
              </li>
              <li>
                <strong>Conflict checking</strong> — AI-assisted conflict
                searches to prevent retaining clients where conflicts
                may compromise privilege (e.g., former client situations)
              </li>
            </ul>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mt-10">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Secure, Canadian Practice Management for Ontario Lawyers
              </h3>
              <p className="text-slate-700 mb-4 text-sm">
                Atticus stores your client files on Canadian servers, never
                trains on your data, and is designed with LSO AI guidance in
                mind — protecting your client confidentiality obligations.
                $149 CAD per lawyer per month.
              </p>
              <Link
                href="/sign-up"
                className="inline-block bg-slate-900 text-white font-semibold px-6 py-3 rounded-lg hover:bg-slate-700 transition-colors text-sm"
              >
                Start Free Trial
              </Link>
            </div>
          </article>

          <div className="mt-12 pt-8 border-t border-slate-100">
            <h3 className="text-sm font-semibold text-slate-900 mb-4">
              Related Resources
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                {
                  href: "/blog/ontario-civil-procedure",
                  label: "Ontario Civil Procedure",
                },
                {
                  href: "/blog/ontario-professional-negligence",
                  label: "Ontario Professional Negligence",
                },
                {
                  href: "/blog/lso-ai-compliance-ontario",
                  label: "LSO AI Compliance Guide",
                },
                {
                  href: "/blog/ontario-privacy-law-lawyers",
                  label: "Ontario Privacy Law for Lawyers",
                },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-amber-700 hover:text-amber-900 font-medium underline underline-offset-2"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
