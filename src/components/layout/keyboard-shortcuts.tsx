"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

const GOTO_SHORTCUTS: Record<string, string> = {
  d: "/dashboard",
  c: "/clients",
  m: "/matters",
  l: "/deadlines",     // l for "liabilities"/deadlines
  t: "/trust",
  b: "/billing",
  a: "/analytics",
  s: "/search",
  h: "/chat",          // h for Atticus "assistant/help"
  u: "/upload",
  o: "/outbox",
  x: "/conflicts",     // x for conflict check
  "/": "/settings",
};

/**
 * Global keyboard shortcuts:
 * - g + [key]: navigate to page (vim-style "goto")
 * - ? : open shortcuts help (future)
 */
export function KeyboardShortcuts() {
  const router = useRouter();
  const gPressed = useRef(false);
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    function handleKeydown(e: KeyboardEvent) {
      // Ignore if focused in an input/textarea/select/contenteditable
      const target = e.target as HTMLElement;
      if (
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.tagName === "SELECT" ||
        target.isContentEditable
      ) {
        return;
      }

      // Ignore if modifier keys are held (except shift)
      if (e.metaKey || e.ctrlKey || e.altKey) return;

      if (gPressed.current) {
        // We're in "goto" mode
        gPressed.current = false;
        if (timeout.current) clearTimeout(timeout.current);

        const key = e.key.toLowerCase();
        const destination = GOTO_SHORTCUTS[key];
        if (destination) {
          e.preventDefault();
          router.push(destination);
        }
        return;
      }

      if (e.key === "g") {
        e.preventDefault();
        gPressed.current = true;
        // Auto-reset after 1.5s if no second key
        timeout.current = setTimeout(() => {
          gPressed.current = false;
        }, 1500);
        return;
      }

      // ? — show shortcuts help (we'll just open the command palette via custom event)
      if (e.key === "?") {
        // dispatch synthetic ctrl+k to open command palette
        document.dispatchEvent(new KeyboardEvent("keydown", {
          key: "k",
          ctrlKey: true,
          bubbles: true,
        }));
      }
    }

    window.addEventListener("keydown", handleKeydown);
    return () => {
      window.removeEventListener("keydown", handleKeydown);
      if (timeout.current) clearTimeout(timeout.current);
    };
  }, [router]);

  return null;
}
