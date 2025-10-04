'use client';
import { FaTimes } from 'react-icons/fa';

export default function ImageModal({ selectedImage, onClose }) {
 if (!selectedImage) return null;

 return (
  <>
   <div
    onClick={onClose}
    className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4 animate-fadeIn"
   >
    <button
     onClick={onClose}
     className="absolute top-4 right-4 text-white bg-red-600 hover:bg-red-700 rounded-full p-3 transition-all duration-300 hover:scale-110 z-10"
    >
     <FaTimes className="text-2xl" />
    </button>

    <div
     onClick={(e) => e.stopPropagation()}
     className="relative max-w-5xl max-h-[90vh] animate-scaleIn"
    >
     <img
      src={selectedImage.src}
      alt={selectedImage.alt}
      className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
     />
     <p className="text-white text-center mt-4 text-lg font-medium">
      {selectedImage.alt}
     </p>
    </div>
   </div>

   <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes scaleIn {
          from {
            transform: scale(0.9);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        
        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
      `}</style>
  </>
 );
}