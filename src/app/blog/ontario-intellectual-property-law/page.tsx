import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ontario Intellectual Property Law — Copyright, Trademarks, and Patents for Ontario Lawyers | Atticus Blog",
  description:
    "Comprehensive guide to intellectual property law in Canada: Copyright Act RSC 1985, Trademarks Act RSC 1985, Patent Act RSC 1985, industrial designs, trade secrets, and IP licensing for Ontario business and IP lawyers.",
  openGraph: {
    title: "Ontario Intellectual Property Law — Copyright, Trademarks, and Patents",
    description:
      "Copyright Act RSC 1985 c C-42, Trademarks Act RSC 1985 c T-13, Patent Act RSC 1985 c P-4, industrial designs, trade secrets, and IP enforcement for Ontario practitioners.",
    type: "article",
    url: "https://getatticus.ca/blog/ontario-intellectual-property-law",
  },
  alternates: { canonical: "https://getatticus.ca/blog/ontario-intellectual-property-law" },
};

export default function OntarioIntellectualPropertyLawPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Ontario Intellectual Property Law — Copyright, Trademarks, and Patents",
    description:
      "Copyright Act RSC 1985, Trademarks Act RSC 1985, Patent Act RSC 1985, industrial designs, trade secrets, and IP enforcement for Ontario practitioners.",
    author: { "@type": "Organization", name: "Atticus" },
    publisher: { "@type": "Organization", name: "Atticus", url: "https://getatticus.ca" },
    url: "https://getatticus.ca/blog/ontario-intellectual-property-law",
    mainEntityOfPage: "https://getatticus.ca/blog/ontario-intellectual-property-law",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-slate-900 to-violet-900 text-white py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <Link href="/blog" className="text-slate-400 hover:text-white text-sm transition">
                &#8592; Blog
              </Link>
              <span className="bg-violet-500 text-white text-xs font-semibold px-2 py-1 rounded">
                IP Law
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Ontario Intellectual Property Law — Copyright, Trademarks, and Patents
            </h1>
            <p className="text-slate-300 text-lg">
              Copyright Act, Trademarks Act, Patent Act, industrial designs, trade secrets,
              and IP licensing — a guide for Ontario business and intellectual property lawyers.
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

            <h2>Intellectual Property in Canada — Federal Jurisdiction</h2>
            <p>
              Intellectual property in Canada is governed by federal legislation under s.91(22)
              and (23) of the Constitution Act 1867 (patents, copyrights, trademarks). The major
              federal IP statutes are: the Copyright Act RSC 1985 c C-42, the Trademarks Act RSC
              1985 c T-13 (substantially amended by the Intellectual Property Laws Amendment Act
              SO 2014), the Patent Act RSC 1985 c P-4, the Industrial Design Act RSC 1985 c I-9,
              and the Integrated Circuit Topographies Act SC 1990 c 37. Trade secrets are
              primarily governed by provincial common law (breach of confidence) and contract.
            </p>
            <p>
              The Canadian Intellectual Property Office (CIPO), a branch of Innovation, Science
              and Economic Development Canada (ISED), administers trademark and patent registration.
              The Federal Court has jurisdiction over IP matters including appeals from CIPO
              decisions, patent and trademark infringement actions, and copyright proceedings.
              Ontario courts (Superior Court of Justice) also have jurisdiction over IP disputes
              where the Federal Court&apos;s exclusive jurisdiction does not apply.
            </p>

            <h2>Copyright Act — Key Principles</h2>
            <p>
              Copyright in Canada subsists automatically in an original literary, dramatic, musical,
              or artistic work fixed in a tangible form by the author. Copyright Act s.5 — copyright
              subsists in Canada in every original literary, dramatic, musical, and artistic work
              if at the time of making the work the author was a citizen/national or resident of
              Canada (or a Berne Convention, UCC, or WTO member country).
            </p>
            <p>
              The term of copyright protection is the life of the author plus 70 years (amended
              from life plus 50 years by Bill C-19, the Budget Implementation Act 2022 No. 1,
              effective December 30, 2022, implementing Canada-US-Mexico Agreement (CUSMA)
              obligations). For works of Crown (government) copyright, the term is 50 years from
              publication or 50 years from creation if unpublished.
            </p>
            <p>
              The author is the first owner of copyright (Copyright Act s.13(1)), subject to two
              key exceptions: (1) where an author creates a work in the course of their employment
              under a contract of service or apprenticeship, the employer is the first owner absent
              contrary agreement (s.13(3)); and (2) where a portrait/photograph/engraving/print
              is made for valuable consideration at the order of another person, that person is
              the first owner (s.13(2) — the &quot;for hire&quot; rule for certain commissioned works).
            </p>
            <p>
              Key copyright rights include: reproduction, performance, publication, translation,
              conversion, and making a derivative work (Copyright Act s.3). Moral rights (s.14.1)
              — the right of integrity (right to prevent distortion/mutilation/modification
              prejudicial to honour or reputation) and the right of attribution — run for the
              same term as copyright but can only be waived, not assigned (s.14.1(2)).
            </p>
            <p>
              Fair dealing (Copyright Act s.29-29.4) permits use of copyright-protected works
              for research, private study, education, parody, satire, criticism, review, and
              news reporting without infringement, provided the dealing is fair (CCH Canadian
              Ltd v Law Society of Upper Canada 2004 SCC 13 six fair dealing factors: purpose/
              character of dealing/nature of work/alternatives/nature of work/effect on market).
              Alberta (Education) v Canadian Copyright Licensing Agency 2012 SCC 37 confirmed
              that &quot;education&quot; is a user right, not just an exception.
            </p>

            <h2>Trademarks Act — Registration and Rights</h2>
            <p>
              A trademark is a sign or combination of signs used or proposed to be used by a
              person to distinguish their goods or services from those of others (Trademarks Act
              s.2 definition). Trademarks may include words, designs, shapes, tastes, textures,
              moving images, holograms, sounds, scents, three-dimensional signs, or a combination
              thereof. Canada adopted the Nice Classification system for goods and services
              (following the 2014 amendments).
            </p>
            <p>
              Registration of a trademark at CIPO provides: (1) the exclusive right to use the
              trademark throughout Canada in association with the registered goods/services
              (Trademarks Act s.19); (2) the right to prevent confusing use by others under
              s.20; and (3) a presumption of ownership and validity. An unregistered trademark
              owner has common law rights in the geographic areas of use but cannot rely on the
              Act for registration-based infringement remedies.
            </p>
            <p>
              The term of trademark registration is 10 years from registration, renewable
              indefinitely for further 10-year periods. A trademark may be expunged for
              non-use — under s.45, CIPO may require the registered owner to show use in Canada
              during the preceding three years; failure to show use leads to expungement. Use is
              defined in s.4 as use in the normal course of trade (for goods) or performance of
              the services (for services).
            </p>
            <p>
              Passing off at common law protects unregistered trademark rights: Ciba-Geigy Canada
              Ltd v Apotex Inc [1992] 3 SCR 120 three elements — (1) goodwill in the mark;
              (2) misrepresentation (actual or likely to deceive); and (3) damage or likely damage.
            </p>

            <h2>Patent Act — Invention and Patent Protection</h2>
            <p>
              A patent grants the inventor an exclusive right to make, use, and sell an invention
              for 20 years from the filing date (Patent Act s.44-45). In exchange, the inventor
              discloses the invention publicly in the patent specification. After the patent
              expires, the invention enters the public domain.
            </p>
            <p>
              To be patentable under Patent Act s.2, an invention must be: (1) novel — not
              previously disclosed (s.28.2); (2) non-obvious — not obvious to a person skilled
              in the art (s.28.3); and (3) useful — have practical utility (AstraZeneca Canada Inc
              v Apotex Inc 2017 SCC 36 utility confirmed at time of filing but sound prediction
              acceptable). Subject matter must fall within patentable categories: art, process,
              machine, manufacture, or composition of matter (s.2). Mathematical formulas,
              scientific theorems, higher life forms, and (currently) computer programs standing
              alone are not patentable in Canada.
            </p>
            <p>
              Canada uses a first-to-file system (since 1989). Grace period of one year applies
              for disclosures by the inventor before filing (s.28.2(1)(a)). Patent applications
              must be filed within 12 months of any public disclosure by the inventor to preserve
              patentability.
            </p>

            <h2>Industrial Designs</h2>
            <p>
              Industrial designs protect the visual features of finished articles — their shape,
              configuration, pattern, or ornament (Industrial Design Act s.2). Protection requires
              registration at CIPO within 12 months of publication of the article. Registration
              gives the owner the exclusive right to make, import for trade, and sell or rent
              articles bearing the design for 10 years (in two 5-year periods with renewal
              required at 5 years). Amended by IP Laws Amendment Act 2018, the Industrial Design
              Act now also protects sets of articles.
            </p>

            <h2>Trade Secrets and Confidential Information</h2>
            <p>
              Unlike patents, trademarks, and copyright, trade secrets have no dedicated federal
              statute in Canada. Protection relies on the common law tort of breach of confidence
              and contractual obligations. The elements of breach of confidence under Canadian
              law (Lac Minerals Ltd v International Corona Resources Ltd [1989] 2 SCR 574):
              (1) the information conveyed was confidential; (2) the information was communicated
              in circumstances importing an obligation of confidence; and (3) there was
              unauthorized use of the information to the detriment of the person who communicated it.
            </p>
            <p>
              Practical protection measures for trade secrets include: confidentiality agreements/NDAs
              (clearly defining what is confidential, scope of use, and duration); employment
              agreements with confidentiality and post-employment restrictions; internal access
              controls limiting exposure; and marking of confidential materials. Ontario courts
              enforce reasonable NDA terms and grant injunctive relief and damages for breach.
            </p>

            <div className="bg-violet-50 border border-violet-200 rounded-xl p-6 mt-8">
              <h3 className="text-lg font-bold text-violet-900 mb-2">
                Manage IP Matters with Atticus
              </h3>
              <p className="text-violet-800 mb-4">
                Track trademark registration deadlines, patent maintenance fees, copyright
                assignments, and IP licensing files — all in one platform built for Ontario
                business and IP lawyers.
              </p>
              <Link
                href="/sign-up"
                className="inline-block bg-violet-700 hover:bg-violet-800 text-white font-semibold px-6 py-3 rounded-lg transition"
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
