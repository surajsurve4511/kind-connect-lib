import { Clock, Filter } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { lifeTimeline } from "@/data/extendedMockData";
import { LifeStageHeader } from "@/components/shared/LifeStageHeader";

export default function LifeTimelinePage() {
    return (
        <div className="p-6 max-w-4xl mx-auto space-y-6">
            <div className="flex items-center gap-2 mb-2"><LifeStageHeader /></div>
            <h1 className="font-display text-2xl font-bold flex items-center gap-2"><Clock className="w-6 h-6 text-primary" /> Life Timeline</h1>
            <p className="text-sm text-muted-foreground">Your shared journey, one moment at a time</p>

            <div className="flex gap-2 flex-wrap">
                {["All", "Relationship", "Career", "Home", "Family", "Financial"].map(f => (
                    <button key={f} className={`px-3 py-1.5 rounded-xl text-xs ${f === "All" ? "bg-primary text-primary-foreground" : "bg-muted/50 hover:bg-muted/80"}`}>{f}</button>
                ))}
            </div>

            <div className="relative pl-8 space-y-6">
                <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-muted" />
                {lifeTimeline.map((event, i) => (
                    <div key={i} className="relative animate-fade-in-up" style={{ animationDelay: `${i * 80}ms` }}>
                        <div className="absolute -left-5 w-4 h-4 rounded-full bg-primary border-2 border-background shadow-sm" />
                        <Card className="pillar-card">
                            <CardContent className="p-4">
                                <div className="flex items-center justify-between mb-1">
                                    <p className="font-display font-bold text-sm">{event.title}</p>
                                    <Badge variant="secondary" className="text-[10px]">{event.category}</Badge>
                                </div>
                                <p className="text-xs text-muted-foreground">{event.description}</p>
                                <p className="text-[10px] text-muted-foreground mt-1">{event.date}</p>
                                {event.hasPhoto && <div className="mt-2 h-20 rounded-xl bg-muted/30 flex items-center justify-center text-xs text-muted-foreground">📷 Photo Memory</div>}
                            </CardContent>
                        </Card>
                    </div>
                ))}
            </div>
            <button className="w-full py-3 rounded-xl border-2 border-dashed border-primary/30 text-primary text-sm font-medium">+ Add a Memory</button>
        </div>
    );
}
