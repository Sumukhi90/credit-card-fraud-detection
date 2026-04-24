import { Database, Activity, PieChart, Tag } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const datasetInfo = [
  { icon: Database, label: "Source", value: "Kaggle Credit Card Fraud Detection Dataset" },
  { icon: Activity, label: "Total Transactions", value: "284K+" },
  { icon: PieChart, label: "Fraud Rate", value: "~0.17%" },
  { icon: Tag, label: "Target Variable", value: "Class 0 = Legitimate, Class 1 = Fraud" },
]

export function DatasetSection() {
  return (
    <section id="dataset" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Dataset Overview</h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {datasetInfo.map((item) => (
            <Card key={item.label} className="bg-card border-border hover:border-primary/50 transition-colors">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{item.label}</p>
                  <p className="text-base font-semibold text-foreground">{item.value}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
