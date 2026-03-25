import { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ontario Intellectual Property Law: Trade-marks, Copyright & Patents | Atticus",
  description:
    "Complete guide to intellectual property law for Ontario lawyers. Trade-mark registration, copyright ownership, patent basics, trade secrets, IP due diligence in M&A, and IP enforcement. Updated 2025.",
  keywords: [
    "intellectual property law Ontario",
    "trade-mark registration Canada",
    "copyright law Ontario",
    "patent Canada",
    "trade secret Ontario",
    "IP due diligence Ontario",
    "IP enforcement Ontario lawyer",
    "CIPO Canada",
  ],
  openGraph: {
    title: "Ontario Intellectual Property Law: Trade-marks, Copyright & Patents",
    description:
      "Trade-mark registration, copyright ownership, patent basics, trade secrets, IP due diligence, and enforcement for Ontario IP practitioners.",
    type: "article",
  },
};

const schemaJson = `{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Ontario Intellectual Property Law: Trade-marks, Copyright and Patents",
      "description": "Complete guide to intellectual property law for Ontario lawyers covering trade-mark registration, copyright ownership, patent basics, trade secrets, IP due diligence in M&A, and IP enforcement.",
      "datePublished": "2025-06-22",
      "dateModified": "2025-06-22",
      "author": { "@type": "Organization", "name": "Atticus" },
      "publisher": { "@type": "Organization", "name": "Atticus", "url": "https://getatticus.ca" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://getatticus.ca/blog/ontario-intellectual-property" }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How do you register a trade-mark in Canada?",
          "acceptedAnswer": { "@type": "Answer", "text": "Trade-mark registration in Canada is handled by the Canadian Intellectual Property Office (CIPO). The process: (1) conduct a clearance search on the CIPO database and common law; (2) file an application with CIPO identifying the mark, the goods/services (in NICE classification), and the basis (proposed use or use in Canada); (3) examination by CIPO (typically 18-24 months); (4) advertisement in the Trademarks Journal (2-month opposition period); (5) registration and issuance of certificate. Canadian trade-mark registrations last 10 years and are renewable." }
        },
        {
          "@type": "Question",
          "name": "Who owns copyright in work created by an employee in Ontario?",
          "acceptedAnswer": { "@type": "Answer", "text": "Under s. 13(3) of the Copyright Act, where an employee creates a work in the course of employment, the employer is the first owner of copyright — unless there is an agreement to the contrary. For independent contractors, the creator owns copyright unless it is assigned by written agreement. This distinction is critical in software development, creative services, and consulting agreements. Moral rights (right of integrity and right of paternity) always remain with the author even if copyright is assigned." }
        },
        {
          "@type": "Question",
          "name": "What protection do trade secrets get in Ontario?",
          "acceptedAnswer": { "@type": "Answer", "text": "Ontario does not have a dedicated trade secrets statute — protection comes from contract law (NDAs, employment agreements), the tort of breach of confidence, and equitable remedies. To qualify for trade secret protection: the information must be secret (not generally known or ascertainable), have commercial value because it is secret, and reasonable steps must have been taken to keep it secret. Unlike patents, trade secrets have no registration and potentially unlimited duration — but offer no protection against independent discovery or reverse engineering." }
        },
        {
          "@type": "Question",
          "name": "What is IP due diligence in an Ontario M&A transaction?",
          "acceptedAnswer": { "@type": "Answer", "text": "IP due diligence in an Ontario M&A transaction involves: reviewing all registered IP (trade-marks, patents, industrial designs, copyrights) for ownership, status, and encumbrances; confirming chain of title (assignment agreements, work-made-for-hire analysis for third-party developers); reviewing IP licences (inbound and outbound) for assignment and change-of-control provisions; assessing trade secret protection practices; reviewing open source software compliance; and identifying IP litigation or threats. IP due diligence findings directly affect representations and warranties and may require specific indemnities in the purchase agreement." }
        }
      ]
    }
  ]
}`;

type IpRight = {
  right: string;
  what: string;
  duration: string;
  registration: string;
  keyRisk: string;
};

const ipRights: IpRight[] = [
  {
    right: "Trade-mark",
    what: "A word, logo, design, sound, or other distinguishing mark used to identify goods/services",
    duration: "10 years from registration; indefinitely renewable as long as used",
    registration: "CIPO registration provides national rights; common law rights from use alone (limited geographic scope)",
    keyRisk: "Failure to use in Canada for 3+ years — vulnerable to expungement for non-use under s. 45 Trade-marks Act",
  },
  {
    right: "Copyright",
    what: "Protects original works of authorship: literary, artistic, dramatic, musical, and computer programs",
    duration: "Life of author + 70 years (since 2022 CUSMA amendment); anonymous works: 75 years from publication",
    registration: "Automatic on creation; registration creates presumption of ownership and enables easier enforcement",
    keyRisk: "Ownership disputes — who created it? Employee vs contractor? Assignment in writing required for transfer",
  },
  {
    right: "Patent",
    what: "Exclusive right to make, use, and sell a novel, non-obvious, and useful invention",
    duration: "20 years from filing date; no renewal (maintenance fees required annually)",
    registration: "Must be filed with CIPO; PCT international applications available; provisional applications not available in Canada",
    keyRisk: "Public disclosure before filing destroys novelty (12-month grace period available in Canada for own disclosure only)",
  },
  {
    right: "Industrial Design",
    what: "Visual features of shape, configuration, pattern, or ornament of a finished article",
    duration: "10 years from registration",
    registration: "Must register with CIPO; application must be filed within 12 months of first publication",
    keyRisk: "No protection for functional features — only aesthetic aspects qualify",
  },
  {
    right: "Trade Secret",
    what: "Confidential business information (formulas, processes, customer lists, algorithms) with commercial value",
    duration: "Potentially unlimited — as long as the secret is maintained",
    registration: "No registration — protected by contract, tort of breach of confidence, and equity",
    keyRisk: "No protection against independent discovery or reverse engineering; loses protection if secret is disclosed",
  },
];

type TrademarkStep = {
  stage: string;
  who: string;
  timeline: string;
  note: string;
};

const trademarkProcess: TrademarkStep[] = [
  { stage: "Clearance search", who: "Applicant / counsel", timeline: "1-2 weeks", note: "Search CIPO database, provincial business name registries, domain names, and common law use; assess risk of confusion with existing marks" },
  { stage: "Application filing", who: "Applicant / agent (CIPO-registered)", timeline: "Day 1", note: "File online via CIPO portal; identify mark, goods/services in NICE classes, basis (proposed use or current use); government filing fee per class" },
  { stage: "Examination", who: "CIPO examiner", timeline: "18-24 months from filing", note: "Examiner reviews for absolute grounds (descriptive, deceptive, prohibited marks) and relative grounds (confusingly similar to registered mark)" },
  { stage: "Office actions", who: "Applicant / counsel", timeline: "Respond within 6 months of office action", note: "Examiner may object on descriptiveness, confusion, or other grounds; applicant responds with arguments and/or amendments" },
  { stage: "Advertisement", who: "CIPO", timeline: "Advertised in Trademarks Journal", note: "2-month opposition period; any person may file a statement of opposition claiming confusion or other grounds" },
  { stage: "Opposition (if filed)", who: "Opponent and applicant", timeline: "12-24+ months", note: "Heard before the Trademarks Opposition Board; evidence rounds, written arguments, oral hearings; appeal to Federal Court" },
  { stage: "Allowance and registration", who: "CIPO", timeline: "Certificate issued", note: "If no opposition or opposition dismissed, CIPO issues registration; valid for 10 years from registration date" },
];

const ipEnforcement = [
  { remedy: "Injunction (interlocutory and permanent)", basis: "Most common first-order relief — prevents ongoing infringement; interlocutory injunction requires RJR-MacDonald 3-part test" },
  { remedy: "Damages or account of profits", basis: "Plaintiff may elect between actual damages (losses suffered) or account of profits (infringer's gains from infringement) — election must be made before judgment" },
  { remedy: "Delivery up / destruction", basis: "Order requiring infringing goods or materials to be surrendered to the plaintiff or destroyed; common in counterfeiting cases" },
  { remedy: "Anton Piller order (civil search and seizure)", basis: "Ex parte order permitting plaintiff to enter defendant's premises to inspect and seize evidence of infringement — available in urgent cases where evidence may be destroyed" },
  { remedy: "Statutory damages", basis: "Copyright Act permits election of statutory damages ($500-$20,000 per work for commercial infringement) without proving actual loss — significant in mass infringement cases" },
  { remedy: "Criminal prosecution", basis: "Trade-marks Act and Copyright Act both contain criminal offences for willful large-scale commercial infringement; prosecuted by federal authorities" },
];

const faqs = [
  {
    q: "How do you register a trade-mark in Canada?",
    a: "Trade-mark registration in Canada is handled by the Canadian Intellectual Property Office (CIPO). The process: (1) conduct a clearance search on the CIPO database and common law; (2) file an application with CIPO identifying the mark, the goods/services (in NICE classification), and the basis (proposed use or use in Canada); (3) examination by CIPO (typically 18-24 months); (4) advertisement in the Trademarks Journal (2-month opposition period); (5) registration and issuance of certificate. Canadian trade-mark registrations last 10 years and are renewable.",
  },
  {
    q: "Who owns copyright in work created by an employee in Ontario?",
    a: "Under s. 13(3) of the Copyright Act, where an employee creates a work in the course of employment, the employer is the first owner of copyright — unless there is an agreement to the contrary. For independent contractors, the creator owns copyright unless it is assigned by written agreement. This distinction is critical in software development, creative services, and consulting agreements. Moral rights (right of integrity and right of paternity) always remain with the author even if copyright is assigned.",
  },
  {
    q: "What protection do trade secrets get in Ontario?",
    a: "Ontario does not have a dedicated trade secrets statute — protection comes from contract law (NDAs, employment agreements), the tort of breach of confidence, and equitable remedies. To qualify for trade secret protection: the information must be secret (not generally known or ascertainable), have commercial value because it is secret, and reasonable steps must have been taken to keep it secret. Unlike patents, trade secrets have no registration and potentially unlimited duration — but offer no protection against independent discovery or reverse engineering.",
  },
  {
    q: "What is IP due diligence in an Ontario M&A transaction?",
    a: "IP due diligence in an Ontario M&A transaction involves: reviewing all registered IP (trade-marks, patents, industrial designs, copyrights) for ownership, status, and encumbrances; confirming chain of title (assignment agreements, work-made-for-hire analysis for third-party developers); reviewing IP licences (inbound and outbound) for assignment and change-of-control provisions; assessing trade secret protection practices; reviewing open source software compliance; and identifying IP litigation or threats. IP due diligence findings directly affect representations and warranties and may require specific indemnities in the purchase agreement.",
  },
];

export default function OntarioIntellectualPropertyPage() {
  return (
    <>
      <Script id="ontario-ip-schema" type="application/ld+json">
        {schemaJson}
      </Script>
      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <nav className="mb-8 text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-700">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-gray-700">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Ontario Intellectual Property Law</span>
          </nav>

          <header className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-violet-100 text-violet-800 text-xs font-semibold px-3 py-1 rounded-full">IP Law</span>
              <span className="text-gray-400 text-sm">11 min read</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Ontario Intellectual Property Law: Trade-marks, Copyright &amp; Patents
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Canadian IP rights overview, trade-mark registration process, copyright ownership rules, trade secret protection, IP due diligence in M&amp;A, and enforcement remedies.
            </p>
            <div className="mt-4 text-sm text-gray-400">Updated June 2025</div>
          </header>

          <section className="mb-10">
            <p className="text-gray-700 leading-relaxed text-lg">
              Intellectual property is governed by federal law in Canada — the Trade-marks Act, Copyright Act, Patent Act, and Industrial Design Act all fall under federal jurisdiction administered by the Canadian Intellectual Property Office (CIPO). Ontario commercial lawyers regularly advise on IP ownership, licensing, due diligence, and enforcement, even without being registered IP agents. This guide covers the framework that every Ontario commercial lawyer needs to understand.
            </p>
          </section>

          {/* IP Rights Overview */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Canadian IP Rights at a Glance</h2>
            <div className="space-y-4">
              {ipRights.map((right, i) => (
                <div key={i} className="border border-gray-200 rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-violet-100 text-violet-800 text-xs font-bold px-3 py-1 rounded-full">{right.right}</span>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-3 text-sm">
                    <div><span className="text-gray-500 font-medium">What it protects:</span> <span className="text-gray-700">{right.what}</span></div>
                    <div><span className="text-gray-500 font-medium">Duration:</span> <span className="text-gray-700">{right.duration}</span></div>
                    <div><span className="text-gray-500 font-medium">Registration:</span> <span className="text-gray-700">{right.registration}</span></div>
                    <div className="bg-amber-50 rounded p-2"><span className="text-amber-700 font-medium text-xs">Key risk: </span><span className="text-amber-800 text-xs">{right.keyRisk}</span></div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Trade-mark Registration */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Canadian Trade-mark Registration Process</h2>
            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="min-w-full divide-y divide-gray-200 text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">Stage</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">Who</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">Timeline</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {trademarkProcess.map((step, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-4 py-3 font-medium text-gray-800">{step.stage}</td>
                      <td className="px-4 py-3 text-gray-600 text-xs">{step.who}</td>
                      <td className="px-4 py-3 text-violet-700 text-xs font-medium">{step.timeline}</td>
                      <td className="px-4 py-3 text-gray-600 text-xs">{step.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Copyright */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Copyright: Key Rules for Commercial Lawyers</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { label: "Employee vs contractor", desc: "Employee-created work in the course of employment: employer owns copyright. Contractor-created work: creator owns unless assigned in writing. Always get written assignment in contractor agreements." },
                { label: "Moral rights", desc: "Authors retain moral rights (integrity and paternity) even after copyright assignment. Moral rights can only be waived, not assigned. Standard practice: include a moral rights waiver in all copyright assignments." },
                { label: "Crown copyright", desc: "Works prepared or published by or under the direction or control of the Crown (federal or provincial government) are subject to Crown copyright — 50-year term from publication. Third parties need licence." },
                { label: "Software copyright", desc: "Computer programs are protected as literary works. Object code and source code are both protected. AI-generated code raises new ownership questions under Canadian law — currently no clear statutory guidance." },
                { label: "Copyright registration", desc: "Registration is voluntary in Canada but creates a presumption of ownership and makes enforcement easier. Especially valuable for commercially significant works." },
                { label: "Fair dealing", desc: "Canadian fair dealing (s. 29 Copyright Act) is more limited than US fair use — applies to research, private study, education, parody, satire, criticism, review, and news reporting. Not a general public interest exception." },
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                  <div className="font-semibold text-gray-900 text-sm mb-1">{item.label}</div>
                  <div className="text-gray-600 text-sm leading-relaxed">{item.desc}</div>
                </div>
              ))}
            </div>
          </section>

          {/* IP Enforcement */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">IP Enforcement Remedies</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              IP enforcement in Canada proceeds in the Federal Court (exclusive jurisdiction for most IP matters) or Ontario Superior Court. Federal Court is generally preferred for patent and trade-mark matters.
            </p>
            <div className="space-y-3">
              {ipEnforcement.map((item, i) => (
                <div key={i} className="flex gap-4 bg-gray-50 border border-gray-200 rounded-xl p-4">
                  <div className="flex-shrink-0 w-2 h-2 bg-violet-500 rounded-full mt-2"></div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm mb-1">{item.remedy}</div>
                    <div className="text-gray-600 text-sm leading-relaxed">{item.basis}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <div key={i} className="border-b border-gray-200 pb-6">
                  <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-gradient-to-br from-violet-600 to-violet-800 rounded-2xl p-8 text-white text-center mb-10">
            <h2 className="text-2xl font-bold mb-3">Manage IP &amp; Commercial Files with Atticus</h2>
            <p className="text-violet-100 mb-6">
              Track trade-mark deadlines, CIPO correspondence, and IP licensing files — Ontario-built practice management.
            </p>
            <Link href="/intake" className="inline-block bg-white text-violet-700 font-semibold px-8 py-3 rounded-lg hover:bg-violet-50 transition-colors">
              Start Free Trial
            </Link>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Related Resources</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { href: "/blog/ontario-business-purchase-agreement", label: "Ontario Business Purchase Agreement" },
                { href: "/blog/ontario-ndas-confidentiality-agreements", label: "Ontario NDAs & Confidentiality Agreements" },
                { href: "/blog/ontario-non-compete-agreement", label: "Ontario Non-Compete Agreements" },
                { href: "/blog/ontario-franchise-law", label: "Ontario Franchise Law" },
                { href: "/blog/ontario-privacy-law", label: "Ontario Privacy Law (PIPEDA)" },
                { href: "/ontario-corporate-lawyer", label: "Ontario Corporate Lawyer Software" },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="text-blue-600 hover:text-blue-800 text-sm font-medium hover:underline">
                  {link.label} &rarr;
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
