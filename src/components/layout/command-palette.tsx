"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { trpc } from "@/lib/trpc/client";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import {
  Users,
  Briefcase,
  LayoutDashboard,
  FileText,
  AlertTriangle,
  Clock,
  Search,
  Upload,
  Settings,
  BarChart2,
  FileEdit,
  Mail,
  MessageSquare,
  Scale,
  ShieldCheck,
} from "lucide-react";

const PAGES = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Clients", href: "/clients", icon: Users },
  { label: "Matters", href: "/matters", icon: Briefcase },
  { label: "Deadlines", href: "/deadlines", icon: AlertTriangle },
  { label: "Documents", href: "/documents", icon: FileText },
  { label: "Billing", href: "/billing", icon: Clock },
  { label: "Trust Account", href: "/trust", icon: Scale },
  { label: "Conflict Check", href: "/conflicts", icon: ShieldCheck },
  { label: "Analytics", href: "/analytics", icon: BarChart2 },
  { label: "AI Draft", href: "/draft", icon: FileEdit },
  { label: "Outbox", href: "/outbox", icon: Mail },
  { label: "Search", href: "/search", icon: Search },
  { label: "Chat", href: "/chat", icon: MessageSquare },
  { label: "Upload", href: "/upload", icon: Upload },
  { label: "Settings", href: "/settings", icon: Settings },
];

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const { data: clients } = trpc.clients.list.useQuery(undefined, { enabled: open });
  const { data: matters } = trpc.matters.listWithStats.useQuery(undefined, { enabled: open });

  const toggle = useCallback(() => setOpen((o) => !o), []);

  useEffect(() => {
    function handleKeydown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        toggle();
      }
    }
    document.addEventListener("keydown", handleKeydown);
    return () => document.removeEventListener("keydown", handleKeydown);
  }, [toggle]);

  function navigate(href: string) {
    router.push(href);
    setOpen(false);
  }

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Search clients, matters, or navigate…" />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>

        {clients && clients.length > 0 && (
          <CommandGroup heading="Clients">
            {clients.slice(0, 6).map((c) => (
              <CommandItem
                key={c.id}
                value={"client-" + c.name + "-" + (c.company ?? "")}
                onSelect={() => navigate("/clients/" + c.id)}
              >
                <Users className="mr-2 h-4 w-4 text-muted-foreground" />
                <span>{c.name}</span>
                {c.company && (
                  <span className="ml-1.5 text-xs text-muted-foreground">— {c.company}</span>
                )}
              </CommandItem>
            ))}
          </CommandGroup>
        )}

        {matters && matters.length > 0 && (
          <CommandGroup heading="Matters">
            {matters.slice(0, 6).map((m) => (
              <CommandItem
                key={m.id}
                value={"matter-" + m.title}
                onSelect={() => navigate("/matters/" + m.id)}
              >
                <Briefcase className="mr-2 h-4 w-4 text-muted-foreground" />
                <span>{m.title}</span>
              </CommandItem>
            ))}
          </CommandGroup>
        )}

        <CommandSeparator />

        <CommandGroup heading="Navigate">
          {PAGES.map((p) => (
            <CommandItem
              key={p.href}
              value={"page-" + p.label}
              onSelect={() => navigate(p.href)}
            >
              <p.icon className="mr-2 h-4 w-4 text-muted-foreground" />
              {p.label}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
