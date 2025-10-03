export default function FooterCopyright() {
 const currentYear = new Date().getFullYear();
 return (
  <div className="flex flex-col items-center justify-between text-sm text-gray-400 mt-5">
   <span>&copy; {currentYear} Yazıcı Ticaret D.T.M.</span>
   <span>Tüm hakları saklıdır.</span>
  </div>
 );
}