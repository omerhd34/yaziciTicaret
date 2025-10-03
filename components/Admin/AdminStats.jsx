export default function AdminStats({ talepler }) {
 const stats = [
  {
   label: 'Toplam Talep',
   value: talepler.length,
   bgColor: 'bg-blue-100',
   textColor: 'text-blue-600',
   valueColor: 'text-blue-800'
  },
  {
   label: 'Yeni İstek',
   value: talepler.filter((t) => t.durum === 'Yeni İstek').length,
   bgColor: 'bg-yellow-100',
   textColor: 'text-yellow-600',
   valueColor: 'text-yellow-800'
  },
  {
   label: 'İstek İnceleniyor',
   value: talepler.filter((t) => t.durum === 'İstek İnceleniyor').length,
   bgColor: 'bg-purple-100',
   textColor: 'text-purple-600',
   valueColor: 'text-purple-800'
  },
  {
   label: 'Başarılı İstek',
   value: talepler.filter((t) => t.durum === 'Başarılı İstek').length,
   bgColor: 'bg-green-100',
   textColor: 'text-green-600',
   valueColor: 'text-green-800'
  },
  {
   label: 'İptal Edildi',
   value: talepler.filter((t) => t.durum === 'İptal Edildi').length,
   bgColor: 'bg-red-100',
   textColor: 'text-red-600',
   valueColor: 'text-red-800'
  }
 ];

 return (
  <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
   <h2 className="text-[20px] sm:text-2xl font-bold mb-4">İstatistikler</h2>
   <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
    {stats.map((stat, index) => (
     <div key={index} className={`${stat.bgColor} p-4 rounded-lg`}>
      <p className={`text-sm ${stat.textColor} font-semibold`}>{stat.label}</p>
      <p className={`text-2xl sm:text-3xl font-bold ${stat.valueColor}`}>{stat.value}</p>
     </div>
    ))}
   </div>
  </div>
 );
}