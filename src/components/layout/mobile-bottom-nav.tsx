"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Users, Briefcase, AlertTriangle, MessageSquare } from "lucide-react";
import { trpc } from "@/lib/trpc/client";

const items = [
  { href: "/dashboard", label: "Home", icon: LayoutDashboard },
  { href: "/clients", label: "Clients", icon: Users },
  { href: "/matters", label: "Matters", icon: Briefcase },
  { href: "/deadlines", label: "Deadlines", icon: AlertTriangle },
  { href: "/chat", label: "Atticus", icon: MessageSquare },
] as const;

export function MobileBottomNav() {
  const pathname = usePathname();
  const { data: deadlines } = trpc.documents.listDeadlines.useQuery({ showResolved: false });
  const urgentCount = (deadlines ?? []).filter(d => {
    if (!d.dueDate || d.resolved) return false;
    return new Date(d.dueDate) <= new Date(Date.now() + 7 * 86400000);
  }).length;

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-30 border-t bg-background lg:hidden">
      <div className="flex h-16 items-stretch">
        {items.map((item) => {
          const active = pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`relative flex flex-1 flex-col items-center justify-center gap-0.5 text-[10px] font-medium transition-colors ${
                active ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <div className="relative">
                <item.icon className="h-5 w-5" />
                {item.href === "/deadlines" && urgentCount > 0 && (
                  <span className="absolute -right-2 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-destructive px-1 text-[9px] font-bold text-destructive-foreground">
                    {urgentCount > 9 ? "9+" : urgentCount}
                  </span>
                )}
              </div>
              <span>{item.label}</span>
              {active && (
                <span className="absolute top-0 left-1/2 -translate-x-1/2 h-0.5 w-8 rounded-full bg-primary" />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
