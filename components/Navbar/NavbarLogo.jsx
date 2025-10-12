import Link from 'next/link';

export default function NavbarLogo() {
 return (
  <Link href="/" className="flex items-center ml-2 lg:ml-0 mt-2">
   <svg
    className="w-auto h-10 md:h-12 lg:h-16"
    viewBox="0 0 800 200"
    xmlns="http://www.w3.org/2000/svg"
   >
    <rect x="0" y="95" width="800" height="4" fill="#FF6B35" />
    <text
     x="400"
     y="70"
     fontFamily="Arial Black, sans-serif"
     fontSize="85"
     fontWeight="900"
     fill="#004B87"
     textAnchor="middle"
     letterSpacing="8"
    >
     PROFiLO
    </text>

    <text
     x="400"
     y="160"
     fontFamily="Arial, sans-serif"
     fontSize="48"
     fontWeight="700"
     fill="#004B87"
     textAnchor="middle"
     letterSpacing="4"
    >
     dayanıklı ev aletleri
    </text>
   </svg>
  </Link>
 );
}