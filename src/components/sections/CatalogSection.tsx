import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Icon from "@/components/ui/icon";

interface Product {
  id: number;
  name: string;
  price: string;
  images: string[];
  features: string[];
  description: string;
  popular: boolean;
}

const CatalogSection = () => {
  const products: Product[] = [
    {
      id: 1,
      name: "Тележка-Автомат",
      price: "11 000",
      images: [
        "https://cdn.poehali.dev/files/7a7686ae-9f8c-484a-bb73-b6a630aff46f.jpg",
        "https://cdn.poehali.dev/files/ec9825aa-9e0c-4ac5-81f3-9e4e505374b4.jpg",
        "https://cdn.poehali.dev/files/aa5ddb03-1544-487b-a4d3-85b069991b57.jpg",
        "https://cdn.poehali.dev/files/9264a2e0-7cac-4c10-a12a-78ab1c99faf3.jpg"
      ],
      features: ["До 60 кг", "Пневматические колеса", "Складная конструкция"],
      description: `Тележка подходит для перевозки, хранения и обслуживания: 2-тактного лодочного мотора 9,9 – 30 лс; 4-тактного лодочного мотора 9,9 – 25 лс. Длина ноги мотора S – короткая или стандартная (381 или 454 мм).

Тележка для лодочных моторов с трубой под дистанцию, подходит для Yamaha 9.9-15/20л.с. и его аналоги: Parsun, Hidea, Sea Pro, Toyama, Reef Rider, Tohatsu, Gladiator, Allfa СG, Hangkai и других, а также с приставкой PRO 9.9/20л.с.

Не нужно снимать мотор с тележки, устанавливаете/снимаете мотор на транец лодки непосредственно с помощью тележки. Легкая загрузка и перевозка лодочного мотора в автомобиле.

Тележка изготовлена из профтрубы 30/30/2мм. Очень крепкая. Покрыта порошковой краской в два слоя. Первый слой ЦИНКОВЫЙ грунт. Он препятствует образованию коррозии.

Для оптовых клиентов возможен выбор цвета и изменение конструкции.

⚠️ ВНИМАНИЕ! Тележка НЕ ПОДОЙДЕТ к мотору если:
• Мощность мотора 9,8 лс и меньше
• 2-тактного Suzuki DT 9,9 15 лс выпуска с 2014г
• Любого мотора Honda
• Длина ноги мотора L — длинный (508 или 572 мм)
• Нет «трубки» для дистанции`,
      popular: true
    },
    {
      id: 2, 
      name: "Тележка-Универсал",
      price: "10 000",
      images: [
        "https://cdn.poehali.dev/files/cda269d2-c726-401a-887b-f137f14928d8.jpg",
        "https://cdn.poehali.dev/files/79b4b22e-3b63-471f-9a60-10b3a2416fca.jpg",
        "https://cdn.poehali.dev/files/83c094be-1340-4602-9422-b10104a90bfd.jpg",
        "https://cdn.poehali.dev/files/efdaade2-5ffa-4a0f-ad98-9d67783d7985.jpg",
        "https://cdn.poehali.dev/files/604f67f1-d4f8-40d3-b75d-e64336766da6.jpg"
      ],
      features: ["До 60 кг", "Для моторов и лодок", "Транцевая доска"],
      description: "Эта тележка универсальный вариант с транцевой доской, он подходит для любых моторов с ногой типа S (высота до верха транцевой доски 81 см) и для перевозки и хранения лодок ПВХ в сумках до 4000мм.",
      popular: false
    }
  ];

  return (
    <section id="catalog" className="py-20 bg-gradient-to-b from-blue-50/50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy-dark mb-6">Популярные модели</h2>
          <p className="text-xl text-gray-600">Выберите тележку под ваши задачи</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="relative border-blue-100 hover:shadow-xl transition-all hover:-translate-y-1">
              {product.popular && (
                <Badge className="absolute -top-2 -right-2 bg-primary text-white z-10">
                  Хит продаж
                </Badge>
              )}
              <CardHeader className="p-0">
                <div className="aspect-square overflow-hidden rounded-t-lg relative">
                  <Carousel className="w-full h-full">
                    <CarouselContent>
                      {product.images.map((image, index) => (
                        <CarouselItem key={index}>
                          <img 
                            src={image} 
                            alt={`${product.name} - фото ${index + 1}`}
                            className="w-full h-full object-contain bg-gray-50"
                          />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    {product.images.length > 1 && (
                      <>
                        <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white" />
                        <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white" />
                      </>
                    )}
                  </Carousel>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-navy-dark mb-2">{product.name}</CardTitle>
                <CardDescription className="mb-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {product.features.map((feature, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  {product.description && (
                    <div className="text-sm text-gray-600 max-h-32 overflow-y-auto border-t pt-3">
                      <div className="whitespace-pre-line">{product.description}</div>
                    </div>
                  )}
                </CardDescription>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">{product.price} ₽</span>
                  <Button>
                    <Icon name="ShoppingCart" size={16} className="mr-2" />
                    В корзину
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>


      </div>
    </section>
  );
};

export default CatalogSection;