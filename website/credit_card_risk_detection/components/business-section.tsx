import { TrendingUp, UserCheck, Search, BarChart3 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const impacts = [
  { icon: TrendingUp, title: "Prioritizing High-Risk Transactions", description: "Focus resources on suspicious activity" },
  { icon: UserCheck, title: "Reducing Missed Fraud Cases", description: "Catch more fraudulent transactions" },
  { icon: Search, title: "Improving Manual Review Efficiency", description: "Streamline investigation workflow" },
  { icon: BarChart3, title: "Data-Driven Decision Making", description: "Enable informed risk operations" },
]

export function BusinessSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Business Impact</h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </div>

        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-lg text-muted-foreground leading-relaxed">
            This project supports fraud investigation teams by enabling efficient, data-driven approaches to financial risk
            operations. By leveraging machine learning and risk scoring, teams can make better decisions faster.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {impacts.map((impact) => (
            <Card key={impact.title} className="bg-card border-border hover:border-accent/50 transition-colors text-center">
              <CardContent className="pt-6">
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <impact.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-foreground font-semibold mb-2">{impact.title}</h3>
                <p className="text-sm text-muted-foreground">{impact.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
