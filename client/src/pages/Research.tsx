export default function Research() {
  const projects = [
    {
      title: "BrainHealth: Ageing Well",
      status: "Active",
      description: "A €1.5 million EU-funded project investigating brain aging and mental health across the lifespan. Using data from over 78,000 individuals, we aim to understand the genetic and environmental factors that promote a healthy brain from birth to old age.",
      tags: ["Brain Aging", "Lifespan", "Neuroimaging", "Genetics"],
      funders: ["European Union"]
    },
    {
      title: "Epigenetics of Neurodevelopment",
      status: "Active",
      description: "Examining how prenatal and childhood environmental factors influence DNA methylation and subsequent brain structure and mental health outcomes. This multi-cohort study seeks to identify early epigenetic markers of psychiatric risk.",
      tags: ["Epigenetics", "DNA Methylation", "Development", "Mental Health"],
      funders: ["Various"]
    },
    {
      title: "Causal Inference in Mental Health",
      status: "Active",
      description: "Using large-scale openly accessible resources and methods like Mendelian randomization to strengthen causal inference in the epidemiology of mental health and neurodevelopment. This work helps distinguish causal risk factors from mere associations.",
      tags: ["Mendelian Randomization", "Causal Inference", "Bioinformatics"],
      funders: ["Various"]
    }
  ];

  return (
    <div className="min-h-screen pt-12 pb-24">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-serif mb-6">Research Areas</h1>
          <p className="text-xl text-muted-foreground">
            Our work spans genetics, epigenetics, and brain imaging to understand mental health and healthy brain aging.
          </p>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div key={index} className="group flex flex-col md:flex-row gap-8 pb-16 border-b border-border/50 last:border-0 last:pb-0">
              <div className="md:w-1/3">
                <div className="sticky top-28">
                  <h2 className="text-2xl font-serif mb-3 group-hover:text-secondary-foreground transition-colors">{project.title}</h2>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="flex h-2 w-2 rounded-full bg-secondary"></span>
                    <span className="text-sm font-medium text-muted-foreground">{project.status}</span>
                  </div>
                </div>
              </div>
              <div className="md:w-2/3 space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div>
                  <h4 className="text-sm font-medium uppercase tracking-wider mb-3">Methods & Domains</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold bg-muted text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium uppercase tracking-wider mb-2">Funding</h4>
                  <p className="text-sm text-muted-foreground">{project.funders.join(", ")}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
