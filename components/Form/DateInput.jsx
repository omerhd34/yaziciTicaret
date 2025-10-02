'use client';
import { useState } from 'react';
import { Calendar } from './Calendar';

export function DateInput({ value, onChange, disabled, required = false }) {
 const [showCalendar, setShowCalendar] = useState(false);

 return (
  <div className="mb-4 relative">
   <label className="block text-gray-700 font-semibold mb-2 text-[16px] sm:text-[18px]">
    İstenilen Teslim Tarihi {required && <span className="text-red-500">*</span>}
   </label>
   <div className="relative">
    <input
     type="text"
     name="teslim"
     value={value}
     onChange={onChange}
     disabled={disabled}
     className="w-full px-4 py-2 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 text-[16px] sm:text-[18px]"
     placeholder="DD.MM.YYYY"
    />
    <button
     type="button"
     onClick={() => setShowCalendar(!showCalendar)}
     disabled={disabled}
     className="hidden sm:block absolute right-3 top-2.5 hover:bg-blue-50 rounded p-1 transition-colors disabled:opacity-50"
    >
     <svg className="w-5 h-5 text-gray-400 hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
     </svg>
    </button>
   </div>

   {showCalendar && (
    <Calendar
     selectedDate={value}
     onSelectDate={(date) => {
      onChange({ target: { name: 'teslim', value: date } });
      setShowCalendar(false);
     }}
     onClose={() => setShowCalendar(false)}
    />
   )}
  </div>
 );
}