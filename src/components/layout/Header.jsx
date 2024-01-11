'use client';
import Link from 'next/link';
import { SlBasket } from 'react-icons/sl';
import { ContextStore } from '@/context/contextStore';
import { useContext, useEffect, useState } from 'react';
function Header() {
  const { state, dispatch } = useContext(ContextStore);
  const { userConnect, cartItem } = state;
  // useEffect(() => {
  //    const loadCart = () => {
  //      const cartData = localStorage.getItem('product');
  //      if (cartData) {
  //      dispatch({ type: 'PRODUCTLOCAL', payload:JSON.parse(cartData) });
  //      }
  //    };
  //   loadCart();
  // }, []);
  return (
    <header className=" flex justify-between items-center  ">
      <Link href={'/'} className="text-primary font-semibold md:text-xl">
        <span className="bg-primary text-white  p-2 rounded-l-full ">
          دیجیتال مارکت
        </span>
      </Link>
      <Link href={'/'} className="md:hidden font-semibold text-gray-400">
        MENU
      </Link>
      <nav className=" flex gap-2 md:gap-8 items-center font-semibold text-gray-500">
        <Link href={'/'} className="hidden md:block">
          خانه
        </Link>
        <Link href={'/products'} className="hidden md:block">
          محصولات
        </Link>
        <Link href={'/'} className="hidden md:block">
          درباره ما
        </Link>
        <Link href={'/'} className="hidden md:block">
          تماس باما
        </Link>
        <Link href={'/basket'}>
          <div className="relative">
            <SlBasket className="text-xl" />
            <span
              className={`${
                cartItem.length > 0 ? 'block' : 'hidden'
              } text-center w-5 h-5 bg-primary 
            rounded-full text-white absolute -top-3 -right-3`}
            >
              {cartItem.reduce((a, b) => a + b.quantity, 0)}
            </span>
          </div>
        </Link>
        {userConnect?.length > 0 ? (
          <Link
            href={'/'}
            className="bg-primary text-white px-4 md:px-8 py-2 rounded-full"
          >
            <p>{userConnect}</p>
          </Link>
        ) : (
          <Link
            href={'/login'}
            className="bg-primary text-white px-4 md:px-8 py-2 rounded-full"
          >
            ورود / ثبت نام
          </Link>
        )}
      </nav>
    </header>
  );
}

export default Header;
