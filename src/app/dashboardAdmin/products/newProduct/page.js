'use client';
import Image from 'next/image';
import DashbordAdmin from '@/components/layout/DashbordAdmin';
import { useState } from 'react';
import { handelNewProduct } from '@/components/layout/ShowProducts';
import { useRouter } from 'next/navigation';
function NewProduct() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [slug, setSlug] = useState('');
  const [model, setModel] = useState('');
  const [img, setImg] = useState('');
  const [price, setPrice] = useState('');
  const [brand, setBrand] = useState('');
  const [rating, setRating] = useState('');
  const [description, setDescription] = useState('');
  const [countInStock, setCountInStock] = useState('');
  const [message, setMessage] = useState('');
  const handelUpLoadImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setImg(reader.result);
    };
    reader.readAsDataURL(file);
  };
  return (
    <main className="flex gap-0 container m-auto">
      <DashbordAdmin />
      <div
        className="w-screen flex flex-col gap-2 items-center
       bg-gradient-to-tr from-yellow-300 to-transparent"
      >
        <h2 className="p-2">درج محصول جدید</h2>
        <form
          className="flex flex-col gap-2 p-6 shadow-[0_25px_55px_-24px_rgb(0,0,0,0.7)]"
          onSubmit={async (e) => {
            e.preventDefault();
            const { msg } = await handelNewProduct({
              name,
              price,
              model,
              brand,
              slug,
              rating,
              description,
              countInStock,
              img,
            });
            setMessage(msg);
            setTimeout(() => {
              router.push('/dashboardAdmin/products');
            }, 2000);
          }}
        >
          <input
            value={name}
            className="outline-none"
            placeholder="نام مدل"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            value={slug}
            className="outline-none"
            placeholder="نام شناسه"
            onChange={(e) => setSlug(e.target.value)}
          />
          <input
            type="text"
            value={brand}
            className="outline-none"
            placeholder="برند"
            onChange={(e) => setBrand(e.target.value)}
          />
          <input
            type="text"
            value={price}
            className="outline-none"
            placeholder="قیمت"
            onChange={(e) => setPrice(e.target.value)}
          />
          <input
            type="text"
            value={countInStock}
            className="outline-none"
            placeholder="تعداد"
            onChange={(e) => setCountInStock(e.target.value)}
          />
          <input
            type="text"
            value={model}
            className="outline-none"
            placeholder="سال ساخت"
            onChange={(e) => setModel(e.target.value)}
          />
          <input
            type="text"
            value={rating}
            className="outline-none"
            placeholder="امتیاز"
            onChange={(e) => setRating(e.target.value)}
          />
          <input
            type="text"
            value={description}
            className="outline-none"
            placeholder="توضیحات"
            onChange={(e) => setDescription(e.target.value)}
          />
          <div className="flex justify-center items-center">
            <input
              type="file"
              accept="png,jpg"
              className="outline-none "
              onChange={handelUpLoadImage}
              placeholder="انتخاب فایل"
            />
            {img ? <Image alt="image" src={img} width={100} height={10} /> : ''}
          </div>
          <button className="bg-primary text-gray-50 p-2">ثبت محصول</button>
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

export default NewProduct;
