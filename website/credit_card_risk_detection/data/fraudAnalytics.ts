export const fraudAnalyticsData = {
  summary: {
    totalTransactions: 284807,
    fraudTransactions: 492,
    legitimateTransactions: 284315,
    fraudRate: 0.17,
    rocAuc: 0.97,
    fraudRecall: 57,
  },
  fraudByTimeBucket: [
    { bucket: "00-04", fraud: 42, legitimate: 18500, fraudRate: 0.23 },
    { bucket: "04-08", fraud: 38, legitimate: 22000, fraudRate: 0.17 },
    { bucket: "08-12", fraud: 85, legitimate: 58000, fraudRate: 0.15 },
    { bucket: "12-16", fraud: 112, legitimate: 72000, fraudRate: 0.16 },
    { bucket: "16-20", fraud: 98, legitimate: 65000, fraudRate: 0.15 },
    { bucket: "20-24", fraud: 117, legitimate: 48815, fraudRate: 0.24 },
  ],
  fraudByAmountBand: [
    { band: "$0-$50", fraud: 245, legitimate: 142000, fraudRate: 0.17 },
    { band: "$50-$100", fraud: 98, legitimate: 68000, fraudRate: 0.14 },
    { band: "$100-$500", fraud: 89, legitimate: 52000, fraudRate: 0.17 },
    { band: "$500-$1000", fraud: 35, legitimate: 15000, fraudRate: 0.23 },
    { band: "$1000+", fraud: 25, legitimate: 7315, fraudRate: 0.34 },
  ],
  riskTierDistribution: [
    { tier: "Low Risk", count: 227046, percentage: 79.7, color: "#22c55e" },
    { tier: "Medium Risk", count: 42721, percentage: 15.0, color: "#eab308" },
    { tier: "High Risk", count: 14255, percentage: 5.0, color: "#f97316" },
    { tier: "Critical", count: 785, percentage: 0.3, color: "#ef4444" },
  ],
  topRiskyTransactions: [
    { id: "TXN-001", amount: 2125.87, time: "23:42", riskScore: 0.94, riskTier: "Critical", amountBand: "$1000+", timeBucket: "20-24" },
    { id: "TXN-002", amount: 1847.32, time: "02:15", riskScore: 0.91, riskTier: "Critical", amountBand: "$1000+", timeBucket: "00-04" },
    { id: "TXN-003", amount: 956.41, time: "22:58", riskScore: 0.89, riskTier: "Critical", amountBand: "$500-$1000", timeBucket: "20-24" },
    { id: "TXN-004", amount: 1523.90, time: "01:33", riskScore: 0.87, riskTier: "Critical", amountBand: "$1000+", timeBucket: "00-04" },
    { id: "TXN-005", amount: 789.25, time: "23:12", riskScore: 0.85, riskTier: "High Risk", amountBand: "$500-$1000", timeBucket: "20-24" },
    { id: "TXN-006", amount: 2450.00, time: "03:45", riskScore: 0.83, riskTier: "High Risk", amountBand: "$1000+", timeBucket: "00-04" },
    { id: "TXN-007", amount: 678.90, time: "21:30", riskScore: 0.81, riskTier: "High Risk", amountBand: "$500-$1000", timeBucket: "20-24" },
    { id: "TXN-008", amount: 1125.50, time: "04:22", riskScore: 0.79, riskTier: "High Risk", amountBand: "$1000+", timeBucket: "04-08" },
    { id: "TXN-009", amount: 445.30, time: "22:05", riskScore: 0.77, riskTier: "High Risk", amountBand: "$100-$500", timeBucket: "20-24" },
    { id: "TXN-010", amount: 892.15, time: "00:48", riskScore: 0.75, riskTier: "High Risk", amountBand: "$500-$1000", timeBucket: "00-04" },
    { id: "TXN-011", amount: 356.80, time: "23:55", riskScore: 0.73, riskTier: "Medium Risk", amountBand: "$100-$500", timeBucket: "20-24" },
    { id: "TXN-012", amount: 1678.45, time: "02:30", riskScore: 0.71, riskTier: "Medium Risk", amountBand: "$1000+", timeBucket: "00-04" },
    { id: "TXN-013", amount: 523.60, time: "21:15", riskScore: 0.69, riskTier: "Medium Risk", amountBand: "$500-$1000", timeBucket: "20-24" },
    { id: "TXN-014", amount: 267.90, time: "03:10", riskScore: 0.67, riskTier: "Medium Risk", amountBand: "$100-$500", timeBucket: "00-04" },
    { id: "TXN-015", amount: 945.20, time: "22:40", riskScore: 0.65, riskTier: "Medium Risk", amountBand: "$500-$1000", timeBucket: "20-24" },
  ],
  modelMetrics: {
    rocAuc: 0.97,
    fraudRecall: 0.57,
    precision: 0.82,
    f1Score: 0.67,
    accuracy: 0.9991,
  },
};

export type RiskTier = "Critical" | "High Risk" | "Medium Risk" | "Low Risk" | "All";
export type AmountBand = "$0-$50" | "$50-$100" | "$100-$500" | "$500-$1000" | "$1000+" | "All";
export type TimeBucket = "00-04" | "04-08" | "08-12" | "12-16" | "16-20" | "20-24" | "All";
