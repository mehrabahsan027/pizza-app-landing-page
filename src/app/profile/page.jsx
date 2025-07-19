 'use client'
import { useAuth } from '@/components/AuthContext';
import React from 'react';
import {useState,useEffect} from 'react'
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { getAuth, signOut } from "firebase/auth";
import app from '@/firebase/firebase.config';
import { Button } from '@/components/ui/button';
import { useRouter , redirect} from 'next/navigation';

export default function ProfilePage() { 


  const {currentUser}  = useAuth()

  

  
  


  const [userData, setUserData] = useState({ firstName: '', lastName: '' });
 

  const [loader,setLoader] = useState(true)

  

  // const auth = getAuth(app);
  const db = getFirestore(app);

  const handleData = async()=> {
    const userDocRef = doc(db, 'users', currentUser.uid);
          const userDoc =  await getDoc(userDocRef);
          
          if (userDoc.exists()) {
            setUserData(userDoc.data());
            setLoader(false)
          }

  }

  useEffect(()=> {

     handleData()
    
  },[currentUser])

  
    const auth = getAuth(app);


    const router = useRouter()


      const handleLogOut = () => {
  
          
  signOut(auth).then(() => {
    // Sign-out successful.
    alert('Logged out successfully!');
    router.push('/signin')
    
  }).catch((error) => {
    // An error happened.
  });
}
  


  
 
  if(loader) {
    return <div className='text-3xl flex justify-center min-h-screen mt-10'>Loading... </div>
  }
  


  return (
    <div className="flex flex-col items-center pt-10  min-h-screen bg-yellow-50">
      <h1 className="text-3xl font-bold mb-4 text-red-800 capitalize">
        {userData?.firstName} {userData?.lastName}
      </h1>
      <p className="text-lg text-gray-600 mb-3">{userData?.email}</p>
   
  
    
   <div>
     <Button variant='secondary' onClick={handleLogOut}> Sign Out</Button>
    </div>

    </div>

  );
      }

    