import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useCart } from "@/contexts/CartContext";
import { Badge } from "@/components/ui/badge";

const Header = () => {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

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
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              onClick={() => window.location.href = '/cart'}
              className="relative"
            >
              <Icon name="ShoppingCart" size={16} className="mr-2" />
              Корзина
              {totalItems > 0 && (
                <Badge 
                  className="absolute -top-2 -right-2 min-w-[20px] h-5 text-xs bg-primary text-white rounded-full flex items-center justify-center"
                >
                  {totalItems}
                </Badge>
              )}
            </Button>
            <Button className="hidden md:flex">
              <Icon name="Phone" size={16} className="mr-2" />
              Заказать звонок
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;