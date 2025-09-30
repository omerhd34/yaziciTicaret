export default function IletisimPage() {
 const kurulus_yili = 1997;
 const gecen_yil = new Date().getFullYear() - kurulus_yili;

 return (
  <div className="py-16 bg-gray-50">
   <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <h1 className="text-4xl font-bold text-center mb-12">İletişim</h1>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
     <div className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-2xl font-bold mb-6 text-blue-600">Mağaza 1</h2>
      <div className="space-y-4">
       <div className="flex items-start">
        <div className="text-2xl mr-4">📍</div>
        <div>
         <p className="font-semibold">Adres:</p>
         <p className="text-gray-700">
          Kemalpaşa, Atatürk Blv. No:54 D:E<br />
          16400 İnegöl/Bursa
         </p>
        </div>
       </div>

       <div className="flex items-start">
        <div className="text-2xl mr-4">📞</div>
        <div>
         <p className="font-semibold">Telefon:</p>
         <p className="text-gray-700">0544 796 77 70</p>
        </div>
       </div>
      </div>
     </div>

     <div className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-2xl font-bold mb-6 text-blue-600">Mağaza 2</h2>
      <div className="space-y-4">
       <div className="flex items-start">
        <div className="text-2xl mr-4">📍</div>
        <div>
         <p className="font-semibold">Adres:</p>
         <p className="text-gray-700">
          Cuma mah. Atatürk bulvarı No:51<br />
          16400 İnegöl/Bursa
         </p>
        </div>
       </div>

       <div className="flex items-start">
        <div className="text-2xl mr-4">📞</div>
        <div>
         <p className="font-semibold">Telefon:</p>
         <p className="text-gray-700">0544 796 77 70</p>
        </div>
       </div>
      </div>
     </div>
    </div>

    <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
     <h2 className="text-2xl font-bold mb-6 text-center">Çalışma Saatleri</h2>
     <div className="text-center">
      <p className="text-lg text-gray-700 mb-2">
       <span className="font-semibold">Hafta İçi:</span> 09:00 - 18:00
      </p>
      <p className="text-lg text-gray-700">
       <span className="font-semibold">Cumartesi:</span> 09:00 - 16:00
      </p>
      <p className="text-lg text-gray-700 mt-2">
       <span className="font-semibold">Pazar:</span> Kapalı
      </p>
     </div>
    </div>

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