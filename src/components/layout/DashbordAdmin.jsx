'use client';
import { FaUserAlt } from 'react-icons/fa';
import { useContext, useState } from 'react';
import { ContextStore } from '@/context/contextStore';
import Link from 'next/link';

function DashbordAdmin() {
  const { state, dispatch } = useContext(ContextStore);
  const [isOpen, setIsOpen] = useState(false);
  const { userConnect } = state;
  const toggelDeropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="  ">
        <div
          className=" border bg-gradient-to-tr from-yellow-300 to-transparent 
        w-[150px] min-h-screen flex flex-col items-center gap-5 rounded-lg "
        >
          <div className="mt-4  p-2 rounded-full shadow shadow-red-400 bg-white">
            <FaUserAlt className="text-red-500" />
          </div>
          <h2 className="text-xl text-gray-600 ">داشبورد مدیر</h2>
          <div className="flex flex-col gap-1  text-xl p-0 overflow-y-auto h-[700px]">
            <Link href={'/dashboardAdmin/products'} className="style-button">
              محصولات
            </Link>
            <Link
              href={'/dashboardAdmin/products/newProduct'}
              className="style-button "
            >
              ثبت محصول
            </Link>
            <Link href={'/dashboardAdmin/orders'} className="style-button  ">
              سفارشات
            </Link>
            <button className="style-button ">کاربران</button>
            <Link href={'/dashboardAdmin/comments'} className="style-button  ">
              نظرات کاربران
            </Link>
            <button className="style-button relative" onClick={toggelDeropdown}>
              حسابداری
              {isOpen && (
                <div
                  className={` ${
                    isOpen ? 'top-12 opacity-100' : '-top-5 opacity-0'
                  } mt-2 absolute  z-10 flex flex-col gap-1 transition-all duration-1000`}
                >
                  <Link href={'/dashboardAdmin/deposits'} className="text-zinc-900 ">
                    واریزی ها
                  </Link>
                  <hr/>
                  <Link href={'/'} className="text-zinc-900  ">
                    آمارمحصولات
                  </Link>
                </div>
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashbordAdmin;
