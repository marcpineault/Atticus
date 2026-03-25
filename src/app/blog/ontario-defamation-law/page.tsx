import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ontario Defamation Law: Libel, Slander, and Online Defamation Guide | Atticus",
  description:
    "A practical guide to Ontario defamation law — elements of defamation, libel vs slander, defences (justification, fair comment, responsible communication), online defamation, the Libel and Slander Act, damages, and limitation periods.",
  alternates: { canonical: "https://getatticus.ca/blog/ontario-defamation-law" },
  openGraph: {
    title: "Ontario Defamation Law: Libel, Slander, and Online Defamation | Atticus",
    description:
      "Complete reference for Ontario lawyers on defamation — elements, defences, online defamation, the Libel and Slander Act notice requirement, and damages.",
    url: "https://getatticus.ca/blog/ontario-defamation-law",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Ontario Defamation Law: Libel, Slander, and Online Defamation Guide",
  description: "A practical guide to Ontario defamation law for Ontario lawyers.",
  author: { "@type": "Organization", name: "Atticus" },
  publisher: { "@type": "Organization", name: "Atticus" },
  datePublished: "2025-10-25",
  url: "https://getatticus.ca/blog/ontario-defamation-law",
};

const defences = [
  {
    name: "Justification (Truth)",
    desc: "A complete defence. The defendant must prove the defamatory statement was substantially true. Partial truth is insufficient if the sting of the statement is not justified.",
    leadCase: "Grant v Torstar Corp, 2009 SCC 61",
  },
  {
    name: "Fair Comment",
    desc: "Protects expressions of opinion on matters of public interest. The comment must be on a matter of public interest, based on facts (stated or notorious), and an honest expression of the maker's opinion. Malice defeats the defence.",
    leadCase: "WIC Radio Ltd v Simpson, 2008 SCC 40",
  },
  {
    name: "Responsible Communication on Matters of Public Interest",
    desc: "Created by the SCC in Grant v Torstar. Protects publication of statements of fact where: the publication is on a matter of public interest, and the defendant acted responsibly in attempting to verify the information.",
    leadCase: "Grant v Torstar Corp, 2009 SCC 61",
  },
  {
    name: "Absolute Privilege",
    desc: "Applies to statements made in Parliament, provincial legislatures, and judicial proceedings (including pleadings and testimony). Complete defence regardless of malice.",
    leadCase: "Morin v Blais (1977), 77 DLR (3d) 733",
  },
  {
    name: "Qualified Privilege",
    desc: "Applies where the maker has a duty or interest to communicate and the recipient has a corresponding interest to receive. Employment references, police reports, and professional complaints. Malice destroys the privilege.",
    leadCase: "Hill v Church of Scientology of Toronto [1995] 2 SCR 1130",
  },
  {
    name: "Consent",
    desc: "Where the plaintiff consented to the publication of the statement. Rare in practice.",
    leadCase: "N/A",
  },
];

export default function DefamationLawPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-white">
        <section className="bg-slate-900 text-white py-16 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <Link href="/blog" className="text-slate-400 hover:text-white text-sm transition-colors">Blog</Link>
              <span className="text-slate-600">&#8250;</span>
              <span className="text-slate-400 text-sm">Litigation</span>
            </div>
            <h1 className="text-4xl font-bold mb-4">
              Ontario Defamation Law: Libel, Slander, and Online Defamation
            </h1>
            <p className="text-slate-300 text-lg">
              A complete reference for Ontario lawyers &mdash; elements of defamation, libel vs slander,
              the six principal defences, online defamation, the Libel and Slander Act notice
              requirement, damages, and limitation periods.
            </p>
            <p className="text-slate-500 text-sm mt-4">Last updated: October 2025 &middot; 13 min read</p>
          </div>
        </section>

        <article className="py-12 px-6">
          <div className="max-w-3xl mx-auto space-y-8 text-slate-700 leading-relaxed">

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">The Legal Framework</h2>
              <p>
                Defamation in Ontario is governed by a combination of common law principles and the
                <em> Libel and Slander Act</em>, RSO 1990, c L.12 (LSA). The LSA modifies the common
                law in important respects, particularly regarding notice requirements for libel in
                newspapers and broadcasting, and the recovery of general damages for slander.
              </p>
              <p className="mt-3">
                Defamation is the communication of a false statement of fact that tends to lower a
                person in the estimation of right-thinking members of society, or to cause them to be
                shunned or avoided. The tort protects reputation — not hurt feelings or personal
                offence, which may ground other causes of action (harassment, intentional infliction
                of mental distress) but not defamation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Libel vs Slander: Why It Matters</h2>
              <p>
                The distinction between libel and slander has practical significance in Ontario:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2">Libel (Written/Permanent Form)</h3>
                  <ul className="text-sm text-slate-600 space-y-1 list-disc ml-4">
                    <li>Written, printed, broadcast, or otherwise permanent</li>
                    <li>Actionable per se — no proof of actual damage required</li>
                    <li>Includes online posts, social media, emails, and reviews</li>
                    <li>6-week notice required for newspaper and broadcast libel (LSA s.5)</li>
                  </ul>
                </div>
                <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2">Slander (Spoken/Transient Form)</h3>
                  <ul className="text-sm text-slate-600 space-y-1 list-disc ml-4">
                    <li>Oral, gestural, or transient communication</li>
                    <li>Generally requires proof of special (actual) damages</li>
                    <li>Exceptions: slander of title, imputing criminal conduct, imputing a loathsome disease, words disparaging in a business or profession</li>
                    <li>No notice requirement</li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                Ontario courts have consistently held that email and social media posts constitute
                libel, not slander, given their permanent and reproducible character.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Elements of Defamation</h2>
              <p>
                A plaintiff must establish three elements on the balance of probabilities:
              </p>
              <ol className="list-decimal ml-6 mt-3 space-y-2">
                <li>
                  <strong>The statement was defamatory</strong> &mdash; it would tend to lower the
                  plaintiff in the estimation of right-thinking members of society. The test is
                  objective. Courts look at the natural and ordinary meaning of the words, as well
                  as innuendo (implied meanings that readers would understand from surrounding context).
                </li>
                <li>
                  <strong>The statement referred to the plaintiff</strong> &mdash; it was understood
                  by at least one third party to refer to the plaintiff. The plaintiff need not be
                  named &mdash; sufficient description or identification is enough. Group defamation
                  requires the group to be small enough that a member is personally implicated.
                </li>
                <li>
                  <strong>The statement was published to at least one third party</strong> &mdash;
                  communication to the plaintiff alone is not publication. Each republication is a
                  fresh tort. In Ontario, the &quot;single publication rule&quot; has not been formally adopted
                  for online content, meaning each new access may constitute fresh publication.
                </li>
              </ol>
              <p className="mt-4">
                Once these elements are established, falsity and damage are presumed for libel. The
                burden then shifts to the defendant to plead and prove a defence.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">The Six Principal Defences</h2>
              <div className="space-y-4">
                {defences.map((d) => (
                  <div key={d.name} className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-semibold text-slate-900">{d.name}</h3>
                      <span className="text-xs text-slate-500 font-mono ml-4 shrink-0">{d.leadCase}</span>
                    </div>
                    <p className="text-sm text-slate-600">{d.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Online Defamation</h2>
              <p>
                Online defamation has become the dominant category of defamation in Ontario practice.
                Key issues include:
              </p>
              <ul className="list-disc ml-6 mt-3 space-y-2">
                <li>
                  <strong>Anonymous defendants:</strong> John Doe actions are available. Courts have
                  ordered platforms (Google, Reddit, Twitter/X, Facebook) to disclose identifying
                  information for anonymous posters where a prima facie case of defamation is
                  established. Norwich orders and Equustek-style injunctions are tools of choice.
                </li>
                <li>
                  <strong>Platform liability:</strong> Online platforms in Canada are not protected
                  by a statutory equivalent to the US Communications Decency Act s.230. Platform
                  liability turns on whether the platform had knowledge of the defamatory content and
                  failed to act. After notice, continued hosting may engage liability.
                </li>
                <li>
                  <strong>Google delisting:</strong> Following <em>Google Inc v Equustek Solutions
                  Inc</em>, 2017 SCC 34, Ontario courts can order search engines to globally delist
                  defamatory content in appropriate circumstances.
                </li>
                <li>
                  <strong>Review site defamation:</strong> Google Reviews, Yelp, and similar platforms
                  are increasingly the source of defamation actions by businesses against former
                  employees or customers. The &quot;responsible communication&quot; defence rarely applies
                  to consumer reviews.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">The Libel and Slander Act Notice Requirement</h2>
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 my-4">
                <p className="font-semibold text-red-900 mb-1">Critical: 6-Week Notice for Newspaper and Broadcast Libel</p>
                <p className="text-red-800 text-sm">
                  Under ss. 5(1) and 6 of the Libel and Slander Act, a plaintiff who intends to bring
                  an action for libel in a newspaper or broadcast must serve written notice on the
                  defendant within <strong>6 weeks</strong> of the publication coming to the
                  plaintiff&apos;s knowledge. Failure to serve notice is a complete bar to the action.
                  This applies to online newspapers — whether it applies to social media accounts
                  of media organizations is unsettled.
                </p>
              </div>
              <p>
                The 6-week notice must specify the matter complained of. Courts have held that
                notice must be sufficiently specific to allow the defendant to identify and consider
                retraction. Vague notice has been found insufficient. Serve it promptly and
                precisely on intake.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Damages</h2>
              <p>
                Ontario defamation damages are not capped in the same way as personal injury general
                damages. Three categories apply:
              </p>
              <ul className="list-disc ml-6 mt-3 space-y-2">
                <li>
                  <strong>General damages</strong> &mdash; compensate for loss of reputation, hurt
                  feelings, and the natural and probable consequences of the defamation. The landmark
                  Ontario case is <em>Hill v Church of Scientology of Toronto</em> [1995] 2 SCR 1130,
                  where the Supreme Court upheld a $1.6 million general damage award. General damages
                  in most cases are more modest ($50,000&ndash;$300,000 for serious defamation).
                </li>
                <li>
                  <strong>Aggravated damages</strong> &mdash; available where the defendant&apos;s
                  conduct was high-handed or the defendant failed to retract after demand. They
                  compensate for additional injury to feelings.
                </li>
                <li>
                  <strong>Punitive damages</strong> &mdash; available for malicious, oppressive, or
                  high-handed misconduct that warrants denunciation. The court in <em>Hill</em>
                  awarded $800,000 in punitive damages on those facts.
                </li>
              </ul>
              <p className="mt-3">
                Special damages (provable economic loss) are recoverable in addition to general damages.
                Injunctive relief restraining continued publication is available but courts are cautious
                about prior restraint orders on expression.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Limitation Periods</h2>
              <p>
                The basic 2-year limitation period under the <em>Limitations Act, 2002</em> applies
                to defamation claims. The clock runs from the date of discovery &mdash; when the
                plaintiff knew or ought to have known of the publication.
              </p>
              <p className="mt-3">
                For online content, the limitation period raises complex issues: does a webpage that
                was posted years ago but remains accessible today constitute continuing publication,
                or did the single original publication start the clock? Ontario courts have generally
                applied the single publication rule from the original date of posting for static
                web content, though the issue is not fully resolved.
              </p>
              <p className="mt-3">
                Note: the 6-week LSA notice requirement operates separately from and in addition
                to the 2-year limitation period for newspaper and broadcast libel.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Practical Tips for Ontario Defamation Lawyers</h2>
              <ul className="list-disc ml-6 space-y-2">
                <li>For plaintiff counsel: check immediately whether the LSA 6-week notice applies and serve it on day one if so.</li>
                <li>Preserve evidence: screenshot defamatory posts with timestamps, URL, and metadata before the defendant can delete them.</li>
                <li>For online anonymity cases: move quickly for a Norwich order — platforms often have short retention periods for IP logs.</li>
                <li>Assess the responsible communication defence early for media defendants — it has significantly changed the landscape for public interest reporting.</li>
                <li>Consider whether a demand for retraction and apology better serves the client than litigation — retraction can reduce damages significantly under the LSA.</li>
                <li>Anti-SLAPP motions under s. 137.1 of the Courts of Justice Act can be brought by defendants in expression cases — plaintiff counsel must assess this risk on intake.</li>
              </ul>
            </section>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
              <h3 className="font-semibold text-blue-900 mb-2">Manage Defamation Files with Atticus</h3>
              <p className="text-blue-800 text-sm mb-4">
                Atticus tracks limitation period deadlines, extracts key facts from correspondence
                and documents, and organizes your Ontario litigation files with AI-powered
                document intelligence.
              </p>
              <Link href="/sign-up" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-sm font-semibold transition-colors inline-block">
                Start Free Trial
              </Link>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
