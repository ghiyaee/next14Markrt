import React from 'react';
import Image from 'next/image';
import data from '../../../data';
const dbConnect = require('@/dbConnect');
import {handleAllProducts} from '@/controller/products/ShowProducts'
import Link from 'next/link';
async function ListProducts() {
  // await Product.deleteMany({})
  // await Product.insertMany(data.products)
  // await Comment.deleteMany({});
  // await InfoBank.deleteMany({})
  // await InfoBank.insertMany(data.infoBank)
  try {
    await dbConnect();
  } catch (error) {
    console.log(error);
  }
  let { products } = await handleAllProducts()
  return (
    <section
      className="flex  md:flex-row 
    justify-center  flex-wrap gap-[50px] mt-0"
    >
      {products?.map((pro) => (
        <div
          key={pro._id}
          className=" flex flex-col justify-between items-center gap-5 p-12 
        hover:scale-105 duration-700 hover:bg-gradient-to-br   rounded-lg 
        shadow-[0_25px_25px_-24px_rgb(0,0,0,0.7)] "
        >
          <Image
            width={100}
            height={100}
            alt="mobile"
            src={pro.img[0]}
            priority={false}
          />
          <div className=" ">
            <p> برند: {pro.name}</p>
            <p>سال ساخت :{pro.model}</p>
            <p>قیمت :{pro.price}</p>
            <p>کیفیت :{pro.description}</p>
            <Link href={`/product/${pro.slug}`}>
              <button className="bg-primary  text-white px-6 py-1 mt-2 rounded-full w-full ">
                بیشتر...
              </button>
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
}

export default ListProducts;
