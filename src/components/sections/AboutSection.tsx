import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-navy-dark mb-6">О нашем производстве</h2>
          <p className="text-xl text-gray-600">
            Для Вас мы создаем надежные тележки для лодочных моторов, 
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
              <p className="text-gray-600">Полный цикл производства в нашей мастерской в России</p>
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
  );
};

export default AboutSection;