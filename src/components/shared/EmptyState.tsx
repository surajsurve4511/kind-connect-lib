import { Heart } from "lucide-react";

interface EmptyStateProps {
    title: string;
    description: string;
    icon?: React.ReactNode;
    action?: React.ReactNode;
}

export function EmptyState({ title, description, icon, action }: EmptyStateProps) {
    return (
        <div className="flex flex-col items-center justify-center py-12 px-6 text-center">
            <div className="w-20 h-20 rounded-full bg-muted/50 flex items-center justify-center mb-4">
                {icon || <Heart className="w-8 h-8 text-muted-foreground/50" />}
            </div>
            <h3 className="font-display text-lg font-semibold mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground max-w-sm mb-4">{description}</p>
            {action}
        </div>
    );
}
