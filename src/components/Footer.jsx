import React from 'react'
import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-t from-amber-100 to-white border-t border-amber-200 ">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2 text-yellow-700 font-semibold text-lg md:text-xl">
          <img src="logo.svg" alt="Logo" className="w-8 h-8 sm:w-16 sm:h-16 rounded-full" />
          <span>Pizza</span>
        </div>
        <div className="flex gap-6 text-gray-500 text-sm sm:text-base">
          <a href="#" className="hover:text-yellow-700 transition">Terms of Service</a>
          <a href="#" className="hover:text-yellow-700 transition">Privacy Policy</a>
          <a href="#" className="hover:text-yellow-700 transition">Contact</a>
        </div>
        <div className="flex gap-4 text-yellow-700">
          <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
          <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
          <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
        </div>
      </div>
      <div className="text-center text-gray-500 text-base py-2 border-t border-amber-100">
        &copy; {new Date().getFullYear()} Pizza. All rights reserved.
      </div>
    </footer>
  )
}

