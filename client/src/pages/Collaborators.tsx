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
      name: "Associate Prof. Charlotte Cecil",
      institution: "Erasmus Medical Centre",
      location: "Rotterdam, Netherlands",
      coordinates: [51.9126, 4.4682] as [number, number]
    },
    {
      name: "Prof. Erin Dunn",
      institution: "Purdue University",
      location: "Indianapolis, USA",
      coordinates: [40.42558371580474, -86.91576065034664] as [number, number]
    },
    {
      name: "Assistant Prof. Alex Lussier",
      institution: "McLean Hospital and Harvard Medical School",
      location: "Boston, USA",
      coordinates: [42.39447201719427, -71.19020667773434] as [number, number]
    },
    {
      name: "Prof. Anthony Isles",
      institution: "Cardiff University",
      location: "Cardiff, UK",
      coordinates: [51.4816, -3.1791] as [number, number]
    },
    {
      name: "Prof. Christian Gaser",
      institution: "Jena University Hospital",
      location: "Jena, Germany",
      coordinates: [50.88541642677033, 11.622163191868582] as [number, number]
    },
    {
      name: "Prof. Jason Lerch",
      institution: "Nuffield Department of Clinical Neurosciences",
      location: "Oxford, UK",
      coordinates: [51.7655195586652, -1.2205305795707353] as [number, number]
    },
    {
      name: "Prof. Neil Davies",
      institution: "UCL",
      location: "London, UK",
      coordinates: [51.526682235073736, -0.13418288926589161] as [number, number]
    },
     {
      name: "Dr. Ville Karhunen",
      institution: "MRC Biostatistics Unit",
      location: "Cambridge, UK",
      coordinates: [52.17344060688156, 0.14451961867822855] as [number, number]
    },
     {
      name: "Prof. Jeffrey Craig & Prof. Tim Silk",
      institution: "Deakin University",
      location: "Melbourne, Australia",
      coordinates: [-38.19, 144.28] as [number, number]
    },
    {
      name: "Prof. Danai Dima",
      institution: "City St George's, University of London",
      location: "London, UK",
      coordinates: [51.52813874045142, -0.10207616549107786] as [number, number]
    },
      {
      name: "Prof. Jessica Turner",
      institution: "Ohio State University",
      location: "Columbus, USA",
      coordinates: [40.00624501394782, -83.02907779585465] as [number, number]
    },
  {
      name: "Prof. Stefan Ehrlich",
      institution: "Technical University Dresden",
      location: "Dresden, Germany",
      coordinates: [51.02874126888428, 13.73181183632488] as [number, number]
    },
  {
      name: "Prof. Gary Donohoe & Prof. Andrew Simpkin",
      institution: "University of Galway",
      location: "Galway, Ireland",
      coordinates: [53.28004576498377, -9.061966541016233] as [number, number]
    },
   {
      name: "Prof. Heather Zar",
      institution: "University of Cape Town",
      location: "Cape Town, South Africa",
      coordinates: [-33.95, 18.46] as [number, number]
    },
   {
      name: "Prof. Giovanni Salum",
      institution: "Universidade Federal do Rio Grande do Sul",
      location: "Porto Alegre, Brazil",
      coordinates: [-30.03, -51.21] as [number, number]
    },
   {
      name: "Prof. Sarah Medland",
      institution: "QIMR Berghofer Medical Research Institute",
      location: "Brisbane, Australia",
      coordinates: [-27.44, 153.02] as [number, number]
    },
   {
      name: "Prof. Paul Thompson",
      institution: "Keck School of Medicine of USC",
      location: "Los Angeles, USA",
      coordinates: [34.05, -118.20] as [number, number]
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
              center={[20.0, 0.0]} // Center to show global map
              zoom={2} 
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
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}