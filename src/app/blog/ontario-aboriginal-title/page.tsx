import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ontario Aboriginal Title and Indigenous Rights | Section 35 Guide for Lawyers",
  description:
    "A practical guide to Ontario Aboriginal title claims, section 35 constitutional rights, the duty to consult and accommodate, treaty rights in Ontario, UNDRIP implementation, and the role of Ontario lawyers in Indigenous rights litigation.",
  openGraph: {
    title: "Ontario Aboriginal Title and Indigenous Rights | Section 35 Guide for Lawyers",
    description:
      "Ontario Aboriginal title, section 35 rights, duty to consult, treaty rights, and UNDRIP implementation. A guide for Ontario lawyers working in Indigenous rights law.",
    url: "https://getatticus.ca/blog/ontario-aboriginal-title",
    siteName: "Atticus",
    type: "article",
  },
};

const articleSchema = `{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Ontario Aboriginal Title and Indigenous Rights: Section 35, Duty to Consult, and Treaty Rights",
  "description": "A practical guide to Ontario Aboriginal title claims, section 35 constitutional rights, the duty to consult and accommodate, treaty rights in Ontario, and UNDRIP.",
  "author": {
    "@type": "Organization",
    "name": "Atticus"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Atticus",
    "url": "https://getatticus.ca"
  },
  "url": "https://getatticus.ca/blog/ontario-aboriginal-title",
  "mainEntityOfPage": "https://getatticus.ca/blog/ontario-aboriginal-title"
}`;

const faqSchema = `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Aboriginal title under Canadian law?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Aboriginal title is a sui generis collective right to land held by an Indigenous group based on their historic occupation and use of that land prior to Crown sovereignty. It was recognized by the Supreme Court of Canada in Calder (1973), elaborated in Delgamuukw (1997), and most fully articulated in Tsilhqot'in Nation v British Columbia (2014). Aboriginal title gives the holder the right to use, control, and benefit from the land, subject to limits inherent in the title (it must not be used in a way that would be irreconcilable with the group's ongoing attachment to the land)."
      }
    },
    {
      "@type": "Question",
      "name": "What is required to prove Aboriginal title in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Following Tsilhqot'in Nation v British Columbia [2014] 2 SCR 256, Aboriginal title is established by showing: (1) sufficient pre-sovereignty occupation of the specific land; (2) continuity between pre-sovereignty occupation and the present claim; and (3) exclusive occupation at the time of Crown sovereignty (meaning the group had the intention and capacity to retain exclusive control). In Ontario, treaty coverage complicates title claims — most of Ontario is covered by treaties that may have extinguished Aboriginal title to specific lands."
      }
    },
    {
      "@type": "Question",
      "name": "What is the duty to consult and accommodate in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The duty to consult arises when the Crown (federal or provincial) contemplates conduct that might adversely affect potential or established Aboriginal rights or title. The content of the duty is proportionate to the strength of the claim and the seriousness of the potential impact — ranging from simple notice at the low end to deep consultation and accommodation where rights are strong and impacts significant. The duty was established in Haida Nation v British Columbia (2004) and Taku River (2004), and applies to Ontario government decisions affecting Indigenous communities."
      }
    },
    {
      "@type": "Question",
      "name": "What treaties cover Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ontario is largely covered by a series of treaties with First Nations, including: the Upper Canada Land Surrenders (1780s-1850s), the Robinson Treaties (1850), the numbered treaties (Treaty 3 — 1873, Treaty 5, Treaty 9 — 1905-1906, covering the Far North), and the Williams Treaties (1923). Treaty 9 covers most of Northern Ontario. Anishinaabe nations in southern Ontario signed a series of land surrenders. Métis rights in Ontario are recognized by the Supreme Court in Powley (2003) and not dependent on treaty coverage."
      }
    },
    {
      "@type": "Question",
      "name": "How does UNDRIP affect Indigenous rights law in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Canada enacted the United Nations Declaration on the Rights of Indigenous Peoples Act (UNDA) in 2021, committing to align federal laws with UNDRIP, including the principle of free, prior and informed consent (FPIC) for decisions affecting Indigenous peoples' lands and resources. Ontario has not enacted provincial UNDRIP legislation as of 2024. However, UNDRIP is increasingly cited in litigation and treaty negotiations as an interpretive framework, and federal agencies must consider UNDRIP obligations in resource development and environmental assessment processes."
      }
    }
  ]
}`;

export default function OntarioAboriginalTitlePage() {
  return (
    <>
      <Script id="aboriginal-title-article-schema" type="application/ld+json">
        {articleSchema}
      </Script>
      <Script id="aboriginal-title-faq-schema" type="application/ld+json">
        {faqSchema}
      </Script>

      <div className="min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <div className="mb-8">
            <Link
              href="/blog"
              className="text-sm text-amber-700 hover:text-amber-900 font-medium"
            >
              ← Back to Blog
            </Link>
          </div>

          <header className="mb-12">
            <div className="inline-block bg-amber-100 text-amber-800 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              Indigenous Law
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-4 leading-tight">
              Ontario Aboriginal Title and Indigenous Rights: Section 35, Duty to Consult, and Treaty Rights
            </h1>
            <p className="text-lg text-slate-600">
              Aboriginal title, treaty rights, and the duty to consult are among
              the most constitutionally significant areas of Canadian law —
              directly relevant to resource development, municipal planning,
              environmental assessment, and government decision-making across
              Ontario. This guide covers the foundational principles, key
              Supreme Court decisions, and practical considerations for Ontario
              lawyers working on Indigenous rights matters.
            </p>
          </header>

          <article className="prose prose-slate max-w-none">
            <h2>Section 35 of the Constitution Act, 1982</h2>
            <p>
              Section 35(1) of the <em>Constitution Act, 1982</em> provides:
              &quot;The existing aboriginal and treaty rights of the aboriginal
              peoples of Canada are hereby recognized and affirmed.&quot; This
              provision constitutionalized a broad range of Indigenous rights,
              including Aboriginal title, section 35 rights to practice
              traditional activities (hunting, fishing, trapping), and treaty
              rights.
            </p>
            <p>
              The test for whether government conduct unjustifiably infringes
              section 35 rights was established in <em>R v Sparrow</em> [1990]
              1 SCR 1075: the Crown must show a valid legislative objective and
              must act consistent with its fiduciary relationship with
              Indigenous peoples (the justification analysis).
            </p>

            <h2>Aboriginal Title: The Tsilhqot&apos;in Framework</h2>
            <p>
              <em>Tsilhqot&apos;in Nation v British Columbia</em> [2014] 2 SCR
              256 is the leading Supreme Court of Canada decision on Aboriginal
              title. The Court held that the Tsilhqot&apos;in Nation had
              established Aboriginal title over approximately 1,700 sq km of
              land in British Columbia — the first declaration of Aboriginal
              title over a specific territory by a Canadian court.
            </p>

            <h3>Proof of Aboriginal Title</h3>
            <p>
              The Court confirmed the test for establishing title requires:
            </p>
            <ol>
              <li>
                <strong>Sufficient occupation</strong> — the group must have
                occupied the land at the time of Crown sovereignty (for Ontario,
                generally circa 1763-1850 depending on the region). The
                occupation must be more than occasional presence — it requires
                regular use and the intention to hold the land for the
                community.
              </li>
              <li>
                <strong>Continuity</strong> — there must be continuity between
                historic occupation and present day, though the group need not
                have been in continuous residence on every parcel of land.
              </li>
              <li>
                <strong>Exclusive occupation</strong> — the group must have
                had the intention and capacity to exclude others at the time
                of sovereignty. Shared use with other nations may still
                support title, possibly held jointly.
              </li>
            </ol>

            <h3>Nature of Aboriginal Title Rights</h3>
            <p>
              Aboriginal title grants the holder:
            </p>
            <ul>
              <li>The right to use and control the land and benefit from its resources</li>
              <li>
                The right to decide how the land is used, subject to the
                inherent limit that the group cannot use the land in ways that
                would permanently destroy its value or deprive future
                generations of the right to determine its use
              </li>
              <li>
                The right to the economic fruits of the land, including resource revenues
              </li>
            </ul>
            <p>
              The Crown may infringe Aboriginal title only with consent of the
              title-holding nation, or — where consent is withheld — through
              legislation subject to the justification analysis under Sparrow
              (plus enhanced Tsilhqot&apos;in justification requirements).
            </p>

            <h2>Treaties in Ontario</h2>
            <p>
              Most of Ontario is covered by a series of historic treaties that
              purported to transfer land from First Nations to the Crown. The
              primary treaty framework includes:
            </p>
            <ul>
              <li>
                <strong>Upper Canada Land Surrenders</strong> (1780s–1850s) —
                covering most of southern Ontario (Simcoe County, Georgian Bay
                area, Lake Erie and Lake Ontario watersheds)
              </li>
              <li>
                <strong>Robinson-Huron and Robinson-Superior Treaties</strong>{" "}
                (1850) — covering the Lake Huron and Lake Superior watersheds in
                northern Ontario; the annuity provisions of these treaties
                were the subject of the landmark{" "}
                <em>Restoule v Canada</em> litigation affirming that annuities
                must be increased to reflect the Crown&apos;s economic benefit
                from the ceded lands
              </li>
              <li>
                <strong>Treaty 3</strong> (1873) — covering the Lake of the
                Woods region in northwestern Ontario
              </li>
              <li>
                <strong>Treaty 9 (James Bay Treaty)</strong> (1905–1906,
                adhesions to 1929-30) — covering the vast majority of Northern
                Ontario north of the Height of Land; major resource development
                and far north planning depends on interpretation of Treaty 9
                rights
              </li>
              <li>
                <strong>Williams Treaties</strong> (1923) — covering portions
                of the Kawartha Lakes and Simcoe region; challenged by seven
                First Nations in litigation settled in 2018 for $1.1 billion
              </li>
            </ul>
            <p>
              Treaty rights are constitutionally protected under section 35 and
              are interpreted generously and in accordance with the
              Crown&apos;s honour. Ambiguities in treaty language are resolved
              in favour of the Indigenous party.
            </p>

            <h2>The Duty to Consult</h2>
            <p>
              The duty to consult arises from the Crown&apos;s honour obligation
              and section 35. It applies whenever the Crown:
            </p>
            <ul>
              <li>Contemplates conduct (legislation, decisions, permits, approvals)</li>
              <li>
                That might adversely affect a potential or established
                Aboriginal right or title claim
              </li>
            </ul>
            <p>
              The <em>spectrum of consultation</em> framework from{" "}
              <em>Haida Nation v British Columbia (Minister of Forests)</em>{" "}
              [2004] 3 SCR 511 sets the content of the duty:
            </p>
            <ul>
              <li>
                <strong>Low end</strong> (weak claim, minor impact): notice
                and opportunity to comment
              </li>
              <li>
                <strong>Middle</strong>: meaningful dialogue, opportunity to
                present concerns, consideration of accommodation
              </li>
              <li>
                <strong>High end</strong> (strong claim, serious impact): deep
                consultation, formal processes, and possible accommodation
                (modification of Crown conduct to address Indigenous concerns)
              </li>
            </ul>
            <p>
              The duty to consult does not give Indigenous nations a veto over
              Crown decisions — but failure to consult adequately renders the
              decision invalid and subject to judicial review. In Ontario,
              duty-to-consult claims arise most commonly in resource development
              (mining, forestry, energy), infrastructure projects, and
              environmental assessments.
            </p>

            <h2>Métis Rights in Ontario</h2>
            <p>
              <em>R v Powley</em> [2003] 2 SCR 207 established that Métis
              communities hold section 35 rights independent of First Nations
              treaty rights. Powley recognized the Sault Ste. Marie Métis
              community&apos;s right to hunt for food under section 35. The
              Métis Nation of Ontario represents Métis communities across the
              province, and Métis rights to harvest, land, and self-governance
              remain active areas of litigation and negotiation.
            </p>

            <h2>UNDRIP and the Federal Framework</h2>
            <p>
              Canada enacted the <em>United Nations Declaration on the Rights
              of Indigenous Peoples Act</em> (SC 2021, c 14) in June 2021,
              committing Canada to align its laws with UNDRIP over time through
              an action plan. Key UNDRIP provisions relevant to Ontario lawyers
              include:
            </p>
            <ul>
              <li>
                Article 19 — free, prior and informed consent (FPIC) before
                adopting legislative or administrative measures that may affect
                Indigenous peoples
              </li>
              <li>
                Article 26 — Indigenous peoples&apos; right to own, use,
                develop, and control their traditional lands
              </li>
              <li>
                Article 32 — FPIC for resource development projects affecting
                Indigenous lands or territories
              </li>
            </ul>
            <p>
              Ontario has not enacted provincial UNDRIP legislation, but federal
              resource and environmental approvals (under the Impact Assessment
              Act and Canada-Ontario Agreement) must account for UNDRIP
              obligations.
            </p>

            <h2>Key Cases for Ontario Lawyers</h2>
            <ul>
              <li>
                <em>Calder v British Columbia (AG)</em> [1973] SCR 313 —
                first recognition of Aboriginal title by the Supreme Court
              </li>
              <li>
                <em>R v Sparrow</em> [1990] 1 SCR 1075 — section 35
                justification test
              </li>
              <li>
                <em>R v Van der Peet</em> [1996] 2 SCR 507 — integral to
                distinctive culture test for section 35 rights
              </li>
              <li>
                <em>Delgamuukw v British Columbia</em> [1997] 3 SCR 1010 —
                Aboriginal title content and proof (oral history as evidence)
              </li>
              <li>
                <em>Haida Nation v British Columbia</em> [2004] 3 SCR 511 —
                duty to consult spectrum
              </li>
              <li>
                <em>Tsilhqot&apos;in Nation v British Columbia</em> [2014]
                2 SCR 256 — title declaration, territorial approach to proof
              </li>
              <li>
                <em>Restoule v Canada (AG)</em> 2021 ONCA 779 — Robinson
                Treaties annuity increase obligation (pending Supreme Court
                decision on quantum)
              </li>
            </ul>

            <h2>How Atticus Helps Ontario Lawyers with Indigenous Rights Files</h2>
            <p>
              Indigenous rights matters involve extensive document libraries —
              historical records, Crown consultation correspondence, environmental
              assessments, expert reports, and treaty texts — combined with
              complex litigation timelines and multi-party proceedings. Atticus
              supports Ontario lawyers with:
            </p>
            <ul>
              <li>
                <strong>AI document analysis</strong> — semantic search across
                large document sets; AI extracts names, dates, and key
                provisions from historical records and correspondence
              </li>
              <li>
                <strong>Limitation period tracking</strong> — AI extracts
                limitation dates from documents and flags approaching deadlines
                in judicial review and section 35 proceedings
              </li>
              <li>
                <strong>Matter management</strong> — track multi-party
                litigation, Crown consultation processes, and treaty negotiation
                stages in a single matter view
              </li>
              <li>
                <strong>LSO-compliant trust accounting</strong> — manage
                retainers and trust funds for lengthy constitutional litigation
                files
              </li>
            </ul>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mt-10">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Ontario-Built Practice Management for Indigenous Rights Lawyers
              </h3>
              <p className="text-slate-700 mb-4 text-sm">
                Atticus manages document analysis, deadlines, and matter files
                for Ontario lawyers — including those working on Indigenous
                rights, treaty litigation, and duty-to-consult matters.
                $149 CAD per lawyer per month.
              </p>
              <Link
                href="/sign-up"
                className="inline-block bg-slate-900 text-white font-semibold px-6 py-3 rounded-lg hover:bg-slate-700 transition-colors text-sm"
              >
                Start Free Trial
              </Link>
            </div>
          </article>

          <div className="mt-12 pt-8 border-t border-slate-100">
            <h3 className="text-sm font-semibold text-slate-900 mb-4">
              Related Resources
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                {
                  href: "/blog/ontario-indigenous-law",
                  label: "Ontario Indigenous Law",
                },
                {
                  href: "/blog/ontario-environmental-law",
                  label: "Ontario Environmental Law",
                },
                {
                  href: "/blog/ontario-judicial-review",
                  label: "Ontario Judicial Review",
                },
                {
                  href: "/blog/ontario-constitutional-law",
                  label: "Ontario Constitutional Law",
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
          </div>
        </div>
      </div>
    </>
  );
}
