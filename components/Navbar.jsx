'use client';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { FaHome, FaBoxOpen, FaTruck, FaLifeRing, FaEnvelope, FaUserShield } from 'react-icons/fa';

export default function Navbar() {
 const [isOpen, setIsOpen] = useState(false);
 const pathname = usePathname();

 const isActive = (path) => pathname === path;

 return (
  <nav className="bg-gradient-to-r from-black via-blue-800 to-black text-white shadow-xl sticky top-0 z-50">
   <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
    <div className="flex justify-between h-16 md:h-20">
     <div className="flex items-center">
      <Link href="/" className="flex items-center space-x-2 sm:space-x-3 group">
       <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-blue-600 to-indigo-500 shadow-md overflow-hidden transform transition duration-300 group-hover:scale-105">
        <img
         src="/prof.png"
         alt="profilo"
         className="w-full h-full object-cover rounded-full"
        />
        <div className="absolute inset-0 rounded-full bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
       </div>
       <div className="flex flex-col justify-center">
        <span className="text-lg sm:text-2xl font-extrabold tracking-tight text-white drop-shadow-md">
         Yazıcı Ticaret
        </span>
        <p className="text-xs text-blue-200 hidden sm:block">Teslimat Hizmetleri</p>
       </div>
      </Link>
     </div>

     {/* Desktop Menu */}
     <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
      <Link
       href="/"
       className={`px-3 xl:px-4 py-2 rounded-lg font-medium transition-all duration-300 ${isActive('/') ? 'bg-white text-blue-700 shadow-lg' : 'hover:bg-blue-500 hover:shadow-md'}`}
      >
       <span className="flex items-center space-x-1 xl:space-x-2">
        <FaHome className="w-3 h-3 xl:w-4 xl:h-4" />
        <span className="text-sm xl:text-base">Ana Sayfa</span>
       </span>
      </Link>

      <Link
       href="/urun-istegi"
       className={`px-3 xl:px-4 py-2 rounded-lg font-medium transition-all duration-300 ${isActive('/urun-istegi') ? 'bg-white text-blue-700 shadow-lg' : 'hover:bg-blue-500 hover:shadow-md'}`}
      >
       <span className="flex items-center space-x-1 xl:space-x-2">
        <FaBoxOpen className="w-3 h-3 xl:w-4 xl:h-4" />
        <span className="text-sm xl:text-base">Ürün İsteği</span>
       </span>
      </Link>

      <Link
       href="/kargo-takip"
       className={`px-3 xl:px-4 py-2 rounded-lg font-medium transition-all duration-300 ${isActive('/kargo-takip') ? 'bg-white text-blue-700 shadow-lg' : 'hover:bg-blue-500 hover:shadow-md'}`}
      >
       <span className="flex items-center space-x-1 xl:space-x-2">
        <FaTruck className="w-3 h-3 xl:w-4 xl:h-4" />
        <span className="text-sm xl:text-base">Kargo Takip</span>
       </span>
      </Link>

      <Link
       href="/destek"
       className={`px-3 xl:px-4 py-2 rounded-lg font-medium transition-all duration-300 ${isActive('/destek') ? 'bg-white text-blue-700 shadow-lg' : 'hover:bg-blue-500 hover:shadow-md'}`}
      >
       <span className="flex items-center space-x-1 xl:space-x-2">
        <FaLifeRing className="w-3 h-3 xl:w-4 xl:h-4" />
        <span className="text-sm xl:text-base">Destek</span>
       </span>
      </Link>

      <Link
       href="/iletisim"
       className={`px-3 xl:px-4 py-2 rounded-lg font-medium transition-all duration-300 ${isActive('/iletisim') ? 'bg-white text-blue-700 shadow-lg' : 'hover:bg-blue-500 hover:shadow-md'}`}
      >
       <span className="flex items-center space-x-1 xl:space-x-2">
        <FaEnvelope className="w-3 h-3 xl:w-4 xl:h-4" />
        <span className="text-sm xl:text-base">İletişim</span>
       </span>
      </Link>

      <Link
       href="/admin/giris"
       className="ml-2 xl:ml-4 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 px-3 xl:px-5 py-2 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
      >
       <span className="flex items-center space-x-1 xl:space-x-2">
        <FaUserShield className="w-3 h-3 xl:w-4 xl:h-4" />
        <span className="text-sm xl:text-base">Admin</span>
       </span>
      </Link>
     </div>
    </div>
   </div>

   {/* Mobile Menu */}
   {isOpen && (
    <div className="lg:hidden bg-blue-800 border-t border-blue-500">
     <div className="px-3 pt-2 pb-4 space-y-2">
      <Link
       href="/"
       className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 ${isActive('/') ? 'bg-white text-blue-700' : 'hover:bg-blue-600'}`}
       onClick={() => setIsOpen(false)}
      >
       <span className="flex items-center space-x-3"><FaHome /> Ana Sayfa</span>
      </Link>
      <Link
       href="/urun-istegi"
       className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 ${isActive('/urun-istegi') ? 'bg-white text-blue-700' : 'hover:bg-blue-600'}`}
       onClick={() => setIsOpen(false)}
      >
       <span className="flex items-center space-x-3"><FaBoxOpen /> Ürün İsteği</span>
      </Link>
      <Link
       href="/kargo-takip"
       className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 ${isActive('/kargo-takip') ? 'bg-white text-blue-700' : 'hover:bg-blue-600'}`}
       onClick={() => setIsOpen(false)}
      >
       <span className="flex items-center space-x-3"><FaTruck /> Kargo Takip</span>
      </Link>
      <Link
       href="/destek"
       className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 ${isActive('/destek') ? 'bg-white text-blue-700' : 'hover:bg-blue-600'}`}
       onClick={() => setIsOpen(false)}
      >
       <span className="flex items-center space-x-3"><FaLifeRing /> Destek</span>
      </Link>
      <Link
       href="/iletisim"
       className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 ${isActive('/iletisim') ? 'bg-white text-blue-700' : 'hover:bg-blue-600'}`}
       onClick={() => setIsOpen(false)}
      >
       <span className="flex items-center space-x-3"><FaEnvelope /> İletişim</span>
      </Link>
      <Link
       href="/admin/giris"
       className="block bg-gradient-to-r from-yellow-500 to-orange-500 px-4 py-3 rounded-lg font-semibold shadow-lg"
       onClick={() => setIsOpen(false)}
      >
       <span className="flex items-center space-x-3"><FaUserShield /> Admin Girişi</span>
      </Link>
     </div>
    </div>
   )}
  </nav>
 );
}
