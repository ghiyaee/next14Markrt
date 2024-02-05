'use client';
import { useContext } from 'react';
import { ContextStore } from '@/context/contextStore';
import Image from 'next/image';
import Link from 'next/link';
import { IoMdAdd } from 'react-icons/io';
import { GrFormSubtract } from 'react-icons/gr';
import { MdDeleteForever } from 'react-icons/md';
import { useRouter } from 'next/navigation';
import { basketDb, handelUpdataBasket } from '@/components/layout/BasketDb';
 function BasketPage() {
  const { state, dispatch } = useContext(ContextStore);
   const { cartItem, userConnect, address } = state;
   console.log(cartItem);
  const router = useRouter();
  const handelDeleteProduct = (product) => {
    dispatch({ type: 'DELETEPRODUCT', payload: product });
    
  };
   const handelCounterAdd = async (product) => {
    //  const {quantity} = await handelUpdataBasket(product);
      dispatch({ type: 'INCREMENT_QUANTITY', payload: product });
  };
  const handelCounterDes = (product) => {
    dispatch({ type: 'DECRIMENT_QUANTITY', payload: product });
  };
  return (
    <section>
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
                      src={pro.product_id ? pro.product_id?.img[0] : pro.img[0]}
                      priority={true}
                    />
                    <div className="text-gray-500 flex items-center gap-1 md:gap-4 ">
                      <div>
                        <p> برند: {pro.product_id? pro.product_id?.name:pro.name}</p>
                        <p>قیمت :{pro.product_id? pro.product_id?.price:pro.price}</p>
                      </div>
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
                          onClick={() => handelDeleteProduct(pro)}
                        >
                          <MdDeleteForever />
                        </button>
                      </Link>
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
                      a + Number(c.quantity? c.quantity:c.product_id.quantity) * Number(c.product_id? c.product_id?.price:c.price),
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
  );
}

export default BasketPage;
