'use client';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { FaHome, FaBoxOpen, FaTruck, FaLifeRing, FaEnvelope, FaUserShield, FaBars, FaTimes } from 'react-icons/fa';

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
       <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 xl:w-18 xl:h-18 flex items-center justify-center">
        <svg className="w-full h-full text-white drop-shadow-lg" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M20,50 C35,10 65,10 80,50 C65,90 35,90 20,50 Z" fill="currentColor" fillOpacity="0.5" />
         <path d="M30,50 C40,20 60,20 70,50 C60,80 40,80 30,50 Z" fill="white" fillOpacity="0.3" />
         <path d="M50,30 C55,40 65,40 60,60 C55,70 45,60 50,30 Z" fill="white" fillOpacity="0.5" />
         <line x1="15" y1="50" x2="85" y2="50" stroke="white" strokeWidth="1.5" />
         <line x1="50" y1="15" x2="50" y2="85" stroke="white" strokeWidth="1.5" />
         <circle cx="35" cy="35" r="2" fill="white" />
         <circle cx="65" cy="65" r="2" fill="white" />
         <circle cx="50" cy="50" r="1.5" fill="white" />
        </svg>
       </div>

       <span className="flex flex-col justify-center">
        <span className="text-white text-xl sm:text-2xl font-bold tracking-tight drop-shadow-md">
         Yazıcı Ticaret
         <span className="block text-blue-500 text-lg sm:text-xl font-semibold tracking-tight -mt-1.5 text-center">
          DTM
         </span>
        </span>
       </span>
      </Link>

     </div>

     {/* Hamburger Menü */}
     <div className="flex items-center lg:hidden">
      <button
       onClick={() => setIsOpen(!isOpen)}
       className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
       aria-label="Toggle menu"
      >
       {isOpen ? <FaTimes className="block h-6 w-6" /> : <FaBars className="block h-6 w-6" />}
      </button>
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
        <span className="text-sm xl:text-base">İstek Takibi</span>
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
       <span className="flex items-center justify-end">
        Ana Sayfa
        <FaHome className="ml-4" />
       </span>
      </Link>

      <Link
       href="/urun-istegi"
       className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 ${isActive('/urun-istegi') ? 'bg-white text-blue-700' : 'hover:bg-blue-600'}`}
       onClick={() => setIsOpen(false)}
      >
       <span className="flex items-center justify-end">
        Ürün İsteği
        <FaBoxOpen className="ml-4" />
       </span>
      </Link>

      <Link
       href="/kargo-takip"
       className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 ${isActive('/kargo-takip') ? 'bg-white text-blue-700' : 'hover:bg-blue-600'}`}
       onClick={() => setIsOpen(false)}
      >
       <span className="flex items-center justify-end">
        İstek Takibi
        <FaTruck className="ml-4" />
       </span>
      </Link>

      <Link
       href="/destek"
       className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 ${isActive('/destek') ? 'bg-white text-blue-700' : 'hover:bg-blue-600'}`}
       onClick={() => setIsOpen(false)}
      >
       <span className="flex items-center justify-end">
        Destek
        <FaLifeRing className="ml-4" />
       </span>
      </Link>

      <Link
       href="/iletisim"
       className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 ${isActive('/iletisim') ? 'bg-white text-blue-700' : 'hover:bg-blue-600'}`}
       onClick={() => setIsOpen(false)}
      >
       <span className="flex items-center justify-end">
        İletişim
        <FaEnvelope className="ml-4" />
       </span>
      </Link>

      <Link
       href="/admin/giris"
       className="block bg-gradient-to-r from-yellow-500 to-orange-500 px-4 py-3 rounded-lg font-semibold shadow-lg"
       onClick={() => setIsOpen(false)}
      >
       <span className="flex items-center justify-end">
        Admin Girişi
        <FaUserShield className="ml-4" />
       </span>
      </Link>

     </div>
    </div>
   )}
  </nav>
 );
}
