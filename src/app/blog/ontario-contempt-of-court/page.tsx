import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contempt of Court in Ontario | Civil and Criminal Contempt Guide",
  description:
    "A comprehensive guide to contempt of court in Ontario: civil contempt (disobedience of court orders), criminal contempt (public defiance of court authority), the proof standard, purging contempt, sentencing, and the use of contempt in family law, injunctions, and commercial litigation.",
  openGraph: {
    title: "Contempt of Court in Ontario | Civil and Criminal Contempt Guide",
    description:
      "Understand contempt of court in Ontario — civil vs criminal contempt, proof beyond a reasonable doubt, the three-part test, purging contempt, injunction enforcement, and family law contempt applications.",
    url: "https://getatticus.ca/blog/ontario-contempt-of-court",
    siteName: "Atticus",
    type: "article",
  },
};

const schemaJson = `{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Contempt of Court in Ontario: Civil and Criminal Contempt, Proof, and Purging",
  "description": "A comprehensive guide to contempt of court in Ontario covering civil contempt (disobedience of court orders), criminal contempt (public defiance), proof beyond a reasonable doubt, the three-part test, purging contempt, enforcement options, and contempt in family law and commercial litigation.",
  "author": {
    "@type": "Organization",
    "name": "Atticus"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Atticus",
    "url": "https://getatticus.ca"
  },
  "mainEntityOfPage": "https://getatticus.ca/blog/ontario-contempt-of-court"
}`;

const faqSchema = `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the standard of proof for contempt of court in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Contempt of court in Ontario — both civil and criminal contempt — must be proved beyond a reasonable doubt. This is because a contempt finding can result in imprisonment, which is a deprivation of liberty. Courts apply the criminal standard of proof even in civil proceedings where contempt is alleged."
      }
    },
    {
      "@type": "Question",
      "name": "What is the three-part test for civil contempt in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For civil contempt of a court order in Ontario, the moving party must establish beyond a reasonable doubt: (1) the order allegedly violated was clear and unambiguous; (2) the contemnor had actual knowledge of the order; and (3) the contemnor intentionally did the act forbidden by the order. Intent to disobey the order specifically is not required — intent to do the prohibited act is sufficient."
      }
    },
    {
      "@type": "Question",
      "name": "How can contempt be purged in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A person found in contempt can purge the contempt by complying with the court order that was violated, apologizing to the court, and demonstrating ongoing compliance. Courts will typically give a contemnor the opportunity to purge before imposing or continuing a sentence. Once contempt is purged, the sentence (such as a fine or imprisonment) typically ceases or is reduced."
      }
    },
    {
      "@type": "Question",
      "name": "What sanctions can a court impose for contempt in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For contempt of court in Ontario, the court may impose: a fine, imprisonment (with or without a work or house arrest alternative), seizure and payment of assets to enforce compliance, striking a party's pleadings, costs on a substantial indemnity basis, and any other order necessary to ensure compliance or mark the court's displeasure. Criminal contempt can result in significant imprisonment."
      }
    }
  ]
}`;

export default function OntarioContemptOfCourtPage() {
  return (
    <>
      <Script id="contempt-schema" type="application/ld+json">
        {schemaJson}
      </Script>
      <Script id="contempt-faq-schema" type="application/ld+json">
        {faqSchema}
      </Script>

      <div className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-amber-400 text-slate-900 text-sm font-semibold px-4 py-1 rounded-full mb-6">
              Civil Litigation
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contempt of Court in Ontario
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl">
              Civil contempt vs criminal contempt, the beyond-a-reasonable-doubt standard, the
              three-part test, purging contempt, sanctions, injunction enforcement, and contempt
              in family law and commercial litigation.
            </p>
          </div>
        </section>

        <article className="py-16 px-6">
          <div className="max-w-4xl mx-auto prose prose-slate prose-lg max-w-none">

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">The Nature of Contempt of Court</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Contempt of court is conduct that interferes with or disrespects the authority of the
                court or fails to comply with court orders. The law of contempt in Ontario is primarily
                judge-made, drawing on the court&apos;s inherent jurisdiction to ensure its orders and
                processes are respected. It is codified for the Superior Court of Justice in Rule 60.11
                of the <em>Rules of Civil Procedure</em> and in the <em>Criminal Code</em>, R.S.C. 1985,
                c. C-46 for criminal contempt.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                Ontario courts distinguish two categories of contempt:
              </p>
              <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
                <li><strong>Civil contempt</strong> — private or procedural disobedience of a court order that primarily affects the opposing party&apos;s rights; typically remedied through compliance-focused orders</li>
                <li><strong>Criminal contempt</strong> — public defiance of court authority that tends to bring the administration of justice into disrepute; carries more serious consequences and engages Charter protections as a criminal-adjacent proceeding</li>
              </ul>
              <p className="text-slate-700 leading-relaxed">
                The leading Supreme Court of Canada case is <em>United Nurses of Alberta v Alberta (Attorney
                General)</em> [1992] 1 SCR 901, confirming that criminal contempt requires public defiance
                of court authority with the purpose of making that defiance public and marking disrespect
                for the court — mere private disobedience remains civil contempt.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">The Standard of Proof: Beyond a Reasonable Doubt</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Both civil and criminal contempt in Ontario must be proved beyond a reasonable doubt.
                This is a critical distinction from most civil proceedings — contempt is not proved
                on a balance of probabilities even when the underlying proceeding is a civil action.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                The criminal standard applies because contempt can result in imprisonment, which is
                a deprivation of liberty. The <em>Charter</em> s. 7 right to liberty requires that
                deprivation not occur except in accordance with principles of fundamental justice,
                and courts have held that the criminal standard of proof is a fundamental justice
                requirement for any proceeding that may result in imprisonment.
              </p>
              <p className="text-slate-700 leading-relaxed">
                In practice, many contempt motions fail because the moving party presents evidence
                to the civil standard without recognizing that the court must be satisfied beyond
                a reasonable doubt. Ambiguities in the evidence must be resolved in favour of the
                alleged contemnor — not in favour of the moving party.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">The Three-Part Test for Civil Contempt</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                For civil contempt based on disobedience of a court order, Ontario courts apply a
                three-part test derived from <em>Bhatnager v Canada (Minister of Employment and
                Immigration)</em> [1990] 2 SCR 217. The moving party must prove beyond a reasonable
                doubt:
              </p>

              <div className="space-y-4 mb-6">
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">1. Clear and Unambiguous Order</h3>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    The order allegedly violated must be clear, unambiguous, and precise — not merely
                    an order that could be interpreted to prohibit the conduct. If the order is
                    ambiguous as to what it requires or prohibits, contempt cannot be found for
                    conduct that is arguably within the ambiguous zone. This first element protects
                    against imprisonment for non-compliance with unclear judicial directions.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">2. Knowledge of the Order</h3>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    The alleged contemnor must have actual knowledge of the order at the time of
                    the alleged contemptuous act. Knowledge of the terms of the order — not just
                    awareness that an order exists — is required. Typically this is established
                    by proof of personal service of the order or by the party&apos;s presence in
                    court when the order was made. A party cannot be in contempt of an order they
                    never received.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">3. Intentional Act</h3>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    The alleged contemnor must have intentionally done the act prohibited by the
                    order. Crucially: intent to disobey the order is not required — only intent to do
                    the prohibited act. A person who intentionally does something that happens to
                    violate a court order is in contempt, even if they did not appreciate that their
                    conduct was prohibited. Inadvertent acts (e.g., accidental breach without
                    awareness) are not contemptuous.
                  </p>
                </div>
              </div>

              <p className="text-slate-700 leading-relaxed">
                This three-part test was confirmed and applied in <em>Carey v Laiken</em> 2015 SCC 17,
                where the Supreme Court clarified that civil contempt does not require proof of
                deliberate intent to defy the court — the moving party need only prove that the
                respondent deliberately did the act that the order prohibited.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Contempt Procedure Under Rule 60.11</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                In Ontario civil proceedings, contempt of a court order is brought by motion under
                Rule 60.11 of the <em>Rules of Civil Procedure</em>. Key procedural requirements:
              </p>
              <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
                <li><strong>Notice of motion</strong> — the alleged contemnor must receive adequate notice of the contempt allegation and the conduct complained of</li>
                <li><strong>Personal service</strong> — the contempt motion materials must be personally served on the alleged contemnor (not just on their lawyer)</li>
                <li><strong>Factual specificity</strong> — the motion must identify the specific act or omission alleged to constitute contempt and the specific order violated</li>
                <li><strong>Right to counsel</strong> — the alleged contemnor must have the opportunity to retain and instruct counsel before the hearing</li>
                <li><strong>Right to silence</strong> — because of the potential for imprisonment, the alleged contemnor has the right to remain silent; the evidentiary burden is entirely on the moving party</li>
              </ul>
              <p className="text-slate-700 leading-relaxed">
                Courts have discretion to dispense with personal service of the underlying order
                (the breach of which is alleged) where the party was present in court when it was
                made. But the contempt motion materials themselves must be personally served.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Purging Contempt</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                A finding of contempt does not irrevocably fix the consequences. A person found in
                contempt can &quot;purge&quot; the contempt by: (1) complying with the court order
                that was violated; (2) apologizing unreservedly to the court; and (3) demonstrating
                genuine and ongoing compliance with the court&apos;s orders.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                Courts strongly prefer compliance over punishment. The purpose of civil contempt
                proceedings is coercive, not punitive — the goal is to compel the party to comply
                with the court&apos;s order. Where the contemnor purges the contempt by complying,
                the court may release them from any sentence imposed, reduce the fine, or discharge
                the contempt finding.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Criminal contempt proceedings are more punitive in nature — the goal includes marking
                society&apos;s disapproval of conduct that brings the administration of justice into
                disrepute. Purging is still possible in criminal contempt cases, but the public
                interest element means the sentence may not be fully discharged by compliance alone.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Sanctions for Contempt</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                The court has broad discretion to impose sanctions for contempt, ranging from minor
                to severe:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Compliance-Focused Orders</h3>
                  <ul className="list-disc pl-4 text-slate-700 space-y-2 text-sm">
                    <li>Order to comply within specified time</li>
                    <li>Order to pay costs on a substantial indemnity basis</li>
                    <li>Conditional fine if non-compliance continues</li>
                    <li>Order to provide reporting or accounting</li>
                    <li>Sequestration of assets until compliance</li>
                  </ul>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Punitive Orders</h3>
                  <ul className="list-disc pl-4 text-slate-700 space-y-2 text-sm">
                    <li>Unconditional fine</li>
                    <li>Imprisonment (with or without conditional release)</li>
                    <li>Striking of pleadings or defences</li>
                    <li>Judgment against the contemnor</li>
                    <li>Adverse inference in the main proceeding</li>
                  </ul>
                </div>
              </div>

              <p className="text-slate-700 leading-relaxed mb-4">
                Courts approach sentencing for contempt by considering the nature and seriousness
                of the contempt, the contemnor&apos;s history of compliance or non-compliance, the
                extent to which the contempt harmed the opposing party, the contemnor&apos;s
                financial circumstances (relevant to fine quantum), and the degree to which the
                contemnor has shown remorse or taken steps to remedy the breach.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Imprisonment is a last resort for civil contempt — courts prefer fines and conditional
                orders that create an ongoing incentive to comply. Imprisonment becomes more appropriate
                where: the party has been given multiple chances to comply, compliance is clearly
                achievable, and the party has deliberately and persistently defied the court.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Contempt in Specific Contexts</h2>

              <h3 className="text-xl font-semibold text-slate-900 mb-3">Injunctions and Restraining Orders</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                Contempt is the primary enforcement mechanism for injunctions. A party who violates
                an injunction — interlocutory or permanent — can be brought before the court on a
                contempt motion. Courts take injunction contempt seriously because injunctions
                typically protect urgent interests (property, safety, or competitive advantage)
                and their effectiveness depends on immediate compliance.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                Before seeking a contempt order for injunction breach, the moving party must ensure
                the injunction was personally served on the violating party, the terms were clear
                and the specific act clearly fell within the prohibited conduct, and there is evidence
                of the specific breach (not merely circumstantial evidence).
              </p>

              <h3 className="text-xl font-semibold text-slate-900 mb-3">Family Law Contempt</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                Contempt is frequently used in family law to enforce parenting orders, property
                orders, and restraining orders. Ontario courts apply the <em>Family Law Rules</em>
                provisions on enforcement and the inherent jurisdiction to hold parties in contempt
                for violating family orders.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                Family law contempt raises particular sensitivities: a parent imprisoned for
                contempt cannot care for children; fines may reduce resources available for child
                support. Courts balance enforcement with the best interests of the children
                affected by the dispute.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                Parenting order contempt is taken very seriously — a parent who repeatedly
                withholds a child from the other parent in violation of a court order faces
                escalating sanctions, including ultimate imprisonment, and potentially a change
                in custody to the complying parent as the enforcement measure.
              </p>

              <h3 className="text-xl font-semibold text-slate-900 mb-3">Commercial Litigation</h3>
              <p className="text-slate-700 leading-relaxed">
                In commercial litigation, contempt most commonly arises from: failure to comply
                with production orders, failure to abide by undertakings given to the court,
                violation of Mareva injunctions (asset preservation orders), and breach of
                confidentiality orders. Mareva injunction contempt is particularly significant —
                a party who dissipates assets in breach of a Mareva can be imprisoned, and the
                court can trace and recover dissipated assets through constructive trust remedies.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>

              <div className="space-y-6">
                <div className="border border-slate-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    What is the standard of proof for contempt of court in Ontario?
                  </h3>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    Both civil and criminal contempt must be proved beyond a reasonable doubt. This
                    criminal standard applies because contempt can result in imprisonment — a
                    deprivation of liberty requiring the highest standard of proof.
                  </p>
                </div>

                <div className="border border-slate-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    What is the three-part test for civil contempt in Ontario?
                  </h3>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    The three elements (all proved beyond a reasonable doubt): (1) the order was
                    clear and unambiguous; (2) the contemnor had actual knowledge of the order;
                    (3) the contemnor intentionally did the act forbidden (Carey v Laiken 2015 SCC 17;
                    Bhatnager v Canada [1990] 2 SCR 217). Intent to defy is not required — only
                    intent to do the prohibited act.
                  </p>
                </div>

                <div className="border border-slate-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    How can contempt be purged in Ontario?
                  </h3>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    By complying with the violated order, apologizing unreservedly to the court,
                    and demonstrating ongoing compliance. Courts prefer coercive compliance over
                    punishment for civil contempt — purging the contempt typically terminates or
                    reduces the sentence.
                  </p>
                </div>

                <div className="border border-slate-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    What sanctions can a court impose for contempt in Ontario?
                  </h3>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    Sanctions range from costs orders and fines through sequestration of assets,
                    striking of pleadings, and imprisonment. Imprisonment is a last resort reserved
                    for persistent and deliberate non-compliance after multiple chances to comply.
                  </p>
                </div>
              </div>
            </section>

            <section className="py-12 px-8 bg-amber-50 border border-amber-200 rounded-2xl text-center">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Manage Litigation Files with Atticus
              </h2>
              <p className="text-slate-600 mb-6 max-w-xl mx-auto">
                Atticus helps Ontario litigators track compliance deadlines, court order obligations,
                and limitation periods — all in one platform built for Canadian legal practice.
                $149 CAD per lawyer per month.
              </p>
              <Link
                href="/sign-up"
                className="inline-block bg-slate-900 text-white font-semibold px-8 py-4 rounded-lg hover:bg-slate-700 transition-colors"
              >
                Start Free Trial
              </Link>
            </section>

          </div>
        </article>

        <section className="py-12 px-6 border-t border-slate-100">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-lg font-semibold text-slate-900 mb-6">Related Resources</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { href: "/blog/ontario-civil-procedure", label: "Ontario Civil Procedure" },
                { href: "/blog/ontario-injunction-process", label: "Ontario Injunction Process" },
                { href: "/blog/ontario-costs-rules", label: "Ontario Costs Rules" },
                { href: "/blog/ontario-solicitor-undertakings", label: "Solicitor Undertakings" },
                { href: "/trust-accounting-ontario", label: "Trust Accounting Ontario" },
                { href: "/ai-for-lawyers", label: "AI for Ontario Lawyers" },
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
