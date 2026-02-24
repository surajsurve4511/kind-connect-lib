import { Bell, Activity, Filter } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { activityFeed } from "@/data/extendedMockData";
import { LifeStageHeader } from "@/components/shared/LifeStageHeader";

export default function ActivityFeedPage() {
    return (
        <div className="p-6 max-w-4xl mx-auto space-y-6">
            <div className="flex items-center gap-2 mb-2"><LifeStageHeader /></div>
            <h1 className="font-display text-2xl font-bold flex items-center gap-2"><Activity className="w-6 h-6 text-primary" /> Activity Feed</h1>
            <p className="text-sm text-muted-foreground">Everything happening in your life, at a glance</p>

            <div className="flex gap-2 flex-wrap">
                {["All", "Household", "Financial", "Relationship", "Health", "System"].map(f => (
                    <button key={f} className={`px-3 py-1.5 rounded-xl text-xs ${f === "All" ? "bg-primary text-primary-foreground" : "bg-muted/50 hover:bg-muted/80"}`}>{f}</button>
                ))}
            </div>

            <div className="space-y-2">
                {activityFeed.map(item => (
                    <Card key={item.id} className="pillar-card">
                        <CardContent className="p-3 flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-muted/30 flex items-center justify-center text-lg shrink-0">{item.icon}</div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm">{item.action}</p>
                                <div className="flex items-center gap-2 mt-0.5">
                                    <Badge variant="secondary" className="text-[10px]">{item.pillar}</Badge>
                                    <span className="text-xs text-muted-foreground">{item.user}</span>
                                </div>
                            </div>
                            <p className="text-xs text-muted-foreground shrink-0">{item.time}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
