import { Users, Calendar, Gift, PartyPopper, Heart, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { socialData } from "@/data/mockData";

export default function SocialPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-2xl bg-mint flex items-center justify-center">
          <Users className="w-5 h-5 text-primary-foreground" />
        </div>
        <div>
          <h1 className="font-display text-2xl font-bold">Social Life & Experiences</h1>
          <p className="text-sm text-muted-foreground">Staying connected with the people you love</p>
        </div>
      </div>

      <Tabs defaultValue="calendar" className="space-y-4">
        <TabsList className="bg-muted/50 rounded-xl p-1">
          <TabsTrigger value="calendar" className="rounded-lg">Social Calendar</TabsTrigger>
          <TabsTrigger value="celebrations" className="rounded-lg">Celebrations</TabsTrigger>
          <TabsTrigger value="gifts" className="rounded-lg">Gift Manager</TabsTrigger>
          <TabsTrigger value="community" className="rounded-lg">Community</TabsTrigger>
        </TabsList>

        <TabsContent value="calendar" className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {socialData.upcomingEvents.map(e => (
              <Card key={e.id} className="pillar-card hover:border-primary/30 cursor-pointer">
                <CardContent className="p-5 flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                    e.type === "birthday" ? "bg-coral-light" :
                    e.type === "wedding" ? "bg-rose-light" :
                    e.type === "social" ? "bg-sky-light" : "bg-lavender-light"
                  }`}>
                    <span className="text-xl">{e.type === "birthday" ? "🎂" : e.type === "wedding" ? "💒" : e.type === "social" ? "🎉" : "📚"}</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold">{e.title}</p>
                    <p className="text-[10px] text-muted-foreground">{e.date}</p>
                  </div>
                  <span className={`text-[10px] px-2 py-1 rounded-full ${
                    e.rsvp === "going" ? "bg-mint-light text-mint" : "bg-amber-light text-amber"
                  }`}>{e.rsvp}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="celebrations" className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {socialData.celebrations.map((c, i) => (
              <Card key={i} className={`pillar-card ${c.daysUntil < 0 ? "opacity-60" : ""}`}>
                <CardContent className="p-5 text-center">
                  <div className="text-3xl mb-2">{c.title.includes("Valentine") ? "💕" : c.title.includes("Birthday") ? "🎂" : "💍"}</div>
                  <p className="font-semibold text-sm">{c.title}</p>
                  <p className="text-[10px] text-muted-foreground">{c.date}</p>
                  {c.daysUntil > 0 ? (
                    <p className="text-sm font-bold text-primary mt-2">{c.daysUntil} days away</p>
                  ) : (
                    <p className="text-sm text-muted-foreground mt-2">Past</p>
                  )}
                  <span className={`inline-block mt-2 text-[10px] px-2 py-1 rounded-full ${c.planned ? "bg-mint-light text-mint" : "bg-amber-light text-amber"}`}>
                    {c.planned ? "Planned ✓" : "Not yet planned"}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="gifts" className="space-y-4">
          <Card className="pillar-card">
            <CardHeader className="pb-2">
              <CardTitle className="font-display text-base flex items-center gap-2">
                <Gift className="w-4 h-4" /> Gift Tracker
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {socialData.giftTracker.map((g, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-muted/30">
                  <div className="text-xl">🎁</div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{g.person} — {g.occasion}</p>
                    <p className="text-[10px] text-muted-foreground">{g.date} • Budget: ${g.budget}</p>
                    {g.idea && <p className="text-xs text-muted-foreground mt-0.5">Idea: {g.idea}</p>}
                  </div>
                  <span className={`text-[10px] px-2 py-1 rounded-full ${
                    g.status === "purchased" ? "bg-mint-light text-mint" :
                    g.status === "planned" ? "bg-sky-light text-sky" : "bg-amber-light text-amber"
                  }`}>{g.status}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="pillar-card">
            <CardHeader className="pb-2">
              <CardTitle className="font-display text-base">🤖 AI Gift Suggestions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { person: "Mom", suggestion: "Luxury spa day voucher", price: "$89", match: "95%" },
                  { person: "Best Friend", suggestion: "Artisan cookbook set", price: "$65", match: "88%" },
                  { person: "Dad", suggestion: "Premium golf gloves", price: "$45", match: "92%" },
                ].map((s, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-lavender-light/30 text-center">
                    <p className="text-xs text-muted-foreground">For {s.person}</p>
                    <p className="text-sm font-semibold mt-1">{s.suggestion}</p>
                    <p className="text-xs text-muted-foreground mt-1">{s.price} • {s.match} match</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="community" className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { name: "Neighborhood Clean-up", type: "Volunteer", date: "March 15", emoji: "🌿" },
              { name: "Couples Book Club", type: "Social Group", date: "Every 2nd Thursday", emoji: "📚" },
              { name: "Community Garden", type: "Volunteer", date: "Weekends", emoji: "🌻" },
              { name: "Hiking Group", type: "Activity", date: "Saturdays", emoji: "🥾" },
            ].map((c, i) => (
              <Card key={i} className="pillar-card hover:border-primary/30 cursor-pointer">
                <CardContent className="p-5 flex items-center gap-4">
                  <div className="text-3xl">{c.emoji}</div>
                  <div>
                    <p className="text-sm font-semibold">{c.name}</p>
                    <p className="text-[10px] text-muted-foreground">{c.type} • {c.date}</p>
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
