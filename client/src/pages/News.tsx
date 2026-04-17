import { Calendar, ArrowRight } from "lucide-react";
import ohbmImage from "@assets/image_1776171082134.png";
import imgcImage from "@assets/image_1773834250249.png";
import vivaImage from "@assets/image_1773834250250.png";
import housingfilmImage from "@assets/image_1773834250251b.png";
import retreatImage from "@assets/image_1773834250252b.png";
import xmasImage from "@assets/image_1773834250253.png";
import wcpgImage from "@assets/image_1773834250254.png";



export default function News() {
  // Easy to edit news array. Add new items to the top.
  const newsItems = [
    {
      id: 8,
      date: "April, 2026",
      title: "Lab presents at IMGC Conference",
      content: [
        "Katie Koziell attended the  International Mammalian Genome conference (IMGC) in Reykjavík, Iceland. She presented her latest study on the relationship between brain health and peripheral health during ageing.",
        "Great conversations and feedback from the community!"
      ],
      image: imgcImage
    },
    {
      id: 7,
      date: "December, 2025",
      title: "Film screening",
      content: [
        "Over the past year, Faye Sanders has been working on a film about 'Housing and Health' alongside her PhD, travelling across the country to interview experts in housing and health, as well as hearing directly from people about their lived experiences. Her film helps to better understand the current state of housing in the UK, its impact on health, and highlights the stories that too often go unheard.",
        "Well done, Faye!"
      ],
      image: housingfilmImage
    },
    
    {
      id: 6,
      date: "November, 2025",
      title: "Viva success",
      content: [
        "Huge congratulations to Katherine Sawyer, who passed her Viva with great success. In her research, Katherine focussed on harnessing mental health and neuroscience evidence for tobacco and cannabis health messaging.",
        "We're all so proud of Katherine and wish her all the best for the future."
      ],
      image: vivaImage
    },
    {
      id: 1,
      date: "September, 2025",
      title: "Welcome to our new PhD Students",
      content: [
        "A warm welcome to Zoe Hart and Chris Townsend who have joined the lab this month.",
        "Zoe will be investigating time-dependent effects and sensitive periods between epigenetics and psychosis. Chris will be employing machine learning to map structural brain deviations to psychosis risk."
      ]
    },
    {
      id: 3,
      date: "August, 2025",
      title: "'Unlocking cognitive health in psychosis' Project Start",
      content: [
        "We official started our £3.5 million Wellcome-funded project to tackle cognitive impairment in psychotic disorders. We will work with lived experience experts, combine advanced computational brain imaging methods with experimental preclinical models to pave the way for earlier interventions, better treatments, and a deeper understanding of cognitive decline in psychotic disorders."
      ],
      image: null // Add an imported image here if desired, e.g., image: myImage
    },
    {
      id: 5,
      date: "March, 2025",
      title: "Lab writing retreat",
      content: [
        "We had a great time at our recent writing retreat. Perfect mix of focussed writing, great food and lots of fun.",
        "Shout out to a fantastic team that made this experience super enjoyable."
      ],
      image: retreatImage
    },
    {
      id: 5,
      date: "February, 2025",
      title: "Post-Christmas board game social",
      content: [
        "How controversial - we decided to have our Christmas party in February, to give us all a lift-up during those grey winter months.",
        "Great games and food. Merry Christmas!"
      ],
      image: xmasImage
    },
    {
      id: 3,
      date: "October, 2024",
      title: "Lab trip to WCPG in Singapore",
      content: [
        "Great science at this year's World Congress of Psychiatric Genetics.",
        "Amazing presentations by Vilte and Faye on their latest research, with time for spare for catching up with colleagues from across the globe.",
      ],
      image: wcpgImage // Add an imported image here if desired, e.g., image: myImage
    },
    {
      id: 3,
      date: "October, 2023",
      title: "BrainHealth Project Kickoff",
      content: [
        "Excited to officially launch the €1.5 million EU-funded BrainHealth project!",
        "Our team will be analyzing large-scale genetic, epigenetic and MRI data to track brain health across the lifespan.",
        "Looking forward to collaborating with our partners across Europe."
      ],
      image: null // Add an imported image here if desired, e.g., image: myImage
    }
  ];

  return (
    <div className="min-h-screen pt-12 pb-24 bg-muted/20">
      <div className="container mx-auto px-4 md:px-8 max-w-3xl">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-serif mb-4 text-foreground">Latest News</h1>
          <p className="text-xl text-muted-foreground">
            Updates, publications, and announcements from the lab.
          </p>
        </div>

        <div className="space-y-8">
          {newsItems.map((item) => (
            <article 
              key={item.id} 
              className="bg-card rounded-2xl border border-border/50 shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              {item.image && (
                <div className="w-full aspect-[2/1] overflow-hidden bg-muted">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                </div>
              )}
              
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Calendar className="h-4 w-4" />
                  <time>{item.date}</time>
                </div>
                
                <h2 className="text-2xl font-serif mb-4 text-foreground">
                  {item.title}
                </h2>
                
                <div className="space-y-3 text-muted-foreground leading-relaxed">
                  {item.content.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>

                {item.link && (
                  <div className="mt-6 pt-4 border-t border-border/50">
                    <a 
                      href={item.link}
                      className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                    >
                      Read more <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
