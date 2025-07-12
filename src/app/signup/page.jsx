import SignUpForm from '@/components/SignUpForm'
import React from 'react'

export default function SignUpPage() {
  return (
    <section className='flex flex-col justify-center items-center  w-full bg-yellow-100 '>
      <h1 className='text-3xl mt-3'> Register </h1>
<SignUpForm/>
    </section>
  )
}
