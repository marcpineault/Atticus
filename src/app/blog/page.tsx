import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Atticus Blog — Insights for Ontario Law Firms",
  description:
    "Practice management insights, AI for lawyers, Ontario limitation periods, trust accounting, and LSO compliance guides for Ontario solo and small law firms.",
  openGraph: {
    title: "Atticus Blog — Insights for Ontario Law Firms",
    description: "Practice management insights, AI for lawyers, and Ontario legal compliance guides.",
    type: "website",
    url: "https://getatticus.ca/blog",
  },
  alternates: { canonical: "https://getatticus.ca/blog" },
};

const POSTS = [
  {
    slug: "ontario-criminal-law-sentencing",
    title: "Ontario Criminal Law — Sentencing Principles, Pre-Sentence Reports, and Appeals",
    excerpt:
      "Criminal Code RSC 1985 c C-46 ss.718-718.2 sentencing objectives (denunciation/deterrence/separation/rehabilitation/reparation/responsibility); proportionality s.718.1 fundamental principle R v Lacasse 2015 SCC 64 cardinal; aggravating factors s.718.2(a) (hate motivation/spousal abuse/youth victim/position of trust/criminal organization/terrorism); mitigating factors (guilty plea/remorse/first offence/collateral consequences); parity s.718.2(b); totality s.718.2(c); Gladue principles s.718.2(e) R v Gladue [1999] 1 SCR 688 R v Ipeelee 2012 SCC 13 (systemic/background factors intergenerational trauma; appropriate sanctions Indigenous heritage; applies at every hearing regardless seriousness; Gladue report); pre-sentence reports s.721 (character/behaviour/history/rehabilitation prospects; youth mandatory YCJA; challenge available); conditional sentences s.742.1 (less than 2 years; not minimum imprisonment; safety of community; mandatory conditions s.742.3; restricted by Safe Streets and Communities Act SC 2012 c 1); dangerous offender s.753 (pattern behaviour serious personal injury; indeterminate sentence); long-term offender s.753.1 (LTSO up to 10 years); sentencing appeals (demonstrably unfit standard R v Shropshire [1995] 4 SCR 227; broad appellate power to vary).",
    date: "March 2026",
    readTime: "16 min read",
    tag: "Criminal Law",
  },
  {
    slug: "ontario-family-law-divorce",
    title: "Ontario Family Law — Divorce Act, Property Division, and Support",
    excerpt:
      "Divorce Act RSC 1985 c 3 (2nd Supp) (as amended 2021; sole ground marriage breakdown s.8: 1-year separation/adultery/cruelty; decision-making responsibility + parenting time replacing custody/access Bill C-78; best interests s.16(1) primary consideration safety/security/well-being; family violence s.16(4) factors); child support Federal Child Support Guidelines SOR/97-175 (table amounts paying parent income/province; s.7 special and extraordinary expenses proportionate; shared parenting 40%+ time s.9); spousal support s.15.2 DA (compensatory economic disadvantage/non-compensatory need; objectives self-sufficiency; SSAG advisory ranges Moge v Moge [1992] 3 SCR 813 Bracklow v Bracklow [1999] 1 SCR 420); property division Family Law Act RSO 1990 c F.3 Part I equalization NFP (NFP = property on valuation date minus debts minus property at marriage; valuation date earliest separation/divorce/death; equalization payment = (Higher − Lower NFP)/2); exclusions s.4(2) (gifts/inheritances/personal injury/life insurance/domestic contract exclusions; matrimonial home NOT excluded s.4(1)(a)); matrimonial home Part II (no disposition without consent s.21; equal possession s.19; exclusive possession s.24); common-law spouses unjust enrichment Kerr v Baranow 2011 SCC 10 joint family venture; domestic contracts (marriage/cohabitation/separation s.52-54; set aside s.56(4) non-disclosure LeVan v LeVan 2008 ONCA 388).",
    date: "March 2026",
    readTime: "17 min read",
    tag: "Family Law",
  },
  {
    slug: "ontario-corporate-law",
    title: "Ontario Corporate Law — Business Corporations Act, Directors, Shareholders, and Fundamental Changes",
    excerpt:
      "Business Corporations Act RSO 1990 c B.16 (OBCA; separate legal personality Salomon v Salomon [1897] AC 22; corporate veil lifting fraud/evasion Transamerica Life 1996 ONCA); incorporation (Articles; private corporation s.1(1) transfer restrictions/50-shareholder limit/no public offerings; Securities Act exemptions NI 45-106); directors fiduciary duty s.134(1)(a) honest/good faith/best interests BCE Inc v 1976 Debentureholders 2008 SCC 69 broader stakeholder interests; duty of care s.134(1)(b) objective reasonably prudent; business judgment rule Maple Leaf Foods 1998 ONCA deference; statutory liability (wages s.131 6-months joint and several; unlawful dividends s.38; tax withholding ITA s.227.1/ETA s.323 due diligence); shareholders (voting/dividends/dissent/records/meeting rights); oppression remedy s.248 BCE two-part test (reasonable expectation/oppressive unfairly prejudicial unfair disregard; broad remedies); derivative actions s.246 (14-day notice/good faith/interests of corporation); shareholders agreements (ROFR/drag-along/tag-along/shotgun/deadlock); fundamental changes (special resolution 2/3 majority; amalgamation s.175; arrangement s.182 court approval; sale all assets s.184; dissent rights s.185 fair value); dissolution s.238/240 (just and equitable; liquidation priority).",
    date: "March 2026",
    readTime: "16 min read",
    tag: "Corporate Law",
  },
  {
    slug: "ontario-landlord-tenant-law",
    title: "Ontario Landlord and Tenant Law — RTA, LTB Applications, and Eviction Process",
    excerpt:
      "Residential Tenancies Act SO 2006 c 17 (LTB exclusive jurisdiction s.168; RTA exemptions owner-occupied s.5(i)); rent control pre-Nov 15 2018 tenancies annual guideline s.120; post-Nov 15 2018 new units exempt from rent control O. Reg. 516/06 s.6.2; Above Guideline Increases s.126 (extraordinary municipal tax increase/capital expenditures/security services; phase-in up to 3 years); N-series notices (N4 non-payment 14-day voidable; N5 substantial interference 20-day void period first; N6 illegal act no void; N7 safety 10-day no void; N8 persistent late payment 60-day; N12 own use 60-day 1-month compensation; N13 demolition 120-day 3-months compensation); LTB applications (L1 arrears/L2 all grounds/L9 monetary only; T1 rent reduction/T2 rights/T6 maintenance); eviction process (Sheriff enforcement; no self-help eviction; s.83 LTB discretion to postpone); maintenance s.20 (good state of repair; fit for habitation; T6 abatement); appeals Divisional Court s.210 questions of law; Commercial Tenancies Act RSO 1990 c L.7 (distress available; no LTB rights).",
    date: "March 2026",
    readTime: "15 min read",
    tag: "Landlord & Tenant Law",
  },
  {
    slug: "ontario-tort-law",
    title: "Ontario Tort Law — Negligence, Occupiers\u2019 Liability, and Defamation",
    excerpt:
      "Negligence (duty/breach/damage/causation); Anns/Cooper two-stage duty of care test Cooper v Hobart 2001 SCC 79 (reasonable foreseeability + proximity Stage 1; policy Stage 2); negligent misrepresentation Queen v Cognos [1993] 1 SCR 87 five-part test; standard of care objective reasonable person Bolton v Stone probability/magnitude/cost; professional standard ter Neuzen v Korn [1995] 3 SCR 674; causation but-for test Clements v Clements 2012 SCC 32; material contribution to risk exception; loss of chance Laferrière v Lawson [1991] 1 SCR 541; contributory negligence Negligence Act RSO 1990 c N.1 s.3 proportionate apportionment joint and several liability; Occupiers Liability Act RSO 1990 c O.2 s.3(1) single duty of care Waldick v Malcolm [1991] 2 SCR 456 modification limits; trespassers s.4; defamation (publication/reference/reputation Sim v Stretch [1936]; per se; defences truth/fair comment/absolute privilege/qualified privilege/responsible communication Grant v Torstar 2009 SCC 61; Defamation Act RSO 1990 c D.6 6-week notice; anti-SLAPP Protection of Public Participation Act SO 2015); nuisance (reasonable interference/locality; Rylands v Fletcher (1868) strict liability Tock [1989] 2 SCR 1181).",
    date: "March 2026",
    readTime: "15 min read",
    tag: "Tort Law",
  },
  {
    slug: "ontario-contract-law",
    title: "Ontario Contract Law — Formation, Terms, Breach, and Remedies",
    excerpt:
      "Contract formation (offer/acceptance/consideration/certainty/intention/capacity); offer vs invitation to treat Carlill v Carbolic Smoke Ball [1893] 1 QB 256; revocation Byrne v Van Tienhoven; postal acceptance rule; consideration must move from promisee Dunlop v Selfridge [1915] AC 847; past consideration Re McArdle [1951]; promissory estoppel High Trees shield not sword John Burrows [1968] SCR 607; intention to create legal relations Balfour v Balfour [1919] commercial presumption binding Bawitko 1991 ONCA; terms conditions/warranties/innominate Hong Kong Fir [1962] 2 QB 26; implied terms Sale of Goods Act RSO 1990 c S.1 merchantable quality fitness; exemption clauses incorporation/interpretation/unconscionability Tercon Contractors v BC 2010 SCC 4 three-stage analysis; anticipatory breach Hochster v De la Tour (1853); frustration Davis Contractors [1956] AC 696 radical difference; Frustrated Contracts Act RSO 1990 c F.34 consequences; damages Robinson v Harman expectation; remoteness Hadley v Baxendale (1854) two-limb test; mitigation; specific performance Semelhago v Paramadevan [1996] 2 SCR 415 unique property; unjust enrichment Garland v Consumers Gas 2004 SCC 25 three-part test; Consumer Protection Act SO 2002 s.9 waiver void/unfair practices rescission.",
    date: "March 2026",
    readTime: "16 min read",
    tag: "Contract Law",
  },
  {
    slug: "ontario-civil-procedure",
    title: "Ontario Civil Procedure — Rules of Civil Procedure, Pleadings, Discoveries, and Motions",
    excerpt:
      "Rules of Civil Procedure RRO 1990 Reg 194 (Courts of Justice Act RSO 1990 c C.43; Rule 1.04 just/expeditious/least expensive; originating process Statement of Claim vs Application Rule 38); pleadings Rules 25-30 (material facts not evidence Rule 25.06(1); fraud specifically pleaded Rule 25.06(8); strike pleadings Rule 25.11 plain and obvious Hunt v Carey [1990] 2 SCR 959); documentary discovery Rule 30 (Affidavit of Documents Form 30A Schedules A/B/C; solicitor-client vs litigation privilege Blank v Canada 2006 SCC 39 dominant purpose; Sedona Canada Principles e-discovery proportionality); examinations for discovery Rule 31 (one individual per corporate party; undertakings; admissions admissible at trial; impeachment with transcript); motions Rules 37/39 (Notice of Motion/Affidavit; cross-examination on affidavits Rule 39.02; interlocutory injunction RJR-MacDonald [1994] 1 SCR 311 three-part test; undertaking as to damages; Mareva/Anton Piller); summary judgment Rule 20 (Hryniak v Mauldin 2014 SCC 7 genuine issue requiring trial; enhanced powers weigh evidence/credibility; partial summary judgment caution Butera 2017 ONCA 783); costs Rule 57 (costs follow event; partial indemnity 50-65%; substantial indemnity 90% bad faith; Rule 49 offers to settle cost consequences); mandatory mediation O. Reg. 258/98 (Toronto/Ottawa/Windsor 180 days); case management Rule 77.",
    date: "March 2026",
    readTime: "17 min read",
    tag: "Civil Litigation",
  },
  {
    slug: "ontario-professional-responsibility",
    title: "Ontario Professional Responsibility — LSO Rules of Professional Conduct and Paralegal Rules",
    excerpt:
      "LSO Rules of Professional Conduct (Law Society Act RSO 1990 c L.8; s.4.2 public interest mandate); competence Rule 3.1 (legal knowledge/skill/thoroughness; referral obligation; 12-hour CPD 3 professionalism hours); confidentiality Rule 3.3 (broader than solicitor-client privilege; all information from representation; Descoteaux v Mierzwinski [1982] 1 SCR 860 privilege three-part test; Solosky permanent; Blank v Canada 2006 SCC 39 litigation privilege temporary; Smith v Jones [1999] 1 SCR 455 safety exception; fraud exception Rule 3.3-3(c)); conflicts Rule 3.4-3.6 (current clients; former clients same/related matter; joint retainer Rules 3.4-5 through 3.4-11 no confidentiality between joint clients; MacDonald Estate v Martin [1990] 3 SCR 1235 transferred lawyer presumption; screen rebuts); candour Rule 5.1 (no false statements; disclose adverse authority Rule 5.1-3; client perjury Rule 5.1-6 tribunal disclosure overrides confidentiality); withdrawal Rule 3.7 (mandatory vs permissive; leave of court on litigation; minimize prejudice); fees Rule 3.6 (fair and reasonable; written retainer; Solicitors Act RSO 1990 c S.15 contingency O. Reg. 195/04); marketing Rule 4.2 (testimonials permitted; prior results caveat; no false/misleading); LSO discipline (complaint/investigation/hearing panel balance of probabilities; sanctions range reprimand to disbarment; s.38 spot trust audits).",
    date: "March 2026",
    readTime: "16 min read",
    tag: "Professional Responsibility",
  },
  {
    slug: "ontario-real-estate-transactions",
    title: "Ontario Real Estate Transactions — Land Transfer, Title, and Closing Procedures",
    excerpt:
      "Land Titles Act RSO 1990 c L.5 (Torrens system; indefeasible title; overriding interests s.44(1); Land Titles Assurance Fund) vs Registry Act RSO 1990 c R.20 (40-year root of title; no government guarantee); ELRS Teraview electronic registration O. Reg. 19/99 lawyer certification obligations; title insurance (FCT/Stewart/TitlePlus; survey defects/fraud/zoning non-compliance/open permits); Land Transfer Tax Act RSO 1990 c L.6 (0.5%–2.5% progressive rates; Toronto MLTT double; first-time buyer rebate to $4,000; HST new home rebates ETA); title searches (parcel register/executions/Planning Act compliance/realty tax/open permits); OREA APS Form 100/101 (conditions/irrevocability/fixtures vs chattels/requisition deadline 30 days); requisition practice (title vs non-title defects; waiver after deadline); Mortgages Act RSO 1990 c M.40 (power of sale s.32; foreclosure rare); closing by documents against undertakings (discharge undertaking 30 days; Statement of Adjustments); Condominium Act SO 1998 c 19 Status Certificate s.76 (common expenses/reserve fund/special assessments/litigation; 10-day cooling-off s.73 new builds).",
    date: "March 2026",
    readTime: "15 min read",
    tag: "Real Estate Law",
  },
  {
    slug: "ontario-municipal-law",
    title: "Ontario Municipal Law — Planning Act, Zoning, Minor Variances, and the OLT",
    excerpt:
      "Planning Act RSO 1990 c P.13 (PPS 'consistent with' standard; Bill 23 More Homes Built Faster Act 2022); official plans (five-year review s.26; OPA statutory public meeting s.17; restricted appeal rights Bill 23); zoning by-laws (ZBA applications statutory public meeting s.34(12); Holding zones; Temporary Use By-Laws s.39); minor variances s.45 Committee of Adjustment four-part test (general intent OP/general intent ZBL/desirable for appropriate development/minor; 20-day appeal to OLT); consent to sever s.53 (divide parcel; CoA consent authority; conditions); Development Charges Act SO 1997 c 27 (growth-related capital costs; Bill 23 discounts purpose-built rentals/non-profit/intensification); Ontario Land Tribunal OLT (established June 2021 consolidating LPAT/Conservation Review Board/ERT environmental/ARB/Mining and Lands Tribunal; SPPA RSO 1990 c S.22; Bill 23 narrowed appeal rights for housing-supportive applications).",
    date: "March 2026",
    readTime: "13 min read",
    tag: "Municipal Law",
  },
  {
    slug: "ontario-labour-law",
    title: "Ontario Labour Law — Labour Relations Act, Collective Bargaining, and OLRB",
    excerpt:
      "Labour Relations Act SO 1995 c 1 Sch A (OLRB administers; private sector and certain provincial public sector; federal jurisdiction employees Canada Labour Code Part I CIRB; sector-specific: Crown Employees/Hospital Labour Disputes/School Boards); organizing certification (s.5 right to join; 40% cards threshold; 40-55% representation vote; 55%+ automatic certification card-based; OLRB determines appropriate bargaining unit community of interest); collective bargaining s.17 (duty to bargain in good faith; meet at reasonable times/reasonable proposals/detailed responses/no surface bargaining; notice 15 days; first contract arbitration if impasse); collective agreement must contain arbitration clause s.48; unfair labour practices Part II (employer interference s.70/intimidation s.72/reprisal s.74; union coercion s.76; three-month filing deadline s.96(2); remedies: reinstatement/compensation/cease and desist/remedial certification); strikes and lockouts s.86 (prohibited unless expired CA/no-board report/strike vote majority secret ballot; essential services binding arbitration); grievance arbitration (every CA s.48; multi-step procedure; broad arbitral remedies; final and binding; Divisional Court reasonableness review).",
    date: "March 2026",
    readTime: "14 min read",
    tag: "Labour Law",
  },
  {
    slug: "ontario-human-rights-tribunal",
    title: "Ontario Human Rights Tribunal — Filing Applications, Remedies, and Procedure",
    excerpt:
      "Human Rights Code RSO 1990 c H.19 (grounds: race/ancestry/place of origin/colour/ethnic origin/citizenship/creed/sex/sexual orientation/age/marital status/family status/disability/receipt of public assistance; social areas: services/accommodation/contracts/employment); duty to accommodate undue hardship Central Alberta Dairy Pool [1990] 2 SCR 489 (cost/outside funding/health and safety); Meiorin test BCGSEU [1999] 3 SCR 3 BFOR (rational connection/honest belief/reasonably necessary impossible to accommodate without undue hardship); direct access January 2008 HRTO directly (OHRC retains public interest functions); one-year limitation s.34 (public interest extension; delay/prejudice/merits); HRTO procedure (mediation/preliminary hearing/s.45.3 screening/full oral hearing prima facie case then burden shifts); interim relief s.45.9 (serious question/irreparable harm/balance of convenience; reinstatement/interim accommodation); remedies s.45.2 (general damages injury to dignity/monetary loss wages/reinstatement/public interest policies and training/non-monetary); no costs as of course s.45.5; civil action Superior Court Code s.46.1 cannot pursue concurrent HRTO and civil; Honda Canada 2008 SCC 39 bad faith conduct; judicial review Divisional Court JRPA reasonableness Vavilov/procedural fairness correctness.",
    date: "March 2026",
    readTime: "13 min read",
    tag: "Human Rights",
  },
  {
    slug: "ontario-environmental-law",
    title: "Ontario Environmental Law — EPA, Spills Liability, and the ERT",
    excerpt:
      "Environmental Protection Act RSO 1990 c E.19 (general prohibition s.14 adverse effect discharge contaminant; adverse effect defined impairment/injury/harm/loss of enjoyment/interference; MECP administered; ECA Environmental Compliance Approval formerly C of A; ERT appeals public interest s.145.2.1); spills liability Part X ss.92-99 (spill abnormal discharge of pollutant; report immediately s.92; strict liability s.99 owner/person in charge/control of pollutant + person in charge of undertaking + land owner; R v Bata Industries 1992 7 OR (3d) 615 due diligence framework); director/officer liability EPA s.194 (directed/authorized/assented/acquiesced/participated; due diligence defence Bata minimum standard corporate structure/regular reports/corrective action/no ignorance defence); Ontario Water Resources Act RSO 1990 c O.40 (s.30 impair water quality; s.30A strict liability; Permit to Take Water 50,000 litres/day threshold); Endangered Species Act SO 2007 c 6 (s.9 prohibit killing/harming/harassing listed threatened/endangered; s.10 habitat destruction; MECP permits with conditions/mitigation/offsetting); Impact Assessment Act SC 2019 c 28 (Reference re Impact Assessment Act 2023 SCC 23 constitutional limits); environmental due diligence real estate (Phase I ESA CSA Z768-01 RECs/Phase II soil groundwater; RSC Record of Site Condition O.Reg. 153/04 change in land use; representations warranties indemnification).",
    date: "March 2026",
    readTime: "13 min read",
    tag: "Environmental Law",
  },
  {
    slug: "ontario-immigration-law",
    title: "Ontario Immigration Law — IRPA, Express Entry, and Refugee Claims",
    excerpt:
      "IRPA SC 2001 c 27 (economic/family/protection classes; IRCC processes; CBSA enforcement); Express Entry (launched January 2015; FSWP/CEC/FSTP; CRS score age/education/language IELTS CELPIP/Canadian experience/adaptability; ITA draws; category-based draws 2023 occupational/French; six-month processing target; FSWP NOC TEER 0-3 one year full-time skilled work 10 years/CLB 7/ECA/settlement funds); OINP Ontario Immigrant Nominee Program (Human Capital Priorities stream; Employer Job Offer streams; Entrepreneur; French-Speaking Skilled Worker; 600 CRS points on nomination); work permits (LMIA ESDC positive assessment TFWP; LMIA-exempt IMP intra-company IRPR s.205(a)/significant benefit s.205(b)/CUSMA US Mexican/PGWP/spousal open work permit); spousal sponsorship (LICO minimum income; genuine relationship documentary evidence; interview genuine purpose; misrepresentation s.40 inadmissibility five-year bar); refugee claims Part 2 (RPD first instance/RAD appeal; Convention refugee s.96 well-founded fear persecution race/religion/nationality/political opinion/particular social group Ward [1993] 2 SCR 689; person in need of protection s.97 torture/risk to life; reasonable chance test Adjei [1989]; PRRA s.112; Federal Court s.72 leave required reasonableness Huruglica 2016 FCA 93).",
    date: "March 2026",
    readTime: "14 min read",
    tag: "Immigration Law",
  },
  {
    slug: "ontario-wills-trusts-law",
    title: "Ontario Wills and Trusts Law — Wills Act, Estate Litigation, and Substitute Decisions",
    excerpt:
      "Wills Act RSO 1990 c W.11 (in writing/signed at end/two witnesses present at same time subscribed in testator&apos;s presence; holograph will s.6 entirely handwritten no witnesses; international will Annex Washington Convention); testamentary capacity Banks v Goodfellow (1870) LR 5 QB 549 (nature and effects of will/extent of property/claims of persons who might benefit/no disorder poisoning affections; lucid interval; Banton v Banton 1998 Ontario); undue influence Hall v Hall (1868) LR 1 P&D 481 (coercion not mere persuasion; suspicious circumstances shift burden; propounding party must show knowledge approval no undue influence); SLRA RSO 1990 c S.26 Part V dependant support s.57-72 (spouse/parent/child/sibling receiving or entitled to support; inadequate provision; s.62 factors: dependant&apos;s means/relationship/size of estate/moral claims/agreements/reasons; six-month limitation s.61 from grant of probate); Substitute Decisions Act SO 1992 c 30 (continuing POA for property s.7 valid on incapacity; POA for personal care s.46 health/shelter/nutrition/hygiene/safety; two witness requirements s.10(1); OPGT statutory guardian); certificate of appointment (probate necessary for land/bank accounts/RRSP not passing outside estate; estate administration tax 1.5% over $50,000; Estate Information Return 180 days).",
    date: "March 2026",
    readTime: "14 min read",
    tag: "Wills & Estates",
  },
  {
    slug: "ontario-bankruptcy-insolvency-law",
    title: "Ontario Bankruptcy and Insolvency Law — BIA, CCAA, and Creditor Remedies",
    excerpt:
      "BIA RSC 1985 c B-3 (federal jurisdiction s.91(21); voluntary assignment Form 76 s.49/petition $1,000 creditor acts of bankruptcy s.42-43; estate vests in LIT; Ontario exemptions: principal residence $10,000 equity/personal property $5,650/vehicle $5,650/tools $11,300/RRSP 12+ months/life insurance designated beneficiary); consumer proposals s.66.11 (individual $250,000 excluding principal residence mortgage; majority in number and value unsecured creditors/deemed accepted 45 days; up to five years; certificate of full performance discharges unsecured debts); proof of claim Form 31 s.124 (30 days before first meeting or 30 days after order; secured creditors disclose security value; LIT disallow appeal s.135); fraudulent preferences s.95 (insolvent debtor/intent to prefer/three months/12 months non-arm&apos;s-length); transactions at undervalue s.96 (one year/five years non-arm&apos;s-length; no consideration/grossly inadequate); Fraudulent Conveyances Act RSO 1990 c F.29; CCAA RSC 1985 c C-36 ($5,000,000 claims; initial order stay + Monitor LIT + DIP super-priority; two-thirds value + majority number per class; sanctioned by court fair and reasonable); priority BIA s.136 (administration costs/levy/wages $2,000 six months/municipal taxes/landlord preferred/unsecured pro rata; secured creditors outside estate realize security independently).",
    date: "March 2026",
    readTime: "14 min read",
    tag: "Insolvency Law",
  },
  {
    slug: "ontario-intellectual-property-law",
    title: "Ontario Intellectual Property Law — Copyright, Trademarks, and Patents",
    excerpt:
      "Copyright Act RSC 1985 c C-42 (automatic protection fixed original work; life plus 70 years amended December 2022 CUSMA; first owner author/employer for service contract s.13(3); moral rights integrity/attribution s.14.1 waivable not assignable; fair dealing CCH Canadian 2004 SCC 13 six factors research/private study/education/parody/criticism/news; Alberta Education 2012 SCC 37 user right); Trademarks Act RSC 1985 c T-13 2014 amendments (registration CIPO exclusive use throughout Canada s.19; Nice Classification; 10-year term renewable; s.45 non-use three years expungement; use s.4 normal course of trade; passing off Ciba-Geigy [1992] goodwill/misrepresentation/damage); Patent Act RSC 1985 c P-4 (20-year exclusive right from filing; novel s.28.2/non-obvious s.28.3/useful AstraZeneca 2017 SCC 36; first-to-file 1989; 12-month grace period/12-month public disclosure deadline; patentable: art/process/machine/manufacture/composition of matter; not: mathematical formulas/higher life forms); Industrial Design Act (visual features 10-year protection two 5-year periods; CIPO registration within 12 months of publication); trade secrets breach of confidence Lac Minerals [1989] 2 SCR 574 (confidential/circumstances importing confidence/unauthorized use to detriment; NDAs/employment agreements/access controls/injunctions).",
    date: "March 2026",
    readTime: "14 min read",
    tag: "IP Law",
  },
  {
    slug: "ontario-tax-law",
    title: "Ontario Tax Law — Income Tax Act, HST/GST, and Corporate Tax",
    excerpt:
      "ITA RSC 1985 c 1 5th Supp (income from source employment/business/property; capital gains inclusion rate one-half increased two-thirds post-June 24 2024 corporations Budget 2024 proposal; Division B net income/Division C taxable income/Division E tax calculation); corporate tax rates (CCPC small business 9% federal + 3.2% Ontario = 12.2% combined on first $500,000; general rate 15% + 11.5% = 26.5% combined; investment income RDTOH mechanism Part IV 38.67% refundable); Ontario individual top marginal rate ~53.53% combined (federal 33% + Ontario 20.53% with surtax); HST/GST Excise Tax Act RSC 1985 c E-15 (13% Ontario; $30,000 registration threshold; legal services taxable; ITCs on inputs four-year claim period; trust account HST on billing not receipt; disbursements as agent vs law firm expense); trust account reporting (T3 trust returns income $500+; T3 bare trust expansion 2024/2025; PCMLTFA designated reporting entity; FINTRAC large cash $10,000; structuring); CRA objection ITA s.165 90 days from assessment; Tax Court informal $25,000 or general procedure; appeal Federal Court of Appeal; normal reassessment period three years/four years non-CCPC; fraud/neglect unlimited; VDP voluntary disclosure program.",
    date: "March 2026",
    readTime: "13 min read",
    tag: "Tax Law",
  },
  {
    slug: "ontario-construction-law",
    title: "Ontario Construction Law — Construction Act, Liens, and Prompt Payment",
    excerpt:
      "Construction Act RSO 1990 c C.30 (as amended 2017 Building Ontario Up for Everyone Act; major amendments in force October 1 2019 lien/holdback and July 1 2018 prompt payment/adjudication); holdback 10% price of services/materials s.22 (45 days after publication of CSP or last day preservation period; subholdback rules ss.22-28); substantial performance s.2 (ready for use/capable of completion at cost not more than 3%/2%/1% of tiered contract price; CSP published contractor in trade newspaper within 5 days s.32(1)); lien preservation s.31 (60 days after last supply services/materials general rule; 45 days after CSP publication; preservation by registration Form 1 Land Titles Act/Registry Act); perfection within 90 days of preservation (commence action Superior Court + register certificate of action); prompt payment Part I.1 (proper invoice; owner to contractor 28 days; contractor to subcontractor 7 days after payment or 35 days from invoice; notice of non-payment 14 days owner/7 days contractor); adjudication Part II.1 ODACC (any time during project or within 90 days substantial performance; determination 30 days binding interim; amounts payable/non-payment/set-off); trust provisions Part II s.8-8.1 (statutory trust on construction funds; no separate account required; breach of trust personal liability directing minds).",
    date: "March 2026",
    readTime: "14 min read",
    tag: "Construction Law",
  },
  {
    slug: "ontario-insurance-law",
    title: "Ontario Insurance Law — SABS, Auto Insurance, and the Insurance Act",
    excerpt:
      "Insurance Act RSO 1990 c I.8 (FSRA regulation; mandatory private auto insurance; OAP 1 standard policy); SABS O.Reg. 34/10 (MIG minor injury cap $3,500 sprain/strain/whiplash; non-catastrophic combined med/rehab/attendant care $65,000; catastrophic impairment $1,000,000 — 55%+ WPI/GOS 9 or less/paraplegia/tetraplegia/blindness/limb loss; attendant care non-cat $3,000/month $72,000 total/cat $6,000/month; IRB 70% gross income $400/week standard/employment test 104 weeks then complete inability; non-earner $185/week 26-week wait; death $25,000); LAT Licence Appeal Tribunal (April 2016 replaced FSCO; two-year limitation; case conference; Divisional Court appeal questions of law s.283; special award unreasonable delay/denial 50% withheld benefits plus interest s.282); verbal threshold Insurance Act s.267.5 (permanent serious disfigurement or permanent serious impairment important physical/mental/psychological function; Demme v Sprott 2007 ONCA 150 two-stage test important function + permanent + serious; indexed deductible ~$44,367 2025/2026); direct compensation property damage DCPD (Part VII ss.263-278; own insurer claims; Fault Determination Rules O.Reg. 668/90 as amended; proportional to fault).",
    date: "March 2026",
    readTime: "14 min read",
    tag: "Insurance Law",
  },
  {
    slug: "ontario-privacy-law",
    title: "Ontario Privacy Law — PIPEDA, PHIPA, and Privacy Compliance",
    excerpt:
      "PIPEDA SC 2000 c 5 ten Fair Information Principles (accountability/consent/limiting collection/accuracy/safeguards/access); meaningful consent 2018 OPC Guidelines (what collected/with whom shared/purposes/risk of harm/not bundled/plain language/withdrawal); breach notification Digital Privacy Act 2015 in force November 2018 (real risk of significant harm RROSH factors sensitivity/probability/harm; report OPC/notify individuals/notify third parties/maintain records; $100K offence); PHIPA SO 2004 c 3 (health information custodians; PHI broadly defined s.4 physical/mental health/care/payments/identification; consent s.29 knowledgeable/information-specific/custodian-specific; exceptions s.37-38 health care provision/law enforcement/legal proceedings; breach notification IPC and individual s.54; administrative penalties $100K individual/$500K corporation; right of action s.65); FIPPA RSO 1990 c F.31 provincial institutions/MFIPPA RSO 1990 c M.56 municipal; IPC Information and Privacy Commissioner enforces both; Bill C-27 CPPA reform (strengthened consent/legitimate interest balancing/minors data/data portability/algorithmic transparency/$25M or 5% global revenue penalties); privacy management program (CPO/privacy policy/consent management/data inventory/breach response/vendor contracts/PIAs).",
    date: "March 2026",
    readTime: "13 min read",
    tag: "Privacy Law",
  },
  {
    slug: "ontario-securities-law",
    title: "Ontario Securities Law — OSC Registration, Prospectus Exemptions, and Continuous Disclosure",
    excerpt:
      "OSA RSO 1990 c S.5 (prospectus requirement s.53 full true and plain disclosure material facts s.56; long-form/short-form NI 44-101/shelf NI 44-102); NI 45-106 Prospectus Exemptions (accredited investor s.2.3 net income $200K or net financial assets $1M individual; minimum amount s.2.10 $150K non-individual; offering memorandum s.2.9 Ontario 2016 $10K retail/$100K eligible; family friends business associates s.2.5; existing security holder s.2.1.1 $15K-$30K); NI 31-103 registration (investment dealer CIRO/mutual fund dealer CIRO/exempt market dealer/portfolio manager/investment fund manager); continuous disclosure NI 51-102 (AIF/annual financial statements IFRS 90-120 days/interim 45-60 days/MD&A/material change reports OSA s.75 10 days press release then report/business acquisition reports 75 days); insider trading OSA s.76 Part XXIII.1 (10%+ owner/director/officer/special relationship MNPI; tipping s.76(2) recommending without disclosure; Civil liability contemporaneous traders; Criminal Code s.382.1 fines imprisonment); takeover bid NI 62-104 20%+ voting equity (2016 amendments: 105-day minimum bid period/50%+ non-bidder deposit condition/10-day mandatory extension); OSC enforcement Capital Markets Tribunal 2021 (cease trade/trading bans/disgorgement/$1M per contravention; OSA s.122 quasi-criminal $5M fine five years imprisonment).",
    date: "March 2026",
    readTime: "13 min read",
    tag: "Securities Law",
  },
  {
    slug: "ontario-administrative-law",
    title: "Ontario Administrative Law — Judicial Review, Tribunals, and Procedural Fairness",
    excerpt:
      "Vavilov 2019 SCC 65 standard of review framework (reasonableness default; correctness for constitutional questions/questions of central importance/jurisdictional boundaries between tribunals; statutory right of appeal signals correctness); reasonableness requires justification/intelligibility/transparency — internal rationality and tenable in light of legal/factual constraints; Baker [1999] 2 SCR 817 procedural fairness five factors (nature of decision/statutory scheme/importance to individual/legitimate expectations/agency procedure choices); minimum of right to be heard and unbiased decision-maker; SPPA RSO 1990 c S.22 (notice s.6/oral hearing default/electronic hearings with objection/public hearings/disclosure/representation/interim orders); major Ontario tribunals (LTB Residential Tenancies/HRTO Human Rights Code direct access/OLRB Labour Relations Act strong privative/ERT Environmental Protection/Financial Services Tribunal/Law Society Tribunal); judicial review JRPA RSO 1990 c J.1 Divisional Court (30-day time limit JRPA s.5/exhaustion of remedies/privative clauses signal deference not oust s.96 supervisory jurisdiction); remedies certiorari/mandamus/prohibition/declaratory relief; remittal standard Vavilov para 142 substitute only one reasonable outcome; Mason v Canada 2023 SCC 21 Charter issues before administrative decision-makers reviewed for reasonableness.",
    date: "March 2026",
    readTime: "14 min read",
    tag: "Administrative Law",
  },
  {
    slug: "ontario-family-law-support",
    title: "Ontario Family Law Support — Child Support, Spousal Support, and the Federal Guidelines",
    excerpt:
      "Federal Child Support Guidelines SOR/97-175 (Divorce Act) and O.Reg. 391/97 (FLA); table amounts based on payor income/province/children count; income determination Schedule III from T1 line 15000; s.18 corporate income grossed up; imputed income s.19 Drygala v Pauli (2002) ONCA objective test intentional underemployment; s.7 special/extraordinary expenses (childcare/medical/dental/extracurricular/post-secondary) apportioned by net after-tax income; shared custody s.9 40%+ time offset approach; spousal support Moge v Moge [1992] 3 SCR 813 compensatory, Bracklow v Bracklow [1999] 1 SCR 420 non-compensatory/needs-based; SSAG Fisher v Fisher 2008 ONCA 11 persuasive not binding; Without Child Support Formula 1.5-2% gross income difference per year of marriage; With Child Support Formula 40-46% combined NDI range; variation material change Willick v Willick [1994] 3 SCR 670 child support, L.M.P. v L.S. 2011 SCC 64 spousal support.",
    date: "March 2026",
    readTime: "13 min read",
    tag: "Family Law",
  },
  {
    slug: "ontario-criminal-procedure",
    title: "Ontario Criminal Procedure — Disclosure, Charter Rights, Trial Process, and Sentencing",
    excerpt:
      "Criminal Code RSC 1985 c C-46 (federal jurisdiction s.91(27); summary max 2 years less a day; indictable no limitation period; hybrid Crown elects); election s.536 (provincial court/judge alone/judge and jury; absolute jurisdiction s.553 provincial only; exclusive jurisdiction s.469 Superior only; re-election with Crown consent); disclosure Stinchcombe [1991] 3 SCR 326 (all relevant non-clearly-irrelevant material; police possession included; informer/public interest privilege exceptions; before election timing; McNeil 2009 SCC 3 officer misconduct records; Mills s.278.1-278.9 private records complainants sexual offences); Jordan 2016 SCC 27 s.11(b) (18-month provincial ceiling; 30-month Superior ceiling; accused-caused delay deducted; Crown rebuts exceptional circumstances; stay of proceedings remedy); Charter rights (s.8 warrantless search presumptively unreasonable Collins [1987]; warrant s.487 reasonable and probable grounds; digital devices separate warrant Fearon 2014 SCC 77; s.9 arbitrary detention Mann 2004 SCC 52 reasonable grounds to suspect investigative detention brief; s.10 promptly informed reason + counsel without delay Manninen [1987] 1 SCR 1233; Sinclair 2010 SCC 35 secondary consultation fundamental change in jeopardy; Grant 2009 SCC 32 s.24(2) exclusion three-stage); preliminary inquiry (Bill C-75 restricted 14 years + life offences; prima facie case properly instructed jury could convict; discharge s.548 or commit s.548(1)(b)); fitness to stand trial (s.2 Code understand proceedings/consequences/communicate counsel; Taylor ONCA standard; Whittle [1994] limited cognitive; balance of probabilities; Review Board Part XX.1); sentencing (s.718 purposes denunciation/deterrence/separation/rehabilitation/reparation/responsibility; s.718.1 proportionality fundamental principle; s.718.2 aggravating/mitigating/parity/totality/restraint; Gladue [1999] 1 SCR 688 Indigenous circumstances systemic factors alternatives; Ipeelee 2012 SCC 13 all sentencing hearings).",
    date: "March 2026",
    readTime: "14 min read",
    tag: "Criminal Law",
  },
  {
    slug: "ontario-employment-standards",
    title: "Ontario Employment Standards — the Employment Standards Act 2000 and Wrongful Dismissal",
    excerpt:
      "ESA 2000 SO 2000 c 41 minimum standards (provincially regulated employers; federal employees Canada Labour Code Part III); hours of work s.17 max 8/day 48/week; overtime 1.5x over 44 hours s.22 (exempt professionals/managers); vacation 2 weeks/4% after 1 year, 3 weeks/6% after 5 years since 2018 Fair Workplaces Act; 9 public holidays s.26-30; leaves (pregnancy 17 weeks s.46; parental 63/37 weeks s.48; personal emergency 10 days 3 paid 25+ employees; family caregiver 8 weeks; domestic/sexual violence 10 days + 15 weeks s.49.7; reservist up to 52 weeks s.50.2); termination pay ESA Part XV (1 week/year 1-8 weeks; wilful misconduct exception s.54); severance pay s.64 (5+ years employment, $2.5M+ payroll or mass termination, 1 week/year max 26 weeks); mass termination s.58 (50+ employees 4 weeks, 8/12/16 weeks notice); common law reasonable notice Bardal v Globe and Mail (1960) (character of employment/length of service/age/availability similar employment; ~1 month/year long service; up to 24-26 months senior employees); Honda Canada Inc v Keays 2008 SCC 39 (Wallace damages moved to separate moral damages head — proven mental distress from bad faith conduct; punitive damages rare malicious/oppressive separate wrong); just cause McKinley v BC Tel 2001 SCC 38 contextual proportionate (misconduct incompatible with fundamental terms; wilful conduct higher ESA bar; Dowling v WSIB 2004 ONCA 43 — not mere proof misconduct, must vitiate relationship); constructive dismissal Farber v Royal Trust [1997] 1 SCR 846 (unilateral fundamental change reasonable person inconsistent with continuation; Potter 2015 SCC 10 two routes single breach or series showing no longer bound; resign within reasonable time); claims (Superior Court 2-year limitation; Small Claims $35K; Ministry ESO complaint; HRTO protected grounds).",
    date: "March 2026",
    readTime: "14 min read",
    tag: "Employment Law",
  },
  {
    slug: "ontario-landlord-tenant-law",
    title: "Ontario Landlord and Tenant Law — the Residential Tenancies Act and LTB Proceedings",
    excerpt:
      "Residential Tenancies Act SO 2006 c 17 (scope — residential units; exemptions s.5-7 transient/shared facilities/employment-condition/care homes; LTB Landlord and Tenant Board adjudicates; Divisional Court appeal/review post-Vavilov); tenancy agreements (Standard Lease O.Reg. 9/18 required post April 30 2018; demand within 21 days or tenant withholds one month rent s.12.1; fixed-term converts monthly auto s.37(2)); rent increases (once per 12 months; 90 days notice Form N1 s.116; rent control pre-November 15 2018 units; post-November 15 2018 units exempt s.6.1; AGI Form L5 — extraordinary operating cost increases/capital expenditures/municipal tax increases); eviction grounds (N4 non-payment 14 days cure/L1 application if not paid; LTB s.83 discretion delay/refuse/conditions/payment plan; N12 own use s.48 — immediate family/caregiver, 60 days notice, one month compensation, re-rental within one year damages up to 12 months + reinstatement, good faith scrutiny Ball v Metro Capital 2002; N13 demolition/conversion/extensive repairs s.50 — 120 days, required permits, right of first refusal extensive repairs s.53, three months compensation or comparable unit; renoviction s.233 offence re-renting before offering to former tenant; N5 substantial interference/damage/overcrowding first voidable 7 days/second not voidable); LTB procedure (L/T applications; SPPA RSO 1990 c S.22; s.83 relief all circumstances long-term/impact/payment plan; enforcement Sheriff only s.25-31 illegal lockout up to 12 months damages); tenant applications (T1 rent rebate; T2 maintenance s.20; T3 service reduction; T5 bad faith eviction up to 12 months; T6 harassment s.23-25).",
    date: "March 2026",
    readTime: "13 min read",
    tag: "Landlord-Tenant Law",
  },
  {
    slug: "ontario-real-property-law",
    title: "Ontario Real Property Law — Land Titles, Easements, Restrictive Covenants, and Adverse Possession",
    excerpt:
      "Land registration systems (Land Titles Act RSO 1990 c L.5 — indefeasible title s.44 exceptions fraud/actual occupation/short tenancies/public rights/taxes/expropriations; Registry Act RSO 1990 c R.20 — 40-year title search, adverse possession possible; POLARIS conversion LTCQ to LTA after 10 years; Teraview electronic registration Electronic Registration Act SO 1991 c 44 — solicitor undertaking correct/authorized; Lawrence v Maple Trust 2007 ONCA 74 mortgage fraud no indefeasibility for fraudster); easements (Re Ellenborough Park [1956] four elements — dominant/servient tenement, accommodate dominant land, separate ownership, capable of grant; creation — express registration on LTA s.71; implied Wheeldon v Burrows (1879) continuous/apparent/necessary for reasonable enjoyment/used at time of grant; implied necessity landlocked Nickerson [1981]; prescription 10 years continuous without permission/secrecy/force — Registry Act lands; extinguishment — release/unity of ownership/abandonment intent required); restrictive covenants (Tulk v Moxhay (1848) — negative in substance, benefit retained land, intended to bind successors, registered LTA land; modification discharge s.61 CLPA RSO 1990 c C.34 obsolete/impedes reasonable use without practical benefit); adverse possession (RPLA RSO 1990 c L.15 10-year period; factual possession Powell v McFarlane (1977) dealing as occupying owner exclusion paper title owner; animus possidendi; without consent; tacking; Land Titles s.51 LTA no adverse possession; LTCQ pre-conversion claims possible); title insurance (FCT/Stewart; covers title defects/zoning non-compliance/survey defects/work orders/liens/encroachments; excludes known matters/environmental/insured-created violations; LSO advice obligation); LTT (LTTA RSO 1990 c L.6 0.5%/1%/1.5%/2%/2.5% tiers; first-time $4,000 rebate s.2.1; Toronto MLTT doubles).",
    date: "March 2026",
    readTime: "14 min read",
    tag: "Real Property Law",
  },
  {
    slug: "ontario-corporate-governance",
    title: "Ontario Corporate Governance — Directors, Fiduciary Duties, and Shareholder Rights",
    excerpt:
      "OBCA RSO 1990 c B.16 vs CBCA RSC 1985 c C-44 (CBCA 25% Canadian resident directors; oppression remedies substantively similar s.248 OBCA/s.241 CBCA both apply BCE framework); directors (s.115 minimum one; offering corporations three with two independent s.115(2); election ordinary resolution s.119(4); cumulative voting s.120 if articles provide; casual vacancy s.124(1); removal ordinary resolution s.122(1); disqualification s.118(1)); fiduciary duties s.134 (fiduciary — honestly/good faith/best interests corporation s.134(1)(a); duty of care — reasonably prudent person comparable circumstances s.134(1)(b); duties run to corporation not shareholders Peoples Department Stores 2004 SCC 68; BCE Inc v 1976 Debentureholders 2008 SCC 69 — best interests of corporation whole not synonym shareholder value maximization; stakeholder interests considered not determinative; business judgment rule Peoples — disinterested/reasonably informed/honest good faith deference); conflict of interest s.132 (disclose material interest; director cannot vote s.132(5); exceptions remuneration/indemnity/affiliate s.132(7)); shareholder meetings (annual within 18 months incorporation then 15 months last meeting s.94; 5% demand special meeting s.105; notice 10-50 days s.96(3); special resolution two-thirds s.1(1); quorum majority voting shares s.100(1); proxies s.110; solicitation 15+ shareholders triggers proxy circular s.111); unanimous shareholder agreements s.108 (restricts directors powers, shareholders assume duties s.108(5), noted on certificates s.108(6), purchaser without notice not bound s.108(7); drag-along/tag-along/shotgun/ROFR/deadlock provisions); director personal liability (wages 6 months s.131; environmental EPA RSO 1990 c E.19; ITA s.227.1 source deductions 2-year limitation due diligence defence Soper [1997] FCA inside vs outside directors; ETA s.323 HST; dividends insolvent s.38); indemnification s.136 (honest/good faith best interests; mandatory where substantially successful s.136(4); D&O insurance).",
    date: "March 2026",
    readTime: "14 min read",
    tag: "Corporate Law",
  },
  {
    slug: "ontario-evidence-law",
    title: "Ontario Evidence Law — Admissibility, Hearsay, Privilege, and Expert Evidence",
    excerpt:
      "Evidence Act RSO 1990 c E.23 (s.8 spouses competent/compellable civil; s.35 business records; s.52 documentary); hearsay principled approach (Khan [1990] 2 SCR 531, Smith [1992], Starr 2000 SCC 40 — necessity: declarant unavailable or equally effective alternative unavailable; threshold reliability: voir dire circumstantial/corroborating guarantees; traditional categories presumptively admissible; prior inconsistent statements s.9(2) CEA; prior consistent statements inadmissible except rebut fabrication/prior ID/Khan truth); similar fact evidence Handy 2002 SCC 56 (presumptively inadmissible propensity; specific use identified; probative value vs prejudicial effect; striking similarity hallmark elevates admission; civil — same principled cost-benefit); privilege (solicitor-client — Lavallee 2002 SCC 61 substantive rule not merely evidentiary; client not lawyer; permanent; legal advice + litigation privilege; crime-fraud exception Smith v Jones [1999] 1 SCR 455 public safety; litigation privilege dominant purpose anticipated litigation ends at conclusion Blank 2006 SCC 39; informer privilege absolute Named Person 2007 SCC 43; public interest immunity balancing Stinchcombe [1991]); voir dire (voluntariness Oickle 2000 SCC 38; hearsay; expert qualification; Charter s.24(2) Grant 2009 SCC 32); expert evidence Mohan [1994] 2 SCR 9 four-part test (relevance/necessity/no exclusionary rule/qualified expert); White Burgess 2015 SCC 23 independence/impartiality gatekeeping duty to court; Sekhon 2014 SCC 15 no ultimate issue credibility usurpation; Rule 53.03 RCP expert report obligations; s.24(2) Grant three-stage seriousness/impact/society interest analysis.",
    date: "March 2026",
    readTime: "14 min read",
    tag: "Evidence Law",
  },
  {
    slug: "ontario-contract-law",
    title: "Ontario Contract Law — Formation, Terms, Breach, and Remedies",
    excerpt:
      "Formation (offer — advertisement invitation to treat Boots Cash Chemists [1953], unilateral offer Carlill [1893]; acceptance — unequivocal, communicated, mailbox rule posted effective Household Fire Insurance (1879), instantaneous receipt Brinkibon [1983]; battle of forms last-shot rule; consideration — value but not adequacy Thomas v Thomas, past not good Roscorla, existing duty practical benefit Williams v Roffey [1991], part payment no consideration Foakes v Beer (1884); promissory estoppel John Burrows [1968] SCR 607 shield not sword; intention — commercial presumed binding, domestic presumed not; certainty); terms (express incorporation notice Tilden Rent-a-Car ONCA onerous terms; implied — BP Refinery five-part test MJB Enterprises [1999] 1 SCR 619, good faith organizing principle Bhasin v Hrynew 2014 SCC 71, honest performance all contracts); misrepresentation (fraudulent Derry v Peek (1889) deceit remedy; negligent Hedley Byrne [1964] / Queen v Cognos [1993] 1 SCR 87 Ontario; innocent — rescission only; rescission barred affirmation/lapse/restitution impossible/third party rights); frustration Davis Contractors [1956] AC 696 radically different, Frustrated Contracts Act RSO 1990 c F.34 (sums paid recoverable s.3(1), valuable benefit just sum s.3(2)); breach (condition terminates + damages; warranty damages only; innominate/Hong Kong Fir [1962] depends on consequences; anticipatory breach — accept immediately or affirm at risk); remedies (expectation damages cost of cure vs diminution value Ruxley [1996]; reliance damages Anglia Television [1972]; remoteness Hadley v Baxendale (1854) two limbs — natural + reasonable contemplation Fidler 2006 SCC 30; mitigation; specific performance land/unique chattels John E. Dodge Holdings ONCA 2003; injunctions RJR-MacDonald 1994 three-part); Sale of Goods Act RSO 1990 c S.1 (ss.13-16 implied conditions title/description/fitness/sample; excluded commercially; CPA 2002 consumer protection).",
    date: "March 2026",
    readTime: "14 min read",
    tag: "Contract Law",
  },
  {
    slug: "ontario-tort-law",
    title: "Ontario Tort Law — Negligence, Defamation, Nuisance, and Economic Torts",
    excerpt:
      "Negligence elements (duty Anns/Cooper test Cooper v Hobart [2001] 3 SCR 537 — recognized categories proceed directly, novel categories proximity + foreseeability stage one, policy negation stage two indeterminate liability/statutory conflict; standard of care objective reasonable person, professionals reasonably competent specialist ter Neuzen v Korn [1995], Bolam test rejected; causation but-for Clements v Clements 2012 SCC 32, multiple sufficient causes Cook v Lewis [1951] burden shift, MCR narrow exception impossible but-for + injury within risk Clements para 46, loss of chance generally not adopted; remoteness Wagon Mound type foreseeability [1961] AC 388; thin skull take plaintiff as found Athey v Leonati [1996] 3 SCR 458; crumbling skull pre-existing deterioration apportionment; contributory negligence Negligence Act RSO 1990 c N.1 proportionate fault s.3, joint and several maintained); occupiers liability OLA RSO 1990 c O.2 (s.3 unified reasonable care duty for most visitors; s.4 trespasser duty no intent/recklessness; contractual limitation s.3(3)); private nuisance (substantial unreasonable interference with use/enjoyment of land; locality/duration/severity/utility balancing; injunction or damages Shelfer principles); defamation (Libel and Slander Act RSO 1990 c L.12; libel permanent actionable per se; slander transient generally not per se except criminal/disease/trade; defences — truth/justification full defence, fair comment WIC Radio [2008] SCC 40 honest opinion on proved facts of public interest, absolute privilege Parliament/courts, qualified privilege duty-interest defeated by malice, responsible communication Grant v Torstar 2009 SCC 61; limitation — 6 weeks notice/3 months action); economic torts (inducing breach of contract Lumley v Gye — knowledge of contract, intentional procurement of breach, damage; unlawful means conspiracy Bram Enterprises 2014 SCC 12 — agreement, unlawful means actionable by third party, directed at plaintiff, likely injury known; predominant purpose conspiracy high bar; passing off Ciba-Geigy [1992] 3 SCR 120 — goodwill, misrepresentation, damage).",
    date: "March 2026",
    readTime: "14 min read",
    tag: "Tort Law",
  },
  {
    slug: "ontario-human-rights-law",
    title: "Ontario Human Rights Law — the Human Rights Code and HRTO Practice",
    excerpt:
      "Human Rights Code RSO 1990 c H.19 quasi-constitutional (Tranchemontagne [2006] 1 SCR 513 — prevails over other provincial statutes); five social areas (services/goods s.1, housing s.2, contracts s.3, employment s.5, vocational associations s.6); protected grounds (race, ancestry, place of origin, colour, ethnic origin, citizenship, creed, sex including pregnancy s.10(2), sexual orientation, gender identity/expression 2012, age 18+ no upper limit since 2009 mandatory retirement repeal, marital status, family status Johnstone v CBSA 2014 FCA 110 childcare obligations, disability s.10 broad including addiction, receipt of public assistance housing s.2, record of offences s.5/s.2); constructive discrimination O'Malley [1985] 2 SCR 536 (adverse effect discrimination — neutral rule with adverse effect on protected ground; Saturday-work creed; duty to accommodate to undue hardship); Meiorin [1999] 3 SCR 3 unified test (standard rationally connected to function; honest good-faith belief necessary; reasonably necessary — cannot accommodate without undue hardship; Grismer [1999] visual acuity); duty to accommodate undue hardship (s.17(2) three factors — cost must be quantified Renaud [1992] 2 SCR 970, outside funding, health/safety; morale costs not undue hardship; employee must cooperate; accept reasonable accommodation not preferred solution; functional limitations not diagnosis); harassment s.5(2) (course of vexatious comment/conduct known unwelcome; single serious incident possible; employer vicariously liable for supervisor Janzen [1989] 1 SCR 1252 sexual harassment = sex discrimination); HRTO procedure since 2008 Bill 107 (Form 1 direct filing bypassing OHRC; one-year limitation s.34(1) extendable interest of justice; Response 35 days; s.45.6 grievance arbitration overlap; mediation 60-70% resolution; SPPA balance of probabilities; prima facie burden shift Moore v BC 2012 SCC 61; remedies s.45.2 — general damages $5K-$50K+ dignity, reinstatement, lost wages, policy changes, systemic orders; no punitive damages; no costs orders); Rule 6.3 LSO (discrimination/harassment prohibition in professional dealings and firm operation).",
    date: "March 2026",
    readTime: "13 min read",
    tag: "Human Rights Law",
  },
  {
    slug: "ontario-aboriginal-law",
    title: "Ontario Aboriginal Law — Section 35 Rights, Aboriginal Title, and the Duty to Consult",
    excerpt:
      "s.35 Constitution Act 1982 rights (Sparrow [1990] 1 SCR 1075 justification framework — legislative objective compelling/substantial, minimal impairment, fair compensation, Crown priority; infringement must be justified; fiduciary relationship Crown-Aboriginal); Aboriginal title Tsilhqot'in Nation v BC 2014 SCC 44 (sufficient/continuous/exclusive occupation pre-sovereignty — title to territory not just regular use sites; collective communal title CLCA; beneficial use + government right; alienation only to Crown s.35(1); Crown justification — government objective compelling/substantial, proportional to benefit, honouring Crown-Aboriginal relationship); Aboriginal rights Van der Peet [1996] 2 SCR 507 (integral part of distinctive culture pre-European contact — fishing, hunting, gathering; specific practices not abstract rights; right to exchange for money Gladstone [1996] non-internal limits; prima facie infringement then justification); duty to consult Haida Nation v BC [2004] 3 SCR 511 (two-part trigger — Crown knowledge of potential Aboriginal right/title claim AND contemplated Crown conduct adversely affecting right; spectrum depth proportionate to claim strength and impact severity — mere notice to deep consultation with accommodation; Crown can delegate procedure not duty itself; accommodation short of veto; honour of Crown overarching principle; procedural not veto right); Ontario-specific consultation (Mining Act RSO 1990 c M.14 amended 2009/2012 — advanced exploration consent for claim staking near communities, exploration plan/permit consultation; Environmental Assessment Act consultation requirements; Resource Revenue Sharing framework); historic Ontario treaties (Robinson-Superior Treaty 1850; Robinson-Huron Treaty 1850; Treaty 9 James Bay Treaty 1905-1906 covering northern Ontario vast territories; numbered treaties ceding land rights subject to harvesting reserves); Restoule v Canada 2024 SCC 8 (Ontario AG v Restoule — augmentation clause of Robinson Treaties is a living obligation to increase annuities as Crown revenues justify; Crown breached duty to review; remedy phase ongoing — modern constitutional obligations survive Confederation); UNDRIP (Canada enacted UN Declaration on the Rights of Indigenous Peoples Act SC 2021 c 14; FPIC Article 19 more demanding than Haida Nation standard; free/prior/informed consent for legislation affecting rights; no domestic veto right in Canadian law yet but increasing weight); Crown fiduciary duty Wewaykum Indian Band [2002] 4 SCR 245 (specific not general fiduciary duty — Crown acts as trustee in specific circumstances e.g. managing reserve land; undertaking of discretion for benefit of First Nation).",
    date: "March 2026",
    readTime: "13 min read",
    tag: "Aboriginal Law",
  },
  {
    slug: "ontario-labour-law",
    title: "Ontario Labour Law — Collective Bargaining, Union Organizing, and the Labour Relations Act, 1995",
    excerpt:
      "LRA 1995 SO 1995 c 1 Sched A: jurisdiction (provincially regulated sectors — OLRB; federally regulated — Canada Labour Code Part I, CIRB; construction separate Part III); union certification (40% membership triggers vote; 55%+ card-check certification reinstated 2022 Working for Workers Act; appropriate bargaining unit — community of interest, managers/confidential excluded; automatic/remedial certification s.11 for employer UFLs undermining vote fairness); unfair labour practices (employer — interference, intimidation, discrimination, refusing to bargain in good faith s.17; union — intimidation, discrimination; remedies — reinstatement with back pay, cease-and-desist, remedial certification); collective bargaining duty s.17 (good faith — reasonable efforts, relevant disclosure, intention to conclude; hard bargaining not bad faith; surface/stonewalling/regressive bargaining = bad faith; collective agreement freeze on expiry pending new agreement or lawful strike/lockout); strikes and lockouts (preconditions — no CA in force s.86, notice to bargain s.16, conciliation officer appointed s.21, strike vote majority s.79, 16-day waiting period; essential services — hospitals/nursing homes/ambulance/police/fire maintenance-of-services agreements; illegal strikes = OLRB cease orders, injunctions, damages); successor rights (sale of business s.69 — successor bound by CA; contracting-out s.69.1 added 2022 Protecting Workers' Wages Act — building cleaning/security/food services); grievance arbitration s.48 (mandatory clause, internal steps then sole/tripartite arbitrator; reinstatement/damages remedies; statutory scheme s.48(8); expedited arbitration s.49; post-Vavilov reasonableness review for CA interpretation).",
    date: "March 2026",
    readTime: "13 min read",
    tag: "Labour Law",
  },
  {
    slug: "ontario-shareholder-remedies",
    title: "Ontario Shareholder Remedies — Oppression Remedy, Derivative Actions, and Wind-Up",
    excerpt:
      "OBCA RSO 1990 c B.16 shareholder remedies: oppression remedy s.248 (oppressive/unfairly prejudicial/unfairly disregard — three thresholds on spectrum; BCE Inc v 1976 Debentureholders 2008 SCC 69 two-part test — (1) reasonable expectation from corporate constitution/course of dealing/representations; (2) defeated by oppressive/unfairly prejudicial/unfairly disregarding conduct; security holders/creditors/directors/officers can claim; common scenarios — dilution without authorization, exclusion from quasi-partnership management, excessive majority salary + no dividend, related-party self-dealing, access to records denied; remedies s.248(3) — buyout at fair value NO minority discount, appoint receiver, amend articles, set aside transaction, compensate, wind-up); derivative actions s.246 (leave requirement — reasonable efforts to cause directors to act, good faith, interests of corporation; costs from proceeds s.247; former shareholders may qualify); winding-up s.207 (oppression or just and equitable — quasi-partnership deadlock irretrievable breakdown; last resort — courts prefer buyout); unanimous shareholder agreements s.108 (restrict directors' powers, shareholders assume fiduciary duties s.108(5), drag-along/tag-along/shotgun provisions, deadlock mechanisms, notice on share certificates s.108(6)); compliance orders s.253 (access to books s.145, required meetings, notice procedures).",
    date: "March 2026",
    readTime: "14 min read",
    tag: "Corporate Law",
  },
  {
    slug: "ontario-immigration-permanent-residence",
    title: "Ontario Immigration Law — Permanent Residence Pathways, Refugee Claims, and IRCC Procedures",
    excerpt:
      "Canadian immigration IRPA SC 2001 c 27: Express Entry (CRS points-based pool; FSW 67-point minimum + pool; FST skilled trades; CEC 1 year Canadian experience TEER 0-3; NOC 2021 TEER system replaced NOC 2016 Skill Levels November 2022; category-based draws French/healthcare/STEM/trades; OINP Human Capital Priorities NOI + 600 CRS points; OINP Employer Job Offer stream; Entrepreneur stream); family class sponsorship (spouses/common-law 12 months; conjugal partners; dependent children under 22; parents/grandparents; undertaking 3/10/20 years; outland vs inland — open work permit for inland while processing; bars to sponsorship — criminal history, prior undertaking default, social assistance, bankrupt, incarcerated); refugee claims IRB RPD (s.96 Convention refugee — persecution race/religion/nationality/social group/political opinion; s.97 person in need of protection — torture/risk to life; BOC narrative form; hearing 45-60 days; RPO not adversary; Safe Third Country Agreement 2023 amendment — entire land border with US not just official ports; DFN; exceptions unaccompanied minors/Canadian family/death penalty); RAD appeal 15 days, correctness law/reasonableness fact, PRRA 12-month bar; inadmissibility s.34-42 (security, serious criminality 10+ years, criminality, misrepresentation s.40); removal orders (departure/exclusion/deportation); admissibility hearing ID balance of probabilities.",
    date: "March 2026",
    readTime: "14 min read",
    tag: "Immigration Law",
  },
  {
    slug: "ontario-bail-hearings",
    title: "Ontario Bail Hearings — Pre-Trial Release, s.11(e) Charter Rights, and the Ladder Principle",
    excerpt:
      "Ontario bail (judicial interim release) framework: s.11(e) Charter right not to be denied reasonable bail without just cause; R v Antic 2017 SCC 27 ladder principle (least onerous conditions — undertaking no conditions, undertaking with conditions, recognizance with surety, recognizance with deposit); show cause hearing (Crown bears burden on ordinary onus; evidentiary rules — credible or trustworthy evidence s.518(1)(e), hearsay admitted); three grounds for detention s.515(10) (primary — ensure attendance, FTA history, ties to community; secondary — protection/safety, substantial likelihood reoffend, gravity of offence; tertiary — maintain confidence s.11(e) restricted to very serious cases R v St-Cloud 2015 SCC 27); reverse onus provisions s.515(6) (serious drug trafficking Schedule I/II, firearms while on prohibition order, indictable while on release, terrorism/criminal organization); conditions (no-contact, curfew, GPS, abstain alcohol/drugs, weapons prohibition, surrender passport; Bill C-75 2019 — conditions must be necessary and proportionate, courts cannot impose conditions likely to cause breach); sureties (Canadian resident, financial means, assets/liabilities inquiry, forfeiture on breach); bail review s.520/s.521 (proper on evidence standard, new evidence admissible, St-Cloud para 128); domestic violence reverse onus s.515(6)(b.1) prior conviction; Gladue principles at bail stage R v Summers 2014 SCC 26.",
    date: "March 2026",
    readTime: "13 min read",
    tag: "Criminal Law",
  },
  {
    slug: "ontario-negligence-law",
    title: "Ontario Negligence Law — Duty, Standard of Care, and Causation",
    excerpt:
      "Ontario negligence: Anns/Cooper duty of care test (Cooper v Hobart [2001] 3 SCR 537 — two stages: proximity + reasonable foreseeability prima facie duty; stage two policy negation — indeterminate liability Hercules Management [1997], statutory conflicts; recognized categories proceed without full analysis; novel categories full two-stage); standard of care (objective reasonable person; professionals — reasonably competent specialist ter Neuzen v Korn [1995]; children modified objective; Bolam test rejected — court independently assesses); causation (but-for test Clements v Clements 2012 SCC 32 balance of probabilities; multiple sufficient causes Cook v Lewis [1951] burden shifts; material contribution to risk MCR narrow exception — impossible to prove but-for through no fault of plaintiff, injury within risk ambit, defendant materially contributed; loss of chance generally not adopted Ontario); remoteness (Wagon Mound reasonable foreseeability of type not manner; thin skull rule — take plaintiff as you find them Athey v Leonati [1996] 3 SCR 458; crumbling skull apportionment pre-existing condition); contributory negligence Negligence Act RSO 1990 c N.1 (proportionate fault s.3, plaintiff contributory negligence reduction s.4, contribution between defendants s.2, joint and several liability maintained); occupiers' liability Occupiers' Liability Act RSO 1990 c O.2 (unified regime replacing invitee/licensee/trespasser; s.3 duty reasonable care all circumstances; s.4 trespasser duty — no intent to harm/reckless disregard; contractual limitation of liability); nervous shock (immediate victim ordinary principles; secondary victim — close tie + proximity + direct perception).",
    date: "March 2026",
    readTime: "13 min read",
    tag: "Tort Law",
  },
  {
    slug: "ontario-commercial-real-estate",
    title: "Ontario Commercial Real Estate Transactions — Due Diligence, Title, and Closing",
    excerpt:
      "Ontario commercial real estate: APS (negotiated documents not OREA forms; due diligence conditions 30-90 days; caveat emptor stronger; HST clause; larger deposits 5-10%); title due diligence (Teraview POLARIS search — parcel register instruments chain of title 40+ years; construction liens search 90 days pre-closing, seller statutory declarations; survey — ALTA/Ontario Land Survey — encroachments easements setbacks; zoning compliance certificate — current classification permitted uses parking; Land Titles Absolute Title guarantee); environmental (Phase I ESA desktop review APECs; Phase II intrusive sampling Table 2 MECP Site Condition Standards; RSC required before sensitivity-increasing change of use O.Reg. 153/04; CPU binds future owners; Environmental Site Registry); tenancy (estoppel certificates from all tenants; SNDA agreements; rent roll verification; CAM reconciliation); title insurance (FCT/Stewart — title defects, zoning non-compliance, survey defects, work orders, fraud; one-time premium; lender side + owner side); LTT (Land Transfer Tax Act RSO 1990 c L.6 — 0.5%/1%/1.5%/2% tiers; Toronto MLTT doubles rate — ~4% over $400K; value of consideration includes assumed mortgages; shares purchase no LTT; s.3(6) corporate reorganization exemption); HST on commercial (ETA taxable 13%; s.167 going concern election if both registrants; s.228(4) purchaser self-assessment at closing; ITC recovery for commercial use); closing (Teraview electronic registration; requisitions deadline; Transfer of Land Form 1; Statement of Adjustments; HST declaration; LSO By-Law 9 trust obligation for closing funds).",
    date: "March 2026",
    readTime: "13 min read",
    tag: "Real Estate Law",
  },
  {
    slug: "ontario-family-law-property",
    title: "Ontario Family Law Property Division — Net Family Property, Matrimonial Home, and Exclusions",
    excerpt:
      "Ontario FLA RSO 1990 c F.3 equalization regime: NFP formula (value at VD minus debts minus DOM deduction minus exclusions; NFP floor = zero; legally married spouses only — not common-law); valuation date (earliest of separation/divorce application/death/nullity; trial reconciliation issues); date of marriage deduction (all assets owned at DOM reduce NFP except matrimonial home); exclusions s.4(2) (gifts and inheritances from third parties received after DOM — traceable proceeds also excluded; personal injury non-pecuniary damages; life insurance proceeds; domestic contract exclusions; tracing burden on claiming spouse; income from excluded property included unless donor directed otherwise); matrimonial home special rules (no DOM deduction even if owned before marriage FLA s.4(2); s.18 definition — more than one possible; s.21 disposition/encumbrance prohibited without consent, transactions voidable; s.19-20 equal possession rights regardless of title; s.24 exclusive possession orders — best interests children + financial position + domestic violence); unconscionability s.5(6) (very high bar — Serra v Serra 2009 ONCA 105; short marriage, reckless debt, bad faith depletion); pension division (DB actuarial PBA s.67.4 imputed value, DC/RRSP account balance; pension division at source; DOM deduction for pre-marital RRSPs); death election (FLA s.5(2) — survive or elect equalization within 6 months); limitation period 2 years from divorce/nullity/separation/death s.7(3).",
    date: "March 2026",
    readTime: "14 min read",
    tag: "Family Law",
  },
  {
    slug: "ontario-estate-administration",
    title: "Ontario Estate Administration — Probate, Wills, Estate Trustees, and Dependant's Relief",
    excerpt:
      "Ontario estate administration: Certificate of Appointment of Estate Trustee (probate — required for real property transfers, most financial accounts; estate administration tax $0 on first $50K then $15/$1,000 = 1.5%; Estate Information Return within 180 days penalty for false statements); will formalities SLRA s.4 (writing, signature at end, two witnesses present same time; holograph wills s.6 — entirely handwritten no witnesses; electronic wills permanent since 2021 SLRA amendments — audiovisual remote witnesses); testamentary capacity Banks v Goodfellow (1870) four elements; intestacy distribution SLRA Part II (2021 amendments — common-law partners added as spouse after 3 years cohabitation; preferential share increased $200K to $350K; per stirpes distribution; escheat Escheats Act 2015); estate trustee duties (gather assets, pay debts before distribution — personal liability if not, pass accounts Rule 74.18, prudent investor standard Trustee Act s.27, 5% compensation guideline); dependant's relief SLRA Part V (spouse/parent/child/sibling of deceased, 6-month hard deadline from Certificate — limited discretion to extend, s.62 factors, common-law spouses added 2021); will challenges (testamentary capacity Banks v Goodfellow, undue influence — coercion not mere persuasion, presumption where dominant relationship, fraud, forgery, formal invalidity — new curative power SLRA s.21.1 since 2021, Golden Rule for vulnerable testators); limitation periods (dependant's relief 6 months, will challenge 2 years from discovery, breach of fiduciary duty 2 years).",
    date: "March 2026",
    readTime: "14 min read",
    tag: "Wills & Estates",
  },
  {
    slug: "ontario-construction-law",
    title: "Ontario Construction Law — Liens, Holdbacks, Prompt Payment, and Adjudication",
    excerpt:
      "Construction Act RSO 1990 c C.30 (2018 amendments — renamed from Construction Lien Act, Building Ontario Up for Everyone Act 2017; prompt payment and adjudication in force October 1 2019 for new contracts): who can claim a lien (suppliers of services or materials to an improvement — broad definition including architects engineers grading demolition; leasehold liens limited to leasehold interest unless landlord consent); lien amounts and priority (pari passu, priority over mortgages registered after first visible commencement s.78); statutory holdback (10% of each payment at every tier s.22, trust fund for lien claimants, release 60 days after substantial performance publication s.26); substantial performance (ready for intended use + deficiency cost not more than 3%/$2%/1% of contract price tiers); lien preservation (60 days from last supply or from SP certificate publication — strict deadline s.31); lien perfection (90 days from registration of claim for lien, commence action + certificate of action s.36); trust provisions (owner trust s.8 for mortgagee funds, contractor trust s.8 for received payments, personal director/officer liability for trust breaches s.13(1)); prompt payment (owner pays proper invoice within 28 days, contractor pays sub within 7 days of receiving, notice of non-payment 14 days, prescribed interest rate bank rate + 1%); rapid adjudication ODACC (disputes about valuation/payment/non-payment notices/setoffs/substantial performance, 30-day determination timeline, binding pending further proceedings, enforcement by court order, adjudicator qualifications).",
    date: "March 2026",
    readTime: "14 min read",
    tag: "Construction Law",
  },
  {
    slug: "ontario-privacy-law",
    title: "Ontario Privacy Law — PIPEDA, MFIPPA, PHIPA, and LSO Cloud Storage Guidance",
    excerpt:
      "Ontario privacy law framework: PIPEDA SC 2000 c 5 ten CSA principles (accountability/consent/safeguards/access); commercial activities in Ontario governed by PIPEDA in absence of substantially similar provincial legislation (unlike BC/Alberta); PIPEDA mandatory breach notification since 2018 (real risk of significant harm test — bodily harm, humiliation, financial loss, identity theft; notify OPC and individuals as soon as feasible; 24-month records retention; $100K penalties for knowing failure); Bill C-27 CPPA (proposed — 5% global revenue/$25M penalties, right to erasure, automated decision-making transparency; AIDA high-impact AI regulation; PIDPTA specialized tribunal; not yet Royal Assent); MFIPPA RSO 1990 c M.56 (municipal institutions — police, school boards, local boards; access requests, exemptions, IPC oversight — privacy breach notification mandatory since 2020); FIPPA RSO 1990 c F.31 (provincial institutions, similar regime, IPC Divisional Court review); PHIPA SO 2004 c 3 (health information custodians, express consent for PHI, EHR systems ConnectingOntario, IPC orders, $50K/$500K penalties); privacy torts (Jones v Tsige 2012 ONCA 32 — intrusion upon seclusion recognized in Ontario, general damages up to $20K without pecuniary loss proof); LSO cloud storage guidance (due diligence on providers, data residency — CLOUD Act considerations, encryption TLS/AES-256, data segregation, retrieval/portability).",
    date: "March 2026",
    readTime: "13 min read",
    tag: "Privacy Law",
  },
  {
    slug: "ontario-securities-law",
    title: "Ontario Securities Law — OSC Enforcement and Capital Markets Compliance",
    excerpt:
      "Ontario securities law framework: Securities Act RSO 1990 c S.5 and CMMA 2021 amendments (disgorgement s.127.1, whistleblower rewards Part XXIII.2, $15M admin penalties); OSC registration requirements NI 31-103 (dealing/advising/IFM categories, business trigger analysis); prospectus exemptions NI 45-106 (accredited investor $1M financial assets/$200K income, OM exemption since 2016, minimum amount $150K, resale restrictions NI 45-102 four-month hold); continuous disclosure (AIF 90 days FYE, MD&A annual/interim, material change reports within 10 days, NI 52-109 CEO/CFO certification); insider trading Part XXIII (special relationship persons, material undisclosed fact prohibition s.76(1)/(2)/(3), generally disclosed test 24-48 hours after press release); secondary market civil liability Part XXIII.1 (Theratechnologies 2015 SCC 18 leave test — arguable on its face); market manipulation s.126.1 (wash trading, spoofing, pump and dump); enforcement powers (s.127 orders, s.128 court orders, s.122 quasi-criminal up to $5M/5 years, OSC investigation process — s.11 formal order, s.13 compelled examinations, settlement Panel approval not automatic, Divisional Court appeal); director/officer liability (insider reporting SEDI 5-day trade report, NI 52-109 certification, Part XXIII.1 personal liability, due diligence defence s.122(3)); key NIs (31-103, 45-106, 45-102, 51-102, 52-109, 52-110, 62-104, MI 61-101).",
    date: "March 2026",
    readTime: "13 min read",
    tag: "Securities Law",
  },
  {
    slug: "ontario-administrative-tribunals",
    title: "Ontario Administrative Tribunals — HRTO, LAT, LTB, FSRA, and Judicial Review",
    excerpt:
      "Practical guide to Ontario's administrative tribunal system: HRTO jurisdiction (Human Rights Code protected grounds, direct access model, one-year filing deadline, general damages — Arunachalam 2010 HRTO 1880); LAT accident benefits jurisdiction (replaced FSCO 2016, SABS disputes, 2-year deadline, expert reports Rule 9 — 45 days before hearing, Yatar v TD Insurance 2024 SCC 8 confirming reasonableness review default); LTB procedure (RTA N-form notices, N4/N5/N12/N13, s.83 relief from eviction, AGI applications, More Homes Built Faster Act 2022 amendments, backlog delays 18-24 months); FSRA (replaced FSCO 2019, internal Tribunal for licensing/market conduct, Divisional Court review); OEB rate proceedings (quasi-legislative, Court of Appeal review); ERT (environmental approvals appeals, precautionary approach); ATAGA clusters (SLASTO, SJTO, ELTO); Vavilov 2019 SCC 65 framework (presumption of reasonableness, correctness for constitutional questions and central importance questions, statutory appeal provisions shift law questions to correctness); JRPA judicial review (Divisional Court, 30-day deadline); procedural fairness (Baker factors, bias test, disclosure obligations); practical tips (exhaust tribunal remedies, expert report deadlines, record proceeding for judicial review).",
    date: "March 2026",
    readTime: "12 min read",
    tag: "Administrative Law",
  },
  {
    slug: "ontario-environmental-assessment",
    title: "Ontario Environmental Assessment — EA Act, Federal IAA, and Contaminated Sites",
    excerpt:
      "Environmental assessment law in Ontario: provincial Environmental Assessment Act RSO 1990 c E.18 three tracks (Individual EA for major provincial infrastructure 5-10 years; Class EA pre-approved schedule for routine projects; Streamlined EA post-Bill 197/257 2020 amendments — reduced consultation, legal challenges from First Nations); federal Impact Assessment Act 2019 designated projects (Physical Activities Regulations — nuclear, interprovincial pipelines, offshore oil/gas, mining thresholds; Reference re IAA 2023 SCC 23 constitutionality partial invalidity, ongoing amendments); joint/substituted federal-provincial processes; conditions of approval binding with s.40 EPA enforcement; EPA RSO 1990 c E.19 contaminated site liability (s.93 remediation orders — person responsible includes current land owner retroactively; innocent purchaser still liable; s.194 personal director/officer liability for EPA violations — due diligence defence); O.Reg. 153/04 RSC process (Phase I desktop review; Phase II intrusive sampling vs Table 2 site condition standards residential vs commercial/industrial; RSC filing required before sensitivity-increasing rezoning); Certificates of Property Use (CPU) binding all future owners; brownfield real estate search obligation; Environmental Site Registry; First Nations consultation duty s.35 Constitution Act (Haida Nation [2004] — inadequate consultation most common EA judicial review ground).",
    date: "March 2026",
    readTime: "14 min read",
    tag: "Environmental Law",
  },
  {
    slug: "ontario-landlord-remedies",
    title: "Ontario Landlord Remedies — RTA Applications and LTB Process",
    excerpt:
      "Landlord remedies under Residential Tenancies Act 2006 SO 2006 c 17: N-form table (N4 non-payment 14 days/voidable on payment; N5 interference 20 days/voidable within 7 days; N6 illegal act 10 days; N7 serious safety 10 days; N8 persistent late 60 days end of term; N12 owner/purchaser/family use 60 days + 1 month compensation + genuine intent + individual landlord only; N13 demolition 120 days + 3 months compensation + right of first refusal); LTB exclusive jurisdiction over residential evictions; self-help eviction prohibited ss.22-26; N4 invalidity grounds (overstated arrears, wrong termination date, non-rent charges); N12 bad faith s.57 application (up to 12 months rent + reinstatement + administrative fine); LTB hearing procedure (videoconference, lawyer/paralegal/licensed agent representation); s.83 relief mandatory consideration (refuse or postpone eviction — tenant circumstances vs landlord prejudice); rent deposit rules (last month only, s.105, no security/pet deposits, annual interest at guideline rate); enforcement via Court Enforcement Office (Sheriff); arrears money order filed as Superior Court judgment for garnishment; tenant motion to void order before enforcement date.",
    date: "March 2026",
    readTime: "13 min read",
    tag: "Landlord & Tenant Law",
  },
  {
    slug: "ontario-mortgage-default",
    title: "Ontario Mortgage Default — Power of Sale, Redemption, and Deficiency",
    excerpt:
      "Mortgage default remedies in Ontario under Mortgages Act RSO 1990 c M.40: power of sale (s.32 notice — written, served on mortgagor and subsequent encumbrancers, identifies default, states redemption amount; 35-day statutory redemption period; mortgagee's duty to obtain best price reasonably obtainable — Farrar v Farrars (1888); purchaser takes clear title free of subsequent charges s.35; distribution of proceeds — mortgagee costs, first mortgage, subsequent charges in priority, surplus to mortgagor); no anti-deficiency legislation in Ontario — mortgagee may sue for full deficiency, 2-year limitation from closing; mortgagor's counterclaim for inadequate price; judicial sale by foreclosure (s.39 — slower, reference officer, used for title defects, bankruptcy stay, no power of sale clause); mortgagor rights (redemption until closing, challenge inadequate price, surplus, notice rights); priority among charges (registration order under Land Titles Act; construction lien super-priority from first supply date; property tax super-priority; Crown priority for source deductions/HST/environmental); insolvency stay — BIA s.69 and CCAA automatic stay of power of sale proceedings; trust accounting for sale proceeds under LSO By-Law 9.",
    date: "March 2026",
    readTime: "13 min read",
    tag: "Real Estate Law",
  },
  {
    slug: "ontario-unjust-enrichment",
    title: "Ontario Unjust Enrichment — Enrichment, Deprivation, and Juristic Reason",
    excerpt:
      "Unjust enrichment in Ontario: three-part test from Pettkus v Becker [1980] 2 SCR 834 and Garland v Consumers' Gas Co [2004] 1 SCR 629 — (1) enrichment of defendant; (2) corresponding deprivation of plaintiff; (3) absence of juristic reason; two-stage juristic reason analysis (first stage: no recognized category — valid contract, disposition of law, donative intent; second stage: residual juristic reason, reasonable expectations, public policy); enrichment as objective incontrovertible benefit; change of position defence (Bank of America Canada v Mutual Trust [2002] 2 SCR 601 — good faith reliance reduces restitution); quantum meruit for services (reasonable market value — failed contract, no contract formed, beyond scope, post-breach alternative); constructive trust remedy (Lac Minerals [1989] 2 SCR 574 — linked to specific property, monetary remedy inadequate, priority over creditors); Soulos v Korkontzilas [1997] two constructive trust types; family law unjust enrichment (Kerr v Baranow [2011] 1 SCR 269 — joint family venture concept, mutual effort, economic integration, intent, family priority — value survived proportionate share vs service-by-service); common law spouses vs FLA Part I equalization rights; commercial unjust enrichment (payment under mistake — Peel v Canada [1992] including mistake of law; ultra vires taxes Kingstreet [2007]; benefits under failed agreements); limitation period 2-year discovery + 15-year ultimate; discoverability delayed in family cases.",
    date: "March 2026",
    readTime: "15 min read",
    tag: "Equity and Restitution",
  },
  {
    slug: "ontario-contract-remedies",
    title: "Ontario Contract Remedies — Damages, Specific Performance, and Rescission",
    excerpt:
      "Contract remedies in Ontario: expectation damages (benefit of bargain — value of performance minus value received; market differential for goods; Wrotham Park gain-based exceptional remedy); reliance damages (wasted expenditure alternative — defendant may prove bad bargain reduces recovery); remoteness Hadley v Baxendale (1854) two-limb rule (naturally arising losses + reasonably contemplated special losses — The Heron II [1969] serious possibility standard; Fidler [2006] 2 SCR 3); mitigation duty (Red Deer College v Michaels [1976] — defendant bears burden; Evans v Teamsters [2008] same-employer return); liquidated damages vs penalty clauses (H.F. Clarke v Thermidaire [1976] 1 SCR 319 in terrorem test; Cavendish Square legitimate interest reform not definitively adopted in Ontario); specific performance (Semelhago v Paramadevan [1996] — no longer automatic for real property; damages adequacy assessed; bars: affirmation, impossibility, supervision, hardship); injunctions enforcing negative covenants (prohibitory injunction available where specific performance refused; RJR-MacDonald [1994] interlocutory test); rescission (misrepresentation, mistake, undue influence, duress, unconscionability; bars: affirmation, lapse, third party rights, restitutio in integrum impossible); rectification (Performance Industries [2002] 1 SCR 678 — clear and convincing evidence of agreed terms; common and unilateral mistake); Limitations Act 2002 2-year discovery + 15-year ultimate; contractual limitation clauses valid above statutory minimum.",
    date: "March 2026",
    readTime: "16 min read",
    tag: "Contract Law",
  },
  {
    slug: "ontario-statutory-interpretation",
    title: "Ontario Statutory Interpretation — Modern Purposive Approach",
    excerpt:
      "Driedger modern principle adopted in Rizzo & Rizzo Shoes Ltd (Re) [1998] 1 SCR 27 — words read in entire context, grammatical and ordinary sense, harmoniously with scheme, object, and legislative intention; Legislation Act 2006 SO 2006 c 21 Sch F s.64 (remedial fair large liberal interpretation), s.89 (shall mandatory/may permissive), s.92 (headings part of Act in Ontario); textual analysis tools (ordinary vs technical meaning, expressio unius exclusion, ejusdem generis, contextual coherence, same word same meaning presumption); purposive interpretation — resolves ambiguity using long title, preamble, objects clause, Bell ExpressVu [2002] 2 SCR 559 (clear text no external aids); legislative history admissibility table (Hansard low weight, committee reports moderate, prior versions high, post-enactment statements inadmissible); presumptions (against retroactivity, Crown immunity Legislation Act s.71, strict construction of penal provisions, consistency in pari materia, constitutional validity, against absurdity applied in Rizzo); Charter-consistent interpretation (Oakes test s.1, reading in Vriend v Alberta [1998], reading down); Ontario-specific Legislation Act 2006 rules; practical six-step interpretive framework.",
    date: "March 2026",
    readTime: "14 min read",
    tag: "Legal Research",
  },
  {
    slug: "ontario-professional-negligence",
    title: "Ontario Professional Negligence — Duty, Standard of Care, and Damages",
    excerpt:
      "Professional negligence in Ontario: Anns/Cooper duty of care test (Cooper v Hobart [2001] 3 SCR 537 — proximity + foreseeability, policy negation); objective standard of care (reasonably competent practitioner at defendant's specialization level, expert evidence required); solicitor negligence (Central Trust v Rafuse concurrent contract/tort liability — categories: limitation misses, title defects, trust accounting errors, inadequate advice, document drafting, undertaking breaches; LAWPRO $1M/$2M coverage; causation trial-within-trial for litigation files); medical negligence (ter Neuzen v Korn specialty standard; informed consent Reibl v Hughes [1980] 2 SCR 880 modified objective reasonable patient test; Arndt v Smith [1997] causation; Clements v Clements [2012] material contribution to risk); architect/engineer liability (Construction Act certification, Hedley Byrne third-party reliance — Haig v Bamford [1977]); auditor liability (Hercules Management [1997] 2 SCR 165 — class of shareholders not individual investors; GAAP/GAAS standard; OSC Part XXIII.1 securities liability); defences (contributory negligence Negligence Act apportionment, volenti rarely succeeds, contractual limitation clauses, contribution among concurrent tortfeasors); limitation period table (2-year discovery + 15-year ultimate).",
    date: "March 2026",
    readTime: "16 min read",
    tag: "Professional Liability",
  },
  {
    slug: "ontario-employment-standards",
    title: "Ontario Employment Standards Act 2000 — Complete Guide",
    excerpt:
      "ESA 2000 minimum entitlements: hours of work (48-hour weekly limit, 11-hour daily rest, 30-minute eating period), overtime pay at 1.5x after 44 hours per week (management exemption fact-specific), minimum wage $17.20/hr (October 2024), vacation time and pay (2 weeks/4% after 1 year; 3 weeks/6% after 5 years), 9 public holidays with last-4-weeks pay formula, leaves of absence table (pregnancy 17 weeks, parental 61-63 weeks, personal emergency 3 paid days, family caregiver 8 weeks, domestic violence 10 days paid + 15 weeks unpaid), termination pay scale (1-8 weeks based on service), severance pay (1 week/year to 26 weeks maximum — requires 5+ years service AND $2.5M payroll), mass termination rules (50+ employees, 8-16 weeks enhanced notice, Form 1 MLTSD filing), ESA vs common law two-track system, Waksdale v Swegon North America Inc 2020 ONCA 391 (void termination clause), anti-reprisal protection s.74, 2-year limitation for ESA complaints.",
    date: "March 2026",
    readTime: "14 min read",
    tag: "Employment Law",
  },
  {
    slug: "ontario-corporate-law-incorporation",
    title: "Ontario Corporate Law: Incorporation, Governance, and Director Duties",
    excerpt:
      "Complete guide to Ontario corporate law under the Business Corporations Act RSO 1990 c B.16: OBCA vs CBCA comparison table (name protection, extra-provincial registration, residency requirements, annual reporting, cost, best use); articles of incorporation structure (share classes — Class A voting common, Class B non-voting participating for income splitting, Class C redeemable retractable preferred for estate freezes); corporate organization (by-laws, director election, officer appointment, audit waiver, banking resolution); shareholders' agreements (ROFR, drag-along, tag-along, buy-sell shotgun mechanism, reserved matters, non-compete/non-solicit, life events — death/disability buy-sell funded by insurance); director duties — fiduciary duty s.134(1)(a) to corporation not shareholders (BCE Inc v 1976 Debentureholders [2008] 3 SCR 560), duty of care s.134(1)(b) reasonably prudent person objective standard, business judgment rule (informed basis, good faith, no personal interest, documented process); director personal liability table (wages s.131 6 months, source deductions ITA s.227.1, HST ETA s.323, environmental — all with due diligence defence); annual obligations (AGM within 15 months, Service Ontario annual return 60 days, minute book at registered office, ISC register 25% beneficial ownership threshold s.140.1 OBCA 2023); oppression remedy s.248 (broadest corporate remedy — buyout at fair value, receiver, dividends, injunction, article amendment, set aside transaction).",
    date: "March 2026",
    readTime: "14 min read",
    tag: "Corporate Law",
  },
  {
    slug: "ontario-real-estate-closing",
    title: "Ontario Real Estate Closing: Title Insurance, Trust Ledgers, and Requisitions",
    excerpt:
      "Complete guide to Ontario residential real estate closings: APS review (closing date, requisition deadline, conditions, HST, chattels/fixtures); title search under Land Titles Act (Parcel Register via Teraview — mortgages, easements, covenants, executions, zoning, conservation authority, property taxes, condo status certificate); requisitions and responses (title defects, executions, permit compliance, survey issues, HST clearance); title insurance (FCT/Stewart/Chicago Title — defects, survey/compliance, liens, fraud/forgery, gap coverage — supplement not replacement for competent search); statement of adjustments (property tax apportionment, rent and security deposits, deposits, mortgage assumption); trust accounting for closing (mortgage advance wire, balance of purchase price, Land Transfer Tax — provincial and Toronto municipal, Teraview registration fees, mandatory same-day recording, two-client trust ledger, cleared funds before disbursing); electronic registration via Teraview (simultaneous release, undertaking regime — vendor discharge mortgages/executions, buyer register transfer/mortgage); common closing problems (funds shortage, last-minute construction lien gap coverage, delayed mortgage advance, title fraud KYC, new home HST rebate assignment).",
    date: "March 2026",
    readTime: "14 min read",
    tag: "Real Estate",
  },
  {
    slug: "ontario-residential-tenancy",
    title: "Ontario Residential Tenancy Law: RTA, LTB, Evictions, and Rent Increases",
    excerpt:
      "Complete guide to Ontario residential tenancy law under the Residential Tenancies Act 2006 SO 2006 c 17: scope and exemptions (new units post-November 15 2018 exempt from rent control); rent control (annual guideline tied to Ontario CPI, 90-day Form N1 notice, above-guideline increase AGI applications for extraordinary operating costs/eligible capital expenditures); N-form eviction table (N4 non-payment 14 days, N5 interference/damage/overcrowding 20 days first + void opportunity, N6 illegal act 10 days, N7 safety impairment 10 days, N8 persistent late/no longer needs unit 60 days, N12 own use 60 days, N13 demolition/renoviction 120 days); N12 own-use requirements (good faith principal residence one year, one month compensation, purchaser affidavit); N13 renoviction requirements (building permits before effect, right of first refusal, 3 months compensation); LTB applications table (L1/L2/L3/L4 landlord, T1/T2/T3/T5/T6 tenant); LTB hearing procedure (videoconference hearing blocks, disclosure package, rent ledger organization); s.83 relief from eviction (mandatory consideration in most grounds, conditional orders, delay); maintenance duty s.20 (not contractable, abatements 20-40% for mold/pests/no heat); entry rights s.27 (24-hour notice 8AM-8PM, emergency exception); enforcement via Court Enforcement Office (no self-help evictions, monetary orders enforced in court); practical N-form tips (accuracy of amounts, one-year own-use tracking).",
    date: "March 2026",
    readTime: "15 min read",
    tag: "Real Property",
  },
  {
    slug: "ontario-powers-of-attorney",
    title: "Ontario Powers of Attorney: Continuing POA, Personal Care POA, and Capacity",
    excerpt:
      "Complete guide to Ontario powers of attorney under the Substitute Decisions Act 1992 SO 1992 c 30: two-type comparison table (continuing POA for property vs personal care POA); continuing POA for property — capacity threshold s.8 (know property value, understand attorney authority, understand revocability, understand risk of decline and misuse), execution requirements (two witnesses, exclusions list including attorney/spouse/partner/child/minor/incapable person), continuing language requirement (without it revoked on incapacity), scope of authority (everything except make a will), gifting restrictions, attorney duties ss.38-40 (fiduciary, prudent investor, record-keeping, separate property, compensation formula 3% receipts/disbursements + 3/5% of 1% care fee); personal care POA — lower capacity threshold s.46 (age 16+, understands attorney will make decisions during incapacity), execution requirements, activates on incapacity, instructions/wishes binding on attorney s.66(3) (prior capable instructions prevail, no separate living will legislation in Ontario), attorney duties ss.66-68 (best interests, prior wishes/values, least restrictive, encourage participation); revocation/termination table; OPGT role (statutory guardian of property last resort, investigative function for financial exploitation); common drafting issues (missing continuing language, inadequate gifting restrictions, no substitute attorney, joint vs jointly-and-severally, springing POA logistics); capacity disputes (presumption of capacity, point-in-time assessment, medical evidence, contemporaneous lawyer notes).",
    date: "March 2026",
    readTime: "14 min read",
    tag: "Estates & Wills",
  },
  {
    slug: "ontario-securities-law",
    title: "Ontario Securities Law: OSC Enforcement, Disclosure Obligations, and Insider Trading",
    excerpt:
      "Complete guide to Ontario securities law under the Securities Act RSO 1990 c S.5: OSC dual mandate (investor protection + market efficiency); registration categories (Investment Dealer CIRO member, Exempt Market Dealer, Portfolio Manager, Investment Fund Manager); prospectus requirements and NI 45-106 exemptions (accredited investor $1M net financial assets or $200K income, minimum amount $150K, private issuer 50-shareholder cap, offering memorandum); continuous disclosure NI 51-102 (timely material change news release + 10-day report, annual audited financials 90 days, interim financials 45 days, CEO/CFO certifications Form 52-109F1); insider trading s.76 (material fact + undisclosed = prohibited; special relationship defined broadly to include lawyers/accountants/bankers; no fiduciary duty breach required — broader than US classical theory); tipping s.76(2) (disclosure of material undisclosed information outside necessary course of business); market manipulation s.126.1 and misleading statements s.126.2; OSC enforcement (investigation powers s.11-16, two-stage merits then sanctions hearing, balance of probabilities standard, sanctions include disgorgement/penalties up to $1M/market bans/costs); Part XXIII.1 civil liability (leave to proceed reasonable possibility standard, 3-year limitation, damages caps, due diligence defence); practical checklist (disclosure committee, documented materiality assessments, insider trading policies with blackout periods, special relationship awareness for external advisors, structured cooperation with counsel).",
    date: "March 2026",
    readTime: "15 min read",
    tag: "Securities Law",
  },
  {
    slug: "ontario-occupational-health-safety",
    title: "Ontario Occupational Health and Safety: Employer Duties, OHSA, and Workplace Investigations",
    excerpt:
      "Complete guide to Ontario OHSA RSO 1990 c O.1: scope and sector-specific regulations (Industrial Establishments O.Reg.851, Construction Projects O.Reg.213/91); employer duties s.25 — every precaution reasonable catch-all; supervisor personal duties s.27 (personal prosecution, fines up to $100,000 / 12 months); three worker rights (right to know WHMIS, right to participate JHSC, right to refuse unsafe work ss.43-45 procedure); JHSC requirements (20+ workers — composition, certification, quarterly meetings, monthly inspections, 21-day response obligation); critical injury and fatality reporting s.51 (immediate notification, scene preservation, 48-hour written report); Bill 168 (2009) and Bill 132 (2016) workplace violence and harassment (policy + program + risk assessment, domestic violence disclosure, harassment investigation procedure, Ministry investigator mechanism); reprisals s.50 (reversed burden of proof, OLRB jurisdiction, 60-day limitation period); Ministry of Labour inspection powers, order to comply, stop-work orders, OLRB appeal 30 days; offences and penalties s.66 (individual $100,000/12 months, corporation $1.5M, director/officer personal liability); due diligence defence (balance of probabilities, genuine OHS management system).",
    date: "March 2026",
    readTime: "14 min read",
    tag: "Employment Law",
  },
  {
    slug: "ontario-fatal-accidents",
    title: "Ontario Fatal Accidents: Wrongful Death Claims Under the Family Law Act",
    excerpt:
      "Complete guide to Ontario wrongful death claims under FLA s.61: derivative nature (deceased must have had valid claim); dependants defined (spouse including common-law, children, grandchildren, parents, grandparents, siblings — no financial dependency required); pecuniary losses s.61(1) — lost income dependency (net income minus personal consumption 25-33%, actuarial projection to retirement, present value discount, contingency deductions), household services replacement cost (market rate, occupational therapist evidence), funeral expenses; LGCC s.61(2) — non-pecuniary loss of guidance care and companionship (spouse $100,000–$150,000, minor child per parent $100,000–$150,000, adult child $50,000–$100,000, parent $100,000–$150,000, sibling $25,000–$75,000); contributory negligence Negligence Act (reduces all dependant claims proportionately); motor vehicle SABS coordination (death benefit $25,000, funeral $6,000, deduct from tort); Trustee Act s.38 estate claim (pre-death pain/suffering, medical expenses, loss of income before death — no future loss or non-pecuniary general damages); 2-year limitation period with discoverability (medical negligence deaths may be delayed); disability provision protects minor dependants until age 18.",
    date: "March 2026",
    readTime: "14 min read",
    tag: "Personal Injury",
  },
  {
    slug: "ontario-class-proceedings",
    title: "Ontario Class Proceedings: Certification, Common Issues, and Litigation",
    excerpt:
      "Complete guide to Ontario class actions under the Class Proceedings Act 1992: five-part certification test — cause of action (plain and obvious standard), identifiable class (objective definition, no merits assessment), common issues (some basis in fact, advance litigation without determining it, Hollick v Toronto [2001] 3 SCR 158), representative plaintiff (fair and adequate representation, workable litigation plan, no conflict), preferable procedure (access to justice plus efficiency); carriage disputes (Vitapharm factors — quality of definition, litigation plan, counsel experience, funding); common issues trial with aggregate damages under s.24 and cy-près distribution; individual issues hearings s.25; settlement approval (Dabbs v Sun Life factors — likelihood of recovery, discovery completed, litigation risk, counsel experience, objections); costs regime (s.31 protection for class members, litigation funding approval); Bill 161 amendments (2020) — preferable procedure factors, carriage codification, enhanced case management; practical checklist (early filing, expert evidence on commonality, comprehensive litigation plan, aggregate damages analysis, opt-out management, cy-près negotiation).",
    date: "March 2026",
    readTime: "15 min read",
    tag: "Civil Litigation",
  },
  {
    slug: "ontario-expropriation-law",
    title: "Ontario Expropriation Law: Compensation, Process, and Rights",
    excerpt:
      "Complete guide to Ontario expropriation law: Expropriations Act RSO 1990 c E.26 — four compensation heads (market value s.14, injurious affection s.21, disturbance damages s.18, special difficulties s.19); highest-and-best-use valuation with project increment excluded s.14(4); partial taking and severance; injurious affection without expropriation (no-taking statutory nuisance); advance payment obligation 100% of appraised value within 90 days s.25; interest on deficiency s.33; Board of Negotiation informal mediation process; LPAT hearing procedure with AACI appraiser evidence; s.32 full indemnity costs where award exceeds 85% of authority's final offer; business loss compensation for non-relocatable businesses; limitation periods (30 days to challenge approval, 1 year from plan registration for compensation claim, 1 year from damage apparent for no-taking injurious affection); practical checklist (engage appraiser immediately, preserve business records, review plan of expropriation, use Board of Negotiation strategically, track 85% costs threshold).",
    date: "March 2026",
    readTime: "14 min read",
    tag: "Real Property",
  },
  {
    slug: "ontario-solicitor-negligence",
    title: "Ontario Solicitor Negligence: Professional Liability for Lawyers",
    excerpt:
      "Complete guide to Ontario solicitor negligence and professional liability: standard of care (reasonably competent lawyer in similar circumstances, not perfection, concurrent liability in contract and tort — Central Trust Co v Rafuse [1986] 2 SCR 147); scope of retainer (express terms, reasonable client expectations, construed broadly in ambiguity); causation — but-for (trial within trial for missed limitation periods) vs loss of chance (Folland v Reardon 2005 74 OR (3d) 688 CA — real not speculative chance); common heads (missed limitation period most common, failure to advise on risks, real estate title defects highest volume, will drafting errors, inadequate settlement advice, conflict of interest); limitation periods (2-year discoverability, 15-year ultimate under s.15 Limitations Act 2002, beneficiary limitation runs from knowledge of deficiency); damages (lost claim value, transaction losses, consequential losses, estate losses, costs thrown away); contributory negligence (failure to follow advice, delay in instructions, failure to disclose material info); practical protection (written retainer, tickler system, document all advice, LAWPRO E&O mandatory for Ontario lawyers).",
    date: "November 2025",
    readTime: "13 min read",
    tag: "Professional Liability",
  },
  {
    slug: "ontario-product-liability",
    title: "Ontario Product Liability Law: Negligence, Warranty, and Consumer Protection",
    excerpt:
      "Complete guide to Ontario product liability: Donoghue v Stevenson [1932] AC 562 negligence foundation (duty of care to ultimate consumer, foreseeable users and bystanders); Anns/Cooper test (proximity, foreseeability, policy); three defect types — design defect (feasible alternative design), manufacturing defect (departure from intended design), warning/instruction defect (duty to warn extends post-sale); Lambert v Lastoplex [1972] SCR 569; learned intermediary doctrine for prescription drugs and medical devices; sophisticated user defence; Sale of Goods Act RSO 1990 c S.1 implied warranties (merchantable quality s.15(b), fitness for purpose s.15(a), sale by description s.14); Consumer Protection Act 2002 — unfair practices s.17, implied warranties cannot be disclaimed s.9; Class Proceedings Act 1992 certification requirements (common issues battleground, individual causation reserved); Winnipeg Condominium Corp v Bird Construction [1995] 1 SCR 85 for pure economic loss; 2-year limitation period with discovery rule; practical tips (preserve product, obtain all warning versions, identify full distribution chain, Health Canada post-market surveillance).",
    date: "November 2025",
    readTime: "13 min read",
    tag: "Personal Injury",
  },
  {
    slug: "ontario-human-rights-discrimination",
    title: "Ontario Human Rights Law: OHRC, HRTO Applications, and the Duty to Accommodate",
    excerpt:
      "Complete guide to Ontario human rights law: Ontario Human Rights Code RSO 1990 c H.19 — five social areas (services, housing, contracts, employment, vocational associations); protected grounds table (race, disability most litigated, family status childcare obligations, sex including gender identity/expression, creed, age, sexual orientation, receipt of public assistance in housing, record of offences in employment); HRTO direct application since 2008, 1-year limitation period s.34(1) with discretionary extension s.34(2); prima facie discrimination test (protected characteristic, adverse treatment, characteristic a factor — not sole or primary factor); burden shifts to respondent to justify; duty to accommodate to point of undue hardship s.17 — only recognized factors are cost, outside funding, and health/safety; individualized assessment (Central Okanagan v Renaud [1992] 2 SCR 970), cooperative process, medical information limited to functional limitations not diagnosis; family status childcare (Johnstone v CBSA 2014 FCA 110 — legal obligation, reasonable self-accommodation, material interference test); remedies (injury to dignity $5,000–$75,000, lost wages, reinstatement, systemic remedies); 75% settle at mandatory mediation.",
    date: "November 2025",
    readTime: "14 min read",
    tag: "Human Rights",
  },
  {
    slug: "ontario-construction-lien",
    title: "Ontario Construction Lien Law: A Practical Guide to the Construction Act",
    excerpt:
      "Complete guide to Ontario construction lien law under the Construction Act RSO 1990 c C.30 as amended by Bill 142 (2017): who has lien rights (contractors, subcontractors, suppliers, equipment lessors, professionals); holdback obligations — mandatory 10% basic holdback s.22, finishing holdback s.23, substantial performance definition s.2 (3%/2%/1% formula); critical deadlines table (lien preservation 60 days from last supply s.31(2), lien perfection 90 days after preservation s.36(1)); prompt payment regime (in force October 1 2019 for new contracts) — owner to contractor 28 days s.6.4(1), contractor to subcontractor 7 days s.6.5(1), proper invoice requirements s.6.1, notice of non-payment 14 days s.6.6(1); adjudication under Part II.1 (valuation, payment disputes, holdback disputes, 30-day decision, ODACC licensed adjudicators, immediately binding and enforceable, challenge only for fraud or breach of natural justice); Crown contracts application; practical tips (calendar preservation deadlines immediately, verify contract date for prompt payment applicability, lien rights survive contractor bankruptcy in certain circumstances).",
    date: "November 2025",
    readTime: "14 min read",
    tag: "Construction Law",
  },
  {
    slug: "ontario-mental-health-law",
    title: "Ontario Mental Health Law: Involuntary Admission, Form 1, and the Consent and Capacity Board",
    excerpt:
      "Complete guide to Ontario mental health law: Mental Health Act RSO 1990 c M.7, Health Care Consent Act 1996, and Substitute Decisions Act 1992; Form 1 (Application by Physician) s.15 criteria — serious bodily harm to person or others, or serious physical impairment, 72-hour detention for assessment, not suitable as voluntary patient; Form 2 (JP Order for Examination) s.16 — any person may apply, JP issues order, police take person to facility for examination; Forms reference table (Form 3 Certificate of Involuntary Admission 2 weeks, Form 4 Renewal 1/2/3 months, Form 14 Rights Advice Request, Form 30 CCB Application); rights advisement under s.38 MHA (rights adviser independent of facility, right to counsel, right to CCB application); Consent and Capacity Board jurisdiction (involuntary detention, incapacity findings, SDM decisions, CTOs — 7-day hearing, de novo, onus on hospital, appeal to Superior Court s.80 HCCA); community treatment orders s.33.1 MHA; fitness to stand trial and NCR (Criminal Code ss.2, 16) and Ontario Review Board jurisdiction; practical CCB hearing strategy.",
    date: "October 2025",
    readTime: "14 min read",
    tag: "Health Law",
  },
  {
    slug: "ontario-defamation-law",
    title: "Ontario Defamation Law: Libel, Slander, and Online Defamation",
    excerpt:
      "Complete guide to Ontario defamation law: libel (written/permanent, actionable per se, includes online posts and reviews) vs slander (oral, requires special damage except for four categories); elements of defamation (defamatory meaning, reference to plaintiff, publication to third party — falsity and damage presumed for libel once established); six principal defences — justification/truth (Grant v Torstar 2009 SCC 61), fair comment (WIC Radio v Simpson 2008 SCC 40), responsible communication on public interest (Grant v Torstar), absolute privilege (parliamentary and judicial proceedings), qualified privilege (employment references, police reports — malice defeats), consent; online defamation (anonymous John Doe actions, Norwich orders, platform liability after notice, Google delisting following Google v Equustek 2017 SCC 34, review site defamation); Libel and Slander Act RSO 1990 c L.12 — 6-week written notice requirement for newspaper and broadcast libel (complete bar, ss.5(1) and 6); damages (general damages, Hill v Church of Scientology [1995] 2 SCR 1130 — $1.6M general + $800K punitive, aggravated damages, punitive damages); anti-SLAPP motions s.137.1 Courts of Justice Act; 2-year limitation period single publication rule for online content.",
    date: "October 2025",
    readTime: "13 min read",
    tag: "Litigation",
  },
  {
    slug: "ontario-shareholder-oppression",
    title: "Ontario Shareholder Oppression: A Practical Guide to OBCA s.248",
    excerpt:
      "Complete guide to Ontario shareholder oppression under OBCA s.248 and CBCA s.241: complainant standing (security holder, former holder, director/officer, residual category for creditors and employees); reasonable expectations test from BCE Inc v 1976 Debentureholders 2008 SCC 69 (course of dealing, quasi-partnership expectations in closely held corporations); common fact patterns (exclusion from management, dilutive share issuance, salary extraction vs dividend denial, related party transactions at undervalue, withholding financial information); available remedies under s.248(3) (restraining order, requiring act to be done, varying transaction, receiver, share buy-out at fair value, winding up, investigation, compensation); oppression vs derivative action comparison (wrong to complainant vs wrong to corporation, no leave required, faster application procedure); valuation date dispute in buy-out orders; limitation period 2-year basic under Limitations Act 2002, ongoing oppression refreshes; procedure by application Rule 14 RCP, shotgun clause and arbitration stay risk.",
    date: "October 2025",
    readTime: "13 min read",
    tag: "Corporate Law",
  },
  {
    slug: "ontario-franchise-law",
    title: "Ontario Franchise Law: A Practical Guide to the Arthur Wishart Act",
    excerpt:
      "Ontario franchise law under the Arthur Wishart Act (Franchise Disclosure), 2000, SO 2000 c 3 and O.Reg. 581/00: who must disclose (franchise definition s.1, sub-franchisors); exemptions (single franchise, <$5,000 investment, fractional franchise <20%, renewal on same terms, transfer without compensation — Raibex Canada 2018 ONCA 62 narrow interpretation); franchise disclosure document (FDD) requirements (14-day delivery, material facts definition, financial statements, litigation history, estimated investment, territory rights, certificate s.5(9)); rescission rights — s.6(1) defective disclosure 60-day window vs s.6(2) no disclosure 2-year window (full refund plus net losses including leasehold improvements, equipment, inventory); duty of fair dealing s.3 (performance and enforcement of all franchise agreements, cannot be waived, Salah v Timothy's 2010 ONCA 673); common disputes (territorial encroachment, transfer refusal, system changes, rebrand, discriminatory supply pricing); limitation periods (2-year basic, 15-year ultimate for ongoing fair dealing claims).",
    date: "October 2025",
    readTime: "14 min read",
    tag: "Business Law",
  },
  {
    slug: "ontario-slip-and-fall",
    title: "Ontario Slip and Fall Law: Occupiers' Liability Act Guide",
    excerpt:
      "Practical guide to Ontario slip and fall claims under the Occupiers' Liability Act, RSO 1990, c O.2: duty of care standard (s.3(1)), who qualifies as an occupier (physical possession or control test), winter maintenance standards, co-occupier concurrent liability, Waldick v Malcolm [1991] 2 SCR 456, Stewart v Pettie [1995] 1 SCR 131; municipal liability under Municipal Act 2001 s.44(10) — 10-day written notice requirement (complete bar, no prejudice exception under s.44(12)), Minimum Maintenance Standards O.Reg. 239/02 safe harbour; contributory negligence under the Negligence Act RSO 1990 c N.1 (inappropriate footwear 10-25%, distraction 15-30%, ignoring hazard 25-50%); damages (general damages, Andrews cap ~$440,000, future care OT report, past income loss); limitation periods — 2-year basic limitation, minor exception s.6, Crown claims Proceedings Against the Crown Act; investigation checklist (surveillance footage preservation, 10-day municipal notice, Environment Canada weather data, maintenance logs).",
    date: "October 2025",
    readTime: "12 min read",
    tag: "Personal Injury",
  },
  {
    slug: "ontario-access-to-information",
    title: "Ontario Access to Information: MFIPPA, FIPPA, and Freedom of Information Requests",
    excerpt:
      "Ontario freedom of information guide: FIPPA (provincial — ministries, Crown agencies, hospitals, universities, R.S.O. 1990 c.F.31) vs MFIPPA (municipal — cities, police services boards, school boards, conservation authorities, R.S.O. 1990 c.M.56); institutions table; general right of access (FIPPA s.10/MFIPPA s.4 — anyone, no justification required, burden on institution to justify refusal); how to submit request ($5 fee, FOI Coordinator, specificity tips); response timelines table (30-day initial, extension up to 30 days additional, deemed refusal if no response); fees and fee waiver (search $7.50/15min, preparation $7.50/15min, copies $0.20/page; waiver for personal information or deprivation of access); mandatory exemptions (s.21 personal privacy, s.17 third-party information); discretionary exemptions (s.13 advice to government, s.14 law enforcement, s.19 solicitor-client privilege — institution's own privilege); IPC appeal process ($25 fee, 30-day appeal deadline, mediation 3–6 months, adjudication 1–3 years, IPC Orders binding); strategic litigation use (police records, municipal approvals, ministry decision records, FOI vs undertakings) (2025).",
    date: "March 2025",
    readTime: "14 min read",
    tag: "Administrative Law",
  },
  {
    slug: "ontario-above-guideline-rent-increase",
    title: "Ontario Above Guideline Rent Increase (AGI): Qualifying Grounds, LTB Application, and Tenant Rights",
    excerpt:
      "Ontario AGI rent increase guide under Residential Tenancies Act 2006: rent increase guideline table (2025 = 2.5%); units exempt from rent control (first occupied after November 15 2018 — RTA s.6.1 as amended 2019); AGI grounds (capital expenditures: eligible improvements/replacements amortized over useful life per O.Reg.516/06 vs routine maintenance; extraordinary operating cost increases: municipal taxes, utilities, insurance, security — management fees and mortgage costs excluded); LTB Form L5 application process (5-day tenant notice, hearing, N2 Form 90-day notice requirement); tenant defences (maintenance bar s.126(12) serious breach — link T6 maintenance application; capital expenditure eligibility challenges; operating cost calculation disputes); AGI order mechanics (above guideline % stacked on annual guideline; amortization period for capital expenditures); vacancy decontrol; 12-month gap requirement (2025).",
    date: "March 2025",
    readTime: "13 min read",
    tag: "Landlord-Tenant Law",
  },
  {
    slug: "ontario-impaired-driving-defence",
    title: "Ontario Impaired Driving Defence: Criminal Code Offences, ASD Demands, and Charter Remedies",
    excerpt:
      "Ontario impaired driving defence guide: Criminal Code Part VIII.1 ss.320.14–320.18 offence table (impaired operation, over 80, BDC drug offences, refusal, aggravated 120+ and 160+); mandatory alcohol screening s.320.27 (Bill C-46 2018 — no suspicion required, upheld R v Sullivan; R v Brown 2022 SCC 19); ASD results (pass/warn/fail → Intoxilyzer demand); Intoxilyzer certificate presumption s.320.31; Carter defence eliminated post-Bill C-46 (must now prove malfunction AND proper reading sub-80); drug-impaired BDC limits table (THC 2 ng/mL summary / 5 ng/mL indictable, cocaine/meth 5 μg/L, combo offence THC + alcohol); defences (instrument malfunction, improper operation, bolus drinking narrow, Charter); Charter arguments (s.10(b) right to counsel delay, s.8 unlawful breath demand, s.9 arbitrary detention, s.24(2) Grant test — R v Grant 2009 SCC 32); sentencing table (1st $1,000/1-yr prohibition, 2nd 30 days/2-yr, 3rd 120 days/3-yr, aggravated higher mandatory minimums, causing death max life); HTA consequences (IRS, ignition interlock, insurance); Ontario Court of Justice procedure (disclosure, Charter application, voir dire, diversion) (2025).",
    date: "March 2025",
    readTime: "15 min read",
    tag: "Criminal Defence",
  },
  {
    slug: "ontario-statutory-accident-benefits",
    title: "Ontario Statutory Accident Benefits (SABS): Accident Benefit Categories, Tort Threshold, and FSRA Dispute Resolution",
    excerpt:
      "Complete Ontario SABS guide under Insurance Act O. Reg. 34/10: two-track system (accident benefits no-fault + tort fault-based); benefit categories table (IRB $400/week, medical/rehab $65,000 non-cat/$1,000,000 cat, attendant care $36,000/$1,000,000, caregiver and housekeeping eliminated for non-cat in 2016 amendments); Minor Injury Guideline (MIG cap $3,500 combined medical/rehab for sprains, strains, WAD I/II; escaping MIG: pre-existing condition documented before accident or psychological impairment); catastrophic impairment definition (paraplegia, amputation, blindness, TBI, WPI 55%+, Class 4/5 mental impairment in 3 of 4 categories — AMA Guides 4th ed.); enhanced optional coverages table; Insurance Act s.267.5 verbal threshold (permanent serious disfigurement or permanent serious impairment of important physical/mental/psychological function); deductible 2025 values ($47,647.43 / $158,824.77 threshold, Family Law Act $23,823.71); FSRA LAT dispute resolution process (IDR, LAT application within 2 years of denial, reconsideration, Divisional Court JR); limitation periods table (7-day accident notice, 30-day application, 2-year tort, 2-year LAT, 10-day municipal notice, 15-year ultimate); DCPD post-2024 optional (2025).",
    date: "February 2025",
    readTime: "16 min read",
    tag: "Personal Injury",
  },
  {
    slug: "ontario-lso-fintrac-reporting",
    title: "FINTRAC Reporting for Ontario Lawyers: Client Identification, Large Cash Rules, and Anti-Money Laundering Obligations",
    excerpt:
      "Ontario lawyers&apos; FINTRAC and AML obligations: Proceeds of Crime (Money Laundering) and Terrorist Financing Act (PCMLTFA) lawyer provisions; Law Society of BC v Canada 2021 SCC 31 constitutional exemption (mandatory reporting violates solicitor-client privilege); LSO Rules of Professional Conduct obligations (Rule 3.2-7 no facilitation of money laundering, Rule 3.2-1 know-your-client verification); client identification requirements for individuals (government ID) and corporations (articles, directors, beneficial owners over 25%); politically exposed persons enhanced due diligence; cash payment risk (Criminal Code s.462.31 proceeds of crime offence); suspicious retainer red flags table (unexplained large funds, third-party retainer payment, structured transactions, rapid trust account movement); withdrawal obligation Rule 7.8-1; tipping off prohibition; real estate high-risk transactions (source of funds, beneficial ownership, pre-construction assignment flips); client ID records retention 6 years; paralegal AML obligations under Paralegal Rules of Conduct Rule 3.02(3) (2025).",
    date: "February 2025",
    readTime: "14 min read",
    tag: "Professional Responsibility",
  },
  {
    slug: "ontario-paralegal-trust-accounting",
    title: "Ontario Paralegal Trust Accounting: LSO By-Law 9 Rules, Mixed Trust Accounts, and Monthly Reconciliation",
    excerpt:
      "Complete guide to paralegal trust accounting in Ontario: LSO By-Law 9 Part III paralegal-specific rules; who must maintain trust accounts (retainers, damage awards, disbursement funds); mixed/pooled trust account vs specific trust account; interest remitted to Law Foundation of Ontario; client ledger requirements (date, amount, source, disbursement purpose, running balance — never negative); trust receipts (deposit same or next business day); disbursements from trust (funds must be available in client ledger, earned fees only transferred after invoice issued); monthly reconciliation three-way test (bank statement = receipts/disbursements journal = sum of client ledger balances); designated financial institutions (major chartered banks, credit unions with LSO agreement, no fintech); bank service charges cannot reduce trust balance; trust shortfalls (report immediately to LSO under Paralegal Rules of Conduct Rule 9.01(1)); common audit failures table (no reconciliation, commingling, fees taken before earned, bank fees from trust, no client ledgers, late deposits, inadequate file closure); records retention 10 years; trust account exemption under By-Law 9 s. 8 (2025).",
    date: "February 2025",
    readTime: "15 min read",
    tag: "Paralegal Compliance",
  },
  {
    slug: "ontario-promissory-note",
    title: "Ontario Promissory Notes: Requirements, Holder in Due Course, and Limitation Periods",
    excerpt:
      "Bills of Exchange Act R.S.C. 1985 c. B-4 federal legislation governing promissory notes across Canada; requirements table (unconditional promise in writing, signed by maker, sum certain in money, payable on demand or fixed/determinable date, payee identified); demand notes vs fixed term notes (demand: cause of action on date of demand, common in shareholder loans; fixed term: maturity date, acceleration clauses); interest provisions (fixed rate, floating rate, default interest, Criminal Code s.347 criminal rate 60% effective annual rate); holder in due course (complete and regular on face, before maturity, no notice of dishonour, good faith and value, no notice of defects — HDC takes free of personal defences: failure of consideration, set-off, breach of contract, payment); real defences table (forgery, fraud in the factum, incapacity minors, illegality, material alteration — available against all holders including HDC); negotiation and endorsement (blank, special, restrictive); consumer notes BEA s.189.2 (HDC rules restricted — holder takes subject to consumer&apos;s defences against original supplier); Limitations Act 2002 (demand notes: two-year period from date of demand; fixed term: from maturity date; acknowledgment/partial payment resets period); shareholder loans and promissory notes (ITA s.80.4 interest imputed, s.15(2) shareholder loan income inclusion if repaid after one year) (2025).",
    date: "February 2025",
    readTime: "12 min read",
    tag: "Commercial Law",
  },
  {
    slug: "ontario-resulting-trust",
    title: "Ontario Resulting Trusts: Automatic Resulting Trusts, Presumption of Advancement, and Unjust Enrichment",
    excerpt:
      "Resulting trust — beneficial interest results back to original transferor from presumed or actual common intention at time of transfer (not remedial); two categories: automatic resulting trusts (failed express trust, surplus of trust property, incomplete disposal of beneficial interest) and presumed resulting trusts (gratuitous transfer — transferee holds on trust, rebuttable by transferee showing gift intention); presumption of advancement (parent to minor child: advancement presumed; parent to adult child: advancement weakened — Pecore v Pecore 2007 SCC 17; spouses: FLA equalization and constructive trust; common law partners: resulting trust and unjust enrichment); comparison table (strangers: resulting trust; parent-minor child: advancement; parent-adult child: weakened advancement; spouses: FLA regime; common law: resulting trust/unjust enrichment); joint bank accounts (Pecore — parent adds adult child for convenience, child claims survivorship gift — presumption of advancement applies but rebuttable by examining stated purpose, use during lifetime, tax treatment); purchase money resulting trust (A pays purchase price, title in B&apos;s name — proportional beneficial interest; post-purchase mortgage payments not extended); resulting trust vs constructive trust (Kerr v Baranow 2011 SCC 10; Pettkus v Becker [1980] 2 SCR 834); Limitations Act 2002 two-year discovery period (2025).",
    date: "February 2025",
    readTime: "12 min read",
    tag: "Trust Law",
  },
  {
    slug: "ontario-solicitor-negligence",
    title: "Ontario Solicitor Negligence: Standard of Care, Causation, and Limitation Periods",
    excerpt:
      "Central Trust Co v Rafuse [1986] 2 SCR 147 (concurrent duty of care in contract and tort, co-extensive with retainer); standard of care (reasonably competent solicitor in same circumstances — not perfection; LSO Rules relevant but not determinative); elements table (real estate: title/off-title searches, reporting letter; wills: testamentary capacity, proper execution; litigation: limitation periods, pleadings; corporate: due diligence, PPSA; employment: Waksdale-compliant termination clauses); but-for causation (Clements v Clements 2012 SCC 32; lost litigation: trial within a trial — prove underlying claim would have succeeded on balance of probabilities); loss of chance (Folland v Reardon 2005 ONCA — but-for test applies, proportional loss of chance not adopted in Ontario); scope of retainer limitation; defences table (no breach of standard, no causation, informed consent, contributory negligence Negligence Act, limitation period, scope of retainer); damages (lost litigation value, diminution in value, wasted costs, consequential losses, non-pecuniary for peace of mind retainers); Limitations Act 2002 two-year discovery period (knowledge of loss caused by lawyer, not knowledge of legal breach); LAWPRO $1M per claim/$2M per year coverage (2025).",
    date: "February 2025",
    readTime: "12 min read",
    tag: "Professional Negligence",
  },
  {
    slug: "ontario-non-compete",
    title: "Ontario Non-Compete and Non-Solicitation Clauses: Enforceability and Limits",
    excerpt:
      "ESA s.67.2 (Working for Workers Act 2021, effective October 25 2021) prohibits non-compete agreements in employment contracts — void, not merely unenforceable; sale of business exception (seller becomes employee of purchaser — assessed under common law reasonableness test not prohibited outright); non-solicitation clauses (client and employee solicitation restrictions — not prohibited by ESA s.67.2, enforceable at common law if reasonable in scope duration geography); comparison table (non-compete employment: void post-2021; non-compete sale of business: common law test; non-solicitation clients/employees: common law test; confidentiality: no duration cap if tied to trade secret); common law reasonableness test (Elsley v JG Collins Insurance Agencies Ltd [1978] 2 SCR 916 — legitimate proprietary interest, reasonable as between parties, not contrary to public interest; duration 6–24 months typical; geographic scope; activity limitation); Shafron v KRG Insurance Brokers (Western) Inc 2009 SCC 6 — no notional severance/reading down in employment context, true blue-pencil only; confidentiality clauses not prohibited (trade secrets, pricing, proprietary client data); injunctive relief RJR-MacDonald test (serious question, irreparable harm, balance of convenience); commercial agreement non-competes (greater enforceability, arm&apos;s length parties, legal advice); Limitations Act 2002 two-year period (2025).",
    date: "January 2025",
    readTime: "13 min read",
    tag: "Employment Law",
  },
  {
    slug: "ontario-wrongful-dismissal",
    title: "Ontario Wrongful Dismissal: Reasonable Notice, Bardal Factors, and Damages",
    excerpt:
      "Wrongful dismissal in Ontario — employer terminates without providing reasonable notice at common law, no just cause; breach of implied contractual term; Bardal v Globe & Mail Ltd (1960) 24 DLR (2d) 140 (Ont HC) factors (character of employment, length of service, age, availability of similar employment); additional factors (inducement to leave secure employment — Minott v O&apos;Shanter Development Co 1999 ONCA); ESA termination pay (s.57, 1 week/year, 8-week cap) and severance pay (s.64, 5-year/2.5M payroll threshold, 26-week cap) as floor not ceiling; Waksdale v Swegon North America Inc 2020 ONCA 391 (void for-cause clause voids entire termination provision); moral/Honda damages (Honda Canada Inc v Keays 2008 SCC 39 — bad faith in manner of dismissal, mental distress beyond ordinary distress, compensatory not punitive); punitive damages (Whiten v Pilot Insurance 2002 SCC 18 — malicious, oppressive, high-handed); group terminations ESA s.58 (50–199 employees: 8 weeks additional); duty to mitigate (Red Deer College v Michaels, Evans v Teamsters 2008 SCC 20 — return to same employer may be required); Limitations Act 2002 two-year period (2025).",
    date: "January 2025",
    readTime: "14 min read",
    tag: "Employment Law",
  },
  {
    slug: "ontario-corporate-dissolution",
    title: "Ontario Corporate Dissolution: Voluntary Winding Up and Dissolution of OBCA Corporations",
    excerpt:
      "OBCA s.237 voluntary dissolution — two pathways (no property/liabilities: file articles signed by all directors; with property/liabilities: special resolution two-thirds majority, wind up affairs, pay creditors, distribute to shareholders, file articles); priority of payments table (secured creditors, CRA Crown claims, employee wages ESA s.81, unsecured creditors, shareholders); CRA tax clearance certificate Form TX19 (not statutory precondition but strongly advisable — director liability protection under ITA s.227.1 source deductions and ETA s.323 HST/GST); final T2 return (six months after year-end ITA s.150(1)); HST/GST on deemed dispositions; ESA termination and severance pay obligations; director personal liability table (source deductions ITA s.227.1, HST/GST ETA s.323, wages OBCA s.131 — all two-year limitation from ceasing director); involuntary dissolution by Director OBCA s.240 (failure to file annual returns); revival OBCA s.241 (deemed to have continued as if not dissolved); court-ordered winding up OBCA s.207 (just and equitable, deadlock, oppression); 10-step practical dissolution checklist; Limitations Act 2002 two-year period (2025).",
    date: "January 2025",
    readTime: "13 min read",
    tag: "Corporate Law",
  },
  {
    slug: "ontario-just-cause-dismissal",
    title: "Ontario Just Cause Dismissal: What Employers Must Prove",
    excerpt:
      "Just cause for dismissal at common law requires misconduct sufficiently serious to justify summary termination without notice — McKinley v BC Telephone Company 2001 SCC 38 contextual proportional approach (nature and degree of misconduct, circumstances of employment, employee&apos;s record, proportionality test replacing binary honest/dishonest approach); common grounds table (dishonesty/theft, insubordination, absenteeism, harassment, conflict of interest, incompetence — each requiring threshold seriousness, surrounding circumstances, and proportionality analysis); progressive discipline (warning, written warning, suspension, dismissal sequence; condonation risk if employer is aware and takes no action — Bartholomew v Transglobe Energy Corp 2016 ONSC); ESA wilful misconduct standard vs common law just cause (ESA higher threshold — wilful, deliberate misconduct or disobedience; no termination pay or notice required only if ESA wilful misconduct met); employer burden of proof (balance of probabilities; after-acquired cause admissible if discovered before dismissal finalized — McKinley principle extended); last straw doctrine (culminating incident trivial in isolation but sufficient given established pattern — Donahue v Pivot Technology Solutions 2016 ONCA); Limitations Act 2002 two-year period for wrongful dismissal claims (2024).",
    date: "January 2025",
    readTime: "13 min read",
    tag: "Employment Law",
  },
  {
    slug: "ontario-constructive-dismissal",
    title: "Ontario Constructive Dismissal: Elements, Common Forms, and Employee Rights",
    excerpt:
      "Constructive dismissal: employer unilaterally makes fundamental change to essential employment terms or repudiates contract entirely; Potter v New Brunswick Legal Aid Services Commission 2015 SCC 10 two-branch test (Branch 1: unilateral act breaching essential term; Branch 2: employer conduct showing intent not to be bound); common forms (significant pay cut 10%+, demotion, removal of duties, forced relocation without contractual authority, poisoned work environment, change in core hours, imposition of new restrictive covenants); election of remedies (accept change, resign and claim, object under protest — prompt resignation required, delay and continued employment risks acceptance); Evans v Teamsters 2008 SCC duty to mitigate (return to same employer where reasonable, comparable employment standard); damages (common law reasonable notice — Bardal factors, ESA minimums as floor, moral/aggravated damages Honda Canada v Keays 2008 SCC 26, punitive damages in exceptional cases, mitigation deduction); Limitations Act 2002 two-year period from date of constructive dismissal (2024).",
    date: "December 2024",
    readTime: "12 min read",
    tag: "Employment Law",
  },
  {
    slug: "ontario-directors-duties",
    title: "Ontario Directors' Duties: Fiduciary Duty, Duty of Care, and Personal Liability",
    excerpt:
      "Fiduciary duty OBCA s.134(1)(a) and CBCA s.122(1)(a) (act honestly and in good faith with a view to best interests of corporation — BCE Inc v 1976 Debentureholders [2008] 3 SCR 560: duty owed to corporation, may consider stakeholder interests in determining best interests), duty of care OBCA s.134(1)(b) (reasonably prudent person standard, enhanced for experts, reliance on experts defence OBCA s.135(4)), business judgment rule (good faith, no conflict, reasonably informed, within range of reasonable decisions — Maple Leaf Foods v Schneider Corp 1998 ONCA), conflict of interest disclosure OBCA s.132 (written disclosure, no vote on conflicted resolution, general notice provision), personal liability for wages OBCA s.131 (six months, joint and several, two-year limitation after ceasing to be director, subrogation), source deductions ITA s.227.1 and HST/GST ETA s.323 (joint and several, due diligence defence — reasonably prudent person standard to prevent failure), director resignation (written with date, Corporations Information Act notice within 15 days, liability for amounts accruing before resignation, de facto directorship risk) (2024).",
    date: "December 2024",
    readTime: "13 min read",
    tag: "Corporate Law",
  },
  {
    slug: "ontario-derivative-action",
    title: "Ontario Derivative Actions: Enforcing Corporate Rights Under the OBCA and CBCA",
    excerpt:
      "Derivative action enforces a right of the corporation — recovery flows to the corporation not the complainant personally; proper plaintiff rule Foss v Harbottle (1843) modified by statute; OBCA s.246 and CBCA s.239 leave requirements: 14-day notice to directors, good faith test (personal hostility or collateral purpose defeats good faith — Discovery Enterprises Inc v Ebco Industries Ltd 1997 BCCA), best interests of corporation (prima facie merits analysis, business judgment rule deference reduced for conflicted board decisions, independent special committee weight); complainant definition OBCA s.245 (registered/beneficial shareholders, former shareholders, directors, officers, court&apos;s discretion for creditors); recovery to corporation (complainant benefits only indirectly through increased share value); costs indemnity orders (court orders corporation to pay complainant&apos;s legal fees); settlement requires leave of court OBCA s.246(5); comparison with oppression remedy OBCA s.248 (personal remedy, no leave required, no notice required, broader standing) (2024).",
    date: "December 2024",
    readTime: "12 min read",
    tag: "Corporate Law",
  },
  {
    slug: "ontario-mortgage-enforcement",
    title: "Ontario Mortgage Enforcement: Power of Sale, Foreclosure, and Remedies",
    excerpt:
      "Mortgages Act R.S.O. 1990 power of sale procedure (default, acceleration, 35-day notice of sale under s.33, redemption period, marketing duty to sell at fair market value, proceeds waterfall to costs/debt/subsequent encumbrancers/surplus to mortgagor), foreclosure court action (extinguishes equity of redemption and personal covenant — lender gets title but loses deficiency claim), deficiency claims (power of sale preserves personal covenant, two-year limitation from sale completion), priority of charges under LTA s.78 (first registered first in priority, postponement agreements, Construction Lien Act priority, CRA Crown claims, Condominium Act s.85 three-month common expense super-priority), mortgagee in possession liability (prudent management duty, strict accounting for rents), court-appointed receiver for commercial properties (2024).",
    date: "December 2024",
    readTime: "13 min read",
    tag: "Real Estate / Finance Law",
  },
  {
    slug: "ontario-commercial-lease",
    title: "Ontario Commercial Lease Law: Key Clauses, Landlord and Tenant Rights, and Disputes",
    excerpt:
      "Commercial Tenancies Act (not Residential Tenancies Act) governs Ontario commercial leases, gross vs net vs triple-net (NNN) lease structures, distress (distraint) for unpaid rent under CTA Part II (bailiff required, exempt goods, five-day notice before sale), forfeiture and re-entry (right of re-entry clause required, s.19 waiver by accepting rent, notice for non-rent breaches), relief from forfeiture (CTA s.20, Courts of Justice Act s.98), assignment and subletting (no statutory reasonableness requirement for refusal, recapture clause, ROFO/ROFR), demolition and relocation clauses (notice period, permit trigger, compensation), repair and maintenance obligations (HVAC disputes, end-of-term restoration), quiet enjoyment covenant CTA s.18 (lockout, service cutoff, construction interference), Limitations Act 2002 two-year period for rent arrears and lease claims (acknowledgment resets period) (2024).",
    date: "December 2024",
    readTime: "14 min read",
    tag: "Commercial Real Estate",
  },
  {
    slug: "ontario-trespass-to-land",
    title: "Ontario Trespass to Land: Elements, Defences, and Remedies",
    excerpt:
      "Trespass to land is actionable per se in Ontario — direct voluntary intentional act onto land in plaintiff&apos;s possession without lawful authority or consent; no damage required; nominal damages available; continuing trespass gives fresh cause of action each day; defences (licence revocable at will unless coupled with interest, consent, legal authority within scope, necessity); mesne profits (fair rental value of wrongful occupation, not trespasser&apos;s actual profit); injunction (mandatory removal, Jaggard v Sawyer discretion to award damages in lieu); encroachment (overhanging branches, structures crossing boundary, AOLS survey required); Trespass to Property Act TPA R.S.O. 1990 (provincial offence, fines up to $10,000, separate from civil remedies); adverse possession (Real Property Limitations Act 10-year open continuous exclusive as-of-right inconsistent-use test — Keefer v Arillotta 1976 ONCA; Limitations Act 2002 abolishes for Land Titles absolute title post-2006) (2024).",
    date: "December 2024",
    readTime: "12 min read",
    tag: "Property Law / Tort",
  },
  {
    slug: "ontario-rectification",
    title: "Ontario Rectification: Correcting Mistakes in Written Contracts and Instruments",
    excerpt:
      "Rectification corrects a written document to reflect the true prior agreement of the parties — common intention rectification requirements (Joscelyne v Nissen [1970] 2 QB 86, Canada AG v Fairmont Hotels 2016 SCC 56: prior concluded agreement on specific term, continuing unchanged to execution, failure to record, clear and convincing evidence), unilateral mistake rectification (A Roberts v Leicestershire CC: knowledge of mistake plus sharp practice), parol evidence rule exception for rectification, rectification of deeds and registered instruments (Land Titles Act bona fide purchaser bar, registration of court order required), rectification of wills (clerical error and failure to implement testator instructions — SLRA inherent jurisdiction), defences (bona fide purchaser for value, laches, affirmation, impossibility of precise rectification), Limitations Act 2002 two-year discoverability period, procedure (Rule 14.05 application vs action), pleading requirements (2024).",
    date: "December 2024",
    readTime: "13 min read",
    tag: "Contract Law / Equity",
  },
  {
    slug: "ontario-easements-restrictive-covenants",
    title: "Ontario Easements and Restrictive Covenants: A Complete Guide",
    excerpt:
      "Four Re Ellenborough Park requirements for an easement (dominant and servient tenement, accommodation, different owners, capable of grant), express implied and prescriptive easements (Real Property Limitations Act 20-year open continuous as-of-right use), Limitations Act 2002 bar on prescriptive acquisition for Land Titles absolute title, Wheeldon v Burrows implied easements on grant, easements of necessity, extinguishment (express release, unity of ownership, abandonment requiring animus dereliquendi — Tehrani v Markov 2009 ONCA), Tulk v Moxhay restrictive covenants running in equity (negative in substance, benefit retained land, notice, benefit passed to plaintiff), positive covenants not running at law (Austerberry, Halsall v Brizell chain of indemnity), building schemes (Elliston v Reacher four requirements), CLPA s.61 discharge applications (obsolete by neighbourhood change — Re Beale 1975, no practical benefit, agreement, no injury), registration under Land Titles Act, remedies (injunction, damages in lieu Courts of Justice Act s.99, declaration, mandatory removal order) (2024).",
    date: "December 2024",
    readTime: "14 min read",
    tag: "Property Law",
  },
  {
    slug: "ontario-specific-performance",
    title: "Ontario Specific Performance: When Courts Order Contract Performance",
    excerpt:
      "Inadequacy of damages as foundational prerequisite for specific performance, real property traditional uniqueness presumption and Semelhago v Paramadevan [1996] 2 SCR 415 modification (residential land not automatically unique — purchaser must establish particular and special value not compensable in damages), commercial and development land stronger candidates, vendor specific performance claim, specific performance beyond real estate (unique goods under Sale of Goods Act s.51, share purchase agreements for controlling interests, intellectual property), no specific performance for personal service contracts, negative covenant enforcement by injunction, hardship defence (disproportion between burden and benefit), laches and delay (Limitations Act 2002 two-year period plus equitable laches), clean hands and plaintiff&apos;s default (ready willing able to complete), mutuality requirement, part performance (oral land contracts in equity), damages in lieu under Courts of Justice Act s.99 (equitable damages for specific value including development value), certificate of pending litigation to preserve specific performance remedy.",
    date: "December 2024",
    readTime: "13 min read",
    tag: "Civil Litigation",
  },
  {
    slug: "ontario-mareva-injunction",
    title: "Ontario Mareva Injunctions: Asset Freezing Orders, Requirements, and Worldwide Relief",
    excerpt:
      "Mareva injunction purpose (prevent dissipation of assets pending judgment), Ontario test from Chitel v Rothbart (1982) 39 OR (2d) 513 CA: strong prima facie case (higher than American Cyanamid serious question to be tried), real risk of asset dissipation (not mere financial difficulty — positive evidence of deliberate conduct required: prior fraud, asset transfers, offshore connections), balance of convenience, cross-undertaking as to damages (plaintiff liability if order wrongfully granted, court may require security), standard terms (asset freeze, sworn disclosure of all assets, living expenses and legal fees carve-outs), ex parte applications and absolute duty of full and frank disclosure (material adverse facts must be disclosed — order set aside for non-disclosure even if otherwise entitled), worldwide Mareva orders (assets outside Ontario, higher standard, Babanaft proviso for non-parties), setting aside grounds (non-disclosure, no prima facie case, no real dissipation risk), Anton Piller civil search orders (extremely strong prima facie case, serious potential damage, real possibility of destruction — IP and fraud proceedings), contempt for breach (Carey v Laiken 2015 SCC 17 three-part test: clear order, knowledge, intentional act).",
    date: "December 2024",
    readTime: "13 min read",
    tag: "Civil Litigation",
  },
  {
    slug: "ontario-fraudulent-misrepresentation",
    title: "Ontario Fraudulent Misrepresentation: Elements, Rescission, and Damages",
    excerpt:
      "Five elements of fraudulent misrepresentation (Derry v Peek (1889) 14 App Cas 337: false representation of fact, knowledge of falsity or recklessness, intention to induce, actual inducement, resulting loss), statements of opinion as fact (representor does not hold the opinion expressed), puffery not actionable, fraud vs negligence distinction (dishonesty required — gross negligence insufficient), rescission remedy (void ab initio, bars: affirmation, lapse of time, impossibility of restitutio, third party rights), all-or-nothing bar to partial rescission, tort damages all caused losses recoverable including unforeseeable (Doyle v Olby adopted Ontario), fraudulent concealment (partial disclosures, representations becoming false, half-truths), negligent misrepresentation distinction (Queen v Cognos [1993] 1 SCR 87, Hedley Byrne: special relationship, no dishonesty required, foreseeable losses only), real estate transactions (latent vs patent defects, OREA APS representations, post-closing merger in deed), limitation period discoverability for concealed fraud.",
    date: "December 2024",
    readTime: "13 min read",
    tag: "Civil Litigation",
  },
  {
    slug: "ontario-issue-estoppel-res-judicata",
    title: "Ontario Issue Estoppel, Res Judicata, and Abuse of Process: Finality of Litigation",
    excerpt:
      "Issue estoppel three-part Danyluk test (Danyluk v Ainsworth Technologies 2001 SCC 44: same issue necessarily decided, final decision on merits, same parties or privies), court retains discretion to refuse application where injustice would result, same issue requirement (necessarily decided not merely incidentally addressed), cause of action estoppel/res judicata (Henderson v Henderson could-have-been-raised extension, merger in judgment), abuse of process as finality doctrine (Toronto (City) v CUPE Local 79 2003 SCC 63: integrity of judicial process, no mutuality of parties required), collateral attack doctrine (Wilson v The Queen [1983] 2 SCR 594), exceptions to issue estoppel (fraud or perjury in prior proceeding, lack of full adversarial process — Danyluk Employment Standards Officer, changed circumstances, fresh evidence), issue estoppel from administrative tribunal decisions, criminal conviction as rebuttable proof in civil proceedings (Evidence Act s.22.1), criminal acquittal does not preclude civil action (different standard of proof).",
    date: "December 2024",
    readTime: "13 min read",
    tag: "Civil Litigation",
  },
  {
    slug: "ontario-civil-discovery",
    title: "Ontario Civil Discovery: Examinations for Discovery, Documentary Production, and Undertakings",
    excerpt:
      "Affidavit of documents Rule 30 (Schedule A production, Schedule B privilege, Schedule C lost documents), ongoing update obligation Rule 30.07, Peruvian Guano broad relevance standard for production, privilege grounds (solicitor-client privilege — Lavallee 2002 SCC 61 substantive right; litigation privilege dominant purpose test — Blank v Canada 2006 SCC 39 expires end of litigation; settlement privilege), examination for discovery Rule 31 scope (relevant to any matter in issue, names of witnesses and experts, document contents), objections and refusals chart procedure, undertakings (binding on party not witness, confirming letter practice, 30-day follow-up, consequences for non-fulfillment), use of discovery evidence at trial Rule 31.11 (read-ins as evidence, impeachment, context rule), expert witness Rule 53.03 (90-day disclosure, Form 53 acknowledgment duty to court), discovery plan Rule 29.1 (cases over $200,000), deemed undertaking Rule 30.1 (no use outside proceeding without court leave).",
    date: "December 2024",
    readTime: "14 min read",
    tag: "Civil Litigation",
  },
  {
    slug: "ontario-cohabitation-agreement",
    title: "Ontario Cohabitation Agreements: Common-Law Partners, Family Law Act Limits, and Property Division",
    excerpt:
      "Common-law partner property rights in Ontario (no FLA Part I equalization — married spouses only), unjust enrichment three-part test and joint family venture (Kerr v Baranow 2011 SCC 10: mutual effort, economic integration, actual intent), resulting trust (Pecore v Pecore 2007 SCC 17 presumption between common-law partners), partition and sale (Partition Act RSO 1990), spousal support for common-law spouses meeting FLA s.29 threshold (three-year cohabitation or child), cohabitation agreement under s.53 (ownership, support, any other matter), formal requirements s.55 (writing, signature, witness), setting aside under s.56(4) (non-disclosure, failure to understand, law of contract), limitations (no children custody ouster), intestacy gap (common-law partners excluded from SLRA Part II — need wills and beneficiary designations), limitation periods for unjust enrichment claims.",
    date: "December 2024",
    readTime: "13 min read",
    tag: "Family Law",
  },
  {
    slug: "ontario-equalization-of-net-family-property",
    title: "Ontario Equalization of Net Family Property: Family Law Act s.5, NFP Calculation, and Excluded Property",
    excerpt:
      "Net family property (NFP) defined under Family Law Act s.4(1) (all property at valuation date minus marriage-date property net of debts), excluded property s.4(2) (gifts and inheritances from third parties, personal injury damages, life insurance proceeds, domestic contract exclusions, traceable proceeds), valuation date (earliest of separation with no reasonable prospect of resumption, divorce, nullity, or day before death), no deduction for matrimonial home pre-marriage value, pre-marriage deduction for all other property (net of marriage-date debts), NFP floor of nil s.4(5), equalization payment equals half the difference s.5(1), election between will benefits and equalization on death s.6 (six-month irrevocable deadline), unequal division s.5(6) unconscionability threshold (Serra v Serra 2009 ONCA 105), improvident depletion, business interests and CBV valuation, pension family law value transfer under Pension Benefits Act s.67.3, marriage contracts under s.52 and s.56(4) challenges.",
    date: "December 2024",
    readTime: "14 min read",
    tag: "Family Law",
  },
  {
    slug: "ontario-contempt-of-court",
    title: "Contempt of Court in Ontario: Civil and Criminal Contempt, the Three-Part Test, and Purging",
    excerpt:
      "Civil contempt (disobedience of court orders, primarily private) vs criminal contempt (public defiance of court authority — United Nurses of Alberta v Alberta AG [1992] 1 SCR 901), beyond a reasonable doubt standard for both, three-part test for civil contempt (Carey v Laiken 2015 SCC 17; Bhatnager v Canada [1990] 2 SCR 217: clear unambiguous order, actual knowledge, intentional act forbidden — no intent to defy required), Rule 60.11 procedure (personal service, right to counsel, right to silence), purging contempt (compliance plus apology), sanctions (fines, imprisonment as last resort, striking pleadings, adverse inference), injunction enforcement, family law contempt (parenting orders, custody shift as enforcement), and Mareva injunction contempt.",
    date: "December 2024",
    readTime: "13 min read",
    tag: "Civil Litigation",
  },
  {
    slug: "ontario-summary-judgment",
    title: "Ontario Summary Judgment: Hryniak v Mauldin Culture Shift and Rule 20 Enhanced Powers",
    excerpt:
      "No genuine issue requiring a trial test under Rule 20.04(2) (Hryniak v Mauldin 2014 SCC 7: can judge make findings of fact, apply law, determine just result without compromising fairness?), pre-Hryniak restrictive test overruled (Pizza Pizza Ltd v Gillespie 1990), enhanced fact-finding powers Rules 20.04(2.1)-(2.2) (weigh evidence, assess credibility, draw inferences, oral evidence and mini-trial), best foot forward principle (Sweda Farms 2014 ONSC: responding party must adduce all evidence), partial summary judgment caution (Butera v Chown Cairns 2017 ONCA 783: inconsistency with trial issues), strategic considerations for moving and responding parties, costs exposure on unsuccessful motions.",
    date: "December 2024",
    readTime: "13 min read",
    tag: "Civil Litigation",
  },
  {
    slug: "ontario-costs-rules",
    title: "Ontario Costs Rules in Litigation: Partial Indemnity, Substantial Indemnity, and Rule 49 Offers to Settle",
    excerpt:
      "General costs framework Rules of Civil Procedure r.57.01 (costs follow the event, proportionality, Boucher v Public Accountants Council 2004 ONCA), partial indemnity costs (50-60% of actual fees, default award), substantial indemnity costs (90% of actual fees, reprehensible conduct or Rule 49 trigger — Young v Young [1993] 4 SCR 3), Rule 49 offer to settle costs consequences (plaintiff's offer: substantial indemnity from offer date on better result; defendant's offer: partial indemnity shift on worse result — Walker v Ritchie [2006] 2 SCR 428), costs on motions (proportionality, costs in the cause, costs thrown away), disbursements (expert fees, HST recovery, transcripts), security for costs r.56, personal costs orders against lawyers r.57.07 (bad faith, abuse of process — Menchella 1999 ONCA), Family Law Rules r.24.",
    date: "December 2024",
    readTime: "13 min read",
    tag: "Civil Litigation",
  },
  {
    slug: "ontario-partnership-law",
    title: "Ontario Partnership Law: Partnerships Act, Limited Partnerships, and LLPs for Professionals",
    excerpt:
      "General partnership formation under Partnerships Act R.S.O. 1990 (two or more persons carrying on business in common with a view to profit, no formalities required), partnership by estoppel s.15, partner authority to bind the firm s.8 (agent of firm in usual course of business), unlimited joint and several liability s.10, fiduciary duties (duty to account s.29, duty not to compete s.30, utmost good faith — Rochwerg v Truster 2002 ONCA), partnership agreement default rules (equal sharing s.24(1), unanimous consent for admission s.24(7)), limited partnerships under Limited Partnerships Act 1990 (general partner unlimited liability, limited partner capital contribution cap, no management control), limited liability partnerships ss.44.1-44.4 (professional LLPs for Ontario lawyers under LSO Rule 2.1, no liability for other partners' negligence), dissolution grounds s.35 including just and equitable.",
    date: "December 2024",
    readTime: "13 min read",
    tag: "Business Law",
  },
  {
    slug: "ontario-securities-enforcement",
    title: "Ontario Securities Enforcement: OSC Investigation Powers, Capital Markets Tribunal, and Securities Act Sanctions",
    excerpt:
      "OSC investigation powers under Part VI Securities Act (compelled testimony, freeze orders s.17, search and seizure), Capital Markets Tribunal replacing OSC adjudicative function (Capital Markets Modernization Act 2021), s.127 administrative sanctions (cease trade orders, $1 million per contravention penalties, disgorgement, director/officer bans, registration suspension), insider trading s.76 (special relationship, MNPI, tipping prohibition, necessary course of business exception, s.134 civil liability class actions), market manipulation and misleading statements ss.126.1-126.2, quasi-criminal offences Part XXIII (up to $5 million and five years), continuous disclosure obligations and material change reporting, Charter protections in quasi-criminal proceedings (Jarvis v Canada [2002] 3 SCR 757 predominant purpose test).",
    date: "December 2024",
    readTime: "14 min read",
    tag: "Securities Law",
  },
  {
    slug: "ontario-limitation-period-discoverability",
    title: "Ontario Limitation Period Discoverability: The Discovery Rule Under the Limitations Act, 2002",
    excerpt:
      "Discoverability under Limitations Act, 2002, s.5 (four elements: injury occurred, caused by act/omission, act/omission was defendant's, proceeding would be appropriate means to seek remedy), objective knowledge standard — Lawless v Anderson 2011 ONCA 102 (reasonably diligent person in plaintiff's actual circumstances), wilful concealment tolling, postponement for minors s.6 (basic limitation only, not ultimate 15-year period), postponement for incapacity s.7, ultimate 15-year limitation s.15 (absolute backstop with exceptions for sexual assault and trust-position breaches), medical malpractice discoverability (Pirner v McTavish 2018 ONCA 859), solicitor negligence (Ferrara v Bernardi 2020 ONCA 38: identity of specific defendant), and agreements to vary limitation periods.",
    date: "December 2024",
    readTime: "14 min read",
    tag: "Limitation Periods",
  },
  {
    slug: "ontario-insurance-subrogation",
    title: "Insurance Subrogation in Ontario: Rights, Waiver, and the Made-Whole Rule",
    excerpt:
      "Equitable right of subrogation (Ledingham v Ontario Hospital Services Commission [1975] 1 SCR 332; Castellain v Preston: insurer steps into insured's shoes), Insurance Act s.148 statutory subrogation for property insurance, accident benefits subrogation under s.267.8, the made-whole rule (Somersall v Friedman [2002] 3 SCR 109: insured must be fully indemnified before insurer shares in recovery), insurer as subrogee limitations (same defences, no action against co-insured — T. Eaton Co v Smith [1978] 2 SCR 749), waiver of subrogation (Agnew-Surpass v Cummer-Yonge [1976] 2 SCR 221, CCDC 2 construction contracts), subrogation in construction disputes (Commonwealth Construction [1978] 1 SCR 317: subcontractors as unnamed co-insureds), OHIP statutory subrogation under Health Insurance Act, and settlement obligations.",
    date: "December 2024",
    readTime: "13 min read",
    tag: "Insurance Law",
  },
  {
    slug: "ontario-solicitor-undertakings",
    title: "Solicitor Undertakings in Ontario: Personal Liability, LSO Rules, and Real Estate Undertakings",
    excerpt:
      "Solicitor undertakings as personal obligations of the giving lawyer (not the client), LSO Rules of Professional Conduct Rule 7.2-11 (fulfill every undertaking given), requirements for a valid undertaking (personal capacity, clarity, within lawyer's control), real estate undertakings (mortgage discharge, HST readjustment, vendor and purchaser standard forms), conditional undertakings, court enforcement (specific performance, contempt, personal costs), LSO discipline consequences, intersection with trust accounting By-Law 9, litigation undertakings, and best practices for managing undertaking obligations.",
    date: "December 2024",
    readTime: "13 min read",
    tag: "Professional Responsibility",
  },
  {
    slug: "ontario-wills-interpretation",
    title: "Ontario Wills Interpretation Guide 2024: Testamentary Intention, Rectification, and Intestacy",
    excerpt:
      "Armchair rule for testamentary intention (surrounding circumstances, extrinsic evidence for patent and latent ambiguity, preference against intestacy), SLRA s.21.1 rectification (clerical errors and drafting mistakes corrected by court, 30-day application deadline, burden of clear and convincing evidence), intestate succession (SLRA Part II: preferential share $350,000 to spouse as of January 2022, distribution scheme for spouse and children, common-law partners excluded from intestacy), partial intestacy, dependant support claims (SLRA Part V: spouse, parent, child, sibling — six-month limitation), will challenges for lack of testamentary capacity (Banks v Goodfellow test) and undue influence.",
    date: "December 2024",
    readTime: "12 min read",
    tag: "Estates Law",
  },
  {
    slug: "ontario-tax-objections",
    title: "Ontario Tax Objections Guide 2024: CRA Objections, Tax Court Appeals, and Reassessments",
    excerpt:
      "CRA notice of objection under ITA s.165 (90-day deadline for corporations; later of one year after filing due date or 90 days for individuals; extension applications under s.166.1/166.2), CRA Appeals Division settlement process, Tax Court of Canada informal procedure (under $25,000 per year, no costs against taxpayer) and general procedure (examinations for discovery, costs), burden of proof in tax appeals (taxpayer demolishes Minister's assumptions of fact — Hickman Motors 1997 SCC; reverse burden for s.163(2) gross negligence penalties), reassessment limitation periods (ITA s.152(4) normal 3-year period; extended period for misrepresentation or fraud), and Ontario provincial tax disputes under Taxation Act 2007.",
    date: "December 2024",
    readTime: "12 min read",
    tag: "Tax Law",
  },
  {
    slug: "ontario-labour-arbitration",
    title: "Ontario Labour Arbitration Guide 2024: Grievance Arbitration, Just Cause, and Arbitral Remedies",
    excerpt:
      "Grievance arbitration under Labour Relations Act 1995 s.48 (mandatory provision, Weber doctrine exclusive forum, duty of fair representation), just cause for discipline and discharge (two-part test: conduct proven on balance of probabilities, proportionality analysis), progressive discipline and culminating incident doctrine, arbitral remedies (reinstatement with or without back pay, substitution of penalty under s.48(17)(b), duty to mitigate), standard of review of arbitral awards (Vavilov 2019 SCC 65 reasonableness standard), and interest arbitration for first contracts (LRA s.43).",
    date: "December 2024",
    readTime: "12 min read",
    tag: "Labour Law",
  },
  {
    slug: "ontario-criminal-evidence",
    title: "Ontario Criminal Evidence Guide 2024: Hearsay, Similar Fact Evidence, and Privilege",
    excerpt:
      "Principled approach to hearsay (R v Khelawon 2006 SCC 57: necessity — declarant unavailable or testimony less reliable than prior statement; threshold reliability — circumstantial guarantees or corroboration; traditional categorical exceptions retained as presumptively reliable), similar fact evidence (R v Handy 2002 SCC 56: probative value vs prejudicial effect balancing, propensity reasoning danger, factors — degree of similarity, number of incidents, temporal proximity, coincidence), solicitor-client privilege (R v Lavallee 2002 SCC 61 — nearly absolute, innocence at stake and public safety exceptions), informer privilege (R v Leipert 1997 SCC — innocence at stake override only), voir dire admissibility hearings (Crown proves voluntariness beyond reasonable doubt), and Canada Evidence Act.",
    date: "December 2024",
    readTime: "13 min read",
    tag: "Criminal Law",
  },
  {
    slug: "ontario-charter-remedies",
    title: "Ontario Charter Remedies Guide 2024: Section 24 Remedies, Exclusion of Evidence, and Declarations",
    excerpt:
      "Section 24(1) appropriate and just remedies (constitutional damages — Vancouver (City) v Ward 2010 SCC 27 four-step test: breach, appropriateness, no countervailing reason, good governance; stays of proceedings — exceptional remedy for unfair trial or abuse of process, R v Jordan 2016 SCC 27 delay ceilings), s.24(2) exclusion of evidence (R v Grant 2009 SCC 32 three-step balancing: seriousness of state conduct, impact on Charter-protected interests, society's interest in adjudication on merits), s.52(1) declarations of constitutional invalidity and suspended declarations (R v Schachter [1992] 2 SCR 679), and structural remedies in Ontario Charter litigation.",
    date: "December 2024",
    readTime: "13 min read",
    tag: "Constitutional Law",
  },
  {
    slug: "ontario-privacy-tort",
    title: "Ontario Privacy Tort Guide 2024: Intrusion Upon Seclusion and Publication of Private Facts",
    excerpt:
      "Intrusion upon seclusion (Jones v Tsige 2012 ONCA 32: intentional or reckless conduct, invasion of private affairs without lawful justification, highly offensive to reasonable person, no proof of actual loss required, general damages up to $20,000), Ontario Privacy Act R.S.O. 1990 c. P.28 (statutory cause of action, no actual damage required, factors for quantum), publication of private facts (highly offensive disclosure of legitimately private information), PIPEDA obligations and Privacy Commissioner complaints, Ontario Intimate Images and Cyber-violence Act 2023, and employee privacy rights in the workplace.",
    date: "December 2024",
    readTime: "11 min read",
    tag: "Privacy Law",
  },
  {
    slug: "ontario-conversion-tort",
    title: "Ontario Conversion Tort Guide 2024: Conversion, Detinue, and Wrongful Interference with Goods",
    excerpt:
      "Conversion elements (proprietary right or right to immediate possession, intentional dealing, inconsistency with plaintiff's superior right, strict liability — defendant's good faith not a defence), types of conversion (taking, destroying, selling, pledging, wrongful delivery, detention), detinue (wrongful detention after demand, continuing tort, remedy of specific return), jus tertii defence restricted in Canada, bona fide purchaser for value (Sale of Goods Act R.S.O. 1990 s.25 — voidable not void title only), damages at full market value as forced sale including consequential losses, and Ontario personal property security Act enforcement conversion.",
    date: "December 2024",
    readTime: "11 min read",
    tag: "Tort Law",
  },
  {
    slug: "ontario-fiduciary-duty",
    title: "Ontario Fiduciary Duty Guide 2024: Fiduciary Relationships, Duties, and Remedies",
    excerpt:
      "Per se fiduciary relationships (trustee-beneficiary, solicitor-client, director-corporation, agent-principal, partner-co-partner), ad hoc fiduciary duty test from Hodgkinson v Simms [1994] 3 SCR 377 (discretion or power, unilateral effect on beneficiary's interests, peculiar vulnerability), core fiduciary duties (loyalty, avoiding conflicts of interest, no secret profit — Boardman v Phipps [1967] 2 AC 46, good faith), fiduciary obligations of directors under OBCA s.134 (corporate opportunity doctrine), solicitor-client fiduciary duty (LSO Rules of Professional Conduct), remedies for breach (constructive trust proprietary remedy, accounting of profits personal remedy, equitable compensation — Canson Enterprises [1991] 3 SCR 534), and election between proprietary and personal remedies.",
    date: "December 2024",
    readTime: "13 min read",
    tag: "Equity",
  },
  {
    slug: "ontario-agency-law",
    title: "Ontario Agency Law Guide 2024: Authority, Duties of Agent, and Undisclosed Principals",
    excerpt:
      "Creation of agency (express authority by words or writing, implied authority from circumstances and position, apparent/ostensible authority from holding out and reliance, ratification relating back to original act), actual vs apparent authority (secret limitations do not affect apparent authority against relying third parties), fiduciary duties of agent to principal (duty of loyalty and no secret profit, duty to account and keep funds separate, duty of care and skill, duty to obey lawful instructions), undisclosed principal doctrine (third party may elect to hold agent or principal on discovering principal), agent personal liability for breach of warranty of authority, and termination of agency.",
    date: "December 2024",
    readTime: "12 min read",
    tag: "Commercial Law",
  },
  {
    slug: "ontario-nuisance-law",
    title: "Ontario Nuisance Law Guide 2024: Private Nuisance, Public Nuisance, and Rylands v Fletcher",
    excerpt:
      "Private nuisance (unlawful interference with use and enjoyment of land: substantial and unreasonable interference, possessory interest required, character of neighbourhood), public nuisance (criminal offence under Criminal Code s.180, civil action requires special damage beyond that suffered by the general public), Rylands v Fletcher strict liability rule (non-natural use of land, escape of dangerous thing, defences: act of God, act of stranger, statutory authority), coming to the nuisance (not a complete defence, may reduce remedy to damages in lieu), sensitive plaintiff (ordinary use standard), injunctions vs damages in lieu, and Ontario neighbour dispute nuisance claims (trees, noise, water).",
    date: "December 2024",
    readTime: "11 min read",
    tag: "Tort Law",
  },
  {
    slug: "ontario-occupiers-liability",
    title: "Ontario Occupiers Liability Guide 2024: Occupiers Liability Act, Trespassers, and Recreational Activities",
    excerpt:
      "Occupiers' Liability Act 1990 s.3 common duty of care to all entrants (objective reasonableness: condition of premises, activities, conduct of third parties), s.4(1) reduced duty to trespassers and criminal activity entrants (reckless disregard standard), s.4(2) child trespasser exception (s.3 duty applies where occupier has reasonable grounds to believe child trespasses and premises create particular risk), s.4(3) recreational activity on rural and natural premises (reckless disregard applies unless fee charged or express invitation), s.6 independent contractor liability (occupier must exercise reasonable care in selection and supervision), s.3(3) modification of duty by agreement (exclusion clauses: reasonable notice, clear terms, covers specific risk), contributory negligence under Negligence Act, and municipal liability under Municipal Act 2001 s.44 including critical 10-day notice requirement under s.44(10).",
    date: "December 2024",
    readTime: "12 min read",
    tag: "Tort Law",
  },
  {
    slug: "ontario-unjust-enrichment",
    title: "Ontario Unjust Enrichment Guide 2024: Three-Part Test, Juristic Reason, and Remedies",
    excerpt:
      "Three-part test for unjust enrichment (Kerr v Baranow 2011 SCC 10: enrichment, corresponding deprivation, absence of juristic reason), two-step juristic reason analysis (Garland v Consumers Gas [2004] 1 SCR 629: established categories — contract, disposition of law, donative intent — then reasonable expectations of parties), remedies (quantum meruit personal money judgment at value of benefit to defendant, constructive trust proprietary remedy where personal remedy inadequate and sufficient link to specific property), joint family venture for cohabiting couples (mutual effort, economic integration, actual intent, family priority), failed contracts and frustrated contracts (Frustrated Contracts Act R.S.O. 1990 c. F.34), and subrogation in insurance and suretyship.",
    date: "December 2024",
    readTime: "12 min read",
    tag: "Equity",
  },
  {
    slug: "ontario-contract-formation",
    title: "Ontario Contract Formation Guide 2024: Offer, Acceptance, Consideration, and Enforceability",
    excerpt:
      "Offer and acceptance (invitation to treat vs offer: Pharmaceutical Society v Boots, revocation communication: Dickinson v Dodds, counter-offer rejection: Hyde v Wrench, postal acceptance rule: Adams v Lindsell, Electronic Commerce Act 2000 s.22 for electronic acceptances), consideration (adequacy vs sufficiency, past consideration: Roscorla v Thomas, Pao On v Lau Yiu Long exceptions, pre-existing duty: Greater Fredericton Airport Authority), promissory estoppel (High Trees, shield not sword: John Burrows Ltd v Subsurface Surveys [1968] SCR 607), capacity (minors, mental incapacity, corporations), certainty of terms, agreement to agree unenforceability, and vitiating factors (misrepresentation: Queen v Cognos [1993] 1 SCR 87, common mistake: Bell v Lever Brothers [1932] AC 161, duress, undue influence).",
    date: "December 2024",
    readTime: "13 min read",
    tag: "Contract Law",
  },
  {
    slug: "ontario-real-property-law",
    title: "Ontario Real Property Law Guide 2024: Fee Simple, Easements, Restrictive Covenants, and LTA",
    excerpt:
      "Estates in land (fee simple indefinite duration freely transferable, life estate pur autre vie waste prohibition, leasehold fixed/periodic/at-will), Land Titles Act indefeasibility (ss.78 and 155: good faith purchaser for value, Land Titles Assurance Fund), Registry Act 40-year chain of title, overriding interests (short leases, actual occupation), easements (Re Ellenborough Park four requirements, express registration, implied by necessity and Wheeldon v Burrows, prescriptive limitations in LTA system after Barbour v Bailey 2016 ONCA), restrictive covenants (Tulk v Moxhay requirements, s.61 CLPA discharge for obsolescence), adverse possession (Real Property Limitations Act 10-year period, limited in LTA system), and Ontario title insurance.",
    date: "December 2024",
    readTime: "14 min read",
    tag: "Real Estate Law",
  },
  {
    slug: "ontario-enforcement-of-judgments",
    title: "Ontario Enforcement of Judgments Guide 2024: Writs, Garnishment, Examination in Aid, and Sheriff",
    excerpt:
      "Writ of seizure and sale (Rule 60.07: filing with Sheriff and land registry, 6-year duration and renewal, Execution Act exemptions: wearing apparel, household furniture and tools up to $11,300, motor vehicle up to $11,300), garnishment (Rule 60.08: notice of garnishment procedure, service on garnishee, bank accounts), Wages Act s.7(2) 80% net wage exemption (20% garnishable), family law FRO garnishment exception, examination in aid of execution (Rule 60.18: scope of examination, contempt for non-attendance), registering judgment in land registry to bind real property, and priority among creditors.",
    date: "December 2024",
    readTime: "12 min read",
    tag: "Civil Litigation",
  },
  {
    slug: "ontario-youth-criminal-justice",
    title: "Ontario Youth Criminal Justice Act Guide 2024: YCJA, Extrajudicial Measures, and Youth Sentencing",
    excerpt:
      "YCJA declaration of principle (s.3: accountability, rehabilitation, least interference), extrajudicial measures (s.6 police warnings/cautions/referrals, s.8 Crown cautions, s.10 extrajudicial sanctions programs with statement inadmissibility), youth justice court jurisdiction and right to counsel (s.25), pre-trial detention as last resort (s.29 two-part test), youth sentencing options (s.42: reprimand, absolute/conditional discharge, fine max $1,000, community service, ISSP, DCSO, CSO two-thirds/one-third, IRCS for violent offenders with mental disorder), adult sentences (s.64, age 14+), publication bans (s.110), and youth record sealing under Part 6.",
    date: "December 2024",
    readTime: "13 min read",
    tag: "Criminal Law",
  },
  {
    slug: "ontario-banking-law",
    title: "Ontario Banking Law Guide 2024: Bank Act, Lending Agreements, Security, and OSFI Regulation",
    excerpt:
      "Federal Bank Act jurisdiction (s.91(15) Constitution Act), OSFI prudential regulation (CAR, LAR guidelines), banker-customer relationship (Foley v Hill debtor-creditor, Tournier duty of secrecy, fiduciary duty in advisory contexts: Hodgkinson v Simms [1994] 3 SCR 377), commercial lending structures (term loans, revolving credit, syndicated LMA facilities), security documentation (GSA and PPSR registration, mortgage debenture fixed and floating charges, real property mortgage, personal guarantees with ILA), PPSA priority and PMSI super-priority, CRA deemed trust priority over bank security (ITA s.227(4), ETA s.222), and PIPEDA privacy obligations for banks.",
    date: "December 2024",
    readTime: "13 min read",
    tag: "Commercial Law",
  },
  {
    slug: "ontario-personal-property-security",
    title: "Ontario Personal Property Security Act Guide 2024: PPSA Registration, Priority, and Enforcement",
    excerpt:
      "PPSA security interest attachment (s.11(2): value, debtor rights, signed security agreement), perfection by PPSR registration (financing statement requirements, after-acquired property, seriously misleading errors under s.46(4)), purchase money security interests (PMSI super-priority: inventory notice requirements s.33, equipment 15-day perfection window s.34), first-to-register-or-perfect priority rule (s.30), federal deemed trusts for CRA source deductions (ITA s.227(4)) and HST (ETA s.222) over-riding PPSA security interests, and Part V enforcement (seizure, commercially reasonable disposition, 10/15-day notice, deficiency claims, redemption right s.66).",
    date: "December 2024",
    readTime: "14 min read",
    tag: "Commercial Law",
  },
  {
    slug: "ontario-sentencing",
    title: "Ontario Criminal Sentencing Guide 2024: Section 718, Proportionality, Gladue, and Conditional Sentences",
    excerpt:
      "Criminal Code ss.718-718.2 sentencing objectives (denunciation, deterrence, rehabilitation, reparations), fundamental proportionality principle (Lacasse 2015 SCC 64), aggravating and mitigating factors (s.718.2(a)), parity (s.718.2(b)), totality (s.718.2(c)), restraint and Indigenous offenders (s.718.2(e)), Gladue principles (Gladue [1999] 1 SCR 688, Ipeelee 2012 SCC 13), Gladue reports in Ontario, conditional sentence orders (s.742.1) post-Bill C-5 eligibility, credit for pre-trial custody (Summers 2014 SCC 26), enhanced 1.5:1 credit, victim surcharge (s.737, Boudreault 2018 SCC 58), and pre-sentence reports.",
    date: "December 2024",
    readTime: "14 min read",
    tag: "Criminal Law",
  },
  {
    slug: "ontario-drug-offences",
    title: "Ontario Drug Offences Guide 2024: CDSA, Possession, Trafficking, and Sentencing",
    excerpt:
      "Controlled Drugs and Substances Act schedules, simple possession (s.4) knowledge and constructive possession requirements, trafficking (s.5) definition and possession for the purpose of trafficking (s.5(2)), importing/exporting (s.6), production (s.7), Bill C-5 mandatory minimum repeal (S.C. 2022, c. 15) and diversion directive (s.10.1), drug treatment courts (eligibility, phased program, outcomes), Charter s.8 search and seizure challenges (sniff searches, strip searches, ITO review under Garofoli), s.9 arbitrary detention (Mann reasonable suspicion, Le racial profiling), and post-Bill C-5 sentencing principles including Gladue for Indigenous offenders.",
    date: "December 2024",
    readTime: "13 min read",
    tag: "Criminal Law",
  },
  {
    slug: "ontario-consumer-protection",
    title: "Ontario Consumer Protection Act 2024 Guide: Implied Warranties, Cooling Off Periods, Unfair Practices, and Consumer Remedies",
    excerpt:
      "Consumer Protection Act 2002 application (goods and services up to $10 internet threshold), non-waivable implied warranties (s.9 acceptable quality, fit for purpose, matching description), internet agreements (ss.38-44, 7-day cooling off, mandatory disclosure), direct agreements and door-to-door sales (10-day cooling off), remote agreements (7-day), unfair practices under s.14 (false/misleading representations, unconscionable representations s.15), consumer remedies including rescission and s.100 private right of action, class actions under CPA 2002, and government enforcement by Consumer Protection Ontario.",
    date: "December 2024",
    readTime: "12 min read",
    tag: "Consumer Law",
  },
  {
    slug: "ontario-collective-bargaining",
    title: "Ontario Collective Bargaining Guide 2024: Labour Relations Act, Certification, Good Faith Bargaining, and Interest Arbitration",
    excerpt:
      "LRA 1995 certification (40% membership card threshold, OLRB bargaining unit determination, mandatory secret ballot, 5-business-day expedited vote), duty to bargain good faith s.17 (no surface bargaining, unilateral change prohibition), strike and lockout procedure (no-board report, 17-day cooling off, strike vote), interest arbitration (HLDAA hospitals, Police Services Act, essential services), first collective agreement arbitration s.43, employer and trade union unfair labour practices (s.70 and s.76), and duty of fair representation s.74.",
    date: "December 2024",
    readTime: "13 min read",
    tag: "Labour Law",
  },
  {
    slug: "ontario-expropriation",
    title: "Ontario Expropriation Law Guide 2024: Expropriation Act Procedure, Full Compensation, Injurious Affection, and ORCA",
    excerpt:
      "Ontario Expropriation Act procedure (Notice of Application, Hearing of Necessity Inquiry Officer, Notice of Expropriation, s.25 offer), full compensation principle (market value, injurious affection to remaining land, disturbance damages s.18, costs recovery), s.21 injurious affection without a taking (actionable but for statutory authority), ORCA arbitration, valuation date (earlier of registration or 1 year before offer), development approach for growth-area expropriations, and Metrolinx transit corridor acquisitions.",
    date: "December 2024",
    readTime: "12 min read",
    tag: "Real Estate & Property Law",
  },
  {
    slug: "ontario-not-for-profit-law",
    title: "Ontario Not-for-Profit and Charity Law Guide 2024: ONCA, CRA Charities Directorate, and Director Duties",
    excerpt:
      "Ontario Not-for-Profit Corporations Act 2010 (ONCA — October 2021, 3-year transition period), Canada Not-for-profit Corporations Act (CNCA), four heads of charitable purpose (Vancouver Society), CRA registered charity types (charitable organization vs public foundation vs private foundation), disbursement quota reform (Budget 2022 — 5% on investment assets over $1M), political activity rules (post-2018 reform), T3010 filing, director duties under ONCA s.43, oppression remedy and derivative action for not-for-profit members.",
    date: "December 2024",
    readTime: "13 min read",
    tag: "Charity & Not-for-Profit Law",
  },
  {
    slug: "ontario-director-liability",
    title: "Ontario Director Liability Guide 2024: OBCA Duties, Statutory Liability, Business Judgment Rule, and Indemnification",
    excerpt:
      "OBCA s.134 fiduciary duty and duty of care (BCE Inc — duty to corporation, not shareholders), conflict of interest s.132 procedure, business judgment rule (informed decision, no conflict, reasonable range), OBCA s.131 wage liability (6 months wages, 12 months vacation), ITA s.227.1 and ETA s.323 source deduction and HST remittance liability (2-year CRA assessment window), due diligence defence (Soper v Canada), environmental EPA s.194, OBCA s.136 mandatory and discretionary indemnification, and D&O insurance.",
    date: "December 2024",
    readTime: "13 min read",
    tag: "Corporate Law",
  },
  {
    slug: "ontario-oppression-remedy",
    title: "Ontario Oppression Remedy Guide 2024: OBCA Section 248, Reasonable Expectations, and Remedial Orders",
    excerpt:
      "OBCA s.248 three categories (oppressive, unfairly prejudicial, unfairly disregards), BCE Inc reasonable expectations two-part test, complainant standing (s.245 including 'proper person' creditors and employees), minority shareholder freeze-outs, related party transactions, corporate opportunity misappropriation, remedial orders (buy-out at fair value without minority discount, winding up, compensation), oppression vs derivative action (s.246 leave requirement), and unanimous shareholder agreement interaction.",
    date: "December 2024",
    readTime: "13 min read",
    tag: "Corporate Law",
  },
  {
    slug: "ontario-trust-law",
    title: "Ontario Trust Law Guide 2024: Express Trusts, Resulting Trusts, Constructive Trusts, and Trustee Duties",
    excerpt:
      "Express trust three certainties (Knight v Knight — intention, subject matter, objects), fixed vs discretionary trust objects tests (McPhail v Doulton), presumed resulting trust (Pecore v Pecore — adult transfers), presumption of advancement (parent to minor), constructive trust and unjust enrichment (Kerr v Baranow three-part test, juristic reason Garland framework), trustee duties under Trustee Act (prudent investor s.27, duty of loyalty, no-profit, no-conflict), equitable compensation, account of profits, tracing, and s.16 Limitations Act 2002 no-limitation claim for trust property.",
    date: "December 2024",
    readTime: "13 min read",
    tag: "Equity & Trusts",
  },
  {
    slug: "ontario-product-liability",
    title: "Ontario Product Liability Law Guide 2024: Negligence, Strict Liability, and Consumer Protection Act",
    excerpt:
      "Manufacturing defects (res ipsa loquitur), design defects (risk-utility test, Ter Neuzen state of knowledge), failure to warn (Hollis v Dow Corning, learned intermediary rule, modified objective causation), Consumer Protection Act 2002 s.9 implied warranties (non-waivable), Rylands v Fletcher strict liability, class action certification (Class Proceedings Act s.5), and Limitations Act 2002 product liability periods.",
    date: "December 2024",
    readTime: "13 min read",
    tag: "Tort Law",
  },
  {
    slug: "ontario-constitutional-law",
    title: "Ontario Constitutional Law Guide 2024: Charter Rights, Section 1 Oakes Test, and Division of Powers",
    excerpt:
      "Canadian Charter of Rights and Freedoms applicability (government action, Dolphin Delivery), s.1 Oakes test (pressing and substantial objective, rational connection, minimal impairment, proportionality of effects), division of powers (ss.91-92 Constitution Act 1867), Ontario property and civil rights head (s.92(13)), federal paramountcy (Canadian Western Bank two-part test), notwithstanding clause (s.33, Ontario Bill 307 and Bill 28), s.24 Charter remedies (Grant exclusion test), and s.52 declarations of invalidity.",
    date: "December 2024",
    readTime: "15 min read",
    tag: "Constitutional Law",
  },
  {
    slug: "ontario-criminal-bail",
    title: "Ontario Criminal Bail Guide 2024: Judicial Interim Release, Reverse Onus, and Bill C-48",
    excerpt:
      "Judicial interim release ladder principle (R v Antic), show cause hearings under s.515, three grounds for detention (primary/secondary/tertiary), reverse onus situations under s.515(6), Bill C-48 bail reforms for repeat violent offenders, bail conditions, surety obligations, and bail review under ss.520-521.",
    date: "December 2024",
    readTime: "13 min read",
    tag: "Criminal Law",
  },
  {
    slug: "ontario-wills-estates-procedure",
    title: "Ontario Wills and Estate Administration Guide 2024: Probate, Certificate of Appointment, and Passing of Accounts",
    excerpt:
      "Formal will validity (Banks v Goodfellow testamentary capacity), holograph wills (SLRA s.6), Certificate of Appointment of Estate Trustee under Rule 74, Estate Administration Tax ($15/$1,000 over $50,000), estate trustee duties, CRA clearance certificate, passing of accounts (Re Toronto General Trusts 2.5% compensation), SLRA dependant support claims (6-month limitation), and Ontario intestacy rules (preferential share $350,000, common-law partner gap).",
    date: "December 2024",
    readTime: "14 min read",
    tag: "Estate Law",
  },
  {
    slug: "ontario-solicitor-client-privilege",
    title: "Ontario Solicitor-Client Privilege Guide 2024: What Is Protected, Waiver, and the Crime-Fraud Exception",
    excerpt:
      "Solosky three-part test (lawyer-client communication, legal advice purpose, confidentiality), litigation privilege dominant purpose test (Blank v Canada), express vs implied waiver (advice at issue, solicitor-client litigation), inadvertent disclosure approach, crime-fraud exception (Descoteaux prima facie test), common interest doctrine (legal vs commercial interest), privilege claims in discovery (Rule 30.03 Schedule B), and regulatory privilege (Blood Tribe).",
    date: "December 2024",
    readTime: "13 min read",
    tag: "Evidence & Practice",
  },
  {
    slug: "ontario-administrative-tribunal",
    title: "Ontario Administrative Tribunals Guide 2024: SPPA, Procedural Fairness, and Vavilov",
    excerpt:
      "SPPA minimum standards (notice, representation, cross-examination, written reasons), Baker procedural fairness multi-factor test, major Ontario tribunals (HRTO, LTB, OLT, OLRB, WSIAT, LAT, ARB, CCB), Vavilov presumption of reasonableness vs correctness, judicial review in Divisional Court (Rule 68, exhaustion of appeals, 30-day timeliness, no fresh evidence).",
    date: "December 2024",
    readTime: "13 min read",
    tag: "Administrative Law",
  },
  {
    slug: "ontario-pension-benefits",
    title: "Ontario Pension Benefits Guide 2024: PBA, FSRA, Solvency, and Member Rights",
    excerpt:
      "PBA and FSRA regulatory framework, DB vs DC plan design (employer vs member bears investment risk), 2-year vesting and locking-in rules (small pension exception, non-residency unlocking), DB solvency funding (85% solvency ratio), member rights (annual statements, transfer options on termination, survivor benefits), pension division on marriage breakdown (actuarial valuation, LIRA transfer), plan wind-up procedure, PBGF protection, and FSRA enforcement.",
    date: "December 2024",
    readTime: "13 min read",
    tag: "Employment Law",
  },
  {
    slug: "ontario-occupational-health-safety",
    title: "Ontario Occupational Health and Safety Guide 2024: OHSA Duties, JHSC, and WSIB",
    excerpt:
      "OHSA employer duties (s.25 general duty clause), supervisor personal obligations (s.27), worker rights (right to know, right to participate, right to refuse unsafe work s.43-44, protection from reprisal s.50), JHSC requirements (20+ workers, 50+ certified), critical injury mandatory reporting and scene preservation, s.66 penalties (up to $1.5M corporations, $100K individuals), WSIB historic trade-off, LOE benefits, and psychological health/harassment obligations.",
    date: "December 2024",
    readTime: "13 min read",
    tag: "Employment Law",
  },
  {
    slug: "ontario-professional-negligence",
    title: "Ontario Professional Negligence Guide 2024: Solicitor Standard of Care, Causation, and Damages",
    excerpt:
      "Reasonably competent lawyer standard (general vs specialist), common grounds (missed limitations, negligent advice, drafting errors, conflicts), Folland suit-within-a-suit causation (balance of probabilities not lost chance), contributory negligence, LAWPRO claims process, AmLine excess coverage, and Atticus as a LAWPRO risk-reduction tool.",
    date: "December 2024",
    readTime: "13 min read",
    tag: "Professional Negligence",
  },
  {
    slug: "ontario-privacy-commissioner",
    title: "Ontario Privacy Commissioner Guide 2024: IPC, PHIPA Complaints, and FIPPA Access Rights",
    excerpt:
      "IPC jurisdiction (FIPPA, MFIPPA, PHIPA), health information custodians (HICs) under PHIPA, mandatory breach reporting (reasonably possible unauthorized use), PHIPA complaint stages (intake, early resolution, investigation, adjudication), FIPPA/MFIPPA access right, common exemptions (solicitor-client privilege, personal privacy, third-party commercial), IPC review and orders, Vavilov reasonableness standard on judicial review.",
    date: "December 2024",
    readTime: "13 min read",
    tag: "Privacy Law",
  },
  {
    slug: "ontario-corporate-tax",
    title: "Ontario Corporate Tax Law Guide 2024: Rates, CCPC, Small Business Deduction, and Reorganizations",
    excerpt:
      "Combined federal-Ontario rates (12.2% SBD / 26.5% general / 50.17% investment income), CCPC definition and passive income SBD grind, GRIP/LRIP eligible vs non-eligible dividends, capital dividend account (CDA) and life insurance, inter-corporate dividends (s.112), s.85 rollover, amalgamations (s.87), butterfly transactions (s.55(3)(b)), and qualifying small business corporation shares (LCGE $1,016,602).",
    date: "December 2024",
    readTime: "14 min read",
    tag: "Tax Law",
  },
  {
    slug: "ontario-class-proceedings",
    title: "Ontario Class Proceedings Guide 2024: Certification, Common Issues, and Settlement Approval",
    excerpt:
      "CPA s.5(1) five-part certification test (cause of action, identifiable class, common issues, preferable procedure, representative plaintiff), non-predominance of common issues, Vivendi single-issue certification, carriage motions, opt-out model, aggregate damages (s.24), settlement approval (s.29) fairness test, and class counsel fees (s.32).",
    date: "December 2024",
    readTime: "13 min read",
    tag: "Civil Litigation",
  },
  {
    slug: "ontario-municipal-planning",
    title: "Ontario Municipal Planning Law 2024: Zoning, Official Plans, OLT Appeals, and Bill 23",
    excerpt:
      "Planning Act hierarchy (PPS, official plan, zoning by-law), minor variances (four-part test), consents and severances, subdivision approval process, Ontario Land Tribunal (OLT) hearings (de novo), Bill 23 third-party appeal elimination, Bill 185 changes, MZOs, development charges, and parkland dedication.",
    date: "December 2024",
    readTime: "13 min read",
    tag: "Municipal & Planning Law",
  },
  {
    slug: "ontario-immigration-sponsorship",
    title: "Ontario Immigration Family Sponsorship Guide 2024: Spousal, Parents, Grandparents, and IAD Appeals",
    excerpt:
      "Sponsor eligibility (Canadian citizen or PR, bars on sponsoring), family class relationships (spouse, common-law, conjugal partner, dependent children, parents and grandparents PGP), undertaking periods (3/10/20 years), PGP income requirements (LICO plus 30%), inadmissibility grounds (criminality, medical, misrepresentation), and IAD appeal procedure (30-day deadline, H&C grounds).",
    date: "December 2024",
    readTime: "13 min read",
    tag: "Immigration Law",
  },
  {
    slug: "ontario-wrongful-dismissal-constructive",
    title: "Ontario Constructive Dismissal Guide 2024: Unilateral Changes, Resignation Election, and Damages",
    excerpt:
      "Potter two-branch test (fundamental breach / course of conduct), changes that qualify (compensation reduction, demotion, forced relocation, suspension without pay, temporary layoff, poisoned workplace), employee election (resign promptly vs continue under protest vs affirm), Bardal factors, ESA minimums, Waksdale enforceability, mitigation duty, aggravated and punitive damages.",
    date: "December 2024",
    readTime: "14 min read",
    tag: "Employment Law",
  },
  {
    slug: "ontario-aboriginal-title",
    title: "Ontario Aboriginal Title and Indigenous Rights Guide 2024: Section 35, Duty to Consult, Treaties",
    excerpt:
      "Tsilhqot'in three-part title test (sufficient occupation, continuity, exclusivity at sovereignty), nature of title rights (use, control, benefit, inherent limits), Ontario treaty coverage (Upper Canada surrenders, Robinson Treaties, Treaty 9, Williams Treaties), duty to consult spectrum (Haida Nation), Métis rights (Powley), and UNDRIP federal framework.",
    date: "December 2024",
    readTime: "13 min read",
    tag: "Indigenous Law",
  },
  {
    slug: "ontario-mental-health-law",
    title: "Ontario Mental Health Law Guide 2024: Mental Health Act Forms, CCB Hearings, and Patient Rights",
    excerpt:
      "Form 1 (72-hour psychiatric assessment), Form 2 (JP order), Form 3 (involuntary admission, 2 weeks), Form 4 (renewal), Form 42 (community treatment orders), Consent and Capacity Board hearings and procedure, HCCA capacity and substitute decision-makers, patient rights and IPCO rights advisers.",
    date: "December 2024",
    readTime: "13 min read",
    tag: "Mental Health Law",
  },
  {
    slug: "ontario-secured-creditor-remedies",
    title: "Ontario Secured Creditor Remedies 2024: PPSA Enforcement, Receivers, and Deficiency Claims",
    excerpt:
      "PPSA Part V enforcement remedies (seizure, disposal, strict foreclosure), private receiver vs court-appointed receiver, 15-day disposal notice requirement under s.63, commercially reasonable disposal standard, PMSI superpriority (15-day non-inventory / before-delivery inventory), application of proceeds under s.64, deficiency claims, and debtor right of redemption.",
    date: "December 2024",
    readTime: "12 min read",
    tag: "Secured Transactions",
  },
  {
    slug: "ontario-elder-law",
    title: "Ontario Elder Law Guide 2024: Capacity, Powers of Attorney, Guardianship, and Elder Abuse",
    excerpt:
      "SDA presumption of capacity, decision-specific capacity tests (POA for property SDA s.8, POA for personal care HCCA, testamentary capacity Banks v Goodfellow, treatment consent), continuing vs non-continuing POA for property, POA for personal care (HCCA hierarchy), statutory guardianship (OPGT SDA s.15-16), court-appointed guardianship, and elder abuse legal remedies.",
    date: "December 2024",
    readTime: "13 min read",
    tag: "Elder Law",
  },
  {
    slug: "ontario-statutory-interpretation",
    title: "Ontario Statutory Interpretation Guide 2024: Driedger, Rizzo, and Vavilov Principles",
    excerpt:
      "Driedger modern approach (text, context, purpose simultaneously), Rizzo v Rizzo Shoes purposive interpretation, eight key interpretive principles (purposive, contextual, anti-absurdity, tautology, bilingual, Charter-compliant, penal strict construction), external aids (Hansard admissibility, Interpretation Acts, prior judicial interpretation), and Vavilov&apos;s impact on administrative statutory interpretation.",
    date: "December 2024",
    readTime: "13 min read",
    tag: "Legal Research",
  },
  {
    slug: "ontario-corporate-governance",
    title: "Ontario Corporate Governance Guide 2024: Directors Duties, Oppression Remedy, and Shareholder Rights",
    excerpt:
      "OBCA s.134 fiduciary duty and duty of care (BCE v 1976 Debentureholders standard), oppression remedy s.248 three-part test (reasonable expectations, violation, oppressive/unfairly prejudicial), available remedies (share buyout, restraining orders, winding-up), derivative action under s.246, and shareholder rights (voting, inspection, dissent under s.185, winding-up).",
    date: "December 2024",
    readTime: "14 min read",
    tag: "Corporate Law",
  },
  {
    slug: "ontario-civil-procedure",
    title: "Ontario Civil Procedure Guide 2024: Rules of Civil Procedure, Discoveries, and Summary Judgment",
    excerpt:
      "Seven stages of Ontario civil litigation (pleadings, documentary discovery, examination for discovery, motions, mediation, pre-trial, trial), Hryniak v Mauldin summary judgment test, Rule 49 offer-to-settle cost consequences (partial and substantial indemnity), simplified procedure under r.76 ($200,000 threshold), and case management under r.77.",
    date: "December 2024",
    readTime: "14 min read",
    tag: "Civil Litigation",
  },
  {
    slug: "ontario-construction-liens",
    title: "Ontario Construction Liens Guide 2024: Construction Act, Holdbacks, and Prompt Payment",
    excerpt:
      "Construction Act lien rights (45-day preservation, 90-day perfection timelines), mandatory 10% holdback obligations and personal liability for payers, statutory trust provisions (director/officer liability), prompt payment regime (28/7/7-day cascade), adjudication through ODACC, and lien vacating by payment into court or security.",
    date: "December 2024",
    readTime: "14 min read",
    tag: "Construction Law",
  },
  {
    slug: "ontario-privacy-law-lawyers",
    title: "Ontario Privacy Law for Lawyers Guide 2024: PIPEDA, PHIPA, and LSO Cloud Guidance",
    excerpt:
      "PIPEDA 10 Fair Information Principles applied to Ontario law firms, PHIPA obligations when handling personal health information in litigation files, LSO cloud storage guidance (data location, vendor due diligence, breach notification, AI tool assessment), Bill C-27 CPPA developments, and data breach reporting obligations under PIPEDA.",
    date: "December 2024",
    readTime: "13 min read",
    tag: "Privacy Law",
  },
  {
    slug: "ontario-regulatory-offences",
    title: "Ontario Regulatory Offences Guide 2024: Strict Liability, Due Diligence, and POA Procedure",
    excerpt:
      "R v Sault Ste Marie three categories (true criminal, strict liability, absolute liability), due diligence defence elements (compliance system, supervision, reasonable response, industry standards), POA Parts I/II/III/X procedure, and major Ontario regulatory regimes (OHSA, EPA, HTA, Securities Act, LLCA, CPA) with maximum penalties.",
    date: "December 2024",
    readTime: "13 min read",
    tag: "Regulatory Law",
  },
  {
    slug: "ontario-court-of-appeal",
    title: "Ontario Court of Appeal Guide 2024: Procedure, Leave, Standards of Review, and Costs",
    excerpt:
      "ONCA civil appeal routes (as of right vs leave under CJA s.6, rr.61-63), six-step perfecting timeline (Notice of Appeal, transcript, appeal book, factum deadlines), Housen standards of review (correctness for law, palpable-and-overriding-error for fact), RJR-MacDonald stay test, and Palmer fresh evidence criteria.",
    date: "December 2024",
    readTime: "14 min read",
    tag: "Civil Litigation",
  },
  {
    slug: "ontario-lso-complaints",
    title: "Ontario LSO Complaints Guide 2024: Professional Discipline, Hearings, and Reinstatement",
    excerpt:
      "LSO complaint process (intake, investigation, CRC review, Tribunal referral), six stages from complaint to Divisional Court, categories of professional misconduct (trust fund violations, conflicts, dishonesty, failure to cooperate), penalty spectrum (caution to disbarment), and reinstatement after revocation.",
    date: "December 2024",
    readTime: "14 min read",
    tag: "Professional Regulation",
  },
  {
    slug: "ontario-mortgage-law",
    title: "Ontario Mortgage Law Guide 2024: Power of Sale, Foreclosure, Priority, and Discharge",
    excerpt:
      "Mortgages Act s.22 power of sale timeline (Form 1 notice, 35-day redemption, surplus proceeds), foreclosure vs power of sale election, LTA mortgage priority rules (first-registered, PPSA fixtures, construction liens, tax arrears, future advances), and mortgage discharge processes including mortgagee insolvency and refusal to discharge.",
    date: "December 2024",
    readTime: "13 min read",
    tag: "Real Estate Law",
  },
  {
    slug: "ontario-estate-planning",
    title: "Ontario Estate Planning Guide 2024: Trusts, RRSP Beneficiaries, and Probate Reduction",
    excerpt:
      "Testamentary and inter vivos trust strategies (spousal, alter ego, joint partner, Henson Trust), RRSP/RRIF beneficiary designations and exempt successor rules, probate reduction strategies (joint tenancy, beneficiary designations, multiple wills, gifts), graduated rate estate elections, and post-mortem loss utilization.",
    date: "December 2024",
    readTime: "13 min read",
    tag: "Estates & Trusts",
  },
  {
    slug: "ontario-criminal-appeals",
    title: "Ontario Criminal Appeals Guide 2024: ONCA Routes, Grounds, Fresh Evidence, and Sentence Appeals",
    excerpt:
      "Four Criminal Code appeal routes (summary conviction s.813, indictable s.675/676, Crown from acquittal, SCC leave s.691), grounds under s.686 (unreasonable verdict, wrong in law, miscarriage of justice, Charter remedy), Palmer test for fresh evidence admission, Lacasse standard for sentence appeals, and bail pending appeal under s.679.",
    date: "December 2024",
    readTime: "14 min read",
    tag: "Criminal Law",
  },
  {
    slug: "ontario-securities-class-action",
    title: "Ontario Securities Class Action Guide 2024: OSA s.138.3, Leave, and OSC Enforcement",
    excerpt:
      "Secondary market liability under OSA Part XXIII.1 (s.138.3 leave requirement — reasonable possibility standard, SCC IMAX v Silver), defendant categories (issuer/director/officer/influential person/expert), defences (reasonable investigation), insider trading (s.76 MNPI, tipping, Criminal Code s.382.1), market manipulation (s.126.1), Capital Markets Tribunal 6-stage enforcement process.",
    date: "December 2024",
    readTime: "14 min read",
    tag: "Securities Law",
  },
  {
    slug: "ontario-family-court-procedure",
    title: "Ontario Family Court Procedure Guide 2024: Forms, Case Conferences, and OCL Reports",
    excerpt:
      "Court jurisdiction (OCJ vs Superior Court vs UFC), case management 7 stages (application through trial), essential Forms table (Form 8, 13, 13.1, 13B, 17A, 35.1), OCL involvement (Voice of Child, legal representation, clinical investigation), NFP formula with excluded property, matrimonial home exception.",
    date: "December 2024",
    readTime: "15 min read",
    tag: "Family Law",
  },
  {
    slug: "ontario-international-arbitration",
    title: "Ontario International Commercial Arbitration Guide 2024: ICAA, ICC, LCIA, and New York Convention",
    excerpt:
      "UNCITRAL Model Law key articles (Art. 7, 8, 16, 34, 36), 5 major arbitral institutions (ICC/LCIA/ICDR/SIAC/ADRIC) with seat options and cost comparison, New York Convention enforcement procedure and refusal grounds, seat vs venue distinction, and arbitration clause drafting essentials for Ontario commercial lawyers.",
    date: "December 2024",
    readTime: "14 min read",
    tag: "International Law",
  },
  {
    slug: "ontario-competition-law",
    title: "Ontario Competition Law Guide 2024: Competition Act, Mergers, and Deceptive Marketing",
    excerpt:
      "Competition Act offences table (criminal vs civil reviewable), merger review 6-stage process (notification thresholds, waiting periods, consent agreements), abuse of dominance (s.79 AMPs up to $35M), price-fixing conspiracies (per se criminal, 14-year maximum), drip pricing prohibition (2022 amendment), dark patterns and fake reviews (2024 amendments).",
    date: "December 2024",
    readTime: "14 min read",
    tag: "Competition Law",
  },
  {
    slug: "ontario-sports-law",
    title: "Ontario Sports Law Guide 2024: Athlete Contracts, Agent Regulation, and Sports Arbitration",
    excerpt:
      "Athlete contract key terms (compensation, NTC, morals clauses, NIL rights), sports agent regulation (NHLPA/NBPA/MLBPA/CFLPA certification), anti-doping 7-stage CCES/WADA process, SDRCC and CAS arbitration, sports injury liability (volenti, Unruh standard, concussion duty of care), and waiver enforceability.",
    date: "December 2024",
    readTime: "13 min read",
    tag: "Sports Law",
  },
  {
    slug: "ontario-technology-law",
    title: "Ontario Technology Law Guide 2024: Privacy, SaaS Contracts, AI Governance, and Data Breach",
    excerpt:
      "PIPEDA 10 Fair Information Principles, PHIPA health privacy, data breach notification (RROSH threshold, 24-month breach record), SaaS agreement essentials (data ownership, residency, SLA, limitation of liability), AI governance and liability (AIDA, negligence), Quebec Law 25, and CASL anti-spam.",
    date: "December 2024",
    readTime: "15 min read",
    tag: "Technology Law",
  },
  {
    slug: "ontario-debtor-creditor-law",
    title: "Ontario Debtor-Creditor Law Guide 2024: Garnishment, Writs, and Judgment Enforcement",
    excerpt:
      "Writ of seizure and sale, wage garnishment (Wages Act 20% cap), bank account garnishment, examination in aid of execution (Rule 60.18 RCP), Execution Act exemptions table, Mareva orders, and PPSA security enforcement (6 steps: default, demand, seizure, notice of disposition, sale, surplus/deficiency).",
    date: "December 2024",
    readTime: "14 min read",
    tag: "Commercial Law",
  },
  {
    slug: "ontario-indigenous-law",
    title: "Ontario Indigenous Law Guide 2024: Section 35, Duty to Consult, and UNDRIP",
    excerpt:
      "Section 35 rights (Aboriginal title, Aboriginal rights, treaty rights, Metis rights), Haida consultation spectrum (3 tiers), Ontario treaties (Robinson, Treaty 9, Williams Treaties), UNDRIP and FPIC under UNDA 2021, First Nations Land Management Act (FNLMA) reserve land transactions.",
    date: "December 2024",
    readTime: "15 min read",
    tag: "Indigenous Law",
  },
  {
    slug: "ontario-environmental-law",
    title: "Ontario Environmental Law Guide 2024: EPA, CEPA, Contaminated Sites, and ESA",
    excerpt:
      "Environmental Protection Act offences and penalties, contaminated site and brownfield liability (O. Reg. 153/04), Phase I/II ESA process, spills reporting under s.92, Species at Risk (SARA/ESA), environmental assessment regimes (IAA/EAA), and Ontario excess soil regulation.",
    date: "December 2024",
    readTime: "15 min read",
    tag: "Environmental Law",
  },
  {
    slug: "ontario-bankruptcy-insolvency",
    title: "Ontario Bankruptcy and Insolvency Guide 2024: BIA, CCAA, and Proposals",
    excerpt:
      "BIA bankruptcy (voluntary assignment and receiving orders), Division I and II proposals, CCAA restructuring (8 stages), private vs court-appointed receiverships, avoidance actions (preferences, reviewable transactions, fraudulent conveyances), and creditor priority including Crown deemed trust priority for source deductions.",
    date: "December 2024",
    readTime: "16 min read",
    tag: "Insolvency Law",
  },
  {
    slug: "ontario-immigration-refugee",
    title: "Ontario Refugee Law Guide 2024: RPD Process, Convention Grounds, and H&C Applications",
    excerpt:
      "Refugee Protection Division procedure, 5 Refugee Convention grounds, sur place claims, 8 inadmissibility categories under IRPA, and H&C applications under s.25 IRPA — for Ontario immigration and refugee lawyers.",
    date: "December 2024",
    readTime: "15 min read",
    tag: "Immigration Law",
  },
  {
    slug: "ontario-bail-hearing",
    title: "Ontario Bail Hearings Guide 2024: Detention Grounds, Reverse Onus, and Defence Strategy",
    excerpt:
      "Primary, secondary, and tertiary detention grounds under s.515 Criminal Code, 5 reverse onus offence categories, 10 standard bail conditions, sureties, and defence preparation checklist for Ontario criminal defence lawyers.",
    date: "December 2024",
    readTime: "14 min read",
    tag: "Criminal Law",
  },
  {
    slug: "ontario-corporate-reorganization",
    title: "Ontario Corporate Reorganization Guide 2024: Amalgamations, Continuances, and Restructuring",
    excerpt:
      "OBCA long-form vs short-form amalgamation (shareholder vs director approval), 4 amalgamation types, 6 reorganization mechanisms (amalgamation, continuance, s.182 arrangement, capital reorg, spin-off, wind-up), and 6 Income Tax Act considerations including ITA s.87 amalgamation rules, s.85 rollover, s.111(5) loss streaming, and land transfer tax exemption.",
    date: "December 2024",
    readTime: "16 min read",
    tag: "Corporate Law",
  },
  {
    slug: "ontario-employment-termination-pay",
    title: "Ontario Employment Termination Pay Guide 2024: ESA Minimums, Severance, and Wrongful Dismissal",
    excerpt:
      "ESA termination pay table (1 week per year up to 8 weeks) vs severance pay (5+ years service, $2.5M payroll threshold, up to 26 weeks), Bardal 6-factor reasonable notice analysis, just cause high threshold (contextual proportionality), constructive dismissal categories, and duty to mitigate on wrongful dismissal.",
    date: "December 2024",
    readTime: "16 min read",
    tag: "Employment Law",
  },
  {
    slug: "ontario-child-protection",
    title: "Ontario Child Protection Law Guide 2024: CYFSA, CAS Investigations, and Court Process",
    excerpt:
      "CYFSA 6 grounds for child in need of protection (physical harm, sexual abuse, emotional harm, neglect, developmental needs, caregiver inability), 8-stage CAS process (referral through protection hearing), voluntary service agreements, and 4 wardship orders (supervision, society wardship, Crown wardship, third-party custody) with timelines and effects.",
    date: "December 2024",
    readTime: "16 min read",
    tag: "Family Law",
  },
  {
    slug: "ontario-criminal-sentencing",
    title: "Ontario Criminal Sentencing Guide 2024: Principles, Ranges, and Mitigating Factors",
    excerpt:
      "Criminal Code s. 718 six sentencing objectives, proportionality as fundamental principle (s. 718.1), 7 aggravating factors (record, trust position, premeditation, vulnerable victim, multiple victims, non-compliance, hate motivation), 7 mitigating factors (early guilty plea, remorse, no record, addiction, mental health, employment, cooperation), Gladue principles for Indigenous offenders, and sentencing ranges by offence category.",
    date: "December 2024",
    readTime: "16 min read",
    tag: "Criminal Law",
  },
  {
    slug: "ontario-judicial-review",
    title: "Ontario Judicial Review Guide 2024: Procedure, Standard of Review, and Remedies",
    excerpt:
      "Vavilov standard of review framework (reasonableness presumptive, correctness for constitutional questions), 5 grounds for judicial review (excess jurisdiction, procedural fairness, unreasonableness, incorrectness, bad faith), Baker 5-factor procedural fairness test, and remedies: certiorari, mandamus, prohibition, declaration, and remitting to tribunal.",
    date: "December 2024",
    readTime: "16 min read",
    tag: "Administrative Law",
  },
  {
    slug: "ontario-secured-transactions",
    title: "Ontario Secured Transactions Guide 2024: PPSA, Security Agreements, and Enforcement",
    excerpt:
      "PPSA 3-requirement attachment test (value, rights, written agreement), perfection by registration vs possession vs control, first-to-register priority rule, PMSI super-priority (10-day inventory / 15-day non-inventory windows), 5 enforcement remedies (seizure, disposition, account collection, acceptance, court order), and 5 common registration mistakes.",
    date: "December 2024",
    readTime: "16 min read",
    tag: "Corporate & Commercial Law",
  },
  {
    slug: "ontario-wills-variation",
    title: "Ontario Wills: Variation, Challenges, and Dependants Relief 2024",
    excerpt:
      "Banks v Goodfellow 4-part testamentary capacity test (understand nature, extent of property, natural objects of bounty, no disorder of mind), 5 will challenge grounds (capacity, undue influence, fraud, execution defects, knowledge & approval), suspicious circumstances burden shifting, and SLRA Part V dependants relief for spouse, children, and parents.",
    date: "December 2024",
    readTime: "16 min read",
    tag: "Wills & Estates",
  },
  {
    slug: "ontario-commercial-tenancy",
    title: "Ontario Commercial Tenancy Guide 2024: Lease Enforcement, Distress, and Termination",
    excerpt:
      "Commercial vs residential tenancy differences (Commercial Tenancies Act vs RTA, Superior Court vs LTB), 6-step distress procedure for rent arrears, 5 termination grounds (arrears, expiry, breach, insolvency, abandonment), relief from forfeiture factors (pro and against), and repair obligation allocation for commercial landlords and tenants.",
    date: "December 2024",
    readTime: "15 min read",
    tag: "Commercial Real Estate",
  },
  {
    slug: "ontario-real-estate-closing",
    title: "Ontario Real Estate Closing Guide 2024: Lawyer Checklist, Title Insurance, and Adjustments",
    excerpt:
      "10-step closing checklist (requisition through post-closing reporting), statement of adjustments calculations (taxes, condo fees, rent, fuel oil), title insurance vs traditional search comparison, 6 common requisitions with resolution strategies, and joint tenancy vs tenants in common for Ontario real estate lawyers.",
    date: "December 2024",
    readTime: "17 min read",
    tag: "Real Estate Law",
  },
  {
    slug: "ontario-contract-dispute",
    title: "Ontario Contract Dispute Guide 2024: Breach, Damages, and Remedies",
    excerpt:
      "4 breach categories (repudiatory, anticipatory, warranty, innominate), expectation vs reliance vs restitutionary damages, Hadley v Baxendale remoteness test, duty to mitigate (defendant bears burden), specific performance for land and unique goods, 6 defences including frustration and exclusion clauses, and Ontario limitation periods.",
    date: "December 2024",
    readTime: "16 min read",
    tag: "Commercial Litigation",
  },
  {
    slug: "ontario-privacy-breach",
    title: "Ontario Privacy Breach Guide 2024: PIPEDA Notification, Privacy Torts, and Regulatory Response",
    excerpt:
      "PIPEDA mandatory breach notification 6-step response framework, real risk of significant harm assessment table (5 factors), 3 Ontario privacy torts including intrusion upon seclusion (Jones v Tsige), $20,000 damages without proof of loss, and privacy breach class action considerations.",
    date: "December 2024",
    readTime: "15 min read",
    tag: "Privacy Law",
  },
  {
    slug: "ontario-negligence-law",
    title: "Ontario Negligence Law Guide 2024: Duty of Care, Causation, and Contributory Negligence",
    excerpt:
      "Anns/Cooper two-stage duty of care analysis, 5 causation tests (but-for, material contribution, thin skull, crumbling skull, loss of chance), contributory negligence apportionment under Negligence Act, and 6 major negligence categories with standards and defences.",
    date: "December 2024",
    readTime: "16 min read",
    tag: "Civil Litigation",
  },
  {
    slug: "ontario-estate-litigation",
    title: "Ontario Estate Litigation Guide 2024: Will Challenges, Dependants Relief, and Estate Trustee Disputes",
    excerpt:
      "5 grounds to challenge a will (capacity, undue influence, fraud, formal requirements, knowledge and approval), suspicious circumstances and shifting burden of proof, 6 estate claim types with time limits, dependants relief under SLRA Part V, and grounds to remove estate trustees.",
    date: "November 2024",
    readTime: "16 min read",
    tag: "Wills & Estates",
  },
  {
    slug: "ontario-construction-law",
    title: "Ontario Construction Law Guide 2024: Construction Act, Liens, Prompt Payment, and Adjudication",
    excerpt:
      "60-day lien preservation deadline, 90-day perfection requirement, 10% statutory holdback explained, prompt payment 28-day owner rule and 7-day contractor-to-subcontractor rule, rapid adjudication 30-day decision framework, and key obligations of all construction parties.",
    date: "November 2024",
    readTime: "16 min read",
    tag: "Construction Law",
  },
  {
    slug: "ontario-insurance-law",
    title: "Ontario Insurance Law Guide 2024: Insurance Act, SABS, Duty to Defend, and Coverage Disputes",
    excerpt:
      "6 major insurance lines with key features and limitations, full SABS accident benefits table (standard vs enhanced vs catastrophic), duty to defend vs duty to indemnify framework, 5 common coverage dispute issues including contra proferentem, and bad faith claims after Whiten v Pilot.",
    date: "November 2024",
    readTime: "17 min read",
    tag: "Insurance Law",
  },
  {
    slug: "ontario-condo-law",
    title: "Ontario Condominium Law Guide 2024: Condo Act, Status Certificates, and Dispute Resolution",
    excerpt:
      "5 Ontario condominium types, 8-item status certificate review checklist with red flags, reserve fund study requirements, 10-day rescission right on purchase, CAT tribunal jurisdiction including 2021-2022 expansions, and 6 unit owner statutory rights.",
    date: "November 2024",
    readTime: "16 min read",
    tag: "Real Estate Law",
  },
  {
    slug: "ontario-human-rights-tribunal",
    title: "Ontario Human Rights Tribunal Guide 2024: HRTO Procedure, Remedies, and Strategy",
    excerpt:
      "15 protected grounds under the Human Rights Code, 8-stage HRTO process from application to decision, prima facie discrimination burden of proof explained, 6 remedy types including general damages range, and mediation strategy for both applicant and respondent counsel.",
    date: "November 2024",
    readTime: "17 min read",
    tag: "Human Rights",
  },
  {
    slug: "ontario-shareholder-agreement",
    title: "Ontario Shareholder Agreement Guide 2024: USA, Buy-Sell Mechanisms, and Minority Protections",
    excerpt:
      "Unanimous Shareholder Agreement vs regular SHA explained, 8 core provisions (shotgun clause, drag-along, tag-along, pre-emptive rights, vesting), 5 OBCA minority shareholder statutory rights, and 6 deadlock resolution mechanisms.",
    date: "November 2024",
    readTime: "16 min read",
    tag: "Corporate Law",
  },
  {
    slug: "ontario-power-of-attorney",
    title: "Ontario Power of Attorney Guide 2024: Property, Personal Care, and Capacity",
    excerpt:
      "Continuing POA vs non-continuing POA explained, capacity tests under the Substitute Decisions Act for POA for Property (s. 8) and Personal Care (s. 47), attorney duties, 5 revocation methods, and when court-appointed guardianship is needed.",
    date: "November 2024",
    readTime: "14 min read",
    tag: "Wills & Estates",
  },
  {
    slug: "ontario-constructive-trust",
    title: "Ontario Constructive Trust Guide 2024: Unjust Enrichment, Tracing, and Remedies",
    excerpt:
      "Three-part unjust enrichment test after Kerr v Baranow, juristic reason two-step analysis, proprietary vs personal remedies, equitable tracing through mixed funds, joint family venture doctrine, and key applications in family and commercial law.",
    date: "November 2024",
    readTime: "15 min read",
    tag: "Equity & Trusts",
  },
  {
    slug: "ontario-administrative-law",
    title: "Ontario Administrative Law Guide 2024: Judicial Review and Tribunals",
    excerpt:
      "Vavilov reasonableness standard explained, 10 major Ontario tribunals with jurisdiction and enabling statutes, 6 grounds for judicial review, full JR procedure from Notice of Application to Divisional Court hearing, and the RJR-MacDonald stay test.",
    date: "November 2024",
    readTime: "18 min read",
    tag: "Administrative Law",
  },
  {
    slug: "ontario-criminal-procedure",
    title: "Ontario Criminal Procedure Guide 2024: From Arrest to Appeal",
    excerpt:
      "8-stage Ontario criminal process (arrest through appeals), election of mode of trial, bail hearing procedure, Jordan delay framework, 7 sentencing options including conditional sentences, Charter remedies, and Gladue principles.",
    date: "November 2024",
    readTime: "16 min read",
    tag: "Criminal Law",
  },
  {
    slug: "ontario-tax-disputes",
    title: "Ontario Tax Disputes: CRA Audits, Notice of Objection & Tax Court of Canada (2025 Guide)",
    excerpt:
      "6 CRA audit types with timelines, 6-stage dispute process from audit to Tax Court with critical deadlines, VDP two-track program (General vs Limited), informal vs general Tax Court procedure, and criminal tax enforcement overview.",
    date: "June 2025",
    readTime: "11 min read",
    tag: "Tax Law",
  },
  {
    slug: "ontario-intellectual-property",
    title: "Ontario Intellectual Property Law: Trade-marks, Copyright & Patents (2025 Guide)",
    excerpt:
      "5 Canadian IP rights compared (trade-mark, copyright, patent, industrial design, trade secret), 7-step Canadian trade-mark registration process, copyright ownership rules (employee vs contractor), IP enforcement remedies, and IP due diligence in M&A.",
    date: "June 2025",
    readTime: "11 min read",
    tag: "IP Law",
  },
  {
    slug: "ontario-class-action",
    title: "Ontario Class Action Law: 5-Part Certification Test, Common Issues & Settlement Approval (2025 Guide)",
    excerpt:
      "Class Proceedings Act s. 5 certification test with 'some basis in fact' standard, common issues strategy and aggregate damages, carriage motion factors, Dabbs settlement approval factors, and cy-pres awards for unclaimed funds.",
    date: "June 2025",
    readTime: "10 min read",
    tag: "Civil Litigation",
  },
  {
    slug: "ontario-municipal-law",
    title: "Ontario Municipal Law: Zoning, OLT Appeals & Development Approvals (2025 Guide)",
    excerpt:
      "7 planning approval routes with decision-makers and timelines, minor variance 4-part test with pitfalls, 8-step Ontario Land Tribunal process, and Bill 23 legislative changes (reduced appeal rights, DC reductions, site plan time limits).",
    date: "June 2025",
    readTime: "11 min read",
    tag: "Municipal Law",
  },
  {
    slug: "ontario-labour-law",
    title: "Ontario Labour Law: Union Certification, Collective Bargaining, Unfair Labour Practices & OLRB (2025 Guide)",
    excerpt:
      "6-step union certification process, 4 categories of unfair labour practices with OLRB remedies, legal strike prerequisites (conciliation, 16-day cooling-off, vote), collective bargaining duty, and grievance arbitration framework.",
    date: "June 2025",
    readTime: "10 min read",
    tag: "Labour Law",
  },
  {
    slug: "ontario-employment-contract",
    title: "Ontario Employment Contract: Termination Clauses Post-Waksdale, Probation & ESA Minimums (2025 Guide)",
    excerpt:
      "5 termination clause defects that void the entire provision post-Waksdale, ESA termination and severance pay table by years of service, probation period rules, fixed-term contract traps (Howard v. Benson), and restrictive covenant enforceability after the 2021 non-compete ban.",
    date: "June 2025",
    readTime: "10 min read",
    tag: "Employment Law",
  },
  {
    slug: "ontario-securities-law",
    title: "Ontario Securities Law: OSC, NI 45-106 Prospectus Exemptions & Continuous Disclosure (2025 Guide)",
    excerpt:
      "OSC registration categories, 7 NI 45-106 prospectus exemptions (accredited investor, OM, minimum amount, FFBA), continuous disclosure filing deadlines (NI 51-102), insider trading prohibitions, and OSC enforcement overview.",
    date: "June 2025",
    readTime: "11 min read",
    tag: "Securities Law",
  },
  {
    slug: "ontario-privacy-law",
    title: "Ontario Privacy Law: PIPEDA, PHIPA & Data Breach Obligations for Lawyers (2025 Guide)",
    excerpt:
      "PIPEDA's 10 fair information principles applied to law firms, PHIPA health information obligations for lawyers handling medical records, 5-step data breach response, and intersection of LSO confidentiality rules with privacy law.",
    date: "June 2025",
    readTime: "11 min read",
    tag: "Privacy Law",
  },
  {
    slug: "ontario-franchise-law",
    title: "Ontario Franchise Law: Arthur Wishart Act, Disclosure Obligations, and Franchisee Rights (2025 Guide)",
    excerpt:
      "Arthur Wishart Act 14-day disclosure rule, FDD required contents (6 categories), franchisee rescission rights (60 days / 2 years), right to associate, duty of fair dealing, and 10 key franchise agreement clauses to review.",
    date: "June 2025",
    readTime: "10 min read",
    tag: "Commercial Law",
  },
  {
    slug: "ontario-real-estate-purchase-agreement",
    title: "Ontario Real Estate Purchase Agreement: OREA APS, Conditions & Closing (2025 Guide)",
    excerpt:
      "12 key OREA Agreement of Purchase and Sale clauses with lawyer notes, common condition types and waiver risks, status certificate review for condos, 8-step Ontario closing process, and FINTRAC compliance obligations.",
    date: "June 2025",
    readTime: "10 min read",
    tag: "Real Estate Law",
  },
  {
    slug: "ontario-immigration-work-permit",
    title: "Canadian Work Permits for Ontario Practitioners: LMIA, Closed & Open Permits, PGWP, and CUSMA (2025 Guide)",
    excerpt:
      "LMIA process and LMIA-exempt categories (CUSMA, ICT, CETA), open work permit streams (PGWP, BOWP, IEC), and employer compliance obligations under the Temporary Foreign Worker Program.",
    date: "June 2025",
    readTime: "11 min read",
    tag: "Immigration Law",
  },
  {
    slug: "ontario-business-purchase-agreement",
    title: "Ontario Business Purchase Agreement: Asset vs Share Deal Structure, Due Diligence, and Closing Mechanics (2025 Guide)",
    excerpt:
      "Asset deal vs share deal comparison (tax, liability, HST, LTT, employment), 9-category due diligence checklist, key purchase agreement clauses (reps & warranties, MAC, indemnity, escrow), and Ontario closing mechanics.",
    date: "June 2025",
    readTime: "10 min read",
    tag: "Corporate Law",
  },
  {
    slug: "ontario-adverse-possession",
    title: "Ontario Adverse Possession: 10-Year Rule, Land Titles Act, and Encroachment Disputes (2026 Guide)",
    excerpt:
      "Adverse possession is largely unavailable for Land Titles land (most of Ontario since 2001). Where it still applies, all five elements must be proved: actual possession, open and notorious, exclusive, continuous for 10 years, without permission. This guide covers the doctrine and practical encroachment dispute options.",
    date: "March 2026",
    readTime: "9 min read",
    tag: "Real Estate Law",
  },
  {
    slug: "ontario-human-rights-code",
    title: "Ontario Human Rights Code: Protected Grounds, Discrimination, and Workplace Rights (2026 Guide)",
    excerpt:
      "The 17 protected grounds under the Ontario Human Rights Code, five forms of discrimination (direct, adverse effect, harassment, poisoned environment, reprisal), the duty to accommodate to undue hardship, and HRTO remedies including damages for injury to dignity.",
    date: "March 2026",
    readTime: "11 min read",
    tag: "Employment Law",
  },
  {
    slug: "ontario-professional-corporation",
    title: "Ontario Professional Corporation: PC Rules for Lawyers, Doctors, and Dentists (2026 Guide)",
    excerpt:
      "Professional corporation incorporation in Ontario — eligible professions and shareholding rules, CCPC small business deduction (~12.2% on first $500K), income deferral, TOSI restrictions on income splitting, passive income clawback, salary vs dividend considerations, and liability misconceptions.",
    date: "March 2026",
    readTime: "11 min read",
    tag: "Corporate Law",
  },
  {
    slug: "ontario-child-support-guidelines",
    title: "Ontario Child Support: Federal Guidelines, Table Amounts, and Section 7 Expenses (2026 Guide)",
    excerpt:
      "Federal Child Support Guidelines Ontario Table amounts by income and number of children, section 7 special and extraordinary expenses (childcare, medical, post-secondary, extracurriculars), the 40% shared custody rule, and income determination for self-employed and incorporated professionals.",
    date: "March 2026",
    readTime: "11 min read",
    tag: "Family Law",
  },
  {
    slug: "ontario-spousal-support",
    title: "Ontario Spousal Support: SSAG, Moge, Quantum and Duration (2026 Guide)",
    excerpt:
      "The Spousal Support Advisory Guidelines (SSAG), the Moge compensatory model of entitlement, SSAG without-children and with-children formulas, the Rule of 65 for indefinite support, and grounds for variation — the essentials for Ontario family lawyers.",
    date: "March 2026",
    readTime: "11 min read",
    tag: "Family Law",
  },
  {
    slug: "ontario-land-transfer-tax",
    title: "Ontario Land Transfer Tax: Rates, Toronto MLTT, and First-Time Buyer Rebates (2026 Guide)",
    excerpt:
      "Provincial LTT rates, Toronto municipal LTT (double LTT for Toronto buyers), first-time homebuyer rebates (up to $4,000 provincial + $4,475 Toronto), Non-Resident Speculation Tax (25%), and what Ontario real estate lawyers must calculate at closing.",
    date: "March 2026",
    readTime: "10 min read",
    tag: "Real Estate Law",
  },
  {
    slug: "ontario-ndas-confidentiality-agreements",
    title: "Ontario NDAs and Confidentiality Agreements: What Business Lawyers Draft (2026 Guide)",
    excerpt:
      "Six key NDA clauses for Ontario business lawyers — definition of confidential information, permitted use restrictions, confidentiality period, return or destruction, residuals clauses, and injunctive relief acknowledgment. Plus Working for Workers Act limits on employment NDAs.",
    date: "March 2026",
    readTime: "10 min read",
    tag: "Corporate Law",
  },
  {
    slug: "ontario-child-custody-law",
    title: "Ontario Child Custody and Parenting Time: Divorce Act, CLRA, and Best Interests (2026 Guide)",
    excerpt:
      "The 2021 Divorce Act amendments replaced 'custody' with 'decision-making responsibility' and 'access' with 'parenting time.' Ontario family lawyers must navigate both the updated federal Divorce Act (married parties) and the older CLRA (unmarried parties), always governed by the best interests of the child.",
    date: "March 2026",
    readTime: "12 min read",
    tag: "Family Law",
  },
  {
    slug: "ontario-injunction-process",
    title: "Ontario Injunctions: Interlocutory Injunctions, Anton Piller Orders, and Mareva Orders (2026)",
    excerpt:
      "The RJR-MacDonald three-part test, Anton Piller civil search orders, Mareva asset-freezing orders, Norwich Pharmacal orders for anonymous defendants, and the practical steps for getting urgent injunctive relief in Ontario courts.",
    date: "March 2026",
    readTime: "13 min read",
    tag: "Civil Litigation",
  },
  {
    slug: "ontario-defamation-law",
    title: "Ontario Defamation Law: Libel, Slander, Online Defamation, and PPPA Anti-SLAPP Guide (2026)",
    excerpt:
      "Three elements of defamation, libel vs slander in Ontario, the five main defences (justification, fair comment, qualified privilege, absolute privilege, Grant v Torstar), and the PPPA s. 137.1 anti-SLAPP motion with full indemnity costs.",
    date: "March 2026",
    readTime: "11 min read",
    tag: "Civil Litigation",
  },
  {
    slug: "ontario-commercial-lease-review",
    title: "Ontario Commercial Lease Review: Key Clauses Business Lawyers Negotiate (2026 Guide)",
    excerpt:
      "What Ontario commercial lawyers look for in a commercial lease — rent and additional rent, exclusivity, assignment and subletting, personal guarantees, demolition clauses, HVAC obligations, and the clauses that shift financial risk from landlord to tenant.",
    date: "March 2026",
    readTime: "12 min read",
    tag: "Commercial Law",
  },
  {
    slug: "ontario-slip-fall-claim",
    title: "Ontario Slip and Fall Claims: Occupier's Liability, Municipal Notice, and Damages (2026 Guide)",
    excerpt:
      "Occupiers' Liability Act duty of care, the 10-day municipal notice deadline for falls on municipal property, comparative negligence, and what damages are available in Ontario premises liability claims — with no tort threshold to surmount.",
    date: "March 2026",
    readTime: "11 min read",
    tag: "Personal Injury",
  },
  {
    slug: "ontario-mortgage-default",
    title: "Ontario Mortgage Default: Power of Sale Process and Homeowner Defences (2026 Guide)",
    excerpt:
      "What happens when a homeowner defaults on a mortgage in Ontario — Notice of Sale requirements, the 6-step power of sale process, how power of sale differs from foreclosure, and the legal strategies mortgagors use to stop or delay sale.",
    date: "March 2026",
    readTime: "11 min read",
    tag: "Real Estate Law",
  },
  {
    slug: "ontario-shareholders-agreement",
    title: "Ontario Shareholders Agreements: ROFR, Drag-Along, Shotgun Clauses, and USA Guide (2026)",
    excerpt:
      "What goes in a shareholders agreement for an Ontario corporation — rights of first refusal, drag-along and tag-along rights, shotgun buy-sell clauses, deadlock resolution, valuation mechanics, and how a SHA differs from a unanimous shareholders agreement.",
    date: "March 2026",
    readTime: "12 min read",
    tag: "Corporate Law",
  },
  {
    slug: "ontario-criminal-defence-process",
    title: "Ontario Criminal Defence Process: From Arrest to Trial (2026 Guide)",
    excerpt:
      "Bail hearings, Crown disclosure, Charter rights (s. 8, 10(b), 11(b)), Jordan delay arguments, plea negotiations, and impaired driving defence. A complete guide to Ontario criminal defence process from arrest to sentencing.",
    date: "March 2026",
    readTime: "12 min read",
    tag: "Criminal Defence",
  },
  {
    slug: "ontario-partnership-agreement",
    title: "Ontario Partnership Agreements: General and Limited Partnerships (2026 Guide)",
    excerpt:
      "General partnerships, limited partnerships, LLPs — Ontario Partnerships Act default rules, key agreement provisions, partnership vs corporation comparison, and what business lawyers draft to protect all parties.",
    date: "March 2026",
    readTime: "10 min read",
    tag: "Corporate Law",
  },
  {
    slug: "ontario-personal-injury-claim",
    title: "Ontario Personal Injury Claims: Car Accidents, SABS, and Tort Actions (2026 Guide)",
    excerpt:
      "Ontario&apos;s two-track personal injury system: Statutory Accident Benefits from your own insurer and tort claims against at-fault drivers. Tort threshold, catastrophic impairment, SABS amounts, and the municipal 10-day notice deadline.",
    date: "March 2026",
    readTime: "12 min read",
    tag: "Personal Injury",
  },
  {
    slug: "ontario-employment-standards-act",
    title: "Ontario Employment Standards Act: Employee Rights and Employer Obligations (2026)",
    excerpt:
      "Ontario ESA minimums for 2026 — minimum wage, hours of work, overtime, vacation pay, termination notice, severance pay, and leaves of absence. And why ESA minimums are just the floor, not the ceiling, for termination entitlements.",
    date: "March 2026",
    readTime: "11 min read",
    tag: "Employment Law",
  },
  {
    slug: "ontario-immigration-permanent-residence",
    title: "Permanent Residence in Canada: Ontario Immigration Pathways (2026 Guide)",
    excerpt:
      "Express Entry (CEC, FSW, FST), Ontario Immigrant Nominee Program (OINP) streams, family sponsorship, and CRS scores explained. What Ontario immigration lawyers do and the critical Federal Court deadlines you cannot miss.",
    date: "March 2026",
    readTime: "12 min read",
    tag: "Immigration Law",
  },
  {
    slug: "ontario-corporate-annual-maintenance",
    title: "Ontario Corporation Annual Maintenance: What Lawyers Do Every Year (2026)",
    excerpt:
      "Annual resolutions, Ontario Business Registry Annual Return filings, minute book updates, OBR director/officer changes, and the most common corporate maintenance errors that create tax and legal exposure for business owner clients.",
    date: "March 2026",
    readTime: "10 min read",
    tag: "Corporate Law",
  },
  {
    slug: "ontario-construction-lien",
    title: "Ontario Construction Lien: Filing Deadlines, Process, and the Construction Act (2026)",
    excerpt:
      "The 60-day preservation deadline and 90-day perfection deadline under the Ontario Construction Act are strict and cannot be extended. Here is the complete process for construction lawyers — registration, holdback, trust claims, and prompt payment.",
    date: "March 2026",
    readTime: "11 min read",
    tag: "Construction Law",
  },
  {
    slug: "ontario-residential-tenancy-agreement",
    title: "Ontario Standard Lease Agreement: Residential Tenancy Guide for 2026",
    excerpt:
      "Ontario&apos;s mandatory Standard Form of Lease, Residential Tenancies Act requirements, rent control rules, tenant rights, landlord rights, and what properties are exempt from the RTA. A complete guide for landlord-tenant lawyers.",
    date: "March 2026",
    readTime: "11 min read",
    tag: "Landlord-Tenant",
  },
  {
    slug: "ontario-estate-administration",
    title: "Estate Administration in Ontario: Complete Guide for Executors and Lawyers (2026)",
    excerpt:
      "Certificate of Appointment, Estate Administration Tax, executor duties, CRA clearance certificates, and the common pitfalls that expose executors to personal liability. Everything Ontario wills and estates lawyers need.",
    date: "March 2026",
    readTime: "13 min read",
    tag: "Wills & Estates",
  },
  {
    slug: "ontario-non-compete-agreement",
    title: "Non-Compete Agreements in Ontario: What Employers and Employees Need to Know (2026)",
    excerpt:
      "Ontario&apos;s Working for Workers Act, 2021 banned most non-compete agreements for employees. What&apos;s still enforceable, how courts assess non-solicitation clauses, and what Ontario employment lawyers advise in 2026.",
    date: "March 2026",
    readTime: "10 min read",
    tag: "Employment Law",
  },
  {
    slug: "eviction-process-ontario",
    title: "Eviction Process in Ontario: LTB Forms, Timelines, and What Lawyers Need to Know (2026)",
    excerpt:
      "Step-by-step guide to the Ontario eviction process — N4/L1 forms, LTB hearing timelines, sheriff enforcement, and the most common mistakes landlords make that derail applications.",
    date: "March 2026",
    readTime: "11 min read",
    tag: "Landlord-Tenant",
  },
  {
    slug: "small-claims-court-ontario",
    title: "Ontario Small Claims Court: A Complete Guide for 2026 ($35,000 Limit)",
    excerpt:
      "How Ontario Small Claims Court works for claims up to $35,000 — from filing your Plaintiff&apos;s Claim through Default Judgment, settlement conferences, trial, and enforcement. Includes limitation period warning.",
    date: "March 2026",
    readTime: "10 min read",
    tag: "Civil Litigation",
  },
  {
    slug: "ontario-human-rights-complaint",
    title: "How to File an Ontario Human Rights Complaint: HRTO Process Guide (2026)",
    excerpt:
      "How to file a complaint with the Human Rights Tribunal of Ontario — the 16 protected grounds, one-year limitation period, Application process, mediation, hearings, and remedies available under the Human Rights Code.",
    date: "March 2026",
    readTime: "10 min read",
    tag: "Human Rights",
  },
  {
    slug: "ontario-family-law-separation-process",
    title: "Ontario Family Law: Separation, Divorce, and Property Division Explained (2026)",
    excerpt:
      "Equalization of net family property, spousal support, child support, and parenting arrangements under Ontario&apos;s Divorce Act and Family Law Act. A complete guide for clients and family lawyers.",
    date: "March 2026",
    readTime: "12 min read",
    tag: "Family Law",
  },
  {
    slug: "how-to-incorporate-ontario",
    title: "How to Incorporate a Business in Ontario: Lawyer's Guide (2026)",
    excerpt:
      "OBCA vs CBCA, articles of incorporation, share structure, organizational meeting, minute book, and annual maintenance. What Ontario corporate lawyers do to properly set up a new corporation.",
    date: "March 2026",
    readTime: "10 min read",
    tag: "Corporate Law",
  },
  {
    slug: "ontario-wrongful-dismissal-guide",
    title: "Wrongful Dismissal in Ontario: What Employees and Lawyers Need to Know (2026)",
    excerpt:
      "Most Ontario employees accept ESA minimums — a fraction of what they&apos;re owed. Here&apos;s how wrongful dismissal works, how Bardal factors determine notice, what damages are available, and why the 2-year limitation period matters.",
    date: "March 2026",
    readTime: "11 min read",
    tag: "Employment Law",
  },
  {
    slug: "ontario-real-estate-closing-checklist",
    title: "Ontario Real Estate Closing Checklist for Lawyers: Step-by-Step Guide (2026)",
    excerpt:
      "The complete checklist for Ontario residential real estate closings — from APS receipt through post-closing reporting letters. Trust account requirements, common closing day mistakes, and how Atticus automates the workflow.",
    date: "March 2026",
    readTime: "10 min read",
    tag: "Practice Management",
  },
  {
    slug: "power-of-attorney-ontario",
    title: "Power of Attorney in Ontario: Types, Requirements, and How It Works (2026)",
    excerpt:
      "The two types of Ontario power of attorney — Continuing POA for Property and POA for Personal Care — Substitute Decisions Act requirements, attorney duties, and what happens if you become incapacitated without one.",
    date: "March 2026",
    readTime: "11 min read",
    tag: "Wills & Estates",
  },
  {
    slug: "law-firm-trust-account-ontario",
    title: "How to Set Up a Trust Account for an Ontario Law Firm (2026 Guide)",
    excerpt:
      "Step-by-step guide to opening a mixed trust account under LSO By-Law 9 — bank requirements, CDIC coverage, record-keeping obligations, monthly reconciliation, and common violations that lead to LSO complaints.",
    date: "March 2026",
    readTime: "10 min read",
    tag: "Trust Accounting",
  },
  {
    slug: "how-to-make-a-will-ontario",
    title: "How to Make a Will in Ontario: Requirements, Costs, and What Lawyers Actually Do (2026)",
    excerpt:
      "Over 50% of Canadians don&apos;t have a valid will. Here&apos;s what the Succession Law Reform Act requires, the difference between formal and holograph wills, what happens without a will in Ontario, and what a lawyer does that a DIY kit doesn&apos;t.",
    date: "March 2026",
    readTime: "10 min read",
    tag: "Wills & Estates",
  },
  {
    slug: "legal-retainer-fee-ontario",
    title: "Legal Retainer Fees in Ontario: What They Are, How They Work (2026)",
    excerpt:
      "A retainer fee is not a flat price for your whole matter — it&apos;s a trust deposit drawn down as fees are earned. Here&apos;s how Ontario retainers work, LSO By-Law 9 trust rules, and typical retainer amounts by practice area.",
    date: "March 2026",
    readTime: "9 min read",
    tag: "Trust Accounting",
  },
  {
    slug: "law-firm-marketing-ontario",
    title: "Law Firm Marketing for Ontario Lawyers: How to Get Clients in 2026",
    excerpt:
      "Most Ontario solos rely on referrals — reliable but not scalable. Here&apos;s what actually drives new clients in 2026: Google Business Profile, local SEO, AI search, intake conversion, and the time leverage that makes business development possible.",
    date: "March 2026",
    readTime: "11 min read",
    tag: "Billing & Business",
  },
  {
    slug: "engagement-letter-ontario-lawyers",
    title: "Engagement Letters for Ontario Lawyers: What to Include and Why (2026)",
    excerpt:
      "The engagement letter is your most important malpractice protection tool. Here&apos;s a section-by-section breakdown of what LSO requires, what prevents fee disputes, and how AI can draft engagement letters in seconds.",
    date: "March 2026",
    readTime: "10 min read",
    tag: "Practice Management",
  },
  {
    slug: "conflict-of-interest-lawyers-ontario",
    title: "Conflict of Interest for Ontario Lawyers: Rules, Checks, and Malpractice Prevention (2026)",
    excerpt:
      "Missing a conflict is one of the most serious professional conduct failures an Ontario lawyer can make. Here&apos;s what LSO Rules 1.7–1.12 require, how to run a proper conflict check, and why manual checks fail as your practice grows.",
    date: "March 2026",
    readTime: "9 min read",
    tag: "LSO Compliance",
  },
  {
    slug: "lawpro-insurance-ontario",
    title: "LAWPRO Insurance for Ontario Lawyers: What You Need to Know in 2026",
    excerpt:
      "Who must have LAWPRO, what it covers, what drives your premium, and the top claim categories. 30% of all LAWPRO claims are administrative errors — here&apos;s how to prevent them.",
    date: "March 2026",
    readTime: "8 min read",
    tag: "Practice Management",
  },
  {
    slug: "how-to-switch-from-pclaw",
    title: "How to Switch from PCLaw: A Step-by-Step Migration Guide for Ontario Firms",
    excerpt:
      "A practical guide to migrating off PCLaw without losing your history — the parallel transition approach, trust account handoff, what to export, and how to retire PCLaw while maintaining LSO compliance.",
    date: "March 2026",
    readTime: "10 min read",
    tag: "Practice Management",
  },
  {
    slug: "virtual-law-firm-ontario",
    title: "How to Run a Virtual Law Firm in Ontario: The 2026 Guide",
    excerpt:
      "LSO rules for remote practice, the complete technology stack, digital client intake, and trust accounting without a physical office. Everything you need to run a fully virtual Ontario law firm.",
    date: "March 2026",
    readTime: "11 min read",
    tag: "Practice Setup",
  },
  {
    slug: "form-9-trust-reconciliation-ontario",
    title: "Form 9 Trust Reconciliation for Ontario Lawyers: Step-by-Step Guide (2026)",
    excerpt:
      "How to complete the LSO By-Law 9 Form 9 monthly trust reconciliation — the three-part format, a worked example, common errors that cause it to fail, and how software automates the process.",
    date: "March 2026",
    readTime: "10 min read",
    tag: "Trust Accounting",
  },
  {
    slug: "time-tracking-lawyers-ontario",
    title: "Time Tracking for Ontario Lawyers: A Practical Guide for 2026",
    excerpt:
      "Ontario lawyers lose 10–20% of billable hours to poor time tracking habits. Here&apos;s where the leakage happens, what methods actually work, and the revenue math on fixing it.",
    date: "March 2026",
    readTime: "9 min read",
    tag: "Billing & Business",
  },
  {
    slug: "client-intake-ontario-lawyers",
    title: "Client Intake for Ontario Law Firms: Best Practices for 2026",
    excerpt:
      "A step-by-step intake process for Ontario solo and small law firms — from intake form to conflict check, engagement letter, trust retainer, and limitation period flag. Includes LSO compliance checklist.",
    date: "March 2026",
    readTime: "9 min read",
    tag: "Practice Management",
  },
  {
    slug: "trust-accounting-guide-ontario",
    title: "Trust Accounting for Ontario Law Firms: The Complete 2026 Guide",
    excerpt:
      "LSO By-Law 9 requirements, client trust ledgers, monthly reconciliation, common violations, and what to look for in trust accounting software. The definitive guide for Ontario lawyers.",
    date: "March 2026",
    readTime: "11 min read",
    tag: "Trust Accounting",
  },
  {
    slug: "legal-document-management-ontario",
    title: "Legal Document Management for Ontario Law Firms: The 2026 Guide",
    excerpt:
      "How Ontario solo and small law firms should manage legal documents in 2026 — from shared drives to AI-powered processing. LSO compliance requirements, a four-system comparison, and practical setup steps.",
    date: "March 2026",
    readTime: "8 min read",
    tag: "Document Management",
  },
  {
    slug: "ai-tools-for-ontario-lawyers",
    title: "AI Tools for Ontario Lawyers in 2026: What Works, What Doesn't, and What the LSO Says",
    excerpt:
      "A practical breakdown of the AI tools Ontario lawyers are actually using — from legal research (Alexi, CanLII Assist) to document drafting (Spellbook, Harvey) to AI practice management (Atticus). Includes LSO compliance guidance.",
    date: "March 2026",
    readTime: "10 min read",
    tag: "AI & Technology",
  },
  {
    slug: "ontario-lawyer-hourly-rates",
    title: "Ontario Lawyer Hourly Rates in 2026: What Lawyers Charge by Practice Area",
    excerpt:
      "A data-driven breakdown of Ontario lawyer hourly rates in 2026 by practice area, experience level, and city — plus billing strategy tips for solo practitioners.",
    date: "March 2026",
    readTime: "7 min read",
    tag: "Billing & Business",
  },
  {
    slug: "how-to-start-a-law-firm-ontario",
    title: "How to Start a Law Firm in Ontario: The Complete 2026 Setup Guide",
    excerpt:
      "Everything you need to open a solo or small law firm in Ontario — LSO requirements, trust account setup, LAWPRO insurance, practice management software, and your pre-launch checklist.",
    date: "March 2026",
    readTime: "12 min read",
    tag: "Practice Setup",
  },
  {
    slug: "law-firm-billing-software-ontario",
    title: "Law Firm Billing Software for Ontario Lawyers: What to Look For in 2026",
    excerpt:
      "A practical guide to billing software for Ontario solo and small law firms — LSO By-Law 9 trust accounting requirements, HST, time tracking, and why US-centric tools fall short.",
    date: "March 2026",
    readTime: "8 min read",
    tag: "Billing & Trust",
  },
  {
    slug: "missing-limitation-periods-ontario",
    title: "How Ontario Lawyers Miss Limitation Periods — And How to Stop It",
    excerpt:
      "Missing a limitation period is one of the top causes of malpractice claims for Ontario lawyers. Here's a practical breakdown of where it goes wrong and what to do about it.",
    date: "March 2026",
    readTime: "7 min read",
    tag: "Deadline Management",
  },
  {
    slug: "lso-ai-compliance-ontario",
    title: "LSO Rules on AI for Ontario Lawyers: What You Actually Need to Do",
    excerpt:
      "The Law Society of Ontario has issued guidance on AI use. Here's what Rule 3.3 (confidentiality) and Rule 3.1 (competence) mean in practice for lawyers using tools like ChatGPT, Claude, or legal AI platforms.",
    date: "March 2026",
    readTime: "9 min read",
    tag: "LSO Compliance",
  },
  {
    slug: "solo-lawyer-practice-management",
    title: "The Solo Lawyer's Practice Management Playbook",
    excerpt:
      "Running a solo law practice means you're the lawyer, the bookkeeper, and the admin. Here's how Ontario solo lawyers are using AI to eliminate the admin overhead and focus on lawyering.",
    date: "March 2026",
    readTime: "8 min read",
    tag: "Practice Management",
  },
];

export default function BlogIndexPage() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", background: "#07070a", color: "#f0e8d8", minHeight: "100vh" }}>

      {/* NAV */}
      <nav style={{ padding: "20px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(198,146,42,0.1)" }}>
        <Link href="/" style={{ fontSize: "20px", fontWeight: 600, color: "#faf8f4", textDecoration: "none" }}>Atticus</Link>
        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          <Link href="/calculator" style={{ color: "rgba(240,232,216,0.5)", fontSize: "14px", textDecoration: "none" }}>Free Calculator</Link>
          <Link href="/sign-up" style={{ background: "#C6922A", color: "#07070a", padding: "10px 24px", textDecoration: "none", fontSize: "14px", fontWeight: 500 }}>
            Start Free Trial →
          </Link>
        </div>
      </nav>

      <section style={{ padding: "80px 48px 60px", maxWidth: "820px", margin: "0 auto" }}>
        <p style={{ fontSize: "12px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#C6922A", marginBottom: "20px" }}>Blog</p>
        <h1 style={{ fontSize: "clamp(36px, 4vw, 56px)", fontWeight: 300, lineHeight: 1.1, color: "#faf8f4", marginBottom: "16px" }}>
          Practice management insights<br /><em style={{ fontStyle: "italic", color: "#e8b84b" }}>for Ontario lawyers.</em>
        </h1>
        <p style={{ fontSize: "16px", color: "rgba(240,232,216,0.55)", lineHeight: 1.7 }}>
          Guides on AI compliance, deadline management, trust accounting, and running a lean Ontario law practice.
        </p>
      </section>

      <section style={{ padding: "0 48px 80px", maxWidth: "820px", margin: "0 auto" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "rgba(255,255,255,0.06)" }}>
          {POSTS.map(post => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              style={{ background: "#07070a", padding: "36px 40px", textDecoration: "none", display: "block" }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                <span style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#C6922A", background: "rgba(198,146,42,0.1)", padding: "3px 10px", borderRadius: "20px" }}>{post.tag}</span>
                <span style={{ fontSize: "12px", color: "rgba(240,232,216,0.3)" }}>{post.date} · {post.readTime}</span>
              </div>
              <h2 style={{ fontSize: "22px", fontWeight: 400, color: "#faf8f4", marginBottom: "12px", lineHeight: 1.3 }}>{post.title}</h2>
              <p style={{ fontSize: "14px", color: "rgba(240,232,216,0.55)", lineHeight: 1.8, marginBottom: "16px" }}>{post.excerpt}</p>
              <span style={{ fontSize: "13px", color: "#C6922A" }}>Read article →</span>
            </Link>
          ))}
        </div>
      </section>

      <footer style={{ padding: "32px 48px", borderTop: "1px solid rgba(198,146,42,0.1)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
        <Link href="/" style={{ color: "rgba(240,232,216,0.3)", fontSize: "13px", textDecoration: "none" }}>← Atticus Home</Link>
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          <Link href="/calculator" style={{ color: "rgba(240,232,216,0.3)", fontSize: "13px", textDecoration: "none" }}>Free Calculator</Link>
          <Link href="/pricing" style={{ color: "rgba(240,232,216,0.3)", fontSize: "13px", textDecoration: "none" }}>Pricing</Link>
          <Link href="/privacy" style={{ color: "rgba(240,232,216,0.3)", fontSize: "13px", textDecoration: "none" }}>Privacy</Link>
        </div>
      </footer>
    </div>
  );
}
