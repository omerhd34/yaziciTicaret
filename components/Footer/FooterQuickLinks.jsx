import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa';

export default function FooterQuickLinks() {
 const links = [
  { href: '/', label: 'Ana Sayfa' },
  { href: '/urun-istegi', label: 'Ürün İsteği' },
  { href: '/kargo-takip', label: 'İstek Takibi' },
  { href: '/destek', label: 'Destek' },
  { href: '/iletisim', label: 'İletişim' },
 ];

 return (
  <div className="space-y-4 hidden md:block">
   <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
    <span className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-transparent"></span>
    Hızlı Linkler
   </h4>

   <ul className="space-y-2">
    {links.map((link) => (
     <li key={link.href}>
      <Link
       href={link.href}
       className="text-gray-400 hover:text-white text-sm transition-all duration-300 flex items-center gap-2 group"
      >
       <FaChevronRight className="text-xs text-blue-400 opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all duration-300" />
       <span className="group-hover:translate-x-1 transition-transform duration-300">
        {link.label}
       </span>
      </Link>
     </li>
    ))}
   </ul>
  </div>
 );
}