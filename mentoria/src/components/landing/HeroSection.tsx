import { ArrowRight, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const CALENDLY_URL = "https://calendly.com/coach-martindicovsky/45";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Authority badge */}
            <div className="inline-flex items-center gap-2 bg-muted/50 border border-border rounded-full px-4 py-2 text-sm">
              <Users className="w-4 h-4 text-primary" />
              <span className="text-muted-foreground">+100 personas ya sanaron su autoestima</span>
            </div>

            {/* Main headline */}
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight">
            
              Dejá de sentirte{" "}
              <span className="text-gradient-cta">invisible:</span>{" "}
              Recuperá tu confianza y conseguí los vínculos que realmente merecés
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
            

              El <span className="text-primary font-semibold">Método S.I.A.</span> te guía paso a paso para recuperar tu amor propio, construir relaciones sanas y priorizarte sin culpa.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-gradient-cta hover:opacity-90 text-primary-foreground font-semibold text-lg px-8 py-6 shadow-glow transition-all duration-300"
                onClick={() => window.open(CALENDLY_URL, "_blank")}
              >
                Agendá tu llamada gratuita
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>

            {/* Urgency text */}
            <p className="text-sm text-muted-foreground">
              <span className="text-secondary font-semibold">⚡ Cupos limitados</span> — Solo sumo 5 personas nuevas cada mes
            </p>
          </div>

          {/* Right content - Photo placeholder */}
          <div className="relative hidden lg:block">
            <div className="relative aspect-[3/4] max-w-md mx-auto">
              {/* Glow effect behind photo */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-3xl blur-3xl" />
              
              {/* Photo placeholder */}
              <div className="relative bg-card border border-border rounded-3xl overflow-hidden h-full flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-16 h-16 text-muted-foreground" />
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Foto profesional de Martín
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
