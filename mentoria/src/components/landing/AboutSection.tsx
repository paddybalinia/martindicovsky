import { Award, BookOpen, Heart } from "lucide-react";

const credentials = [
  { icon: Award, text: "Coach certificado internacionalmente" },
  { icon: BookOpen, text: "+10 años de experiencia" },
  { icon: Heart, text: "+100 vidas transformadas" },
];

const AboutSection = () => {
  return (
    <section className="py-20 px-4" id="sobre-martin">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl" />
              
              {/* Photo */}
              <div className="relative bg-card border border-border rounded-3xl overflow-hidden h-full">
                <img 
                  src="/soy-martin-dicovsky.webp" 
                  alt="Martín Dicovsky - Coach profesional"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            Se lo que se siente no ser la prioridad en tu propia vida
            </span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Soy <span className="text-gradient-cta">Martín Dicovsky</span>
            </h2>
            
            <div className="space-y-4 text-muted-foreground">
              {/* <p>
                Durante años viví desconectado de mí mismo, priorizando a todos menos a mí, 
                buscando validación externa y sintiéndome vacío aunque "tenía todo".
              </p>
              <p>
                Ese dolor me llevó a un camino de transformación profunda que hoy comparto 
                con quienes están listos para hacer el mismo viaje.
              </p>
              <p className="text-foreground font-medium">
                Mi misión es acompañarte a reconectarte con tu esencia, construir relaciones 
                sanas y vivir una vida que realmente te represente.
              </p> */}
              {/* <p>Hace años, estaba en una relación tóxica de la cual no podía salir (en realidad no quería). Me sentía muy mal conmigo mismo, y sin herramientas para estar bien. Siendo el típico “Nice Guy” o “Complaciente” que no ponía límites por miedo al rechazo. En ese momento, tomé la decisión de cambiar mi vida:</p>
            <p>Dejé esa relación que no me hacía bien, renuncié a mi trabajo y me fuí a probar suerte un año a Suecia (sin hablar el idioma).
            Pero el verdadero cambio empezó en Londres, en el evento de Tony Robbins. Ahí, frente a las brasas, no tuve una revelación mágica ni nada cursi: simplemente me di cuenta que soy más que mis miedos, y que si yo no me daba mi propio lugar, nadie más lo iba a hacer por mí.
            </p>
            <p className="text-foreground font-medium">Después de más de 20.000 dólares invertidos en certificaciones, cursos, y libros. Y muchos dolorosos errores, te traigo este Método S.I.A. donde te comparto todo lo que me sirvió para estar donde estoy hoy: viviendo de mi propósito, y en mis términos (no en los de mi pareja, familia o amigos). Con relaciones sanas y recíprocas.</p>
            </div> */}

          <p>Hace años, estaba en una relación tóxica de la cual no podía salir (en realidad no quería). Me sentía muy mal conmigo mismo, y sin herramientas para estar bien. Siendo el típico “Nice Guy” o “Complaciente” que no ponía límites por miedo al rechazo. En ese momento, tomé la decisión de cambiar mi vida:</p>
          <p>Dejé esa relación que no me hacía bien, renuncié a mi trabajo y me fuí a probar suerte un año a Suecia (sin hablar el idioma).
          Pero el verdadero cambio empezó en Londres, en el evento de Tony Robbins. Ahí, frente a las brasas, no tuve una revelación mágica ni nada cursi: simplemente me di cuenta que <span className="text-foreground font-medium">soy más que mis miedos</span>, y que <span className="text-foreground font-medium">si yo no me daba mi propio lugar </span>, nadie más lo iba a hacer por mí.
          </p>
          <p>Después de más de <span className="text-foreground font-medium">20.000 dólares invertidos</span> en certificaciones, cursos, y libros. Y muchos dolorosos errores, te traigo este Método S.I.A. donde te comparto todo lo que me sirvió para estar donde estoy hoy: viviendo de mi propósito, y en mis términos (no en los de mi pareja, familia o amigos). <span className="text-foreground font-medium">Con relaciones sanas y recíprocas.</span></p>
          </div>

            {/* Credentials */}
            <div className="flex flex-wrap gap-4 pt-4">
              {credentials.map((cred, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2 bg-muted/50 px-4 py-2 rounded-full text-sm"
                >
                  <cred.icon className="w-4 h-4 text-primary" />
                  <span>{cred.text}</span>
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
