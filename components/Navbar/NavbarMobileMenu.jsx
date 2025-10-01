import Link from 'next/link';
import NavbarMenuItem from './NavbarMenuItem';
import { menuItems, adminMenuItem } from './menuItems';

export default function NavbarMobileMenu({ isOpen, currentPath, onClose }) {
 if (!isOpen) return null;

 return (
  <div className="lg:hidden bg-blue-800 border-t border-blue-500">
   <div className="px-3 pt-2 pb-4 space-y-2">
    {menuItems.map((item) => (
     <NavbarMenuItem
      key={item.href}
      href={item.href}
      icon={item.icon}
      label={item.label}
      isActive={currentPath === item.href}
      isMobile={true}
      onClick={onClose}
     />
    ))}

    <Link
     href={adminMenuItem.href}
     className="block bg-gradient-to-r from-yellow-500 to-orange-500 px-4 py-3 rounded-lg font-semibold shadow-lg"
     onClick={onClose}
    >
     <span className="flex items-center justify-end">
      {adminMenuItem.label} Girişi
      <adminMenuItem.icon className="ml-4" />
     </span>
    </Link>
   </div>
  </div>
 );
}