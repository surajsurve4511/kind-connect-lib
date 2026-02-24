import { DollarSign, TrendingUp, PiggyBank, CreditCard, FileText, Target, ArrowUpRight, ArrowDownRight, Shield, Calendar, ToggleLeft, LineChart as LineChartIcon, Building, Wallet } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { financialData } from "@/data/mockData";
import { financialHealthScore, subscriptions, cashFlowForecast, insurancePolicies, debtPayoffSimulation, billCalendar } from "@/data/extendedMockData";
import { LifeStageHeader } from "@/components/shared/LifeStageHeader";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, AreaChart, Area, PieChart, Pie, Cell, Legend, LineChart, Line } from "recharts";

const COLORS = ["hsl(var(--coral))", "hsl(var(--sky))", "hsl(var(--mint))", "hsl(var(--amber))"];

export default function FinancesPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2 mb-2"><LifeStageHeader /></div>
          <h1 className="font-display text-2xl font-bold flex items-center gap-2"><DollarSign className="w-6 h-6 text-mint" /> Finances</h1>
          <p className="text-sm text-muted-foreground">Build wealth together, transparently</p>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold font-display text-mint">${financialData.netWorth.toLocaleString()}</p>
          <p className="text-xs text-muted-foreground">Net Worth</p>
        </div>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="w-full flex flex-wrap h-auto gap-1 bg-muted/30 p-1 rounded-2xl">
          {["overview", "health-score", "accounts", "budget", "bills", "subscriptions", "cash-flow", "debts", "credit", "insurance", "goals", "net-worth"].map(t => (
            <TabsTrigger key={t} value={t} className="rounded-xl text-xs capitalize">{t.replace(/-/g, " ")}</TabsTrigger>
          ))}
        </TabsList>

        {/* OVERVIEW */}
        <TabsContent value="overview" className="space-y-6 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {financialData.accounts.map(a => (
              <Card key={a.name} className="pillar-card-static">
                <CardContent className="p-4">
                  <p className="text-xs text-muted-foreground">{a.name}</p>
                  <p className={`text-lg font-bold font-display ${a.balance < 0 ? "text-destructive" : ""}`}>
                    ${Math.abs(a.balance).toLocaleString()}
                    {a.balance < 0 && <span className="text-xs"> owed</span>}
                  </p>
                  <Badge variant="secondary" className="text-[10px] mt-1">{a.type}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Income vs Expenses */}
          <Card className="pillar-card">
            <CardHeader className="pb-2"><CardTitle className="font-display text-lg">Income vs Expenses</CardTitle></CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={financialData.incomeVsExpenses}>
                  <XAxis dataKey="month" tick={{ fontSize: 11 }} />
                  <YAxis tick={{ fontSize: 11 }} />
                  <Tooltip formatter={(v: number) => `$${v.toLocaleString()}`} />
                  <Legend />
                  <Bar dataKey="income" fill="hsl(var(--mint))" name="Income" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="expenses" fill="hsl(var(--coral))" name="Expenses" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Recent Transactions */}
          <Card className="pillar-card">
            <CardHeader className="pb-2"><CardTitle className="font-display text-lg">Recent Transactions</CardTitle></CardHeader>
            <CardContent className="space-y-2">
              {financialData.recentTransactions.map(t => (
                <div key={t.id} className="flex items-center gap-3 p-2 rounded-xl hover:bg-muted/30 transition-colors">
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${t.amount > 0 ? "bg-mint-light" : "bg-muted"}`}>
                    {t.amount > 0 ? <ArrowUpRight className="w-4 h-4 text-mint" /> : <ArrowDownRight className="w-4 h-4 text-muted-foreground" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium">{t.description}</p>
                    <p className="text-[10px] text-muted-foreground">{t.category} • {t.date}</p>
                  </div>
                  <span className={`text-sm font-semibold ${t.amount > 0 ? "text-mint" : ""}`}>
                    {t.amount > 0 ? "+" : ""}${Math.abs(t.amount).toFixed(2)}
                  </span>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        {/* HEALTH SCORE */}
        <TabsContent value="health-score" className="space-y-6 mt-4">
          <Card className="pillar-card">
            <CardHeader className="pb-2">
              <CardTitle className="font-display text-lg flex items-center gap-2"><Shield className="w-5 h-5 text-mint" /> Financial Health Score</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center py-4">
                <div className="relative w-32 h-32">
                  <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
                    <circle cx="60" cy="60" r="50" fill="none" stroke="hsl(var(--muted))" strokeWidth="10" />
                    <circle cx="60" cy="60" r="50" fill="none" stroke="hsl(var(--mint))" strokeWidth="10"
                      strokeDasharray={`${financialHealthScore.overall * 3.14} 314`} strokeLinecap="round" />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-3xl font-bold font-display">{financialHealthScore.overall}</span>
                    <span className="text-[10px] text-muted-foreground">/ 100</span>
                  </div>
                </div>
              </div>
              <div className="space-y-3 mt-4">
                {financialHealthScore.breakdown.map(s => (
                  <div key={s.name} className="space-y-1">
                    <div className="flex justify-between text-sm"><span>{s.name}</span><span className="font-semibold">{s.score}%</span></div>
                    <Progress value={s.score} className="h-2" />
                    <p className="text-xs text-muted-foreground">{s.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* ACCOUNTS */}
        <TabsContent value="accounts" className="space-y-6 mt-4">
          <Card className="pillar-card">
            <CardHeader className="pb-2"><CardTitle className="font-display text-lg flex items-center gap-2"><Building className="w-5 h-5 text-mint" /> Connected Accounts</CardTitle></CardHeader>
            <CardContent>
              <div className="space-y-3">
                {financialData.accounts.map(a => (
                  <div key={a.name} className="flex items-center gap-3 p-3 rounded-xl bg-muted/30">
                    <div className="w-10 h-10 rounded-xl bg-mint-light flex items-center justify-center text-lg">🏦</div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{a.name}</p>
                      <p className="text-xs text-muted-foreground">{a.type} • Last synced: Today</p>
                    </div>
                    <p className={`font-bold ${a.balance < 0 ? "text-destructive" : "text-mint"}`}>${Math.abs(a.balance).toLocaleString()}</p>
                    <Badge variant="secondary" className="text-[10px]">✓ Synced</Badge>
                  </div>
                ))}
                <button className="w-full py-2.5 rounded-xl border-2 border-dashed border-primary/30 text-primary text-sm font-medium hover:bg-primary/5">+ Connect New Account</button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* BUDGET */}
        <TabsContent value="budget" className="space-y-6 mt-4">
          <Card className="pillar-card">
            <CardHeader className="pb-2"><CardTitle className="font-display text-lg flex items-center gap-2"><Wallet className="w-5 h-5 text-mint" /> Monthly Budget</CardTitle></CardHeader>
            <CardContent className="space-y-3">
              {financialData.monthlyBudget.map(b => (
                <div key={b.category}>
                  <div className="flex justify-between text-sm mb-1">
                    <span>{b.category}</span>
                    <span>${b.spent} / ${b.budgeted}</span>
                  </div>
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <div className={`h-full rounded-full ${b.spent > b.budgeted ? "bg-destructive" : `bg-${b.color}`}`}
                      style={{ width: `${Math.min((b.spent / b.budgeted) * 100, 100)}%` }} />
                  </div>
                </div>
              ))}
              <div className="flex items-center justify-between p-3 rounded-xl bg-mint-light mt-2">
                <span className="text-sm font-medium">Total Under Budget</span>
                <span className="font-bold text-mint">$200 remaining ✓</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-xl bg-muted/30 mt-1">
                <div className="flex items-center gap-2">
                  <ToggleLeft className="w-4 h-4" />
                  <span className="text-sm">Joint vs Individual</span>
                </div>
                <Badge variant="secondary" className="text-[10px]">Showing: Joint</Badge>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* BILLS */}
        <TabsContent value="bills" className="space-y-6 mt-4">
          <Card className="pillar-card">
            <CardHeader className="pb-2"><CardTitle className="font-display text-lg flex items-center gap-2"><Calendar className="w-5 h-5 text-mint" /> Bill Calendar</CardTitle></CardHeader>
            <CardContent>
              <div className="grid grid-cols-7 gap-1 mb-2">
                {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
                  <div key={i} className="text-center text-xs font-semibold text-muted-foreground py-1">{d}</div>
                ))}
                {Array.from({ length: 28 }, (_, i) => {
                  const day = i + 1;
                  const bill = billCalendar.find(b => b.day === day);
                  return (
                    <div key={day} className={`text-center py-2 rounded-lg text-xs ${bill ? bill.status === "paid" ? "bg-mint-light text-mint font-bold" : "bg-amber-light text-amber font-bold" : "hover:bg-muted/30"}`}>
                      {day}
                      {bill && <div className="text-[8px] truncate">${bill.amount}</div>}
                    </div>
                  );
                })}
              </div>
              <div className="space-y-2 mt-4">
                {billCalendar.map(b => (
                  <div key={b.day} className="flex items-center gap-3 p-2 rounded-xl bg-muted/30">
                    <Badge variant={b.status === "paid" ? "default" : "secondary"} className="text-[10px]">{b.status === "paid" ? "✓ Paid" : "Upcoming"}</Badge>
                    <span className="text-sm flex-1">{b.name}</span>
                    <span className="text-sm font-semibold">${b.amount}</span>
                    <span className="text-xs text-muted-foreground">Day {b.day}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* SUBSCRIPTIONS */}
        <TabsContent value="subscriptions" className="space-y-6 mt-4">
          <Card className="pillar-card">
            <CardHeader className="pb-2"><CardTitle className="font-display text-lg">Subscription Audit</CardTitle></CardHeader>
            <CardContent className="space-y-2">
              {subscriptions.map(s => (
                <div key={s.id} className={`flex items-center gap-3 p-3 rounded-xl ${s.status === "cancel" ? "bg-destructive/5" : s.status === "review" ? "bg-amber-light" : "bg-muted/30"}`}>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{s.name}</p>
                    <p className="text-xs text-muted-foreground">{s.category} • Bills on day {s.billingDate}</p>
                  </div>
                  <span className="text-sm font-semibold">${s.amount}/mo</span>
                  <Badge variant={s.status === "cancel" ? "destructive" : s.status === "review" ? "default" : "secondary"} className="text-[10px] capitalize">{s.status}</Badge>
                </div>
              ))}
              <div className="p-3 rounded-xl bg-mint-light mt-2 text-center">
                <p className="text-sm font-medium text-mint">Potential savings: ${subscriptions.filter(s => s.status === "cancel").reduce((a, b) => a + b.amount, 0).toFixed(2)}/mo</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* CASH FLOW */}
        <TabsContent value="cash-flow" className="space-y-6 mt-4">
          <Card className="pillar-card">
            <CardHeader className="pb-2"><CardTitle className="font-display text-lg flex items-center gap-2"><LineChartIcon className="w-5 h-5 text-mint" /> Cash Flow Forecast</CardTitle></CardHeader>
            <CardContent>
              <div className="space-y-3">
                {cashFlowForecast.map(p => (
                  <div key={p.period} className="p-4 rounded-xl bg-muted/30">
                    <p className="text-sm font-semibold mb-2">{p.period}</p>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div><p className="text-xs text-muted-foreground">Income</p><p className="font-bold text-mint">${p.income.toLocaleString()}</p></div>
                      <div><p className="text-xs text-muted-foreground">Expenses</p><p className="font-bold text-coral">${p.expenses.toLocaleString()}</p></div>
                      <div><p className="text-xs text-muted-foreground">Net</p><p className={`font-bold ${p.net > 0 ? "text-mint" : "text-destructive"}`}>${p.net.toLocaleString()}</p></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* DEBTS */}
        <TabsContent value="debts" className="space-y-6 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="pillar-card">
              <CardHeader className="pb-2"><CardTitle className="font-display text-lg">Active Debts</CardTitle></CardHeader>
              <CardContent className="space-y-3">
                {financialData.debts.map(d => (
                  <div key={d.name} className="p-3 rounded-xl bg-muted/30">
                    <div className="flex justify-between mb-1"><span className="font-medium text-sm">{d.name}</span><span className="font-bold text-sm">${d.balance.toLocaleString()}</span></div>
                    <p className="text-xs text-muted-foreground">APR: {d.rate}% • Min Payment: ${d.minPayment}/mo</p>
                  </div>
                ))}
              </CardContent>
            </Card>
            <Card className="pillar-card">
              <CardHeader className="pb-2"><CardTitle className="font-display text-lg">Payoff Simulator</CardTitle></CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-4 rounded-xl bg-mint-light text-center">
                    <p className="text-xs font-semibold mb-1">Avalanche Strategy</p>
                    <p className="text-lg font-bold text-mint">${debtPayoffSimulation.avalanche.totalInterest.toLocaleString()}</p>
                    <p className="text-xs text-muted-foreground">total interest</p>
                    <p className="text-xs mt-1">Payoff: {debtPayoffSimulation.avalanche.payoffDate}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-amber-light text-center">
                    <p className="text-xs font-semibold mb-1">Snowball Strategy</p>
                    <p className="text-lg font-bold text-amber">${debtPayoffSimulation.snowball.totalInterest.toLocaleString()}</p>
                    <p className="text-xs text-muted-foreground">total interest</p>
                    <p className="text-xs mt-1">Payoff: {debtPayoffSimulation.snowball.payoffDate}</p>
                  </div>
                </div>
                <p className="text-xs text-mint text-center mt-3">💡 Avalanche saves ${(debtPayoffSimulation.snowball.totalInterest - debtPayoffSimulation.avalanche.totalInterest).toLocaleString()} more</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* CREDIT */}
        <TabsContent value="credit" className="space-y-6 mt-4">
          <Card className="pillar-card">
            <CardHeader className="pb-2"><CardTitle className="font-display text-lg">Credit Score Monitor</CardTitle></CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full gradient-coral flex items-center justify-center mx-auto mb-2">
                    <span className="text-2xl font-bold text-white">{financialData.creditScore.alex}</span>
                  </div>
                  <p className="font-semibold text-sm">Alex</p>
                  <Badge variant="secondary" className="text-[10px] mt-1">Good</Badge>
                </div>
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full gradient-sky flex items-center justify-center mx-auto mb-2">
                    <span className="text-2xl font-bold text-white">{financialData.creditScore.jordan}</span>
                  </div>
                  <p className="font-semibold text-sm">Jordan</p>
                  <Badge variant="secondary" className="text-[10px] mt-1">Excellent</Badge>
                </div>
              </div>
              <div className="mt-4 p-3 rounded-xl bg-muted/30">
                <p className="text-xs font-semibold mb-1">💡 Tips to Improve</p>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• Keep credit utilization below 30%</li>
                  <li>• Don't close old credit cards</li>
                  <li>• Set up autopay for all bills</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* INSURANCE */}
        <TabsContent value="insurance" className="space-y-6 mt-4">
          <Card className="pillar-card">
            <CardHeader className="pb-2"><CardTitle className="font-display text-lg flex items-center gap-2"><Shield className="w-5 h-5 text-sky" /> Insurance Portfolio</CardTitle></CardHeader>
            <CardContent className="space-y-3">
              {insurancePolicies.map(p => (
                <div key={p.id} className={`p-3 rounded-xl ${p.status === "gap" ? "bg-destructive/5 border border-destructive/20" : "bg-muted/30"}`}>
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-sm">{p.type} Insurance</p>
                    <Badge variant={p.status === "gap" ? "destructive" : "secondary"} className="text-[10px]">{p.status === "gap" ? "⚠️ Gap" : "Active"}</Badge>
                  </div>
                  {p.status !== "gap" && (
                    <div className="text-xs text-muted-foreground mt-1">
                      <span>{p.provider}</span> • Coverage: ${p.coverage.toLocaleString()} • Premium: ${p.premium}/mo • Renewal: {p.renewalDate}
                    </div>
                  )}
                  {p.status === "gap" && <p className="text-xs text-destructive mt-1">No travel insurance — consider adding coverage</p>}
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        {/* GOALS */}
        <TabsContent value="goals" className="space-y-6 mt-4">
          <Card className="pillar-card">
            <CardHeader className="pb-2"><CardTitle className="font-display text-lg flex items-center gap-2"><Target className="w-5 h-5 text-mint" /> Savings Goals</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              {financialData.savingsGoals.map(g => (
                <div key={g.name} className="p-4 rounded-xl bg-muted/30">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-semibold text-sm">{g.name}</p>
                    <span className="text-xs text-muted-foreground">${g.current.toLocaleString()} / ${g.target.toLocaleString()}</span>
                  </div>
                  <Progress value={(g.current / g.target) * 100} className="h-2.5 mb-1" />
                  <p className="text-xs text-muted-foreground">{Math.round((g.current / g.target) * 100)}% complete • ${(g.target - g.current).toLocaleString()} remaining</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        {/* NET WORTH */}
        <TabsContent value="net-worth" className="space-y-6 mt-4">
          <Card className="pillar-card">
            <CardHeader className="pb-2"><CardTitle className="font-display text-lg">Net Worth History</CardTitle></CardHeader>
            <CardContent>
              <p className="text-2xl font-bold font-display text-mint mb-4">${financialData.netWorth.toLocaleString()}</p>
              <ResponsiveContainer width="100%" height={250}>
                <AreaChart data={financialData.netWorthHistory}>
                  <defs>
                    <linearGradient id="nwGrad2" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="hsl(160, 50%, 55%)" stopOpacity={0.3} />
                      <stop offset="100%" stopColor="hsl(160, 50%, 55%)" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="month" tick={{ fontSize: 11 }} />
                  <YAxis tick={{ fontSize: 11 }} tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`} />
                  <Tooltip formatter={(v: number) => `$${v.toLocaleString()}`} />
                  <Area type="monotone" dataKey="value" stroke="hsl(160, 50%, 55%)" fill="url(#nwGrad2)" strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
