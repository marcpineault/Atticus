"use client";

import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CommandPaletteTrigger() {
  function openPalette() {
    // Dispatch a synthetic keyboard event to trigger the command palette
    const event = new KeyboardEvent("keydown", {
      key: "k",
      metaKey: true,
      bubbles: true,
    });
    window.dispatchEvent(event);
  }

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={openPalette}
      className="hidden sm:flex items-center gap-2 text-sm text-muted-foreground"
    >
      <Search className="h-3.5 w-3.5" />
      <span>Search…</span>
      <kbd className="ml-1 hidden lg:flex h-4 items-center gap-0.5 rounded border bg-muted px-1 text-[10px]">
        ⌘K
      </kbd>
    </Button>
  );
}
