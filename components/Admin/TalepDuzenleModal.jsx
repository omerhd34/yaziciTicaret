"use client"
import { formatTarih } from '@/app/utils/adminHelpers';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function TalepDuzenleModal({ talep, onClose, onSave }) {
 const [durum, setDurum] = useState('');
 const [teslim, setTeslim] = useState('');
 const [adminCevap, setAdminCevap] = useState('');

 useEffect(() => {
  if (talep) {
   setDurum(talep.durum || '');
   setTeslim(talep.teslim || '');
   setAdminCevap(talep.adminCevap || '');
  }
 }, [talep]);

 if (!talep) return null;

 const handleSave = () => {
  if (!durum) {
   alert('Lütfen durum seçiniz');
   return;
  }
  onSave({ durum, teslim, adminCevap });
 };

 return (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
   <div className="bg-white rounded-lg p-8 max-w-2xl w-full max-h-screen overflow-y-auto">
    <h3 className="text-2xl font-bold mb-5 text-center">Talep Düzenle</h3>

    <div className="mb-4 space-y-2">
     <p>
      <span className="font-semibold">Ad Soyad:</span> {talep.adSoyad}
     </p>
     <p>
      <span className="font-semibold">Telefon No:</span> {talep.telefon}
     </p>
     <p>
      <span className="font-semibold">Teslim Tarihi:</span> {talep.teslim}
     </p>
     <p>
      <span className="font-semibold">Talep Zamanı:</span> {formatTarih(talep.olusturmaTarihi)}
     </p>
     <p>
      <span className="font-semibold">Açıklama:</span>
      <span className="font-bold text-red-500 cursor-pointer" onClick={onClose}>  Açıklamayı Gör</span>
     </p>
    </div>
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
       <option value="İptal Edildi">İptal Edildi</option>
      </select>
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
      <span className="text-sm font-normal text-gray-500 ml-2">
       <br />
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
      onClick={handleSave}
      className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
     >
      Kaydet
     </button>
     <button
      onClick={onClose}
      className="flex-1 bg-gray-600 text-white py-2 rounded-lg hover:bg-gray-700 transition-colors"
     >
      İptal
     </button>
    </div>
   </div>
  </div>
 );
}