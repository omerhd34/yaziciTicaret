import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

export default function IletisimPage() {
 const kurulus_yili = 1997;
 const gecen_yil = new Date().getFullYear() - kurulus_yili;

 return (
  <div className="py-16 bg-gray-50">
   <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <h1 className="text-4xl font-bold text-center mb-12">İletişim</h1>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
     {/* Mağaza 1 */}
     <div className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-2xl font-bold mb-6 text-blue-600">Mağaza 1</h2>
      <div className="space-y-4">
       <div className="flex items-start">
        <div className="text-2xl mr-4 text-blue-600">
         <FaMapMarkerAlt />
        </div>
        <div>
         <p className="font-semibold">Adres:</p>
         <p className="text-gray-700">
          Kemalpaşa, Atatürk Blv. No:54/E<br />
          16400 İnegöl/Bursa
         </p>
        </div>
       </div>

       <div className="flex items-center">
        <div className="text-2xl mr-4 text-blue-600">
         <FaPhone />
        </div>
        <div className="flex items-center space-x-2">
         <p className="font-semibold">Telefon:</p>
         <p className="text-gray-700">0544 796 77 70</p>
         <Link
          href="https://wa.me/905447967770"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-500 text-2xl hover:scale-110 transition-transform duration-700"
         >
          <FaWhatsapp />
         </Link>
        </div>
       </div>
      </div>

      <div className="mt-6 overflow-hidden rounded-lg shadow-md border-2 border-gray-100 hover:shadow-xl transition-shadow duration-700">
       <Image
        src="/profilo1.png"
        width={500}
        height={300}
        alt="Mağaza 1"
        className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
       />
      </div>
     </div>

     {/* Mağaza 2 */}
     <div className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-2xl font-bold mb-6 text-blue-600">Mağaza 2</h2>
      <div className="space-y-4">
       <div className="flex items-start">
        <div className="text-2xl mr-4 text-blue-600">
         <FaMapMarkerAlt />
        </div>
        <div>
         <p className="font-semibold">Adres:</p>
         <p className="text-gray-700">
          Cuma mah. Atatürk bulvarı No:51<br />
          16400 İnegöl/Bursa
         </p>
        </div>
       </div>

       <div className="flex items-center">
        <div className="text-2xl mr-4 text-blue-600">
         <FaPhone />
        </div>
        <div className="flex items-center space-x-2">
         <p className="font-semibold">Telefon:</p>
         <p className="text-gray-700">0501 349 69 91</p>
         <Link
          href="https://wa.me/905013496991"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-500 text-2xl hover:scale-110 transition-transform duration-700"
         >
          <FaWhatsapp />
         </Link>
        </div>
       </div>
      </div>

      <div className="mt-6 overflow-hidden rounded-lg shadow-md border-2 border-gray-100 hover:shadow-xl transition-shadow duration-700">
       <Image
        src="/profilo1.png"
        width={500}
        height={300}
        alt="Mağaza 2"
        className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
       />
      </div>
     </div>
    </div>

    {/* Çalışma Saatleri */}
    <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
     <h2 className="text-2xl font-bold mb-6 text-center">Çalışma Saatleri</h2>
     <div className="text-center">
      <p className="text-lg text-gray-700 mb-2">
       <span className="font-semibold">Hafta İçi:</span> 09:00 - 19:00
      </p>
      <p className="text-lg text-gray-700">
       <span className="font-semibold">Cumartesi:</span> 09:00 - 19:00
      </p>
      <p className="text-lg text-gray-700 mt-2">
       <span className="font-semibold">Pazar:</span> 12:00 - 17:00
      </p>
     </div>
    </div>

    {/* Alt Bilgi */}
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg shadow-lg p-8 text-center">
     <h2 className="text-3xl font-bold mb-4">Yazıcı Ticaret</h2>
     <p className="text-xl mb-2">
      {kurulus_yili} yılından beri hizmetinizdeyiz
     </p>
     <p className="text-lg">
      {gecen_yil} yıldır güvenle tercih edilen yazıcı ve kargo hizmetleri
     </p>
    </div>
   </div>
  </div>
 );
}
