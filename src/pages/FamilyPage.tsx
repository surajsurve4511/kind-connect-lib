import { Baby, Heart, Calendar, ClipboardList, Users, GraduationCap, Shield, Stethoscope, Syringe, BookOpen, Home as HomeIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { familyData } from "@/data/mockData";
import { familyPlanningStages, fertilityData, pregnancyWeeks, hospitalBagChecklist, vaccinationSchedule, childProfiles } from "@/data/extendedMockData";
import { LifeStageHeader } from "@/components/shared/LifeStageHeader";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from "recharts";

export default function FamilyPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2 mb-2"><LifeStageHeader /></div>
          <h1 className="font-display text-2xl font-bold flex items-center gap-2"><Baby className="w-6 h-6 text-amber" /> Family</h1>
          <p className="text-sm text-muted-foreground">Plan, grow, and care for your family</p>
        </div>
      </div>

      {/* Family Planning Hub */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {familyPlanningStages.map(s => (
          <Card key={s.id} className={`pillar-card cursor-pointer ${s.active ? "border-primary/30 bg-primary/5" : ""}`}>
            <CardContent className="p-4 text-center">
              <span className="text-3xl block mb-2">{s.icon}</span>
              <p className="font-semibold text-sm">{s.label}</p>
              {s.active && <Badge variant="default" className="text-[10px] mt-1">Active</Badge>}
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="readiness" className="w-full">
        <TabsList className="w-full flex flex-wrap h-auto gap-1 bg-muted/30 p-1 rounded-2xl">
          {["readiness", "fertility", "pregnancy", "hospital-bag", "vaccinations", "children", "co-parenting", "education", "eldercare"].map(t => (
            <TabsTrigger key={t} value={t} className="rounded-xl text-xs capitalize">{t.replace(/-/g, " ")}</TabsTrigger>
          ))}
        </TabsList>

        {/* READINESS */}
        <TabsContent value="readiness" className="space-y-6 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="pillar-card">
              <CardHeader className="pb-2"><CardTitle className="font-display text-lg">Readiness Score</CardTitle></CardHeader>
              <CardContent>
                <div className="flex items-center justify-center py-4">
                  <div className="relative w-32 h-32">
                    <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
                      <circle cx="60" cy="60" r="50" fill="none" stroke="hsl(var(--muted))" strokeWidth="10" />
                      <circle cx="60" cy="60" r="50" fill="none" stroke="hsl(var(--amber))" strokeWidth="10"
                        strokeDasharray={`${familyData.readinessScore * 3.14} 314`} strokeLinecap="round" />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-3xl font-bold font-display">{familyData.readinessScore}</span>
                      <span className="text-[10px] text-muted-foreground">/ 100</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="pillar-card">
              <CardHeader className="pb-2"><CardTitle className="font-display text-lg">Readiness Factors</CardTitle></CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={220}>
                  <RadarChart data={familyData.readinessFactors}>
                    <PolarGrid stroke="hsl(var(--border))" />
                    <PolarAngleAxis dataKey="factor" tick={{ fontSize: 10 }} />
                    <PolarRadiusAxis domain={[0, 100]} tick={false} axisLine={false} />
                    <Radar dataKey="score" stroke="hsl(var(--amber))" fill="hsl(var(--amber))" fillOpacity={0.2} strokeWidth={2} />
                  </RadarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
          {/* Pre-Conception Checklist */}
          <Card className="pillar-card">
            <CardHeader className="pb-2"><CardTitle className="font-display text-lg flex items-center gap-2"><ClipboardList className="w-5 h-5 text-amber" /> Pre-Conception Readiness Checklist</CardTitle></CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {["Schedule preconception appointment", "Start prenatal vitamins", "Review health insurance", "Build emergency fund to 6 months", "Discuss parenting values", "Research childcare options", "Update life insurance", "Create a baby budget"].map((t, i) => (
                  <div key={i} className="flex items-center gap-2 p-2 rounded-xl bg-muted/30">
                    <div className={`w-5 h-5 rounded border-2 ${i < 3 ? "bg-mint border-mint" : "border-border"}`} />
                    <span className={`text-sm ${i < 3 ? "line-through opacity-50" : ""}`}>{t}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* FERTILITY */}
        <TabsContent value="fertility" className="space-y-6 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="pillar-card">
              <CardHeader className="pb-2"><CardTitle className="font-display text-lg">Fertility Tracking</CardTitle></CardHeader>
              <CardContent>
                <div className="text-center mb-4">
                  <p className="text-sm text-muted-foreground">Cycle Day</p>
                  <p className="text-4xl font-bold font-display text-amber">{fertilityData.cycleDay}</p>
                  <p className="text-xs text-muted-foreground">of {fertilityData.cycleLength} day cycle</p>
                </div>
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: fertilityData.cycleLength }, (_, i) => {
                    const day = i + 1;
                    const isFertile = day >= fertilityData.fertileWindow.start && day <= fertilityData.fertileWindow.end;
                    const isOvulation = day === fertilityData.ovulationDay;
                    const isToday = day === fertilityData.cycleDay;
                    return (
                      <div key={day} className={`flex-1 h-4 rounded-sm ${isOvulation ? "bg-amber" : isFertile ? "bg-amber/30" : "bg-muted"} ${isToday ? "ring-2 ring-primary" : ""}`} title={`Day ${day}`} />
                    );
                  })}
                </div>
                <div className="flex items-center gap-4 text-xs">
                  <span className="flex items-center gap-1"><div className="w-3 h-3 rounded-sm bg-amber/30" /> Fertile Window</span>
                  <span className="flex items-center gap-1"><div className="w-3 h-3 rounded-sm bg-amber" /> Ovulation</span>
                </div>
              </CardContent>
            </Card>
            <Card className="pillar-card">
              <CardHeader className="pb-2"><CardTitle className="font-display text-lg">Basal Temperature</CardTitle></CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={200}>
                  <LineChart data={fertilityData.basalTemp}>
                    <XAxis dataKey="day" tick={{ fontSize: 10 }} label={{ value: "Cycle Day", fontSize: 10, position: "bottom" }} />
                    <YAxis domain={[96.5, 98.5]} tick={{ fontSize: 10 }} />
                    <Tooltip />
                    <Line type="monotone" dataKey="temp" stroke="hsl(var(--amber))" strokeWidth={2} dot={{ r: 3 }} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
          {/* Male Fertility */}
          <Card className="pillar-card">
            <CardHeader className="pb-2"><CardTitle className="font-display text-lg">Male Fertility Health Checklist</CardTitle></CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {["Reduce alcohol intake", "Maintain healthy weight", "Take zinc & folic acid", "Avoid hot tubs/saunas", "Schedule semen analysis", "Review medications with doctor", "Manage stress levels", "Regular exercise"].map((t, i) => (
                  <div key={i} className="flex items-center gap-2 p-2 rounded-xl bg-muted/30">
                    <div className={`w-5 h-5 rounded border-2 ${i < 2 ? "bg-mint border-mint" : "border-border"}`} />
                    <span className="text-sm">{t}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* PREGNANCY */}
        <TabsContent value="pregnancy" className="space-y-6 mt-4">
          <Card className="pillar-card">
            <CardHeader className="pb-2"><CardTitle className="font-display text-lg">Pregnancy Week-by-Week</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              {pregnancyWeeks.map(w => (
                <div key={w.week} className="p-4 rounded-xl bg-muted/30">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 rounded-2xl bg-amber-light flex items-center justify-center text-lg font-bold text-amber">W{w.week}</div>
                    <div>
                      <p className="font-semibold text-sm">Week {w.week}</p>
                      <p className="text-xs text-muted-foreground">Baby is the size of a {w.size}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground mb-1">Symptoms</p>
                      {w.symptoms.map((s, i) => <p key={i} className="text-xs">• {s}</p>)}
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground mb-1">To Do</p>
                      {w.todo.map((t, i) => <p key={i} className="text-xs">• {t}</p>)}
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
          {/* Birth Plan */}
          <Card className="pillar-card">
            <CardHeader className="pb-2"><CardTitle className="font-display text-lg flex items-center gap-2"><ClipboardList className="w-5 h-5 text-amber" /> Birth Plan Creator</CardTitle></CardHeader>
            <CardContent>
              <div className="bg-amber-light/50 rounded-2xl p-6 text-center">
                <span className="text-4xl block mb-3">📋</span>
                <p className="font-semibold">Create Your Birth Plan</p>
                <p className="text-sm text-muted-foreground mt-1 mb-3">A guided form to create a printable birth plan PDF</p>
                <button className="px-6 py-2 rounded-xl bg-primary text-primary-foreground text-sm font-medium">Start Birth Plan</button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* HOSPITAL BAG */}
        <TabsContent value="hospital-bag" className="space-y-6 mt-4">
          {Object.entries(hospitalBagChecklist).map(([person, items]) => (
            <Card key={person} className="pillar-card">
              <CardHeader className="pb-2"><CardTitle className="font-display text-lg capitalize">{person.replace(/([A-Z])/g, " $1").trim()}</CardTitle></CardHeader>
              <CardContent className="space-y-2">
                {items.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 p-2 rounded-xl bg-muted/30">
                    <div className={`w-5 h-5 rounded border-2 ${item.packed ? "bg-mint border-mint" : "border-border"}`} />
                    <span className={`text-sm ${item.packed ? "line-through opacity-50" : ""}`}>{item.item}</span>
                  </div>
                ))}
                <p className="text-xs text-muted-foreground mt-1">{items.filter(i => i.packed).length}/{items.length} packed</p>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        {/* VACCINATIONS */}
        <TabsContent value="vaccinations" className="space-y-6 mt-4">
          <Card className="pillar-card">
            <CardHeader className="pb-2"><CardTitle className="font-display text-lg flex items-center gap-2"><Syringe className="w-5 h-5 text-amber" /> Vaccination Records</CardTitle></CardHeader>
            <CardContent className="space-y-2">
              {vaccinationSchedule.map((v, i) => (
                <div key={i} className={`flex items-center gap-3 p-3 rounded-xl ${v.status === "done" ? "bg-mint-light/50" : "bg-amber-light/50"}`}>
                  <Badge variant={v.status === "done" ? "default" : "secondary"} className="text-[10px]">{v.status === "done" ? "✓ Done" : "Upcoming"}</Badge>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{v.vaccine}</p>
                    <p className="text-xs text-muted-foreground">Age: {v.age}</p>
                  </div>
                  <span className="text-xs text-muted-foreground">{v.date}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        {/* CHILDREN */}
        <TabsContent value="children" className="space-y-6 mt-4">
          {childProfiles.map(c => (
            <Card key={c.id} className="pillar-card">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-2xl gradient-amber flex items-center justify-center text-2xl font-bold text-white">{c.photo}</div>
                  <div>
                    <p className="font-display text-xl font-bold">{c.name}</p>
                    <p className="text-sm text-muted-foreground">{c.age}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground mb-1">Milestones Due</p>
                    {c.milestonesDue.map((m, i) => <Badge key={i} variant="secondary" className="text-[10px] mr-1 mb-1">{m}</Badge>)}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground mb-1">Details</p>
                    <p className="text-xs">Allergies: {c.allergies.join(", ")}</p>
                    <p className="text-xs">Doctor: {c.doctor}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
          <button className="w-full py-3 rounded-xl border-2 border-dashed border-primary/30 text-primary text-sm font-medium hover:bg-primary/5">+ Add Child Profile</button>
        </TabsContent>

        {/* CO-PARENTING */}
        <TabsContent value="co-parenting" className="space-y-6 mt-4">
          <Card className="pillar-card">
            <CardHeader className="pb-2"><CardTitle className="font-display text-lg flex items-center gap-2"><Users className="w-5 h-5 text-amber" /> Co-Parenting Schedule</CardTitle></CardHeader>
            <CardContent>
              <div className="bg-muted/30 rounded-2xl p-6 text-center">
                <span className="text-4xl block mb-3">📅</span>
                <p className="font-semibold">Shared Custody Calendar</p>
                <p className="text-sm text-muted-foreground mt-1">Manage custody schedules, handoff times, and communication logs</p>
                <button className="mt-3 px-6 py-2 rounded-xl bg-primary text-primary-foreground text-sm font-medium">Set Up Schedule</button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* EDUCATION */}
        <TabsContent value="education" className="space-y-6 mt-4">
          <Card className="pillar-card">
            <CardHeader className="pb-2"><CardTitle className="font-display text-lg flex items-center gap-2"><GraduationCap className="w-5 h-5 text-amber" /> Education Savings</CardTitle></CardHeader>
            <CardContent>
              <div className="p-4 rounded-xl bg-amber-light/50 mb-4">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-semibold text-sm">529 College Fund</p>
                  <span className="text-xs text-muted-foreground">$5,000 / $120,000</span>
                </div>
                <Progress value={4.2} className="h-2.5" />
                <p className="text-xs text-muted-foreground mt-1">Projected university cost: $120,000 • Contributing $200/mo</p>
              </div>
              <div className="bg-muted/30 rounded-xl p-4 text-center">
                <p className="text-sm font-medium">School Management Hub</p>
                <p className="text-xs text-muted-foreground mt-1">School calendar, homework tracker, parent-teacher meetings, and activities</p>
                <button className="mt-2 px-4 py-2 rounded-xl bg-primary/10 text-primary text-sm">Coming Soon</button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* ELDERCARE */}
        <TabsContent value="eldercare" className="space-y-6 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {familyData.eldercare.map((e, i) => (
              <Card key={i} className="pillar-card">
                <CardContent className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-2xl gradient-lavender flex items-center justify-center text-xl">🧓</div>
                    <div>
                      <p className="font-display font-bold">{e.name}</p>
                      <p className="text-xs text-muted-foreground">Age: {e.age}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="p-2 rounded-xl bg-muted/30 text-sm"><span className="font-medium">Needs:</span> {e.needs}</div>
                    <div className="p-2 rounded-xl bg-muted/30 text-sm"><span className="font-medium">Medications:</span> {e.medications} active</div>
                    <button className="w-full py-2 rounded-xl border border-border/50 text-sm hover:bg-muted/30">View Full Profile</button>
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
