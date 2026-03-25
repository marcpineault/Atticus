"use client";

import { type UIMessage } from "ai";
import ReactMarkdown from "react-markdown";
import { cn } from "@/lib/utils";
import { Scale, Briefcase, Clock, Search, CheckCircle2, Timer, Circle, StickyNote } from "lucide-react";

const GENERAL_SUGGESTIONS = [
  { icon: Scale, text: "What are the most urgent deadlines across all my matters?" },
  { icon: Briefcase, text: "Which clients have active matters with no recent activity?" },
  { icon: Clock, text: "How many billable hours have I logged this month?" },
  { icon: Search, text: "Summarize recent action items from this week's documents." },
];

interface MessageListProps {
  messages: UIMessage[];
  clientName?: string;
  onSuggestion?: (text: string) => void;
}

export function MessageList({ messages, clientName, onSuggestion }: MessageListProps) {
  if (messages.length === 0) {
    const clientSuggestions = clientName ? [
      `What are the open deadlines for ${clientName}?`,
      `Summarize all documents for ${clientName}.`,
      `What action items are outstanding for ${clientName}?`,
      `What payment amounts have been mentioned in ${clientName}'s files?`,
    ] : null;

    return (
      <div className="flex flex-1 flex-col items-center justify-center gap-6 py-8 px-4">
        <div className="text-center space-y-1">
          <p className="text-base font-semibold">
            {clientName ? `Ask anything about ${clientName}` : "How can I help you today?"}
          </p>
          <p className="text-sm text-muted-foreground">
            {clientName
              ? "I have access to all documents, deadlines, and history for this client."
              : "I have full context of your practice — clients, matters, documents, and deadlines."}
          </p>
        </div>
        {onSuggestion && (
          <div className="w-full max-w-lg space-y-2">
            {clientSuggestions ? clientSuggestions.map((s) => (
              <button
                key={s}
                onClick={() => onSuggestion(s)}
                className="block w-full rounded-lg border border-dashed px-4 py-3 text-left text-sm text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
              >
                {s}
              </button>
            )) : GENERAL_SUGGESTIONS.map(({ icon: Icon, text }) => (
              <button
                key={text}
                onClick={() => onSuggestion(text)}
                className="flex items-center gap-3 w-full rounded-lg border border-dashed px-4 py-3 text-left text-sm text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
              >
                <Icon className="h-4 w-4 flex-shrink-0" />
                {text}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 py-4">
      {messages.map((message) => {
        const isUser = message.role === "user";

        // Extract text parts and tool result parts
        const textParts = message.parts.filter(
          (p): p is { type: "text"; text: string } => p.type === "text"
        );
        const toolResults = (message.parts.filter(
          (p) => p.type === "tool-result"
        ) as unknown) as Array<{ type: "tool-result"; toolCallId: string; toolName: string; output: unknown }>;

        const textContent = textParts.map((p) => p.text).join("");

        if (!textContent && toolResults.length === 0) return null;

        return (
          <div
            key={message.id}
            className={cn(
              "flex w-full flex-col gap-2",
              isUser ? "items-end" : "items-start"
            )}
          >
            {/* Tool result confirmation cards (for assistant messages) */}
            {!isUser && toolResults.map((tr) => {
              const out = (tr.output ?? {}) as Record<string, string | null | undefined>;
              if (tr.toolName === "add_deadline") {
                return (
                  <div key={tr.toolCallId} className="flex items-center gap-2 rounded-lg border border-green-200 bg-green-50 px-3 py-2 text-sm max-w-[80%]">
                    <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <div className="min-w-0">
                      <p className="font-medium text-green-800 text-xs">
                        {out.type === "deadline" ? "Deadline added" : "Action item added"}
                      </p>
                      <p className="text-green-700 truncate text-xs">{String(out.value ?? "")}</p>
                      {out.dueDate != null && (
                        <p className="text-xs text-green-600">
                          Due {new Date(out.dueDate).toLocaleDateString("en-CA", { month: "short", day: "numeric", year: "numeric" })}
                        </p>
                      )}
                    </div>
                  </div>
                );
              }
              if (tr.toolName === "log_time") {
                return (
                  <div key={tr.toolCallId} className="flex items-center gap-2 rounded-lg border border-blue-200 bg-blue-50 px-3 py-2 text-sm max-w-[80%]">
                    <Timer className="h-4 w-4 text-blue-600 flex-shrink-0" />
                    <div className="min-w-0">
                      <p className="font-medium text-blue-800 text-xs">Time logged</p>
                      <p className="text-blue-700 truncate text-xs">{String(out.description ?? "")}</p>
                      <p className="text-xs text-blue-600">{String(out.hours ?? "")} hrs ({String(out.minutes ?? "")} min)</p>
                    </div>
                  </div>
                );
              }
              if (tr.toolName === "resolve_deadline") {
                const toolOut = (tr.output ?? {}) as Record<string, string | boolean | null | undefined>;
                const success = !!toolOut.success;
                return (
                  <div key={tr.toolCallId} className={`flex items-center gap-2 rounded-lg border px-3 py-2 text-sm max-w-[80%] ${success ? "border-green-200 bg-green-50" : "border-amber-200 bg-amber-50"}`}>
                    <Circle className={`h-4 w-4 flex-shrink-0 ${success ? "text-green-600" : "text-amber-600"}`} />
                    <div className="min-w-0">
                      <p className={`font-medium text-xs ${success ? "text-green-800" : "text-amber-800"}`}>
                        {success ? "Item resolved" : "Item not found"}
                      </p>
                      {success && <p className="text-green-700 truncate text-xs">{String(toolOut.resolved ?? "")}</p>}
                      {!success && <p className="text-amber-700 text-xs">{String(toolOut.message ?? "")}</p>}
                    </div>
                  </div>
                );
              }
              if (tr.toolName === "add_client_note") {
                const toolOut = (tr.output ?? {}) as Record<string, string | boolean | null | undefined>;
                const success = !!toolOut.success;
                return (
                  <div key={tr.toolCallId} className={`flex items-center gap-2 rounded-lg border px-3 py-2 text-sm max-w-[80%] ${success ? "border-purple-200 bg-purple-50" : "border-amber-200 bg-amber-50"}`}>
                    <StickyNote className={`h-4 w-4 flex-shrink-0 ${success ? "text-purple-600" : "text-amber-600"}`} />
                    <div className="min-w-0">
                      <p className={`font-medium text-xs ${success ? "text-purple-800" : "text-amber-800"}`}>
                        {success ? `Note added for ${String(toolOut.clientName ?? "")}` : "Note not added"}
                      </p>
                      {success && <p className="text-purple-700 truncate text-xs">{String(toolOut.noteAdded ?? "")}</p>}
                    </div>
                  </div>
                );
              }
              return null;
            })}

            {/* Text content */}
            {textContent && (
              <div
                className={cn(
                  "max-w-[80%] rounded-lg px-4 py-3 text-sm",
                  isUser
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-foreground"
                )}
              >
                {isUser ? (
                  <p className="whitespace-pre-wrap">{textContent}</p>
                ) : (
                  <ReactMarkdown
                    components={{
                      p: ({ children }) => (
                        <p className="mb-2 last:mb-0">{children}</p>
                      ),
                      ul: ({ children }) => (
                        <ul className="mb-2 list-disc pl-4">{children}</ul>
                      ),
                      ol: ({ children }) => (
                        <ol className="mb-2 list-decimal pl-4">{children}</ol>
                      ),
                      li: ({ children }) => <li className="mb-1">{children}</li>,
                      strong: ({ children }) => (
                        <strong className="font-semibold">{children}</strong>
                      ),
                      code: ({ children }) => (
                        <code className="rounded bg-background/50 px-1 py-0.5 font-mono text-xs">
                          {children}
                        </code>
                      ),
                      pre: ({ children }) => (
                        <pre className="mb-2 overflow-x-auto rounded bg-background/50 p-2 font-mono text-xs">
                          {children}
                        </pre>
                      ),
                    }}
                  >
                    {textContent}
                  </ReactMarkdown>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
