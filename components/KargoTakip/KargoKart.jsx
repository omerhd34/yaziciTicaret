'use client';

export default function KargoKart({ kargo, onIptalClick }) {
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

 const iptalEdilsinMi = (durum) => {
  return durum === 'Yeni İstek' || durum === 'İstek İnceleniyor';
 };

 return (
  <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow overflow-hidden relative">
   {iptalEdilsinMi(kargo.durum) && (
    <button
     onClick={() => onIptalClick(kargo)}
     className="absolute top-4 right-4 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm font-medium transition-colors duration-200 shadow-md hover:shadow-lg"
    >
     İsteği İptal Et
    </button>
   )}

   <div className="flex justify-between items-start mb-4 pr-20">
    <span className={`px-4 py-2 rounded-full font-semibold border ${getDurumRenk(kargo.durum)}`}>
     {kargo.durum}
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
    <p className="text-gray-700 break-words">
     <span className="font-semibold">Talep Zamanı:</span> {formatTarih(kargo.olusturmaTarihi)}
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
       Cevap:
      </p>
      <p className="text-green-800 whitespace-pre-wrap break-words overflow-wrap-anywhere max-w-full">
       {kargo.adminCevap}
      </p>
     </div>
    )}
   </div>
  </div>
 );
}