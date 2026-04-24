import { TrendingUp, Target, Brain, Focus } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const results = [
  { icon: TrendingUp, label: "ROC-AUC", value: "~0.97" },
  { icon: Target, label: "Fraud Recall", value: "~57%" },
  { icon: Brain, label: "Model", value: "Logistic Regression" },
  { icon: Focus, label: "Evaluation Focus", value: "Recall + ROC-AUC" },
]

export function ResultsSection() {
  return (
    <section id="results" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Model Results</h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {results.map((result) => (
            <Card key={result.label} className="bg-card border-border hover:border-accent/50 transition-colors">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                    <result.icon className="w-7 h-7 text-accent" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{result.label}</p>
                  <p className="text-2xl font-bold text-foreground">{result.value}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="max-w-4xl mx-auto bg-card border-border">
          <CardContent className="pt-6">
            <p className="text-foreground leading-relaxed text-center">
              The dataset is highly imbalanced, so <span className="text-accent font-semibold">accuracy is not enough</span>.
              Recall helps measure how many actual fraud cases are caught, while ROC-AUC shows how well the model separates
              fraud and legitimate transactions. A ROC-AUC of ~0.97 indicates excellent discriminative ability between classes.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
