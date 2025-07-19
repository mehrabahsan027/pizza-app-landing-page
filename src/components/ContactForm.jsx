'use client'

import React, { useState } from 'react';





import { getFirestore, doc, setDoc } from 'firebase/firestore';
import app from '@/firebase/firebase.config';
import { Button } from './ui/button';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const db = getFirestore(app);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    // You can now use formData.name, formData.email, formData.message

    await setDoc(doc(db, 'messages',formData.email ), {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        createdAt: new Date(),
      });

      alert('Thanks for your message')



    // Optional: reset form after submit
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
      <form className="space-y-5 flex flex-col  w-11/12 md:w-1/2 mx-auto" onSubmit={handleSubmit}>
        <input
        required
          type="text"
          name="name"
          placeholder="Enter Your Name"
          value={formData.name}
          onChange={handleChange}
          className="rounded-lg outline outline-amber-300 px-5 py-2 placeholder:text-amber-50"
        />

        <input
        required
          type="email"
          name="email"
          placeholder="Enter Your Email"
          value={formData.email}
          onChange={handleChange}
          className="rounded-lg outline outline-amber-300 px-5 py-2 placeholder:text-amber-50"
        />

        <textarea
        required
          name="message"
          placeholder="Enter Your Message"
          value={formData.message}
          onChange={handleChange}
          className="rounded-lg h-36 outline outline-amber-300 px-5 py-2 placeholder:text-amber-50"
        ></textarea>

        <Button
          type="submit"
        className='lg:text-xl'
          
        >
          Submit
        </Button>
      </form>
    </div>
  );
}
