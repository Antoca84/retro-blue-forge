import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Zap } from "lucide-react";

export const Pricing = () => {
  const plans = [
    {
      name: "Smart Desk",
      originalPrice: "189",
      price: "150",
      description: "La tua postazione personale in area condivisa",
      features: [
        "Mezza scrivania dedicata",
        "Perfetta per freelance e creativi",
        "Blue Space 1 volta/settimana",
        "Tutti i servizi inclusi"
      ]
    },
    {
      name: "Full Desk",
      originalPrice: "289",
      price: "229",
      description: "Una scrivania intera solo per te",
      features: [
        "Scrivania intera dedicata",
        "Spazio per monitor e materiali",
        "Il tuo angolo stabile",
        "Blue Space 1 volta/settimana",
        "Tutti i servizi inclusi"
      ],
      featured: true
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-orbitron font-black mb-6 neon-glow">
            DUE FORMULE DI LAVORO
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-inter">
            Scegli la soluzione più adatta alle tue esigenze
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative p-8 bg-card transition-all duration-500 group animate-fade-in-up overflow-hidden ${
                plan.featured
                  ? 'border-primary border-2 neon-box'
                  : 'border-primary/20 hover:border-primary/50'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Discount badge */}
              <div className="absolute top-4 right-4">
                <Badge className="bg-primary text-primary-foreground font-orbitron text-sm px-3 py-1 neon-box flex items-center gap-1">
                  <Zap className="w-3 h-3" />
                  -20%
                </Badge>
              </div>

              <div className="text-center mb-6">
                <h3 className="text-3xl font-orbitron font-black mb-2 text-foreground">
                  {plan.name}
                </h3>
                <p className="text-muted-foreground font-inter mb-4">
                  {plan.description}
                </p>
                <div className="mb-2">
                  <span className="text-2xl font-orbitron line-through text-muted-foreground/50">
                    €{plan.originalPrice}
                  </span>
                </div>
                <div className="mb-6">
                  <span className="text-5xl font-orbitron font-black text-primary neon-glow">
                    €{plan.price}
                  </span>
                  <span className="text-muted-foreground font-inter">/mese</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 font-inter">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                size="lg"
                asChild
                className={`w-full font-orbitron text-lg py-6 transition-all duration-300 ${
                  plan.featured
                    ? 'neon-box bg-primary hover:bg-primary/90'
                    : 'bg-primary/80 hover:bg-primary'
                }`}
              >
                <a href="https://form.venini59.com" target="_blank" rel="noopener noreferrer">
                  Richiedi Informazioni
                </a>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};