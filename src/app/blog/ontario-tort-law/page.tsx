import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ontario Tort Law — Negligence, Occupiers Liability, and Defamation | Atticus",
  description:
    "A practical guide to Ontario tort law: negligence, the Anns/Cooper test, contributory negligence, occupiers liability, defamation, and key Supreme Court of Canada decisions.",
  openGraph: {
    title: "Ontario Tort Law — Negligence, Occupiers Liability, and Defamation",
    description:
      "Ontario tort law guide: Donoghue v Stevenson neighbour principle, Anns/Cooper test, standard of care, causation but-for test, contributory negligence, occupiers liability, and defamation.",
    type: "article",
    url: "https://getatticus.ca/blog/ontario-tort-law",
  },
  alternates: { canonical: "https://getatticus.ca/blog/ontario-tort-law" },
};

export default function OntarioTortLawPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Ontario Tort Law — Negligence, Occupiers Liability, and Defamation",
    description:
      "Practical guide to Ontario tort law: negligence duty of care, standard of care, causation, contributory negligence, occupiers liability, and defamation.",
    url: "https://getatticus.ca/blog/ontario-tort-law",
    author: { "@type": "Organization", name: "Atticus" },
    publisher: { "@type": "Organization", name: "Atticus", url: "https://getatticus.ca" },
    datePublished: "2026-03-19",
    keywords: [
      "Ontario tort law",
      "negligence Ontario",
      "Anns Cooper test duty of care",
      "occupiers liability Ontario",
      "defamation Ontario",
      "contributory negligence Ontario",
      "but-for causation Ontario",
    ],
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="max-w-3xl mx-auto px-6 py-16">
        <div className="mb-8">
          <div className="inline-block bg-orange-100 text-orange-800 text-sm font-semibold px-3 py-1 rounded-full mb-4">
            Tort Law
          </div>
          <h1 className="text-4xl font-bold leading-tight mb-4">
            Ontario Tort Law — Negligence, Occupiers&apos; Liability, and Defamation
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            A practical guide to Ontario tort law: the elements of negligence, the Anns/Cooper duty of care
            framework, standard of care, causation, contributory negligence, occupiers&apos; liability,
            defamation, and nuisance.
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>March 2026</span>
            <span>&middot;</span>
            <span>15 min read</span>
            <span>&middot;</span>
            <span>Atticus Legal Research</span>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">

          <h2>Negligence — The Foundational Framework</h2>
          <p>
            Negligence requires proof of: (1) a duty of care owed by the defendant to the plaintiff;
            (2) breach of the standard of care; (3) damage; and (4) causation between breach and damage.
            Each element must be established on the balance of probabilities.
          </p>
          <h3>Duty of Care — The Anns/Cooper Test</h3>
          <p>
            The modern duty of care analysis in Canada derives from <em>Donoghue v Stevenson</em>
            [1932] AC 562 (neighbour principle — reasonable foreseeability) but was reformulated in{" "}
            <em>Cooper v Hobart</em> 2001 SCC 79 and <em>Edwards v Law Society of Upper Canada</em>
            2001 SCC 80, establishing the &quot;Anns/Cooper&quot; framework:
          </p>
          <ul>
            <li>
              <strong>Stage 1 — Prima facie duty</strong>: Was harm to the plaintiff a reasonably foreseeable
              consequence of the defendant&apos;s act? Was the relationship between the parties sufficiently
              proximate — close enough that it is just and fair to impose a duty?
            </li>
            <li>
              <strong>Stage 2 — Policy</strong>: Are there residual policy reasons to negate or limit the
              scope of the duty, the class of persons who can rely on it, or the damages that can flow
              from breach?
            </li>
          </ul>
          <p>
            Recognized duties exist in established categories (manufacturer/consumer, employer/employee,
            doctor/patient, occupier/visitor). New categories require the full Anns/Cooper analysis.
            The duty of care does not extend to pure economic loss absent a special relationship
            creating reasonable reliance — <em>Winnipeg Condominium Corp No 36 v Bird Construction</em>
            [1995] 1 SCR 85 (dangerous building exception); <em>Hercules Managements v Ernst &amp; Young</em>
            [1997] 2 SCR 165 (auditor to shareholders — policy negates duty).
          </p>
          <h3>Negligent Misrepresentation</h3>
          <p>
            Liability for negligent misrepresentation arises where there is a special relationship
            (one party has special knowledge; other relies reasonably) and the misrepresentation is
            inaccurate and carelessly made (<em>Queen v Cognos</em> [1993] 1 SCR 87 five-part test:
            special relationship/representation/representation careless/reasonable reliance/damage).
          </p>

          <h2>Standard of Care</h2>
          <p>
            The standard of care is objective — that of a reasonable person in the circumstances
            (<em>Vaughan v Menlove</em> (1837) 3 Bing NC 468). The reasonable person is not perfect:
            they are required to take precautions proportionate to the foreseeability and gravity of the
            harm and the cost of precautions. The <em>Bolton v Stone</em> [1951] AC 850 formula — probability
            of harm × magnitude of harm, weighed against cost of precautions — applies in Ontario.
          </p>
          <p>
            For professionals, the standard is that of a reasonably competent professional in the relevant
            specialty (<em>ter Neuzen v Korn</em> [1995] 3 SCR 674 — medical professional standard).
            Compliance with an industry standard does not conclusively establish the standard of care
            was met; courts retain authority to find the standard itself negligent (<em>TJ Hooper</em>
            60 F.2d 737 (2d Cir 1932) adopted in Canada).
          </p>

          <h2>Causation</h2>
          <h3>But-For Test</h3>
          <p>
            The primary causation test is &quot;but for&quot; the defendant&apos;s negligence, would the
            plaintiff have suffered the damage? (<em>Clements v Clements</em> 2012 SCC 32). The plaintiff
            must establish on the balance of probabilities that the breach was a necessary cause of
            the loss. Multiple causes are handled by asking whether each defendant&apos;s negligence was
            a cause &quot;but for&quot; which the loss would not have occurred.
          </p>
          <h3>Material Contribution — Exception</h3>
          <p>
            Where it is impossible for the plaintiff to prove but-for causation — because multiple defendants
            each produced a risk and medical science cannot attribute which defendant&apos;s breach caused
            harm — the material contribution to risk test may apply (<em>Clements</em> per McLachlin CJ;
            <em>Athey v Leonati</em> [1996] 3 SCR 458). Material contribution to risk is narrow; courts
            are reluctant to expand it beyond the market share liability or multiple tortfeasors scenario.
          </p>
          <h3>Loss of Chance</h3>
          <p>
            Ontario courts have not uniformly adopted loss of chance as a basis for recovery in negligence.
            The leading SCC statement is <em>Laferrière v Lawson</em> [1991] 1 SCR 541 — loss of chance
            is not a compensable head of damages where the ultimate harm (death, serious injury) did not
            occur; recovery requires proof of the actual harm on the balance of probabilities.
          </p>

          <h2>Contributory Negligence and Apportionment</h2>
          <p>
            Ontario abolished the contributory negligence complete defence through the{" "}
            <em>Negligence Act</em> RSO 1990 c N.1. Under s.3, where damage is caused or contributed
            to by the fault or neglect of two or more persons, each is liable to the plaintiff to the extent
            of their degree of fault. Defendants are jointly and severally liable to the plaintiff, but
            have rights of contribution against each other proportionate to their fault.
          </p>
          <p>
            A plaintiff who is contributorily negligent has their damages reduced proportionately to their
            own fault. The finder of fact apportions fault as a percentage; if the plaintiff is 30% at fault,
            their recovery is reduced by 30%.
          </p>

          <h2>Occupiers&apos; Liability</h2>
          <p>
            Ontario&apos;s <em>Occupiers&apos; Liability Act</em> RSO 1990 c O.2 replaced the common law
            categories of invitee, licensee, and trespasser with a single duty of care. Under s.3(1), an
            occupier of premises owes a duty to take such care as in all the circumstances is reasonable
            to see that persons entering the premises and their property are reasonably safe.
          </p>
          <p>
            The occupier&apos;s duty under the Act is not absolute — it requires reasonable care in the
            circumstances. Relevant factors include foreseeability of the risk, the cost of eliminating
            it, and the purpose of the visitor&apos;s entry. The duty may be modified by agreement or
            warning (s.3(3)) but only to the extent permitted by the Act — restrictions cannot operate
            to eliminate the duty of care entirely (<em>Waldick v Malcolm</em> [1991] 2 SCR 456).
          </p>
          <p>
            Trespassers receive a lower standard under s.4 — the occupier must not create a danger with
            intent to injure or act with reckless disregard for the trespasser&apos;s presence. The
            standard is higher for child trespassers where there is an artificial allurement.
          </p>

          <h2>Defamation</h2>
          <p>
            Defamation in Ontario is governed by the common law (as modified by statute) and involves:
          </p>
          <ul>
            <li>Publication of a statement</li>
            <li>The statement refers to the plaintiff</li>
            <li>The statement is defamatory — lowers the plaintiff&apos;s reputation in the estimation
            of right-thinking members of society (<em>Sim v Stretch</em> [1936] 2 All ER 1237)</li>
          </ul>
          <p>
            Defamation is actionable per se — the plaintiff need not prove actual damage. However, damages
            are compensatory and the plaintiff must establish the extent of their loss.
          </p>
          <h3>Defences</h3>
          <ul>
            <li>
              <strong>Justification (truth)</strong> — a complete defence; defendant must prove the statement
              was substantially true
            </li>
            <li>
              <strong>Fair comment</strong> — an honest expression of opinion on a matter of public interest,
              based on true facts
            </li>
            <li>
              <strong>Absolute privilege</strong> — statements made in Parliament, courts, and certain
              quasi-judicial proceedings are absolutely privileged
            </li>
            <li>
              <strong>Qualified privilege</strong> — communications made in discharge of a duty or in
              protection of a legitimate interest (e.g., employment references) — defeated by malice
            </li>
            <li>
              <strong>Responsible communication on matters of public interest</strong> — established in{" "}
              <em>Grant v Torstar</em> 2009 SCC 61 as a defence for responsible journalism on matters of
              genuine public interest; replaces the US &quot;actual malice&quot; standard
            </li>
          </ul>
          <h3>Ontario Defamation Act</h3>
          <p>
            The <em>Defamation Act</em> RSO 1990 c D.6 provides additional protections: s.5 requires notice
            of action within 6 weeks of publication (for newspapers and broadcasts); s.9 permits mitigation
            by publication of an apology; s.22 provides absolute privilege for fair and accurate reports of
            court proceedings. The <em>Protection of Public Participation Act</em> SO 2015 c 23 (Ontario&apos;s
            anti-SLAPP legislation) allows defendants to move for early dismissal of proceedings that arise
            from expression on matters of public interest where the plaintiff cannot establish substantial merit
            and the public interest in proceeding does not outweigh the public interest in protecting expression.
          </p>

          <h2>Nuisance</h2>
          <p>
            Private nuisance protects an occupier&apos;s right to reasonable use and enjoyment of land.
            The defendant&apos;s use of their property must cause unreasonable interference with the
            plaintiff&apos;s enjoyment of their property. Unreasonableness is assessed by balancing
            the gravity of harm against the utility of the defendant&apos;s conduct — the locality
            of the area, the sensitivity of the plaintiff, and the character of the neighbourhood are
            all relevant.
          </p>
          <p>
            Strict liability under <em>Rylands v Fletcher</em> (1868) LR 3 HL 330 — for non-natural use
            of land involving dangerous things likely to do mischief if they escape — has been recognized
            in Ontario courts but narrowly applied. The SCC in <em>Tock v St John&apos;s Metropolitan
            Area Board</em> [1989] 2 SCR 1181 preserved Rylands v Fletcher strict liability while
            acknowledging the debate about its future in Canada.
          </p>
        </div>
      </article>
    </div>
  );
}
