import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ontario Estate Litigation Guide 2024 | Will Challenges & Dependants Relief",
  description:
    "Complete guide to Ontario estate litigation: will challenges (lack of capacity, undue influence), dependants relief, passing of accounts, removal of estate trustees, and trust disputes.",
  openGraph: {
    title: "Ontario Estate Litigation Guide 2024 | Will Challenges & Dependants Relief",
    description:
      "Everything Ontario estate litigators need to know — will challenges, testamentary capacity, undue influence, dependants relief under SLRA, passing of accounts, and estate trustee removal.",
    url: "https://getatticus.ca/blog/ontario-estate-litigation",
    siteName: "Atticus",
    type: "article",
  },
};

const schemaJson = `{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Ontario Estate Litigation Guide 2024: Will Challenges, Dependants Relief, and Estate Trustee Disputes",
      "description": "Comprehensive guide to Ontario estate litigation covering will challenges (capacity and undue influence), dependants relief under the Succession Law Reform Act, passing of accounts, and estate trustee removal.",
      "url": "https://getatticus.ca/blog/ontario-estate-litigation",
      "datePublished": "2024-11-28",
      "dateModified": "2024-11-28",
      "author": {
        "@type": "Organization",
        "name": "Atticus"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Atticus",
        "url": "https://getatticus.ca"
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What are the grounds to challenge a will in Ontario?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The main grounds to challenge a will in Ontario are: (1) lack of testamentary capacity — the testator did not know and approve the contents of the will, did not understand the nature of a will and its effects, did not know the nature and extent of the property, and did not appreciate the claims of those who might expect a benefit; (2) undue influence — the testator's free agency was overborne by another person's coercive influence; (3) fraud or forgery; and (4) failure to comply with formal requirements under the Succession Law Reform Act."
          }
        },
        {
          "@type": "Question",
          "name": "Who can make a dependants relief claim in Ontario?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under Part V of the Succession Law Reform Act (SLRA), a 'dependant' who has not been adequately provided for by the deceased's will or intestacy can apply for support from the estate. Dependants include: a spouse (married or common-law), parent, child, brother, or sister of the deceased who was being supported by the deceased immediately before death. The court has broad discretion to order support from the estate."
          }
        },
        {
          "@type": "Question",
          "name": "What is a passing of accounts in Ontario estate law?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A passing of accounts is a court-supervised review of an estate trustee's or attorney's financial administration of the estate or property. Under Rule 74 of the Rules of Civil Procedure, the estate trustee files formal accounts (Form 74.43) with the court. Beneficiaries can object to specific transactions. The court approves or disallows accounts and may award compensation to the trustee or surcharge the trustee for improper dealings."
          }
        },
        {
          "@type": "Question",
          "name": "On what grounds can an estate trustee be removed in Ontario?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under s. 37 of the Trustee Act, a court can remove an estate trustee on the application of a beneficiary where: the trustee has been absent from Ontario for more than 6 months; refuses or is unfit to act; cannot be found; or becomes incapable. Courts also have inherent jurisdiction to remove a trustee where there is a conflict of interest, misconduct, or where the trustee's continuation endangers the trust property or beneficiaries' interests."
          }
        }
      ]
    }
  ]
}`;

type ChallengGround = {
  ground: string;
  test: string;
  burden: string;
  keyEvidence: string;
};

const challengeGrounds: ChallengGround[] = [
  {
    ground: "Lack of Testamentary Capacity",
    test: "Banks v Goodfellow [1870]: testator must know the nature of a will, extent of property, claims of those who might benefit, and approve the contents",
    burden: "Presumed if will properly executed; challenger bears evidential burden",
    keyEvidence: "Medical records, treating physician evidence, capacity assessor, witnesses at execution",
  },
  {
    ground: "Undue Influence",
    test: "Testator's free agency coerced or overborne by another; more than persuasion — must amount to coercion",
    burden: "Challenger bears burden; circumstantial evidence often required",
    keyEvidence: "Isolation of testator; relationship of power; suspicious instructions; change in estate plan",
  },
  {
    ground: "Fraud or Forgery",
    test: "Will obtained by fraudulent misrepresentation or physically forged",
    burden: "Challenger bears burden on balance of probabilities",
    keyEvidence: "Handwriting analysis; expert evidence; circumstances of execution",
  },
  {
    ground: "Failure of Formal Requirements",
    test: "Will not signed, witnessed as required under SLRA s. 4 (two witnesses, signed in their presence)",
    burden: "Clear on face of document; may apply to court for validation under SLRA s. 21.1",
    keyEvidence: "Witnesses; affidavits of execution; the will itself",
  },
  {
    ground: "Knowledge and Approval",
    test: "Testator did not know or approve contents of the will at time of execution",
    burden: "Challenger must raise suspicious circumstances; burden then shifts to propounder",
    keyEvidence: "Blind or illiterate testator; no explanation of will contents; abrupt changes",
  },
];

type EstateClaim = {
  claim: string;
  who: string;
  deadline: string;
  remedy: string;
};

const estateClaims: EstateClaim[] = [
  {
    claim: "Will Challenge (Contentious Probate)",
    who: "Any interested person (beneficiary, intestate heir)",
    deadline: "Before probate granted; or petition to revoke probate within 6 months",
    remedy: "Refusal to grant probate; revocation of certificate of appointment",
  },
  {
    claim: "Dependants Relief",
    who: "Spouse, parent, child, sibling who was supported by deceased",
    deadline: "6 months from grant of certificate of appointment (SLRA s. 61)",
    remedy: "Support order from estate in court's discretion",
  },
  {
    claim: "Passing of Accounts",
    who: "Beneficiary, residuary beneficiary, creditor",
    deadline: "Any time during administration; final accounts before distribution",
    remedy: "Approval, disallowance, surcharge, or increased compensation",
  },
  {
    claim: "Estate Trustee Removal",
    who: "Beneficiary or co-trustee",
    deadline: "Any time during administration",
    remedy: "Removal and appointment of replacement; costs",
  },
  {
    claim: "Breach of Fiduciary Duty",
    who: "Beneficiary",
    deadline: "Generally 2 years from discovery",
    remedy: "Account of profits; surcharge; disgorgement; personal liability",
  },
  {
    claim: "Unjust Enrichment / Constructive Trust",
    who: "Common-law spouse; contributor to deceased's estate",
    deadline: "Generally 2 years from death or discovery",
    remedy: "Trust over specific property; monetary award",
  },
];

const faqs = [
  {
    q: "What are the grounds to challenge a will in Ontario?",
    a: "The main grounds to challenge a will in Ontario are: (1) lack of testamentary capacity — the testator did not know and approve the contents of the will, did not understand the nature of a will and its effects, did not know the nature and extent of the property, and did not appreciate the claims of those who might expect a benefit; (2) undue influence — the testator's free agency was overborne by another person's coercive influence; (3) fraud or forgery; and (4) failure to comply with formal requirements under the Succession Law Reform Act.",
  },
  {
    q: "Who can make a dependants relief claim in Ontario?",
    a: "Under Part V of the Succession Law Reform Act (SLRA), a 'dependant' who has not been adequately provided for by the deceased's will or intestacy can apply for support from the estate. Dependants include: a spouse (married or common-law), parent, child, brother, or sister of the deceased who was being supported by the deceased immediately before death. The court has broad discretion to order support from the estate.",
  },
  {
    q: "What is a passing of accounts in Ontario estate law?",
    a: "A passing of accounts is a court-supervised review of an estate trustee's or attorney's financial administration of the estate or property. Under Rule 74 of the Rules of Civil Procedure, the estate trustee files formal accounts (Form 74.43) with the court. Beneficiaries can object to specific transactions. The court approves or disallows accounts and may award compensation to the trustee or surcharge the trustee for improper dealings.",
  },
  {
    q: "On what grounds can an estate trustee be removed in Ontario?",
    a: "Under s. 37 of the Trustee Act, a court can remove an estate trustee on the application of a beneficiary where: the trustee has been absent from Ontario for more than 6 months; refuses or is unfit to act; cannot be found; or becomes incapable. Courts also have inherent jurisdiction to remove a trustee where there is a conflict of interest, misconduct, or where the trustee's continuation endangers the trust property or beneficiaries' interests.",
  },
];

export default function OntarioEstateLitigationPage() {
  return (
    <>
      <Script id="ontario-estate-litigation-schema" type="application/ld+json">
        {schemaJson}
      </Script>

      <div className="min-h-screen bg-white">
        {/* Breadcrumb */}
        <div className="max-w-4xl mx-auto px-6 pt-6">
          <nav className="text-sm text-slate-500">
            <Link href="/" className="hover:text-slate-700">
              Home
            </Link>{" "}
            /{" "}
            <Link href="/blog" className="hover:text-slate-700">
              Blog
            </Link>{" "}
            / Ontario Estate Litigation
          </nav>
        </div>

        {/* Header */}
        <header className="max-w-4xl mx-auto px-6 py-12">
          <div className="inline-block bg-violet-100 text-violet-700 text-sm font-semibold px-3 py-1 rounded-full mb-4">
            Wills &amp; Estates
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Ontario Estate Litigation Guide 2024: Will Challenges, Dependants
            Relief, and Estate Trustee Disputes
          </h1>
          <p className="text-xl text-slate-600 mb-6">
            A comprehensive reference for Ontario estate litigators — covering
            will challenge grounds (capacity and undue influence), dependants
            relief under the SLRA, passing of accounts, and estate trustee
            removal.
          </p>
          <div className="flex items-center gap-4 text-sm text-slate-500">
            <span>By Atticus Legal Team</span>
            <span>•</span>
            <span>November 2024</span>
            <span>•</span>
            <span>16 min read</span>
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-6 pb-20">
          {/* Intro */}
          <section className="mb-12">
            <p className="text-slate-700 text-lg leading-relaxed mb-4">
              Ontario estate litigation has grown significantly as aging
              demographics and larger estates create more disputes among
              beneficiaries, family members, and estate trustees. The
              intersection of incapacity, blended families, and significant
              assets creates fertile ground for will challenges, dependants
              relief applications, and trustee removal proceedings.
            </p>
            <p className="text-slate-700 leading-relaxed">
              This guide covers the five main grounds to challenge a will,
              the six types of estate claims Ontario litigators encounter,
              dependants relief procedure under the Succession Law Reform Act,
              and the grounds for estate trustee removal under the Trustee Act.
            </p>
          </section>

          {/* Challenge Grounds */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Grounds to Challenge a Will in Ontario
            </h2>
            <div className="space-y-4">
              {challengeGrounds.map((ground, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm"
                >
                  <h3 className="font-semibold text-slate-900 mb-2">
                    {i + 1}. {ground.ground}
                  </h3>
                  <div className="grid sm:grid-cols-3 gap-3 text-sm">
                    <div>
                      <span className="font-medium text-slate-700">
                        Legal Test:{" "}
                      </span>
                      <span className="text-slate-600">{ground.test}</span>
                    </div>
                    <div>
                      <span className="font-medium text-slate-700">
                        Burden:{" "}
                      </span>
                      <span className="text-slate-600">{ground.burden}</span>
                    </div>
                    <div>
                      <span className="font-medium text-slate-700">
                        Key Evidence:{" "}
                      </span>
                      <span className="text-slate-600">{ground.keyEvidence}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Suspicious Circumstances */}
          <section className="mb-12">
<h2 className="text-2xl font-bold text-slate-900 mb-4">
              Suspicious Circumstances and the Shifting Burden
            </h2>
            <p className="text-slate-700 mb-4">
              Where suspicious circumstances are raised by the challenger, the
              burden of proving knowledge and approval shifts to the party
              propounding the will. The Supreme Court of Canada in{" "}
              <em>Vout v Hay</em> [1995] 2 SCR 876 confirmed:
            </p>
            <div className="bg-violet-50 border border-violet-200 rounded-xl p-6">
              <div className="space-y-3">
                {[
                  "Suspicious circumstances are facts raising doubt about the validity of the will",
                  "Once raised, the propounder must dispel the suspicious circumstances on a balance of probabilities",
                  "Common suspicious circumstances: testator in weakened physical or mental state; will preparation arranged by a beneficiary; significant departure from previous estate plans",
                  "The court considers the cumulative effect of all suspicious circumstances together",
                ].map((point, i) => (
                  <div key={i} className="flex gap-2">
                    <span className="text-violet-600 font-bold">{i + 1}.</span>
                    <span className="text-violet-800 text-sm">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Estate Claims Table */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Ontario Estate Claims: Overview
            </h2>
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full bg-white text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left px-4 py-3 font-semibold">
                      Claim
                    </th>
                    <th className="text-left px-4 py-3 font-semibold">
                      Who Can Bring It
                    </th>
                    <th className="text-left px-4 py-3 font-semibold">
                      Time Limit
                    </th>
                    <th className="text-left px-4 py-3 font-semibold">
                      Remedy
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {estateClaims.map((row, i) => (
                    <tr
                      key={i}
                      className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}
                    >
                      <td className="px-4 py-3 font-semibold text-slate-900">
                        {row.claim}
                      </td>
                      <td className="px-4 py-3 text-slate-600">{row.who}</td>
                      <td className="px-4 py-3 text-slate-600">
                        {row.deadline}
                      </td>
                      <td className="px-4 py-3 text-slate-600">{row.remedy}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Dependants Relief */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Dependants Relief Under the SLRA
            </h2>
            <p className="text-slate-700 mb-4">
              Part V of the{" "}
              <em>Succession Law Reform Act</em>, RSO 1990, c S.26 gives
              dependants the right to apply for support from the estate if the
              deceased failed to make adequate provision. The application must be
              commenced within 6 months of the grant of the certificate of
              appointment.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Who Qualifies as a Dependant",
                  text: "Spouse, parent, child, brother, or sister of the deceased who was being supported (wholly or in part) by the deceased immediately before death.",
                },
                {
                  title: "Court Factors",
                  text: "Court considers: claimant's current assets and means; claimant's capacity to contribute to own support; claimant's age and physical condition; the needs of other dependants; deceased's reasons for not providing for the dependant.",
                },
                {
                  title: "Remedy",
                  text: "Court orders support from the estate — either a lump sum or periodic payments. The court can order support even against specific bequests.",
                },
                {
                  title: "Moral Obligation",
                  text: "Courts recognize a testator's moral obligation to provide for dependants. Evidence of relationship, support during lifetime, and need at death are key.",
                },
                {
                  title: "Common-Law Spouses",
                  text: "Common-law spouses who cohabited for 3+ years, or in a relationship of permanence with a child, qualify as dependants under the SLRA.",
                },
                {
                  title: "Priority",
                  text: "Dependants relief claims have priority over most estate distributions. The estate cannot be fully distributed until the 6-month application period expires.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-slate-50 border border-slate-200 rounded-xl p-4"
                >
                  <h3 className="font-semibold text-slate-900 text-sm mb-1">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm">{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="border border-slate-200 rounded-xl p-6 bg-white"
                >
                  <h3 className="font-semibold text-slate-900 mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="bg-slate-900 text-white rounded-2xl p-10 text-center">
            <h2 className="text-2xl font-bold mb-3">
              Manage Your Estate Litigation Practice with Atticus
            </h2>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto">
              Atticus helps Ontario estate litigators track critical deadlines,
              organize voluminous estate files, and draft documents faster with
              Canadian legal AI — all LSO compliant.
            </p>
            <Link
              href="/sign-up"
              className="inline-block bg-amber-400 text-slate-900 font-semibold px-8 py-3 rounded-lg hover:bg-amber-300 transition-colors"
            >
              Start Free Trial
            </Link>
          </section>

          {/* Related */}
          <section className="mt-12 pt-8 border-t border-slate-200">
            <h3 className="font-semibold text-slate-900 mb-4">
              Related Articles
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  href: "/blog/how-to-make-a-will-ontario",
                  label: "How to Make a Will in Ontario",
                },
                {
                  href: "/blog/ontario-power-of-attorney",
                  label: "Ontario Power of Attorney",
                },
                {
                  href: "/blog/ontario-constructive-trust",
                  label: "Ontario Constructive Trust",
                },
                {
                  href: "/ontario-wills-estate-lawyer",
                  label: "Ontario Wills and Estate Lawyers",
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
          </section>
        </div>
      </div>
    </>
  );
}
