import NavbarMenuItem from './NavbarMenuItem';
import { menuItems, } from './menuItems';

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
   </div>
  </div>
 );
}