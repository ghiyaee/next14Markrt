'use client';
import DashbordAdmin from '@/components/layout/DashbordAdmin';
import { handelAllProducts } from '@/components/layout/ShowProducts';
import { useEffect, useState } from 'react';
import Image from 'next/image';
function ProductsPage() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetachData = async () => {
      try {
        const { products } = await handelAllProducts();
        console.log(products);
        setProducts(products);
      } catch (error) {
        console.log(error);
      }
    };
    fetachData();
  }, []);
  return (
    <main className="flex gap-2 container m-auto">
      <DashbordAdmin />
      <div
        className="w-screen flex flex-col  items-center
       bg-gradient-to-tr from-yellow-300 to-transparent"
      >
        <h2 className='py-2'>ویرایش محصولات</h2>
        {products.map((pro) => (
          <div
            key={pro._id}
            className="flex border-2 rounded-lg
           border-blue-500 w-[60rem] items-center p-2 justify-between m-4"
          >
            <div className="flex items-center gap-8 flex-1">
              <Image src={pro.img[0]} alt={'image'} width={50} height={50} />
              <p className="w-44">نام محصول : {pro.name}</p>
              <p className="w-42">قیمت: {pro.price}</p>
              <p>تعداد : {pro.countInStock}</p>
            </div>
            <div className="flex gap-4">
              <button className="p-1  rounded-lg bg-green-500 text-gray-50">
                ویرایش
              </button>
              <button className="px-4 rounded-lg py-1 bg-primary text-gray-50">
                حذف
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default ProductsPage;
