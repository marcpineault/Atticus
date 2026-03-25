"use client";

import { useState } from "react";
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
  Menu,
  FileEdit,
  Mail,
  BarChart2,
  Scale,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { DeadlineBadge } from "./deadline-badge";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/clients", label: "Clients", icon: Users },
  { href: "/matters", label: "Matters", icon: Briefcase },
  { href: "/deadlines", label: "Deadlines", icon: AlertTriangle, badge: <DeadlineBadge /> },
  { href: "/documents", label: "Documents", icon: FileText },
  { href: "/billing", label: "Billing", icon: Clock },
  { href: "/trust", label: "Trust", icon: Scale },
  { href: "/analytics", label: "Analytics", icon: BarChart2 },
  { href: "/draft", label: "AI Draft", icon: FileEdit },
  { href: "/outbox", label: "Outbox", icon: Mail },
  { href: "/search", label: "Search", icon: Search },
  { href: "/chat", label: "Chat", icon: MessageSquare },
  { href: "/upload", label: "Upload", icon: Upload },
  { href: "/settings", label: "Settings", icon: Settings },
];

export function MobileNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-64 p-0">
        <SheetHeader className="flex h-14 items-center border-b px-6">
          <SheetTitle asChild>
            <Link href="/dashboard" className="text-lg font-semibold" onClick={() => setOpen(false)}>
              Atticus
            </Link>
          </SheetTitle>
        </SheetHeader>
        <nav className="flex-1 space-y-1 p-4">
          {navItems.map((item) => (
            <Button
              key={item.href}
              variant={pathname.startsWith(item.href) ? "secondary" : "ghost"}
              className={cn("w-full justify-start gap-2")}
              asChild
              onClick={() => setOpen(false)}
            >
              <Link href={item.href}>
                <item.icon className="h-4 w-4" />
                {item.label}
                {item.badge}
              </Link>
            </Button>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
