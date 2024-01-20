'use client';
import DashbordAdmin from '@/components/layout/DashbordAdmin';
import Product from '@/models/products';
import { useEffect, useState } from 'react';

function EditProduct({ searchParams }) {
    console.log(searchParams.value);
  const [product, setProduct] = useState();
  useEffect(() => {
    const fetachData = async () => {
      try {
          const resulte = await Product.findOne({ _id: searchParams.value });
          console.log(resulte);
          setProduct(resulte)
      } catch (error) {
        console.log(error);
      }
    };
    fetachData();
  }, []);
  return (
    <main className="flex gap-0 container m-auto">
      <DashbordAdmin />
      <div
        className="w-screen flex flex-col  items-center
       bg-gradient-to-tr from-yellow-300 to-transparent"
      >
        <h2 className="py-2">ویرایش محصول</h2>
        <input type="text" value={product?.price} onChange={(e) => e.target.value} />
        <p> {product?.price}</p>
      </div>
    </main>
  );
}
export default EditProduct;
