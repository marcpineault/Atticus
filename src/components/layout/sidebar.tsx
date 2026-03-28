"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Sun,
  Users,
  Briefcase,
  FileText,
  AlertTriangle,
  FileEdit,
  Receipt,
  Settings,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { DeadlineBadge } from "./deadline-badge";

const navItems = [
  { href: "/today", label: "Today", icon: Sun },
  { href: "/clients", label: "Clients", icon: Users },
  { href: "/matters", label: "Matters", icon: Briefcase },
  { href: "/documents", label: "Documents", icon: FileText },
  { href: "/deadlines", label: "Deadlines", icon: AlertTriangle, badge: <DeadlineBadge /> },
  { href: "/draft", label: "Drafts", icon: FileEdit },
  { href: "/billing", label: "Invoices", icon: Receipt },
  { href: "/settings", label: "Settings", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-full w-64 flex-col border-r bg-background">
      <div className="flex h-14 items-center border-b px-6">
        <Link href="/today" className="text-lg font-semibold">
          Atticus
        </Link>
      </div>
      <nav className="flex-1 space-y-1 p-4">
        {navItems.map((item) => (
          <Button
            key={item.href}
            variant={pathname.startsWith(item.href) ? "secondary" : "ghost"}
            className={cn("w-full justify-start gap-2")}
            asChild
          >
            <Link href={item.href}>
              <item.icon className="h-4 w-4" />
              {item.label}
              {item.badge}
            </Link>
          </Button>
        ))}
      </nav>
    </aside>
  );
}
