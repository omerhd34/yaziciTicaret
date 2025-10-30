'use client';
import DestekForm from '@/components/Destek/DestekForm';

export default function DestekPage() {
 return (
  <div className="min-h-screen bg-gray-100 flex flex-col items-center py-16 px-4">
   <h1 className="text-3xl sm:text-4xl font-bold text-blue-800 mb-6">Destek</h1>
   <p className="text-center text-gray-700 max-w-xl text-[16px] sm:text-[18px]">
    Lütfen aşağıdaki formu doldurarak bize ulaşın.
   </p>
   <p className="mb-8 text-center text-gray-700 max-w-xl text-[16px] sm:text-[18px]">
    En kısa sürede geri dönüş yapacağız.
   </p>
   <DestekForm />
  </div>
 );
}