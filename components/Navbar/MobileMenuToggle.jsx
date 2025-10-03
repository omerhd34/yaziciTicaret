import { FaBars, FaTimes } from 'react-icons/fa';

export default function MobileMenuToggle({ isOpen, onClick }) {
 return (
  <div className="flex items-center lg:hidden">
   <button
    onClick={onClick}
    className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
    aria-label="Toggle menu"
   >
    {isOpen ? <FaTimes className="block h-5 w-5 sm:h-6 sm:w-6" /> : <FaBars className="block h-5 w-5 sm:h-6 sm:w-6" />}
   </button>
  </div>
 );
}