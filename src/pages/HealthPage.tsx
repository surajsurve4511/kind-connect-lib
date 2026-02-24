import { Activity, Heart as HeartIcon, Brain, Dumbbell, Apple, Pill, Calendar, Moon, Droplets, User } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { healthData } from "@/data/mockData";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip, BarChart, Bar } from "recharts";

export default function HealthPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-2xl bg-lavender flex items-center justify-center">
          <Activity className="w-5 h-5 text-primary-foreground" />
        </div>
        <div>
          <h1 className="font-display text-2xl font-bold">Health & Wellness</h1>
          <p className="text-sm text-muted-foreground">Taking care of yourselves, together</p>
        </div>
      </div>

      <Tabs defaultValue="profiles" className="space-y-4">
        <TabsList className="bg-muted/50 rounded-xl p-1">
          <TabsTrigger value="profiles" className="rounded-lg">Health Profiles</TabsTrigger>
          <TabsTrigger value="fitness" className="rounded-lg">Fitness</TabsTrigger>
          <TabsTrigger value="mental" className="rounded-lg">Mental Health</TabsTrigger>
          <TabsTrigger value="nutrition" className="rounded-lg">Nutrition</TabsTrigger>
          <TabsTrigger value="medical" className="rounded-lg">Medical</TabsTrigger>
        </TabsList>

        <TabsContent value="profiles" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {healthData.profiles.map((p, i) => (
              <Card key={i} className="pillar-card">
                <CardContent className="p-5">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold text-primary-foreground ${i === 0 ? "gradient-coral" : "gradient-sky"}`}>
                      {p.name[0]}
                    </div>
                    <div>
                      <p className="font-display font-bold text-lg">{p.name}</p>
                      <p className="text-xs text-muted-foreground">Age {p.age} • Blood Type: {p.bloodType}</p>
                    </div>
                    <div className="ml-auto text-center">
                      <div className="relative w-14 h-14">
                        <svg viewBox="0 0 60 60" className="w-full h-full -rotate-90">
                          <circle cx="30" cy="30" r="24" fill="none" stroke="hsl(var(--muted))" strokeWidth="5" />
                          <circle cx="30" cy="30" r="24" fill="none" stroke="hsl(var(--mint))" strokeWidth="5"
                            strokeDasharray={`${p.healthScore * 1.5} 150`} strokeLinecap="round" />
                        </svg>
                        <span className="absolute inset-0 flex items-center justify-center text-sm font-bold">{p.healthScore}</span>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-3 text-xs">
                    <div className="p-2 rounded-lg bg-muted/50">
                      <p className="text-muted-foreground">Conditions</p>
                      <p className="font-medium mt-1">{p.conditions.length > 0 ? p.conditions.join(", ") : "None"}</p>
                    </div>
                    <div className="p-2 rounded-lg bg-muted/50">
                      <p className="text-muted-foreground">Medications</p>
                      <p className="font-medium mt-1">{p.medications.map(m => m.name).join(", ")}</p>
                    </div>
                    <div className="p-2 rounded-lg bg-muted/50">
                      <p className="text-muted-foreground">Allergies</p>
                      <p className="font-medium mt-1">{p.allergies.length > 0 ? p.allergies.join(", ") : "None"}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Water Intake */}
          <Card className="pillar-card">
            <CardHeader className="pb-2">
              <CardTitle className="font-display text-base flex items-center gap-2">
                <Droplets className="w-4 h-4 text-sky" /> Water Intake Today
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-4">
              {["Alex", "Jordan"].map((name, i) => {
                const intake = i === 0 ? healthData.waterIntake.alex : healthData.waterIntake.jordan;
                return (
                  <div key={name} className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-primary-foreground ${i === 0 ? "gradient-coral" : "gradient-sky"}`}>{name[0]}</div>
                    <div className="flex-1">
                      <p className="text-sm">{name}: {intake}/{healthData.waterIntake.goal} glasses</p>
                      <Progress value={(intake / healthData.waterIntake.goal) * 100} className="h-2 mt-1" />
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="fitness" className="space-y-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {Object.entries(healthData.fitnessStats).map(([name, stats]) => (
              <>
                <Card key={`${name}-steps`} className="pillar-card">
                  <CardContent className="p-4 text-center">
                    <p className="text-[10px] text-muted-foreground capitalize">{name}'s Steps</p>
                    <p className="text-2xl font-bold font-display mt-1">{stats.steps.toLocaleString()}</p>
                    <p className="text-[10px] text-muted-foreground">/ 10,000 goal</p>
                    <Progress value={(stats.steps / 10000) * 100} className="h-2 mt-2" />
                  </CardContent>
                </Card>
                <Card key={`${name}-active`} className="pillar-card">
                  <CardContent className="p-4 text-center">
                    <p className="text-[10px] text-muted-foreground capitalize">{name}'s Active Min</p>
                    <p className="text-2xl font-bold font-display mt-1">{stats.activeMinutes}</p>
                    <p className="text-[10px] text-muted-foreground">{stats.workoutsThisWeek} workouts this week</p>
                  </CardContent>
                </Card>
              </>
            ))}
          </div>

          <Card className="pillar-card">
            <CardHeader className="pb-2">
              <CardTitle className="font-display text-base flex items-center gap-2">
                <Moon className="w-4 h-4" /> Sleep Patterns
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={healthData.sleepData}>
                  <XAxis dataKey="day" tick={{ fontSize: 11 }} />
                  <YAxis domain={[0, 12]} tick={{ fontSize: 11 }} />
                  <Tooltip />
                  <Bar dataKey="alex" fill="hsl(8,76%,65%)" radius={[4,4,0,0]} name="Alex" />
                  <Bar dataKey="jordan" fill="hsl(200,70%,60%)" radius={[4,4,0,0]} name="Jordan" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="mental" className="space-y-6">
          <Card className="pillar-card">
            <CardHeader className="pb-2">
              <CardTitle className="font-display text-base flex items-center gap-2">
                <Brain className="w-4 h-4" /> Mood Trends
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={healthData.moodHistory}>
                  <XAxis dataKey="date" tick={{ fontSize: 11 }} />
                  <YAxis domain={[0, 10]} tick={{ fontSize: 11 }} />
                  <Tooltip />
                  <Line type="monotone" dataKey="alex" stroke="hsl(8,76%,65%)" strokeWidth={2} dot={{ r: 4 }} name="Alex" />
                  <Line type="monotone" dataKey="jordan" stroke="hsl(200,70%,60%)" strokeWidth={2} dot={{ r: 4 }} name="Jordan" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "5-Minute Calm", duration: "5 min", type: "Breathing", emoji: "🧘" },
              { title: "Couples Meditation", duration: "10 min", type: "Guided", emoji: "💑" },
              { title: "Sleep Sound", duration: "30 min", type: "Sleep", emoji: "🌙" },
              { title: "Stress Relief", duration: "7 min", type: "Breathing", emoji: "🌊" },
              { title: "Morning Gratitude", duration: "5 min", type: "Reflection", emoji: "☀️" },
              { title: "Body Scan", duration: "15 min", type: "Guided", emoji: "✨" },
            ].map((s, i) => (
              <Card key={i} className="pillar-card hover:border-lavender/30 cursor-pointer">
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="text-2xl">{s.emoji}</div>
                  <div>
                    <p className="text-sm font-semibold">{s.title}</p>
                    <p className="text-[10px] text-muted-foreground">{s.duration} • {s.type}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="nutrition" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="pillar-card">
              <CardHeader className="pb-2">
                <CardTitle className="font-display text-base flex items-center gap-2">
                  <Apple className="w-4 h-4" /> Today's Macros
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { name: "Calories", current: 1650, target: 2000, color: "coral" },
                  { name: "Protein", current: 85, target: 120, color: "sky", unit: "g" },
                  { name: "Carbs", current: 180, target: 250, color: "amber", unit: "g" },
                  { name: "Fat", current: 55, target: 65, color: "mint", unit: "g" },
                ].map((m, i) => (
                  <div key={i} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>{m.name}</span>
                      <span className="text-muted-foreground">{m.current}{m.unit || ""} / {m.target}{m.unit || ""}</span>
                    </div>
                    <Progress value={(m.current / m.target) * 100} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="pillar-card">
              <CardHeader className="pb-2">
                <CardTitle className="font-display text-base flex items-center gap-2">
                  <Pill className="w-4 h-4" /> Supplements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {[
                  { name: "Vitamin D", dose: "1000 IU", taken: true },
                  { name: "Omega-3", dose: "1000mg", taken: true },
                  { name: "Magnesium", dose: "400mg", taken: false },
                  { name: "Probiotic", dose: "1 capsule", taken: false },
                ].map((s, i) => (
                  <div key={i} className={`flex items-center gap-3 p-2 rounded-lg ${s.taken ? "bg-mint-light/30" : "bg-muted/30"}`}>
                    <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs ${s.taken ? "bg-mint text-primary-foreground" : "border border-border"}`}>
                      {s.taken ? "✓" : ""}
                    </span>
                    <div>
                      <p className="text-sm font-medium">{s.name}</p>
                      <p className="text-[10px] text-muted-foreground">{s.dose}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="medical" className="space-y-4">
          <Card className="pillar-card">
            <CardHeader className="pb-2">
              <CardTitle className="font-display text-base flex items-center gap-2">
                <Calendar className="w-4 h-4" /> Upcoming Appointments
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {healthData.appointments.map(a => (
                <div key={a.id} className="flex items-center gap-3 p-3 rounded-xl bg-muted/30">
                  <div className="w-10 h-10 rounded-xl bg-lavender-light flex items-center justify-center">
                    <Calendar className="w-4 h-4 text-lavender" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{a.title}</p>
                    <p className="text-[10px] text-muted-foreground">{a.date} • {a.doctor}</p>
                  </div>
                  <span className="text-[10px] px-2 py-1 rounded-full bg-muted">{a.type}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
