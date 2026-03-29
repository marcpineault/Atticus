"use client";

import { useState } from "react";
import { trpc } from "@/lib/trpc/client";
import { ClientCard } from "@/components/clients/client-card";
import { ClientForm } from "@/components/clients/client-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { Plus, Search, AlertCircle, RefreshCw, Users } from "lucide-react";

export default function ClientsPage() {
  const [search, setSearch] = useState("");
  const { data: clients, isLoading, error, refetch } = trpc.clients.listWithStats.useQuery();

  const filtered = clients?.filter((c) => {
    if (!search.trim()) return true;
    const q = search.toLowerCase();
    return (
      c.name.toLowerCase().includes(q) ||
      (c.company ?? "").toLowerCase().includes(q) ||
      (c.email ?? "").toLowerCase().includes(q)
    );
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Clients</h1>
          <p className="text-muted-foreground">Manage your client relationships.</p>
        </div>
        <ClientForm
          trigger={
            <Button>
              <Plus className="h-4 w-4" />
              Add Client
            </Button>
          }
        />
      </div>

      {isLoading && (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="rounded-lg border p-5 space-y-3">
              <div className="flex items-center gap-3">
                <Skeleton className="h-10 w-10 rounded-full" />
                <div className="space-y-1.5 flex-1">
                  <Skeleton className="h-4 w-32" />
                  <Skeleton className="h-3 w-24" />
                </div>
              </div>
              <Skeleton className="h-3 w-full" />
              <Skeleton className="h-3 w-3/4" />
            </div>
          ))}
        </div>
      )}

      {error && (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-destructive/10">
            <AlertCircle className="h-6 w-6 text-destructive" />
          </div>
          <h3 className="mt-4 text-base font-semibold">Failed to load clients</h3>
          <p className="mt-1 max-w-sm text-sm text-muted-foreground">
            Something went wrong while fetching your clients. Please try again.
          </p>
          <Button className="mt-4" variant="outline" onClick={() => refetch()}>
            <RefreshCw className="mr-2 h-4 w-4" /> Try Again
          </Button>
        </div>
      )}

      {!isLoading && !error && clients && clients.length > 0 && (
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search clients by name, company, or email…"
            className="pl-9"
          />
        </div>
      )}

      {!isLoading && !error && filtered && filtered.length === 0 && (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted">
            <Users className="h-8 w-8 text-muted-foreground" />
          </div>
          <h3 className="mt-4 text-base font-semibold">
            {search ? "No clients match your search" : "No clients yet"}
          </h3>
          <p className="mt-1 max-w-sm text-sm text-muted-foreground">
            {search ? "Try a different search term." : "Add your first client to get started."}
          </p>
          {!search && (
            <ClientForm
              trigger={
                <Button className="mt-6">
                  <Plus className="mr-2 h-4 w-4" /> Add Client
                </Button>
              }
            />
          )}
        </div>
      )}

      {!isLoading && !error && filtered && filtered.length > 0 && (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((client) => (
            <ClientCard key={client.id} client={client} />
          ))}
        </div>
      )}
    </div>
  );
}
