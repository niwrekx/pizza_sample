import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const CartIcon = () => {
  return (
    <Link href="/cart" className='flex items-center gap-1'>
        <div className="relative w-8 h-8 flex md:w-5 h-5 justify-center items-center ">
            <Image src ="/cart.png" alt="cart" width={20} height={20}/>
        </div>
        <span>Cart (3)</span>
    </Link>
  )
}

export default CartIcon;