import Link from 'next/link';

export default function NavbarLogo() {
 return (
  <Link href="/" className="flex items-center space-x-2 sm:space-x-3 group">
   <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 xl:w-18 xl:h-18 flex items-center justify-center">
    <svg className="w-full h-full text-white drop-shadow-lg" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
     <path d="M20,50 C35,10 65,10 80,50 C65,90 35,90 20,50 Z" fill="currentColor" fillOpacity="0.5" />
     <path d="M30,50 C40,20 60,20 70,50 C60,80 40,80 30,50 Z" fill="white" fillOpacity="0.3" />
     <path d="M50,30 C55,40 65,40 60,60 C55,70 45,60 50,30 Z" fill="white" fillOpacity="0.5" />
     <line x1="15" y1="50" x2="85" y2="50" stroke="white" strokeWidth="1.5" />
     <line x1="50" y1="15" x2="50" y2="85" stroke="white" strokeWidth="1.5" />
     <circle cx="35" cy="35" r="2" fill="white" />
     <circle cx="65" cy="65" r="2" fill="white" />
     <circle cx="50" cy="50" r="1.5" fill="white" />
    </svg>
   </div>

   <span className="flex flex-col justify-center">
    <span className="text-white text-xl sm:text-2xl font-bold tracking-tight drop-shadow-md">
     Yazıcı Ticaret
     <span className="block text-blue-500 text-lg sm:text-xl font-semibold tracking-tight -mt-1.5 text-center">
      DTM
     </span>
    </span>
   </span>
  </Link>
 );
}