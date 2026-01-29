import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const CALENDLY_URL = "https://calendly.com/coach-martindicovsky/45";

const painPoints = [
  "Priorizás a todos menos a vos",
  "Tus relaciones te drenan en vez de nutrirte",
  "Dependés de la aprobación de otros para sentirte bien",
  "Te cuesta poner límites sin sentir culpa",
  "Sentís que los demás te usan",
  "Procrastinás lo que es importante para vos",

];

const PainSection = () => {
  return (
    <section className="py-20 px-4 bg-card/50">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          ¿Te pasan 
          <span className="text-primary"> estas cosas</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Estos son los síntomas de alguien que necesita sanar su autoestima
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-12">
          {painPoints.map((point, index) => (
            <div 
              key={index}
              className="flex items-start gap-4 p-4 bg-background/50 border border-border rounded-xl hover:border-primary/50 transition-colors duration-300"
            >
              <div className="flex-shrink-0 w-6 h-6 bg-destructive/20 rounded-full flex items-center justify-center mt-0.5">
                <Check className="w-4 h-4 text-destructive" />
              </div>
              <p className="text-foreground">{point}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-muted-foreground mb-6">
          Si te sentís así, no es que te falte voluntad. <br /> Es que te falta un método para recuperar tu valor.<span className="text-foreground font-semibold"> Y esto tiene solución.</span>
          </p>
          <Button 
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            onClick={() => window.open(CALENDLY_URL, "_blank")}
          >
            Quiero recuperar mi confianza y mi valor
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PainSection;
