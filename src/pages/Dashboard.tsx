import { Heart, Home, DollarSign, Activity, Briefcase, Target, Users, Baby, Sparkles, AlertTriangle, TrendingUp, Calendar, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { morningBrief, dashboardPriorities, relationshipData, financialData, healthData, householdData } from "@/data/mockData";
import { Link } from "react-router-dom";
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";

const quickActions = [
  { title: "Relationship", icon: Heart, color: "gradient-coral", to: "/relationship" },
  { title: "Household", icon: Home, color: "gradient-sky", to: "/household" },
  { title: "Finances", icon: DollarSign, color: "bg-mint", to: "/finances" },
  { title: "Family", icon: Baby, color: "bg-amber", to: "/family" },
  { title: "Health", icon: Activity, color: "bg-lavender", to: "/health" },
  { title: "Career", icon: Briefcase, color: "bg-sky", to: "/career" },
  { title: "Future", icon: Target, color: "gradient-coral", to: "/future" },
  { title: "Social", icon: Users, color: "bg-mint", to: "/social" },
];

export default function Dashboard() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      {/* Morning Brief */}
      <Card className="pillar-card overflow-hidden">
        <div className="gradient-coral p-6 text-primary-foreground">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="font-display text-2xl font-bold">{morningBrief.greeting}</h1>
              <p className="text-sm opacity-90 mt-1">{morningBrief.date} • {morningBrief.weather}</p>
              <p className="text-sm opacity-80 mt-2">{morningBrief.summary}</p>
            </div>
            <Sparkles className="w-8 h-8 opacity-60" />
          </div>
        </div>
        <CardContent className="p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {morningBrief.highlights.map((h, i) => (
              <div key={i} className="text-sm p-2.5 rounded-xl bg-muted/50">{h}</div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Row: Relationship Pulse + Priorities + Quick Finance */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Relationship Pulse */}
        <Card className="pillar-card">
          <CardHeader className="pb-2">
            <CardTitle className="font-display text-lg flex items-center gap-2">
              <Heart className="w-5 h-5 text-primary" /> Relationship Pulse
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center py-4">
              <div className="relative w-32 h-32">
                <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
                  <circle cx="60" cy="60" r="50" fill="none" stroke="hsl(var(--muted))" strokeWidth="10" />
                  <circle cx="60" cy="60" r="50" fill="none" stroke="hsl(var(--coral))" strokeWidth="10"
                    strokeDasharray={`${relationshipData.healthScore * 3.14} 314`} strokeLinecap="round" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-bold font-display">{relationshipData.healthScore}</span>
                  <span className="text-[10px] text-muted-foreground">/ 100</span>
                </div>
              </div>
            </div>
            <p className="text-center text-sm text-muted-foreground">💕 Your connection is strong this week!</p>
          </CardContent>
        </Card>

        {/* Today's Priorities */}
        <Card className="pillar-card">
          <CardHeader className="pb-2">
            <CardTitle className="font-display text-lg flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary" /> Today's Priorities
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {dashboardPriorities.map((p, i) => (
              <div key={i} className="flex items-center gap-3 p-2 rounded-xl hover:bg-muted/50 transition-colors">
                {p.urgent && <AlertTriangle className="w-4 h-4 text-amber shrink-0" />}
                {!p.urgent && <Calendar className="w-4 h-4 text-muted-foreground shrink-0" />}
                <div className="min-w-0">
                  <p className="text-sm font-medium truncate">{p.task}</p>
                  <p className="text-[10px] text-muted-foreground">{p.pillar}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Finance Snapshot */}
        <Card className="pillar-card">
          <CardHeader className="pb-2">
            <CardTitle className="font-display text-lg flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-mint" /> Net Worth Trend
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold font-display">${financialData.netWorth.toLocaleString()}</p>
            <p className="text-xs text-mint mb-2">+$5,000 this month ↑</p>
            <ResponsiveContainer width="100%" height={100}>
              <AreaChart data={financialData.netWorthHistory}>
                <defs>
                  <linearGradient id="netWorthGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="hsl(160, 50%, 55%)" stopOpacity={0.3} />
                    <stop offset="100%" stopColor="hsl(160, 50%, 55%)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <Area type="monotone" dataKey="value" stroke="hsl(160, 50%, 55%)" fill="url(#netWorthGrad)" strokeWidth={2} />
                <XAxis dataKey="month" hide />
                <Tooltip formatter={(v: number) => `$${v.toLocaleString()}`} />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="pillar-card">
        <CardHeader className="pb-2">
          <CardTitle className="font-display text-lg">Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-4 sm:grid-cols-8 gap-3">
            {quickActions.map((a) => (
              <Link key={a.title} to={a.to} className="flex flex-col items-center gap-2 p-3 rounded-2xl hover:bg-muted/50 transition-all hover:-translate-y-0.5">
                <div className={`w-12 h-12 rounded-2xl ${a.color} flex items-center justify-center`}>
                  <a.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-[11px] font-medium text-center">{a.title}</span>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Mini Widgets Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <MiniWidget icon={Home} title="Tasks Due" value={`${householdData.tasks.filter(t => !t.completed).length} pending`} color="sky" />
        <MiniWidget icon={Activity} title="Mood Today" value="😊 Happy" color="lavender" />
        <MiniWidget icon={DollarSign} title="Budget Status" value="$200 under budget" color="mint" />
        <MiniWidget icon={Heart} title="Days Together" value="730 days ❤️" color="coral" />
      </div>
    </div>
  );
}

function MiniWidget({ icon: Icon, title, value, color }: { icon: React.ElementType; title: string; value: string; color: string }) {
  return (
    <Card className="pillar-card">
      <CardContent className="p-4 flex items-center gap-3">
        <div className={`w-10 h-10 rounded-xl bg-${color}-light flex items-center justify-center`}>
          <Icon className={`w-5 h-5 text-${color}`} />
        </div>
        <div>
          <p className="text-[11px] text-muted-foreground">{title}</p>
          <p className="text-sm font-semibold">{value}</p>
        </div>
      </CardContent>
    </Card>
  );
}
