export default function Footer() {
 return (
  <footer className="bg-gray-800 text-white mt-16">
   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
     <div>
      <h3 className="text-xl font-bold mb-4">Yazıcı Ticaret</h3>
      <p className="text-gray-300">
       Güvenilir ve hızlı teslimat hizmetleri
      </p>
     </div>

     <div>
      <h4 className="text-lg font-semibold mb-4">İletişim</h4>
      <p className="text-gray-300 mb-2">
       <span className="font-semibold">Adres:</span> İnegöl/Bursa
      </p>
      <p className="text-gray-300">
       <span className="font-semibold">Telefon:</span> 0544 796 77 70
      </p>
     </div>

     <div>
      <h4 className="text-lg font-semibold mb-4">Hızlı Linkler</h4>
      <ul className="space-y-2">
       <li>
        <a href="/urun-istegi" className="text-gray-300 hover:text-white">
         Ürün İsteği
        </a>
       </li>
       <li>
        <a href="/kargo-takip" className="text-gray-300 hover:text-white">
         Kargo Takip
        </a>
       </li>
       <li>
        <a href="/iletisim" className="text-gray-300 hover:text-white">
         İletişim
        </a>
       </li>
      </ul>
     </div>
    </div>

    <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
     <p>&copy; {new Date().getFullYear()} Yazıcı Ticaret. Tüm hakları saklıdır.</p>
    </div>
   </div>
  </footer>
 );
}