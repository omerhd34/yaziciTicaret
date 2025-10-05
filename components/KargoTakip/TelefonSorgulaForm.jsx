'use client';

export default function TelefonSorgulaForm({ telefon, onChange, onSubmit, yukleniyor }) {
 const handleKeyPress = (e) => {
  if (e.key === 'Enter' && !yukleniyor) {
   onSubmit();
  }
 };

 return (
  <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
   <p className="text-gray-700 mb-6 text-[16px] sm:text-[18px]">
    Telefon numaranızı girerek talebinizi sorgulayabilirsiniz.
   </p>

   <div>
    <div className="mb-4">
     <label className="block text-gray-700 font-semibold mb-2 text-[16px] sm:text-[18px]">
      Telefon Numarası
      <span className="text-red-500 font-extrabold ml-1">*</span>
     </label>
     <input
      type="tel"
      value={telefon}
      onChange={onChange}
      onKeyPress={handleKeyPress}
      disabled={yukleniyor}
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 text-[16px] sm:text-[18px]"
      placeholder="0XXXXXXXXXX"
     />
    </div>

    <button
     onClick={onSubmit}
     disabled={yukleniyor}
     className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
    >
     {yukleniyor ? 'Sorgulanıyor...' : 'Sorgula'}
    </button>
   </div>
  </div>
 );
}