import { Settings, User, Bell, Shield, Palette, CreditCard, Heart, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export default function SettingsPage() {
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-2xl bg-muted flex items-center justify-center">
          <Settings className="w-5 h-5 text-muted-foreground" />
        </div>
        <div>
          <h1 className="font-display text-2xl font-bold">Settings</h1>
          <p className="text-sm text-muted-foreground">Customize your LifeSync experience</p>
        </div>
      </div>

      <Tabs defaultValue="profile" className="space-y-4">
        <TabsList className="bg-muted/50 rounded-xl p-1">
          <TabsTrigger value="profile" className="rounded-lg">Profile</TabsTrigger>
          <TabsTrigger value="notifications" className="rounded-lg">Notifications</TabsTrigger>
          <TabsTrigger value="privacy" className="rounded-lg">Privacy</TabsTrigger>
          <TabsTrigger value="subscription" className="rounded-lg">Subscription</TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-4">
          <Card className="pillar-card">
            <CardHeader className="pb-2">
              <CardTitle className="font-display text-base flex items-center gap-2">
                <Users className="w-4 h-4" /> Relationship Profile
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-muted/30">
                <div className="w-16 h-16 rounded-full gradient-coral flex items-center justify-center text-xl font-bold text-primary-foreground">A</div>
                <div>
                  <p className="font-semibold">Alex</p>
                  <p className="text-xs text-muted-foreground">alex@lifesync.app</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-muted/30">
                <div className="w-16 h-16 rounded-full gradient-sky flex items-center justify-center text-xl font-bold text-primary-foreground">J</div>
                <div>
                  <p className="font-semibold">Jordan</p>
                  <p className="text-xs text-muted-foreground">jordan@lifesync.app</p>
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-coral-light/30">
                <p className="text-sm font-semibold">Relationship Details</p>
                <div className="grid grid-cols-2 gap-3 mt-2 text-sm">
                  <div><span className="text-muted-foreground">Status:</span> Committed</div>
                  <div><span className="text-muted-foreground">Together since:</span> Feb 2024</div>
                  <div><span className="text-muted-foreground">Life stage:</span> Established</div>
                  <div><span className="text-muted-foreground">Living:</span> Together</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-4">
          <Card className="pillar-card">
            <CardHeader className="pb-2">
              <CardTitle className="font-display text-base flex items-center gap-2">
                <Bell className="w-4 h-4" /> Notification Preferences
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { label: "Daily Morning Brief", desc: "Receive a summary every morning", default: true },
                { label: "Task Reminders", desc: "Get notified about upcoming tasks", default: true },
                { label: "Relationship Check-ins", desc: "Daily emotional check-in prompts", default: true },
                { label: "Financial Alerts", desc: "Budget warnings and bill reminders", default: true },
                { label: "Health Reminders", desc: "Medication and appointment reminders", default: false },
                { label: "AI Suggestions", desc: "Proactive recommendations from AI", default: false },
              ].map((n, i) => (
                <div key={i} className="flex items-center justify-between py-2">
                  <div>
                    <Label className="text-sm font-medium">{n.label}</Label>
                    <p className="text-[10px] text-muted-foreground">{n.desc}</p>
                  </div>
                  <Switch defaultChecked={n.default} />
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="privacy" className="space-y-4">
          <Card className="pillar-card">
            <CardHeader className="pb-2">
              <CardTitle className="font-display text-base flex items-center gap-2">
                <Shield className="w-4 h-4" /> Privacy & Security
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { label: "Share health data with partner", default: true },
                { label: "Share financial data with partner", default: true },
                { label: "Share location with partner", default: false },
                { label: "AI learning from your data", default: true },
                { label: "Anonymous analytics", default: true },
                { label: "Biometric lock", default: false },
              ].map((p, i) => (
                <div key={i} className="flex items-center justify-between py-2">
                  <Label className="text-sm font-medium">{p.label}</Label>
                  <Switch defaultChecked={p.default} />
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="subscription" className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { tier: "Free", price: "$0", features: ["2 Pillars", "Basic tracking", "Community support"], current: false },
              { tier: "Premium", price: "$9.99/mo", features: ["All 8 Pillars", "AI Assistant", "Advanced analytics", "Priority support"], current: true },
              { tier: "Family", price: "$14.99/mo", features: ["Everything in Premium", "Up to 6 family members", "Eldercare module", "Legacy planning"], current: false },
            ].map((plan, i) => (
              <Card key={i} className={`pillar-card ${plan.current ? "border-primary ring-2 ring-primary/20" : ""}`}>
                <CardContent className="p-5 text-center">
                  {plan.current && <span className="text-[10px] px-2 py-0.5 rounded-full gradient-coral text-primary-foreground">Current Plan</span>}
                  <p className="font-display font-bold text-lg mt-2">{plan.tier}</p>
                  <p className="text-2xl font-bold font-display mt-1">{plan.price}</p>
                  <div className="mt-4 space-y-2">
                    {plan.features.map((f, fi) => (
                      <p key={fi} className="text-sm text-muted-foreground">✓ {f}</p>
                    ))}
                  </div>
                  {!plan.current && (
                    <button className="mt-4 w-full py-2 rounded-xl border border-primary text-primary text-sm hover:bg-primary/5 transition-colors">
                      {plan.tier === "Free" ? "Downgrade" : "Upgrade"}
                    </button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
