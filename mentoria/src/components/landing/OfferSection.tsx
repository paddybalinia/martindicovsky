import { Video, FileText, MessageSquare, Users, Clock, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";



const offerItems = [
  {
    icon: Video,
    title: "Sesiones 1:1",
    description: "Encuentros semanales para eliminar tus bloqueos y aplicar el método a tu situación particular",
  },
  {
    icon: FileText,
    title: "Material de trabajo exclusivo",
    description: "Ejercicios, guías y recursos diseñados para acelerar tu transformación",
  },
  {
    icon: MessageSquare,
    title: "Seguimiento personalizado",
    description: "Contacto directo conmigo para resolver dudas sobre situaciones reales que te pasen en el día a día",
  },
  {
    icon: Users,
    title: "Comunidad de apoyo",
    description: "Grupo privado con personas en el mismo camino de crecimiento",
  },
  {
    icon: Clock,
    title: "Flexibilidad horaria",
    description: "Sesiones adaptadas a tu agenda",
  },
  {
    icon: Zap,
    title: "Acceso de por vida",
    description: "Todo el material y recursos disponibles para siempre",
  },
];


const OfferSection = () => {
  return (
    <section className="py-20 px-4 bg-card/50" id="mentoria">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
          El Método
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          
            Todo lo que vas a <span className="text-gradient-cta">recibir</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Herramientas prácticas y soporte directo para que dejes de postergarte y recuperes tu lugar
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {offerItems.map((item, index) => (
            <Card 
              key={index}
              className="bg-background border-border hover:border-primary/50 transition-all duration-300 group"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
