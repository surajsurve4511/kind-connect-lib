import { Target, Map, Home, Calculator, Clock, Plane, Star, FileText, Heart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { futurePlanningData } from "@/data/mockData";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";

export default function FuturePage() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-2xl gradient-coral flex items-center justify-center">
          <Target className="w-5 h-5 text-primary-foreground" />
        </div>
        <div>
          <h1 className="font-display text-2xl font-bold">Future Planning & Life Goals</h1>
          <p className="text-sm text-muted-foreground">Dreaming big, planning together</p>
        </div>
      </div>

      <Tabs defaultValue="bucketlist" className="space-y-4">
        <TabsList className="bg-muted/50 rounded-xl p-1">
          <TabsTrigger value="bucketlist" className="rounded-lg">Bucket List</TabsTrigger>
          <TabsTrigger value="property" className="rounded-lg">Property</TabsTrigger>
          <TabsTrigger value="retirement" className="rounded-lg">Retirement</TabsTrigger>
          <TabsTrigger value="travel" className="rounded-lg">Travel</TabsTrigger>
          <TabsTrigger value="estate" className="rounded-lg">Estate</TabsTrigger>
        </TabsList>

        <TabsContent value="bucketlist" className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {futurePlanningData.bucketList.map(item => (
              <Card key={item.id} className="pillar-card hover:border-primary/30 cursor-pointer">
                <CardContent className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-[10px] px-2 py-1 rounded-full ${
                      item.priority === "high" ? "bg-coral-light text-coral" :
                      item.priority === "medium" ? "bg-amber-light text-amber" : "bg-muted text-muted-foreground"
                    }`}>{item.priority}</span>
                    <span className="text-[10px] text-muted-foreground">{item.category}</span>
                  </div>
                  <p className="font-semibold text-sm">{item.title}</p>
                  <Progress value={item.progress} className="h-2 mt-3" />
                  <p className="text-[10px] text-right text-muted-foreground mt-1">{item.progress}%</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="property" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="pillar-card">
              <CardHeader className="pb-2">
                <CardTitle className="font-display text-base flex items-center gap-2">
                  <Home className="w-4 h-4" /> Home Buying Readiness
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center">
                <div className="relative w-32 h-32 my-2">
                  <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
                    <circle cx="60" cy="60" r="50" fill="none" stroke="hsl(var(--muted))" strokeWidth="8" />
                    <circle cx="60" cy="60" r="50" fill="none" stroke="hsl(var(--sky))" strokeWidth="8"
                      strokeDasharray={`${futurePlanningData.propertyPlanning.readinessScore * 3.14} 314`} strokeLinecap="round" />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-2xl font-bold font-display">{futurePlanningData.propertyPlanning.readinessScore}%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="pillar-card">
              <CardHeader className="pb-2">
                <CardTitle className="font-display text-base flex items-center gap-2">
                  <Calculator className="w-4 h-4" /> Mortgage Calculator
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 rounded-xl bg-muted/30 flex justify-between">
                  <span className="text-sm">Target Price</span>
                  <span className="font-semibold">${futurePlanningData.propertyPlanning.targetPrice.toLocaleString()}</span>
                </div>
                <div className="p-3 rounded-xl bg-muted/30 flex justify-between">
                  <span className="text-sm">Down Payment</span>
                  <span className="font-semibold">${futurePlanningData.propertyPlanning.currentSaved.toLocaleString()} / ${futurePlanningData.propertyPlanning.downPaymentTarget.toLocaleString()}</span>
                </div>
                <Progress value={(futurePlanningData.propertyPlanning.currentSaved / futurePlanningData.propertyPlanning.downPaymentTarget) * 100} className="h-3" />
                <div className="p-3 rounded-xl bg-muted/30 flex justify-between">
                  <span className="text-sm">Est. Monthly Mortgage</span>
                  <span className="font-semibold">${futurePlanningData.propertyPlanning.monthlyMortgage.toLocaleString()}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="retirement" className="space-y-6">
          <Card className="pillar-card">
            <CardHeader className="pb-2">
              <CardTitle className="font-display text-base flex items-center gap-2">
                <Clock className="w-4 h-4" /> Retirement Projections
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-3 mb-4">
                <div className="p-3 rounded-xl bg-muted/30 text-center">
                  <p className="text-[10px] text-muted-foreground">Target Age</p>
                  <p className="text-xl font-bold font-display">{futurePlanningData.retirementData.targetAge}</p>
                </div>
                <div className="p-3 rounded-xl bg-muted/30 text-center">
                  <p className="text-[10px] text-muted-foreground">Years Left</p>
                  <p className="text-xl font-bold font-display">{futurePlanningData.retirementData.targetAge - futurePlanningData.retirementData.currentAge}</p>
                </div>
                <div className="p-3 rounded-xl bg-mint-light/30 text-center">
                  <p className="text-[10px] text-muted-foreground">Projected</p>
                  <p className="text-xl font-bold font-display text-mint">${(futurePlanningData.retirementData.projectedAt60 / 1000000).toFixed(1)}M</p>
                </div>
              </div>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={futurePlanningData.retirementData.projections}>
                  <XAxis dataKey="age" tick={{ fontSize: 11 }} />
                  <YAxis tickFormatter={(v) => `$${(v / 1000000).toFixed(1)}M`} tick={{ fontSize: 11 }} />
                  <Tooltip formatter={(v: number) => `$${v.toLocaleString()}`} />
                  <Line type="monotone" dataKey="savings" stroke="hsl(160,50%,55%)" strokeWidth={2} dot={{ r: 4 }} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="travel" className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {futurePlanningData.travelBucketList.map((t, i) => (
              <Card key={i} className="pillar-card hover:border-primary/30 cursor-pointer">
                <CardContent className="p-5 text-center">
                  <div className="text-3xl mb-2">{i === 0 ? "🗼" : i === 1 ? "🏔️" : "🏖️"}</div>
                  <p className="font-semibold text-sm">{t.destination}</p>
                  <p className="text-[10px] text-muted-foreground">Best in {t.season}</p>
                  <Progress value={(t.saved / t.budget) * 100} className="h-2 mt-3" />
                  <p className="text-[10px] text-muted-foreground mt-1">${t.saved} / ${t.budget} saved</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="estate" className="space-y-4">
          <Card className="pillar-card">
            <CardHeader className="pb-2">
              <CardTitle className="font-display text-base flex items-center gap-2">
                <FileText className="w-4 h-4" /> Estate Planning Checklist
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {[
                { item: "Create/update wills", done: true },
                { item: "Designate beneficiaries", done: true },
                { item: "Power of attorney", done: false },
                { item: "Healthcare directive", done: false },
                { item: "Life insurance review", done: true },
                { item: "Digital asset inventory", done: false },
                { item: "Legacy letter", done: false },
              ].map((e, i) => (
                <div key={i} className={`flex items-center gap-3 p-2 rounded-lg ${e.done ? "bg-mint-light/30" : "bg-muted/30"}`}>
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${e.done ? "bg-mint text-primary-foreground" : "border border-border"}`}>
                    {e.done ? "✓" : ""}
                  </span>
                  <span className={`text-sm ${e.done ? "line-through opacity-60" : ""}`}>{e.item}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
