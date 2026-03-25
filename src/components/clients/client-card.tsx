"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Mail, Phone, FileText, Briefcase, Clock, AlertTriangle } from "lucide-react";

interface ClientCardProps {
  client: {
    id: string;
    name: string;
    email?: string | null;
    phone?: string | null;
    company?: string | null;
    documentCount?: number;
    matterCount?: number;
    totalBillableMinutes?: number;
    openDeadlineCount?: number;
    activeMatters?: number;
  };
}

export function ClientCard({ client }: ClientCardProps) {
  const billableHours =
    client.totalBillableMinutes != null && client.totalBillableMinutes > 0
      ? (client.totalBillableMinutes / 60).toFixed(1)
      : null;

  const hasUrgent = (client.openDeadlineCount ?? 0) > 0;

  return (
    <Link href={`/clients/${client.id}`}>
      <Card className={`cursor-pointer transition-shadow hover:shadow-md ${hasUrgent ? "border-orange-200" : ""}`}>
        <CardHeader className="pb-2">
          <div className="flex items-start justify-between gap-2">
            <CardTitle className="text-base leading-tight">{client.name}</CardTitle>
            <div className="flex items-center gap-2 flex-shrink-0">
              {(client.activeMatters ?? 0) > 0 && (
                <span className="flex items-center gap-0.5 text-xs text-muted-foreground">
                  <Briefcase className="h-3 w-3" />
                  {client.activeMatters}
                </span>
              )}
              {(client.documentCount ?? 0) > 0 && (
                <span className="flex items-center gap-0.5 text-xs text-muted-foreground">
                  <FileText className="h-3 w-3" />
                  {client.documentCount}
                </span>
              )}
              {billableHours && (
                <span className="flex items-center gap-0.5 text-xs text-primary font-medium">
                  <Clock className="h-3 w-3" />
                  {billableHours}h
                </span>
              )}
              {(client.openDeadlineCount ?? 0) > 0 && (
                <span className="flex items-center gap-0.5 text-xs text-orange-600 font-medium">
                  <AlertTriangle className="h-3 w-3" />
                  {client.openDeadlineCount}
                </span>
              )}
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-1.5">
          {client.company && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Building2 className="h-3.5 w-3.5 flex-shrink-0" />
              <span className="truncate">{client.company}</span>
            </div>
          )}
          {client.email && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Mail className="h-3.5 w-3.5 flex-shrink-0" />
              <span className="truncate">{client.email}</span>
            </div>
          )}
          {client.phone && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Phone className="h-3.5 w-3.5 flex-shrink-0" />
              <span>{client.phone}</span>
            </div>
          )}
          {!client.company && !client.email && !client.phone && (
            <p className="text-sm text-muted-foreground">No contact details</p>
          )}
        </CardContent>
      </Card>
    </Link>
  );
}
