import { featuredProducts } from '@/data';
import Image from 'next/image';
import React from 'react';

{/*p-4 lg:px-20 xl:px-40 */}

const Featured = () => {
  return (
    <div className="w-screen overflow-x-scroll text-red-700 ">
      {/* wrapper */}
      <div className="w-max flex ">
        {/* single items */}
          {featuredProducts.map(item => (       
            <div key={item.id} className="w-screen h-[60vh] flex flex-col items-center justify-center p-4 hover:bg-orange-100 transition-all duration-300 md:w-[50vw] xl:w-[33vw] xl:h-[90vh]">
              {/* img container */}
              {item.img && (<div className="relative flex-1 w-full hover:rotate-[60deg] transition-all duration-500">
                <Image 
                  src={item.img}
                  alt="" fill 
                  className="object-contain"
                />
              </div>)}
              {/* txt container */}
              <div className="items-center flex-1 flex flex-col gap-4 py-2 text-center">
                <h1 className="text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl">{item.title}</h1>
                <p className="p-4 2xl:p-8">{item.desc}</p>
                <span className="text-xl font-bold">${item.price}</span>
                <button className="bg-red-800 text-white p-2 rounded-md hover:bg-black transition-all duration-500">Add to Cart</button>
              </div>
            </div> 
          ))};
      </div>       
    </div>
  );
};

export default Featured;