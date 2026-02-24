import { Target, TrendingUp, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { coupleGoals } from "@/data/extendedMockData";
import { LifeStageHeader } from "@/components/shared/LifeStageHeader";

const statusColors: Record<string, string> = {
    "in-progress": "bg-sky-light text-sky", planning: "bg-amber-light text-amber",
    dreaming: "bg-lavender-light text-lavender", achieved: "bg-mint-light text-mint",
};

export default function CoupleGoalsPage() {
    return (
        <div className="p-6 max-w-5xl mx-auto space-y-6">
            <div className="flex items-center gap-2 mb-2"><LifeStageHeader /></div>
            <h1 className="font-display text-2xl font-bold flex items-center gap-2"><Target className="w-6 h-6 text-primary" /> Couple's Goal Board</h1>
            <p className="text-sm text-muted-foreground">Dream, plan, and achieve together</p>

            <div className="grid grid-cols-4 gap-3 text-center">
                <div className="p-3 rounded-xl bg-mint-light"><p className="text-2xl font-bold">{coupleGoals.filter(g => g.status === "achieved").length}</p><p className="text-xs">Achieved</p></div>
                <div className="p-3 rounded-xl bg-sky-light"><p className="text-2xl font-bold">{coupleGoals.filter(g => g.status === "in-progress").length}</p><p className="text-xs">In Progress</p></div>
                <div className="p-3 rounded-xl bg-amber-light"><p className="text-2xl font-bold">{coupleGoals.filter(g => g.status === "planning").length}</p><p className="text-xs">Planning</p></div>
                <div className="p-3 rounded-xl bg-lavender-light"><p className="text-2xl font-bold">{coupleGoals.filter(g => g.status === "dreaming").length}</p><p className="text-xs">Dreaming</p></div>
            </div>

            <div className="space-y-4">
                {coupleGoals.map(g => (
                    <Card key={g.id} className={`pillar-card ${g.status === "achieved" ? "opacity-70" : ""}`}>
                        <CardContent className="p-4">
                            <div className="flex items-center justify-between mb-2">
                                <p className={`font-display font-bold text-sm ${g.status === "achieved" ? "line-through" : ""}`}>{g.title}</p>
                                <Badge className={`text-[10px] ${statusColors[g.status] || "bg-muted"}`}>{g.status}</Badge>
                            </div>
                            <div className="flex items-center gap-3 mb-2 text-xs text-muted-foreground">
                                <span className="flex items-center gap-1"><Users className="w-3 h-3" /> {g.owners}</span>
                                <span>Target: {g.targetDate}</span>
                                {g.linkedSavings > 0 && <span className="text-mint">💰 ${g.linkedSavings.toLocaleString()} saved</span>}
                            </div>
                            <div className="flex items-center gap-2">
                                <Progress value={g.progress} className="h-2 flex-1" />
                                <span className="text-xs font-bold">{g.progress}%</span>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
            <button className="w-full py-3 rounded-xl border-2 border-dashed border-primary/30 text-primary text-sm font-medium">+ Add New Goal</button>
        </div>
    );
}
