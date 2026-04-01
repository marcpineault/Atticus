"use client";

import { useMemo } from "react";
import { SpreadsheetImporter, type ImportField } from "@/components/import/spreadsheet-importer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { trpc } from "@/lib/trpc/client";

const clientFields: ImportField[] = [
  { key: "name", label: "Client name", required: true, matchers: ["name", "client name", "full name", "contact name"] },
  { key: "email", label: "Email", matchers: ["email", "email address", "e mail"] },
  { key: "phone", label: "Phone", matchers: ["phone", "phone number", "mobile", "cell"] },
  { key: "company", label: "Company", matchers: ["company", "organization", "organisation", "business", "firm"] },
  { key: "notes", label: "Notes", matchers: ["notes", "comments", "details", "description"] },
];

const matterFields: ImportField[] = [
  { key: "clientName", label: "Client", required: true, matchers: ["client", "client name", "contact", "client full name"] },
  { key: "matterTitle", label: "Matter", required: true, matchers: ["matter", "matter title", "file", "matter name"] },
  { key: "matterStatus", label: "Status", matchers: ["status", "matter status", "file status"] },
  { key: "matterDescription", label: "Description", matchers: ["description", "matter description", "details"] },
  { key: "openDate", label: "Open date", matchers: ["open date", "opened", "start date", "created date"] },
];

const deadlineFields: ImportField[] = [
  { key: "clientName", label: "Client", required: true, matchers: ["client", "client name"] },
  { key: "matterTitle", label: "Matter", matchers: ["matter", "matter title", "file"] },
  { key: "type", label: "Type", required: true, matchers: ["type", "deadline type", "task type"] },
  { key: "description", label: "Description", required: true, matchers: ["description", "deadline", "task", "action item"] },
  { key: "dueDate", label: "Due date", matchers: ["due date", "deadline date", "date"] },
  { key: "context", label: "Notes", matchers: ["notes", "context", "details"] },
];

const timeFields: ImportField[] = [
  { key: "clientName", label: "Client", required: true, matchers: ["client", "client name"] },
  { key: "matterTitle", label: "Matter", matchers: ["matter", "matter title", "file"] },
  { key: "description", label: "Work description", required: true, matchers: ["description", "task", "work performed", "details"] },
  { key: "minutes", label: "Minutes", required: true, matchers: ["minutes", "duration", "time", "total minutes"] },
  { key: "entryDate", label: "Entry date", matchers: ["date", "entry date", "work date"] },
];

const invoiceFields: ImportField[] = [
  { key: "clientName", label: "Client", required: true, matchers: ["client", "client name"] },
  { key: "matterTitle", label: "Matter", matchers: ["matter", "matter title", "file"] },
  { key: "invoiceNumber", label: "Invoice number", required: true, matchers: ["invoice number", "invoice #", "invoice", "number"] },
  { key: "amount", label: "Amount", required: true, matchers: ["amount", "balance", "total", "invoice amount"] },
  { key: "status", label: "Status", matchers: ["status", "invoice status"] },
  { key: "issueDate", label: "Issue date", matchers: ["issue date", "invoice date", "date issued"] },
  { key: "dueDate", label: "Due date", matchers: ["due date", "payment due"] },
  { key: "notes", label: "Notes", matchers: ["notes", "memo", "description"] },
];

function parseInteger(value: string) {
  const normalized = value.replace(/[^0-9.-]/g, "");
  const parsed = Number.parseInt(normalized, 10);
  return Number.isFinite(parsed) ? parsed : null;
}

function parseNumber(value: string) {
  const normalized = value.replace(/[^0-9.-]/g, "");
  const parsed = Number.parseFloat(normalized);
  return Number.isFinite(parsed) ? parsed : null;
}

function normalizeStatus(value: string) {
  const normalized = value.trim().toLowerCase().replace(/\s+/g, "_");
  if (normalized === "open") return "active";
  if (normalized === "in_progress") return "active";
  if (normalized === "todo") return "pending";
  if (normalized === "outstanding") return "overdue";
  return normalized;
}

export function PracticeImports() {
  const utils = trpc.useUtils();
  const clientsImport = trpc.clients.bulkCreate.useMutation({
    onSuccess: async () => {
      await utils.clients.list.invalidate();
      await utils.clients.listWithStats.invalidate();
    },
  });
  const mattersImport = trpc.imports.importMatters.useMutation({
    onSuccess: async () => {
      await utils.clients.list.invalidate();
      await utils.clients.listWithStats.invalidate();
      await utils.matters.list.invalidate();
      await utils.matters.listWithStats.invalidate();
    },
  });
  const deadlinesImport = trpc.imports.importDeadlines.useMutation({
    onSuccess: async () => {
      await utils.documents.listDeadlines.invalidate();
      await utils.today.getBriefing.invalidate();
    },
  });
  const timeImport = trpc.imports.importTimeEntries.useMutation({
    onSuccess: async () => {
      await utils.timeEntries.list.invalidate();
      await utils.clients.listWithStats.invalidate();
      await utils.matters.listWithStats.invalidate();
    },
  });
  const invoiceImport = trpc.imports.importInvoices.useMutation({
    onSuccess: async () => {
      await utils.invoices.list.invalidate();
    },
  });

  const topUseCases = useMemo(
    () => [
      "Clients and contacts",
      "Matter list",
      "Deadlines and tasks",
      "Unbilled time entries",
      "Outstanding invoices",
    ],
    []
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        {topUseCases.map((item) => (
          <Badge key={item} variant="secondary">{item}</Badge>
        ))}
      </div>

      <Tabs defaultValue="clients" className="space-y-4">
        <TabsList className="h-auto flex-wrap justify-start">
          <TabsTrigger value="clients">Clients</TabsTrigger>
          <TabsTrigger value="matters">Matters</TabsTrigger>
          <TabsTrigger value="deadlines">Deadlines</TabsTrigger>
          <TabsTrigger value="time">Time</TabsTrigger>
          <TabsTrigger value="invoices">Invoices</TabsTrigger>
        </TabsList>

        <TabsContent value="clients">
          <SpreadsheetImporter
            title="Client Import"
            description="Start with the contact spreadsheet most firms already have."
            fields={clientFields}
            helperText="Expected columns: client name, email, phone, company, notes."
            transformRows={(rows) => {
              const errors: string[] = [];
              const payload = rows.flatMap((row, index) => {
                if (!row.name.trim()) {
                  errors.push(`Row ${index + 1}: client name is required.`);
                  return [];
                }
                return [{
                  name: row.name.trim(),
                  email: row.email.trim() || undefined,
                  phone: row.phone.trim() || undefined,
                  company: row.company.trim() || undefined,
                  notes: row.notes.trim() || undefined,
                }];
              });
              return { payload, errors };
            }}
            onImport={(payload) => clientsImport.mutateAsync(payload)}
          />
        </TabsContent>

        <TabsContent value="matters">
          <SpreadsheetImporter
            title="Matter Import"
            description="One row per file or matter. Atticus will create any missing client first."
            fields={matterFields}
            helperText="Expected columns: client, matter title, status, description, open date."
            transformRows={(rows) => {
              const errors: string[] = [];
              const payload = rows.flatMap((row, index) => {
                if (!row.clientName.trim() || !row.matterTitle.trim()) {
                  errors.push(`Row ${index + 1}: client and matter title are required.`);
                  return [];
                }
                const normalizedStatus = normalizeStatus(row.matterStatus);
                return [{
                  clientName: row.clientName.trim(),
                  matterTitle: row.matterTitle.trim(),
                  matterDescription: row.matterDescription.trim() || undefined,
                  matterStatus: normalizedStatus === "active" || normalizedStatus === "closed" || normalizedStatus === "pending"
                    ? normalizedStatus
                    : undefined,
                  openDate: row.openDate.trim() || undefined,
                }];
              });
              return { payload, errors };
            }}
            onImport={(payload) => mattersImport.mutateAsync(payload)}
          />
        </TabsContent>

        <TabsContent value="deadlines">
          <SpreadsheetImporter
            title="Deadline Import"
            description="Bring over court dates, limitation dates, and internal to-dos."
            fields={deadlineFields}
            helperText="Expected columns: client, matter, type, description, due date, notes."
            transformRows={(rows) => {
              const errors: string[] = [];
              const payload = rows.flatMap((row, index) => {
                if (!row.clientName.trim() || !row.description.trim()) {
                  errors.push(`Row ${index + 1}: client and description are required.`);
                  return [];
                }
                const type = normalizeStatus(row.type);
                const resolvedType = type === "deadline" ? "deadline" : "action_item";
                return [{
                  clientName: row.clientName.trim(),
                  matterTitle: row.matterTitle.trim() || undefined,
                  type: resolvedType,
                  description: row.description.trim(),
                  dueDate: row.dueDate.trim() || undefined,
                  context: row.context.trim() || undefined,
                }];
              });
              return { payload, errors };
            }}
            onImport={(payload) => deadlinesImport.mutateAsync(payload)}
          />
        </TabsContent>

        <TabsContent value="time">
          <SpreadsheetImporter
            title="Time Entry Import"
            description="Useful when a lawyer has work-in-progress in Excel before switching systems."
            fields={timeFields}
            helperText="Expected columns: client, matter, work description, minutes, entry date."
            transformRows={(rows) => {
              const errors: string[] = [];
              const payload = rows.flatMap((row, index) => {
                if (!row.clientName.trim() || !row.description.trim()) {
                  errors.push(`Row ${index + 1}: client and description are required.`);
                  return [];
                }
                const minutes = parseInteger(row.minutes);
                if (!minutes || minutes <= 0) {
                  errors.push(`Row ${index + 1}: minutes must be a positive whole number.`);
                  return [];
                }
                return [{
                  clientName: row.clientName.trim(),
                  matterTitle: row.matterTitle.trim() || undefined,
                  description: row.description.trim(),
                  minutes,
                  entryDate: row.entryDate.trim() || undefined,
                }];
              });
              return { payload, errors };
            }}
            onImport={(payload) => timeImport.mutateAsync(payload)}
          />
        </TabsContent>

        <TabsContent value="invoices">
          <SpreadsheetImporter
            title="Invoice Import"
            description="Import outstanding A/R so billing visibility is accurate from day one."
            fields={invoiceFields}
            helperText="Expected columns: client, matter, invoice number, amount, status, issue date, due date."
            transformRows={(rows) => {
              const errors: string[] = [];
              const payload = rows.flatMap((row, index) => {
                if (!row.clientName.trim() || !row.invoiceNumber.trim()) {
                  errors.push(`Row ${index + 1}: client and invoice number are required.`);
                  return [];
                }
                const amount = parseNumber(row.amount);
                if (amount == null || amount < 0) {
                  errors.push(`Row ${index + 1}: amount must be a valid dollar value.`);
                  return [];
                }
                const status = normalizeStatus(row.status);
                return [{
                  clientName: row.clientName.trim(),
                  matterTitle: row.matterTitle.trim() || undefined,
                  invoiceNumber: row.invoiceNumber.trim(),
                  amount,
                  status: status === "draft" || status === "sent" || status === "paid" || status === "overdue"
                    ? status
                    : undefined,
                  issueDate: row.issueDate.trim() || undefined,
                  dueDate: row.dueDate.trim() || undefined,
                  notes: row.notes.trim() || undefined,
                }];
              });
              return { payload, errors };
            }}
            onImport={(payload) => invoiceImport.mutateAsync(payload)}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}
