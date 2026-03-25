"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Circle } from "lucide-react";
import { trpc } from "@/lib/trpc/client";

type EntityType =
  | "person"
  | "date"
  | "amount"
  | "action_item"
  | "deadline"
  | "case_reference";

interface Entity {
  id: string;
  type: EntityType;
  value: string;
  context?: string | null;
  dueDate?: Date | string | null;
  resolved?: boolean | null;
}

interface EntityListProps {
  entities: Entity[];
  onResolved?: () => void;
}

const entityTypeLabels: Record<EntityType, string> = {
  person: "Person",
  date: "Date",
  amount: "Amount",
  action_item: "Action Item",
  deadline: "Deadline",
  case_reference: "Case Reference",
};

const entityTypeVariants: Record<
  EntityType,
  "default" | "secondary" | "destructive" | "outline"
> = {
  person: "default",
  date: "secondary",
  amount: "outline",
  action_item: "destructive",
  deadline: "destructive",
  case_reference: "secondary",
};

const RESOLVABLE = new Set<EntityType>(["action_item", "deadline"]);

function groupEntitiesByType(entities: Entity[]): Record<string, Entity[]> {
  return entities.reduce<Record<string, Entity[]>>((acc, entity) => {
    const key = entity.type;
    if (!acc[key]) acc[key] = [];
    acc[key].push(entity);
    return acc;
  }, {});
}

function EntityRow({ entity, onResolved }: { entity: Entity; onResolved?: () => void }) {
  const resolveEntity = trpc.documents.resolveEntity.useMutation({
    onSuccess: () => onResolved?.(),
  });

  const canResolve = RESOLVABLE.has(entity.type);
  const isResolved = entity.resolved === true;

  return (
    <div className={`flex items-start gap-2 rounded-md p-2.5 ${isResolved ? "bg-muted/30 opacity-60" : "bg-muted/50"}`}>
      {canResolve && (
        <button
          onClick={() => resolveEntity.mutate({ id: entity.id, resolved: !isResolved })}
          disabled={resolveEntity.isPending}
          className="mt-0.5 flex-shrink-0 text-muted-foreground hover:text-primary transition-colors"
          title={isResolved ? "Mark as open" : "Mark as done"}
        >
          {isResolved ? (
            <CheckCircle2 className="h-4 w-4 text-green-600" />
          ) : (
            <Circle className="h-4 w-4" />
          )}
        </button>
      )}
      <div className="min-w-0 flex-1">
        <p className={`text-sm font-medium ${isResolved ? "line-through" : ""}`}>
          {entity.value}
        </p>
        {entity.context && (
          <p className="mt-0.5 text-xs text-muted-foreground">{entity.context}</p>
        )}
        {entity.dueDate && (
          <p className="mt-0.5 text-xs text-muted-foreground">
            Due: {new Date(entity.dueDate).toLocaleDateString()}
          </p>
        )}
      </div>
    </div>
  );
}

export function EntityList({ entities, onResolved }: EntityListProps) {
  if (entities.length === 0) {
    return (
      <p className="text-sm text-muted-foreground">No entities extracted yet.</p>
    );
  }

  const grouped = groupEntitiesByType(entities);

  // Sort: action items and deadlines first
  const order: EntityType[] = ["deadline", "action_item", "date", "amount", "person", "case_reference"];
  const sortedEntries = Object.entries(grouped).sort(([a], [b]) => {
    const ai = order.indexOf(a as EntityType);
    const bi = order.indexOf(b as EntityType);
    return (ai === -1 ? 99 : ai) - (bi === -1 ? 99 : bi);
  });

  return (
    <div className="space-y-4">
      {sortedEntries.map(([type, items]) => (
        <Card key={type}>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-sm">
              <Badge variant={entityTypeVariants[type as EntityType]}>
                {entityTypeLabels[type as EntityType] ?? type}
              </Badge>
              <span className="text-muted-foreground font-normal">
                {items.filter(e => !e.resolved).length} open
                {items.some(e => e.resolved) ? `, ${items.filter(e => e.resolved).length} done` : ""}
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {items.map((entity) => (
              <EntityRow key={entity.id} entity={entity} onResolved={onResolved} />
            ))}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
