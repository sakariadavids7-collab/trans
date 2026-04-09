import { Clock, Shield, MapPin, Star, Users, Car } from "lucide-react";

const features = [
  { icon: Clock, title: "24/7 Availability", desc: "Round-the-clock service, whenever you need us" },
  { icon: Shield, title: "Safety First", desc: "Vetted, professional drivers with pristine records" },
  { icon: MapPin, title: "Cape Town Wide", desc: "Full coverage across the Mother City and beyond" },
  { icon: Star, title: "Premium Fleet", desc: "Luxury sedans, SUVs, and vans meticulously maintained" },
  { icon: Users, title: "Corporate Ready", desc: "Tailored solutions for business travel needs" },
  { icon: Car, title: "Punctual Service", desc: "We arrive early so you're never late" },
];

const FeaturesSection = () => (
  <section className="py-24 px-4 bg-card">
    <div className="max-w-6xl mx-auto">
      <p className="text-primary text-center tracking-[0.3em] uppercase text-sm mb-4">Why Choose Us</p>
      <h2 className="font-heading text-4xl md:text-5xl text-center font-bold mb-16 text-foreground">
        Luxury Travel, <span className="text-gradient-gold">On Your Schedule</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((f) => (
          <div key={f.title} className="bg-secondary/50 border border-border rounded-lg p-8 hover:border-primary/40 transition-colors group">
            <f.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-heading text-xl font-semibold mb-2 text-foreground">{f.title}</h3>
            <p className="text-muted-foreground font-light">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
