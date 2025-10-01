'use client';
import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import NavbarLogo from './Navbar/NavbarLogo';
import NavbarDesktopMenu from './Navbar/NavbarDesktopMenu';
import NavbarMobileMenu from './Navbar/NavbarMobileMenu';
import NavbarAdminSection from './Navbar/NavbarAdminSection';
import MobileMenuToggle from './Navbar/MobileMenuToggle';

export default function Navbar() {
 const [isOpen, setIsOpen] = useState(false);
 const [isAdmin, setIsAdmin] = useState(false);
 const pathname = usePathname();
 const router = useRouter();

 useEffect(() => {
  const token = localStorage.getItem('adminToken');
  setIsAdmin(!!token);
 }, [pathname]);

 const handleLogout = () => {
  localStorage.removeItem('adminToken');
  setIsAdmin(false);
  router.push('/');
 };

 const handleCloseMobileMenu = () => {
  setIsOpen(false);
 };

 return (
  <nav className="bg-gradient-to-r from-black via-blue-800 to-black text-white shadow-xl sticky top-0 z-50">
   <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
    <div className="flex justify-between h-16 md:h-20">
     {/* Logo */}
     <div className="flex items-center">
      <NavbarLogo />
     </div>
     {/* Admin veya Normal Kullanıcı Menüsü */}
     {isAdmin ? (
      <NavbarAdminSection onLogout={handleLogout} />
     ) : (
      <>
       <MobileMenuToggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
       <NavbarDesktopMenu currentPath={pathname} />
      </>
     )}
    </div>
   </div>

   {/* Mobile Menu - Sadece admin değilse göster */}
   {!isAdmin && (
    <NavbarMobileMenu
     isOpen={isOpen}
     currentPath={pathname}
     onClose={handleCloseMobileMenu}
    />
   )}
  </nav>
 );
}