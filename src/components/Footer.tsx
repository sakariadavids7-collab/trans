import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-card border-t border-border py-16 px-4">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
      <div>
        <h3 className="font-heading text-2xl font-bold text-gradient-gold mb-4">Loovable</h3>
        <p className="text-muted-foreground font-light leading-relaxed">
          Cape Town's trusted 24/7 premium chauffeur service. Luxury travel, on your schedule.
        </p>
      </div>
      <div>
        <h4 className="font-heading text-lg font-semibold text-foreground mb-4">Contact</h4>
        <div className="space-y-3 text-muted-foreground">
          <div className="flex items-center gap-3"><Phone className="w-4 h-4 text-primary" /> +27 (0) 00 000 0000</div>
          <div className="flex items-center gap-3"><Mail className="w-4 h-4 text-primary" /> bookings@loovable.co.za</div>
          <div className="flex items-center gap-3"><MapPin className="w-4 h-4 text-primary" /> Cape Town, South Africa</div>
        </div>
      </div>
      <div>
        <h4 className="font-heading text-lg font-semibold text-foreground mb-4">Services</h4>
        <ul className="space-y-2 text-muted-foreground">
          <li>Airport Transfers</li>
          <li>Corporate Travel</li>
          <li>Events & Occasions</li>
          <li>Private Hire</li>
        </ul>
      </div>
    </div>
    <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-border text-center text-muted-foreground text-sm">
      © {new Date().getFullYear()} Loovable Chauffeur Services. All rights reserved.
    </div>
  </footer>
);

export default Footer;
