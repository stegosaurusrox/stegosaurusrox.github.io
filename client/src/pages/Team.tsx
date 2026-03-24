import estherPortrait from "@assets/esther-portrait2.jpg";
import marlenePortrait from "@assets/image_1773831955808.png";
import fayePortrait from "@assets/image_1773832067639.png";
import zoePortrait from "@assets/image_1773832538100.png";
import viltePortrait from "@assets/image_1773833409747.png";
import sallyPortrait from "@assets/image_1773834250244.png";


export default function Team() {

  const alumni = [
    { name: "Dr. James Wilson", role: "Postdoc (2020-2023)", now: "Lecturer at Bristol" },
    { name: "Sarah Chen", role: "PhD Student (2019-2023)", now: "UX Researcher at Google" },
    { name: "Michael O'Connor", role: "MRes Student (2022)", now: "PhD Candidate at UCL" }
  ];

  return (
    <div className="min-h-screen pt-12 pb-24">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <div className="mb-20 text-center">
          <h1 className="text-4xl md:text-5xl font-serif mb-6">Our Team</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We are a diverse group of researchers united by a fascination with the human mind.
          </p>
        </div>

        {/* PI Section */}
        <section className="mb-24">
          <div className="bg-card border rounded-2xl overflow-hidden shadow-sm">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="aspect-square md:aspect-auto md:h-full md:col-span-1">
                <img src={estherPortrait} alt="Dr. Esther" className="w-full h-full object-cover" />
              </div>
              <div className="p-8 md:p-12 space-y-6 md:col-span-2">
                <div>
                  <h2 className="text-3xl font-serif mb-1">Prof. Esther Walton</h2>
                  <p className="text-secondary-foreground font-medium">Principal Investigator / Professor of Biological Psychology</p>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Professor Walton leads research focusing on genetics, epigenetics, and brain imaging to understand mental health and healthy aging.
                  </p>
                  <p>
                    She leads the €1.5 million EU-funded BrainHealth project investigating brain aging and mental health across the lifespan using data from over 78,000 individuals. Her work heavily relies on causal inference methods like Mendelian randomization.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <a href="mailto:esther.walton@bath.ac.uk" className="inline-flex items-center text-sm font-medium text-primary hover:underline">
                    Contact Esther
                  </a>
                  <a href="https://scholar.google.com/citations?user=XgUThnUAAAAJ&hl=en" target="_blank" rel="noreferrer" className="inline-flex items-center text-sm font-medium text-primary hover:underline">
                    Google Scholar
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Current Members */}
        <section className="mb-24">
          <h3 className="text-2xl font-serif mb-8 border-b pb-4">Current Members</h3>
		  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
			
            {[
              { 
                name: "Dr. Marlene Staginnus", 
                role: "Research Associate", 
                focus: "Biological Psychology", 
                image: marlenePortrait,
                degrees: "BSc Psychology, MSc Neuroscience, PhD Biological Psychology",
                projects: "Investigating the neurobiological markers of resilience in aging populations using large-scale MRI datasets. Examining the intersection between early life adversity, epigenetic alterations, and cognitive decline later in life.",
                researchGate: "https://www.researchgate.net/",
                googleScholar: "https://scholar.google.com/"
              },
              { 
                name: "Vilte Baltramonaityte", 
                role: "Research Associate", 
                focus: "Genetic Psychology", 
                image: viltePortrait,
                degrees: "BSc Genetics, MSc Bioinformatics",
                projects: "Analyzing epigenetic markers and DNA methylation patterns associated with psychiatric risk across multiple cohorts. Leveraging genome-wide association studies (GWAS) to pinpoint causal variants in neurodevelopment.",
                researchGate: "https://www.researchgate.net/",
                googleScholar: "https://scholar.google.com/"
              },
              { 
                name: "Faye Sanders", 
                role: "PhD Student", 
                focus: "Mental Health & Environments", 
                image: fayePortrait,
                degrees: "BSc Psychology, MSc Clinical Psychology",
                projects: "Exploring the role of DNA methylation in the relationship between housing quality and depressive symptoms. Conducting network analysis to understand the multifactorial causes of mood disorders in women.",
                researchGate: "https://www.researchgate.net/",
                googleScholar: "https://scholar.google.com/"
              },
              { 
                name: "Zoe Hart", 
                role: "PhD Student", 
                focus: "Cognitive Aging", 
                image: zoePortrait,
                degrees: "BSc Cognitive Neuroscience, MSc Neuroimaging",
                projects: "Studying how epigenetic age and brain age correlate in young people and their predictive value for future health. Applying machine learning models to functional MRI data to predict cognitive trajectories.",
                researchGate: "https://www.researchgate.net/",
                googleScholar: "https://scholar.google.com/"
              },
              { 
                name: "Sally Turner", 
                role: "PhD Student", 
                focus: "Cognitive Psychology", 
                image: sallyPortrait,
                degrees: "BSc Experimental Psychology, MSc Cognitive Science",
                projects: "Investigating the impact of prenatal stress on gestational epigenetic age and neurodevelopmental outcomes. Utilizing longitudinal birth cohort data to track behavioral phenotypes into early childhood.",
                researchGate: "https://www.researchgate.net/",
                googleScholar: "https://scholar.google.com/"
              }
            ].map((member) => (
              <div key={member.name} className="group">
                <div className="aspect-square bg-muted rounded-xl mb-4 overflow-hidden relative">
                  {member.image ? (
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 group-hover:blur-[2px]" />
                  ) : (
                    <div className="absolute inset-0 bg-primary/5 flex items-center justify-center text-primary/20 text-4xl font-serif font-light transition-transform duration-500 group-hover:scale-105 group-hover:blur-[2px]">
                      {member.name.charAt(0)}
                    </div>
                  )}
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-primary/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center p-6 text-primary-foreground overflow-y-auto custom-scrollbar">
                    <p className="text-xs font-semibold uppercase tracking-wider text-secondary mb-1">Education</p>
                    <p className="text-xs mb-3 leading-tight">{member.degrees}</p>
                    
                    <p className="text-xs font-semibold uppercase tracking-wider text-secondary mb-1">Current Focus</p>
                    <p className="text-xs leading-tight mb-4">{member.projects}</p>
                    
                    {(member.researchGate || member.googleScholar) && (
                      <div className="mt-auto pt-2 border-t border-primary-foreground/20 flex gap-3">
                        {member.googleScholar && (
                          <a href={member.googleScholar} target="_blank" rel="noreferrer" className="text-xs font-medium hover:text-secondary transition-colors inline-flex items-center">
                            Google Scholar
                          </a>
                        )}
                        {member.researchGate && (
                          <a href={member.researchGate} target="_blank" rel="noreferrer" className="text-xs font-medium hover:text-secondary transition-colors inline-flex items-center">
                            ResearchGate
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
                <h4 className="text-lg font-serif font-medium group-hover:text-secondary-foreground transition-colors">{member.name}</h4>
                <p className="text-sm font-medium mb-1">{member.role}</p>
                <p className="text-sm text-muted-foreground">Focus: {member.focus}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Alumni */}
        <section>
          <h3 className="text-2xl font-serif mb-8 border-b pb-4">Lab Alumni</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {alumni.map((alum) => (
              <div key={alum.name} className="p-6 bg-card border rounded-xl shadow-sm">
                <h4 className="font-serif font-medium mb-1">{alum.name}</h4>
                <p className="text-sm text-muted-foreground mb-3">{alum.role}</p>
                <p className="text-xs font-medium text-primary">Now: {alum.now}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

