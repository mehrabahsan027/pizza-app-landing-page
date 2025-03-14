import React from 'react'

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Button } from './ui/button'
  

export default function FoodItem({item}) {
  return (
    <Card className='h-[445px] group w-10/12 mx-auto md:w-full flex flex-col  justify-evenly p-5 bg-gradient-to-t from-orange-50 to-yellow-100 shadow-xl'>
    
  <CardHeader className='lg:group-hover:scale-110 duration-300 '>
    <div className='w-32 h-32 mx-auto  '>
        <img src="pizza-hero.png" className='w-full h-full object-cover ' alt="" />
    </div>
    <CardTitle className='mt-3 text-lg'>{item?.title}</CardTitle>
    <CardDescription>{item?.description}</CardDescription>
  </CardHeader>

  <CardContent className='space-y-3 '>
 
    <p><span className='font-semibold'>Size: </span>{item?.size}</p>
  </CardContent>
  <CardFooter className='justify-between'>
    <p className='font-semibold text-lg'>{item?.price} <span>$</span></p>
    <Button> Order Now!</Button>
  </CardFooter>
</Card>

  )
}
