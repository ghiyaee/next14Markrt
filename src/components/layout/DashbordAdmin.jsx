'use client';
import { FaUserAlt } from 'react-icons/fa';
import { useContext } from 'react';
import { ContextStore } from '@/context/contextStore';
import Link from 'next/link';

function DashbordAdmin() {
  const { state, dispatch } = useContext(ContextStore);
  const { userConnect } = state;
  return (
    <>
      <div className="  ">
        <div className="border bg-gradient-to-tr from-yellow-300 to-transparent w-[150px] min-h-screen flex flex-col items-center gap-5 rounded-lg ">
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
            <button className="style-button ">پیامهای ارسالی</button>
            <button className="style-button  ">آمار محصولات</button>
            <button className="style-button  ">آمارتفکیکی کالا</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashbordAdmin;
