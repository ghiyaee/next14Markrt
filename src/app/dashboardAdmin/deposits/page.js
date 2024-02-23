'use client';
import DashbordAdmin from '@/components/layout/DashbordAdmin';
import { useEffect, useState } from 'react';
import { handleAllOrders } from '@/controller/orders/Oreders';
import moment from 'jalali-moment';
const Deposits = () => {
  const [deposits, setDeposits] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { deposits } = await handleAllOrders();
      setDeposits(deposits);
    };
    fetchData();
  }, []);
  return (
    <main className="flex">
      <DashbordAdmin />
      <div
        className="w-screen flex flex-col p-4 
           bg-gradient-to-tr from-yellow-300 to-transparent"
      >
        <h2 className="p-4 text-center">لیست واریزی ها </h2>

        {deposits?.length > 0 ? (
          <>
            <div className="w-[900px] flex  mb-2 ">
              <p className=''>ردیف</p>
              <p className='mr-3'>واریزکننده</p>
              <p className='mr-12'>تاریخ</p>
              <p className='mr-24'>کد واریزی</p>
              <p className='mr-[30px]'>قیمت محصول</p>
              <p className='mr-[28px]'>مالیات</p>
              <p className='mr-[45px]'>جمع محصول</p>
            </div>
            <div className="border-2 border-red-500 my-div overflow-auto h-[300px] p-2">
              {deposits?.map((order, idx) => (
                <>
                  <div
                    className="w-[900px] flex  gap-[30px] mt-3 "
                    key={order._id}
                  >
                    <p>{idx + 1}</p>
                    <p> {order.user_id.name}</p>
                    <p className="">
                      {moment(order.orderData)
                        .locale('fa')
                        .format('HH:D YYYY/MM/DD')}
                    </p>
                    <p className=""> {order.idCode}</p>
                    <p className=" text-center">{order.productTotal}</p>
                    <p> {order.tax}</p>
                    <p className=" text-center">
                      {order.productTotal + order.tax}
                    </p>
                  </div>
                </>
              ))}
            </div>
            <div className="flex gap-16 mt-5 justify-end ">
              <p>جمع کل محصولات</p>
              <p>جمع مالیات</p>
              <p>جمع کل واریزی ها</p>
            </div>
            <div className="flex gap-[100px] mt-1 justify-end">
              <p>{deposits.reduce((a, c) => a + c.productTotal, 0)}</p>
              <p>{deposits.reduce((a, c) => a + c.tax, 0)}</p>
              <p>
                {deposits.reduce((a, c) => a + (c.productTotal + c.tax), 0)}
              </p>
            </div>
          </>
        ) : (
          <p className="text-center">واریزی ندارید</p>
        )}
      </div>
    </main>
  );
};
export default Deposits;
