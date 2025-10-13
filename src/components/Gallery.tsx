import blueRoom from "@/assets/blue-room.jpeg";
import workspaceVault from "@/assets/workspace-vault.jpeg";
import officeVintage from "@/assets/office-vintage.jpeg";

export const Gallery = () => {
  const images = [
    {
      src: blueRoom,
      alt: "Sala VFX Blu con illuminazione RGB e attrezzatura professionale",
      title: "VFX Blue Room"
    },
    {
      src: workspaceVault,
      alt: "Area workspace con soffitti a volta e design industrial",
      title: "Open Space"
    },
    {
      src: officeVintage,
      alt: "Postazione di lavoro con decorazioni vintage e steampunk",
      title: "Creative Desk"
    }
  ];

  return (
    <section id="gallery" className="py-24 bg-secondary/20 scanlines">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-orbitron font-black mb-6">
            <span className="glitch neon-glow" data-text="GALLERY">GALLERY</span>
          </h2>
          <p className="text-xl text-muted-foreground font-inter">
            Esplora i nostri spazi unici
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {images.map((image, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden pixel-corners bg-card animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <div>
                  <h3 className="text-2xl font-orbitron font-bold text-primary mb-2 neon-glow">
                    {image.title}
                  </h3>
                  <div className="w-20 h-1 bg-accent animate-neon-pulse" />
                </div>
              </div>

              {/* Border Effect */}
              <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/50 transition-all duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
