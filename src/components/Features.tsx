import { Card } from "@/components/ui/card";
import { Wifi, Coffee, Monitor, Users, Zap, Lock } from "lucide-react";

export const Features = () => {
  const amenities = [
    {
      icon: Zap,
      title: "Accesso 24/7",
      description: "Codice personale per accedere quando vuoi"
    },
    {
      icon: Wifi,
      title: "Wi-Fi Fibra Ultra Veloce",
      description: "Connessione stabile e performante"
    },
    {
      icon: Lock,
      title: "Videosorveglianza",
      description: "Sistema di sicurezza e armadietto personale con chiave"
    },
    {
      icon: Coffee,
      title: "Zona Caffè",
      description: "Macchina caffè, microonde e bollitore"
    },
    {
      icon: Monitor,
      title: "Stampante & Tritacarte",
      description: "Tutto quello di cui hai bisogno per lavorare"
    },
    {
      icon: Users,
      title: "Bagno Privato & Cortile",
      description: "Spazio interno luminoso e silenzioso"
    }
  ];

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-background via-secondary/10 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-orbitron font-black mb-6 neon-glow">
            SERVIZI & FACILITIES
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-inter">
            Tutto ciò di cui hai bisogno per lavorare al meglio
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {amenities.map((amenity, index) => {
            const Icon = amenity.icon;
            return (
              <Card
                key={index}
                className="p-6 bg-card/50 backdrop-blur-sm border-primary/10 hover:border-accent hover:bg-card/80 transition-all duration-300 group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-md group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-lg font-orbitron font-bold mb-2 text-foreground">
                      {amenity.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-inter">
                      {amenity.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
