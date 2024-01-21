'use client';
import DashbordAdmin from '@/components/layout/DashbordAdmin';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import {
  handelProduct,
  handelEditProduct,
} from '@/components/layout/ShowProducts';
function EditProduct({ searchParams }) {
  const router = useRouter();
  const [countInStock, setCounInStock] = useState('');
  const [price, setPrice] = useState('');
  const [id, setId] = useState('');
  const [message, setMessage] = useState('');
  useEffect(() => {
    const fetachData = async () => {
      try {
        const { product } = await handelProduct(searchParams.value);
        setCounInStock(product.countInStock);
        setPrice(product.price);
        setId(product._id);
      } catch (error) {
        console.log(error);
      }
    };
    fetachData();
  }, [searchParams.value]);
  // useEffect(() => {
  //   const time = setTimeout(() => {
  //     if (message) {

  //       setMessage('')

  //     }
  //     return
  //   }, 5000)
  //   return () => {
  //     clearTimeout(time)
  //   }
  // },[])
  return (
    <main className="flex gap-0 container m-auto">
      <DashbordAdmin />
      <div
        className="w-screen flex flex-col gap-4 items-center
       bg-gradient-to-tr from-yellow-300 to-transparent"
      >
        <h2 className="py-2">ویرایش محصول</h2>
        {/* <Image
          src={img?.img[0]}
          alt={'image'}
          width={50}
          height={50}
        /> */}
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const { msg } = await handelEditProduct({
              price,
              countInStock,
              id,
            });
            setMessage(msg);
            setTimeout(() => {
              router.push('/dashboardAdmin/products');
            }, 2000);
          }}
          className="flex flex-col gap-5 "
        >
          <div>
            <label>قیمت </label>
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="outline-none rounded-lg text-center"
            />
          </div>
          <div>
            <label>تعداد </label>
            <input
              type="text"
              value={countInStock}
              onChange={(e) => setCounInStock(e.target.value)}
              className="outline-none rounded-lg text-center"
            />
          </div>
          <button className="bg-primary text-gray-100 p-2 rounded-lg">
            ثبت تغییرات
          </button>
          <p
            className={`${
              message ? 'block' : 'hidden'
            } text-center bg-green-500 text-gray-50 p-2 rounded-lg`}
          >
            {message}
          </p>
        </form>
      </div>
    </main>
  );
}
export default EditProduct;
