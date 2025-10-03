export default function FooterCopyright() {
 const currentYear = new Date().getFullYear();
 return (
  <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
   <span><span className="text-white">&copy;</span> {currentYear} Yazıcı Ticaret D.T.M. Tüm hakları saklıdır.</span>
  </div>
 );
}