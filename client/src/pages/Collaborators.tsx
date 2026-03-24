import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icons in React-Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

export default function Collaborators() {
  const collaborators = [
    {
      name: "Dr. Sarah Johnson",
      institution: "Cardiff University",
      location: "Cardiff, UK",
      coordinates: [51.4816, -3.1791] as [number, number],
      role: "Co-Investigator, BrainHealth Project",
      focus: "Neuroimaging Data Harmonization"
    },
    {
      name: "Prof. Michael van der Veen",
      institution: "Erasmus Medical Centre",
      location: "Rotterdam, Netherlands",
      coordinates: [51.9126, 4.4682] as [number, number],
      role: "Key Collaborator",
      focus: "Population Genetics & Lifespan Cohorts"
    },
    {
      name: "Dr. Jan Novak",
      institution: "National Institute of Mental Health",
      location: "Prague, Czech Republic",
      coordinates: [50.1802, 14.4447] as [number, number],
      role: "Research Partner",
      focus: "Clinical Psychiatry & Biomarkers"
    },
    {
      name: "Prof. Amanda Lussier",
      institution: "Massachusetts General Hospital",
      location: "Boston, USA",
      coordinates: [42.3620, -71.0694] as [number, number],
      role: "Epigenetics Advisor",
      focus: "DNA Methylation Clocks"
    },
    {
      name: "Dr. Thomas Berg",
      institution: "Max Planck Institute",
      location: "Leipzig, Germany",
      coordinates: [51.3397, 12.3731] as [number, number],
      role: "Computational Consultant",
      focus: "Machine Learning & Brain Age Models"
    },
    {
      name: "Prof. George Donohoe",
      institution: "University of Galway",
      location: "Galway, Ireland",
      coordinates: [53.2783, -9.0601] as [number, number],
      role: "Research Partner",
      focus: "Genomic Risk & Cognitive Function"
    }
  ];

  return (
    <div className="min-h-screen pt-12 pb-24">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif mb-6">Global Collaborators</h1>
          <p className="text-xl text-muted-foreground">
            Our research is driven by strong international partnerships. We collaborate with leading institutions across the globe to leverage multi-cohort datasets and cross-disciplinary expertise.
          </p>
        </div>

        {/* Map Section */}
        <section className="mb-24">
          <div className="bg-card border rounded-2xl overflow-hidden shadow-sm h-[500px] md:h-[600px] relative z-0">
            <MapContainer 
              center={[48.0, 5.0]} // Center around Europe
              zoom={4} 
              scrollWheelZoom={false}
              className="h-full w-full"
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" // Clean, light basemap
              />
              
              {collaborators.map((collab, idx) => (
                <Marker key={idx} position={collab.coordinates}>
                  <Popup className="font-sans">
                    <div className="p-1">
                      <h4 className="font-semibold text-primary">{collab.name}</h4>
                      <p className="text-sm font-medium text-secondary-foreground mb-1">{collab.institution}</p>
                      <p className="text-xs text-muted-foreground mb-2">{collab.location}</p>
                      <p className="text-xs border-t pt-2 mt-2"><strong>Focus:</strong> {collab.focus}</p>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </section>

        {/* Directory Section */}
        <section>
          <h3 className="text-2xl font-serif mb-8 border-b pb-4">Partner Institutions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {collaborators.map((collab, idx) => (
              <div key={idx} className="p-6 bg-card border rounded-xl shadow-sm hover:shadow-md transition-shadow group">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="font-serif font-medium text-lg group-hover:text-primary transition-colors">{collab.institution}</h4>
                    <p className="text-sm text-muted-foreground">{collab.location}</p>
                  </div>
                </div>
                <div className="space-y-1 border-t border-border/50 pt-4 mt-4">
                  <p className="text-sm font-medium text-foreground">{collab.name}</p>
                  <p className="text-xs text-secondary-foreground">{collab.role}</p>
                  <p className="text-xs text-muted-foreground mt-2 block">{collab.focus}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}