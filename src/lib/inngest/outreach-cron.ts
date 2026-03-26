import { inngest } from "./client";
import { db } from "@/lib/db";
import { campaigns, campaignSteps, campaignSends, prospects, emailUnsubscribes } from "@/lib/db/schema";
import { eq, and, inArray, gte, sql } from "drizzle-orm";
import { resend } from "@/lib/email/client";
import { personalize, buildOutreachHtml, isConsentValid } from "@/lib/outreach/helpers";

const OUTREACH_FROM_EMAIL = process.env.OUTREACH_FROM_EMAIL ?? "Marc from Atticus <marc@outreach.getatticus.ca>";
const DAILY_EMAIL_CAP = 20;

export const outreachCron = inngest.createFunction(
  {
    id: "outreach-daily-send",
    retries: 3,
    triggers: [
      { cron: "0 13 * * 1-5" }, // 9am ET = 1pm UTC, weekdays only
    ],
  },
  async ({ step }) => {
    // ─── Step 1: Advance sequences ────────────────────────────────────────────
    const queued = await step.run("advance-sequences", async () => {
      // Get all active campaigns
      const activeCampaigns = await db
        .select({ id: campaigns.id })
        .from(campaigns)
        .where(eq(campaigns.status, "active"));

      if (activeCampaigns.length === 0) return { queued: 0 };

      const campaignIds = activeCampaigns.map((c) => c.id);

      // Get all steps for active campaigns, ordered by stepNumber
      const steps = await db
        .select()
        .from(campaignSteps)
        .where(inArray(campaignSteps.campaignId, campaignIds))
        .orderBy(campaignSteps.stepNumber);

      // Get all sends for active campaigns
      const sends = await db
        .select({
          id: campaignSends.id,
          campaignId: campaignSends.campaignId,
          stepId: campaignSends.stepId,
          prospectId: campaignSends.prospectId,
          status: campaignSends.status,
          sentAt: campaignSends.sentAt,
        })
        .from(campaignSends)
        .where(inArray(campaignSends.campaignId, campaignIds));

      // Get unsubscribed emails
      const unsubRows = await db.select({ email: emailUnsubscribes.email }).from(emailUnsubscribes);
      const unsubEmails = new Set(unsubRows.map((r) => r.email.toLowerCase()));

      // Group sends by campaignId -> prospectId
      type SendRow = typeof sends[number];
      const sendsByCampaignProspect = new Map<string, SendRow[]>();
      for (const send of sends) {
        const key = `${send.campaignId}:${send.prospectId}`;
        if (!sendsByCampaignProspect.has(key)) sendsByCampaignProspect.set(key, []);
        sendsByCampaignProspect.get(key)!.push(send);
      }

      // Group steps by campaignId
      const stepsByCampaign = new Map<string, typeof steps>();
      for (const step of steps) {
        if (!stepsByCampaign.has(step.campaignId)) stepsByCampaign.set(step.campaignId, []);
        stepsByCampaign.get(step.campaignId)!.push(step);
      }

      // Collect unique prospectIds to fetch prospect data
      const prospectIds = Array.from(new Set(sends.map((s) => s.prospectId)));
      const prospectRows =
        prospectIds.length > 0
          ? await db
              .select({
                id: prospects.id,
                name: prospects.name,
                email: prospects.email,
                company: prospects.company,
                practiceArea: prospects.practiceArea,
                city: prospects.city,
                firstContactedAt: prospects.firstContactedAt,
              })
              .from(prospects)
              .where(inArray(prospects.id, prospectIds))
          : [];

      const prospectMap = new Map(prospectRows.map((p) => [p.id, p]));

      const SKIP_STATUSES = new Set(["pending", "unsubscribed", "bounced"]);

      let queuedCount = 0;
      const now = new Date();

      for (const campaign of activeCampaigns) {
        const campaignStepList = stepsByCampaign.get(campaign.id) ?? [];
        if (campaignStepList.length === 0) continue;

        // Collect unique prospects for this campaign
        const prospectIdsInCampaign = Array.from(
          new Set(sends.filter((s) => s.campaignId === campaign.id).map((s) => s.prospectId))
        );

        for (const prospectId of prospectIdsInCampaign) {
          const key = `${campaign.id}:${prospectId}`;
          const prospectSends = sendsByCampaignProspect.get(key) ?? [];

          // Skip if any send has status "replied"
          if (prospectSends.some((s) => s.status === "replied")) continue;

          const prospect = prospectMap.get(prospectId);
          if (!prospect) continue;

          // Check unsubscribe list
          if (prospect.email && unsubEmails.has(prospect.email.toLowerCase())) continue;

          // Check CASL consent
          if (!isConsentValid(prospect.firstContactedAt)) continue;

          // For each send, check if it's "done" based on its channel
          const isDone = (send: SendRow, stepChannel: string) => {
            if (SKIP_STATUSES.has(send.status)) return false;
            if (stepChannel === "email") return ["sent", "opened", "clicked", "replied"].includes(send.status);
            return send.status === "completed"; // linkedin/call
          };

          // Find highest step number that's been done (channel-aware)
          const doneSends = prospectSends.filter((s) => {
            const st = campaignStepList.find((step) => step.id === s.stepId);
            return st ? isDone(s, st.channel) : false;
          });

          // Find step objects for done sends
          const doneStepIds = new Set(doneSends.map((s) => s.stepId));
          const doneSteps = campaignStepList.filter((st) => doneStepIds.has(st.id));

          const maxDoneStepNumber = doneSteps.length > 0
            ? Math.max(...doneSteps.map((st) => st.stepNumber))
            : -1;

          // Find next step by stepNumber
          const nextStep = campaignStepList
            .filter((st) => st.stepNumber > maxDoneStepNumber)
            .sort((a, b) => a.stepNumber - b.stepNumber)[0];

          if (!nextStep) continue; // Sequence complete for this prospect

          // Check if there's already a pending send for this next step
          const alreadyQueued = prospectSends.some((s) => s.stepId === nextStep.id);
          if (alreadyQueued) continue;

          // Check delay: daysSince last step's sentAt >= nextStep.delayDays
          if (maxDoneStepNumber >= 0) {
            const lastDoneSend = doneSends
              .filter((s) => {
                const st = campaignStepList.find((st) => st.id === s.stepId);
                return st && st.stepNumber === maxDoneStepNumber;
              })
              .sort((a, b) =>
                (b.sentAt?.getTime() ?? 0) - (a.sentAt?.getTime() ?? 0)
              )[0];

            if (lastDoneSend?.sentAt) {
              const daysSince =
                (now.getTime() - lastDoneSend.sentAt.getTime()) / (1000 * 60 * 60 * 24);
              if (daysSince < nextStep.delayDays) continue;
            } else {
              // Last step was done but no sentAt — skip to be safe
              continue;
            }
          } else {
            // First step: respect delayDays from campaign start (skip if > 0 delay and no prior sends)
            if (nextStep.delayDays > 0) continue;
          }

          // Personalize subject and body
          const vars: Record<string, string | undefined | null> = {
            firstName: prospect.name?.split(" ")[0] ?? prospect.name,
            name: prospect.name,
            firmName: prospect.company ?? "your firm",
            practiceArea: prospect.practiceArea ?? "your practice area",
            company: prospect.company,
            city: prospect.city ?? "Ontario",
          };

          const subject = personalize(nextStep.subject, vars);
          const body = personalize(nextStep.body, vars);

          // Create new campaign_sends record
          await db.insert(campaignSends).values({
            campaignId: campaign.id,
            stepId: nextStep.id,
            prospectId,
            channel: nextStep.channel,
            status: "pending",
            subject,
            body,
          });

          queuedCount++;
        }
      }

      return { queued: queuedCount };
    });

    // ─── Step 2: Send pending emails ──────────────────────────────────────────
    const sent = await step.run("send-pending-emails", async () => {
      const now = new Date();
      const todayMidnight = new Date(now);
      todayMidnight.setHours(0, 0, 0, 0);

      // Count emails already sent today (idempotency check)
      const todaySends = await db
        .select({ id: campaignSends.id })
        .from(campaignSends)
        .where(
          and(
            eq(campaignSends.channel, "email"),
            gte(campaignSends.sentAt, todayMidnight)
          )
        );

      const remaining = DAILY_EMAIL_CAP - todaySends.length;
      if (remaining <= 0) return { sent: 0, reason: "daily cap reached" };

      // Get active campaign IDs
      const activeCampaigns = await db
        .select({ id: campaigns.id })
        .from(campaigns)
        .where(eq(campaigns.status, "active"));

      if (activeCampaigns.length === 0) return { sent: 0 };
      const campaignIds = activeCampaigns.map((c) => c.id);

      // Get pending email-channel sends for active campaigns
      const pendingSends = await db
        .select({
          id: campaignSends.id,
          campaignId: campaignSends.campaignId,
          prospectId: campaignSends.prospectId,
          subject: campaignSends.subject,
          body: campaignSends.body,
        })
        .from(campaignSends)
        .where(
          and(
            eq(campaignSends.channel, "email"),
            eq(campaignSends.status, "pending"),
            inArray(campaignSends.campaignId, campaignIds)
          )
        )
        .limit(remaining);

      if (pendingSends.length === 0) return { sent: 0 };

      // Fetch prospect emails
      const prospectIds = Array.from(new Set(pendingSends.map((s) => s.prospectId)));
      const prospectRows = await db
        .select({ id: prospects.id, email: prospects.email })
        .from(prospects)
        .where(inArray(prospects.id, prospectIds));
      const prospectEmailMap = new Map(prospectRows.map((p) => [p.id, p.email]));

      let sentCount = 0;

      for (const send of pendingSends) {
        const prospectEmail = prospectEmailMap.get(send.prospectId);
        if (!prospectEmail) continue;

        const html = buildOutreachHtml(send.body, send.id, prospectEmail);

        try {
          const result = await resend.emails.send({
            from: OUTREACH_FROM_EMAIL,
            to: prospectEmail,
            replyTo: `reply+${send.id}@outreach.getatticus.ca`,
            subject: send.subject,
            html,
          });

          // Resend SDK returns { data, error } — a non-null error means the
          // API rejected the send without throwing. Treat this as a failure so
          // the record doesn't stay "pending" and get re-attempted endlessly,
          // but also doesn't get falsely marked "sent".
          if (result.error) {
            console.error(`[outreach] Resend API error for send ${send.id}:`, result.error);
            await db
              .update(campaignSends)
              .set({ status: "bounced" })
              .where(eq(campaignSends.id, send.id));
            continue;
          }

          const resendId = result.data?.id ?? null;
          const sentAt = new Date();

          await db
            .update(campaignSends)
            .set({ status: "sent", sentAt, resendId })
            .where(eq(campaignSends.id, send.id));

          await db
            .update(campaigns)
            .set({ totalSent: sql`${campaigns.totalSent} + 1` })
            .where(eq(campaigns.id, send.campaignId));

          sentCount++;
        } catch (err) {
          // Network-level or unexpected throw (timeout, rate limit, etc.).
          // Leave the row as "pending" so the next cron run retries — the
          // message was never accepted by Resend so there is no duplicate risk.
          // Only confirmed Resend rejections (result.error above) become
          // "bounced" permanently.
          console.error(`[outreach] Transient error sending campaign send ${send.id}:`, err);
        }
      }

      return { sent: sentCount };
    });

    return { queued: queued.queued, sent: sent.sent };
  }
);
