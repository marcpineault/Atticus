import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ontario Privacy Tort Guide 2024: Intrusion Upon Seclusion and Publication of Private Facts",
  description:
    "Ontario privacy tort guide: intrusion upon seclusion (Jones v Tsige 2012 ONCA 32 — intentional intrusion, reasonable expectation of privacy, highly offensive to reasonable person, no proof of loss required), publication of private facts, Ontario Privacy Act RSO 1990, PIPEDA breach of privacy claims, and damages for privacy torts.",
  openGraph: {
    title: "Ontario Privacy Tort Guide 2024: Intrusion Upon Seclusion and Privacy Torts",
    description:
      "Complete guide to Ontario privacy torts — intrusion upon seclusion (Jones v Tsige 2012 ONCA 32), publication of private facts, Ontario Privacy Act RSO 1990 c P.28, PIPEDA, general damages up to $20,000, and privacy claims against employers and individuals.",
    url: "https://getatticus.ca/blog/ontario-privacy-tort",
    siteName: "Atticus",
    type: "article",
  },
  alternates: { canonical: "https://getatticus.ca/blog/ontario-privacy-tort" },
};

const schemaJson = `{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Ontario Privacy Tort Guide 2024: Intrusion Upon Seclusion and Publication of Private Facts",
  "description": "Ontario privacy torts: intrusion upon seclusion (Jones v Tsige 2012 ONCA 32), publication of private facts, Ontario Privacy Act, PIPEDA breach claims, and damages up to $20,000.",
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
  "url": "https://getatticus.ca/blog/ontario-privacy-tort"
}`;

const faqSchemaJson = `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the tort of intrusion upon seclusion in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Ontario Court of Appeal recognized the tort of intrusion upon seclusion in Jones v Tsige, 2012 ONCA 32. The tort requires: (1) the defendant's conduct was intentional or reckless; (2) the defendant invaded, without lawful justification, the plaintiff's private affairs or concerns; and (3) a reasonable person would regard the invasion as highly offensive causing distress, humiliation or anguish. The plaintiff does not need to prove actual loss — the tort compensates for the dignitary harm of privacy invasion. General damages of up to $20,000 are available without proof of actual damage. The tort applies to snooping into bank records, intercepting private communications, accessing private medical information, and similar intrusions."
      }
    },
    {
      "@type": "Question",
      "name": "What is the Ontario Privacy Act and how does it differ from the privacy tort?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Ontario Privacy Act, R.S.O. 1990, c. P.28 creates a statutory tort for violation of privacy. Section 2 provides that a person who violates the privacy of another person is liable to damages. The Act specifies factors relevant to the nature and degree of the violation including: the nature of the private matter; the use made of the private information; the extent of further disclosure; and whether the plaintiff consented. Unlike the common law intrusion upon seclusion tort, the Privacy Act explicitly requires no proof of actual damage (s.3). The Act does not cap damages at $20,000 (unlike the common law tort), but courts rarely award large amounts without evidence of actual harm. The Privacy Act applies to violations of privacy broadly, while intrusion upon seclusion focuses specifically on unauthorized intrusions into private affairs."
      }
    },
    {
      "@type": "Question",
      "name": "Can an Ontario employee sue their employer for privacy violations?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ontario employees have limited privacy rights in the workplace. Employers may monitor workplace email, computers, and activities on company systems if employees are notified of the monitoring policy. However, accessing an employee's personal email accounts, monitoring personal devices, or accessing private medical or financial records without consent may constitute intrusion upon seclusion or breach of the Privacy Act. In unionized workplaces, arbitrators have increasingly found privacy rights as implied terms of collective agreements. PIPEDA (and its provincial equivalents) also regulates employer collection, use, and disclosure of employee personal information in federally regulated workplaces."
      }
    }
  ]
}`;

export default function OntarioPrivacyTortPage() {
  return (
    <>
      <Script id="ontario-privacy-tort-schema" type="application/ld+json">
        {schemaJson}
      </Script>
      <Script id="ontario-privacy-tort-faq-schema" type="application/ld+json">
        {faqSchemaJson}
      </Script>

      <div className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-amber-400 text-slate-900 text-sm font-semibold px-3 py-1 rounded-full">
                Privacy Law
              </span>
              <span className="text-slate-400 text-sm">December 2024 &middot; 11 min read</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Ontario Privacy Tort Guide 2024: Intrusion Upon Seclusion and Publication of Private Facts
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl">
              Intrusion upon seclusion (<em>Jones v Tsige</em> 2012 ONCA 32 — intentional
              intrusion, reasonable expectation of privacy, highly offensive to reasonable
              person, no proof of loss), Ontario Privacy Act R.S.O. 1990 c. P.28,
              publication of private facts, PIPEDA privacy obligations, and general
              damages up to $20,000 without proof of actual loss.
            </p>
          </div>
        </section>

        <article className="py-16 px-6">
          <div className="max-w-3xl mx-auto prose prose-slate prose-lg">

            <h2>Privacy Torts in Ontario</h2>
            <p>
              Ontario recognizes both statutory and common law privacy torts. The principal
              sources of privacy protection in Ontario civil law are:
            </p>
            <ul>
              <li>
                The common law tort of intrusion upon seclusion, recognized by the Ontario
                Court of Appeal in <em>Jones v Tsige</em>, 2012 ONCA 32;
              </li>
              <li>
                The <em>Ontario Privacy Act</em>, R.S.O. 1990, c. P.28, which creates a
                statutory cause of action for violation of privacy;
              </li>
              <li>
                The common law tort of publication of private facts, which the courts have
                recognized as a likely cause of action in Ontario;
              </li>
              <li>
                The federal <em>Personal Information Protection and Electronic Documents Act</em>
                (PIPEDA) and its provincial equivalents, which regulate the collection, use, and
                disclosure of personal information.
              </li>
            </ul>

            <h2>Intrusion Upon Seclusion: Jones v Tsige</h2>
            <p>
              In <em>Jones v Tsige</em>, 2012 ONCA 32, the Ontario Court of Appeal became
              the first appellate court in Canada to formally recognize the common law
              tort of intrusion upon seclusion. The defendant had accessed the plaintiff&apos;s
              banking records hundreds of times over four years using her position as a
              bank employee, without any business purpose.
            </p>

            <h3>Elements of Intrusion Upon Seclusion</h3>
            <p>
              The Court of Appeal in <em>Jones v Tsige</em> held that the tort is
              established where:
            </p>
            <ol>
              <li>
                <strong>Intentional or reckless conduct:</strong> The defendant&apos;s conduct
                was intentional or reckless — mere negligent disclosure of private information
                does not suffice;
              </li>
              <li>
                <strong>Invasion of private affairs or concerns:</strong> The defendant invaded,
                without lawful justification, the plaintiff&apos;s private affairs or concerns —
                the privacy interest must be one that the plaintiff reasonably expected would
                be protected;
              </li>
              <li>
                <strong>Highly offensive to a reasonable person:</strong> A reasonable person
                would regard the invasion as highly offensive, causing distress, humiliation,
                or anguish.
              </li>
            </ol>
            <p>
              Critically, the plaintiff does not need to prove actual loss. The tort compensates
              for the dignitary harm of the privacy invasion itself. This distinguishes it from
              most torts, which require proof of damage.
            </p>

            <h3>Damages for Intrusion Upon Seclusion</h3>
            <p>
              The Court in <em>Jones v Tsige</em> awarded general damages of $10,000 without
              proof of actual pecuniary loss and set a cap of $20,000 for general damages
              absent proof of a more serious wrong. The cap does not apply to:
            </p>
            <ul>
              <li>Aggravated damages where the plaintiff proves greater distress or humiliation;</li>
              <li>Punitive damages where the defendant&apos;s conduct was particularly malicious or high-handed;</li>
              <li>Actual pecuniary losses caused by the privacy invasion.</li>
            </ul>

            <h3>Categories of Invasion</h3>
            <p>
              The <em>Restatement (Second) of Torts</em> categories of privacy invasion, which
              influenced the Ontario court, include:
            </p>
            <ul>
              <li>Intrusion upon seclusion or solitude, or into private affairs;</li>
              <li>Public disclosure of embarrassing private facts;</li>
              <li>Publicity placing the person in a false light;</li>
              <li>Appropriation of name or likeness.</li>
            </ul>
            <p>
              Ontario courts have applied intrusion upon seclusion primarily to cases of
              unauthorized access to private information — banking records, medical records,
              email accounts, and private photographs. The tort has been applied to employees
              who access co-workers&apos; records, partners who access a spouse&apos;s
              accounts, and individuals who intercept private communications.
            </p>

            <h2>The Ontario Privacy Act</h2>
            <p>
              The <em>Privacy Act</em>, R.S.O. 1990, c. P.28 creates a statutory cause of
              action for violation of a person&apos;s privacy. Section 2 provides that a
              person who violates the privacy of another person is liable to damages.
            </p>
            <p>
              Section 3 expressly states that it is not necessary to prove actual damage
              to sustain an action. Section 4 sets out factors relevant to assessing the
              nature and degree of the privacy violation:
            </p>
            <ul>
              <li>The nature, use, and extent of disclosure of the private matter;</li>
              <li>Whether the plaintiff consented;</li>
              <li>The defendant&apos;s awareness that the act violated privacy;</li>
              <li>Whether the defendant benefited from the violation.</li>
            </ul>

            <h2>Publication of Private Facts</h2>
            <p>
              The common law tort of publication of private facts — one of the Restatement
              privacy torts — has not been as fully developed in Ontario as intrusion upon
              seclusion, but the Supreme Court of Canada in <em>Crookes v Newton</em>
              [2011] 3 SCR 269 and Ontario courts have indicated that it likely exists.
              The tort requires:
            </p>
            <ul>
              <li>Public disclosure of private information about the plaintiff;</li>
              <li>The information was not of legitimate public concern;</li>
              <li>The disclosure would be highly offensive to a reasonable person.</li>
            </ul>
            <p>
              Publication of private facts has particular relevance to:
            </p>
            <ul>
              <li>Disclosure of medical or mental health information;</li>
              <li>Disclosure of intimate images (see also Ontario&apos;s <em>Intimate Images and Cyber-violence Act, 2023</em>);</li>
              <li>Disclosure of private financial information;</li>
              <li>Disclosure of sexual orientation or other deeply personal matters.</li>
            </ul>

            <h2>PIPEDA and Ontario Privacy Law</h2>
            <p>
              The federal <em>Personal Information Protection and Electronic Documents Act</em>
              (PIPEDA) governs the collection, use, and disclosure of personal information in
              the course of commercial activities. PIPEDA creates obligations for organizations
              to obtain consent, limit collection, ensure accuracy, provide access, and
              safeguard personal information.
            </p>
            <p>
              The Office of the Privacy Commissioner of Canada can investigate complaints
              and make findings under PIPEDA. Where the Privacy Commissioner finds a violation,
              the complainant may apply to the Federal Court for a remedy, including damages.
              In <em>Chitrakar v Bell TV</em>, 2013 FC 1103, the Federal Court awarded
              damages for PIPEDA violations.
            </p>
            <p>
              Ontario does not have private sector privacy legislation equivalent to Alberta&apos;s
              PIPA or British Columbia&apos;s PIPA; PIPEDA applies to commercial activities
              in Ontario. Health information in Ontario is regulated by the <em>Personal Health
              Information Protection Act, 2004</em> (PHIPA), which creates specific obligations
              for health information custodians.
            </p>

            <h2>Intimate Images and Cyber-Violence</h2>
            <p>
              Ontario&apos;s <em>Intimate Images and Cyber-violence Act, 2023</em> creates a
              specific cause of action for non-consensual sharing of intimate images. A person
              whose intimate image is shared without consent may sue for damages, and courts
              may order removal of the image. The Act provides for expedited access to courts
              and interim injunctions to prevent irreparable harm from ongoing publication.
            </p>

            <h2>Practice Points for Ontario Privacy Lawyers</h2>
            <ul>
              <li>
                For intrusion upon seclusion claims, document the extent of the unauthorized
                access — the number of accesses and the sensitivity of the information are
                relevant to the quantum of damages within the $20,000 general damages cap.
              </li>
              <li>
                Consider whether to plead both the common law tort and the <em>Privacy Act</em>
                — the statutory claim has no damages cap while the common law claim has a
                $20,000 cap for general damages in the absence of proven actual loss.
              </li>
              <li>
                For PIPEDA complaints, advise clients to first file with the Privacy Commissioner
                before seeking Federal Court relief — the complaint process is a prerequisite.
              </li>
              <li>
                In employment matters, assess whether the employer&apos;s conduct was covered
                by a lawful monitoring policy — absence of notice may support a stronger
                intrusion upon seclusion claim.
              </li>
              <li>
                The two-year limitation period under the <em>Limitations Act, 2002</em> applies
                to intrusion upon seclusion and Privacy Act claims from the date of discoverability.
                For ongoing privacy violations (e.g., continued retention of private information),
                fresh causes of action may arise continuously.
              </li>
            </ul>

          </div>
        </article>

        <section className="py-12 px-6 bg-amber-50 border-t border-amber-100">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Manage Your Privacy and Litigation Practice with Atticus
            </h2>
            <p className="text-slate-600 mb-6">
              Track limitation periods for privacy tort claims, manage matter files with
              LSO-compliant data practices, and run LSO-compliant trust accounting — all
              in one Ontario platform.
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
                { href: "/blog/ontario-privacy-law", label: "Ontario Privacy Law" },
                { href: "/blog/ontario-defamation-law", label: "Ontario Defamation Law" },
                { href: "/blog/ontario-negligence-law", label: "Ontario Negligence Law" },
                { href: "/blog/ontario-employment-contract", label: "Ontario Employment Contract" },
                { href: "/blog/ontario-limitation-periods", label: "Ontario Limitation Periods" },
                { href: "/ontario-civil-litigation-lawyer", label: "Ontario Civil Litigation Software" },
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
