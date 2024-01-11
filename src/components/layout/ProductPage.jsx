'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useContext, useEffect } from 'react';
import { ContextStore } from '@/context/contextStore';
function ProductPage({ product }) {
  const { dispatch, state } = useContext(ContextStore);
  const { message, cartItem } = state;
  const handelAddProduct = async (product) => {
    const exist = cartItem.some((item) => item._id === product._id);
    if (!exist) {
      dispatch({ type: 'ADDITEM', payload: product });
     
      dispatch({ type: 'MESSAGEBUY', payload: 'به سبدخریداضافه شد' });
   
    } else {
       dispatch({ type: 'MESSAGEBUY', payload: 'محصول قبلا وارد سبدخریدشده' });
    }
  };
  useEffect(() => {
    const time = setTimeout(() => {
      dispatch({ type: 'MESSAGEBUY', payload: '' });
    }, 3000);
    return () => {
      clearTimeout(time);
    };
  }, [message]);
  return (
    <section
      className="flex flex-col 
    justify-center items-center flex-wrap gap-10 mt-8 transition-all duration-[2000s]"
    >
      <p
        className={`${
          state.message ? 'block' : 'hidden'
        }  transition-all duration-1000 bg-green-500 mt-2 text-white
             px-6 py-1 rounded-full `}
      >
        {state.message}
      </p>
      <div
        className="w-[300px] md:w-[700px] flex 
          flex-col md:flex-row justify-center 
          items-center gap-10 p-4 
        hover:scale-105 duration-700 rounded-lg 
        shadow-[0_25px_25px_-24px_rgb(0,0,0,0.7)]  "
      >
        <Image
          width={200}
          height={100}
          alt="mobile"
          src={product?.img}
          priority={false}
        />
        <div className="text-gray-500 ">
          <p> برند: {product?.name}</p>
          <p> سال ساخت:{product?.model}</p>
          <p>قیمت :{product?.price}</p>
          <p>کیفیت :{product?.description}</p>
          <Link href={``}>
            <button
              className="bg-primary text-white
             px-6 py-1 rounded-full w-full"
              onClick={() => handelAddProduct(product)}
            >
              خرید
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ProductPage;
