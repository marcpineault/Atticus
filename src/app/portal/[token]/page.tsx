import { db } from "@/lib/db";
import { matters, clients, documents, entities, invoices } from "@/lib/db/schema";
import { eq, and, desc, inArray } from "drizzle-orm";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, FileText, AlertTriangle, CheckCircle2, Circle, Receipt } from "lucide-react";
import { PortalUpload } from "@/components/portal/portal-upload";

interface PortalPageProps {
  params: Promise<{ token: string }>;
}

const statusVariants: Record<string, "default" | "secondary" | "outline"> = {
  active: "default",
  closed: "secondary",
  pending: "outline",
};

const documentTypeLabels: Record<string, string> = {
  email: "Email",
  voice_note: "Voice Note",
  meeting: "Meeting",
  document: "Document",
  text_message: "Text Message",
  calendar: "Calendar",
};

export default async function PortalPage({ params }: PortalPageProps) {
  const { token } = await params;

  const [matter] = await db
    .select({
      id: matters.id,
      title: matters.title,
      description: matters.description,
      summary: matters.summary,
      status: matters.status,
      createdAt: matters.createdAt,
      updatedAt: matters.updatedAt,
      clientId: matters.clientId,
    })
    .from(matters)
    .where(eq(matters.portalToken, token))
    .limit(1);

  if (!matter) notFound();

  const [client] = await db
    .select({ name: clients.name, company: clients.company })
    .from(clients)
    .where(eq(clients.id, matter.clientId))
    .limit(1);

  const recentDocs = await db
    .select({
      id: documents.id,
      title: documents.title,
      type: documents.type,
      summary: documents.summary,
      status: documents.status,
      createdAt: documents.createdAt,
    })
    .from(documents)
    .where(and(eq(documents.matterId, matter.id), eq(documents.status, "completed")))
    .orderBy(desc(documents.createdAt))
    .limit(10);

  const openDeadlines = await db
    .select({
      id: entities.id,
      value: entities.value,
      type: entities.type,
      dueDate: entities.dueDate,
      context: entities.context,
      resolved: entities.resolved,
    })
    .from(entities)
    .where(
      and(
        eq(entities.matterId, matter.id),
        eq(entities.resolved, false),
      )
    )
    .orderBy(entities.dueDate);

  const deadlines = openDeadlines.filter(e => e.type === "deadline" || e.type === "action_item");

  // Outstanding invoices for this matter
  const outstandingInvoices = await db
    .select({
      id: invoices.id,
      invoiceNumber: invoices.invoiceNumber,
      totalAmount: invoices.totalAmount,
      dueDate: invoices.dueDate,
      issueDate: invoices.issueDate,
      status: invoices.status,
      notes: invoices.notes,
    })
    .from(invoices)
    .where(and(
      eq(invoices.matterId, matter.id),
      inArray(invoices.status, ["sent", "overdue"]),
    ))
    .orderBy(desc(invoices.issueDate))
    .limit(10);

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <div className="border-b bg-background">
        <div className="max-w-2xl mx-auto px-4 py-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide mb-1">
                {client?.name}{client?.company ? ` · ${client.company}` : ""}
              </p>
              <h1 className="text-xl font-semibold">{matter.title}</h1>
              {matter.description && (
                <p className="mt-1 text-sm text-muted-foreground">{matter.description}</p>
              )}
            </div>
            <Badge variant={statusVariants[matter.status] ?? "secondary"} className="capitalize flex-shrink-0 mt-1">
              {matter.status}
            </Badge>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            Last updated {new Date(matter.updatedAt).toLocaleDateString("en-CA", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-6 space-y-6">
        {/* AI Summary */}
        {matter.summary && (
          <section>
            <h2 className="text-sm font-semibold mb-2">Matter Summary</h2>
            <Card>
              <CardContent className="p-4">
                <p className="text-sm text-muted-foreground leading-relaxed">{matter.summary}</p>
              </CardContent>
            </Card>
          </section>
        )}

        {/* Open Deadlines */}
        {deadlines.length > 0 && (
          <section>
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="h-4 w-4 text-orange-500" />
              <h2 className="text-sm font-semibold">Open Deadlines & Action Items</h2>
              <Badge variant="secondary" className="ml-auto text-xs">{deadlines.length}</Badge>
            </div>
            <div className="space-y-2">
              {deadlines.map(item => {
                const due = item.dueDate ? new Date(item.dueDate) : null;
                const daysLeft = due ? Math.ceil((due.getTime() - Date.now()) / 86400000) : null;
                const urgent = daysLeft !== null && daysLeft <= 7;
                return (
                  <Card key={item.id} className={urgent ? "border-destructive/30" : ""}>
                    <CardContent className="flex items-start gap-3 p-3">
                      <Circle className="h-4 w-4 flex-shrink-0 mt-0.5 text-muted-foreground" />
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium">{item.value}</p>
                        {due && (
                          <div className={`flex items-center gap-1 mt-0.5 text-xs ${urgent ? "text-destructive font-medium" : "text-muted-foreground"}`}>
                            <Clock className="h-3 w-3" />
                            {due.toLocaleDateString("en-CA", { month: "long", day: "numeric", year: "numeric" })}
                            {daysLeft !== null && daysLeft >= 0 && (
                              <span>· {daysLeft === 0 ? "Today" : `${daysLeft} days`}</span>
                            )}
                          </div>
                        )}
                        {item.context && (
                          <p className="mt-1 text-xs text-muted-foreground line-clamp-2">{item.context}</p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </section>
        )}

        {/* Recent Documents */}
        {recentDocs.length > 0 && (
          <section>
            <div className="flex items-center gap-2 mb-2">
              <FileText className="h-4 w-4 text-muted-foreground" />
              <h2 className="text-sm font-semibold">Recent Activity</h2>
            </div>
            <div className="space-y-2">
              {recentDocs.map(doc => (
                <Card key={doc.id}>
                  <CardContent className="p-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-4 w-4 flex-shrink-0 mt-0.5 text-green-500" />
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <p className="text-sm font-medium">{doc.title ?? "Untitled"}</p>
                          <Badge variant="outline" className="text-xs">
                            {documentTypeLabels[doc.type] ?? doc.type}
                          </Badge>
                        </div>
                        {doc.summary && (
                          <p className="mt-0.5 text-xs text-muted-foreground line-clamp-2">{doc.summary}</p>
                        )}
                        <p className="mt-0.5 text-xs text-muted-foreground">
                          {new Date(doc.createdAt).toLocaleDateString("en-CA", { month: "short", day: "numeric", year: "numeric" })}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Outstanding Invoices */}
        {outstandingInvoices.length > 0 && (
          <section>
            <div className="flex items-center gap-2 mb-2">
              <Receipt className="h-4 w-4 text-muted-foreground" />
              <h2 className="text-sm font-semibold">Outstanding Invoices</h2>
              <Badge variant="secondary" className="ml-auto text-xs">{outstandingInvoices.length}</Badge>
            </div>
            <div className="space-y-2">
              {outstandingInvoices.map(inv => {
                const isOverdue = inv.status === "overdue";
                const total = (inv.totalAmount / 100).toLocaleString("en-CA", { style: "currency", currency: "CAD" });
                return (
                  <Card key={inv.id} className={isOverdue ? "border-destructive/40" : ""}>
                    <CardContent className="flex items-center justify-between p-3">
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium">{inv.invoiceNumber}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          Issued {new Date(inv.issueDate).toLocaleDateString("en-CA", { month: "short", day: "numeric", year: "numeric" })}
                          {inv.dueDate && (
                            <span className={isOverdue ? " · Due " : " · Due "}
                            >
                              <span className={isOverdue ? "text-destructive font-medium" : ""}>
                                {isOverdue ? "Overdue — " : ""}
                                {new Date(inv.dueDate).toLocaleDateString("en-CA", { month: "short", day: "numeric", year: "numeric" })}
                              </span>
                            </span>
                          )}
                        </p>
                      </div>
                      <div className="ml-3 flex items-center gap-2 flex-shrink-0">
                        <Badge variant={isOverdue ? "destructive" : "secondary"} className="text-xs capitalize">
                          {inv.status}
                        </Badge>
                        <span className="text-sm font-semibold">{total}</span>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
            {/* Show payment notes if any invoice has them */}
            {outstandingInvoices.some(i => i.notes) && (
              <div className="mt-3 rounded-lg bg-muted/50 border px-4 py-3">
                <p className="text-xs font-semibold text-muted-foreground mb-1 uppercase tracking-wide">Payment Instructions</p>
                {outstandingInvoices.filter(i => i.notes).map(i => (
                  <p key={i.id} className="text-sm text-muted-foreground">{i.invoiceNumber}: {i.notes}</p>
                ))}
              </div>
            )}
            {!outstandingInvoices.some(i => i.notes) && (
              <p className="mt-2 text-xs text-muted-foreground">
                To pay or discuss these invoices, please contact your legal counsel directly.
              </p>
            )}
          </section>
        )}

        {deadlines.length === 0 && recentDocs.length === 0 && !matter.summary && outstandingInvoices.length === 0 && (
          <div className="text-center py-12 text-muted-foreground text-sm">
            No updates available yet.
          </div>
        )}

        {matter.status !== "closed" && (
          <PortalUpload token={token} />
        )}

        <p className="text-center text-xs text-muted-foreground pt-4 border-t">
          Status updates provided by your legal counsel via Atticus.
        </p>
      </div>
    </div>
  );
}
