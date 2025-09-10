import Icon from "@/components/ui/icon";

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
  );
};

export default ProductionSection;