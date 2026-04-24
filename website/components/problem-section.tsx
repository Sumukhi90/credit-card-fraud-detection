import { AlertTriangle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function ProblemSection() {
  return (
    <section id="problem" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Problem Statement</h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </div>

        <Card className="max-w-4xl mx-auto bg-card border-border">
          <CardContent className="pt-8 pb-8">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <AlertTriangle className="w-8 h-8 text-primary" />
              </div>
              <div>
                <p className="text-lg text-foreground leading-relaxed">
                  Credit card fraud is rare but financially damaging. Since fraudulent transactions represent only around{" "}
                  <span className="text-accent font-semibold">0.17%</span> of the dataset, accuracy alone is misleading.
                  This project focuses on <span className="text-accent font-semibold">recall</span> and{" "}
                  <span className="text-accent font-semibold">ROC-AUC</span> to evaluate fraud detection more meaningfully.
                </p>
                <p className="text-muted-foreground mt-4">
                  Traditional accuracy metrics would show 99%+ success simply by predicting all transactions as legitimate,
                  missing the actual fraud cases that matter most to financial institutions.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
