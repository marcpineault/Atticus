import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ontario Powers of Attorney: Continuing POA, Personal Care POA, and Capacity | Atticus Blog",
  description:
    "Complete guide to Ontario powers of attorney: Substitutes Decisions Act 1992, continuing POA for property, POA for personal care, capacity requirements, attorney duties, and the Office of the Public Guardian and Trustee.",
  openGraph: {
    title: "Ontario Powers of Attorney: Continuing POA, Personal Care POA, and Capacity",
    description:
      "Complete guide to Ontario POA law: Substitutes Decisions Act 1992, continuing POA for property, POA for personal care, capacity requirements, attorney duties, and OPGT.",
    type: "article",
    url: "https://getatticus.ca/blog/ontario-powers-of-attorney",
  },
  alternates: { canonical: "https://getatticus.ca/blog/ontario-powers-of-attorney" },
};

export default function OntarioPowersOfAttorneyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Ontario Powers of Attorney: Continuing POA, Personal Care POA, and Capacity",
            description:
              "Complete guide to Ontario powers of attorney under the Substitutes Decisions Act 1992: continuing POA for property, POA for personal care, capacity, attorney duties, and OPGT.",
            url: "https://getatticus.ca/blog/ontario-powers-of-attorney",
            datePublished: "2026-03-19",
            author: { "@type": "Organization", name: "Atticus" },
            publisher: {
              "@type": "Organization",
              name: "Atticus",
              logo: {
                "@type": "ImageObject",
                url: "https://getatticus.ca/logo.png",
              },
            },
          }),
        }}
      />
      <main className="min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <div className="mb-8">
            <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
              Estates &amp; Wills
            </span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
            Ontario Powers of Attorney: Continuing POA, Personal Care POA, and Capacity
          </h1>
          <p className="text-gray-500 text-sm mb-8">March 2026 &middot; 14 min read</p>

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Powers of attorney are among the most frequently drafted documents in Ontario wills and estate
            practice. The <em>Substitute Decisions Act, 1992</em>, SO 1992, c 30 (SDA) governs both the
            Continuing Power of Attorney for Property and the Power of Attorney for Personal Care. Getting
            the execution, capacity assessment, and attorney authority provisions right is essential —
            errors in POA documents create significant exposure for both the grantor and the drafting lawyer.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            1. Two Types of Ontario Power of Attorney
          </h2>
          <div className="overflow-x-auto mb-8">
            <table className="min-w-full border border-gray-200 rounded-lg text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">Type</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">Covers</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">Capacity Required</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">Witnesses</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-100">
                  <td className="px-4 py-3 font-medium text-gray-900">Continuing POA for Property</td>
                  <td className="px-4 py-3 text-gray-600">Financial affairs, property, legal matters</td>
                  <td className="px-4 py-3 text-gray-600">Capacity to grant property POA (s. 8)</td>
                  <td className="px-4 py-3 text-gray-600">Two witnesses (exceptions apply)</td>
                </tr>
                <tr className="border-t border-gray-100 bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-900">POA for Personal Care</td>
                  <td className="px-4 py-3 text-gray-600">Health care, shelter, clothing, nutrition, safety, hygiene</td>
                  <td className="px-4 py-3 text-gray-600">Capacity to grant personal care POA (s. 46)</td>
                  <td className="px-4 py-3 text-gray-600">Two witnesses (exceptions apply)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            2. Continuing Power of Attorney for Property
          </h2>
          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">2.1 Capacity to Grant</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Section 8 of the SDA sets out the capacity required to grant a continuing POA for property.
            The grantor must be capable of:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>Knowing what property they have and its approximate value</li>
            <li>Understanding that the attorney will be able to do on their behalf anything they could do personally in connection with property, except make a will</li>
            <li>Understanding that the attorney must account for their dealings with the grantor&apos;s property</li>
            <li>Understanding that they may, if capable, revoke the continuing POA</li>
            <li>Understanding that if the attorney does not manage the property prudently, the value may decline</li>
            <li>Understanding the possibility that the attorney could misuse authority</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-6">
            Capacity is assessed at the time the document is signed. A grantor who lacks full testamentary
            capacity or cognitive sharpness may still have capacity to grant a POA for property — the
            threshold is lower than testamentary capacity.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">2.2 Execution Requirements</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            A continuing POA for property must be:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>In writing</li>
            <li>Signed by the grantor in the presence of two witnesses, or signed by another person at the grantor&apos;s direction in the presence of the grantor and two witnesses</li>
            <li>Signed by the two witnesses in the presence of the grantor</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-6">
            Who cannot be a witness (s. 10(2)):
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>The attorney or the attorney&apos;s spouse or partner</li>
            <li>The grantor&apos;s spouse or partner</li>
            <li>A child of the grantor (or person the grantor has treated as a child)</li>
            <li>A person whose property is under guardianship</li>
            <li>A person who is less than 18 years of age</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-6">
            For the POA to continue to be effective after the grantor becomes incapable (&quot;continuing&quot;),
            the document must expressly state that it is a continuing POA. A POA that does not include
            this language is revoked by operation of law upon the grantor&apos;s incapacity.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">2.3 Scope of Authority</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            An attorney for property may do on behalf of the grantor anything the grantor could do
            in connection with their property, except make a will. This is an extremely broad authority.
            The SDA allows restrictions — practitioners frequently include express restrictions on:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>Gifting (limiting or prohibiting gifts to third parties, including the attorney)</li>
            <li>Making loans to third parties</li>
            <li>Changing beneficiary designations on registered plans</li>
            <li>Managing specific types of assets (real property, investments)</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">2.4 Attorney Duties</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Attorneys for property are subject to mandatory duties under ss. 38-40:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>
              <strong>Fiduciary duty (s. 38(1)):</strong> The attorney must act in the grantor&apos;s best interests
              and in accordance with the grantor&apos;s known wishes.
            </li>
            <li>
              <strong>Prudent investor standard (s. 38(3)):</strong> The attorney must exercise the care,
              diligence, and skill that a person of ordinary prudence would exercise in conducting their
              own affairs.
            </li>
            <li>
              <strong>Record-keeping (s. 38(5)):</strong> The attorney must keep accounts of all financial
              transactions — receipts, disbursements, and asset values.
            </li>
            <li>
              <strong>Separate property (s. 38(6)):</strong> The attorney must keep the grantor&apos;s property
              separate from the attorney&apos;s own property.
            </li>
            <li>
              <strong>Compensation (s. 40):</strong> An attorney may take compensation — 3% on capital and
              income receipts, 3% on capital and income disbursements, and 3/5 of 1% annual care and
              management fee — unless the POA specifies otherwise or the grantor agreed otherwise.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            3. Power of Attorney for Personal Care
          </h2>
          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">3.1 Capacity to Grant</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Section 46 sets a different — and lower — capacity threshold for personal care POAs. The
            grantor must:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>Be at least 16 years old</li>
            <li>Have the capacity to understand that the attorney will make personal care decisions on their behalf while they are incapable</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-6">
            This threshold is intentionally lower than the property POA threshold because personal care
            decisions are immediate and health-based, and the legislature wanted to encourage planning
            by people across a broad range of cognitive ability.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">3.2 Execution Requirements</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            A personal care POA must be signed by the grantor and two witnesses, with the same witness
            exclusions as the property POA — plus one additional exclusion: a person who provides health
            care, residential, social, training, or support services to the grantor for compensation
            cannot be a witness.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Unlike property POAs, personal care POAs automatically continue during incapacity — they
            are, by their nature, intended to activate when the grantor becomes incapable. There is no
            need to include &quot;continuing&quot; language.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">3.3 Instructions and Wishes</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            The SDA permits the grantor to include instructions and expressed wishes in the personal
            care POA. These become binding on the attorney under s. 66(3): an attorney for personal care
            must follow the grantor&apos;s prior capable instructions. If the instructions create a risk of
            serious bodily harm, the attorney may apply to the court for direction.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Practitioners frequently include a &quot;wish not to receive life-sustaining treatment&quot; clause
            and advance directives about resuscitation, artificial nutrition, and palliative care. These
            are not separately enforceable outside the personal care POA framework in Ontario — there
            is no separate &quot;living will&quot; or &quot;advance directive&quot; legislation.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">3.4 Attorney Duties for Personal Care</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Attorneys for personal care must act under ss. 66-68:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>Act in the grantor&apos;s best interests</li>
            <li>Consider the grantor&apos;s prior capable wishes, values, and beliefs</li>
            <li>Choose the least restrictive and least intrusive course of action</li>
            <li>Encourage the grantor&apos;s participation in decisions to the extent possible</li>
            <li>Foster regular personal contact with supportive family members and friends</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-6">
            The attorney for personal care is not compensated from the grantor&apos;s property — this is
            a personal service role. The court may award compensation in exceptional circumstances.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            4. When the POA Becomes Effective
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            A continuing POA for property takes effect when signed unless it specifies a future date or
            condition. A common drafting option is to specify that the POA only takes effect upon
            incapacity — reducing the risk of misuse while the grantor is still capable. The grantor
            may choose a &quot;springing&quot; POA that activates only upon a capacity assessment confirming incapacity.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            A personal care POA takes effect when the grantor becomes incapable. An attorney for personal
            care may not act while the grantor has capacity to make the relevant personal care decision.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            5. Revocation and Termination
          </h2>
          <div className="overflow-x-auto mb-8">
            <table className="min-w-full border border-gray-200 rounded-lg text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">Event</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">Property POA</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">Personal Care POA</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-100">
                  <td className="px-4 py-3 font-medium text-gray-900">Death of grantor</td>
                  <td className="px-4 py-3 text-gray-600">Terminates (estate trustee takes over)</td>
                  <td className="px-4 py-3 text-gray-600">Terminates</td>
                </tr>
                <tr className="border-t border-gray-100 bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-900">Revocation while capable</td>
                  <td className="px-4 py-3 text-gray-600">In writing, signed, witnessed</td>
                  <td className="px-4 py-3 text-gray-600">In writing, signed, witnessed (or any other manner that communicates intention)</td>
                </tr>
                <tr className="border-t border-gray-100">
                  <td className="px-4 py-3 font-medium text-gray-900">Court order</td>
                  <td className="px-4 py-3 text-gray-600">Court may terminate on application</td>
                  <td className="px-4 py-3 text-gray-600">Court may terminate on application</td>
                </tr>
                <tr className="border-t border-gray-100 bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-900">Death of sole attorney</td>
                  <td className="px-4 py-3 text-gray-600">Terminates (OPGT may step in)</td>
                  <td className="px-4 py-3 text-gray-600">Terminates (OPGT may step in)</td>
                </tr>
                <tr className="border-t border-gray-100">
                  <td className="px-4 py-3 font-medium text-gray-900">Guardian appointed</td>
                  <td className="px-4 py-3 text-gray-600">Terminates or coexists depending on order</td>
                  <td className="px-4 py-3 text-gray-600">Terminates if guardian appointed for personal care</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            6. The Office of the Public Guardian and Trustee (OPGT)
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The OPGT is the statutory default decision-maker of last resort. It acts as:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>
              <strong>Statutory guardian of property:</strong> Where a person is found incapable under a
              formal capacity assessment and no attorney for property exists, the OPGT becomes the statutory
              guardian automatically. A family member may apply to the OPGT to displace the OPGT and become
              the guardian.
            </li>
            <li>
              <strong>Statutory decision-maker for personal care:</strong> In the hierarchy of substitute
              decision-makers under the Health Care Consent Act, the OPGT is the last resort when no other
              qualified SDM exists.
            </li>
            <li>
              <strong>Investigative function:</strong> The OPGT investigates allegations of financial
              exploitation of incapable adults and may apply to court for remedies including repayment of
              misappropriated funds.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            7. Common Drafting Issues
          </h2>
          <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
            <li>
              <strong>Missing &quot;continuing&quot; language:</strong> A POA for property without express &quot;continuing&quot;
              language is automatically revoked by incapacity, defeating the grantor&apos;s intent.
            </li>
            <li>
              <strong>Inadequate gifting restrictions:</strong> An unrestricted POA allows the attorney to
              make gifts (even to themselves). The default rule allows gifts consistent with the grantor&apos;s
              known pattern of giving. Practitioners should expressly address gifting — especially where
              there is any concern about the attorney misusing authority.
            </li>
            <li>
              <strong>No substitute attorney:</strong> If the named attorney dies, becomes incapacitated,
              or refuses to act, the POA may lapse. Always name a substitute attorney.
            </li>
            <li>
              <strong>Conflict between property and personal care attorneys:</strong> Where different
              individuals hold each POA, ensure clients understand that cooperation is required. Conflicts
              between the two attorneys — particularly over care placement vs. financial cost — can be
              disabling.
            </li>
            <li>
              <strong>Multiple attorneys:</strong> If multiple attorneys are appointed jointly, all must
              agree on every decision — potentially paralyzing. &quot;Jointly and severally&quot; or &quot;majority&quot;
              provisions avoid this problem.
            </li>
            <li>
              <strong>Springing POA logistics:</strong> A property POA that springs on incapacity requires
              a formal capacity assessment before taking effect. This can delay urgent action. Consider
              whether the grantor prefers an immediately effective POA with appropriate safeguards.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            8. Capacity Disputes and Challenges
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Disputes about whether a grantor had capacity at the time of execution are common in estates
            litigation. The key principles:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>
              <strong>Presumption of capacity:</strong> Adults are presumed capable unless the contrary
              is established. The burden of proving incapacity rests on the challenger.
            </li>
            <li>
              <strong>Point in time assessment:</strong> Capacity is assessed as at the moment of signing.
              Fluctuating capacity (common in dementia) means capacity may exist at some times but not others.
            </li>
            <li>
              <strong>Medical evidence:</strong> Expert evidence from a geriatric psychiatrist or neurologist
              is typically required in capacity challenges. Medical records from around the time of execution
              are critical.
            </li>
            <li>
              <strong>Contemporaneous notes:</strong> Lawyers who take notes of a capacity assessment at
              the time of execution — recording their observations, the grantor&apos;s answers to capacity-testing
              questions, and their overall assessment — are in a much stronger position if challenged. These
              notes should be retained permanently.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            Conclusion
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Powers of attorney are the most consequential documents many clients will ever sign —
            more immediately impactful than wills during their lifetime. Lawyers who take the time to
            assess capacity carefully, draft appropriate restrictions, name substitute attorneys, and
            document the execution process protect their clients, themselves, and the integrity of the
            planning process.
          </p>

          <div className="mt-16 p-8 bg-green-50 rounded-2xl border border-green-100">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Manage Wills and POA Files with Atticus
            </h3>
            <p className="text-gray-600 mb-6">
              Estate planning matters require careful client management, deadline tracking for limitation
              periods, and trust accounting for estate funds. Atticus helps Ontario wills and estate lawyers
              stay organized and compliant — from intake through to completion — in one LSO-compliant platform.
            </p>
            <a
              href="/sign-up"
              className="inline-block bg-green-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              Start Free Trial
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
