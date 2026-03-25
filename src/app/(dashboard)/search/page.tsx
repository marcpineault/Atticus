"use client";

import { Suspense } from "react";
import { useState, useRef, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { trpc } from "@/lib/trpc/client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Loader2, FileText, Sparkles, ShieldAlert, CheckCircle2, AlertTriangle, User, Building2 } from "lucide-react";

const documentTypeLabels: Record<string, string> = {
  email: "Email",
  voice_note: "Voice Note",
  meeting: "Meeting",
  document: "Document",
  text_message: "Text Message",
  calendar: "Calendar",
};

const severityConfig = {
  high: { label: "High", className: "text-destructive font-semibold", icon: AlertTriangle },
  medium: { label: "Medium", className: "text-amber-600 font-medium", icon: AlertTriangle },
  low: { label: "Low", className: "text-muted-foreground", icon: AlertTriangle },
};

function ConflictCheckTab() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const conflictCheck = trpc.clients.checkConflict.useMutation();

  function handleCheck(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim()) return;
    conflictCheck.mutate({ name: name.trim(), company: company.trim() || undefined });
  }

  const result = conflictCheck.data;

  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm text-muted-foreground">
          Check for potential conflicts of interest before accepting a new client or matter.
          Searches across all existing clients, parties, and matters in your practice.
        </p>
      </div>

      <form onSubmit={handleCheck} className="flex gap-2">
        <div className="relative flex-1">
          <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Prospective client name (required)"
            className="pl-9"
            autoFocus
          />
        </div>
        <div className="relative flex-1">
          <Building2 className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Company (optional)"
            className="pl-9"
          />
        </div>
        <Button type="submit" disabled={!name.trim() || conflictCheck.isPending}>
          {conflictCheck.isPending ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <>
              <ShieldAlert className="h-4 w-4 mr-1.5" />
              Check
            </>
          )}
        </Button>
      </form>

      {conflictCheck.isPending && (
        <div className="flex items-center gap-2 text-sm text-muted-foreground py-4">
          <Loader2 className="h-4 w-4 animate-spin" />
          Scanning practice records for potential conflicts…
        </div>
      )}

      {result && !conflictCheck.isPending && (
        <div className="space-y-4">
          {/* Overall verdict */}
          <Card className={result.hasConflict ? "border-destructive/40 bg-destructive/5" : "border-green-500/40 bg-green-500/5"}>
            <CardContent className="flex items-start gap-3 p-4">
              {result.hasConflict ? (
                <AlertTriangle className="h-5 w-5 flex-shrink-0 mt-0.5 text-destructive" />
              ) : (
                <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5 text-green-600" />
              )}
              <div>
                <p className={`text-sm font-semibold ${result.hasConflict ? "text-destructive" : "text-green-700 dark:text-green-400"}`}>
                  {result.hasConflict ? "Potential Conflict Detected" : "No Conflicts Found"}
                </p>
                <p className="mt-0.5 text-sm text-muted-foreground leading-relaxed">{result.summary}</p>
              </div>
            </CardContent>
          </Card>

          {/* Individual conflicts */}
          {result.conflicts.length > 0 && (
            <div className="space-y-2">
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                {result.conflicts.length} potential conflict{result.conflicts.length !== 1 ? "s" : ""}
              </p>
              {result.conflicts.map((c, i) => {
                const config = severityConfig[c.severity as keyof typeof severityConfig] ?? severityConfig.medium;
                const SevIcon = config.icon;
                return (
                  <Card key={i}>
                    <CardContent className="flex items-start gap-3 p-4">
                      <SevIcon className={`h-4 w-4 flex-shrink-0 mt-0.5 ${config.className}`} />
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <p className="text-sm font-medium">{c.name}</p>
                          <Badge
                            variant={c.severity === "high" ? "destructive" : "secondary"}
                            className="text-xs capitalize"
                          >
                            {config.label} Risk
                          </Badge>
                        </div>
                        <p className="mt-0.5 text-sm text-muted-foreground">{c.reason}</p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}

          <p className="text-xs text-muted-foreground border-t pt-3">
            This conflict check is AI-assisted and based on the data in your practice. Always exercise independent professional judgment before accepting a new matter. Consult your Law Society&apos;s conflict rules.
          </p>
        </div>
      )}

      {!result && !conflictCheck.isPending && (
        <div className="rounded-xl border border-dashed py-12 text-center space-y-2">
          <ShieldAlert className="h-8 w-8 mx-auto text-muted-foreground" />
          <p className="text-sm font-medium">Run a conflict check</p>
          <p className="text-xs text-muted-foreground max-w-sm mx-auto">
            Enter the name of a prospective client to check for potential conflicts against your existing clients, matters, and parties in your documents.
          </p>
        </div>
      )}
    </div>
  );
}

function SearchPageContent() {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState("");
  const [clientId, setClientId] = useState<string>(searchParams.get("clientId") ?? "");
  const [matterId, setMatterId] = useState<string>(searchParams.get("matterId") ?? "");

  useEffect(() => {
    const cid = searchParams.get("clientId");
    const mid = searchParams.get("matterId");
    if (cid) setClientId(cid);
    if (mid) setMatterId(mid);
  }, [searchParams]);
  const inputRef = useRef<HTMLInputElement>(null);

  const { data: clients } = trpc.clients.list.useQuery();
  const { data: matters } = trpc.matters.list.useQuery();
  const search = trpc.documents.search.useMutation();
  const aiAnswer = trpc.ai.answer.useMutation();

  const clientMatters = matters?.filter(m => !clientId || m.clientId === clientId);

  function handleSearch(e?: React.FormEvent) {
    e?.preventDefault();
    if (!query.trim()) return;
    aiAnswer.reset();
    search.mutate(
      {
        query: query.trim(),
        clientId: clientId || undefined,
        matterId: matterId || undefined,
        limit: 10,
      },
      {
        onSuccess: (chunks) => {
          if (chunks.length > 0) {
            aiAnswer.mutate({
              query: query.trim(),
              chunks: chunks.slice(0, 5).map(c => ({
                content: c.content,
                documentTitle: c.documentTitle,
                similarity: c.similarity,
              })),
            });
          }
        },
      }
    );
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") handleSearch();
  }

  const results = search.data ?? [];
  const hasSearched = search.isSuccess || search.isPending;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Search</h1>
        <p className="text-muted-foreground">
          Search your documents or run a conflict of interest check.
        </p>
      </div>

      <Tabs defaultValue="search">
        <TabsList>
          <TabsTrigger value="search" className="flex items-center gap-1.5">
            <Search className="h-3.5 w-3.5" />
            Document Search
          </TabsTrigger>
          <TabsTrigger value="conflicts" className="flex items-center gap-1.5">
            <ShieldAlert className="h-3.5 w-3.5" />
            Conflict Check
          </TabsTrigger>
        </TabsList>

        <TabsContent value="search" className="mt-4 space-y-6">
          {/* Search bar */}
          <form onSubmit={handleSearch} className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="e.g. What were the payment terms in the Johnson matter?"
                className="pl-9"
                autoFocus
              />
            </div>
            <Select
              value={clientId}
              onValueChange={(v) => { setClientId(v); setMatterId(""); }}
            >
              <SelectTrigger className="w-40">
                <SelectValue placeholder="All clients" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All clients</SelectItem>
                {clients?.map((c) => (
                  <SelectItem key={c.id} value={c.id}>
                    {c.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {clientMatters && clientMatters.length > 0 && (
              <Select value={matterId} onValueChange={setMatterId}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="All matters" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All matters</SelectItem>
                  {clientMatters.map((m) => (
                    <SelectItem key={m.id} value={m.id}>{m.title}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
            <Button type="submit" disabled={!query.trim() || search.isPending}>
              {search.isPending ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                "Search"
              )}
            </Button>
          </form>

          {/* Results */}
          {search.isPending && (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
            </div>
          )}

          {search.isSuccess && results.length === 0 && (
            <div className="rounded-xl border border-dashed py-12 text-center">
              <p className="text-sm font-medium">No results found</p>
              <p className="mt-1 text-xs text-muted-foreground">
                Try rephrasing your query or uploading more documents.
              </p>
            </div>
          )}

          {/* AI Answer */}
          {(aiAnswer.isPending || aiAnswer.isSuccess) && results.length > 0 && (
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="p-4 space-y-2">
                <div className="flex items-center gap-2 text-xs font-medium text-primary">
                  <Sparkles className="h-3.5 w-3.5" />
                  AI Answer
                </div>
                {aiAnswer.isPending ? (
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Loader2 className="h-3.5 w-3.5 animate-spin" />
                    Synthesizing answer…
                  </div>
                ) : (
                  <p className="text-sm leading-relaxed">{aiAnswer.data?.answer}</p>
                )}
              </CardContent>
            </Card>
          )}

          {search.isSuccess && results.length > 0 && (
            <div className="space-y-3">
              <p className="text-xs text-muted-foreground">
                {results.length} result{results.length !== 1 ? "s" : ""} for &ldquo;{query}&rdquo;
              </p>
              {results.map((result, i) => (
                <Card key={`${result.documentId}-${result.chunkIndex}-${i}`}>
                  <CardContent className="p-4">
                    <div className="mb-2 flex items-center gap-2">
                      <FileText className="h-3.5 w-3.5 flex-shrink-0 text-muted-foreground" />
                      <span className="truncate text-sm font-medium">
                        {result.documentTitle ?? "Untitled"}
                      </span>
                      <div className="ml-auto flex items-center gap-2 flex-shrink-0">
                        <Badge variant="outline" className="text-xs">
                          {documentTypeLabels[result.documentType] ?? result.documentType}
                        </Badge>
                        <span className="text-xs text-muted-foreground">
                          {Math.round(result.similarity * 100)}% match
                        </span>
                      </div>
                    </div>
                    {(result.clientId || result.matterId) && (
                      <div className="mb-2 flex items-center gap-1.5 text-xs text-muted-foreground">
                        {result.clientId && (
                          <Link href={`/clients/${result.clientId}`} className="hover:underline hover:text-foreground">
                            {clients?.find(c => c.id === result.clientId)?.name ?? "Client"}
                          </Link>
                        )}
                        {result.clientId && result.matterId && <span>›</span>}
                        {result.matterId && (
                          <Link href={`/matters/${result.matterId}`} className="hover:underline hover:text-foreground">
                            {matters?.find(m => m.id === result.matterId)?.title ?? "Matter"}
                          </Link>
                        )}
                      </div>
                    )}
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {result.content}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {!hasSearched && (
            <div className="space-y-3">
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                Try asking
              </p>
              {[
                "What are the key deadlines in recent contracts?",
                "What did we agree on regarding payment terms?",
                "Find all mentions of the Johnson property dispute",
                "What action items came out of last week's client meetings?",
              ].map((suggestion) => (
                <button
                  key={suggestion}
                  onClick={() => {
                    setQuery(suggestion);
                    inputRef.current?.focus();
                  }}
                  className="block w-full rounded-lg border border-dashed px-4 py-3 text-left text-sm text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
                >
                  &ldquo;{suggestion}&rdquo;
                </button>
              ))}
            </div>
          )}
        </TabsContent>

        <TabsContent value="conflicts" className="mt-4">
          <ConflictCheckTab />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense>
      <SearchPageContent />
    </Suspense>
  );
}
