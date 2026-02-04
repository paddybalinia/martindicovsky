import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "¿La clase es realmente gratuita?",
      answer: "Sí, 100% gratuita. No hay cargos ocultos ni compromisos. Solo necesitas registrarte con tu correo para recibir el acceso inmediato.",
    },
    {
      question: "¿cuanto dura la clase?",
      answer: "La clase dura menos de 30 minutos. Está diseñada para darte información valiosa y accionable en poco tiempo, sin humo.",
    },
    {
      question: "¿Esta clase es para mí?",
      answer: "Esta clase es para ti si eres una persona empática que siente que da demasiado, le cuesta poner límites, o se siente agotada emocionalmente por absorber las emociones de otros.",
    },
    {
      question: "¿Puedo verla en cualquier momento?",
      answer: "Sí, una vez que te registres recibirás acceso inmediato y podrás verla cuando quieras, las veces que necesites. El acceso no expira.",
    },
    {
      question: "¿Qué pasa después de ver la clase?",
      answer: "Al final de la clase tendrás herramientas prácticas para empezar a aplicar inmediatamente. Si quieres profundizar más, te compartiré información sobre cómo puedo ayudarte de forma más personalizada.",
    },
    {
      question: "¿Mis datos están seguros?",
      answer: "Absolutamente. Tu privacidad es importante. Solo usamos tu correo para enviarte el acceso a la clase y, ocasionalmente, contenido de valor. Puedes darte de baja cuando quieras.",
    },
  ];

  return (
    <section className="section-padding bg-secondary/20">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-primary font-medium mb-4 block">Preguntas Frecuentes</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            ¿Tenés dudas?
            </h2>
            <p className="text-xl text-muted-foreground">
            Te respondo las preguntas más comunes
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border/50 rounded-xl px-6 data-[state=open]:border-primary/30 transition-colors"
              >
                <AccordionTrigger className="text-left text-lg font-medium py-6 hover:text-primary hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
