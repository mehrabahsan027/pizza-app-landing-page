import React from 'react'

export default function AboutUs() {
  return (
    <div className='flex flex-col lg:flex-row justify-center  gap-5 p-5 md:p-10 '>

    <div className='w-full lg:w-1/2  '>
      <img src="about.jpg" className='w-full h-full object-cover ' alt="About Us" />
    </div>


    <div className='text-base lg:text-lg w-full lg:w-1/2 space-y-5'>
      <p>  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat eveniet repellat dolorum, ab corporis sunt!</p>

      <p>  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat eveniet repellat dolorum, ab corporis sunt!</p>
      <p>  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat eveniet repellat dolorum, ab corporis sunt!</p>
    
    </div>


  </div>
  )
}
