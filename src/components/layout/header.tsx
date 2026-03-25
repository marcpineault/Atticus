import { UserButton } from "@clerk/nextjs";
import { ProcessingIndicator } from "./processing-indicator";
import { MobileNav } from "./mobile-nav";
import { CommandPalette } from "./command-palette";
import { CommandPaletteTrigger } from "./command-palette-trigger";
import { GlobalLogTime } from "@/components/time/global-log-time";
import { NotificationBell } from "./notification-bell";

export function Header() {
  return (
    <header className="flex h-14 items-center justify-between border-b px-4 lg:px-6">
      <div className="flex items-center gap-3">
        <MobileNav />
        <ProcessingIndicator />
      </div>
      <div className="flex items-center gap-3">
        <GlobalLogTime />
        <NotificationBell />
        <CommandPaletteTrigger />
        <CommandPalette />
        <UserButton />
      </div>
    </header>
  );
}
