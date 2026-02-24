import { FileText, Upload, Search, AlertCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { documentsVault } from "@/data/extendedMockData";
import { LifeStageHeader } from "@/components/shared/LifeStageHeader";

export default function DocumentsVaultPage() {
    return (
        <div className="p-6 max-w-5xl mx-auto space-y-6">
            <div className="flex items-center gap-2 mb-2"><LifeStageHeader /></div>
            <h1 className="font-display text-2xl font-bold flex items-center gap-2"><FileText className="w-6 h-6 text-primary" /> Life Documents Vault</h1>
            <p className="text-sm text-muted-foreground">Keep your important documents safe and accessible</p>

            <div className="flex gap-2 flex-wrap">
                {["All", "Identity", "Housing", "Insurance", "Vehicle", "Estate"].map(f => (
                    <button key={f} className={`px-3 py-1.5 rounded-xl text-xs ${f === "All" ? "bg-primary text-primary-foreground" : "bg-muted/50 hover:bg-muted/80"}`}>{f}</button>
                ))}
            </div>

            <div className="space-y-3">
                {documentsVault.map(doc => (
                    <Card key={doc.id} className={`pillar-card ${!doc.uploaded ? "border-amber/30" : ""}`}>
                        <CardContent className="p-4 flex items-center gap-3">
                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${doc.uploaded ? "bg-mint-light" : "bg-amber-light"}`}>
                                <FileText className={`w-5 h-5 ${doc.uploaded ? "text-mint" : "text-amber"}`} />
                            </div>
                            <div className="flex-1">
                                <p className="text-sm font-medium">{doc.name}</p>
                                <div className="flex items-center gap-2 mt-0.5">
                                    <Badge variant="secondary" className="text-[10px]">{doc.category}</Badge>
                                    {doc.expiry !== "—" && (
                                        <span className="text-xs text-muted-foreground">Expires: {doc.expiry}</span>
                                    )}
                                </div>
                            </div>
                            <Badge variant={doc.uploaded ? "default" : "destructive"} className="text-[10px]">
                                {doc.uploaded ? "✓ Uploaded" : "Missing"}
                            </Badge>
                        </CardContent>
                    </Card>
                ))}
            </div>
            <div className="p-6 rounded-2xl border-2 border-dashed border-primary/30 text-center">
                <Upload className="w-8 h-8 mx-auto text-primary/50 mb-2" />
                <p className="text-sm font-medium">Upload New Document</p>
                <p className="text-xs text-muted-foreground">Drag & drop or click to browse</p>
            </div>
        </div>
    );
}
