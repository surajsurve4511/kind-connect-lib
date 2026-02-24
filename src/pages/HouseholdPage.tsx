import { Home, CheckCircle2, Wrench, Package, Truck, Zap, Camera, Snowflake, Star, Phone, ShieldCheck, ClipboardList } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { householdData } from "@/data/mockData";
import { serviceProviders, homeAppliances, movingChecklist, energyUsage, seasonalMaintenance } from "@/data/extendedMockData";
import { LifeStageHeader } from "@/components/shared/LifeStageHeader";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, LineChart, Line, Legend } from "recharts";

export default function HouseholdPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2 mb-2"><LifeStageHeader /></div>
          <h1 className="font-display text-2xl font-bold flex items-center gap-2"><Home className="w-6 h-6 text-sky" /> Household</h1>
          <p className="text-sm text-muted-foreground">Manage your home together, fairly</p>
        </div>
      </div>

      <Tabs defaultValue="tasks" className="w-full">
        <TabsList className="w-full flex flex-wrap h-auto gap-1 bg-muted/30 p-1 rounded-2xl">
          {["tasks", "chore-setup", "grocery", "meal-plan", "services", "appliances", "energy", "maintenance", "moving"].map(t => (
            <TabsTrigger key={t} value={t} className="rounded-xl text-xs capitalize">{t.replace(/-/g, " ")}</TabsTrigger>
          ))}
        </TabsList>

        {/* TASKS TAB */}
        <TabsContent value="tasks" className="space-y-6 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Chore Distribution */}
            <Card className="pillar-card">
              <CardHeader className="pb-2"><CardTitle className="font-display text-lg">Chore Balance</CardTitle></CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 mb-3">
                  <div className="flex-1">
                    <div className="flex justify-between text-sm mb-1"><span>Alex</span><span>{householdData.choreDistribution.Alex}%</span></div>
                    <div className="h-3 bg-muted rounded-full overflow-hidden"><div className="h-full gradient-coral rounded-full" style={{ width: `${householdData.choreDistribution.Alex}%` }} /></div>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between text-sm mb-1"><span>Jordan</span><span>{householdData.choreDistribution.Jordan}%</span></div>
                    <div className="h-3 bg-muted rounded-full overflow-hidden"><div className="h-full gradient-sky rounded-full" style={{ width: `${householdData.choreDistribution.Jordan}%` }} /></div>
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs p-2 rounded-xl bg-muted/30">
                  <span>🏆 Points: Alex {householdData.gamificationPoints.Alex}</span>
                  <span>Jordan {householdData.gamificationPoints.Jordan}</span>
                </div>
              </CardContent>
            </Card>

            {/* Task List */}
            <Card className="pillar-card md:col-span-2">
              <CardHeader className="pb-2">
                <CardTitle className="font-display text-lg flex items-center gap-2"><ClipboardList className="w-5 h-5 text-sky" /> Tasks</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {householdData.tasks.map(t => (
                  <div key={t.id} className={`flex items-center gap-3 p-3 rounded-xl transition-colors ${t.completed ? "bg-muted/20 opacity-60" : "bg-muted/30 hover:bg-muted/50"}`}>
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${t.completed ? "bg-mint border-mint" : "border-border"}`}>
                      {t.completed && <CheckCircle2 className="w-3 h-3 text-white" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className={`text-sm font-medium ${t.completed ? "line-through" : ""}`}>{t.title}</p>
                      <div className="flex items-center gap-2 mt-0.5">
                        <Badge variant="secondary" className="text-[10px]">{t.assignee}</Badge>
                        <Badge variant={t.priority === "high" ? "destructive" : "secondary"} className="text-[10px]">{t.priority}</Badge>
                        <span className="text-[10px] text-muted-foreground">{t.recurring}</span>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-amber">+{t.points} pts</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Maintenance Alerts */}
          <Card className="pillar-card">
            <CardHeader className="pb-2"><CardTitle className="font-display text-lg flex items-center gap-2"><Wrench className="w-5 h-5 text-amber" /> Maintenance</CardTitle></CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {householdData.maintenance.map(m => (
                  <div key={m.id} className={`p-3 rounded-xl ${m.status === "overdue" ? "bg-destructive/5 border border-destructive/20" : "bg-muted/30"}`}>
                    <p className="text-sm font-medium">{m.task}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant={m.status === "overdue" ? "destructive" : "secondary"} className="text-[10px]">{m.status}</Badge>
                      <span className="text-xs text-muted-foreground">Due: {m.due}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* CHORE SETUP TAB */}
        <TabsContent value="chore-setup" className="space-y-6 mt-4">
          <Card className="pillar-card">
            <CardHeader className="pb-2"><CardTitle className="font-display text-lg">Fair Chore Distribution Setup</CardTitle></CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">Take a quick quiz to assign chores based on preference, schedule, and capacity</p>
              <div className="space-y-4">
                {[
                  { q: "Do you prefer indoor or outdoor chores?", opts: ["Indoor", "Outdoor", "No preference"] },
                  { q: "Morning person or night owl?", opts: ["Morning", "Night", "Flexible"] },
                  { q: "Do you enjoy cooking?", opts: ["Love it", "It's okay", "Not really"] },
                ].map((q, i) => (
                  <div key={i} className="p-4 rounded-xl bg-muted/30">
                    <p className="text-sm font-medium mb-2">{q.q}</p>
                    <div className="flex gap-2">
                      {q.opts.map(o => (
                        <button key={o} className="px-4 py-2 rounded-xl border border-border/50 text-sm hover:border-primary hover:bg-primary/5 transition-colors">{o}</button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <button className="mt-4 w-full py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-medium">Generate Fair Distribution ✨</button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* GROCERY TAB */}
        <TabsContent value="grocery" className="space-y-6 mt-4">
          <Card className="pillar-card">
            <CardHeader className="pb-2"><CardTitle className="font-display text-lg">Grocery List</CardTitle></CardHeader>
            <CardContent>
              <div className="space-y-2">
                {householdData.groceryList.map(g => (
                  <div key={g.id} className="flex items-center gap-3 p-2 rounded-xl hover:bg-muted/30 transition-colors">
                    <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${g.checked ? "bg-mint border-mint" : "border-border"}`}>
                      {g.checked && <CheckCircle2 className="w-3 h-3 text-white" />}
                    </div>
                    <span className={`text-sm flex-1 ${g.checked ? "line-through opacity-50" : ""}`}>{g.item}</span>
                    <Badge variant="secondary" className="text-[10px]">{g.category}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* MEAL PLAN TAB */}
        <TabsContent value="meal-plan" className="space-y-6 mt-4">
          <Card className="pillar-card">
            <CardHeader className="pb-2"><CardTitle className="font-display text-lg">Weekly Meal Plan</CardTitle></CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead><tr className="border-b">
                    <th className="text-left py-2 font-semibold">Day</th>
                    <th className="text-left py-2 font-semibold">Breakfast</th>
                    <th className="text-left py-2 font-semibold">Lunch</th>
                    <th className="text-left py-2 font-semibold">Dinner</th>
                  </tr></thead>
                  <tbody>
                    {householdData.mealPlan.map(m => (
                      <tr key={m.day} className="border-b border-border/30 hover:bg-muted/30">
                        <td className="py-2 font-medium">{m.day}</td>
                        <td className="py-2">{m.breakfast}</td>
                        <td className="py-2">{m.lunch}</td>
                        <td className="py-2">{m.dinner}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* SERVICES TAB */}
        <TabsContent value="services" className="space-y-6 mt-4">
          <Card className="pillar-card">
            <CardHeader className="pb-2"><CardTitle className="font-display text-lg flex items-center gap-2"><Phone className="w-5 h-5 text-sky" /> Service Providers</CardTitle></CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {serviceProviders.map(sp => (
                  <div key={sp.id} className="p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors">
                    <div className="flex items-center justify-between mb-1">
                      <p className="font-semibold text-sm">{sp.name}</p>
                      {sp.verified && <Badge className="text-[10px] bg-mint/10 text-mint"><ShieldCheck className="w-3 h-3 mr-1" /> Verified</Badge>}
                    </div>
                    <p className="text-xs text-muted-foreground">{sp.category} • ⭐ {sp.rating}</p>
                    <p className="text-xs text-muted-foreground mt-1">📞 {sp.phone}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* APPLIANCES TAB */}
        <TabsContent value="appliances" className="space-y-6 mt-4">
          <Card className="pillar-card">
            <CardHeader className="pb-2"><CardTitle className="font-display text-lg flex items-center gap-2"><Package className="w-5 h-5 text-sky" /> Home Appliance Vault</CardTitle></CardHeader>
            <CardContent>
              <div className="space-y-3">
                {homeAppliances.map(a => (
                  <div key={a.id} className="p-4 rounded-xl bg-muted/30">
                    <div className="flex items-center justify-between">
                      <p className="font-semibold text-sm">{a.name}</p>
                      <Badge variant="secondary" className="text-[10px]">{a.room}</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">Model: {a.model}</p>
                    <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground">
                      <span>Purchased: {a.purchaseDate}</span>
                      <span className={new Date(a.warrantyExpiry) < new Date() ? "text-destructive" : "text-mint"}>
                        Warranty: {a.warrantyExpiry}
                      </span>
                    </div>
                  </div>
                ))}
                <button className="w-full py-2.5 rounded-xl border-2 border-dashed border-primary/30 text-primary text-sm font-medium hover:bg-primary/5">+ Add Appliance</button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* ENERGY TAB */}
        <TabsContent value="energy" className="space-y-6 mt-4">
          <Card className="pillar-card">
            <CardHeader className="pb-2"><CardTitle className="font-display text-lg flex items-center gap-2"><Zap className="w-5 h-5 text-amber" /> Energy Dashboard</CardTitle></CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={energyUsage}>
                  <XAxis dataKey="month" tick={{ fontSize: 11 }} />
                  <YAxis tick={{ fontSize: 11 }} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="electricity" fill="hsl(var(--amber))" name="Electricity ($)" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="gas" fill="hsl(var(--sky))" name="Gas ($)" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="water" fill="hsl(var(--mint))" name="Water ($)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        {/* MAINTENANCE TAB */}
        <TabsContent value="maintenance" className="space-y-6 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(seasonalMaintenance).map(([season, tasks]) => (
              <Card key={season} className="pillar-card">
                <CardHeader className="pb-2">
                  <CardTitle className="font-display text-lg capitalize flex items-center gap-2">
                    <Snowflake className="w-5 h-5 text-sky" /> {season}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {tasks.map((t, i) => (
                    <div key={i} className="flex items-center gap-2 p-2 rounded-xl bg-muted/30">
                      <div className="w-5 h-5 rounded border-2 border-border" />
                      <span className="text-sm">{t}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* MOVING TAB */}
        <TabsContent value="moving" className="space-y-6 mt-4">
          <Card className="pillar-card">
            <CardHeader className="pb-2"><CardTitle className="font-display text-lg flex items-center gap-2"><Truck className="w-5 h-5 text-sky" /> Moving & Relocation Planner</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              {movingChecklist.map((w, i) => (
                <div key={i} className="p-4 rounded-xl bg-muted/30">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-semibold text-sm">{w.week} before</p>
                    <span className="text-xs text-muted-foreground">{w.completed}/{w.total} done</span>
                  </div>
                  <Progress value={(w.completed / w.total) * 100} className="h-2 mb-2" />
                  <div className="space-y-1">
                    {w.tasks.map((t, j) => (
                      <div key={j} className="flex items-center gap-2 text-sm">
                        <div className={`w-4 h-4 rounded border ${j < w.completed ? "bg-mint border-mint" : "border-border"}`} />
                        <span className={j < w.completed ? "line-through opacity-50" : ""}>{t}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
