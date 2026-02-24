import { Bot, Sparkles, Brain, MessageCircle, BarChart3, Lightbulb, Calendar, Heart, Activity, DollarSign, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { aiInsights, weeklyReport, aiConversationHistory, nudgePreferences } from "@/data/extendedMockData";
import { LifeStageHeader } from "@/components/shared/LifeStageHeader";
import { PillarScoreCard } from "@/components/shared/PillarScoreCard";
import { lifeBalanceScores } from "@/data/extendedMockData";

const pillarIcons: Record<string, string> = {
    relationship: "❤️", household: "🏠", financial: "💰", family: "👨‍👩‍👧‍👦",
    health: "🏃", career: "💼", future: "🎯", social: "👥",
};

export default function AIAssistantPage() {
    return (
        <div className="p-6 max-w-7xl mx-auto space-y-6">
            <div className="flex items-center gap-2 mb-2"><LifeStageHeader /></div>
            <h1 className="font-display text-2xl font-bold flex items-center gap-2"><Bot className="w-6 h-6 text-primary" /> AI Life Assistant</h1>
            <p className="text-sm text-muted-foreground">Your personal AI-powered life coach</p>

            <Tabs defaultValue="insights" className="w-full">
                <TabsList className="w-full flex flex-wrap h-auto gap-1 bg-muted/30 p-1 rounded-2xl">
                    {["insights", "chat", "weekly-report", "nudges", "life-radar"].map(t => (
                        <TabsTrigger key={t} value={t} className="rounded-xl text-xs capitalize">{t.replace(/-/g, " ")}</TabsTrigger>
                    ))}
                </TabsList>

                {/* INSIGHTS */}
                <TabsContent value="insights" className="space-y-6 mt-4">
                    <Card className="pillar-card overflow-hidden">
                        <div className="gradient-coral p-5 text-primary-foreground">
                            <div className="flex items-center gap-2 mb-2">
                                <Sparkles className="w-5 h-5" />
                                <p className="font-display font-bold">AI Insights for Today</p>
                            </div>
                            <p className="text-sm opacity-90">{aiInsights.weeklyPriority}</p>
                        </div>
                        <CardContent className="p-4 space-y-4">
                            <div>
                                <p className="text-xs font-semibold text-muted-foreground mb-2">RECOMMENDATIONS</p>
                                <div className="space-y-2">
                                    {aiInsights.recommendations.map((rec, i) => (
                                        <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-coral-light/50">
                                            <Lightbulb className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                            <p className="text-sm">{rec}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <p className="text-xs font-semibold text-muted-foreground mb-2">UPCOMING DEADLINES</p>
                                <div className="space-y-2">
                                    {aiInsights.upcomingDeadlines.map((d, i) => (
                                        <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-muted/30">
                                            <Badge variant="secondary" className="text-[10px]">{d.pillar}</Badge>
                                            <p className="text-sm flex-1">{d.title}</p>
                                            <span className="text-xs text-muted-foreground">{d.date}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                {/* CHAT */}
                <TabsContent value="chat" className="space-y-6 mt-4">
                    <Card className="pillar-card">
                        <CardHeader className="pb-2"><CardTitle className="font-display text-lg flex items-center gap-2"><MessageCircle className="w-5 h-5 text-primary" /> Chat with AI</CardTitle></CardHeader>
                        <CardContent>
                            <div className="space-y-3 mb-4 max-h-96 overflow-y-auto">
                                {aiConversationHistory.map((m, i) => (
                                    <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                                        <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${m.role === "user" ? "gradient-coral text-primary-foreground" : "bg-muted/50"
                                            }`}>
                                            {m.message}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="flex gap-2">
                                <input className="flex-1 p-3 rounded-xl border border-border/50 bg-muted/30 text-sm" placeholder="Ask your AI assistant anything..." />
                                <button className="px-4 py-2 rounded-xl bg-primary text-primary-foreground text-sm font-medium">Send</button>
                            </div>
                            <div className="flex gap-2 mt-3 flex-wrap">
                                {["Relationship tip", "Budget advice", "Date night idea", "Meal suggestion", "Stress relief"].map(s => (
                                    <button key={s} className="px-3 py-1.5 rounded-xl bg-muted/50 text-xs hover:bg-muted/80 transition-colors">{s}</button>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                {/* WEEKLY REPORT */}
                <TabsContent value="weekly-report" className="space-y-6 mt-4">
                    <Card className="pillar-card">
                        <CardHeader className="pb-2"><CardTitle className="font-display text-lg flex items-center gap-2"><BarChart3 className="w-5 h-5 text-primary" /> Weekly Life Report</CardTitle></CardHeader>
                        <CardContent>
                            <div className="p-4 rounded-xl bg-primary/5 mb-4">
                                <p className="font-bold text-sm mb-2">{weeklyReport.summary}</p>
                                <div className="grid grid-cols-4 gap-3">
                                    <div className="text-center">
                                        <p className="text-xs text-muted-foreground">Tasks Done</p>
                                        <p className="font-bold">{weeklyReport.tasksDone}</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-xs text-muted-foreground">Quality Time</p>
                                        <p className="font-bold">{weeklyReport.qualityTimeMinutes} min</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-xs text-muted-foreground">Savings</p>
                                        <p className="font-bold text-mint">${weeklyReport.savingsThisWeek}</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-xs text-muted-foreground">Mood Avg</p>
                                        <p className="font-bold">{weeklyReport.avgMood}/10</p>
                                    </div>
                                </div>
                            </div>

                            <p className="text-xs font-semibold text-muted-foreground mb-2">PILLAR HIGHLIGHTS</p>
                            <div className="space-y-2">
                                {weeklyReport.pillarHighlights.map(h => (
                                    <div key={h.pillar} className="flex items-center gap-3 p-2 rounded-xl bg-muted/30">
                                        <span>{pillarIcons[h.pillar] || "📊"}</span>
                                        <div className="flex-1">
                                            <p className="text-sm font-medium capitalize">{h.pillar}</p>
                                            <p className="text-xs text-muted-foreground">{h.note}</p>
                                        </div>
                                        <p className={`text-sm font-bold ${h.change > 0 ? "text-mint" : "text-destructive"}`}>
                                            {h.change > 0 ? "+" : ""}{h.change}%
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <p className="text-xs font-semibold text-muted-foreground mt-4 mb-2">AI RECOMMENDATIONS</p>
                            <div className="space-y-2">
                                {weeklyReport.recommendations.map((r, i) => (
                                    <div key={i} className="p-3 rounded-xl bg-coral-light/50 text-sm flex items-start gap-2">
                                        <Lightbulb className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                        <span>{r}</span>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                {/* NUDGES */}
                <TabsContent value="nudges" className="space-y-6 mt-4">
                    <Card className="pillar-card">
                        <CardHeader className="pb-2"><CardTitle className="font-display text-lg flex items-center gap-2"><Zap className="w-5 h-5 text-amber" /> Smart Nudge Preferences</CardTitle></CardHeader>
                        <CardContent className="space-y-3">
                            {nudgePreferences.map(n => (
                                <div key={n.id} className="flex items-center gap-3 p-3 rounded-xl bg-muted/30">
                                    <div className="flex-1">
                                        <p className="text-sm font-medium">{n.type}</p>
                                        <p className="text-xs text-muted-foreground">{n.description}</p>
                                    </div>
                                    <div className={`w-10 h-5 rounded-full flex items-center px-0.5 cursor-pointer ${n.enabled ? "bg-primary justify-end" : "bg-muted justify-start"}`}>
                                        <div className="w-4 h-4 rounded-full bg-white shadow-sm" />
                                    </div>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                </TabsContent>

                {/* LIFE RADAR */}
                <TabsContent value="life-radar" className="space-y-6 mt-4">
                    <Card className="pillar-card">
                        <CardHeader className="pb-2"><CardTitle className="font-display text-lg flex items-center gap-2"><Brain className="w-5 h-5 text-primary" /> Life Score Radar</CardTitle></CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                {Object.entries(lifeBalanceScores).map(([pillar, score]) => (
                                    <PillarScoreCard key={pillar} pillar={pillar.charAt(0).toUpperCase() + pillar.slice(1)} score={score} icon={pillarIcons[pillar] || "📊"} color={pillar} trend={score > 75 ? "up" : score > 60 ? "stable" : "down"} />
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}
