"use client";
import { useState } from 'react';

export default function KargoTakipPage() {
 const [telefon, setTelefon] = useState('');
 const [kargolar, setKargolar] = useState([]);
 const [mesaj, setMesaj] = useState('');
 const [arandiMi, setArandiMi] = useState(false);
 const [yukleniyor, setYukleniyor] = useState(false);
 const [iptalModalAcik, setIptalModalAcik] = useState(false);
 const [iptalEdilecekKargo, setIptalEdilecekKargo] = useState(null);
 const [basariBildirimi, setBasariBildirimi] = useState(false);

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
    const allKargolar = data.kargolar || [];
    const aktifKargolar = allKargolar.filter(kargo => kargo.durum !== 'İptal Edildi');

    setKargolar(allKargolar);

    if (aktifKargolar.length === 0) {
     if (allKargolar.length > 0) {
      setMesaj('Bu telefon numarası ile kayıtlı aktif talep bulunamadı. Tüm talepleriniz iptal edilmiş durumda.');
     } else {
      setMesaj('Bu telefon numarası ile kayıtlı talep bulunamadı. Lütfen telefon numaranızın tamamını doğru girdiğinizden emin olun.');
     }
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

 const iptalModaliAc = (kargo) => {
  setIptalEdilecekKargo(kargo);
  setIptalModalAcik(true);
 };

 const iptalModaliKapat = () => {
  setIptalModalAcik(false);
  setIptalEdilecekKargo(null);
 };

 const handleIptalEt = async (kargoId) => {
  try {
   const response = await fetch('/api/talep-iptal', {
    method: 'PUT',
    headers: {
     'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id: kargoId }),
   });

   if (response.ok) {
    setBasariBildirimi(true);
    setIptalModalAcik(false);
    setIptalEdilecekKargo(null);

    setTimeout(() => {
     setBasariBildirimi(false);
    }, 3000);

    handleSubmit();
   } else {
    const data = await response.json();
    alert(data.message || 'İptal işlemi başarısız oldu. Lütfen tekrar deneyin.');
   }
  } catch (error) {
   console.error('İptal hatası:', error);
   alert('Bir hata oluştu. Lütfen tekrar deneyin.');
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
   case 'İptal Edildi':
    return 'bg-red-100 text-red-800 border-red-300';
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
   return tarih.toLocaleString('tr-TR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
   });
  } catch (error) {
   return tarihStr;
  }
 };

 const handleKeyPress = (e) => {
  if (e.key === 'Enter' && !yukleniyor) {
   handleSubmit();
  }
 };

 const iptalEdilsinMi = (durum) => {
  return durum === 'Yeni İstek' || durum === 'İstek İnceleniyor';
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
     <div className="bg-yellow-100 border border-yellow-400 text-yellow-800 p-4 rounded-lg mb-6 break-words">
      {mesaj}
     </div>
    )}

    {arandiMi && kargolar.filter(kargo => kargo.durum !== 'İptal Edildi').length > 0 && (
     <div>
      <h2 className="text-2xl font-bold mb-4">Talepleriniz</h2>
      <div className="space-y-4">
       {kargolar.filter(kargo => kargo.durum !== 'İptal Edildi').map((kargo) => (
        <div key={kargo._id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow overflow-hidden relative">
         {iptalEdilsinMi(kargo.durum) && (
          <button
           onClick={() => iptalModaliAc(kargo)}
           className="absolute top-4 right-4 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm font-medium transition-colors duration-200 shadow-md hover:shadow-lg"
          >
           İsteği İptal Et
          </button>
         )}

         <div className="flex justify-between items-start mb-4 pr-20">
          <span className={`px-4 py-2 rounded-full font-semibold border ${getDurumRenk(kargo.durum)}`}>
           {kargo.durum}
          </span>
          <span className="text-sm text-gray-500 mr-10">
           Talep: {formatTarih(kargo.olusturmaTarihi)}
          </span>
         </div>

         <div className="border-t pt-4 space-y-2">
          <p className="text-gray-700 break-words">
           <span className="font-semibold">Ad Soyad:</span> {kargo.adSoyad}
          </p>
          <p className="text-gray-700 break-words">
           <span className="font-semibold">Adres:</span> {kargo.adres}
          </p>
          <p className="text-gray-700 break-words">
           <span className="font-semibold">Telefon:</span> {kargo.telefon}
          </p>
          {kargo.teslim && (
           <p className="text-gray-700 break-words">
            <span className="font-semibold">İstenilen Teslim Tarihi:</span> {kargo.teslim}
           </p>
          )}
          {kargo.aciklama && (
           <div className="text-gray-700">
            <span className="font-semibold">Açıklama:</span>
            <p className="mt-1 p-3 bg-gray-50 rounded-lg whitespace-pre-wrap break-words overflow-wrap-anywhere max-w-full">
             {kargo.aciklama}
            </p>
           </div>
          )}

          {kargo.durum === 'Başarılı İstek' && kargo.adminCevap && (
           <div className="mt-4 bg-green-50 border-l-4 border-green-500 p-4 rounded overflow-hidden">
            <p className="text-green-900 font-semibold mb-1 flex items-center">
             <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
             </svg>
             Talebiniz Hakkında:
            </p>
            <p className="text-green-800 whitespace-pre-wrap break-words overflow-wrap-anywhere max-w-full">
             {kargo.adminCevap}
            </p>
           </div>
          )}
         </div>
        </div>
       ))}
      </div>
     </div>
    )}

    {/* İptal Onay Modalı */}
    {iptalModalAcik && iptalEdilecekKargo && (
     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full shadow-2xl">
       <div className="text-center">
        <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4">
         <svg className="h-6 w-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 19c-.77.833.192 2.5 1.732 2.5z" />
         </svg>
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-2">Talebi İptal Et</h3>
        <p className="text-sm text-gray-500 mb-6">
         Bu talebi iptal etmek istediğinizden emin misiniz? <br />Bu işlem geri alınamaz.
        </p>
        <div className="space-y-2 mb-6 text-left bg-gray-50 p-3 rounded-lg">
         <p className="text-sm"><span className="font-semibold">Ad Soyad:</span> {iptalEdilecekKargo.adSoyad}</p>
         <p className="text-sm"><span className="font-semibold">Durum:</span> {iptalEdilecekKargo.durum}</p>
        </div>
        <div className="flex gap-3">
         <button
          onClick={iptalModaliKapat}
          className="flex-1 bg-gray-300 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-400 transition-colors"
         >
          Vazgeç
         </button>
         <button
          onClick={() => handleIptalEt(iptalEdilecekKargo._id)}
          className="flex-1 bg-red-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors"
         >
          İptal Et
         </button>
        </div>
       </div>
      </div>
     </div>
    )}

    {/* Başarı Bildirimi */}
    {basariBildirimi && (
     <div className="fixed top-4 right-4 z-50 animate-slide-in">
      <div className="bg-green-500 text-white px-6 py-4 rounded-lg shadow-2xl flex items-center gap-3 max-w-sm">
       <div className="flex-shrink-0">
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
       </div>
       <div>
        <p className="font-bold">Başarılı!</p>
        <p className="text-sm">Talebiniz başarıyla iptal edildi.</p>
       </div>
       <button
        onClick={() => setBasariBildirimi(false)}
        className="ml-auto text-white hover:text-gray-200"
       >
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
       </button>
      </div>
     </div>
    )}

    <style jsx>{`
     @keyframes slide-in {
      from {
       transform: translateX(100%);
       opacity: 0;
      }
      to {
       transform: translateX(0);
       opacity: 1;
      }
     }
     
     .animate-slide-in {
      animation: slide-in 0.3s ease-out;
     }
    `}</style>
   </div>
  </div>
 );
}