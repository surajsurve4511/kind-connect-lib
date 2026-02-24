import { AlertTriangle, Phone, Pill, Heart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { emergencyInfo } from "@/data/extendedMockData";
import { LifeStageHeader } from "@/components/shared/LifeStageHeader";

export default function EmergencyInfoPage() {
    return (
        <div className="p-6 max-w-4xl mx-auto space-y-6">
            <div className="flex items-center gap-2 mb-2"><LifeStageHeader /></div>
            <h1 className="font-display text-2xl font-bold flex items-center gap-2"><AlertTriangle className="w-6 h-6 text-destructive" /> Emergency Information</h1>
            <p className="text-sm text-muted-foreground">Critical info at your fingertips when it matters most</p>

            <div className="p-4 rounded-2xl bg-destructive/5 border border-destructive/20 text-center">
                <p className="text-lg font-bold text-destructive">🚨 Emergency: Call 911</p>
                <p className="text-sm text-muted-foreground mt-1">Poison Control: 1-800-222-1222</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {emergencyInfo.map(person => (
                    <Card key={person.name} className="pillar-card">
                        <CardHeader className="pb-2">
                            <CardTitle className="font-display text-lg flex items-center gap-2">
                                <Heart className="w-5 h-5 text-primary" /> {person.name}
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <div className="grid grid-cols-2 gap-3">
                                <div className="p-2 rounded-xl bg-muted/30">
                                    <p className="text-[10px] text-muted-foreground">Blood Type</p>
                                    <p className="font-bold text-lg text-destructive">{person.bloodType}</p>
                                </div>
                                <div className="p-2 rounded-xl bg-muted/30">
                                    <p className="text-[10px] text-muted-foreground">Insurance ID</p>
                                    <p className="font-bold text-sm">{person.insuranceId}</p>
                                </div>
                            </div>
                            <div className="p-2 rounded-xl bg-muted/30">
                                <p className="text-[10px] text-muted-foreground">Allergies</p>
                                <div className="flex gap-1 mt-1">{person.allergies.map(a => <Badge key={a} variant="destructive" className="text-[10px]">{a}</Badge>)}</div>
                            </div>
                            <div className="p-2 rounded-xl bg-muted/30">
                                <p className="text-[10px] text-muted-foreground">Medications</p>
                                <div className="flex gap-1 flex-wrap mt-1">{person.medications.map(m => <Badge key={m} variant="secondary" className="text-[10px]">{m}</Badge>)}</div>
                            </div>
                            <div className="p-2 rounded-xl bg-amber-light/50">
                                <p className="text-[10px] text-muted-foreground">Emergency Contact</p>
                                <p className="text-sm font-medium">{person.emergencyContact}</p>
                            </div>
                            <div className="p-2 rounded-xl bg-muted/30">
                                <p className="text-[10px] text-muted-foreground">Doctor</p>
                                <p className="text-sm font-medium">{person.doctorPhone}</p>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
