"use client";

import { use, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { trpc } from "@/lib/trpc/client";
import { ClientForm } from "@/components/clients/client-form";
import { EntityList } from "@/components/clients/entity-list";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Pencil,
  Loader2,
  FileText,
  Briefcase,
  Building2,
  Mail,
  Phone,
  Clock,
  Download,
  Plus,
  Trash2,
  RefreshCw,
  Sparkles,
  Upload,
  MessageSquare,
  Search,
  History,
  Check,
  X,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { DocumentDetailDialog } from "@/components/documents/document-detail-dialog";
import { NoteDialog } from "@/components/documents/note-dialog";
import { MatterForm } from "@/components/matters/matter-form";
import { LogTimeDialog } from "@/components/time/log-time-dialog";
import { AddDeadlineDialog } from "@/components/deadlines/add-deadline-dialog";
import { LimitationCalculator } from "@/components/deadlines/limitation-calculator";

interface ClientDetailPageProps {
  params: Promise<{ id: string }>;
}

const documentStatusVariants: Record<
  string,
  "default" | "secondary" | "destructive" | "outline"
> = {
  pending: "secondary",
  processing: "outline",
  completed: "default",
  failed: "destructive",
};

const documentTypeLabels: Record<string, string> = {
  email: "Email",
  voice_note: "Voice Note",
  meeting: "Meeting",
  document: "Document",
  text_message: "Text Message",
  calendar: "Calendar",
};

function DownloadButton({ docId }: { docId: string }) {
  const [loading, setLoading] = useState(false);
  const getUrl = trpc.documents.getSignedUrl.useMutation();

  async function handleDownload() {
    setLoading(true);
    try {
      const { url } = await getUrl.mutateAsync({ id: docId });
      window.open(url, "_blank");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Button variant="ghost" size="sm" onClick={handleDownload} disabled={loading}>
      {loading ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Download className="h-3.5 w-3.5" />}
    </Button>
  );
}

export default function ClientDetailPage({ params }: ClientDetailPageProps) {
  const { id } = use(params);
  const utils = trpc.useUtils();

  const { data: client, isLoading: clientLoading, error: clientError } =
    trpc.clients.getById.useQuery({ id });

  const router = useRouter();

  const deleteDoc = trpc.documents.delete.useMutation({
    onSuccess: () => utils.documents.list.invalidate({ clientId: id }),
  });
  const retryDoc = trpc.documents.retryDocument.useMutation({
    onSuccess: () => utils.documents.list.invalidate({ clientId: id }),
  });
  const deleteClient = trpc.clients.delete.useMutation({
    onSuccess: () => { utils.clients.list.invalidate(); router.push("/clients"); },
  });
  const generateBrief = trpc.clients.generateBrief.useMutation({
    onSuccess: () => utils.clients.getById.invalidate({ id }),
  });

  const { data: documents, isLoading: docsLoading } =
    trpc.documents.list.useQuery(
      { clientId: id },
      {
        refetchInterval: (query) => {
          const data = query.state.data;
          const hasProcessing = data?.some(
            (d) => d.status === "pending" || d.status === "processing"
          );
          return hasProcessing ? 4000 : false;
        },
      }
    );

  const { data: matters, isLoading: mattersLoading } =
    trpc.matters.list.useQuery({ clientId: id });

  const { data: allEntities, isLoading: entitiesLoading } =
    trpc.documents.listEntitiesByClientFlat.useQuery({ clientId: id });

  const { data: clientTimeEntries, isLoading: timeEntriesLoading } =
    trpc.timeEntries.list.useQuery({ clientId: id });
  const deleteTimeEntry = trpc.timeEntries.delete.useMutation({
    onSuccess: () => utils.timeEntries.list.invalidate({ clientId: id }),
  });
  const updateTimeEntry = trpc.timeEntries.update.useMutation({
    onSuccess: () => {
      utils.timeEntries.list.invalidate({ clientId: id });
      setEditingTimeId(null);
    },
  });
  const updateClient = trpc.clients.update.useMutation({
    onSuccess: () => utils.clients.getById.invalidate({ id }),
  });

  const [editingTimeId, setEditingTimeId] = useState<string | null>(null);
  const [editTimeDesc, setEditTimeDesc] = useState("");
  const [editTimeMinutes, setEditTimeMinutes] = useState("");
  const [notesEditing, setNotesEditing] = useState(false);
  const [notesValue, setNotesValue] = useState("");

  if (clientLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (clientError || !client) {
    return (
      <p className="text-sm text-destructive">
        {clientError?.message ?? "Client not found"}
      </p>
    );
  }

  const docBillableMinutes = documents
    ?.filter((d) => d.status === "completed")
    .reduce((sum, d) => sum + (d.billableMinutes ?? 0), 0) ?? 0;
  const manualBillableMinutes = clientTimeEntries
    ?.reduce((sum, e) => sum + e.minutes, 0) ?? 0;
  const totalBillableMinutes = docBillableMinutes + manualBillableMinutes;
  const totalBillableHours = totalBillableMinutes > 0
    ? (totalBillableMinutes / 60).toFixed(1)
    : null;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-semibold">{client.name}</h1>
          <div className="mt-1 flex flex-wrap gap-3">
            {client.company && (
              <span className="flex items-center gap-1 text-sm text-muted-foreground">
                <Building2 className="h-3.5 w-3.5" />
                {client.company}
              </span>
            )}
            {client.email && (
              <span className="flex items-center gap-1 text-sm text-muted-foreground">
                <Mail className="h-3.5 w-3.5" />
                {client.email}
              </span>
            )}
            {client.phone && (
              <span className="flex items-center gap-1 text-sm text-muted-foreground">
                <Phone className="h-3.5 w-3.5" />
                {client.phone}
              </span>
            )}
            {totalBillableHours && (
              <span className="flex items-center gap-1 text-sm font-medium text-primary">
                <Clock className="h-3.5 w-3.5" />
                {totalBillableHours} hrs tracked
              </span>
            )}
          </div>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <Button variant="outline" size="sm" asChild title="Search this client's documents">
            <Link href={`/search?clientId=${id}`}>
              <Search className="h-3.5 w-3.5" />
            </Link>
          </Button>
          <Button variant="outline" size="sm" asChild title="Chat about this client">
            <Link href={`/chat?clientId=${id}`}>
              <MessageSquare className="h-3.5 w-3.5" />
            </Link>
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => generateBrief.mutate({ id })}
            disabled={generateBrief.isPending}
            title="Generate AI client brief from documents"
          >
            {generateBrief.isPending ? (
              <Loader2 className="h-3.5 w-3.5 animate-spin" />
            ) : (
              <Sparkles className="h-3.5 w-3.5" />
            )}
            {generateBrief.isPending ? "Generating…" : "AI Brief"}
          </Button>
          <ClientForm
            trigger={
              <Button variant="outline" size="sm">
                <Pencil className="h-4 w-4" />
                Edit
              </Button>
            }
            client={client}
          />
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-muted-foreground hover:text-destructive"
            onClick={() => {
              if (confirm(`Delete ${client.name}? All their documents and matters will also be deleted.`)) {
                deleteClient.mutate({ id });
              }
            }}
            disabled={deleteClient.isPending}
            title="Delete client"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* AI Brief */}
      {(client.summary || generateBrief.isError) && (
        <Card className="border-primary/10 bg-primary/5">
          <CardContent className="pt-4">
            {generateBrief.isError && (
              <p className="text-xs text-destructive mb-1">{generateBrief.error.message}</p>
            )}
            {client.summary && (
              <p className="text-sm text-muted-foreground">{client.summary}</p>
            )}
          </CardContent>
        </Card>
      )}

      {/* Private Notes */}
      <div className="rounded-lg border bg-muted/30 p-3">
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs font-medium text-muted-foreground">Private Notes</span>
          {!notesEditing ? (
            <button
              onClick={() => { setNotesValue(client.notes ?? ""); setNotesEditing(true); }}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
            >
              <Pencil className="h-3 w-3" />
              Edit
            </button>
          ) : (
            <div className="flex items-center gap-2">
              <button
                onClick={async () => {
                  await updateClient.mutateAsync({ id, notes: notesValue || null });
                  setNotesEditing(false);
                }}
                className="text-xs text-green-600 hover:text-green-700 flex items-center gap-1"
              >
                <Check className="h-3 w-3" />
                Save
              </button>
              <button
                onClick={() => setNotesEditing(false)}
                className="text-xs text-muted-foreground hover:text-foreground"
              >
                Cancel
              </button>
            </div>
          )}
        </div>
        {notesEditing ? (
          <Textarea
            value={notesValue}
            onChange={(e) => setNotesValue(e.target.value)}
            placeholder="Private notes about this client — visible only to you…"
            className="min-h-20 text-sm resize-none bg-background"
            autoFocus
          />
        ) : client.notes ? (
          <p className="text-sm text-muted-foreground whitespace-pre-wrap">{client.notes}</p>
        ) : (
          <p className="text-xs text-muted-foreground/60 italic">No notes yet. Click Edit to add private notes about this client.</p>
        )}
      </div>

      {/* Tabs */}
      <Tabs defaultValue="documents">
        <TabsList>
          <TabsTrigger value="documents" className="flex items-center gap-1.5">
            <FileText className="h-3.5 w-3.5" />
            Documents
            {documents && (
              <Badge variant="secondary" className="ml-1 px-1.5 py-0 text-xs">
                {documents.length}
              </Badge>
            )}
          </TabsTrigger>
          <TabsTrigger value="matters" className="flex items-center gap-1.5">
            <Briefcase className="h-3.5 w-3.5" />
            Matters
            {matters && (
              <Badge variant="secondary" className="ml-1 px-1.5 py-0 text-xs">
                {matters.length}
              </Badge>
            )}
          </TabsTrigger>
          <TabsTrigger value="entities" className="flex items-center gap-1.5">
            Entities
            {allEntities && allEntities.length > 0 && (
              <Badge variant="secondary" className="ml-1 px-1.5 py-0 text-xs">
                {allEntities.length}
              </Badge>
            )}
          </TabsTrigger>
          <TabsTrigger value="timeline" className="flex items-center gap-1.5">
            <History className="h-3.5 w-3.5" />
            Timeline
          </TabsTrigger>
          <TabsTrigger value="time" className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" />
            Time
            {clientTimeEntries && clientTimeEntries.length > 0 && (
              <Badge variant="secondary" className="ml-1 px-1.5 py-0 text-xs">
                {clientTimeEntries.length}
              </Badge>
            )}
          </TabsTrigger>
        </TabsList>

        {/* Documents Tab */}
        <TabsContent value="documents" className="mt-4 space-y-3">
          <div className="flex justify-end gap-2">
            <NoteDialog
              clientId={id}
              onCreated={() => utils.documents.list.invalidate({ clientId: id })}
            />
            <Button size="sm" variant="outline" asChild>
              <Link href={`/upload?clientId=${id}`}>
                <Upload className="h-3.5 w-3.5" />
                Upload Document
              </Link>
            </Button>
          </div>
          {docsLoading ? (
            <div className="flex justify-center py-8">
              <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
            </div>
          ) : documents && documents.length > 0 ? (
            <div className="space-y-2">
              {documents.map((doc) => (
                <DocumentDetailDialog key={doc.id} docId={doc.id}>
                  <Card className="cursor-pointer transition-colors hover:bg-muted/50">
                    <CardContent className="flex items-center justify-between p-4">
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium">
                          {doc.title ?? "Untitled"}
                        </p>
                        {doc.summary && (
                          <p className="mt-0.5 line-clamp-1 text-xs text-muted-foreground">
                            {doc.summary}
                          </p>
                        )}
                        <p className="mt-1 text-xs text-muted-foreground">
                          {new Date(doc.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="ml-3 flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">
                          {documentTypeLabels[doc.type] ?? doc.type}
                        </Badge>
                        <Badge
                          variant={documentStatusVariants[doc.status] ?? "secondary"}
                          className="text-xs"
                        >
                          {doc.status}
                        </Badge>
                        {doc.status === "completed" && doc.r2Key && (
                          <DownloadButton docId={doc.id} />
                        )}
                        {doc.status === "failed" && (
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-7 w-7 text-muted-foreground hover:text-primary"
                            onClick={(e) => { e.stopPropagation(); retryDoc.mutate({ id: doc.id }); }}
                            title="Retry processing"
                          >
                            <RefreshCw className="h-3.5 w-3.5" />
                          </Button>
                        )}
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-7 w-7 text-muted-foreground hover:text-destructive"
                          onClick={(e) => {
                            e.stopPropagation();
                            if (confirm("Delete this document?")) {
                              deleteDoc.mutate({ id: doc.id });
                            }
                          }}
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </DocumentDetailDialog>
              ))}
            </div>
          ) : (
            <p className="py-8 text-center text-sm text-muted-foreground">
              No documents for this client yet.
            </p>
          )}
        </TabsContent>

        {/* Matters Tab */}
        <TabsContent value="matters" className="mt-4 space-y-3">
          <div className="flex justify-end">
            <MatterForm
              clientId={id}
              trigger={
                <Button size="sm" variant="outline">
                  <Plus className="h-3.5 w-3.5" />
                  New Matter
                </Button>
              }
            />
          </div>
          {mattersLoading ? (
            <div className="flex justify-center py-8">
              <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
            </div>
          ) : matters && matters.length > 0 ? (
            <div className="space-y-2">
              {matters.map((matter) => (
                <Link key={matter.id} href={`/matters/${matter.id}`}>
                  <Card className="cursor-pointer transition-colors hover:bg-muted/50">
                    <CardContent className="flex items-center justify-between p-4">
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium">{matter.title}</p>
                        {matter.description && (
                          <p className="mt-0.5 line-clamp-1 text-xs text-muted-foreground">
                            {matter.description}
                          </p>
                        )}
                      </div>
                      <Badge
                        variant={
                          matter.status === "active"
                            ? "default"
                            : matter.status === "closed"
                            ? "secondary"
                            : "outline"
                        }
                        className="ml-3 text-xs capitalize"
                      >
                        {matter.status}
                      </Badge>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
            <p className="py-8 text-center text-sm text-muted-foreground">
              No matters yet. Create one above.
            </p>
          )}
        </TabsContent>

        {/* Entities Tab */}
        <TabsContent value="entities" className="mt-4 space-y-3">
          <div className="flex justify-end gap-2">
            <LimitationCalculator clientId={id} />
            <AddDeadlineDialog
              clientId={id}
              onCreated={() => utils.documents.listEntitiesByClientFlat.invalidate({ clientId: id })}
            />
          </div>
          {entitiesLoading ? (
            <div className="flex justify-center py-8">
              <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
            </div>
          ) : (
            <EntityList
              entities={allEntities ?? []}
              onResolved={() => utils.documents.listEntitiesByClientFlat.invalidate({ clientId: id })}
            />
          )}
        </TabsContent>

        {/* Time Entries Tab */}
        <TabsContent value="time" className="mt-4 space-y-3">
          <div className="flex items-center justify-between">
            {clientTimeEntries && clientTimeEntries.length > 0 && (
              <p className="text-sm font-medium">
                {(clientTimeEntries.reduce((s, e) => s + e.minutes, 0) / 60).toFixed(1)} hrs total
              </p>
            )}
            <div className="ml-auto">
              <LogTimeDialog
                clientId={id}
                onSuccess={() => utils.timeEntries.list.invalidate({ clientId: id })}
                trigger={
                  <button className="inline-flex items-center gap-1.5 rounded-md border border-input bg-background px-3 py-1.5 text-xs font-medium hover:bg-muted transition-colors">
                    <Plus className="h-3 w-3" /> Log Time
                  </button>
                }
              />
            </div>
          </div>
          {timeEntriesLoading ? (
            <div className="flex justify-center py-8">
              <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
            </div>
          ) : !clientTimeEntries || clientTimeEntries.length === 0 ? (
            <div className="flex flex-col items-center justify-center rounded-xl border border-dashed py-12 text-center">
              <Clock className="h-8 w-8 text-muted-foreground mb-3" />
              <p className="text-sm font-medium">No time entries yet</p>
              <p className="mt-1 text-xs text-muted-foreground">Log billable time for this client.</p>
            </div>
          ) : (
            <div className="space-y-2">
              {clientTimeEntries.map((entry) => (
                <Card key={entry.id}>
                  <CardContent className="p-3">
                    {editingTimeId === entry.id ? (
                      <div className="space-y-2">
                        <Input
                          value={editTimeDesc}
                          onChange={(e) => setEditTimeDesc(e.target.value)}
                          placeholder="Description"
                          className="h-8 text-sm"
                        />
                        <div className="flex items-center gap-2">
                          <Input
                            value={editTimeMinutes}
                            onChange={(e) => setEditTimeMinutes(e.target.value)}
                            placeholder="Minutes"
                            className="h-8 text-sm w-36"
                            type="number"
                            min={1}
                            max={1440}
                          />
                          <button
                            onClick={() => {
                              const mins = parseInt(editTimeMinutes);
                              if (!editTimeDesc.trim() || isNaN(mins)) return;
                              updateTimeEntry.mutate({ id: entry.id, description: editTimeDesc.trim(), minutes: mins });
                            }}
                            className="text-green-600 hover:text-green-700 transition-colors"
                            disabled={updateTimeEntry.isPending}
                          >
                            <Check className="h-4 w-4" />
                          </button>
                          <button
                            onClick={() => setEditingTimeId(null)}
                            className="text-muted-foreground hover:text-foreground transition-colors"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center justify-between">
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-medium">{entry.description}</p>
                          <div className="mt-0.5 flex items-center gap-2">
                            <p className="text-xs text-muted-foreground">
                              {new Date(entry.entryDate).toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" })}
                            </p>
                            {entry.matterTitle && (
                              <span className="text-xs text-muted-foreground">— {entry.matterTitle}</span>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center gap-2 flex-shrink-0">
                          <span className="text-sm font-semibold text-primary">
                            {(entry.minutes / 60).toFixed(1)}h
                          </span>
                          <button
                            onClick={() => { setEditingTimeId(entry.id); setEditTimeDesc(entry.description); setEditTimeMinutes(String(entry.minutes)); }}
                            className="text-muted-foreground hover:text-foreground transition-colors"
                          >
                            <Pencil className="h-3.5 w-3.5" />
                          </button>
                          <button
                            onClick={() => deleteTimeEntry.mutate({ id: entry.id })}
                            className="text-muted-foreground hover:text-destructive transition-colors"
                          >
                            <Trash2 className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>

        {/* Timeline Tab */}
        <TabsContent value="timeline" className="mt-4">
          <div className="relative">
            <div className="absolute left-3 top-0 bottom-0 w-px bg-border" />
            <div className="space-y-0">
              {[
                ...(documents ?? []).map(d => ({
                  date: new Date(d.createdAt),
                  type: "document" as const,
                  title: d.title ?? "Untitled",
                  subtitle: d.summary ? d.summary.slice(0, 100) + (d.summary.length > 100 ? "…" : "") : null,
                  badge: d.type,
                  id: d.id,
                  status: d.status,
                })),
                ...(allEntities ?? [])
                  .filter(e => e.type === "deadline" || e.type === "action_item")
                  .map(e => ({
                    date: e.dueDate ? new Date(e.dueDate) : new Date(0),
                    type: "entity" as const,
                    title: e.value,
                    subtitle: e.context?.slice(0, 80) ?? null,
                    badge: e.type,
                    id: e.id,
                    resolved: e.resolved,
                    dueDate: e.dueDate,
                  })),
              ]
                .sort((a, b) => b.date.getTime() - a.date.getTime())
                .map((item, idx) => (
                  <div key={`${item.type}-${item.id}-${idx}`} className="flex gap-4 pl-8 pb-5 relative">
                    <div className={`absolute left-1.5 top-1.5 h-3 w-3 rounded-full border-2 ${
                      item.type === "document" ? "bg-primary border-primary" :
                      item.badge === "deadline" ? "bg-orange-400 border-orange-400" :
                      "bg-blue-400 border-blue-400"
                    }`} />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-xs text-muted-foreground">
                          {item.date.getTime() === 0 ? "No date" : item.date.toLocaleDateString("en-CA", {
                            year: "numeric", month: "short", day: "numeric",
                          })}
                        </span>
                        <Badge variant="outline" className="text-xs px-1.5 h-4">
                          {item.badge === "action_item" ? "Action" :
                            item.badge ? item.badge.charAt(0).toUpperCase() + item.badge.slice(1) : ""}
                        </Badge>
                        {"resolved" in item && item.resolved && (
                          <Badge variant="secondary" className="text-xs px-1.5 h-4 text-green-600">Done</Badge>
                        )}
                      </div>
                      <p className="text-sm font-medium leading-snug">{item.title}</p>
                      {item.subtitle && (
                        <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">{item.subtitle}</p>
                      )}
                    </div>
                  </div>
                ))}
              {(documents?.length ?? 0) === 0 && (allEntities?.length ?? 0) === 0 && (
                <p className="pl-8 text-sm text-muted-foreground py-4">No activity yet for this client.</p>
              )}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
