const VideoSection = () => {
  return (
    <section id="video" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-navy-dark mb-6">Теперь выход на воду станет гораздо комфортнее!</h2>
          <p className="text-xl text-gray-600">
            С нашей тележкой погрузка мотора в автомобиль и установка его на транец лодки будет проходить легко и непринуждённо!
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
          

        </div>
      </div>
    </section>
  );
};

export default VideoSection;