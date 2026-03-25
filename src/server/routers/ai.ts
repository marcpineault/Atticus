import { createTRPCRouter, protectedProcedure } from "@/server/trpc";
import { z } from "zod";
import { anthropic } from "@/lib/ai/anthropic";
import { retrieveChunks } from "@/lib/ai/retrieve";
import { clients, matters, users, documents } from "@/lib/db/schema";
import { inngest } from "@/lib/inngest/client";
import { eq, and } from "drizzle-orm";
import { resend, FROM_EMAIL } from "@/lib/email/client";

const DRAFT_TYPES = [
  "demand_letter",
  "settlement_proposal",
  "client_update",
  "follow_up_email",
  "legal_memo",
  "closing_statement",
  "engagement_letter",
  "statement_of_claim",
  "statement_of_defence",
  "affidavit",
  "notice_of_motion",
  "will_and_testament",
  "power_of_attorney",
  "general",
] as const;

export const aiRouter = createTRPCRouter({
  draft: protectedProcedure
    .input(z.object({
      instructions: z.string().min(10).max(2000),
      draftType: z.enum(DRAFT_TYPES).default("general"),
      clientId: z.string().uuid().optional(),
      matterId: z.string().uuid().optional(),
      tone: z.enum(["professional", "firm", "conciliatory"]).default("professional"),
    }))
    .mutation(async ({ ctx, input }) => {
      // Retrieve relevant context from the user's documents
      const chunks = await retrieveChunks(
        input.instructions,
        ctx.userId,
        input.clientId,
        10,
        input.matterId
      );

      let clientInfo = "";
      let matterInfo = "";

      if (input.clientId) {
        const [client] = await ctx.db.select({ name: clients.name, company: clients.company })
          .from(clients)
          .where(and(eq(clients.id, input.clientId), eq(clients.userId, ctx.userId)))
          .limit(1);
        if (client) clientInfo = `Client: ${client.name}${client.company ? ` (${client.company})` : ""}`;
      }

      if (input.matterId) {
        const [matter] = await ctx.db.select({ title: matters.title, description: matters.description })
          .from(matters)
          .where(and(eq(matters.id, input.matterId), eq(matters.userId, ctx.userId)))
          .limit(1);
        if (matter) matterInfo = `Matter: ${matter.title}${matter.description ? ` — ${matter.description}` : ""}`;
      }

      const relevantContext = chunks
        .filter(c => c.similarity > 0.3)
        .map(c => `[${c.documentTitle ?? "Document"}]\n${c.content}`)
        .join("\n\n---\n\n");

      const draftTypeLabels: Record<typeof DRAFT_TYPES[number], string> = {
        demand_letter: "formal demand letter",
        settlement_proposal: "settlement proposal",
        client_update: "client status update letter",
        follow_up_email: "follow-up email",
        legal_memo: "legal memorandum",
        closing_statement: "closing statement",
        engagement_letter: "engagement/retainer letter",
        statement_of_claim: "Statement of Claim (Ontario Rules of Civil Procedure Form 14A)",
        statement_of_defence: "Statement of Defence (Ontario Rules of Civil Procedure Form 18A)",
        affidavit: "affidavit (sworn statement for Ontario court proceedings)",
        notice_of_motion: "Notice of Motion (Ontario Rules of Civil Procedure Form 37A)",
        will_and_testament: "Last Will and Testament (Ontario — Succession Law Reform Act compliant)",
        power_of_attorney: "Power of Attorney (Ontario — Substitute Decisions Act, 1992 compliant)",
        general: "document",
      };

      const toneGuides = {
        professional: "formal, professional, and courteous",
        firm: "direct, assertive, and unambiguous — legally precise",
        conciliatory: "constructive, solution-focused, and measured",
      };

      const systemPrompt = `You are a legal drafting assistant for an Ontario law firm. Draft high-quality legal correspondence and documents.

Format guidelines:
- Use proper legal document formatting with clear sections
- Include appropriate headers and spacing
- Use placeholders like [DATE], [CLIENT NAME], [FIRM NAME] where specific information is not available
- Be ${toneGuides[input.tone]}
- Follow Ontario legal practice conventions

The lawyer will review and finalize the draft before sending.`;

      const userMessage = [
        clientInfo && `${clientInfo}`,
        matterInfo && `${matterInfo}`,
        relevantContext && `Relevant context from case files:\n\n${relevantContext}`,
        `\nDraft a ${draftTypeLabels[input.draftType]} with the following instructions:\n${input.instructions}`,
      ].filter(Boolean).join("\n\n");

      const message = await anthropic.messages.create({
        model: "claude-sonnet-4-6",
        max_tokens: 2000,
        system: systemPrompt,
        messages: [{ role: "user", content: userMessage }],
      });

      const content = message.content[0];
      if (!content || content.type !== "text") throw new Error("Unexpected response");

      return {
        draft: content.text,
        contextUsed: chunks.filter(c => c.similarity > 0.3).length,
        tokensUsed: message.usage.output_tokens,
      };
    }),

  answer: protectedProcedure
    .input(z.object({
      query: z.string().min(1).max(500),
      chunks: z.array(z.object({
        content: z.string(),
        documentTitle: z.string().nullable(),
        similarity: z.number(),
      })).max(10),
    }))
    .mutation(async ({ input }) => {
      const context = input.chunks
        .map(c => `[${c.documentTitle ?? "Document"}]\n${c.content}`)
        .join("\n\n---\n\n");

      const message = await anthropic.messages.create({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 400,
        system: "You are a legal practice assistant. Answer the lawyer's question concisely and directly based only on the provided document excerpts. If the answer is not clearly supported by the excerpts, say so. Be direct — no preamble.",
        messages: [{
          role: "user",
          content: `Question: ${input.query}\n\nDocument excerpts:\n\n${context}`,
        }],
      });

      const content = message.content[0];
      if (!content || content.type !== "text") throw new Error("Unexpected response");
      return { answer: content.text };
    }),

  sendEmail: protectedProcedure
    .input(z.object({
      clientId: z.string().uuid(),
      subject: z.string().min(1).max(200),
      body: z.string().min(1).max(10000),
    }))
    .mutation(async ({ ctx, input }) => {
      const [client] = await ctx.db
        .select({ name: clients.name, email: clients.email })
        .from(clients)
        .where(and(eq(clients.id, input.clientId), eq(clients.userId, ctx.userId)))
        .limit(1);

      if (!client) throw new Error("Client not found");
      if (!client.email) throw new Error("Client has no email address on file");

      const [user] = await ctx.db
        .select({ name: users.name, firmName: users.firmName, email: users.email })
        .from(users)
        .where(eq(users.id, ctx.userId))
        .limit(1);

      const senderName = user?.firmName ?? user?.name ?? "Your Lawyer";

      // Format the body as simple HTML paragraphs
      const htmlBody = input.body
        .split("\n\n")
        .map(p => `<p style="margin: 0 0 14px; font-size: 14px; color: #374151; line-height: 1.6;">${p.replace(/\n/g, "<br>")}</p>`)
        .join("");

      const html = `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#f5f5f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
<div style="max-width:600px;margin:24px auto;background:#fff;border-radius:8px;overflow:hidden;box-shadow:0 1px 4px rgba(0,0,0,0.08);">
  <div style="padding:32px 32px 24px;">
    ${htmlBody}
  </div>
  <div style="border-top:1px solid #f0f0f0;padding:16px 32px;background:#f9fafb;">
    <p style="margin:0;font-size:12px;color:#9ca3af;">Sent by ${senderName} via Atticus</p>
  </div>
</div>
</body>
</html>`;

      await resend.emails.send({
        from: FROM_EMAIL,
        to: client.email,
        subject: input.subject,
        html,
        text: input.body,
        replyTo: user?.email ?? undefined,
      });

      // Save sent email as a document so it's searchable and in the timeline
      const [savedDoc] = await ctx.db
        .insert(documents)
        .values({
          userId: ctx.userId,
          clientId: input.clientId,
          type: "email",
          title: input.subject,
          rawContent: input.body,
          summary: `Email sent to ${client.name}: ${input.subject}`,
          status: "completed",
          metadata: { sentByAtticus: true, to: client.email },
        })
        .returning({ id: documents.id });

      // Queue for embedding/entity extraction
      if (savedDoc) {
        await inngest.send({ name: "document/uploaded", data: { documentId: savedDoc.id, userId: ctx.userId } });
      }

      return { sent: true, to: client.email };
    }),

  generateStatusReport: protectedProcedure
    .input(z.object({
      matterId: z.string().uuid(),
    }))
    .mutation(async ({ ctx, input }) => {
      // Fetch matter details
      const [matter] = await ctx.db
        .select({
          id: matters.id,
          title: matters.title,
          description: matters.description,
          status: matters.status,
          clientId: matters.clientId,
        })
        .from(matters)
        .where(and(eq(matters.id, input.matterId), eq(matters.userId, ctx.userId)))
        .limit(1);

      if (!matter) throw new Error("Matter not found");

      const [client] = await ctx.db
        .select({ name: clients.name, email: clients.email })
        .from(clients)
        .where(eq(clients.id, matter.clientId))
        .limit(1);

      // Get relevant document chunks via RAG
      const query = `status update summary for ${matter.title}`;
      const chunks = await retrieveChunks(query, ctx.userId, matter.clientId, 8, input.matterId);

      const contextText = chunks
        .filter(c => c.similarity > 0.25)
        .map(c => `[${c.documentTitle ?? "Document"}]\n${c.content}`)
        .join("\n\n---\n\n");

      const systemPrompt = `You are a legal communications assistant for an Ontario law firm. Write a professional client status update letter.

Format: Clear paragraphs, no bullet points, warm but professional tone. Use placeholders like [DATE], [LAWYER NAME], [FIRM NAME] where you don't have the information.

The letter should:
1. Open with a brief summary of where the matter stands
2. Cover key recent developments or milestones
3. Note any upcoming deadlines or required client actions
4. Close with next steps and availability for questions

Keep it concise — 3-5 paragraphs. Write directly to the client, addressed to them by name.`;

      const userMessage = [
        `Matter: ${matter.title}`,
        matter.description ? `Description: ${matter.description}` : "",
        `Status: ${matter.status}`,
        client?.name ? `Client: ${client.name}` : "",
        contextText ? `\nRelevant case file excerpts:\n\n${contextText}` : "",
        "\nWrite a client status update letter for this matter.",
      ].filter(Boolean).join("\n");

      const message = await anthropic.messages.create({
        model: "claude-sonnet-4-6",
        max_tokens: 1200,
        system: systemPrompt,
        messages: [{ role: "user", content: userMessage }],
      });

      const content = message.content[0];
      if (!content || content.type !== "text") throw new Error("Unexpected response");

      return {
        report: content.text,
        clientEmail: client?.email ?? null,
        clientName: client?.name ?? null,
        matterId: input.matterId,
        clientId: matter.clientId,
      };
    }),

  requestDocument: protectedProcedure
    .input(z.object({
      matterId: z.string().uuid(),
      documentDescription: z.string().min(2).max(500),
      dueDate: z.string().optional(),
    }))
    .mutation(async ({ ctx, input }) => {
      const [matter] = await ctx.db
        .select({ id: matters.id, title: matters.title, clientId: matters.clientId, status: matters.status })
        .from(matters)
        .where(and(eq(matters.id, input.matterId), eq(matters.userId, ctx.userId)))
        .limit(1);

      if (!matter) throw new Error("Matter not found");

      const [client] = await ctx.db
        .select({ name: clients.name, email: clients.email })
        .from(clients)
        .where(and(eq(clients.id, matter.clientId), eq(clients.userId, ctx.userId)))
        .limit(1);

      if (!client) throw new Error("Client not found");
      if (!client.email) throw new Error("Client has no email address on file");

      const [user] = await ctx.db
        .select({ name: users.name, firmName: users.firmName, email: users.email })
        .from(users)
        .where(eq(users.id, ctx.userId))
        .limit(1);

      const senderName = user?.firmName ?? user?.name ?? "Your Lawyer";
      const firstName = client.name.split(" ")[0];
      const dueDateStr = input.dueDate
        ? ` Please send this by ${new Date(input.dueDate).toLocaleDateString("en-CA", { month: "long", day: "numeric", year: "numeric" })}.`
        : "";

      // AI-draft the request email
      const draftMsg = await anthropic.messages.create({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 400,
        system: `You are a professional legal assistant drafting a short document request email from a lawyer to their client.
Write in first person as the lawyer. Be polite, clear, and professional.
Do NOT use placeholders — write the actual email body text.
Format: 2-3 short paragraphs. No subject line, no greeting line (we add those separately). No sign-off (we add that separately).`,
        messages: [{
          role: "user",
          content: `Lawyer name/firm: ${senderName}
Client name: ${client.name}
Matter: ${matter.title}
Document needed: ${input.documentDescription}${input.dueDate ? `\nRequested by: ${input.dueDate}` : ""}

Write the body of a brief, professional email requesting this document.`,
        }],
      });

      const draftContent = draftMsg.content[0];
      if (!draftContent || draftContent.type !== "text") throw new Error("Unexpected AI response");

      const subject = `Document Request — ${matter.title}`;
      const bodyText = `Dear ${firstName},\n\n${draftContent.text}${dueDateStr}\n\nThank you,\n${senderName}`;

      // Build HTML version
      const htmlBody = bodyText
        .split("\n\n")
        .map(p => `<p style="margin:0 0 14px;font-size:14px;color:#374151;line-height:1.6;">${p.replace(/\n/g, "<br>")}</p>`)
        .join("");

      const html = `<!DOCTYPE html><html><head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#f5f5f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
<div style="max-width:600px;margin:24px auto;background:#fff;border-radius:8px;overflow:hidden;box-shadow:0 1px 4px rgba(0,0,0,0.08);">
  <div style="padding:32px 32px 24px;">${htmlBody}</div>
  <div style="border-top:1px solid #f0f0f0;padding:16px 32px;background:#f9fafb;">
    <p style="margin:0;font-size:12px;color:#9ca3af;">Sent by ${senderName} via Atticus</p>
  </div>
</div></body></html>`;

      await resend.emails.send({
        from: FROM_EMAIL,
        to: client.email,
        subject,
        html,
        text: bodyText,
        replyTo: user?.email ?? undefined,
      });

      // Save a record of this email and queue for embedding
      const [emailDoc] = await ctx.db.insert(documents).values({
        userId: ctx.userId,
        clientId: matter.clientId,
        matterId: matter.id,
        title: subject,
        type: "email",
        status: "completed",
        rawContent: bodyText,
        metadata: { sentByAtticus: true, requestedDocument: input.documentDescription },
      }).returning({ id: documents.id });

      if (emailDoc) {
        await inngest.send({ name: "document/uploaded", data: { documentId: emailDoc.id, userId: ctx.userId } });
      }

      return { success: true, sentTo: client.email, clientName: client.name };
    }),
});
