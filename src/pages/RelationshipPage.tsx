import { Heart, BookOpen, MessageCircle, Gift, Camera, Calendar, Star, Sparkles, Shield, Clock, Lock, PenLine, ArrowRightLeft, Coffee } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { relationshipData } from "@/data/mockData";
import { relationshipHealthBreakdown, loveLanguageResults, sayThisExamples, conflictResolutionSteps, conversationStarters, timeCapsules, onThisDayMemories, loveLetterTemplates } from "@/data/extendedMockData";
import { LifeStageHeader } from "@/components/shared/LifeStageHeader";
import { PrivateBadge } from "@/components/shared/PrivateBadge";
import { RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

const loveLanguageData = [
  { subject: "Quality Time", A: 90, B: 70 },
  { subject: "Acts of Service", A: 60, B: 80 },
  { subject: "Gifts", A: 40, B: 55 },
  { subject: "Physical Touch", A: 85, B: 60 },
  { subject: "Words", A: 70, B: 90 },
];

export default function RelationshipPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2 mb-2"><LifeStageHeader /></div>
          <h1 className="font-display text-2xl font-bold flex items-center gap-2"><Heart className="w-6 h-6 text-primary" /> Relationship</h1>
          <p className="text-sm text-muted-foreground">Nurture your connection every day</p>
        </div>
        <div className="text-right">
          <p className="text-3xl font-bold font-display text-primary">{relationshipData.healthScore}</p>
          <p className="text-xs text-muted-foreground">Health Score</p>
        </div>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="w-full flex flex-wrap h-auto gap-1 bg-muted/30 p-1 rounded-2xl">
          {["overview", "love-lang", "communicate", "gratitude", "conversations", "time-capsule", "memories", "date-ideas", "love-letters", "intimacy"].map(t => (
            <TabsTrigger key={t} value={t} className="rounded-xl text-xs capitalize">{t.replace(/-/g, " ")}</TabsTrigger>
          ))}
        </TabsList>

        {/* OVERVIEW TAB */}
        <TabsContent value="overview" className="space-y-6 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Health Score Breakdown */}
            <Card className="pillar-card">
              <CardHeader className="pb-2">
                <CardTitle className="font-display text-lg">Health Score Breakdown</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {relationshipHealthBreakdown.map(s => (
                  <div key={s.name} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>{s.name}</span>
                      <span className="font-semibold">{s.score}%</span>
                    </div>
                    <Progress value={s.score} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Emotional Check-In */}
            <Card className="pillar-card">
              <CardHeader className="pb-2">
                <CardTitle className="font-display text-lg flex items-center gap-2">
                  <span>😊</span> Daily Emotional Check-In
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">How are you feeling right now?</p>
                <div className="grid grid-cols-5 gap-2 mb-4">
                  {["😢", "😟", "😐", "😊", "😍"].map((e, i) => (
                    <button key={i} className="text-3xl p-3 rounded-2xl hover:bg-muted/50 transition-all hover:scale-110 border border-transparent hover:border-primary/20">{e}</button>
                  ))}
                </div>
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-muted-foreground">Recent Check-Ins</p>
                  {relationshipData.checkIns.map((c, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm p-2 rounded-xl bg-muted/30">
                      <span>{c.mood === "happy" ? "😊" : c.mood === "calm" ? "😌" : "😟"}</span>
                      <span className="flex-1">{c.note}</span>
                      <span className="text-xs text-muted-foreground">{c.date.slice(5)}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Today's Moment + Gratitude */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="pillar-card">
              <CardHeader className="pb-2">
                <CardTitle className="font-display text-lg flex items-center gap-2"><Sparkles className="w-5 h-5 text-primary" /> Today's Moment</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gradient-to-br from-coral-light to-rose-light rounded-2xl p-6 text-center">
                  <span className="text-4xl block mb-3">💝</span>
                  <p className="font-medium">{relationshipData.todaysMoment}</p>
                </div>
              </CardContent>
            </Card>

            {/* Surprise Generator */}
            <Card className="pillar-card">
              <CardHeader className="pb-2">
                <CardTitle className="font-display text-lg flex items-center gap-2"><Gift className="w-5 h-5 text-primary" /> Surprise Generator</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gradient-to-br from-sky-light to-lavender-light rounded-2xl p-6 text-center">
                  <span className="text-4xl block mb-3">🎁</span>
                  <p className="font-medium mb-2">Plan a surprise for Jordan!</p>
                  <p className="text-sm text-muted-foreground">AI will create a personalized surprise plan with steps to execute</p>
                  <button className="mt-3 px-4 py-2 rounded-xl bg-primary text-primary-foreground text-sm font-medium">Generate Surprise</button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* LOVE LANGUAGE TAB */}
        <TabsContent value="love-lang" className="space-y-6 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="pillar-card">
              <CardHeader className="pb-2"><CardTitle className="font-display text-lg">Love Language Radar</CardTitle></CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={250}>
                  <RadarChart data={loveLanguageData}>
                    <PolarGrid stroke="hsl(var(--border))" />
                    <PolarAngleAxis dataKey="subject" tick={{ fontSize: 11 }} />
                    <PolarRadiusAxis domain={[0, 100]} tick={false} axisLine={false} />
                    <Radar name="Alex" dataKey="A" stroke="hsl(var(--coral))" fill="hsl(var(--coral))" fillOpacity={0.2} />
                    <Radar name="Jordan" dataKey="B" stroke="hsl(var(--sky))" fill="hsl(var(--sky))" fillOpacity={0.2} />
                  </RadarChart>
                </ResponsiveContainer>
                <div className="flex justify-center gap-4 mt-2">
                  <span className="text-xs flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-coral" /> Alex</span>
                  <span className="text-xs flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-sky" /> Jordan</span>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
              {/* Alex's Results */}
              <Card className="pillar-card-static">
                <CardContent className="p-4">
                  <p className="font-semibold text-sm mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full gradient-coral flex items-center justify-center text-[10px] text-white font-bold">A</span> Alex's Love Languages
                  </p>
                  {loveLanguageResults.alex.map(l => (
                    <div key={l.language} className="flex items-center gap-2 mb-2">
                      <span className="text-xs w-28 truncate">{l.language}</span>
                      <div className="flex-1 h-3 bg-muted rounded-full overflow-hidden">
                        <div className="h-full gradient-coral rounded-full" style={{ width: `${l.percentage}%` }} />
                      </div>
                      <span className="text-xs font-bold w-8 text-right">{l.percentage}%</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
              {/* Jordan's Results */}
              <Card className="pillar-card-static">
                <CardContent className="p-4">
                  <p className="font-semibold text-sm mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full gradient-sky flex items-center justify-center text-[10px] text-white font-bold">J</span> Jordan's Love Languages
                  </p>
                  {loveLanguageResults.jordan.map(l => (
                    <div key={l.language} className="flex items-center gap-2 mb-2">
                      <span className="text-xs w-28 truncate">{l.language}</span>
                      <div className="flex-1 h-3 bg-muted rounded-full overflow-hidden">
                        <div className="h-full gradient-sky rounded-full" style={{ width: `${l.percentage}%` }} />
                      </div>
                      <span className="text-xs font-bold w-8 text-right">{l.percentage}%</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        {/* COMMUNICATE TAB — Say This + Conflict Resolution */}
        <TabsContent value="communicate" className="space-y-6 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Say This Tool */}
            <Card className="pillar-card">
              <CardHeader className="pb-2">
                <CardTitle className="font-display text-lg flex items-center gap-2"><MessageCircle className="w-5 h-5 text-primary" /> "Say This" Tool</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">Tell us what you're feeling, and AI will rephrase it kindly</p>
                <textarea className="w-full p-3 rounded-xl border border-border/50 bg-muted/30 text-sm resize-none h-20" placeholder="I feel frustrated when..." />
                <button className="mt-2 w-full py-2 rounded-xl bg-primary text-primary-foreground text-sm font-medium">Rephrase with Kindness ✨</button>
                <div className="mt-4 space-y-3">
                  {sayThisExamples.map((s, i) => (
                    <div key={i} className="space-y-1.5">
                      <div className="p-2.5 rounded-xl bg-destructive/5 border border-destructive/10 text-sm">
                        <span className="text-[10px] text-destructive font-semibold">BEFORE:</span> {s.feeling}
                      </div>
                      <div className="p-2.5 rounded-xl bg-mint-light border border-mint/20 text-sm">
                        <span className="text-[10px] text-mint font-semibold">AFTER:</span> {s.rephrased}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Conflict Resolution */}
            <Card className="pillar-card">
              <CardHeader className="pb-2">
                <CardTitle className="font-display text-lg flex items-center gap-2"><Shield className="w-5 h-5 text-primary" /> Conflict Resolution</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">Step-by-step guided mediation</p>
                <div className="space-y-3">
                  {conflictResolutionSteps.map(s => (
                    <div key={s.step} className="flex items-start gap-3 p-3 rounded-xl bg-muted/30">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary shrink-0">{s.step}</div>
                      <div>
                        <p className="text-sm font-semibold">{s.title}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{s.prompt}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="mt-3 w-full py-2 rounded-xl bg-primary text-primary-foreground text-sm font-medium">Start Mediation Session</button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* GRATITUDE TAB */}
        <TabsContent value="gratitude" className="space-y-6 mt-4">
          <Card className="pillar-card">
            <CardHeader className="pb-2">
              <CardTitle className="font-display text-lg flex items-center gap-2"><Star className="w-5 h-5 text-amber" /> Gratitude Exchange Wall</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 mb-4">
                {relationshipData.gratitudes.map((g, i) => (
                  <div key={i} className={`p-4 rounded-2xl ${g.from === "Alex" ? "bg-coral-light/50 ml-0 mr-12" : "bg-sky-light/50 ml-12 mr-0"}`}>
                    <div className="flex items-center gap-2 mb-1">
                      <div className={`w-6 h-6 rounded-full ${g.from === "Alex" ? "gradient-coral" : "gradient-sky"} flex items-center justify-center text-[10px] text-white font-bold`}>
                        {g.from[0]}
                      </div>
                      <span className="text-xs font-semibold">{g.from}</span>
                    </div>
                    <p className="text-sm">{g.message}</p>
                  </div>
                ))}
              </div>
              <div className="flex gap-2">
                <input className="flex-1 p-2.5 rounded-xl border border-border/50 bg-muted/30 text-sm" placeholder="What are you grateful for today?" />
                <button className="px-4 py-2 rounded-xl bg-primary text-primary-foreground text-sm">Share ❤️</button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* CONVERSATIONS TAB */}
        <TabsContent value="conversations" className="space-y-6 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(conversationStarters).map(([category, starters]) => (
              <Card key={category} className="pillar-card">
                <CardHeader className="pb-2">
                  <CardTitle className="font-display text-lg capitalize flex items-center gap-2">
                    <Coffee className="w-5 h-5 text-primary" /> {category}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {starters.map((s, i) => (
                    <div key={i} className="p-3 rounded-xl bg-muted/30 text-sm hover:bg-muted/50 cursor-pointer transition-colors">
                      "{s}"
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* TIME CAPSULE TAB */}
        <TabsContent value="time-capsule" className="space-y-6 mt-4">
          <Card className="pillar-card">
            <CardHeader className="pb-2">
              <CardTitle className="font-display text-lg flex items-center gap-2"><Clock className="w-5 h-5 text-primary" /> Time Capsules</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">Write a message or upload a photo to be revealed on a future date</p>
              <div className="space-y-3 mb-4">
                {timeCapsules.map(tc => (
                  <div key={tc.id} className="flex items-center gap-3 p-3 rounded-xl bg-muted/30">
                    <div className="w-10 h-10 rounded-xl bg-lavender-light flex items-center justify-center">
                      {tc.sealed ? <Lock className="w-4 h-4 text-lavender" /> : "📬"}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{tc.title}</p>
                      <p className="text-xs text-muted-foreground">Opens: {tc.revealDate} • By: {tc.createdBy}</p>
                    </div>
                    <Badge variant="secondary" className="text-[10px]">{tc.sealed ? "Sealed 🔒" : "Opened"}</Badge>
                  </div>
                ))}
              </div>
              <button className="w-full py-2.5 rounded-xl border-2 border-dashed border-primary/30 text-primary text-sm font-medium hover:bg-primary/5 transition-colors">
                + Create New Time Capsule
              </button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* MEMORIES TAB */}
        <TabsContent value="memories" className="space-y-6 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* On This Day */}
            <Card className="pillar-card">
              <CardHeader className="pb-2">
                <CardTitle className="font-display text-lg flex items-center gap-2"><Calendar className="w-5 h-5 text-primary" /> On This Day</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {onThisDayMemories.map((m, i) => (
                  <div key={i} className="p-3 rounded-xl bg-muted/30">
                    <Badge variant="secondary" className="text-[10px] mb-2">{m.year}</Badge>
                    <p className="text-sm">{m.event}</p>
                    {m.hasPhoto && <span className="text-xs text-primary">📸 Photo attached</span>}
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Milestones */}
            <Card className="pillar-card">
              <CardHeader className="pb-2">
                <CardTitle className="font-display text-lg flex items-center gap-2"><Star className="w-5 h-5 text-amber" /> Milestones</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative pl-6">
                  <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-border" />
                  {relationshipData.milestones.map((m, i) => (
                    <div key={i} className="relative mb-4 last:mb-0">
                      <div className="absolute -left-4 w-4 h-4 rounded-full bg-primary border-2 border-background" />
                      <p className="text-sm font-medium">{m.title}</p>
                      <p className="text-xs text-muted-foreground">{m.date}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Journal */}
          <Card className="pillar-card">
            <CardHeader className="pb-2">
              <CardTitle className="font-display text-lg flex items-center gap-2"><BookOpen className="w-5 h-5 text-primary" /> Shared Journal</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {relationshipData.journalEntries.map(j => (
                  <div key={j.id} className="p-4 rounded-xl bg-muted/30 hover:bg-muted/50 cursor-pointer transition-colors">
                    <div className="flex items-center gap-1 mb-1">
                      <Badge variant="secondary" className="text-[10px]">{j.author}</Badge>
                      {j.hasPhoto && <Camera className="w-3 h-3 text-muted-foreground" />}
                    </div>
                    <p className="text-sm font-semibold">{j.title}</p>
                    <p className="text-xs text-muted-foreground mt-1">{j.date}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* DATE IDEAS TAB */}
        <TabsContent value="date-ideas" className="space-y-6 mt-4">
          <Card className="pillar-card">
            <CardHeader className="pb-2">
              <CardTitle className="font-display text-lg flex items-center gap-2"><Heart className="w-5 h-5 text-primary" /> Date Ideas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {relationshipData.dateIdeas.map(d => (
                  <div key={d.id} className="p-4 rounded-xl bg-muted/30 hover:bg-muted/50 cursor-pointer transition-colors">
                    <p className="font-semibold text-sm">{d.title}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge variant="secondary" className="text-[10px]">{d.category}</Badge>
                      <span className="text-xs text-muted-foreground">{d.budget}</span>
                      <span className="text-xs">{"⭐".repeat(d.rating)}</span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-2">💰 Romance Budget: $150/mo remaining</p>
            </CardContent>
          </Card>
        </TabsContent>

        {/* LOVE LETTERS TAB */}
        <TabsContent value="love-letters" className="space-y-6 mt-4">
          <Card className="pillar-card">
            <CardHeader className="pb-2">
              <CardTitle className="font-display text-lg flex items-center gap-2"><PenLine className="w-5 h-5 text-primary" /> Digital Love Letters</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">Choose a beautiful template and compose a heartfelt letter</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {loveLetterTemplates.map(t => (
                  <button key={t.id} className={`p-4 rounded-2xl text-center transition-all hover:shadow-md border border-transparent hover:border-primary/20 bg-${t.bgColor}-light`}>
                    <PenLine className={`w-8 h-8 mx-auto mb-2 text-${t.bgColor}`} />
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-muted-foreground italic">"{t.preview}"</p>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* INTIMACY TAB (Private) */}
        <TabsContent value="intimacy" className="space-y-6 mt-4">
          <Card className="pillar-card">
            <CardHeader className="pb-2">
              <CardTitle className="font-display text-lg flex items-center gap-2">
                <Lock className="w-5 h-5 text-primary" /> Intimacy Tracker
                <PrivateBadge />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-muted/30 rounded-2xl p-8 text-center">
                <Lock className="w-12 h-12 mx-auto text-muted-foreground/50 mb-3" />
                <p className="font-semibold text-sm">Private Section</p>
                <p className="text-xs text-muted-foreground mt-1 mb-4">Both partners must unlock to view. Patterns visualization shows trends over time.</p>
                <button className="px-6 py-2 rounded-xl bg-primary text-primary-foreground text-sm font-medium">Unlock 🔐</button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
