"use client";

import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface DeadlineItem {
  id: string;
  value: string;
  type: string;
  dueDate: Date | string | null;
  clientName: string | null;
  resolved: boolean | null;
}

interface DeadlineCalendarProps {
  items: DeadlineItem[];
  onItemClick?: (item: DeadlineItem) => void;
}

function getMonthDays(year: number, month: number) {
  const firstDay = new Date(year, month, 1).getDay(); // 0=Sun
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  return { firstDay, daysInMonth };
}

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];

export function DeadlineCalendar({ items, onItemClick }: DeadlineCalendarProps) {
  const today = new Date();
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());

  const { firstDay, daysInMonth } = getMonthDays(year, month);

  // Index items by date string "YYYY-MM-DD"
  const itemsByDate = useMemo(() => {
    const map = new Map<string, DeadlineItem[]>();
    for (const item of items) {
      if (!item.dueDate || item.resolved === true) continue;
      const d = new Date(item.dueDate);
      const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
      if (!map.has(key)) map.set(key, []);
      map.get(key)!.push(item);
    }
    return map;
  }, [items]);

  const prevMonth = () => {
    if (month === 0) { setMonth(11); setYear(y => y - 1); }
    else setMonth(m => m - 1);
  };

  const nextMonth = () => {
    if (month === 11) { setMonth(0); setYear(y => y + 1); }
    else setMonth(m => m + 1);
  };

  const todayStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;

  const cells = [];
  // Leading empty cells
  for (let i = 0; i < firstDay; i++) {
    cells.push(null);
  }
  // Day cells
  for (let d = 1; d <= daysInMonth; d++) {
    const key = `${year}-${String(month + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
    cells.push({ day: d, key, items: itemsByDate.get(key) ?? [] });
  }

  return (
    <div className="space-y-3">
      {/* Month navigation */}
      <div className="flex items-center justify-between">
        <Button variant="ghost" size="sm" onClick={prevMonth}>
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <h3 className="text-sm font-semibold">{MONTHS[month]} {year}</h3>
        <Button variant="ghost" size="sm" onClick={nextMonth}>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Day headers */}
      <div className="grid grid-cols-7 gap-px text-center">
        {DAYS.map(d => (
          <div key={d} className="py-1 text-xs font-medium text-muted-foreground">{d}</div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-px rounded-lg overflow-hidden border bg-border">
        {cells.map((cell, idx) => {
          if (!cell) {
            return <div key={`empty-${idx}`} className="bg-background min-h-[80px] p-1" />;
          }

          const isToday = cell.key === todayStr;
          const isPast = new Date(cell.key) < new Date(todayStr) && cell.key !== todayStr;
          const hasOverdue = isPast && cell.items.length > 0;

          return (
            <div
              key={cell.key}
              className={cn(
                "bg-background min-h-[80px] p-1 relative",
                isToday && "bg-primary/5",
              )}
            >
              <div className={cn(
                "text-xs font-medium mb-1 w-6 h-6 flex items-center justify-center rounded-full",
                isToday && "bg-primary text-primary-foreground",
                !isToday && isPast && "text-muted-foreground",
                !isToday && !isPast && "text-foreground",
              )}>
                {cell.day}
              </div>

              <div className="space-y-0.5">
                {cell.items.slice(0, 3).map(item => (
                  <button
                    key={item.id}
                    className={cn(
                      "w-full text-left rounded px-1 py-0.5 text-[10px] leading-tight truncate",
                      item.type === "deadline"
                        ? hasOverdue
                          ? "bg-red-100 text-red-700 hover:bg-red-200"
                          : "bg-orange-100 text-orange-700 hover:bg-orange-200"
                        : "bg-blue-100 text-blue-700 hover:bg-blue-200"
                    )}
                    onClick={() => onItemClick?.(item)}
                    title={`${item.value}${item.clientName ? ` — ${item.clientName}` : ""}`}
                  >
                    {item.value}
                  </button>
                ))}
                {cell.items.length > 3 && (
                  <div className="text-[10px] text-muted-foreground px-1">+{cell.items.length - 3} more</div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex items-center gap-4 text-xs text-muted-foreground">
        <span className="flex items-center gap-1"><span className="h-2 w-2 rounded bg-orange-200" />Deadline</span>
        <span className="flex items-center gap-1"><span className="h-2 w-2 rounded bg-blue-200" />Action Item</span>
        <span className="flex items-center gap-1"><span className="h-2 w-2 rounded bg-red-200" />Overdue</span>
      </div>
    </div>
  );
}
