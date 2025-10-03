export default function FooterCopyright() {
 const currentYear = new Date().getFullYear();

 return (
  <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
   <div className="flex items-center gap-2 text-gray-400">
    <span>&copy; {currentYear} Yazıcı Ticaret DTM.</span>
    <span className="hidden sm:inline">•</span>
    <span className="hidden sm:inline">Tüm hakları saklıdır.</span>
   </div>

   <div className="flex items-center gap-1 text-gray-400">
    <span>Coded with in İnegöl</span>
   </div>
  </div>
 );
}