export default function NedenYaziciTicaret() {
 const ozellikler = [
  {
   baslik: 'Uzman Kadro',
   aciklama: 'Alanında uzman ekibimizle size en iyi hizmeti sunuyoruz',
   icon: '👥'
  },
  {
   baslik: 'Uygun Fiyat',
   aciklama: 'Kaliteli ürünleri en uygun fiyatlarla temin ediyoruz',
   icon: '💰'
  },
  {
   baslik: 'Geniş Ürün Yelpazesi',
   aciklama: 'Her ihtiyaca uygun yazıcı ve malzeme çeşitleri',
   icon: '📦'
  },
  {
   baslik: 'Teknik Destek',
   aciklama: 'Satış sonrası teknik destek ve bakım hizmetleri',
   icon: '🔧'
  },
  {
   baslik: 'Hızlı Teslimat',
   aciklama: 'Siparişleriniz kısa sürede güvenle elinizde',
   icon: '⚡'
  },
  {
   baslik: 'Müşteri Memnuniyeti',
   aciklama: 'Müşteri memnuniyeti bizim önceliğimiz',
   icon: '⭐'
  }
 ];

 return (
  <section className="py-16 bg-gray-50">
   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-bold text-center mb-12">Neden Yazıcı Ticaret?</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
     {ozellikler.map((ozellik, index) => (
      <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
       <div className="text-4xl mb-4">{ozellik.icon}</div>
       <h3 className="text-xl font-semibold mb-3">{ozellik.baslik}</h3>
       <p className="text-gray-600">{ozellik.aciklama}</p>
      </div>
     ))}
    </div>

    <div className="mt-12 text-center bg-blue-600 text-white p-8 rounded-lg">
     <h3 className="text-2xl font-bold mb-4">Yıllardır Güvenle Hizmetinizdeyiz</h3>
     <p className="text-lg">
      2005 yılından beri İnegöl ve çevresinde kaliteli yazıcı ürünleri ve hizmet sunuyoruz
     </p>
    </div>
   </div>
  </section>
 );
}