import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">About the Author</h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </div>

        <Card className="max-w-2xl mx-auto bg-card border-border">
          <CardContent className="pt-8 pb-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6">
                <span className="text-3xl font-bold text-white">SP</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Sumukhi Pandey</h3>
              <p className="text-accent font-medium mb-4">
                Aspiring Data Analyst | AI/LLM Evaluation Intern | B.Tech CSE
              </p>
              <p className="text-muted-foreground mb-8 max-w-2xl leading-relaxed">I am an aspiring Data Analyst and AI/LLM Evaluation Intern with hands-on experience in data analytics, model quality evaluation, and KPI-driven reporting. I work with Python, SQL, Power BI, and Excel to analyze large-scale datasets, identify performance trends, and transform raw data into actionable business insights. I have experience evaluating 10K+ AI-generated outputs, building dashboards to track key metrics, and improving model performance through data-driven analysis. My work focuses on bridging AI model evaluation with business analytics to enhance decision-making and operational efficiency. Currently pursuing a B.Tech in Computer Science, I am particularly interested in fintech analytics, fraud detection, risk modeling, and scalable data-driven solutions.</p>

              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="outline" className="border-border text-foreground hover:bg-secondary">
                  <a href="https://github.com/Sumukhi90" target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
                </Button>
                <Button asChild variant="outline" className="border-border text-foreground hover:bg-secondary">
                  <a href="https://www.linkedin.com/in/sumukhipandey2b40bb27b" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </a>
                </Button>
                <Button asChild variant="outline" className="border-border text-foreground hover:bg-secondary">
                  <a href="mailto:sumukhipandey22@gmail.com">
                    <Mail className="w-4 h-4 mr-2" />
                    Email
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}


