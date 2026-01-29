import { 
  Heart, 
  Users, 
  Shield, 
  Compass, 
  Wrench, 
  MessageCircle 
} from "lucide-react";



















const benefits = [
  {
    icon: Heart,
    title: "Sana autoestima",
    description: "Una confianza que nace de adentro, no de la validación externa",
  },
  {
    icon: Users,
    title: "Relaciones sanas y recíprocas",
    description: "Vínculos que te nutren en vez de drenarte",
  },
  {
    icon: Shield,
    title: "Límites claros sin culpa",
    description: "Recuperás tu tiempo y tu energía al dejar de cargar con problemas ajenos",
  },
  {
    icon: Compass,
    title: "Control sobre tu vida",
    description: "Salís del piloto automático. Recuperás la claridad para saber qué querés vos, más allá de las expectativas de tu familia o tu entorno",
  },
  {
    icon: Wrench,
    title: "Independencia emocional",
    description: "No te llevás solo teoría, te llevás un kit de herramientas prácticas para gestionar tus emociones y vínculos para siempre",
  },
  {
    icon: MessageCircle,
    title: "Acompañamiento personalizado",
    description: "No es una terapia más. Voy a acompañarte durante todo el proceso",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-20 px-4 bg-card/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="text-secondary text-sm font-semibold tracking-wider uppercase mb-4 block">
          Tu nueva realidad: 
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Lo que cambia cuando <span className="text-gradient-gold">recuperás tu valor</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Estos son los resultados concretos que vas a experimentar durante y después del proceso
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group p-6 bg-background border border-border rounded-2xl hover:border-secondary/50 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                <benefit.icon className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
