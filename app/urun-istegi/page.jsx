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
 const [isSubmitting, setIsSubmitting] = useState(false);

 const validateForm = () => {
  if (!formData.adSoyad.trim()) {
   setMesaj('Lütfen ad ve soyadınızı girin.');
   return false;
  }
  if (!formData.telefon.trim()) {
   setMesaj('Lütfen telefon numaranızı girin.');
   return false;
  }
  if (formData.telefon.trim().length < 10) {
   setMesaj('Lütfen geçerli bir telefon numarası girin.');
   return false;
  }
  if (!formData.teslim) {
   setMesaj('Lütfen istenilen teslim tarihini seçin.');
   return false;
  }
  // Geçmiş tarih kontrolü
  const selectedDate = new Date(formData.teslim);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  if (selectedDate < today) {
   setMesaj('Teslim tarihi bugünden önce olamaz.');
   return false;
  }
  if (!formData.adres.trim()) {
   setMesaj('Lütfen adres bilgisini girin.');
   return false;
  }
  if (formData.adres.trim().length < 10) {
   setMesaj('Lütfen daha detaylı bir adres girin.');
   return false;
  }
  return true;
 };

 const handleSubmit = async (e) => {
  e.preventDefault();
  setMesaj('');

  if (!validateForm()) {
   return;
  }

  setIsSubmitting(true);

  try {
   const response = await fetch('/api/urun-talepleri', {
    method: 'POST',
    headers: {
     'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
   });

   const data = await response.json();

   if (response.ok) {
    setMesaj('✓ Ürün talebiniz başarıyla alındı! En kısa sürede sizinle iletişime geçeceğiz.');
    setFormData({
     adSoyad: '',
     telefon: '',
     adres: '',
     aciklama: '',
     teslim: ''
    });
   } else {
    setMesaj(data.message || 'Bir hata oluştu. Lütfen tekrar deneyin.');
   }
  } catch (error) {
   console.error('Talep gönderme hatası:', error);
   setMesaj('Sunucuya bağlanılamadı. Lütfen daha sonra tekrar deneyin.');
  } finally {
   setIsSubmitting(false);
  }
 };

 const handleChange = (e) => {
  setFormData({
   ...formData,
   [e.target.name]: e.target.value
  });
  if (mesaj) setMesaj(''); // Kullanıcı yazmaya başlayınca mesajı temizle
 };

 // Minimum tarih (bugün)
 const minDate = new Date().toISOString().split('T')[0];

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
      <div className={`p-4 rounded-lg mb-6 ${mesaj.includes('✓')
       ? 'bg-green-100 text-green-800 border border-green-300'
       : 'bg-red-100 text-red-800 border border-red-300'
       }`}>
       {mesaj}
      </div>
     )}

     <form onSubmit={handleSubmit}>
      <div className="mb-4">
       <label className="block text-gray-700 font-semibold mb-2">
        Ad Soyad <span className="text-red-500">*</span>
       </label>
       <input
        type="text"
        name="adSoyad"
        value={formData.adSoyad}
        onChange={handleChange}
        required
        disabled={isSubmitting}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
        placeholder="Adınız ve soyadınız"
       />
      </div>

      <div className="mb-4">
       <label className="block text-gray-700 font-semibold mb-2">
        Telefon <span className="text-red-500">*</span>
       </label>
       <input
        type="tel"
        name="telefon"
        value={formData.telefon}
        onChange={handleChange}
        required
        disabled={isSubmitting}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
        placeholder="0XXX XXX XX XX"
       />
      </div>

      <div className="mb-4">
       <label className="block text-gray-700 font-semibold mb-2">
        İstenilen Teslim Tarihi <span className="text-red-500">*</span>
       </label>
       <input
        type="date"
        name="teslim"
        value={formData.teslim}
        onChange={handleChange}
        required
        disabled={isSubmitting}
        min={minDate}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
       />
      </div>

      <div className="mb-4">
       <label className="block text-gray-700 font-semibold mb-2">
        Adres <span className="text-red-500">*</span>
       </label>
       <textarea
        name="adres"
        value={formData.adres}
        onChange={handleChange}
        required
        disabled={isSubmitting}
        rows="3"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
        placeholder="Teslimat adresinizi detaylı bir şekilde yazın"
       />
      </div>

      <div className="mb-6">
       <label className="block text-gray-700 font-semibold mb-2">
        Açıklama <span className="text-red-500">*</span>
       </label>
       <textarea
        name="aciklama"
        value={formData.aciklama}
        onChange={handleChange}
        required
        disabled={isSubmitting}
        rows="4"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
        placeholder="İstediğiniz ürün hakkında ek bilgiler yazabilirsiniz..."
       />
      </div>

      <button
       type="submit"
       disabled={isSubmitting}
       className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
       {isSubmitting ? 'Gönderiliyor...' : 'Talep Gönder'}
      </button>
     </form>
    </div>
   </div>
  </div>
 );
}