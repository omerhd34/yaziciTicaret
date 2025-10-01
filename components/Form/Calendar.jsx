'use client';
import { useState } from 'react';

export function Calendar({ selectedDate, onSelectDate, onClose }) {
 const [currentDate, setCurrentDate] = useState(new Date());

 const gunler = ['Pt', 'Sa', 'Ça', 'Pe', 'Cu', 'Ct', 'Pa'];
 const aylar = [
  'Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran',
  'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'
 ];

 const getDaysInMonth = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth();
  return new Date(year, month + 1, 0).getDate();
 };

 const getFirstDayOfMonth = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  return firstDay === 0 ? 6 : firstDay - 1;
 };

 const formatDate = (date) => {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${day}.${month}.${year}`;
 };

 const parseDate = (dateStr) => {
  if (!dateStr) return null;
  const parts = dateStr.split('.');
  if (parts.length === 3) {
   const [day, month, year] = parts;
   return new Date(year, month - 1, day);
  }
  return null;
 };

 const daysInMonth = getDaysInMonth(currentDate);
 const firstDay = getFirstDayOfMonth(currentDate);
 const prevMonthDays = getDaysInMonth(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));

 const days = [];

 for (let i = firstDay - 1; i >= 0; i--) {
  days.push({ day: prevMonthDays - i, isCurrentMonth: false });
 }

 for (let i = 1; i <= daysInMonth; i++) {
  days.push({ day: i, isCurrentMonth: true });
 }

 const remainingDays = 42 - days.length;
 for (let i = 1; i <= remainingDays; i++) {
  days.push({ day: i, isCurrentMonth: false });
 }

 const isDateDisabled = (day) => {
  if (!day.isCurrentMonth) return true;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const checkDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day.day);
  return checkDate < today;
 };

 const isSelectedDate = (day) => {
  if (!selectedDate || !day.isCurrentMonth) return false;
  const selected = parseDate(selectedDate);
  if (!selected) return false;
  return day.day === selected.getDate() &&
   currentDate.getMonth() === selected.getMonth() &&
   currentDate.getFullYear() === selected.getFullYear();
 };

 const selectDate = (day) => {
  if (isDateDisabled(day)) return;
  const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day.day);
  onSelectDate(formatDate(date));
 };

 const prevMonth = () => {
  setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
 };

 const nextMonth = () => {
  setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
 };

 return (
  <div className="absolute z-50 mt-2 bg-white rounded-xl shadow-2xl p-4 w-80">
   <div className="flex items-center justify-between mb-4">
    <button
     onClick={prevMonth}
     type="button"
     className="p-1.5 hover:bg-blue-50 rounded-lg transition-colors group"
    >
     <svg className="w-4 h-4 text-gray-600 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
     </svg>
    </button>

    <h2 className="text-base font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
     {aylar[currentDate.getMonth()]} {currentDate.getFullYear()}
    </h2>

    <button
     onClick={nextMonth}
     type="button"
     className="p-1.5 hover:bg-blue-50 rounded-lg transition-colors group"
    >
     <svg className="w-4 h-4 text-gray-600 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
     </svg>
    </button>
   </div>

   <div className="grid grid-cols-7 gap-1 mb-2">
    {gunler.map((gun, index) => (
     <div
      key={index}
      className="text-center text-xs font-semibold text-gray-500 uppercase tracking-wider py-1"
     >
      {gun}
     </div>
    ))}
   </div>

   <div className="grid grid-cols-7 gap-1 mb-3">
    {days.map((day, index) => (
     <button
      key={index}
      onClick={() => selectDate(day)}
      disabled={isDateDisabled(day)}
      type="button"
      className={`
              aspect-square rounded-lg text-xs font-medium transition-all duration-200
              ${isDateDisabled(day)
        ? 'text-gray-300 cursor-not-allowed'
        : 'text-gray-800 hover:bg-blue-50 hover:scale-105 cursor-pointer'
       }
              ${isSelectedDate(day)
        ? 'bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-lg scale-105'
        : ''
       }
            `}
     >
      {day.day}
     </button>
    ))}
   </div>

   <button
    onClick={onClose}
    type="button"
    className="w-full px-3 py-2 text-xs font-medium text-white bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all"
   >
    Tamam
   </button>
  </div>
 );
}
