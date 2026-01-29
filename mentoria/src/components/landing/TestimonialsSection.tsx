import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Marta Fernández",
    role: "Emprendedora",
    videoUrl: "https://www.youtube.com/embed/VIDEO_1",
    quote: "Después de la mentoría con Martín, por fin pude poner límites sanos en mi familia...",
  },
  {
    name: "Feli Tapia",
    role: "Profesional independiente",
    videoUrl: "https://www.youtube.com/embed/VIDEO_2",
    quote: "Recuperé mi autoestima y aprendí a valorarme como merezco...",
  },
  {
    name: "Henry G. González",
    role: "Ejecutivo",
    videoUrl: "https://www.youtube.com/embed/VIDEO_3",
    quote: "El proceso con Martín me ayudó a reconectar con mi verdadero yo...",
  },
  {
    name: "Carla Costa",
    role: "Madre y profesional",
    videoUrl: "https://www.youtube.com/embed/VIDEO_4",
    quote: "Dejé de sentir culpa por priorizarme y mis relaciones mejoraron...",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 px-4" id="testimonios">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="text-secondary text-sm font-semibold tracking-wider uppercase mb-4 block">
            Resultados reales
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Lo que dicen quienes ya{" "}
            <span className="text-gradient-gold">lo vivieron</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Historias de transformación de personas como vos
          </p>
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-2xl overflow-hidden hover:border-secondary/50 transition-all duration-300 group"
            >
              {/* Video thumbnail placeholder */}
              <div className="relative aspect-video bg-muted">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 bg-secondary/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 text-secondary-foreground ml-1" />
                  </div>
                </div>
              </div>
              
              <div className="p-4">
                <h4 className="font-semibold">{testimonial.name}</h4>
                <p className="text-sm text-muted-foreground mb-2">{testimonial.role}</p>
                <p className="text-sm text-muted-foreground italic">"{testimonial.quote}"</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden">
          <div className="relative">
            <div className="bg-card border border-border rounded-2xl overflow-hidden">
              <div className="relative aspect-video bg-muted">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 bg-secondary/90 rounded-full flex items-center justify-center">
                    <Play className="w-6 h-6 text-secondary-foreground ml-1" />
                  </div>
                </div>
              </div>
              
              <div className="p-4">
                <h4 className="font-semibold">{testimonials[currentIndex].name}</h4>
                <p className="text-sm text-muted-foreground mb-2">{testimonials[currentIndex].role}</p>
                <p className="text-sm text-muted-foreground italic">"{testimonials[currentIndex].quote}"</p>
              </div>
            </div>
            
            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-6">
              <Button variant="outline" size="icon" onClick={prevSlide}>
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <div 
                    key={index}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentIndex ? "bg-secondary" : "bg-muted"
                    }`}
                  />
                ))}
              </div>
              <Button variant="outline" size="icon" onClick={nextSlide}>
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
