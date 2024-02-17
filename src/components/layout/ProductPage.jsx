'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import { ContextStore } from '@/context/contextStore';
import InfoProduct from './InfoProduct';
import { basketDb } from '@/controller/basket/BasketDb';
import { handeldesCountInStock } from '@/controller/products/ShowProducts';
import FadeLoader from 'react-spinners/FadeLoader';
import { handleFindAddress } from '@/controller/address/ShowAddress';
import { useRouter } from 'next/navigation';
function ProductPage({ product }) {
   const router = useRouter();
  const [active, setActive] = useState(product?.img[0]);
  const { dispatch, state } = useContext(ContextStore);
  const { message, cartItem, userConnect, address } = state;
  const [loading, setLoading] = useState(false);
  console.log('add product to cartItem ', cartItem);
  const handelAddProduct = async (product) => {
    const exist = cartItem.some((item) => item._id === product._id);
    // const existAddress = address.some(
    //   (item) => item._id === userConnect[0]._id
    // );
    // console.log(existAddress);
    try {
      if (!exist ) {
        dispatch({ type: 'ADDITEM', payload: product });
        dispatch({ type: 'MESSAGEBUY', payload: 'به سبدخریداضافه شد' });
        setTimeout(async () => {
          await basketDb({ product, userConnect });
          await handeldesCountInStock(product._id);
          const { address } = await handleFindAddress(userConnect[0]?._id);
          if (!address) {
            router.push('/basket/addressUser');
          } else {
            dispatch({ type: 'ADDRESS', payload: exist });
          }
        },200);
      } else {
        dispatch({ type: 'MESSAGEBUY', payload: 'محصول قبلا وارد سبدخریدشده' });
      }
    } catch (error) {
      console.log(error, 'this a error at add product to basket');
    }
  };
  useEffect(() => {
    const time = setTimeout(() => {
      dispatch({ type: 'MESSAGEBUY', payload: '' });
    }, 4000);
    return () => {
      clearTimeout(time);
    };
  }, [message]);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const exist = await handleFindAddress(userConnect[0]._id);
  //     if (!exist) {
  //       router.push('/basket/addressUser');
  //     } else {
  //       dispatch({ type: 'ADDRESS', payload: exist });
  //     }
  //     fetchData();
  //   };
  // }, [existAddress]);
  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center gap-5  text-2xl">
          لطفاصبرکنید
          <FadeLoader color={'#f41d3e'} loading={loading} size={100} />
        </div>
      ) : (
        <>
          <section
            className="flex flex-col 
             justify-center items-center flex-wrap 
              gap-10 mt-8 transition-all duration-[2000s]"
          >
            <div
              className="w-[300px] md:w-[500px] h-[500px] flex 
                flex-col  justify-center 
                 items-center gap-10 p-4 
                 rounded-lg 
                 shadow-[0_25px_45px_-24px_rgb(0,0,0,0.7)]  "
            >
              <div className="relative w-[400px] h-[350px]">
                <Image
                  alt="mobile"
                  src={active}
                  priority={false}
                  fill
                  objectFit="contain"
                  className="hover:scale-125 duration-700"
                />
              </div>
              <div className="text-gray-500 ">
                <p> برند: {product?.name}</p>
                <p> سال ساخت:{product?.model}</p>
                <p>قیمت :{product?.price}</p>
                <p>کیفیت :{product?.description}</p>
                {product?.countInStock > 0 ? (
                  <Link href={``}>
                    <button
                      className="bg-primary text-white
                      px-6 py-1 rounded-full w-full"
                      onClick={() => handelAddProduct(product)}
                    >
                      خرید
                    </button>
                  </Link>
                ) : (
                  <div
                    className="bg-primary text-white
                      px-6 py-1 rounded-full w-full"
                  >
                    اتمام موجودی
                  </div>
                )}
                <p
                  className={`${
                    state.message ? 'block' : 'hidden'
                  }  transition-all duration-1000 bg-green-500 mt-2 text-white
                    px-6 py-1 rounded-full `}
                >
                  {state.message}
                </p>
              </div>
            </div>
          </section>
          <section className="flex justify-center">
            <div className="flex  justify-center gap-1 items-center img ">
              {product.img.map((img, idx) => (
                <button onClick={() => setActive(product?.img[idx])} key={img}>
                  <div className="relative w-20 h-20 ">
                    <Image src={img} alt="imag" fill objectFit="cover" />
                  </div>
                </button>
              ))}
            </div>
          </section>
          <InfoProduct product={product} />
        </>
      )}
    </>
  );
}

export default ProductPage;
