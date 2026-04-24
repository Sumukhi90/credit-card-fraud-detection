import RiskChecker from '@/components/risk-checker'
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ProblemSection } from "@/components/problem-section"
import { DatasetSection } from "@/components/dataset-section"
import { MethodologySection } from "@/components/methodology-section"
import { FeatureSection } from "@/components/feature-section"
import { ResultsSection } from "@/components/results-section"
import { InsightsSection } from "@/components/insights-section"
import { DashboardSection } from "@/components/dashboard-section"
import { BusinessSection } from "@/components/business-section"
import { TechStackSection } from "@/components/tech-stack-section"
import { AboutSection } from "@/components/about-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ProblemSection />
      <DatasetSection />
      <MethodologySection />
      <FeatureSection />
      <ResultsSection />
      <InsightsSection />
      <DashboardSection />
      <BusinessSection />
      <TechStackSection />
      <AboutSection />
      <Footer />
    </main>
  )
}


<div style={{padding:'20px'}}><RiskChecker /></div>
