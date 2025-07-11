import React from 'react'

export default function HeroArea() {
  return (
    <section className=' flex w-full flex-col lg:flex-row mx-auto justify-between gap-x-10 items-center px-10 lg:px-16 py-20 bg-gradient-to-r from-orange-200 to-amber-300 '>
        {/* Text Div */}
        <div>
          

            <h1 className='text-3xl text-center md:text-left'>Slice Into Something Amazing.</h1>

            <p className='w-full lg:w-10/12 text-center md:text-left text-lg my-5'>We're passionate about pizza and our neighborhood. Taste the difference.</p>

            <div className='hidden lg:flex justify-evenly items-center my-5 '>
              <img src="185 x 192.png" className='w-[185px] h-[192px] object-cover hover:scale-125 duration-300' alt="pizza" />
              <img src="147 x 148.png" className='w-[147px] h-[148px] object-cover hover:scale-125 duration-300' alt="pizza" />
              <img src="146 x 148.png" className='w-[146px] h-[148px] object-cover hover:scale-125 duration-300' alt="pizza" />
              {/* <img src="4.png" alt="pizza" /> */}
            </div>
        </div>

        {/* Image Div */}
        <div className='w-10/12 md:w-1/3 hover:rotate-12 transition duration-500 ease-in-out transform hover:scale-110'>
        <img src="pizza-hero.png" className='w-full  object-cover' alt="" />
        </div>
    </section>
  )
}
