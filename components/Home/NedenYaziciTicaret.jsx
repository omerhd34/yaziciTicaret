import { FaUsers, FaMoneyBillWave, FaBox, FaPhone, FaEye } from 'react-icons/fa';

export default function NedenYaziciTicaret() {
 const ozellikler = [
  {
   baslik: 'Uzman Kadro',
   aciklama: 'Alanında uzman ekibimizle size en iyi hizmeti sunuyoruz.',
   icon: <FaUsers />,
   bg: 'bg-gradient-to-r from-blue-400 to-blue-600'
  },
  {
   baslik: 'Uygun Fiyat',
   aciklama: 'Kaliteli ürünleri en uygun fiyatlarla temin ediyoruz.',
   icon: <FaMoneyBillWave />,
   bg: 'bg-gradient-to-r from-green-400 to-green-600'
  },
  {
   baslik: 'Geniş Ürün Yelpazesi',
   aciklama: 'Her ihtiyaca uygun yazıcı ve malzeme çeşitleri',
   icon: <FaBox />,
   bg: 'bg-gradient-to-r from-purple-400 to-purple-600'
  },
  {
   baslik: 'Güvenli Paketleme',
   aciklama: 'Ürünleriniz özenle paketlenir ve korunur.',
   icon: <FaBox />,
   bg: 'bg-gradient-to-r from-pink-400 to-pink-600'
  },
  {
   baslik: 'Hızlı Geri Dönüş',
   aciklama: 'Ürün isteği bulunduktan sonra kısa sürede geri dönüş yapılır.',
   icon: <FaPhone />,
   bg: 'bg-gradient-to-r from-yellow-400 to-yellow-500'
  },
  {
   baslik: 'Canlı Takip',
   aciklama: 'Ürün isteği durumunu anlık takip edilebilir.',
   icon: <FaEye />,
   bg: 'bg-gradient-to-r from-red-400 to-red-600'
  }
 ];

 return (
  <section className="py-16 bg-gray-50">
   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="font-bold text-center mb-12 text-2xl sm:text-5xl">Neden Yazıcı Ticaret?</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
     {ozellikler.map((ozellik, index) => (
      <div
       key={index}
       className={`p-6 rounded-2xl shadow-xl transform transition-all duration-500 hover:-translate-y-2 hover:scale-103 text-white ${ozellik.bg}`}
      >
       <div className="w-10 h-10 sm:w-16 sm:h-16 flex items-center justify-center bg-white text-black rounded-full text-2xl mb-4 mx-auto shadow-md">
        {ozellik.icon}
       </div>
       <h3 className="text-[18px] sm:text-[20px] font-bold mb-2 text-center">{ozellik.baslik}</h3>
       <p className="text-center text-[16px] sm:text-[18px]">{ozellik.aciklama}</p>
      </div>
     ))}
    </div>

    <div className="mt-12 text-center bg-blue-600 text-white p-8 rounded-lg">
     <h3 className="text-xl sm:text-2xl font-bold mb-4">Yıllardır Güvenle Hizmetinizdeyiz</h3>
     <p className="text-[16px] sm:text-[18px]">
      1997 yılından bu yana İnegöl ve çevresinde, kaliteli beyaz eşya ürünleri ve güvenilir hizmet anlayışıyla sizlere hizmet veriyoruz.</p>
    </div>
   </div>
  </section>
 );
}
