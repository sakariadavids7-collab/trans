import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">
        <a href="/" className="font-heading text-2xl font-bold text-gradient-gold">
          Q Transport
        </a>
        <div className="hidden md:flex items-center gap-8">
          {["services", "booking"].map((s) => (
            <button key={s} onClick={() => scrollTo(s)} className="text-muted-foreground hover:text-primary transition-colors text-sm uppercase tracking-wider">
              {s}
            </button>
          ))}
          <a href="tel:+27000000000" className="bg-gradient-gold text-primary-foreground px-5 py-2 rounded-md text-sm font-semibold uppercase tracking-wider hover:opacity-90 transition-opacity">
            Call Now
          </a>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-card border-t border-border px-4 py-6 space-y-4">
          {["services", "booking"].map((s) => (
            <button key={s} onClick={() => scrollTo(s)} className="block text-muted-foreground hover:text-primary transition-colors text-sm uppercase tracking-wider">
              {s}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
