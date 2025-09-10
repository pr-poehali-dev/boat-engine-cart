import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const DeliverySection = () => {
  return (
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
              <p className="text-gray-600 mb-4">Забрать с нашей мастерской в городе Кинель, Самарская область</p>
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
              <p className="font-semibold text-primary">От 500 ₽</p>
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
              <p className="text-gray-600 mb-4">Наличные, карта, перевод</p>
              <p className="font-semibold text-primary">Удобно и просто</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DeliverySection;