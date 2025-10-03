import Link from 'next/link';
import Logo2 from '../Logo2';

export default function FooterBrand() {
 return (
  <div className="space-y-4 hidden md:block">
   <Link href="/" className="flex items-center space-x-3 group">
    <Logo2 />
    <div>
     <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
      Yazıcı Ticaret
     </h3>
     <span className="text-sm text-gray-400">DTM</span>
    </div>
   </Link>

   <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
    1997'den beri güvenilir ve kaliteli beyaz eşya hizmetleri sunuyoruz. Müşteri memnuniyeti önceliğimizdir.
   </p>
  </div>
 );
}