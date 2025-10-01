import { FaSignOutAlt } from 'react-icons/fa';

export default function NavbarAdminSection({ onLogout }) {
 return (
  <>
   {/* Mobile - Admin Çıkış */}
   <div className="flex items-center lg:hidden">
    <button
     onClick={onLogout}
     className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg font-semibold transition-colors flex items-center gap-2"
    >
     <FaSignOutAlt className="w-4 h-4" />
     <span>Çıkış</span>
    </button>
   </div>

   {/* Desktop - Admin Çıkış */}
   <div className="hidden lg:flex items-center">
    <button
     onClick={onLogout}
     className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
    >
     <FaSignOutAlt className="w-5 h-5" />
     <span>Çıkış Yap</span>
    </button>
   </div>
  </>
 );
}