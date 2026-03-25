import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ontario Fiduciary Duty Guide 2024: Fiduciary Relationships, Duties, and Remedies",
  description:
    "Ontario fiduciary duty guide: categories of fiduciary relationships (per se and ad hoc), Hodgkinson v Simms test for ad hoc fiduciary duty, core fiduciary duties (loyalty, good faith, no conflict, no profit), remedies for breach (constructive trust, accounting of profits, equitable compensation), and fiduciary duties of lawyers, directors, and agents.",
  openGraph: {
    title: "Ontario Fiduciary Duty Guide 2024: Relationships, Duties, and Remedies",
    description:
      "Complete guide to Ontario fiduciary duty — per se fiduciary relationships (trustee, solicitor-client, director, agent), ad hoc fiduciary duty (Hodgkinson v Simms 1994 SCC), core duties of loyalty, constructive trust remedy, accounting of profits, and equitable compensation for breach.",
    url: "https://getatticus.ca/blog/ontario-fiduciary-duty",
    siteName: "Atticus",
    type: "article",
  },
  alternates: { canonical: "https://getatticus.ca/blog/ontario-fiduciary-duty" },
};

const schemaJson = `{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Ontario Fiduciary Duty Guide 2024: Fiduciary Relationships, Duties, and Remedies",
  "description": "Ontario fiduciary duty: per se and ad hoc fiduciary relationships, Hodgkinson v Simms test, core duties of loyalty and good faith, constructive trust, accounting of profits, and equitable compensation.",
  "author": {
    "@type": "Organization",
    "name": "Atticus"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Atticus",
    "url": "https://getatticus.ca"
  },
  "datePublished": "2024-12-01",
  "url": "https://getatticus.ca/blog/ontario-fiduciary-duty"
}`;

const faqSchemaJson = `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What are the per se categories of fiduciary relationship in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Per se fiduciary relationships are those recognized by law as always giving rise to fiduciary duties, regardless of the specific facts. The recognized per se categories in Canadian law include: trustee and beneficiary; solicitor and client; director and corporation; agent and principal; partner and co-partner; guardian and ward; and doctor and patient in some circumstances. In these relationships the fiduciary owes the beneficiary the full range of fiduciary duties — duty of loyalty, duty to act in good faith, duty to avoid conflicts of interest, and duty not to profit from the position without consent."
      }
    },
    {
      "@type": "Question",
      "name": "What is the test for an ad hoc fiduciary duty in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Supreme Court of Canada in Hodgkinson v Simms [1994] 3 SCR 377 held that a fiduciary duty can arise outside the per se categories (ad hoc) where the facts disclose: (1) the fiduciary has scope for the exercise of some discretion or power; (2) the fiduciary can unilaterally exercise that power or discretion in a way that affects the beneficiary's legal or practical interests; and (3) the beneficiary is peculiarly vulnerable to, or at the mercy of, the fiduciary holding the discretion or power. The vulnerability of the beneficiary is the key distinguishing element. Not every situation of trust and confidence gives rise to fiduciary duty — commercial contracts negotiated at arm's length do not generally attract fiduciary obligations."
      }
    },
    {
      "@type": "Question",
      "name": "What remedies are available for breach of fiduciary duty in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Several remedies are available for breach of fiduciary duty in Ontario: (1) Constructive trust — an equitable proprietary remedy imposing a trust on property held by the fiduciary as a result of the breach, giving the beneficiary priority over other creditors; (2) Accounting of profits — a personal remedy requiring the fiduciary to disgorge all profits made from the breach of duty, without proof of loss; (3) Equitable compensation — an award of compensation for losses caused by the breach, assessed on a more generous basis than tort damages (not limited by remoteness in the same way); and (4) Injunction — to prevent ongoing or threatened breach of fiduciary duty. The beneficiary may elect between the proprietary remedy (constructive trust) and the personal remedy (accounting of profits or equitable compensation) depending on which is more advantageous."
      }
    }
  ]
}`;

export default function OntarioFiduciaryDutyPage() {
  return (
    <>
      <Script id="ontario-fiduciary-duty-schema" type="application/ld+json">
        {schemaJson}
      </Script>
      <Script id="ontario-fiduciary-duty-faq-schema" type="application/ld+json">
        {faqSchemaJson}
      </Script>

      <div className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-amber-400 text-slate-900 text-sm font-semibold px-3 py-1 rounded-full">
                Equity
              </span>
              <span className="text-slate-400 text-sm">December 2024 &middot; 13 min read</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Ontario Fiduciary Duty Guide 2024: Fiduciary Relationships, Duties, and Remedies
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl">
              Per se fiduciary relationships (trustee, solicitor, director, agent), ad hoc
              fiduciary duty (<em>Hodgkinson v Simms</em> 1994 SCC), core fiduciary duties
              (loyalty, good faith, no conflict of interest, no unauthorized profit),
              constructive trust and accounting of profits remedies, and fiduciary
              obligations in Ontario professional relationships.
            </p>
          </div>
        </section>

        <article className="py-16 px-6">
          <div className="max-w-3xl mx-auto prose prose-slate prose-lg">

            <h2>The Fiduciary Concept</h2>
            <p>
              A fiduciary relationship is one in which one party (the fiduciary) undertakes
              to act in the best interests of another (the beneficiary) in circumstances where
              the beneficiary is vulnerable to the fiduciary&apos;s exercise of discretion
              or power. The fiduciary&apos;s duty is one of undivided loyalty — they must
              subordinate their own interests to those of the beneficiary.
            </p>
            <p>
              Fiduciary duty is an equitable concept developed by the courts of equity to
              protect persons who place confidence in others with power to affect their
              interests. The Supreme Court of Canada has consistently held that fiduciary
              duties arise from the specific nature of the relationship and not merely
              from the label given to it.
            </p>

            <h2>Categories of Fiduciary Relationship</h2>

            <h3>Per Se Fiduciary Relationships</h3>
            <p>
              Some relationships are recognized as fiduciary per se — by virtue of their
              inherent nature, without requiring proof of the specific circumstances:
            </p>
            <ul>
              <li><strong>Trustee and beneficiary</strong> — the paradigm fiduciary relationship;</li>
              <li><strong>Solicitor and client</strong> — the lawyer owes undivided loyalty to the client;</li>
              <li><strong>Director and corporation</strong> — directors owe fiduciary duties to the corporation under common law and the <em>Canada Business Corporations Act</em> / <em>Ontario Business Corporations Act</em>;</li>
              <li><strong>Agent and principal</strong> — where the agent has authority to affect the principal&apos;s legal position;</li>
              <li><strong>Partner and co-partner</strong> — partners are fiduciaries to each other in partnership matters;</li>
              <li><strong>Guardian and ward</strong> — a guardian appointed for an incapable person.</li>
            </ul>

            <h3>Ad Hoc Fiduciary Duty: Hodgkinson v Simms</h3>
            <p>
              Outside the per se categories, fiduciary duties can arise in novel relationships
              where the facts satisfy the test stated by the Supreme Court of Canada in
              <em>Hodgkinson v Simms</em> [1994] 3 SCR 377. A fiduciary duty arises ad hoc where:
            </p>
            <ol>
              <li>The alleged fiduciary has scope for the exercise of discretion or power;</li>
              <li>The alleged fiduciary can unilaterally exercise that discretion or power in a way that affects the beneficiary&apos;s legal or practical interests; and</li>
              <li>The beneficiary is peculiarly vulnerable to, or at the mercy of, the fiduciary holding the discretion or power.</li>
            </ol>
            <p>
              The vulnerability element is critical. The beneficiary must lack the ability
              to self-protect — they must be dependent on the fiduciary&apos;s good faith
              in a way that goes beyond ordinary commercial dealings. In <em>Hodgkinson</em>,
              a financial adviser who gave tax-shelter investment advice to a client who
              relied entirely on the adviser&apos;s expertise, and who had an undisclosed
              conflict of interest, was held to owe a fiduciary duty to the client.
            </p>
            <p>
              Arm&apos;s length commercial transactions negotiated between parties of equal
              bargaining power generally do not give rise to fiduciary duties — the mere
              fact that one party places trust in another does not create a fiduciary
              obligation. As the Supreme Court noted in <em>Frame v Smith</em> [1987] 2 SCR 99,
              not every relationship of trust and confidence is fiduciary.
            </p>

            <h2>Core Fiduciary Duties</h2>

            <h3>Duty of Loyalty</h3>
            <p>
              The duty of loyalty requires the fiduciary to act exclusively in the interests
              of the beneficiary in matters within the scope of the fiduciary relationship.
              The fiduciary must not prefer their own interests or the interests of third
              parties over those of the beneficiary. This duty continues even after the
              termination of the formal relationship, in respect of matters arising during
              the relationship.
            </p>

            <h3>Duty to Avoid Conflicts of Interest</h3>
            <p>
              A fiduciary must not place themselves in a position where their personal
              interest (or the interest of a third party) conflicts with their duty to
              the beneficiary, without full disclosure and informed consent. The rule
              is prophylactic — the fiduciary must avoid the conflict of interest, not
              merely resolve it in the beneficiary&apos;s favour after the fact.
            </p>
            <p>
              A fiduciary who acts in a conflict of interest situation without disclosure
              is liable for breach of fiduciary duty even if the beneficiary suffered no
              loss — the gain made by the fiduciary is held on constructive trust.
            </p>

            <h3>Duty Not to Profit</h3>
            <p>
              A fiduciary must not make a secret profit from the fiduciary position.
              Any profit — commission, gift, kickback, or benefit — received by the
              fiduciary in connection with the fiduciary relationship without the
              beneficiary&apos;s knowledge and consent is held on constructive trust
              for the beneficiary. The seminal case is <em>Boardman v Phipps</em>
              [1967] 2 AC 46, in which a solicitor who used information from a
              trust to acquire shares was required to account for the profit even
              though the trust also profited.
            </p>

            <h3>Duty of Good Faith</h3>
            <p>
              The fiduciary must act in good faith — honestly, transparently, and for
              proper purposes. A fiduciary who exercises power for an improper purpose
              (even if technically within the scope of their authority) acts in breach
              of fiduciary duty.
            </p>

            <h2>Fiduciary Duties in Professional Relationships</h2>

            <h3>Solicitor-Client Fiduciary Duty</h3>
            <p>
              A lawyer owes fiduciary duties to the client: undivided loyalty, avoidance
              of conflicts of interest, confidentiality of privileged information, and
              candid advice. The Law Society of Ontario&apos;s Rules of Professional
              Conduct codify many of these obligations. A lawyer who acts for conflicting
              interests without proper consent, or who uses client information for personal
              gain, breaches both professional conduct rules and fiduciary duty.
            </p>

            <h3>Director and Officer Fiduciary Duty</h3>
            <p>
              Directors and officers of Ontario corporations owe fiduciary duties to
              the corporation under the <em>Ontario Business Corporations Act</em>
              (OBCA) s.134: they must act honestly and in good faith with a view to
              the best interests of the corporation. The corporate opportunity doctrine
              requires directors and officers to bring corporate opportunities to the
              corporation before exploiting them personally.
            </p>

            <h3>Agent Fiduciary Duty</h3>
            <p>
              An agent who has authority to act on a principal&apos;s behalf owes
              the principal fiduciary duties of loyalty, no secret profit, and duty
              to account. Real estate agents, business brokers, and financial advisers
              in agency relationships are all subject to fiduciary obligations in
              connection with the agency.
            </p>

            <h2>Remedies for Breach of Fiduciary Duty</h2>

            <h3>Constructive Trust</h3>
            <p>
              A constructive trust is imposed where a fiduciary holds property as a
              result of a breach of fiduciary duty. The beneficiary is treated as the
              equitable owner of the property — or a share of it in proportion to
              the gain attributable to the breach — giving priority over the fiduciary&apos;s
              other creditors. The constructive trust arises at the date of the breach,
              not at the date of judgment.
            </p>

            <h3>Accounting of Profits</h3>
            <p>
              An accounting of profits is a personal remedy requiring the fiduciary to
              disgorge all profits made from the breach of duty. Unlike damages, an
              accounting does not require proof of loss. The beneficiary is entitled to
              the profits actually made, not merely reasonable compensation.
            </p>

            <h3>Equitable Compensation</h3>
            <p>
              Equitable compensation compensates the beneficiary for losses caused by
              the breach of fiduciary duty. The standard for equitable compensation
              is more generous than common law damages: the loss need not be reasonably
              foreseeable if it flows directly from the breach, and the defendant bears
              the burden of proving that the loss was not caused by the breach. The
              Supreme Court of Canada confirmed this approach in <em>Canson Enterprises
              Ltd v Boughton &amp; Co</em> [1991] 3 SCR 534.
            </p>

            <h3>Injunction</h3>
            <p>
              An injunction may be sought to prevent ongoing or threatened breach of
              fiduciary duty — particularly to restrain a former fiduciary from using
              confidential information or exploiting business opportunities that should
              have been brought to the beneficiary.
            </p>

            <h2>Practice Points for Ontario Lawyers</h2>
            <ul>
              <li>
                Identify whether the relationship gives rise to fiduciary duty before
                advising on conflicts — per se categories (director, lawyer, agent)
                trigger full fiduciary obligations; ad hoc fiduciary duty requires
                vulnerability analysis under <em>Hodgkinson v Simms</em>.
              </li>
              <li>
                For corporate matters: directors must bring potential corporate opportunities
                to the board before pursuing them personally; failure to do so attracts
                both OBCA s.134 liability and breach of fiduciary duty.
              </li>
              <li>
                In solicitor-client matters: document informed consent to conflicts in
                writing before acting; verbal disclosure may be insufficient.
              </li>
              <li>
                The beneficiary may elect between the proprietary remedy (constructive
                trust over specific property) and the personal remedy (accounting or
                equitable compensation) — advise the client on which is more advantageous
                given the circumstances.
              </li>
              <li>
                Limitation periods: equitable claims for breach of fiduciary duty are
                subject to the two-year limitation period under the <em>Limitations Act,
                2002</em> from the date of discoverability, subject to equitable doctrines
                of laches and acquiescence.
              </li>
            </ul>

          </div>
        </article>

        <section className="py-12 px-6 bg-amber-50 border-t border-amber-100">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Manage Your Equity and Corporate Practice with Atticus
            </h2>
            <p className="text-slate-600 mb-6">
              Track limitation periods for fiduciary duty claims, manage corporate and
              litigation matter files, and run LSO-compliant trust accounting — all in
              one Ontario platform.
            </p>
            <Link
              href="/sign-up"
              className="inline-block bg-slate-900 text-white font-semibold px-8 py-4 rounded-lg hover:bg-slate-700 transition-colors"
            >
              Start Free Trial
            </Link>
          </div>
        </section>

        <section className="py-12 px-6 border-t border-slate-100">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-lg font-semibold text-slate-900 mb-6">Related Articles</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { href: "/blog/ontario-trust-law", label: "Ontario Trust Law" },
                { href: "/blog/ontario-unjust-enrichment", label: "Ontario Unjust Enrichment" },
                { href: "/blog/ontario-constructive-trust", label: "Ontario Constructive Trust" },
                { href: "/blog/ontario-agency-law", label: "Ontario Agency Law" },
                { href: "/blog/ontario-director-liability", label: "Ontario Director Liability" },
                { href: "/ontario-corporate-lawyer", label: "Ontario Corporate Lawyer Software" },
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
        </section>
      </div>
    </>
  );
}
