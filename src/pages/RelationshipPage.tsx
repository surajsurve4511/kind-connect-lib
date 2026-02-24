import { Heart, BookOpen, MessageCircle, Gift, Camera, Calendar, Star, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { relationshipData } from "@/data/mockData";
import { RadarChart, Radar, PolarGrid, PolarAngleAxis, ResponsiveContainer } from "recharts";

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
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-2xl gradient-coral flex items-center justify-center">
          <Heart className="w-5 h-5 text-primary-foreground" />
        </div>
        <div>
          <h1 className="font-display text-2xl font-bold">Relationship & Emotional Wellness</h1>
          <p className="text-sm text-muted-foreground">Nurturing your connection, one moment at a time</p>
        </div>
      </div>

      <Tabs defaultValue="connection" className="space-y-4">
        <TabsList className="bg-muted/50 rounded-xl p-1">
          <TabsTrigger value="connection" className="rounded-lg">Connection Hub</TabsTrigger>
          <TabsTrigger value="journal" className="rounded-lg">Shared Journal</TabsTrigger>
          <TabsTrigger value="communication" className="rounded-lg">Communication</TabsTrigger>
          <TabsTrigger value="romance" className="rounded-lg">Romance</TabsTrigger>
          <TabsTrigger value="memories" className="rounded-lg">Memories</TabsTrigger>
        </TabsList>

        <TabsContent value="connection" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Health Score */}
            <Card className="pillar-card">
              <CardHeader className="pb-2">
                <CardTitle className="font-display text-base">Relationship Health</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center">
                <div className="relative w-36 h-36 my-2">
                  <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
                    <circle cx="60" cy="60" r="50" fill="none" stroke="hsl(var(--muted))" strokeWidth="8" />
                    <circle cx="60" cy="60" r="50" fill="none" stroke="hsl(var(--coral))" strokeWidth="8"
                      strokeDasharray={`${relationshipData.healthScore * 3.14} 314`} strokeLinecap="round" />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <Heart className="w-5 h-5 text-primary mb-1" />
                    <span className="text-3xl font-bold font-display">{relationshipData.healthScore}</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground text-center">Strong and growing 💪</p>
              </CardContent>
            </Card>

            {/* Today's Moment */}
            <Card className="pillar-card">
              <CardHeader className="pb-2">
                <CardTitle className="font-display text-base flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber" /> Today's Moment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="p-4 rounded-2xl bg-coral-light/50 border border-primary/10">
                  <p className="text-sm italic leading-relaxed">"{relationshipData.todaysMoment}"</p>
                </div>
                <div className="mt-4 space-y-2">
                  <p className="text-xs font-semibold text-muted-foreground">Recent Check-ins</p>
                  {relationshipData.checkIns.map((c, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm p-2 rounded-lg bg-muted/30">
                      <span>{c.mood === "happy" ? "😊" : c.mood === "calm" ? "😌" : "😰"}</span>
                      <span className="truncate">{c.note}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Love Languages */}
            <Card className="pillar-card">
              <CardHeader className="pb-2">
                <CardTitle className="font-display text-base">Love Languages</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={200}>
                  <RadarChart data={loveLanguageData}>
                    <PolarGrid stroke="hsl(var(--border))" />
                    <PolarAngleAxis dataKey="subject" tick={{ fontSize: 10, fill: "hsl(var(--muted-foreground))" }} />
                    <Radar name="Alex" dataKey="A" stroke="hsl(var(--coral))" fill="hsl(var(--coral))" fillOpacity={0.2} />
                    <Radar name="Jordan" dataKey="B" stroke="hsl(var(--sky))" fill="hsl(var(--sky))" fillOpacity={0.2} />
                  </RadarChart>
                </ResponsiveContainer>
                <div className="flex justify-center gap-4 text-xs mt-1">
                  <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-coral" /> Alex</span>
                  <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-sky" /> Jordan</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Gratitude Exchange */}
          <Card className="pillar-card">
            <CardHeader className="pb-2">
              <CardTitle className="font-display text-base">💝 Gratitude Exchange</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relationshipData.gratitudes.map((g, i) => (
                <div key={i} className={`p-4 rounded-2xl ${i === 0 ? "bg-coral-light/30" : "bg-sky-light/30"} border border-border/30`}>
                  <p className="text-xs font-semibold text-muted-foreground mb-1">From {g.from}</p>
                  <p className="text-sm">{g.message}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="journal" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {relationshipData.journalEntries.map(entry => (
              <Card key={entry.id} className="pillar-card">
                <CardContent className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-primary-foreground ${entry.author === "Alex" ? "gradient-coral" : entry.author === "Jordan" ? "gradient-sky" : "bg-lavender"}`}>
                      {entry.author === "Both" ? "♥" : entry.author[0]}
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{entry.title}</p>
                      <p className="text-[10px] text-muted-foreground">{entry.date} • by {entry.author}</p>
                    </div>
                    {entry.hasPhoto && <Camera className="w-4 h-4 text-muted-foreground ml-auto" />}
                  </div>
                  <p className="text-sm text-muted-foreground">{entry.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="communication" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="pillar-card">
              <CardHeader className="pb-2">
                <CardTitle className="font-display text-base flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" /> Conversation Starters
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {relationshipData.conversationStarters.map((s, i) => (
                  <div key={i} className="p-3 rounded-xl bg-muted/50 text-sm hover:bg-muted/80 transition-colors cursor-pointer">
                    💬 {s}
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="pillar-card">
              <CardHeader className="pb-2">
                <CardTitle className="font-display text-base">Emotional Check-in</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">How are you feeling right now?</p>
                <div className="flex gap-3 flex-wrap">
                  {["😊 Happy", "😌 Calm", "🥰 Loved", "😰 Stressed", "😢 Sad", "😤 Frustrated"].map(e => (
                    <button key={e} className="px-4 py-2 rounded-full bg-muted/50 hover:bg-muted text-sm transition-colors">{e}</button>
                  ))}
                </div>
                <div className="mt-4 p-3 rounded-xl bg-muted/30">
                  <p className="text-xs font-semibold text-muted-foreground mb-2">"Say This Instead" Helper</p>
                  <p className="text-sm"><span className="text-destructive line-through">You never help around the house</span></p>
                  <p className="text-sm text-mint mt-1">→ "I feel overwhelmed when I handle chores alone. Can we figure out a plan together?"</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="romance" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {relationshipData.dateIdeas.map(d => (
              <Card key={d.id} className="pillar-card hover:border-primary/30 cursor-pointer">
                <CardContent className="p-5 text-center">
                  <div className="text-3xl mb-2">{d.category === "Outdoor" ? "🌅" : d.category === "Experience" ? "👨‍🍳" : d.category === "Culture" ? "🎨" : "✨"}</div>
                  <p className="font-semibold text-sm">{d.title}</p>
                  <p className="text-xs text-muted-foreground mt-1">{d.category} • {d.budget}</p>
                  <div className="flex justify-center mt-2">
                    {Array.from({ length: d.rating }).map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber text-amber" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="pillar-card">
            <CardHeader className="pb-2">
              <CardTitle className="font-display text-base">💝 Surprise Generator</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="p-6 rounded-2xl bg-coral-light/30 text-center">
                <p className="text-lg font-display font-semibold">Today's Surprise Idea</p>
                <p className="text-sm text-muted-foreground mt-2">Leave a love note in Jordan's lunch bag with their favorite snack 🎁</p>
                <button className="mt-4 px-4 py-2 rounded-xl gradient-coral text-primary-foreground text-sm hover:opacity-90 transition-opacity">
                  Generate Another ✨
                </button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="memories" className="space-y-4">
          <Card className="pillar-card">
            <CardHeader className="pb-2">
              <CardTitle className="font-display text-base flex items-center gap-2">
                <Calendar className="w-4 h-4" /> Milestone Timeline
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />
                <div className="space-y-6">
                  {relationshipData.milestones.map((m, i) => (
                    <div key={i} className="flex items-center gap-4 pl-2">
                      <div className="w-5 h-5 rounded-full gradient-coral ring-4 ring-background z-10 shrink-0" />
                      <div className="pillar-card flex-1 p-3">
                        <p className="text-sm font-semibold">{m.title}</p>
                        <p className="text-[10px] text-muted-foreground">{m.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="pillar-card">
            <CardHeader className="pb-2">
              <CardTitle className="font-display text-base">📸 On This Day</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="p-6 rounded-2xl bg-lavender-light/30 text-center">
                <p className="text-sm text-muted-foreground">1 year ago today</p>
                <p className="text-lg font-display font-semibold mt-2">Your first cooking adventure together! 🍝</p>
                <p className="text-sm text-muted-foreground mt-1">You made pasta from scratch and it was a beautiful mess.</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
