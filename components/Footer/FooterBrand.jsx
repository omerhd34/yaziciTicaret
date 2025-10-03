import Link from 'next/link';
import { FaStore } from 'react-icons/fa';

export default function FooterBrand() {
 return (
  <div className="space-y-4">
   <Link href="/" className="flex items-center space-x-3 group">
    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
     <FaStore className="text-white text-2xl" />
    </div>
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