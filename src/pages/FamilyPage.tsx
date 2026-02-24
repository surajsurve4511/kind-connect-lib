import { Baby, Heart, BookOpen, GraduationCap, UserCheck, Stethoscope } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { familyData } from "@/data/mockData";
import { RadarChart, Radar, PolarGrid, PolarAngleAxis, ResponsiveContainer } from "recharts";

export default function FamilyPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-2xl bg-amber flex items-center justify-center">
          <Baby className="w-5 h-5 text-primary-foreground" />
        </div>
        <div>
          <h1 className="font-display text-2xl font-bold">Family Planning & Parenting</h1>
          <p className="text-sm text-muted-foreground">Growing your family with intention and love</p>
        </div>
      </div>

      <Tabs defaultValue="readiness" className="space-y-4">
        <TabsList className="bg-muted/50 rounded-xl p-1">
          <TabsTrigger value="readiness" className="rounded-lg">Family Readiness</TabsTrigger>
          <TabsTrigger value="pregnancy" className="rounded-lg">Pregnancy Tracker</TabsTrigger>
          <TabsTrigger value="milestones" className="rounded-lg">Child Milestones</TabsTrigger>
          <TabsTrigger value="eldercare" className="rounded-lg">Eldercare</TabsTrigger>
        </TabsList>

        <TabsContent value="readiness" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="pillar-card">
              <CardHeader className="pb-2">
                <CardTitle className="font-display text-base">Readiness Score</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center">
                <div className="relative w-36 h-36 my-2">
                  <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
                    <circle cx="60" cy="60" r="50" fill="none" stroke="hsl(var(--muted))" strokeWidth="8" />
                    <circle cx="60" cy="60" r="50" fill="none" stroke="hsl(var(--amber))" strokeWidth="8"
                      strokeDasharray={`${familyData.readinessScore * 3.14} 314`} strokeLinecap="round" />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-3xl font-bold font-display">{familyData.readinessScore}%</span>
                    <span className="text-[10px] text-muted-foreground">Ready</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="pillar-card">
              <CardHeader className="pb-2">
                <CardTitle className="font-display text-base">Readiness Factors</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={220}>
                  <RadarChart data={familyData.readinessFactors}>
                    <PolarGrid stroke="hsl(var(--border))" />
                    <PolarAngleAxis dataKey="factor" tick={{ fontSize: 10, fill: "hsl(var(--muted-foreground))" }} />
                    <Radar dataKey="score" stroke="hsl(var(--amber))" fill="hsl(var(--amber))" fillOpacity={0.2} />
                  </RadarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="pregnancy" className="space-y-4">
          <Card className="pillar-card">
            <CardHeader className="pb-2">
              <CardTitle className="font-display text-base">🤰 Week-by-Week Tracker</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { week: "Week 12", size: "Lime", development: "Fingers & toes formed, reflexes developing", emoji: "🍋" },
                  { week: "Week 20", size: "Banana", development: "Can hear sounds, movements felt", emoji: "🍌" },
                  { week: "Week 32", size: "Squash", development: "Lungs maturing, gaining weight rapidly", emoji: "🎃" },
                ].map((w, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-amber-light/30 text-center">
                    <div className="text-3xl mb-2">{w.emoji}</div>
                    <p className="font-semibold text-sm">{w.week}</p>
                    <p className="text-[10px] text-muted-foreground">Size of a {w.size}</p>
                    <p className="text-xs mt-2">{w.development}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="pillar-card">
            <CardHeader className="pb-2">
              <CardTitle className="font-display text-base">Birth Plan Builder</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {["Hospital preference", "Pain management approach", "Birthing position", "Who's in the room", "First hour preferences", "Feeding plan"].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-2 rounded-lg bg-muted/30">
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${i < 3 ? "bg-mint text-primary-foreground" : "border border-border"}`}>
                    {i < 3 ? "✓" : (i + 1)}
                  </span>
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="milestones" className="space-y-4">
          {familyData.milestones.map((group, gi) => (
            <Card key={gi} className="pillar-card">
              <CardHeader className="pb-2">
                <CardTitle className="font-display text-base">{group.age}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {group.items.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50">
                    <span className="w-5 h-5 rounded-full border border-border flex items-center justify-center text-[10px]" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="eldercare" className="space-y-4">
          {familyData.eldercare.map((person, i) => (
            <Card key={i} className="pillar-card">
              <CardContent className="p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                    <UserCheck className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="font-display font-bold">{person.name}</p>
                    <p className="text-xs text-muted-foreground">Age {person.age}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="p-3 rounded-xl bg-muted/30">
                    <p className="text-xs text-muted-foreground">Care Needs</p>
                    <p className="font-medium mt-1">{person.needs}</p>
                  </div>
                  <div className="p-3 rounded-xl bg-muted/30">
                    <p className="text-xs text-muted-foreground">Active Medications</p>
                    <p className="font-medium mt-1">{person.medications}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}
