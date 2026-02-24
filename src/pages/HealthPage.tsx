import { Activity, Heart, Pill, TestTube, ShieldCheck, Dumbbell, Moon, Brain, Search, Flame, Apple, Droplets } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { healthData } from "@/data/mockData";
import { medicationSchedule, labResults, preventiveCareSchedule, mentalHealthCheckins, stressHeatmap, nutritionLog, supplements } from "@/data/extendedMockData";
import { LifeStageHeader } from "@/components/shared/LifeStageHeader";
import { PrivateBadge } from "@/components/shared/PrivateBadge";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, LineChart, Line, Legend } from "recharts";

export default function HealthPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2 mb-2"><LifeStageHeader /></div>
          <h1 className="font-display text-2xl font-bold flex items-center gap-2"><Activity className="w-6 h-6 text-lavender" /> Health & Wellness</h1>
          <p className="text-sm text-muted-foreground">Stay healthy together, mind and body</p>
        </div>
      </div>

      <Tabs defaultValue="profiles" className="w-full">
        <TabsList className="w-full flex flex-wrap h-auto gap-1 bg-muted/30 p-1 rounded-2xl">
          {["profiles", "medications", "labs", "preventive", "mood", "sleep", "mental", "stress", "fitness", "nutrition", "supplements"].map(t => (
            <TabsTrigger key={t} value={t} className="rounded-xl text-xs capitalize">{t}</TabsTrigger>
          ))}
        </TabsList>

        {/* PROFILES */}
        <TabsContent value="profiles" className="space-y-6 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {healthData.profiles.map(p => (
              <Card key={p.name} className="pillar-card">
                <CardContent className="p-5">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-14 h-14 rounded-2xl ${p.name === "Alex" ? "gradient-coral" : "gradient-sky"} flex items-center justify-center text-xl font-bold text-white`}>{p.name[0]}</div>
                    <div>
                      <p className="font-display text-lg font-bold">{p.name}</p>
                      <p className="text-xs text-muted-foreground">Age: {p.age} • Blood Type: {p.bloodType}</p>
                    </div>
                    <div className="ml-auto text-right">
                      <p className="text-2xl font-bold text-lavender">{p.healthScore}</p>
                      <p className="text-[10px] text-muted-foreground">Health Score</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="p-2 rounded-xl bg-muted/30">
                      <p className="text-[10px] text-muted-foreground">Conditions</p>
                      <p className="text-xs font-medium">{p.conditions.length > 0 ? p.conditions.join(", ") : "None"}</p>
                    </div>
                    <div className="p-2 rounded-xl bg-muted/30">
                      <p className="text-[10px] text-muted-foreground">Allergies</p>
                      <p className="text-xs font-medium">{p.allergies.length > 0 ? p.allergies.join(", ") : "None"}</p>
                    </div>
                    <div className="p-2 rounded-xl bg-muted/30">
                      <p className="text-[10px] text-muted-foreground">Medications</p>
                      <p className="text-xs font-medium">{p.medications.length}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          {/* Appointments */}
          <Card className="pillar-card">
            <CardHeader className="pb-2"><CardTitle className="font-display text-lg">Upcoming Appointments</CardTitle></CardHeader>
            <CardContent className="space-y-2">
              {healthData.appointments.map(a => (
                <div key={a.id} className="flex items-center gap-3 p-3 rounded-xl bg-muted/30">
                  <div className="w-10 h-10 rounded-xl bg-lavender-light flex items-center justify-center text-lg">🩺</div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{a.title}</p>
                    <p className="text-xs text-muted-foreground">{a.doctor} • {a.type}</p>
                  </div>
                  <Badge variant="secondary" className="text-[10px]">{a.date}</Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        {/* MEDICATIONS */}
        <TabsContent value="medications" className="space-y-6 mt-4">
          <Card className="pillar-card">
            <CardHeader className="pb-2"><CardTitle className="font-display text-lg flex items-center gap-2"><Pill className="w-5 h-5 text-lavender" /> Medication Manager</CardTitle></CardHeader>
            <CardContent className="space-y-3">
              {medicationSchedule.map(m => (
                <div key={m.id} className="flex items-center gap-3 p-3 rounded-xl bg-muted/30">
                  <div className="w-10 h-10 rounded-xl bg-lavender-light flex items-center justify-center"><Pill className="w-5 h-5 text-lavender" /></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{m.name}</p>
                    <p className="text-xs text-muted-foreground">{m.dose} • {m.time} • {m.partner}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">Refill by</p>
                    <p className="text-xs font-medium">{m.refillDate}</p>
                  </div>
                </div>
              ))}
              <button className="w-full py-2 rounded-xl border-2 border-dashed border-primary/30 text-primary text-sm">+ Add Medication</button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* LABS */}
        <TabsContent value="labs" className="space-y-6 mt-4">
          <Card className="pillar-card">
            <CardHeader className="pb-2"><CardTitle className="font-display text-lg flex items-center gap-2"><TestTube className="w-5 h-5 text-lavender" /> Lab Results</CardTitle></CardHeader>
            <CardContent className="space-y-3">
              {labResults.map((l, i) => (
                <div key={i} className={`flex items-center gap-3 p-3 rounded-xl ${l.status === "low" ? "bg-amber-light/50" : "bg-muted/30"}`}>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{l.test}</p>
                    <p className="text-xs text-muted-foreground">Normal range: {l.range}</p>
                  </div>
                  <div className="text-right">
                    <p className={`text-sm font-bold ${l.status === "low" ? "text-amber" : "text-mint"}`}>{l.value} {l.unit}</p>
                    <Badge variant={l.status === "low" ? "default" : "secondary"} className="text-[10px]">{l.status}</Badge>
                  </div>
                </div>
              ))}
              <button className="w-full py-2 rounded-xl border-2 border-dashed border-primary/30 text-primary text-sm">+ Upload Lab Results</button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* PREVENTIVE */}
        <TabsContent value="preventive" className="space-y-6 mt-4">
          <Card className="pillar-card">
            <CardHeader className="pb-2"><CardTitle className="font-display text-lg flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-lavender" /> Preventive Care</CardTitle></CardHeader>
            <CardContent className="space-y-3">
              {preventiveCareSchedule.map((s, i) => (
                <div key={i} className={`flex items-center gap-3 p-3 rounded-xl ${s.status === "overdue" ? "bg-destructive/5 border border-destructive/20" : s.status === "due-soon" ? "bg-amber-light/50" : "bg-muted/30"}`}>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{s.screening}</p>
                    <p className="text-xs text-muted-foreground">{s.partner} • Last: {s.lastDone}</p>
                  </div>
                  <div className="text-right">
                    <Badge variant={s.status === "overdue" ? "destructive" : s.status === "due-soon" ? "default" : "secondary"} className="text-[10px]">{s.status.replace("-", " ")}</Badge>
                    <p className="text-xs text-muted-foreground mt-0.5">Next: {s.nextDue}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        {/* MOOD */}
        <TabsContent value="mood" className="space-y-6 mt-4">
          <Card className="pillar-card">
            <CardHeader className="pb-2"><CardTitle className="font-display text-lg">Mood Tracking</CardTitle></CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={220}>
                <LineChart data={healthData.moodHistory}>
                  <XAxis dataKey="date" tick={{ fontSize: 11 }} />
                  <YAxis domain={[0, 10]} tick={{ fontSize: 11 }} />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="alex" stroke="hsl(var(--coral))" name="Alex" strokeWidth={2} />
                  <Line type="monotone" dataKey="jordan" stroke="hsl(var(--sky))" name="Jordan" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        {/* SLEEP */}
        <TabsContent value="sleep" className="space-y-6 mt-4">
          <Card className="pillar-card">
            <CardHeader className="pb-2"><CardTitle className="font-display text-lg flex items-center gap-2"><Moon className="w-5 h-5 text-lavender" /> Sleep Analysis</CardTitle></CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={healthData.sleepData}>
                  <XAxis dataKey="day" tick={{ fontSize: 11 }} />
                  <YAxis domain={[0, 12]} tick={{ fontSize: 11 }} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="alex" fill="hsl(var(--coral))" name="Alex (hrs)" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="jordan" fill="hsl(var(--sky))" name="Jordan (hrs)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
              <div className="grid grid-cols-2 gap-3 mt-4">
                <div className="p-3 rounded-xl bg-coral-light/50 text-center">
                  <p className="text-xs text-muted-foreground">Alex avg</p>
                  <p className="font-bold">{(healthData.sleepData.reduce((a, b) => a + b.alex, 0) / 7).toFixed(1)}h</p>
                </div>
                <div className="p-3 rounded-xl bg-sky-light/50 text-center">
                  <p className="text-xs text-muted-foreground">Jordan avg</p>
                  <p className="font-bold">{(healthData.sleepData.reduce((a, b) => a + b.jordan, 0) / 7).toFixed(1)}h</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* MENTAL HEALTH */}
        <TabsContent value="mental" className="space-y-6 mt-4">
          <Card className="pillar-card">
            <CardHeader className="pb-2"><CardTitle className="font-display text-lg flex items-center gap-2"><Brain className="w-5 h-5 text-lavender" /> Mental Health Check-In</CardTitle></CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={mentalHealthCheckins}>
                  <XAxis dataKey="week" tick={{ fontSize: 11 }} />
                  <YAxis domain={[0, 6]} tick={{ fontSize: 11 }} />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="phq2" stroke="hsl(var(--lavender))" name="PHQ-2 (Depression)" strokeWidth={2} />
                  <Line type="monotone" dataKey="gad2" stroke="hsl(var(--amber))" name="GAD-2 (Anxiety)" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
              <div className="p-3 rounded-xl bg-muted/30 mt-3">
                <p className="text-xs font-semibold">📊 Scores 0-2: Normal | 3-4: Mild | 5-6: Consider seeking support</p>
              </div>
              {/* Therapist Finder */}
              <div className="mt-4 p-4 rounded-xl bg-lavender-light/50 flex items-center gap-3">
                <Search className="w-5 h-5 text-lavender" />
                <div className="flex-1">
                  <p className="text-sm font-medium">Therapist/Counselor Finder</p>
                  <p className="text-xs text-muted-foreground">Filter by specialty, insurance, telehealth</p>
                </div>
                <button className="px-3 py-1.5 rounded-xl bg-primary text-primary-foreground text-xs font-medium">Search</button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* STRESS */}
        <TabsContent value="stress" className="space-y-6 mt-4">
          <Card className="pillar-card">
            <CardHeader className="pb-2"><CardTitle className="font-display text-lg flex items-center gap-2"><Flame className="w-5 h-5 text-amber" /> Stress Heatmap</CardTitle></CardHeader>
            <CardContent>
              <div className="grid grid-cols-7 gap-1">
                {stressHeatmap.map(d => {
                  const colors = ["bg-mint-light", "bg-mint/30", "bg-amber-light", "bg-amber/40", "bg-destructive/30"];
                  return (
                    <div key={d.day} className={`aspect-square rounded-lg ${colors[d.level - 1]} flex items-center justify-center`} title={`Day ${d.day}: Level ${d.level}`}>
                      <span className="text-[10px] font-medium">{d.day}</span>
                    </div>
                  );
                })}
              </div>
              <div className="flex items-center gap-2 mt-3 text-xs">
                <span>Low stress</span>
                {["bg-mint-light", "bg-mint/30", "bg-amber-light", "bg-amber/40", "bg-destructive/30"].map((c, i) => (
                  <div key={i} className={`w-4 h-4 rounded ${c}`} />
                ))}
                <span>High stress</span>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* FITNESS */}
        <TabsContent value="fitness" className="space-y-6 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(healthData.fitnessStats).map(([name, stats]) => (
              <Card key={name} className="pillar-card">
                <CardHeader className="pb-2"><CardTitle className="font-display text-lg capitalize">{name}'s Fitness</CardTitle></CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-xl bg-muted/30 text-center">
                      <p className="text-xs text-muted-foreground">Steps</p>
                      <p className="text-lg font-bold">{stats.steps.toLocaleString()}</p>
                    </div>
                    <div className="p-3 rounded-xl bg-muted/30 text-center">
                      <p className="text-xs text-muted-foreground">Calories</p>
                      <p className="text-lg font-bold">{stats.calories}</p>
                    </div>
                    <div className="p-3 rounded-xl bg-muted/30 text-center">
                      <p className="text-xs text-muted-foreground">Active Min</p>
                      <p className="text-lg font-bold">{stats.activeMinutes}</p>
                    </div>
                    <div className="p-3 rounded-xl bg-muted/30 text-center">
                      <p className="text-xs text-muted-foreground">Workouts</p>
                      <p className="text-lg font-bold">{stats.workoutsThisWeek}</p>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center gap-2">
                    <Droplets className="w-4 h-4 text-sky" />
                    <span className="text-sm">Water: {name === "alex" ? healthData.waterIntake.alex : healthData.waterIntake.jordan}/{healthData.waterIntake.goal} glasses</span>
                    <Progress value={(name === "alex" ? healthData.waterIntake.alex : healthData.waterIntake.jordan) / healthData.waterIntake.goal * 100} className="flex-1 h-2" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <Card className="pillar-card">
            <CardHeader className="pb-2"><CardTitle className="font-display text-lg flex items-center gap-2"><Dumbbell className="w-5 h-5 text-lavender" /> Couple Workout Planner</CardTitle></CardHeader>
            <CardContent>
              <div className="bg-lavender-light/50 rounded-2xl p-6 text-center">
                <span className="text-4xl block mb-3">🏋️‍♂️</span>
                <p className="font-semibold">Plan Workouts Together</p>
                <p className="text-sm text-muted-foreground mt-1">Shared workout schedule with activities designed for couples</p>
                <button className="mt-3 px-6 py-2 rounded-xl bg-primary text-primary-foreground text-sm font-medium">Create Plan</button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* NUTRITION */}
        <TabsContent value="nutrition" className="space-y-6 mt-4">
          <Card className="pillar-card">
            <CardHeader className="pb-2"><CardTitle className="font-display text-lg flex items-center gap-2"><Apple className="w-5 h-5 text-mint" /> Nutrition Log</CardTitle></CardHeader>
            <CardContent>
              <div className="space-y-3">
                {nutritionLog.map((n, i) => (
                  <div key={i} className="p-3 rounded-xl bg-muted/30">
                    <div className="flex items-center justify-between mb-1">
                      <p className="font-semibold text-sm">{n.meal}</p>
                      <span className="text-xs font-bold">{n.calories} cal</span>
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">{n.items}</p>
                    <div className="flex gap-3 text-[10px]">
                      <span>P: {n.protein}g</span>
                      <span>C: {n.carbs}g</span>
                      <span>F: {n.fat}g</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-3 p-3 rounded-xl bg-mint-light text-center">
                <p className="text-sm font-medium">Total: {nutritionLog.reduce((a, b) => a + b.calories, 0)} cal</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* SUPPLEMENTS */}
        <TabsContent value="supplements" className="space-y-6 mt-4">
          <Card className="pillar-card">
            <CardHeader className="pb-2"><CardTitle className="font-display text-lg">Supplement Tracker</CardTitle></CardHeader>
            <CardContent className="space-y-3">
              {supplements.map((s, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-muted/30">
                  <div className="w-10 h-10 rounded-xl bg-mint-light flex items-center justify-center">💊</div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{s.name}</p>
                    <p className="text-xs text-muted-foreground">{s.dose} • {s.time}</p>
                  </div>
                  <Badge variant="secondary" className="text-[10px]">{s.partner}</Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
