import estherPortrait from "@assets/esther-portrait2.jpg";
import marlenePortrait from "@assets/image_1773831955808.png";
import fayePortrait from "@assets/image_1773832067639.png";
import zoePortrait from "@assets/image_1773832538100.png";
import viltePortrait from "@assets/image_1773833409747.png";
import sallyPortrait from "@assets/image_1773834250244.png";
import sorchaPortrait from "@assets/image_1773834250245.png";
import chrisPortrait from "@assets/image_1773834250246.png";
import rosalynPortrait from "@assets/image_1773834250247.png";
import emilyPortrait from "@assets/image_1773834250248.png";
import katiePortrait from "@assets/image_1773834250254.png";


export default function Team() {

  const alumni = [
    { name: "Katherine Sawyer", role: "PhD Student (2021-2025)", now: "Postdoc at KCL" },
    { name: "Constantinos Constantinides", role: "PhD Student (2019-2023)", now: "LCP Health Analytics" },
    { name: "Lucy Waldren", role: "PhD Student (2021-2024)", now: "Postdoc at Bath" },
	{ name: "Sophie Townend", role: "PhD Student (2022-2025)", now: "Postdoc at Bath" },
	{ name: "Shir Dahan", role: "Visiting Researcher (2025)", now: "PhD in Galway" },
	{ name: "Jola Layinka", role: "PhD Student (2023-2026)", now: "Acaster Lloyd" },
	{ name: "Tatiana Stratton", role: "MSc Student (2022-2023)", now: "Hollyport" },
	{ name: "Georgia Zavitsanou", role: "MSc Student (2020-2021)", now: "DClin UCL" }
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
                    She focusses on traits including depression, hyperactivity and cognition as well as mental health conditions such as anorexia nervosa and schizophrenia. As a co-director of the MIND consortium and as an active member of several ENIGMA working groups, she has a long track record of investigating brain imaging correlates of mental health conditions and how these link to genetic and epigenetic markers, in the context of development and aging. Her research is funded by Wellcome, UKRI and the EU.

                  </p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <a href="mailto:e.walton@bath.ac.uk" className="inline-flex items-center text-sm font-medium text-primary hover:underline">
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
                name: "Dr Emily Taylor", 
                role: "Lab Manager",
                image: emilyPortrait
              },
              { 
                name: "Faye Sanders", 
                role: "PhD Student", 
                focus: "Mental Health & Environments", 
                image: fayePortrait,
                projects: "Faye is a PhD student focusing on the relationships between living environments, mental health and biological age. For example, Faye has researched relationships between poor housing quality, DNA methylation and depression. Faye’s current work looks at how features of the built environment, including green space and building density, associate with depression in adults and biological age in young people. Her work has informed changes to the Decent Homes Standard and has been used as evidence in House of Lords inquiries into the building of new towns. Faye is also Co-Chair of the Housing Studies Association’s Healthy Homes Research Network.",
                linkedIn: "https://www.linkedin.com/in/faye-sanders/",
                googleScholar: "https://scholar.google.com/citations?user=3tIILZ8AAAAJ&hl=en"
              },
              { 
                name: "Zoe Hart", 
                role: "PhD Student", 
                focus: "Cognitive Aging in Psychosis", 
                image: zoePortrait,
                projects: "Zoe is a PhD student with a background in cognitive neuroscience and psychology. She is currently researching development of cognitive impairments in psychosis, with a focus on early life and epigenetic markers. More broadly, Zoe is interested in utilising longitudinal datasets to investigate how environmental and biological markers across development may help us predict later mental/brain health outcomes.",
                linkedIn: "linkedin.com/in/zoe-hart-0242b61b7"
              },
			                { 
                name: "Sorcha Hamilton", 
                role: "PhD Student", 
                focus: "Substance use and Neurodevelopment", 
                image: sorchaPortrait,
                projects: "Sorcha is a GW4 PhD student with a background in Neuroscience and Neuroimaging. She has a strong interest in adolescent neurodevelopment and psychopharmacology. Her current research combines MRI neuroimaging and epigenetic approaches to investigate the age-dependent effects of cannabis use. Specifically, her PhD examines whether adolescents are more sensitive than adults to cannabis-related changes in working memory function, white matter microstructure, and epigenetic ageing.",
                linkedIn: "www.linkedin.com/in/sorcha-hamilton-242112117",
                googleScholar: "https://scholar.google.com/citations?user=WLiqDS8AAAAJ&hl=en"
              },
              { 
                name: "Chris Townsend", 
                role: "PhD Student", 
                focus: "Computational Neuroimaging in Psychosis", 
                image: chrisPortrait,
                projects: "Chris is a PhD student investigating cognitive impairments in psychotic disorders through computational neuroimaging. Within the ENIGMA Consortium, his current project employs developmentally informed machine learning to map subclinical psychosis. Chris’s future work seeks to integrate multi-omics data, including proteomics, using normative modelling and data-driven subtyping to identify cognitive signatures of psychosis. Interested in bridging computational psychiatry and neuroimaging, Chris aims to refine the classification, prediction, and treatment of psychiatric disorders.",
                linkedIn: "https://www.linkedin.com/in/chris-townsend-5614a8171/",
                googleScholar: "https://scholar.google.com/citations?user=Ttbr0BIAAAAJ&hl=en&oi=sra"
              },
              { 
                name: "Sally Turner", 
                role: "PhD Student", 
                focus: "Substance use and ADHD", 
                image: sallyPortrait,
				        projects: "Sally is a PhD student with expertise in experimental psychology and psychopharmacology. Sally’s PhD research focusses on the psychobiological harms and medicinal potential of cannabis among people with and without ADHD. Sally uses a multidisciplinary approach, combining experimental, observational, longitudinal, genetic, and epigenetic methods. She is broadly interested in (1) the genetic and epigenetic underpinnings and outcomes of drug use, (2) the intersectionality between mental health, neurodevelopmental disorders, and drug use, and (3) the therapeutic potential of traditionally recreational drugs.",
				        orcid: "https://orcid.org/0000-0001-8023-6512",
                researchGate: "https://www.researchgate.net/profile/Sally-Turner-7?ev=hdr_xprf"
              },
              { 
                name: "Katie Koziell", 
                role: "PhD Student", 
                focus: "Rodent Model of BrainHealth"
        				projects: "Katie is a PhD student interested in exploring the relationship between physical and mental health during ageing. Her research focuses on how altered metabolism impacts the brain and peripheral health with age, using a mouse model of Grb10. To investigate this, she employs an interdisciplinary approach combining neuroimaging, epigenetics, transcriptomics and histological analyses to characterise age-related changes across tissues. Through this work, she aims to elucidate how closely brain and peripheral health are linked during ageing, and whether these changes are tissue-specific or system-wide.",
				        linkedIn: "https://www.linkedin.com/in/katarina-koziell-6133383b7/"
              },
              { 
                name: "Rosalyn Acevedo", 
                role: "PhD Student", 
                focus: "Role of Hyaluronan in Cognition", 
                image: rosalynPortrait,
				        projects: "Rosalyn is a PhD student investigating the role of the extracellular matrix component hyaluronan in cognition across lifespan. Her research explores how hyaluronan production changes with age and in response to cognitive challenge, and whether these changes are regulated by epigenetic mechanisms, linking environmental influences, ageing and cognitive health. To address these questions, Rosalyn combines molecular biology techniques with rodent behavioural experiments and analysis of long-term human cohort datasets."
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
                    
                    {(member.linkedIn || member.googleScholar || member.orcid || member.researchGate) && (
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
						{member.orcid && (
                          <a href={member.orcid} target="_blank" rel="noreferrer" className="text-xs font-medium hover:text-secondary transition-colors inline-flex items-center">
                            ORCiD
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

