import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ontario Conversion Tort Guide 2024: Conversion, Detinue, and Wrongful Interference with Goods",
  description:
    "Ontario conversion tort guide: conversion (intentional dealing with goods inconsistent with owner's superior right), detinue (wrongful detention of goods), elements of conversion (title or possessory right, intentional act, inconsistency with plaintiff's rights), defences (jus tertii abolished, innocent purchase), remedies (damages at market value, return of goods), and wrongful interference with goods.",
  openGraph: {
    title: "Ontario Conversion Tort Guide 2024: Conversion, Detinue, and Wrongful Interference",
    description:
      "Complete guide to Ontario conversion and detinue — elements of conversion (intentional dealing inconsistent with owner's right), detinue (detention and refusal to return), jus tertii, bona fide purchaser defence, damages at full market value, and wrongful interference with goods in Ontario.",
    url: "https://getatticus.ca/blog/ontario-conversion-tort",
    siteName: "Atticus",
    type: "article",
  },
  alternates: { canonical: "https://getatticus.ca/blog/ontario-conversion-tort" },
};

const schemaJson = `{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Ontario Conversion Tort Guide 2024: Conversion, Detinue, and Wrongful Interference with Goods",
  "description": "Ontario conversion tort: intentional dealing with goods inconsistent with owner's superior right, detinue for wrongful detention, jus tertii defence abolished, bona fide purchaser, damages at market value, and wrongful interference with goods.",
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
  "url": "https://getatticus.ca/blog/ontario-conversion-tort"
}`;

const faqSchemaJson = `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What are the elements of conversion in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Conversion is an intentional tort. The elements are: (1) The plaintiff has a proprietary right or right to immediate possession of the goods at the time of the conversion — a bailee or a person with a possessory title can sue in conversion; (2) The defendant intentionally dealt with the goods; (3) The dealing was inconsistent with the plaintiff's right — this does not require bad faith or knowledge that the act was wrongful; and (4) The plaintiff suffered loss. The defendant's good faith or honest belief that they had the right to deal with the goods is generally not a defence to conversion — conversion is a tort of strict liability in the sense that the defendant's state of mind is irrelevant to liability (though it may affect remedies)."
      }
    },
    {
      "@type": "Question",
      "name": "What is detinue and how does it differ from conversion in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Detinue is the wrongful detention of goods belonging to another after a demand for their return. Unlike conversion, which arises from a dealing with goods at a single point in time, detinue is a continuing tort — it arises from the defendant's ongoing refusal to return the plaintiff's goods. The plaintiff must make a demand for return and the defendant must refuse (or the refusal must be implied from the circumstances) before detinue is established. The remedies for detinue include an order for return of the specific goods (not merely damages) — this is the key advantage of detinue over conversion when the goods have a special value beyond their market price."
      }
    },
    {
      "@type": "Question",
      "name": "What damages are available for conversion in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The primary measure of damages for conversion is the market value of the goods at the time and place of conversion. The plaintiff recovers the full value of the goods, not merely the diminution in value — conversion is treated as a forced sale. Where the goods have appreciated in value after the conversion, some courts award the higher value at the date of judgment rather than the date of conversion. Consequential damages may also be recoverable where they are reasonably foreseeable — for example, profits lost because the plaintiff could not use the converted goods. The defendant does not receive credit for improvements made to the goods after conversion unless the improvements are severable."
      }
    }
  ]
}`;

export default function OntarioConversionTortPage() {
  return (
    <>
      <Script id="ontario-conversion-tort-schema" type="application/ld+json">
        {schemaJson}
      </Script>
      <Script id="ontario-conversion-tort-faq-schema" type="application/ld+json">
        {faqSchemaJson}
      </Script>

      <div className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-amber-400 text-slate-900 text-sm font-semibold px-3 py-1 rounded-full">
                Tort Law
              </span>
              <span className="text-slate-400 text-sm">December 2024 &middot; 11 min read</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Ontario Conversion Tort Guide 2024: Conversion, Detinue, and Wrongful Interference with Goods
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl">
              Conversion (intentional dealing with goods inconsistent with plaintiff&apos;s
              superior right — strict liability tort), detinue (wrongful detention and
              refusal to return), jus tertii defence abolished in Canada, bona fide purchaser
              for value, damages at market value as forced sale, and wrongful interference
              with goods in Ontario property disputes.
            </p>
          </div>
        </section>

        <article className="py-16 px-6">
          <div className="max-w-3xl mx-auto prose prose-slate prose-lg">

            <h2>Conversion</h2>
            <p>
              Conversion is an intentional tort committed against goods. It consists of
              any intentional dealing with the personal property of another in a manner
              that is inconsistent with the plaintiff&apos;s rights of ownership or
              immediate possession. Conversion is the principal cause of action for
              misappropriation of personal property in Ontario.
            </p>

            <h3>Elements of Conversion</h3>
            <p>
              To establish conversion, the plaintiff must prove:
            </p>
            <ol>
              <li>
                <strong>Right to the goods:</strong> The plaintiff must have a proprietary
                right, or a right to immediate possession, of the goods at the time of
                the alleged conversion. Both the owner and a person with a possessory
                title (bailee, pledgee, licensee in possession) can sue in conversion.
                A person with only a future right to possession cannot sue.
              </li>
              <li>
                <strong>Intentional act:</strong> The defendant must have intentionally
                dealt with the goods. The intention required is the intention to do the
                act, not the intention to commit a wrong. An innocent purchaser who
                buys stolen goods commits conversion even without knowledge that the
                goods are stolen.
              </li>
              <li>
                <strong>Dealing inconsistent with plaintiff&apos;s rights:</strong>
                The dealing must be inconsistent with the plaintiff&apos;s right to
                the goods — selling, destroying, consuming, retaining against demand,
                pledging, or substantially altering the goods. A mere touching or
                temporary use may not suffice; the inconsistency with the plaintiff&apos;s
                superior right must be serious.
              </li>
              <li>
                <strong>Loss:</strong> The plaintiff must prove that the conversion
                caused loss — typically the value of the goods.
              </li>
            </ol>

            <h3>Conversion as a Strict Liability Tort</h3>
            <p>
              Conversion is effectively a strict liability tort in respect of the
              defendant&apos;s fault: the defendant&apos;s good faith, honest belief,
              or reasonable mistake is generally not a defence to liability. A bailee
              who delivers goods to the wrong person, even in honest mistake, commits
              conversion. A purchaser who acquires stolen goods in good faith without
              notice that they are stolen commits conversion.
            </p>
            <p>
              However, the defendant&apos;s good faith may be relevant to remedies:
              courts have discretion to award the return of goods rather than their
              value, and may take good faith into account in assessing damages where
              the defendant has already sold the goods.
            </p>

            <h3>Types of Acts Constituting Conversion</h3>
            <ul>
              <li>
                <strong>Taking:</strong> physically taking the goods from the plaintiff
                or a third party holding them for the plaintiff;
              </li>
              <li>
                <strong>Destroying:</strong> destroying or substantially altering the
                goods so that they lose their character;
              </li>
              <li>
                <strong>Selling:</strong> selling the goods to a third party;
              </li>
              <li>
                <strong>Pledging:</strong> pledging the goods as security for a debt;
              </li>
              <li>
                <strong>Using:</strong> using the goods in a way seriously inconsistent
                with the terms on which they were bailed;
              </li>
              <li>
                <strong>Wrongful delivery:</strong> delivering the goods to a person
                not entitled to receive them;
              </li>
              <li>
                <strong>Detention:</strong> refusing to deliver the goods on a demand
                by a person entitled to immediate possession.
              </li>
            </ul>

            <h2>Detinue</h2>
            <p>
              Detinue is the wrongful detention of goods belonging to another. It is
              a separate cause of action from conversion and has the distinct advantage
              that it supports an order for the return of the specific goods — not merely
              an award of their value.
            </p>

            <h3>Elements of Detinue</h3>
            <p>
              To establish detinue, the plaintiff must prove:
            </p>
            <ol>
              <li>The plaintiff has a right to immediate possession of the goods;</li>
              <li>The plaintiff demanded the return of the goods;</li>
              <li>The defendant refused to return the goods, or wrongfully detained them.</li>
            </ol>
            <p>
              Detinue is a continuing tort — it persists as long as the defendant wrongfully
              detains the goods. This distinguishes it from conversion, which is committed
              at a specific point in time. Where the defendant has destroyed or sold the
              goods so that return is impossible, the plaintiff must rely on conversion.
            </p>

            <h3>Remedies for Detinue</h3>
            <p>
              The primary remedy for detinue is an order for return of the goods (specific
              delivery), alternatively with an option to pay their value. Where the goods
              have special value to the plaintiff beyond their market price — heirlooms,
              unique chattels, goods needed for a particular purpose — the court may order
              specific delivery without the alternative of paying their value. Damages for
              the wrongful detention (loss of use, consequential losses) are also available.
            </p>

            <h2>Defences to Conversion</h2>

            <h3>Jus Tertii</h3>
            <p>
              The <em>jus tertii</em> defence — that a third party has a better title to
              the goods than the plaintiff — was traditionally available in conversion
              actions. Canadian courts have restricted this defence: a defendant cannot
              rely on a third party&apos;s title unless the defendant is actually acting
              on behalf of or with the authority of that third party. A mere wrongdoer
              cannot escape liability by pointing to someone else&apos;s superior title.
            </p>

            <h3>Bona Fide Purchaser for Value</h3>
            <p>
              A bona fide purchaser for value — a person who purchases goods in good faith,
              for value, and without notice of the seller&apos;s defective title — may obtain
              good title under certain circumstances under the sale of goods legislation.
              Ontario&apos;s <em>Sale of Goods Act</em>, R.S.O. 1990, c. S.1, s.25 provides
              that where a seller has a voidable (but not void) title to goods and sells
              them to a buyer in good faith and without notice of the seller&apos;s defect,
              the buyer acquires good title. A sale by a person with no title at all (e.g.,
              a thief) does not pass title regardless of the buyer&apos;s good faith.
            </p>

            <h3>Consent and Authorization</h3>
            <p>
              A defendant who dealt with the goods with the plaintiff&apos;s consent,
              or under the authority of a court order, statute, or lien, does not commit
              conversion. The extent of the authority limits the defence — a bailee
              authorized to use goods for a specific purpose commits conversion by using
              them for a different purpose.
            </p>

            <h2>Damages for Conversion</h2>
            <p>
              The primary measure of damages for conversion is the market value of the
              goods at the time and place of conversion. Conversion is treated as a
              forced sale — the defendant pays the full value and acquires title to
              the goods. This prevents the plaintiff from recovering both their goods
              and their value.
            </p>
            <p>
              Where the goods have appreciated between the date of conversion and the
              date of trial, courts may award the higher value — particularly where
              the defendant has retained or sold the goods at a profit.
            </p>
            <p>
              Consequential damages are available where they are reasonably foreseeable
              — profits lost because the plaintiff was deprived of use of the goods,
              additional costs of replacing the goods, and interest on the value from
              the date of conversion. Aggravated or punitive damages may be available
              where the conversion was deliberate, high-handed, or accompanied by
              oppressive conduct.
            </p>

            <h2>Practice Points for Ontario Property and Litigation Lawyers</h2>
            <ul>
              <li>
                Assess whether the client has a right to immediate possession at the
                time of the alleged conversion — a bailee with immediate possessory
                title can sue even if the true owner could not at that time.
              </li>
              <li>
                Where the goods have unique or sentimental value beyond their market
                price, plead detinue and seek an order for specific return — damages
                alone will not adequately compensate.
              </li>
              <li>
                In commercial disputes involving personal property security interests,
                check whether the secured creditor&apos;s seizure and sale of collateral
                complied with the <em>Personal Property Security Act</em> — non-compliant
                enforcement may constitute conversion.
              </li>
              <li>
                The two-year limitation period under the <em>Limitations Act, 2002</em>
                applies to conversion claims; for detinue, the period runs from when
                the plaintiff demanded return and the defendant refused.
              </li>
              <li>
                Where goods have been sold on to a bona fide purchaser, consider whether
                to sue the original converter (for their market value at conversion) or
                trace value into the proceeds — the PPSA and trust law may provide
                additional remedies.
              </li>
            </ul>

          </div>
        </article>

        <section className="py-12 px-6 bg-amber-50 border-t border-amber-100">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Manage Your Property and Litigation Practice with Atticus
            </h2>
            <p className="text-slate-600 mb-6">
              Track limitation periods for conversion and detinue claims, manage property
              dispute matter files, and run LSO-compliant trust accounting — all in one
              Ontario platform.
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
                { href: "/blog/ontario-negligence-law", label: "Ontario Negligence Law" },
                { href: "/blog/ontario-personal-property-security", label: "Ontario Personal Property Security" },
                { href: "/blog/ontario-nuisance-law", label: "Ontario Nuisance Law" },
                { href: "/blog/ontario-real-property-law", label: "Ontario Real Property Law" },
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
