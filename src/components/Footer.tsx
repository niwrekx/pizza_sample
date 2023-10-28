import React from 'react';
import Link from 'next/link';
import Image from "next/image";

const Footer = () => {
    const year = new Date().getFullYear()
    return (
      <div className="bg-black p-4 h-12 md:h-24 lg:px-20 xl:px-40 text-white flex items-center justify-center ">
        {/* <Link href ="/">
          <Image src ="/logo.png" alt="logo" width={40} height={40} className="cursor-pointer" />
        </Link>  */}
      
        <p className="text-center text-sm">{`Copyright © ${year} NIWREKX. All Rights Reserved. `}</p>
      
      </div>

      
    )
}

export default Footer;