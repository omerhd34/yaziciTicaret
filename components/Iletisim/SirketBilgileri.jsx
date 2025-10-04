export default function SirketBilgileri() {
 const kurulus_yili = 1997;
 const gecen_yil = new Date().getFullYear() - kurulus_yili;

 return (
  <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white rounded-2xl shadow-2xl p-6 sm:p-10 relative overflow-hidden">
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
 );
}