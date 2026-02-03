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
                src="https://d1yei2z3i6k35z.cloudfront.net/11520480/69405e65044b3_DSC01057d.jpg"
                alt="Martín - Coach de desarrollo personal"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 md:bottom-8 md:-right-8 glass-card rounded-xl p-4 md:p-6">
              <p className="text-2xl md:text-3xl font-display font-bold text-primary">+10k</p>
              <p className="text-sm text-muted-foreground">vidas transformadas</p>
            </div>
          </div>

          {/* Content side */}
          <div className="space-y-8">
            <div>
              <span className="text-primary font-medium mb-4 block">Sobre el creador</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
                Hola, soy Martín
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Durante años, yo también fui esa persona que daba todo por los demás hasta quedar vacío. 
                  Creía que ser empático significaba cargar con el peso del mundo.
                </p>
                <p>
                  Después de mucho trabajo personal y formación, descubrí que <span className="text-foreground font-medium">la empatía no es el problema</span>. 
                  El problema es no saber cómo proteger esa sensibilidad tan valiosa que tenemos.
                </p>
                <p>
                  Hoy ayudo a personas como tú a <span className="text-foreground font-medium">transformar su empatía en una fortaleza</span>, 
                  sin perder su esencia ni desconectarse de quienes aman.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
              {stats.map((stat, index) => (
                <div key={index} className="text-center md:text-left">
                  <div className="flex justify-center md:justify-start mb-2">
                    <stat.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-2xl md:text-3xl font-display font-bold">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
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
