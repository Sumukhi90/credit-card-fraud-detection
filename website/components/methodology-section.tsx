import { FileSearch, BarChart3, Wrench, Brain, CheckCircle, Layers, Lightbulb } from "lucide-react"

const steps = [
  { icon: FileSearch, title: "Data Loading & Cleaning", description: "Import and preprocess raw transaction data" },
  { icon: BarChart3, title: "Exploratory Data Analysis", description: "Analyze patterns and distributions" },
  { icon: Wrench, title: "Feature Engineering", description: "Create meaningful features from raw data" },
  { icon: Brain, title: "Logistic Regression Modeling", description: "Train classification model" },
  { icon: CheckCircle, title: "Model Evaluation", description: "Assess performance metrics" },
  { icon: Layers, title: "Risk Tier Classification", description: "Categorize transactions by risk level" },
  { icon: Lightbulb, title: "Business Insight Generation", description: "Extract actionable recommendations" },
]

export function MethodologySection() {
  return (
    <section id="methodology" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Methodology</h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border" />

          <div className="space-y-8 md:space-y-12">
            {steps.map((step, index) => (
              <div key={step.title} className={`flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                <div className={`flex-1 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div className={`bg-card border border-border rounded-lg p-6 inline-block ${index % 2 === 0 ? "md:float-right" : ""}`}>
                    <div className={`flex items-center gap-4 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <step.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className={index % 2 === 0 ? "md:text-right" : ""}>
                        <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                        <p className="text-sm text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Center dot */}
                <div className="hidden md:flex w-4 h-4 rounded-full bg-primary border-4 border-background z-10 shrink-0" />

                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
