'use client';
import { useState } from 'react';
import { FormInput } from '../../components/Form/FormInput';
import { FormTextarea } from '../../components/Form/FormTextarea';
import { DateInput } from '../../components/Form/DateInput';
import { Message } from '../../components/Form/Message';
import { validateForm, temizleTelefon } from '../utils/formValidation';

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

 const handleSubmit = async () => {
  setMesaj('');

  if (!validateForm(formData, setMesaj)) {
   return;
  }

  setIsSubmitting(true);

  try {
   const temizlenmisData = {
    ...formData,
    telefon: temizleTelefon(formData.telefon)
   };

   const response = await fetch('/api/urun-talepleri', {
    method: 'POST',
    headers: {
     'Content-Type': 'application/json',
    },
    body: JSON.stringify(temizlenmisData),
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
  if (mesaj) setMesaj('');
 };

 return (
  <div className="py-10 sm:py-16 bg-gray-50 min-h-screen">
   <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
    <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-blue-800">Ürün Talep Formu</h1>
    <div className="bg-white rounded-lg shadow-lg p-8">
     <p className="text-gray-700 mb-6 text-[16px] sm:text-[18px]">
      Aşağıdaki formu doldurarak ürün talebinde bulunabilirsiniz.
      En kısa sürede sizinle iletişime geçeceğiz.
     </p>
     <Message mesaj={mesaj} />
     <div>
      <FormInput
       label="Ad Soyad"
       name="adSoyad"
       value={formData.adSoyad}
       onChange={handleChange}
       disabled={isSubmitting}
       placeholder="Ad & Soyad"
       required
      />

      <FormInput
       label="Telefon"
       name="telefon"
       type="tel"
       value={formData.telefon}
       onChange={handleChange}
       disabled={isSubmitting}
       placeholder="05553332211"
       required
      />

      <DateInput
       value={formData.teslim}
       onChange={handleChange}
       disabled={isSubmitting}
       required
      />

      <FormTextarea
       label="Adres"
       name="adres"
       value={formData.adres}
       onChange={handleChange}
       disabled={isSubmitting}
       rows={3}
       placeholder="Teslimat adresinizi detaylı bir şekilde yazın."
       required
      />

      <FormTextarea
       label="Açıklama"
       name="aciklama"
       value={formData.aciklama}
       onChange={handleChange}
       disabled={isSubmitting}
       rows={4}
       placeholder="İstediğiniz ürün hakkında bilgiler yazın."
       required
      />

      <button
       onClick={handleSubmit}
       disabled={isSubmitting}
       type="button"
       className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
       {isSubmitting ? 'Gönderiliyor...' : 'Talep Gönder'}
      </button>
     </div>
    </div>
   </div>
  </div>
 );
}