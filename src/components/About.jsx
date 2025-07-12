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
      <p>  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat eveniet repellat dolorum, ab corporis sunt!</p>

      <p>  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat eveniet repellat dolorum, ab corporis sunt!</p>
      <p>  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat eveniet repellat dolorum, ab corporis sunt!</p>
    
     <div className='text-center mt-10'>
      <Link href='/menus'>
      <Button className='w-1/2 text-base md:text-2xl md:py-8' >Order Now! </Button>
        </Link>
      
    </div>
    </div>

   


  </div>
  )
}
