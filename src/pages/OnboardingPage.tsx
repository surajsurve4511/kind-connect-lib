import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Heart, ArrowRight, ArrowLeft, Check, Sparkles, Users, Globe, Bell, Crown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { CelebrationAnimation } from "@/components/shared/CelebrationAnimation";
import {
    lifeStages, relationshipTypes, familyStructures, ageGroups,
    countries, loveLanguageQuiz, financialPreferences, lifeGoals, subscriptionTiers,
} from "@/data/onboardingData";

const TOTAL_STEPS = 13;

export default function OnboardingPage() {
    const [step, setStep] = useState(0);
    const [showCelebration, setShowCelebration] = useState(false);
    const [selections, setSelections] = useState<Record<string, any>>({
        lifeStage: "", relationshipType: "", familyStructure: "",
        agePartner1: "", agePartner2: "", country: "", language: "",
        quizAnswers: {} as Record<number, string>, financialPref: "",
        topGoals: [] as string[], notifications: true, subscription: "plus",
    });
    const navigate = useNavigate();

    const progress = ((step + 1) / TOTAL_STEPS) * 100;

    const select = (key: string, value: any) => setSelections(prev => ({ ...prev, [key]: value }));
    const toggleGoal = (id: string) => {
        setSelections(prev => {
            const goals = prev.topGoals.includes(id) ? prev.topGoals.filter((g: string) => g !== id) : prev.topGoals.length < 3 ? [...prev.topGoals, id] : prev.topGoals;
            return { ...prev, topGoals: goals };
        });
    };
    const answerQuiz = (qId: number, type: string) => setSelections(prev => ({ ...prev, quizAnswers: { ...prev.quizAnswers, [qId]: type } }));

    const handleFinish = () => {
        setShowCelebration(true);
        setTimeout(() => navigate("/"), 3500);
    };

    const steps = [
        // 0: Welcome
        <div key="welcome" className="flex flex-col items-center justify-center min-h-[60vh] text-center animate-fade-in-up">
            <div className="w-24 h-24 rounded-3xl gradient-coral flex items-center justify-center mb-6 animate-bounce-in">
                <Heart className="w-12 h-12 text-white" />
            </div>
            <h1 className="font-display text-4xl font-bold mb-3">Welcome to LifeSync</h1>
            <p className="text-xl text-muted-foreground mb-2">You live. We manage.</p>
            <p className="text-sm text-muted-foreground max-w-md mb-8">
                Your all-in-one life management platform for couples. Let's set everything up so LifeSync can personalize your experience.
            </p>
            <Button onClick={() => setStep(1)} size="lg" className="gradient-coral text-white rounded-2xl px-8 gap-2">
                Get Started <ArrowRight className="w-4 h-4" />
            </Button>
        </div>,

        // 1: Couple Linking
        <div key="linking" className="max-w-lg mx-auto animate-fade-in-up">
            <div className="text-center mb-8">
                <div className="w-16 h-16 rounded-2xl gradient-sky flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                </div>
                <h2 className="font-display text-2xl font-bold">Link with Your Partner</h2>
                <p className="text-sm text-muted-foreground mt-2">Share your unique link or QR code with your partner</p>
            </div>
            <Card className="pillar-card-static mb-4">
                <CardContent className="p-6 text-center">
                    <p className="text-xs text-muted-foreground mb-2">Your invite link</p>
                    <div className="bg-muted/50 rounded-xl p-3 font-mono text-sm break-all mb-4">
                        https://lifesync.app/invite/abc123xyz
                    </div>
                    <div className="flex gap-2 justify-center">
                        <Button variant="outline" size="sm" className="rounded-xl">Copy Link</Button>
                        <Button variant="outline" size="sm" className="rounded-xl">Show QR Code</Button>
                    </div>
                </CardContent>
            </Card>
            <p className="text-center text-xs text-muted-foreground">You can also skip this and invite your partner later</p>
        </div>,

        // 2: Life Stage
        <div key="lifestage" className="max-w-2xl mx-auto animate-fade-in-up">
            <div className="text-center mb-8">
                <h2 className="font-display text-2xl font-bold">What stage of life are you in?</h2>
                <p className="text-sm text-muted-foreground mt-2">This helps us personalize your experience</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {lifeStages.map(s => (
                    <button key={s.id} onClick={() => select("lifeStage", s.id)}
                        className={`p-4 rounded-2xl border-2 transition-all text-center hover:shadow-md ${selections.lifeStage === s.id ? "border-primary bg-primary/5 shadow-md" : "border-border/50 hover:border-primary/30"
                            }`}>
                        <span className="text-3xl block mb-2">{s.icon}</span>
                        <p className="font-semibold text-sm">{s.label}</p>
                        <p className="text-[10px] text-muted-foreground mt-1">{s.description}</p>
                    </button>
                ))}
            </div>
        </div>,

        // 3: Relationship Type
        <div key="reltype" className="max-w-xl mx-auto animate-fade-in-up">
            <div className="text-center mb-8">
                <h2 className="font-display text-2xl font-bold">Your Relationship</h2>
                <p className="text-sm text-muted-foreground mt-2">Select what best describes your relationship</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {relationshipTypes.map(r => (
                    <button key={r.id} onClick={() => select("relationshipType", r.id)}
                        className={`p-5 rounded-2xl border-2 transition-all text-center hover:shadow-md ${selections.relationshipType === r.id ? "border-primary bg-primary/5 shadow-md" : "border-border/50 hover:border-primary/30"
                            }`}>
                        <span className="text-3xl block mb-2">{r.icon}</span>
                        <p className="font-semibold text-sm">{r.label}</p>
                    </button>
                ))}
            </div>
        </div>,

        // 4: Family Structure
        <div key="family" className="max-w-xl mx-auto animate-fade-in-up">
            <div className="text-center mb-8">
                <h2 className="font-display text-2xl font-bold">Family Structure</h2>
                <p className="text-sm text-muted-foreground mt-2">This helps us show relevant family features</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {familyStructures.map(f => (
                    <button key={f.id} onClick={() => select("familyStructure", f.id)}
                        className={`p-5 rounded-2xl border-2 transition-all text-center hover:shadow-md ${selections.familyStructure === f.id ? "border-primary bg-primary/5 shadow-md" : "border-border/50 hover:border-primary/30"
                            }`}>
                        <span className="text-3xl block mb-2">{f.icon}</span>
                        <p className="font-semibold text-sm">{f.label}</p>
                    </button>
                ))}
            </div>
        </div>,

        // 5: Age Groups
        <div key="age" className="max-w-lg mx-auto animate-fade-in-up">
            <div className="text-center mb-8">
                <h2 className="font-display text-2xl font-bold">Age Groups</h2>
                <p className="text-sm text-muted-foreground mt-2">Helps us tailor health, career, and financial features</p>
            </div>
            <div className="space-y-4">
                <div>
                    <p className="text-sm font-semibold mb-2">Partner A (You)</p>
                    <div className="grid grid-cols-3 gap-2">
                        {ageGroups.map(a => (
                            <button key={a.id} onClick={() => select("agePartner1", a.id)}
                                className={`p-3 rounded-xl border-2 text-sm transition-all ${selections.agePartner1 === a.id ? "border-primary bg-primary/5 font-bold" : "border-border/50"
                                    }`}>{a.label}</button>
                        ))}
                    </div>
                </div>
                <div>
                    <p className="text-sm font-semibold mb-2">Partner B</p>
                    <div className="grid grid-cols-3 gap-2">
                        {ageGroups.map(a => (
                            <button key={a.id} onClick={() => select("agePartner2", a.id)}
                                className={`p-3 rounded-xl border-2 text-sm transition-all ${selections.agePartner2 === a.id ? "border-primary bg-primary/5 font-bold" : "border-border/50"
                                    }`}>{a.label}</button>
                        ))}
                    </div>
                </div>
            </div>
        </div>,

        // 6: Cultural/Region
        <div key="cultural" className="max-w-lg mx-auto animate-fade-in-up">
            <div className="text-center mb-8">
                <div className="w-16 h-16 rounded-2xl gradient-mint flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-8 h-8 text-white" />
                </div>
                <h2 className="font-display text-2xl font-bold">Region & Preferences</h2>
                <p className="text-sm text-muted-foreground mt-2">Customize currency, language, and regional features</p>
            </div>
            <div className="space-y-4">
                <div>
                    <p className="text-sm font-semibold mb-2">Country</p>
                    <div className="grid grid-cols-2 gap-2">
                        {countries.map(c => (
                            <button key={c.id} onClick={() => select("country", c.id)}
                                className={`p-3 rounded-xl border-2 text-sm text-left transition-all ${selections.country === c.id ? "border-primary bg-primary/5" : "border-border/50"
                                    }`}>
                                <span className="font-medium">{c.label}</span>
                                <span className="text-xs text-muted-foreground block">{c.currency} • {c.units}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>,

        // 7: Love Language Quiz
        <div key="quiz" className="max-w-xl mx-auto animate-fade-in-up">
            <div className="text-center mb-6">
                <h2 className="font-display text-2xl font-bold">Love Language Quiz 💕</h2>
                <p className="text-sm text-muted-foreground mt-2">Answer these 5 questions to discover your love language</p>
            </div>
            <div className="space-y-6">
                {loveLanguageQuiz.map((q, qi) => (
                    <Card key={q.id} className="pillar-card-static">
                        <CardContent className="p-4">
                            <p className="font-semibold text-sm mb-3">{qi + 1}. {q.question}</p>
                            <div className="space-y-2">
                                {q.options.map(o => (
                                    <button key={o.type} onClick={() => answerQuiz(q.id, o.type)}
                                        className={`w-full p-2.5 rounded-xl text-left text-sm transition-all ${selections.quizAnswers[q.id] === o.type ? "bg-primary/10 border-primary border-2 font-medium" : "bg-muted/30 border border-transparent hover:bg-muted/50"
                                            }`}>{o.label}</button>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>,

        // 8: Financial Preferences
        <div key="financial" className="max-w-lg mx-auto animate-fade-in-up">
            <div className="text-center mb-8">
                <h2 className="font-display text-2xl font-bold">Financial Transparency</h2>
                <p className="text-sm text-muted-foreground mt-2">How do you want to manage finances together?</p>
            </div>
            <div className="space-y-3">
                {financialPreferences.map(f => (
                    <button key={f.id} onClick={() => select("financialPref", f.id)}
                        className={`w-full p-5 rounded-2xl border-2 text-left transition-all ${selections.financialPref === f.id ? "border-primary bg-primary/5 shadow-md" : "border-border/50 hover:border-primary/30"
                            }`}>
                        <div className="flex items-start gap-3">
                            <span className="text-2xl">{f.icon}</span>
                            <div>
                                <p className="font-semibold">{f.label}</p>
                                <p className="text-sm text-muted-foreground">{f.description}</p>
                            </div>
                        </div>
                    </button>
                ))}
            </div>
        </div>,

        // 9: Top 3 Goals
        <div key="goals" className="max-w-xl mx-auto animate-fade-in-up">
            <div className="text-center mb-8">
                <h2 className="font-display text-2xl font-bold">Top 3 Life Goals</h2>
                <p className="text-sm text-muted-foreground mt-2">What matters most right now? Pick up to 3</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
                {lifeGoals.map(g => (
                    <button key={g.id} onClick={() => toggleGoal(g.id)}
                        className={`p-4 rounded-2xl border-2 text-center transition-all ${selections.topGoals.includes(g.id) ? "border-primary bg-primary/5 shadow-md" : "border-border/50 hover:border-primary/30"
                            } ${!selections.topGoals.includes(g.id) && selections.topGoals.length >= 3 ? "opacity-40" : ""}`}>
                        <span className="text-2xl block mb-1">{g.icon}</span>
                        <p className="text-sm font-medium">{g.label}</p>
                    </button>
                ))}
            </div>
            <p className="text-center text-xs text-muted-foreground mt-3">{selections.topGoals.length}/3 selected</p>
        </div>,

        // 10: Notifications
        <div key="notifications" className="max-w-lg mx-auto animate-fade-in-up">
            <div className="text-center mb-8">
                <div className="w-16 h-16 rounded-2xl gradient-amber flex items-center justify-center mx-auto mb-4">
                    <Bell className="w-8 h-8 text-white" />
                </div>
                <h2 className="font-display text-2xl font-bold">Stay in the Loop</h2>
                <p className="text-sm text-muted-foreground mt-2">LifeSync sends helpful nudges at the right time</p>
            </div>
            <div className="space-y-3">
                {["Daily relationship tip", "Bill reminders", "Health check-in reminders", "Task due notifications", "AI insights & suggestions", "Weekly wellbeing summary"].map(n => (
                    <div key={n} className="flex items-center justify-between p-3 rounded-xl bg-muted/30">
                        <span className="text-sm">{n}</span>
                        <div className="w-10 h-5 rounded-full bg-primary flex items-center justify-end px-0.5 cursor-pointer">
                            <div className="w-4 h-4 rounded-full bg-white shadow-sm" />
                        </div>
                    </div>
                ))}
            </div>
        </div>,

        // 11: Subscription
        <div key="subscription" className="max-w-3xl mx-auto animate-fade-in-up">
            <div className="text-center mb-8">
                <div className="w-16 h-16 rounded-2xl gradient-lavender flex items-center justify-center mx-auto mb-4">
                    <Crown className="w-8 h-8 text-white" />
                </div>
                <h2 className="font-display text-2xl font-bold">Choose Your Plan</h2>
                <p className="text-sm text-muted-foreground mt-2">Start free, upgrade when you're ready</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {subscriptionTiers.map(t => (
                    <button key={t.id} onClick={() => select("subscription", t.id)}
                        className={`p-5 rounded-2xl border-2 text-left transition-all relative ${selections.subscription === t.id ? "border-primary bg-primary/5 shadow-lg" : "border-border/50 hover:border-primary/30"
                            }`}>
                        {t.recommended && (
                            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[10px] px-3 py-0.5 rounded-full font-bold">
                                RECOMMENDED
                            </span>
                        )}
                        <p className="font-display font-bold text-lg">{t.name}</p>
                        <p className="text-xl font-bold text-primary mt-1">{t.price}</p>
                        <p className="text-xs text-muted-foreground mt-1 mb-3">{t.description}</p>
                        <ul className="space-y-1.5">
                            {t.features.map(f => (
                                <li key={f} className="text-xs flex items-center gap-1.5">
                                    <Check className="w-3 h-3 text-mint" /> {f}
                                </li>
                            ))}
                        </ul>
                    </button>
                ))}
            </div>
        </div>,

        // 12: Celebration
        <div key="celebration" className="flex flex-col items-center justify-center min-h-[60vh] text-center animate-fade-in-up">
            <div className="text-6xl mb-6 animate-bounce-in">🎉</div>
            <h1 className="font-display text-3xl font-bold mb-3">You're All Set!</h1>
            <p className="text-muted-foreground max-w-sm mb-2">
                Welcome to LifeSync. Your personalized life management dashboard is ready.
            </p>
            <p className="text-sm text-muted-foreground mb-8">Let's start building an amazing life together.</p>
            <Button onClick={handleFinish} size="lg" className="gradient-coral text-white rounded-2xl px-8 gap-2">
                <Sparkles className="w-4 h-4" /> Enter LifeSync
            </Button>
        </div>,
    ];

    return (
        <div className="min-h-screen bg-background flex flex-col">
            {/* Progress bar */}
            {step > 0 && step < TOTAL_STEPS - 1 && (
                <div className="sticky top-0 z-40 bg-card/80 backdrop-blur-sm border-b border-border/50 px-6 py-3">
                    <div className="max-w-2xl mx-auto flex items-center gap-4">
                        <button onClick={() => setStep(s => s - 1)} className="p-2 rounded-xl hover:bg-muted/50">
                            <ArrowLeft className="w-4 h-4" />
                        </button>
                        <Progress value={progress} className="h-2 flex-1" />
                        <span className="text-xs text-muted-foreground font-medium">{step + 1}/{TOTAL_STEPS}</span>
                    </div>
                </div>
            )}

            {/* Step content */}
            <div className="flex-1 flex items-start justify-center px-6 py-12 overflow-auto">
                {steps[step]}
            </div>

            {/* Navigation */}
            {step > 0 && step < TOTAL_STEPS - 1 && (
                <div className="sticky bottom-0 bg-card/80 backdrop-blur-sm border-t border-border/50 px-6 py-4">
                    <div className="max-w-2xl mx-auto flex justify-between">
                        <Button variant="ghost" onClick={() => setStep(s => s - 1)} className="rounded-xl">
                            <ArrowLeft className="w-4 h-4 mr-1" /> Back
                        </Button>
                        <div className="flex gap-2">
                            <Button variant="ghost" onClick={() => setStep(s => s + 1)} className="rounded-xl text-muted-foreground">
                                Skip
                            </Button>
                            <Button onClick={() => setStep(s => s + 1)} className="gradient-coral text-white rounded-xl gap-1">
                                Next <ArrowRight className="w-4 h-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            )}

            <CelebrationAnimation show={showCelebration} />
        </div>
    );
}
