import { Instagram, Youtube, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com/martindicovsky", label: "Instagram" },
  { icon: Youtube, href: "https://youtube.com/@martindicovsky", label: "YouTube" },
  { icon: Linkedin, href: "https://linkedin.com/in/martindicovsky", label: "LinkedIn" },
  { icon: Mail, href: "mailto:contacto@martindicovsky.com", label: "Email" },
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
                className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Legal */}
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              Términos
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Privacidad
            </a>
          </div>
        </div>

        <div className="text-center mt-8 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Martín Dicovsky. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
