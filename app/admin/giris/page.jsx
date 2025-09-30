'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminGirisPage() {
 const [kullaniciAdi, setKullaniciAdi] = useState('');
 const [sifre, setSifre] = useState('');
 const [hata, setHata] = useState('');
 const router = useRouter();

 const handleSubmit = async (e) => {
  e.preventDefault();
  setHata('');

  try {
   const response = await fetch('/api/auth', {
    method: 'POST',
    headers: {
     'Content-Type': 'application/json',
    },
    body: JSON.stringify({ kullaniciAdi, sifre }),
   });

   if (response.ok) {
    const data = await response.json();
    localStorage.setItem('adminToken', data.token);
    router.push('/admin');
   } else {
    setHata('Kullanıcı adı veya şifre hatalı');
   }
  } catch (error) {
   setHata('Bir hata oluştu. Lütfen tekrar deneyin.');
  }
 };

 return (
  <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
   <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
    <div>
     <h2 className="text-center text-3xl font-bold text-gray-900 mb-8">
      Admin Girişi
     </h2>
    </div>

    {hata && (
     <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
      {hata}
     </div>
    )}

    <form onSubmit={handleSubmit} className="space-y-6">
     <div>
      <label htmlFor="kullaniciAdi" className="block text-sm font-medium text-gray-700">
       Kullanıcı Adı
      </label>
      <input
       id="kullaniciAdi"
       name="kullaniciAdi"
       type="text"
       required
       value={kullaniciAdi}
       onChange={(e) => setKullaniciAdi(e.target.value)}
       className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
      />
     </div>

     <div>
      <label htmlFor="sifre" className="block text-sm font-medium text-gray-700">
       Şifre
      </label>
      <input
       id="sifre"
       name="sifre"
       type="password"
       required
       value={sifre}
       onChange={(e) => setSifre(e.target.value)}
       className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
      />
     </div>

     <button
      type="submit"
      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
     >
      Giriş Yap
     </button>
    </form>
   </div>
  </div>
 );
}