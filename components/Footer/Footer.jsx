'use client';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import FooterBrand from './FooterBrand';
import FooterContact from './FooterContact';
import FooterQuickLinks from './FooterQuickLinks';
import FooterCopyright from './FooterCopyright';

export default function Footer() {
 const [isAdmin, setIsAdmin] = useState(false);
 const pathname = usePathname();

 useEffect(() => {
  const token = localStorage.getItem('adminToken');
  setIsAdmin(!!token);
 }, [pathname]);

 return (
  <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
   <div className="absolute inset-0 opacity-10">
    <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
    <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
   </div>

   <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    {isAdmin ? (
     <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-4xl mx-auto">
      <FooterBrand />
      <FooterContact isAdmin={true} />
     </div>
    ) : (
     <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-15 mb-0 md:mb-10">
       <div className="flex justify-center md:justify-start">
        <FooterBrand />
       </div>
       <div className="flex justify-center md:justify-end">
        <FooterContact />
       </div>
       <div className="flex justify-center md:justify-end">
        <FooterQuickLinks />
       </div>
      </div>
     </>
    )}
    <div className="border-t border-gray-700 my-6"></div>
    <FooterCopyright />
   </div>
  </footer>
 );
}
