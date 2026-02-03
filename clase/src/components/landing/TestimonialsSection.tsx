import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Es excelente la explicación Martín! Me identifiqué mucho. Los primeros 10 minutos me dieron ganas de llorar.",
      name: "Barbara Strappaveccia",
      highlight: "Me identifiqué mucho",
    },
    {
      quote: "Me encantó, muchas gracias por ponerlo en palabras. Resonó conmigo de una forma muy profunda.",
      name: "Claudia Sanabria",
      highlight: "Resonó conmigo",
    },
    {
      quote: "Muy buena su lectura, gracias a usted de a poco voy saliendo adelante. Ha sido transformador.",
      name: "Lucía Vallejos",
      highlight: "Voy saliendo adelante",
    },
    {
      quote: "Todo es útil, excelente explicando. Los primeros 10 minutos me dieron ganas de llorar. Gracias por esto.",
      name: "Abril Rossini",
      highlight: "Todo es útil",
    },
    {
      quote: "Decidí escucharlo en un momento que esté tranquila y en silencio... Describiste muchas cosas de mi vida.",
      name: "Laura Rose",
      highlight: "Describiste mi vida",
    },
    {
      quote: "Grande Martín, muchas gracias. Tu contenido ha cambiado mi perspectiva completamente.",
      name: "Martín Oxakis",
      highlight: "Cambió mi perspectiva",
    },
  ];

  return (
    <section className="section-padding bg-secondary/20">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary font-medium mb-4 block">Testimonios Reales</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Lo que dicen quienes ya vieron la clase
          </h2>
          <p className="text-xl text-muted-foreground">
            Más de miles de personas han transformado su forma de relacionarse
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-6 md:p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/20 transition-all duration-300 group"
            >
              {/* Quote icon */}
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20 group-hover:text-primary/40 transition-colors" />
              
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Highlight badge */}
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                {testimonial.highlight}
              </span>

              {/* Quote */}
              <p className="text-foreground/90 leading-relaxed mb-6 text-lg">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/40 to-primary/20 flex items-center justify-center text-primary-foreground font-semibold">
                  {testimonial.name.charAt(0)}
                </div>
                <span className="font-medium">{testimonial.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
