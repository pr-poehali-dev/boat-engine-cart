import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useCart } from "@/contexts/CartContext";

const CartPage = () => {
  const { items, updateQuantity, removeFromCart, getTotalPrice, clearCart } = useCart();

  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity < 1) {
      removeFromCart(id);
    } else {
      updateQuantity(id, newQuantity);
    }
  };

  const handlePayment = () => {
    // Формируем сообщение для WhatsApp с заказом
    const orderItems = items.map(item => 
      `• ${item.name} x${item.quantity} = ${(item.price * item.quantity).toLocaleString()} ₽`
    ).join('\n');
    
    const total = getTotalPrice();
    const message = `🛒 ЗАКАЗ НА ОПЛАТУ

${orderItems}

💰 Итого: ${total.toLocaleString()} ₽

📞 Прошу связаться для оформления оплаты`;

    const whatsappUrl = `https://wa.me/79991700787?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50/50 to-white">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <Icon name="ShoppingCart" size={64} className="mx-auto text-gray-300 mb-6" />
            <h1 className="text-3xl font-bold text-navy-dark mb-4">Корзина пуста</h1>
            <p className="text-xl text-gray-600 mb-8">Добавьте товары в корзину, чтобы оформить заказ</p>
            <Button onClick={() => window.location.href = '#catalog'} size="lg">
              <Icon name="ArrowLeft" size={16} className="mr-2" />
              Перейти к каталогу
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50/50 to-white">
      <div className="container mx-auto px-4 py-20">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-navy-dark mb-4">Корзина</h1>
          <p className="text-xl text-gray-600">Проверьте ваш заказ перед оплатой</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Список товаров */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <Card key={item.id} className="border-blue-100">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-20 h-20 object-contain bg-gray-50 rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-navy-dark">{item.name}</h3>
                      <p className="text-sm text-gray-600 line-clamp-2">{item.description}</p>
                      <p className="text-lg font-bold text-primary mt-1">
                        {item.price.toLocaleString()} ₽
                      </p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                      >
                        <Icon name="Minus" size={16} />
                      </Button>
                      <span className="w-12 text-center font-semibold">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      >
                        <Icon name="Plus" size={16} />
                      </Button>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <Icon name="Trash2" size={16} />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Итоги заказа */}
          <div className="lg:col-span-1">
            <Card className="border-blue-100 sticky top-4">
              <CardHeader>
                <CardTitle className="text-navy-dark">Итоги заказа</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span>{item.name} x{item.quantity}</span>
                      <span>{(item.price * item.quantity).toLocaleString()} ₽</span>
                    </div>
                  ))}
                </div>
                
                <div className="border-t pt-4">
                  <div className="flex justify-between font-bold text-lg">
                    <span>Итого:</span>
                    <span className="text-primary">{getTotalPrice().toLocaleString()} ₽</span>
                  </div>
                </div>

                <div className="space-y-3 pt-4">
                  <Button onClick={handlePayment} className="w-full" size="lg">
                    <Icon name="CreditCard" size={16} className="mr-2" />
                    Оформить заказ
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    onClick={clearCart} 
                    className="w-full"
                  >
                    <Icon name="Trash2" size={16} className="mr-2" />
                    Очистить корзину
                  </Button>
                </div>

                <div className="text-xs text-gray-500 pt-4">
                  <p>💳 Оплата картой через WhatsApp</p>
                  <p>🚚 Самовывоз из мастерской</p>
                  <p>📞 Бесплатная консультация</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;