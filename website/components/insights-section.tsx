import { Zap, AlertCircle, Clock, Target, ShieldCheck } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const insights = [
  { icon: Zap, text: "Fraud is rare but high impact" },
  { icon: AlertCircle, text: "Accuracy is misleading for imbalanced fraud data" },
  { icon: Clock, text: "Fraud patterns vary across time buckets and transaction ranges" },
  { icon: Target, text: "Risk scoring helps prioritize suspicious transactions" },
  { icon: ShieldCheck, text: "High and Critical risk cases can be reviewed first by fraud teams" },
]

export function InsightsSection() {
  return (
    <section id="insights" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Key Insights</h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {insights.map((insight, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary/50 transition-all hover:-translate-y-1"
            >
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <insight.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-foreground font-medium">{insight.text}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
