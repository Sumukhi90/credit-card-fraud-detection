const technologies = [
  "Python",
  "Pandas",
  "NumPy",
  "Matplotlib",
  "Seaborn",
  "Scikit-learn",
  "Google Colab",
  "GitHub",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Recharts",
]

export function TechStackSection() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Tech Stack</h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-6 py-3 bg-card border border-border rounded-full text-foreground font-medium hover:border-primary/50 hover:bg-primary/5 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
