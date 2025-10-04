'use client';
import KargoKart from './KargoKart';

export default function KargoListesi({ kargolar, arandiMi, onIptalClick }) {
 if (!arandiMi) return null;

 const aktifKargolar = kargolar.filter(kargo => kargo.durum !== 'İptal Edildi');

 if (aktifKargolar.length === 0) return null;

 return (
  <div>
   <h2 className="text-2xl font-bold mb-4">Talepleriniz</h2>
   <div className="space-y-4">
    {aktifKargolar.map((kargo) => (
     <KargoKart
      key={kargo._id}
      kargo={kargo}
      onIptalClick={onIptalClick}
     />
    ))}
   </div>
  </div>
 );
}