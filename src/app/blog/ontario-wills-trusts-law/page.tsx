import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ontario Wills and Trusts Law — Wills Act, Estate Litigation, and Substitute Decisions | Atticus Blog",
  description:
    "Comprehensive guide to Ontario wills and trusts law: Wills Act RSO 1990, formal validity requirements, will interpretation, substitute decisions, powers of attorney, estate litigation, dependant support, and estate administration for Ontario wills and estates lawyers.",
  openGraph: {
    title: "Ontario Wills and Trusts Law — Wills Act, Estate Litigation, and Substitute Decisions",
    description:
      "Wills Act RSO 1990, formal validity, testamentary capacity Banks v Goodfellow, undue influence, dependent support applications, substitute decisions, POA, and estate administration for Ontario estate lawyers.",
    type: "article",
    url: "https://getatticus.ca/blog/ontario-wills-trusts-law",
  },
  alternates: { canonical: "https://getatticus.ca/blog/ontario-wills-trusts-law" },
};

export default function OntarioWillsTrustsLawPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Ontario Wills and Trusts Law — Wills Act, Estate Litigation, and Substitute Decisions",
    description:
      "Wills Act RSO 1990, Banks v Goodfellow testamentary capacity, undue influence, dependant support, substitute decisions, POA, and estate administration for Ontario estate lawyers.",
    author: { "@type": "Organization", name: "Atticus" },
    publisher: { "@type": "Organization", name: "Atticus", url: "https://getatticus.ca" },
    url: "https://getatticus.ca/blog/ontario-wills-trusts-law",
    mainEntityOfPage: "https://getatticus.ca/blog/ontario-wills-trusts-law",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-slate-900 to-amber-900 text-white py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <Link href="/blog" className="text-slate-400 hover:text-white text-sm transition">
                &#8592; Blog
              </Link>
              <span className="bg-amber-500 text-white text-xs font-semibold px-2 py-1 rounded">
                Wills &amp; Estates
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Ontario Wills and Trusts Law — Wills Act, Estate Litigation, and Substitute Decisions
            </h1>
            <p className="text-slate-300 text-lg">
              Wills Act formal validity, testamentary capacity, undue influence, dependant
              support, powers of attorney, substitute decisions, and estate administration —
              a comprehensive guide for Ontario wills and estates practitioners.
            </p>
            <div className="flex items-center gap-4 mt-6 text-sm text-slate-400">
              <span>March 2026</span>
              <span>&#8226;</span>
              <span>14 min read</span>
            </div>
          </div>
        </section>

        <article className="py-16 px-6">
          <div className="max-w-3xl mx-auto prose prose-slate max-w-none">

            <h2>Wills Act — Formal Validity Requirements</h2>
            <p>
              In Ontario, a testamentary instrument (will) is only valid if it meets the formal
              requirements of the Wills Act RSO 1990 c W.11. Section 4 of the Wills Act provides
              that a will must be: (1) in writing; (2) signed at its end or foot by the testator
              or by some other person in the testator&apos;s presence and at the testator&apos;s direction;
              (3) made in the presence of and attested by two or more witnesses present at the
              same time who subscribe (sign) the will in the presence of the testator.
            </p>
            <p>
              A holograph will — entirely in the handwriting of and signed by the testator —
              is valid under Wills Act s.6 without the witnessing requirements. Holograph wills
              in Ontario do not require witnesses; however, interpreting a holograph will may
              be more difficult if the document does not clearly express testamentary intent.
            </p>
            <p>
              International wills: Ontario adopted the Convention Providing a Uniform Law on the
              Form of an International Will (Annex to the Washington Convention) through Schedule B
              of the Wills Act. An international will executed in compliance with the convention
              requirements (written, signed by testator before two witnesses and an authorized
              person, with an attaching certificate) is valid regardless of where it was made.
            </p>
            <p>
              The Succession Law Reform Act RSO 1990 c S.26 (SLRA) supplements the Wills Act
              and governs intestate succession, dependant support, and other estate matters.
            </p>

            <h2>Testamentary Capacity</h2>
            <p>
              Testamentary capacity requires the testator to understand: (1) the nature of making
              a will and its effects; (2) the extent of the property being disposed of; (3) the
              claims of persons who might reasonably expect to benefit; and (4) the testator must
              not suffer from any disorder of the mind that poisons the affections, perverts the
              sense of right, or prevents the exercise of the natural faculties in disposing of
              property. Banks v Goodfellow (1870) LR 5 QB 549 established these four elements
              and they continue to be applied in Ontario.
            </p>
            <p>
              The standard for testamentary capacity was addressed in more detail for Ontario
              practice in Banton v Banton (1998) 164 DLR (4th) 176 (Ont Gen Div), which
              remains a key reference for capacity assessment in contested estate matters.
              Capacity is assessed at the time of execution; a testator may have capacity at
              the time of executing the will even if suffering from dementia at other times
              (a &quot;lucid interval&quot;).
            </p>
            <p>
              Medical evidence and capacity assessments (from geriatricians, neuropsychologists,
              or attending physicians) are central to contested capacity cases. Estate lawyers
              drafting wills for elderly clients or clients with cognitive concerns should
              consider contemporaneous capacity documentation through a qualified healthcare
              professional.
            </p>

            <h2>Undue Influence</h2>
            <p>
              Undue influence in the testamentary context is distinct from the contractual
              doctrine. A will may be set aside if the testator&apos;s true testamentary intentions
              were overborne by another person&apos;s influence. The test is whether the influence
              was such that the will represents not the testator&apos;s wishes but those of another.
              Hall v Hall (1868) LR 1 P &amp; D 481 — mere persuasion, advice, and even importunity
              of family members does not constitute undue influence; it must amount to coercion.
            </p>
            <p>
              In Ontario, suspicious circumstances surrounding execution of a will — particularly
              where a beneficiary was instrumental in the preparation of the will — may shift the
              burden to the propounding party to show that the testator knew and approved of the
              contents and that there was no undue influence. Wingrove v Wingrove (1885) 11 PD 81
              remains an influential statement of the undue influence doctrine in the testamentary
              context.
            </p>

            <h2>Dependant Support — SLRA Part V</h2>
            <p>
              Part V of the Succession Law Reform Act RSO 1990 c S.26 (ss.58-72) creates an
              obligation for a testator to make adequate provision for the support of dependants.
              A &quot;dependant&quot; is defined in s.57 as a spouse (including common-law partner
              of at least three years), a parent, child (including adult children), or sibling
              of the deceased to whom the deceased was providing support immediately before death,
              or was under a legal obligation to provide support.
            </p>
            <p>
              A dependant who is not adequately provided for under the will or intestacy may
              apply to the court under s.58 for an order for support from the estate. The court
              considers factors under s.62 including: the dependant&apos;s current assets and means;
              the nature of the dependant&apos;s relationship to the deceased; the size of the estate;
              the moral claims of other beneficiaries; any agreement between the deceased and the
              dependant; the testator&apos;s reasons for not providing for the dependant (if stated);
              and other dependants and claims on the estate.
            </p>
            <p>
              An application for dependant support must be commenced within six months of the
              grant of probate or letters of administration (SLRA s.61). The limitation period
              is procedural and the court has discretion to extend it in appropriate circumstances.
            </p>

            <h2>Substitute Decisions — POA for Property and Personal Care</h2>
            <p>
              The Substitute Decisions Act SO 1992 c 30 (SDA) and the Health Care Consent Act
              SO 1996 c 2 Sch A (HCCA) govern substitute decision-making in Ontario. A power
              of attorney for property (continuing power of attorney — CPOA) allows a grantor
              to appoint an attorney to manage property and financial affairs. A continuing POA
              for property is valid even if the grantor subsequently becomes mentally incapable
              — this is the distinguishing feature of a &quot;continuing&quot; power of attorney
              under SDA s.7.
            </p>
            <p>
              A power of attorney for personal care (POAPC) under SDA s.46 authorizes the
              attorney to make decisions about the grantor&apos;s personal care — health care, shelter,
              nutrition, hygiene, and safety — when the grantor is incapable. Both the CPOA and
              POAPC must be signed before two witnesses who are not the attorney, the attorney&apos;s
              spouse or partner, the grantor&apos;s spouse, or a child of the grantor or person
              treated as such (SDA s.10(1)).
            </p>
            <p>
              The Office of the Public Guardian and Trustee (OPGT) may be appointed as statutory
              guardian of property for a person found incapable by the Consent and Capacity Board
              or through an assessment under the SDA, if no suitable attorney exists.
            </p>

            <h2>Estate Administration — Certificates of Appointment</h2>
            <p>
              An executor named in a will derives authority from the will itself. However, to
              deal with estate assets (sell real property, access bank accounts, administer RRSP/RRIF
              assets that do not pass outside the estate), a Certificate of Appointment of Estate
              Trustee With a Will (probate) from the Ontario Superior Court of Justice is typically
              required. For intestate estates, a Certificate of Appointment of Estate Trustee
              Without a Will is required.
            </p>
            <p>
              The Estate Administration Tax Act RSO 1990 c E.22 imposes estate administration
              tax (commonly called probate fees) on the value of assets flowing through the estate:
              1.5% of the value of the estate over $50,000 (no tax on the first $50,000; 0.5% on
              $50,001-$250,000 as of January 2020 amendments phased out this tier making it 1.5%
              on all amounts over $50,000). The executor must file an Estate Information Return
              with the Ministry of Finance within 180 days of the Certificate of Appointment.
            </p>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mt-8">
              <h3 className="text-lg font-bold text-amber-900 mb-2">
                Manage Wills and Estate Matters with Atticus
              </h3>
              <p className="text-amber-800 mb-4">
                Track estate administration timelines, dependant support deadlines, certificate
                of appointment applications, and estate trust accounts — all in one platform
                built for Ontario wills and estates lawyers.
              </p>
              <Link
                href="/sign-up"
                className="inline-block bg-amber-700 hover:bg-amber-800 text-white font-semibold px-6 py-3 rounded-lg transition"
              >
                Try Atticus Free
              </Link>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
