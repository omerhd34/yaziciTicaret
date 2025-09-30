export default function KargoKaliteSection() {
 return (
  <section className="py-16 bg-blue-50">
   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
     <h2 className="text-3xl font-bold mb-4">Kargo Hizmetlerimiz</h2>
     <p className="text-xl text-gray-700">
      Güvenli ve hızlı teslimat ile ürünleriniz zamanında kapınızda
     </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
     <div className="bg-white p-6 rounded-lg shadow-lg text-center">
      <div className="text-4xl mb-4">🚚</div>
      <h3 className="text-xl font-semibold mb-2">Hızlı Geri Dönüş</h3>
      <p className="text-gray-600">
       Ürün isteği bulunduktan sonra kısa sürede geri dönüş yapılır.
      </p>
     </div>

     <div className="bg-white p-6 rounded-lg shadow-lg text-center">
      <div className="text-4xl mb-4">📦</div>
      <h3 className="text-xl font-semibold mb-2">Güvenli Paketleme</h3>
      <p className="text-gray-600">
       Ürünleriniz özenle paketlenir ve korunur.
      </p>
     </div>

     <div className="bg-white p-6 rounded-lg shadow-lg text-center">
      <div className="text-4xl mb-4">📍</div>
      <h3 className="text-xl font-semibold mb-2">Canlı Takip</h3>
      <p className="text-gray-600">
       Kargonuzun durumunu anlık takip edin.
      </p>
     </div>
    </div>
   </div>
  </section>
 );
}