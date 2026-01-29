import { Sparkles, Heart, Target } from "lucide-react";


const methodSteps = [
  {
    letter: "S",
    title: "Sanación",
    description: "Identificamos y sanamos las heridas emocionales que te mantienen estancado/a",
    icon: Heart,
    color: "text-pink-400",
  },
  {
    letter: "I",
    title: "Identidad",
    description: "Vas a encontrar tu verdadero valor y potenciarlo con poderosos hábitos. ",
    icon: Sparkles,
    color: "text-primary",
  },
  {
    letter: "A",
    title: "Acción",
    description: "Aplicamos poderosas herramientas prácticas para priorizarte sin culpa y tener relaciones sanas y recíprocas.",
    icon: Target,
    color: "text-secondary",
  },
];

const MethodSection = () => {
  return (
    <section className="py-20 px-4" id="metodo">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
          Basta de humo, resultados reales
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 max-w-4xl mx-auto">
          El sistema de  <span className="text-gradient-cta"> 3 pasos </span>para  recuperar tu valor y dejar de ser invisible.
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
          El Método S.I.A. está diseñado para que vuelvas a ser tu prioridad aplicando herramientas prácticas, sin pasar años en terapia ni perderte en miles de libros de autoayuda
          </p>
        </div>

        {/* Method Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {methodSteps.map((step, index) => (
            <div 
              key={index}
              className="relative group"
            >
              {/* Connector line */}
              {index < 2 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border" />
              )}
              
              <div className="bg-card border border-border rounded-2xl p-8 h-full hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
                {/* Letter badge */}
                <div className="flex items-center justify-center w-16 h-16 bg-muted rounded-2xl mb-6 mx-auto">
                  <span className={`text-3xl font-bold ${step.color}`}>{step.letter}</span>
                </div>
                
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>

                {/* Icon */}
                <div className="mt-6 flex justify-center">
                  <step.icon className={`w-8 h-8 ${step.color} opacity-50`} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video embed placeholder */}
        <div className="max-w-3xl mx-auto">
          <div className="aspect-video bg-card border border-border rounded-2xl overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/SdVXN16Or4k"
              title="Método S.I.A. - Martín Dicovsky"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
          <p className="text-center text-muted-foreground text-sm mt-4">
          Mirá cómo funciona el Método S.I.A.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MethodSection;
