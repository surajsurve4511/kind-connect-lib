import { GraduationCap, BookOpen, Play, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { academyContent } from "@/data/extendedMockData";
import { LifeStageHeader } from "@/components/shared/LifeStageHeader";

const pillarColors: Record<string, string> = {
    Family: "bg-amber-light", Financial: "bg-mint-light", Relationship: "bg-coral-light",
    Future: "bg-lavender-light", Health: "bg-sky-light", Career: "bg-sky-light",
};

export default function AcademyPage() {
    return (
        <div className="p-6 max-w-5xl mx-auto space-y-6">
            <div className="flex items-center gap-2 mb-2"><LifeStageHeader /></div>
            <h1 className="font-display text-2xl font-bold flex items-center gap-2"><GraduationCap className="w-6 h-6 text-primary" /> LifeSync Academy</h1>
            <p className="text-sm text-muted-foreground">Learn together, grow together</p>

            <div className="grid grid-cols-3 gap-3 text-center">
                <div className="p-3 rounded-xl bg-mint-light"><p className="text-xl font-bold">{academyContent.filter(c => c.completed === c.lessons).length}</p><p className="text-xs">Completed</p></div>
                <div className="p-3 rounded-xl bg-sky-light"><p className="text-xl font-bold">{academyContent.filter(c => c.completed > 0 && c.completed < c.lessons).length}</p><p className="text-xs">In Progress</p></div>
                <div className="p-3 rounded-xl bg-muted/30"><p className="text-xl font-bold">{academyContent.filter(c => c.completed === 0).length}</p><p className="text-xs">Not Started</p></div>
            </div>

            <div className="space-y-4">
                {academyContent.map(course => (
                    <Card key={course.id} className="pillar-card hover:-translate-y-0.5 transition-transform cursor-pointer">
                        <CardContent className="p-4">
                            <div className="flex items-start gap-3">
                                <div className={`w-12 h-12 rounded-2xl ${pillarColors[course.pillar] || "bg-muted/30"} flex items-center justify-center shrink-0`}>
                                    <BookOpen className="w-6 h-6 text-foreground/60" />
                                </div>
                                <div className="flex-1">
                                    <p className="font-display font-bold text-sm">{course.title}</p>
                                    <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
                                        <Badge variant="secondary" className="text-[10px]">{course.pillar}</Badge>
                                        <span>{course.type}</span>
                                        <span className="flex items-center gap-0.5"><Clock className="w-3 h-3" /> {course.duration}</span>
                                    </div>
                                    <div className="flex items-center gap-2 mt-2">
                                        <Progress value={(course.completed / course.lessons) * 100} className="h-2 flex-1" />
                                        <span className="text-xs font-medium">{course.completed}/{course.lessons}</span>
                                    </div>
                                </div>
                                <button className="px-3 py-1.5 rounded-xl bg-primary text-primary-foreground text-xs font-medium shrink-0">
                                    {course.completed === 0 ? "Start" : course.completed === course.lessons ? "Review" : "Continue"}
                                </button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
