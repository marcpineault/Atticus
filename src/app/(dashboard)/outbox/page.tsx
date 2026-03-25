"use client";

import Link from "next/link";
import { trpc } from "@/lib/trpc/client";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Loader2, Mail, ExternalLink } from "lucide-react";
import { DocumentDetailDialog } from "@/components/documents/document-detail-dialog";

export default function OutboxPage() {
  const { data: clients } = trpc.clients.list.useQuery();
  const { data: allDocs, isLoading } = trpc.documents.list.useQuery();

  const clientMap = new Map(clients?.map(c => [c.id, c]) ?? []);

  // Filter to emails sent by Atticus
  const sentEmails = (allDocs ?? []).filter(
    d => d.type === "email" && (d.metadata as Record<string, unknown> | null)?.sentByAtticus === true
  ).sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Outbox</h1>
        <p className="text-muted-foreground">
          All emails sent by Atticus on your behalf.
        </p>
      </div>

      {isLoading ? (
        <div className="flex justify-center py-12">
          <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
        </div>
      ) : sentEmails.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-xl border border-dashed py-16 text-center">
          <Mail className="mb-3 h-8 w-8 text-muted-foreground" />
          <p className="text-sm font-medium">No sent emails yet</p>
          <p className="mt-1 text-xs text-muted-foreground">
            Emails sent from{" "}
            <Link href="/draft" className="underline underline-offset-4 hover:text-foreground">
              AI Draft
            </Link>
            {" "}will appear here.
          </p>
        </div>
      ) : (
        <div className="space-y-2">
          <p className="text-xs text-muted-foreground">
            {sentEmails.length} email{sentEmails.length !== 1 ? "s" : ""} sent via Atticus
          </p>
          {sentEmails.map((doc) => {
            const client = doc.clientId ? clientMap.get(doc.clientId) : null;
            const meta = doc.metadata as Record<string, unknown> | null;
            const to = meta?.to as string | undefined;

            return (
              <DocumentDetailDialog key={doc.id} docId={doc.id}>
                <Card className="cursor-pointer transition-colors hover:bg-muted/50">
                  <CardContent className="flex items-start justify-between p-4">
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <Mail className="h-3.5 w-3.5 flex-shrink-0 text-muted-foreground" />
                        <p className="truncate text-sm font-medium">
                          {doc.title ?? "Untitled"}
                        </p>
                      </div>
                      <div className="mt-0.5 flex items-center gap-2 text-xs text-muted-foreground flex-wrap">
                        {client ? (
                          <Link
                            href={`/clients/${client.id}`}
                            className="hover:underline hover:text-foreground"
                            onClick={e => e.stopPropagation()}
                          >
                            {client.name}
                          </Link>
                        ) : null}
                        {to && <span>→ {to}</span>}
                        <span>·</span>
                        <span>{new Date(doc.createdAt).toLocaleDateString(undefined, {
                          year: "numeric", month: "short", day: "numeric",
                          hour: "2-digit", minute: "2-digit",
                        })}</span>
                      </div>
                      {doc.summary && (
                        <p className="mt-0.5 line-clamp-1 text-xs text-muted-foreground">
                          {doc.summary}
                        </p>
                      )}
                    </div>
                    <div className="ml-3 flex items-center gap-2 flex-shrink-0">
                      <Badge variant="outline" className="text-xs">Sent</Badge>
                      {client && (
                        <Link
                          href={`/clients/${client.id}`}
                          onClick={e => e.stopPropagation()}
                          className="text-muted-foreground hover:text-foreground"
                        >
                          <ExternalLink className="h-3.5 w-3.5" />
                        </Link>
                      )}
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
