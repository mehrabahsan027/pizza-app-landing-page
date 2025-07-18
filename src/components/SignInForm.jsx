'use client'
import Link from 'next/link';
import React from 'react'
import { useState } from 'react';

import {  getAuth,  signInWithEmailAndPassword} from "firebase/auth";
import app from '@/firebase/firebase.config';
import { useRouter } from 'next/navigation';



export default function SignInForm() {

    const [signInForm, setSignInForm] = useState({  email: '', password: ''});
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setSignInForm({ ...signInForm, [e.target.name]: e.target.value });
    };

    const auth = getAuth(app);
    const router = useRouter()

    const handleSubmit = (e) => {
        e.preventDefault();

         // Handle login logic here
    signInWithEmailAndPassword(auth, signInForm.email, signInForm.password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;

      
        alert('Login successful!');
        setError('');
         setSignInForm({  email: "", password: "" });
         router.push('/')


     

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Error signing in:', errorCode, errorMessage);
        setError('Invalid email or password')
      });
        
       
       
       
    };


  

    return (
        <div className='w-11/12 sm:w-6/12 bg-yellow-50 p-5 my-5 rounded-lg shadow-lg'>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full ">
            
             
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={signInForm.email}
                    onChange={handleChange}
                    className="p-2 border rounded "
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={signInForm.password}
                    onChange={handleChange}
                    className="p-2 border rounded"
                />
             
                <button type="submit" className="bg-yellow-600 hover:bg-yellow-700 transition-all duration-300 cursor-pointer text-white p-2 rounded">Sign In</button>

                  {error && <div className='text-center'>
        <p className='text-red-800'>{error}</p>
      </div>}

                <div>
                    <p className='text-center text-sm text-gray-500'>Don't have an account? <Link href="/signup" className='text-yellow-600 hover:text-yellow-700'>Sign Up</Link></p>
                </div>
            </form>


        </div>
    )
}   
