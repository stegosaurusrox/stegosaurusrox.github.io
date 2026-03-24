export default function Research() {
  const themes = [
    {
      title: "Genetics & Epigenetics",
      description: "Understanding how DNA methylation and genetic variation link genes, environment, and behaviour.",
      projects: "Projects include epigenome-wide association studies (EWAS), prenatal and early-life influences on methylation, and epigenetic ageing as a biomarker of mental health risk.",
    },
    {
      title: "Brain Imaging & Neurobiology",
      description: "Integrating molecular data with neuroimaging to map brain structure, function, and ageing.",
      projects: "Focus areas include brain age prediction, structural brain differences in psychiatric disorders, and imaging-genetics studies across large-scale consortia.",
    },
    {
      title: "Psychiatric Disorders & Mental Health",
      description: "Identifying biological mechanisms of schizophrenia, depression, bipolar disorder, and neurodevelopmental traits.",
      projects: "Goals: predict risk, uncover causal pathways, and link environmental exposures to biological outcomes.",
    },
    {
      title: "Biological Ageing & Health Trajectories",
      description: "Exploring how epigenetic and brain ageing markers relate to mental health, cognitive function, and lifespan development.",
      projects: "Projects include comparing epigenetic vs brain age, studying lifestyle impacts, and integrating longitudinal population data.",
    }
  ];

  return (
    <div className="min-h-screen pt-12 pb-24">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-serif mb-6 text-foreground">Core Research Themes</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Prof. Esther Walton leads interdisciplinary research at the intersection of genetics, epigenetics, neuroimaging, and mental health, aiming to understand how biological mechanisms shape brain structure, psychiatric risk, and health trajectories across the lifespan.
          </p>
        </div>

        <div className="mb-16 p-8 bg-primary/5 rounded-2xl border border-primary/10">
          <p className="text-xl font-serif text-primary italic leading-relaxed text-center">
            "Our work integrates multi-cohort genetics, epigenetics, and neuroimaging to reveal how life experiences get 'under the skin', shaping brain biology and psychiatric risk from prenatal life through ageing."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
      </div>
    </div>
  );
}