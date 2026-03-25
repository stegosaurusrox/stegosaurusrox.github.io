import estherPortrait from "@assets/esther-portrait2.jpg";
import marlenePortrait from "@assets/image_1773831955808.png";
import fayePortrait from "@assets/image_1773832067639.png";
import zoePortrait from "@assets/image_1773832538100.png";
import viltePortrait from "@assets/image_1773833409747.png";
import sallyPortrait from "@assets/image_1773834250244.png";


export default function Team() {

  const alumni = [
    { name: "Katherine Sawyer", role: "PhD Student (2021-2025)", now: "Postdoc at KCL" },
    { name: "Constantinos Constantinides", role: "PhD Student (2019-2023)", now: "LCP Health Analytics" },
    { name: "Lucy W?, Sophie T?", role: "PhD Student (20??)", now: "Postdoc at xx" }
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
                name: "Dr Marlene Staginnus", 
                role: "Postdoctoral Research Associate", 
                focus: "Biological Psychology", 
                image: marlenePortrait,
                projects: "Marlene is a postdoctoral researcher with a background in Psychology and Neuroscience. Previously, Marlene completed a PhD focusing on links between childhood maltreatment, youth antisocial behaviour and the brain. In her current work, Marlene investigates the relationship between different markers of biological age, as well as their associations with mental ageing to improve our understanding of trajectories of brain health across the lifespan. She is also a co-chair of the ENIGMA-Antisocial Behavior working group.",
                linkedIn: "https://www.linkedin.com/in/marlene-staginnus-b8a3a4150/",
                googleScholar: "https://scholar.google.co.uk/citations?user=JgjEm-wAAAAJ&hl=en"
              },
              { 
                name: "Dr Vilte Baltramonaityte", 
                role: "Postdoctoral Research Associate", 
                focus: "Genetic Psychiatry",
                image: viltePortrait,
                projects: "Vilte is a postdoctoral researcher at the intersection of psychology, genetic epidemiology, and neuroimaging. She completed her PhD at the University of Bath, investigating the link between childhood maltreatment and psycho-cardiometabolic multimorbidity. Her current research examines the shared genetic basis of neuroimaging-based brain age models and applies genetic epidemiology approaches, such as Mendelian randomisation, polygenic scores, and epigenetic analyses, to uncover pathways underlying ageing as well as poor mental and physical health.",
                googleScholar: "https://scholar.google.com/citations?user=I0dZ9fwAAAAJ&hl=en",
                linkedIn: "https://www.linkedin.com/in/vilte-baltramonaityte-2a4317158/",
              },
              { 
                name: "Faye Sanders", 
                role: "PhD Student", 
                focus: "Mental Health & Environments", 
                image: fayePortrait,
                degrees: "BSc Psychology, MSc Clinical Psychology",
                projects: "Exploring the role of DNA methylation in the relationship between housing quality and depressive symptoms. Conducting network analysis to understand the multifactorial causes of mood disorders in women.",
                linkedIn: "https://www.linkedIn.net/",
                googleScholar: "https://scholar.google.com/"
              },
              { 
                name: "Zoe Hart", 
                role: "PhD Student", 
                focus: "Cognitive Aging", 
                image: zoePortrait,
                degrees: "BSc Cognitive Neuroscience, MSc Neuroimaging",
                projects: "Studying how epigenetic age and brain age correlate in young people and their predictive value for future health. Applying machine learning models to functional MRI data to predict cognitive trajectories.",
                linkedIn: "https://www.linkedIn.net/",
                googleScholar: "https://scholar.google.com/"
              },
              { 
                name: "Sally Turner", 
                role: "PhD Student", 
                focus: "Cognitive Psychology", 
                image: sallyPortrait,
                degrees: "BSc Experimental Psychology, MSc Cognitive Science",
                projects: "Investigating the impact of prenatal stress on gestational epigenetic age and neurodevelopmental outcomes. Utilizing longitudinal birth cohort data to track behavioral phenotypes into early childhood.",
                linkedIn: "https://www.linkedIn.net/",
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
              
                    <p className="text-xs mb-3 leading-tight">{member.degrees}</p>
                    
                   
                    <p className="text-xs leading-tight mb-4">{member.projects}</p>
                    
                    {(member.linkedIn || member.googleScholar) && (
                      <div className="mt-auto pt-2 border-t border-primary-foreground/20 flex gap-3">
                        {member.googleScholar && (
                          <a href={member.googleScholar} target="_blank" rel="noreferrer" className="text-xs font-medium hover:text-secondary transition-colors inline-flex items-center">
                            Google Scholar
                          </a>
                        )}
                        {member.linkedIn && (
                          <a href={member.linkedIn} target="_blank" rel="noreferrer" className="text-xs font-medium hover:text-secondary transition-colors inline-flex items-center">
                            LinkedIn
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

