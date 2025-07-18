"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
import app from "@/firebase/firebase.config";
import { useAuth } from "./AuthContext";

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { currentUser } = useAuth();
  const db = getFirestore(app);

  console.log('currentUser', currentUser);

  // Load cart from Firestore when user logs in
  useEffect(() => {
    const fetchCart = async () => {
      setIsLoading(true);
      
      if (currentUser) {
        try {
          const cartDoc = await getDoc(doc(db, "carts", currentUser.uid));
          if (cartDoc.exists()) {
            setCart(cartDoc.data().items || []);
          } else {
            setCart([]);
          }
        } catch (error) {
          console.error("Error fetching cart:", error);
          setCart([]);
        }
      } else {
        // Don't clear cart immediately when user becomes null
        // This prevents clearing cart during logout process
        setCart([]);
      }
      
      setIsLoading(false);
    };

    fetchCart();
  }, [currentUser, db]);

  // Sync cart to Firestore whenever cart changes and user is logged in
  useEffect(() => {
    const saveCart = async () => {
      // Only save if user is logged in, cart has items, and not currently loading
      if (currentUser && !isLoading) {
        try {
          await setDoc(doc(db, "carts", currentUser.uid), { 
            items: cart,
            lastUpdated: new Date().toISOString()
          });
        } catch (error) {
          console.error("Error saving cart:", error);
        }
      }
    };

    // Add a small delay to prevent unnecessary saves during rapid state changes
    const timeoutId = setTimeout(saveCart, 500);
    
    return () => clearTimeout(timeoutId);
  }, [cart, currentUser, db, isLoading]);

  // item: {id, title, price, ...}
  function addToCart(item) {
    setCart((prevCart) => {
      const existing = prevCart.find((i) => i.id === item.id);
      if (existing) {
        // Increase quantity if already in cart
        return prevCart.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        // Add new item with quantity 1
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  }

  function removeFromCart(id) {
    setCart((prevCart) => prevCart.filter((i) => i.id !== id));
  }

  function clearCart() {
    setCart([]);
  }

  function increaseQuantity(id) {
    setCart((prevCart) =>
      prevCart.map((i) =>
        i.id === id ? { ...i, quantity: i.quantity + 1 } : i
      )
    );
  }

  function decreaseQuantity(id) {
    setCart((prevCart) =>
      prevCart
        .map((i) =>
          i.id === id ? { ...i, quantity: i.quantity - 1 } : i
        )
        .filter((i) => i.quantity > 0)
    );
  }

  return (
    <CartContext.Provider 
      value={{ 
        cart, 
        addToCart, 
        removeFromCart, 
        clearCart, 
        increaseQuantity, 
        decreaseQuantity,
        isLoading ,
        setIsLoading
      }}
    >
      {children}
    </CartContext.Provider>
  );
}