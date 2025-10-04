"use client";
import { useState } from 'react';
import TelefonSorgulaForm from '@/components/KargoTakip/TelefonSorgulaForm';
import KargoListesi from '@/components/KargoTakip/KargoListesi';
import IptalModal from '@/components/KargoTakip/IptalModal';
import BasariBildirimi from '@/components/Admin/BasariBildirimi';

export default function KargoTakipPage() {
 const [telefon, setTelefon] = useState('');
 const [kargolar, setKargolar] = useState([]);
 const [mesaj, setMesaj] = useState('');
 const [arandiMi, setArandiMi] = useState(false);
 const [yukleniyor, setYukleniyor] = useState(false);
 const [iptalModalAcik, setIptalModalAcik] = useState(false);
 const [iptalEdilecekKargo, setIptalEdilecekKargo] = useState(null);
 const [basariBildirimi, setBasariBildirimi] = useState(false);

 const handleSubmit = async () => {
  if (!telefon.trim()) {
   setMesaj('Lütfen telefon numarası giriniz.');
   return;
  }

  const temizTelefon = telefon.replace(/[\s\-\(\)]/g, '');

  if (temizTelefon.length < 10) {
   setMesaj('Lütfen telefon numarasının tamamını giriniz (en az 10 hane).');
   return;
  }

  setMesaj('');
  setArandiMi(true);
  setYukleniyor(true);

  try {
   const response = await fetch(`/api/kargo-sorgula?telefon=${encodeURIComponent(telefon)}`);
   const data = await response.json();

   if (response.ok) {
    const allKargolar = data.kargolar || [];
    const aktifKargolar = allKargolar.filter(kargo => kargo.durum !== 'İptal Edildi');

    setKargolar(allKargolar);

    if (aktifKargolar.length === 0) {
     if (allKargolar.length > 0) {
      setMesaj('Bu telefon numarası ile kayıtlı aktif talep bulunamadı. Tüm talepleriniz iptal edilmiş durumda.');
     } else {
      setMesaj('Bu telefon numarası ile kayıtlı talep bulunamadı. Lütfen telefon numaranızın tamamını doğru girdiğinizden emin olun.');
     }
    }
   } else {
    setMesaj(data.message || 'Bir hata oluştu. Lütfen tekrar deneyin.');
   }
  } catch (error) {
   console.error('Sorgulama hatası:', error);
   setMesaj('Bir hata oluştu. Lütfen tekrar deneyin.');
  } finally {
   setYukleniyor(false);
  }
 };

 const iptalModaliAc = (kargo) => {
  setIptalEdilecekKargo(kargo);
  setIptalModalAcik(true);
 };

 const iptalModaliKapat = () => {
  setIptalModalAcik(false);
  setIptalEdilecekKargo(null);
 };

 const handleIptalEt = async (kargoId) => {
  try {
   const response = await fetch('/api/talep-iptal', {
    method: 'PUT',
    headers: {
     'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id: kargoId }),
   });

   if (response.ok) {
    setBasariBildirimi(true);
    setIptalModalAcik(false);
    setIptalEdilecekKargo(null);

    setTimeout(() => {
     setBasariBildirimi(false);
    }, 3000);

    handleSubmit();
   } else {
    const data = await response.json();
    alert(data.message || 'İptal işlemi başarısız oldu. Lütfen tekrar deneyin.');
   }
  } catch (error) {
   console.error('İptal hatası:', error);
   alert('Bir hata oluştu. Lütfen tekrar deneyin.');
  }
 };

 return (
  <div className="py-10 sm:py-16 bg-gray-50 min-h-screen">
   <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-blue-800">İstek Takibi</h1>

    <TelefonSorgulaForm
     telefon={telefon}
     onChange={(e) => setTelefon(e.target.value)}
     onSubmit={handleSubmit}
     yukleniyor={yukleniyor}
    />

    {mesaj && (
     <div className="bg-yellow-100 border border-yellow-400 text-yellow-800 p-4 rounded-lg mb-6 break-words">
      {mesaj}
     </div>
    )}

    <KargoListesi
     kargolar={kargolar}
     arandiMi={arandiMi}
     onIptalClick={iptalModaliAc}
    />

    <IptalModal
     isOpen={iptalModalAcik}
     kargo={iptalEdilecekKargo}
     onClose={iptalModaliKapat}
     onConfirm={handleIptalEt}
    />

    <BasariBildirimi
     show={basariBildirimi}
     message="Talebiniz başarıyla iptal edildi."
     onClose={() => setBasariBildirimi(false)}
    />
   </div>
  </div>
 );
}