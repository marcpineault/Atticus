"use client";

import Link from "next/link";
import { useState } from "react";
import { trpc } from "@/lib/trpc/client";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2, RefreshCw, Trash2, UserPlus, Search, AlertCircle, FileText } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { Input } from "@/components/ui/input";
import { DocumentDetailDialog } from "@/components/documents/document-detail-dialog";
import { AssignDialog } from "@/components/documents/assign-dialog";

const documentTypeLabels: Record<string, string> = {
  email: "Email",
  voice_note: "Voice Note",
  meeting: "Meeting",
  document: "Document",
  text_message: "Text Message",
  calendar: "Calendar",
};

const documentStatusVariants: Record<
  string,
  "default" | "secondary" | "destructive" | "outline"
> = {
  pending: "secondary",
  processing: "outline",
  completed: "default",
  failed: "destructive",
};

export default function DocumentsPage() {
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [typeFilter, setTypeFilter] = useState<string>("all");
  const [search, setSearch] = useState("");
  const utils = trpc.useUtils();

  const { data: allDocuments, isLoading } = trpc.documents.list.useQuery(
    undefined,
    {
      refetchInterval: (query) => {
        const data = query.state.data;
        return data?.some(d => d.status === "pending" || d.status === "processing")
          ? 4000
          : false;
      },
    }
  );
  const { data: clients } = trpc.clients.list.useQuery();
  const { data: matters } = trpc.matters.list.useQuery();
  const matterMap = new Map(matters?.map(m => [m.id, m]) ?? []);

  const deleteDoc = trpc.documents.delete.useMutation({
    onSuccess: () => utils.documents.list.invalidate(),
  });
  const retryDoc = trpc.documents.retryDocument.useMutation({
    onSuccess: () => utils.documents.list.invalidate(),
  });

  const clientMap = new Map(clients?.map(c => [c.id, c]) ?? []);

  const filtered = (allDocuments ?? []).filter(doc => {
    if (statusFilter !== "all" && doc.status !== statusFilter) return false;
    if (typeFilter !== "all" && doc.type !== typeFilter) return false;
    if (search.trim()) {
      const q = search.toLowerCase();
      const client = doc.clientId ? clientMap.get(doc.clientId) : null;
      const matter = doc.matterId ? matterMap.get(doc.matterId) : null;
      const matches = (doc.title ?? "").toLowerCase().includes(q)
        || (doc.summary ?? "").toLowerCase().includes(q)
        || (client?.name ?? "").toLowerCase().includes(q)
        || (matter?.title ?? "").toLowerCase().includes(q);
      if (!matches) return false;
    }
    return true;
  });

  const failedCount = allDocuments?.filter(d => d.status === "failed").length ?? 0;
  const processingCount = allDocuments?.filter(d => d.status === "pending" || d.status === "processing").length ?? 0;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Documents</h1>
          <p className="text-muted-foreground">
            All documents across your practice.
            {processingCount > 0 && (
              <span className="ml-2 text-sm text-orange-500">
                {processingCount} processing…
              </span>
            )}
          </p>
        </div>
        <Button asChild size="sm">
          <Link href="/upload">Upload</Link>
        </Button>
      </div>

      {/* Search + Filters */}
      <div className="flex gap-3 flex-wrap">
        <div className="relative flex-1 min-w-48">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by title, client, or matter…"
            className="pl-9"
          />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-36">
            <SelectValue placeholder="All statuses" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All statuses</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
            <SelectItem value="processing">Processing</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="failed">Failed{failedCount > 0 ? ` (${failedCount})` : ""}</SelectItem>
          </SelectContent>
        </Select>

        <Select value={typeFilter} onValueChange={setTypeFilter}>
          <SelectTrigger className="w-36">
            <SelectValue placeholder="All types" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All types</SelectItem>
            <SelectItem value="document">Document</SelectItem>
            <SelectItem value="meeting">Meeting</SelectItem>
            <SelectItem value="voice_note">Voice Note</SelectItem>
            <SelectItem value="email">Email</SelectItem>
            <SelectItem value="text_message">Text Message</SelectItem>
            <SelectItem value="calendar">Calendar</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {isLoading ? (
        <div className="space-y-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="flex items-center gap-4 rounded-lg border px-4 py-3">
              <Skeleton className="h-8 w-8 rounded-md flex-shrink-0" />
              <div className="flex-1 space-y-1.5">
                <Skeleton className="h-4 w-64" />
                <Skeleton className="h-3 w-40" />
              </div>
              <Skeleton className="h-5 w-20 rounded-full" />
            </div>
          ))}
        </div>
      ) : filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted">
            <FileText className="h-8 w-8 text-muted-foreground" />
          </div>
          <h3 className="mt-4 text-base font-semibold">No documents found</h3>
          <p className="mt-1 max-w-sm text-sm text-muted-foreground">
            {allDocuments?.length === 0
              ? "Upload your first document to get started."
              : "Try adjusting the filters."}
          </p>
        </div>
      ) : (
        <div className="space-y-2">
          {filtered.map((doc) => {
            const client = doc.clientId ? clientMap.get(doc.clientId) : null;
            const matter = doc.matterId ? matterMap.get(doc.matterId) : null;
            return (
              <DocumentDetailDialog key={doc.id} docId={doc.id}>
                <Card className="cursor-pointer transition-colors hover:bg-muted/50">
                  <CardContent className="flex items-center justify-between p-4">
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <p className="truncate text-sm font-medium">
                          {doc.title ?? "Untitled"}
                        </p>
                      </div>
                      <div className="mt-0.5 flex items-center gap-2 flex-wrap">
                        {client && (
                          <Link
                            href={`/clients/${client.id}`}
                            className="text-xs text-muted-foreground hover:text-foreground hover:underline"
                            onClick={e => e.stopPropagation()}
                          >
                            {client.name}
                          </Link>
                        )}
                        {matter && (
                          <>
                            <span className="text-xs text-muted-foreground/50">›</span>
                            <Link
                              href={`/matters/${matter.id}`}
                              className="text-xs text-muted-foreground hover:text-foreground hover:underline"
                              onClick={e => e.stopPropagation()}
                            >
                              {matter.title}
                            </Link>
                          </>
                        )}
                        {doc.summary && (
                          <p className="line-clamp-1 text-xs text-muted-foreground">
                            {(client || matter) ? "·" : ""} {doc.summary}
                          </p>
                        )}
                        {doc.status === "failed" && doc.errorMessage && (
                          <p className="text-xs text-destructive">{doc.errorMessage}</p>
                        )}
                      </div>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {new Date(doc.createdAt).toLocaleDateString(undefined, {
                          year: "numeric", month: "short", day: "numeric",
                        })}
                      </p>
                    </div>
                    <div className="ml-3 flex items-center gap-2 flex-shrink-0">
                      <Badge variant="outline" className="text-xs">
                        {documentTypeLabels[doc.type] ?? doc.type}
                      </Badge>
                      <Badge
                        variant={documentStatusVariants[doc.status] ?? "secondary"}
                        className="text-xs"
                      >
                        {doc.status}
                      </Badge>
                      {!doc.clientId && (
                        <AssignDialog
                          docId={doc.id}
                          currentClientId={doc.clientId}
                          currentMatterId={doc.matterId}
                          onSuccess={() => utils.documents.list.invalidate()}
                        >
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-7 w-7 text-muted-foreground hover:text-primary"
                            onClick={(e) => e.stopPropagation()}
                            title="Assign to client"
                          >
                            <UserPlus className="h-3.5 w-3.5" />
                          </Button>
                        </AssignDialog>
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
                          if (confirm("Delete this document?")) deleteDoc.mutate({ id: doc.id });
                        }}
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </DocumentDetailDialog>
            );
          })}
        </div>
      )}
    </div>
  );
}
