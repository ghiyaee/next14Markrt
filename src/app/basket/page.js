'use client';
import { useContext, useState, useEffect } from 'react';
import { ContextStore } from '@/context/contextStore';
import Image from 'next/image';
import Link from 'next/link';
import { IoMdAdd } from 'react-icons/io';
import { GrFormSubtract } from 'react-icons/gr';
import { MdDeleteForever } from 'react-icons/md';
import { useRouter } from 'next/navigation';
import {
  handelDeleteBasketProduct,
  handelAddUpdataBasket,
  handelDecUpdataBasket,
} from '@/controller/basket/BasketDb';

function BasketPage() {
  const { state, dispatch } = useContext(ContextStore);
  const { cartItem, userConnect, address } = state;
  const [warning, setWarning] = useState(false);
  const [isActive, setIsActive] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null);

  const router = useRouter();
  const handelWarningProduct = (item) => {
    setSelectedItem(item);
    setWarning(true);
    setIsActive(false);
  };
  const handelCancel = () => {
    setSelectedItem(null);
    setWarning(false);
    setIsActive(true);
  };
  const handelDeleteOk = async () => {
    setTimeout(async () => {
      await handelDeleteBasketProduct(selectedItem);
    }, 300);
    dispatch({ type: 'DELETEPRODUCT', payload: selectedItem });
    setWarning(false);
    setIsActive(true);
  };
  const handelCounterAdd = async (product) => {
       setTimeout(async () => {
      await handelAddUpdataBasket(product)
    },300)
    dispatch({ type: 'INCREMENT_QUANTITY', payload: product });
  };
  const handelCounterDes = (product) => {
    console.log(product);
    setTimeout(async () => {
     await handelDecUpdataBasket(product) 
    },300)
    dispatch({ type: 'DECRIMENT_QUANTITY', payload: product });
  };
  return (
    <>
      <section
        className={`${
          isActive
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-70'
        } `}
      >
        {userConnect.length > 0 ? (
          <div className="flex gap-[25px] justify-center items-center flex-col ">
            {cartItem.length === 0 ? (
              <div className="text-center">سبدخریدشماخالی است</div>
            ) : (
              <>
                <div className="w-[350px] md:w-[500px] ">
                  <h2 className="text-center my-5">سبد خرید شما</h2>
                  {cartItem.map((pro) => (
                    <div
                      key={pro._id}
                      className="flex justify-center  gap-2 p-2
                     hover:scale-105 duration-700 rounded-lg 
                    shadow-[0_25px_45px_-24px_rgb(0,0,0,0.7)] my-2 "
                    >
                      <Image
                        width={40}
                        height={40}
                        alt="mobile"
                        src={
                          pro.product_id ? pro.product_id?.img[0] : pro.img[0]
                        }
                        priority={true}
                      />
                      <div className="text-gray-500 flex-1 flex items-center justify-between gap-4 md:gap-4 ">
                        <div>
                          <p>
                             برند:
                            {pro.product_id ? pro.product_id?.name : pro.name}
                          </p>
                          <p>
                            قیمت :
                            {pro.product_id ? pro.product_id?.price : pro.price}
                          </p>
                        </div>
                        <div className="flex gap-4">
                          <Link href={``}>
                            <button
                              className="bg-primary text-white  px-2  py-1 rounded-full"
                              onClick={() => handelCounterAdd(pro)}
                            >
                              <IoMdAdd />
                            </button>
                          </Link>
                          <p>{pro.quantity}</p>
                          <Link href={``}>
                            <button
                              className="bg-primary text-white px-2  py-1 rounded-full"
                              onClick={() => handelCounterDes(pro)}
                            >
                              <GrFormSubtract />
                            </button>
                          </Link>
                          <Link href={``}>
                            <button
                              className="bg-primary text-white  px-2  py-1 rounded-full"
                              onClick={() => handelWarningProduct(pro)}
                            >
                              <MdDeleteForever />
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div
                  className="w-[300px] p-2 rounded-lg 
              flex  justify-around bg-primary  shadow-[0_25px_25px_-24px_rgb(0,0,0,0.7)] 
               text-gray-50"
                >
                  <div>جمع فاکتور</div>
                  <div>
                    {cartItem.reduce(
                      (a, c) =>
                        a +
                        Number(
                          c.quantity ? c.quantity : c.product_id.quantity
                        ) *
                          Number(c.product_id ? c.product_id?.price : c.price),
                      0
                    )}
                  </div>
                </div>
                {address[0] === null ? (
                  <Link
                    href={'/basket/addressUser'}
                    className="bg-primary text-gray-50 p-2"
                  >
                    ثبت آدرس
                  </Link>
                ) : (
                  <Link href={'/'} className="bg-primary text-gray-50 p-2">
                    نهایی کردن سفارش
                  </Link>
                )}
              </>
            )}
          </div>
        ) : (
          router.push('/login')
        )}
      </section>
      {warning && selectedItem && (
        <section className="fixed translate-x-[50%]  right-[50%]  top-[40%]">
          <div className="bg-gradient-to-tr from-yellow-300 to-yellow-100  p-4 w-96 h-62">
            <p className="text-center mb-4">
              هشدار !! پس از حذف قابل بازیابی نیست
            </p>
            <div className="flex justify-between">
              <button
                onClick={() => handelDeleteOk(selectedItem)}
                className="p-2 bg-primary text-gray-50 rounded-lg"
              >
                حذف
              </button>
              <button
                onClick={() => handelCancel()}
                className="p-2 bg-primary text-gray-50 rounded-lg"
              >
                انصراف
              </button>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default BasketPage;
