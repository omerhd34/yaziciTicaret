"use client";
import { useState } from 'react';

export default function KargoTakipPage() {
 const [telefon, setTelefon] = useState('');
 const [kargolar, setKargolar] = useState([]);
 const [mesaj, setMesaj] = useState('');
 const [arandiMi, setArandiMi] = useState(false);
 const [yukleniyor, setYukleniyor] = useState(false);

 const handleSubmit = async () => {
  if (!telefon.trim()) {
   setMesaj('Lütfen telefon numarası giriniz.');
   return;
  }

  const temizTelefon = telefon.replace(/[\s\-\(\)]/g, '');

  if (temizTelefon.length < 10) {
   setMesaj('Lütfen telefon numarasının tamamını giriniz (en az 10 hane).');
   return;
  }

  setMesaj('');
  setArandiMi(true);
  setYukleniyor(true);

  try {
   const response = await fetch(`/api/kargo-sorgula?telefon=${encodeURIComponent(telefon)}`);
   const data = await response.json();

   if (response.ok) {
    setKargolar(data.kargolar || []);
    if (!data.kargolar || data.kargolar.length === 0) {
     setMesaj('Bu telefon numarası ile kayıtlı talep bulunamadı. Lütfen telefon numaranızın tamamını doğru girdiğinizden emin olun.');
    }
   } else {
    setMesaj(data.message || 'Bir hata oluştu. Lütfen tekrar deneyin.');
   }
  } catch (error) {
   console.error('Sorgulama hatası:', error);
   setMesaj('Bir hata oluştu. Lütfen tekrar deneyin.');
  } finally {
   setYukleniyor(false);
  }
 };

 const getDurumRenk = (durum) => {
  switch (durum) {
   case 'Yeni İstek':
    return 'bg-yellow-100 text-yellow-800 border-yellow-300';
   case 'İstek İnceleniyor':
    return 'bg-purple-100 text-purple-800 border-purple-300';
   case 'Başarılı İstek':
    return 'bg-green-100 text-green-800 border-green-300';
   default:
    return 'bg-gray-100 text-gray-800 border-gray-300';
  }
 };

 const formatTarih = (tarihStr) => {
  if (!tarihStr) return '-';
  try {
   const tarih = new Date(tarihStr);
   if (isNaN(tarih.getTime())) {
    return tarihStr;
   }
   return tarih.toLocaleDateString('tr-TR');
  } catch (error) {
   return tarihStr;
  }
 };

 const handleKeyPress = (e) => {
  if (e.key === 'Enter' && !yukleniyor) {
   handleSubmit();
  }
 };

 return (
  <div className="py-10 sm:py-16 bg-gray-50 min-h-screen">
   <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-blue-800">İstek Takibi</h1>

    <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
     <p className="text-gray-700 mb-6 text-[16px] sm:text-[18px]">
      Telefon numaranızı girerek talebinizi sorgulayabilirsiniz.
     </p>

     <div>
      <div className="mb-4">
       <label className="block text-gray-700 font-semibold mb-2 text-[16px] sm:text-[18px]">
        Telefon Numarası *
       </label>
       <input
        type="tel"
        value={telefon}
        onChange={(e) => setTelefon(e.target.value)}
        onKeyPress={handleKeyPress}
        disabled={yukleniyor}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 text-[16px] sm:text-[18px]"
        placeholder="05553332211"
       />
      </div>

      <button
       onClick={handleSubmit}
       disabled={yukleniyor}
       className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
       {yukleniyor ? 'Sorgulanıyor...' : 'Sorgula'}
      </button>
     </div>
    </div>

    {mesaj && (
     <div className="bg-yellow-100 border border-yellow-400 text-yellow-800 p-4 rounded-lg mb-6">
      {mesaj}
     </div>
    )}

    {arandiMi && kargolar.length > 0 && (
     <div>
      <h2 className="text-2xl font-bold mb-4">Talepleriniz</h2>
      <div className="space-y-4">
       {kargolar.map((kargo) => (
        <div key={kargo._id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
         <div className="flex justify-between items-start mb-4">
          <span className={`px-4 py-2 rounded-full font-semibold border ${getDurumRenk(kargo.durum)}`}>
           {kargo.durum}
          </span>
          <span className="text-sm text-gray-500">
           Talep: {formatTarih(kargo.olusturmaTarihi)}
          </span>
         </div>

         <div className="border-t pt-4 space-y-2">
          <p className="text-gray-700">
           <span className="font-semibold">Ad Soyad:</span> {kargo.adSoyad}
          </p>
          <p className="text-gray-700">
           <span className="font-semibold">Adres:</span> {kargo.adres}
          </p>
          <p className="text-gray-700">
           <span className="font-semibold">Telefon:</span> {kargo.telefon}
          </p>
          {kargo.teslim && (
           <p className="text-gray-700">
            <span className="font-semibold">İstenilen Teslim Tarihi:</span> {kargo.teslim}
           </p>
          )}
          {kargo.aciklama && (
           <p className="text-gray-700">
            <span className="font-semibold">Açıklama:</span> {kargo.aciklama}
           </p>
          )}

          {/* Admin Cevabı - Sadece Başarılı İstek durumunda göster */}
          {kargo.durum === 'Başarılı İstek' && kargo.adminCevap && (
           <div className="mt-4 bg-green-50 border-l-4 border-green-500 p-4 rounded">
            <p className="text-green-900 font-semibold mb-1 flex items-center">
             <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
             </svg>
             Talebiniz Hakkında:
            </p>
            <p className="text-green-800 whitespace-pre-wrap">{kargo.adminCevap}</p>
           </div>
          )}
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