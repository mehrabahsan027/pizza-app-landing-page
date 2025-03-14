import ContactForm from '@/components/ContactForm'
import React from 'react'

export default function Contact() {
  return (
    <section className="w-full h-screen  relative ">
    <div className="absolute w-full bg-black h-full top-0 left-0 opacity-50"></div>

    <div className="w-full h-full ">
      <h1 className="absolute w-full text-center text-white mt-10 px-5 text-3xl lg:text-4xl">
        Feel Free To Share Your Thoughts
      </h1>
      <img
        src="contact.jpg"
        className="w-full h-full object-cover"
        alt=""
      />

      {/* Form  */}
      <ContactForm/>
    </div>
  </section>
  )
}
