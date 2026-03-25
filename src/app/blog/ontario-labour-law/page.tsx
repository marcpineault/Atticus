import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ontario Labour Law — Labour Relations Act, Collective Bargaining, and Unfair Labour Practices | Atticus Blog",
  description:
    "Comprehensive guide to Ontario labour law: Labour Relations Act SO 1995, union organizing, certification, collective bargaining, unfair labour practices, strikes and lockouts, OLRB proceedings, and arbitration for Ontario labour lawyers.",
  openGraph: {
    title: "Ontario Labour Law — Labour Relations Act, Collective Bargaining, and OLRB",
    description:
      "Labour Relations Act SO 1995 c 1, union certification, collective bargaining, unfair labour practices, strikes, lockouts, OLRB proceedings, and arbitration for Ontario labour practitioners.",
    type: "article",
    url: "https://getatticus.ca/blog/ontario-labour-law",
  },
  alternates: { canonical: "https://getatticus.ca/blog/ontario-labour-law" },
};

export default function OntarioLabourLawPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Ontario Labour Law — Labour Relations Act, Collective Bargaining, and OLRB",
    description:
      "Labour Relations Act SO 1995, union organizing, certification, collective bargaining, unfair labour practices, strikes, lockouts, and OLRB proceedings for Ontario labour practitioners.",
    author: { "@type": "Organization", name: "Atticus" },
    publisher: { "@type": "Organization", name: "Atticus", url: "https://getatticus.ca" },
    url: "https://getatticus.ca/blog/ontario-labour-law",
    mainEntityOfPage: "https://getatticus.ca/blog/ontario-labour-law",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <Link href="/blog" className="text-slate-400 hover:text-white text-sm transition">
                &#8592; Blog
              </Link>
              <span className="bg-slate-500 text-white text-xs font-semibold px-2 py-1 rounded">
                Labour Law
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Ontario Labour Law — Labour Relations Act, Collective Bargaining, and OLRB
            </h1>
            <p className="text-slate-300 text-lg">
              Union organizing and certification, collective bargaining obligations, unfair
              labour practices, strikes and lockouts, grievance arbitration, and OLRB proceedings
              — a guide for Ontario labour and employment lawyers.
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

            <h2>Labour Relations Act — Scope and Administration</h2>
            <p>
              The Labour Relations Act SO 1995 c 1 Sch A (LRA) governs collective bargaining
              relationships, union certification, collective agreements, and unfair labour
              practices in Ontario&apos;s private sector and certain provincial public sector
              employees. The LRA is administered by the Ontario Labour Relations Board (OLRB),
              an independent adjudicative body.
            </p>
            <p>
              Federal jurisdiction employees (those in federally regulated industries —
              banking, telecommunications, interprovincial transportation, broadcasting, postal
              services) are subject to the Canada Labour Code RSC 1985 c L-2 Part I, administered
              by the Canada Industrial Relations Board (CIRB). Certain Ontario public sector
              employees are governed by sector-specific legislation: the Crown Employees Collective
              Bargaining Act SO 1993 c 38, the Hospital Labour Disputes Arbitration Act RSO 1990
              c H.14, and the School Boards Collective Bargaining Act SO 2014 c 5, among others.
            </p>

            <h2>Union Organizing and Certification</h2>
            <p>
              Union organizing in Ontario proceeds under LRA Part I. Employees have the right to
              join and participate in the activities of a trade union (LRA s.5). Employers have
              the right to freedom of expression regarding union organizing, but may not threaten,
              coerce, or promise benefits in connection with union activity (the unfair labour
              practices provisions apply during organizing — s.70).
            </p>
            <p>
              A trade union applies for certification by filing an application with the OLRB. The
              OLRB must receive the application when the union has &quot;demonstrated majority
              support&quot; — that is, when 40% or more of the employees in the proposed bargaining
              unit have expressed their desire to be represented by the trade union through
              membership cards. If 40% but less than 55% of employees have signed cards, the
              OLRB orders a representation vote. If 55% or more have signed cards, the OLRB may
              certify without a vote (card-based or automatic certification).
            </p>
            <p>
              The bargaining unit is the group of employees for which the union seeks the right
              to bargain. The OLRB determines the appropriate bargaining unit based on criteria
              including the community of interest among employees, the functional coherence of
              the group, and the wishes of the parties.
            </p>

            <h2>Collective Bargaining Obligations</h2>
            <p>
              Once a union is certified, the employer is required to bargain in good faith with
              the union for a collective agreement (LRA s.17). The duty to bargain in good faith
              requires the parties to: meet at reasonable times; make reasonable proposals; give
              detailed responses to the other party&apos;s proposals; and not engage in surface
              bargaining (going through the motions of bargaining with no genuine intention to
              reach an agreement).
            </p>
            <p>
              The parties must begin bargaining within 15 days of notice being given (or within
              the time specified in the LRA) and must bargain in a manner consistent with the
              obligation to make every reasonable effort to conclude a collective agreement
              (LRA s.15). A first collective agreement may be referred to the OLRB for first
              contract arbitration if the parties have bargained in good faith but are unable
              to reach agreement.
            </p>
            <p>
              Collective agreements must be in writing and must contain a provision for the
              final and binding settlement by arbitration of all differences between the
              parties (LRA s.48). Minimum term is one year.
            </p>

            <h2>Unfair Labour Practices</h2>
            <p>
              Part II of the LRA (ss.70-96) prohibits a range of unfair labour practices by
              employers, trade unions, and their agents:
            </p>
            <ul>
              <li>
                <strong>Employer interference (s.70):</strong> An employer must not participate
                in or interfere with the formation, selection, or administration of a trade union,
                or the representation of employees by a trade union, or contribute financial or
                other support to a trade union.
              </li>
              <li>
                <strong>Employer intimidation/coercion (s.72):</strong> An employer must not
                seek to compel any person to refrain from becoming or continuing to be a member
                of a trade union by intimidation, dismissal, or threat of dismissal.
              </li>
              <li>
                <strong>Reprisal (s.74):</strong> An employer must not impose any penalty on or
                refuse to employ any person because of their exercise of any right under the LRA.
              </li>
              <li>
                <strong>Union coercion (s.76):</strong> A trade union must not seek to compel
                an employer to bargain collectively through coercion, intimidation, threats, or
                undue influence.
              </li>
            </ul>
            <p>
              Unfair labour practice complaints must be filed with the OLRB within three months
              of the act complained of (LRA s.96(2)). The OLRB has broad remedial authority —
              it may order reinstatement, compensation, cease and desist orders, and (in egregious
              cases) remedial certification without a vote.
            </p>

            <h2>Strikes and Lockouts</h2>
            <p>
              A strike is defined in LRA s.1 as a cessation of work, a refusal to work, or a
              refusal to continue to work by employees in combination or in concert or in
              accordance with a common understanding. A lockout is defined as the closing of
              a place of employment, a suspension of work, or a refusal by an employer to
              continue to employ employees for the purpose of compelling the employees to agree
              to conditions of employment.
            </p>
            <p>
              Strikes and lockouts are prohibited (LRA s.86) unless: (1) the collective
              agreement has expired; (2) conciliation/mediation has been exhausted (the
              Minister of Labour has issued a &quot;no-board&quot; report); and (3) the statutory
              notice periods have been observed. A strike vote is required — a majority of
              employees in the bargaining unit voting in favour in a secret ballot vote
              authorized by the OLRB.
            </p>
            <p>
              Essential services provisions in some sectors (hospitals, schools) restrict or
              prohibit the right to strike and provide for binding arbitration as the final
              dispute resolution mechanism.
            </p>

            <h2>Grievance Arbitration</h2>
            <p>
              Every collective agreement must contain an arbitration clause providing for the
              final and binding resolution of differences between the parties (LRA s.48). A
              &quot;grievance&quot; is an alleged violation of the collective agreement. Grievances
              are filed within the time limits specified in the collective agreement and proceed
              through a multi-step grievance procedure before proceeding to arbitration.
            </p>
            <p>
              Arbitrators are appointed under the collective agreement (single arbitrator or
              panel of three) and have broad authority to determine whether a violation has
              occurred and to fashion remedies including reinstatement, compensation, and
              directions to comply. Arbitration awards are final and binding and may be
              enforced in the courts. Appeals from arbitration awards go to the Divisional Court
              on questions of jurisdiction and are reviewed on the reasonableness standard for
              arbitral interpretations of the collective agreement.
            </p>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mt-8">
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Manage Labour Law Matters with Atticus
              </h3>
              <p className="text-slate-700 mb-4">
                Track OLRB application deadlines, arbitration hearing dates, grievance timelines,
                and collective bargaining files — all in one platform built for Ontario labour
                and employment lawyers.
              </p>
              <Link
                href="/sign-up"
                className="inline-block bg-slate-700 hover:bg-slate-800 text-white font-semibold px-6 py-3 rounded-lg transition"
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
