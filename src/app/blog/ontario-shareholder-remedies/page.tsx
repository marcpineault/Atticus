import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ontario Shareholder Remedies: Oppression, Derivative Actions, and Wind-Up | Atticus Blog",
  description:
    "A practical guide to Ontario shareholder remedies — the OBCA oppression remedy, derivative actions, winding-up orders, unanimous shareholder agreements, and the leading cases.",
  openGraph: {
    title: "Ontario Shareholder Remedies: Oppression, Derivative Actions, and Wind-Up",
    description:
      "OBCA oppression remedy, derivative actions, winding-up, and shareholder agreements under Ontario corporate law.",
    type: "article",
    publishedTime: "2026-03-19",
  },
};

export default function OntarioShareholderRemedies() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Ontario Shareholder Remedies: Oppression, Derivative Actions, and Wind-Up",
    description:
      "OBCA oppression remedy, derivative actions, winding-up, and shareholder agreements under Ontario corporate law.",
    datePublished: "2026-03-19",
    author: {
      "@type": "Organization",
      name: "Atticus",
    },
    publisher: {
      "@type": "Organization",
      name: "Atticus",
      url: "https://getatticus.ca",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <header className="mb-10">
          <div className="mb-4 flex items-center gap-3 text-sm text-gray-500">
            <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-medium text-sky-700">
              Corporate Law
            </span>
            <time dateTime="2026-03-19">March 19, 2026</time>
            <span>14 min read</span>
          </div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900">
            Ontario Shareholder Remedies: Oppression, Derivative Actions, and Wind-Up
          </h1>
          <p className="text-xl text-gray-600">
            The <em>Business Corporations Act</em>, RSO 1990, c B.16 (OBCA) provides a suite
            of shareholder remedies — the oppression remedy, derivative actions, winding-up,
            and compliance orders — that Ontario corporate lawyers use to protect minority
            shareholders and resolve corporate disputes.
          </p>
        </header>

        <div className="prose prose-gray max-w-none">
          <h2>The Oppression Remedy</h2>
          <p>
            The oppression remedy under OBCA s.248 is the most important shareholder protection
            in Ontario corporate law. It allows the court to make any order it thinks fit to
            rectify the matters complained of, where:
          </p>
          <ul>
            <li>
              The acts of the corporation or its affiliates, or the conduct of the directors or
              officers, are <strong>oppressive</strong> or <strong>unfairly prejudicial</strong>
              to the interests of a security holder, creditor, director, or officer; or
            </li>
            <li>
              Such acts or conduct <strong>unfairly disregard</strong> the interests of a
              security holder, creditor, director, or officer.
            </li>
          </ul>
          <p>
            The three-part standard — oppression, unfair prejudice, unfair disregard — is
            read on a spectrum from most serious (oppression) to least serious (unfair disregard).
            Any of the three thresholds can ground an application.
          </p>

          <h3>The BCE Two-Part Test</h3>
          <p>
            The Supreme Court of Canada in <em>BCE Inc v 1976 Debentureholders</em>,
            2008 SCC 69, established the governing framework for oppression claims:
          </p>
          <ol>
            <li>
              <strong>Does the claimant have a reasonable expectation?</strong> The court
              identifies the reasonable expectations of the claimant arising from the
              relationship between the parties, the underlying legal context, and the conduct
              of the parties over time. Reasonable expectations are informed by: the corporate
              constitution (articles, by-laws, USA), the course of dealing, representations
              by the board/management, and general legal norms for the type of corporation.
            </li>
            <li>
              <strong>Was that expectation defeated by oppressive, unfairly prejudicial, or
              unfairly disregarding conduct?</strong> The conduct must be burdensome, harsh,
              and wrongful, or at minimum conduct that a reasonable person would view as
              unfairly prejudicial.
            </li>
          </ol>
          <p>
            Importantly, <em>BCE</em> held that the oppression remedy is not merely a tool for
            minority shareholders — it can be used by creditors, directors, and officers. However,
            the applicant must demonstrate their own reasonable expectations, not just a harm to
            the corporation generally (which is addressed by derivative action).
          </p>

          <h3>Common Oppression Scenarios</h3>
          <p>
            Courts in Ontario have found oppression in:
          </p>
          <ul>
            <li>Dilution of a minority shareholder&apos;s interest through unauthorized share issuance without proper authorization or at undervalue</li>
            <li>Exclusion of a minority shareholder from corporate management in a quasi-partnership corporation</li>
            <li>Failure to pay dividends while majority shareholders draw excessive salaries</li>
            <li>Related-party transactions at non-arm&apos;s-length terms that benefit controlling shareholders at the expense of the company</li>
            <li>Misappropriation of corporate assets by directors/officers</li>
            <li>Denial of access to corporate records</li>
            <li>Failure to hold required meetings</li>
          </ul>
          <p>
            <strong>Quasi-partnership corporations</strong>: Where a closely-held corporation
            operates as a quasi-partnership (shareholders were friends or business partners who
            had reasonable expectations of participation in management), courts are more ready to
            find oppression when a shareholder is excluded from management — even if the exclusion
            is technically lawful under the corporate constitution.
          </p>

          <h3>Remedies</h3>
          <p>
            The OBCA s.248(3) gives the court broad discretion to make any order it sees fit,
            including:
          </p>
          <ul>
            <li>Restraining the corporation from conducting business</li>
            <li>Appointing a receiver or receiver-manager</li>
            <li>Amending the articles or by-laws</li>
            <li>Directing the purchase of shares (buyout) at fair value</li>
            <li>Varying or setting aside any transaction</li>
            <li>Compensating an aggrieved person</li>
            <li>Winding-up the corporation</li>
            <li>Directing the corporation to comply with its articles</li>
          </ul>
          <p>
            The buyout (fair value share purchase) is the most common remedy in shareholder
            disputes. <strong>Fair value</strong> does not mean fair market value — it is the
            proportionate value of the shares as a going concern, without any minority discount.
            Valuation evidence is essential in buyout proceedings.
          </p>

          <h2>Derivative Actions</h2>
          <p>
            A derivative action allows a shareholder or director to bring a claim on behalf of
            the corporation — asserting wrongs done to the corporation rather than the individual
            shareholder (OBCA s.246). The derivative action remedies the gap where the wrongdoers
            control the board and will not cause the corporation to sue itself.
          </p>
          <p>
            <strong>Leave requirement</strong>: A complainant must first obtain leave from the
            court before commencing a derivative action (s.246(1)). The test for leave:
          </p>
          <ul>
            <li>The complainant has made reasonable efforts to cause the directors to take up the matter</li>
            <li>The complainant is acting in good faith</li>
            <li>It appears to be in the interests of the corporation that the action be brought</li>
          </ul>
          <p>
            <strong>Who is a &ldquo;complainant&rdquo;</strong>: A security holder, director, officer, or
            &ldquo;any other person who, in the discretion of the court, is a proper person to make
            an application&rdquo; (OBCA s.245). Former shareholders may qualify in some circumstances.
          </p>
          <p>
            <strong>Costs</strong>: The court may order the corporation to pay the reasonable
            costs of the derivative action out of the proceeds recovered (s.247). This is an
            important protection for minority shareholders who may not have resources to fund
            complex litigation.
          </p>

          <h2>Winding-Up Orders</h2>
          <p>
            A court may order the winding-up of a corporation on the application of a complainant
            under OBCA s.207 if:
          </p>
          <ul>
            <li>
              <strong>The corporation has acted or is acting in a manner that is oppressive or
              unfairly prejudicial</strong> (incorporates the oppression standard)
            </li>
            <li>
              <strong>Just and equitable</strong>: Winding-up would be just and equitable — the
              broadest ground, used in quasi-partnership deadlock situations where the underlying
              relationship of mutual trust and confidence between shareholders has irretrievably
              broken down
            </li>
          </ul>
          <p>
            Winding-up is a remedy of last resort — courts prefer less drastic remedies (buyout,
            injunction) where possible. In practice, the threat of a winding-up order is often
            used as leverage to negotiate a buyout on acceptable terms.
          </p>

          <h2>Unanimous Shareholder Agreements</h2>
          <p>
            A unanimous shareholder agreement (USA) under OBCA s.108 restricts the power of the
            directors to manage the business and affairs of the corporation — a power that
            shareholders can assume by unanimous agreement. Key features:
          </p>
          <ul>
            <li>
              <strong>Directors&apos; fiduciary duties shift</strong>: To the extent directors&apos;
              powers are restricted by a USA, the shareholders (or those who assume the restricted
              powers) are subject to the same fiduciary duties as directors (s.108(5)).
            </li>
            <li>
              <strong>Transfer restrictions</strong>: USAs commonly include rights of first refusal,
              drag-along and tag-along rights, and shotgun buyout provisions.
            </li>
            <li>
              <strong>Deadlock mechanisms</strong>: USAs often address deadlock between equal
              shareholders (50/50 corporations) with mediation, arbitration, or shotgun provisions.
            </li>
            <li>
              <strong>Disclosure to purchasers</strong>: Where a USA is in force, it must be noted
              on share certificates (s.108(6)). A purchaser of shares who has notice of a USA is
              bound by it; a purchaser without notice takes free.
            </li>
          </ul>

          <h2>Compliance Orders</h2>
          <p>
            Under OBCA s.253, a court may order a corporation or its directors or officers to
            comply with the OBCA, its articles, by-laws, or any unanimous shareholder agreement.
            Compliance orders are a simpler remedy than oppression for discrete violations of
            corporate governance rules — access to books and records (s.145), holding required
            meetings, or following proper notice procedures.
          </p>

          <h2>Summary</h2>
          <p>
            Ontario shareholder remedies have been significantly shaped by the Supreme Court&apos;s
            BCE decision, which grounded the oppression remedy in the concept of reasonable
            expectations. Practitioners must carefully map the relationship between the parties,
            the corporate constitution, and representations made to identify the reasonable
            expectations that ground an oppression claim. The broad remedial discretion under
            s.248(3) — particularly the buyout at fair value without minority discount — makes
            the oppression remedy a powerful tool in shareholder disputes.
          </p>
          <p>
            Atticus helps Ontario corporate lawyers manage complex multi-party shareholder
            disputes, track litigation milestones, and organize corporate records — with
            LSO-compliant trust accounting for retainers and settlement funds.
          </p>
        </div>

        <div className="mt-12 rounded-xl bg-sky-50 p-8 text-center">
          <h3 className="mb-2 text-xl font-bold text-gray-900">
            Practice Management for Ontario Corporate Lawyers
          </h3>
          <p className="mb-6 text-gray-600">
            Deadline tracking, trust accounting, matter management, and AI document analysis —
            built for Ontario corporate and commercial practice.
          </p>
          <a
            href="/sign-up"
            className="inline-block rounded-lg bg-sky-600 px-6 py-3 font-semibold text-white hover:bg-sky-700"
          >
            Start Free Trial
          </a>
        </div>
      </article>
    </>
  );
}
