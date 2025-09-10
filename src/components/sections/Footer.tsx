const Footer = () => {
  return (
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
  );
};

export default Footer;