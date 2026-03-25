-- Add matter_id to chat_messages for matter-scoped chat context
ALTER TABLE "chat_messages" ADD COLUMN "matter_id" uuid REFERENCES "matters"("id") ON DELETE cascade;
