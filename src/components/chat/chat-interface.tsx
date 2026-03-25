"use client";

import { useState, useRef, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport, type UIMessage } from "ai";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Trash2, Loader2 } from "lucide-react";
import { MessageList } from "./message-list";
import { ChatInput } from "./chat-input";
import { trpc } from "@/lib/trpc/client";

function dbMessagesToUIMessages(
  dbMessages: { id: string; role: string; content: string; createdAt: Date | string }[]
): UIMessage[] {
  return dbMessages.map((m) => ({
    id: m.id,
    role: m.role as "user" | "assistant",
    parts: [{ type: "text" as const, text: m.content }],
    content: m.content,
    createdAt: new Date(m.createdAt),
  }));
}

interface ChatCoreProps {
  clientId: string | undefined;
  matterId: string | undefined;
  clientName: string | undefined;
  matterTitle: string | undefined;
  initialMessages: UIMessage[];
  onClearHistory: () => Promise<void>;
}

function ChatCore({ clientId, matterId, clientName, matterTitle, initialMessages, onClearHistory }: ChatCoreProps) {
  const [inputValue, setInputValue] = useState("");
  const [clearing, setClearing] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  const transport = new DefaultChatTransport({
    api: "/api/chat",
    body: { clientId, matterId },
  });

  const { messages, sendMessage, status } = useChat({
    transport,
    messages: initialMessages,
  });

  const isLoading = status === "submitted" || status === "streaming";

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  function handleSend() {
    const text = inputValue.trim();
    if (!text || isLoading) return;
    setInputValue("");
    sendMessage({ text });
  }

  async function handleClear() {
    setClearing(true);
    try {
      await onClearHistory();
    } finally {
      setClearing(false);
    }
  }

  return (
    <>
      <ScrollArea className="flex-1 px-4">
        <MessageList
          messages={messages}
          clientName={matterTitle ? `${clientName ?? ""} — ${matterTitle}` : clientName}
          onSuggestion={(text) => {
            setInputValue(text);
          }}
        />
        {isLoading && (
          <div className="flex justify-start py-2">
            <div className="rounded-lg bg-muted px-4 py-3 text-sm text-muted-foreground">
              <span className="animate-pulse">Thinking...</span>
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </ScrollArea>

      <div className="relative border-t">
        <ChatInput
          value={inputValue}
          onChange={setInputValue}
          onSend={handleSend}
          disabled={isLoading}
        />
        {messages.length > 0 && (
          <Button
            variant="ghost"
            size="icon"
            onClick={handleClear}
            disabled={clearing}
            title="Clear conversation"
            className="absolute right-14 bottom-3 h-8 w-8 text-muted-foreground hover:text-destructive"
          >
            {clearing ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Trash2 className="h-4 w-4" />
            )}
          </Button>
        )}
      </div>
    </>
  );
}

export function ChatInterface() {
  const searchParams = useSearchParams();
  const initialClientId = searchParams.get("clientId") ?? undefined;
  const initialMatterId = searchParams.get("matterId") ?? undefined;
  const [clientId, setClientId] = useState<string | undefined>(initialClientId);
  const [matterId, setMatterId] = useState<string | undefined>(initialMatterId);
  const utils = trpc.useUtils();

  const { data: clients } = trpc.clients.list.useQuery();
  const { data: allMatters } = trpc.matters.list.useQuery(undefined, { enabled: !!clientId });
  const { data: historyData, isLoading: historyLoading } = trpc.chat.history.useQuery(
    { clientId, matterId },
    { staleTime: 0 }
  );

  const clearHistory = trpc.chat.clearHistory.useMutation({
    onSuccess: () => utils.chat.history.invalidate({ clientId, matterId }),
  });

  const initialMessages = historyData ? dbMessagesToUIMessages(historyData) : [];
  const clientMatters = allMatters?.filter(m => m.clientId === clientId);
  const currentClient = clients?.find(c => c.id === clientId);
  const currentMatter = clientMatters?.find(m => m.id === matterId);

  return (
    <div className="flex h-full flex-col">
      {/* Header with client + matter selectors */}
      <div className="flex items-center justify-between border-b px-4 py-3 gap-2">
        <div className="flex items-center gap-2">
          <h1 className="text-lg font-semibold">Atticus</h1>
          <span className="text-xs text-muted-foreground hidden sm:inline">· Your AI practice assistant</span>
        </div>
        <div className="flex items-center gap-2">
          <Select
            value={clientId ?? "all"}
            onValueChange={(val) => {
              setClientId(val === "all" ? undefined : val);
              setMatterId(undefined);
            }}
          >
            <SelectTrigger className="h-8 w-40 text-sm">
              <SelectValue placeholder="All clients" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All clients</SelectItem>
              {clients?.map((client) => (
                <SelectItem key={client.id} value={client.id}>
                  {client.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {clientId && clientMatters && clientMatters.length > 0 && (
            <Select
              value={matterId ?? "all"}
              onValueChange={(val) => setMatterId(val === "all" ? undefined : val)}
            >
              <SelectTrigger className="h-8 w-40 text-sm">
                <SelectValue placeholder="All matters" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All matters</SelectItem>
                {clientMatters.map((m) => (
                  <SelectItem key={m.id} value={m.id}>{m.title}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        </div>
      </div>

      {historyLoading ? (
        <div className="flex flex-1 items-center justify-center">
          <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
        </div>
      ) : (
        // key resets useChat when context or history changes
        <ChatCore
          key={`${clientId ?? "all"}-${matterId ?? "all"}-${historyData?.length ?? 0}`}
          clientId={clientId}
          matterId={matterId}
          clientName={currentClient?.name}
          matterTitle={currentMatter?.title}
          initialMessages={initialMessages}
          onClearHistory={() => clearHistory.mutateAsync({ clientId, matterId })}
        />
      )}
    </div>
  );
}
