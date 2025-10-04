'use client';

export default function IptalModal({ isOpen, kargo, onClose, onConfirm }) {
 if (!isOpen || !kargo) return null;

 return (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
   <div className="bg-white rounded-lg p-6 max-w-md w-full shadow-2xl">
    <div className="text-center">
     <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4">
      <svg className="h-6 w-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 19c-.77.833.192 2.5 1.732 2.5z" />
      </svg>
     </div>
     <h3 className="text-lg font-bold text-gray-900 mb-2">Talebi İptal Et</h3>
     <p className="text-sm text-gray-500 mb-6">
      Bu talebi iptal etmek istediğinizden emin misiniz? <br />Bu işlem geri alınamaz.
     </p>
     <div className="space-y-2 mb-6 text-left bg-gray-50 p-3 rounded-lg">
      <p className="text-sm"><span className="font-semibold">Ad Soyad:</span> {kargo.adSoyad}</p>
      <p className="text-sm"><span className="font-semibold">Durum:</span> {kargo.durum}</p>
     </div>
     <div className="flex gap-3">
      <button
       onClick={onClose}
       className="flex-1 bg-gray-300 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-400 transition-colors"
      >
       Vazgeç
      </button>
      <button
       onClick={() => onConfirm(kargo._id)}
       className="flex-1 bg-red-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors"
      >
       İptal Et
      </button>
     </div>
    </div>
   </div>
  </div>
 );
}