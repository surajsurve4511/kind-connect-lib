import { useState, useEffect } from "react";

export function CelebrationAnimation({ show, onComplete }: { show: boolean; onComplete?: () => void }) {
    const [visible, setVisible] = useState(show);

    useEffect(() => {
        if (show) {
            setVisible(true);
            const timer = setTimeout(() => {
                setVisible(false);
                onComplete?.();
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [show, onComplete]);

    if (!visible) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
            <div className="relative">
                {/* Confetti particles */}
                {Array.from({ length: 30 }).map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-3 h-3 rounded-sm animate-confetti"
                        style={{
                            backgroundColor: ['hsl(var(--coral))', 'hsl(var(--sky))', 'hsl(var(--mint))', 'hsl(var(--amber))', 'hsl(var(--lavender))'][i % 5],
                            left: `${Math.random() * 300 - 150}px`,
                            top: `${Math.random() * 300 - 150}px`,
                            animationDelay: `${Math.random() * 0.5}s`,
                            animationDuration: `${1.5 + Math.random() * 1.5}s`,
                            transform: `rotate(${Math.random() * 360}deg)`,
                        }}
                    />
                ))}
                <div className="text-6xl animate-bounce-in">🎉</div>
            </div>
        </div>
    );
}
