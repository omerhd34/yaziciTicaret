'use client';
export function Message({ mesaj }) {
 if (!mesaj) return null;
 const getStatusStyle = () => {
  if (mesaj.includes('✓')) {
   return 'bg-green-100 text-green-800 border border-green-300';
  } else if (mesaj === 'Gönderiliyor...') {
   return 'bg-blue-100 text-blue-800 border border-blue-300';
  } else {
   return 'bg-red-100 text-red-800 border border-red-300';
  }
 };

 return (
  <div className={`p-4 rounded-lg ${getStatusStyle()}`}>
   {mesaj}
  </div>
 );
}