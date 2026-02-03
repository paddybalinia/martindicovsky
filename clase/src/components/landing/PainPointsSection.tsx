import { Heart, Shield, AlertCircle, Frown } from "lucide-react";

const PainPointsSection = () => {
  const painPoints = [
    {
      icon: Heart,
      title: "Das demasiado",
      description: "Siempre estás disponible para los demás, pero cuando tú necesitas algo, no hay nadie.",
    },
    {
      icon: Frown,
      title: "Te sientes culpable",
      description: "Cada vez que intentas decir 'no', la culpa te invade y terminas cediendo.",
    },
    {
      icon: AlertCircle,
      title: "Estás agotado/a",
      description: "Cargas con las emociones de todos y al final del día no te queda energía para ti.",
    },
    {
      icon: Shield,
      title: "No sabes poner límites",
      description: "Quieres protegerte, pero no sabes cómo hacerlo sin parecer frío/a o egoísta.",
    },
  ];

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            ¿Te identificas con esto?
          </h2>
          <p className="text-xl text-muted-foreground">
            Si eres una persona empática, probablemente has experimentado esto más de una vez...
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="group p-8 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:bg-card/80"
            >
              <div className="flex items-start gap-5">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                  <point.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-semibold mb-2">
                    {point.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-xl md:text-2xl font-display text-primary">
            No estás solo/a. Y la buena noticia es que <span className="font-bold">hay una salida</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;
