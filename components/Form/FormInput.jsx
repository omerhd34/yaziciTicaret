'use client';

export function FormInput({ label, name, value, onChange, disabled, type = "text", placeholder, required = false }) {
 return (
  <div className="mb-4">
   <label className="block text-gray-700 font-semibold mb-2 text-[16px] sm:text-[18px]">
    {label} {required && <span className="text-red-500">*</span>}
   </label>
   <input
    type={type}
    name={name}
    value={value}
    onChange={onChange}
    disabled={disabled}
    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 text-[16px] sm:text-[18px]"
    placeholder={placeholder}
   />
  </div>
 );
}
