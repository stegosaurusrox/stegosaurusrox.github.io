import { Calendar, ArrowRight } from "lucide-react";

export default function News() {
  // Easy to edit news array. Add new items to the top.
  const newsItems = [
    {
      id: 1,
      date: "March 15, 2025",
      title: "BrainHealth Project Kickoff",
      content: [
        "Excited to officially launch the €1.5 million EU-funded BrainHealth project!",
        "Our team will be analyzing data from over 78,000 individuals to track brain health across the lifespan.",
        "Looking forward to collaborating with our partners across Europe."
      ],
      image: null // Add an imported image here if desired, e.g., image: myImage
    },
    {
      id: 2,
      date: "February 28, 2025",
      title: "New Publication in Scientific Reports",
      content: [
        "Congratulations to Faye Sanders and the team on their new paper!",
        "The study uses network analysis to explore how housing quality indicators relate to depression in women.",
        "Check it out on our Publications page."
      ],
      link: "/publications"
    },
    {
      id: 3,
      date: "January 10, 2025",
      title: "Welcome to our new PhD Students",
      content: [
        "A warm welcome to Sorcha Hamilton and Chris Townsend who have joined the lab this month.",
        "Sorcha will be investigating the age-dependent effects of cannabis use using MRI and epigenetic approaches.",
        "Chris will be employing machine learning to map subclinical psychosis."
      ]
    },
    {
      id: 4,
      date: "November 5, 2024",
      title: "ENIGMA Epigenetics Working Group Update",
      content: [
        "Dr. Marlene Staginnus has been appointed as co-chair of the ENIGMA Epigenetics working group.",
        "A fantastic achievement that will help drive forward global collaboration in neuroimaging and epigenetics."
      ]
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
                <div className="w-full h-64 overflow-hidden bg-muted">
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
