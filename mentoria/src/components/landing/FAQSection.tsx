import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";




const faqs = [
  {
    question: "¿Cuánto dura el Método S.I.A.?",
    answer: "El programa tiene una duración de 3 meses, con sesiones semanales de entre 1 y 2 horas. Sin embargo, la duración puede ajustarse según tus necesidades específicas. ",
  },
  {
    question: "¿Es para mí si ya hice terapia?",
    answer: "Sí. De hecho, la mayoría de mis clientes vienen de años de terapia. La diferencia es que acá no vamos solo a entender por qué te sentís invisible, sino a ejecutar soluciones para que dejes de ser el 'complaciente' hoy mismo. La terapia te da el diagnóstico; el Método S.I.A. te da el plan de acción.",
  },
  {
    question: "¿Cómo sé si es el momento correcto?",
    answer: "Si llegaste hasta acá, probablemente sea el momento. El momento 'perfecto' no existe. Lo importante es que sientas el deseo de cambiar y estés dispuesto/a a comprometerte con tu proceso. Si tenés dudas, podés escribirme por Instagram y las resolvemos.",
  },
  {
    question: "¿Qué diferencia hay con el coaching tradicional?",
    answer: "El Método S.I.A. no es una charla motivacional. Es un sistema ya comprobado que integra técnicas de coaching, con herramientas de psicología, PNL y neurociencia. No es solo establecer metas, sino transformar las creencias y patrones que te impiden alcanzarlas. Es un enfoque integral que trabaja mente, emociones y acciones.",
  },
  {
    question: "¿Qué pasa si siento que no funciona?",
    answer: "Si después de la primera semana de trabajo sentís que el método no es para vos, me lo decís y <strong class='text-white'>te devuelvo el 100% de tu dinero</strong>. Sin vueltas. No me interesa quedarme con el pago de alguien a quien no estoy ayudando a obtener resultados reales. Mi tiempo vale y el tuyo también; solo busco trabajar con personas decididas a dejar de ser invisibles y recuperar su lugar.",
  },
  {
    question: "¿Las sesiones son online o presenciales?",
    answer: "Son <strong class='text-white'>100% online por videollamada</strong>. Esto te permite conectarte desde donde estés y, sobre todo, <strong class='text-white'>ahorrar tiempo en traslados</strong>. La efectividad del sistema es la misma porque el Método S.I.A. se basa en la ejecución de herramientas y no en el lugar físico donde estemos.",
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
          Resuelvo tus <span className="text-gradient-cta">dudas</span>
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
                <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
