import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ontario Occupiers Liability Guide 2024: Occupiers Liability Act, Trespassers, and Recreational Activities",
  description:
    "Ontario occupiers liability guide: Occupiers' Liability Act 1990 duty of care (s.3 reasonable care for all entrants), trespassers and criminal activity (s.4 reckless disregard standard), recreational activities on rural and natural premises (s.4(3)), independent contractor liability (s.6), contributory negligence, and slip and fall claims.",
  openGraph: {
    title: "Ontario Occupiers Liability Guide 2024: OLA, Trespassers, Recreational Activities",
    description:
      "Complete guide to Ontario occupiers liability — Occupiers' Liability Act 1990 s.3 duty of care to all entrants, s.4 reduced duty to trespassers, s.4(3) recreational activities on rural/natural premises, independent contractor liability (s.6), contributory negligence, and municipal sidewalk claims.",
    url: "https://getatticus.ca/blog/ontario-occupiers-liability",
    siteName: "Atticus",
    type: "article",
  },
  alternates: { canonical: "https://getatticus.ca/blog/ontario-occupiers-liability" },
};

const schemaJson = `{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Ontario Occupiers Liability Guide 2024: Occupiers Liability Act, Trespassers, and Recreational Activities",
  "description": "Ontario occupiers liability: OLA 1990 s.3 duty of care, s.4 trespasser and recreational activity provisions, independent contractor liability (s.6), contributory negligence, and slip and fall claims.",
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
  "url": "https://getatticus.ca/blog/ontario-occupiers-liability"
}`;

const faqSchemaJson = `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the standard of care owed by occupiers to entrants under the Ontario Occupiers Liability Act?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Under s.3(1) of the Occupiers' Liability Act, R.S.O. 1990, c. O.2, an occupier owes a duty to take such care as in all the circumstances is reasonable to see that persons entering the premises and property brought on the premises are reasonably safe while on the premises. This single, common duty of care applies to all entrants — unlike the common law, which distinguished between invitees, licensees, and trespassers. The standard is objective reasonableness: the occupier must take positive steps to protect entrants from reasonably foreseeable dangers, not merely refrain from creating new dangers. The duty encompasses the condition of the premises, activities carried out on the premises, and the conduct of third parties on the premises."
      }
    },
    {
      "@type": "Question",
      "name": "What is the reduced duty owed to trespassers under the Ontario Occupiers Liability Act?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Section 4(1) of the Occupiers' Liability Act provides that the duty of an occupier to a trespasser and to a person who enters the premises as a result of criminal activity is limited to not acting with reckless disregard for the person's presence on the premises. This is a lower standard than the s.3 duty of reasonable care. However, s.4(2) provides that despite s.4(1), the s.3 duty of care applies to trespassers who are children, where the occupier has reasonable grounds to believe that the child trespasses and where the premises create a particular risk of harm to the child that is greater than the risk of harm to adults. Child trespassers can trigger the higher duty of care even without the occupier's express permission to enter."
      }
    },
    {
      "@type": "Question",
      "name": "Does the Ontario Occupiers Liability Act apply to municipal sidewalks and roads?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Municipalities in Ontario may be occupiers of public sidewalks, roads, and parks subject to the Occupiers' Liability Act for slip and fall claims. However, the Municipal Act, 2001, s.44 creates a specific statutory regime for municipality liability for non-repair of highways, including sidewalks. Under s.44(3), a municipality is not liable unless it had knowledge of the non-repair or the non-repair was of such a nature that the municipality ought to have had knowledge, and the municipality failed to take reasonable steps to prevent the harm. The limitation period for claims against a municipality for non-repair is two years under the Limitations Act, 2002, with a 10-day notice of claim requirement under the Municipal Act, s.44(10)."
      }
    }
  ]
}`;

export default function OntarioOccupiersLiabilityPage() {
  return (
    <>
      <Script id="ontario-occupiers-liability-schema" type="application/ld+json">
        {schemaJson}
      </Script>
      <Script id="ontario-occupiers-liability-faq-schema" type="application/ld+json">
        {faqSchemaJson}
      </Script>

      <div className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-amber-400 text-slate-900 text-sm font-semibold px-3 py-1 rounded-full">
                Tort Law
              </span>
              <span className="text-slate-400 text-sm">December 2024 &middot; 12 min read</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Ontario Occupiers Liability Guide 2024: Occupiers Liability Act, Trespassers, and Recreational Activities
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl">
              Occupiers&apos; Liability Act 1990 s.3 common duty of care to all entrants, s.4 reduced
              duty to trespassers (reckless disregard standard), child trespasser exception (s.4(2)),
              recreational activities on rural and natural premises (s.4(3)), independent contractor
              liability (s.6), contributory negligence, and municipal sidewalk claims.
            </p>
          </div>
        </section>

        <article className="py-16 px-6">
          <div className="max-w-3xl mx-auto prose prose-slate prose-lg">

            <h2>The Occupiers&apos; Liability Act 1990</h2>
            <p>
              Ontario&apos;s <em>Occupiers&apos; Liability Act</em>, R.S.O. 1990, c. O.2 (OLA) replaced
              the common law distinctions between invitees, licensees, and trespassers with a
              single statute governing the duty of care owed by occupiers to persons entering
              their premises. The OLA applies to all injuries suffered on premises in Ontario
              as a result of the state of the premises or activities on the premises.
            </p>

            <h3>Who is an &quot;Occupier&quot;?</h3>
            <p>
              Section 1 of the OLA defines &quot;occupier&quot; to include: (a) a person who is in
              physical possession of premises; and (b) a person who has responsibility for
              and control over the condition of premises or the activities carried on there,
              or control over persons allowed to enter the premises. A single premises may
              have multiple occupiers simultaneously — for example, a property owner and a
              tenant who leases the property.
            </p>

            <h3>What are &quot;Premises&quot;?</h3>
            <p>
              &quot;Premises&quot; is defined broadly in s.1 to include: (a) land and structures on
              it; (b) water and ships and vessels; and (c) trailers and portable structures
              used as residences. The OLA applies to all these types of premises.
            </p>

            <h2>The Common Duty of Care: Section 3</h2>
            <p>
              Section 3(1) of the OLA establishes the primary duty of care owed by an
              occupier to all entrants to the premises: an occupier must take such care as
              in all the circumstances is reasonable to see that persons entering the premises
              and property brought on the premises are reasonably safe while on the premises.
            </p>
            <p>
              The s.3 duty is objective — the occupier must take positive steps to make the
              premises reasonably safe. Relevant factors in assessing whether the occupier
              met the standard include: the likelihood of harm; the severity of the potential
              harm; the cost and practicality of taking precautions; the purpose of the entry
              (business or social); and the vulnerability of the entrant.
            </p>
            <p>
              The s.3 duty encompasses:
            </p>
            <ul>
              <li>The condition of the premises — ice, defects, lighting;</li>
              <li>Activities carried out on the premises — machinery, construction;</li>
              <li>The conduct of third parties on the premises.</li>
            </ul>

            <h3>Scope: All Entrants</h3>
            <p>
              Unlike the common law, which imposed different duties depending on the category
              of entrant, the OLA imposes a single duty of reasonable care on all entrants,
              with specific exceptions for trespassers and recreational activity entrants
              under s.4. This includes invited guests (invitees), social guests, customers,
              and others who enter with permission.
            </p>

            <h2>Reduced Duty to Trespassers and Criminal Activity: Section 4</h2>
            <p>
              Section 4(1) provides that, despite s.3, the duty of an occupier to trespassers
              and persons entering the premises as a result of criminal activity is limited to
              not acting with reckless disregard for the person&apos;s presence on the premises.
            </p>
            <p>
              &quot;Reckless disregard&quot; is a higher threshold than mere negligence. The occupier
              must be aware of a risk and consciously disregard it. An occupier who is unaware
              of the trespasser&apos;s presence will generally not be liable under s.4(1).
            </p>

            <h3>Child Trespassers: Section 4(2)</h3>
            <p>
              Despite s.4(1), the s.3 duty of care applies to a child trespasser where:
              (a) the occupier has reasonable grounds to believe that the particular kind
              of trespass or premises creates a risk of harm to the particular type of child;
              and (b) the premises are a particular risk to the child greater than to adults.
            </p>
            <p>
              The child trespasser exception recognizes that children may not appreciate
              risks that adults would avoid. Common examples include swimming pools, excavations,
              and machinery that may attract children onto otherwise private property.
            </p>

            <h3>Recreational Activities on Rural and Natural Premises: Section 4(3)</h3>
            <p>
              Section 4(3) provides that where a person enters rural premises for certain
              recreational activities — including hunting, fishing, trapping, camping, hiking,
              skiing, snowshoeing, and other outdoor recreational activities — the occupier
              owes only the s.4(1) reckless disregard duty, not the s.3 duty, unless:
              (a) the occupier charges a fee for entry; or (b) the occupier expressly invites
              the entrant. The recreational activity exception encourages landowners to open
              natural and rural lands for recreational use without exposing themselves to
              full occupiers&apos; liability.
            </p>

            <h2>Independent Contractor Liability: Section 6</h2>
            <p>
              Section 6 addresses the liability of occupiers for the negligence of independent
              contractors. An occupier is not liable for damage caused by the negligence of
              an independent contractor retained to carry out work on the premises if the
              occupier exercised reasonable care in selecting the contractor and, where
              appropriate, in supervising the work.
            </p>
            <p>
              Where the occupier retains a contractor for inherently dangerous work — work
              that requires specialist skill or creates risk of serious harm — the courts may
              impose a higher standard of inspection and oversight. The occupier cannot
              completely delegate the duty of care to a contractor for hazardous operations.
            </p>

            <h2>Modification of Duty by Agreement: Section 3(3)</h2>
            <p>
              Section 3(3) permits an occupier to restrict, modify, or exclude the duty of
              care by agreement with a visitor, provided the restriction or exclusion is
              brought to the visitor&apos;s attention. A waiver of liability or exclusion clause
              on a ticket, sign, or contract may be effective in Ontario if: the entrant had
              reasonable notice of the clause before entering; the clause is clear in its
              terms; and the clause covers the specific risk that materialized.
            </p>
            <p>
              Courts scrutinize exclusion clauses narrowly and will not give effect to
              a clause that purports to exclude liability for the occupier&apos;s own fraud
              or gross negligence.
            </p>

            <h2>Contributory Negligence</h2>
            <p>
              A plaintiff&apos;s contributory negligence reduces the damages recoverable from an
              occupier. Under the <em>Negligence Act</em>, R.S.O. 1990, c. N.1, contributory
              negligence results in apportionment of fault between the plaintiff and defendant,
              not a complete bar to recovery. The trier of fact apportions fault on a percentage
              basis; the plaintiff&apos;s damages are reduced by their share of fault.
            </p>
            <p>
              Common contributory negligence arguments in slip and fall cases include:
              failure to wear appropriate footwear; failure to watch where one was walking;
              failure to use available handrails; prior knowledge of the condition; and
              entry at an inappropriate time.
            </p>

            <h2>Municipal Liability</h2>
            <p>
              Municipalities in Ontario may be occupiers of public sidewalks, roads, and parks
              subject to OLA claims. However, the <em>Municipal Act, 2001</em>, S.O. 2001, c. 25,
              s.44 provides a specific statutory framework for claims against municipalities for
              non-repair of highways (including sidewalks).
            </p>
            <p>
              Under s.44(3), a municipality is not liable for non-repair of a highway unless
              it had knowledge of the non-repair or the non-repair was of such a nature that
              the municipality ought to have had knowledge and failed to take reasonable steps
              to prevent the harm.
            </p>
            <p>
              Critical procedural requirement: s.44(10) requires that a person who intends to
              bring an action against a municipality for highway non-repair must give notice
              to the municipality within 10 days of the loss. Failure to give notice may
              defeat the claim unless the court finds sufficient reason for the failure.
              Ontario civil litigation lawyers handling municipal slip and fall claims must
              immediately advise clients of the 10-day notice requirement.
            </p>

            <h2>Practice Points for Ontario Personal Injury Lawyers</h2>
            <ul>
              <li>
                Send written notice of the claim to the municipality within 10 days of the
                incident for all municipal sidewalk and road claims — missing this deadline
                may defeat the client&apos;s claim.
              </li>
              <li>
                Photograph the scene of the fall as soon as possible and obtain weather and
                maintenance records from the municipality or property owner.
              </li>
              <li>
                Identify all occupiers — both the property owner and any tenants or contractors
                who may have shared responsibility for the condition.
              </li>
              <li>
                Where the defendant relies on a waiver or exclusion clause, scrutinize whether
                the clause was adequately communicated before entry and whether its terms are
                clear enough to cover the specific accident.
              </li>
              <li>
                For child trespasser cases, assess whether the premises contained a feature
                that would attract children (an &quot;attractive nuisance&quot;) and whether the
                occupier had reasonable grounds to anticipate the child&apos;s presence.
              </li>
            </ul>

          </div>
        </article>

        <section className="py-12 px-6 bg-amber-50 border-t border-amber-100">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Manage Your Personal Injury Practice with Atticus
            </h2>
            <p className="text-slate-600 mb-6">
              Track limitation periods and municipal notice deadlines, manage slip and fall matter
              files, and run LSO-compliant trust accounting — all in one Ontario platform.
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
                { href: "/blog/ontario-slip-fall-claim", label: "Ontario Slip and Fall Claims" },
                { href: "/blog/ontario-professional-negligence", label: "Ontario Professional Negligence" },
                { href: "/blog/ontario-limitation-periods", label: "Ontario Limitation Periods" },
                { href: "/ontario-civil-litigation-lawyer", label: "Ontario Civil Litigation Software" },
                { href: "/ai-for-lawyers", label: "AI for Ontario Lawyers" },
                { href: "/trust-accounting-ontario", label: "Ontario Trust Accounting" },
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
