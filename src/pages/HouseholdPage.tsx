import { Home, CheckCircle2, ShoppingCart, Wrench, Zap, Trophy, User, BarChart3, UtensilsCrossed } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import { householdData } from "@/data/mockData";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, Cell } from "recharts";

const distributionData = [
  { name: "Alex", value: householdData.choreDistribution.Alex, fill: "hsl(8, 76%, 65%)" },
  { name: "Jordan", value: householdData.choreDistribution.Jordan, fill: "hsl(200, 70%, 60%)" },
];

export default function HouseholdPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-2xl gradient-sky flex items-center justify-center">
          <Home className="w-5 h-5 text-primary-foreground" />
        </div>
        <div>
          <h1 className="font-display text-2xl font-bold">Home & Household</h1>
          <p className="text-sm text-muted-foreground">Running your home together, seamlessly</p>
        </div>
      </div>

      <Tabs defaultValue="tasks" className="space-y-4">
        <TabsList className="bg-muted/50 rounded-xl p-1">
          <TabsTrigger value="tasks" className="rounded-lg">Tasks & Chores</TabsTrigger>
          <TabsTrigger value="grocery" className="rounded-lg">Grocery & Meals</TabsTrigger>
          <TabsTrigger value="maintenance" className="rounded-lg">Maintenance</TabsTrigger>
          <TabsTrigger value="smarthome" className="rounded-lg">Smart Home</TabsTrigger>
        </TabsList>

        <TabsContent value="tasks" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Task Distribution */}
            <Card className="pillar-card">
              <CardHeader className="pb-2">
                <CardTitle className="font-display text-base flex items-center gap-2">
                  <BarChart3 className="w-4 h-4" /> Fair Distribution
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={150}>
                  <BarChart data={distributionData} layout="vertical">
                    <XAxis type="number" domain={[0, 100]} hide />
                    <YAxis type="category" dataKey="name" tick={{ fontSize: 12 }} width={60} />
                    <Tooltip formatter={(v: number) => `${v}%`} />
                    <Bar dataKey="value" radius={[0, 8, 8, 0]} barSize={24}>
                      {distributionData.map((entry, i) => (
                        <Cell key={i} fill={entry.fill} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
                <p className="text-xs text-center text-muted-foreground mt-2">
                  {Math.abs(householdData.choreDistribution.Alex - householdData.choreDistribution.Jordan) <= 10
                    ? "✅ Great balance!" : "⚠️ Slightly uneven — consider adjusting"}
                </p>
              </CardContent>
            </Card>

            {/* Gamification */}
            <Card className="pillar-card">
              <CardHeader className="pb-2">
                <CardTitle className="font-display text-base flex items-center gap-2">
                  <Trophy className="w-4 h-4 text-amber" /> Points Leaderboard
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {Object.entries(householdData.gamificationPoints).map(([name, pts]) => (
                  <div key={name} className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-primary-foreground ${name === "Alex" ? "gradient-coral" : "gradient-sky"}`}>
                      {name[0]}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between text-sm">
                        <span className="font-semibold">{name}</span>
                        <span className="text-amber font-bold">{pts} pts</span>
                      </div>
                      <Progress value={(pts / 200) * 100} className="h-2 mt-1" />
                    </div>
                  </div>
                ))}
                <p className="text-[10px] text-center text-muted-foreground">Complete tasks to earn more points! 🎮</p>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="pillar-card">
              <CardHeader className="pb-2">
                <CardTitle className="font-display text-base">Quick Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 rounded-xl bg-muted/50 flex justify-between">
                  <span className="text-sm">Tasks Due Today</span>
                  <span className="text-sm font-bold">{householdData.tasks.filter(t => !t.completed).length}</span>
                </div>
                <div className="p-3 rounded-xl bg-muted/50 flex justify-between">
                  <span className="text-sm">Completed This Week</span>
                  <span className="text-sm font-bold text-mint">{householdData.tasks.filter(t => t.completed).length}</span>
                </div>
                <div className="p-3 rounded-xl bg-amber-light/50 flex justify-between">
                  <span className="text-sm">Overdue</span>
                  <span className="text-sm font-bold text-amber">{householdData.maintenance.filter(m => m.status === "overdue").length}</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Task List */}
          <Card className="pillar-card">
            <CardHeader className="pb-2">
              <CardTitle className="font-display text-base">All Tasks</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {householdData.tasks.map(task => (
                <div key={task.id} className={`flex items-center gap-3 p-3 rounded-xl transition-colors ${task.completed ? "bg-muted/30 opacity-60" : "hover:bg-muted/50"}`}>
                  <Checkbox checked={task.completed} />
                  <div className="flex-1 min-w-0">
                    <p className={`text-sm font-medium ${task.completed ? "line-through" : ""}`}>{task.title}</p>
                    <p className="text-[10px] text-muted-foreground">{task.recurring} • {task.points} pts</p>
                  </div>
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold text-primary-foreground ${task.assignee === "Alex" ? "gradient-coral" : "gradient-sky"}`}>
                    {task.assignee[0]}
                  </div>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                    task.priority === "high" ? "bg-destructive/10 text-destructive" :
                    task.priority === "medium" ? "bg-amber-light text-amber" : "bg-muted text-muted-foreground"
                  }`}>{task.priority}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="grocery" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Shopping List */}
            <Card className="pillar-card">
              <CardHeader className="pb-2">
                <CardTitle className="font-display text-base flex items-center gap-2">
                  <ShoppingCart className="w-4 h-4" /> Shopping List
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {householdData.groceryList.map(item => (
                  <div key={item.id} className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50">
                    <Checkbox checked={item.checked} />
                    <span className={`text-sm flex-1 ${item.checked ? "line-through opacity-50" : ""}`}>{item.item}</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-muted text-muted-foreground">{item.category}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Meal Plan */}
            <Card className="pillar-card">
              <CardHeader className="pb-2">
                <CardTitle className="font-display text-base flex items-center gap-2">
                  <UtensilsCrossed className="w-4 h-4" /> Weekly Meal Plan
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {householdData.mealPlan.map(day => (
                    <div key={day.day} className="grid grid-cols-4 gap-2 p-2 rounded-lg hover:bg-muted/30 text-sm">
                      <span className="font-semibold">{day.day}</span>
                      <span className="text-muted-foreground">{day.breakfast}</span>
                      <span className="text-muted-foreground">{day.lunch}</span>
                      <span className="text-muted-foreground">{day.dinner}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="maintenance" className="space-y-4">
          <Card className="pillar-card">
            <CardHeader className="pb-2">
              <CardTitle className="font-display text-base flex items-center gap-2">
                <Wrench className="w-4 h-4" /> Maintenance Calendar
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {householdData.maintenance.map(m => (
                <div key={m.id} className={`flex items-center gap-3 p-3 rounded-xl ${m.status === "overdue" ? "bg-destructive/5 border border-destructive/20" : "bg-muted/30"}`}>
                  <div className={`w-3 h-3 rounded-full ${m.status === "overdue" ? "bg-destructive" : "bg-amber"}`} />
                  <div className="flex-1">
                    <p className="text-sm font-medium">{m.task}</p>
                    <p className="text-[10px] text-muted-foreground">Due: {m.due}</p>
                  </div>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full ${m.status === "overdue" ? "bg-destructive/10 text-destructive" : "bg-amber-light text-amber"}`}>
                    {m.status}
                  </span>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="smarthome" className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: "Living Room Lights", status: "On", icon: "💡", type: "light" },
              { name: "Thermostat", status: "72°F", icon: "🌡️", type: "climate" },
              { name: "Front Door Lock", status: "Locked", icon: "🔒", type: "security" },
              { name: "Robot Vacuum", status: "Charging", icon: "🤖", type: "appliance" },
              { name: "Washer", status: "Idle", icon: "👕", type: "appliance" },
              { name: "Security Camera", status: "Active", icon: "📹", type: "security" },
            ].map((device, i) => (
              <Card key={i} className="pillar-card hover:border-primary/30 cursor-pointer">
                <CardContent className="p-5 flex items-center gap-4">
                  <div className="text-3xl">{device.icon}</div>
                  <div>
                    <p className="text-sm font-semibold">{device.name}</p>
                    <p className="text-xs text-muted-foreground">{device.status}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
