import { Heart, Home, DollarSign, Activity, Briefcase, Target, Users, Baby, Sparkles, AlertTriangle, TrendingUp, Calendar, CheckCircle2, CloudSun, Wrench, MapPin, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { morningBrief, dashboardPriorities, relationshipData, financialData, healthData, householdData } from "@/data/mockData";
import { lifeBalanceScores, todaysMomentCard, partnerStatus, lifeAlerts, upcomingMilestones, weatherCommute, seasonalReminder } from "@/data/extendedMockData";
import { Link } from "react-router-dom";
import { LifeStageHeader } from "@/components/shared/LifeStageHeader";
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from "recharts";

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

const radarData = [
  { pillar: "Relationship", score: lifeBalanceScores.relationship },
  { pillar: "Household", score: lifeBalanceScores.household },
  { pillar: "Financial", score: lifeBalanceScores.financial },
  { pillar: "Family", score: lifeBalanceScores.family },
  { pillar: "Health", score: lifeBalanceScores.health },
  { pillar: "Career", score: lifeBalanceScores.career },
  { pillar: "Future", score: lifeBalanceScores.future },
  { pillar: "Social", score: lifeBalanceScores.social },
];

export default function Dashboard() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      {/* Life Stage + Morning Brief */}
      <div className="flex items-center gap-3 mb-2">
        <LifeStageHeader />
      </div>

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

      {/* Life Alert Banner */}
      {lifeAlerts.filter(a => a.severity === "urgent" || a.severity === "warning").slice(0, 1).map(alert => (
        <div key={alert.id} className={`flex items-center gap-3 p-4 rounded-2xl border-2 ${alert.severity === "urgent" ? "border-destructive/30 bg-destructive/5" : "border-amber/30 bg-amber-light"
          }`}>
          <AlertTriangle className={`w-5 h-5 shrink-0 ${alert.severity === "urgent" ? "text-destructive" : "text-amber"}`} />
          <div className="flex-1">
            <p className="text-sm font-medium">{alert.message}</p>
            <p className="text-xs text-muted-foreground">{alert.pillar}</p>
          </div>
          <Badge variant="outline" className="text-[10px]">View</Badge>
        </div>
      ))}

      {/* Partner Status Strip */}
      <div className="flex items-center gap-4 p-3 rounded-2xl bg-muted/30">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-coral-light">
          <div className="w-6 h-6 rounded-full gradient-coral flex items-center justify-center text-[10px] font-bold text-white">A</div>
          <span className="text-sm">{partnerStatus.alex.mood}</span>
          <MapPin className="w-3 h-3 text-muted-foreground" />
          <span className="text-xs text-muted-foreground">{partnerStatus.alex.location}</span>
          <Zap className="w-3 h-3 text-mint" />
          <span className="text-xs text-mint">{partnerStatus.alex.energy}</span>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-sky-light">
          <div className="w-6 h-6 rounded-full gradient-sky flex items-center justify-center text-[10px] font-bold text-white">J</div>
          <span className="text-sm">{partnerStatus.jordan.mood}</span>
          <MapPin className="w-3 h-3 text-muted-foreground" />
          <span className="text-xs text-muted-foreground">{partnerStatus.jordan.location}</span>
          <Zap className="w-3 h-3 text-amber" />
          <span className="text-xs text-amber">{partnerStatus.jordan.energy}</span>
        </div>
      </div>

      {/* Life Balance Wheel + Today's Moment + Upcoming Milestones */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Life Balance Wheel */}
        <Card className="pillar-card md:col-span-1">
          <CardHeader className="pb-2">
            <CardTitle className="font-display text-lg flex items-center gap-2">
              <Target className="w-5 h-5 text-primary" /> Life Balance Wheel
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={220}>
              <RadarChart data={radarData}>
                <PolarGrid stroke="hsl(var(--border))" />
                <PolarAngleAxis dataKey="pillar" tick={{ fontSize: 10, fill: "hsl(var(--muted-foreground))" }} />
                <PolarRadiusAxis domain={[0, 100]} tick={false} axisLine={false} />
                <Radar name="Score" dataKey="score" stroke="hsl(var(--coral))" fill="hsl(var(--coral))" fillOpacity={0.2} strokeWidth={2} />
              </RadarChart>
            </ResponsiveContainer>
            <p className="text-center text-xs text-muted-foreground mt-1">Overall Life Balance: <span className="font-bold text-foreground">{Math.round(Object.values(lifeBalanceScores).reduce((a, b) => a + b, 0) / 8)}/100</span></p>
          </CardContent>
        </Card>

        {/* Today's Moment */}
        <Card className="pillar-card">
          <CardHeader className="pb-2">
            <CardTitle className="font-display text-lg flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-primary" /> Today's Moment
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-gradient-to-br from-coral-light to-rose-light rounded-2xl p-5 text-center">
              <span className="text-3xl block mb-3">💝</span>
              <p className="text-sm font-medium leading-relaxed">{todaysMomentCard.activity}</p>
              <div className="flex items-center justify-center gap-2 mt-3">
                <Badge variant="secondary" className="rounded-full text-[10px]">{todaysMomentCard.category}</Badge>
                <Badge variant="secondary" className="rounded-full text-[10px]">⏱ {todaysMomentCard.duration}</Badge>
              </div>
            </div>
            <div className="mt-4 space-y-2">
              <p className="text-xs font-semibold text-muted-foreground">UPCOMING MILESTONES</p>
              {upcomingMilestones.map((m, i) => (
                <div key={i} className="flex items-center gap-2 text-sm p-2 rounded-xl bg-muted/30">
                  <span>{m.icon}</span>
                  <span className="flex-1 font-medium">{m.title}</span>
                  <span className="text-xs text-muted-foreground">{m.daysUntil}d</span>
                </div>
              ))}
            </div>
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

      {/* Row: Relationship Pulse + Priorities + Weather */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="pillar-card">
          <CardHeader className="pb-2">
            <CardTitle className="font-display text-lg flex items-center gap-2">
              <Heart className="w-5 h-5 text-primary" /> Relationship Pulse
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center py-4">
              <div className="relative w-28 h-28">
                <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
                  <circle cx="60" cy="60" r="50" fill="none" stroke="hsl(var(--muted))" strokeWidth="10" />
                  <circle cx="60" cy="60" r="50" fill="none" stroke="hsl(var(--coral))" strokeWidth="10"
                    strokeDasharray={`${relationshipData.healthScore * 3.14} 314`} strokeLinecap="round" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-2xl font-bold font-display">{relationshipData.healthScore}</span>
                  <span className="text-[10px] text-muted-foreground">/ 100</span>
                </div>
              </div>
            </div>
            <p className="text-center text-sm text-muted-foreground">💕 Your connection is strong this week!</p>
          </CardContent>
        </Card>

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

        {/* Weather + Commute */}
        <Card className="pillar-card">
          <CardHeader className="pb-2">
            <CardTitle className="font-display text-lg flex items-center gap-2">
              <CloudSun className="w-5 h-5 text-amber" /> Weather & Commute
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-coral-light/50">
              <div className="w-10 h-10 rounded-full gradient-coral flex items-center justify-center text-xs font-bold text-white">A</div>
              <div>
                <p className="text-sm font-medium">{weatherCommute.alex.icon} {weatherCommute.alex.temp} — {weatherCommute.alex.condition}</p>
                <p className="text-xs text-muted-foreground">🚗 Commute: {weatherCommute.alex.commute}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-xl bg-sky-light/50">
              <div className="w-10 h-10 rounded-full gradient-sky flex items-center justify-center text-xs font-bold text-white">J</div>
              <div>
                <p className="text-sm font-medium">{weatherCommute.jordan.icon} {weatherCommute.jordan.temp} — {weatherCommute.jordan.condition}</p>
                <p className="text-xs text-muted-foreground">{weatherCommute.jordan.icon} {weatherCommute.jordan.commute}</p>
              </div>
            </div>
            {/* Seasonal Reminder */}
            <div className="p-3 rounded-xl bg-amber-light/50 flex items-center gap-2">
              <Wrench className="w-4 h-4 text-amber shrink-0" />
              <p className="text-xs">{seasonalReminder.message}</p>
            </div>
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
