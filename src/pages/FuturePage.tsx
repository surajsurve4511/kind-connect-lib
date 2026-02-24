import { Target, Home, Heart, Shield, BookOpen, Landmark, Map, DollarSign, Sparkles, Clock, Globe } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { futurePlanningData } from "@/data/mockData";
import { lifeVisionBoard, fiveYearPlan, homeJourney, retirementPlanning, legacyPlanning, bucketList } from "@/data/extendedMockData";
import { LifeStageHeader } from "@/components/shared/LifeStageHeader";
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";

export default function FuturePage() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2 mb-2"><LifeStageHeader /></div>
          <h1 className="font-display text-2xl font-bold flex items-center gap-2"><Target className="w-6 h-6 text-primary" /> Future Planning</h1>
          <p className="text-sm text-muted-foreground">Dream big, plan smart, build your future together</p>
        </div>
      </div>

      <Tabs defaultValue="vision" className="w-full">
        <TabsList className="w-full flex flex-wrap h-auto gap-1 bg-muted/30 p-1 rounded-2xl">
          {["vision", "goals", "5-year", "bucket-list", "home", "retirement", "legacy", "travel"].map(t => (
            <TabsTrigger key={t} value={t} className="rounded-xl text-xs capitalize">{t.replace(/-/g, " ")}</TabsTrigger>
          ))}
        </TabsList>

        {/* VISION BOARD */}
        <TabsContent value="vision" className="space-y-6 mt-4">
          <Card className="pillar-card">
            <CardHeader className="pb-2"><CardTitle className="font-display text-lg flex items-center gap-2"><Sparkles className="w-5 h-5 text-primary" /> Life Vision Board</CardTitle></CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {lifeVisionBoard.map(v => (
                  <div key={v.id} className="p-4 rounded-2xl bg-muted/30 text-center hover:bg-muted/50 cursor-pointer transition-all hover:-translate-y-0.5">
                    <span className="text-3xl block mb-2">{v.emoji}</span>
                    <p className="text-sm font-semibold">{v.title}</p>
                    <p className="text-xs text-muted-foreground mt-1">{v.description}</p>
                    <Badge variant="secondary" className="text-[10px] mt-2">{v.category}</Badge>
                  </div>
                ))}
                <button className="p-4 rounded-2xl border-2 border-dashed border-primary/30 text-primary text-center hover:bg-primary/5 transition-colors">
                  <span className="text-3xl block mb-2">✨</span>
                  <p className="text-sm font-semibold">Add to Board</p>
                </button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* GOALS */}
        <TabsContent value="goals" className="space-y-6 mt-4">
          <Card className="pillar-card">
            <CardHeader className="pb-2"><CardTitle className="font-display text-lg">Life Goals Progress</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              {futurePlanningData.bucketList.map(g => (
                <div key={g.id} className="p-4 rounded-xl bg-muted/30">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <p className="font-semibold text-sm">{g.title}</p>
                      <p className="text-xs text-muted-foreground">{g.category} • Priority: {g.priority}</p>
                    </div>
                    <span className="text-sm font-bold text-primary">{g.progress}%</span>
                  </div>
                  <Progress value={g.progress} className="h-2.5 mb-2" />
                  <div className="flex gap-1 flex-wrap">
                    <Badge variant="secondary" className="text-[10px]">{g.title}</Badge>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        {/* 5-YEAR PLAN */}
        <TabsContent value="5-year" className="space-y-6 mt-4">
          <Card className="pillar-card">
            <CardHeader className="pb-2"><CardTitle className="font-display text-lg flex items-center gap-2"><Clock className="w-5 h-5 text-primary" /> 5-Year Timeline</CardTitle></CardHeader>
            <CardContent>
              <div className="relative pl-6 space-y-6">
                <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-muted" />
                {fiveYearPlan.map(y => (
                  <div key={y.year} className="relative">
                    <div className="absolute -left-4 w-5 h-5 rounded-full bg-primary border-2 border-background flex items-center justify-center">
                      <span className="text-[8px] font-bold text-primary-foreground">{y.year.slice(-2)}</span>
                    </div>
                    <p className="font-bold text-sm mb-1">{y.year}</p>
                    <div className="space-y-1">
                      {y.goals.map((g, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm p-2 rounded-xl bg-muted/30">
                          <Badge variant="secondary" className="text-[10px]">{g.pillar}</Badge>
                          <span>{g.goal}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* BUCKET LIST */}
        <TabsContent value="bucket-list" className="space-y-6 mt-4">
          <Card className="pillar-card">
            <CardHeader className="pb-2"><CardTitle className="font-display text-lg">Couple's Bucket List</CardTitle></CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {bucketList.map(b => (
                  <div key={b.id} className={`p-4 rounded-xl ${b.done ? "bg-mint-light/50" : "bg-muted/30"} transition-colors`}>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-lg">{b.done ? "✅" : "⭕"}</span>
                      <p className={`text-sm font-medium ${b.done ? "line-through opacity-60" : ""}`}>{b.title}</p>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="secondary" className="text-[10px]">{b.category}</Badge>
                      <span className="text-xs">{b.priority}</span>
                    </div>
                  </div>
                ))}
                <button className="p-4 rounded-xl border-2 border-dashed border-primary/30 text-primary text-center hover:bg-primary/5 text-sm">+ Add Bucket List Item</button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* HOME JOURNEY */}
        <TabsContent value="home" className="space-y-6 mt-4">
          <Card className="pillar-card">
            <CardHeader className="pb-2"><CardTitle className="font-display text-lg flex items-center gap-2"><Home className="w-5 h-5 text-primary" /> Home Buying Journey</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              {homeJourney.steps.map((s, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${s.completed ? "bg-mint text-white" : "bg-muted text-muted-foreground"}`}>
                    {s.completed ? "✓" : i + 1}
                  </div>
                  <div className="flex-1">
                    <p className={`text-sm font-medium ${s.completed ? "line-through opacity-60" : ""}`}>{s.title}</p>
                    <p className="text-xs text-muted-foreground">{s.description}</p>
                  </div>
                </div>
              ))}
              <div className="mt-4 p-4 rounded-xl bg-muted/30">
                <p className="text-sm font-medium mb-2">Affordability Calculator</p>
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div><p className="text-xs text-muted-foreground">Budget</p><p className="font-bold">${homeJourney.budget.toLocaleString()}</p></div>
                  <div><p className="text-xs text-muted-foreground">Down Payment</p><p className="font-bold">${homeJourney.downPayment.toLocaleString()}</p></div>
                  <div><p className="text-xs text-muted-foreground">Monthly Payment</p><p className="font-bold">${homeJourney.monthlyPayment.toLocaleString()}</p></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* RETIREMENT */}
        <TabsContent value="retirement" className="space-y-6 mt-4">
          <Card className="pillar-card">
            <CardHeader className="pb-2"><CardTitle className="font-display text-lg flex items-center gap-2"><DollarSign className="w-5 h-5 text-mint" /> Retirement Planning</CardTitle></CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="p-3 rounded-xl bg-muted/30 text-center">
                  <p className="text-xs text-muted-foreground">Target Age</p>
                  <p className="text-xl font-bold font-display">{retirementPlanning.targetAge}</p>
                </div>
                <div className="p-3 rounded-xl bg-muted/30 text-center">
                  <p className="text-xs text-muted-foreground">Current Savings</p>
                  <p className="text-xl font-bold font-display text-mint">${retirementPlanning.currentSavings.toLocaleString()}</p>
                </div>
                <div className="p-3 rounded-xl bg-muted/30 text-center">
                  <p className="text-xs text-muted-foreground">Monthly Contribution</p>
                  <p className="text-xl font-bold font-display">${retirementPlanning.monthlyContribution.toLocaleString()}</p>
                </div>
              </div>
              <ResponsiveContainer width="100%" height={200}>
                <AreaChart data={retirementPlanning.projections}>
                  <defs>
                    <linearGradient id="retireGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="hsl(var(--mint))" stopOpacity={0.3} />
                      <stop offset="100%" stopColor="hsl(var(--mint))" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="age" tick={{ fontSize: 10 }} />
                  <YAxis tickFormatter={v => `$${(v / 1000).toFixed(0)}k`} tick={{ fontSize: 10 }} />
                  <Tooltip formatter={(v: number) => `$${v.toLocaleString()}`} />
                  <Area type="monotone" dataKey="projected" stroke="hsl(var(--mint))" fill="url(#retireGrad)" strokeWidth={2} name="Projected" />
                </AreaChart>
              </ResponsiveContainer>
              <p className="text-center text-xs text-muted-foreground mt-2">
                On track: {retirementPlanning.onTrack ? <span className="text-mint font-bold">Yes ✓</span> : <span className="text-destructive font-bold">Needs attention ⚠️</span>}
                {" "} • Target: ${retirementPlanning.target.toLocaleString()}
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        {/* LEGACY */}
        <TabsContent value="legacy" className="space-y-6 mt-4">
          <Card className="pillar-card">
            <CardHeader className="pb-2"><CardTitle className="font-display text-lg flex items-center gap-2"><Shield className="w-5 h-5 text-primary" /> Legacy Planning</CardTitle></CardHeader>
            <CardContent className="space-y-3">
              {legacyPlanning.map(l => (
                <div key={l.id} className={`flex items-center gap-3 p-3 rounded-xl ${l.status === "none" ? "bg-destructive/5 border border-destructive/20" : "bg-muted/30"}`}>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${l.status === "done" ? "bg-mint-light" : l.status === "in-progress" ? "bg-amber-light" : "bg-destructive/10"}`}>
                    <BookOpen className={`w-5 h-5 ${l.status === "done" ? "text-mint" : l.status === "in-progress" ? "text-amber" : "text-destructive"}`} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{l.document}</p>
                    <p className="text-xs text-muted-foreground">{l.description}</p>
                  </div>
                  <Badge variant={l.status === "done" ? "default" : l.status === "in-progress" ? "secondary" : "destructive"} className="text-[10px]">
                    {l.status === "done" ? "✓ Done" : l.status === "in-progress" ? "In Progress" : "Not Started"}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        {/* TRAVEL */}
        <TabsContent value="travel" className="space-y-6 mt-4">
          <Card className="pillar-card">
            <CardHeader className="pb-2"><CardTitle className="font-display text-lg flex items-center gap-2"><Globe className="w-5 h-5 text-primary" /> Travel Dreams</CardTitle></CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {futurePlanningData.travelBucketList.map((t, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-muted/30 hover:bg-muted/50 cursor-pointer transition-all">
                    <div className="flex items-center justify-between mb-1">
                      <p className="font-semibold text-sm">{t.destination}</p>
                      <Badge variant="secondary" className="text-[10px]">{t.season || ""}</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">Budget: ${t.budget.toLocaleString()} • Saved: ${t.saved.toLocaleString()}</p>
                    <div className="mt-2">
                      <Progress value={(t.saved / t.budget) * 100} className="h-2" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
