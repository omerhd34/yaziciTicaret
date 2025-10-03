import React, { useState } from 'react';
import { AiOutlineEye } from 'react-icons/ai';
import { getDurumRenk, formatTarih } from '@/app/utils/adminHelpers';

export default function TaleplerSection({ talepler, onEdit, onDelete }) {
 const [aciklamaGosterilenId, setAciklamaGosterilenId] = useState(null);
 const [silModalAcik, setSilModalAcik] = useState(false);
 const [silinecekTalep, setSilinecekTalep] = useState(null);

 const silModaliAc = (talep) => {
  setSilinecekTalep(talep);
  setSilModalAcik(true);
 };

 const silModaliKapat = () => {
  setSilModalAcik(false);
  setSilinecekTalep(null);
 };

 const handleSil = () => {
  if (silinecekTalep) {
   onDelete(silinecekTalep._id);
   silModaliKapat();
  }
 };

 return (
  <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
   <h2 className="text-xl sm:text-2xl font-bold mb-4">Tüm Talepler</h2>

   {/* Masaüstü Tablo Görünümü */}
   <div className="hidden lg:block overflow-x-auto">
    <table className="w-full table-fixed border-collapse">
     <thead className="bg-gray-100">
      <tr>
       <th className="px-4 py-3 text-left align-middle w-[18%]">Ad & Soyad</th>
       <th className="px-4 py-3 text-left align-middle w-[15%]">Telefon No</th>
       <th className="px-4 py-3 text-left align-middle w-[15%]">Teslim Tarihi</th>
       <th className="px-4 py-3 text-left align-middle w-[20%]">Talep Zamanı</th>
       <th className="px-4 py-3 text-center align-middle w-[10%]">Açıklama</th>
       <th className="px-4 py-3 text-center align-middle w-[15%]">İşlemler</th>
      </tr>
     </thead>
     <tbody>
      {talepler.map((talep) => {
       const bgColor = getDurumRenk(talep.durum);

       return (
        <React.Fragment key={talep._id}>
         <tr className={`${bgColor} border-b hover:bg-gray-100 transition-colors duration-200`}>
          <td className="px-4 py-4 truncate align-middle">{talep.adSoyad}</td>
          <td className="px-4 py-4 truncate align-middle">{talep.telefon}</td>
          <td className="px-4 py-4 truncate align-middle">{talep.teslim || '-'}</td>
          <td className="px-4 py-4 truncate align-middle">{formatTarih(talep.olusturmaTarihi)}</td>
          <td className="px-4 py-4 text-center align-middle">
           <button
            onClick={() =>
             setAciklamaGosterilenId(aciklamaGosterilenId === talep._id ? null : talep._id)
            }
            className="inline-flex items-center justify-center text-blue-600 hover:text-blue-800 transition-colors mx-auto"
            title="Açıklamayı Göster/Gizle"
           >
            <AiOutlineEye className="h-5 w-5" />
           </button>
          </td>
          <td className="px-4 py-4 text-center align-middle">
           <div className="inline-flex gap-1">
            <button
             onClick={() => onEdit(talep)}
             className="bg-blue-600 text-white px-3 py-1.5 rounded text-sm hover:bg-blue-700 transition-colors whitespace-nowrap"
            >
             Düzenle
            </button>
            <button
             onClick={() => silModaliAc(talep)}
             className="bg-red-600 text-white px-3 py-1.5 rounded text-sm hover:bg-red-700 transition-colors whitespace-nowrap"
            >
             Sil
            </button>
           </div>
          </td>
         </tr>
         {aciklamaGosterilenId === talep._id && talep.aciklama && (
          <tr className="bg-gray-50">
           <td colSpan={6} className="px-3 py-4">
            <div className="text-gray-700 text-[16px]">
             <strong className="block mb-2">Müşteri Açıklaması:</strong>
             <p className="whitespace-pre-wrap break-words overflow-wrap-anywhere pl-4 border-l-4 border-blue-500">{talep.aciklama}</p>
            </div>
           </td>
          </tr>
         )}
        </React.Fragment>
       );
      })}
      {talepler.length === 0 && (
       <tr>
        <td colSpan={6} className="px-4 py-8 text-center text-gray-500">
         Henüz talep bulunmamaktadır.
        </td>
       </tr>
      )}
     </tbody>
    </table>
   </div>

   {/* Mobil Kart Görünümü */}
   <div className="lg:hidden space-y-4">
    {talepler.map((talep) => {
     const bgColor = getDurumRenk(talep.durum);

     return (
      <div key={talep._id} className={`${bgColor} border rounded-lg p-4 shadow-sm`}>
       <div className="space-y-3">
        <div className="flex justify-between items-start">
         <div className="flex-1">
          <p className="text-sm text-gray-600 font-semibold">Ad Soyad:</p>
          <p className="text-base">{talep.adSoyad}</p>
         </div>
        </div>

        <div>
         <p className="text-sm text-gray-600 font-semibold">Telefon No:</p>
         <p className="text-base">{talep.telefon}</p>
        </div>

        <div>
         <p className="text-sm text-gray-600 font-semibold">Teslim Tarihi:</p>
         <p className="text-base">{talep.teslim || '-'}</p>
        </div>

        <div>
         <p className="text-sm text-gray-600 font-semibold">Talep Zamanı:</p>
         <p className="text-base">{formatTarih(talep.olusturmaTarihi)}</p>
        </div>

        <div>
         <button
          onClick={() =>
           setAciklamaGosterilenId(aciklamaGosterilenId === talep._id ? null : talep._id)
          }
          className="flex items-center gap-2 text-blue-600 font-semibold"
         >
          <AiOutlineEye className="h-5 w-5" />
          <span>Açıklamayı Göster</span>
         </button>
         {aciklamaGosterilenId === talep._id && talep.aciklama && (
          <div className="mt-2 p-3 bg-gray-50 rounded text-sm text-gray-700 whitespace-pre-wrap break-words overflow-wrap-anywhere">
           <p className="whitespace-pre-wrap break-words overflow-wrap-anywhere pl-4 border-l-4 border-blue-500">{talep.aciklama}</p>
          </div>
         )}
        </div>

        <div className="flex gap-2 pt-2 border-t">
         <button
          onClick={() => onEdit(talep)}
          className="flex-1 bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700 transition-colors"
         >
          Düzenle
         </button>
         <button
          onClick={() => silModaliAc(talep)}
          className="flex-1 bg-red-600 text-white px-3 py-2 rounded hover:bg-red-700 transition-colors"
         >
          Sil
         </button>
        </div>
       </div>
      </div>
     );
    })}
    {talepler.length === 0 && (
     <div className="px-4 py-8 text-center text-gray-500">
      Henüz talep bulunmamaktadır.
     </div>
    )}
   </div>

   {/* Silme Onay Modalı */}
   {silModalAcik && silinecekTalep && (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
     <div className="bg-white rounded-lg p-6 max-w-md w-full shadow-2xl">
      <div className="text-center">
       <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4">
        <svg className="h-6 w-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 19c-.77.833.192 2.5 1.732 2.5z" />
        </svg>
       </div>
       <h3 className="text-lg font-bold text-gray-900 mb-2">Talebi Sil</h3>
       <p className="text-sm text-gray-500 mb-6">
        Bu talebi silmek istediğinizden emin misiniz? <br />Bu işlem geri alınamaz.
       </p>
       <div className="space-y-2 mb-6 text-left bg-gray-50 p-3 rounded-lg">
        <p className="text-sm"><span className="font-semibold">Ad Soyad:</span> {silinecekTalep.adSoyad}</p>
        <p className="text-sm"><span className="font-semibold">Telefon:</span> {silinecekTalep.telefon}</p>
        <p className="text-sm"><span className="font-semibold">Durum:</span> {silinecekTalep.durum}</p>
       </div>
       <div className="flex gap-3">
        <button
         onClick={silModaliKapat}
         className="flex-1 bg-gray-300 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-400 transition-colors"
        >
         Vazgeç
        </button>
        <button
         onClick={handleSil}
         className="flex-1 bg-red-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors"
        >
         Sil
        </button>
       </div>
      </div>
     </div>
    </div>
   )}
  </div>
 );
}