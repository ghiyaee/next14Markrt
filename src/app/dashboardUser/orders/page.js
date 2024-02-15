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
            {orders?.map((order, idx) => (
              <div
                key={order._id}
                className="flex gap-4 p-2 items-center border "
              >
                <p>{idx + 1}</p>
                <p className="">
                  تاریخ و ساعت سفارش :
                  {moment(order.orderData)
                    .locale('fa')
                    .format('HH:D YYYY/MM/DD')}
                </p>

                <p className="w-56">کد سفارش : {order.counter}</p>
                <Image
                  width={40}
                  height={40}
                  alt="mobile"
                  src={
                    order.product_id ? order.product_id?.img[0] : order.img[0]
                  }
                  priority={true}
                />
                <p> تعداد : {order.quantity}</p>
                <p className="w-20 text-center">
                  {order.product_id ? order.product_id?.name : order.name}
                </p>
                <p className="w-42">
                  وضعیت :{' '}
                  {order.sending ? 'ارسال شد' : 'درحال بسته بندی و ارسال'}
                </p>
              </div>
            ))}
          </>
        ) : (
          <p>شما سفارش ثبت شده ای ندارید</p>
        )}
      </div>
    </main>
  );
}
