import Link from 'next/link';

export default function HeroSection() {
 return (
  <div className="relative bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 text-white min-h-screen flex items-center justify-center overflow-hidden">
   <div className="absolute inset-0 opacity-10">
    <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
    <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300 rounded-full blur-3xl"></div>
   </div>
   <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center">
     {/* Badge */}
     <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/30">
      <span className="relative flex h-3 w-3">
       <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
       <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
      </span>
      <span className="text-sm font-medium">Hızlı ve Güvenilir Teslimat</span>
     </div>

     {/* Main Heading */}
     <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
      <span className="block">Yazıcı Ticaret</span>
      <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white mt-2">
       Kalite ve Güven
      </span>
     </h1>

     {/* Subheading */}
     <p className="text-xl md:text-3xl mb-4 font-light text-blue-100">
      Depoda Bekleyen Teslimatlarınız
     </p>
     <p className="text-md md:text-lg mb-10 text-blue-200 max-w-2xl mx-auto">
      Beyaz eşya, televizyon ve ankastre ürünleriniz güvenle sizleri bekliyor.
     </p>

     {/* CTA Buttons */}
     <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <Link
       href="/urun-istegi"
       className="group relative bg-white text-blue-600 px-10 py-4 rounded-xl font-bold text-lg shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 w-full sm:w-auto"
      >
       <span className="relative z-10 flex items-center justify-center gap-2">
        Ürün Talep Et
        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
       </span>
      </Link>

      <Link
       href="/kargo-takip"
       className="group relative bg-blue-800/80 backdrop-blur-sm text-white px-10 py-4 rounded-xl font-bold text-lg border-2 border-white/30 hover:bg-blue-900/80 hover:border-white/50 transition-all duration-300 hover:scale-105 w-full sm:w-auto"
      >
       <span className="relative z-10 flex items-center justify-center gap-2">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
        Kargo Takip
       </span>
      </Link>
     </div>

     {/* Stats Section */}
     <div className="grid grid-cols-2 gap-8 mt-16 max-w-3xl mx-auto">
      <div className="text-center">
       <div className="text-3xl md:text-4xl font-bold mb-2">500+</div>
       <div className="text-sm md:text-base text-blue-200">Mutlu Müşteri</div>
      </div>
      <div className="text-center">
       <div className="text-3xl md:text-4xl font-bold mb-2">%100</div>
       <div className="text-sm md:text-base text-blue-200">Güvenli Teslimat</div>
      </div>
     </div>
    </div>
   </div>
  </div>
 );
}