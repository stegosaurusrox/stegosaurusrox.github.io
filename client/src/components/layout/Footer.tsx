export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16 mt-24">
      <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="font-serif text-2xl mb-4 text-white">Esther's Lab</h3>
          <p className="text-primary-foreground/70 mb-4 max-w-sm">
            Investigating the genetic, epigenetic, and environmental factors shaping brain health and mental ageing at the University of Bath.
          </p>
        </div>
        <div>
          <h4 className="font-medium mb-4 uppercase tracking-wider text-sm text-secondary">Contact</h4>
          <address className="not-italic text-primary-foreground/70 space-y-2">
            <p>Department of Psychology</p>
            <p>10 West, University of Bath</p>
            <p>Claverton Down</p>
            <p>Bath, BA2 7AY, UK</p>
            <p className="pt-2">estherslab@bath.ac.uk</p>
          </address>
        </div>
        <div>
          <h4 className="font-medium mb-4 uppercase tracking-wider text-sm text-secondary">Links</h4>
          <ul className="space-y-2 text-primary-foreground/70">
            <li><a href="#" className="hover:text-white transition-colors">University of Bath</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Department of Psychology</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Participate in a Study</a></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-8 mt-16 pt-8 border-t border-primary-foreground/10 text-sm text-primary-foreground/50 flex justify-between items-center">
        <p>© {new Date().getFullYear()} Esther's Lab. All rights reserved.</p>
      </div>
    </footer>
  );
}
