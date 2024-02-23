'use client'
import DashboardUser from '@/components/layout/DashboardUser';
import { useContext, useEffect, useState } from 'react';
import { ContextStore } from '@/context/contextStore';
import {handleOrder} from '@/controller/orders/Oreders';
import Image from 'next/image';
import moment from 'jalali-moment';
export default function Orders() {
  const { state } = useContext(ContextStore);
  const [orders,setOrders]=useState()
  const { userConnect } = state;
    console.log(userConnect);
  useEffect(() => {
    const fechtData = async () => {
      const {order} = await handleOrder(userConnect[0]?._id);
      setOrders(order)
    }
    fechtData()
  }, [])
  console.log(orders);
  return (
    <main className="flex">
      <DashboardUser />
      <div
        className="w-screen flex flex-col p-4 items-center
       bg-gradient-to-tr from-yellow-300 to-transparent"
      >
        <h2 className="p-4">لیست سفارشات </h2>
        {orders?.length > 0 ? (
          <>
            <div className="border-2 border-red-500 my-div m-0 overflow-auto h-[350px] p-4">
              {orders?.map((order, idx) => (
                <div
                  key={order._id}
                  className="flex gap-4 p-2 justify-between  
                    h-12  "
                >
                  <div className='flex gap-4 items-center p-0'>
                    <p>{idx + 1}-</p>
                    <p className="">
                      تاریخ و ساعت سفارش :
                      {moment(order.orderData)
                        .locale('fa')
                        .format('HH:D YYYY/MM/DD')}
                    </p>
                    <p className="">کد سفارش : {order.idCode}</p>
                    <Image
                      width={40}
                      height={40}
                      alt="mobile"
                      src={
                        order.product_id
                          ? order.product_id?.img[0]
                          : order.img[0]
                      }
                      priority={true}
                    />
                    <p> تعداد : {order.quantity}</p>
                    <p className=" text-center">
                      {order.product_id ? order.product_id?.name : order.name}
                    </p>
                  </div>

                  <di>
                    <p className="">
                      وضعیت :
                      {order.sending ? 'ارسال شد' : 'درحال بسته بندی و ارسال'}
                    </p>
                  </di>
                </div>
              ))}
            </div>
          </>
        ) : (
          <p>شما سفارش ثبت شده ای ندارید</p>
        )}
      </div>
    </main>
  );
}
