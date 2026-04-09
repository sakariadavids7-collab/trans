import { Plane, Briefcase, PartyPopper, Car } from "lucide-react";

const services = [
  { icon: Plane, title: "Airport Transfers", desc: "Stress-free pickups and drop-offs at Cape Town International. Flight tracking included." },
  { icon: Briefcase, title: "Corporate Travel", desc: "Impress clients with reliable, discreet executive transportation solutions." },
  { icon: PartyPopper, title: "Events & Occasions", desc: "Weddings, galas, and special events — arrive in style and comfort." },
  { icon: Car, title: "Private Hire", desc: "City tours, wine routes, and bespoke itineraries tailored to you." },
];

const ServicesSection = () => (
  <section className="py-24 px-4">
    <div className="max-w-6xl mx-auto">
      <p className="text-primary text-center tracking-[0.3em] uppercase text-sm mb-4">Our Services</p>
      <h2 className="font-heading text-4xl md:text-5xl text-center font-bold mb-16 text-foreground">
        Cape Town's Trusted <span className="text-gradient-gold">Chauffeur Experience</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((s) => (
          <div key={s.title} className="flex gap-6 bg-card border border-border rounded-lg p-8 hover:border-primary/40 transition-colors">
            <div className="flex-shrink-0 w-14 h-14 bg-gradient-gold rounded-lg flex items-center justify-center">
              <s.icon className="w-7 h-7 text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-heading text-xl font-semibold mb-2 text-foreground">{s.title}</h3>
              <p className="text-muted-foreground font-light leading-relaxed">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
