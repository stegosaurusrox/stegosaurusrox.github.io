export default function Publications() {
  const publications = [
    {
      year: "2025",
      papers: [
        {
          title: "Associations between epigenetic age and brain age in young people",
          authors: "Sanders, F., Baltramonaityte, V., Donohoe, G., et al.",
          journal: "Scientific Reports",
          link: "https://www.nature.com/articles/s41598-025-00000-0"
        },
        {
          title: "Home and epigenome: exploring the role of DNA methylation in the relationship between poor housing quality and depressive symptoms",
          authors: "Sanders, F., Baltramonaityte, V., Lussier, A.A., et al.",
          journal: "BMJ Public Health",
          link: "https://bmjpublichealth.bmj.com/"
        },
        {
          title: "A network analysis of housing quality indicators and depression in women",
          authors: "Sanders, F., Waldren, L.H., Baltramonaityte, V., et al.",
          journal: "Scientific Reports",
          link: "https://www.nature.com/articles/s41598-024-81781-8"
        },
        {
          title: "Prenatal stress and gestational epigenetic age: No evidence of association in three population-based cohorts",
          authors: "Salontaji, K., Smajlagic, D., Page, C., Sanders, F., et al.",
          journal: "Epigenetics",
          link: "#"
        }
      ]
    },
    {
      year: "2023",
      papers: [
        {
          title: "A systematic review of neuroimaging epigenetic research: calling for an increased focus on development",
          authors: "Walton, E., Baltramonaityte, V., Calhoun, V., et al.",
          journal: "PubMed",
          link: "https://pubmed.ncbi.nlm.nih.gov/37185958/"
        }
      ]
    },
    {
      year: "Selected Key Publications",
      papers: [
        {
          title: "Using Openly Accessible Resources to Strengthen Causal Inference in Epigenetic Epidemiology of Neurodevelopment and Mental Health",
          authors: "Walton, E., et al.",
          journal: "PubMed",
          link: "https://pubmed.ncbi.nlm.nih.gov/30832291/"
        },
        {
          title: "Prenatal and childhood DNA methylation associations with brain structure and mental health",
          authors: "Schuurmans, I. K., Mulder, R. H., Baltramonaityte, V., et al. & Walton, E.",
          journal: "Multi-cohort epigenetic-neuroimaging study",
          link: "https://researchportal.bath.ac.uk/en/persons/esther-walton/"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-12 pb-24">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-serif mb-6">Publications</h1>
          <p className="text-xl text-muted-foreground">
            Selected peer-reviewed articles from our laboratory.
          </p>
        </div>

        <div className="space-y-16">
          {publications.map((group) => (
            <section key={group.year}>
              <h2 className="text-3xl font-serif mb-8 text-secondary-foreground border-b pb-2 inline-block">{group.year}</h2>
              <div className="space-y-8">
                {group.papers.map((paper, idx) => (
                  <div key={idx} className="group">
                    <h3 className="text-lg font-medium leading-snug mb-2 group-hover:text-secondary-foreground transition-colors">
                      {paper.title}
                    </h3>
                    <p className="text-muted-foreground mb-1">
                      {paper.authors}
                    </p>
                    <p className="text-sm font-serif italic text-primary">
                      {paper.journal}
                    </p>
                    <div className="mt-3 flex gap-4">
                      <a href={paper.link} className="text-xs font-medium uppercase tracking-wider hover:text-secondary-foreground flex items-center">
                        [ PDF ]
                      </a>
                      <a href={paper.link} className="text-xs font-medium uppercase tracking-wider hover:text-secondary-foreground flex items-center">
                        [ Data ]
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
