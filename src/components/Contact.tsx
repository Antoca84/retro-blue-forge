import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-t from-secondary/20 to-background scanlines">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-orbitron font-black mb-6">
              <span className="glitch neon-glow" data-text="CONTATTACI">CONTATTACI</span>
            </h2>
            <p className="text-xl text-muted-foreground font-inter">
              Vieni a scoprire il tuo nuovo spazio di lavoro
            </p>
          </div>

          <Card className="p-8 md:p-12 bg-card border-primary/20 neon-box animate-fade-in-up">
            <div className="space-y-8">
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-primary/10 rounded-md group-hover:bg-primary/20 transition-colors">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-orbitron font-bold mb-2 text-foreground">
                    Posizione
                  </h3>
                  <p className="text-muted-foreground font-inter">
                    NoLo, Milano<br />
                    Metro Pasteur (MM1) • Tram 1
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-primary/20">
                <Button 
                  size="lg"
                  asChild
                  className="w-full font-orbitron text-lg py-6 neon-box bg-primary hover:bg-primary/90 transition-all duration-300"
                >
                  <a href="https://form.venini59.com" target="_blank" rel="noopener noreferrer">
                    Compila il Form di Contatto
                  </a>
                </Button>
              </div>
            </div>
          </Card>

          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground font-inter">
              Accesso 24/7 per i membri
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
