import { Award, Users, BookOpen } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { icon: Users, value: "10,000+", label: "Personas ayudadas" },
    { icon: BookOpen, value: "5+", label: "Años de experiencia" },
    { icon: Award, value: "98%", label: "Tasa de satisfacción" },
  ];

  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
          {/* Image side */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden glow-box">
              <img
                src="/soy-martin-dicovsky.webp"
                alt="Martín - Coach de desarrollo personal"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 md:bottom-8 md:-right-8 glass-card rounded-xl p-4 md:p-6">
              <p className="text-2xl md:text-3xl font-display font-bold text-primary">+100</p>
              <p className="text-sm text-muted-foreground">vidas transformadas</p>
            </div>
          </div>

          {/* Content side */}
          <div className="space-y-8">
            <div>
              <span className="text-primary font-medium mb-4 block">Me presento</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
              Vívía preocupado, con culpa y ansioso
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                Durante años, yo también fui esa persona demasiado empática que no confiaba en sí misma y no podía (ni sabía) cómo poner límites.Creía que ser empático significaba estar para todos menos para mí.
                </p>
                <p>
                Después de acompañar a más de cien personas, entendí algo fundamental: <span className="text-foreground font-medium">tu empatía nunca fué el problema</span>, tu baja autoestima sí. 
                </p>
                <p>
                Hoy, mi misión es que dejes de ser víctima de manipulaciones de los demás y te conviertas en tu propia prioridad. Te ayudo a <span className="text-foreground font-medium">recuperar tu confianza</span> y a tener <span className="text-foreground font-medium">relaciones sanas y recíprocas</span>, dejando de procrastinar todo lo que es importante para vos.
                </p>
              </div>
            </div>

            {/* Stats */}
            {/* <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
              {stats.map((stat, index) => (
                <div key={index} className="text-center md:text-left">
                  <div className="flex justify-center md:justify-start mb-2">
                    <stat.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-2xl md:text-3xl font-display font-bold">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
