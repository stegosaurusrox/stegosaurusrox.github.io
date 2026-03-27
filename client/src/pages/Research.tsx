export default function Research() {
  const themes = [
    {
      title: "Genetics & Epigenetics",
      description: "Understanding how DNA methylation and genetic variation link genes, environment, and behaviour.",
      projects: "Projects include (epi-)genome-wide association studies (EWAS/GWAS), prenatal and early-life influences on methylation, and (epi-)genetic scores for ageing and other traits as a biomarker of mental health risk.",
    },
    {
      title: "Brain Imaging & Neurobiology",
      description: "Integrating molecular data with neuroimaging to map brain structure to ageing.",
      projects: "Focus areas include brain age prediction, structural brain differences in psychiatric disorders, and imaging-(epi-)genetics studies across large-scale consortia.",
    },
    {
      title: "Psychiatric Disorders & Mental Health",
      description: "Identifying biological correlates of psychosis, depression, neurodevelopmental and cognitive traits.",
      projects: "Predict risk, uncover causal pathways, and link biological correlated and environmental exposures to psychosocial health outcomes.",
    },
    {
      title: "Biological Ageing & Health Trajectories",
      description: "Exploring how epigenetic and brain markers relate to mental health, cognitive function, and lifespan development.",
      projects: "Projects integrate epigenetic and brain age measures, lifestyle impacts, and longitudinal population data.",
    }
  ];

  const projects = [
    {
      title: "BrainHealth: Ageing starts at birth",
      status: "Active",
      description: "A €1.5 million EU-/UKRI-funded project investigating brain aging and mental health across the lifespan. Using data from longitudinal population-based and clinical cohorts as well as preclinical models, we aim to understand the genetic and environmental factors that promote a healthy brain from birth to old age.",
      tags: ["Brain Developmenta & Aging", "Lifespan", "Neuroimaging", "Epigenetics", "mental-physical health multimorbidities"],
      funders: ["European Union / UKRI"]
    },
    {
      title: "The glue that holds the pieces together: Unlocking Cognitive Health in Psychotic Disorders",
      status: "Active",
      description: "A £3.5 million Wellcome-funded project to tackle cognitive impairment in psychotic disorders. Working with lived experience experts, this project combines advanced computational brain imaging methods with experimental mouse models, paving the way for earlier interventions, better treatments, and a deeper understanding of cognitive decline in psychotic disorders.",
      tags: ["Psychosis", "Cognition", "Proteomics", "Neuroimaging"],
      funders: ["Wellcome"]
    },
    {
      title: "The MIND consortium: Epigenetics of Neurodevelopment",
      status: "Active",
      description: "The MIND consortium aims to better understand the potential role of DNA methylation in brain development and mental health, by combining epigenetics and neuroimaging research.",
      tags: ["Epigenetics", "DNA Methylation", "Neuroimaging", "Development", "Mental Health"],
      funders: ["Various"]
    },
    {
      title: "The EarlyCause consortium: Investigating the lifelong effects of early life stress on health",
      status: "Completed",
      description: "The EarlyCause project studied how early life stress, a well-established risk factor for depressive, cardiovascular and metabolic disorders individually, is a cause of multi-morbidity across these disorders.",
      tags: ["Early Life Stress", "DNA Methylation", "Lifestyle Factors", "Multimorbidity", "Depression", "Cardio-metabolic diseases"],
      funders: ["Horizon2020"]
    }
	
  ];

  return (
    <div className="min-h-screen pt-12 pb-24">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        
        {/* SECTION 1: CORE RESEARCH THEMES */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-serif mb-6 text-foreground">Research Themes</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Our work spans (epi-)genetics, brain imaging, psychopathology, and longitudinal health. We aim to understand how biological mechanisms shape brain structure, psychiatric risk, and health trajectories across the lifespan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {themes.map((theme, index) => (
            <div key={index} className="bg-card p-8 rounded-xl border border-border/50 shadow-sm hover:shadow-md transition-all group">
              <h2 className="text-2xl font-serif mb-4 group-hover:text-primary transition-colors">
                {theme.title}
              </h2>
              <div className="space-y-4">
                <p className="text-base font-medium text-foreground">
                  {theme.description}
                </p>
                <div className="h-px w-12 bg-border/80"></div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {theme.projects}
                </p>
              </div>
            </div>
          ))}
        </div>

        <hr className="border-border/50 mb-24" />

        {/* SECTION 2: RESEARCH PROJECTS */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-6 text-foreground">Research Projects</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Our current funded projects focus on brain health, cognitive impairments in psychosis and the role of DNA methylation in brain development, utilizing large-scale cohorts and cutting-edge computational methods.
          </p>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div key={index} className="group flex flex-col md:flex-row gap-8 pb-16 border-b border-border/50 last:border-0 last:pb-0">
              <div className="md:w-1/3">
                <div className="sticky top-28">
                  <h3 className="text-2xl font-serif mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="flex h-2 w-2 rounded-full bg-green-500"></span>
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