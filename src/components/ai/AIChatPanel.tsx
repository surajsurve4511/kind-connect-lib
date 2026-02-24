import { Bot, X, Send, Sparkles } from "lucide-react";
import { useState } from "react";

const suggestions = [
  "Plan a date night for this weekend",
  "How are our finances this month?",
  "Suggest a meal plan for next week",
  "Help me write a gratitude note",
];

type Message = { role: "user" | "assistant"; content: string };

const initialMessages: Message[] = [
  { role: "assistant", content: "Hi Alex & Jordan! 👋 I'm your LifeSync AI assistant. I can help you plan dates, manage finances, track health goals, and more. What would you like help with?" },
];

export function AIChatPanel({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    const newMsg: Message = { role: "user", content: input };
    setMessages(prev => [...prev, newMsg]);
    setInput("");
    setTimeout(() => {
      setMessages(prev => [...prev, {
        role: "assistant",
        content: "That's a great idea! Let me help you with that. Based on your LifeSync data, I have some suggestions ready. 💡"
      }]);
    }, 1000);
  };

  if (!open) return null;

  return (
    <div className="w-96 border-l border-border/50 bg-card flex flex-col h-screen">
      <div className="flex items-center justify-between p-4 border-b border-border/50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl gradient-coral flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-primary-foreground" />
          </div>
          <div>
            <p className="font-display font-semibold text-sm">LifeSync AI</p>
            <p className="text-[10px] text-muted-foreground">Always here to help</p>
          </div>
        </div>
        <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-muted transition-colors">
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="flex-1 overflow-auto p-4 space-y-4">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm ${
              msg.role === "user"
                ? "gradient-coral text-primary-foreground"
                : "bg-muted/70"
            }`}>
              {msg.content}
            </div>
          </div>
        ))}
      </div>

      <div className="p-3 border-t border-border/50">
        <div className="flex flex-wrap gap-1.5 mb-3">
          {suggestions.map((s, i) => (
            <button key={i} onClick={() => setInput(s)} className="text-[11px] px-3 py-1.5 rounded-full bg-muted/70 hover:bg-muted text-muted-foreground transition-colors">
              {s}
            </button>
          ))}
        </div>
        <div className="flex gap-2">
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === "Enter" && handleSend()}
            placeholder="Ask LifeSync AI..."
            className="flex-1 px-4 py-2 rounded-xl bg-muted/50 border border-border/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
          <button onClick={handleSend} className="p-2 rounded-xl gradient-coral text-primary-foreground hover:opacity-90 transition-opacity">
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
