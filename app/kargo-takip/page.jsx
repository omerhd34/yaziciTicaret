'use client';
import { useState } from 'react';

export default function KargoTakipPage() {
 const [adSoyad, setAdSoyad] = useState('');
 const [kargolar, setKargolar] = useState([]);
 const [mesaj, setMesaj] = useState('');
 const [arandiMi, setArandiMi] = useState(false);

 const handleSubmit = async (e) => {
  e.preventDefault();
  setMesaj('');
  setArandiMi(true);

  try {
   const response = await fetch(`/api/kargo-sorgula?adSoyad=${encodeURIComponent(adSoyad)}`);
   const data = await response.json();

   if (response.ok) {
    setKargolar(data.kargolar);
    if (data.kargolar.length === 0) {
     setMesaj('Bu ad soyad ile kayıtlı kargo bulunamadı.');
    }
   } else {
    setMesaj('Bir hata oluştu. Lütfen tekrar deneyin.');
   }
  } catch (error) {
   setMesaj('Bir hata oluştu. Lütfen tekrar deneyin.');
  }
 };

 const getDurumRenk = (durum) => {
  switch (durum) {
   case 'Hazırlanıyor':
    return 'bg-yellow-100 text-yellow-800';
   case 'Kargoya Verildi':
    return 'bg-blue-100 text-blue-800';
   case 'Teslim Edildi':
    return 'bg-green-100 text-green-800';
   default:
    return 'bg-gray-100 text-gray-800';
  }
 };

 return (
  <div className="py-16 bg-gray-50 min-h-screen">
   <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <h1 className="text-4xl font-bold text-center mb-8">Kargo Takip</h1>

    <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
     <p className="text-gray-700 mb-6">
      Ad ve soyad bilginiz ile kargonuzu sorgulayabilirsiniz.
     </p>

     <form onSubmit={handleSubmit}>
      <div className="mb-4">
       <label className="block text-gray-700 font-semibold mb-2">
        Ad Soyad
       </label>
       <input
        type="text"
        value={adSoyad}
        onChange={(e) => setAdSoyad(e.target.value)}
        required
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        placeholder="Örn: Ahmet Yılmaz"
       />
      </div>

      <button
       type="submit"
       className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
      >
       Kargo Sorgula
      </button>
     </form>
    </div>

    {mesaj && (
     <div className="bg-yellow-100 text-yellow-800 p-4 rounded-lg mb-6">
      {mesaj}
     </div>
    )}

    {arandiMi && kargolar.length > 0 && (
     <div>
      <h2 className="text-2xl font-bold mb-4">Kargolarınız</h2>
      <div className="space-y-4">
       {kargolar.map((kargo) => (
        <div key={kargo._id} className="bg-white rounded-lg shadow-lg p-6">
         <div className="flex justify-between items-start mb-4">
          <span className={`px-4 py-2 rounded-full font-semibold ${getDurumRenk(kargo.durum)}`}>
           {kargo.durum}
          </span>
         </div>

         <div className="border-t pt-4">
          <p className="text-gray-700 mb-2">
           <span className="font-semibold">Adres:</span> {kargo.adres}
          </p>
          <p className="text-gray-700 mb-2">
           <span className="font-semibold">Telefon:</span> {kargo.telefon}
          </p>
          <p className="text-gray-700 mb-2">
           <span className="font-semibold">İstenilen Teslim Tarihi:</span> {kargo.teslim}
          </p>
          {kargo.teslim && (
           <p className="text-gray-700 mb-2">
            <span className="font-semibold">Tahmini Teslimat:</span> {new Date(kargo.teslim).toLocaleDateString('tr-TR')}
           </p>
          )}
          {kargo.aciklama && (
           <p className="text-gray-700 mb-2">
            <span className="font-semibold">Açıklama:</span> {kargo.aciklama}
           </p>
          )}
          <p className="text-gray-500 text-sm mt-4">
           Talep Tarihi: {new Date(kargo.olusturmaTarihi).toLocaleDateString('tr-TR')}
          </p>
         </div>
        </div>
       ))}
      </div>
     </div>
    )}
   </div>
  </div>
 );
}