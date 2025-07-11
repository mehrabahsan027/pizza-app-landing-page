'use client'
import React from 'react'
import { useState } from 'react';

import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import app from '@/firebase/firebase.config.js';


export default function SignUpForm() {

    const [signUpForm, setSignUpForm] = useState({ firstName: "", lastName: '', email: '', password: '', confirmPassword: '' });
     const auth = getAuth(app);

    const handleChange = (e) => {
        setSignUpForm({ ...signUpForm, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (signUpForm.password !== signUpForm.confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

       
        createUserWithEmailAndPassword(auth, signUpForm.email, signUpForm.password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
       

        sendEmailVerification(user)
          .then(() => {
            alert('Verification email sent!');
          })
          .catch((error) => {
            console.error("Error sending email verification:", error);
          });

     
 


        
      })
        

        //reset form
        setSignUpForm({ firstName: "", lastName: '', email: '', password: '', confirmPassword: '' });
       
    };

    return (
        <div className='w-2xl bg-yellow-50 p-5 my-10 rounded-lg shadow-lg'>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
