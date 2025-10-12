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
  </div>
 );
}