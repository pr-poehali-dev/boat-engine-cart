import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ReviewsSection = () => {
  const reviews = [
    {
      id: 1,
      name: "Алексей Морозов",
      text: "Отличная тележка! Покупал для мотора Меркурий 15 л.с. Качество сборки на высоте, все детали подогнаны идеально. Уже второй сезон катаю - никаких нареканий. Рекомендую!",
      rating: 5,
      date: "15 августа 2024"
    },
    {
      id: 2,
      name: "Дмитрий Волков",
      text: "Заказывал тележку-автомат. Очень удобная конструкция - мотор легко снимается и устанавливается. Сварка качественная, покрытие держится отлично. Цена адекватная за такое качество.",
      rating: 5,
      date: "3 сентября 2024"
    },
    {
      id: 3,
      name: "Сергей Кузнецов",
      text: "Брал универсальную модель для разных моторов. Регулировка работает четко, крепления надежные. Очень доволен покупкой. Мастер все объяснил и помог с настройкой.",
      rating: 5,
      date: "28 июля 2024"
    },
    {
      id: 4,
      name: "Иван Петров",
      text: "Супер качество! Тележка выдерживает мой тяжелый четырехтактный мотор без проблем. Колеса катятся мягко, конструкция продумана до мелочей. Спасибо за отличную работу!",
      rating: 5,
      date: "12 сентября 2024"
    }
  ];

  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy-dark mb-4">Отзывы клиентов</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Мнения наших клиентов о качестве тележек и уровне сервиса
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {reviews.map((review) => (
            <Card key={review.id} className="border-blue-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4 leading-relaxed">
                  "{review.text}"
                </p>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-navy-dark">{review.name}</p>
                  </div>
                  <p className="text-sm text-gray-500">{review.date}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Хотите оставить отзыв?</p>
          <a
            href="https://wa.me/79991700787?text=Хочу%20оставить%20отзыв%20о%20вашей%20продукции"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            <Icon name="MessageCircle" size={20} className="mr-2" />
            Написать в WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;