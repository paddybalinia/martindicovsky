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
    title: "Autoestima sólida y genuina",
    description: "Una confianza que nace de adentro, no de la validación externa",
  },
  {
    icon: Users,
    title: "Relaciones equilibradas y sanas",
    description: "Vínculos que te nutren y te hacen crecer mutuamente",
  },
  {
    icon: Shield,
    title: "Límites claros sin culpa",
    description: "La capacidad de decir 'no' protegiendo tu bienestar",
  },
  {
    icon: Compass,
    title: "Claridad sobre lo que querés",
    description: "Dirección y propósito en cada área de tu vida",
  },
  {
    icon: Wrench,
    title: "Herramientas para toda la vida",
    description: "Recursos prácticos que usarás más allá de la mentoría",
  },
  {
    icon: MessageCircle,
    title: "Acompañamiento personalizado",
    description: "Un proceso diseñado específicamente para tu situación",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-20 px-4 bg-card/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="text-secondary text-sm font-semibold tracking-wider uppercase mb-4 block">
            Transformación real
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Qué vas a <span className="text-gradient-gold">lograr</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Estos son los resultados concretos que experimentarás durante y después del proceso
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
