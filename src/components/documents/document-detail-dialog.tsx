"use client";

import { useState, useEffect } from "react";
import { trpc } from "@/lib/trpc/client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Loader2, Download, Pencil, Check, X, Link2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { EntityList } from "@/components/clients/entity-list";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const documentTypeLabels: Record<string, string> = {
  email: "Email",
  voice_note: "Voice Note",
  meeting: "Meeting",
  document: "Document",
  text_message: "Text Message",
  calendar: "Calendar",
};

interface DocumentDetailDialogProps {
  docId: string;
  children: React.ReactNode;
}

export function DocumentDetailDialog({ docId, children }: DocumentDetailDialogProps) {
  const [open, setOpen] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [editingTitle, setEditingTitle] = useState(false);
  const [titleDraft, setTitleDraft] = useState("");
  const [assigningOpen, setAssigningOpen] = useState(false);
  const [assignClientId, setAssignClientId] = useState<string>("");
  const [assignMatterId, setAssignMatterId] = useState<string>("");
  const [memoText, setMemoText] = useState("");
  const [taskListText, setTaskListText] = useState("");
  const [followUpText, setFollowUpText] = useState("");

  const utils = trpc.useUtils();
  const { data: doc, isLoading } = trpc.documents.getById.useQuery(
    { id: docId },
    { enabled: open }
  );
  const { data: clientsList } = trpc.clients.list.useQuery(undefined, { enabled: open });
  const { data: mattersList } = trpc.matters.list.useQuery(
    { clientId: assignClientId || doc?.clientId || undefined },
    { enabled: open && (assigningOpen || !!doc?.clientId) }
  );
  const getUrl = trpc.documents.getSignedUrl.useMutation();
  const updateTitle = trpc.documents.updateTitle.useMutation({
    onSuccess: () => {
      setEditingTitle(false);
      utils.documents.getById.invalidate({ id: docId });
      utils.documents.list.invalidate();
    },
  });
  const updateAssignment = trpc.documents.updateAssignment.useMutation({
    onSuccess: () => {
      setAssigningOpen(false);
      utils.documents.getById.invalidate({ id: docId });
      utils.documents.list.invalidate();
    },
  });

  useEffect(() => {
    if (doc) {
      setMemoText(doc.generatedMemo ?? "");
      setTaskListText(doc.generatedTaskList ?? "");
      setFollowUpText(doc.generatedFollowUpEmail ?? "");
    }
  }, [doc?.id]);

  async function handleDownload() {
    setDownloading(true);
    try {
      const { url } = await getUrl.mutateAsync({ id: docId });
      window.open(url, "_blank");
    } finally {
      setDownloading(false);
    }
  }

  function startEditTitle() {
    setTitleDraft(doc?.title ?? "");
    setEditingTitle(true);
  }

  function saveTitle() {
    if (!titleDraft.trim()) return;
    updateTitle.mutate({ id: docId, title: titleDraft.trim() });
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh] flex flex-col">
        <DialogHeader className="flex-shrink-0">
          {isLoading ? (
            <div className="flex items-center gap-2">
              <Loader2 className="h-4 w-4 animate-spin" />
              <DialogTitle className="text-base">Loading…</DialogTitle>
            </div>
          ) : doc ? (
            <div className="flex items-start justify-between gap-3 pr-8">
              <div className="min-w-0 flex-1">
                {editingTitle ? (
                  <div className="flex items-center gap-2">
                    <Input
                      value={titleDraft}
                      onChange={(e) => setTitleDraft(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") saveTitle();
                        if (e.key === "Escape") setEditingTitle(false);
                      }}
                      className="h-7 text-sm font-semibold"
                      autoFocus
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-6 w-6 flex-shrink-0"
                      onClick={saveTitle}
                      disabled={updateTitle.isPending}
                    >
                      {updateTitle.isPending ? (
                        <Loader2 className="h-3.5 w-3.5 animate-spin" />
                      ) : (
                        <Check className="h-3.5 w-3.5" />
                      )}
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-6 w-6 flex-shrink-0"
                      onClick={() => setEditingTitle(false)}
                    >
                      <X className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                ) : (
                  <div className="flex items-center gap-1.5 group">
                    <DialogTitle className="truncate text-base">
                      {doc.title ?? "Untitled"}
                    </DialogTitle>
                    <button
                      onClick={startEditTitle}
                      className="opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground hover:text-foreground"
                      title="Edit title"
                    >
                      <Pencil className="h-3 w-3" />
                    </button>
                  </div>
                )}
                <div className="mt-1 flex flex-wrap items-center gap-2">
                  <Badge variant="outline" className="text-xs">
                    {documentTypeLabels[doc.type] ?? doc.type}
                  </Badge>
                  <span className="text-xs text-muted-foreground">
                    {new Date(doc.createdAt).toLocaleDateString(undefined, {
                      year: "numeric", month: "short", day: "numeric",
                    })}
                  </span>
                  {doc.billableMinutes != null && doc.billableMinutes > 0 && (
                    <span className="text-xs text-muted-foreground">
                      {(doc.billableMinutes / 60).toFixed(1)} hrs
                    </span>
                  )}
                </div>
              </div>
              {doc.r2Key && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleDownload}
                  disabled={downloading}
                  className="flex-shrink-0"
                >
                  {downloading ? (
                    <Loader2 className="h-3.5 w-3.5 animate-spin" />
                  ) : (
                    <Download className="h-3.5 w-3.5" />
                  )}
                  Download
                </Button>
              )}
            </div>
          ) : (
            <DialogTitle className="text-base">Document not found</DialogTitle>
          )}
        </DialogHeader>

        {doc && (
          <Tabs
            defaultValue={
              (doc.generatedMemo || doc.generatedTaskList || doc.generatedFollowUpEmail)
                ? "outputs"
                : doc.summary
                ? "summary"
                : "content"
            }
            className="flex-1 overflow-hidden flex flex-col"
          >
            <TabsList className="flex-shrink-0">
              {doc.summary && <TabsTrigger value="summary">Summary</TabsTrigger>}
              {doc.rawContent && <TabsTrigger value="content">Full Text</TabsTrigger>}
              {doc.entities && doc.entities.length > 0 && (
                <TabsTrigger value="entities">
                  Entities
                  <Badge variant="secondary" className="ml-1.5 px-1.5 py-0 text-xs">
                    {doc.entities.length}
                  </Badge>
                </TabsTrigger>
              )}
              {(doc.generatedMemo || doc.generatedTaskList || doc.generatedFollowUpEmail) && (
                <TabsTrigger value="outputs">Outputs</TabsTrigger>
              )}
            </TabsList>

            {doc.summary && (
              <TabsContent value="summary" className="flex-1 overflow-hidden mt-3">
                <ScrollArea className="h-full max-h-[50vh]">
                  <p className="text-sm leading-relaxed text-muted-foreground pr-4">
                    {doc.summary}
                  </p>
                </ScrollArea>
              </TabsContent>
            )}

            {doc.rawContent && (
              <TabsContent value="content" className="flex-1 overflow-hidden mt-3">
                <ScrollArea className="h-full max-h-[50vh]">
                  <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed text-muted-foreground pr-4">
                    {doc.rawContent}
                  </pre>
                </ScrollArea>
              </TabsContent>
            )}

            {doc.entities && doc.entities.length > 0 && (
              <TabsContent value="entities" className="flex-1 overflow-hidden mt-3">
                <ScrollArea className="h-full max-h-[50vh]">
                  <div className="pr-4">
                    <EntityList entities={doc.entities} />
                  </div>
                </ScrollArea>
              </TabsContent>
            )}

            {(doc.generatedMemo || doc.generatedTaskList || doc.generatedFollowUpEmail) && (
              <TabsContent value="outputs" className="flex-1 overflow-hidden mt-3">
                <ScrollArea className="h-full max-h-[50vh]">
                  <div className="space-y-4 pr-4">
                    {doc.generatedMemo && (
                      <div>
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1.5">
                          File Memo
                        </p>
                        <Textarea
                          value={memoText}
                          onChange={(e) => setMemoText(e.target.value)}
                          className="min-h-[120px] text-sm font-mono resize-y"
                        />
                      </div>
                    )}
                    {doc.generatedTaskList && (
                      <div>
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1.5">
                          Task List
                        </p>
                        <Textarea
                          value={taskListText}
                          onChange={(e) => setTaskListText(e.target.value)}
                          className="min-h-[100px] text-sm font-mono resize-y"
                        />
                      </div>
                    )}
                    {doc.generatedFollowUpEmail && (
                      <div>
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1.5">
                          Follow-Up Email Draft
                        </p>
                        <Textarea
                          value={followUpText}
                          onChange={(e) => setFollowUpText(e.target.value)}
                          className="min-h-[140px] text-sm font-mono resize-y"
                        />
                      </div>
                    )}
                  </div>
                </ScrollArea>
              </TabsContent>
            )}
          </Tabs>
        )}

        {doc && !doc.summary && !doc.rawContent && (!doc.entities || doc.entities.length === 0) && (
          <p className="py-6 text-center text-sm text-muted-foreground">
            {doc.status === "pending" || doc.status === "processing"
              ? "This document is still being processed. Check back shortly."
              : "No content available for this document."}
          </p>
        )}

        {doc && (
          <div className="flex-shrink-0 border-t pt-3 mt-2">
            {assigningOpen ? (
              <div className="space-y-2">
                <p className="text-xs font-medium text-muted-foreground">Assign to client / matter</p>
                <div className="flex items-center gap-2">
                  <Select
                    value={assignClientId || "none"}
                    onValueChange={(v) => { setAssignClientId(v === "none" ? "" : v); setAssignMatterId(""); }}
                  >
                    <SelectTrigger className="h-8 text-xs flex-1">
                      <SelectValue placeholder="Select client…" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">No client</SelectItem>
                      {clientsList?.map(c => (
                        <SelectItem key={c.id} value={c.id}>{c.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {assignClientId && mattersList && mattersList.length > 0 && (
                    <Select
                      value={assignMatterId || "none"}
                      onValueChange={(v) => setAssignMatterId(v === "none" ? "" : v)}
                    >
                      <SelectTrigger className="h-8 text-xs flex-1">
                        <SelectValue placeholder="Select matter…" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">No matter</SelectItem>
                        {mattersList.map(m => (
                          <SelectItem key={m.id} value={m.id}>{m.title}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                  <Button
                    size="sm"
                    className="h-8 text-xs"
                    onClick={() => updateAssignment.mutate({
                      id: docId,
                      clientId: assignClientId || null,
                      matterId: assignMatterId || null,
                    })}
                    disabled={updateAssignment.isPending}
                  >
                    {updateAssignment.isPending ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Check className="h-3.5 w-3.5" />}
                  </Button>
                  <Button variant="ghost" size="sm" className="h-8 text-xs" onClick={() => setAssigningOpen(false)}>
                    <X className="h-3.5 w-3.5" />
                  </Button>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <button
                  onClick={() => {
                    setAssignClientId(doc.clientId ?? "");
                    setAssignMatterId(doc.matterId ?? "");
                    setAssigningOpen(true);
                  }}
                  className="flex items-center gap-1 hover:text-foreground transition-colors"
                >
                  <Link2 className="h-3.5 w-3.5" />
                  {doc.clientId
              ? `${clientsList?.find(c => c.id === doc.clientId)?.name ?? "Client"}`
              + (doc.matterId && mattersList?.find(m => m.id === doc.matterId) ? ` / ${mattersList.find(m => m.id === doc.matterId)!.title}` : "")
              + " — Reassign"
              : "Assign to client / matter"}
                </button>
              </div>
            )}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
