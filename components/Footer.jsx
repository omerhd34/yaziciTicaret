'use client';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import FooterBrand from './Footer/FooterBrand';
import FooterContact from './Footer/FooterContact';
import FooterQuickLinks from './Footer/FooterQuickLinks';
import FooterCopyright from './Footer/FooterCopyright';

export default function Footer() {
 const [isAdmin, setIsAdmin] = useState(false);
 const pathname = usePathname();

 useEffect(() => {
  // Admin token kontrolü
  const token = localStorage.getItem('adminToken');
  setIsAdmin(!!token);
 }, [pathname]);

 return (
  <footer className="bg-gray-800 text-white mt-16">
   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    {isAdmin ? (
     <div className="flex items-center justify-center text-center gap-50 max-w-2xl mx-auto">
      <FooterBrand />
      <FooterContact />
     </div>
    ) : (
     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <FooterBrand />
      <FooterContact />
      <FooterQuickLinks />
     </div>
    )}
    <FooterCopyright />
   </div>
  </footer>
 );
}