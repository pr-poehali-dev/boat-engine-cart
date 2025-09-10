import Icon from "@/components/ui/icon";
import { useState } from "react";

const ProductionCarousel = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  const images = [
    {
      url: "https://cdn.poehali.dev/files/4e9f0a28-0141-41d8-bec5-04b34603cc9e.jpg",
      alt: "Готовые тележки для лодочных моторов"
    },
    {
      url: "https://cdn.poehali.dev/files/12f0f7b1-b9f3-4258-85ae-967ad3ba9a2d.jpg",
      alt: "Упакованные тележки готовые к отправке"
    },
    {
      url: "https://cdn.poehali.dev/files/79b29a66-6f9e-43cd-bcc6-a9f4a783bf81.jpg",
      alt: "Покрасочная камера для металлических деталей"
    },
    {
      url: "https://cdn.poehali.dev/files/572b0a2f-c604-48b5-8179-752433ee9e18.jpg",
      alt: "Заготовки металлических рам тележек"
    },
    {
      url: "https://cdn.poehali.dev/files/899f2a36-e103-4874-8ece-2ef1cf204157.jpg",
      alt: "Рабочее место с металлическими трубами и профилями"
    }
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Main Image */}
      <div className="relative h-96 md:h-[500px] overflow-hidden rounded-2xl">
        <img
          src={images[currentImage].url}
          alt={images[currentImage].alt}
          className="w-full h-full object-cover"
        />
        
        {/* Navigation Arrows */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200"
        >
          <Icon name="ChevronLeft" size={24} />
        </button>
        
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200"
        >
          <Icon name="ChevronRight" size={24} />
        </button>

        {/* Image Counter */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
          {currentImage + 1} из {images.length}
        </div>
      </div>

      {/* Thumbnail Navigation */}
      <div className="flex justify-center space-x-2 mt-6">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
              index === currentImage
                ? "border-primary scale-110"
                : "border-white/30 opacity-70 hover:opacity-100"
            }`}
          >
            <img
              src={images[index].url}
              alt={images[index].alt}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

const ProductionSection = () => {
  return (
    <section id="production" className="py-20 bg-navy-dark text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Наше производство</h2>
          <p className="text-xl opacity-90">
            Современное оборудование и строгий контроль качества на каждом этапе
          </p>
        </div>

        <ProductionCarousel />
      </div>
    </section>
  );
};

export default ProductionSection;