'use client';
import { FaUserAlt } from 'react-icons/fa';
import { useContext } from 'react';
import { ContextStore } from '@/context/contextStore';
import Link from 'next/link';

function DashboardUser() {
  const { state, dispatch } = useContext(ContextStore);
  const { userConnect } = state;
  return (
    <>
      <div className="  ">
        <div className="border bg-gradient-to-tr from-yellow-300 to-transparent 
        w-[150px] min-h-screen flex flex-col items-center gap-5 rounded-lg ">
          <div className="mt-4  p-2 rounded-full shadow shadow-red-400 bg-white">
            <FaUserAlt className="text-red-500" />
          </div>
          <h2 className="text-xl text-gray-600 ">داشبورد شما</h2>
          <div className="flex flex-col gap-[3px]   text-xl p-0 overflow-y-auto h-[700px]">
            <Link href={'/dashboardUser/orders'} className="style-button">
              سفارشات
            </Link>
            <Link
              href={'/dashboardUser/editAddress'}
              className="style-button "
            >
              ویرایش آدرس
            </Link>
            
            <Link href={'/dashboardUser/comments'} className="style-button  ">
              نظرات شما
            </Link>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardUser;
