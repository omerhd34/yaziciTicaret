export default function CalismaSaatleri() {
 return (
  <div className="bg-white rounded-lg shadow-lg p-4 sm:p-8">
   <h2 className="text-xl sm:text-2xl font-bold mb-6 text-center">Çalışma Saatleri</h2>
   <div className="text-center">
    <p className="text-[18px] sm:text-lg text-gray-700 mb-2">
     <span className="font-semibold">Hafta İçi:</span> 09:00 - 19:00
    </p>
    <p className="text-[18px] sm:text-lg text-gray-700">
     <span className="font-semibold">Cumartesi:</span> 09:00 - 19:00
    </p>
    <p className="text-[18px] sm:text-lg text-gray-700 mt-2">
     <span className="font-semibold">Pazar:</span> 12:00 - 17:00
    </p>
   </div>
  </div>
 );
}