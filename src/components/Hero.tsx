import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import blueRoom from "@/assets/blue-room.jpeg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden scanlines">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${blueRoom})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in-up">
        <h1 
          className="text-6xl md:text-8xl font-orbitron font-black mb-6 glitch neon-glow"
          data-text="WEE SPACE"
        >
          WEE SPACE
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto font-inter">
          La tua seconda casa. Accesso 24/7, tranquillità e spazio per costruire i tuoi sogni.
          <span className="block mt-2 text-accent animate-neon-pulse">
            Un coworking diverso, nel cuore di NoLo (Milano)
          </span>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="group font-orbitron text-lg px-8 py-6 neon-box bg-primary hover:bg-primary/90 transition-all duration-300"
          >
            Scopri lo Spazio
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="font-orbitron text-lg px-8 py-6 border-primary text-primary hover:bg-primary/10 transition-all duration-300"
          >
            Contattaci
          </Button>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-neon-pulse" />
    </section>
  );
};
