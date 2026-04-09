import heroImage from "@/assets/hero-chauffeur.jpg";

const HeroSection = () => {
  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Premium chauffeur service in Cape Town"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/80" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-up">
        <p className="text-primary font-body tracking-[0.3em] uppercase text-sm mb-6">
          Cape Town's Premier 24/7 Chauffeur Service
        </p>
        <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 text-foreground">
          Driven by{" "}
          <span className="text-gradient-gold">Excellence</span>,
          <br />
          Available Anytime
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light">
          Experience seamless luxury transportation across Cape Town. 
          Professional chauffeurs, premium vehicles, and punctual service — day or night.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={scrollToBooking}
            className="bg-gradient-gold text-primary-foreground px-8 py-4 rounded-md font-body font-semibold text-sm tracking-wider uppercase hover:opacity-90 transition-opacity"
          >
            Book Your Ride
          </button>
          <a
            href="tel:+27000000000"
            className="border border-primary/40 text-primary px-8 py-4 rounded-md font-body font-semibold text-sm tracking-wider uppercase hover:bg-primary/10 transition-colors"
          >
            Call Us 24/7
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
