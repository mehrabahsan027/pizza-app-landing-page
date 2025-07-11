import FoodItem from '@/components/FoodItem';
import React from 'react'
import { pizzaItems } from '../data';

export default function Menus() {
  console.log('menus')
  return (
    <div className=' bg-amber-50 '>
  <h1 className='text-center pt-12 text-3xl underline underline-offset-2'>All Pizzas</h1>
 <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  justify-center items-center w-full p-3 md:p-10 space-y-5 md:gap-5 lg:px-16 ">

{pizzaItems?.map((item) => {
  return <FoodItem key={item.id} item={item} />;
})}
</section>
 </div>
  )
}
