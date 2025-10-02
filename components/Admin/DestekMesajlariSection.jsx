import React, { useState } from 'react';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { formatTarih } from '@/app/utils/adminHelpers';

export default function DestekMesajlariSection({ mesajlar, onDelete }) {
 const [mesajGosterilenId, setMesajGosterilenId] = useState(null);

 return (
  <div className="bg-white rounded-lg shadow-lg p-6 mt-8">
   <h2 className="text-[20px] sm:text-2xl font-bold mb-4">Destek Mesajları</h2>

   {/* Masaüstü Tablo Görünümü */}
   <div className="hidden md:block overflow-x-auto">
    <table className="w-full table-fixed border-collapse">
     <thead className="bg-gray-100">
      <tr>
       <th className="px-4 py-3 text-left align-middle w-[18%]">Ad & Soyad</th>
       <th className="px-4 py-3 text-left align-middle w-[13%]">Telefon No</th>
       <th className="px-4 py-3 text-left align-middle w-[20%]">Konu</th>
       <th className="px-4 py-3 text-left align-middle w-[17%]">Destek Zamanı</th>
       <th className="px-4 py-3 text-center align-middle w-[10%]">Mesaj</th>
       <th className="px-4 py-3 text-center align-middle w-[12%]">İşlemler</th>
      </tr>
     </thead>
     <tbody>
      {mesajlar.map((mesaj, index) => (
       <React.Fragment key={mesaj._id || index}>
        <tr className="border-b hover:bg-gray-50 transition-colors">
         <td className="px-4 py-4 truncate align-middle">{mesaj.name}</td>
         <td className="px-4 py-4 truncate align-middle">{mesaj.phone || '-'}</td>
         <td className="px-4 py-4 truncate align-middle" title={mesaj.subject}>{mesaj.subject}</td>
         <td className="px-4 py-4 truncate align-middle">{formatTarih(mesaj.createdAt)}</td>
         <td className="px-4 py-4 text-center align-middle">
          <button
           onClick={() =>
            setMesajGosterilenId(
             mesajGosterilenId === (mesaj._id || index) ? null : (mesaj._id || index)
            )
           }
           className="inline-flex items-center justify-center text-blue-600 hover:text-blue-800 transition-colors mx-auto"
           title="Mesajı Göster/Gizle"
          >
           <AiOutlineInfoCircle className="h-5 w-5" />
          </button>
         </td>
         <td className="px-4 py-4 text-center align-middle">
          <button
           onClick={() => onDelete(mesaj._id)}
           className="bg-red-600 text-white px-3 py-1.5 rounded text-sm hover:bg-red-700 transition-colors whitespace-nowrap"
          >
           Sil
          </button>
         </td>
        </tr>
        {mesajGosterilenId === (mesaj._id || index) && (
         <tr className="bg-gray-50">
          <td colSpan={6} className="px-6 py-4">
           <div className="text-gray-700 text-sm">
            <strong className="block mb-2">Müşteri Mesajı:</strong>
            <p className="whitespace-pre-wrap pl-4 border-l-4 border-blue-500">{mesaj.message}</p>
           </div>
          </td>
         </tr>
        )}
       </React.Fragment>
      ))}
      {mesajlar.length === 0 && (
       <tr>
        <td colSpan={6} className="px-4 py-8 text-center text-gray-500">
         Henüz destek mesajı bulunmamaktadır.
        </td>
       </tr>
      )}
     </tbody>
    </table>
   </div>

   {/* Mobil Kart Görünümü */}
   <div className="md:hidden space-y-4">
    {mesajlar.map((mesaj, index) => (
     <div key={mesaj._id || index} className="bg-white border rounded-lg p-4 shadow-sm">
      <div className="space-y-3">
       <div>
        <p className="text-sm text-gray-600 font-semibold">İsim:</p>
        <p className="text-base">{mesaj.name}</p>
       </div>

       <div>
        <p className="text-sm text-gray-600 font-semibold">Telefon No:</p>
        <p className="text-base">{mesaj.phone || '-'}</p>
       </div>

       <div>
        <p className="text-sm text-gray-600 font-semibold">Konu:</p>
        <p className="text-base">{mesaj.subject}</p>
       </div>

       <div>
        <p className="text-sm text-gray-600 font-semibold">Destek Zamanı:</p>
        <p className="text-base">{formatTarih(mesaj.createdAt)}</p>
       </div>

       <div>
        <button
         onClick={() =>
          setMesajGosterilenId(
           mesajGosterilenId === (mesaj._id || index) ? null : (mesaj._id || index)
          )
         }
         className="flex items-center gap-2 text-blue-600 font-semibold"
        >
         <AiOutlineInfoCircle className="h-5 w-5" />
         <span>Mesajı Göster</span>
        </button>
        {mesajGosterilenId === (mesaj._id || index) && (
         <div className="mt-2 p-3 bg-gray-50 rounded text-sm text-gray-700 whitespace-pre-wrap">
          <strong>Müşteri Mesajı:</strong> {mesaj.message}
         </div>
        )}
       </div>

       <div className="pt-2 border-t">
        <button
         onClick={() => onDelete(mesaj._id)}
         className="w-full bg-red-600 text-white px-3 py-2 rounded hover:bg-red-700 transition-colors"
        >
         Sil
        </button>
       </div>
      </div>
     </div>
    ))}
    {mesajlar.length === 0 && (
     <div className="px-4 py-8 text-center text-gray-500">
      Henüz destek mesajı bulunmamaktadır.
     </div>
    )}
   </div>
  </div>
 );
}