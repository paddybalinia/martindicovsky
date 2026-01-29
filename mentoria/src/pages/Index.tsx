import HeroSection from "@/components/landing/HeroSection";
import PainSection from "@/components/landing/PainSection";
import MethodSection from "@/components/landing/MethodSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import AboutSection from "@/components/landing/AboutSection";
import OfferSection from "@/components/landing/OfferSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import FAQSection from "@/components/landing/FAQSection";
import FinalCTASection from "@/components/landing/FinalCTASection";
import Footer from "@/components/landing/Footer";
import StickyCTA from "@/components/landing/StickyCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <PainSection />
      <MethodSection />
      <BenefitsSection />
      <AboutSection />
      <OfferSection />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
      <StickyCTA />
    </div>
  );
};

export default Index;
