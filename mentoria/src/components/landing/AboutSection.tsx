import { Award, BookOpen, Heart } from "lucide-react";

const credentials = [
  { icon: Award, text: "Coach certificado en desarrollo personal" },
  { icon: BookOpen, text: "+10 años de experiencia" },
  { icon: Heart, text: "+500 vidas transformadas" },
];

const AboutSection = () => {
  return (
    <section className="py-20 px-4" id="sobre-martin">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl" />
              
              {/* Photo placeholder */}
              <div className="relative bg-card border border-border rounded-3xl overflow-hidden h-full flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-40 h-40 bg-muted rounded-full mx-auto mb-4" />
                  <p className="text-muted-foreground text-sm">
                    Foto de Martín Dicovsky
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">
              Tu guía en este proceso
            </span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Soy <span className="text-gradient-cta">Martín Dicovsky</span>
            </h2>
            
            <div className="space-y-4 text-muted-foreground">
              <p>
                Durante años viví desconectado de mí mismo, priorizando a todos menos a mí, 
                buscando validación externa y sintiéndome vacío aunque "tenía todo".
              </p>
              <p>
                Ese dolor me llevó a un camino de transformación profunda que hoy comparto 
                con quienes están listos para hacer el mismo viaje.
              </p>
              <p className="text-foreground font-medium">
                Mi misión es acompañarte a reconectarte con tu esencia, construir relaciones 
                sanas y vivir una vida que realmente te represente.
              </p>
            </div>

            {/* Credentials */}
            <div className="flex flex-wrap gap-4 pt-4">
              {credentials.map((cred, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2 bg-muted/50 px-4 py-2 rounded-full text-sm"
                >
                  <cred.icon className="w-4 h-4 text-primary" />
                  <span>{cred.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
