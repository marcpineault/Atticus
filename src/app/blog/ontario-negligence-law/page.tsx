import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ontario Negligence Law: Duty, Standard of Care, and Causation | Atticus Blog",
  description:
    "A practical guide to Ontario negligence law — the Anns/Cooper duty of care test, standard of care, causation (but-for and material contribution), remoteness, contributory negligence, and occupiers' liability.",
  openGraph: {
    title: "Ontario Negligence Law: Duty, Standard of Care, and Causation",
    description:
      "Anns/Cooper duty of care, standard of care, but-for causation, material contribution, remoteness, contributory negligence, and occupiers' liability in Ontario.",
    type: "article",
    publishedTime: "2026-03-19",
  },
};

export default function OntarioNegligenceLaw() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Ontario Negligence Law: Duty, Standard of Care, and Causation",
    description:
      "A practical guide to Ontario negligence law — Anns/Cooper, standard of care, but-for causation, material contribution, remoteness, contributory negligence.",
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
            <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-700">
              Tort Law
            </span>
            <time dateTime="2026-03-19">March 19, 2026</time>
            <span>13 min read</span>
          </div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900">
            Ontario Negligence Law: Duty, Standard of Care, and Causation
          </h1>
          <p className="text-xl text-gray-600">
            Negligence is the dominant tort in Ontario practice — personal injury, professional
            liability, occupiers&apos; liability, and product liability all flow from negligence
            principles. This guide covers the elements of negligence, causation analysis, and
            the key statutory modifications Ontario lawyers must know.
          </p>
        </header>

        <div className="prose prose-gray max-w-none">
          <h2>Elements of a Negligence Claim</h2>
          <p>
            To succeed in negligence, a plaintiff must establish on a balance of probabilities:
          </p>
          <ol>
            <li>The defendant owed the plaintiff a duty of care</li>
            <li>The defendant breached the standard of care</li>
            <li>The breach caused the plaintiff&apos;s loss (causation)</li>
            <li>The loss was not too remote (remoteness)</li>
            <li>Actual damages</li>
          </ol>

          <h2>Duty of Care: The Anns/Cooper Test</h2>
          <p>
            The foundational duty of care test in Canada is the two-stage <em>Anns/Cooper</em>
            test, reformulated by the Supreme Court of Canada in <em>Cooper v Hobart</em>,
            [2001] 3 SCR 537, and clarified in <em>Edwards v Law Society of Upper Canada</em>,
            [2001] 3 SCR 562 and <em>Design Services Ltd v Canada</em>, [2008] 1 SCR 737:
          </p>
          <p>
            <strong>Stage One — Prima facie duty</strong>:
          </p>
          <ul>
            <li>
              <strong>Proximity</strong>: Was there sufficient proximity between the parties
              that it is fair to impose a duty? Proximity is assessed from the perspective of
              the type of relationship, the nature of the act and loss, and any direct/indirect
              dealings between the parties. Recognized categories of proximity include
              manufacturer-consumer, employer-employee, professional-client, and occupier-entrant.
            </li>
            <li>
              <strong>Reasonable foreseeability</strong>: Was it reasonably foreseeable that
              the defendant&apos;s conduct could cause damage to a person in the plaintiff&apos;s
              position?
            </li>
          </ul>
          <p>
            If both proximity and foreseeability are satisfied, a prima facie duty of care
            arises.
          </p>
          <p>
            <strong>Stage Two — Policy considerations</strong>: Are there residual policy
            considerations that negate or limit the prima facie duty? Policy considerations
            include: indeterminate liability (floodgates concern — <em>Hercules Management
            v Ernst &amp; Young</em>, [1997] 2 SCR 165); conflicting statutory duties of the
            defendant; and concerns about overlapping judicial and regulatory functions.
          </p>
          <p>
            <strong>Novel duties</strong>: Where a plaintiff relies on a recognized category
            of proximity, the court proceeds directly on established precedent. Where no
            recognized category exists, the full two-stage analysis is required.
          </p>

          <h2>Standard of Care</h2>
          <p>
            The standard of care in negligence is the objective standard of the reasonable
            person in the circumstances of the defendant:
          </p>
          <ul>
            <li>
              <strong>Ordinary persons</strong>: The reasonable person of ordinary prudence.
              The defendant&apos;s subjective characteristics (intelligence, experience) are
              generally irrelevant.
            </li>
            <li>
              <strong>Professionals</strong>: The standard is the reasonably competent
              practitioner in the relevant field and specialty. Experts must meet the standard
              of the specialty they hold themselves out as practicing (<em>ter Neuzen v Korn</em>,
              [1995] 3 SCR 674). The standard evolves with the state of medical/professional
              knowledge at the time of the alleged negligence.
            </li>
            <li>
              <strong>Children</strong>: Children are held to the standard of a child of the
              same age, intelligence, and experience in the circumstances (modified objective
              standard). An exception applies where the child is engaged in an adult activity
              (e.g., operating a motorboat).
            </li>
            <li>
              <strong>Utilities</strong>: The <em>Bolam</em> test (a UK standard requiring
              merely that the defendant act in accordance with a body of responsible professional
              opinion) was rejected in Canada. The court independently assesses what the standard
              required — expert evidence is valuable but not conclusive.
            </li>
          </ul>

          <h2>Causation</h2>
          <p>
            Causation is frequently the most contested element in negligence cases. Ontario
            applies a multi-step causation analysis:
          </p>

          <h3>But-For Test</h3>
          <p>
            The primary test is the but-for test: but for the defendant&apos;s negligence, would
            the plaintiff have suffered the loss? The plaintiff must prove on a balance of
            probabilities (more than 50%) that the negligence caused the loss (<em>Clements v
            Clements</em>, 2012 SCC 32).
          </p>
          <p>
            <strong>Multiple sufficient causes</strong>: Where two defendants each negligently
            cause an injury that the other could also have caused alone (two fires combine
            to burn a house), the but-for test fails both defendants. Courts apply <em>Cook v
            Lewis</em>, [1951] SCR 830 — causation is made out against both, and the burden
            shifts to each defendant to disprove their causal role.
          </p>

          <h3>Material Contribution to Risk</h3>
          <p>
            The material contribution to risk (MCR) doctrine is a narrow exception to the
            but-for test (<em>Clements</em> at para 46): MCR applies only where:
          </p>
          <ul>
            <li>It is impossible to prove but-for causation due to factors outside the plaintiff&apos;s control (not merely evidentiary gaps)</li>
            <li>The plaintiff&apos;s injury falls within the ambit of the risk that made the defendant&apos;s conduct negligent</li>
            <li>The defendant&apos;s negligence materially contributed to the risk of injury</li>
          </ul>
          <p>
            MCR is not a general relaxation of the causation standard — it applies in
            exceptional cases only. Courts in Ontario have resisted expanding MCR beyond
            the scenarios contemplated in <em>Clements</em>.
          </p>

          <h3>Loss of Chance</h3>
          <p>
            Ontario courts have generally not adopted a loss-of-chance doctrine in medical
            negligence cases. The plaintiff must prove that the negligence caused the injury,
            not merely that it reduced a statistical chance of a better outcome (though this
            remains an evolving area).
          </p>

          <h2>Remoteness</h2>
          <p>
            Even where causation is established, a defendant is not liable for losses that are
            too remote. The test for remoteness in Canada is reasonable foreseeability of the
            type of damage (not the precise manner in which it occurred):
          </p>
          <ul>
            <li>
              <strong>Wagon Mound test</strong>: A defendant is liable only for damage of a
              type that was a reasonably foreseeable consequence of their negligence (not
              for entirely unforeseeable consequences).
            </li>
            <li>
              <strong>Thin skull rule</strong>: A defendant must take the plaintiff as they
              find them — if the type of damage was foreseeable, the defendant is liable for
              the full extent even if the severity was not foreseeable due to a pre-existing
              vulnerability (<em>Athey v Leonati</em>, [1996] 3 SCR 458).
            </li>
            <li>
              <strong>Crumbling skull</strong>: A defendant is not liable for pre-existing
              conditions that would have caused the same damage regardless of the negligence.
              <em>Athey</em> establishes that courts must apportion liability between the
              defendant&apos;s negligence and the pre-existing condition where the condition was
              going to worsen the plaintiff&apos;s situation anyway.
            </li>
          </ul>

          <h2>Contributory Negligence</h2>
          <p>
            Ontario&apos;s <em>Negligence Act</em>, RSO 1990, c N.1, replaced the common law
            all-or-nothing contributory negligence rule with a system of proportionate fault:
          </p>
          <ul>
            <li>
              <strong>Apportionment</strong>: Where a loss is caused by the negligence of
              multiple defendants and/or the plaintiff&apos;s own negligence, damages are apportioned
              in proportion to each party&apos;s degree of fault (s.3).
            </li>
            <li>
              <strong>Plaintiff&apos;s contributory negligence</strong>: The plaintiff&apos;s damages
              are reduced proportionately by their own fault (s.4). Wearing a seatbelt, using
              a handrail, and not contributory negligence in failure to mitigate.
            </li>
            <li>
              <strong>Contribution between defendants</strong>: Under s.2, a defendant who
              pays more than their share of a judgment can claim contribution from co-defendants
              in proportion to their respective fault.
            </li>
            <li>
              <strong>Joint and several liability</strong>: The Negligence Act maintains joint
              and several liability — a plaintiff can recover the full judgment from any one
              defendant, even if that defendant was only 1% at fault, leaving that defendant
              to seek contribution from co-defendants.
            </li>
          </ul>

          <h2>Occupiers&apos; Liability</h2>
          <p>
            The <em>Occupiers&apos; Liability Act</em>, RSO 1990, c O.2, replaced the common law
            categories of invitee, licensee, and trespasser with a unified regime:
          </p>
          <ul>
            <li>
              <strong>Occupier</strong>: A person in physical possession of premises or who
              has responsibility for and control over the condition or activities on the premises
              or the persons allowed to enter (s.1). More than one occupier can exist for the
              same premises.
            </li>
            <li>
              <strong>General duty (s.3)</strong>: An occupier owes a duty to take such care
              as is reasonable in all the circumstances to ensure that persons entering the
              premises are reasonably safe. The duty extends to hazards from the condition of
              the premises and activities carried on.
            </li>
            <li>
              <strong>Trespasser duty (s.4)</strong>: The occupier&apos;s duty to trespassers is
              lower — not to create a danger with intent to harm or reckless disregard for
              the trespasser&apos;s presence. This applies unless the trespasser is on the property
              with criminal intent, in which case the occupier may use reasonable defensive force.
            </li>
            <li>
              <strong>Limitation of liability</strong>: Occupiers can restrict or exclude their
              duty to certain categories of entrant by agreement (subject to the duty to take
              reasonable steps to bring the restriction to the attention of the person).
            </li>
          </ul>

          <h2>Nervous Shock and Pure Psychiatric Injury</h2>
          <p>
            Ontario courts have recognized duties of care for pure psychiatric injury (not
            accompanied by physical injury) in limited circumstances:
          </p>
          <ul>
            <li>
              <strong>Immediate victim</strong>: A plaintiff who was themselves in the
              danger zone created by the defendant&apos;s negligence can recover for psychiatric
              injury on ordinary negligence principles.
            </li>
            <li>
              <strong>Secondary victim (bystander)</strong>: A plaintiff who witnessed a
              traumatic event involving close relatives and suffered psychiatric injury may
              recover if they were a recognizable plaintiff (close tie of love and affection +
              proximity to the accident + direct perception) — <em>Alcock v Chief Constable of
              South Yorkshire Police</em> [1992] AC 310, applied in Ontario.
            </li>
          </ul>

          <h2>Summary</h2>
          <p>
            Ontario negligence law is structured around the Anns/Cooper duty test, the objective
            standard of care, and the but-for causation test (with the narrow MCR exception from
            <em>Clements</em>). The thin skull and crumbling skull rules from <em>Athey</em>
            are essential for damages analysis. The <em>Negligence Act</em>&apos;s proportionate fault
            regime and joint and several liability combine to create a complex damages landscape
            in multi-party personal injury and professional liability cases.
          </p>
          <p>
            Atticus helps Ontario litigation lawyers manage complex negligence files — tracking
            multiple defendants, expert evidence, and limitation periods — with LSO-compliant
            trust accounting for contingency file operations.
          </p>
        </div>

        <div className="mt-12 rounded-xl bg-red-50 p-8 text-center">
          <h3 className="mb-2 text-xl font-bold text-gray-900">
            Practice Management for Ontario Litigators
          </h3>
          <p className="mb-6 text-gray-600">
            Deadline tracking, trust accounting, matter management, and AI document analysis —
            built for Ontario civil litigation and personal injury practices.
          </p>
          <a
            href="/sign-up"
            className="inline-block rounded-lg bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700"
          >
            Start Free Trial
          </a>
        </div>
      </article>
    </>
  );
}
