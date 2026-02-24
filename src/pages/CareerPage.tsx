import { Briefcase, TrendingUp, Users, Clock, GraduationCap, Lightbulb, BarChart3 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { careerData } from "@/data/mockData";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";

export default function CareerPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-2xl bg-sky flex items-center justify-center">
          <Briefcase className="w-5 h-5 text-primary-foreground" />
        </div>
        <div>
          <h1 className="font-display text-2xl font-bold">Career & Professional Growth</h1>
          <p className="text-sm text-muted-foreground">Growing professionally, supporting each other</p>
        </div>
      </div>

      <Tabs defaultValue="profiles" className="space-y-4">
        <TabsList className="bg-muted/50 rounded-xl p-1">
          <TabsTrigger value="profiles" className="rounded-lg">Career Profiles</TabsTrigger>
          <TabsTrigger value="alignment" className="rounded-lg">Alignment</TabsTrigger>
          <TabsTrigger value="jobsearch" className="rounded-lg">Job Search</TabsTrigger>
          <TabsTrigger value="worklife" className="rounded-lg">Work-Life Balance</TabsTrigger>
        </TabsList>

        <TabsContent value="profiles" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {careerData.profiles.map((p, i) => (
              <Card key={i} className="pillar-card">
                <CardContent className="p-5">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold text-primary-foreground ${i === 0 ? "gradient-coral" : "gradient-sky"}`}>
                      {p.name[0]}
                    </div>
                    <div>
                      <p className="font-display font-bold text-lg">{p.name}</p>
                      <p className="text-xs text-muted-foreground">{p.role} at {p.company}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="p-3 rounded-xl bg-muted/30 text-center">
                      <p className="text-[10px] text-muted-foreground">Salary</p>
                      <p className="text-lg font-bold font-display">${(p.salary / 1000).toFixed(0)}k</p>
                    </div>
                    <div className="p-3 rounded-xl bg-muted/30 text-center">
                      <p className="text-[10px] text-muted-foreground">Satisfaction</p>
                      <p className="text-lg font-bold font-display">{p.satisfaction}%</p>
                    </div>
                  </div>

                  <p className="text-xs font-semibold mb-2">Skills</p>
                  <div className="space-y-2">
                    {p.skills.map((s, si) => (
                      <div key={si}>
                        <div className="flex justify-between text-xs mb-1">
                          <span>{s.name}</span>
                          <span className="text-muted-foreground">{s.level}%</span>
                        </div>
                        <Progress value={s.level} className="h-2" />
                      </div>
                    ))}
                  </div>

                  <p className="text-xs font-semibold mt-4 mb-2">Goals</p>
                  <div className="space-y-1">
                    {p.goals.map((g, gi) => (
                      <div key={gi} className="text-sm p-2 rounded-lg bg-muted/30">🎯 {g}</div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="alignment" className="space-y-6">
          <Card className="pillar-card">
            <CardHeader className="pb-2">
              <CardTitle className="font-display text-base flex items-center gap-2">
                <BarChart3 className="w-4 h-4" /> Income Contribution
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={careerData.incomeContribution}>
                  <XAxis dataKey="month" tick={{ fontSize: 11 }} />
                  <YAxis hide />
                  <Tooltip formatter={(v: number) => `$${v.toLocaleString()}`} />
                  <Bar dataKey="alex" fill="hsl(8,76%,65%)" radius={[4,4,0,0]} name="Alex" stackId="a" />
                  <Bar dataKey="jordan" fill="hsl(200,70%,60%)" radius={[4,4,0,0]} name="Jordan" stackId="a" />
                </BarChart>
              </ResponsiveContainer>
              <div className="flex justify-center gap-4 text-xs mt-2">
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-coral" /> Alex</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-sky" /> Jordan</span>
              </div>
            </CardContent>
          </Card>

          <Card className="pillar-card">
            <CardHeader className="pb-2">
              <CardTitle className="font-display text-base">Career Priority Turns</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="p-4 rounded-2xl bg-sky-light/30">
                <p className="text-sm font-semibold mb-2">Current Focus: Alex's Promotion Push</p>
                <p className="text-xs text-muted-foreground">Alex is focusing on career advancement this quarter. Jordan is providing extra support at home.</p>
                <div className="mt-3 flex gap-2">
                  <span className="text-[10px] px-3 py-1 rounded-full bg-coral-light">Q1-Q2 2026: Alex</span>
                  <span className="text-[10px] px-3 py-1 rounded-full bg-sky-light">Q3-Q4 2026: Jordan</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="jobsearch" className="space-y-4">
          <Card className="pillar-card">
            <CardHeader className="pb-2">
              <CardTitle className="font-display text-base">Application Pipeline</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {careerData.jobApplications.map(app => (
                <div key={app.id} className="flex items-center gap-3 p-3 rounded-xl bg-muted/30">
                  <div className={`w-3 h-3 rounded-full ${
                    app.status === "Interview" ? "bg-amber" : app.status === "Rejected" ? "bg-destructive" : "bg-sky"
                  }`} />
                  <div className="flex-1">
                    <p className="text-sm font-medium">{app.role}</p>
                    <p className="text-[10px] text-muted-foreground">{app.company} • Applied {app.date}</p>
                  </div>
                  <span className={`text-[10px] px-2 py-1 rounded-full ${
                    app.status === "Interview" ? "bg-amber-light text-amber" : app.status === "Rejected" ? "bg-destructive/10 text-destructive" : "bg-sky-light text-sky"
                  }`}>{app.status}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="worklife" className="space-y-4">
          <Card className="pillar-card">
            <CardHeader className="pb-2">
              <CardTitle className="font-display text-base flex items-center gap-2">
                <Clock className="w-4 h-4" /> Weekly Schedule
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-7 gap-1">
                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(day => (
                  <div key={day} className="text-center">
                    <p className="text-[10px] text-muted-foreground mb-1">{day}</p>
                    <div className="space-y-1">
                      {day !== "Sat" && day !== "Sun" ? (
                        <>
                          <div className="h-6 rounded bg-sky-light/50 text-[8px] flex items-center justify-center">Work</div>
                          <div className="h-4 rounded bg-coral-light/50 text-[8px] flex items-center justify-center">Protected</div>
                        </>
                      ) : (
                        <div className="h-10 rounded bg-mint-light/50 text-[8px] flex items-center justify-center">Free</div>
                      )}
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
