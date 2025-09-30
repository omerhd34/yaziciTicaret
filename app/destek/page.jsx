'use client';
import { useState } from 'react';

export default function DestekPage() {
 const [formData, setFormData] = useState({
  name: '',
  email: '',
  subject: '',
  message: ''
 });
 const [status, setStatus] = useState('');

 const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
 };

 const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus('Gönderiliyor...');
  try {
   const res = await fetch('/api/destek', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
   });

   if (res.ok) {
    setStatus('Mesajınız başarıyla gönderildi!');
    setFormData({ name: '', email: '', subject: '', message: '' });
   } else {
    setStatus('Bir hata oluştu, lütfen tekrar deneyin.');
   }
  } catch (error) {
   setStatus('Sunucuya bağlanılamadı.');
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
     <label className="block text-sm font-medium text-gray-700 mb-1">İsim</label>
     <input
      type="text"
      name="name"
      value={formData.name}
      onChange={handleChange}
      required
      className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
     />
    </div>

    <div>
     <label className="block text-sm font-medium text-gray-700 mb-1">E-posta</label>
     <input
      type="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      required
      className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
     />
    </div>

    <div>
     <label className="block text-sm font-medium text-gray-700 mb-1">Konu</label>
     <input
      type="text"
      name="subject"
      value={formData.subject}
      onChange={handleChange}
      required
      className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
     />
    </div>

    <div>
     <label className="block text-sm font-medium text-gray-700 mb-1">Mesaj</label>
     <textarea
      name="message"
      value={formData.message}
      onChange={handleChange}
      required
      rows={5}
      className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
     ></textarea>
    </div>

    <button
     type="submit"
     className="w-full bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-800 transition-colors"
    >
     Gönder
    </button>

    {status && <p className="text-center text-gray-700 mt-2">{status}</p>}
   </form>
  </div>
 );
}
