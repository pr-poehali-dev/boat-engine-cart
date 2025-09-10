import Header from "@/components/sections/Header";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import VideoSection from "@/components/sections/VideoSection";
import CatalogSection from "@/components/sections/CatalogSection";
import ProductionSection from "@/components/sections/ProductionSection";
import DeliverySection from "@/components/sections/DeliverySection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import ContactsSection from "@/components/sections/ContactsSection";
import Footer from "@/components/sections/Footer";
import VisitorCounter from "@/components/ui/visitor-counter";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-cyan-50">
      <Header />
      <HeroSection />
      <AboutSection />
      <VideoSection />
      <CatalogSection />
      <ProductionSection />
      <DeliverySection />
      <ReviewsSection />
      <ContactsSection />
      <Footer />
      <VisitorCounter />
    </div>
  );
};

export default Index;