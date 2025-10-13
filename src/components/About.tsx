import { Card } from "@/components/ui/card";
import { Cpu, Gamepad2, Sparkles } from "lucide-react";

export const About = () => {
  const features = [
    {
      icon: Cpu,
      title: "Piccolo e Curato",
      description: "Pensato per chi vuole lavorare in serenità, senza l'affollamento dei grandi spazi. Il comfort di casa con la concentrazione di un vero ambiente professionale."
    },
    {
      icon: Gamepad2,
      title: "Nel Cuore di NoLo",
      description: "A pochi passi dalla metro rossa Pasteur e con il tram 1 proprio sotto casa. L'ambiente ideale per freelance, creativi digitali e professionisti."
    },
    {
      icon: Sparkles,
      title: "Blue Space Incluso",
      description: "Un set attrezzato per registrazioni, video call o contenuti digitali. Disponibile una volta a settimana per tutti i membri."
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-orbitron font-black mb-6 neon-glow">
            IL NOSTRO SPAZIO
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-inter">
            Piccolo, silenzioso e curato. Un coworking diverso nel cuore di NoLo, 
            dove puoi costruire i tuoi sogni con tranquillità e concentrazione.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index}
                className="p-8 bg-card border-primary/20 hover:border-primary transition-all duration-500 group pixel-corners animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="mb-6 p-4 bg-primary/10 rounded-lg w-fit group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-orbitron font-bold mb-4 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground font-inter leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
