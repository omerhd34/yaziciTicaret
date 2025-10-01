import Link from 'next/link';
import NavbarMenuItem from './NavbarMenuItem';
import { menuItems, adminMenuItem } from './menuItems';

export default function NavbarDesktopMenu({ currentPath }) {
 return (
  <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
   {menuItems.map((item) => (
    <NavbarMenuItem
     key={item.href}
     href={item.href}
     icon={item.icon}
     label={item.label}
     isActive={currentPath === item.href}
    />
   ))}

   <Link
    href={adminMenuItem.href}
    className="ml-2 xl:ml-4 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 px-3 xl:px-5 py-2 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
   >
    <span className="flex items-center space-x-1 xl:space-x-2">
     <adminMenuItem.icon className="w-3 h-3 xl:w-4 xl:h-4" />
     <span className="text-sm xl:text-base">{adminMenuItem.label}</span>
    </span>
   </Link>
  </div>
 );
}