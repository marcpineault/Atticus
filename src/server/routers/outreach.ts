import { createTRPCRouter, protectedProcedure } from "@/server/trpc";
import { TRPCError } from "@trpc/server";
import {
  campaigns,
  campaignSteps,
  campaignSends,
  prospects,
  emailUnsubscribes,
} from "@/lib/db/schema";
import { eq, and, desc, inArray, sql } from "drizzle-orm";
import { z } from "zod";
import { resend } from "@/lib/email/client";
import { personalize, buildOutreachHtml, isConsentValid } from "@/lib/outreach/helpers";

const OUTREACH_FROM_EMAIL = process.env.OUTREACH_FROM_EMAIL ?? "Marc from Atticus <marc@outreach.getatticus.ca>";

// ── Pre-built Hormozi-style email sequences ──────────────────

export const EMAIL_SEQUENCES: Record<
  string,
  { name: string; steps: { subject: string; body: string; delayDays: number; channel: "email" | "linkedin" | "call" }[] }
> = {
  family_law: {
    name: "Family Law Cold Outreach",
    steps: [
      {
        subject: "{{firstName}}, quick question about your family law practice",
        delayDays: 0,
        channel: "email" as const,
        body: `Hi {{firstName}},

I built an AI assistant specifically for Ontario family law practitioners. It automatically tracks limitation periods under the Family Law Act, drafts separation agreements from your notes, and sends you a morning briefing with every upcoming deadline.

One lawyer told me it caught a missed equalization date that would have cost her client $340K.

Would it be worth 15 minutes to see if it could help your practice? Happy to do a quick screen share this week.

— Marc
Founder, Atticus`,
      },
      {
        subject: "Re: {{firstName}}, quick question about your family law practice",
        delayDays: 3,
        channel: "email" as const,
        body: `Hi {{firstName}},

Following up — I know family law matters move fast and deadlines pile up.

Atticus watches every limitation period, court filing date, and follow-up across all your matters. One dashboard, zero missed dates.

Here's what a typical family lawyer's morning briefing looks like:
• 2 upcoming limitation periods this week
• 3 client follow-ups due today
• 1 motion filing deadline in 48 hours

If that sounds useful, I'll show you the whole thing in 10 minutes. Just reply "sure" and I'll send a link.

— Marc`,
      },
      {
        subject: "LinkedIn connection — {{firstName}}",
        delayDays: 5,
        channel: "linkedin" as const,
        body: `Connect with {{firstName}} on LinkedIn. Mention Atticus and the family law deadline tracking feature. Keep it casual and reference the emails sent.`,
      },
      {
        subject: "Thought of you, {{firstName}}",
        delayDays: 7,
        channel: "email" as const,
        body: `{{firstName}},

Just shipped a new feature — AI-powered client intake. Your clients fill out a simple web form, Atticus extracts the key facts, identifies the practice area, and creates a draft matter summary before you even pick up the phone.

Family law firms using it say it cuts intake time from 45 minutes to 10.

Worth a quick look? It's $149/month with a 30-day money-back guarantee.

— Marc`,
      },
      {
        subject: "Quick call — {{firstName}}",
        delayDays: 10,
        channel: "call" as const,
        body: `Call {{firstName}} to follow up on the outreach sequence. Reference the emails and LinkedIn connection. Ask if they have 10 minutes to see a demo of Atticus for family law.`,
      },
      {
        subject: "Last one from me, {{firstName}}",
        delayDays: 14,
        channel: "email" as const,
        body: `{{firstName}},

I won't keep emailing — I know you're busy with clients.

If you ever want to see how Atticus handles limitation periods, trust accounting, and AI document drafting for Ontario family law, the offer stands.

Just reply whenever. No pressure, no follow-up sequence after this.

— Marc`,
      },
    ],
  },
  real_estate: {
    name: "Real Estate Law Cold Outreach",
    steps: [
      {
        subject: "{{firstName}}, closing dates slipping through the cracks?",
        delayDays: 0,
        channel: "email" as const,
        body: `Hi {{firstName}},

I built Atticus specifically for Ontario real estate lawyers who are juggling 20+ closings at once.

It tracks every closing date, requisition deadline, and title search across all your matters. Morning briefing at 9am tells you exactly what needs attention today.

Plus it handles Form 9A trust reconciliation automatically — no more month-end spreadsheet scramble.

Would 10 minutes be worth it to see if this fits your practice?

— Marc
Founder, Atticus`,
      },
      {
        subject: "Re: {{firstName}}, closing dates slipping through the cracks?",
        delayDays: 3,
        channel: "email" as const,
        body: `Hi {{firstName}},

Quick follow-up — just launched a feature I think real estate lawyers will love.

Upload any purchase agreement or title document. Atticus reads it, extracts every date, condition, and party name, and adds them to your matter timeline automatically.

No more manually entering closing dates from 30-page agreements.

Reply "show me" and I'll send a 2-minute demo video.

— Marc`,
      },
      {
        subject: "LinkedIn connection — {{firstName}}",
        delayDays: 5,
        channel: "linkedin" as const,
        body: `Connect with {{firstName}} on LinkedIn. Mention Atticus and the real estate closing tracker. Keep it casual and reference the emails sent.`,
      },
      {
        subject: "How {{firmName}} lawyers handle 30+ closings/month",
        delayDays: 7,
        channel: "email" as const,
        body: `{{firstName}},

Ontario real estate lawyers tell me the same thing: "I'm not worried about the legal work — I'm worried about missing a deadline buried in one of my 30 active files."

Atticus fixes that. Every closing date, every requisition, every condition — tracked and surfaced before it becomes urgent.

$149/month. 30-day money-back guarantee. Takes 15 minutes to set up.

Worth a try?

— Marc`,
      },
      {
        subject: "Quick call — {{firstName}}",
        delayDays: 10,
        channel: "call" as const,
        body: `Call {{firstName}} to follow up on the outreach sequence. Reference the emails and LinkedIn connection. Ask if they have 10 minutes to see a demo of Atticus for real estate closing management.`,
      },
      {
        subject: "Closing the loop, {{firstName}}",
        delayDays: 14,
        channel: "email" as const,
        body: `{{firstName}},

Last note from me. If you ever want an AI assistant that tracks closings, handles trust reconciliation, and drafts standard real estate documents — Atticus is here.

No hard feelings if the timing isn't right. Just reply whenever.

— Marc`,
      },
    ],
  },
  criminal_defence: {
    name: "Criminal Defence Cold Outreach",
    steps: [
      {
        subject: "{{firstName}}, never miss a Jordan deadline again",
        delayDays: 0,
        channel: "email" as const,
        body: `Hi {{firstName}},

I built an AI assistant for Ontario criminal defence lawyers. It tracks every Jordan timeline, bail review date, and disclosure deadline across all your matters.

One missed 11(b) deadline can mean a stay of proceedings — or a very angry client. Atticus makes sure that never happens.

Morning briefing at 9am. Every deadline. Every matter. One screen.

Worth 10 minutes to take a look?

— Marc
Founder, Atticus`,
      },
      {
        subject: "Re: {{firstName}}, never miss a Jordan deadline again",
        delayDays: 3,
        channel: "email" as const,
        body: `{{firstName}},

Following up — here's what Atticus does for criminal defence:

• Tracks Jordan/11(b) timelines automatically
• Flags bail review dates and disclosure deadlines
• AI-drafts bail hearing prep from your case notes
• Morning briefing with every urgent item

One defence lawyer said: "I used to check 4 different calendars every morning. Now I check one."

Reply "interested" and I'll show you in 10 minutes.

— Marc`,
      },
      {
        subject: "LinkedIn connection — {{firstName}}",
        delayDays: 5,
        channel: "linkedin" as const,
        body: `Connect with {{firstName}} on LinkedIn. Mention Atticus and the Jordan deadline tracking feature. Keep it casual and reference the emails sent.`,
      },
      {
        subject: "Your Monday morning in 30 seconds",
        delayDays: 7,
        channel: "email" as const,
        body: `{{firstName}},

Imagine opening your laptop Monday morning and seeing:

"3 matters with court dates this week. 1 Jordan ceiling approaching in 14 days. 2 disclosure requests outstanding. 1 bail review tomorrow."

That's the Atticus morning briefing. Every criminal defence deadline, surfaced before it becomes a crisis.

$149/month. Cancel anytime. 30-day guarantee.

— Marc`,
      },
      {
        subject: "Quick call — {{firstName}}",
        delayDays: 10,
        channel: "call" as const,
        body: `Call {{firstName}} to follow up on the outreach sequence. Reference the emails and LinkedIn connection. Ask if they have 10 minutes to see a demo of Atticus for criminal defence deadline management.`,
      },
      {
        subject: "Last one, {{firstName}}",
        delayDays: 14,
        channel: "email" as const,
        body: `{{firstName}},

I'll stop here. If you ever want an AI assistant that watches your Jordan timelines, bail dates, and disclosure deadlines — just reply.

No follow-up after this. Good luck with your cases.

— Marc`,
      },
    ],
  },
  corporate: {
    name: "Corporate/Business Law Cold Outreach",
    steps: [
      {
        subject: "{{firstName}}, your corporate files are costing you time",
        delayDays: 0,
        channel: "email" as const,
        body: `Hi {{firstName}},

I built an AI assistant for Ontario corporate lawyers. Upload a shareholders' agreement, and Atticus extracts every obligation, deadline, and key term in 30 seconds.

No more reading 80-page agreements cover to cover to find the drag-along clause.

It also tracks annual filing deadlines, corporate resolutions, and minute book updates across all your corporate clients.

Would 10 minutes be worth it to see how it works?

— Marc
Founder, Atticus`,
      },
      {
        subject: "Re: {{firstName}}, your corporate files are costing you time",
        delayDays: 3,
        channel: "email" as const,
        body: `{{firstName}},

Quick follow-up. Here's the problem I keep hearing from corporate lawyers:

"I have 150 corporate clients. I can't remember which ones need annual resolutions, which SHA's have shotgun clauses, or which articles have been amended."

Atticus remembers all of it. Upload your documents once, ask anything in plain English.

"What are the pre-emptive rights in the Acme shareholders agreement?"
"Which clients have fiscal year-ends in March?"

Reply "demo" and I'll walk you through it.

— Marc`,
      },
      {
        subject: "LinkedIn connection — {{firstName}}",
        delayDays: 5,
        channel: "linkedin" as const,
        body: `Connect with {{firstName}} on LinkedIn. Mention Atticus and the corporate document analysis feature. Keep it casual and reference the emails sent.`,
      },
      {
        subject: "How corporate lawyers save 10 hours/week",
        delayDays: 7,
        channel: "email" as const,
        body: `{{firstName}},

Ontario corporate lawyers using Atticus report saving 8-12 hours per week on:

• Document review and extraction (AI reads the agreement for you)
• Deadline tracking (annual filings, resolutions, renewals)
• Client intake (AI-powered form → draft matter summary)
• Trust accounting (Form 9A reconciliation automated)

$149/month. One flat fee. Unlimited matters and documents.

Worth a try?

— Marc`,
      },
      {
        subject: "Quick call — {{firstName}}",
        delayDays: 10,
        channel: "call" as const,
        body: `Call {{firstName}} to follow up on the outreach sequence. Reference the emails and LinkedIn connection. Ask if they have 10 minutes to see a demo of Atticus for corporate document management.`,
      },
      {
        subject: "Signing off, {{firstName}}",
        delayDays: 14,
        channel: "email" as const,
        body: `{{firstName}},

Last email from me. If you ever want an AI assistant that reads your corporate documents, tracks every deadline, and drafts from your notes — Atticus is ready.

Reply whenever the timing is right.

— Marc`,
      },
    ],
  },
  civil_litigation: {
    name: "Civil Litigation Cold Outreach",
    steps: [
      {
        subject: "{{firstName}}, are you tracking limitation periods manually?",
        delayDays: 0,
        channel: "email" as const,
        body: `Hi {{firstName}},

I built an AI assistant for Ontario litigators. It watches every limitation period under the Limitations Act, 2002 — including discoverability arguments — and alerts you before they expire.

One missed limitation period = one malpractice claim. Atticus makes sure it never happens.

It also tracks discovery timelines, motion deadlines, and pre-trial dates across all your matters.

10 minutes to see if it fits your practice?

— Marc
Founder, Atticus`,
      },
      {
        subject: "Re: {{firstName}}, are you tracking limitation periods manually?",
        delayDays: 3,
        channel: "email" as const,
        body: `{{firstName}},

Following up — here's what Atticus does for litigators:

• Limitation period tracking with automatic alerts (2-year, 15-year, special)
• Motion and discovery deadline management
• AI document analysis (upload a Statement of Claim, get key facts extracted)
• Morning briefing: every urgent deadline, every matter

One litigator said: "It's like having a junior associate who only does deadline tracking and never makes mistakes."

Reply "show me" and I'll send a quick demo.

— Marc`,
      },
      {
        subject: "LinkedIn connection — {{firstName}}",
        delayDays: 5,
        channel: "linkedin" as const,
        body: `Connect with {{firstName}} on LinkedIn. Mention Atticus and the limitation period tracking feature. Keep it casual and reference the emails sent.`,
      },
      {
        subject: "The $340K limitation period nobody caught",
        delayDays: 7,
        channel: "email" as const,
        body: `{{firstName}},

True story: a solo litigator uploaded her case files to Atticus. It flagged a limitation period expiring in 9 days that she'd missed in her calendar.

The claim was worth $340K to her client.

Atticus checks every document, every date, every deadline — automatically. Not once a quarter. Every single day.

$149/month. 30-day money-back guarantee.

— Marc`,
      },
      {
        subject: "Quick call — {{firstName}}",
        delayDays: 10,
        channel: "call" as const,
        body: `Call {{firstName}} to follow up on the outreach sequence. Reference the emails and LinkedIn connection. Ask if they have 10 minutes to see a demo of Atticus for litigation deadline management.`,
      },
      {
        subject: "Last note, {{firstName}}",
        delayDays: 14,
        channel: "email" as const,
        body: `{{firstName}},

I'll stop here. If you ever need an AI assistant that tracks limitation periods, manages your litigation deadlines, and reads your documents — just reply.

No more emails after this. Good luck with your matters.

— Marc`,
      },
    ],
  },
};

export const outreachRouter = createTRPCRouter({
  // ── Campaigns CRUD ──────────────────────────────────────────

  listCampaigns: protectedProcedure.query(async ({ ctx }) => {
    return ctx.db
      .select()
      .from(campaigns)
      .where(eq(campaigns.userId, ctx.userId))
      .orderBy(desc(campaigns.createdAt));
  }),

  getCampaign: protectedProcedure
    .input(z.object({ id: z.string().uuid() }))
    .query(async ({ ctx, input }) => {
      const [campaign] = await ctx.db
        .select()
        .from(campaigns)
        .where(
          and(eq(campaigns.id, input.id), eq(campaigns.userId, ctx.userId))
        )
        .limit(1);
      if (!campaign) throw new TRPCError({ code: "NOT_FOUND", message: "Campaign not found" });

      const steps = await ctx.db
        .select()
        .from(campaignSteps)
        .where(eq(campaignSteps.campaignId, input.id))
        .orderBy(campaignSteps.stepNumber);

      const sends = await ctx.db
        .select()
        .from(campaignSends)
        .where(eq(campaignSends.campaignId, input.id))
        .orderBy(desc(campaignSends.createdAt));

      return { ...campaign, steps, sends };
    }),

  createCampaign: protectedProcedure
    .input(
      z.object({
        name: z.string().min(1),
        practiceArea: z.string().optional(),
        templateKey: z.string().optional(), // key from EMAIL_SEQUENCES
      })
    )
    .mutation(async ({ ctx, input }) => {
      const [campaign] = await ctx.db
        .insert(campaigns)
        .values({
          userId: ctx.userId,
          name: input.name,
          practiceArea: input.practiceArea,
        })
        .returning();

      // If template selected, populate steps in a single bulk insert
      if (input.templateKey && EMAIL_SEQUENCES[input.templateKey]) {
        const seq = EMAIL_SEQUENCES[input.templateKey]!;
        await ctx.db.insert(campaignSteps).values(
          seq.steps.map((step, i) => ({
            campaignId: campaign!.id,
            stepNumber: i + 1,
            channel: step.channel,
            subject: step.subject,
            body: step.body,
            delayDays: step.delayDays,
          }))
        );
      }

      return campaign;
    }),

  updateCampaign: protectedProcedure
    .input(
      z.object({
        id: z.string().uuid(),
        name: z.string().min(1).optional(),
        status: z
          .enum(["draft", "active", "paused", "completed"])
          .optional(),
        practiceArea: z.string().nullable().optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { id, ...rest } = input;
      const [updated] = await ctx.db
        .update(campaigns)
        .set({ ...rest, updatedAt: new Date() })
        .where(
          and(eq(campaigns.id, id), eq(campaigns.userId, ctx.userId))
        )
        .returning();
      if (!updated) throw new TRPCError({ code: "NOT_FOUND", message: "Campaign not found" });
      return updated;
    }),

  deleteCampaign: protectedProcedure
    .input(z.object({ id: z.string().uuid() }))
    .mutation(async ({ ctx, input }) => {
      await ctx.db
        .delete(campaigns)
        .where(
          and(eq(campaigns.id, input.id), eq(campaigns.userId, ctx.userId))
        );
    }),

  // ── Steps CRUD ──────────────────────────────────────────────

  upsertStep: protectedProcedure
    .input(
      z.object({
        id: z.string().uuid().optional(),
        campaignId: z.string().uuid(),
        stepNumber: z.number().int().min(1),
        channel: z.enum(["email", "linkedin", "call"]).default("email"),
        subject: z.string().min(1),
        body: z.string().min(1),
        delayDays: z.number().int().min(0),
      })
    )
    .mutation(async ({ ctx, input }) => {
      // Verify campaign ownership
      const [campaign] = await ctx.db
        .select()
        .from(campaigns)
        .where(
          and(
            eq(campaigns.id, input.campaignId),
            eq(campaigns.userId, ctx.userId)
          )
        )
        .limit(1);
      if (!campaign) throw new TRPCError({ code: "NOT_FOUND", message: "Campaign not found" });

      if (input.id) {
        // Include campaignId in the WHERE so a caller cannot update a step
        // belonging to a different campaign by supplying a foreign step id.
        const [updated] = await ctx.db
          .update(campaignSteps)
          .set({
            subject: input.subject,
            body: input.body,
            delayDays: input.delayDays,
            stepNumber: input.stepNumber,
            channel: input.channel,
          })
          .where(and(eq(campaignSteps.id, input.id), eq(campaignSteps.campaignId, input.campaignId)))
          .returning();
        return updated;
      }

      const [step] = await ctx.db
        .insert(campaignSteps)
        .values({
          campaignId: input.campaignId,
          stepNumber: input.stepNumber,
          channel: input.channel,
          subject: input.subject,
          body: input.body,
          delayDays: input.delayDays,
        })
        .returning();
      return step;
    }),

  deleteStep: protectedProcedure
    .input(z.object({ id: z.string().uuid() }))
    .mutation(async ({ ctx, input }) => {
      // Verify ownership through campaign
      const [step] = await ctx.db
        .select({ stepId: campaignSteps.id })
        .from(campaignSteps)
        .innerJoin(campaigns, eq(campaignSteps.campaignId, campaigns.id))
        .where(and(eq(campaignSteps.id, input.id), eq(campaigns.userId, ctx.userId)))
        .limit(1);
      if (!step) throw new TRPCError({ code: "NOT_FOUND", message: "Step not found" });
      await ctx.db.delete(campaignSteps).where(eq(campaignSteps.id, input.id));
    }),

  // ── Sending ─────────────────────────────────────────────────

  getTemplates: protectedProcedure.query(() => {
    return Object.entries(EMAIL_SEQUENCES).map(([key, val]) => ({
      key,
      name: val.name,
      stepCount: val.steps.length,
    }));
  }),

  /** Add prospects to a campaign and queue step 1 sends */
  addProspectsToCampaign: protectedProcedure
    .input(
      z.object({
        campaignId: z.string().uuid(),
        prospectIds: z.array(z.string().uuid()).min(1).max(500),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const [campaign] = await ctx.db
        .select()
        .from(campaigns)
        .where(
          and(
            eq(campaigns.id, input.campaignId),
            eq(campaigns.userId, ctx.userId)
          )
        )
        .limit(1);
      if (!campaign) throw new TRPCError({ code: "NOT_FOUND", message: "Campaign not found" });

      // Get step 1
      const [step1] = await ctx.db
        .select()
        .from(campaignSteps)
        .where(
          and(
            eq(campaignSteps.campaignId, input.campaignId),
            eq(campaignSteps.stepNumber, 1)
          )
        )
        .limit(1);
      if (!step1) throw new TRPCError({ code: "BAD_REQUEST", message: "Campaign has no steps" });

      // Get unsubscribes
      const unsubs = await ctx.db
        .select({ email: emailUnsubscribes.email })
        .from(emailUnsubscribes);
      const unsubEmails = new Set(unsubs.map((u) => u.email.toLowerCase()));

      // Get already-added prospect IDs for this campaign
      const existing = await ctx.db
        .select({ prospectId: campaignSends.prospectId })
        .from(campaignSends)
        .where(eq(campaignSends.campaignId, input.campaignId));
      const existingIds = new Set(existing.map((e) => e.prospectId));

      // Check for prospects already in any active campaign
      const activeCampaignIds = await ctx.db
        .select({ id: campaigns.id })
        .from(campaigns)
        .where(
          and(
            eq(campaigns.userId, ctx.userId),
            eq(campaigns.status, "active")
          )
        );
      const activeCampaignIdSet = new Set(activeCampaignIds.map((c) => c.id));

      const existingActiveSends = await ctx.db
        .select({ prospectId: campaignSends.prospectId, campaignId: campaignSends.campaignId })
        .from(campaignSends)
        .where(
          and(
            inArray(campaignSends.prospectId, input.prospectIds),
            inArray(campaignSends.campaignId, activeCampaignIds.map((c) => c.id))
          )
        );
      const prospectsInActiveCampaign = new Set(
        existingActiveSends
          .filter((s) => activeCampaignIdSet.has(s.campaignId) && s.campaignId !== input.campaignId)
          .map((s) => s.prospectId)
      );

      // Get prospect details
      const prospectList = await ctx.db
        .select()
        .from(prospects)
        .where(
          and(
            eq(prospects.userId, ctx.userId),
            inArray(prospects.id, input.prospectIds)
          )
        );

      let added = 0;
      for (const prospect of prospectList) {
        if (!prospect.email) continue;
        if (unsubEmails.has(prospect.email.toLowerCase())) continue;
        if (existingIds.has(prospect.id)) continue;
        if (prospectsInActiveCampaign.has(prospect.id)) continue;
        if (!isConsentValid(prospect.firstContactedAt)) continue;

        const firstName =
          prospect.name.split(" ")[0] ?? prospect.name;
        const vars = {
          firstName,
          name: prospect.name,
          firmName: prospect.company ?? "your firm",
          practiceArea: prospect.practiceArea ?? "your practice area",
        };

        await ctx.db.insert(campaignSends).values({
          campaignId: input.campaignId,
          stepId: step1.id,
          prospectId: prospect.id,
          channel: step1.channel,
          subject: personalize(step1.subject, vars),
          body: personalize(step1.body, vars),
        });

        // Set firstContactedAt if not already set
        if (!prospect.firstContactedAt) {
          await ctx.db
            .update(prospects)
            .set({ firstContactedAt: new Date() })
            .where(eq(prospects.id, prospect.id));
        }

        added++;
      }

      return { added, skipped: input.prospectIds.length - added };
    }),

  /** Send all pending emails for a campaign (rate-limited batch) */
  sendBatch: protectedProcedure
    .input(
      z.object({
        campaignId: z.string().uuid(),
        limit: z.number().int().min(1).max(100).default(50),
      })
    )
    .mutation(async ({ ctx, input }) => {
      // Verify ownership
      const [campaign] = await ctx.db
        .select()
        .from(campaigns)
        .where(
          and(
            eq(campaigns.id, input.campaignId),
            eq(campaigns.userId, ctx.userId)
          )
        )
        .limit(1);
      if (!campaign) throw new TRPCError({ code: "NOT_FOUND", message: "Campaign not found" });

      // Get pending email sends only
      const pending = await ctx.db
        .select({
          send: campaignSends,
          prospectEmail: prospects.email,
          prospectName: prospects.name,
        })
        .from(campaignSends)
        .innerJoin(prospects, eq(campaignSends.prospectId, prospects.id))
        .where(
          and(
            eq(campaignSends.campaignId, input.campaignId),
            eq(campaignSends.status, "pending"),
            eq(campaignSends.channel, "email")
          )
        )
        .limit(input.limit);

      let sent = 0;
      let errors = 0;

      for (const row of pending) {
        if (!row.prospectEmail) continue;

        try {
          const html = buildOutreachHtml(
            row.send.body,
            row.send.id,
            row.prospectEmail
          );

          const result = await resend.emails.send({
            from: OUTREACH_FROM_EMAIL,
            to: row.prospectEmail,
            subject: row.send.subject,
            html,
            replyTo: `reply+${row.send.id}@outreach.getatticus.ca`,
          });

          await ctx.db
            .update(campaignSends)
            .set({
              status: "sent",
              sentAt: new Date(),
              resendId: result.data?.id ?? null,
            })
            .where(eq(campaignSends.id, row.send.id));

          sent++;
        } catch {
          errors++;
          // Don't change status — leave as "pending" for retry
          // "bounced" is reserved for Resend's email.bounced webhook event
        }
      }

      // Update campaign stats
      await ctx.db
        .update(campaigns)
        .set({
          totalSent: sql`${campaigns.totalSent} + ${sent}`,
          updatedAt: new Date(),
        })
        .where(eq(campaigns.id, input.campaignId));

      return { sent, errors, remaining: pending.length - sent - errors };
    }),

  /** Queue next step for prospects who received the previous step */
  advanceStep: protectedProcedure
    .input(z.object({ campaignId: z.string().uuid() }))
    .mutation(async ({ ctx, input }) => {
      const [campaign] = await ctx.db
        .select()
        .from(campaigns)
        .where(
          and(
            eq(campaigns.id, input.campaignId),
            eq(campaigns.userId, ctx.userId)
          )
        )
        .limit(1);
      if (!campaign) throw new TRPCError({ code: "NOT_FOUND", message: "Campaign not found" });

      const steps = await ctx.db
        .select()
        .from(campaignSteps)
        .where(eq(campaignSteps.campaignId, input.campaignId))
        .orderBy(campaignSteps.stepNumber);

      if (steps.length < 2) return { queued: 0 };

      // Find the latest sent step for each prospect
      const allSends = await ctx.db
        .select()
        .from(campaignSends)
        .where(eq(campaignSends.campaignId, input.campaignId));

      // Group by prospect
      type SendRow = (typeof allSends)[number];
      const byProspect: Record<string, SendRow[]> = {};
      for (const s of allSends) {
        const arr = byProspect[s.prospectId] ?? [];
        arr.push(s);
        byProspect[s.prospectId] = arr;
      }

      // Get unsubscribes
      const unsubs = await ctx.db
        .select({ email: emailUnsubscribes.email })
        .from(emailUnsubscribes);
      const unsubEmails = new Set(unsubs.map((u) => u.email.toLowerCase()));

      let queued = 0;
      const now = new Date();

      const prospectIds = Object.keys(byProspect);
      for (const prospectId of prospectIds) {
        const sends = byProspect[prospectId]!;

        // Skip prospects who have replied to any send (sequence pause)
        const hasReplied = sends.some((s: SendRow) => s.status === "replied");
        if (hasReplied) continue;

        // Find highest step number that was completed (sent for email, completed for linkedin/call)
        const completedSteps = sends
          .filter((s: SendRow) => {
            if (s.status === "pending" || s.status === "unsubscribed") return false;
            const step = steps.find((st) => st.id === s.stepId);
            if (!step) return false;
            // For email: sent/opened/clicked/replied all count as "done"
            if (step.channel === "email") return s.status !== "bounced";
            // For linkedin/call: only "completed" counts
            return s.status === "completed";
          })
          .map((s: SendRow) => {
            const step = steps.find((st) => st.id === s.stepId);
            return { send: s, stepNumber: step?.stepNumber ?? 0 };
          });

        if (completedSteps.length === 0) continue;

        const maxCompleted = Math.max(...completedSteps.map((s) => s.stepNumber));
        const nextStepNum = maxCompleted + 1;
        const nextStep = steps.find((s) => s.stepNumber === nextStepNum);
        if (!nextStep) continue;

        // Check if already queued/sent for this step
        const alreadyHasNext = sends.some((s: SendRow) => s.stepId === nextStep.id);
        if (alreadyHasNext) continue;

        // Check delay
        const lastCompleted = completedSteps.find((s) => s.stepNumber === maxCompleted);
        if (!lastCompleted?.send.sentAt) continue;
        const daysSince =
          (now.getTime() - lastCompleted.send.sentAt.getTime()) /
          (1000 * 60 * 60 * 24);
        if (daysSince < nextStep.delayDays) continue;

        // Get prospect for personalization
        const [prospect] = await ctx.db
          .select()
          .from(prospects)
          .where(eq(prospects.id, prospectId))
          .limit(1);
        if (!prospect?.email) continue;
        if (unsubEmails.has(prospect.email.toLowerCase())) continue;

        const firstName =
          prospect.name.split(" ")[0] ?? prospect.name;
        const vars = {
          firstName,
          name: prospect.name,
          firmName: prospect.company ?? "your firm",
          practiceArea: prospect.practiceArea ?? "your practice area",
        };

        await ctx.db.insert(campaignSends).values({
          campaignId: input.campaignId,
          stepId: nextStep.id,
          prospectId,
          channel: nextStep.channel,
          subject: personalize(nextStep.subject, vars),
          body: personalize(nextStep.body, vars),
        });
        queued++;
      }

      return { queued };
    }),

  // ── CSV Import ──────────────────────────────────────────────

  importProspects: protectedProcedure
    .input(
      z.object({
        rows: z.array(
          z.object({
            name: z.string().min(1),
            email: z.string().email(),
            phone: z.string().optional(),
            company: z.string().optional(),
            practiceArea: z.string().optional(),
            city: z.string().optional(),
          })
        ),
      })
    )
    .mutation(async ({ ctx, input }) => {
      // Get existing prospect emails to deduplicate
      const existing = await ctx.db
        .select({ email: prospects.email })
        .from(prospects)
        .where(eq(prospects.userId, ctx.userId));
      const existingEmails = new Set(
        existing.map((e) => e.email?.toLowerCase()).filter(Boolean)
      );

      // Get unsubscribes
      const unsubs = await ctx.db
        .select({ email: emailUnsubscribes.email })
        .from(emailUnsubscribes);
      const unsubEmails = new Set(unsubs.map((u) => u.email.toLowerCase()));

      let imported = 0;
      let skipped = 0;

      for (const row of input.rows) {
        const email = row.email.toLowerCase();
        if (existingEmails.has(email) || unsubEmails.has(email)) {
          skipped++;
          continue;
        }

        await ctx.db.insert(prospects).values({
          userId: ctx.userId,
          name: row.name,
          email: row.email,
          phone: row.phone,
          company: row.company,
          practiceArea: row.practiceArea,
          city: row.city,
          source: "lso_directory",
        });
        existingEmails.add(email);
        imported++;
      }

      return { imported, skipped };
    }),

  // ── Stats ───────────────────────────────────────────────────

  campaignStats: protectedProcedure
    .input(z.object({ campaignId: z.string().uuid() }))
    .query(async ({ ctx, input }) => {
      const sends = await ctx.db
        .select({ status: campaignSends.status })
        .from(campaignSends)
        .where(eq(campaignSends.campaignId, input.campaignId));

      const stats = {
        total: sends.length,
        pending: 0,
        sent: 0,
        opened: 0,
        clicked: 0,
        replied: 0,
        bounced: 0,
        unsubscribed: 0,
        completed: 0,
      };

      for (const s of sends) {
        if (s.status in stats) {
          stats[s.status as keyof typeof stats]++;
        }
      }

      return {
        ...stats,
        openRate:
          stats.sent > 0
            ? Math.round((stats.opened / stats.sent) * 100)
            : 0,
        clickRate:
          stats.sent > 0
            ? Math.round((stats.clicked / stats.sent) * 100)
            : 0,
        replyRate:
          stats.sent > 0
            ? Math.round((stats.replied / stats.sent) * 100)
            : 0,
      };
    }),

  // ── Unsubscribe management ──────────────────────────────────

  listUnsubscribes: protectedProcedure.query(async ({ ctx }) => {
    return ctx.db
      .select()
      .from(emailUnsubscribes)
      .orderBy(desc(emailUnsubscribes.createdAt));
  }),

  // ── Multi-channel action items ──────────────────────────────

  markActionDone: protectedProcedure
    .input(z.object({ sendId: z.string().uuid() }))
    .mutation(async ({ ctx, input }) => {
      const [send] = await ctx.db
        .select({ send: campaignSends, campaign: campaigns })
        .from(campaignSends)
        .innerJoin(campaigns, eq(campaignSends.campaignId, campaigns.id))
        .where(and(eq(campaignSends.id, input.sendId), eq(campaigns.userId, ctx.userId)))
        .limit(1);
      if (!send) throw new TRPCError({ code: "NOT_FOUND", message: "Send not found" });
      const [updated] = await ctx.db
        .update(campaignSends)
        .set({ status: "completed", sentAt: new Date() })
        .where(eq(campaignSends.id, input.sendId))
        .returning();
      return updated;
    }),

  actionItems: protectedProcedure.query(async ({ ctx }) => {
    const items = await ctx.db
      .select({ send: campaignSends, prospect: prospects, campaign: campaigns, step: campaignSteps })
      .from(campaignSends)
      .innerJoin(prospects, eq(campaignSends.prospectId, prospects.id))
      .innerJoin(campaigns, eq(campaignSends.campaignId, campaigns.id))
      .innerJoin(campaignSteps, eq(campaignSends.stepId, campaignSteps.id))
      .where(and(
        eq(campaigns.userId, ctx.userId),
        eq(campaigns.status, "active"),
        eq(campaignSends.status, "pending"),
        inArray(campaignSends.channel, ["linkedin", "call"])
      ))
      .orderBy(campaignSends.createdAt);
    return items;
  }),
});
