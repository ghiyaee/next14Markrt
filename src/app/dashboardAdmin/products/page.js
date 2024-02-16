'use client';
import DashbordAdmin from '@/components/layout/DashbordAdmin';
import {
  handleAllProducts,
  hamdelDeleteProduct,
} from '@/controller/products/ShowProducts';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
function ProductsPage() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetachData = async () => {
      try {
        const { products } = await handleAllProducts();
        setProducts(products);
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
        <h2 className="py-2">لیست محصولات</h2>
        {products?.map((product) => (
          <div
            key={product._id}
            className="flex 
           border-blue-500 w-[60rem] items-center 
           hover:shadow-[0_25px_25px_-24px_rgb(0,0,0,0.7)]
           hover:border-x-2 
            p-2 justify-between m-0"
          >
            <div className="flex items-center gap-6 flex-1">
              <div className=" relative w-10 h-10">
                <Image
                  src={product.img[0]}
                  alt={'image'}
                  fill
                  objectFit="contain"
                />
              </div>
              <p className="w-44">نام محصول : {product.name}</p>
              <p className="w-42">قیمت: {product.price}</p>
              <p>تعداد : {product.countInStock}</p>
            </div>
            <div className="flex gap-4">
              <Link
                href={{
                  pathname: `/dashboardAdmin/products/editProduct`,
                  query: { value: product._id },
                }}
                className="p-1  rounded-lg bg-green-500 text-gray-50"
              >
                ویرایش
              </Link>
              <button
                onClick={async (e) => {
                  e.preventDefault();
                  const { products } = await hamdelDeleteProduct(product._id);
                  setProducts(products);
                }}
                className="px-4 rounded-lg py-1 bg-primary text-gray-50"
              >
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
