import { FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
export default function FooterContact({ isAdmin = false }) {
 return (
  <div className="space-y-4">
   <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
    <span className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-transparent"></span>
    İletişim
   </h4>

   <div className="space-y-3">
    <div className="flex items-start gap-3 group">
     <div className="mt-1 text-blue-400 group-hover:text-blue-300 transition-colors">
      <FaMapMarkerAlt className="text-lg" />
     </div>
     <div>
      <p className="text-gray-400 text-sm leading-relaxed">
       Kemalpaşa, Atatürk Blv. No:54/E<br />
       İnegöl/Bursa
      </p>
     </div>
    </div>

    <div className="flex items-start gap-3 group">
     <div className="mt-1 text-green-400 group-hover:text-green-300 transition-colors">
      <FaPhone className="text-lg" />
     </div>
     <div className="flex flex-col">
      <p className="text-gray-400 text-sm hover:text-white transition-colors">
       0544 796 77 70
      </p>
      <p className="text-xs text-gray-500">Mağaza 1</p>
     </div>
    </div>

    <div className="flex items-start gap-3 group">
     <div className="mt-1 text-green-400 group-hover:text-green-300 transition-colors">
      <FaPhone className="text-lg" />
     </div>
     <div className="flex flex-col">
      <p className="text-gray-400 text-sm hover:text-white transition-colors">
       0501 349 69 91
      </p>
      <p className="text-xs text-gray-500">Mağaza 2</p>
     </div>
    </div>
   </div>
  </div>
 );
}
