import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ontario Shareholder Oppression: OBCA s.248 Guide for Lawyers | Atticus",
  description:
    "A practical guide to Ontario shareholder oppression claims under OBCA s.248 and CBCA s.241. Covers the reasonable expectations test, standing, remedies, and key cases including BCE Inc v 1976 Debentureholders.",
  alternates: { canonical: "https://getatticus.ca/blog/ontario-shareholder-oppression" },
  openGraph: {
    title: "Ontario Shareholder Oppression: OBCA s.248 Guide | Atticus",
    description:
      "Complete reference for Ontario corporate lawyers on shareholder oppression — reasonable expectations test, standing, remedies, and the corporate deadlock connection.",
    url: "https://getatticus.ca/blog/ontario-shareholder-oppression",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Ontario Shareholder Oppression: OBCA s.248 Guide for Lawyers",
  description: "A practical guide to Ontario shareholder oppression claims under OBCA s.248.",
  author: { "@type": "Organization", name: "Atticus" },
  publisher: { "@type": "Organization", name: "Atticus" },
  datePublished: "2025-10-22",
  url: "https://getatticus.ca/blog/ontario-shareholder-oppression",
};

const remedies = [
  ["Restraining order", "Stop ongoing oppressive conduct — most common interim relief"],
  ["Requiring an act to be done", "Compel dividend declaration, share transfer approval, access to records"],
  ["Varying or setting aside a transaction", "Unwind a dilutive share issuance or asset transfer to related party"],
  ["Appointment of a receiver or receiver-manager", "Preserve assets pending resolution or wind-up"],
  ["Requiring the company to purchase shares", "Buy-out the complainant at fair value — most common final remedy"],
  ["Winding up the corporation", "Available but rarely ordered except in complete deadlock"],
  ["Directing an investigation", "Order an Inspector under OBCA s.161 if financial irregularities alleged"],
  ["Compensating a person", "Direct damages for losses caused by the oppressive conduct"],
];

export default function ShareholderOppressionPage() {
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
              <span className="text-slate-400 text-sm">Corporate Law</span>
            </div>
            <h1 className="text-4xl font-bold mb-4">
              Ontario Shareholder Oppression: A Practical Guide to OBCA s.248
            </h1>
            <p className="text-slate-300 text-lg">
              A complete reference for Ontario corporate lawyers &mdash; the reasonable expectations test,
              standing under OBCA s.248, available remedies, and key cases including
              BCE Inc v 1976 Debentureholders.
            </p>
            <p className="text-slate-500 text-sm mt-4">Last updated: October 2025 &middot; 13 min read</p>
          </div>
        </section>

        <article className="py-12 px-6">
          <div className="max-w-3xl mx-auto space-y-8 text-slate-700 leading-relaxed">

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">The Statutory Framework</h2>
              <p>
                The oppression remedy in Ontario is found in s. 248 of the <em>Business Corporations
                Act</em>, RSO 1990, c B.16 (OBCA). The equivalent federal provision is s. 241 of the
                <em> Canada Business Corporations Act</em>, RSC 1985, c C-44 (CBCA). Both provisions
                grant the court broad remedial authority where a corporation&apos;s affairs are or have been
                carried on in a manner that is:
              </p>
              <ul className="list-disc ml-6 mt-3 space-y-1">
                <li>Oppressive or unfairly prejudicial to any security holder, creditor, director, or officer; or</li>
                <li>Unfairly disregards the interests of any of those persons.</li>
              </ul>
              <p className="mt-3">
                The oppression remedy is one of the most powerful and flexible tools in Canadian
                corporate law. Unlike a derivative action (which requires the company to have been
                wronged), an oppression application is brought directly by the complainant in their
                own name and for their own benefit.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Who Has Standing? The &quot;Complainant&quot; Definition</h2>
              <p>
                Under s. 248(1) of the OBCA, a complainant includes:
              </p>
              <ul className="list-disc ml-6 mt-3 space-y-1">
                <li>A registered holder or beneficial owner of securities of a corporation;</li>
                <li>A former holder or beneficial owner;</li>
                <li>A director or officer of the corporation or a related body corporate;</li>
                <li>The Director appointed under the OBCA (rarely invoked in practice); and</li>
                <li>Any other person who, in the discretion of the court, is a proper person to make an application.</li>
              </ul>
              <p className="mt-3">
                The residual category has been used to grant standing to creditors, employees, and
                even franchisees in appropriate circumstances. However, a complainant must demonstrate
                a genuine interest in the corporation&apos;s affairs and a legitimate grievance. Courts
                do not grant standing to mere commercial adversaries.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">The Reasonable Expectations Test</h2>
              <p>
                The governing test for oppression was definitively stated by the Supreme Court of
                Canada in <em>BCE Inc v 1976 Debentureholders</em>, 2008 SCC 69. The test asks:
              </p>
              <div className="bg-slate-50 border-l-4 border-blue-500 p-4 my-4">
                <p className="text-slate-700 italic">
                  &quot;The court must look at the reasonable expectations of the parties &mdash; what they
                  reasonably expected in the context of the relationship established between them.
                  If those reasonable expectations were violated in a way that was oppressive,
                  unfairly prejudicial, or unfairly disregarded, the court may grant a remedy.&quot;
                </p>
                <p className="text-slate-500 text-sm mt-2">&mdash; BCE Inc v 1976 Debentureholders, 2008 SCC 69 at para 68</p>
              </div>
              <p>
                Reasonable expectations are not determined solely by the written corporate documents.
                Courts examine:
              </p>
              <ul className="list-disc ml-6 mt-3 space-y-1">
                <li>Shareholders&apos; agreements and side letters;</li>
                <li>Course of dealing between the parties;</li>
                <li>Representations made during incorporation or investment;</li>
                <li>Industry norms and standard practices;</li>
                <li>The nature of the corporation (closely held vs widely distributed).</li>
              </ul>
              <p className="mt-3">
                Reasonable expectations carry the most weight in closely held corporations where
                shareholders often have quasi-partnership expectations — a right to participate in
                management, a right to employment by the corporation, or a reasonable expectation
                of dividends proportionate to profit. These expectations frequently clash when the
                relationship breaks down.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Common Fact Patterns</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Exclusion from Management",
                    body: "A minority shareholder who participated in founding the company and expected an ongoing management role is removed as a director or officer, then excluded from decisions. The exclusion plus refusal to buy out shares at fair value is classic oppression.",
                  },
                  {
                    title: "Dilutive Share Issuance",
                    body: "Majority shareholders cause the corporation to issue shares to themselves or related parties at below-market prices, diluting the minority's interest. Courts have consistently found this oppressive absent legitimate business justification.",
                  },
                  {
                    title: "Denial of Dividends / Salary Extraction",
                    body: "The majority pays itself excessive salaries or management fees while refusing to declare dividends, effectively stripping the corporation of value that should benefit all shareholders proportionately.",
                  },
                  {
                    title: "Related Party Transactions",
                    body: "Assets transferred to a related corporation or family member at undervalue, or contracts awarded to connected parties on non-arm's-length terms that diminish the corporation's value.",
                  },
                  {
                    title: "Withholding Financial Information",
                    body: "Refusal to provide financial statements, shareholder register access, or corporate minute books to a minority shareholder has been found oppressive even where the majority technically controls disclosure.",
                  },
                ].map((item) => (
                  <div key={item.title} className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                    <h3 className="font-semibold text-slate-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-slate-600">{item.body}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Available Remedies</h2>
              <p>
                Section 248(3) of the OBCA gives the court extremely broad remedial discretion.
                The court may make any interim or final order it thinks fit, including:
              </p>
              <div className="overflow-x-auto mt-4">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-slate-100">
                      <th className="border border-slate-200 px-4 py-2 text-left font-semibold">Remedy</th>
                      <th className="border border-slate-200 px-4 py-2 text-left font-semibold">Common Use</th>
                    </tr>
                  </thead>
                  <tbody>
                    {remedies.map(([remedy, use]) => (
                      <tr key={remedy} className="odd:bg-white even:bg-slate-50">
                        <td className="border border-slate-200 px-4 py-2 font-medium">{remedy}</td>
                        <td className="border border-slate-200 px-4 py-2">{use}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4">
                The most common final remedy in closely held company disputes is a <strong>buy-out
                order</strong> at fair value. Courts must determine the fair value of the complainant&apos;s
                shares, typically requiring expert evidence. The valuation date (date of oppression,
                date of application, or date of judgment) is contested and fact-specific.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Oppression vs Derivative Action</h2>
              <p>
                Ontario lawyers must advise clients on which remedy is appropriate:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <h3 className="font-semibold text-blue-900 mb-2">Oppression Application (s.248 OBCA)</h3>
                  <ul className="text-sm text-blue-800 space-y-1 list-disc ml-4">
                    <li>Wrong done to the complainant personally</li>
                    <li>No leave required</li>
                    <li>Remedy flows to the complainant</li>
                    <li>Faster — brought as an application</li>
                    <li>Standing broader than shareholders alone</li>
                  </ul>
                </div>
                <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2">Derivative Action (s.246 OBCA)</h3>
                  <ul className="text-sm text-slate-600 space-y-1 list-disc ml-4">
                    <li>Wrong done to the corporation</li>
                    <li>Requires court leave (s.246(2))</li>
                    <li>Remedy flows to the corporation</li>
                    <li>More complex &mdash; corporation is the nominal plaintiff</li>
                    <li>Must give notice to directors first</li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                Many oppression applications also include a derivative action in the alternative.
                Courts have sometimes characterized claims as derivative even when pleaded as
                oppression where the primary harm is to the corporation rather than the individual.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Limitation Periods and Procedure</h2>
              <p>
                The 2-year limitation period under the <em>Limitations Act, 2002</em> applies to
                oppression applications. The clock runs from the date the complainant discovered
                (or ought to have discovered) the oppressive conduct. Where oppression is ongoing
                (e.g., continuing exclusion from management), the limitation period may refresh.
              </p>
              <p className="mt-3">
                Oppression claims are brought by application under Rule 14 of the <em>Rules of Civil
                Procedure</em> in the Superior Court of Justice. They are not commenced by statement
                of claim. Interim relief (restraining orders, preservation orders) is frequently
                sought at the outset.
              </p>
              <p className="mt-3">
                Practical note: where a shareholders&apos; agreement contains a mandatory buy-sell
                (shotgun) clause or arbitration provision, the court may stay the oppression
                application pending compliance with the contractual mechanism. Advise clients
                to carefully review their agreement before commencing.
              </p>
            </section>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
              <h3 className="font-semibold text-blue-900 mb-2">Manage Corporate Disputes with Atticus</h3>
              <p className="text-blue-800 text-sm mb-4">
                Atticus extracts key dates, share structures, and obligations from corporate documents,
                shareholders&apos; agreements, and corporate records — so you can build your oppression
                case with all the facts at your fingertips.
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
