'use client';
import { useState } from 'react';

export default function UrunIstegiPage() {
 const [formData, setFormData] = useState({
  adSoyad: '',
  telefon: '',
  adres: '',
  aciklama: '',
  teslim: ''
 });
 const [mesaj, setMesaj] = useState('');

 const handleSubmit = async (e) => {
  e.preventDefault();
  setMesaj('');

  try {
   const response = await fetch('/api/urun-talepleri', {
    method: 'POST',
    headers: {
     'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
   });

   if (response.ok) {
    setMesaj('Ürün talebiniz başarıyla alındı! En kısa sürede sizinle iletişime geçeceğiz.');
    setFormData({
     adSoyad: '',
     telefon: '',
     adres: '',
     aciklama: '',
     teslim: ''
    });
   } else {
    setMesaj('Bir hata oluştu. Lütfen tekrar deneyin.');
   }
  } catch (error) {
   setMesaj('Bir hata oluştu. Lütfen tekrar deneyin.');
  }
 };

 const handleChange = (e) => {
  setFormData({
   ...formData,
   [e.target.name]: e.target.value
  });
 };

 return (
  <div className="py-16 bg-gray-50">
   <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
    <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-blue-800">Ürün Talep Formu</h1>
    <div className="bg-white rounded-lg shadow-lg p-8">
     <p className="text-gray-700 mb-6">
      Aşağıdaki formu doldurarak ürün talebinde bulunabilirsiniz.
      En kısa sürede sizinle iletişime geçeceğiz.
     </p>
     {mesaj && (
      <div className={`p-4 rounded-lg mb-6 ${mesaj.includes('başarıyla') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
       {mesaj}
      </div>
     )}
     <form onSubmit={handleSubmit}>
      <div className="mb-4">
       <label className="block text-gray-700 font-semibold mb-2">
        Ad Soyad *
       </label>
       <input
        type="text"
        name="adSoyad"
        value={formData.adSoyad}
        onChange={handleChange}
        required
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
       />
      </div>

      <div className="mb-4">
       <label className="block text-gray-700 font-semibold mb-2">
        Telefon *
       </label>
       <input
        type="tel"
        name="telefon"
        value={formData.telefon}
        onChange={handleChange}
        required
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
       />
      </div>

      <div className="mb-4">
       <label className="block text-gray-700 font-semibold mb-2">
        İstenilen Teslim Tarihi *
       </label>
       <input
        type="date"
        name="teslim"
        value={formData.teslim}
        onChange={handleChange}
        required
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
       />

      </div>


      <div className="mb-4">
       <label className="block text-gray-700 font-semibold mb-2">
        Adres *
       </label>
       <textarea
        name="adres"
        value={formData.adres}
        onChange={handleChange}
        required
        rows="3"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
       />
      </div>

      <div className="mb-6">
       <label className="block text-gray-700 font-semibold mb-2">
        Açıklama
       </label>
       <textarea
        name="aciklama"
        value={formData.aciklama}
        onChange={handleChange}
        rows="4"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        placeholder="Ürün hakkında ek bilgiler..."
       />
      </div>

      <button
       type="submit"
       className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
      >
       Talep Gönder
      </button>
     </form>
    </div>
   </div>
  </div>
 );
}