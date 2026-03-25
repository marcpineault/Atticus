"use client";

import { trpc } from "@/lib/trpc/client";

export function DeadlineBadge() {
  const { data: deadlines } = trpc.documents.listDeadlines.useQuery(
    { showResolved: false },
    { staleTime: 60_000 }
  );

  const count = deadlines?.length ?? 0;
  if (count === 0) return null;

  return (
    <span className="ml-auto flex h-4 min-w-4 items-center justify-center rounded-full bg-destructive px-1 text-[10px] font-semibold text-destructive-foreground">
      {count > 99 ? "99+" : count}
    </span>
  );
}
