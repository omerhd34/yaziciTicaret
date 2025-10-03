'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import AdminStats from '@/components/Admin/AdminStats';
import TaleplerSection from '@/components/Admin/TaleplerSection';
import TalepDuzenleModal from '@/components/Admin/TalepDuzenleModal';
import DestekMesajlariSection from '@/components/Admin/DestekMesajlariSection';
import Logo from '@/components/Logo';

export default function AdminPage() {
 const [talepler, setTalepler] = useState([]);
 const [yukleniyor, setYukleniyor] = useState(true);
 const [seciliTalep, setSeciliTalep] = useState(null);
 const [destekMesajlari, setDestekMesajlari] = useState([]);
 const [basariBildirimi, setBasariBildirimi] = useState(false);
 const [basariBildirimiMetni, setBasariBildirimiMetni] = useState('');
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

 const talepGuncelle = async (guncellemeler) => {
  try {
   const response = await fetch('/api/kargolar', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id: seciliTalep._id, ...guncellemeler }),
   });

   if (response.ok) {
    setBasariBildirimiMetni('Talep başarıyla güncellendi.');
    setBasariBildirimi(true);
    setSeciliTalep(null);
    talepleriGetir();

    setTimeout(() => {
     setBasariBildirimi(false);
    }, 3000);
   } else {
    alert('Güncelleme başarısız oldu');
   }
  } catch (error) {
   console.error('Güncelleme hatası:', error);
   alert('Bir hata oluştu');
  }
 };

 const talepSil = async (id) => {
  try {
   const response = await fetch('/api/kargolar', {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id }),
   });

   if (response.ok) {
    talepleriGetir();
    setBasariBildirimiMetni('Talep başarıyla silindi.');
    setBasariBildirimi(true);

    setTimeout(() => {
     setBasariBildirimi(false);
    }, 3000);
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
   console.error('Destek mesajları alınamadı:', err);
  }
 };

 const destekMesajSil = async (id) => {
  try {
   const response = await fetch('/api/destek', {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id }),
   });

   if (response.ok) {
    destekMesajlariniGetir();
    setBasariBildirimiMetni('Mesaj başarıyla silindi.');
    setBasariBildirimi(true);

    setTimeout(() => {
     setBasariBildirimi(false);
    }, 3000);
   } else {
    alert('Silme işlemi başarısız oldu');
   }
  } catch (error) {
   console.error('Silme hatası:', error);
   alert('Bir hata oluştu');
  }
 };

 if (yukleniyor) {
  return (
   <div className="flex bg-black justify-center items-center min-h-screen">
    <div>
     <Logo />
    </div>
   </div>
  );
 }

 return (
  <div className="py-8 bg-gray-50 min-h-screen">
   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h1 className="text-3xl font-bold mb-8 text-blue-800">Admin Paneli</h1>

    <AdminStats talepler={talepler} />

    <TaleplerSection
     talepler={talepler}
     onEdit={setSeciliTalep}
     onDelete={talepSil}
    />

    <TalepDuzenleModal
     talep={seciliTalep}
     onClose={() => setSeciliTalep(null)}
     onSave={talepGuncelle}
    />

    <DestekMesajlariSection
     mesajlar={destekMesajlari}
     onDelete={destekMesajSil}
    />

    {/* Başarı Bildirimi */}
    {basariBildirimi && (
     <div className="fixed top-4 right-4 z-50 animate-slide-in">
      <div className="bg-green-500 text-white px-6 py-4 rounded-lg shadow-2xl flex items-center gap-3 max-w-sm">
       <div className="flex-shrink-0">
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
       </div>
       <div>
        <p className="font-bold">Başarılı!</p>
        <p className="text-sm">{basariBildirimiMetni}</p>
       </div>
       <button
        onClick={() => setBasariBildirimi(false)}
        className="ml-auto text-white hover:text-gray-200"
       >
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
       </button>
      </div>
     </div>
    )}

    <style jsx>{`
     @keyframes slide-in {
      from {
       transform: translateX(100%);
       opacity: 0;
      }
      to {
       transform: translateX(0);
       opacity: 1;
      }
     }
     
     .animate-slide-in {
      animation: slide-in 0.3s ease-out;
     }
    `}</style>
   </div>
  </div>
 );
}