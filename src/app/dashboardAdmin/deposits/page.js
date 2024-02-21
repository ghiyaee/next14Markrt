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
  console.log(deposits);
  return (
    <main className="flex">
      <DashbordAdmin />
      <div
        className="w-screen flex flex-col p-4 
           bg-gradient-to-tr from-yellow-300 to-transparent"
      >
        <h2 className="p-4">لیست واریزی ها </h2>
        <div className="flex gap-[90px] justify-end">
          <p>ردیف</p>
          <p>واریزکننده</p>
          <p>تاریخ</p>
          <p>کد واریزی</p>
          <p>قیمت محصول</p>
          <p>مالیات</p>
          <p>جمع محصول</p>
        </div>
        {deposits?.length > 0 ? (
          <>
            {deposits?.map((order, idx) => (
              <>
                <div className="flex  gap-20 mt-3 justify-end">
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
            <div className="flex gap-16 mt-5 justify-end">
              <p>جمع کل محصولات</p>
              <p>جمع مالیات</p>
              <p>جمع کل واریزی ها</p>
            </div>
            <div className="flex gap-20 mt-1 justify-end">
              <p>{deposits.reduce((a, c) => a + c.productTotal, 0)}</p>
              <p>{deposits.reduce((a, c) => a + c.tax, 0)}</p>
              <p>
                {deposits.reduce(
                  (a, c) => a + (c.productTotal + c.tax),
                  0
                )}{' '}
              </p>
            </div>
          </>
        ) : (
          <p>واریزی ندارید</p>
        )}
      </div>
    </main>
  );
};
export default Deposits;
