import FoodItem from "@/components/FoodItem";
import HeroArea from "@/components/HeroArea";

import React from "react";

import { pizzaItems } from "./data.js";
import AboutUs from "@/components/About.jsx";
import ContactForm from "@/components/ContactForm.jsx";

export default function Home() {
  return (
    <main className="w-full">
      <HeroArea />

      {/* Menu Section or Food Items Section */}
      <div className=" bg-amber-100 ">
        <h1 className="text-center pt-12 text-2xl">Our Popular Pizzas</h1>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  justify-center items-center w-full p-3 md:p-10 space-y-5 md:gap-5 lg:px-16 ">
          {pizzaItems?.slice(0, 6).map((item) => {
            return <FoodItem key={item.id} item={item} />;
          })}
        </section>
      </div>

      {/* About Section  */}
      <section className="w-full py-5 bg-gradient-to-t from-slate-50 to-yellow-100">
        <h1 className="text-3xl text-center ">About Us</h1>

        <AboutUs />
      </section>

      {/* Contact Us Section */}

      <section className="w-full h-screen  relative ">
        <div className="absolute w-full bg-black h-full top-0 left-0 opacity-50"></div>

        <div className="w-full h-full ">
          <h1 className="absolute w-full text-center text-white mt-10 px-3 text-3xl lg:text-4xl">
            Feel Free To Share Your Thoughts
          </h1>
          <img
            src="contact.jpg"
            className="w-full h-full object-cover"
            alt=""
          />

         <ContactForm/>
        </div>
      </section>
    </main>
  );
}
