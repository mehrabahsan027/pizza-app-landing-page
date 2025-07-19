import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

export default function AboutUs() {
  
  return (
    <div className='flex flex-col lg:flex-row justify-center  gap-8 p-5 md:p-10 '>

    <div className='w-full lg:w-1/2  '>
      <img src="about.jpg" className='w-full h-full object-cover ' alt="About Us" />
    </div>


    <div className='text-base lg:text-lg w-full lg:w-1/2 space-y-5'>
      <p>  Our dedication to exceptional pizza is only matched by our pride in serving our beloved neighborhood. We're passionate about what we do, and we believe you'll taste that difference in every bite.</p>

      <p>We're not just making pizza; we're crafting a taste of our neighborhood. Our passion for pizza runs deep, but it's our love for this community that truly sets us apart. Come taste the difference that dedication, quality ingredients, and a whole lot of heart can make in every slice.</p>

    
    
     <div className='text-center mt-10'>
      <Link href='/menus'>
      <Button className='w-1/2 text-base md:text-2xl md:py-8' >Order Now! </Button>
        </Link>
      
    </div>
    </div>

   


  </div>
  )
}
