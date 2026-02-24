import { Outlet } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";
import { Bell, Search, Bot } from "lucide-react";
import { useState } from "react";
import { AIChatPanel } from "@/components/ai/AIChatPanel";

export function AppLayout() {
  const [aiOpen, setAiOpen] = useState(false);

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        <div className="flex-1 flex flex-col min-w-0">
          {/* Header */}
          <header className="h-14 flex items-center justify-between px-4 border-b border-border/50 bg-card/50 backdrop-blur-sm sticky top-0 z-30">
            <div className="flex items-center gap-3">
              <SidebarTrigger className="lg:hidden" />
              <div className="relative hidden sm:block">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search LifeSync..."
                  className="pl-9 pr-4 py-1.5 rounded-xl bg-muted/50 border border-border/50 text-sm w-64 focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={() => setAiOpen(!aiOpen)} className="p-2 rounded-xl hover:bg-muted/50 transition-colors relative">
                <Bot className="w-5 h-5 text-muted-foreground" />
                <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-primary animate-pulse-soft" />
              </button>
              <button className="p-2 rounded-xl hover:bg-muted/50 transition-colors relative">
                <Bell className="w-5 h-5 text-muted-foreground" />
                <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-accent" />
              </button>
              <div className="flex items-center gap-1 ml-2">
                <div className="w-8 h-8 rounded-full gradient-coral flex items-center justify-center text-xs font-bold text-primary-foreground">A</div>
                <div className="w-8 h-8 rounded-full gradient-sky flex items-center justify-center text-xs font-bold text-primary-foreground -ml-2 ring-2 ring-background">J</div>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 overflow-auto">
            <Outlet />
          </main>
        </div>

        {/* AI Chat Panel */}
        <AIChatPanel open={aiOpen} onClose={() => setAiOpen(false)} />
      </div>
    </SidebarProvider>
  );
}
