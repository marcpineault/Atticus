"use client";

import { useState, useRef } from "react";
import { trpc } from "@/lib/trpc/client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import {
  ShieldCheck,
  ShieldAlert,
  Search,
  User,
  Briefcase,
  Users,
  Loader2,
  FileText,
  Sparkles,
} from "lucide-react";

const severityColors = {
  high: "border-destructive bg-destructive/5 text-destructive",
  medium: "border-orange-500/40 bg-orange-500/5 text-orange-700",
  low: "border-yellow-500/40 bg-yellow-500/5 text-yellow-700",
  none: "border-green-500/40 bg-green-500/5 text-green-700",
};

export default function ConflictsPage() {
  const [input, setInput] = useState("");
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const { data, isLoading, isFetching } = trpc.conflicts.check.useQuery(
    { query },
    { enabled: query.length >= 2 }
  );

  const aiAnalyze = trpc.conflicts.aiAnalyze.useMutation();

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = input.trim();
    if (trimmed.length >= 2) {
      setQuery(trimmed);
      aiAnalyze.reset();
    }
  }

  function handleAiAnalyze() {
    if (!data || data.total === 0) return;
    aiAnalyze.mutate({
      prospectiveName: data.query,
      matchedClients: data.clients.map(c => ({
        name: c.name ?? "",
        company: c.company ?? null,
        matters: c.matters.map(m => ({ title: m.title, status: m.status })),
      })),
      matchedMatters: data.matters.map(m => ({ title: m.title, status: m.status })),
      matchedPeople: data.people.map(p => ({ value: p.value, context: p.context ?? null })),
    });
  }

  const hasResults = data && data.total > 0;
  const searched = query.length >= 2;

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Conflict of Interest Check</h1>
        <p className="text-muted-foreground text-sm mt-1">
          Search your existing clients, matters, and document parties before taking on a new client or matter.
        </p>
      </div>

      {/* Search form */}
      <form onSubmit={handleSearch} className="flex gap-2">
        <Input
          ref={inputRef}
          placeholder="Search by name or company…"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1"
          autoFocus
        />
        <Button type="submit" disabled={input.trim().length < 2 || isLoading || isFetching}>
          {isLoading || isFetching ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Search className="h-4 w-4" />
          )}
          <span className="ml-1.5">Check</span>
        </Button>
      </form>

      {/* Results */}
      {searched && !isLoading && !isFetching && data && (
        <>
          {/* Status banner */}
          <div
            className={`flex items-center gap-3 rounded-lg border px-4 py-3 ${
              hasResults
                ? "border-destructive/40 bg-destructive/5 text-destructive"
                : "border-green-500/40 bg-green-500/5 text-green-700"
            }`}
          >
            {hasResults ? (
              <ShieldAlert className="h-5 w-5 flex-shrink-0" />
            ) : (
              <ShieldCheck className="h-5 w-5 flex-shrink-0" />
            )}
            <div>
              {hasResults ? (
                <>
                  <p className="font-semibold text-sm">Potential conflict detected</p>
                  <p className="text-xs mt-0.5 opacity-80">
                    &ldquo;{data.query}&rdquo; matched {data.total} record{data.total !== 1 ? "s" : ""}. Review before proceeding.
                  </p>
                </>
              ) : (
                <>
                  <p className="font-semibold text-sm">No conflicts found</p>
                  <p className="text-xs mt-0.5 opacity-80">
                    &ldquo;{data.query}&rdquo; does not appear in your existing clients, matters, or document parties.
                  </p>
                </>
              )}
            </div>
          </div>

          {/* AI Analysis */}
          {hasResults && (
            <div className="space-y-2">
              {!aiAnalyze.data && !aiAnalyze.isPending && (
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-dashed gap-1.5"
                  onClick={handleAiAnalyze}
                >
                  <Sparkles className="h-3.5 w-3.5 text-primary" />
                  AI Conflict Analysis — severity rating & explanation
                </Button>
              )}
              {aiAnalyze.isPending && (
                <div className="flex items-center gap-2 text-xs text-muted-foreground p-3 border rounded-lg border-dashed">
                  <Loader2 className="h-3.5 w-3.5 animate-spin" />
                  Analyzing conflict risk with AI…
                </div>
              )}
              {aiAnalyze.data && (
                <div className={`rounded-lg border p-4 space-y-2 ${severityColors[aiAnalyze.data.severity]}`}>
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 flex-shrink-0" />
                    <span className="text-xs font-semibold uppercase tracking-wide">
                      AI Assessment — {aiAnalyze.data.severity.toUpperCase()} severity
                    </span>
                  </div>
                  <p className="text-sm">{aiAnalyze.data.summary}</p>
                  {aiAnalyze.data.reasons.length > 0 && (
                    <ul className="text-xs space-y-0.5 list-disc ml-4">
                      {aiAnalyze.data.reasons.map((r, i) => <li key={i}>{r}</li>)}
                    </ul>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Client matches */}
          {data.clients.length > 0 && (
            <section>
              <div className="flex items-center gap-2 mb-2">
                <Users className="h-4 w-4 text-muted-foreground" />
                <h2 className="text-sm font-semibold">Existing Clients</h2>
                <Badge variant="destructive" className="ml-auto text-xs">{data.clients.length}</Badge>
              </div>
              <div className="space-y-2">
                {data.clients.map((c) => (
                  <Card key={c.id} className="border-destructive/20">
                    <CardContent className="p-3">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="text-sm font-medium">{c.name}</p>
                          {c.company && (
                            <p className="text-xs text-muted-foreground">{c.company}</p>
                          )}
                          {c.email && (
                            <p className="text-xs text-muted-foreground">{c.email}</p>
                          )}
                          {c.matters.length > 0 && (
                            <div className="mt-1.5 flex flex-wrap gap-1">
                              {c.matters.map((m) => (
                                <Link key={m.id} href={`/matters/${m.id}`}>
                                  <Badge variant="outline" className="text-xs cursor-pointer hover:bg-muted">
                                    <Briefcase className="h-2.5 w-2.5 mr-1" />
                                    {m.title}
                                  </Badge>
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                        <Link href={`/clients/${c.id}`}>
                          <Button variant="ghost" size="sm" className="text-xs h-7">View</Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          )}

          {/* Matter matches */}
          {data.matters.length > 0 && (
            <section>
              <div className="flex items-center gap-2 mb-2">
                <Briefcase className="h-4 w-4 text-muted-foreground" />
                <h2 className="text-sm font-semibold">Matters</h2>
                <Badge variant="destructive" className="ml-auto text-xs">{data.matters.length}</Badge>
              </div>
              <div className="space-y-2">
                {data.matters.map((m) => (
                  <Card key={m.id} className="border-destructive/20">
                    <CardContent className="flex items-center justify-between p-3">
                      <div>
                        <p className="text-sm font-medium">{m.title}</p>
                        <Badge variant="secondary" className="text-xs mt-1 capitalize">{m.status}</Badge>
                      </div>
                      <Link href={`/matters/${m.id}`}>
                        <Button variant="ghost" size="sm" className="text-xs h-7">View</Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          )}

          {/* People extracted from documents */}
          {data.people.length > 0 && (
            <section>
              <div className="flex items-center gap-2 mb-2">
                <FileText className="h-4 w-4 text-muted-foreground" />
                <h2 className="text-sm font-semibold">Document Parties</h2>
                <Badge variant="destructive" className="ml-auto text-xs">{data.people.length}</Badge>
              </div>
              <p className="text-xs text-muted-foreground mb-2">
                These names were extracted from documents in your practice.
              </p>
              <div className="space-y-2">
                {data.people.map((p) => (
                  <Card key={p.id} className="border-destructive/20">
                    <CardContent className="p-3">
                      <div className="flex items-start gap-2">
                        <User className="h-3.5 w-3.5 flex-shrink-0 mt-0.5 text-muted-foreground" />
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-medium">{p.value}</p>
                          {p.context && (
                            <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">{p.context}</p>
                          )}
                          {p.matterId && (
                            <Link href={`/matters/${p.matterId}`}>
                              <Badge variant="outline" className="text-xs mt-1 cursor-pointer hover:bg-muted">
                                <Briefcase className="h-2.5 w-2.5 mr-1" />
                                View matter
                              </Badge>
                            </Link>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          )}
        </>
      )}

      {/* Empty / instructions state */}
      {!searched && (
        <div className="rounded-xl border border-dashed py-16 text-center text-muted-foreground">
          <ShieldCheck className="h-8 w-8 mx-auto mb-3 text-muted-foreground/50" />
          <p className="text-sm font-medium">Enter a name to check for conflicts</p>
          <p className="text-xs mt-1">
            Search by client name, company name, or any party that appears in your documents.
          </p>
        </div>
      )}

      <div className="rounded-lg border border-dashed p-4 text-xs text-muted-foreground space-y-1">
        <p className="font-medium">Law Society of Ontario — Conflict of Interest</p>
        <p>
          Rule 3.4 of the Rules of Professional Conduct requires lawyers to check for conflicts before accepting a new client or matter.
          This tool searches your existing client database and document parties to assist with that obligation.
          Always exercise professional judgment.
        </p>
      </div>
    </div>
  );
}
