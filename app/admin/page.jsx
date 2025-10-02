'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { AiOutlineEye, AiOutlineInfoCircle } from 'react-icons/ai';

export default function AdminPage() {
 const [talepler, setTalepler] = useState([]);
 const [yukleniyor, setYukleniyor] = useState(true);
 const [seciliTalep, setSeciliTalep] = useState(null);
 const [durum, setDurum] = useState('');
 const [teslim, setTeslim] = useState('');
 const [adminCevap, setAdminCevap] = useState('');
 const [aciklamaGosterilenId, setAciklamaGosterilenId] = useState(null);
 const [destekMesajlari, setDestekMesajlari] = useState([]);
 const [mesajGosterilenId, setMesajGosterilenId] = useState(null);
 const router = useRouter();

 useEffect(() => {
  const token = localStorage.getItem('adminToken');
  if (!token) {
   router.push('/admin/giris');
   return;
  }

  talepleriGetir();
  destekMesajlariniGetir();
 }, [router]);

 const talepleriGetir = async () => {
  try {
   const response = await fetch('/api/urun-talepleri');
   if (response.ok) {
    const data = await response.json();
    setTalepler(data.talepler || []);
   }
  } catch (error) {
   console.error('Talepler getirilirken hata:', error);
  } finally {
   setYukleniyor(false);
  }
 };

 const talepGuncelle = async (id) => {
  if (!durum) {
   alert('Lütfen durum seçiniz');
   return;
  }

  try {
   const response = await fetch('/api/kargolar', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id, durum, teslim, adminCevap }),
   });

   if (response.ok) {
    alert('Talep güncellendi');
    setSeciliTalep(null);
    setDurum('');
    setTeslim('');
    setAdminCevap('');
    talepleriGetir();
   } else {
    alert('Güncelleme başarısız oldu');
   }
  } catch (error) {
   console.error('Güncelleme hatası:', error);
   alert('Bir hata oluştu');
  }
 };

 const talepSil = async (id) => {
  if (!confirm('Bu talebi silmek istediğinizden emin misiniz?')) return;

  try {
   const response = await fetch('/api/kargolar', {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id }),
   });

   if (response.ok) {
    alert('Talep silindi');
    talepleriGetir();
   } else {
    alert('Silme işlemi başarısız oldu');
   }
  } catch (error) {
   console.error('Silme hatası:', error);
   alert('Bir hata oluştu');
  }
 };

 const destekMesajlariniGetir = async () => {
  try {
   const res = await fetch('/api/destek');
   if (res.ok) {
    const data = await res.json();
    setDestekMesajlari(data.mesajlar || []);
   }
  } catch (err) {
   console.error("Destek mesajları alınamadı:", err);
  }
 };

 const destekMesajSil = async (id) => {
  if (!confirm('Bu mesajı silmek istediğinizden emin misiniz?')) return;

  try {
   const response = await fetch('/api/destek', {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id }),
   });

   if (response.ok) {
    alert('Mesaj silindi');
    destekMesajlariniGetir();
   } else {
    alert('Silme işlemi başarısız oldu');
   }
  } catch (error) {
   console.error('Silme hatası:', error);
   alert('Bir hata oluştu');
  }
 };

 const cikisYap = () => {
  localStorage.removeItem('adminToken');
  router.push('/');
 };

 if (yukleniyor) {
  return (
   <div className="flex justify-center items-center min-h-screen">
    <div className="text-xl">Yükleniyor...</div>
   </div>
  );
 }

 return (
  <div className="py-8 bg-gray-50 min-h-screen">
   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h1 className="text-3xl font-bold mb-8 text-blue-800">Admin Paneli</h1>

    {/* İstatistikler */}
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
     <h2 className="text-[20px] sm:text-2xl font-bold mb-4">İstatistikler</h2>
     <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <div className="bg-blue-100 p-4 rounded-lg">
       <p className="text-sm text-blue-600 font-semibold">Toplam Talep</p>
       <p className="text-2xl sm:text-3xl font-bold text-blue-800">{talepler.length}</p>
      </div>
      <div className="bg-yellow-100 p-4 rounded-lg">
       <p className="text-sm text-yellow-600 font-semibold">Yeni İstek</p>
       <p className="text-2xl sm:text-3xl font-bold text-yellow-800">
        {talepler.filter((t) => t.durum === 'Yeni İstek').length}
       </p>
      </div>
      <div className="bg-purple-100 p-4 rounded-lg">
       <p className="text-sm text-purple-600 font-semibold">İstek İnceleniyor</p>
       <p className="text-2xl sm:text-3xl font-bold text-purple-800">
        {talepler.filter((t) => t.durum === 'İstek İnceleniyor').length}
       </p>
      </div>
      <div className="bg-green-100 p-4 rounded-lg">
       <p className="text-sm text-green-600 font-semibold">Başarılı İstek</p>
       <p className="text-2xl sm:text-3xl font-bold text-green-800">
        {talepler.filter((t) => t.durum === 'Başarılı İstek').length}
       </p>
      </div>
     </div>
    </div>

    {/* Tüm Talepler */}
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
     <h2 className="text-xl sm:text-2xl font-bold mb-4">Tüm Talepler</h2>

     {/* Masaüstü Tablo Görünümü */}
     <div className="hidden md:block overflow-x-auto">
      <table className="w-full">
       <thead className="bg-gray-100">
        <tr>
         <th className="px-4 py-3 text-left">Ad Soyad</th>
         <th className="px-4 py-3 text-left">Telefon</th>
         <th className="px-4 py-3 text-left">İstenilen Teslim Tarihi</th>
         <th className="px-4 py-3 text-left">Talep Zamanı</th>
         <th className="px-4 py-3 text-left cursor-pointer">Açıklama</th>
         <th className="px-4 py-3 text-left">İşlemler</th>
        </tr>
       </thead>
       <tbody>
        {talepler.map((talep) => {
         let bgColor = 'bg-white';
         if (talep.durum === 'Yeni İstek') bgColor = 'bg-yellow-50';
         else if (talep.durum === 'İstek İnceleniyor') bgColor = 'bg-purple-50';
         else if (talep.durum === 'Başarılı İstek') bgColor = 'bg-green-50';

         return (
          <React.Fragment key={talep._id}>
           <tr className={`${bgColor} border-b hover:bg-gray-100 transition-colors duration-200`}>
            <td className="px-4 py-3">{talep.adSoyad}</td>
            <td className="px-4 py-3">{talep.telefon}</td>
            <td className="px-4 py-3">{talep.teslim || '-'}</td>
            <td className="px-4 py-3">
             {new Date(talep.olusturmaTarihi).toLocaleString('tr-TR', {
              day: '2-digit',
              month: '2-digit',
              year: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
             })}
            </td>
            <td
             className="px-10 py-3 text-blue-600 cursor-pointer font-semibold"
             onClick={() =>
              setAciklamaGosterilenId(aciklamaGosterilenId === talep._id ? null : talep._id)
             }
            >
             <AiOutlineEye className="h-5 w-5" />
            </td>
            <td className="px-4 py-3">
             <button
              onClick={() => {
               setSeciliTalep(talep);
               setDurum(talep.durum);
               setTeslim(talep.teslim || '');
               setAdminCevap(talep.adminCevap || '');
              }}
              className="bg-blue-600 text-white px-3 py-1 rounded mr-2 hover:bg-blue-700 transition-colors"
             >
              Düzenle
             </button>
             <button
              onClick={() => talepSil(talep._id)}
              className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition-colors"
             >
              Sil
             </button>
            </td>
           </tr>
           {aciklamaGosterilenId === talep._id && talep.aciklama && (
            <tr className="bg-gray-50">
             <td colSpan={6} className="px-4 py-3 text-gray-700 whitespace-pre-wrap">
              <strong>Müşteri Açıklaması:</strong> {talep.aciklama}
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
     <div className="md:hidden space-y-4">
      {talepler.map((talep) => {
       let bgColor = 'bg-white';
       if (talep.durum === 'Yeni İstek') bgColor = 'bg-yellow-50';
       else if (talep.durum === 'İstek İnceleniyor') bgColor = 'bg-purple-50';
       else if (talep.durum === 'Başarılı İstek') bgColor = 'bg-green-50';

       return (
        <div key={talep._id} className={`${bgColor} border rounded-lg p-4 shadow-sm`}>
         <div className="space-y-3">
          <div className="flex justify-between items-start">
           <div className="flex-1">
            <p className="text-sm text-gray-600 font-semibold">Ad Soyad</p>
            <p className="text-base">{talep.adSoyad}</p>
           </div>
          </div>

          <div>
           <p className="text-sm text-gray-600 font-semibold">Telefon</p>
           <p className="text-base">{talep.telefon}</p>
          </div>

          <div>
           <p className="text-sm text-gray-600 font-semibold">İstenilen Teslim Tarihi</p>
           <p className="text-base">{talep.teslim || '-'}</p>
          </div>

          <div>
           <p className="text-sm text-gray-600 font-semibold">Talep Zamanı</p>
           <p className="text-base">
            {new Date(talep.olusturmaTarihi).toLocaleString('tr-TR', {
             day: '2-digit',
             month: '2-digit',
             year: 'numeric',
             hour: '2-digit',
             minute: '2-digit',
            })}
           </p>
          </div>

          <div>
           <button
            onClick={() =>
             setAciklamaGosterilenId(aciklamaGosterilenId === talep._id ? null : talep._id)
            }
            className="flex items-center gap-2 text-blue-600 font-semibold"
           >
            <AiOutlineEye className="h-5 w-5" />
            <span>Açıklama</span>
           </button>
           {aciklamaGosterilenId === talep._id && talep.aciklama && (
            <div className="mt-2 p-3 bg-gray-50 rounded text-sm text-gray-700 whitespace-pre-wrap">
             <strong>Müşteri Açıklaması:</strong> {talep.aciklama}
            </div>
           )}
          </div>

          <div className="flex gap-2 pt-2 border-t">
           <button
            onClick={() => {
             setSeciliTalep(talep);
             setDurum(talep.durum);
             setTeslim(talep.teslim || '');
             setAdminCevap(talep.adminCevap || '');
            }}
            className="flex-1 bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700 transition-colors"
           >
            Düzenle
           </button>
           <button
            onClick={() => talepSil(talep._id)}
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
    </div>

    {/* Talep Düzenleme Modal */}
    {seciliTalep && (
     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-8 max-w-2xl w-full max-h-screen overflow-y-auto">
       <h3 className="text-2xl font-bold mb-4 text-center">Talep Düzenle</h3>
       <div className="mb-4 space-y-2">
        <p>
         <span className="font-semibold">Ad Soyad:</span> {seciliTalep.adSoyad}
        </p>
        <p>
         <span className="font-semibold">Telefon:</span> {seciliTalep.telefon}
        </p>
       </div>
       {/* Talep Düzenleme Modal - Güncellenen Select Bölümü */}
       <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">
         Durum <span className="text-red-500 font-extrabold">*</span>
        </label>
        <div className="relative">
         <select
          value={durum}
          onChange={(e) => setDurum(e.target.value)}
          className="w-full appearance-none pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white"
         >
          <option value="">Durum Seçiniz</option>
          <option value="Yeni İstek">Yeni İstek</option>
          <option value="İstek İnceleniyor">İstek İnceleniyor</option>
          <option value="Başarılı İstek">Başarılı İstek</option>
         </select>
         {/* Custom ok işareti - sol tarafta */}
         <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center">
          <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
         </div>
        </div>
       </div>
       <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">İstenilen Teslim Tarihi</label>
        <input
         type="date"
         value={teslim}
         onChange={(e) => setTeslim(e.target.value)}
         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
        />
       </div>
       <div className="mb-6">
        <label className="block text-gray-700 font-semibold mb-2">
         Müşteriye Açıklama
         <span className="text-sm font-normal text-gray-500 ml-2"><br />
          (Başarılı istek durumunda müşteri bu mesajı görecektir)
         </span>
        </label>
        <textarea
         value={adminCevap}
         onChange={(e) => setAdminCevap(e.target.value)}
         rows={4}
         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
         placeholder="Müşteriye iletmek istediğiniz açıklamayı yazın..."
        />
       </div>
       <div className="flex gap-4">
        <button
         onClick={() => talepGuncelle(seciliTalep._id)}
         className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
         Kaydet
        </button>
        <button
         onClick={() => {
          setSeciliTalep(null);
          setDurum('');
          setTeslim('');
          setAdminCevap('');
         }}
         className="flex-1 bg-gray-600 text-white py-2 rounded-lg hover:bg-gray-700 transition-colors"
        >
         İptal
        </button>
       </div>
      </div>
     </div>
    )}
    {/* Destek Mesajları */}
    <div className="bg-white rounded-lg shadow-lg p-6 mt-8">
     <h2 className="text-[20px] sm:text-2xl font-bold mb-4">Destek Mesajları</h2>
     {/* Masaüstü Tablo Görünümü */}
     <div className="hidden md:block overflow-x-auto">
      <table className="w-full">
       <thead className="bg-gray-100">
        <tr>
         <th className="px-4 py-3 text-left">İsim</th>
         <th className="px-4 py-3 text-left">Telefon</th>
         <th className="px-4 py-3 text-left">Konu</th>
         <th className="px-4 py-3 text-left">Tarih</th>
         <th className="px-4 py-3 text-left">Mesaj</th>
         <th className="px-4 py-3 text-left">İşlemler</th>
        </tr>
       </thead>
       <tbody>
        {destekMesajlari.map((mesaj, index) => (
         <React.Fragment key={mesaj._id || index}>
          <tr className="border-b hover:bg-gray-50 transition-colors">
           <td className="px-4 py-3">{mesaj.name}</td>
           <td className="px-4 py-3">{mesaj.phone || '-'}</td>
           <td className="px-4 py-3">{mesaj.subject}</td>
           <td className="px-4 py-3">
            {new Date(mesaj.createdAt).toLocaleString('tr-TR', {
             day: '2-digit',
             month: '2-digit',
             year: 'numeric',
             hour: '2-digit',
             minute: '2-digit',
            })}
           </td>
           <td
            className="px-4 py-3 text-blue-600 cursor-pointer"
            onClick={() =>
             setMesajGosterilenId(
              mesajGosterilenId === (mesaj._id || index) ? null : (mesaj._id || index)
             )
            }
           >
            <AiOutlineInfoCircle className="h-5 w-5" />
           </td>
           <td className="px-4 py-3">
            <button
             onClick={() => destekMesajSil(mesaj._id)}
             className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition-colors"
            >
             Sil
            </button>
           </td>
          </tr>
          {mesajGosterilenId === (mesaj._id || index) && (
           <tr className="bg-gray-50">
            <td colSpan={6} className="px-4 py-3 text-gray-700 whitespace-pre-wrap">
             <strong>Mesaj:</strong> {mesaj.message}
            </td>
           </tr>
          )}
         </React.Fragment>
        ))}
        {destekMesajlari.length === 0 && (
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
      {destekMesajlari.map((mesaj, index) => (
       <div key={mesaj._id || index} className="bg-white border rounded-lg p-4 shadow-sm">
        <div className="space-y-3">
         <div>
          <p className="text-sm text-gray-600 font-semibold">İsim</p>
          <p className="text-base">{mesaj.name}</p>
         </div>

         <div>
          <p className="text-sm text-gray-600 font-semibold">Telefon</p>
          <p className="text-base">{mesaj.phone || '-'}</p>
         </div>

         <div>
          <p className="text-sm text-gray-600 font-semibold">Konu</p>
          <p className="text-base">{mesaj.subject}</p>
         </div>

         <div>
          <p className="text-sm text-gray-600 font-semibold">Tarih</p>
          <p className="text-base">
           {new Date(mesaj.createdAt).toLocaleString('tr-TR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
           })}
          </p>
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
            <strong>Mesaj:</strong> {mesaj.message}
           </div>
          )}
         </div>

         <div className="pt-2 border-t">
          <button
           onClick={() => destekMesajSil(mesaj._id)}
           className="w-full bg-red-600 text-white px-3 py-2 rounded hover:bg-red-700 transition-colors"
          >
           Sil
          </button>
         </div>
        </div>
       </div>
      ))}
      {destekMesajlari.length === 0 && (
       <div className="px-4 py-8 text-center text-gray-500">
        Henüz destek mesajı bulunmamaktadır.
       </div>
      )}
     </div>
    </div>
   </div>
  </div>
 );
}