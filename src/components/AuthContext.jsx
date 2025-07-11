'use client'

import app from "@/firebase/firebase.config";
import { getAuth, onAuthStateChanged} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";





const AuthContext = createContext('')



export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

 

  const auth = getAuth(app);

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {

        console.log('auth provider', user);
        setCurrentUser(user)




      } else {
        console.log('no user logged in');
        setCurrentUser(null)

      }
    });


    return () => {
      unsubscribe()
    }
  }, [auth])


  //update user profile
  const updateUserProfile = async (profile) => {
    if (currentUser) {
      try {
        await updateProfile(currentUser, profile)
        setCurrentUser(prev => {
          return { ...prev, ...profile }
        })

      } catch (error) {
        console.error("Error updating profile:", error);
        throw new Error("Failed to update profile");

      }




    }

    else
      throw new Error("No user is currently logged in");
  }


 const value = {
    currentUser,
    // updateUserProfile
  }
  return (
    <AuthContext.Provider value={ value }>
      {children}
    </AuthContext.Provider>
  );
}


export const useAuth = () => useContext(AuthContext)