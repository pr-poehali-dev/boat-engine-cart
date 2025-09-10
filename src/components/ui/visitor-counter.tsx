import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';

const VisitorCounter = () => {
  const [visitCount, setVisitCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const updateVisitCount = () => {
      // Получаем текущий счётчик из localStorage
      const currentCount = localStorage.getItem('siteVisitCount');
      const count = currentCount ? parseInt(currentCount, 10) : 0;
      
      // Увеличиваем счётчик на 1
      const newCount = count + 1;
      
      // Сохраняем обновлённый счётчик
      localStorage.setItem('siteVisitCount', newCount.toString());
      
      setVisitCount(newCount);
      setIsLoading(false);
    };

    // Обновляем счётчик при загрузке компонента
    updateVisitCount();
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-white/90 backdrop-blur-sm border border-blue-100 rounded-lg px-4 py-2 shadow-lg z-40">
      <div className="flex items-center space-x-2 text-sm text-gray-600">
        <Icon name="Eye" size={16} className="text-blue-500" />
        <span>Просмотров:</span>
        <span className="font-semibold text-navy-dark">{visitCount.toLocaleString()}</span>
      </div>
    </div>
  );
};

export default VisitorCounter;