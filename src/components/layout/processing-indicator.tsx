"use client";

import { trpc } from "@/lib/trpc/client";
import { Loader2 } from "lucide-react";

export function ProcessingIndicator() {
  const { data: documents } = trpc.documents.list.useQuery(undefined, {
    refetchInterval: (query) => {
      const data = query.state.data;
      const hasProcessing = data?.some(
        (d) => d.status === "pending" || d.status === "processing"
      );
      return hasProcessing ? 4000 : 30000;
    },
  });

  const processingCount =
    documents?.filter(
      (d) => d.status === "pending" || d.status === "processing"
    ).length ?? 0;

  if (processingCount === 0) return null;

  return (
    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
      <Loader2 className="h-3.5 w-3.5 animate-spin" />
      <span>
        Processing {processingCount} document{processingCount !== 1 ? "s" : ""}
      </span>
    </div>
  );
}
