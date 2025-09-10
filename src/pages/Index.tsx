import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const products = [
    {
      id: 1,
      name: "ТМ-300 Стандарт",
      price: "45 000",
      image: "/img/ad5113b4-b659-4a87-9301-08183ecd3a5f.jpg",
      features: ["До 300 кг", "Пневматические колеса", "Складная конструкция"],
      popular: false
    },
    {
      id: 2, 
      name: "ТМ-500 Профи",
      price: "75 000",
      image: "/img/b4a1cf24-29b5-4335-8498-111162141e54.jpg",
      features: ["До 500 кг", "Усиленная рама", "Регулируемая ширина"],
      popular: true
    },
    {
      id: 3,
      name: "ТМ-150 Компакт",
      price: "32 000", 
      image: "/img/4a75725f-c859-473c-8807-83c9f79a8030.jpg",
      features: ["До 150 кг", "Алюминиевая рама", "Сверхлегкий"],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-cyan-50">
      {/* Header Navigation */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-blue-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img 
                src="https://cdn.poehali.dev/files/2e151b32-f5dd-44dd-b586-1c313fd37e75.jpg" 
                alt="OPOZIT_LAB.RU" 
                className="h-10 object-contain"
              />
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-600 hover:text-primary transition-colors">Главная</a>
              <a href="#about" className="text-gray-600 hover:text-primary transition-colors">О нас</a>
              <a href="#catalog" className="text-gray-600 hover:text-primary transition-colors">Каталог</a>
              <a href="#production" className="text-gray-600 hover:text-primary transition-colors">Производство</a>
              <a href="#delivery" className="text-gray-600 hover:text-primary transition-colors">Доставка</a>
              <a href="#contacts" className="text-gray-600 hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button className="hidden md:flex">
              <Icon name="Phone" size={16} className="mr-2" />
              Заказать звонок
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-deep-blue/20 to-ocean-blue/10"></div>
        <div className="container mx-auto px-4 py-20 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-navy-dark mb-6">
              Тележки для <span className="text-primary">лодочных моторов</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Собственное производство качественных тележек для транспортировки лодочных моторов. 
              Береги спину, не таскай мотор!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Icon name="ShoppingCart" size={20} className="mr-2" />
                Смотреть каталог
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                <Icon name="Play" size={20} className="mr-2" />
                Видео о производстве
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-dark mb-6">О нашем производстве</h2>
            <p className="text-xl text-gray-600">
              Более 15 лет мы создаем надежные тележки для лодочных моторов, 
              используя только качественные материалы и современные технологии.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-blue-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Wrench" size={32} className="text-primary" />
                </div>
                <CardTitle className="text-navy-dark">Собственное производство</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Полный цикл производства на нашем заводе в России</p>
              </CardContent>
            </Card>

            <Card className="text-center border-blue-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Shield" size={32} className="text-primary" />
                </div>
                <CardTitle className="text-navy-dark">Гарантия качества</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">3 года гарантии на все изделия</p>
              </CardContent>
            </Card>

            <Card className="text-center border-blue-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Truck" size={32} className="text-primary" />
                </div>
                <CardTitle className="text-navy-dark">Доставка по России</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Быстрая доставка в любой регион</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
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
                  <div className="aspect-square overflow-hidden rounded-t-lg">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-navy-dark mb-2">{product.name}</CardTitle>
                  <CardDescription className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {product.features.map((feature, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
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

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-primary text-primary">
              Смотреть весь каталог
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Production Section */}
      <section id="production" className="py-20 bg-navy-dark text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Наше производство</h2>
            <p className="text-xl opacity-90">
              Современное оборудование и строгий контроль качества на каждом этапе
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Zap" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Сварка аргоном</h3>
                    <p className="opacity-90">Прочные сварные швы, устойчивые к коррозии</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Droplets" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Защитное покрытие</h3>
                    <p className="opacity-90">Антикоррозийная обработка для долговечности</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Settings" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Точная механика</h3>
                    <p className="opacity-90">Все подвижные части проходят балансировку</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Преимущества наших тележек</h3>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <Icon name="Check" size={20} className="text-cyan-water" />
                  <span>Грузоподъемность до 500 кг</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Icon name="Check" size={20} className="text-cyan-water" />
                  <span>Пневматические колеса большого диаметра</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Icon name="Check" size={20} className="text-cyan-water" />
                  <span>Регулируемая ширина под разные моторы</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Icon name="Check" size={20} className="text-cyan-water" />
                  <span>Складная конструкция для хранения</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Icon name="Check" size={20} className="text-cyan-water" />
                  <span>Нержавеющие крепежные элементы</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Section */}
      <section id="delivery" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-dark mb-6">Доставка и оплата</h2>
            <p className="text-xl text-gray-600">Удобные способы получения заказа</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-blue-100">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name="MapPin" size={32} className="text-primary" />
                </div>
                <CardTitle className="text-navy-dark">Самовывоз</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Забрать с нашего склада в Москве</p>
                <p className="font-semibold text-primary">Бесплатно</p>
              </CardContent>
            </Card>

            <Card className="text-center border-blue-100">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Truck" size={32} className="text-primary" />
                </div>
                <CardTitle className="text-navy-dark">Доставка по России</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Транспортными компаниями</p>
                <p className="font-semibold text-primary">От 1500 ₽</p>
              </CardContent>
            </Card>

            <Card className="text-center border-blue-100">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name="CreditCard" size={32} className="text-primary" />
                </div>
                <CardTitle className="text-navy-dark">Удобная оплата</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Наличные, карта, безнал</p>
                <p className="font-semibold text-primary">Любой способ</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 bg-gradient-to-b from-blue-50/50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-dark mb-6">Контакты</h2>
            <p className="text-xl text-gray-600">Свяжитесь с нами любым удобным способом</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-navy-dark mb-2">Телефон</h3>
                  <p className="text-gray-600">+7 (495) 123-45-67</p>
                  <p className="text-sm text-gray-500">Пн-Пт: 9:00-18:00</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Mail" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-navy-dark mb-2">Email</h3>
                  <p className="text-gray-600">info@mortelezhki.ru</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-navy-dark mb-2">Адрес</h3>
                  <p className="text-gray-600">г. Москва, ул. Морская, д. 15</p>
                  <p className="text-sm text-gray-500">Склад и производство</p>
                </div>
              </div>
            </div>

            <Card className="border-blue-100">
              <CardHeader>
                <CardTitle className="text-navy-dark">Быстрая связь</CardTitle>
                <CardDescription>Оставьте заявку и мы перезвоним в течение 15 минут</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-700">Ваше имя</label>
                  <input 
                    type="text" 
                    className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Введите имя"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Телефон</label>
                  <input 
                    type="tel" 
                    className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>
                <Button className="w-full">
                  <Icon name="Phone" size={16} className="mr-2" />
                  Заказать звонок
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-dark text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="https://cdn.poehali.dev/files/2e151b32-f5dd-44dd-b586-1c313fd37e75.jpg" 
                  alt="OPOZIT_LAB.RU" 
                  className="h-8 object-contain"
                />
              </div>
              <p className="opacity-90">
                Надежные тележки для лодочных моторов собственного производства
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 opacity-90">
                <li><a href="#" className="hover:text-primary transition-colors">Стандартные тележки</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Усиленные модели</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Компактные тележки</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Аксессуары</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 opacity-90">
                <li><a href="#" className="hover:text-primary transition-colors">О компании</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Производство</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Гарантия</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Отзывы</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 opacity-90">
                <p>+7 (495) 123-45-67</p>
                <p>info@mortelezhki.ru</p>
                <p>г. Москва, ул. Морская, д. 15</p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center opacity-70">
            <p>&copy; 2024 МорТележки. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;