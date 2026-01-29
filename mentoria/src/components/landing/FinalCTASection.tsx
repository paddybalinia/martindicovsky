import { ArrowRight, Check, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const CALENDLY_URL = "https://calendly.com/martindicovsky";

const benefits = [
  "Autoestima sólida y genuina",
  "Relaciones equilibradas y sanas",
  "Límites claros sin culpa",
  "Claridad sobre tu propósito",
];

const FinalCTASection = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent" />
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center space-y-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Tu transformación empieza con{" "}
            <span className="text-gradient-cta">una conversación</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            En esta llamada gratuita vamos a conocernos, entender tu situación 
            y ver si la mentoría es lo que necesitás en este momento.
          </p>

          {/* Benefits recap */}
          <div className="flex flex-wrap justify-center gap-4 py-4">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex items-center gap-2 bg-muted/50 px-4 py-2 rounded-full text-sm"
              >
                <Check className="w-4 h-4 text-primary" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          {/* Main CTA */}
          <div className="space-y-4">
            <Button 
              size="lg" 
              className="bg-gradient-cta hover:opacity-90 text-primary-foreground font-bold text-lg px-12 py-7 shadow-glow transition-all duration-300 animate-pulse"
              onClick={() => window.open(CALENDLY_URL, "_blank")}
            >
              Reservá tu lugar ahora
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            {/* Trust signals */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-primary" />
                <span>Sin compromiso</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                <span>30 minutos</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary" />
                <span>100% confidencial</span>
              </div>
            </div>
          </div>

          {/* Urgency */}
          <div className="pt-8">
            <div className="inline-block bg-secondary/20 border border-secondary/50 rounded-xl px-6 py-3">
              <p className="text-secondary font-semibold">
                ⚡ Solo quedan 3 cupos disponibles este mes
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
