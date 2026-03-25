"use client";

import { useState } from "react";
import Link from "next/link";
import { trpc } from "@/lib/trpc/client";
import { Bell, AlertTriangle, Clock } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { cn } from "@/lib/utils";

export function NotificationBell() {
  const [open, setOpen] = useState(false);
  const { data: items } = trpc.documents.listDeadlines.useQuery({ showResolved: false });

  const now = new Date();
  const todayEnd = new Date(now);
  todayEnd.setHours(23, 59, 59, 999);
  const sevenDaysEnd = new Date(now);
  sevenDaysEnd.setDate(sevenDaysEnd.getDate() + 7);

  const overdue = (items ?? []).filter(
    (d) => d.dueDate && new Date(d.dueDate) < now && !d.resolved
  );
  const today = (items ?? []).filter(
    (d) => d.dueDate && new Date(d.dueDate) >= now && new Date(d.dueDate) <= todayEnd && !d.resolved
  );
  const upcoming = (items ?? []).filter(
    (d) => d.dueDate && new Date(d.dueDate) > todayEnd && new Date(d.dueDate) <= sevenDaysEnd && !d.resolved
  );

  const urgentCount = overdue.length + today.length;

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          className="relative flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
          aria-label="Notifications"
        >
          <Bell className="h-4 w-4" />
          {urgentCount > 0 && (
            <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-destructive text-[10px] font-semibold text-destructive-foreground">
              {urgentCount > 9 ? "9+" : urgentCount}
            </span>
          )}
        </button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-80 p-0">
        <div className="border-b px-4 py-3">
          <p className="text-sm font-semibold">Upcoming Deadlines</p>
        </div>
        <div className="max-h-80 overflow-y-auto">
          {overdue.length === 0 && today.length === 0 && upcoming.length === 0 ? (
            <div className="flex flex-col items-center justify-center gap-1 py-8">
              <Bell className="h-6 w-6 text-muted-foreground/40" />
              <p className="text-sm text-muted-foreground">All clear — nothing urgent</p>
            </div>
          ) : (
            <>
              {overdue.length > 0 && (
                <div>
                  <p className="bg-destructive/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-destructive">
                    Overdue · {overdue.length}
                  </p>
                  {overdue.slice(0, 5).map((d) => (
                    <NotifItem key={d.id} item={d} urgency="overdue" onClose={() => setOpen(false)} />
                  ))}
                </div>
              )}
              {today.length > 0 && (
                <div>
                  <p className="bg-amber-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-amber-700 dark:bg-amber-950/30 dark:text-amber-400">
                    Due Today · {today.length}
                  </p>
                  {today.slice(0, 5).map((d) => (
                    <NotifItem key={d.id} item={d} urgency="today" onClose={() => setOpen(false)} />
                  ))}
                </div>
              )}
              {upcoming.length > 0 && (
                <div>
                  <p className="px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    This Week · {upcoming.length}
                  </p>
                  {upcoming.slice(0, 5).map((d) => (
                    <NotifItem key={d.id} item={d} urgency="upcoming" onClose={() => setOpen(false)} />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
        <div className="border-t px-4 py-2">
          <Link
            href="/deadlines"
            onClick={() => setOpen(false)}
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            View all deadlines →
          </Link>
        </div>
      </PopoverContent>
    </Popover>
  );
}

interface NotifItemProps {
  item: {
    id: string;
    value: string;
    type: string;
    dueDate?: Date | string | null;
    clientName?: string | null;
    clientId?: string | null;
  };
  urgency: "overdue" | "today" | "upcoming";
  onClose: () => void;
}

function NotifItem({ item, urgency, onClose }: NotifItemProps) {
  const daysLabel = item.dueDate
    ? (() => {
        const d = new Date(item.dueDate);
        const diff = Math.ceil((d.getTime() - Date.now()) / 86400000);
        if (diff < 0) return `${Math.abs(diff)}d overdue`;
        if (diff === 0) return "today";
        return `in ${diff}d`;
      })()
    : null;

  return (
    <Link
      href="/deadlines"
      onClick={onClose}
      className="flex items-start gap-3 px-4 py-2.5 hover:bg-accent/50 transition-colors"
    >
      <div className="mt-0.5 flex-shrink-0">
        {urgency === "overdue" ? (
          <AlertTriangle className="h-3.5 w-3.5 text-destructive" />
        ) : (
          <Clock className={cn("h-3.5 w-3.5", urgency === "today" ? "text-amber-500" : "text-muted-foreground")} />
        )}
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate text-xs font-medium leading-snug">{item.value}</p>
        <div className="mt-0.5 flex items-center gap-1.5">
          {item.clientName && (
            <span className="text-xs text-muted-foreground truncate">{item.clientName}</span>
          )}
          {daysLabel && (
            <span
              className={cn(
                "text-xs font-medium",
                urgency === "overdue" ? "text-destructive" : urgency === "today" ? "text-amber-600" : "text-muted-foreground"
              )}
            >
              {item.clientName ? "·" : ""} {daysLabel}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
