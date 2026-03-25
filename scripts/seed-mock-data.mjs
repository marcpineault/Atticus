/**
 * Seed mock data for a user account.
 * Usage: node scripts/seed-mock-data.mjs mpineault1@gmail.com
 * Remove: node scripts/seed-mock-data.mjs mpineault1@gmail.com --remove
 */

import pg from "pg";
import { config } from "dotenv";
import { randomUUID } from "crypto";

config({ path: ".env.local" });

const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
const email = process.argv[2];
const remove = process.argv.includes("--remove");

if (!email) {
  console.error("Usage: node scripts/seed-mock-data.mjs <email> [--remove]");
  process.exit(1);
}

const q = (text, params) => pool.query(text, params);

async function getUser() {
  const { rows } = await q("SELECT * FROM users WHERE email = $1 LIMIT 1", [email]);
  if (!rows[0]) { console.error(`User not found: ${email}`); process.exit(1); }
  return rows[0];
}

const uuid = () => randomUUID();
const daysAgo = (d) => new Date(Date.now() - d * 86400000);

async function removeMockData() {
  const user = await getUser();
  const uid = user.id;
  const names = ["Sarah Chen", "David Okonkwo", "Maria Rodriguez", "James Whitfield", "Priya Sharma"];

  const { rows: clients } = await q(
    "SELECT id, name FROM clients WHERE user_id = $1 AND name = ANY($2)",
    [uid, names]
  );

  if (!clients.length) { console.log("No mock data found."); return; }

  const ids = clients.map(c => c.id);

  // Get all documents for these clients
  const { rows: docs } = await q(
    "SELECT id FROM documents WHERE user_id = $1 AND client_id = ANY($2)",
    [uid, ids]
  );
  const docIds = docs.map(d => d.id);

  if (docIds.length) {
    await q("DELETE FROM document_chunks WHERE document_id = ANY($1)", [docIds]);
    await q("DELETE FROM entities WHERE document_id = ANY($1)", [docIds]);
  }

  // Get all matters for these clients
  const { rows: matters } = await q(
    "SELECT id FROM matters WHERE user_id = $1 AND client_id = ANY($2)",
    [uid, ids]
  );
  const matterIds = matters.map(m => m.id);

  await q("DELETE FROM entities WHERE user_id = $1 AND client_id = ANY($2)", [uid, ids]);
  await q("DELETE FROM trust_transactions WHERE user_id = $1 AND client_id = ANY($2)", [uid, ids]);
  await q("DELETE FROM time_entries WHERE user_id = $1 AND client_id = ANY($2)", [uid, ids]);
  await q("DELETE FROM invoices WHERE user_id = $1 AND client_id = ANY($2)", [uid, ids]);
  await q("DELETE FROM documents WHERE user_id = $1 AND client_id = ANY($2)", [uid, ids]);
  if (matterIds.length) {
    await q("DELETE FROM entities WHERE matter_id = ANY($1)", [matterIds]);
    await q("DELETE FROM time_entries WHERE matter_id = ANY($1)", [matterIds]);
    await q("DELETE FROM invoices WHERE matter_id = ANY($1)", [matterIds]);
    await q("DELETE FROM documents WHERE matter_id = ANY($1)", [matterIds]);
  }
  await q("DELETE FROM matters WHERE user_id = $1 AND client_id = ANY($2)", [uid, ids]);
  await q("DELETE FROM clients WHERE id = ANY($1)", [ids]);

  console.log(`Removed mock data (${clients.length} clients and all related records).`);
}

async function seedMockData() {
  const user = await getUser();
  const uid = user.id;
  const rate = user.hourly_rate ?? 400;

  console.log(`Seeding mock data for ${user.email} (${uid})...`);

  // --- CLIENTS ---
  const clientsRaw = [
    { name: "Sarah Chen", email: "sarah.chen@techstartup.ca", phone: "416-555-0101", company: "Chen Tech Solutions Inc.", summary: "Tech startup founder going through a commercial lease dispute with landlord over early termination clause. Also needs corporate governance advice for Series A fundraising.", notes: "Very responsive via email. Prefers morning meetings. Referred by David Okonkwo." },
    { name: "David Okonkwo", email: "david.okonkwo@gmail.com", phone: "647-555-0202", company: null, summary: "Family law matter — contested divorce with custody dispute. Two children (ages 8 and 12). Spouse is represented by Miller & Associates.", notes: "Sensitive situation. Prioritize children's wellbeing. Has a restraining order hearing on April 15." },
    { name: "Maria Rodriguez", email: "mrodriguez@buildright.ca", phone: "905-555-0303", company: "BuildRight Construction Ltd.", summary: "Construction lien dispute — subcontractor claiming $340,000 in unpaid work on a Mississauga condo project. Counter-claim for deficient work.", notes: "Bring translator to meetings if needed. Has all invoices and project docs organized." },
    { name: "James Whitfield", email: "j.whitfield@whitfieldgroup.ca", phone: "416-555-0404", company: "Whitfield Property Group", summary: "Commercial real estate portfolio — ongoing tenant disputes, lease renewals, and a potential property acquisition on Bay Street worth $4.2M.", notes: "Long-term client. Expects quick turnaround. Monthly retainer arrangement." },
    { name: "Priya Sharma", email: "priya@sharmalaw.ca", phone: "416-555-0505", company: "Sharma & Associates", summary: "Referred employment law matter — wrongful dismissal claim against former employer (major bank). Seeking $280,000 in damages plus reinstatement.", notes: "Fellow lawyer. Very knowledgeable about process. Wants aggressive representation." },
  ];

  const clients = [];
  for (const c of clientsRaw) {
    const id = uuid();
    await q(
      `INSERT INTO clients (id, user_id, name, email, phone, company, summary, total_billable_minutes)
       VALUES ($1,$2,$3,$4,$5,$6,$7,0)`,
      [id, uid, c.name, c.email, c.phone, c.company, c.summary]
    );
    clients.push({ id, ...c });
  }
  console.log(`  Created ${clients.length} clients`);

  // --- MATTERS ---
  const mattersRaw = [
    { ci: 0, title: "Chen v. Paramount Properties — Lease Dispute", desc: "Commercial lease early termination dispute. Client seeks to exit 5-year lease at year 2 citing landlord breach of maintenance obligations.", status: "active" },
    { ci: 0, title: "Chen Tech Solutions — Series A Corporate", desc: "Corporate governance structuring for Series A fundraising. SHA, board composition, ESOP.", status: "active" },
    { ci: 1, title: "Okonkwo v. Okonkwo — Divorce & Custody", desc: "Contested divorce with custody dispute. Two children. Temporary custody motion filed.", status: "active" },
    { ci: 2, title: "BuildRight v. ProSub Contractors — Lien Dispute", desc: "Construction lien claim of $340,000. Counter-claim for deficient work on Mississauga condo project.", status: "active" },
    { ci: 3, title: "Bay Street Acquisition — 120 Bay St", desc: "Potential commercial property acquisition. Purchase price $4.2M. Due diligence phase.", status: "active" },
    { ci: 3, title: "Whitfield Portfolio — Q1 Lease Renewals", desc: "Renewal negotiations for 3 commercial tenants across the portfolio.", status: "active" },
    { ci: 4, title: "Sharma v. Royal Metro Bank — Wrongful Dismissal", desc: "Wrongful dismissal claim. 12 years of service, VP level. Seeking $280K + reinstatement.", status: "active" },
    { ci: 1, title: "Okonkwo — Restraining Order", desc: "Emergency restraining order application. Hearing scheduled April 15.", status: "pending" },
  ];

  const matters = [];
  for (const m of mattersRaw) {
    const id = uuid();
    await q(
      `INSERT INTO matters (id, client_id, user_id, title, description, status)
       VALUES ($1,$2,$3,$4,$5,$6)`,
      [id, clients[m.ci].id, uid, m.title, m.desc, m.status]
    );
    matters.push({ id, ...m });
  }
  console.log(`  Created ${matters.length} matters`);

  // --- DOCUMENTS ---
  const docsRaw = [
    { ci: 0, mi: 0, type: "email", title: "RE: Lease Termination Notice — Paramount Properties", summary: "Sarah Chen notified Paramount Properties of intent to terminate lease citing Section 12.3 breach. Landlord's counsel responded disputing the breach claim and threatening litigation if tenant vacates.", mins: 12, ago: 2 },
    { ci: 0, mi: 0, type: "document", title: "Commercial Lease Agreement — 45 King West, Unit 800", summary: "Five-year commercial lease between Chen Tech Solutions Inc. and Paramount Properties Ltd. Key clauses: early termination (Section 14), maintenance obligations (Section 12), assignment rights (Section 18). Rent: $8,500/month.", mins: 30, ago: 14 },
    { ci: 1, mi: 2, type: "document", title: "Financial Disclosure — Okonkwo Family Assets", summary: "Complete financial disclosure showing combined family assets of $1.2M including matrimonial home ($890K), RRSPs ($180K), and business interests ($130K). Spouse income: $95K. Client income: $72K.", mins: 45, ago: 7 },
    { ci: 1, mi: 2, type: "meeting", title: "Client Meeting — Custody Arrangement Discussion", summary: "Discussed proposed custody schedule. Client prefers week-on/week-off. Children currently in client's primary care. School 10 min from client, 35 min from spouse. Agreed to propose 60/40 split.", mins: 60, ago: 3 },
    { ci: 2, mi: 3, type: "document", title: "Construction Lien Claim — ProSub Contractors Inc.", summary: "Lien claim filed by ProSub Contractors for $340,000 in unpaid invoices for mechanical and electrical work on the Lakeview Condos project, Mississauga. Work period: June 2025 to January 2026.", mins: 25, ago: 10 },
    { ci: 2, mi: 3, type: "email", title: "FW: Deficiency Report — Lakeview Condos Mechanical", summary: "Building inspector report identifying 14 deficiencies in ProSub's mechanical work including improper HVAC installation, fire suppression code violations, and inadequate insulation. Remediation cost: $85,000.", mins: 18, ago: 5 },
    { ci: 3, mi: 4, type: "document", title: "Purchase Agreement — 120 Bay Street", summary: "Draft APS for commercial property at 120 Bay Street. Purchase price: $4,200,000. Closing: May 30, 2026. Subject to financing, environmental assessment, and building inspection. Deposit: $420,000.", mins: 90, ago: 1 },
    { ci: 3, mi: 5, type: "email", title: "RE: Lease Renewal — TechHub Co. (Suite 400)", summary: "TechHub Co. requesting 15% rent reduction citing market conditions. Current rent: $12,000/month. Proposed: $10,200/month. Counter-proposal recommended at $11,200 with 2-year term.", mins: 15, ago: 4 },
    { ci: 4, mi: 6, type: "document", title: "Employment Agreement — Priya Sharma, VP Operations", summary: "Original employment agreement showing 12-year tenure, base salary $185,000 plus bonus up to 30%. Termination clause requires 18 months notice. Non-compete: 12 months within GTA.", mins: 35, ago: 8 },
    { ci: 4, mi: 6, type: "voice_note", title: "Voice Note — Sharma Termination Timeline", summary: "Client recounts termination meeting on Feb 28. Given 30 minutes to clear desk. No severance offered. HR cited 'restructuring' but position reposted on LinkedIn. Manager made discriminatory comments about age.", mins: 20, ago: 6 },
    { ci: 0, mi: 1, type: "document", title: "Shareholders Agreement — Chen Tech Solutions Inc.", summary: "Draft SHA for Series A. Key terms: 20% dilution, anti-dilution protection, board composition (2 founder, 1 investor, 1 independent), drag-along at 75%, information rights.", mins: 60, ago: 3 },
    { ci: 1, mi: 7, type: "document", title: "Restraining Order Application — Affidavit", summary: "Draft affidavit for emergency restraining order. Documents 3 incidents: Feb 12 (workplace), Feb 20 (50+ texts in one day), March 1 (followed from school). Police report #2026-04521.", mins: 40, ago: 1 },
  ];

  const docs = [];
  for (const d of docsRaw) {
    const id = uuid();
    await q(
      `INSERT INTO documents (id, user_id, client_id, matter_id, type, title, summary, raw_content, billable_minutes, status, created_at)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,'completed',$10)`,
      [id, uid, clients[d.ci].id, matters[d.mi].id, d.type, d.title, d.summary, `[Mock content for "${d.title}"]`, d.mins, daysAgo(d.ago)]
    );
    docs.push({ id, ...d });
  }
  console.log(`  Created ${docs.length} documents`);

  // --- ENTITIES ---
  const ents = [
    // Deadlines
    { di: 0, ci: 0, mi: 0, type: "deadline", value: "Respond to Paramount's counsel re: lease termination", due: daysAgo(-5), ctx: "10 business days to respond to dispute letter" },
    { di: 2, ci: 1, mi: 2, type: "deadline", value: "File motion for temporary custody order", due: daysAgo(-10), ctx: "Must file before next case conference" },
    { di: 4, ci: 2, mi: 3, type: "deadline", value: "Deadline to perfect construction lien", due: daysAgo(-21), ctx: "90-day perfection deadline from last supply of services" },
    { di: 6, ci: 3, mi: 4, type: "deadline", value: "Closing date — 120 Bay Street acquisition", due: new Date("2026-05-30"), ctx: "APS closing date, subject to conditions" },
    { di: 6, ci: 3, mi: 4, type: "deadline", value: "Waive financing condition", due: new Date("2026-04-15"), ctx: "Financing condition must be waived or deal collapses" },
    { di: 8, ci: 4, mi: 6, type: "deadline", value: "File Statement of Claim — wrongful dismissal", due: daysAgo(-30), ctx: "Within limitation period" },
    { di: 11, ci: 1, mi: 7, type: "deadline", value: "Restraining order hearing", due: new Date("2026-04-15"), ctx: "Emergency motion scheduled" },
    { di: 7, ci: 3, mi: 5, type: "deadline", value: "TechHub lease renewal response deadline", due: daysAgo(-14), ctx: "Must respond to renewal request" },
    // Action items
    { di: 0, ci: 0, mi: 0, type: "action_item", value: "Draft response letter to Paramount's counsel citing Section 12.3 maintenance breach evidence", due: null, ctx: "Include photos of water damage and HVAC inspection report" },
    { di: 3, ci: 1, mi: 2, type: "action_item", value: "Prepare proposed parenting schedule for mediation", due: null, ctx: "Week-on/week-off with adjustment for school proximity" },
    { di: 5, ci: 2, mi: 3, type: "action_item", value: "Obtain independent engineering assessment of deficiencies", due: null, ctx: "Need third-party expert to validate inspector findings" },
    { di: 6, ci: 3, mi: 4, type: "action_item", value: "Order Phase II environmental assessment for 120 Bay St", due: null, ctx: "Required before financing condition can be waived" },
    { di: 9, ci: 4, mi: 6, type: "action_item", value: "Subpoena LinkedIn job posting and HR restructuring documents", due: null, ctx: "Evidence that position was not actually eliminated" },
    { di: 10, ci: 0, mi: 1, type: "action_item", value: "Review anti-dilution clause with corporate counsel", due: null, ctx: "Ensure weighted average, not full ratchet" },
    // Amounts
    { di: 4, ci: 2, mi: 3, type: "amount", value: "$340,000 — ProSub lien claim", due: null, ctx: "Total unpaid invoices claimed by subcontractor" },
    { di: 5, ci: 2, mi: 3, type: "amount", value: "$85,000 — estimated remediation cost", due: null, ctx: "Building inspector estimate for fixing deficient work" },
    { di: 6, ci: 3, mi: 4, type: "amount", value: "$4,200,000 — purchase price for 120 Bay Street", due: null, ctx: "Commercial property acquisition" },
    { di: 8, ci: 4, mi: 6, type: "amount", value: "$280,000 — wrongful dismissal damages sought", due: null, ctx: "18 months notice x $185K salary plus bonus" },
    { di: 2, ci: 1, mi: 2, type: "amount", value: "$1,200,000 — combined family assets", due: null, ctx: "Matrimonial home, RRSPs, and business interests" },
    // People
    { di: 0, ci: 0, mi: 0, type: "person", value: "Robert Paramount — landlord's principal", due: null, ctx: "Paramount Properties Ltd." },
    { di: 3, ci: 1, mi: 2, type: "person", value: "Angela Okonkwo — spouse/respondent", due: null, ctx: "Represented by Miller & Associates" },
    { di: 4, ci: 2, mi: 3, type: "person", value: "Frank DiMaggio — ProSub Contractors president", due: null, ctx: "Subcontractor making the lien claim" },
    { di: 9, ci: 4, mi: 6, type: "person", value: "Michael Torres — Sharma's former manager", due: null, ctx: "Allegedly made discriminatory comments" },
    // Case ref
    { di: 11, ci: 1, mi: 7, type: "case_reference", value: "Police Report #2026-04521", due: null, ctx: "Filed for harassment incidents" },
  ];

  for (const e of ents) {
    await q(
      `INSERT INTO entities (id, document_id, user_id, client_id, matter_id, type, value, due_date, context, resolved)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,false)`,
      [uuid(), docs[e.di].id, uid, clients[e.ci].id, matters[e.mi].id, e.type, e.value, e.due, e.ctx]
    );
  }
  console.log(`  Created ${ents.length} entities`);

  // --- TIME ENTRIES ---
  const times = [
    { ci: 0, mi: 0, desc: "Review commercial lease agreement and identify termination clauses", mins: 30, ago: 14 },
    { ci: 0, mi: 0, desc: "Draft lease termination notice citing Section 12.3 breach", mins: 45, ago: 10 },
    { ci: 0, mi: 0, desc: "Review landlord's counsel response and research case law", mins: 60, ago: 2 },
    { ci: 0, mi: 1, desc: "Review draft SHA and markup anti-dilution provisions", mins: 90, ago: 3 },
    { ci: 1, mi: 2, desc: "Initial client consultation — divorce and custody overview", mins: 60, ago: 21 },
    { ci: 1, mi: 2, desc: "Review financial disclosure documents", mins: 45, ago: 7 },
    { ci: 1, mi: 2, desc: "Client meeting — custody arrangement discussion", mins: 60, ago: 3 },
    { ci: 1, mi: 7, desc: "Draft restraining order affidavit", mins: 120, ago: 1 },
    { ci: 2, mi: 3, desc: "Review construction lien claim and supporting invoices", mins: 45, ago: 10 },
    { ci: 2, mi: 3, desc: "Review building inspection deficiency report", mins: 30, ago: 5 },
    { ci: 2, mi: 3, desc: "Research case law on construction lien counter-claims", mins: 60, ago: 4 },
    { ci: 3, mi: 4, desc: "Review draft APS for 120 Bay Street", mins: 90, ago: 1 },
    { ci: 3, mi: 4, desc: "Call with client re: financing conditions and timeline", mins: 30, ago: 1 },
    { ci: 3, mi: 5, desc: "Review TechHub renewal request and draft counter-proposal", mins: 30, ago: 4 },
    { ci: 4, mi: 6, desc: "Review employment agreement and termination provisions", mins: 45, ago: 8 },
    { ci: 4, mi: 6, desc: "Client call — document termination timeline and evidence", mins: 30, ago: 6 },
    { ci: 4, mi: 6, desc: "Research wrongful dismissal damages precedents for VP-level banking", mins: 90, ago: 4 },
  ];

  for (const t of times) {
    await q(
      `INSERT INTO time_entries (id, user_id, client_id, matter_id, description, minutes, entry_date)
       VALUES ($1,$2,$3,$4,$5,$6,$7)`,
      [uuid(), uid, clients[t.ci].id, matters[t.mi].id, t.desc, t.mins, daysAgo(t.ago)]
    );
  }
  console.log(`  Created ${times.length} time entries`);

  // Update client billable totals
  const clientMins = [225, 285, 135, 150, 165];
  for (let i = 0; i < clients.length; i++) {
    await q("UPDATE clients SET total_billable_minutes = $1 WHERE id = $2", [clientMins[i], clients[i].id]);
  }

  // --- TRUST TRANSACTIONS ---
  const trusts = [
    { ci: 1, desc: "Retainer deposit — divorce & custody", type: "receipt", amt: 500000, ago: 21 },
    { ci: 1, desc: "Filing fees — temporary custody motion", type: "disbursement", amt: -35000, ago: 7 },
    { ci: 2, desc: "Retainer deposit — lien dispute", type: "receipt", amt: 750000, ago: 10 },
    { ci: 3, desc: "Retainer deposit — Bay Street acquisition", type: "receipt", amt: 1000000, ago: 5 },
    { ci: 4, desc: "Retainer deposit — wrongful dismissal", type: "receipt", amt: 300000, ago: 8 },
  ];

  for (const t of trusts) {
    await q(
      `INSERT INTO trust_transactions (id, user_id, client_id, type, amount, description, transaction_date)
       VALUES ($1,$2,$3,$4,$5,$6,$7)`,
      [uuid(), uid, clients[t.ci].id, t.type, t.amt, t.desc, daysAgo(t.ago)]
    );
  }
  console.log(`  Created ${trusts.length} trust transactions`);

  // --- INVOICE ---
  const lineItems = [
    { description: "Review TechHub renewal request", hours: 0.5, rate, amount: rate * 0.5 },
    { description: "Draft counter-proposal and market analysis", hours: 0.5, rate, amount: rate * 0.5 },
  ];
  const totalAmount = Math.round(rate * 1 * 113); // 1hr * rate * 1.13, in cents
  const hstAmount = Math.round(rate * 1 * 13);

  await q(
    `INSERT INTO invoices (id, user_id, client_id, matter_id, invoice_number, status, issue_date, due_date, line_items, total_amount, hst_rate, hst_amount, sent_at)
     VALUES ($1,$2,$3,$4,$5,'sent',$6,$7,$8,$9,13,$10,$11)`,
    [uuid(), uid, clients[3].id, matters[5].id, "ATT-2026-001", daysAgo(4), daysAgo(-26), JSON.stringify(lineItems), totalAmount, hstAmount, daysAgo(4)]
  );
  console.log(`  Created 1 invoice (ATT-2026-001)`);

  const totalMins = times.reduce((s, t) => s + t.mins, 0);
  console.log(`\nDone! Summary:`);
  console.log(`  5 clients, 8 matters, 12 documents, ${ents.length} entities`);
  console.log(`  ${times.length} time entries (${(totalMins/60).toFixed(1)} hours = $${((totalMins/60)*rate).toFixed(0)} at $${rate}/hr)`);
  console.log(`  5 trust transactions, 1 invoice`);
  console.log(`\nTo remove: node scripts/seed-mock-data.mjs ${email} --remove`);
}

try {
  if (remove) await removeMockData();
  else await seedMockData();
} catch (err) {
  console.error("Error:", err);
} finally {
  await pool.end();
}
