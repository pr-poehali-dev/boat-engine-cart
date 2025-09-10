const Footer = () => {
  return (
    <footer className="bg-navy-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
              <img 
                src="https://cdn.poehali.dev/files/2e151b32-f5dd-44dd-b586-1c313fd37e75.jpg" 
                alt="OPOZIT_LAB.RU" 
                className="h-8 object-contain"
              />
            </div>
            <p className="opacity-90 text-lg">
              Надежные тележки для лодочных моторов собственного производства
            </p>
          </div>

          <div className="text-center md:text-right">
            <h4 className="font-semibold mb-4 text-xl">Контакты</h4>
            <div className="space-y-2 opacity-90">
              <p className="text-lg">+7 999 170 07 87</p>
              <p>zvallli@mail.ru</p>
              <p>Самарская область, г. Кинель<br />ул. Светлая, д. 96</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center opacity-70">
          <p>&copy; 2019 OpOzit_Lab. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;