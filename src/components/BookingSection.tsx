import { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon, Car, Truck, Bus } from "lucide-react";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { toast } from "sonner";

type VehicleType = "sedan" | "suv" | "van";

const vehicles = [
  { type: "sedan" as VehicleType, icon: Car, label: "Sedan", desc: "Up to 3 passengers", price: "From R650" },
  { type: "suv" as VehicleType, icon: Truck, label: "SUV", desc: "Up to 5 passengers", price: "From R950" },
  { type: "van" as VehicleType, icon: Bus, label: "Van", desc: "Up to 10 passengers", price: "From R1,400" },
];

const BookingSection = () => {
  const [vehicle, setVehicle] = useState<VehicleType>("sedan");
  const [date, setDate] = useState<Date>();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!date || !name || !pickup || !dropoff || !time) {
      toast.error("Please fill in all required fields.");
      return;
    }
    toast.success("Booking request submitted! We'll contact you shortly to confirm.");
    setName(""); setEmail(""); setPhone(""); setPickup(""); setDropoff(""); setTime(""); setDate(undefined);
  };

  return (
    <section id="booking" className="py-24 px-4 bg-card">
      <div className="max-w-4xl mx-auto">
        <p className="text-primary text-center tracking-[0.3em] uppercase text-sm mb-4">Reserve Your Ride</p>
        <h2 className="font-heading text-4xl md:text-5xl text-center font-bold mb-16 text-foreground">
          Book Your <span className="text-gradient-gold">Chauffeur</span>
        </h2>

        {/* Vehicle Selection */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {vehicles.map((v) => (
            <button
              key={v.type}
              type="button"
              onClick={() => setVehicle(v.type)}
              className={cn(
                "border rounded-lg p-6 text-center transition-all duration-300",
                vehicle === v.type
                  ? "border-primary bg-primary/10"
                  : "border-border bg-secondary/30 hover:border-muted-foreground/30"
              )}
            >
              <v.icon className={cn("w-10 h-10 mx-auto mb-3 transition-colors", vehicle === v.type ? "text-primary" : "text-muted-foreground")} />
              <h3 className="font-heading text-lg font-semibold text-foreground">{v.label}</h3>
              <p className="text-muted-foreground text-sm">{v.desc}</p>
              <p className={cn("text-sm font-semibold mt-2", vehicle === v.type ? "text-primary" : "text-muted-foreground")}>{v.price}</p>
            </button>
          ))}
        </div>

        {/* Booking Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
                className="w-full bg-secondary/50 border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="john@example.com"
                className="w-full bg-secondary/50 border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Phone *</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+27 XXX XXX XXXX"
                className="w-full bg-secondary/50 border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Pickup Date *</label>
              <Popover>
                <PopoverTrigger asChild>
                  <button
                    type="button"
                    className={cn(
                      "w-full bg-secondary/50 border border-border rounded-md px-4 py-3 text-left flex items-center justify-between focus:outline-none focus:border-primary transition-colors",
                      !date && "text-muted-foreground"
                    )}
                  >
                    {date ? format(date, "PPP") : "Select a date"}
                    <CalendarIcon className="w-4 h-4 text-muted-foreground" />
                  </button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 bg-card border-border" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    disabled={(d) => d < new Date()}
                    initialFocus
                    className="p-3 pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Pickup Time *</label>
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full bg-secondary/50 border border-border rounded-md px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Selected Vehicle</label>
              <div className="w-full bg-secondary/50 border border-border rounded-md px-4 py-3 text-primary font-medium capitalize">
                {vehicle}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Pickup Location *</label>
              <input
                type="text"
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                placeholder="e.g. Cape Town International Airport"
                className="w-full bg-secondary/50 border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Drop-off Location *</label>
              <input
                type="text"
                value={dropoff}
                onChange={(e) => setDropoff(e.target.value)}
                placeholder="e.g. V&A Waterfront"
                className="w-full bg-secondary/50 border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-gold text-primary-foreground py-4 rounded-md font-body font-semibold text-sm tracking-wider uppercase hover:opacity-90 transition-opacity"
          >
            Request Booking
          </button>
        </form>
      </div>
    </section>
  );
};

export default BookingSection;
