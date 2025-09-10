import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ContactsSection = () => {
  return (
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
  );
};

export default ContactsSection;