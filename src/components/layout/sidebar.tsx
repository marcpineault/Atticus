"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Users,
  Briefcase,
  MessageSquare,
  Upload,
  Settings,
  Search,
  FileText,
  AlertTriangle,
  Clock,
  FileEdit,
  Mail,
  BarChart2,
  Scale,
  ShieldCheck,
  Target,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { DeadlineBadge } from "./deadline-badge";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/clients", label: "Clients", icon: Users },
  { href: "/matters", label: "Matters", icon: Briefcase },
  { href: "/deadlines", label: "Deadlines", icon: AlertTriangle, badge: <DeadlineBadge /> },
  { href: "/documents", label: "Documents", icon: FileText },
  { href: "/billing", label: "Billing", icon: Clock },
  { href: "/trust", label: "Trust", icon: Scale },
  { href: "/prospects", label: "Prospects", icon: Target },
  { href: "/outreach", label: "Outreach", icon: Send },
  { href: "/conflicts", label: "Conflict Check", icon: ShieldCheck },
  { href: "/analytics", label: "Analytics", icon: BarChart2 },
  { href: "/draft", label: "AI Draft", icon: FileEdit },
  { href: "/outbox", label: "Outbox", icon: Mail },
  { href: "/search", label: "Search", icon: Search },
  { href: "/chat", label: "Chat", icon: MessageSquare },
  { href: "/upload", label: "Upload", icon: Upload },
  { href: "/settings", label: "Settings", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-full w-64 flex-col border-r bg-background">
      <div className="flex h-14 items-center border-b px-6">
        <Link href="/dashboard" className="text-lg font-semibold">
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
