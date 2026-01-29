import { Instagram, Youtube, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/coachmartin.ok/", label: "Instagram" },
  { icon: Youtube, href: "https://www.youtube.com/channel/UCJExk0yg757uohGXuTtwOdg", label: "YouTube" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/martindicovsky/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:coach@martindicovsky.com.ar", label: "Email" },
];

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo/Name */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold">Martín Dicovsky</h3>
            <p className="text-sm text-muted-foreground">Coach de desarrollo personal</p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                title={social.label}
                className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Legal */}
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            Diseño y desarrollo por <a href="https://patriciobalina.com.ar/" target="_blank" title="Patricio Baliña" rel="noopener noreferrer" className="hover:text-foreground transition-colors"> Patricio Baliña
            </a>
            
          </div>
        </div>

        <div className="text-center mt-8 pt-8 pb-14 md:pb-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Martín Dicovsky. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
