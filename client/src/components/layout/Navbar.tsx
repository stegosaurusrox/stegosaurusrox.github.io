import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [location] = useLocation();

  const links = [
    { href: "/", label: "Home" },
    { href: "/news", label: "News" },
    { href: "/research", label: "Research" },
    { href: "/team", label: "Team" },
    { href: "/publications", label: "Publications" },
    { href: "/collaborators", label: "Collaborators" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        <Link href="/">
          <a className="flex flex-col">
            <span className="font-serif text-2xl font-semibold leading-none text-primary">Esther's Lab</span>
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest mt-1">University of Bath</span>
          </a>
        </Link>
        <div className="hidden md:flex gap-8">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <a
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary relative py-2",
                  location === link.href ? "text-primary" : "text-muted-foreground"
                )}
              >
                {link.label}
                {location === link.href && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full" />
                )}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
