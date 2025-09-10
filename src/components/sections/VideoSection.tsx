const VideoSection = () => {
  return (
    <section id="video" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-navy-dark mb-6">Теперь выход на воду станет гораздо комфортнее!</h2>
          <p className="text-xl text-gray-600">
            Посмотрите, как мы создаём надёжные тележки для лодочных моторов
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative w-full" style={{ paddingBottom: '56.25%' /* 16:9 aspect ratio */ }}>
            <iframe
              src="https://rutube.ru/play/embed/ef5a953d5b6d58aa03fd27513b692a5c/"
              className="absolute top-0 left-0 w-full h-full rounded-xl shadow-2xl"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Видео о производстве тележек для лодочных моторов"
            />
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-600 max-w-2xl mx-auto">
              В этом видео вы увидите весь процесс изготовления наших тележек — 
              от подготовки материалов до финальной проверки качества.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;