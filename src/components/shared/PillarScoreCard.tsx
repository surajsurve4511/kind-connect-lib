import { Progress } from "@/components/ui/progress";

interface PillarScoreCardProps {
    pillar: string;
    score: number;
    icon: string;
    color: string;
    trend?: "up" | "down" | "stable";
}

export function PillarScoreCard({ pillar, score, icon, color, trend = "stable" }: PillarScoreCardProps) {
    const trendIcon = trend === "up" ? "↑" : trend === "down" ? "↓" : "→";
    const trendColor = trend === "up" ? "text-mint" : trend === "down" ? "text-destructive" : "text-muted-foreground";

    return (
        <div className="p-3 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors">
            <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                    <span className="text-lg">{icon}</span>
                    <span className="text-sm font-medium">{pillar}</span>
                </div>
                <div className="flex items-center gap-1">
                    <span className="text-sm font-bold">{score}</span>
                    <span className={`text-xs ${trendColor}`}>{trendIcon}</span>
                </div>
            </div>
            <Progress value={score} className="h-1.5" />
        </div>
    );
}
