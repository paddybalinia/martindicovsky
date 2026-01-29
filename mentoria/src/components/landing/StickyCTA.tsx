import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const CALENDLY_URL = "https://calendly.com/coach-martindicovsky/45";

const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero section (approx 600px)
      setIsVisible(window.scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/80 backdrop-blur-lg border-t border-border md:hidden z-50">
      <Button 
        size="lg" 
        className="w-full bg-gradient-cta hover:opacity-90 text-primary-foreground font-semibold shadow-glow"
        onClick={() => window.open(CALENDLY_URL, "_blank")}
      >
        Agendá tu llamada gratuita
        <ArrowRight className="ml-2 w-4 h-4" />
      </Button>
    </div>
  );
};

export default StickyCTA;
