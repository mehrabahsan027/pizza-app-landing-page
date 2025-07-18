"use client";
import { useCart } from "@/components/CartContext";
import { Button } from "@/components/ui/button";
import { getFirestore, doc, setDoc } from 'firebase/firestore';

export default function CartPage() {
  const { cart, clearCart, increaseQuantity, decreaseQuantity } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

   console.log(cart)

 


  return (
    <div className="min-h-screen bg-amber-50 py-10 px-4 md:px-16">
      <h1 className="text-3xl font-bold mb-8 text-center">Your Cart</h1>
      {cart.length === 0 ? (
        <p className="text-center text-lg">Your cart is empty.</p>
      ) : (
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
          <ul className="divide-y divide-gray-200">
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between items-center py-4">
                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-sm text-gray-500">Size: {item.size}</p>
                  <p className="text-sm text-gray-500">${item.price} x {item.quantity}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Button size="sm" variant="outline" onClick={() => decreaseQuantity(item.id)}>-</Button>
                  <span className="px-2 font-semibold">{item.quantity}</span>
                  <Button size="sm" variant="outline" onClick={() => increaseQuantity(item.id)}>+</Button>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex justify-between items-center mt-6">
            <span className="font-bold text-lg">Total:</span>
            <span className="font-bold text-lg">${total.toFixed(2)}</span>
          </div>
          <div className="flex justify-end mt-4">
            <Button variant="outline" onClick={clearCart}>Clear Cart</Button>
          </div>
        </div>
      )}
    </div>
  );
} 