'use client';
import { useState, useEffect } from 'react';

export default function GaleriSection() {
 const [currentIndex, setCurrentIndex] = useState(0);
 const [isAutoPlay, setIsAutoPlay] = useState(true);

 const images = [
  { id: 1, url: './tv.png', alt: 'Televizyon', baslik: 'Akıllı Televizyonlar', padding: 'p-20' },
  { id: 2, url: './beyazesya.png', alt: 'Beyaz Eşya', baslik: 'Beyaz Eşya Ürünleri', padding: '' },
  { id: 3, url: './ankastre.png', alt: 'Ankastre', baslik: 'Ankastre Set', padding: 'p-15' },
  { id: 4, url: './supurge.png', alt: 'Elektrikli Süpürge', baslik: 'Elektrikli Süpürgeler', padding: 'p-12' },
  { id: 5, url: './susebili.png', alt: 'Su Sebili', baslik: 'Su Sebilleri', padding: 'p-12' },
  { id: 6, url: './suaritma.png', alt: 'Su Arıtma', baslik: 'Su Arıtma Cihazları', padding: 'p-20' },
 ];

 useEffect(() => {
  if (!isAutoPlay) return;

  const interval = setInterval(() => {
   setCurrentIndex((prev) => (prev + 1) % images.length);
  }, 4000);

  return () => clearInterval(interval);
 }, [isAutoPlay, images.length]);

 const goToSlide = (index) => {
  setCurrentIndex(index);
  setIsAutoPlay(false);
 };

 const nextSlide = () => {
  setCurrentIndex((prev) => (prev + 1) % images.length);
  setIsAutoPlay(false);
 };

 const prevSlide = () => {
  setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  setIsAutoPlay(false);
 };

 return (
  <section className="py-16 bg-gradient-to-b from-white to-gray-50">
   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
     <h2 className="font-bold text-gray-900 mb-4 text-3xl sm:text-5xl">
      Ürünlerimiz
     </h2>
     <p className="text-lg text-gray-600">
      Geniş ürün yelpazemizi keşfedin
     </p>
    </div>

    <div className="relative">
     <div className="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-b from-gray-800 to-gray-900">
      {images.map((image, index) => (
       <div
        key={image.id}
        className={`absolute w-full h-full transition-all duration-700 ease-in-out ${index === currentIndex
         ? 'opacity-100 translate-x-0'
         : index < currentIndex
          ? 'opacity-0 -translate-x-full'
          : 'opacity-0 translate-x-full'
         }`}
       >
        <div className={`w-full h-full flex items-center justify-center ${image.padding} pb-36`}>
         <img
          src={image.url}
          alt={image.alt}
          className="w-full h-full object-contain drop-shadow-2xl"
         />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent pointer-events-none"></div>

        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white bg-gradient-to-t from-black/95 to-transparent">
         <h3 className="text-2xl md:text-4xl font-bold mb-2">
          {image.baslik}
         </h3>
         <p className="text-sm md:text-lg text-gray-200">
          Kaliteli ve uygun fiyatlı {image.alt.toLowerCase()} ürünleri
         </p>
        </div>
       </div>
      ))}
     </div>

     <button
      onClick={prevSlide}
      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
      aria-label="Önceki"
     >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
     </button>

     <button
      onClick={nextSlide}
      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
      aria-label="Sonraki"
     >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
     </button>

     <div className="flex justify-center gap-3 mt-6">
      {images.map((_, index) => (
       <button
        key={index}
        onClick={() => goToSlide(index)}
        className={`transition-all duration-300 rounded-full ${index === currentIndex
         ? 'w-12 h-3 bg-blue-600'
         : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
         }`}
        aria-label={`Slayt ${index + 1}`}
       />
      ))}
     </div>
    </div>

    <div className="hidden md:grid grid-cols-3 sm:grid-cols-6 gap-4 mt-8">
     {images.map((image, index) => (
      <button
       key={image.id}
       onClick={() => goToSlide(index)}
       className={`relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-gray-100 ${index === currentIndex ? 'ring-4 ring-blue-600 scale-105' : 'hover:scale-105'
        }`}
      >
       <div className="w-full h-28 flex items-center justify-center p-4">
        <img
         src={image.url}
         alt={image.alt}
         className="max-w-[85%] max-h-[85%] object-contain"
        />
       </div>
       <div className={`absolute inset-0 ${index === currentIndex ? 'bg-blue-600/20' : 'bg-black/0 hover:bg-black/10'
        } transition-all duration-300`}></div>
      </button>
     ))}
    </div>
   </div>
  </section>
 );
}