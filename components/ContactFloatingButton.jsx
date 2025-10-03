'use client';
import Link from 'next/link';
import { FaEnvelope } from 'react-icons/fa';

export default function ContactFloatingButton() {
 return (
  <Link
   href="/iletisim"
   className="hidden sm:flex fixed top-1/2 right-0 -translate-y-1/2 z-50 bg-[#0F181E] text-white px-3 py-3 shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:px-4 group rounded-l-lg"
   style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
  >
   <div className="flex items-center gap-2">
    <FaEnvelope
     className="text-lg group-hover:scale-110 transition-transform"
     style={{ transform: 'rotate(90deg)' }}
    />
    <span className="font-bold text-base tracking-wider">
     Bize Ulaşın
    </span>
   </div>
  </Link>
 );
}
