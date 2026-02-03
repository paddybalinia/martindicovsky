import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { submitOptinForm } from "@/lib/api";

const FinalCTASection = () => {
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

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-[150px]" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-3xl p-8 md:p-12 lg:p-16 text-center glow-box">
            {!isSubmitted ? (
              <>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary">Acceso Inmediato</span>
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
                ¿Listo/a para recuperar <span className="text-gradient">tu paz</span> sin sentirte egoísta?
                </h2>

                <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                Unite a las <span className="text-gradient">más de 1,000 personas</span> que ya aprendieron a poner límites saludables conservando su esencia empática

                </p>

                <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
                  <Input
                    type="text"
                    placeholder="Tu nombre"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="h-14 text-lg bg-background/50 border-border/50 text-center placeholder:text-muted-foreground/60"
                  />
                  <Input
                    type="email"
                    placeholder="Tu correo electrónico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="h-14 text-lg bg-background/50 border-border/50 text-center placeholder:text-muted-foreground/60"
                  />
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
                        Sí! Quiero aprender a poner límites sin culpa
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </>
                    )}
                  </Button>
                </form>

                <p className="text-sm text-muted-foreground mt-6">
                  🔒 Tu información está segura. No spam, solo contenido de valor.
                </p>
              </>
            ) : (
              <div className="py-8">
                <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <CheckCircle2 className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-3xl font-display font-bold mb-4">
                  ¡Excelente decisión!
                </h3>
                <p className="text-xl text-muted-foreground max-w-md mx-auto">
                  Revisa tu correo electrónico. Te hemos enviado el acceso a la Guía Gratuita.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
