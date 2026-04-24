import { Database, TrendingUp, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const metrics = [
  { icon: Database, label: "Transactions", value: "284K+", sublabel: "Dataset Size" },
  { icon: TrendingUp, label: "Fraud Rate", value: "~0.17%", sublabel: "Class Imbalance" },
  { icon: TrendingUp, label: "ROC-AUC", value: "~0.97", sublabel: "Model Score" },
  { icon: Target, label: "Fraud Recall", value: "~57%", sublabel: "Detection Rate" },
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            Credit Card Fraud Detection & Risk Analytics
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto text-pretty">
            An end-to-end machine learning project focused on identifying fraudulent credit card transactions using Python, Logistic Regression, risk scoring, and business analytics.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <a
                href="https://github.com/Sumukhi90/credit-card-fraud-detection"
                target="_blank"
                rel="noopener noreferrer"
              >
                View GitHub
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-border text-foreground hover:bg-secondary">
              <a href="#dashboard">View Dashboard</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-border text-foreground hover:bg-secondary">
              <a href="#about">Contact</a>
            </Button>
          </div>

          {/* Metric Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {metrics.map((metric) => (
              <Card key={metric.label} className="bg-card border-border hover:border-primary/50 transition-colors">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <metric.icon className="w-6 h-6 text-primary" />
                    </div>
                    <p className="text-sm text-muted-foreground mb-1">{metric.label}</p>
                    <p className="text-3xl font-bold text-accent">{metric.value}</p>
                    <p className="text-sm text-muted-foreground">{metric.sublabel}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
