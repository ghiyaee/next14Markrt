'use client';
import DashbordAdmin from '@/components/layout/DashbordAdmin';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import {
  handelProduct,
  handelEditProduct,
} from '@/components/layout/ShowProducts';
import product from '@/app/product/[id]/page';
function EditProduct({ searchParams }) {
  const router = useRouter();
  const [countInStock, setCounInStock] = useState('');
  const [price, setPrice] = useState('');
  const [id, setId] = useState('');
  const [img, setImg] = useState([]);
  const [message, setMessage] = useState('');
  const [model, setModel] = useState('');
   const [name, setName] = useState('');
  console.log(img);
  useEffect(() => {
    const fetachData = async () => {
      try {
        const { product } = await handelProduct(searchParams.value);
        console.log(product);
        setCounInStock(product.countInStock);
        setPrice(product.price);
        setId(product._id);
        setImg(product.img);
        setModel(product.model);
        setName(product.name)
      } catch (error) {
        console.log(error);
      }
    };
    fetachData();
  }, [searchParams.value]);
  return (
    <main className="flex gap-0 container m-auto ">
      <DashbordAdmin />
      <div
        className="w-screen flex flex-col gap-2 items-center
       bg-gradient-to-tr from-yellow-300 to-transparent"
      >
        <h2 className="py-2">ویرایش محصول</h2>
        <div className="relative w-20 h-20 ">
          <Image src={img[0]} alt="imag" fill objectFit="contain" />
        </div>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const { msg } = await handelEditProduct({
              price,
              countInStock,
              id,
              model,
              name
            });
            setMessage(msg);
            setTimeout(() => {
              router.push('/dashboardAdmin/products');
            }, 2000);
          }}
          className="w-[300px] flex flex-col justify-between gap-2 mt-5 shadow-[0_25px_55px_-24px_rgb(0,0,0,0.7)] py-4 px-10  "
        >
          <div className="flex w-40 gap-5 justify-between items-center">
            <label>مدل</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="outline-none rounded-md text-center input"
            />
          </div>
          <div className="flex w-40 gap-5 justify-between items-center">
            <label>قیمت </label>
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="outline-none rounded-md text-center input"
            />
          </div>
          <div className="flex w-40 gap-5 justify-between items-center">
            <label className="w-10">تعداد </label>
            <input
              type="number"
              value={countInStock}
              onChange={(e) => setCounInStock(e.target.value)}
              className="outline-none rounded-md text-center input"
            />
          </div>
          <div className="flex w-40  gap-5 justify-between items-center">
            <label className="h-10">سال ساخت</label>
            <input
              type="text"
              value={model}
              onChange={(e) => setModel(e.target.value)}
              className="outline-none rounded-md   text-center input "
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
