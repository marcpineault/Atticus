import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ontario Aboriginal Law: Duty to Consult, Treaties, and Indigenous Rights | Atticus Blog",
  description:
    "A practical guide to Ontario aboriginal law — s.35 Constitution Act rights, the duty to consult and accommodate, historic treaties in Ontario, modern treaty-making, and the United Nations Declaration on the Rights of Indigenous Peoples.",
  openGraph: {
    title: "Ontario Aboriginal Law: Duty to Consult, Treaties, and Indigenous Rights",
    description:
      "s.35 rights, duty to consult (Haida Nation), Ontario treaties, UNDRIP, and modern Indigenous rights litigation for Ontario lawyers.",
    type: "article",
    publishedTime: "2026-03-19",
  },
};

export default function OntarioAboriginalLaw() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Ontario Aboriginal Law: Duty to Consult, Treaties, and Indigenous Rights",
    description:
      "s.35 rights, duty to consult (Haida Nation), Ontario treaties, UNDRIP, and modern Indigenous rights litigation.",
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
            <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
              Aboriginal Law
            </span>
            <time dateTime="2026-03-19">March 19, 2026</time>
            <span>14 min read</span>
          </div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900">
            Ontario Aboriginal Law: Duty to Consult, Treaties, and Indigenous Rights
          </h1>
          <p className="text-xl text-gray-600">
            Section 35 of the <em>Constitution Act, 1982</em> recognizes and affirms existing
            Aboriginal and treaty rights of Aboriginal peoples of Canada. In Ontario, Indigenous
            rights issues arise in resource development, environmental assessment, land
            transactions, and litigation. This guide covers the key principles and landmark
            cases Ontario lawyers encounter.
          </p>
        </header>

        <div className="prose prose-gray max-w-none">
          <h2>Section 35 Rights</h2>
          <p>
            Section 35(1) of the <em>Constitution Act, 1982</em> provides:
            &ldquo;The existing aboriginal and treaty rights of the aboriginal peoples of Canada
            are hereby recognized and affirmed.&rdquo;
          </p>
          <p>
            The Supreme Court of Canada has interpreted s.35 broadly since <em>R v Sparrow</em>,
            [1990] 1 SCR 1075, which established that s.35 rights are not limited to the specific
            form of the right existing at 1982 — they include rights that were &ldquo;existing&rdquo; in a
            broader sense, capable of evolution. <em>Sparrow</em> also established the justification
            framework: the Crown can infringe s.35 rights only if it can justify the infringement
            by showing a compelling and substantial objective and that it has upheld its fiduciary
            duty to the Aboriginal group.
          </p>

          <h3>Aboriginal Title</h3>
          <p>
            Aboriginal title is the most comprehensive Aboriginal right — it confers the right
            to exclusive use and control of land for a variety of purposes. To establish Aboriginal
            title, the claimant group must prove (per <em>Tsilhqot&apos;in Nation v British Columbia</em>,
            2014 SCC 44):
          </p>
          <ul>
            <li>Sufficient pre-sovereignty occupation of the claimed territory</li>
            <li>Continuity of occupation from pre-sovereignty to the present</li>
            <li>Exclusive occupation (historically, by the group&apos;s own standards)</li>
          </ul>
          <p>
            Aboriginal title has not been established by litigation in Ontario, but many Ontario
            land areas are subject to claimed but unceded Aboriginal title or are covered by
            historic treaties that ceded title under colonial-era treaty terms.
          </p>

          <h3>Aboriginal Rights Spectrum</h3>
          <p>
            Aboriginal rights exist on a spectrum from site-specific practices to more general
            rights. The test for establishing an Aboriginal right (per <em>R v Van der Peet</em>,
            [1996] 2 SCR 507) requires the claimant to demonstrate that the practice, custom, or
            tradition was an integral part of the distinctive culture of the Aboriginal group
            prior to European contact. Rights include:
          </p>
          <ul>
            <li>Hunting, fishing, and gathering rights in traditional territories</li>
            <li>Rights to particular resources (e.g., salmon) in specific areas</li>
            <li>Ceremonial and cultural practices</li>
          </ul>

          <h2>The Duty to Consult and Accommodate</h2>
          <p>
            The duty to consult was articulated by the Supreme Court in <em>Haida Nation v British
            Columbia (Minister of Forests)</em>, [2004] 3 SCR 511, and <em>Taku River Tlingit
            First Nation v British Columbia (Project Assessment Director)</em>, [2004] 3 SCR 550.
          </p>
          <p>
            <strong>When does the duty arise?</strong>: The duty arises when the Crown has:
          </p>
          <ol>
            <li>Real or constructive knowledge of a potential Aboriginal right or title claim</li>
            <li>Contemplated Crown conduct (decision, action, legislation, administrative approval) that might adversely affect that right or title</li>
          </ol>
          <p>
            The duty is owed by the Crown, not by private parties — though the Crown can delegate
            the procedural aspects of consultation to project proponents, the duty remains with
            the Crown (Haida Nation at para 53).
          </p>
          <p>
            <strong>Depth of consultation (the spectrum)</strong>: The depth of consultation
            required is proportionate to the strength of the Aboriginal rights or title claim
            and the potential severity of the adverse impact. At the low end (weak claim + minor
            impact): notice and an opportunity to discuss. At the high end (strong claim + major
            impact): deep consultation, opportunities to make submissions, and a duty to seriously
            consider accommodating concerns through project design changes or other modifications.
          </p>
          <p>
            <strong>Accommodation</strong>: Where the Crown has a strong duty to consult, it may
            also be required to accommodate — to take steps to avoid infringement or to mitigate
            adverse effects. Accommodation is not a veto — the Crown retains authority to proceed,
            but must balance Aboriginal interests meaningfully.
          </p>

          <h3>Consultation in Practice: Ontario Projects</h3>
          <p>
            In Ontario, duty to consult issues arise in:
          </p>
          <ul>
            <li>Environmental assessments under the EAA and federal IAA</li>
            <li>Mining claims and exploration permits under the <em>Mining Act</em></li>
            <li>Crown land dispositions and resource extraction licences</li>
            <li>Infrastructure development on Crown land</li>
            <li>Decisions under the <em>Endangered Species Act, 2007</em></li>
          </ul>
          <p>
            The Ontario <em>Mining Act</em> was significantly amended in 2009 and 2012 to
            require consultation with First Nations before staking mining claims in certain
            areas — a direct response to the duty to consult obligations. Ontario also
            established the Resource Revenue Sharing policy for forestry and aggregates.
          </p>

          <h2>Historic Treaties in Ontario</h2>
          <p>
            Ontario is covered by a series of historic treaties:
          </p>
          <ul>
            <li>
              <strong>Pre-Confederation treaties (pre-1867)</strong>: The Robinson-Superior (1850),
              Robinson-Huron (1850), and various earlier &ldquo;Upper Canada&rdquo; treaties covering much
              of southern Ontario. The Robinson Treaties were signed by the Province of Canada with
              Ojibwe nations for cession of large tracts of land north of lakes Huron and Superior.
            </li>
            <li>
              <strong>Post-Confederation treaties (1867-1930)</strong>: Treaty 9 (James Bay Treaty,
              1905-1906) covers the vast majority of northern Ontario. Treaty 9 was signed by the
              federal and Ontario governments with Ojibwe and Cree nations. The Mushkegowuk First
              Nations have argued that Treaty 9 was not fully explained to signatories and that
              adhesions have been signed under misrepresentation.
            </li>
            <li>
              <strong>Unsurrendered Territories</strong>: Parts of southern Ontario, particularly
              the Ottawa valley and areas around Kingston, have claims to unsurrendered lands based
              on disputes about the validity of historical purchase processes.
            </li>
          </ul>

          <h3>The Restoule Litigation (Robinson Treaties Augmentation)</h3>
          <p>
            One of the most significant recent developments in Ontario treaty law is the
            <em> Restoule v Canada (Attorney General)</em> litigation, involving the Robinson-Huron
            and Robinson-Superior Treaties. The treaties contain an augmentation clause — the
            Crown committed to increase annuities if revenues from the territory permitted.
            The annuities were raised from $1.60 to $4 per person in 1875 and never increased again.
          </p>
          <p>
            In 2023, the Supreme Court of Canada held in <em>Ontario (Attorney General) v Restoule</em>,
            2024 SCC 8, that the Crown must increase the Robinson Treaty annuities — the augmentation
            clause is a living obligation that must be honoured. The decision affirmed that treaty
            obligations must be interpreted generously and with a view to the honour of the Crown.
            The remedy phase is ongoing.
          </p>

          <h2>UNDRIP and Canada&apos;s Implementation</h2>
          <p>
            Canada adopted the United Nations Declaration on the Rights of Indigenous Peoples
            (UNDRIP) in 2016 (withdrawing earlier objector status). Parliament enacted the
            <em> United Nations Declaration on the Rights of Indigenous Peoples Act</em>, SC 2021,
            c 14, which affirms UNDRIP as a universal international human rights instrument and
            requires the federal government to ensure that Canadian laws are consistent with UNDRIP.
          </p>
          <p>
            <strong>FPIC (Free, Prior and Informed Consent)</strong>: Article 19 of UNDRIP
            requires states to &ldquo;consult and cooperate in good faith&rdquo; with Indigenous peoples
            to obtain their &ldquo;free, prior and informed consent&rdquo; before adopting legislative or
            administrative measures that may affect them. FPIC is more demanding than the Haida
            Nation duty to consult — it implies a need for agreement or consent, not merely
            consultation.
          </p>
          <p>
            Canadian courts have not yet interpreted FPIC as conferring a veto right in Canadian
            law. The relationship between UNDRIP&apos;s FPIC standard and the Haida Nation
            consultation framework is an evolving area of Canadian law.
          </p>

          <h2>Fiduciary Duty of the Crown</h2>
          <p>
            The Crown owes a fiduciary duty to Aboriginal peoples in certain circumstances —
            particularly where the Crown undertakes to act on behalf of Aboriginal peoples or
            takes control of interests that exist for their benefit. In <em>Wewaykum Indian Band
            v Canada</em>, [2002] 4 SCR 245, the Supreme Court clarified that the Crown&apos;s
            fiduciary duty is not a general duty but a specific duty arising from particular
            Crown-Aboriginal relationships (reserve creation, surrenders, treaty management).
          </p>

          <h2>Summary</h2>
          <p>
            Ontario Aboriginal law has been reshaped by the Supreme Court&apos;s decisions in
            <em>Haida Nation</em>, <em>Tsilhqot&apos;in</em>, and most recently <em>Restoule</em>.
            The duty to consult is now a central requirement in resource and infrastructure
            development across Ontario. Practitioners advising project proponents or Crown
            agencies must assess the strength of Aboriginal claims in the project area and
            design consultation processes proportionate to those claims. Treaty interpretation
            continues to evolve as courts apply generous interpretive principles to historic
            treaty texts.
          </p>
          <p>
            Atticus helps Ontario lawyers practicing Aboriginal and Indigenous rights law manage
            complex, multi-party matters and stay organized — with LSO-compliant trust accounting
            for contingency-based and funded litigation.
          </p>
        </div>

        <div className="mt-12 rounded-xl bg-green-50 p-8 text-center">
          <h3 className="mb-2 text-xl font-bold text-gray-900">
            Practice Management for Ontario Indigenous Rights Lawyers
          </h3>
          <p className="mb-6 text-gray-600">
            Complex multi-party matter tracking, trust accounting, and AI document analysis —
            built for Ontario Aboriginal and Indigenous rights practice.
          </p>
          <a
            href="/sign-up"
            className="inline-block rounded-lg bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700"
          >
            Start Free Trial
          </a>
        </div>
      </article>
    </>
  );
}
