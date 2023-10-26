"use client"

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FaPizzaSlice } from "react-icons/fa";


const data = [
    {
      id: 1,
      title: "Handmade, With an Extra Pinch of Love",
      sub:"Nemo enim ipsam voluptatem quia voluptas sit aspernatur",
      image: "/slide1.png",
    },
    {
      id: 2,
      title: "Daily fresh and always tasty pizza to share",
      sub:"Sed ut perspiciatis unde omnis iste natus error sit",
      image: "/slide2.png",
    },
    {
      id: 3,
      title: "The best pizza to share with your family",
      sub:"Ut enim ad minima veniam, quis nostrum exercitationem",
      image: "/slide3.jpg",
    },
  ];

  const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

        // useEffect(() => {
        //     const interval = setInterval (()=>{
        //         setCurrentSlide ((prev)=>(prev === data.length -1 ? 0 : prev + 1 ));
        //     },4000);  
            
        //     return () => {
        //         clearInterval(interval);
        //     }
        // },[]);

  return (
    // p-4 lg:px-20 xl:px-40
    <div className="bg-red-800 flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row "> 
        {/* text */}
        <div className=" lg:px-20 xl:px-40 flex items-center justify-center flex-col gap-8 text-white p-4 w-full h-1/2 lg:w-1/2 lg:h-full xl:h-full">
            <h1 className="font-bold text-4xl text-center leading-tight xl:text-6xl">{data[currentSlide].title}</h1>
            <h3 className="text-sm text-center">{data[currentSlide].sub}</h3>
            <button className="bg-black font-bold py-4 px-10 rounded-xl text-2xl flex justify-center items-center gap-2">ORDER NOW <FaPizzaSlice /></button>
        </div>
        {/* img */}
        <div className="relative w-full flex-1">
            <Image src={data[currentSlide].image} alt="hero"  fill className="object-cover"/>
        </div>
    </div>
  )
}

export default Slider;