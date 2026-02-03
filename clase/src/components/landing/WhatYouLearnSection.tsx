import { Sparkles, Target, Heart, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const WhatYouLearnSection = () => {
  const learnings = [
    {
      icon: Sparkles,
      title: "Tu empatía es un superpoder",
      description: "Descubre por qué tu sensibilidad no es una debilidad, sino tu mayor fortaleza cuando la canalizas correctamente.",
    },
    {
      icon: Target,
      title: "Límites claros sin culpa",
      description: "Aprende técnicas específicas para decir 'no' de forma asertiva, sin sentir que estás fallando a los demás.",
    },
    {
      icon: Heart,
      title: "Reconstruye tu amor propio",
      description: "Reconecta con tu valor personal y deja de buscar validación externa para sentirte bien contigo mismo/a.",
    },
    {
      icon: Zap,
      title: "Protege tu energía",
      description: "Desarrolla estrategias para mantener tu bienestar emocional sin desconectarte de las personas que amas.",
    },
  ];

  const scrollToForm = () => {
    document.getElementById('signup-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary font-medium mb-4 block">En esta Guía Gratuita</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Lo que vas a <span className="text-gradient">aprender</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            En menos de 30 minutos tendrás las herramientas para empezar a transformar tu relación contigo y con los demás.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {learnings.map((item, index) => (
            <div
              key={index}
              className="relative p-8 rounded-2xl bg-gradient-to-br from-card to-secondary/30 border border-border/50 group hover:border-primary/30 transition-all duration-500"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-7 h-7" />
                </div>
                
                <h3 className="text-xl md:text-2xl font-display font-bold mb-4">
                  {item.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="text-lg px-10 py-7 animate-pulse-glow"
            onClick={scrollToForm}
          >
            Quiero Acceder a la Clase
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhatYouLearnSection;
