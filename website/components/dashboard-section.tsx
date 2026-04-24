"use client"

import { useState, useMemo } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts"
import { fraudAnalyticsData, type RiskTier, type AmountBand, type TimeBucket } from "@/data/fraudAnalytics"
import { AlertTriangle, TrendingUp, Target, Percent } from "lucide-react"

export function DashboardSection() {
  const [riskTierFilter, setRiskTierFilter] = useState<RiskTier>("All")
  const [amountBandFilter, setAmountBandFilter] = useState<AmountBand>("All")
  const [timeBucketFilter, setTimeBucketFilter] = useState<TimeBucket>("All")

  const filteredTransactions = useMemo(() => {
    return fraudAnalyticsData.topRiskyTransactions.filter((txn) => {
      if (riskTierFilter !== "All" && txn.riskTier !== riskTierFilter) return false
      if (amountBandFilter !== "All" && txn.amountBand !== amountBandFilter) return false
      if (timeBucketFilter !== "All" && txn.timeBucket !== timeBucketFilter) return false
      return true
    })
  }, [riskTierFilter, amountBandFilter, timeBucketFilter])

  const filteredSummary = useMemo(() => {
    const count = filteredTransactions.length
    const avgRiskScore = count > 0
      ? filteredTransactions.reduce((sum, t) => sum + t.riskScore, 0) / count
      : 0
    const totalAmount = filteredTransactions.reduce((sum, t) => sum + t.amount, 0)
    return { count, avgRiskScore, totalAmount }
  }, [filteredTransactions])

  const fraudVsLegitData = [
    { name: "Legitimate", value: fraudAnalyticsData.summary.legitimateTransactions, fill: "#3b82f6" },
    { name: "Fraud", value: fraudAnalyticsData.summary.fraudTransactions, fill: "#22d3ee" },
  ]

  const timeChartData = fraudAnalyticsData.fraudByTimeBucket.map((item) => ({
    name: item.bucket,
    fraud: item.fraud,
    fraudRate: item.fraudRate,
  }))

  const amountChartData = fraudAnalyticsData.fraudByAmountBand.map((item) => ({
    name: item.band,
    fraud: item.fraud,
    fraudRate: item.fraudRate,
  }))

  const riskTierData = fraudAnalyticsData.riskTierDistribution.map((item) => ({
    name: item.tier,
    value: item.count,
    percentage: item.percentage,
    fill: item.color,
  }))

  const getRiskTierColor = (tier: string) => {
    switch (tier) {
      case "Critical": return "text-red-500"
      case "High Risk": return "text-orange-500"
      case "Medium Risk": return "text-yellow-500"
      default: return "text-green-500"
    }
  }

  return (
    <section id="dashboard" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Interactive Dashboard</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore fraud analytics with interactive charts and filters. Data based on the Kaggle Credit Card Fraud Detection dataset.
          </p>
          <div className="w-20 h-1 bg-primary mx-auto mt-4" />
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card className="bg-card border-border">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">ROC-AUC Score</p>
                  <p className="text-2xl font-bold text-accent">{fraudAnalyticsData.modelMetrics.rocAuc}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-card border-border">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <Target className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Fraud Recall</p>
                  <p className="text-2xl font-bold text-accent">{(fraudAnalyticsData.modelMetrics.fraudRecall * 100).toFixed(0)}%</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-card border-border">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Percent className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Precision</p>
                  <p className="text-2xl font-bold text-foreground">{(fraudAnalyticsData.modelMetrics.precision * 100).toFixed(0)}%</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-card border-border">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Fraud Rate</p>
                  <p className="text-2xl font-bold text-foreground">{fraudAnalyticsData.summary.fraudRate}%</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Fraud vs Legitimate */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-lg text-foreground">Fraud vs Legitimate Transactions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={fraudVsLegitData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={2}
                      dataKey="value"
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(2)}%`}
                      labelLine={false}
                    >
                      {fraudVsLegitData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{ backgroundColor: "#0f1f38", border: "1px solid #1e3a5f", borderRadius: "8px" }}
                      labelStyle={{ color: "#f8fafc" }}
                      formatter={(value: number) => [value.toLocaleString(), "Count"]}
                    />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Fraud by Time Bucket */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-lg text-foreground">Fraud by Time Bucket (Hours)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={timeChartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1e3a5f" />
                    <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} />
                    <YAxis stroke="#94a3b8" fontSize={12} />
                    <Tooltip
                      contentStyle={{ backgroundColor: "#0f1f38", border: "1px solid #1e3a5f", borderRadius: "8px" }}
                      labelStyle={{ color: "#f8fafc" }}
                    />
                    <Bar dataKey="fraud" fill="#3b82f6" radius={[4, 4, 0, 0]} name="Fraud Cases" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Fraud by Amount Band */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-lg text-foreground">Fraud by Amount Band</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={amountChartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1e3a5f" />
                    <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} />
                    <YAxis stroke="#94a3b8" fontSize={12} />
                    <Tooltip
                      contentStyle={{ backgroundColor: "#0f1f38", border: "1px solid #1e3a5f", borderRadius: "8px" }}
                      labelStyle={{ color: "#f8fafc" }}
                    />
                    <Bar dataKey="fraud" fill="#22d3ee" radius={[4, 4, 0, 0]} name="Fraud Cases" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Risk Tier Distribution */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-lg text-foreground">Risk Tier Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={riskTierData}
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      dataKey="value"
                      label={({ name, percentage }) => `${name}: ${percentage}%`}
                      labelLine={false}
                    >
                      {riskTierData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{ backgroundColor: "#0f1f38", border: "1px solid #1e3a5f", borderRadius: "8px" }}
                      labelStyle={{ color: "#f8fafc" }}
                      formatter={(value: number) => [value.toLocaleString(), "Transactions"]}
                    />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters and Table */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-lg text-foreground">Top Risky Transactions</CardTitle>
            <div className="flex flex-wrap gap-4 mt-4">
              <div className="flex flex-col gap-1">
                <label className="text-sm text-muted-foreground">Risk Tier</label>
                <Select value={riskTierFilter} onValueChange={(v) => setRiskTierFilter(v as RiskTier)}>
                  <SelectTrigger className="w-[150px] bg-secondary border-border">
                    <SelectValue placeholder="All" />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-border">
                    <SelectItem value="All">All</SelectItem>
                    <SelectItem value="Critical">Critical</SelectItem>
                    <SelectItem value="High Risk">High Risk</SelectItem>
                    <SelectItem value="Medium Risk">Medium Risk</SelectItem>
                    <SelectItem value="Low Risk">Low Risk</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm text-muted-foreground">Amount Band</label>
                <Select value={amountBandFilter} onValueChange={(v) => setAmountBandFilter(v as AmountBand)}>
                  <SelectTrigger className="w-[150px] bg-secondary border-border">
                    <SelectValue placeholder="All" />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-border">
                    <SelectItem value="All">All</SelectItem>
                    <SelectItem value="$0-$50">$0-$50</SelectItem>
                    <SelectItem value="$50-$100">$50-$100</SelectItem>
                    <SelectItem value="$100-$500">$100-$500</SelectItem>
                    <SelectItem value="$500-$1000">$500-$1000</SelectItem>
                    <SelectItem value="$1000+">$1000+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm text-muted-foreground">Time Bucket</label>
                <Select value={timeBucketFilter} onValueChange={(v) => setTimeBucketFilter(v as TimeBucket)}>
                  <SelectTrigger className="w-[150px] bg-secondary border-border">
                    <SelectValue placeholder="All" />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-border">
                    <SelectItem value="All">All</SelectItem>
                    <SelectItem value="00-04">00-04</SelectItem>
                    <SelectItem value="04-08">04-08</SelectItem>
                    <SelectItem value="08-12">08-12</SelectItem>
                    <SelectItem value="12-16">12-16</SelectItem>
                    <SelectItem value="16-20">16-20</SelectItem>
                    <SelectItem value="20-24">20-24</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {/* Filter Summary */}
            <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-secondary/50 rounded-lg">
              <div>
                <p className="text-sm text-muted-foreground">Filtered Transactions</p>
                <p className="text-xl font-bold text-foreground">{filteredSummary.count}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Avg Risk Score</p>
                <p className="text-xl font-bold text-accent">{filteredSummary.avgRiskScore.toFixed(2)}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Amount</p>
                <p className="text-xl font-bold text-foreground">${filteredSummary.totalAmount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Transaction ID</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Amount</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Time</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Risk Score</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Risk Tier</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredTransactions.length > 0 ? (
                    filteredTransactions.map((txn) => (
                      <tr key={txn.id} className="border-b border-border/50 hover:bg-secondary/30 transition-colors">
                        <td className="py-3 px-4 text-sm font-mono text-foreground">{txn.id}</td>
                        <td className="py-3 px-4 text-sm text-foreground">${txn.amount.toLocaleString(undefined, { minimumFractionDigits: 2 })}</td>
                        <td className="py-3 px-4 text-sm text-muted-foreground">{txn.time}</td>
                        <td className="py-3 px-4 text-sm">
                          <div className="flex items-center gap-2">
                            <div className="w-16 h-2 bg-secondary rounded-full overflow-hidden">
                              <div
                                className="h-full bg-accent rounded-full"
                                style={{ width: `${txn.riskScore * 100}%` }}
                              />
                            </div>
                            <span className="text-foreground">{txn.riskScore.toFixed(2)}</span>
                          </div>
                        </td>
                        <td className={`py-3 px-4 text-sm font-medium ${getRiskTierColor(txn.riskTier)}`}>
                          {txn.riskTier}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={5} className="py-8 text-center text-muted-foreground">
                        No transactions match the selected filters.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
