import React from 'react'
import Menu from './Menu';
import Image from "next/image";
import Link from 'next/link';
import CartIcon from './CartIcon';

const Navbar = () => {
  const user = false //temporary
  return (
    <div className= "h-15 flex justify-between items-center text-red-800 p-4 border-b-2 md:h-24 lg:px-20 xl:px-40" >
     {/*----- LOGO ---- */}
      <div  className="flex-1">
        <Link href ="/">
          <Image src ="/logo.png" alt="logo" width={100} height={100} className="cursor-pointer" />
        </Link>       
      </div>
      
      
      
      {/*----- Left Links ---- */}
      <div className="hidden md:flex gap-4 flex-1 justify-center items-center">
          <Link href="/">Home</Link>
          <Link href="/menu">Menu</Link>
          <Link href="/">Contact</Link>

      </div>    
      
      
      {/*---- MOBILE MENU -----*/}
      <div className="md:hidden">
        <Menu />
      </div>

      {/*----- Right Links login and Cart ---- */}
      <div className="hidden md:flex gap-4 items-center justify-end flex-1">
          <div className="md:absolute top-2 r-2 lg:static flex items-center gap-2 cursor-pointer bg-orange-300 p-1 rounded-md">
            <Image src="/phone.png" alt="phone" width={20} height={20}/>
            <span>555 555</span>
          </div>
          {!user ? (
            <Link href="/login">Login</Link> 
          ):(
            <Link href="/order">Orders</Link>
          )}
          <CartIcon/>
      </div>

    </div>
  )
}

export default Navbar;