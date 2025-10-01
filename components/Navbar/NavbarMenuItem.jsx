import Link from 'next/link';

export default function NavbarMenuItem({
 href,
 icon: Icon,
 label,
 isActive,
 isMobile = false,
 onClick
}) {
 if (isMobile) {
  return (
   <Link
    href={href}
    className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 ${isActive ? 'bg-white text-blue-700' : 'hover:bg-blue-600'
     }`}
    onClick={onClick}
   >
    <span className="flex items-center justify-end">
     {label}
     <Icon className="ml-4" />
    </span>
   </Link>
  );
 }

 return (
  <Link
   href={href}
   className={`px-3 xl:px-4 py-2 rounded-lg font-medium transition-all duration-300 ${isActive ? 'bg-white text-blue-700 shadow-lg' : 'hover:bg-blue-500 hover:shadow-md'
    }`}
  >
   <span className="flex items-center space-x-1 xl:space-x-2">
    <Icon className="w-3 h-3 xl:w-4 xl:h-4" />
    <span className="text-sm xl:text-base">{label}</span>
   </span>
  </Link>
 );
}