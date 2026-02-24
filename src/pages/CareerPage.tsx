import { Briefcase, TrendingUp, BookOpen, Users, FileText, Target, Scale, Clock, DollarSign, Lightbulb, BarChart3, Rocket } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { careerData } from "@/data/mockData";
import { skillsInventory, learningPlan, professionalNetwork, jobPipeline, workLifeBalance, incomeTimeline, sideHustles } from "@/data/extendedMockData";
import { LifeStageHeader } from "@/components/shared/LifeStageHeader";
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend, BarChart, Bar } from "recharts";

export default function CareerPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2 mb-2"><LifeStageHeader /></div>
          <h1 className="font-display text-2xl font-bold flex items-center gap-2"><Briefcase className="w-6 h-6 text-sky" /> Career</h1>
          <p className="text-sm text-muted-foreground">Grow together, support each other's ambitions</p>
        </div>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="w-full flex flex-wrap h-auto gap-1 bg-muted/30 p-1 rounded-2xl">
          {["overview", "skills", "learning", "network", "job-search", "income", "work-life", "side-hustles"].map(t => (
            <TabsTrigger key={t} value={t} className="rounded-xl text-xs capitalize">{t.replace(/-/g, " ")}</TabsTrigger>
          ))}
        </TabsList>

        {/* OVERVIEW */}
        <TabsContent value="overview" className="space-y-6 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {careerData.profiles.map(p => (
              <Card key={p.name} className="pillar-card">
                <CardContent className="p-5">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-2xl ${p.name === "Alex" ? "gradient-coral" : "gradient-sky"} flex items-center justify-center text-lg font-bold text-white`}>{p.name[0]}</div>
                    <div>
                      <p className="font-display font-bold">{p.name}</p>
                      <p className="text-xs text-muted-foreground">{p.role} at {p.company}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <div className="p-2 rounded-xl bg-muted/30 text-center">
                      <p className="text-[10px] text-muted-foreground">Salary</p>
                      <p className="font-bold text-sm">${p.salary.toLocaleString()}</p>
                    </div>
                    <div className="p-2 rounded-xl bg-muted/30 text-center">
                      <p className="text-[10px] text-muted-foreground">Satisfaction</p>
                      <p className="font-bold text-sm">{p.satisfaction}%</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground mb-1">Goals</p>
                    <div className="flex flex-wrap gap-1">
                      {p.goals.map(g => <Badge key={g} variant="secondary" className="text-[10px]">{g}</Badge>)}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          {/* Income Contribution */}
          <Card className="pillar-card">
            <CardHeader className="pb-2"><CardTitle className="font-display text-lg">Income Contribution</CardTitle></CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={220}>
                <AreaChart data={careerData.incomeContribution}>
                  <XAxis dataKey="month" tick={{ fontSize: 11 }} />
                  <YAxis tick={{ fontSize: 11 }} tickFormatter={v => `$${(v / 1000).toFixed(0)}k`} />
                  <Tooltip formatter={(v: number) => `$${v.toLocaleString()}`} />
                  <Legend />
                  <Area type="monotone" dataKey="alex" fill="hsl(var(--coral))" fillOpacity={0.2} stroke="hsl(var(--coral))" name="Alex" />
                  <Area type="monotone" dataKey="jordan" fill="hsl(var(--sky))" fillOpacity={0.2} stroke="hsl(var(--sky))" name="Jordan" />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        {/* SKILLS */}
        <TabsContent value="skills" className="space-y-6 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(skillsInventory).map(([name, skills]) => (
              <Card key={name} className="pillar-card">
                <CardHeader className="pb-2"><CardTitle className="font-display text-lg capitalize">{name}'s Skills</CardTitle></CardHeader>
                <CardContent className="space-y-3">
                  {skills.map(s => (
                    <div key={s.skill}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="flex items-center gap-1">{s.skill} {s.gap && <Badge variant="destructive" className="text-[8px]">Gap</Badge>}</span>
                        <span className="font-semibold">{s.proficiency}%</span>
                      </div>
                      <Progress value={s.proficiency} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* LEARNING */}
        <TabsContent value="learning" className="space-y-6 mt-4">
          <Card className="pillar-card">
            <CardHeader className="pb-2"><CardTitle className="font-display text-lg flex items-center gap-2"><BookOpen className="w-5 h-5 text-sky" /> Learning Plan</CardTitle></CardHeader>
            <CardContent className="space-y-3">
              {learningPlan.map(l => (
                <div key={l.id} className="p-3 rounded-xl bg-muted/30">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <p className="text-sm font-medium">{l.title}</p>
                      <p className="text-xs text-muted-foreground">{l.type} • {l.platform} • {l.partner} • Skill: {l.skill}</p>
                    </div>
                    <span className="text-sm font-bold">{l.progress}%</span>
                  </div>
                  <Progress value={l.progress} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        {/* NETWORK */}
        <TabsContent value="network" className="space-y-6 mt-4">
          <Card className="pillar-card">
            <CardHeader className="pb-2"><CardTitle className="font-display text-lg flex items-center gap-2"><Users className="w-5 h-5 text-sky" /> Professional Network</CardTitle></CardHeader>
            <CardContent className="space-y-3">
              {professionalNetwork.map(n => (
                <div key={n.id} className="flex items-center gap-3 p-3 rounded-xl bg-muted/30">
                  <div className="w-10 h-10 rounded-full bg-sky-light flex items-center justify-center text-sm font-bold">{n.name.split(" ").map(w => w[0]).join("")}</div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{n.name}</p>
                    <p className="text-xs text-muted-foreground">{n.role} at {n.company}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">Last: {n.lastContact.slice(5)}</p>
                    <p className="text-xs text-amber">Follow up: {n.followUp.slice(5)}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        {/* JOB SEARCH */}
        <TabsContent value="job-search" className="space-y-6 mt-4">
          <Card className="pillar-card">
            <CardHeader className="pb-2"><CardTitle className="font-display text-lg flex items-center gap-2"><Target className="w-5 h-5 text-sky" /> Job Search Pipeline</CardTitle></CardHeader>
            <CardContent>
              <div className="grid grid-cols-4 gap-3">
                {["researching", "applied", "interview", "rejected"].map(status => (
                  <div key={status} className="space-y-2">
                    <p className="text-xs font-semibold text-center uppercase text-muted-foreground">{status}</p>
                    {jobPipeline.filter(j => j.status === status).map(j => (
                      <div key={j.id} className="p-3 rounded-xl bg-muted/30 text-center">
                        <p className="text-sm font-medium">{j.company}</p>
                        <p className="text-xs text-muted-foreground">{j.role}</p>
                        <Badge variant="secondary" className="text-[10px] mt-1">{j.partner}</Badge>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          {/* Salary Benchmarking */}
          <Card className="pillar-card">
            <CardHeader className="pb-2"><CardTitle className="font-display text-lg flex items-center gap-2"><BarChart3 className="w-5 h-5 text-sky" /> Salary Benchmarking</CardTitle></CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {careerData.profiles.map(p => (
                  <div key={p.name} className="p-4 rounded-xl bg-muted/30 text-center">
                    <p className="font-semibold text-sm">{p.name} — {p.role}</p>
                    <p className="text-2xl font-bold font-display mt-2">${p.salary.toLocaleString()}</p>
                    <div className="mt-2">
                      <p className="text-xs text-muted-foreground">Market range</p>
                      <p className="text-xs text-mint">$100K — $150K (within range ✓)</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* INCOME */}
        <TabsContent value="income" className="space-y-6 mt-4">
          <Card className="pillar-card">
            <CardHeader className="pb-2"><CardTitle className="font-display text-lg">Income Timeline</CardTitle></CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={incomeTimeline}>
                  <XAxis dataKey="month" tick={{ fontSize: 10 }} />
                  <YAxis tick={{ fontSize: 10 }} tickFormatter={v => `$${(v / 1000).toFixed(0)}k`} />
                  <Tooltip formatter={(v: number) => `$${v.toLocaleString()}`} />
                  <Legend />
                  <Bar dataKey="alex" stackId="a" fill="hsl(var(--coral))" name="Alex" />
                  <Bar dataKey="jordan" stackId="a" fill="hsl(var(--sky))" name="Jordan" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        {/* WORK-LIFE */}
        <TabsContent value="work-life" className="space-y-6 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(workLifeBalance).map(([name, data]) => (
              <Card key={name} className="pillar-card">
                <CardHeader className="pb-2"><CardTitle className="font-display text-lg capitalize">{name}'s Work-Life Balance</CardTitle></CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center mb-4">
                    <div className="relative w-24 h-24">
                      <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
                        <circle cx="60" cy="60" r="50" fill="none" stroke="hsl(var(--muted))" strokeWidth="10" />
                        <circle cx="60" cy="60" r="50" fill="none" stroke="hsl(var(--sky))" strokeWidth="10"
                          strokeDasharray={`${data.score * 3.14} 314`} strokeLinecap="round" />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-xl font-bold">{data.score}</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm"><span>Hours Worked</span><span className="font-semibold">{data.hoursWorked}h/wk</span></div>
                    <div className="flex justify-between text-sm"><span>Protected Time Kept</span><span className="font-semibold">{data.protectedTimeKept}%</span></div>
                    <div className="flex justify-between text-sm"><span>Commute</span><span className="font-semibold">{data.commuteHours}h/wk</span></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <Card className="pillar-card">
            <CardHeader className="pb-2"><CardTitle className="font-display text-lg flex items-center gap-2"><Clock className="w-5 h-5 text-sky" /> Protected Time Scheduler</CardTitle></CardHeader>
            <CardContent>
              <div className="bg-sky-light/50 rounded-2xl p-6 text-center">
                <span className="text-4xl block mb-3">🛡️</span>
                <p className="font-semibold">Set Non-Negotiable Blocks</p>
                <p className="text-sm text-muted-foreground mt-1">Couple/family time blocks shown as locked on your calendar</p>
                <button className="mt-3 px-6 py-2 rounded-xl bg-primary text-primary-foreground text-sm font-medium">Schedule Protected Time</button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* SIDE HUSTLES */}
        <TabsContent value="side-hustles" className="space-y-6 mt-4">
          <Card className="pillar-card">
            <CardHeader className="pb-2"><CardTitle className="font-display text-lg flex items-center gap-2"><Rocket className="w-5 h-5 text-sky" /> Side Hustles</CardTitle></CardHeader>
            <CardContent className="space-y-3">
              {sideHustles.map(s => (
                <div key={s.id} className="p-4 rounded-xl bg-muted/30">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-semibold text-sm">{s.name}</p>
                    <Badge variant="secondary" className="text-[10px]">{s.partner}</Badge>
                  </div>
                  <div className="grid grid-cols-4 gap-2 text-center">
                    <div><p className="text-[10px] text-muted-foreground">Revenue</p><p className="font-bold text-mint text-sm">${s.income}</p></div>
                    <div><p className="text-[10px] text-muted-foreground">Expenses</p><p className="font-bold text-sm">${s.expenses}</p></div>
                    <div><p className="text-[10px] text-muted-foreground">Hours/mo</p><p className="font-bold text-sm">{s.hoursPerMonth}</p></div>
                    <div><p className="text-[10px] text-muted-foreground">$/hr</p><p className="font-bold text-sm">${s.effectiveRate}</p></div>
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
