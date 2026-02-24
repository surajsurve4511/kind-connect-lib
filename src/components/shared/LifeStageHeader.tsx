import { Badge } from "@/components/ui/badge";

export function LifeStageHeader({ stage = "Building Foundation", icon = "🏗️" }: { stage?: string; icon?: string }) {
    return (
        <Badge variant="secondary" className="rounded-full px-3 py-1 text-xs font-medium bg-muted/80 text-muted-foreground">
            {icon} Life Stage: {stage}
        </Badge>
    );
}
