"use client"
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp, FaMapMarkerAlt, FaPhone, FaTimes, FaEnvelope } from "react-icons/fa";

export default function IletisimPage() {
 const kurulus_yili = 1997;
 const gecen_yil = new Date().getFullYear() - kurulus_yili;

 const [selectedImage, setSelectedImage] = useState(null);

 const openImage = (src, alt) => {
  setSelectedImage({ src, alt });
 };

 const closeImage = () => {
  setSelectedImage(null);
 };

 return (
  <div className="py-10 sm:py-16 bg-gray-50">
   <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <h1 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-blue-800">İletişim</h1>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
     {/* Mağaza 1 */}
     <div className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-[20px] sm:text-2xl font-bold mb-6 text-blue-600">Mağaza 1</h2>
      <div className="space-y-4">
       <div className="flex items-start">
        <div className="text-xl sm:text-2xl mr-4 text-blue-600">
         <FaMapMarkerAlt />
        </div>
        <div>
         <p className="font-semibold">Adres:</p>
         <p className="text-gray-700 text-[16px] sm:text-[18px]">
          Kemalpaşa, Atatürk Blv. No:54/E 16400 İnegöl/Bursa
         </p>
        </div>
       </div>

       <div className="flex items-start">
        <div className="text-xl sm:text-2xl mr-4 text-blue-600">
         <FaPhone />
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
         <span className="font-semibold">Telefon:</span>
         <div className="flex items-center gap-3">
          <span className="px-3 py-1 bg-gray-100 rounded-lg text-gray-800 font-medium shadow-sm hover:bg-gray-200 transition-colors text-[16px]">
           0544 796 77 70
          </span>
          <Link
           href="https://wa.me/905447967770"
           target="_blank"
           rel="noopener noreferrer"
           className="flex items-center justify-center w-10 h-10 rounded-full bg-green-500 text-white hover:bg-green-600 transition-all duration-500 shadow-md hover:scale-110"
          >
           <FaWhatsapp className="text-xl" />
          </Link>
         </div>
        </div>
       </div>

       <div className="flex items-start">
        <div className="text-xl sm:text-2xl mr-4 text-blue-600">
         <FaEnvelope />
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
         <span className="font-semibold">Mail:</span>
         <Link
          href="mailto:ilhan@yazici.gen.tr"
          className="px-3 py-1 bg-gray-100 rounded-lg text-gray-800 font-medium shadow-sm hover:bg-gray-200 transition-colors text-[16px]"
         >
          ilhan@yazici.gen.tr
         </Link>
        </div>
       </div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3">
       <div
        onClick={() => openImage("/prof2_ibo.jpg", "Mağaza 1")}
        className="group relative overflow-hidden rounded-lg shadow-md border-2 border-gray-100 hover:shadow-2xl transition-all duration-500 cursor-pointer"
       >
        <div className="overflow-hidden">
         <Image
          src="/prof2_ibo.jpg"
          width={500}
          height={300}
          alt="Mağaza 1 - Görsel 1"
          className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
         />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
       </div>
       <div
        onClick={() => openImage("/prof1_ibo.png", "Mağaza 1")}
        className="group relative overflow-hidden rounded-lg shadow-md border-2 border-gray-100 hover:shadow-2xl transition-all duration-500 cursor-pointer"
       >
        <div className="overflow-hidden">
         <Image
          src="/prof1_ibo.png"
          width={500}
          height={300}
          alt="Mağaza 1 - Görsel 2"
          className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
         />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
       </div>
      </div>
     </div>

     {/* Mağaza 2 */}
     <div className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-[20px] sm:text-2xl font-bold mb-6 text-blue-600">Mağaza 2</h2>
      <div className="space-y-4">
       <div className="flex items-start">
        <div className="text-xl sm:text-2xl mr-4 text-blue-600">
         <FaMapMarkerAlt />
        </div>
        <div>
         <p className="font-semibold">Adres:</p>
         <p className="text-gray-700 text-[16px] sm:text-[18px]">
          Cuma mah. Atatürk bulvarı No:51 16400 İnegöl/Bursa
         </p>
        </div>
       </div>

       <div className="flex items-start">
        <div className="text-xl sm:text-2xl mr-4 text-blue-600">
         <FaPhone />
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
         <span className="font-semibold">Telefon:</span>
         <div className="flex items-center gap-3">
          <span className="px-3 py-1 bg-gray-100 rounded-lg text-gray-800 font-medium shadow-sm hover:bg-gray-200 transition-colors text-[16px]">
           0501 349 69 91
          </span>
          <Link
           href="https://wa.me/905013496991"
           target="_blank"
           rel="noopener noreferrer"
           className="flex items-center justify-center w-10 h-10 rounded-full bg-green-500 text-white hover:bg-green-600 transition-all duration-500 shadow-md hover:scale-110"
          >
           <FaWhatsapp className="text-xl" />
          </Link>
         </div>
        </div>
       </div>

       <div className="flex items-start">
        <div className="text-xl sm:text-2xl mr-4 text-blue-600">
         <FaEnvelope />
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
         <span className="font-semibold">Mail:</span>
         <Link
          href="mailto:ilhan@yazici.gen.tr"
          className="px-3 py-1 bg-gray-100 rounded-lg text-gray-800 font-medium shadow-sm hover:bg-gray-200 transition-colors text-[16px]"
         >
          ilhan@yazici.gen.tr
         </Link>
        </div>
       </div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3">
       <div
        onClick={() => openImage("/prof2_bedo.jpg", "Mağaza 2")}
        className="group relative overflow-hidden rounded-lg shadow-md border-2 border-gray-100 hover:shadow-2xl transition-all duration-500 cursor-pointer"
       >
        <div className="overflow-hidden">
         <Image
          src="/prof2_bedo.jpg"
          width={500}
          height={300}
          alt="Mağaza 2 - Görsel 1"
          className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
         />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
       </div>
       <div
        onClick={() => openImage("/prof1_bedo.jpg", "Mağaza 2")}
        className="group relative overflow-hidden rounded-lg shadow-md border-2 border-gray-100 hover:shadow-2xl transition-all duration-500 cursor-pointer"
       >
        <div className="overflow-hidden">
         <Image
          src="/prof1_bedo.jpg"
          width={500}
          height={300}
          alt="Mağaza 2 - Görsel 2"
          className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
         />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
       </div>
      </div>
     </div>
    </div>

    {/* Çalışma Saatleri */}
    <div className="bg-white rounded-lg shadow-lg p-4 sm:p-8 mb-12">
     <h2 className="text-xl sm:text-2xl font-bold mb-6 text-center">Çalışma Saatleri</h2>
     <div className="text-center">
      <p className="text-[18px] sm:text-lg text-gray-700 mb-2">
       <span className="font-semibold">Hafta İçi:</span> 09:00 - 19:00
      </p>
      <p className="text-[18px] sm:text-lg text-gray-700">
       <span className="font-semibold">Cumartesi:</span> 09:00 - 19:00
      </p>
      <p className="text-[18px] sm:text-lg text-gray-700 mt-2">
       <span className="font-semibold">Pazar:</span> 12:00 - 17:00
      </p>
     </div>
    </div>

    {/* Alt Bilgi */}
    <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white rounded-2xl shadow-2xl p-6 sm:p-10 relative overflow-hidden">
     {/* Dekoratif Arka Plan Desenleri */}
     <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32"></div>
     <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full -ml-24 -mb-24"></div>

     <div className="relative z-10">
      <h2 className="text-2xl sm:text-4xl font-bold mb-6 tracking-wide">Yazıcı Ticaret</h2>

      <div className="space-y-4 mb-8">
       <p className="text-lg sm:text-2xl font-semibold text-blue-100">
        {kurulus_yili} yılından beri hizmetinizdeyiz.
       </p>
       <p className="text-base sm:text-xl text-blue-50">
        <span className="font-bold text-yellow-400">{gecen_yil} yıldır</span> güvenle tercih edilen beyaz eşya hizmetleri
       </p>
      </div>

      <div className="border-t border-blue-400 opacity-30 my-6"></div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
       <div className="bg-blue-400 bg-opacity-10 rounded-xl p-4 backdrop-blur-sm hover:bg-opacity-20 transition-all duration-300">
        <p className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-2">{gecen_yil}+</p>
        <p className="text-sm sm:text-base text-blue-100">Yıllık Tecrübe</p>
       </div>

       <div className="bg-blue-400 bg-opacity-10 rounded-xl p-4 backdrop-blur-sm hover:bg-opacity-20 transition-all duration-300">
        <p className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-2">2</p>
        <p className="text-sm sm:text-base text-blue-100">Şube</p>
       </div>

       <div className="bg-blue-400 bg-opacity-10 rounded-xl p-4 backdrop-blur-sm hover:bg-opacity-20 transition-all duration-300">
        <p className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-2">1000+</p>
        <p className="text-sm sm:text-base text-blue-100">Mutlu Müşteri</p>
       </div>
      </div>

      <div className="mt-8 space-y-3">
       <p className="text-base sm:text-lg text-blue-50 leading-relaxed">
        <span className="text-yellow-400 font-semibold">✓</span> Hızlı ve güvenli kargo çözümleri
       </p>
       <p className="text-base sm:text-lg text-blue-50 leading-relaxed">
        <span className="text-yellow-400 font-semibold">✓</span> Kaliteli hizmet ve uygun fiyat garantisi
       </p>
       <p className="text-base sm:text-lg text-blue-50 leading-relaxed">
        <span className="text-yellow-400 font-semibold">✓</span> İnegöl'ün en köklü beyaz eşya markası
       </p>
      </div>

      <div className="mt-8 text-center">
       <p className="text-sm sm:text-base text-blue-200 italic">
        "Müşteri memnuniyeti bizim için her şeyden önce gelir"
       </p>
      </div>
     </div>
    </div>
   </div>

   {/* Resim Modal */}
   {selectedImage && (
    <div
     onClick={closeImage}
     className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4 animate-fadeIn"
    >
     <button
      onClick={closeImage}
      className="absolute top-4 right-4 text-white bg-red-600 hover:bg-red-700 rounded-full p-3 transition-all duration-300 hover:scale-110 z-10"
     >
      <FaTimes className="text-2xl" />
     </button>

     <div
      onClick={(e) => e.stopPropagation()}
      className="relative max-w-5xl max-h-[90vh] animate-scaleIn"
     >
      <img
       src={selectedImage.src}
       alt={selectedImage.alt}
       className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
      />
      <p className="text-white text-center mt-4 text-lg font-medium">
       {selectedImage.alt}
      </p>
     </div>
    </div>
   )}

   <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes scaleIn {
          from {
            transform: scale(0.9);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        
        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
      `}</style>
  </div>
 );
}