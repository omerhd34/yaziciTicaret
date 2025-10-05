'use client';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function GaleriSection() {
 const [currentIndex, setCurrentIndex] = useState(0);
 const [itemsPerPage, setItemsPerPage] = useState(3);

 const images = [
  { id: 1, url: './tv.png', alt: 'Televizyon', baslik: 'Akıllı Televizyonlar', urunler: 'Samsung, LG, Philips, Grundig', desc: 'Yüksek çözünürlük ve akıllı özelliklerle görsel şölen sunan televizyonlar' },
  { id: 2, url: './supurge.png', alt: 'Elektrikli Süpürge', baslik: 'Elektrikli Süpürge', urunler: 'Profilo, Philips, Miele, Arnica, Karcher', desc: 'Güçlü emme performansı ile evinizi tertemiz yapan elektrikli süpürgeler' },
  { id: 3, url: './bulasık.png', alt: 'Bulaşık Makinesi', baslik: 'Bulaşık Makinesi', urunler: 'Profilo, Electrolux, Grundig', desc: 'Enerji tasarruflu ve sessiz çalışan bulaşık makineleri ile pratik temizlik' },
  { id: 4, url: './camasır.png', alt: 'Çamaşır Makinesi', baslik: 'Çamaşır Makinesi', urunler: 'Profilo, Electrolux, Grundig', desc: 'Çamaşırlarınıza özen gösteren yeni nesil çamaşır makineleri' },
  { id: 5, url: './kurutma.png', alt: 'Kurutma Makinesi', baslik: 'Kurutma Makinesi', urunler: 'Profilo, Electrolux, Grundig', desc: 'Hızlı ve etkili kurutma teknolojisi ile zamandan tasarruf edin' },
  { id: 6, url: './ocak.png', alt: 'Ocak', baslik: 'Ocak', urunler: 'Profilo, Simfer, Ferre', desc: 'Güvenli ve verimli pişirme deneyimi sunan modern ocaklar' },
  { id: 7, url: './fırın.png', alt: 'Fırın', baslik: 'Fırın', urunler: 'Profilo, Simfer', desc: 'Profesyonel pişirme sonuçları için son teknoloji fırınlar' },
  { id: 8, url: './mikrodalga.png', alt: 'Mikrodalga', baslik: 'Mikrodalga', urunler: 'Profilo, Simfer', desc: 'Hızlı ısıtma ve pişirme için pratik mikrodalga çözümleri' },
  { id: 9, url: './ankastre.png', alt: 'Ankastre', baslik: 'Ankastre Set', urunler: 'Profilo, Simfer, Ferre', desc: 'Mutfağınızı şıklıkla tamamlayan ankastre ürün setleri' },
  { id: 10, url: './klima.png', alt: 'Klima', baslik: 'Klima', urunler: 'Profilo, Airfel, Daikin, Mitsubishi', desc: 'Her mevsim konforlu bir ortam için enerji tasarruflu klimalar' },
  { id: 11, url: './suaritma.png', alt: 'Su Arıtma', baslik: 'Su Arıtma Cihazı', urunler: 'Profilo', desc: 'Sağlıklı ve temiz su için güvenilir arıtma sistemleri' },
  { id: 12, url: './susebili.png', alt: 'Su Sebili', baslik: 'Su Sebili', urunler: 'Profilo', desc: 'Sıcak ve soğuk su ihtiyacınız için pratik su sebilleri' },
 ];

 useEffect(() => {
  const handleResize = () => {
   const width = window.innerWidth;
   if (width < 640) {
    setItemsPerPage(1); // Mobile - 1 kolon
   } else if (width >= 640 && width < 768) {
    setItemsPerPage(2); // Small tablet - 2 kolon
   } else if (width >= 768 && width < 1024) {
    setItemsPerPage(2); // Tablet - 2 kolon
   } else {
    setItemsPerPage(3); // Desktop - 3 kolon
   }
  };

  handleResize();
  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
 }, []);

 // Index değiştiğinde sınırları kontrol et
 useEffect(() => {
  if (currentIndex >= images.length) {
   setCurrentIndex(0);
  }
 }, [itemsPerPage, currentIndex, images.length]);

 const totalPages = Math.ceil(images.length / itemsPerPage);

 const nextSlide = () => {
  setCurrentIndex((prev) => {
   const nextIndex = prev + itemsPerPage;
   return nextIndex >= images.length ? 0 : nextIndex;
  });
 };

 const prevSlide = () => {
  setCurrentIndex((prev) => {
   const prevIndex = prev - itemsPerPage;
   return prevIndex < 0 ? (totalPages - 1) * itemsPerPage : prevIndex;
  });
 };

 const goToSlide = (pageIndex) => {
  setCurrentIndex(pageIndex * itemsPerPage);
 };

 const currentPage = Math.floor(currentIndex / itemsPerPage);

 return (
  <section className="py-6 sm:py-12 lg:py-16 bg-gray-50">
   <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
    <div className="text-center mb-5 sm:mb-10 lg:mb-12">
     <h2 className="font-bold text-gray-900 mb-2 sm:mb-4 text-2xl sm:text-4xl lg:text-5xl">
      Ürünlerimiz
     </h2>
     <p className="text-[16px] sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-2">
      Beyaz eşyadan elektronik ürünlere kadar geniş ürün yelpazemizi inceleyin ve size en uygun olanı bulun.
     </p>
    </div>

    <div className="relative">
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 lg:gap-6 min-h-[400px] sm:min-h-[450px]">
      {images
       .slice(currentIndex, currentIndex + itemsPerPage)
       .map((image) => (
        <div
         key={image.id}
         className="bg-white rounded-lg sm:rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
        >
         <div className="w-full h-44 sm:h-52 md:h-56 lg:h-60 overflow-hidden bg-gray-50 flex items-center justify-center p-3 sm:p-4">
          <img
           src={image.url}
           alt={image.alt}
           className="w-full h-full object-contain"
          />
         </div>
         <div className="p-3 sm:p-5 lg:p-6">
          <h3 className="text-base sm:text-xl lg:text-2xl text-center font-bold text-blue-900 mb-1.5 sm:mb-3">
           {image.baslik}
          </h3>
          <p className="text-gray-600 text-[16px] sm:text-base mb-2 sm:mb-4 leading-relaxed">
           {image.desc}
          </p>
          <div className="border-t pt-2 sm:pt-4">
           <p className="text-sm sm:text-base font-bold text-gray-900 mb-1 sm:mb-2">
            Satılan Markalar:
           </p>
           <p className="text-gray-600 text-xs sm:text-[16px] leading-relaxed">
            {image.urunler}
           </p>
          </div>
         </div>
        </div>
       ))}
     </div>

     {/* Navigation */}
     <div className="flex justify-center items-center gap-1 sm:gap-3 mt-5 sm:mt-8 lg:mt-10 flex-wrap">
      <button
       onClick={prevSlide}
       className="p-2 sm:p-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 shadow-md transition-all duration-200 transform hover:scale-110 active:scale-95"
       aria-label="Önceki"
      >
       <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      <div className="flex gap-1 sm:gap-2 flex-wrap justify-center max-w-[240px] sm:max-w-none">
       {Array.from({ length: totalPages }).map((_, index) => (
        <button
         key={index}
         onClick={() => goToSlide(index)}
         className={`w-7 h-7 sm:w-9 sm:h-9 lg:w-10 lg:h-10 flex items-center justify-center rounded sm:rounded-lg border font-semibold text-xs sm:text-base transition-all duration-200
                    ${currentPage === index
           ? 'bg-blue-600 text-white border-blue-600 scale-110'
           : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100 hover:border-gray-400'
          }
                  `}
         aria-label={`Sayfa ${index + 1}`}
         aria-current={currentPage === index ? 'page' : undefined}
        >
         {index + 1}
        </button>
       ))}
      </div>

      <button
       onClick={nextSlide}
       className="p-2 sm:p-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 shadow-md transition-all duration-200 transform hover:scale-110 active:scale-95"
       aria-label="Sonraki"
      >
       <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>
     </div>
    </div>
   </div>
  </section>
 );
}