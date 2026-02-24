import { Bot, Sparkles, Heart, DollarSign, Activity, Home, Lightbulb, Send } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

type Message = { role: "user" | "assistant"; content: string };

const contextCards = [
  { title: "Relationship Insights", desc: "Your connection score is up 3 points this week!", icon: Heart, color: "coral-light" },
  { title: "Financial Summary", desc: "You're $200 under budget. Keep it up!", icon: DollarSign, color: "mint-light" },
  { title: "Health Check", desc: "Both of you hit 10k steps yesterday! 🎉", icon: Activity, color: "lavender-light" },
  { title: "Home Tasks", desc: "3 tasks overdue — smoke detector batteries are urgent", icon: Home, color: "sky-light" },
];

const aiCapabilities = [
  "Plan a perfect date night based on your preferences",
  "Generate a weekly meal plan within your budget",
  "Analyze spending patterns and suggest savings",
  "Create a personalized workout plan for couples",
  "Draft a love letter or gratitude note",
  "Optimize your weekly schedule together",
];

export default function AIAssistantPage() {
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hello Alex & Jordan! 👋 I'm your LifeSync AI. I've analyzed your data across all pillars and have some insights ready. What would you like to explore today?" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages(prev => [...prev, { role: "user", content: input }]);
    setInput("");
    setTimeout(() => {
      setMessages(prev => [...prev, {
        role: "assistant",
        content: "Great question! Based on your LifeSync data, here's what I found. I've analyzed your patterns over the past month and have tailored recommendations just for you two. Would you like me to go deeper into any specific area?"
      }]);
    }, 1000);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-2xl gradient-coral flex items-center justify-center">
          <Bot className="w-5 h-5 text-primary-foreground" />
        </div>
        <div>
          <h1 className="font-display text-2xl font-bold">AI Assistant</h1>
          <p className="text-sm text-muted-foreground">Your intelligent life partner</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chat Area */}
        <div className="lg:col-span-2">
          <Card className="pillar-card h-[600px] flex flex-col">
            <div className="flex-1 overflow-auto p-4 space-y-4">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  {msg.role === "assistant" && (
                    <div className="w-8 h-8 rounded-xl gradient-coral flex items-center justify-center mr-2 mt-1 shrink-0">
                      <Sparkles className="w-4 h-4 text-primary-foreground" />
                    </div>
                  )}
                  <div className={`max-w-[75%] rounded-2xl px-4 py-3 text-sm ${
                    msg.role === "user" ? "gradient-coral text-primary-foreground" : "bg-muted/70"
                  }`}>
                    {msg.content}
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 border-t border-border/50">
              <div className="flex gap-2">
                <input
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={e => e.key === "Enter" && handleSend()}
                  placeholder="Ask me anything about your life together..."
                  className="flex-1 px-4 py-3 rounded-xl bg-muted/50 border border-border/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
                <button onClick={handleSend} className="px-4 rounded-xl gradient-coral text-primary-foreground hover:opacity-90 transition-opacity">
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
          <Card className="pillar-card">
            <CardHeader className="pb-2">
              <CardTitle className="font-display text-base flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber" /> Smart Insights
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {contextCards.map((c, i) => (
                <div key={i} className={`p-3 rounded-xl bg-${c.color}/30 cursor-pointer hover:opacity-80 transition-opacity`}>
                  <div className="flex items-center gap-2 mb-1">
                    <c.icon className="w-3 h-3" />
                    <p className="text-xs font-semibold">{c.title}</p>
                  </div>
                  <p className="text-[11px] text-muted-foreground">{c.desc}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="pillar-card">
            <CardHeader className="pb-2">
              <CardTitle className="font-display text-base flex items-center gap-2">
                <Lightbulb className="w-4 h-4" /> I can help with...
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {aiCapabilities.map((c, i) => (
                <button key={i} onClick={() => setInput(c)} className="w-full text-left text-xs p-2 rounded-lg bg-muted/30 hover:bg-muted/60 transition-colors">
                  ✨ {c}
                </button>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
