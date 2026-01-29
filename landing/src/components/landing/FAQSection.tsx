import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Cuánto dura el proceso de mentoría?",
    answer: "El programa tiene una duración de 3 meses, con sesiones semanales de 1 hora. Sin embargo, la duración puede ajustarse según tus necesidades específicas. Muchas personas eligen continuar con un acompañamiento mensual después de completar el programa inicial.",
  },
  {
    question: "¿Es para mí si ya hice terapia?",
    answer: "¡Absolutamente! La mentoría es complementaria a la terapia. Mientras la terapia se enfoca en sanar el pasado, la mentoría te da herramientas prácticas para construir el futuro que querés. Muchos de mis clientes han hecho o hacen terapia simultáneamente.",
  },
  {
    question: "¿Cómo sé si es el momento correcto?",
    answer: "Si llegaste hasta acá, probablemente sea el momento. El momento 'perfecto' no existe. Lo importante es que sientas el deseo de cambiar y estés dispuesto/a a comprometerte con tu proceso. Si tenés dudas, la llamada de descubrimiento es gratuita y sin compromiso.",
  },
  {
    question: "¿Qué diferencia hay con el coaching tradicional?",
    answer: "El Método S.I.A. integra técnicas de coaching con herramientas de sanación emocional y desarrollo personal profundo. No es solo establecer metas, sino transformar las creencias y patrones que te impiden alcanzarlas. Es un enfoque integral que trabaja mente, emociones y acciones.",
  },
  {
    question: "¿Qué pasa si siento que no funciona?",
    answer: "Mi compromiso es tu transformación. Si después de las primeras semanas sentís que no es lo que necesitás, hablamos y buscamos la mejor solución. Lo importante es que te sientas acompañado/a y que el proceso tenga sentido para vos.",
  },
  {
    question: "¿Las sesiones son online o presenciales?",
    answer: "Todas las sesiones son online a través de videollamada, lo que te permite conectarte desde cualquier lugar del mundo. Esto brinda flexibilidad y comodidad, manteniendo la misma profundidad y conexión que una sesión presencial.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 px-4 bg-card/30" id="faq">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            Preguntas frecuentes
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Resolvemos tus <span className="text-gradient-cta">dudas</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-background border border-border rounded-xl px-6 data-[state=open]:border-primary/50"
            >
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="text-lg font-medium">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
