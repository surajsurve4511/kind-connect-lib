import { Users, Gift, Calendar, Star, Phone, Heart, MessageSquare, Globe2, Clock, Send, Cake } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { socialData } from "@/data/mockData";
import { couplesFriendsList, giftTracker, socialCalendar, relationshipMap, hospitalityLog } from "@/data/extendedMockData";
import { LifeStageHeader } from "@/components/shared/LifeStageHeader";

export default function SocialPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2 mb-2"><LifeStageHeader /></div>
          <h1 className="font-display text-2xl font-bold flex items-center gap-2"><Users className="w-6 h-6 text-mint" /> Social & Community</h1>
          <p className="text-sm text-muted-foreground">Nurture friendships and stay connected</p>
        </div>
      </div>

      <Tabs defaultValue="friends" className="w-full">
        <TabsList className="w-full flex flex-wrap h-auto gap-1 bg-muted/30 p-1 rounded-2xl">
          {["friends", "gifts", "events", "calendar", "relationship-map", "hospitality", "volunteering"].map(t => (
            <TabsTrigger key={t} value={t} className="rounded-xl text-xs capitalize">{t.replace(/-/g, " ")}</TabsTrigger>
          ))}
        </TabsList>

        {/* FRIENDS */}
        <TabsContent value="friends" className="space-y-6 mt-4">
          <Card className="pillar-card">
            <CardHeader className="pb-2"><CardTitle className="font-display text-lg">Couple's Friends</CardTitle></CardHeader>
            <CardContent className="space-y-2">
              {couplesFriendsList.map(f => (
                <div key={f.id} className="flex items-center gap-3 p-3 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-mint-light flex items-center justify-center text-sm font-bold">{f.name.split(" ").map(w => w[0]).join("")}</div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium">{f.name}</p>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="text-[10px]">{f.connection}</Badge>
                      {f.birthday && <span className="text-xs text-muted-foreground flex items-center gap-1"><Cake className="w-3 h-3" /> {f.birthday}</span>}
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">Last: {f.lastContact.slice(5)}</p>
                    <Badge variant={f.needsAttention ? "destructive" : "secondary"} className="text-[10px]">
                      {f.needsAttention ? "Reach out" : "Recent"}
                    </Badge>
                  </div>
                </div>
              ))}
              <button className="w-full py-2 rounded-xl border-2 border-dashed border-primary/30 text-primary text-sm">+ Add Friend</button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* GIFTS */}
        <TabsContent value="gifts" className="space-y-6 mt-4">
          <Card className="pillar-card">
            <CardHeader className="pb-2"><CardTitle className="font-display text-lg flex items-center gap-2"><Gift className="w-5 h-5 text-amber" /> Gift Tracker</CardTitle></CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <p className="text-xs font-semibold text-muted-foreground mb-2">UPCOMING</p>
                  <div className="space-y-2">
                    {giftTracker.filter(g => g.status === "need").map(g => (
                      <div key={g.id} className="flex items-center gap-3 p-3 rounded-xl bg-amber-light/50">
                        <Gift className="w-5 h-5 text-amber shrink-0" />
                        <div className="flex-1">
                          <p className="text-sm font-medium">{g.person} — {g.occasion}</p>
                          <p className="text-xs text-muted-foreground">Budget: ${g.budget} • Date: {g.date}</p>
                        </div>
                        <Badge variant="secondary" className="text-[10px]">Needs idea</Badge>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold text-muted-foreground mb-2">GIVEN</p>
                  <div className="space-y-2">
                    {giftTracker.filter(g => g.status === "given").map(g => (
                      <div key={g.id} className="flex items-center gap-3 p-3 rounded-xl bg-muted/30">
                        <Gift className="w-5 h-5 text-muted-foreground shrink-0" />
                        <div className="flex-1">
                          <p className="text-sm font-medium">{g.person} — {g.occasion}</p>
                          <p className="text-xs text-muted-foreground">{g.ideaGiven}</p>
                        </div>
                        <Badge variant="default" className="text-[10px]">✓ Given</Badge>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* EVENTS */}
        <TabsContent value="events" className="space-y-6 mt-4">
          <Card className="pillar-card">
            <CardHeader className="pb-2"><CardTitle className="font-display text-lg">Upcoming Events</CardTitle></CardHeader>
            <CardContent className="space-y-2">
              {socialData.upcomingEvents.map(e => (
                <div key={e.id} className="flex items-center gap-3 p-3 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-mint-light flex items-center justify-center text-sm font-bold">
                    {e.date.split("-")[2]}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{e.title}</p>
                    <p className="text-xs text-muted-foreground">{e.type} • {e.date}</p>
                  </div>
                  <Badge variant="secondary" className="text-[10px]">{e.rsvp}</Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        {/* CALENDAR */}
        <TabsContent value="calendar" className="space-y-6 mt-4">
          <Card className="pillar-card">
            <CardHeader className="pb-2"><CardTitle className="font-display text-lg flex items-center gap-2"><Calendar className="w-5 h-5 text-mint" /> Social Calendar</CardTitle></CardHeader>
            <CardContent>
              <div className="space-y-3">
                {socialCalendar.map(d => (
                  <div key={d.id} className="flex items-center gap-3 p-3 rounded-xl bg-muted/30">
                    <div className="w-14 text-center shrink-0">
                      <p className="text-sm font-bold">{d.date.split("-")[2]}</p>
                      <p className="text-[10px] text-muted-foreground">{["Jan", "Feb", "Mar", "Apr", "May", "Jun"][parseInt(d.date.split("-")[1]) - 1]}</p>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{d.event}</p>
                      <p className="text-xs text-muted-foreground">{d.type} • {d.who.join(", ")}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      {d.confirmed && <Badge variant="default" className="text-[10px]">✓ Confirmed</Badge>}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* RELATIONSHIP MAP */}
        <TabsContent value="relationship-map" className="space-y-6 mt-4">
          <Card className="pillar-card">
            <CardHeader className="pb-2"><CardTitle className="font-display text-lg flex items-center gap-2"><Heart className="w-5 h-5 text-primary" /> Relationship Map</CardTitle></CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {Object.entries(relationshipMap).map(([tier, people]) => (
                  <div key={tier}>
                    <p className="text-xs font-semibold text-muted-foreground mb-2 uppercase">{tier.replace("tier", "Tier ").replace("1", "1 — Inner Circle").replace("2", "2 — Close Friends").replace("3", "3 — Extended")}</p>
                    <div className="space-y-2">
                      {people.map((p, i) => (
                        <div key={i} className="flex items-center gap-2 p-2 rounded-xl bg-muted/30">
                          <div className="w-8 h-8 rounded-full bg-mint-light flex items-center justify-center text-xs font-bold">{p.name[0]}</div>
                          <div>
                            <p className="text-sm font-medium">{p.name}</p>
                            <p className="text-[10px] text-muted-foreground">{p.relation}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* HOSPITALITY */}
        <TabsContent value="hospitality" className="space-y-6 mt-4">
          <Card className="pillar-card">
            <CardHeader className="pb-2"><CardTitle className="font-display text-lg">Hospitality Log</CardTitle></CardHeader>
            <CardContent className="space-y-3">
              {hospitalityLog.map(h => (
                <div key={h.id} className="p-3 rounded-xl bg-muted/30">
                  <div className="flex items-center justify-between mb-1">
                    <p className="font-semibold text-sm">{h.event}</p>
                    <Badge variant="secondary" className="text-[10px]">{h.date}</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">Guests: {h.guests.join(", ")}</p>
                  <p className="text-xs text-muted-foreground mt-1">Feedback: {h.feedback}</p>
                </div>
              ))}
              <button className="w-full py-2 rounded-xl border-2 border-dashed border-primary/30 text-primary text-sm">+ Plan New Event</button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* VOLUNTEERING */}
        <TabsContent value="volunteering" className="space-y-6 mt-4">
          <Card className="pillar-card">
            <CardHeader className="pb-2"><CardTitle className="font-display text-lg flex items-center gap-2"><Globe2 className="w-5 h-5 text-mint" /> Community & Volunteering</CardTitle></CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { id: 1, org: "Local Food Bank", role: "Volunteer", hoursPerMonth: 8, impact: "100+ meals served" },
                  { id: 2, org: "Animal Shelter", role: "Dog Walker", hoursPerMonth: 6, impact: "12 dogs walked weekly" },
                ].map(v => (
                  <div key={v.id} className="p-4 rounded-xl bg-muted/30">
                    <p className="font-semibold text-sm">{v.org}</p>
                    <p className="text-xs text-muted-foreground mt-1">{v.role} • {v.hoursPerMonth}h/month</p>
                    <Badge variant="secondary" className="text-[10px] mt-1">{v.impact}</Badge>
                  </div>
                ))}
                <button className="w-full py-2 rounded-xl border-2 border-dashed border-primary/30 text-primary text-sm">+ Find Opportunities</button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
