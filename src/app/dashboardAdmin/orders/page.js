'use client';
import { useContext, useEffect, useState } from 'react';
import { ContextStore } from '@/context/contextStore';
import Image from 'next/image';
import moment from 'jalali-moment';
import DashbordAdmin from '@/components/layout/DashbordAdmin';
import { handleOrders, handleSendOrder } from '@/controller/orders/Oreders';

export default function Orders() {
  const { state } = useContext(ContextStore);
  const [orders, setOrders] = useState();
  const { userConnect } = state;
  console.log(userConnect);
  useEffect(() => {
    const fechtData = async () => {
      const { orders } = await handleOrders();
      setOrders(orders);
    };
    fechtData();
  }, [orders]);
  console.log(orders);
  return (
    <main className="flex">
      <DashbordAdmin />
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
                className="flex gap-8  p-2 items-center border "
              >
                <p>{idx + 1}</p>
                <p className="">
                  تاریخ و ساعت سفارش :
                  {moment(order.orderData)
                    .locale('fa')
                    .format('HH:D YYYY/MM/DD')}
                </p>
                <p className="w-48">کد سفارش : {order._id}</p>
                <Image
                  width={40}
                  height={40}
                  alt="mobile"
                  src={
                    order.product_id ? order.product_id?.img[0] : order.img[0]
                  }
                  priority={true}
                />
                <p className="w-28 text-center">
                  {order.product_id ? order.product_id?.name : order.name}
                </p>
                <button
                  onClick={async (e) => {
                    e.preventDefault();
                    await handleSendOrder(order._id);
                    const { orders } = await handleOrders();
                    setOrders(orders);
                     }}
                  className="bg-primary text-gray-50 p-2"
                >
                  وضعیت : {order.sending ? 'ارسال شد' : 'منتظرارسال'}
                </button>
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
