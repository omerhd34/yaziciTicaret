'use client';
export function Message({ mesaj }) {
 if (!mesaj) return null;

 return (
  <div className={`p-4 rounded-lg mb-6  ${mesaj.includes('✓')
   ? 'bg-green-100 text-green-800 border border-green-300'
   : 'bg-red-100 text-red-800 border border-red-300'
   }`}>
   {mesaj}
  </div>
 );
}
