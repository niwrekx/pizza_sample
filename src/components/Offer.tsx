import Image from 'next/image';
import React from 'react'
import { FaPizzaSlice } from "react-icons/fa";
import CountDown from "./CountDown";

const Offer = () => {
  return (
    //p-4 lg:px-20 xl:px-40
    <div className="bg-black h-screen flex flex-col md:flex-row ">
      {/* text container */}
      <div className="flex-1 flex flex-col justify-center items-center gap-8 p-6">
        <h1 className="text-white text-5xl font-bold xl:text-6xl">Delicous Burger & French Fry</h1>
        <p className="text-white p-6 xl:text-xl">Ut enim ad minima veniam, quis nostrum exercitationem.Sed ut perspiciatis unde omnis iste natus error sit</p>
        <CountDown />
        <button className="bg-red-800 text-white font-bold py-4 px-10 rounded-xl text-2xl flex justify-center items-center gap-2">ORDER NOW <FaPizzaSlice /></button>
      </div>
      {/* img container */}
      <div className="relative flex-1 w-full md:h-full">
        <Image src="/offerProduct.png" fill alt="offer" className="object-contain"/>
      </div>
    </div>
  )
}

export default Offer;