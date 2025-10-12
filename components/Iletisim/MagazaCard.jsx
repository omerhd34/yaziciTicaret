'use client';
import Image from 'next/image';
import Link from 'next/link';
import { FaWhatsapp, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

export default function MagazaCard({
 title,
 adres,
 telefon,
 whatsappLink,
 email,
 images,
 mapUrl,
 onImageClick,
}) {
 return (
  <div className="bg-white rounded-lg shadow-lg p-8">
   <h2 className="text-[20px] sm:text-2xl font-bold mb-6 text-blue-600 flex items-center">
    {title}
    <Link
     href="https://www.profilo.com/tr/"
     target="_blank"
     rel="noopener noreferrer"
     className="inline-block ml-2 hover:opacity-80 transition-opacity"
    >
     <Image
      src="/prof.png"
      alt="Profilo"
      width={40}
      height={40}
      className="inline-block"
     />
    </Link>
   </h2>

   <div className="space-y-4">
    {/* Telefon */}
    <div className="flex items-start">
     <div className="text-xl sm:text-2xl mr-4 text-blue-600">
      <FaPhone />
     </div>
     <div className="flex flex-col sm:flex-row sm:items-center gap-3 flex-1">
      <span className="font-semibold w-20">Telefon:</span>
      <div className="flex items-center gap-3">
       <span className="px-3 py-1 bg-gray-100 rounded-lg text-gray-800 font-medium shadow-sm hover:bg-gray-200 transition-colors text-[16px]">
        {telefon}
       </span>
       <Link
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-8 h-8 rounded-full bg-green-500 text-white hover:bg-green-600 transition-all duration-500 shadow-md hover:scale-110"
       >
        <FaWhatsapp className="text-xl" />
       </Link>
      </div>
     </div>
    </div>

    {/* Mail */}
    <div className="flex items-start">
     <div className="text-xl sm:text-2xl mr-4 text-blue-600">
      <FaEnvelope />
     </div>
     <div className="flex flex-col sm:flex-row sm:items-center gap-3 flex-1">
      <span className="font-semibold w-20">Mail:</span>
      <div className="flex items-center gap-3">
       <span className="px-3 py-1 bg-gray-100 rounded-lg text-gray-800 font-medium shadow-sm hover:bg-gray-200 transition-colors text-[16px]">
        {email}
       </span>
       <Link
        href={`mailto:${email}`}
        className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-all duration-500 shadow-md hover:scale-110"
       >
        <FaEnvelope className="text-sm" />
       </Link>
      </div>
     </div>
    </div>

    {/* Adres */}
    <div className="flex items-start">
     <div className="text-xl sm:text-2xl mr-4 text-blue-600">
      <FaMapMarkerAlt />
     </div>
     <div className="flex flex-col sm:flex-row sm:items-start gap-3 flex-1">
      <span className="font-semibold w-20">Adres:</span>
      <span className="px-3 py-1 bg-gray-100 rounded-lg text-gray-800 font-medium shadow-sm hover:bg-gray-200 transition-colors text-[16px]">
       {adres}
      </span>
     </div>
    </div>
   </div>

   {/* Harita */}
   {mapUrl && (
    <div className="mt-4">
     <div className="rounded-lg overflow-hidden shadow-lg border-2 border-gray-200">
      <iframe
       src={mapUrl}
       width="100%"
       height="300"
       style={{ border: 0 }}
       allowFullScreen=""
       loading="lazy"
       referrerPolicy="no-referrer-when-downgrade"
       className="w-full"
      ></iframe>
     </div>
    </div>
   )}

   {/* Mağaza Görselleri */}
   <div className="mt-6 grid grid-cols-2 gap-3">
    {images.map((image, index) => (
     <div
      key={index}
      onClick={() => onImageClick(image.url, image.alt)}
      className="group relative overflow-hidden rounded-lg shadow-md border-2 border-gray-100 hover:shadow-2xl transition-all duration-500 cursor-pointer"
     >
      <div className="overflow-hidden">
       <Image
        src={image.url}
        width={500}
        height={300}
        alt={image.alt}
        className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
       />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
     </div>
    ))}
   </div>
  </div>
 );
}