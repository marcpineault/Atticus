"use client";

import { useState } from "react";
import { trpc } from "@/lib/trpc/client";
import { ClientCard } from "@/components/clients/client-card";
import { ClientForm } from "@/components/clients/client-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Loader2, Search } from "lucide-react";

export default function ClientsPage() {
  const [search, setSearch] = useState("");
  const { data: clients, isLoading, error } = trpc.clients.listWithStats.useQuery();

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
        <div className="flex items-center justify-center py-12">
          <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
        </div>
      )}

      {error && (
        <p className="text-sm text-destructive">
          Failed to load clients: {error.message}
        </p>
      )}

      {clients && clients.length > 0 && (
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

      {filtered && filtered.length === 0 && !isLoading && (
        <div className="flex flex-col items-center justify-center rounded-xl border border-dashed py-16 text-center">
          <p className="text-sm font-medium">
            {search ? "No clients match your search" : "No clients yet"}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            {search ? "Try a different search term." : "Add your first client to get started."}
          </p>
        </div>
      )}

      {filtered && filtered.length > 0 && (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((client) => (
            <ClientCard key={client.id} client={client} />
          ))}
        </div>
      )}
    </div>
  );
}
