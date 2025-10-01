export default function FooterQuickLinks() {
 const links = [
  { href: '/urun-istegi', label: 'Ürün İsteği' },
  { href: '/kargo-takip', label: 'İstek Takibi' },
  { href: '/destek', label: 'Destek' },
  { href: '/iletisim', label: 'İletişim' },
 ];

 return (
  <div>
   <h4 className="text-lg font-semibold mb-4">Hızlı Linkler</h4>
   <ul className="space-y-2">
    {links.map((link) => (
     <li key={link.href}>
      <a href={link.href} className="text-gray-300 hover:text-white transition-colors">
       {link.label}
      </a>
     </li>
    ))}
   </ul>
  </div>
 );
}