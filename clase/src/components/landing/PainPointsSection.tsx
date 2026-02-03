import { Heart, Shield, AlertCircle, Frown } from "lucide-react";

const PainPointsSection = () => {
  const painPoints = [
    {
      icon: Heart,
      title: "Das demasiado",
      description: "Siempre estás para los demás, pero nadie está cuando lo necesitás (ni vos, para vos).",
    },
    {
      icon: Frown,
      title: "Te cuesta expresarte",
      description: "Cada vez que querés decir que NO, o contar lo que sentís o pensás.",
    },
    {
      icon: AlertCircle,
      title: "Te agotás",
      description: "Siendo el tacho de basura emocional de los demás.",
    },
    {
      icon: Shield,
      title: "Te cuesta poner límites",
      description: "No sabés cómo hacerlo sin sentirte egoísta o mala persona.",
    },
  ];

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          {/* <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            ¿Te identificas con esto?
          </h2> */}
          <p className="text-xl text-muted-foreground">
          Si sos una persona empática, seguro experimentaste esto más de una vez…
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
