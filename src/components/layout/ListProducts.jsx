import React from 'react';
import Image from 'next/image';
import dbConnect from '@/dbConnect';
import Product from '@/models/Products';
import Link from 'next/link';
import data from '../../../data';
async function ListProducts() {
  await dbConnect();
  await Product.deleteMany({})
  await Product.insertMany(data. products)
  const products = await Product.find();
  return (
    <section className="flex  md:flex-row justify-center flex-wrap gap-10 mt-0">
      {products?.map((pro) => (
        <div
          key={pro.id}
          className=" flex flex-col justify-between items-center gap-8 p-12 
        hover:scale-105 duration-700 rounded-lg 
        shadow-[0_25px_25px_-24px_rgb(0,0,0,0.7)] "
        >
          <Image
            width={200}
            height={100}
            alt="mobile"
            src={pro.img}
            priority={true}
            className="flex-auto"
          />
          <div className="text-gray-500 flex-1 ">
            <p> برند: {pro.name}</p>
            <p>سال ساخت :{pro.model}</p>
            <p>قیمت :{pro.price}</p>
            <p>کیفیت :{pro.description}</p>
            <Link href={`/product/${pro.slug}`}>
              <button className="bg-primary text-white px-6 py-1 mt-2 rounded-full">
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
