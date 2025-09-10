import Header from "@/components/sections/Header";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import CatalogSection from "@/components/sections/CatalogSection";
import ProductionSection from "@/components/sections/ProductionSection";
import DeliverySection from "@/components/sections/DeliverySection";
import ContactsSection from "@/components/sections/ContactsSection";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-cyan-50">
      <Header />
      <HeroSection />
      <AboutSection />
      <CatalogSection />
      <ProductionSection />
      <DeliverySection />
      <ContactsSection />
      <Footer />
    </div>
  );
};

export default Index;