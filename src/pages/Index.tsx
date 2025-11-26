import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import IntroSection from "@/components/IntroSection";
import ServicesSection from "@/components/ServicesSection";
import WorkSection from "@/components/WorkSection";
import ReviewsSection from "@/components/ReviewsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import PageTransition from "@/components/PageTransition";
import { usePageTransition } from "@/hooks/usePageTransition";
import JourneySection from "@/components/JourneySection";

const Index = () => {
  const { isTransitioning, transitionToSection } = usePageTransition();

  return (
    <div className="min-h-screen cursor-none md:cursor-none">
      <PageTransition isTransitioning={isTransitioning} />
      <CustomCursor />
      <Navigation onNavigate={transitionToSection} />
      <Hero />
      <IntroSection />
  <JourneySection />
      <ServicesSection />
      <WorkSection />
      <ReviewsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
