'use client'
import React from 'react'
import { useState } from 'react';

import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import app from '@/firebase/firebase.config.js';

import { useRouter } from 'next/navigation';

import { getFirestore, doc, setDoc } from 'firebase/firestore';


export default function SignUpForm() {

    const [signUpForm, setSignUpForm] = useState({ firstName: "", lastName: '', email: '', password: '', confirmPassword: '' });
     const auth = getAuth(app);
     const db = getFirestore(app); // Initialize Firestore

      const router = useRouter()

    const handleChange = (e) => {
        setSignUpForm({ ...signUpForm, [e.target.name]: e.target.value });
    };



    const handleSubmit = async (e) => {
    e.preventDefault();
    if (signUpForm.password !== signUpForm.confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        signUpForm.email,
        signUpForm.password
      );
      const user = userCredential.user;

     
      await setDoc(doc(db, 'users', user.uid), {
        firstName: signUpForm.firstName,
        lastName: signUpForm.lastName,
        email: signUpForm.email,
        createdAt: new Date(),
      });

      // Send email verification
      await sendEmailVerification(user);
      alert('Verification email sent!');

      // Reset form
      setSignUpForm({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });

      // Redirect to home page
      router.push('/');
    } catch (error) {
      console.error('Error during sign-up:', error)

      if(error.message == 'Firebase: Error (auth/email-already-in-use).')
      {
        alert('Email Already Exists.');
      }
      else if (error.message =='Firebase: Password should be at least 6 characters (auth/weak-password).'){
        alert('Password should be at least 6 characters')
      }
      else {
        alert(`${error.message}`)
      }


      
     
      
    }
  };

    return (
        <div className='w-11/12 sm:w-6/12 bg-yellow-50 p-5 my-5 rounded-lg shadow-lg'>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 mb-3">
                <input
                required
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={signUpForm.firstName}
                    onChange={handleChange}
                    className="p-2 border rounded"
                />
                <input
                required
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={signUpForm.lastName}
                    onChange={handleChange}
                    className="p-2 border rounded"
                />
               
                <input
                required
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={signUpForm.email}
                    onChange={handleChange}
                    className="p-2 border rounded"
                />
                <input
                required
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={signUpForm.password}
                    onChange={handleChange}
                    className="p-2 border rounded"
                />
                <input
                required
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={signUpForm.confirmPassword}
                    onChange={handleChange}
                    className="p-2 border rounded"
                />
                <button type="submit" className="bg-yellow-600 hover:bg-yellow-700 transition-all duration-300 cursor-pointer text-white p-2 rounded">Sign Up</button>
            </form>


        </div>
    )
}   
