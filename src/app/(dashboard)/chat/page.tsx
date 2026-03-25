import { Suspense } from "react";
import { ChatInterface } from "@/components/chat/chat-interface";

export default function ChatPage() {
  return (
    <div className="h-[calc(100vh-7rem)]">
      <Suspense>
        <ChatInterface />
      </Suspense>
    </div>
  );
}
