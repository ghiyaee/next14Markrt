const Product = require('@/models/products').default;
import Image from 'next/image';
import Link from 'next/link';
async function CategorySlice({ searchParams }) {
  let products;
  try {
    products = await Product.find({ brand: searchParams.value });
  } catch (error) {
    console.error('error singel product', error);
  }
  return (
    <section className="flex flex-col md:flex-row justify-center flex-wrap gap-10 mt-0">
      {products?.map((pro) => (
        <div
          key={pro._id}
          className=" flex  justify-center items-center gap-8 p-4 
          hover:scale-105 duration-700 rounded-lg 
          shadow-[0_25px_25px_-24px_rgb(0,0,0,0.7)] "
        >
          <Image
            width={100}
            height={100}
            alt="mobile"
            src={pro.img[0]}
            priority={false}
          />
          <div className="text-gray-500">
            <p> برند: {pro.name}</p>
            <p>سال ساخت :{pro.model}</p>
            <p>قیمت :{pro.price}</p>
            <p>کیفیت :{pro.description}</p>
            <Link href={`/product/${pro.slug}`}>
              <button className="bg-primary text-white px-6 py-1 rounded-full">
                بیشتر...
              </button>
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
}

export default CategorySlice;
