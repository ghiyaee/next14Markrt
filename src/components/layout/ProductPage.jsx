'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import { ContextStore } from '@/context/contextStore';
function ProductPage({ product }) {
  const [active, setActive] = useState(product?.img[0]);
  const [showTab, setShowTab] = useState()
  const [hiddenTab, setHiddenTab] = useState('hidden');
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
  const handelTabInf=() => {
    setHiddenTab('hidden');
    setShowTab('block');
  }
  const handelTabMsg = () => {
    setHiddenTab('block')
    setShowTab('hidden')
  };
  // const handelTabMsg = () => {
  //   const hiddenTab = 'hidden';
  //   const showTab = 'block';
  //   setHiddenTab(showTab);
  //   setShowTab(hiddenTab);
  // };
  useEffect(() => {
    const time = setTimeout(() => {
      dispatch({ type: 'MESSAGEBUY', payload: '' });
    }, 3000);
    return () => {
      clearTimeout(time);
    };
  }, [message]);
  return (
    <>
      <section
        className="flex flex-col 
    justify-center items-center flex-wrap 
    gap-10 mt-8 transition-all duration-[2000s]"
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
          <div className="">
            <Image
              width={250}
              height={100}
              alt="mobile"
              src={active}
              priority={false}
            />
          </div>
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
      <section>
        <div className="flex justify-center gap-1 items-center ">
          {product.img.map((img, idx) => (
          
              <button onClick={() => setActive(product?.img[idx])} key={img} >
                <Image src={img} alt="imag"  width={70} height={100} />
              </button>
         
          ))}
        </div>
      </section>
      <section className="border border-zinc-200 ">
        <button
          className="px-6 py-6 hover:bg-primary 
        duration-700 hover:text-gray-50"
          onClick={handelTabInf}
        >
          مشخصات فنی
        </button>
        <button
          className={`$ px-6 py-6 hover:bg-primary 
        duration-700 hover:text-gray-50`}
          onClick={handelTabMsg}
        >
          نظرات دیگران
        </button>
        <div
          className={`${showTab}  px-[2rem] py-[1rem] border border-zinc-200 `}
        >
          <h3 className="mt-5">ظرفیت 128 ,512 گیگ</h3>
          <p className="mt-5">دوربین 50 مگابیکسلی</p>
          <p className="mt-5">در سه رنگ مشکی سفید آبی</p>
        </div>
        <div className={`${hiddenTab} `}>
          <h3>نظرات کاربران</h3>
          <textarea />
        </div>
      </section>
    </>
  );
}

export default ProductPage;
