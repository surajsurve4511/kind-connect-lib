import { Heart, Smile, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { wellbeingHistory } from "@/data/extendedMockData";
import { LifeStageHeader } from "@/components/shared/LifeStageHeader";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";

const moods = ["😫", "😟", "😐", "🙂", "😊", "😄", "🤩"];

export default function WellbeingCheckInPage() {
    const latestScore = wellbeingHistory[wellbeingHistory.length - 1].score;

    return (
        <div className="p-6 max-w-4xl mx-auto space-y-6">
            <div className="flex items-center gap-2 mb-2"><LifeStageHeader /></div>
            <h1 className="font-display text-2xl font-bold flex items-center gap-2"><Heart className="w-6 h-6 text-primary" /> Wellbeing Check-In</h1>
            <p className="text-sm text-muted-foreground">How are you both feeling today?</p>

            {/* Current Score */}
            <Card className="pillar-card overflow-hidden">
                <div className="gradient-coral p-6 text-primary-foreground text-center">
                    <p className="text-4xl font-bold font-display">{latestScore}</p>
                    <p className="text-sm opacity-90 mt-1">Current Wellbeing Score</p>
                </div>
            </Card>

            {/* Mood Selector */}
            <Card className="pillar-card">
                <CardHeader className="pb-2"><CardTitle className="font-display text-lg flex items-center gap-2"><Smile className="w-5 h-5 text-primary" /> How are you feeling?</CardTitle></CardHeader>
                <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                        {["Alex", "Jordan"].map(partner => (
                            <div key={partner}>
                                <p className="text-sm font-medium text-center mb-3">{partner}</p>
                                <div className="flex justify-center gap-2">
                                    {moods.map((m, i) => (
                                        <button key={i} className="w-10 h-10 rounded-full bg-muted/30 flex items-center justify-center text-lg hover:bg-primary/10 hover:scale-110 transition-all">{m}</button>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            {/* Trend */}
            <Card className="pillar-card">
                <CardHeader className="pb-2"><CardTitle className="font-display text-lg flex items-center gap-2"><TrendingUp className="w-5 h-5 text-primary" /> Wellbeing Trend</CardTitle></CardHeader>
                <CardContent>
                    <ResponsiveContainer width="100%" height={200}>
                        <LineChart data={wellbeingHistory}>
                            <XAxis dataKey="week" tick={{ fontSize: 11 }} />
                            <YAxis domain={[0, 100]} tick={{ fontSize: 11 }} />
                            <Tooltip />
                            <Line type="monotone" dataKey="score" stroke="hsl(var(--coral))" strokeWidth={2.5} dot={{ fill: "hsl(var(--coral))", r: 4 }} />
                        </LineChart>
                    </ResponsiveContainer>
                </CardContent>
            </Card>

            {/* Quick Check-In Questions */}
            <Card className="pillar-card">
                <CardHeader className="pb-2"><CardTitle className="font-display text-lg">Quick Check-In</CardTitle></CardHeader>
                <CardContent className="space-y-3">
                    {["How did you sleep last night?", "What's your energy level today?", "How connected do you feel to your partner?", "What's your stress level?"].map((q, i) => (
                        <div key={i} className="p-3 rounded-xl bg-muted/30 flex items-center justify-between">
                            <p className="text-sm">{q}</p>
                            <div className="flex gap-1">
                                {[1, 2, 3, 4, 5].map(n => (
                                    <button key={n} className="w-7 h-7 rounded-full bg-muted/50 text-xs hover:bg-primary/20 transition-colors">{n}</button>
                                ))}
                            </div>
                        </div>
                    ))}
                    <button className="w-full py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-medium mt-2">Submit Check-In</button>
                </CardContent>
            </Card>
        </div>
    );
}
