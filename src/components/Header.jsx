'use client'

import React, { useState } from "react";
import { Menu, ShoppingCart, X, } from "lucide-react"; // Lucide icons (you can also use Heroicons or SVG)
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  // const links = ["Home", "Menu", "About Us", "Contact Us",'Sign In'];
  const links = [
    {
     url:'/', name:'Home'
  },
    {
     url:'/menus', name:'Menu'
  },
    {
     url:'/about', name:'About Us'
  },
    {
     url:'/contact', name:'Contact Us'
  },
    {
     url:'/', name:'Sign In'
  },
  

];


const handleMenuOpen = ()=> {
  setMenuOpen(false)
}
  return (
    <header className="bg-white shadow-md sticky top-0 left-0 right-0 z-50">
      <nav className="flex justify-between items-center py-4 px-6 md:px-16 w-full ">
        {/* Logo */}
   
        <div className="w-[70px]">
          <Link href='/'> 

          <img src="logo.svg" className="w-full rounded-full" alt="Logo" />
          
          </Link>
        
        </div>


       

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium items-center ">
        <div className='text-yellow-700  relative  '>
        <ShoppingCart  />
        <p className='-top-5 -right-3 absolute text-black'>10</p>
        </div>
          {links.map((item) => (
            <Link  href={item.url} key={item.name} className={`hover:text-yellow-700 cursor-pointer duration-200 ${item.name== 'Sign In' ? 'bg-amber-600 px-5 py-2 text-white rounded-xl hover:bg-amber-50 hover:border duration-300 ml-5' :''}`}>
              {item.name}
            </Link>
          ))}
        </ul>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-black">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 bg-gray-100 flex flex-col justify-center items-center">

          <ul className="flex flex-col py-3 space-y-4 font-medium items-center">
          <div className='text-yellow-700  relative mt-5'>
        <ShoppingCart  />
        <p className='-top-5 -right-3 absolute text-black'>10</p>
        </div>
            {links.map((item) => (
              <Link onClick={handleMenuOpen} href={item.url} key={item.name} className={`hover:text-yellow-700 cursor-pointer duration-150 ${item.name== 'Sign In' ? 'bg-amber-600 px-4 py-2' :''}`}>
                {item.name}
              </Link>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
