'use client';
import { useState } from 'react';

export default function DestekPage() {
 const [formData, setFormData] = useState({
  name: '',
  phone: '',
  subject: '',
  message: ''
 });
 const [status, setStatus] = useState('');
 const [isSubmitting, setIsSubmitting] = useState(false);

 const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
  if (status) setStatus(''); // Kullanıcı yazmaya başlayınca mesajı temizle
 };

 const validateForm = () => {
  if (!formData.name.trim()) {
   setStatus('Lütfen adınızı ve soyadınızı girin.');
   return false;
  }
  if (!formData.phone.trim()) {
   setStatus('Lütfen telefon numaranızı girin.');
   return false;
  }
  if (formData.phone.trim().length < 10) {
   setStatus('Lütfen geçerli bir telefon numarası girin.');
   return false;
  }
  if (!formData.subject.trim()) {
   setStatus('Lütfen bir konu girin.');
   return false;
  }
  if (!formData.message.trim()) {
   setStatus('Lütfen mesajınızı yazın.');
   return false;
  }
  if (formData.message.trim().length < 10) {
   setStatus('Mesajınız en az 10 karakter olmalıdır.');
   return false;
  }
  return true;
 };

 const handleSubmit = async (e) => {
  e.preventDefault();

  if (!validateForm()) {
   return;
  }

  setIsSubmitting(true);
  setStatus('Gönderiliyor...');

  try {
   const res = await fetch('/api/destek', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
   });

   if (res.ok) {
    setStatus('✓ Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.');
    setFormData({ name: '', phone: '', subject: '', message: '' });
   } else {
    const data = await res.json();
    setStatus(data.message || 'Bir hata oluştu, lütfen tekrar deneyin.');
   }
  } catch (error) {
   console.error('Destek gönderme hatası:', error);
   setStatus('Sunucuya bağlanılamadı. Lütfen daha sonra tekrar deneyin.');
  } finally {
   setIsSubmitting(false);
  }
 };

 return (
  <div className="min-h-screen bg-gray-100 flex flex-col items-center py-16 px-4">
   <h1 className="text-3xl sm:text-4xl font-bold text-blue-800 mb-6">Destek</h1>
   <p className="mb-8 text-center text-gray-700 max-w-xl">
    Lütfen aşağıdaki formu doldurarak bize ulaşın. En kısa sürede geri dönüş yapacağız.
   </p>

   <form
    onSubmit={handleSubmit}
    className="w-full max-w-xl bg-white p-8 rounded-lg shadow-lg space-y-6"
   >
    <div>
     <label className="block text-sm font-medium text-gray-700 mb-1">
      Ad Soyad <span className="text-red-500">*</span>
     </label>
     <input
      type="text"
      name="name"
      value={formData.name}
      onChange={handleChange}
      required
      disabled={isSubmitting}
      className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100"
      placeholder="Adınız ve soyadınız"
     />
    </div>

    <div>
     <label className="block text-sm font-medium text-gray-700 mb-1">
      Telefon <span className="text-red-500">*</span>
     </label>
     <input
      type="tel"
      name="phone"
      value={formData.phone}
      onChange={handleChange}
      required
      disabled={isSubmitting}
      className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100"
      placeholder="05553332211"
     />
    </div>

    <div>
     <label className="block text-sm font-medium text-gray-700 mb-1">
      Konu <span className="text-red-500">*</span>
     </label>
     <input
      type="text"
      name="subject"
      value={formData.subject}
      onChange={handleChange}
      required
      disabled={isSubmitting}
      className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100"
      placeholder="Mesajınızın konusu"
     />
    </div>

    <div>
     <label className="block text-sm font-medium text-gray-700 mb-1">
      Mesaj <span className="text-red-500">*</span>
     </label>
     <textarea
      name="message"
      value={formData.message}
      onChange={handleChange}
      required
      disabled={isSubmitting}
      rows={5}
      className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100"
      placeholder="Mesajınızı buraya yazın (En az 10 karakter)"
     ></textarea>
    </div>

    <button
     type="submit"
     disabled={isSubmitting}
     className="w-full bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-800 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
    >
     {isSubmitting ? 'Gönderiliyor...' : 'Gönder'}
    </button>

    {status && (
     <div className={`text-center p-3 rounded-lg ${status.includes('✓')
      ? 'bg-green-100 text-green-800 border border-green-300'
      : status === 'Gönderiliyor...'
       ? 'bg-blue-100 text-blue-800 border border-blue-300'
       : 'bg-red-100 text-red-800 border border-red-300'
      }`}>
      {status}
     </div>
    )}
   </form>
  </div>
 );
}