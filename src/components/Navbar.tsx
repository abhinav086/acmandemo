import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from '../assets/acmanlogo.png'; // Replace with your logo path

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-sky-400 text-white fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img src={Logo} alt="Accman Business School Logo" className="h-12 w-40" />
           
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="hover:bg-sky-300 px-3 py-2 rounded-md">Home</a>
              <a href="#about" className="hover:bg-sky-300 px-3 py-2 rounded-md">About</a>
              <a href="#courses" className="hover:bg-sky-300 px-3 py-2 rounded-md">Courses</a>
              <a href="#placements" className="hover:bg-sky-300 px-3 py-2 rounded-md">Placements</a>
              <a href="#testimonials" className="hover:bg-sky-300 px-3 py-2 rounded-md">Testimonials</a>
              <a href="#contact" className="bg-sky-500 hover:bg-sky-300 px-4 py-2 rounded-md">Apply Now</a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block hover:bg-sky-300 px-3 py-2 rounded-md">Home</a>
            <a href="#about" className="block hover:bg-sky-300 px-3 py-2 rounded-md">About</a>
            <a href="#courses" className="block hover:bg-sky-300 px-3 py-2 rounded-md">Courses</a>
            <a href="#placements" className="block hover:bg-sky-300 px-3 py-2 rounded-md">Placements</a>
            <a href="#testimonials" className="block hover:bg-sky-300 px-3 py-2 rounded-md">Testimonials</a>
            <a href="#contact" className="block bg-sky-500 hover:bg-sky-300 px-4 py-2 rounded-md">Apply Now</a>
          </div>
        </div>
      )}
    </nav>
  );
}
