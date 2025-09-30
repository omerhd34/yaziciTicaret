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
 }, []);

 const talepleriGetir = async () => {
  try {
   const response = await fetch('/api/urun-talepleri');
   if (response.ok) {
    const data = await response.json();
    setTalepler(data.talepler);
   }
  } catch (error) {
   console.error('Talepler getirilirken hata:', error);
  } finally {
   setYukleniyor(false);
  }
 };

 const talepGuncelle = async (id) => {
  try {
   const response = await fetch('/api/kargolar', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id, durum, teslim }),
   });

   if (response.ok) {
    alert('Talep güncellendi');
    setSeciliTalep(null);
    setDurum('');
    setTeslim('');
    talepleriGetir();
   }
  } catch (error) {
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
   }
  } catch (error) {
   alert('Bir hata oluştu');
  }
 };

 const destekMesajlariniGetir = async () => {
  try {
   const res = await fetch('/api/destek');
   if (res.ok) {
    const data = await res.json();
    setDestekMesajlari(data.mesajlar);
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
    destekMesajlariniGetir(); // Listeyi tekrar getir
   }
  } catch (error) {
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
    <div className="flex justify-between items-center mb-8">
     <h1 className="text-4xl font-bold">Admin Paneli</h1>
     <button
      onClick={cikisYap}
      className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700"
     >
      Çıkış Yap
     </button>
    </div>

    {/* İstatistikler */}
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
     <h2 className="text-2xl font-bold mb-4">İstatistikler</h2>
     <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <div className="bg-blue-100 p-4 rounded-lg">
       <p className="text-sm text-blue-600 font-semibold">Toplam Talep</p>
       <p className="text-3xl font-bold text-blue-800">{talepler.length}</p>
      </div>
      <div className="bg-yellow-100 p-4 rounded-lg">
       <p className="text-sm text-yellow-600 font-semibold">Hazırlanıyor</p>
       <p className="text-3xl font-bold text-yellow-800">
        {talepler.filter((t) => t.durum === 'Hazırlanıyor').length}
       </p>
      </div>
      <div className="bg-red-100 p-4 rounded-lg">
       <p className="text-sm text-red-600 font-semibold">Kargoya Verildi</p>
       <p className="text-3xl font-bold text-red-800">
        {talepler.filter((t) => t.durum === 'Kargoya Verildi').length}
       </p>
      </div>
      <div className="bg-green-100 p-4 rounded-lg">
       <p className="text-sm text-green-600 font-semibold">Teslim Edildi</p>
       <p className="text-3xl font-bold text-green-800">
        {talepler.filter((t) => t.durum === 'Teslim Edildi').length}
       </p>
      </div>
     </div>
    </div>

    {/* Tüm Talepler */}
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
     <h2 className="text-2xl font-bold mb-4">Tüm Talepler</h2>
     <div className="overflow-x-auto">
      <table className="w-full">
       <thead className="bg-gray-100">
        <tr>
         <th className="px-4 py-3 text-left">Ad Soyad</th>
         <th className="px-4 py-3 text-left">Telefon</th>
         <th className="px-4 py-3 text-left">İstenilen Teslim Tarihi</th>
         <th className="px-4 py-3 text-left">Tarih ve Saat</th>
         <th className="px-4 py-3 text-left cursor-pointer">Açıklama</th>
         <th className="px-4 py-3 text-left">İşlemler</th>
        </tr>
       </thead>
       <tbody>
        {talepler.map((talep) => {
         let bgColor = 'bg-white';
         if (talep.durum === 'Hazırlanıyor') bgColor = 'bg-yellow-100';
         else if (talep.durum === 'Kargoya Verildi') bgColor = 'bg-red-100';
         else if (talep.durum === 'Teslim Edildi') bgColor = 'bg-green-100';

         return (
          <React.Fragment key={talep._id}>
           <tr className={`${bgColor} border-b hover:bg-gray-300 transition-colors duration-300`}>
            <td className="px-4 py-3">{talep.adSoyad}</td>
            <td className="px-4 py-3">{talep.telefon}</td>
            <td className="px-4 py-3">{talep.teslim}</td>
            <td className="px-4 py-3">
             {new Date(talep.olusturmaTarihi).toLocaleString('tr-TR', {
              day: '2-digit',
              month: '2-digit',
              year: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
              second: '2-digit',
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
              }}
              className="bg-blue-600 text-white px-3 py-1 rounded mr-2 hover:bg-blue-700"
             >
              Düzenle
             </button>
             <button
              onClick={() => talepSil(talep._id)}
              className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
             >
              Sil
             </button>
            </td>
           </tr>
           {aciklamaGosterilenId === talep._id && talep.aciklama && (
            <tr className="bg-gray-50">
             <td colSpan={6} className="px-4 py-3 text-gray-700 whitespace-pre-wrap">
              {talep.aciklama}
             </td>
            </tr>
           )}
          </React.Fragment>
         );
        })}
       </tbody>
      </table>
     </div>
    </div>

    {/* Talep Düzenleme Modal */}
    {seciliTalep && (
     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-8 max-w-2xl w-full max-h-screen overflow-y-auto">
       <h3 className="text-2xl font-bold mb-4">Talep Düzenle</h3>
       <div className="mb-4">
        <p>
         <span className="font-semibold">Ad Soyad:</span> {seciliTalep.adSoyad}
        </p>
        <p>
         <span className="font-semibold">Telefon:</span> {seciliTalep.telefon}
        </p>
        <p>
         <span className="font-semibold">Adres:</span> {seciliTalep.adres}
        </p>
        {seciliTalep.aciklama && (
         <p>
          <span className="font-semibold">Açıklama:</span> {seciliTalep.aciklama}
         </p>
        )}
       </div>
       <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Durum</label>
        <select
         value={durum}
         onChange={(e) => setDurum(e.target.value)}
         className="w-full px-4 py-2 border border-gray-300 rounded-lg"
        >
         <option value="Hazırlanıyor">Hazırlanıyor</option>
         <option value="Kargoya Verildi">Kargoya Verildi</option>
         <option value="Teslim Edildi">Teslim Edildi</option>
        </select>
       </div>
       <div className="mb-6">
        <label className="block text-gray-700 font-semibold mb-2">Tahmini Teslimat Tarihi</label>
        <input
         type="date"
         value={teslim}
         onChange={(e) => setTeslim(e.target.value)}
         className="w-full px-4 py-2 border border-gray-300 rounded-lg"
        />
       </div>
       <div className="flex gap-4">
        <button
         onClick={() => talepGuncelle(seciliTalep._id)}
         className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
        >
         Kaydet
        </button>
        <button
         onClick={() => {
          setSeciliTalep(null);
          setDurum('');
          setTeslim('');
         }}
         className="flex-1 bg-gray-600 text-white py-2 rounded-lg hover:bg-gray-700"
        >
         İptal
        </button>
       </div>
      </div>
     </div>
    )}

    {/* Destek Mesajları */}
    <div className="bg-white rounded-lg shadow-lg p-6 mt-8">
     <h2 className="text-2xl font-bold mb-4">Destek Mesajları</h2>
     <div className="overflow-x-auto">
      <table className="w-full">
       <thead className="bg-gray-100">
        <tr>
         <th className="px-4 py-3 text-left">İsim</th>
         <th className="px-4 py-3 text-left">Telefon</th>
         <th className="px-4 py-3 text-left">Konu</th>
         <th className="px-4 py-3 text-left">Mesaj</th>
         <th className="px-4 py-3 text-left">Tarih</th>
         <th className="px-4 py-3 text-left">İşlemler</th>
        </tr>
       </thead>
       <tbody>
        {destekMesajlari.map((mesaj, index) => (
         <React.Fragment key={mesaj._id || index}>
          <tr className="border-b hover:bg-gray-50">
           <td className="px-4 py-3">{mesaj.name}</td>
           <td className="px-4 py-3">{mesaj.telefon || '-'}</td>
           <td className="px-4 py-3">{mesaj.subject}</td>
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
           <td className="px-4 py-3">{new Date(mesaj.createdAt).toLocaleString('tr-TR')}</td>
           <td className="px-4 py-3">
            <button
             onClick={() => destekMesajSil(mesaj._id)}
             className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
            >
             Sil
            </button>
           </td>
          </tr>
          {mesajGosterilenId === (mesaj._id || index) && (
           <tr className="bg-gray-50">
            <td colSpan={6} className="px-4 py-3 text-gray-700 whitespace-pre-wrap">
             {mesaj.message}
            </td>
           </tr>
          )}
         </React.Fragment>
        ))}
       </tbody>
      </table>
     </div>
    </div>
   </div>
  </div>
 );
}
