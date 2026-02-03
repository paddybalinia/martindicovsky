import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Play, CheckCircle2 } from "lucide-react";
import { submitOptinForm } from "@/lib/api";

const HeroSection = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      await submitOptinForm(name, email);
      setIsSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al enviar el formulario. Por favor, intenta nuevamente.");
      setIsSubmitted(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    "Entender por qué tu empatía nunca es el problema",
    "Aprender a poner límites sin culpa ni remordimientos",
    "Recuperar tu confianza y amor propio",
  ];

  return (
    <section className="relative min-h-screen flex items-center section-padding overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-1/4 -right-1/4 w-[400px] h-[400px] rounded-full bg-primary/10 blur-[100px]" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <div className="space-y-8 animate-fade-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Play className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Clase Gratuita</span>
            </div>

            {/* Main headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
                ¿Tu empatía te está{" "}
                <span className="text-gradient">agotando</span>?
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Descubre cómo poner límites saludables sin perder tu esencia empática ni sentir culpa.
              </p>
            </div>

            {/* Benefits list */}
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li 
                  key={index} 
                  className="flex items-start gap-3 text-lg opacity-0 animate-fade-up"
                  style={{ animationDelay: `${(index + 1) * 150}ms` }}
                >
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            {/* Mobile CTA - visible on smaller screens */}
            <div className="lg:hidden">
              <Button 
                size="lg" 
                className="w-full text-lg py-6 animate-pulse-glow"
                onClick={() => document.getElementById('signup-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Quiero Ver la Clase Gratis
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Right content - Form */}
          <div 
            id="signup-form"
            className="glass-card rounded-2xl p-8 md:p-10 glow-box opacity-0 animate-fade-up"
            style={{ animationDelay: "300ms" }}
          >
            {!isSubmitted ? (
              <>
                <div className="text-center mb-8">
                  <h2 className="text-2xl md:text-3xl font-display font-bold mb-3">
                    Accede a la Clase Gratuita
                  </h2>
                  <p className="text-muted-foreground">
                    Ingresa tus datos y te envío el acceso directo a tu correo
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <Input
                      type="text"
                      placeholder="Tu nombre"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="h-14 text-lg bg-background/50 border-border/50 placeholder:text-muted-foreground/60"
                    />
                  </div>
                  <div className="space-y-2">
                    <Input
                      type="email"
                      placeholder="Tu correo electrónico"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="h-14 text-lg bg-background/50 border-border/50 placeholder:text-muted-foreground/60"
                    />
                  </div>
                  {error && (
                    <div className="text-sm text-red-500 bg-red-500/10 border border-red-500/20 rounded-lg p-3">
                      {error}
                    </div>
                  )}
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full text-lg py-7 font-semibold animate-pulse-glow"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Enviando..."
                    ) : (
                      <>
                        Enviarme la Clase Gratis
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </>
                    )}
                  </Button>
                </form>

                <p className="text-sm text-muted-foreground text-center mt-6">
                  🔒 Tu información está segura. No compartimos tus datos con nadie.
                </p>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-3">
                  ¡Listo! Revisa tu correo
                </h3>
                <p className="text-muted-foreground">
                  Te hemos enviado el acceso a la clase gratuita. Si no lo ves, revisa tu carpeta de spam.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
