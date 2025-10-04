export default function BasariBildirimi({ show, message, onClose }) {
 if (!show) return null;
 return (
  <>
   <div className="fixed top-4 right-4 z-50 animate-slide-in">
    <div className="bg-green-500 text-white px-6 py-4 rounded-lg shadow-2xl flex items-center gap-3 max-w-sm">
     <div className="flex-shrink-0">
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
     </div>
     <div>
      <p className="font-bold">Başarılı!</p>
      <p className="text-sm">{message}</p>
     </div>
     <button
      onClick={onClose}
      className="ml-auto text-white hover:text-gray-200"
     >
      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
     </button>
    </div>
   </div>

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
  </>
 );
}