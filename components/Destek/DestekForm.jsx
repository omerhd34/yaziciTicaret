'use client';
import { useState } from 'react';
import { FormInput } from '../Form/FormInput';
import { FormTextarea } from '../Form/FormTextarea';
import { Message } from '../Form/Message';

export default function DestekForm() {
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
  if (status) setStatus('');
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
  <form
   onSubmit={handleSubmit}
   className="w-full max-w-xl bg-white p-8 rounded-lg shadow-lg space-y-6"
  >
   <FormInput
    label="Ad Soyad"
    name="name"
    value={formData.name}
    onChange={handleChange}
    required
    disabled={isSubmitting}
    placeholder="Ad & Soyad"
   />

   <FormInput
    label="Telefon"
    name="phone"
    type="tel"
    value={formData.phone}
    onChange={handleChange}
    required
    disabled={isSubmitting}
    placeholder="0XXXXXXXXXX"
   />

   <FormInput
    label="Konu"
    name="subject"
    value={formData.subject}
    onChange={handleChange}
    required
    disabled={isSubmitting}
    placeholder="Mesajınızın konusu"
   />

   <FormTextarea
    label="Mesaj"
    name="message"
    value={formData.message}
    onChange={handleChange}
    required
    disabled={isSubmitting}
    rows={4}
    placeholder="Mesajınızı buraya yazın. (En az 10 karakter)"
   />

   <button
    type="submit"
    disabled={isSubmitting}
    className="w-full bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-800 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
   >
    Gönder
   </button>

   <Message mesaj={status} />
  </form>
 );
}