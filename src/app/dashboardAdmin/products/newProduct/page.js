'use client';
import DashbordAdmin from '@/components/layout/DashbordAdmin';
import { useState } from 'react';
import { handelNewProduct } from '@/components/layout/ShowProducts';
function NewProduct() {
  const [name, setName] = useState();
  const [slug, setSlug] = useState();
  const [model, setModel] = useState();
  const [img, setImg] = useState();
  const [price, setPrice] = useState();
  const [brand, setBrand] = useState();
  const [rating, setRating] = useState();
  const [description, setDescription] = useState();
  const [countInStock, setCountInStock] = useState();
  const [message,setMessage]=useState()
  return (
    <main className="flex gap-0 container m-auto">
      <DashbordAdmin />
      <div
        className="w-screen flex flex-col gap-2 items-center
       bg-gradient-to-tr from-yellow-300 to-transparent"
      >
        <h2 className="p-2">درج محصول جدید</h2>
        <form
          className="flex flex-col gap-4"
          onSubmit={async (e) => {
            e.preventDefault();
            const {msg} = await handelNewProduct(
              name,
              price,
              model,
              brand,
              slug,
              rating,
              description,
              countInStock,
              img
            );
            setMessage(msg)
          }}
        >
          <input
            className="outline-none"
            placeholder="نام مدل"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="outline-none"
            placeholder="نام شناسه"
            onChange={(e) => setSlug(e.target.value)}
          />
          <input
            className="outline-none"
            placeholder="برند"
            onChange={(e) => setBrand(e.target.value)}
          />
          <input
            className="outline-none"
            placeholder="قیمت"
            onChange={(e) => setPrice(e.target.value)}
          />
          <input
            className="outline-none"
            placeholder="تعداد"
            onChange={(e) => setCountInStock(e.target.value)}
          />
          <input
            className="outline-none"
            placeholder="سال ساخت"
            onChange={(e) => setModel(e.target.value)}
          />
          <input
            className="outline-none"
            placeholder="امتیاز"
            onChange={(e) => setRating(e.target.value)}
          />
          <input
            className="outline-none"
            placeholder="توضیحات"
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            className="outline-none"
            placeholder="عکس"
            onChange={(e) => setImg(e.target.value)}
          />
          <button className="bg-primary text-gray-50 p-2">ثبت محصول</button>
          <p>{message }</p>
        </form>
      </div>
    </main>
  );
}

export default NewProduct;
