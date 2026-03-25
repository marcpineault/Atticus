"use client";

import { trpc } from "@/lib/trpc/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
  Area,
  AreaChart,
} from "recharts";

const STATUS_COLORS: Record<string, string> = {
  active: "#22c55e",
  pending: "#f59e0b",
  closed: "#94a3b8",
};

const CLIENT_COLORS = [
  "#6366f1", "#22c55e", "#f59e0b", "#ef4444",
  "#8b5cf6", "#06b6d4", "#ec4899", "#14b8a6",
];

export default function AnalyticsPage() {
  const { data, isLoading } = trpc.analytics.overview.useQuery();

  if (isLoading) {
    return (
      <div className="flex justify-center py-20">
        <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (!data) return null;

  const totalHours = data.hoursPerClient.reduce((s, c) => s + c.hours, 0);
  const { revenue } = data;

  function fmtCAD(n: number) {
    return n.toLocaleString("en-CA", { style: "currency", currency: "CAD", maximumFractionDigits: 0 });
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Analytics</h1>
        <p className="text-muted-foreground">Practice-wide metrics and trends.</p>
      </div>

      {/* Revenue stats row */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        <Card>
          <CardHeader className="pb-1">
            <CardTitle className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
              Total Invoiced
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{fmtCAD(revenue.totalInvoiced)}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-1">
            <CardTitle className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
              Collected
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-green-600">{fmtCAD(revenue.totalPaid)}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-1">
            <CardTitle className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
              Outstanding
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-amber-600">{fmtCAD(revenue.totalOutstanding)}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-1">
            <CardTitle className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
              Overdue
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className={`text-2xl font-bold ${revenue.totalOverdue > 0 ? "text-destructive" : "text-muted-foreground"}`}>
              {fmtCAD(revenue.totalOverdue)}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Monthly revenue chart */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-medium">Revenue Collected — Last 12 Months</CardTitle>
        </CardHeader>
        <CardContent>
          {revenue.monthlyData.every(m => m.revenue === 0) ? (
            <div className="flex items-center justify-center py-10 text-sm text-muted-foreground">
              No paid invoices yet.
            </div>
          ) : (
            <ResponsiveContainer width="100%" height={200}>
              <AreaChart data={revenue.monthlyData} margin={{ top: 4, right: 4, left: 10, bottom: 4 }}>
                <defs>
                  <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#22c55e" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" tick={{ fontSize: 11 }} stroke="hsl(var(--muted-foreground))" />
                <YAxis tick={{ fontSize: 11 }} stroke="hsl(var(--muted-foreground))" tickFormatter={(v) => `$${v >= 1000 ? `${(v/1000).toFixed(0)}k` : v}`} />
                <Tooltip
                  contentStyle={{ fontSize: 12, background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 6 }}
                  formatter={(v) => [fmtCAD(v as number), "Collected"]}
                />
                <Area type="monotone" dataKey="revenue" stroke="#22c55e" strokeWidth={2} fill="url(#revenueGradient)" />
              </AreaChart>
            </ResponsiveContainer>
          )}
        </CardContent>
      </Card>

      {/* Key stats row */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        <Card>
          <CardHeader className="pb-1">
            <CardTitle className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
              Total Billable Hrs
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{totalHours.toFixed(1)}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-1">
            <CardTitle className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
              Deadline Rate
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-primary">{data.completionRate}%</p>
            <p className="text-xs text-muted-foreground mt-0.5">
              {data.resolvedCount}/{data.totalDeadlines} last 30d
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-1">
            <CardTitle className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
              Active Matters
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">
              {data.matterStats.find(m => m.status === "active")?.count ?? 0}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-1">
            <CardTitle className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
              Closed Matters
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-muted-foreground">
              {data.matterStats.find(m => m.status === "closed")?.count ?? 0}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Documents per week */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-medium">Documents Processed — Last 12 Weeks</CardTitle>
        </CardHeader>
        <CardContent>
          {data.weeklyData.every(w => w.docs === 0) ? (
            <div className="flex items-center justify-center py-10 text-sm text-muted-foreground">
              No document activity yet.
            </div>
          ) : (
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={data.weeklyData} margin={{ top: 4, right: 4, left: -20, bottom: 4 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="week" tick={{ fontSize: 11 }} stroke="hsl(var(--muted-foreground))" />
                <YAxis tick={{ fontSize: 11 }} stroke="hsl(var(--muted-foreground))" allowDecimals={false} />
                <Tooltip
                  contentStyle={{ fontSize: 12, background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 6 }}
                  labelStyle={{ color: "hsl(var(--foreground))" }}
                />
                <Bar dataKey="docs" fill="hsl(var(--primary))" radius={[3, 3, 0, 0]} name="Documents" />
              </BarChart>
            </ResponsiveContainer>
          )}
        </CardContent>
      </Card>

      {/* Billable hours per week */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-medium">Logged Hours — Last 12 Weeks</CardTitle>
        </CardHeader>
        <CardContent>
          {data.weeklyData.every(w => w.hours === 0) ? (
            <div className="flex items-center justify-center py-10 text-sm text-muted-foreground">
              No time entries yet. Log time from the Matters page.
            </div>
          ) : (
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={data.weeklyData} margin={{ top: 4, right: 4, left: -20, bottom: 4 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="week" tick={{ fontSize: 11 }} stroke="hsl(var(--muted-foreground))" />
                <YAxis tick={{ fontSize: 11 }} stroke="hsl(var(--muted-foreground))" />
                <Tooltip
                  contentStyle={{ fontSize: 12, background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 6 }}
                  labelStyle={{ color: "hsl(var(--foreground))" }}
                  formatter={(v) => [`${v}h`, "Hours"]}
                />
                <Bar dataKey="hours" fill="#22c55e" radius={[3, 3, 0, 0]} name="Hours" />
              </BarChart>
            </ResponsiveContainer>
          )}
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Billable hours by client */}
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Billable Hours by Client</CardTitle>
          </CardHeader>
          <CardContent>
            {data.hoursPerClient.length === 0 ? (
              <div className="flex items-center justify-center py-10 text-sm text-muted-foreground">
                No billable hours yet.
              </div>
            ) : (
              <ResponsiveContainer width="100%" height={220}>
                <PieChart>
                  <Pie
                    data={data.hoursPerClient}
                    dataKey="hours"
                    nameKey="clientName"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    label={({ name, percent }) =>
                      (percent ?? 0) > 0.05 ? `${name} ${((percent ?? 0) * 100).toFixed(0)}%` : ""
                    }
                    labelLine={false}
                  >
                    {data.hoursPerClient.map((_, i) => (
                      <Cell key={i} fill={CLIENT_COLORS[i % CLIENT_COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{ fontSize: 12, background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 6 }}
                    formatter={(v) => [`${v}h`, "Hours"]}
                  />
                  <Legend iconSize={10} wrapperStyle={{ fontSize: 12 }} />
                </PieChart>
              </ResponsiveContainer>
            )}
          </CardContent>
        </Card>

        {/* Matter status breakdown */}
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Matter Status</CardTitle>
          </CardHeader>
          <CardContent>
            {data.matterStats.length === 0 ? (
              <div className="flex items-center justify-center py-10 text-sm text-muted-foreground">
                No matters yet.
              </div>
            ) : (
              <ResponsiveContainer width="100%" height={220}>
                <PieChart>
                  <Pie
                    data={data.matterStats}
                    dataKey="count"
                    nameKey="status"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    label={({ name, percent }) =>
                      (percent ?? 0) > 0.05 ? `${name} ${((percent ?? 0) * 100).toFixed(0)}%` : ""
                    }
                    labelLine={false}
                  >
                    {data.matterStats.map((m, i) => (
                      <Cell key={i} fill={STATUS_COLORS[m.status as string] ?? "#94a3b8"} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{ fontSize: 12, background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 6 }}
                  />
                  <Legend iconSize={10} wrapperStyle={{ fontSize: 12 }} />
                </PieChart>
              </ResponsiveContainer>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
