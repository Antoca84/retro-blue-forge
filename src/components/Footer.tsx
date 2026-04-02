export const Footer = () => {
  return (
    <footer className="bg-secondary/20 border-t border-primary/20 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <h3 className="font-orbitron font-bold text-xl text-primary neon-glow mb-2">
              WEE SPACE
            </h3>
            <p className="text-sm text-muted-foreground font-inter">
              Coworking NoLo • Milano
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground font-inter">
              © 2026 Wee Space. Tutti i diritti riservati.
            </p>
          </div>
        </div>
        
        <div className="mt-6 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-neon-pulse" />
      </div>
    </footer>
  );
};
