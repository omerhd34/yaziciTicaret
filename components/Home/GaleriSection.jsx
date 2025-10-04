'use client';
import { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

export default function GaleriSection() {
 const [currentIndex, setCurrentIndex] = useState(0);

 const images = [
  { id: 1, url: './tv.png', alt: 'Televizyon', baslik: 'Akıllı Televizyonlar' },
  { id: 2, url: './supurge.png', alt: 'Elektrikli Süpürge', baslik: 'Elektrikli Süpürge' },
  { id: 3, url: './bulasık.png', alt: 'Bulaşık Makinesi', baslik: 'Bulaşık Makinesi' },
  { id: 4, url: './camasır.png', alt: 'Çamaşır Makinesi', baslik: 'Çamaşır Makinesi' },
  { id: 5, url: './kurutma.png', alt: 'Kurutma Makinesi', baslik: 'Kurutma Makinesi' },
  { id: 6, url: './ocak.png', alt: 'Ocak', baslik: 'Ocak' },
  { id: 7, url: './fırın.png', alt: 'Fırın', baslik: 'Fırın' },
  { id: 8, url: './mikrodalga.png', alt: 'Mikrodalga', baslik: 'Mikrodalga' },
  { id: 9, url: './ankastre.png', alt: 'Ankastre', baslik: 'Ankastre Set' },
  { id: 10, url: './klima.png', alt: 'Klima', baslik: 'Klima' },
  { id: 11, url: './suaritma.png', alt: 'Su Arıtma', baslik: 'Su Arıtma Cihazı' },
  { id: 12, url: './susebili.png', alt: 'Su Sebili', baslik: 'Su Sebili' },
 ];

 const nextSlide = () => {
  setCurrentIndex((prev) =>
   prev + 3 < images.length ? prev + 3 : 0
  );
 };

 const prevSlide = () => {
  setCurrentIndex((prev) =>
   prev - 3 >= 0 ? prev - 3 : images.length - (images.length % 3 || 3)
  );
 };

 const goToSlide = (index) => {
  setCurrentIndex(index);
 };

 return (
  <section className="py-16 bg-gray-50 ">
   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-5 sm:mb-12">
     <h2 className="font-bold text-gray-900 mb-4 text-2xl sm:text-5xl">
      Ürünlerimiz
     </h2>
     <p className="text-[18px] sm:text-lg text-gray-600">
      Geniş ürün yelpazemizi keşfedin
     </p>
    </div>

    <div className="relative">
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {images
       .slice(currentIndex, currentIndex + 3)
       .map((image) => (
        <div
         key={image.id}
         className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500"
        >
         <div className="w-full h-40 md:h-48 lg:h-56 overflow-hidden">
          <img
           src={image.url}
           alt={image.alt}
           className="w-full h-full object-contain"
          />
         </div>
         <div className="p-4">
          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-1">
           {image.baslik}
          </h3>
          <p className="text-gray-600 text-sm">
           Kaliteli ve uygun fiyatlı {image.alt.toLowerCase()} ürünleri
          </p>
         </div>
        </div>
       ))}
     </div>

     <div className="flex justify-center items-center gap-3 mt-8">
      <button
       onClick={prevSlide}
       className="p-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 shadow-md transition transform hover:scale-110"
      >
       <FiChevronLeft className="w-6 h-6" />
      </button>
      {Array.from({ length: Math.ceil(images.length / 3) }).map((_, index) => (
       <button
        key={index}
        onClick={() => goToSlide(index * 3)}
        className={`w-8 h-8 flex items-center justify-center rounded-md border font-medium
                  ${currentIndex === index * 3
          ? 'bg-blue-600 text-white border-blue-600'
          : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
         }
                `}
       >
        {index + 1}
       </button>
      ))}
      <button
       onClick={nextSlide}
       className="p-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 shadow-md transition transform hover:scale-110"
      >
       <FiChevronRight className="w-6 h-6" />
      </button>
     </div>
    </div>
   </div>
  </section>
 );
}
