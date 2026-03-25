import {
  pgTable,
  uuid,
  text,
  integer,
  boolean,
  timestamp,
  jsonb,
  index,
  pgEnum,
  vector,
} from "drizzle-orm/pg-core";

// Enums
export const matterStatusEnum = pgEnum("matter_status", [
  "active",
  "closed",
  "pending",
]);

export const documentTypeEnum = pgEnum("document_type", [
  "email",
  "voice_note",
  "meeting",
  "document",
  "text_message",
  "calendar",
]);

export const documentStatusEnum = pgEnum("document_status", [
  "pending",
  "processing",
  "completed",
  "failed",
]);

export const entityTypeEnum = pgEnum("entity_type", [
  "person",
  "date",
  "amount",
  "action_item",
  "deadline",
  "case_reference",
]);

export const chatRoleEnum = pgEnum("chat_role", ["user", "assistant"]);

export const subscriptionStatusEnum = pgEnum("subscription_status", [
  "trialing",
  "active",
  "past_due",
  "canceled",
  "unpaid",
]);

// Tables
export const users = pgTable("users", {
  id: uuid("id").defaultRandom().primaryKey(),
  clerkId: text("clerk_id").unique().notNull(),
  email: text("email").notNull(),
  name: text("name"),
  firmName: text("firm_name"),
  hourlyRate: integer("hourly_rate").default(400),
  aiConsentAt: timestamp("ai_consent_at"),
  lastActiveAt: timestamp("last_active_at"),
  // Email intake
  intakeEmail: text("intake_email").unique(), // e.g. user-specific@intake.getatticus.ca
  // Email notification preferences
  emailDailyBriefing: boolean("email_daily_briefing").default(true).notNull(),
  emailDocumentReady: boolean("email_document_ready").default(true).notNull(),
  emailWeeklyDigest: boolean("email_weekly_digest").default(true).notNull(),
  // Stripe subscription fields
  stripeCustomerId: text("stripe_customer_id").unique(),
  stripeSubscriptionId: text("stripe_subscription_id").unique(),
  stripePriceId: text("stripe_price_id"),
  subscriptionStatus: subscriptionStatusEnum("subscription_status"),
  subscriptionCurrentPeriodEnd: timestamp("subscription_current_period_end"),
  trialEndsAt: timestamp("trial_ends_at"),
  monthlyRevenueGoal: integer("monthly_revenue_goal"), // target monthly revenue in dollars
  onboardingCompletedAt: timestamp("onboarding_completed_at"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const clients = pgTable(
  "clients",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    userId: uuid("user_id")
      .references(() => users.id)
      .notNull(),
    name: text("name").notNull(),
    email: text("email"),
    phone: text("phone"),
    company: text("company"),
    summary: text("summary"),
    notes: text("notes"), // private lawyer notes on this client
    totalBillableMinutes: integer("total_billable_minutes").default(0),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
  },
  (table) => [index("clients_user_id_idx").on(table.userId)]
);

export const matters = pgTable(
  "matters",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    clientId: uuid("client_id")
      .references(() => clients.id)
      .notNull(),
    userId: uuid("user_id")
      .references(() => users.id)
      .notNull(),
    title: text("title").notNull(),
    description: text("description"),
    summary: text("summary"),
    status: matterStatusEnum("status").default("active").notNull(),
    hourlyRate: integer("hourly_rate"), // overrides user default rate if set
    notes: text("notes"), // private lawyer notes on this matter
    portalToken: text("portal_token").unique(), // public share token for client portal
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
  },
  (table) => [
    index("matters_client_id_idx").on(table.clientId),
    index("matters_user_id_idx").on(table.userId),
  ]
);

export const documents = pgTable(
  "documents",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    userId: uuid("user_id")
      .references(() => users.id)
      .notNull(),
    clientId: uuid("client_id").references(() => clients.id),
    matterId: uuid("matter_id").references(() => matters.id),
    type: documentTypeEnum("type").notNull(),
    sourceId: text("source_id"),
    title: text("title"),
    rawContent: text("raw_content"),
    summary: text("summary"),
    metadata: jsonb("metadata"),
    billableMinutes: integer("billable_minutes"),
    status: documentStatusEnum("status").default("pending").notNull(),
    errorMessage: text("error_message"),
    r2Key: text("r2_key"),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
  },
  (table) => [
    index("documents_user_id_idx").on(table.userId),
    index("documents_client_id_idx").on(table.clientId),
  ]
);

export const documentChunks = pgTable(
  "document_chunks",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    documentId: uuid("document_id")
      .references(() => documents.id, { onDelete: "cascade" })
      .notNull(),
    userId: uuid("user_id")
      .references(() => users.id)
      .notNull(),
    clientId: uuid("client_id").references(() => clients.id),
    content: text("content").notNull(),
    embedding: vector("embedding", { dimensions: 1024 }),
    chunkIndex: integer("chunk_index").notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
  },
  (table) => [
    index("chunks_embedding_idx").using(
      "hnsw",
      table.embedding.op("vector_cosine_ops")
    ),
    index("chunks_user_id_idx").on(table.userId),
    index("chunks_document_id_idx").on(table.documentId),
  ]
);

export const entities = pgTable(
  "entities",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    documentId: uuid("document_id")
      .references(() => documents.id, { onDelete: "cascade" }),
    userId: uuid("user_id")
      .references(() => users.id)
      .notNull(),
    clientId: uuid("client_id")
      .references(() => clients.id, { onDelete: "cascade" }),
    matterId: uuid("matter_id")
      .references(() => matters.id, { onDelete: "cascade" }),
    type: entityTypeEnum("type").notNull(),
    value: text("value").notNull(),
    context: text("context"),
    dueDate: timestamp("due_date"),
    resolved: boolean("resolved").default(false),
    recurrenceType: text("recurrence_type"), // null | "weekly" | "monthly" | "yearly"
    createdAt: timestamp("created_at").defaultNow().notNull(),
  },
  (table) => [
    index("entities_document_id_idx").on(table.documentId),
    index("entities_user_id_idx").on(table.userId),
    index("entities_client_id_idx").on(table.clientId),
    index("entities_matter_id_idx").on(table.matterId),
  ]
);

export const timeEntries = pgTable(
  "time_entries",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    userId: uuid("user_id").references(() => users.id).notNull(),
    matterId: uuid("matter_id").references(() => matters.id),
    clientId: uuid("client_id").references(() => clients.id),
    description: text("description").notNull(),
    minutes: integer("minutes").notNull(),
    entryDate: timestamp("entry_date").defaultNow().notNull(),
    billedAt: timestamp("billed_at"), // set when included in an invoice
    createdAt: timestamp("created_at").defaultNow().notNull(),
  },
  (table) => [
    index("time_entries_user_id_idx").on(table.userId),
    index("time_entries_matter_id_idx").on(table.matterId),
  ]
);

export const draftTemplates = pgTable(
  "draft_templates",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    userId: uuid("user_id").references(() => users.id).notNull(),
    name: text("name").notNull(),
    draftType: text("draft_type").notNull().default("general"),
    tone: text("tone").notNull().default("professional"),
    instructions: text("instructions").notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
  },
  (table) => [index("draft_templates_user_id_idx").on(table.userId)]
);

export const invoiceStatusEnum = pgEnum("invoice_status", [
  "draft",
  "sent",
  "paid",
  "overdue",
]);

export const invoices = pgTable(
  "invoices",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    userId: uuid("user_id")
      .references(() => users.id)
      .notNull(),
    clientId: uuid("client_id")
      .references(() => clients.id)
      .notNull(),
    matterId: uuid("matter_id").references(() => matters.id),
    invoiceNumber: text("invoice_number").notNull(),
    status: invoiceStatusEnum("status").default("draft").notNull(),
    issueDate: timestamp("issue_date").defaultNow().notNull(),
    dueDate: timestamp("due_date"),
    lineItems: jsonb("line_items").notNull().$type<Array<{
      description: string;
      hours: number;
      rate: number;
      amount: number;
    }>>().default([]),
    totalAmount: integer("total_amount").default(0).notNull(), // in cents (subtotal + HST)
    hstRate: integer("hst_rate").default(0).notNull(),   // percentage, e.g., 13
    hstAmount: integer("hst_amount").default(0).notNull(), // in cents
    notes: text("notes"),
    sentAt: timestamp("sent_at"),
    paidAt: timestamp("paid_at"),
    createdAt: timestamp("created_at").defaultNow().notNull(),
  },
  (table) => [
    index("invoices_user_id_idx").on(table.userId),
    index("invoices_client_id_idx").on(table.clientId),
  ]
);

export const trustTransactionTypeEnum = pgEnum("trust_transaction_type", [
  "receipt",       // money received into trust
  "disbursement",  // money paid out of trust
  "transfer",      // transfer between matters
]);

export const trustTransactions = pgTable(
  "trust_transactions",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    userId: uuid("user_id").references(() => users.id).notNull(),
    clientId: uuid("client_id").references(() => clients.id).notNull(),
    matterId: uuid("matter_id").references(() => matters.id),
    type: trustTransactionTypeEnum("type").notNull(),
    amount: integer("amount").notNull(), // in cents, positive for receipts, negative for disbursements
    description: text("description").notNull(),
    transactionDate: timestamp("transaction_date").defaultNow().notNull(),
    referenceNumber: text("reference_number"), // cheque number, wire ref, etc.
    createdAt: timestamp("created_at").defaultNow().notNull(),
  },
  (table) => [
    index("trust_transactions_user_id_idx").on(table.userId),
    index("trust_transactions_client_id_idx").on(table.clientId),
  ]
);

export const prospectStageEnum = pgEnum("prospect_stage", [
  "lead",
  "consultation_booked",
  "consultation_done",
  "proposal_sent",
  "won",
  "lost",
]);

export const prospectSourceEnum = pgEnum("prospect_source", [
  "website", "referral", "social_media", "cold_call", "networking", "other", "lso_directory",
]);

export const prospects = pgTable(
  "prospects",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    userId: uuid("user_id")
      .references(() => users.id)
      .notNull(),
    name: text("name").notNull(),
    email: text("email"),
    phone: text("phone"),
    company: text("company"),
    practiceArea: text("practice_area"), // e.g. "family law", "real estate"
    source: prospectSourceEnum("source").default("other").notNull(),
    stage: prospectStageEnum("stage").default("lead").notNull(),
    estimatedValue: integer("estimated_value"), // potential retainer/matter value in dollars
    notes: text("notes"),
    consultationDate: timestamp("consultation_date"),
    consultationNotes: text("consultation_notes"),
    aiStrategy: text("ai_strategy"), // AI-generated win strategy
    lostReason: text("lost_reason"),
    convertedClientId: uuid("converted_client_id").references(() => clients.id),
    nextFollowUp: timestamp("next_follow_up"),
    city: text("city"),
    firstContactedAt: timestamp("first_contacted_at"),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
  },
  (table) => [
    index("prospects_user_id_idx").on(table.userId),
    index("prospects_stage_idx").on(table.stage),
  ]
);

export const campaignStatusEnum = pgEnum("campaign_status", [
  "draft", "active", "paused", "completed",
]);

export const stepChannelEnum = pgEnum("step_channel", [
  "email", "linkedin", "call",
]);

export const sendStatusEnum = pgEnum("send_status", [
  "pending", "sent", "opened", "clicked", "replied", "bounced", "unsubscribed", "completed",
]);

export const campaigns = pgTable(
  "campaigns",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    userId: uuid("user_id").references(() => users.id).notNull(),
    name: text("name").notNull(),
    status: campaignStatusEnum("status").default("draft").notNull(),
    practiceArea: text("practice_area"),
    totalSent: integer("total_sent").default(0).notNull(),
    totalOpened: integer("total_opened").default(0).notNull(),
    totalClicked: integer("total_clicked").default(0).notNull(),
    totalReplied: integer("total_replied").default(0).notNull(),
    totalUnsubscribed: integer("total_unsubscribed").default(0).notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
  },
  (table) => [
    index("campaigns_user_id_idx").on(table.userId),
  ]
);

export const campaignSteps = pgTable(
  "campaign_steps",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    campaignId: uuid("campaign_id").references(() => campaigns.id, { onDelete: "cascade" }).notNull(),
    stepNumber: integer("step_number").notNull(),
    channel: stepChannelEnum("channel").default("email").notNull(),
    subject: text("subject").notNull(),
    body: text("body").notNull(),
    delayDays: integer("delay_days").default(0).notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
  },
  (table) => [
    index("campaign_steps_campaign_id_idx").on(table.campaignId),
  ]
);

export const campaignSends = pgTable(
  "campaign_sends",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    campaignId: uuid("campaign_id").references(() => campaigns.id, { onDelete: "cascade" }).notNull(),
    stepId: uuid("step_id").references(() => campaignSteps.id, { onDelete: "cascade" }).notNull(),
    prospectId: uuid("prospect_id").references(() => prospects.id, { onDelete: "cascade" }).notNull(),
    channel: stepChannelEnum("channel").default("email").notNull(),
    status: sendStatusEnum("status").default("pending").notNull(),
    subject: text("subject").notNull(),
    body: text("body").notNull(),
    resendId: text("resend_id"),
    sentAt: timestamp("sent_at"),
    openedAt: timestamp("opened_at"),
    clickedAt: timestamp("clicked_at"),
    repliedAt: timestamp("replied_at"),
    createdAt: timestamp("created_at").defaultNow().notNull(),
  },
  (table) => [
    index("campaign_sends_campaign_id_idx").on(table.campaignId),
    index("campaign_sends_prospect_id_idx").on(table.prospectId),
    index("campaign_sends_status_idx").on(table.status),
    index("campaign_sends_channel_idx").on(table.channel),
  ]
);

export const emailUnsubscribes = pgTable("email_unsubscribes", {
  id: uuid("id").defaultRandom().primaryKey(),
  email: text("email").notNull().unique(),
  reason: text("reason"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const chatMessages = pgTable(
  "chat_messages",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    userId: uuid("user_id")
      .references(() => users.id)
      .notNull(),
    clientId: uuid("client_id").references(() => clients.id),
    matterId: uuid("matter_id").references(() => matters.id),
    role: chatRoleEnum("role").notNull(),
    content: text("content").notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
  },
  (table) => [index("chat_messages_user_id_idx").on(table.userId)]
);
