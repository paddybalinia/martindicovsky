import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border/50">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Martín Dicovsky - Todos los derechos reservados
          </p>
          <div className="flex items-center gap-2 text-muted-foreground">
            <span>Hecho con</span>
            <Heart className="w-4 h-4 text-primary fill-primary" />
            <span>para personas empáticas</span>
          </div>
          
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <p>Diseñado y desarrollado por <a href="https://www.patriciobalina.com.ar/" title="Patricio Baliña - Desarrollador Web" className="hover:text-primary transition-colors">Patricio Baliña</a></p>
          </div>
          
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
