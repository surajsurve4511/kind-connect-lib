import { DollarSign, TrendingUp, PiggyBank, CreditCard, FileText, Target, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { financialData } from "@/data/mockData";
import { AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, ResponsiveContainer, Tooltip, LineChart, Line } from "recharts";

const COLORS = ["hsl(8,76%,65%)", "hsl(160,50%,55%)", "hsl(200,70%,60%)", "hsl(260,50%,65%)", "hsl(340,60%,65%)", "hsl(35,90%,60%)"];

const allocationData = [
  { name: "Stocks", value: 55 },
  { name: "Bonds", value: 20 },
  { name: "Real Estate", value: 15 },
  { name: "Cash", value: 10 },
];

export default function FinancesPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-2xl bg-mint flex items-center justify-center">
          <DollarSign className="w-5 h-5 text-primary-foreground" />
        </div>
        <div>
          <h1 className="font-display text-2xl font-bold">Financial Life Management</h1>
          <p className="text-sm text-muted-foreground">Building wealth together, one step at a time</p>
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList className="bg-muted/50 rounded-xl p-1">
          <TabsTrigger value="overview" className="rounded-lg">Overview</TabsTrigger>
          <TabsTrigger value="budget" className="rounded-lg">Budgeting</TabsTrigger>
          <TabsTrigger value="savings" className="rounded-lg">Savings & Goals</TabsTrigger>
          <TabsTrigger value="investments" className="rounded-lg">Investments</TabsTrigger>
          <TabsTrigger value="debt" className="rounded-lg">Debt</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Account Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {financialData.accounts.map((acc, i) => (
              <Card key={i} className="pillar-card">
                <CardContent className="p-5">
                  <p className="text-xs text-muted-foreground">{acc.type}</p>
                  <p className="text-sm font-semibold mt-1">{acc.name}</p>
                  <p className={`text-xl font-bold font-display mt-2 ${acc.balance < 0 ? "text-destructive" : ""}`}>
                    ${Math.abs(acc.balance).toLocaleString()}
                    {acc.balance < 0 && <span className="text-xs ml-1">owed</span>}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Net Worth + Income vs Expenses */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="pillar-card">
              <CardHeader className="pb-2">
                <CardTitle className="font-display text-base flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-mint" /> Net Worth
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold font-display">${financialData.netWorth.toLocaleString()}</p>
                <ResponsiveContainer width="100%" height={150}>
                  <AreaChart data={financialData.netWorthHistory}>
                    <defs>
                      <linearGradient id="nwGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="hsl(160,50%,55%)" stopOpacity={0.3} />
                        <stop offset="100%" stopColor="hsl(160,50%,55%)" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="month" tick={{ fontSize: 11 }} />
                    <YAxis hide />
                    <Tooltip formatter={(v: number) => `$${v.toLocaleString()}`} />
                    <Area type="monotone" dataKey="value" stroke="hsl(160,50%,55%)" fill="url(#nwGrad)" strokeWidth={2} />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="pillar-card">
              <CardHeader className="pb-2">
                <CardTitle className="font-display text-base">Income vs Expenses</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={180}>
                  <BarChart data={financialData.incomeVsExpenses}>
                    <XAxis dataKey="month" tick={{ fontSize: 11 }} />
                    <YAxis hide />
                    <Tooltip formatter={(v: number) => `$${v.toLocaleString()}`} />
                    <Bar dataKey="income" fill="hsl(160,50%,55%)" radius={[4,4,0,0]} />
                    <Bar dataKey="expenses" fill="hsl(8,76%,65%)" radius={[4,4,0,0]} />
                  </BarChart>
                </ResponsiveContainer>
                <div className="flex justify-center gap-4 text-xs mt-2">
                  <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-mint" /> Income</span>
                  <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-coral" /> Expenses</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Transactions */}
          <Card className="pillar-card">
            <CardHeader className="pb-2">
              <CardTitle className="font-display text-base">Recent Transactions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {financialData.recentTransactions.map(t => (
                <div key={t.id} className="flex items-center gap-3 p-2 rounded-xl hover:bg-muted/50">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${t.amount > 0 ? "bg-mint-light" : "bg-muted"}`}>
                    {t.amount > 0 ? <ArrowUpRight className="w-4 h-4 text-mint" /> : <ArrowDownRight className="w-4 h-4 text-muted-foreground" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium">{t.description}</p>
                    <p className="text-[10px] text-muted-foreground">{t.date} • {t.category}</p>
                  </div>
                  <span className={`text-sm font-semibold ${t.amount > 0 ? "text-mint" : ""}`}>
                    {t.amount > 0 ? "+" : ""}${Math.abs(t.amount).toFixed(2)}
                  </span>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="budget" className="space-y-4">
          <Card className="pillar-card">
            <CardHeader className="pb-2">
              <CardTitle className="font-display text-base">Envelope Budget</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {financialData.monthlyBudget.map((b, i) => (
                <div key={i} className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{b.category}</span>
                    <span className="text-muted-foreground">${b.spent} / ${b.budgeted}</span>
                  </div>
                  <div className="w-full h-3 rounded-full bg-muted overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all"
                      style={{
                        width: `${Math.min((b.spent / b.budgeted) * 100, 100)}%`,
                        backgroundColor: COLORS[i % COLORS.length],
                        opacity: b.spent > b.budgeted ? 1 : 0.7,
                      }}
                    />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="savings" className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {financialData.savingsGoals.map((g, i) => (
              <Card key={i} className="pillar-card">
                <CardContent className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-2xl">{g.icon === "plane" ? "✈️" : g.icon === "car" ? "🚗" : g.icon === "home" ? "🏠" : "🛡️"}</div>
                    <div>
                      <p className="text-sm font-semibold">{g.name}</p>
                      <p className="text-[10px] text-muted-foreground">${g.current.toLocaleString()} of ${g.target.toLocaleString()}</p>
                    </div>
                  </div>
                  <Progress value={(g.current / g.target) * 100} className="h-3" />
                  <p className="text-[10px] text-right text-muted-foreground mt-1">{Math.round((g.current / g.target) * 100)}%</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="investments" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="pillar-card">
              <CardHeader className="pb-2">
                <CardTitle className="font-display text-base">Asset Allocation</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center">
                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie data={allocationData} cx="50%" cy="50%" innerRadius={50} outerRadius={80} dataKey="value" paddingAngle={3}>
                      {allocationData.map((_, i) => <Cell key={i} fill={COLORS[i]} />)}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
                <div className="flex flex-wrap gap-3 text-xs">
                  {allocationData.map((a, i) => (
                    <span key={i} className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: COLORS[i] }} />
                      {a.name} ({a.value}%)
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="pillar-card">
              <CardHeader className="pb-2">
                <CardTitle className="font-display text-base">Credit Scores</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {Object.entries(financialData.creditScore).map(([name, score]) => (
                  <div key={name} className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-primary-foreground ${name === "alex" ? "gradient-coral" : "gradient-sky"}`}>
                      {name[0].toUpperCase()}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold capitalize">{name}</p>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold font-display text-mint">{score}</span>
                        <span className="text-xs text-muted-foreground">{score >= 750 ? "Excellent" : "Good"}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="debt" className="space-y-4">
          <Card className="pillar-card">
            <CardHeader className="pb-2">
              <CardTitle className="font-display text-base flex items-center gap-2">
                <CreditCard className="w-4 h-4" /> Debt Inventory
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-left text-muted-foreground border-b">
                      <th className="pb-2 font-medium">Debt</th>
                      <th className="pb-2 font-medium">Balance</th>
                      <th className="pb-2 font-medium">Rate</th>
                      <th className="pb-2 font-medium">Min Payment</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/50">
                    {financialData.debts.map((d, i) => (
                      <tr key={i} className="hover:bg-muted/30">
                        <td className="py-3 font-medium">{d.name}</td>
                        <td className="py-3 text-destructive">${d.balance.toLocaleString()}</td>
                        <td className="py-3">{d.rate}%</td>
                        <td className="py-3">${d.minPayment}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4 p-4 rounded-xl bg-muted/30">
                <p className="text-xs font-semibold mb-2">Payoff Strategy Comparison</p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-coral-light/30 text-center">
                    <p className="text-sm font-semibold">Avalanche</p>
                    <p className="text-xs text-muted-foreground">Pay off highest rate first</p>
                    <p className="text-lg font-bold font-display mt-1">$1,842</p>
                    <p className="text-[10px] text-muted-foreground">total interest saved</p>
                  </div>
                  <div className="p-3 rounded-xl bg-sky-light/30 text-center">
                    <p className="text-sm font-semibold">Snowball</p>
                    <p className="text-xs text-muted-foreground">Pay off smallest balance first</p>
                    <p className="text-lg font-bold font-display mt-1">$1,650</p>
                    <p className="text-[10px] text-muted-foreground">total interest saved</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
