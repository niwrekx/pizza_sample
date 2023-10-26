"use client";

import React, { useState } from 'react'
import Image from "next/image";
import Link from 'next/link';
import CartIcon from './CartIcon';

const links = [
    { id: 1, title: "Home", url: "/" },
    { id: 2, title: "Menu", url: "/menu" },
    { id: 3, title: "Working Hours", url: "/" },
    { id: 4, title: "Contact Us", url: "/" },
  ];

const Menu = () => {

    const [open,SetOpen] = useState(false);

    const user = false;  // temporary const user
   
    return (
        <div>
            {!open ? (
                <Image src="/open.png" alt="mobile-menu" width={25} height={25} className="cursor-pointer" onClick={()=> SetOpen(true)} />
            ) : (
                <Image src="/close.png" alt="mobile-menu" width={25} height={25} className="cursor-pointer" onClick={()=> SetOpen(false)}/>
            )}
            
            {open &&
                <div className="bg-red-800 text-white absolute left-0 top-[9.7rem] w-full h-[calc(100vh-6rem)] flex flex-col items-center justify-center text-3xl gap-5 z-10">
                    {links.map((item) =>(
                    <Link href = {item.url} key={item.id} onClick={() => SetOpen(false)}>
                        {item.title}
                    </Link>
                    ))}

                    { !user ?(
                        <Link href="/login" onClick={() => SetOpen(false)}>Login</Link>
                    ) : (
                        <Link href="/orders" onClick={() => SetOpen(false)}>Orders</Link>
                    )}

                    <Link href="/cart" onClick={() => SetOpen(false)}>
                        <CartIcon />
                    </Link>
                </div>
            }
        </div>
    )
}

export default Menu;