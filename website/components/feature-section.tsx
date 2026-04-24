import { Clock, DollarSign, TrendingDown, Shield } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    icon: Clock,
    title: "Hour Buckets",
    description: "Grouped transaction time into business-friendly periods for pattern analysis",
  },
  {
    icon: DollarSign,
    title: "Amount Bands",
    description: "Categorized transaction values into risk segments based on amount ranges",
  },
  {
    icon: TrendingDown,
    title: "Log Amount",
    description: "Applied log transformation to reduce skewness in transaction amount distribution",
  },
  {
    icon: Shield,
    title: "Risk Tier",
    description: "Categorized transactions into Low, Medium, High, and Critical risk levels",
  },
]

export function FeatureSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Feature Engineering</h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((feature) => (
            <Card key={feature.title} className="bg-card border-border hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-accent" />
                  </div>
                  <CardTitle className="text-foreground">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
