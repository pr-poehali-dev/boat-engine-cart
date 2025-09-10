import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section id="home" className="relative overflow-hidden h-screen">
      {/* Background Video from Rutube */}
      <iframe
        src="https://rutube.ru/play/embed/ef5a953d5b6d58aa03fd27513b692a5c/?autoplay=1&mute=1"
        className="absolute inset-0 w-full h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-black/40"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10 h-full flex items-center">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
            Тележки для <span className="text-cyan-water">лодочных моторов</span>
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto drop-shadow-md">
            Собственное производство качественных тележек для транспортировки лодочных моторов. 
            Береги спину, не таскай мотор!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <Icon name="ShoppingCart" size={20} className="mr-2" />
              Смотреть каталог
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 backdrop-blur-sm">
              <Icon name="Play" size={20} className="mr-2" />
              Видео о производстве
            </Button>
          </div>
        </div>
      </div>
      
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default HeroSection;