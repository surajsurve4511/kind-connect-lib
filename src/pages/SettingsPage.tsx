import { Settings, User, Bell, Lock, Palette, Globe, Shield, Moon, Sun, Smartphone, Download, Trash2, Heart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { LifeStageHeader } from "@/components/shared/LifeStageHeader";

export default function SettingsPage() {
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <div className="flex items-center gap-2 mb-2"><LifeStageHeader /></div>
      <h1 className="font-display text-2xl font-bold flex items-center gap-2"><Settings className="w-6 h-6 text-primary" /> Settings</h1>
      <p className="text-sm text-muted-foreground">Customize your LifeSync experience</p>

      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="w-full flex flex-wrap h-auto gap-1 bg-muted/30 p-1 rounded-2xl">
          {["profile", "notifications", "privacy", "appearance", "couple", "language", "data", "subscription"].map(t => (
            <TabsTrigger key={t} value={t} className="rounded-xl text-xs capitalize">{t}</TabsTrigger>
          ))}
        </TabsList>

        {/* PROFILE */}
        <TabsContent value="profile" className="space-y-6 mt-4">
          <Card className="pillar-card">
            <CardHeader className="pb-2"><CardTitle className="font-display text-lg flex items-center gap-2"><User className="w-5 h-5 text-primary" /> Profile</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/30">
                <div className="w-16 h-16 rounded-2xl gradient-coral flex items-center justify-center text-2xl font-bold text-white">A</div>
                <div>
                  <p className="font-display font-bold text-lg">Alex Johnson</p>
                  <p className="text-sm text-muted-foreground">alex@lifesync.app</p>
                  <Badge variant="secondary" className="text-[10px] mt-1">LifeSync Plus</Badge>
                </div>
                <button className="ml-auto px-4 py-2 rounded-xl border border-border/50 text-sm hover:bg-muted/30">Edit</button>
              </div>
              {[
                { label: "Display Name", value: "Alex" },
                { label: "Email", value: "alex@lifesync.app" },
                { label: "Phone", value: "+1 (555) 123-4567" },
                { label: "Birthday", value: "March 15, 1995" },
                { label: "Time Zone", value: "EST (UTC-5)" },
              ].map(f => (
                <div key={f.label} className="flex items-center justify-between py-2 border-b border-border/30 last:border-0">
                  <span className="text-sm text-muted-foreground">{f.label}</span>
                  <span className="text-sm font-medium">{f.value}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        {/* NOTIFICATIONS */}
        <TabsContent value="notifications" className="space-y-6 mt-4">
          <Card className="pillar-card">
            <CardHeader className="pb-2"><CardTitle className="font-display text-lg flex items-center gap-2"><Bell className="w-5 h-5 text-primary" /> Notifications</CardTitle></CardHeader>
            <CardContent className="space-y-3">
              {[
                { name: "Daily Relationship Tip", desc: "A heartfelt tip every morning", on: true },
                { name: "Bill Reminders", desc: "3 days before bills are due", on: true },
                { name: "Health Check-in", desc: "Weekly mood & wellness prompt", on: true },
                { name: "Task Due Alerts", desc: "When assigned tasks are due", on: true },
                { name: "AI Insights", desc: "Personalized life suggestions", on: false },
                { name: "Partner Mood Updates", desc: "When your partner does a check-in", on: false },
                { name: "Weekly Summary", desc: "Sunday evening life balance report", on: true },
                { name: "Emergency Alerts", desc: "Critical bill overdue, health alerts", on: true },
              ].map(n => (
                <div key={n.name} className="flex items-center gap-3 p-3 rounded-xl bg-muted/30">
                  <div className="flex-1">
                    <p className="text-sm font-medium">{n.name}</p>
                    <p className="text-xs text-muted-foreground">{n.desc}</p>
                  </div>
                  <div className={`w-10 h-5 rounded-full flex items-center px-0.5 cursor-pointer ${n.on ? "bg-primary justify-end" : "bg-muted justify-start"}`}>
                    <div className="w-4 h-4 rounded-full bg-white shadow-sm" />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        {/* PRIVACY */}
        <TabsContent value="privacy" className="space-y-6 mt-4">
          <Card className="pillar-card">
            <CardHeader className="pb-2"><CardTitle className="font-display text-lg flex items-center gap-2"><Lock className="w-5 h-5 text-primary" /> Privacy & Security</CardTitle></CardHeader>
            <CardContent className="space-y-3">
              {[
                { name: "Two-Factor Authentication", desc: "Extra layer of security", on: true },
                { name: "Biometric Lock", desc: "Face ID / Fingerprint to open app", on: false },
                { name: "Private Sections PIN", desc: "Separate PIN for Intimacy & Health sections", on: true },
                { name: "Data Encryption", desc: "End-to-end encryption for all personal data", on: true },
                { name: "Share Health Data with Partner", desc: "Allow partner to see your health metrics", on: true },
                { name: "Share Financial Data", desc: "Full financial transparency with partner", on: true },
              ].map(n => (
                <div key={n.name} className="flex items-center gap-3 p-3 rounded-xl bg-muted/30">
                  <div className="flex-1">
                    <p className="text-sm font-medium">{n.name}</p>
                    <p className="text-xs text-muted-foreground">{n.desc}</p>
                  </div>
                  <div className={`w-10 h-5 rounded-full flex items-center px-0.5 cursor-pointer ${n.on ? "bg-primary justify-end" : "bg-muted justify-start"}`}>
                    <div className="w-4 h-4 rounded-full bg-white shadow-sm" />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        {/* APPEARANCE */}
        <TabsContent value="appearance" className="space-y-6 mt-4">
          <Card className="pillar-card">
            <CardHeader className="pb-2"><CardTitle className="font-display text-lg flex items-center gap-2"><Palette className="w-5 h-5 text-primary" /> Appearance</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm font-medium mb-2">Theme</p>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { name: "Light", icon: <Sun className="w-5 h-5" /> },
                    { name: "Dark", icon: <Moon className="w-5 h-5" /> },
                    { name: "System", icon: <Smartphone className="w-5 h-5" /> },
                  ].map(t => (
                    <button key={t.name} className={`p-4 rounded-xl border-2 text-center transition-colors ${t.name === "Light" ? "border-primary bg-primary/5" : "border-border/50 hover:border-primary/30"}`}>
                      <div className="flex justify-center mb-1">{t.icon}</div>
                      <p className="text-sm font-medium">{t.name}</p>
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm font-medium mb-2">Accent Color</p>
                <div className="flex gap-3">
                  {[
                    { name: "Coral", class: "bg-coral" },
                    { name: "Sky", class: "bg-sky" },
                    { name: "Mint", class: "bg-mint" },
                    { name: "Amber", class: "bg-amber" },
                    { name: "Lavender", class: "bg-lavender" },
                  ].map(c => (
                    <button key={c.name} className={`w-10 h-10 rounded-full ${c.class} ${c.name === "Coral" ? "ring-2 ring-offset-2 ring-primary" : ""}`} title={c.name} />
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* COUPLE */}
        <TabsContent value="couple" className="space-y-6 mt-4">
          <Card className="pillar-card">
            <CardHeader className="pb-2"><CardTitle className="font-display text-lg flex items-center gap-2"><Heart className="w-5 h-5 text-primary" /> Couple Settings</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 rounded-xl bg-muted/30">
                <p className="text-sm font-medium mb-2">Partner Link Status</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full gradient-sky flex items-center justify-center text-sm font-bold text-white">J</div>
                  <div>
                    <p className="text-sm font-medium">Jordan Rivera</p>
                    <p className="text-xs text-muted-foreground">jordan@lifesync.app</p>
                  </div>
                  <Badge variant="default" className="text-[10px] ml-auto">✓ Linked</Badge>
                </div>
              </div>
              {[
                { label: "Anniversary Date", value: "February 14, 2022" },
                { label: "Relationship Type", value: "Married" },
                { label: "Life Stage", value: "Building Foundation" },
                { label: "Shared Calendar", value: "Enabled" },
                { label: "Joint Budget Mode", value: "Hybrid (Joint + Individual)" },
              ].map(f => (
                <div key={f.label} className="flex items-center justify-between py-2 border-b border-border/30 last:border-0">
                  <span className="text-sm text-muted-foreground">{f.label}</span>
                  <span className="text-sm font-medium">{f.value}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        {/* LANGUAGE */}
        <TabsContent value="language" className="space-y-6 mt-4">
          <Card className="pillar-card">
            <CardHeader className="pb-2"><CardTitle className="font-display text-lg flex items-center gap-2"><Globe className="w-5 h-5 text-primary" /> Language & Region</CardTitle></CardHeader>
            <CardContent className="space-y-3">
              {[
                { label: "Language", value: "English (US)" },
                { label: "Region", value: "United States" },
                { label: "Currency", value: "USD ($)" },
                { label: "Date Format", value: "MM/DD/YYYY" },
                { label: "Units", value: "Imperial" },
                { label: "First Day of Week", value: "Sunday" },
              ].map(f => (
                <div key={f.label} className="flex items-center justify-between p-3 rounded-xl bg-muted/30">
                  <span className="text-sm">{f.label}</span>
                  <span className="text-sm font-medium">{f.value}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        {/* DATA */}
        <TabsContent value="data" className="space-y-6 mt-4">
          <Card className="pillar-card">
            <CardHeader className="pb-2"><CardTitle className="font-display text-lg flex items-center gap-2"><Download className="w-5 h-5 text-primary" /> Data Management</CardTitle></CardHeader>
            <CardContent className="space-y-3">
              <button className="w-full p-3 rounded-xl bg-muted/30 text-left hover:bg-muted/50 transition-colors flex items-center gap-3">
                <Download className="w-5 h-5 text-primary" />
                <div><p className="text-sm font-medium">Export All Data</p><p className="text-xs text-muted-foreground">Download JSON/CSV of all your data</p></div>
              </button>
              <button className="w-full p-3 rounded-xl bg-muted/30 text-left hover:bg-muted/50 transition-colors flex items-center gap-3">
                <Shield className="w-5 h-5 text-primary" />
                <div><p className="text-sm font-medium">Backup & Restore</p><p className="text-xs text-muted-foreground">Create or restore from a backup</p></div>
              </button>
              <button className="w-full p-3 rounded-xl bg-destructive/5 border border-destructive/20 text-left hover:bg-destructive/10 transition-colors flex items-center gap-3">
                <Trash2 className="w-5 h-5 text-destructive" />
                <div><p className="text-sm font-medium text-destructive">Delete Account</p><p className="text-xs text-muted-foreground">Permanently delete all data and account</p></div>
              </button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* SUBSCRIPTION */}
        <TabsContent value="subscription" className="space-y-6 mt-4">
          <Card className="pillar-card overflow-hidden">
            <div className="gradient-coral p-5 text-primary-foreground">
              <p className="font-display font-bold text-lg">LifeSync Plus</p>
              <p className="text-sm opacity-90">$9.99/month • Billed monthly</p>
            </div>
            <CardContent className="p-4 space-y-3">
              <p className="text-xs font-semibold text-muted-foreground mb-2">INCLUDED FEATURES</p>
              {[
                "Unlimited AI conversations",
                "Advanced analytics & reports",
                "All life pillars unlocked",
                "Time capsule feature",
                "Priority support",
                "Custom themes",
              ].map(f => (
                <div key={f} className="flex items-center gap-2 text-sm">
                  <span className="text-mint">✓</span> {f}
                </div>
              ))}
              <div className="flex gap-2 mt-4">
                <button className="flex-1 py-2 rounded-xl bg-primary text-primary-foreground text-sm font-medium">Manage Plan</button>
                <button className="flex-1 py-2 rounded-xl border border-border/50 text-sm hover:bg-muted/30">View All Plans</button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
