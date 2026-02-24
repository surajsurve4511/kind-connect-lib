export function SkeletonLoader({ lines = 3, className = "" }: { lines?: number; className?: string }) {
    return (
        <div className={`space-y-3 animate-pulse ${className}`}>
            {Array.from({ length: lines }).map((_, i) => (
                <div key={i} className="flex items-center gap-3">
                    {i === 0 && <div className="w-10 h-10 rounded-xl bg-muted" />}
                    <div className="flex-1 space-y-2">
                        <div className={`h-4 bg-muted rounded-lg ${i === 0 ? 'w-3/4' : i === lines - 1 ? 'w-1/2' : 'w-full'}`} />
                        {i === 0 && <div className="h-3 bg-muted rounded-lg w-1/3" />}
                    </div>
                </div>
            ))}
        </div>
    );
}

export function SkeletonCard() {
    return (
        <div className="pillar-card animate-pulse">
            <div className="h-5 bg-muted rounded-lg w-1/3 mb-4" />
            <div className="space-y-3">
                <div className="h-4 bg-muted rounded-lg w-full" />
                <div className="h-4 bg-muted rounded-lg w-2/3" />
                <div className="h-20 bg-muted rounded-xl w-full" />
            </div>
        </div>
    );
}
