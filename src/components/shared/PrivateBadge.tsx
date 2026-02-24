import { Lock } from "lucide-react";

export function PrivateBadge({ size = "sm" }: { size?: "sm" | "md" }) {
    const sizeClasses = size === "sm" ? "w-4 h-4 text-[10px]" : "w-6 h-6 text-xs";
    return (
        <div className={`${sizeClasses} rounded-full bg-muted flex items-center justify-center`} title="Private — only you can see this">
            <Lock className={size === "sm" ? "w-2.5 h-2.5" : "w-3.5 h-3.5"} />
        </div>
    );
}
