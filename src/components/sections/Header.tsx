import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
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
  );
};

export default Header;