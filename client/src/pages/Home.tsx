import { Link } from "wouter";
import { ArrowRight, BrainCircuit, Users, BookOpen } from "lucide-react";
import heroBg from "@/assets/hero-bg.png";
import brainGeneticsPhoto from "@/assets/brain-genetics.png";
import buildingPhoto from "@assets/image_1773832593527.png";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-40 overflow-hidden min-h-[85vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Abstract psychology background" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-in slide-in-from-bottom-8 duration-700 fade-in fill-mode-both">
              <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-primary/20 bg-primary/5 text-primary">
                Biological Psychology Research
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif leading-[1.1] text-foreground">
                Understanding the architecture of the <span className="text-primary italic">human mind.</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                We study how genetic, epigenetic, and environmental factors shape brain health and mental ageing across the lifespan.
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <Link href="/research">
                  <a className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 group shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                    Explore our research
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Link>
                <Link href="/team">
                  <a className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background/50 backdrop-blur-sm hover:bg-accent hover:text-accent-foreground h-12 px-8">
                    Meet the lab
                  </a>
                </Link>
              </div>
              
              <div className="pt-8 border-t border-border/50 flex gap-8">
                <div>
                  <p className="text-3xl font-serif text-primary">60k+</p>
                  <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider mt-1">Individuals Studied</p>
                </div>
                <div>
                  <p className="text-3xl font-serif text-primary">£4.7m</p>
                  <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider mt-1">Funding</p>
                </div>
              </div>
            </div>
            
            {/* Visual element to balance the right side */}
            <div className="hidden lg:block relative h-[500px] w-full animate-in slide-in-from-right-8 duration-1000 delay-300 fade-in fill-mode-both">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-primary/10 to-secondary/20 rounded-full blur-3xl opacity-50" />
              <img 
                src={brainGeneticsPhoto} 
                alt="Brain and Genetics Concept" 
                className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-2xl ring-1 ring-white/10"
              />
              
              {/* Floating badges */}
              <div className="absolute -left-6 top-1/4 bg-background/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-border/50 flex items-center gap-3 animate-in slide-in-from-left-4 duration-700 delay-500 fade-in fill-mode-both">
                <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <BrainCircuit className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Neuroimaging</p>
                  <p className="text-xs text-muted-foreground">Multi-cohort analysis</p>
                </div>
              </div>
              
              <div className="absolute -right-6 bottom-1/6 bg-background/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-border/50 flex items-center gap-3 animate-in slide-in-from-right-4 duration-700 delay-700 fade-in fill-mode-both">
                <div className="h-10 w-10 bg-secondary rounded-full flex items-center justify-center">
                  <Users className="h-5 w-5 text-secondary-foreground" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Lifespan Focus</p>
                  <p className="text-xs text-muted-foreground">Birth to old age</p>
                </div>
			  </div>

              <div className="absolute -left-1/10 bottom-1/20 bg-background/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-border/50 flex items-center gap-3 animate-in slide-in-from-right-4 duration-700 delay-700 fade-in fill-mode-both">
                <div className="h-10 w-10 bg-secondary rounded-full flex items-center justify-center">
                  <BookOpen className="h-5 w-5 text-secondary-foreground" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Epigenetics</p>
                  <p className="text-xs text-muted-foreground">Methylation dynamics</p>
                </div>
			  </div>

              <div className="absolute -right-1/10 top-1/20 bg-background/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-border/50 flex items-center gap-3 animate-in slide-in-from-right-4 duration-700 delay-700 fade-in fill-mode-both">
                <div className="h-10 w-10 bg-secondary rounded-full flex items-center justify-center">
                  <BookOpen className="h-5 w-5 text-secondary-foreground" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Psychopathology</p>
                  <p className="text-xs text-muted-foreground">Psychosis, depression, ADHD</p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Blocks */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-xl shadow-sm border border-border/50 hover:shadow-md transition-shadow">
              <div className="h-12 w-12 bg-secondary rounded-lg flex items-center justify-center mb-6">
                <BrainCircuit className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-serif mb-3">Our Research</h3>
              <p className="text-muted-foreground mb-6 line-clamp-3">
                Discover our latest projects investigating brain aging, epigenetic markers of neurodevelopment, and causal inference in mental health.
              </p>
              <Link href="/research">
                <a className="text-sm font-medium text-primary hover:underline inline-flex items-center">
                  Read more <ArrowRight className="ml-1 h-3 w-3" />
                </a>
              </Link>
            </div>
            
            <div className="bg-card p-8 rounded-xl shadow-sm border border-border/50 hover:shadow-md transition-shadow">
              <div className="h-12 w-12 bg-secondary rounded-lg flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-serif mb-3">The Team</h3>
              <p className="text-muted-foreground mb-6 line-clamp-3">
                Meet the principal investigator, postdoctoral researchers, and graduate students who drive our scientific discoveries.
              </p>
              <Link href="/team">
                <a className="text-sm font-medium text-primary hover:underline inline-flex items-center">
                  Meet the lab <ArrowRight className="ml-1 h-3 w-3" />
                </a>
              </Link>
            </div>

            <div className="bg-card p-8 rounded-xl shadow-sm border border-border/50 hover:shadow-md transition-shadow">
              <div className="h-12 w-12 bg-secondary rounded-lg flex items-center justify-center mb-6">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-serif mb-3">Publications</h3>
              <p className="text-muted-foreground mb-6 line-clamp-3">
                Access our peer-reviewed articles, conference proceedings, and public datasets spanning the last decade of research.
              </p>
              <Link href="/publications">
                <a className="text-sm font-medium text-primary hover:underline inline-flex items-center">
                  View publications <ArrowRight className="ml-1 h-3 w-3" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl relative">
                <img src={buildingPhoto} alt="University of Bath Building" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-secondary p-6 rounded-xl shadow-lg hidden md:block max-w-xs">
                <p className="font-serif italic text-slate-900/80 text-lg">
                  "We need to find better ways of supporting people to live longer, healthier, and happier lives."
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif">Welcome to our laboratory</h2>
              <p className="text-muted-foreground text-lg">
                Located in the Department of Psychology at the University of Bath, our lab provides a collaborative environment for innovative research in biological psychology.
              </p>
              <p className="text-muted-foreground">
                We employ a multi-method approach, combining genetic and epigenetic analyses, neuroimaging techniques, and advanced causal inference methods (such as Mendelian randomization) to unpack the complex mechanisms underlying human brain health across the lifespan.
              </p>
              <p className="text-muted-foreground">
                We are actively analyzing large-scale multi-cohort data and welcome inquiries from prospective graduate students and postdoctoral researchers.
              </p>
              <div className="pt-4">
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
