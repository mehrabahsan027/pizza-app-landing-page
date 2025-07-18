"use client";

import React, { useState,useEffect } from "react";
import { Menu, ShoppingCart, X, } from "lucide-react"; 
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "./CartContext";
import {  useAuth } from "./AuthContext";


export default function Header() {
   const { currentUser } = useAuth()
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname()
  const { cart,isLoading,setIsLoading } = useCart();
  const [loader,setLoader] = useState(true)
  
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
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
  ];


const handleMenuOpen = ()=> {
  setMenuOpen(false)
}



  return (

   
       <header className="bg-gradient-to-t from-amber-100 to-white border-t shadow-md sticky top-0 left-0 right-0 z-50">
      <nav className="flex justify-between items-center py-4 px-6 md:px-16 w-full ">
        {/* Logo */}
   
        <div className="w-[70px] ">
          <Link href='/'> 

          <img src="logo.svg" className="w-full rounded-full " alt="Logo" />
          
          </Link>

 
          
        
        </div>


       

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium items-center ">
        <div className='text-yellow-700  relative  '>
          <Link href="/cart">
            <ShoppingCart />
            <p className='-top-5 -right-3 absolute text-black'>{cartCount}</p>
          </Link>
        </div>
          {links.map((item) => (
            <Link  href={item.url} key={item.name}
            className={`hover:text-yellow-700 cursor-pointer duration-200 
              
              ${
              pathname === item.url ? 'text-yellow-700 font-semibold' : ''
            } `}
             >
              {item.name}
            </Link>
          ))}

     
          
          { currentUser ? (
            <Link href="/profile" className={`bg-amber-100 px-5 py-2 rounded-xl ml-5 outline outline-amber-900 ${pathname === '/profile' ? 'text-yellow-700 font-semibold' : ''}`}>
              Profile
            </Link>
          ) : (
            <Link href="/signin" className={`bg-amber-100 px-5 py-2 rounded-xl ml-5 outline outline-amber-900 ${pathname === '/signin' ? 'text-yellow-700 font-semibold' : ''}`}>
              Sign In
            </Link>
          )}
        
        </ul>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-black">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
  className={`md:hidden bg-amber-100  flex flex-col justify-center items-center overflow-hidden transition-opacity duration-500 ease-in-out px-6 ${
    menuOpen ? 'max-h-screen py-4 opacity-100' : 'max-h-0 py-0 opacity-0'
  }`}
>
  <ul className="flex flex-col py-3 space-y-4 font-medium items-center">
    <div className="text-yellow-700 relative mt-5">
      <Link href="/cart" onClick={()=> setMenuOpen(false)}>
        <ShoppingCart />
        <p className="-top-5 -right-3 absolute text-black">{cartCount}</p>
      </Link>
    </div>
    {links.map((item) => (
      <Link
        onClick={handleMenuOpen}
        href={item.url}
        key={item.name}
        className={`hover:text-yellow-700 cursor-pointer duration-150`}
      >
        {item.name}
      </Link>
    ))}
    {currentUser ? (
      <Link
        onClick={handleMenuOpen}
        href="/profile"
        className="bg-amber-600 px-4 py-2 text-white rounded-xl outline outline-amber-900"
      >
        Profile
      </Link>
    ) : (
      <Link
        onClick={handleMenuOpen}
        href="/signin"
        className="bg-amber-600 px-4 py-2 text-white rounded-xl outline outline-amber-900"
      >
        Sign In
      </Link>
    )}
  </ul>
</div>
    </header>
      
      

   
  );
}
