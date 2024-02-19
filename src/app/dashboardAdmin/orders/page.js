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
                className="flex 
           border-green-500 w-[65rem] items-center 
           hover:shadow-[0_25px_25px_-24px_rgb(0,0,0,0.7)]
           hover:border-x-2 
            p-2 justify-between gap-4"
              >
                <div className="flex items-center  w-[800px]">
                  <div className='flex items-center gap-2'>
                    <p>{idx + 1}</p>
                    <p>نام کاربر : {order.user_id.name}</p>
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
                    <p>تعداد : {order.quantity}</p>
                    <p className=" text-center">
                      مدل :{' '}
                      {order.product_id ? order.product_id?.name : order.name}
                    </p>
                  </div>
                </div>

                <div className="">
                  <button
                    onClick={async (e) => {
                      e.preventDefault();
                      await handleSendOrder(order._id);
                      const { orders } = await handleOrders();
                      setOrders(orders);
                    }}
                    className={`${
                      order.sending
                        ? 'bg-green-500 text-gray-50 p-2 pointer-events-none opacity-70'
                        : 'bg-primary  text-gray-50 p-2 pointer-events-auto opacity-100'
                    }`}
                  >
                    وضعیت : {order.sending ? 'ارسال شد' : 'منتظرارسال'}
                  </button>
                </div>
              </div>
            ))}
          </>
        ) : (
          <p>شفارشی ثبت نشده</p>
        )}
      </div>
    </main>
  );
}
